# noatmark-dsh-plugin

- **来源**: `https://codeload.github.com/ylwl1997/noatmark-dsh-plugin/tar.gz/HEAD`
- **安装包名/版本**: `noatmark-dsh-plugin` 0.1.0 · commit: a193649
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 1 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/ylwl1997/noatmark-dsh-plugin/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/noatmark-dsh-plugin.install.md](../logs/noatmark-dsh-plugin.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 安装钩子（1 处）
- `noatmark-dsh-plugin/package.json:29`
> 判定: prepare 为 tsc 编译，发布构建。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/ylwl1997/noatmark-dsh-plugin/tar.gz/HEAD` → `noatmark-dsh-plugin@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 5 source files scanned; 1 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

