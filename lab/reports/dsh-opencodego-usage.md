# dsh-opencodego-usage

- **来源**: `https://codeload.github.com/BeiZi6/dsh-opencodego-usage/tar.gz/HEAD`
- **安装包名/版本**: `dsh-opencodego-usage` 0.1.0 · commit: 0990d71
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
dsh plugin --profile web add https://codeload.github.com/BeiZi6/dsh-opencodego-usage/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-opencodego-usage.install.md](../logs/dsh-opencodego-usage.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（4 处）
- `dsh-opencodego-usage/README.md:11`
- `dsh-opencodego-usage/README.md:53`
- `dsh-opencodego-usage/index.js:11`
- `dsh-opencodego-usage/index.js:50`
> 判定: README 说明 + 从 DSH credentials 读取 API key + 状态文件落 DSH_HOME，属功能本身。
### 网络出口（3 处）
- `dsh-opencodego-usage/client.js:4`
- `dsh-opencodego-usage/client.js:151`
- `dsh-opencodego-usage/client.js:163`
> 判定: fetch 自有路由 /opencodego-usage 与官方 API 列表（URLS），无第三方外联。
### 子进程（1 处）
- `dsh-opencodego-usage/index.js:4`
> 判定: execFile 调用系统 curl 请求官方配额 API（带凭据头），无 shell 拼接，属功能本身。
### 文件写入/删除（2 处）
- `dsh-opencodego-usage/index.js:5`
- `dsh-opencodego-usage/index.js:178`
> 判定: 状态文件写入 DSH_HOME（可 OCG_STATE_PATH 覆盖），本地持久化属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/BeiZi6/dsh-opencodego-usage/tar.gz/HEAD` → `dsh-opencodego-usage@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 10 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

