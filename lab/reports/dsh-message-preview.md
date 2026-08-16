# dsh-message-preview

- **来源**: `https://codeload.github.com/asukasec/dsh-message-preview/tar.gz/HEAD`
- **安装包名/版本**: `dsh-message-preview` 0.1.1 · commit: dfdb543
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ✅ 推荐

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 代码零命中 |
| 4 兼容钉版 | 0.1.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/asukasec/dsh-message-preview/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-message-preview.install.md](../logs/dsh-message-preview.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

无命中。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/asukasec/dsh-message-preview/tar.gz/HEAD` → `dsh-message-preview@0.1.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 8 source files scanned; 0 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ✅ 推荐

