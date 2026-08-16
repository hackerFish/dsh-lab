# dsh-web-review

- **来源**: `https://codeload.github.com/CanglongCl/dsh-web-review/tar.gz/HEAD`
- **安装包名/版本**: `dsh-web-review` 0.3.0-rc.2 · commit: 6765e07
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 92 处（逐条见下） |
| 4 兼容钉版 | 0.3.0-rc.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/CanglongCl/dsh-web-review/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-web-review.install.md](../logs/dsh-web-review.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `dsh-web-review/.agents/skills/readme-media/SKILL.md:28`
- `dsh-web-review/.github/workflows/release-npm.yml:37`
- `dsh-web-review/AGENTS.md:40`
- `dsh-web-review/AGENTS.md:103`
- `dsh-web-review/AGENTS.md:119`
- `dsh-web-review/AGENTS.md:121`
- `dsh-web-review/docs/frontend-eval-suite-plan.md:338`
- `dsh-web-review/docs/frontend-eval-suite-plan.md:339`
- `dsh-web-review/docs/npm-0.1.0-release-plan.md:46`
- `dsh-web-review/docs/plugin-capability-eval-plan.md:232`
- `dsh-web-review/docs/readme-media-automation-plan.md:58`
- `dsh-web-review/docs/readme-media-automation-plan.md:59`
- `dsh-web-review/eval/README.md:62`
- `dsh-web-review/eval/README.md:63`
- `dsh-web-review/eval/README.md:64`
> 判定: 全部位于 docs/AGENTS.md/eval 开发文档与评测工具链（凭据链说明 + eval 脚本读 .env/凭据用于隔离评测），且文档反复强调不提交/不透传凭据；运行时插件代码无凭证处理命中。
- … 其余 5 处

### 文件写入/删除（20 处）
- `dsh-web-review/.github/workflows/release-npm.yml:155`
- `dsh-web-review/docs/figma-property-editor-plan.md:57`
- `dsh-web-review/docs/figma-property-editor-plan.md:119`
- `dsh-web-review/docs/figma-property-editor-plan.md:159`
- `dsh-web-review/docs/figma-property-editor-plan.md:160`
- `dsh-web-review/docs/figma-property-editor-plan.md:249`
- `dsh-web-review/docs/figma-property-editor-plan.md:250`
- `dsh-web-review/docs/figma-property-editor-plan.md:270`
- `dsh-web-review/eval/capture/capture.ts:20`
- `dsh-web-review/eval/capture/capture.ts:22`
- `dsh-web-review/eval/capture/capture.ts:92`
- `dsh-web-review/eval/capture/capture.ts:105`
- `dsh-web-review/eval/capture/capture.ts:115`
- `dsh-web-review/eval/capture/capture.ts:162`
- `dsh-web-review/eval/capture/capture.ts:346`
> 判定: eval 评测工具链写隔离 home/快照（开发期工具，非插件运行时）。
- … 其余 5 处

### 混淆线索（11 处）
- `dsh-web-review/AGENTS.md:66`
- `dsh-web-review/AGENTS.md:74`
- `dsh-web-review/AGENTS.md:83`
- `dsh-web-review/AGENTS.md:103`
- `dsh-web-review/AGENTS.md:117`
- `dsh-web-review/AGENTS.md:118`
- `dsh-web-review/AGENTS.md:120`
- `dsh-web-review/AGENTS.md:121`
- `dsh-web-review/eval/fixtures/react-operations/baseline/src/styles.css:24`
- `dsh-web-review/eval/fixtures/react-operations/golden.patch:40`
- `dsh-web-review/eval/report.ts:293`
> 判定: AGENTS.md/文档长行 + eval fixtures 样式，非混淆。

### 网络出口（20 处）
- `dsh-web-review/AGENTS.md:90`
- `dsh-web-review/docs/webview-ui-plan.md:253`
- `dsh-web-review/eval/capture/capture.ts:73`
- `dsh-web-review/eval/capture/capture.ts:91`
- `dsh-web-review/eval/capture/capture.ts:165`
- `dsh-web-review/eval/grader.ts:40`
- `dsh-web-review/packages/dsh-web-review/README.md:183`
- `dsh-web-review/packages/dsh-web-review/src/client/index.ts:134`
- `dsh-web-review/packages/dsh-web-review/src/client/index.ts:179`
- `dsh-web-review/packages/dsh-web-review/src/client/index.ts:196`
- `dsh-web-review/packages/dsh-web-review/tests/e2e-scaffold.ts:219`
- `dsh-web-review/packages/dsh-web-review/tests/e2e-scaffold.ts:220`
- `dsh-web-review/packages/dsh-web-review/tests/loader-composition.spec.ts:200`
- `dsh-web-review/packages/dsh-web-review/tests/loader-composition.spec.ts:265`
- `dsh-web-review/packages/dsh-web-review/tests/loader-composition.spec.ts:283`
> 判定: eval 工具链 fetch 本机起服务（vite/demo/web）+ 测试 fixtures；运行时插件 fetch 自有路由（/webview-annotations），无外联。
- … 其余 5 处

### 子进程（20 处）
- `dsh-web-review/eval/capture/capture.ts:13`
- `dsh-web-review/eval/capture/capture.ts:65`
- `dsh-web-review/eval/capture/capture.ts:84`
- `dsh-web-review/eval/capture/capture.ts:154`
- `dsh-web-review/eval/grader.ts:6`
- `dsh-web-review/eval/grader.ts:59`
- `dsh-web-review/eval/grader.ts:70`
- `dsh-web-review/eval/runner/batch.ts:12`
- `dsh-web-review/eval/runner/runner.ts:6`
- `dsh-web-review/eval/runner/runner.ts:223`
- `dsh-web-review/eval/smoke.ts:8`
- `dsh-web-review/eval/smoke.ts:61`
- `dsh-web-review/eval/view-session.ts:10`
- `dsh-web-review/eval/view-session.ts:152`
- `dsh-web-review/packages/dsh-web-review/tests/e2e-scaffold.ts:11`
> 判定: eval 工具链 spawn 本机服务（vite/demo/tsx，开发期）；运行时无子进程。
- … 其余 5 处

### 安装钩子（1 处）
- `dsh-web-review/package.json:24`
> 判定: prepare 为 pnpm prepare:hooks（git hooks 初始化），开发期用途。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/CanglongCl/dsh-web-review/tar.gz/HEAD` → `dsh-web-review@0.3.0-rc.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 397 source files scanned; 92 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

