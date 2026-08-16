# dsh-premium-themes

- **来源**: `https://codeload.github.com/xiaoyanzi191/dsh-premium-themes/tar.gz/HEAD`
- **安装包名/版本**: `@deepseek-ai/dsh-client-ui-premium-themes` 0.1.0 · commit: 7e48599
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 10 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/xiaoyanzi191/dsh-premium-themes/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-premium-themes.install.md](../logs/dsh-premium-themes.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（4 处）
- `@deepseek-ai/dsh-client-ui-premium-themes/lib/client.js:732`
- `@deepseek-ai/dsh-client-ui-premium-themes/lib/client.js:733`
- `@deepseek-ai/dsh-client-ui-premium-themes/lib/client.js:1557`
- `@deepseek-ai/dsh-client-ui-premium-themes/lib/client.js:1803`
> 判定: base64 编解码工具函数与 CSS 打包产物，正常。
### 动态执行（1 处）
- `@deepseek-ai/dsh-client-ui-premium-themes/lib/client.js:913`
> 判定: new Function 把配置中的 callback 字段编译为函数（配置驱动回调，配置来源为用户），属功能本身。
### 网络出口（4 处）
- `@deepseek-ai/dsh-client-ui-premium-themes/lib/client.js:2182`
- `@deepseek-ai/dsh-client-ui-premium-themes/lib/client.js:2192`
- `@deepseek-ai/dsh-client-ui-premium-themes/lib/client.js:2315`
- `@deepseek-ai/dsh-client-ui-premium-themes/lib/client.js:2342`
> 判定: fetch 自有路由（PALETTE_ROUTE_PATH / CUSTOM_ROUTE_PATH），同源请求。
### 安装钩子（1 处）
- `@deepseek-ai/dsh-client-ui-premium-themes/package.json:54`
> 判定: prepare 仅执行 npm run build，发布构建。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/xiaoyanzi191/dsh-premium-themes/tar.gz/HEAD` → `@deepseek-ai/dsh-client-ui-premium-themes@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 19 source files scanned; 10 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

