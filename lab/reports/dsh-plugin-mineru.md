# dsh-plugin-mineru

- **来源**: `https://codeload.github.com/HuanLinOTO/dsh-plugin-mineru/tar.gz/HEAD`
- **安装包名/版本**: `@huanlin/dsh-plugin-mineru` 0.2.2 · commit: 79809aa
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 8 处（逐条见下） |
| 4 兼容钉版 | 0.2.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/HuanLinOTO/dsh-plugin-mineru/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-plugin-mineru.install.md](../logs/dsh-plugin-mineru.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（1 处）
- `@huanlin/dsh-plugin-mineru/lib/client.js:10`
> 判定: CSS 打包产物，正常。

### 文件写入/删除（3 处）
- `@huanlin/dsh-plugin-mineru/lib/index.js:2`
- `@huanlin/dsh-plugin-mineru/lib/index.js:225`
- `@huanlin/dsh-plugin-mineru/lib/index.js:565`
> 判定: 解析结果写本地文件（md/raw 输出），属功能本身。

### 网络出口（1 处）
- `@huanlin/dsh-plugin-mineru/lib/index.js:129`
> 判定: fetch 目标是 MinerU 服务（this.baseURL，用户配置的自建解析服务），属功能本身。

### 凭证读取（3 处）
- `@huanlin/dsh-plugin-mineru/lib/index.js:846`
- `@huanlin/dsh-plugin-mineru/lib/index.js:847`
- `@huanlin/dsh-plugin-mineru/lib/index.js:848`
> 判定: 从 dsh credentials 解析 MinerU API key，属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/HuanLinOTO/dsh-plugin-mineru/tar.gz/HEAD` → `@huanlin/dsh-plugin-mineru@0.2.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 8 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

