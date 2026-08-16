# dsh-balance-meter

- **来源**: `https://codeload.github.com/Ghost011118/dsh-balance-meter/tar.gz/HEAD`
- **安装包名/版本**: `dsh-balance-meter` 0.1.0 · commit: db97c0e
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 40 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Ghost011118/dsh-balance-meter/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-balance-meter.install.md](../logs/dsh-balance-meter.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `dsh-balance-meter/README.md:33`
- `dsh-balance-meter/README.md:34`
- `dsh-balance-meter/README.md:56`
- `dsh-balance-meter/README.md:72`
- `dsh-balance-meter/README.md:105`
- `dsh-balance-meter/README.md:106`
- `dsh-balance-meter/README.md:111`
- `dsh-balance-meter/README.md:114`
- `dsh-balance-meter/README.md:115`
- `dsh-balance-meter/README.zh.md:26`
- `dsh-balance-meter/README.zh.md:47`
- `dsh-balance-meter/README.zh.md:62`
- `dsh-balance-meter/README.zh.md:78`
- `dsh-balance-meter/README.zh.md:80`
- `dsh-balance-meter/README.zh.md:81`
- `dsh-balance-meter/lib/client.js:209`
- `dsh-balance-meter/lib/client.js:248`
- `dsh-balance-meter/lib/index.js:107`
- `dsh-balance-meter/lib/service-3Bkm9MkK.js:2`
- `dsh-balance-meter/lib/service-3Bkm9MkK.js:202`
> 判定: README 文档 + 代码从 DSH 凭据通道（@deepseek-ai/dsh-credentials）解析 DEEPSEEK_API_KEY，密钥只在本机凭据存储中读取，属“余额监控”功能本身。
### 混淆线索（2 处）
- `dsh-balance-meter/lib/client.js:10`
- `dsh-balance-meter/lib/types/client/BalanceDockEntry.js:107`
> 判定: 超长行是打包进产物的 CSS 与 JSX 组件产物，正常构建输出。
### 网络出口（17 处）
- `dsh-balance-meter/lib/client.js:43`
- `dsh-balance-meter/lib/client.js:44`
- `dsh-balance-meter/lib/client.js:50`
- `dsh-balance-meter/lib/client.js:51`
- `dsh-balance-meter/lib/client.js:52`
- `dsh-balance-meter/lib/service-3Bkm9MkK.js:448`
- `dsh-balance-meter/lib/types/client/BalanceDockEntry.js:14`
- `dsh-balance-meter/lib/types/client/BalanceDockEntry.js:15`
- `dsh-balance-meter/lib/types/client/BalanceDockEntry.js:23`
- `dsh-balance-meter/lib/types/client/BalanceDockEntry.js:24`
- `dsh-balance-meter/lib/types/client/BalanceDockEntry.js:25`
- `dsh-balance-meter/lib/types/service.js:264`
- `dsh-balance-meter/src/client/BalanceDockEntry.tsx:40`
- `dsh-balance-meter/src/client/BalanceDockEntry.tsx:49`
- `dsh-balance-meter/src/client/BalanceDockEntry.tsx:50`
- `dsh-balance-meter/src/client/BalanceDockEntry.tsx:51`
- `dsh-balance-meter/src/service.ts:376`
> 判定: 客户端 fetch 全部是自有路由 /api/balance*；host 端 fetch 指向 /user/balance（DeepSeek 官方余额接口），无第三方外联。
### 安装钩子（1 处）
- `dsh-balance-meter/package.json:14`
> 判定: package.json 的 prepare 仅执行 tsdown 构建，无安装期网络或危险操作。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Ghost011118/dsh-balance-meter/tar.gz/HEAD` → `dsh-balance-meter@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 38 source files scanned; 40 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

