# dsh-plugins-wsxwj

- **来源**: `https://codeload.github.com/wsxwj123/dsh-plugins/tar.gz/HEAD`
- **安装包名/版本**: `dsh-plugins` 0.1.0 · commit: ae7b7d5
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 109 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/wsxwj123/dsh-plugins/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-plugins-wsxwj.install.md](../logs/dsh-plugins-wsxwj.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `dsh-plugins/.devflow/BRIEF.md:30`
- `dsh-plugins/.devflow/BRIEF.md:62`
- `dsh-plugins/.devflow/BRIEF.md:76`
- `dsh-plugins/.devflow/PLAN.md:18`
- `dsh-plugins/.devflow/PLAN.md:137`
- `dsh-plugins/.devflow/PLAN.md:141`
- `dsh-plugins/README.md:91`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/BRIEF.md:8`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/BRIEF.md:30`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/BRIEF.md:35`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/BRIEF.md:78`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/BRIEF.md:79`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/INTERFACE.md:56`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/INTERFACE.md:76`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/PLAN-REVIEW.md:84`
> 判定: monorepo 插件合集（composer-tools/session-manager/pet-bridge/skin-gallery 等）的 .devflow 设计与 README 文档（~/.dsh 路径与 AGENTS.md 编辑功能说明），非敏感行为。
- … 其余 5 处

### 网络出口（20 处）
- `dsh-plugins/.devflow/INTERFACE-theme-skin-custom.md:98`
- `dsh-plugins/.devflow/PLAN-theme-skin-custom.md:208`
- `dsh-plugins/.devflow/TEST-PLAN-theme-skin-custom.md:50`
- `dsh-plugins/README.en.md:34`
- `dsh-plugins/README.md:178`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:1392`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:1424`
- `dsh-plugins/packages/dsh-composer-tools/tests/e2e/composer.e2e.spec.mjs:29`
- `dsh-plugins/packages/dsh-composer-tools/tests/e2e/composer.e2e.spec.mjs:46`
- `dsh-plugins/packages/dsh-session-manager/.devflow/PLAN.md:32`
- `dsh-plugins/packages/dsh-session-manager/.devflow/PLAN.md:217`
- `dsh-plugins/packages/dsh-session-manager/.devflow/SECURITY-REPORT.md:58`
- `dsh-plugins/packages/dsh-session-manager/tests/acceptance/helpers.js:427`
- `dsh-plugins/packages/dsh-session-manager/tests/acceptance/helpers.js:441`
- `dsh-plugins/packages/dsh-session-manager/tests/integration/acceptance.real.test.js:231`
> 判定: 文档中的高危能力拒绝策略说明 + prompt-templates 数据 + e2e 测试同源 fetch + pet-bridge http.request 本机 7779（宠物进程）+ skin-gallery 打包产物，无外联。
- … 其余 5 处

### 动态执行（18 处）
- `dsh-plugins/.devflow/INTERFACE-theme-skin-custom.md:98`
- `dsh-plugins/.devflow/PLAN-theme-skin-custom.md:153`
- `dsh-plugins/.devflow/PLAN-theme-skin-custom.md:208`
- `dsh-plugins/.devflow/TEST-PLAN-theme-skin-custom.md:50`
- `dsh-plugins/README.en.md:34`
- `dsh-plugins/README.md:178`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/SECURITY-REPORT.md:23`
- `dsh-plugins/packages/dsh-session-manager/.devflow/SECURITY-REPORT.md:26`
- `dsh-plugins/packages/skin-gallery/README.md:50`
- `dsh-plugins/packages/skin-gallery/lib/client.js:56`
- `dsh-plugins/packages/skin-gallery/lib/client.js:439`
- `dsh-plugins/packages/skin-gallery/lib/client.js:987`
- `dsh-plugins/packages/skin-gallery/src/client.js:247`
- `dsh-plugins/packages/skin-gallery/src/custom-skin.js:98`
- `dsh-plugins/packages/skin-gallery/src/skin-engine.js:48`
> 判定: skin-gallery 是**皮肤安全校验器**：命中为'拒绝 eval/new Function'的规则字符串（安全机制本身）+ 测试 harness 用 new Function 执行被测皮肤代码，均属功能/测试。
- … 其余 3 处

### 文件写入/删除（20 处）
- `dsh-plugins/packages/dsh-composer-tools/.devflow/SECURITY-REPORT.md:12`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/SECURITY-REPORT.md:40`
- `dsh-plugins/packages/dsh-composer-tools/.devflow/SECURITY-REPORT.md:43`
- `dsh-plugins/packages/dsh-composer-tools/src/handler.ts:200`
- `dsh-plugins/packages/dsh-composer-tools/src/handler.ts:211`
- `dsh-plugins/packages/dsh-composer-tools/tests/acceptance/helpers/fixture.mjs:6`
- `dsh-plugins/packages/dsh-composer-tools/tests/acceptance/helpers/fixture.mjs:25`
- `dsh-plugins/packages/dsh-composer-tools/tests/acceptance/helpers/fixture.mjs:35`
- `dsh-plugins/packages/dsh-composer-tools/tests/acceptance/helpers/fixture.mjs:39`
- `dsh-plugins/packages/dsh-composer-tools/tests/acceptance/helpers/scenarios.mjs:4`
- `dsh-plugins/packages/dsh-composer-tools/tests/acceptance/helpers/scenarios.mjs:40`
- `dsh-plugins/packages/dsh-composer-tools/tests/acceptance/test-02-host-list.test.mjs:12`
- `dsh-plugins/packages/dsh-composer-tools/tests/acceptance/test-02-host-list.test.mjs:35`
- `dsh-plugins/packages/dsh-composer-tools/tests/acceptance/test-02-host-list.test.mjs:63`
- `dsh-plugins/packages/dsh-composer-tools/tests/acceptance/test-02-host-list.test.mjs:120`
> 判定: composer-tools 编辑 AGENTS.md 指令文件（含 TOCTOU/symlink 竞态复核加固，安全正向）+ 测试临时文件，属功能本身。
- … 其余 5 处

### 安装钩子（1 处）
- `dsh-plugins/packages/dsh-composer-tools/README.md:85`
> 判定: README 提及 prepare 报错排查（文档文本）。

### 子进程（10 处）
- `dsh-plugins/packages/dsh-composer-tools/build.mjs:8`
- `dsh-plugins/packages/dsh-session-manager/.devflow/CODE-REVIEW.md:78`
- `dsh-plugins/packages/dsh-session-manager/.devflow/SECURITY-REPORT.md:13`
- `dsh-plugins/packages/dsh-session-manager/.devflow/SECURITY-REPORT.md:26`
- `dsh-plugins/packages/dsh-session-manager/build.mjs:8`
- `dsh-plugins/packages/pet-bridge/tests/e2e/real-cordis.test.mjs:14`
- `dsh-plugins/packages/pet-bridge/tests/e2e/real-cordis.test.mjs:62`
- `dsh-plugins/packages/pet-bridge/tests/e2e/real-cordis.test.mjs:88`
- `dsh-plugins/packages/turn-scrubber/build.mjs:8`
- `dsh-plugins/packages/turn-scrubber/build.mjs:11`
> 判定: build.mjs 构建期调用 tsdown + e2e 测试 spawn dsh + pet-bridge 测试，开发期。

### 混淆线索（20 处）
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:264`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:376`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:384`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:408`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:416`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:424`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:432`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:440`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:488`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:2080`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:2120`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:2192`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:2432`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:2512`
- `dsh-plugins/packages/dsh-composer-tools/data/prompt-templates.json:2608`
> 判定: prompt-templates.json 长文本行（提示词模板数据）+ skin-gallery 打包产物，均正常。
- … 其余 5 处

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/wsxwj123/dsh-plugins/tar.gz/HEAD` → `dsh-plugins@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 274 source files scanned; 109 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

