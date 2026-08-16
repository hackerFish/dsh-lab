# dsh-cost-meter-s

- **来源**: `https://codeload.github.com/Sttrevens/dsh-cost-meter/tar.gz/HEAD`
- **安装包名/版本**: `@steven-wu/dsh-cost-meter` 0.1.0-rc.2 · commit: cd86d73
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 3 处（逐条见下） |
| 4 兼容钉版 | 0.1.0-rc.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Sttrevens/dsh-cost-meter/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-cost-meter-s.install.md](../logs/dsh-cost-meter-s.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（1 处）
- `@steven-wu/dsh-cost-meter/README.md:37`
> 判定: README 文档文本（~/.dsh/cost-pricing.json 路径说明）。
### 文件写入/删除（2 处）
- `@steven-wu/dsh-cost-meter/lib/index.js:17`
- `@steven-wu/dsh-cost-meter/lib/index.js:68`
> 判定: 首次运行时生成默认价格表 JSON（writeFileSync），属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Sttrevens/dsh-cost-meter/tar.gz/HEAD` → `@steven-wu/dsh-cost-meter@0.1.0-rc.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 8 source files scanned; 3 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

