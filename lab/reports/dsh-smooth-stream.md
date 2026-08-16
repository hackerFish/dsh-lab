# dsh-smooth-stream

- **来源**: `https://codeload.github.com/Laplace-bit/dsh-smooth-stream/tar.gz/HEAD`
- **安装包名/版本**: `dsh-smooth-stream` 0.1.0 · commit: 8f0260f
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 10 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Laplace-bit/dsh-smooth-stream/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-smooth-stream.install.md](../logs/dsh-smooth-stream.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（1 处）
- `dsh-smooth-stream/lib/client.js:12`
> 判定: CSS 打包产物，正常。

### 原生模块（8 处）
- `dsh-smooth-stream/lib/client.js:1223`
- `dsh-smooth-stream/lib/client.js:1239`
- `dsh-smooth-stream/lib/client.js:1266`
- `dsh-smooth-stream/lib/client.js:1269`
- `dsh-smooth-stream/src/client/index.ts:63`
- `dsh-smooth-stream/src/client/index.ts:80`
- `dsh-smooth-stream/src/client/index.ts:108`
- `dsh-smooth-stream/src/client/index.ts:111`
> 判定: 命中均为 ctx.slots 的 conversation.chat.node 槽位注入（Cordis 槽位 API，正常插件机制），非原生模块。

### 安装钩子（1 处）
- `dsh-smooth-stream/package.json:74`
> 判定: prepare 为 tsdown 构建。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Laplace-bit/dsh-smooth-stream/tar.gz/HEAD` → `dsh-smooth-stream@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 21 source files scanned; 10 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

