# dsh-pet

- **来源**: `https://codeload.github.com/zealot00/dsh-pet/tar.gz/HEAD`
- **安装包名/版本**: `@dsh-local/dsh-pet` 0.2.0 · commit: cb31dd4
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 2 处（逐条见下） |
| 4 兼容钉版 | 0.2.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/zealot00/dsh-pet/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-pet.install.md](../logs/dsh-pet.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（1 处）
- `@dsh-local/dsh-pet/README.md:33`
> 判定: README 文档（install.sh 用法）。

### 混淆线索（1 处）
- `@dsh-local/dsh-pet/lib/client.js:45`
> 判定: CSS 打包产物（宠物样式），正常。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/zealot00/dsh-pet/tar.gz/HEAD` → `@dsh-local/dsh-pet@0.2.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 5 source files scanned; 2 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

