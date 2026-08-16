# dsh-opencode-go-usage

- **来源**: `https://codeload.github.com/v587d/dsh-opencode-go-usage/tar.gz/HEAD`
- **安装包名/版本**: `dsh-ocgo-usage` 0.1.1 · commit: e05301a
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 55 处（逐条见下） |
| 4 兼容钉版 | 0.1.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/v587d/dsh-opencode-go-usage/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-opencode-go-usage.install.md](../logs/dsh-opencode-go-usage.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（14 处）
- `dsh-ocgo-usage/README.en.md:98`
- `dsh-ocgo-usage/README.en.md:108`
- `dsh-ocgo-usage/README.en.md:121`
- `dsh-ocgo-usage/README.md:98`
- `dsh-ocgo-usage/README.md:108`
- `dsh-ocgo-usage/README.md:121`
- `dsh-ocgo-usage/lib/config-BvPqoqlp.js:28`
- `dsh-ocgo-usage/lib/config-DrvJtfuB.js:25`
- `dsh-ocgo-usage/lib/config-KWbOD-EK.js:28`
- `dsh-ocgo-usage/lib/types/client/OcgoDockEntry.js:210`
- `dsh-ocgo-usage/lib/types/config.d.ts:28`
- `dsh-ocgo-usage/lib/types/config.js:30`
- `dsh-ocgo-usage/src/client/OcgoDockEntry.tsx:234`
- `dsh-ocgo-usage/src/config.ts:35`
> 判定: README 文档文本 + DSH home 路径解析（/Users/matiansa/.dsh 或 ~/.dsh），无异常。
### 混淆线索（3 处）
- `dsh-ocgo-usage/lib/client.js:23`
- `dsh-ocgo-usage/lib/types/client/OcgoDockEntry.js:293`
- `dsh-ocgo-usage/lib/types/client/OcgoDockEntry.js:295`
> 判定: CSS 打包产物与 JSX 组件产物，正常构建输出。
### 网络出口（20 处）
- `dsh-ocgo-usage/lib/client.js:81`
- `dsh-ocgo-usage/lib/client.js:82`
- `dsh-ocgo-usage/lib/client.js:88`
- `dsh-ocgo-usage/lib/client.js:89`
- `dsh-ocgo-usage/lib/client.js:90`
- `dsh-ocgo-usage/lib/client.js:91`
- `dsh-ocgo-usage/lib/index.js:134`
- `dsh-ocgo-usage/lib/types/api.js:34`
- `dsh-ocgo-usage/lib/types/client/OcgoDockEntry.js:21`
- `dsh-ocgo-usage/lib/types/client/OcgoDockEntry.js:22`
- `dsh-ocgo-usage/lib/types/client/OcgoDockEntry.js:30`
- `dsh-ocgo-usage/lib/types/client/OcgoDockEntry.js:31`
- `dsh-ocgo-usage/lib/types/client/OcgoDockEntry.js:32`
- `dsh-ocgo-usage/lib/types/client/OcgoDockEntry.js:33`
- `dsh-ocgo-usage/lib/types/types.d.ts:22`
- `dsh-ocgo-usage/lib/types/types.d.ts:46`
- `dsh-ocgo-usage/src/api.ts:41`
- `dsh-ocgo-usage/src/client/OcgoDockEntry.tsx:28`
- `dsh-ocgo-usage/src/types.ts:26`
- `dsh-ocgo-usage/src/types.ts:53`
> 判定: 客户端 fetch 全部是自有路由 /api/ocgo-usage*；host 端 fetch 目标由 safeFetchText 调用方传入（官方接口），无第三方外联。
### 文件写入/删除（18 处）
- `dsh-ocgo-usage/lib/config-BvPqoqlp.js:1`
- `dsh-ocgo-usage/lib/config-BvPqoqlp.js:91`
- `dsh-ocgo-usage/lib/config-KWbOD-EK.js:1`
- `dsh-ocgo-usage/lib/config-KWbOD-EK.js:91`
- `dsh-ocgo-usage/lib/types/config.js:17`
- `dsh-ocgo-usage/lib/types/config.js:100`
- `dsh-ocgo-usage/src/config.test.ts:6`
- `dsh-ocgo-usage/src/config.test.ts:78`
- `dsh-ocgo-usage/src/config.test.ts:105`
- `dsh-ocgo-usage/src/config.test.ts:117`
- `dsh-ocgo-usage/src/config.test.ts:130`
- `dsh-ocgo-usage/src/config.test.ts:149`
- `dsh-ocgo-usage/src/config.test.ts:182`
- `dsh-ocgo-usage/src/config.test.ts:198`
- `dsh-ocgo-usage/src/config.ts:18`
- `dsh-ocgo-usage/src/config.ts:129`
- `dsh-ocgo-usage/src/service.test.ts:6`
- `dsh-ocgo-usage/src/service.test.ts:48`
> 判定: 配置写入权限 0600/384（含密钥文件安全权限）、原子写 + 测试临时目录清理，属功能本身且权限设置正确。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/v587d/dsh-opencode-go-usage/tar.gz/HEAD` → `dsh-ocgo-usage@0.1.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 50 source files scanned; 55 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

