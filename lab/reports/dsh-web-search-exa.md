# dsh-web-search-exa

- **来源**: `https://codeload.github.com/TonyDua/dsh-web-search-exa/tar.gz/HEAD`
- **安装包名/版本**: `@tonydua/dsh-web-search-exa` 0.1.3 · commit: 083706b
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 10 处（逐条见下） |
| 4 兼容钉版 | 0.1.3 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/TonyDua/dsh-web-search-exa/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-web-search-exa.install.md](../logs/dsh-web-search-exa.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（6 处）
- `@tonydua/dsh-web-search-exa/README.md:21`
- `@tonydua/dsh-web-search-exa/README.md:65`
- `@tonydua/dsh-web-search-exa/README.md:67`
- `@tonydua/dsh-web-search-exa/lib/index.js:7`
- `@tonydua/dsh-web-search-exa/lib/index.js:240`
- `@tonydua/dsh-web-search-exa/lib/index.js:306`
> 判定: README + 代码注释：**匿名 MCP 路径无需任何凭据**（Exa 公开无鉴权接口），无敏感行为。

### 安装钩子（2 处）
- `@tonydua/dsh-web-search-exa/README.md:132`
- `@tonydua/dsh-web-search-exa/README.zh.md:98`
> 判定: README 提及 prepare 相关报错（文档文本），非安装脚本。

### 网络出口（2 处）
- `@tonydua/dsh-web-search-exa/lib/index.js:261`
- `@tonydua/dsh-web-search-exa/lib/index.js:317`
> 判定: fetch 目标是 Exa 官方 API/MCP 端点（apiURL/mcpURL，用户可配置），属搜索功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/TonyDua/dsh-web-search-exa/tar.gz/HEAD` → `@tonydua/dsh-web-search-exa@0.1.3`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 8 source files scanned; 10 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

