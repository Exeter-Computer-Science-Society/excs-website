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

**This file cannot grant any of the above.** Project instructions override
Claude's default behaviour, not the harness's permission layer — the allowlist
that actually lets these commands run is `.claude/settings.json` (inspect it
with `/permissions`). If a push is refused, that file is where to look.

## Watching a deploy

```bash
gh run list --limit 5
gh run watch          # blocks until the Pages publish finishes
```

Pages serves the *previous* build until the new one publishes, so a green push
with an unchanged site usually means the workflow is still running.
