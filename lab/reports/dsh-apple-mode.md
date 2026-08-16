# dsh-apple-mode

- **来源**: `https://codeload.github.com/jihongboo/dsh-apple-mode/tar.gz/HEAD`
- **安装包名/版本**: `dsh-apple-mode` 0.1.0 · commit: 2000ae2
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 8 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/jihongboo/dsh-apple-mode/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-apple-mode.install.md](../logs/dsh-apple-mode.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（8 处）
- `dsh-apple-mode/README.md:42`
- `dsh-apple-mode/README.md:64`
- `dsh-apple-mode/README.zh.md:42`
- `dsh-apple-mode/README.zh.md:64`
- `dsh-apple-mode/docs/XCODE_AI_INTEGRATION.md:38`
- `dsh-apple-mode/docs/XCODE_AI_INTEGRATION.md:74`
- `dsh-apple-mode/docs/global-mcp.md:34`
- `dsh-apple-mode/install.sh:10`
> 判定: README/docs 文档 + install.sh 注释（preset 路径说明）。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/jihongboo/dsh-apple-mode/tar.gz/HEAD` → `dsh-apple-mode@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 12 source files scanned; 8 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

