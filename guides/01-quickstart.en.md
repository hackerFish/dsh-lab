# DSH in 5 minutes

> Written against DSH `0.1.0-rc.6`, verified 2026-08. DSH moves fast — when commands drift, trust `dsh --help` and official docs.

## 1. What DSH is

DeepSeek Harness (`dsh`) is DeepSeek's open-source agent framework. Its core design: **everything is a plugin** — models, tools, sandboxes, session storage, the Web UI, even the agent loop. What you run as `dsh web` is a profile (a composition of plugins) plus your patch layers.

## 2. Install

```bash
npm install -g @deepseek-ai/dsh
```

## 3. Three entry modes

| Command | Purpose |
|---|---|
| `dsh web` | Web UI (alias of `dsh --profile web`) |
| `dsh --profile headless "task"` | One headless session, prints the final answer, exits |
| `dsh plugin --profile web add <pkg>` | Install a plugin into a profile (forwards to pnpm) |

The directory you launch from becomes the default workspace.

## 4. DSH_HOME and profiles

Everything lives under `DSH_HOME` (default `~/.dsh`). Each profile is a directory with:

- `package.json` — `dsh.profile.bundles` lists the bundles composing it; `dependencies` lists installed plugins.
- `cordis.patch.yml` — **your personal patch layer** that can override any plugin row's config.

Layer order (later wins): `bundles → profile cordis.patch.yml → ~/.dsh/cordis.patch.yml → --patch`.

Inspect the composed config without booting:

```bash
dsh --profile web --dump-config
```

## 5. Install your first plugin

```bash
dsh plugin --profile web add dsh-global-rules          # npm package
dsh plugin --profile web add github:owner/repo          # GitHub repo
dsh plugin --profile web add /local/path                # local dir (dev)
```

### Friction 1 (verified): pnpm 9 workspace-root check

On pnpm 9, `dsh plugin add` fails with `ERR_PNPM_ADDING_TO_ROOT`. This is pnpm, not the plugin. Fix either way:

```bash
dsh plugin --profile web add <pkg> --ignore-workspace-root-check
# or: export npm_config_ignore_workspace_root_check=true
```

### Friction 2 (verified): China network

- Large dependency trees time out against `registry.npmjs.org`; use a mirror:

```bash
export npm_config_registry=https://registry.npmmirror.com
```

## 6. The security baseline that matters

**Installing a plugin runs third-party code with your permissions.** Tool approvals do not sandbox plugin code. Read the entry files and install scripts before installing; try unknowns in an isolated `DSH_HOME` first (see [METHODOLOGY](../docs/METHODOLOGY.md)).

## Next

- Write your own plugin: [02-first-plugin.en.md](02-first-plugin.en.md)
- Pitfalls: [03-pitfalls.en.md](03-pitfalls.en.md)
- Which plugins actually install cleanly: [tested reports](../lab/INDEX.md)
