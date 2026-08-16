# dsh-plugins-lancecheney

- **来源**: `https://codeload.github.com/lancecheney/dsh-plugins/tar.gz/HEAD`
- **安装包名/版本**: `dsh-plugins` 0.0.0 · commit: fc5db35
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 26 处（逐条见下） |
| 4 兼容钉版 | 0.0.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/lancecheney/dsh-plugins/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-plugins-lancecheney.install.md](../logs/dsh-plugins-lancecheney.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（12 处）
- `dsh-plugins/packages/dsh-deepseek-balance/README.md:46`
- `dsh-plugins/packages/dsh-deepseek-balance/README.md:50`
- `dsh-plugins/packages/dsh-deepseek-balance/README.zh.md:46`
- `dsh-plugins/packages/dsh-deepseek-balance/README.zh.md:50`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:1`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:17`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:23`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:97`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:98`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:100`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:105`
- `dsh-plugins/packages/dsh-deepseek-balance/package.json:33`
> 判定: balance 插件通过 dsh credentials 解析 DEEPSEEK_API_KEY（README 明示浏览器只访问本地路由，host 转发），属功能本身。

### 混淆线索（3 处）
- `dsh-plugins/packages/dsh-deepseek-balance/lib/client.js:9`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/client.js:10`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/client.js:23`
> 判定: CSS 打包产物，正常。

### 网络出口（9 处）
- `dsh-plugins/packages/dsh-deepseek-balance/lib/client.js:75`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/client.js:76`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/client.js:77`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/client.js:146`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/client.js:147`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/client.js:215`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:225`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:226`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:625`
> 判定: 自有路由 /api/deepseek-balance* + 官方价格页（CN/US，带超时）+ 官方余额接口，无外联。

### 文件写入/删除（2 处）
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:4`
- `dsh-plugins/packages/dsh-deepseek-balance/lib/index.js:597`
> 判定: token 名缓存文件写入，属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/lancecheney/dsh-plugins/tar.gz/HEAD` → `dsh-plugins@0.0.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 10 source files scanned; 26 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

