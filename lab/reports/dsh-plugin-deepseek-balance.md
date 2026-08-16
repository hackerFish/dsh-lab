# dsh-plugin-deepseek-balance

- **来源**: `https://codeload.github.com/fishxcode/dsh-plugin-deepseek-balance/tar.gz/HEAD`
- **安装包名/版本**: `dsh-plugin-deepseek-balance` 0.1.0 · commit: 0a1c211
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 5 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/fishxcode/dsh-plugin-deepseek-balance/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-plugin-deepseek-balance.install.md](../logs/dsh-plugin-deepseek-balance.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（3 处）
- `dsh-plugin-deepseek-balance/lib/client.js:348`
- `dsh-plugin-deepseek-balance/lib/client.js:537`
- `dsh-plugin-deepseek-balance/lib/index.js:158`
> 判定: 三处 fetch 全部指向官方域名（api.deepseek.com 余额接口、platform.deepseek.com 用量接口）与插件自有 /api/dsh-deepseek-balance/usage 路由，token 只发往 DeepSeek 官方，属“余额监控”功能本身。

### 混淆线索（1 处）
- `dsh-plugin-deepseek-balance/lib/client.js:1119`
> 判定: 超长行是打包进产物的 CSS 样式串，正常构建产物。

### 安装钩子（1 处）
- `dsh-plugin-deepseek-balance/package.json:44`
> 判定: package.json 的 prepare 只是发布前执行 npm run bundle 打包，无安装期网络或危险操作。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/fishxcode/dsh-plugin-deepseek-balance/tar.gz/HEAD` → `dsh-plugin-deepseek-balance@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: per-category judgements added;  5 source files scanned; 5 hits — see per-category lists above (hits are leads, not verdicts)
- **Verdict**: ⚠️ 可用但注意

