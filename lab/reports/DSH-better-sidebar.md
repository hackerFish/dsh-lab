# DSH-better-sidebar

- **来源**: `https://codeload.github.com/omdsh-dev/DSH-better-sidebar/tar.gz/HEAD`
- **安装包名/版本**: `dsh-better-sidebar` 0.12.3 · commit: c923fc5
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 98 处（逐条见下） |
| 4 兼容钉版 | 0.12.3 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/omdsh-dev/DSH-better-sidebar/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/DSH-better-sidebar.install.md](../logs/DSH-better-sidebar.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 子进程（20 处）
- `dsh-better-sidebar/README.md:26`
- `dsh-better-sidebar/README.md:59`
- `dsh-better-sidebar/README.md:120`
- `dsh-better-sidebar/README.md:121`
- `dsh-better-sidebar/README.md:230`
- `dsh-better-sidebar/README_EN.md:26`
- `dsh-better-sidebar/README_EN.md:59`
- `dsh-better-sidebar/README_EN.md:120`
- `dsh-better-sidebar/README_EN.md:121`
- `dsh-better-sidebar/README_EN.md:230`
- `dsh-better-sidebar/lib/client-editor.js:32731`
- `dsh-better-sidebar/lib/client-editor.js:32732`
- `dsh-better-sidebar/lib/client-editor.js:32957`
- `dsh-better-sidebar/lib/client-editor.js:32958`
- `dsh-better-sidebar/lib/client-registry.js:1422`
> 判定: node-pty 真实终端（核心功能，README 明示）+ 文档文本，属功能本身。
- … 其余 5 处

### 凭证读取（20 处）
- `dsh-better-sidebar/README.md:107`
- `dsh-better-sidebar/README.md:116`
- `dsh-better-sidebar/README.md:118`
- `dsh-better-sidebar/README.md:119`
- `dsh-better-sidebar/README.md:121`
- `dsh-better-sidebar/README.md:134`
- `dsh-better-sidebar/README.md:135`
- `dsh-better-sidebar/README.md:139`
- `dsh-better-sidebar/README_EN.md:107`
- `dsh-better-sidebar/README_EN.md:116`
- `dsh-better-sidebar/README_EN.md:118`
- `dsh-better-sidebar/README_EN.md:119`
- `dsh-better-sidebar/README_EN.md:121`
- `dsh-better-sidebar/README_EN.md:134`
- `dsh-better-sidebar/README_EN.md:135`
> 判定: README 故障排查文本 + crossorigin='use-credentials'（前端标准资源属性），非敏感行为。
- … 其余 5 处

### 网络出口（20 处）
- `dsh-better-sidebar/README.md:211`
- `dsh-better-sidebar/README_EN.md:211`
- `dsh-better-sidebar/lib/client-editor.js:17931`
- `dsh-better-sidebar/lib/client-editor.js:33158`
- `dsh-better-sidebar/lib/client-registry.js:652`
- `dsh-better-sidebar/lib/client-registry.js:1849`
- `dsh-better-sidebar/lib/client-registry.js:2368`
- `dsh-better-sidebar/lib/client-registry.js:6078`
- `dsh-better-sidebar/lib/client-registry.js:6952`
- `dsh-better-sidebar/lib/client-terminal.js:7727`
- `dsh-better-sidebar/lib/client-terminal.js:7798`
- `dsh-better-sidebar/lib/client-terminal.js:8224`
- `dsh-better-sidebar/lib/client-terminal.js:8358`
- `dsh-better-sidebar/lib/client-terminal.js:8368`
- `dsh-better-sidebar/lib/client-terminal.js:8412`
> 判定: fetch 自有路由 /sidebar/api 与媒体路由 + 终端 WebSocket，同源/本地，无外联。
- … 其余 5 处

### 混淆线索（20 处）
- `dsh-better-sidebar/lib/client-editor.js:29`
- `dsh-better-sidebar/lib/client-editor.js:19791`
- `dsh-better-sidebar/lib/client-editor.js:19792`
- `dsh-better-sidebar/lib/client-editor.js:19793`
- `dsh-better-sidebar/lib/client-editor.js:19794`
- `dsh-better-sidebar/lib/client-editor.js:19949`
- `dsh-better-sidebar/lib/client-editor.js:23181`
- `dsh-better-sidebar/lib/client-editor.js:23271`
- `dsh-better-sidebar/lib/client-editor.js:23553`
- `dsh-better-sidebar/lib/client-editor.js:23554`
- `dsh-better-sidebar/lib/client-editor.js:23555`
- `dsh-better-sidebar/lib/client-editor.js:23556`
- `dsh-better-sidebar/lib/client-editor.js:23592`
- `dsh-better-sidebar/lib/client-editor.js:26332`
- `dsh-better-sidebar/lib/client-editor.js:26333`
> 判定: Monaco/编辑器 parser 状态表打包产物，正常。
- … 其余 5 处

### 原生模块（9 处）
- `dsh-better-sidebar/lib/client-editor.js:15346`
- `dsh-better-sidebar/lib/client-registry.js:2299`
- `dsh-better-sidebar/lib/client-terminal.js:6156`
- `dsh-better-sidebar/lib/client-terminal.js:7220`
- `dsh-better-sidebar/lib/client.js:2299`
- `dsh-better-sidebar/package.json:160`
- `dsh-better-sidebar/src/client/TerminalView.tsx:24`
- `dsh-better-sidebar/src/client/chunks/terminal.tsx:2`
- `dsh-better-sidebar/src/client/intercept.tsx:64`
> 判定: xterm addon 引用与文档文本（.node/ffi/addon 模式命中均非原生加载），无异常。

### 文件写入/删除（8 处）
- `dsh-better-sidebar/lib/index.js:2`
- `dsh-better-sidebar/lib/index.js:2413`
- `dsh-better-sidebar/scripts/install.ps1:124`
- `dsh-better-sidebar/scripts/install.ps1:256`
- `dsh-better-sidebar/scripts/install.sh:128`
- `dsh-better-sidebar/scripts/install.sh:264`
- `dsh-better-sidebar/src/index.ts:16`
- `dsh-better-sidebar/src/index.ts:232`
> 判定: 文件编辑原子写 + install 脚本替换逻辑，属功能本身。

### 安装钩子（1 处）
- `dsh-better-sidebar/package.json:78`
> 判定: prepare 为 tsdown 构建，发布构建。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/omdsh-dev/DSH-better-sidebar/tar.gz/HEAD` → `dsh-better-sidebar@0.12.3`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 93 source files scanned; 98 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

