# dsh-drag-and-drop-bill

- **来源**: `https://codeload.github.com/bill9109/dsh-drag-and-drop/tar.gz/HEAD`
- **安装包名/版本**: `@omdsh-dev/dsh-drag-and-drop` 0.1.5 · commit: 09088d6
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 11 处（逐条见下） |
| 4 兼容钉版 | 0.1.5 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/bill9109/dsh-drag-and-drop/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-drag-and-drop-bill.install.md](../logs/dsh-drag-and-drop-bill.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（3 处）
- `@omdsh-dev/dsh-drag-and-drop/lib/client.js:243`
- `@omdsh-dev/dsh-drag-and-drop/lib/types/client/locator.js:5`
- `@omdsh-dev/dsh-drag-and-drop/src/client/locator.ts:7`
> 判定: 同 dsh-drag-and-drop（AKIRACOD 与 bill9109 为同一实现的不同来源，命中完全一致）：自有路由上传。

### 子进程（8 处）
- `@omdsh-dev/dsh-drag-and-drop/lib/index.js:5`
- `@omdsh-dev/dsh-drag-and-drop/lib/index.js:196`
- `@omdsh-dev/dsh-drag-and-drop/lib/types/platform-search.d.ts:6`
- `@omdsh-dev/dsh-drag-and-drop/lib/types/platform-search.js:1`
- `@omdsh-dev/dsh-drag-and-drop/lib/types/platform-search.js:32`
- `@omdsh-dev/dsh-drag-and-drop/src/platform-search.ts:1`
- `@omdsh-dev/dsh-drag-and-drop/src/platform-search.ts:15`
- `@omdsh-dev/dsh-drag-and-drop/src/platform-search.ts:30`
> 判定: 同左：平台文件命令集成，参数数组传递，属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/bill9109/dsh-drag-and-drop/tar.gz/HEAD` → `@omdsh-dev/dsh-drag-and-drop@0.1.5`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 65 source files scanned; 11 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

