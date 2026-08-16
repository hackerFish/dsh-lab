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

## Coverage (10 reports, 2026-08-16, DSH 0.1.0-rc.6)

All ten tested plugins installed successfully and shipped purpose-consistent code: `dsh-global-rules`, `dsh-mermaid`, `dsh-shortcuts`, `dsh-deeplink`, `dsh-navbar`, `dsh-spotlight`, `dsh-share`, `modlens`, `dsh-recommend`, `dsh-plugin-vetting`. See [lab/INDEX.md](lab/INDEX.md).

Also documented: 6 entries listed in community directories whose repos have vanished (installability reminder), 4 reproducible install frictions (pnpm 9 workspace-root check, git-protocol interception, registry timeouts, allowBuilds), and our own scanner false-positive corrections — kept in the record on purpose.

## Guides (bilingual)

- Quickstart: [中文](guides/01-quickstart.md) · [EN](guides/01-quickstart.en.md)
- Write your first plugin: [中文](guides/02-first-plugin.md) · [EN](guides/02-first-plugin.en.md)
- Pitfalls: [中文](guides/03-pitfalls.md) · [EN](guides/03-pitfalls.en.md)

## Roadmap

Phase 1 tested curation → Phase 2 plugin×DSH compatibility matrix (CI) → Phase 3 same-category plugin arena. See [docs/ROADMAP.md](docs/ROADMAP.md).

## Sibling repos

- [awesome-dsh-skills](https://github.com/hackerFish/awesome-dsh-skills) — tested skills (SKILL.md)
- [awesome-dsh-presets](https://github.com/hackerFish/awesome-dsh-presets) — tested presets & rules
- [dsh-video-studio](https://github.com/hackerFish/dsh-video-studio) — AI video/motion-comic plugin (Whale)

## Disclaimer

Reports are point-in-time snapshots. Static scan ≠ security endorsement: no hit ≠ harmless, hit ≠ malicious. Not affiliated with DeepSeek.

## License

[MIT](LICENSE)
