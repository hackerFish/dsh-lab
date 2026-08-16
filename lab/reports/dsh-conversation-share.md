# dsh-conversation-share

- **来源**: `https://codeload.github.com/bill9109/dsh-conversation-share/tar.gz/HEAD`
- **安装包名/版本**: `@bill9109/dsh-conversation-share` 0.1.1 · commit: f582d8e
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 11 处（逐条见下） |
| 4 兼容钉版 | 0.1.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/bill9109/dsh-conversation-share/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-conversation-share.install.md](../logs/dsh-conversation-share.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（9 处）
- `@bill9109/dsh-conversation-share/lib/client.js:273`
- `@bill9109/dsh-conversation-share/lib/client.js:549`
- `@bill9109/dsh-conversation-share/lib/client.js:2188`
- `@bill9109/dsh-conversation-share/lib/types/client/modal.js:119`
- `@bill9109/dsh-conversation-share/lib/types/vendor/html-to-image/dataurl.js:13`
- `@bill9109/dsh-conversation-share/lib/types/vendor/html-to-image/embed-webfonts.js:12`
- `@bill9109/dsh-conversation-share/src/client/modal.ts:129`
- `@bill9109/dsh-conversation-share/src/vendor/html-to-image/dataurl.ts:13`
- `@bill9109/dsh-conversation-share/src/vendor/html-to-image/embed-webfonts.ts:12`
> 判定: fetch 目标是会话分享所需的资源 URL（分享页样式/字体/data URL），目标由调用方传入，属功能本身。

### 混淆线索（2 处）
- `@bill9109/dsh-conversation-share/lib/types/vendor/html-to-image/util.js:137`
- `@bill9109/dsh-conversation-share/src/vendor/html-to-image/util.ts:137`
> 判定: html-to-image 库的 canvas atob（分享截图编码），正常。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/bill9109/dsh-conversation-share/tar.gz/HEAD` → `@bill9109/dsh-conversation-share@0.1.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 82 source files scanned; 11 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

