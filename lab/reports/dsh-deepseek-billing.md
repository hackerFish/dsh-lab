# dsh-deepseek-billing

- **来源**: `https://codeload.github.com/Jolly-J/dsh-deepseek-billing/tar.gz/HEAD`
- **安装包名/版本**: `dsh-deepseek-billing` 0.1.0-rc.5 · commit: a711823
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 12 处（逐条见下） |
| 4 兼容钉版 | 0.1.0-rc.5 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Jolly-J/dsh-deepseek-billing/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-deepseek-billing.install.md](../logs/dsh-deepseek-billing.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（9 处）
- `dsh-deepseek-billing/README.md:66`
- `dsh-deepseek-billing/README.md:69`
- `dsh-deepseek-billing/lib/index.js:154`
- `dsh-deepseek-billing/lib/index.js:155`
- `dsh-deepseek-billing/lib/index.js:207`
- `dsh-deepseek-billing/lib/index.js:218`
- `dsh-deepseek-billing/lib/index.js:220`
- `dsh-deepseek-billing/lib/index.js:221`
- `dsh-deepseek-billing/package.json:49`
> 判定: 余额监控功能本身——临时取部署密钥调官方余额接口，密钥只发给 api.deepseek.com，README 已说明「用完即弃」，未见外传。

### 混淆线索（1 处）
- `dsh-deepseek-billing/lib/client.js:10`
> 判定: 压缩前端里的内联 CSS 样式串，正常构建产物。

### 网络出口（2 处）
- `dsh-deepseek-billing/lib/client.js:184`
- `dsh-deepseek-billing/lib/client.js:218`
> 判定: 客户端请求插件自己的本地 `/billing/status` 路由，是功能本身，并非外联第三方。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Jolly-J/dsh-deepseek-billing/tar.gz/HEAD` → `dsh-deepseek-billing@0.1.0-rc.5`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 11 source files scanned; 12 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

