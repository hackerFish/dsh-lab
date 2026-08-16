# dsh-sidechain

- **来源**: `https://codeload.github.com/Buyi-wsgzg/dsh-sidechain/tar.gz/HEAD`
- **安装包名/版本**: `@dsh-external/dsh-sidechain` 0.6.3 · commit: ee6fadd
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 6 处（逐条见下） |
| 4 兼容钉版 | 0.6.3 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Buyi-wsgzg/dsh-sidechain/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-sidechain.install.md](../logs/dsh-sidechain.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 文件写入/删除（4 处）
- `@dsh-external/dsh-sidechain/lib/index.js:2`
- `@dsh-external/dsh-sidechain/lib/index.js:244`
- `@dsh-external/dsh-sidechain/src/settle-silence.ts:14`
- `@dsh-external/dsh-sidechain/src/settle-silence.ts:54`
> 判定: 子会话（sidechain）状态文件写入，属功能本身。

### 安装钩子（1 处）
- `@dsh-external/dsh-sidechain/package.json:26`
> 判定: prepare 为 tsdown 构建。

### 网络出口（1 处）
- `@dsh-external/dsh-sidechain/src/client/sidechain-view.ts:30`
> 判定: 注释文本（transcript fetch 页大小说明），非代码行为。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Buyi-wsgzg/dsh-sidechain/tar.gz/HEAD` → `@dsh-external/dsh-sidechain@0.6.3`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 22 source files scanned; 6 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

