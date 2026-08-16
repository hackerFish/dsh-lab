# dsh-plugin-grok2api-media-tool

- **来源**: `https://codeload.github.com/lsjspl/dsh-plugin-grok2api-media-tool/tar.gz/HEAD`
- **安装包名/版本**: `dsh-plugin-grok2api-media-tool` 0.7.6 · commit: e85e6b3
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 21 处（逐条见下） |
| 4 兼容钉版 | 0.7.6 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/lsjspl/dsh-plugin-grok2api-media-tool/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-plugin-grok2api-media-tool.install.md](../logs/dsh-plugin-grok2api-media-tool.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（10 处）
- `dsh-plugin-grok2api-media-tool/README.md:31`
- `dsh-plugin-grok2api-media-tool/README.md:53`
- `dsh-plugin-grok2api-media-tool/api.js:63`
- `dsh-plugin-grok2api-media-tool/index.js:101`
- `dsh-plugin-grok2api-media-tool/index.js:111`
- `dsh-plugin-grok2api-media-tool/index.js:113`
- `dsh-plugin-grok2api-media-tool/index.js:118`
- `dsh-plugin-grok2api-media-tool/index.js:790`
- `dsh-plugin-grok2api-media-tool/index.js:934`
- `dsh-plugin-grok2api-media-tool/index.js:936`
> 判定: README + 凭据解析（key 来自配置或 dsh credentials，回退读取本机凭据文档），属功能本身。

### 网络出口（3 处）
- `dsh-plugin-grok2api-media-tool/api.js:71`
- `dsh-plugin-grok2api-media-tool/client.js:103`
- `dsh-plugin-grok2api-media-tool/media.js:161`
> 判定: fetch 目标为 grok2api 服务端（cfg.baseUrl，用户配置）+ 自有上传路由 + 媒体 URL，无隐蔽外联。

### 文件写入/删除（7 处）
- `dsh-plugin-grok2api-media-tool/index.js:33`
- `dsh-plugin-grok2api-media-tool/index.js:299`
- `dsh-plugin-grok2api-media-tool/media-proxy.js:19`
- `dsh-plugin-grok2api-media-tool/media-proxy.js:63`
- `dsh-plugin-grok2api-media-tool/media-proxy.js:229`
- `dsh-plugin-grok2api-media-tool/media.js:11`
- `dsh-plugin-grok2api-media-tool/media.js:143`
> 判定: 凭据文档与媒体文件写入（凭据文件 0600/独占创建，安全正向），属功能本身。

### 混淆线索（1 处）
- `dsh-plugin-grok2api-media-tool/media.js:173`
> 判定: base64 图片解码（媒体处理），正常。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/lsjspl/dsh-plugin-grok2api-media-tool/tar.gz/HEAD` → `dsh-plugin-grok2api-media-tool@0.7.6`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 9 source files scanned; 21 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

