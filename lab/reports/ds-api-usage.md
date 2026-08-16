# ds-api-usage

- **来源**: `https://codeload.github.com/Sev7een/ds-api-usage/tar.gz/HEAD`
- **安装包名/版本**: `dsh-plugin-ds-api-usage` 0.1.0 · commit: d764420
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 26 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Sev7een/ds-api-usage/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/ds-api-usage.install.md](../logs/ds-api-usage.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（19 处）
- `dsh-plugin-ds-api-usage/README.md:13`
- `dsh-plugin-ds-api-usage/README.md:24`
- `dsh-plugin-ds-api-usage/README.md:89`
- `dsh-plugin-ds-api-usage/README.md:93`
- `dsh-plugin-ds-api-usage/README.pt-BR.md:13`
- `dsh-plugin-ds-api-usage/README.pt-BR.md:24`
- `dsh-plugin-ds-api-usage/README.pt-BR.md:85`
- `dsh-plugin-ds-api-usage/README.pt-BR.md:89`
- `dsh-plugin-ds-api-usage/README.zh-CN.md:13`
- `dsh-plugin-ds-api-usage/README.zh-CN.md:24`
- `dsh-plugin-ds-api-usage/README.zh-CN.md:85`
- `dsh-plugin-ds-api-usage/README.zh-CN.md:89`
- `dsh-plugin-ds-api-usage/cordis.patch.yml:4`
- `dsh-plugin-ds-api-usage/src/index.js:9`
- `dsh-plugin-ds-api-usage/src/index.js:297`
- … 其余 4 处
> 判定: 这是「余额查询」功能本身——复用部署里已有的 DeepSeek 密钥去调官方余额接口，密钥只发给 api.deepseek.com，README 里的字样只是文档，未见外传。

### 网络出口（4 处）
- `dsh-plugin-ds-api-usage/README.md:29`
- `dsh-plugin-ds-api-usage/README.pt-BR.md:29`
- `dsh-plugin-ds-api-usage/README.zh-CN.md:29`
- `dsh-plugin-ds-api-usage/client/bundle.js:192`
> 判定: 客户端 fetch 的是插件自己注册的本地路由 `/ds-api-usage/snapshot`，用来读取用量快照，是功能本身，并非外联第三方。

### 文件写入/删除（2 处）
- `dsh-plugin-ds-api-usage/src/index.js:205`
- `dsh-plugin-ds-api-usage/src/index.js:206`
> 判定: 把每小时/每日用量统计写进本地 `$DSH_HOME/storages/ds-api-usage.json` 做持久化，是功能本身。

### 子进程（1 处）
- `dsh-plugin-ds-api-usage/src/index.js:311`
> 判定: 用 curl 查 DeepSeek 官方余额接口，是余额查询功能本身，无隐蔽行为。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Sev7een/ds-api-usage/tar.gz/HEAD` → `dsh-plugin-ds-api-usage@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 9 source files scanned; 26 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

