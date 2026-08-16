# dsh-mnemon

- **来源**: `https://codeload.github.com/omdsh-dev/dsh-mnemon/tar.gz/HEAD`
- **安装包名/版本**: `dsh-mnemon` 0.1.6 · commit: e91be82
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 3 处（逐条见下） |
| 4 兼容钉版 | 0.1.6 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/omdsh-dev/dsh-mnemon/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-mnemon.install.md](../logs/dsh-mnemon.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（3 处）
- `dsh-mnemon/README.md:134`
- `dsh-mnemon/README.zh-CN.md:134`
- `dsh-mnemon/SECURITY.md:47`
> 判定: README/SECURITY 文档文本；SECURITY.md 明确插件本身无任何 secret 处理，无异常。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/omdsh-dev/dsh-mnemon/tar.gz/HEAD` → `dsh-mnemon@0.1.6`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 6 source files scanned; 3 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

