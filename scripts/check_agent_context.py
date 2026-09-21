#!/usr/bin/env python3
"""Validate portable agent context without loading credentials or running hooks.

Requires Python 3.11+. Keep the template and estate copies in sync.
Run --check-rules locally to also check declared commands with Codex execpolicy.
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
import tomllib
from pathlib import Path
from urllib.parse import unquote, urlsplit

VERSION = 1
MAX_BYTES = 28 * 1024  # Leave room below Codex's default 32 KiB budget.


def check(root: Path, check_rules: bool = False) -> list[str]:
    errors: list[str] = []
    root = root.resolve()
    try:
        manifest = json.loads((root / ".agent-context.json").read_text())
        if manifest.get("version") != VERSION:
            errors.append(".agent-context.json: unsupported version")
    except (OSError, ValueError) as exc:
        return [f".agent-context.json: {exc}"]

    tracked_result = subprocess.run(
        ["git", "-C", str(root), "ls-files", "-z"], capture_output=True, text=True
    )
    if tracked_result.returncode:
        return ["Not a Git checkout; cannot verify that instructions travel with the repo"]
    tracked = set(tracked_result.stdout.split("\0"))
    required = {
        "AGENTS.md", "CLAUDE.md", ".agent-context.json",
        "scripts/check_agent_context.py", ".github/workflows/agent-context.yml",
        *manifest.get("required_files", []),
    }
    optional = set(manifest.get("optional_private_paths", []))
    docs: dict[str, str] = {}
    for name in ("AGENTS.md", "CLAUDE.md"):
        path = root / name
        if not path.is_file():
            continue
        raw = path.read_bytes()
        if not raw.strip():
            errors.append(f"{name}: empty instructions")
        if len(raw) > MAX_BYTES:
            errors.append(f"{name}: {len(raw)} bytes exceeds the {MAX_BYTES}-byte budget")
        try:
            docs[name] = raw.decode("utf-8")
        except UnicodeDecodeError:
            errors.append(f"{name}: must be UTF-8")
    if len(docs) == 2 and docs["AGENTS.md"] != docs["CLAUDE.md"]:
        errors.append("AGENTS.md and CLAUDE.md differ; edit one and copy it to the other")

    text = docs.get("AGENTS.md", "")
    base = manifest.get("development_base")
    if not isinstance(base, str) or not base:
        errors.append(".agent-context.json: development_base is required")
    elif f"Development base: `{base}`." not in text:
        errors.append(f"AGENTS.md: must state Development base: `{base}`.")
    if ".Codex/" in text:
        errors.append("AGENTS.md: invalid .Codex/ path; use actual agent-specific paths")
    if not manifest.get("is_template", False):
        for pattern in (r"^#\s*<App name>", r"Live at[^\n]*example\.com", r"Nothing is built yet"):
            if re.search(pattern, text, re.MULTILINE | re.IGNORECASE):
                errors.append(f"AGENTS.md: unresolved scaffold text matching {pattern!r}")
    if "@AGENTS.md" in docs.get("CLAUDE.md", ""):
        errors.append("CLAUDE.md: do not import AGENTS.md when both are mirrored documents")

    # Check explicit Markdown links, not code snippets whose cwd can differ.
    # Private machine notes must be explicitly optional in the manifest.
    for target in re.findall(r"\]\(([^)]+)\)", text):
        target = target.strip()
        if target.startswith("<"):
            target = target[1:target.index(">")]
        target = target.split(' "', 1)[0]
        url = urlsplit(target)
        if url.scheme or url.netloc or not url.path:
            continue
        relative = unquote(url.path)
        if relative in optional:
            continue
        resolved = (root / relative).resolve()
        if not resolved.is_relative_to(root):
            errors.append(f"AGENTS.md: required link leaves the repository: {relative}")
        elif resolved.is_dir():
            if not any(p.startswith(relative.rstrip("/") + "/") for p in tracked):
                errors.append(f"AGENTS.md: linked directory has no tracked files: {relative}")
        else:
            required.add(resolved.relative_to(root).as_posix())

    for name in sorted(required):
        path = root / name
        if not path.resolve().is_relative_to(root):
            errors.append(f"Required path leaves the repository: {name}")
        elif not path.is_file():
            errors.append(f"Required file is missing: {name}")
        elif name not in tracked:
            errors.append(f"Required file is untracked: {name}")

    for name in sorted(tracked):
        if not name.startswith((".codex/agents/", ".agents/skills/", ".claude/agents/", ".claude/skills/")):
            continue
        path = root / name
        if path.suffix not in (".md", ".toml") or not path.is_file():
            continue
        body = path.read_text()
        if ".Codex/" in body:
            errors.append(f"{name}: invalid .Codex/ reference")
        if path.suffix == ".toml":
            try:
                tomllib.loads(body)
            except ValueError:
                errors.append(f"{name}: invalid TOML")

    configs: dict[str, dict] = {}
    for name in (".codex/config.toml", ".codex/hooks.json", ".claude/settings.json"):
        path = root / name
        if not path.exists():
            continue
        try:
            configs[name] = tomllib.loads(path.read_text()) if name.endswith(".toml") else json.loads(path.read_text())
        except (OSError, ValueError) as exc:
            errors.append(f"{name}: invalid configuration: {exc}")
    toml_hooks = configs.get(".codex/config.toml", {}).get("hooks", {})
    json_hooks = configs.get(".codex/hooks.json", {}).get("hooks", {})
    overlap = set(toml_hooks) & set(json_hooks)
    if overlap:
        errors.append("Duplicate Codex hook sources for " + ", ".join(sorted(overlap)))
    for name, config in configs.items():
        if name.startswith(".codex/") and "$CLAUDE_PROJECT_DIR" in json.dumps(config.get("hooks", {})):
            errors.append(f"{name}: Codex hooks must resolve the Git root, not $CLAUDE_PROJECT_DIR")
    hook = root / "scripts/hooks/session-start.sh"
    if hook.exists():
        result = subprocess.run(["bash", "-n", str(hook)], capture_output=True, text=True)
        if result.returncode:
            errors.append("scripts/hooks/session-start.sh: shell syntax error")
        if not hook.stat().st_mode & 0o111:
            errors.append("scripts/hooks/session-start.sh: must be executable")

    if check_rules and manifest.get("rule_checks"):
        codex = shutil.which("codex")
        if not codex:
            errors.append("--check-rules requires Codex on PATH")
        else:
            for case in manifest["rule_checks"]:
                # execpolicy only matches tokens; it never executes the command.
                result = subprocess.run(
                    [codex, "execpolicy", "check", "--rules", str(root / case["file"]), "--", *case["command"]],
                    cwd=root, capture_output=True, text=True,
                )
                try:
                    actual = json.loads(result.stdout).get("decision") if result.returncode == 0 else None
                except ValueError:
                    actual = None
                if actual != case["decision"]:
                    errors.append(f"Rule mismatch for {case['command']!r}: expected {case['decision']}, got {actual}")
    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--check-rules", action="store_true")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()
    errors = check(args.root, args.check_rules)
    if args.json:
        print(json.dumps({"root": str(args.root.resolve()), "ok": not errors, "errors": errors}))
    elif errors:
        for error in errors:
            print(f"FAIL: {error}", file=sys.stderr)
    else:
        size = (args.root / "AGENTS.md").stat().st_size
        print(f"Agent context OK: mirrored, tracked, {size}/{MAX_BYTES} bytes; references and configuration valid")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
