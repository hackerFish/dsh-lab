# Roadmap

## Phase 1 · Tested curation & tutorials (weeks 1–2)

**What we'll do**: Complete the first batch of plugin hands-on testing per the [four-gate testing method](METHODOLOGY.md); publish three original Chinese guides; finalize the report format and toolchain.

**Why now**: The ecosystem has 800+ plugins, listing ≠ endorsement, and no hands-on testing data. Become the first editor that publishes only test conclusions, and establish the standard.

**Acceptance criteria**:
- [x] 36 hands-on testing reports (26 passed + 10 failed documented; categories: UI / tools / sessions / memory / billing / data)
- [x] Three bilingual guides: getting started / writing a plugin / avoiding pitfalls + FAQ
- [x] `tools/scan.mjs` quick-scan tool open-sourced and reproducible
- [x] Listed by a third-party directory ([awesome-dsh-plugin](https://github.com/beancookie/awesome-dsh-plugin))
- [ ] Cited by at least one third-party directory or article

## Phase 2 · Compatibility matrix (weeks 3–4)

**What we'll do**: Every time DSH ships a new version, CI automatically re-runs the "install + smoke" two gates against all tested plugins and produces a public matrix:

```
Plugin \ DSH version  rc.6   rc.7   rc.8   ...
dsh-global-rules      ✅     ⏳     ⏳
dsh-mermaid           ✅     ⏳     ⏳
```

**Why it's forward-looking**: DSH's mainline rc releases update frequently, and 839 plugins are about to enter a "drift period" where they break en masse. Nobody builds this matrix today; when the drift period arrives, this repository will be the only authoritative data source — the official project, plugin authors, and users will all cite it. This is also a step up from a "content repository" to "infrastructure".

**Acceptance criteria**:
- [ ] Daily automated re-testing via GitHub Actions + a matrix page
- [ ] Covers the top 50 high-star plugins
- [ ] Compatibility status badges that plugin authors can put in their READMEs

## Phase 3 · Same-category plugin arena (from week 5)

**What we'll do**: Pit same-category plugins against each other (e.g. 30 balance display panels, 15 session navigators) using the same set of real headless tasks, and publish a match report: whose data is accurate, which ones don't crash, which ones are compatible.

**Why it's forward-looking**: Plugin homogenization is out of control (30 implementations of the same feature). What users need is not the 31st recommendation list, but "who actually wins". Once the arena methodology matures, it can cover the entire ecosystem and become the default adjudication standard.

**Acceptance criteria**:
- [ ] The first match report (at least one category, 5 contestants)
- [ ] The contest task set, scoring criteria, and raw logs all made public
- [ ] The match report cited or acted upon by at least one plugin author

---

**Principle**: Phases may run in parallel, but the order is never reversed — without Phase 1's editorial trust, nobody reads the Phase 2/3 data; without Phase 2's infrastructure, Phase 3's conclusions can't be sustained.
