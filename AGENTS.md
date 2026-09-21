# excs-website

Exeter Computer Science Society's site. A Next.js app published to **GitHub
Pages** by `.github/workflows/nextjs.yml` on every push to `main`. Repo:
`github.com/Exeter-Computer-Science-Society/excs-website`.

## Shipping — what a session may do without asking

Standing authorization. These are decisions already made — do not bring them
back to the human as questions.

| a session may | without asking |
|---|---|
| commit on a `feature/*` branch | yes |
| `git push origin feature/<name>` | yes — a branch that exists only on this laptop is not backed up |
| merge into `main` and `git push origin main` | yes |
| deploy that to production | yes — **the push to `main` *is* the deploy**; the Pages workflow builds and publishes it |

**This repo is `main`-only.** There is no `develop` branch and no staging
environment — a feature branch merges straight to `main`. Do not create
`develop` to make it match the app projects in this folder.

⚠️ **This is a society organisation repo, not a personal one.** A push to `main`
publishes a live site the society owns and answers for, and other members push
to it too — `git fetch` before assuming your view of `main` is current. The
standing authorization covers shipping *the change you were asked to make*; it
does not make this repo a scratchpad. Confirm `gh auth status` grants push to
the `Exeter-Computer-Science-Society` org before promising a deploy — the local
`gh` is authenticated as `inspizzz`, and org membership decides this, not the
token scopes.

**Ask the human first — these sit outside the standing authorization:**

- **A deploy that is not the change you just made.**
- **Rewriting shared history** — `push --force` or `--force-with-lease` to
  `main`, `git reset --hard` on it, deleting a remote branch other members may
  hold.
- **The build secret.** The workflow injects `REACT_APP_MAP_API_KEY` from repo
  secrets and sets `CI: false` (so warnings do not fail the build). Do not
  change either, or add a secret, without asking.
- **DNS or the Pages custom-domain setting.**

**Instructions and tool permissions are separate.** These project rules apply
to both agents. `.claude/settings.json`, where present, configures Claude Code
only; it does not configure Codex. Codex uses its effective user configuration
and any trusted project `.codex/` configuration and rules. Check the active
agent's permissions when a command is refused; do not infer a grant from the
other agent's settings or invent a settings file.

## Watching a deploy

```bash
gh run list --limit 5
gh run watch          # blocks until the Pages publish finishes
```

Pages serves the *previous* build until the new one publishes, so a green push
with an unchanged site usually means the workflow is still running.

## Maintaining agent context

Development base: `main`.

`AGENTS.md` and `CLAUDE.md` are tracked, byte-identical entry points for Codex
and Claude Code. Edit either, then copy it to the other. Keep each below 28 KiB;
put detailed reference material in linked files. Fresh clones must have all
required public context without machine-specific notes or credentials.

Run `python3 scripts/check_agent_context.py` before finishing instruction or
configuration changes; the same check runs in `.github/workflows/agent-context.yml`.
`.agent-context.json` records the development base and required reference files.
If this project has Codex command rules, also run the checker with `--check-rules`.

Codex can create an isolated checkout with `git worktree add`; Claude Code may
also expose `EnterWorktree`. Use the development base above and preserve other
sessions' work. Gitignored credentials and dependencies are absent in fresh
worktrees. A parent folder's guide is not a substitute for this repo's own guide.
