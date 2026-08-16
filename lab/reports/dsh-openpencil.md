# dsh-openpencil

- **来源**: `https://codeload.github.com/ZSeven-W/dsh-openpencil/tar.gz/HEAD`
- **安装包名/版本**: `@zseven-w/dsh-openpencil` 0.1.0-rc.1 · commit: 5cfadc5
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 70 处（逐条见下） |
| 4 兼容钉版 | 0.1.0-rc.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/ZSeven-W/dsh-openpencil/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-openpencil.install.md](../logs/dsh-openpencil.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（7 处）
- `@zseven-w/dsh-openpencil/README.de.md:196`
- `@zseven-w/dsh-openpencil/README.es.md:196`
- `@zseven-w/dsh-openpencil/README.fr.md:196`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:130`
- `@zseven-w/dsh-openpencil/src/editor-host.ts:1225`
- `@zseven-w/dsh-openpencil/src/renderer.ts:381`
- `@zseven-w/dsh-openpencil/src/renderer.ts:387`
> 判定: 多语言 README 长行 + base64url 签名/令牌解码（编辑器能力令牌验证，安全机制）。

### 凭证读取（13 处）
- `@zseven-w/dsh-openpencil/README.md:128`
- `@zseven-w/dsh-openpencil/README.md:247`
- `@zseven-w/dsh-openpencil/src/client/editor-panel.tsx:169`
- `@zseven-w/dsh-openpencil/src/client/editor-panel.tsx:199`
- `@zseven-w/dsh-openpencil/src/client/editor-panel.tsx:232`
- `@zseven-w/dsh-openpencil/src/client/editor-panel.tsx:253`
- `@zseven-w/dsh-openpencil/src/client/editor-panel.tsx:494`
- `@zseven-w/dsh-openpencil/src/client/editor-recovery.ts:56`
- `@zseven-w/dsh-openpencil/src/client/editor-recovery.ts:75`
- `@zseven-w/dsh-openpencil/src/client/editor-recovery.ts:91`
- `@zseven-w/dsh-openpencil/src/client/index.tsx:646`
- `@zseven-w/dsh-openpencil/src/client/presentation-hydration.ts:90`
- `@zseven-w/dsh-openpencil/src/client/selection-polling.ts:71`
> 判定: README 文档（明确'不提交 .npmrc/NPM_TOKEN'）+ credentials:'same-origin'（标准同源语义）。

### 文件写入/删除（20 处）
- `@zseven-w/dsh-openpencil/scripts/build-client.mjs:4`
- `@zseven-w/dsh-openpencil/scripts/build-client.mjs:26`
- `@zseven-w/dsh-openpencil/scripts/sync-viewer-assets.mjs:17`
- `@zseven-w/dsh-openpencil/scripts/sync-viewer-assets.mjs:120`
- `@zseven-w/dsh-openpencil/scripts/sync-viewer-assets.mjs:130`
- `@zseven-w/dsh-openpencil/scripts/sync-viewer-assets.mjs:141`
- `@zseven-w/dsh-openpencil/scripts/sync-viewer-assets.mjs:171`
- `@zseven-w/dsh-openpencil/scripts/sync-viewer-assets.mjs:183`
- `@zseven-w/dsh-openpencil/scripts/sync-viewer-assets.mjs:265`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:5`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:52`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:54`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:259`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:278`
- `@zseven-w/dsh-openpencil/scripts/test-viewer-assets.mjs:4`
> 判定: 编辑器文档写入（0600/wx 防覆盖）+ 构建/测试脚本，属功能本身。
- … 其余 5 处

### 子进程（10 处）
- `@zseven-w/dsh-openpencil/scripts/run-tool.mjs:1`
- `@zseven-w/dsh-openpencil/scripts/run-tool.mjs:61`
- `@zseven-w/dsh-openpencil/scripts/sync-viewer-assets.mjs:16`
- `@zseven-w/dsh-openpencil/scripts/sync-viewer-assets.mjs:105`
- `@zseven-w/dsh-openpencil/src/editor-host.ts:14`
- `@zseven-w/dsh-openpencil/src/editor-host.ts:698`
- `@zseven-w/dsh-openpencil/src/editor-host.ts:880`
- `@zseven-w/dsh-openpencil/src/renderer.ts:23`
- `@zseven-w/dsh-openpencil/src/renderer.ts:587`
- `@zseven-w/dsh-openpencil/src/renderer.ts:695`
> 判定: spawn 编辑器二进制（OpenPencil 编辑器宿主，核心功能）+ 构建脚本，参数数组传递。

### 网络出口（20 处）
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:147`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:152`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:158`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:163`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:166`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:169`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:179`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:190`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:203`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:220`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:234`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:242`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:249`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:254`
- `@zseven-w/dsh-openpencil/scripts/test-host.mjs:260`
> 判定: 全部为测试脚本 fetch 本机测试服务（origin/daemonOrigin=localhost），无外联。
- … 其余 5 处

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/ZSeven-W/dsh-openpencil/tar.gz/HEAD` → `@zseven-w/dsh-openpencil@0.1.0-rc.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 50 source files scanned; 70 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

