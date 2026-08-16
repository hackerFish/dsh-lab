# Write & publish your first DSH plugin

> Verified against DSH `0.1.0-rc.6`. The official docs are still young — this guide only describes structures we verified from the official packages; treat the installed `@deepseek-ai/dsh-*` packages as the real reference.

## 1. A plugin = an npm package + one patch layer

```jsonc
// package.json (field shapes taken from the official @deepseek-ai/dsh-base manifest)
{
  "name": "my-dsh-plugin",
  "version": "0.1.0",
  "main": "lib/index.js",
  "dsh": { "bundle": { "patch": "./cordis.patch.yml" } }
}
```

`cordis.patch.yml` inserts rows into the profile's layer stack:

```yaml
- insert:
    - id: my-plugin-host
      name: 'my-dsh-plugin'
      config: {}
```

Rules that matter (from the official base manifest comments):

- Rows are addressed by `id`; later layers replace earlier ones; **a replace swaps the whole `config`, never merges**.
- Row order carries no load semantics (activation is service-driven); group for humans.

## 2. Host vs client halves

- **host**: runs in the DSH Node process — files, network, commands, session, tools.
- **client**: runs in the browser Web UI — themes, panels, page-state UI.

Start host-only: it is far easier to debug without a UI build.

## 3. The dev loop that works

```bash
dsh plugin --profile web add /path/to/my-dsh-plugin --ignore-workspace-root-check
dsh --profile web --dump-config          # confirm your rows appear
```

- Test in an isolated `DSH_HOME`, not your real one.
- A clean install must succeed; re-add after each change.
- Smoke: `dsh --profile headless "minimal task"` (needs model credentials).

## 4. Ship it so the ecosystem finds it

1. `npm publish` — ensure `files` includes `cordis.patch.yml` and built artifacts (ship `lib/` like the official packages).
2. Tag the GitHub repo with the **`dsh-plugin`** topic.
3. State the DSH version you developed/tested against — rc APIs move.
4. Submit a one-line PR to the community directory (write your own description).

## 5. Quality bar (avoid "installed but nothing happened")

- Self-test the install gate in a clean `DSH_HOME`.
- Keep `postinstall`/`prepare` scripts minimal or absent (allowBuilds friction for users).
- Keep dependencies lean (large trees time out on some networks).
- **Make "verifiable" your shipping standard, not "it compiles".**
