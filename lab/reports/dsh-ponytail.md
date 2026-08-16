# dsh-ponytail

- **来源**: `https://codeload.github.com/gongyijie85/dsh-ponytail/tar.gz/HEAD`
- **安装包名/版本**: `dsh-ponytail-skills` 0.1.3 · commit: 3eb0a78
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ✅ 推荐

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 代码零命中 |
| 4 兼容钉版 | 0.1.3 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/gongyijie85/dsh-ponytail/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-ponytail.install.md](../logs/dsh-ponytail.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

无命中。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/gongyijie85/dsh-ponytail/tar.gz/HEAD` → `dsh-ponytail-skills@0.1.3`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 12 source files scanned; 0 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ✅ 推荐

