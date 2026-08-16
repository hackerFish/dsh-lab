# dsh-browser

- **来源**: `https://codeload.github.com/Lum1104/dsh-browser/tar.gz/HEAD`
- **安装包名/版本**: `dsh-browser` 0.1.0 · commit: 01f0b21
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 62 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Lum1104/dsh-browser/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-browser.install.md](../logs/dsh-browser.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `dsh-browser/.agents/notes/implemented/architecture/2026-08-13-standalone-npm-workspace.md:21`
- `dsh-browser/.agents/notes/implemented/architecture/2026-08-13-standalone-npm-workspace.md:35`
- `dsh-browser/.agents/notes/implemented/architecture/2026-08-14-browser-profile-bundle.md:19`
- `dsh-browser/.agents/notes/implemented/architecture/2026-08-14-browser-profile-bundle.zh.md:19`
- `dsh-browser/README.md:13`
- `dsh-browser/README.md:57`
- `dsh-browser/README.md:72`
- `dsh-browser/README.md:91`
- `dsh-browser/README.md:126`
- `dsh-browser/README.zh.md:57`
- `dsh-browser/README.zh.md:72`
- `dsh-browser/README.zh.md:91`
- `dsh-browser/README.zh.md:126`
- `dsh-browser/extensions/dsh-browser/README.md:57`
- `dsh-browser/extensions/dsh-browser/README.md:70`
> 判定: 全部为文档/README 文本；且 README 明确特权网关方法（credentials.* 等）对非回环来源一律拒绝，属安全设计。
- … 其余 5 处

### 网络出口（20 处）
- `dsh-browser/.agents/notes/implemented/architecture/2026-08-13-standalone-npm-workspace.md:31`
- `dsh-browser/.agents/notes/implemented/architecture/2026-08-13-standalone-npm-workspace.zh.md:31`
- `dsh-browser/.agents/notes/implemented/architecture/2026-08-14-browser-profile-bundle.md:23`
- `dsh-browser/.agents/notes/implemented/architecture/2026-08-14-browser-profile-bundle.md:35`
- `dsh-browser/.agents/notes/implemented/architecture/2026-08-14-browser-profile-bundle.zh.md:23`
- `dsh-browser/.agents/notes/implemented/architecture/2026-08-14-browser-profile-bundle.zh.md:35`
- `dsh-browser/extensions/dsh-browser/README.md:83`
- `dsh-browser/extensions/dsh-browser/README.zh.md:83`
- `dsh-browser/extensions/dsh-browser/src/background/bridge.ts:2`
- `dsh-browser/extensions/dsh-browser/src/background/bridge.ts:29`
- `dsh-browser/extensions/dsh-browser/src/background/bridge.ts:37`
- `dsh-browser/extensions/dsh-browser/src/background/bridge.ts:40`
- `dsh-browser/extensions/dsh-browser/src/background/bridge.ts:60`
- `dsh-browser/extensions/dsh-browser/src/background/bridge.ts:84`
- `dsh-browser/extensions/dsh-browser/src/background/bridge.ts:94`
> 判定: WebSocket 连接本机 dsh bridge（ws://127.0.0.1:3080）+ 本机 /ext/bridge-config，全部回环地址，无外联。
- … 其余 5 处

### 混淆线索（10 处）
- `dsh-browser/extensions/dsh-browser/README.md:99`
- `dsh-browser/packages/browser/bridge-browser/coverage/coverage-final.json:1`
- `dsh-browser/packages/browser/bridge-browser/coverage/coverage-final.json:2`
- `dsh-browser/packages/browser/bridge-browser/coverage/coverage-final.json:3`
- `dsh-browser/packages/browser/bridge-browser/coverage/coverage-final.json:4`
- `dsh-browser/packages/browser/bridge-browser/coverage/coverage-final.json:5`
- `dsh-browser/packages/browser/bridge-browser/coverage/coverage-final.json:6`
- `dsh-browser/packages/browser/bridge-browser/coverage/coverage-final.json:7`
- `dsh-browser/packages/browser/bridge-browser/coverage/coverage-final.json:8`
- `dsh-browser/packages/browser/bridge-browser/coverage/prettify.js:2`
> 判定: coverage 报告 JSON、prettify.js 与 README 长行（开发产物与文档），非混淆。

### 子进程（4 处）
- `dsh-browser/extensions/dsh-browser/scripts/build.mjs:7`
- `dsh-browser/extensions/dsh-browser/scripts/build.mjs:21`
- `dsh-browser/extensions/dsh-browser/scripts/build.mjs:31`
- `dsh-browser/pnpm-workspace.yaml:12`
> 判定: vite 构建脚本（开发期）+ node-pty 允许项（pnpm-workspace.yaml 声明），属构建/功能本身。

### 文件写入/删除（8 处）
- `dsh-browser/packages/browser/bridge-browser/coverage/token.ts.html:278`
- `dsh-browser/packages/browser/bridge-browser/coverage/token.ts.html:340`
- `dsh-browser/packages/browser/bridge-browser/src/token.ts:13`
- `dsh-browser/packages/browser/bridge-browser/src/token.ts:75`
- `dsh-browser/packages/browser/bridge-browser/tests/composition.spec.ts:15`
- `dsh-browser/packages/browser/bridge-browser/tests/composition.spec.ts:70`
- `dsh-browser/packages/browser/bridge-browser/tests/e2e/bridge-extension.e2e.spec.ts:20`
- `dsh-browser/packages/browser/bridge-browser/tests/e2e/bridge-extension.e2e.spec.ts:73`
> 判定: bridge token 以 0600 权限原子写入（安全正向），测试临时目录清理，属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Lum1104/dsh-browser/tar.gz/HEAD` → `dsh-browser@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 134 source files scanned; 62 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

