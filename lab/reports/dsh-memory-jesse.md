# dsh-memory-jesse

- **来源**: `https://codeload.github.com/Jesse-njx/dsh-memory/tar.gz/HEAD`
- **安装包名/版本**: `@dsh-memory/bundle` 0.1.0 · commit: 2eed97d
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 4 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Jesse-njx/dsh-memory/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-memory-jesse.install.md](../logs/dsh-memory-jesse.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（4 处）
- `@dsh-memory/bundle/README.md:5`
- `@dsh-memory/bundle/README.md:37`
- `@dsh-memory/bundle/README.md:62`
- `@dsh-memory/bundle/README.md:63`
> 判定: README 文档文本（记忆存储路径说明）。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Jesse-njx/dsh-memory/tar.gz/HEAD` → `@dsh-memory/bundle@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 4 source files scanned; 4 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

