# Pitfalls before you install plugins

> Every "verified friction" below was reproduced in dsh-lab's isolated environment against DSH `0.1.0-rc.6` (2026-08). Each comes with a fix.

## 1. The deepest rule: installing = running third-party code

Community directories warn in their own headers: installed plugins run with **your** permissions — files, credentials, network — and tool approvals don't sandbox plugin code. Listing ≠ security review.

Before installing: read the entry files and manifest, check for `postinstall`/`prepare` scripts, and try unknowns in an isolated `DSH_HOME`.

## 2. Friction A (verified): pnpm 9 blocks `dsh plugin add`

`ERR_PNPM_ADDING_TO_ROOT`. Fix: append `--ignore-workspace-root-check`, or export `npm_config_ignore_workspace_root_check=true`. When people complain "plugin X won't install", check this first — it usually isn't the plugin.

## 3. Friction B (verified): git-protocol interception

`dsh plugin add github:owner/repo` can fail with `git+ssh` (no SSH creds) or `SSL: no alternative certificate subject name matches...` on intercepted networks. Workaround: `git clone` with network-appropriate settings, then install the local directory — a supported path.

## 4. Friction C (verified): registry timeouts on large dependency trees

`ERR_SOCKET_TIMEOUT` against `registry.npmjs.org`. Fix: `npm_config_registry=https://registry.npmmirror.com`.

## 5. Friction D (verified): prepare scripts need allowBuilds

Git/tarball installs get blocked until you add the exact key pnpm prints to the profile's `pnpm-workspace.yaml` under `allowBuilds`. This is pnpm's security design — re-read rule 1 before allowing it.

## 6. Version drift

DSH ships rc releases constantly; UI plugins break first. Keep a `--dump-config` baseline, back up your profile before upgrades, and remove the last-installed plugin first when things break.

## 7. Same-category choice: 30 balance panels, which one?

Stars don't measure installability. Prefer reports with test dates and matching DSH versions ([dsh-lab](../lab/INDEX.md)); otherwise self-check per rule 1.

## 8. Rescue sequence (bookmark this)

1. `dsh --profile web --dump-config` → is the plugin layer present?
2. Startup logs → which plugin is named?
3. Remove the suspect plugin → restart → recovered?
4. Still broken → official GitHub Discussions, with DSH version, plugin list, logs.
