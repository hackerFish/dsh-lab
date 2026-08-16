# 🐋 dsh-lab — Tested-Only Curation for DeepSeek Harness Plugins

**Every listed plugin passed real machine tests. Full logs and reproduction commands are committed in-repo.**

> The DSH ecosystem has 1000+ community plugins, but listings disclaim endorsement, automated rankings don't install anything, and nobody answers the only question that matters: *does it actually install and what's inside the code?* dsh-lab only publishes conclusions we tested ourselves.

[中文](README.zh.md)

## Why dsh-lab

- **Curation ≠ verification**: directory inclusion is not a security review.
- **Stars ≠ installability**: popularity signals don't reflect compatibility or code behavior.
- **Version drift**: DSH ships rc releases constantly; plugins break silently.

**Our answer: four fixed gates, every entry, honest labels (✅ passed / ❌ failed with reason / ⏳ not executed with reason).**

| Gate | What we do |
|---|---|
| 1. Install | Real `dsh plugin --profile web add` in an isolated `DSH_HOME`, full logs |
| 2. Smoke | Minimal headless run (needs model credentials; honest ⏳ until then) |
| 3. Static scan | Zero-dependency scanner over the *installed* code (network/subprocess/eval/credentials) with per-hit context judgement |
| 4. Version pin | Plugin version × DSH version recorded; re-test on change |

Full protocol & reproduction: [docs/METHODOLOGY.md](docs/METHODOLOGY.md)

## Coverage (134 passed + 42 failed documented, 2026-08-16/17, DSH 0.1.0-rc.6)

**Batch 1 (2026-08-16)** — all ten tested plugins installed successfully and shipped purpose-consistent code: `dsh-global-rules`, `dsh-mermaid`, `dsh-shortcuts`, `dsh-deeplink`, `dsh-navbar`, `dsh-spotlight`, `dsh-share`, `modlens`, `dsh-recommend`, `dsh-plugin-vetting`.

**Batch 2 (2026-08-17)** — 16 more passed (`ds-api-usage`, `dsh-backup`, `dsh-custom-tool`, `dsh-deepseek-billing`, `dsh-diff-viewer`, `dsh-excel-chat`, `dsh-memory`, `dsh-message-edit`, `dsh-plugin-deepseek-balance`, `dsh-prompt-studio`, `dsh-spend`, `dsh-sticky-note`, `dsh-task-status`, `dsh-trajectory-reader`, `dsh-undo-plugin`, `dsh-web-archive`) and **10 failed with reproducible causes** (`dsh-toolkit` + 5 omdsh tools + `dsh-turn-navigator` + `dsh-wash-calendar` depend on the unpublished `@deepseek-ai/dsh-type-meta`; `dsh-tool-git`'s prepare script breaks; `dsh-focus-chat` needs node ≥24.11).

**Batch 3 (2026-08-17)** — 24 more passed (billing: `dsh-balance-meter`/`dsh-cost-meter-s`/`dsh-cost-meter-h`/`dsh-opencodego-usage`/`dsh-opencode-go-usage`; memory: `dsh-mnemon`/`dsh-memory-jesse`/`dsh-file-memory`/`dsh-knowledge`/`dsh-mneme`/`dsh-shared-memory`/`dsh-memory-meow`; themes: `dsh-skin`/`dsh-skin-switcher`/`dsh-theme-kit`/`dsh-theme-plugin`/`dsh-premium-themes`; tools: `dsh-pi-tui`/`dsh-bash-terminal`; files: `dsh-file-mentions`/`dsh-hud`/`dsh-file-mount`/`dsh-file-uploads`/`dsh-chat-import`) and **2 failed with reproducible causes** (`dsh-scholar` ships an unresolvable workspace dependency; `dsh-TUI`'s prepare `pnpm install` fails). Scanner limitation fixed: media extensions (`.mp4` etc.) added to `SKIP_EXTS` — see METHODOLOGY addendum.

**Batch 4 (2026-08-17)** — 18 more passed (collab: `dsh-cowork`/`dsh-crosstalk`/`dsh-peer-link`; tools: `dsh-docker`/`dsh-hdc-bridge`/`dsh-ponytail`; subagent: `dsh-subagent-cwd`/`dsh-subagent-tools`; context: `dsh-context`/`dsh-context-proxy`/`context-vista`; skills: `dsh-skillport`/`coding-coach`/`Code2Skill`; misc: `dsh-adhd-copilot`/`dsh-share-hellodigua`/`dsh-explain`/`dsh-plugin-writing-guard` — 6 of them zero-hit) and **8 failed with reproducible causes** (`dsh-voice`'s prepare breaks on pnpm 9; `dsh-image-search`/`dsh-video-downloader`/`dsh-figma-to-lottie`/`dsh-exam-countdown`/`dsh-repo-setup`/`dsh-deepread` depend on the unpublished `@deepseek-ai/dsh-type-meta`; `dsh-interconnect` depends on unpublished `@deepseek-ai/dsh-user-interaction` — a **second** unpublished official-scope package).

**Batch 5 (2026-08-17)** — 19 more passed (security: `dsh-premise-guard`; files: `dsh-file-claim`/`dsh-at-file`; browser: `dsh-browser`; omdsh UI: `dsh-genui`/`dsh-data-agent`/`DSH-better-sidebar`/`dsh-annotation`; TUIs: `deepseek-harness-tui`/`dsh-tianshu-tui`; search: `dsh-web-search-exa`; media: `dsh-plugin-grok2api-media-tool`; memory: `dsh-memento`/`dsh-plugin-asmemory`; misc: `dsh-message-preview`/`dsh-adb`/`noatmark-dsh-plugin`/`dsh-turn-index`/`dsh-builtin-toggles` — 6 zero-hit) and **7 failed with reproducible causes** (`dsh-kb-sieve` needs `@deepseek-ai/dsh-tools` stable range that only exists as rc — a **third** official-scope packaging issue; 4 more depend on unpublished `dsh-type-meta`; `ex-setting`'s prepare `git fetch` breaks through proxy-polluted git channel; `dsh-plugin-net-access` install timeout at ~600-dep resolution).

**Batch 6 (2026-08-17)** — 22 more passed (drag-drop ×2, Anionex suite: `dsh-computer-use`/`dsh-turn-rewind`/`dsh-vision-toolkit`, knowledge: `hkinsure`/`kb-rag`, review: `dsh-web-review`, document: `dsh-plugin-mineru`, UI/misc: `dsh-sticky-disclosure`/`dsh-galgame`/`dsh-smooth-stream`/`dsh-web-attention-badge`/`dsh-plugin-description`/`dsh-visualize`/`dsh-plugin`(PicGo)/`dsh-deep-whale`/`dsh-milestone`/`billion-context-dsh`/`dsh-prompt-stash`/`dsh-continual-evolve`/`dsh-openpencil` — 2 zero-hit) and **4 failed with reproducible causes** (`dsh-voice-input-plugin` depends on unpublished `@deepseek-ai/dsh-compact` — a **fourth** official-scope packaging issue; 3 more depend on unpublished `dsh-type-meta`).

**Batch 7 (2026-08-17, directory completion)** — 25 more passed (17 plugins: `dsh-sidechain`/`dsh-plugin-anydoc`/`dsh-plugin-registry`/`dsh-conversation-share`/`dsh-web-billing`/`dsh-side-panel`/`dsh-llm-inspector`/`dsh-reverse-skill`/`dsh-unarchive`/`dsh-remote`/`dsh-msgrail`/`dsh-path-reveal`/`dsh-ux`/`dsh-apple-mode`/`dsh-mobile-gui-agent`/`dsh-filetree`/`dsh-screen-agent` + 8 monorepo/non-plugin directory entries: `creght-skills`/`mattpocock-skills-dsh`/`notes`/`dsh-sgme`/`pack-agent`/`argo-search`/`dsh-reef`/`dshmarket` — documented as directory-structure findings) and **11 failed with reproducible causes** (2× `@deepseek-ai/dsh-compact`; 6× `dsh-type-meta` — now **26 plugins total**; 2× old-API peer ranges; 1× framework repo needing a build environment; 2× prepare incompatible with pnpm 9). Full table: [lab/INDEX.md](lab/INDEX.md).

Also documented: 7 genuinely stale directory entries (`dsh-external/*`, API+web 404 double-checked), the earlier 6-entry false alarm and its erratum (proxy pollution of the git channel), 4 reproducible install frictions (pnpm 9 workspace-root check, git-protocol interception, registry timeouts, allowBuilds), and our own scanner false-positive corrections — kept in the record on purpose.

## Guides & FAQ (bilingual)

- Quickstart: [中文](guides/01-quickstart.md) · [EN](guides/01-quickstart.en.md)
- Write your first plugin: [中文](guides/02-first-plugin.md) · [EN](guides/02-first-plugin.en.md)
- Pitfalls: [中文](guides/03-pitfalls.md) · [EN](guides/03-pitfalls.en.md)
- FAQ (plain-language answers): [docs/FAQ.md](docs/FAQ.md)

## Roadmap

Phase 1 tested curation → Phase 2 plugin×DSH compatibility matrix (CI) → Phase 3 same-category plugin arena. See [docs/ROADMAP.md](docs/ROADMAP.md).

## Sibling repos

- [awesome-dsh-skills](https://github.com/hackerFish/awesome-dsh-skills) — tested skills (SKILL.md)
- [awesome-dsh-presets](https://github.com/hackerFish/awesome-dsh-presets) — tested presets & rules
- [dsh-video-studio](https://github.com/hackerFish/dsh-video-studio) — AI video/motion-comic plugin (Whale): 7-stage pipeline, multi-account quota pool with backoff/fallback, credential vault, kling lip-sync adapter, 5-genre preset pack, 101 unit tests

## Disclaimer

Reports are point-in-time snapshots. Static scan ≠ security endorsement: no hit ≠ harmless, hit ≠ malicious. Not affiliated with DeepSeek.

## License

[MIT](LICENSE)
