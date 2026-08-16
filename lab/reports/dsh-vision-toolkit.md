# dsh-vision-toolkit

- **来源**: `https://codeload.github.com/Anionex/dsh-vision-toolkit/tar.gz/HEAD`
- **安装包名/版本**: `@anionex/dsh-vision-toolkit` 0.1.13 · commit: dd2f0f4
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 100 处（逐条见下） |
| 4 兼容钉版 | 0.1.13 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Anionex/dsh-vision-toolkit/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-vision-toolkit.install.md](../logs/dsh-vision-toolkit.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `@anionex/dsh-vision-toolkit/README.md:214`
- `@anionex/dsh-vision-toolkit/docs/requirements-traceability/README.md:14`
- `@anionex/dsh-vision-toolkit/docs/requirements-traceability/README.md:38`
- `@anionex/dsh-vision-toolkit/lib/client.js:36`
- `@anionex/dsh-vision-toolkit/lib/client.js:595`
- `@anionex/dsh-vision-toolkit/lib/client.js:1095`
- `@anionex/dsh-vision-toolkit/lib/client.js:1101`
- `@anionex/dsh-vision-toolkit/lib/config.js:5`
- `@anionex/dsh-vision-toolkit/lib/config.js:9`
- `@anionex/dsh-vision-toolkit/lib/config.js:157`
- `@anionex/dsh-vision-toolkit/lib/errors.js:4`
- `@anionex/dsh-vision-toolkit/lib/index.js:23`
- `@anionex/dsh-vision-toolkit/lib/runtime.js:367`
- `@anionex/dsh-vision-toolkit/lib/runtime.js:369`
- `@anionex/dsh-vision-toolkit/lib/runtime.js:1299`
> 判定: 凭据经 DSH credentials 解析（README 明示'保存后不再显示'）+ 打包公开密钥说明，属功能本身。
- … 其余 5 处

### 混淆线索（20 处）
- `@anionex/dsh-vision-toolkit/README.md:296`
- `@anionex/dsh-vision-toolkit/docs/requirements-traceability/README.md:27`
- `@anionex/dsh-vision-toolkit/examples/ui-restoration/implementation.html:89`
- `@anionex/dsh-vision-toolkit/lib/artifact-access.js:282`
- `@anionex/dsh-vision-toolkit/lib/artifact-access.js:290`
- `@anionex/dsh-vision-toolkit/lib/client.js:492`
- `@anionex/dsh-vision-toolkit/lib/client.js:545`
- `@anionex/dsh-vision-toolkit/lib/client.js:554`
- `@anionex/dsh-vision-toolkit/lib/client.js:571`
- `@anionex/dsh-vision-toolkit/lib/client.js:1026`
- `@anionex/dsh-vision-toolkit/lib/client.js:1029`
- `@anionex/dsh-vision-toolkit/lib/client.js:1033`
- `@anionex/dsh-vision-toolkit/lib/client.js:1034`
- `@anionex/dsh-vision-toolkit/lib/client.js:1035`
- `@anionex/dsh-vision-toolkit/lib/client.js:1036`
> 判定: base64url 签名/工件解码（插件自更新签名验证，安全机制）+ JSX/CSS 打包产物 + 文档长行，均正常。
- … 其余 5 处

### 文件写入/删除（20 处）
- `@anionex/dsh-vision-toolkit/lib/artifact-access.js:9`
- `@anionex/dsh-vision-toolkit/lib/artifact-access.js:122`
- `@anionex/dsh-vision-toolkit/lib/image-input-variants.js:12`
- `@anionex/dsh-vision-toolkit/lib/image-input-variants.js:86`
- `@anionex/dsh-vision-toolkit/lib/image-input-variants.js:96`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:12`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:40`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:56`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:57`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:67`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:71`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:80`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:82`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:101`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:455`
> 判定: 自更新原子写（0600/rename）与工件落盘（flag wx 防覆盖，安全正向），属功能本身。
- … 其余 5 处

### 网络出口（20 处）
- `@anionex/dsh-vision-toolkit/lib/client.js:595`
- `@anionex/dsh-vision-toolkit/lib/client.js:1408`
- `@anionex/dsh-vision-toolkit/lib/client.js:1662`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:154`
- `@anionex/dsh-vision-toolkit/lib/runtime.js:1344`
- `@anionex/dsh-vision-toolkit/src/client/index.tsx:857`
- `@anionex/dsh-vision-toolkit/src/client/paste-images.tsx:363`
- `@anionex/dsh-vision-toolkit/src/client/paste-images.tsx:621`
- `@anionex/dsh-vision-toolkit/src/plugin-update.ts:266`
- `@anionex/dsh-vision-toolkit/src/runtime.ts:1792`
- `@anionex/dsh-vision-toolkit/vendor/agent-vision-toolkit/skills/vision-tools/scripts/html_shot.py:81`
- `@anionex/dsh-vision-toolkit/vendor/agent-vision-toolkit/skills/vision-tools/scripts/html_shot.py:89`
- `@anionex/dsh-vision-toolkit/vendor/agent-vision-toolkit/skills/vision-tools/scripts/html_shot.py:91`
- `@anionex/dsh-vision-toolkit/vendor/agent-vision-toolkit/skills/vision-tools/scripts/html_shot.py:92`
- `@anionex/dsh-vision-toolkit/vendor/agent-vision-toolkit/skills/vision-tools/scripts/html_shot.py:97`
> 判定: 自有路由（SETTINGS_ROUTE/PASTE_*）+ 本地健康检查（2s 超时）+ 视觉供应商 endpoint（用户配置）+ 本地 Chrome DevTools WebSocket（html_shot 截图工具），无外联。
- … 其余 5 处

### 子进程（20 处）
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:9`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:39`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:121`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:142`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:401`
- `@anionex/dsh-vision-toolkit/lib/plugin-update.js:745`
- `@anionex/dsh-vision-toolkit/lib/runtime-install.js:56`
- `@anionex/dsh-vision-toolkit/lib/upstream.js:466`
- `@anionex/dsh-vision-toolkit/lib/upstream.js:501`
- `@anionex/dsh-vision-toolkit/lib/upstream.js:544`
- `@anionex/dsh-vision-toolkit/src/plugin-update.ts:10`
- `@anionex/dsh-vision-toolkit/src/plugin-update.ts:151`
- `@anionex/dsh-vision-toolkit/src/plugin-update.ts:233`
- `@anionex/dsh-vision-toolkit/src/plugin-update.ts:254`
- `@anionex/dsh-vision-toolkit/src/plugin-update.ts:501`
> 判定: spawn pnpm/node 执行插件自更新流程（healthUrl 验证 + 原子替换）与视觉工具进程，属功能本身。
- … 其余 5 处

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Anionex/dsh-vision-toolkit/tar.gz/HEAD` → `@anionex/dsh-vision-toolkit@0.1.13`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 97 source files scanned; 100 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

