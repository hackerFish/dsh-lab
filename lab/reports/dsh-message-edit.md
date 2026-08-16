# dsh-message-edit

- **来源**: `https://codeload.github.com/Moeblack/dsh-message-edit/tar.gz/HEAD`
- **安装包名/版本**: `dsh-message-edit` 0.2.3 · commit: b78a167
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 6 处（逐条见下） |
| 4 兼容钉版 | 0.2.3 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Moeblack/dsh-message-edit/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-message-edit.install.md](../logs/dsh-message-edit.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（2 处）
- `dsh-message-edit/client.js:330`
- `dsh-message-edit/client.js:363`
> 判定: 客户端请求插件自己的本地 `/message-edit` 路由，是编辑消息功能本身，并非外联第三方。

### 混淆线索（4 处）
- `dsh-message-edit/client.js:417`
- `dsh-message-edit/client.js:465`
- `dsh-message-edit/client.js:718`
- `dsh-message-edit/client.js:796`
> 判定: 压缩前端里的内联样式与图标路径，正常构建产物。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Moeblack/dsh-message-edit/tar.gz/HEAD` → `dsh-message-edit@0.2.3`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 5 source files scanned; 6 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

