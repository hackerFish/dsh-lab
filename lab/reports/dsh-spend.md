# dsh-spend

- **来源**: `https://codeload.github.com/nonewind/dsh-spend/tar.gz/HEAD`
- **安装包名/版本**: `dsh-spend` 0.4.1 · commit: 0d8fa24
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 3 处（逐条见下） |
| 4 兼容钉版 | 0.4.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/nonewind/dsh-spend/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-spend.install.md](../logs/dsh-spend.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（2 处）
- `dsh-spend/README.en.md:87`
- `dsh-spend/README.md:87`
> 判定: 两处均为 README 文档文本（配置示例中的 ~/.dsh 路径），非代码行为。

### 混淆线索（1 处）
- `dsh-spend/lib/client.js:1077`
> 判定: README 中 ~/.dsh 为文档路径文本；client.js 超长行为打包进产物的 HTML 模板串，均正常。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/nonewind/dsh-spend/tar.gz/HEAD` → `dsh-spend@0.4.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: per-category judgements added;  9 source files scanned; 3 hits — see per-category lists above (hits are leads, not verdicts)
- **Verdict**: ⚠️ 可用但注意

