# dsh-web-billing

- **来源**: `https://codeload.github.com/bpc-oss/dsh-web-billing/tar.gz/HEAD`
- **安装包名/版本**: `dsh-web-billing` 1.1.0 · commit: 6d86c7a
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 13 处（逐条见下） |
| 4 兼容钉版 | 1.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/bpc-oss/dsh-web-billing/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-web-billing.install.md](../logs/dsh-web-billing.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（7 处）
- `dsh-web-billing/README.md:111`
- `dsh-web-billing/README.md:117`
- `dsh-web-billing/lib/index.js:102`
- `dsh-web-billing/lib/index.js:439`
- `dsh-web-billing/lib/index.js:449`
- `dsh-web-billing/lib/index.js:450`
- `dsh-web-billing/lib/index.js:452`
> 判定: 通过 credentials 服务解析 DEEPSEEK_API_KEY（查余额），属功能本身。

### 网络出口（3 处）
- `dsh-web-billing/lib/balance.js:146`
- `dsh-web-billing/lib/client.js:89`
- `dsh-web-billing/lib/client.js:118`
> 判定: fetch 余额端点（this.endpoint，官方/自配）+ 自有路由 /billing/*，无外联。

### 混淆线索（1 处）
- `dsh-web-billing/lib/client.js:10`
> 判定: CSS 打包产物，正常。

### 文件写入/删除（2 处）
- `dsh-web-billing/lib/index.js:25`
- `dsh-web-billing/lib/index.js:358`
> 判定: 账本原子写（tmp+rename），属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/bpc-oss/dsh-web-billing/tar.gz/HEAD` → `dsh-web-billing@1.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 11 source files scanned; 13 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

