# dsh-cowork

- **来源**: `https://codeload.github.com/Jesse-njx/dsh-cowork/tar.gz/HEAD`
- **安装包名/版本**: `dsh-cowork` 0.1.0 · commit: 2ae5cf7
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 54 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Jesse-njx/dsh-cowork/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-cowork.install.md](../logs/dsh-cowork.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 安装钩子（1 处）
- `dsh-cowork/package.json:16`
> 判定: prepare 为 pnpm -r build（monorepo 构建），无安装期危险操作。
### 凭证读取（20 处）
### 网络出口（8 处）
- `dsh-cowork/packages/chatnode-wechat/lib/gateway/index.d.ts:93`
- `dsh-cowork/packages/chatnode-wechat/lib/gateway/index.d.ts:240`
- `dsh-cowork/packages/chatnode-wechat/lib/gateway/index.js:243`
- `dsh-cowork/packages/chatnode-wechat/lib/gateway/media.d.ts:38`
- `dsh-cowork/packages/chatnode-wechat/lib/gateway/media.js:107`
- `dsh-cowork/packages/chatnode-wechat/src/gateway/index.ts:127`
- `dsh-cowork/packages/chatnode-wechat/src/gateway/index.ts:356`
- `dsh-cowork/packages/chatnode-wechat/src/gateway/media.ts:117`
> 判定: 媒体下载器带 SSRF 防护（CDN 主机白名单）+ typing ticket 刷新，属微信网关功能本身。
### 混淆线索（2 处）
- `dsh-cowork/packages/chatnode-wechat/lib/gateway/media.js:71`
- `dsh-cowork/packages/chatnode-wechat/src/gateway/media.ts:81`
> 判定: Buffer base64 解码是微信媒体 AES 解密（正常加密解密流程）。
### 文件写入/删除（20 处）
- `dsh-cowork/packages/cli/lib/bin/write.js:19`
- `dsh-cowork/packages/cli/lib/bin/write.js:32`
- `dsh-cowork/packages/cli/lib/bin/write.js:33`
- `dsh-cowork/packages/cli/lib/bin/write.js:37`
- `dsh-cowork/packages/cli/src/bin/write.ts:20`
- `dsh-cowork/packages/cli/src/bin/write.ts:35`
- `dsh-cowork/packages/cli/src/bin/write.ts:36`
- `dsh-cowork/packages/cli/src/bin/write.ts:39`
- `dsh-cowork/packages/cli/test/cli.test.ts:4`
- `dsh-cowork/packages/cli/test/cli.test.ts:49`
- `dsh-cowork/packages/cli/test/cli.test.ts:58`
- `dsh-cowork/packages/cli/test/cli.test.ts:67`
- `dsh-cowork/packages/cli/test/cli.test.ts:74`
- `dsh-cowork/packages/cli/test/cli.test.ts:83`
- `dsh-cowork/packages/cli/test/cli.test.ts:89`
- `dsh-cowork/packages/core/scripts/make-fixtures.mjs:6`
- `dsh-cowork/packages/core/scripts/make-fixtures.mjs:36`
- `dsh-cowork/packages/core/scripts/make-fixtures.mjs:51`
- `dsh-cowork/packages/core/scripts/make-fixtures.mjs:68`
- `dsh-cowork/packages/core/scripts/make-fixtures.mjs:97`
> 判定: CLI 写 xlsx 原子写（tmp+rename）+ 测试 fixtures 生成，属功能本身。
### 子进程（3 处）
- `dsh-cowork/packages/cli/test/cli.test.ts:3`
- `dsh-cowork/packages/core/scripts/make-fixtures.mjs:9`
- `dsh-cowork/scripts/publish.mjs:14`
> 判定: execFileSync 出现在测试与发布脚本（开发期用途）。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Jesse-njx/dsh-cowork/tar.gz/HEAD` → `dsh-cowork@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 144 source files scanned; 54 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

