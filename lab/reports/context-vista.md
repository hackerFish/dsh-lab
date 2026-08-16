# context-vista

- **来源**: `https://codeload.github.com/GooodWei/context-vista/tar.gz/HEAD`
- **安装包名/版本**: `context-vista` 0.1.0 · commit: c478006
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 3 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/GooodWei/context-vista/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/context-vista.install.md](../logs/context-vista.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（3 处）
- `context-vista/README.en.md:35`
- `context-vista/README.md:35`
- `context-vista/lib/index.js:7`
> 判定: README + 注释中的 ~/.dsh/settings.yaml 配置路径（定价配置），属文档文本。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/GooodWei/context-vista/tar.gz/HEAD` → `context-vista@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 3 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

