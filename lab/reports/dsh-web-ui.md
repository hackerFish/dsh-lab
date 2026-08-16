# dsh-web-ui

- **来源**: `https://codeload.github.com/zhu1090093659/dsh-web-ui/tar.gz/HEAD`
- **安装包名/版本**: `—` unknown · commit: f57b766
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ❌ 未通过（安装失败）

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ❌ 失败 |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 安装失败，未进入扫描 |
| 4 兼容钉版 | unknown · DSH 0.1.0-rc.6 |

## 失败原因

```
安装超时 — 两次 280s 超时（依赖解析/构建阶段网络挂起），如实记录为未完成
```

> 环境因素与插件问题分开记录：见下方 English Summary 的 `failure cause`。

## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/zhu1090093659/dsh-web-ui/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-web-ui.install.md](../logs/dsh-web-ui.install.md)

## English Summary

- **Install**: ❌ failed — `https://codeload.github.com/zhu1090093659/dsh-web-ui/tar.gz/HEAD`
- **failure cause**: 安装超时 — 两次 280s 超时（依赖解析/构建阶段网络挂起），如实记录为未完成
- **Smoke**: ⏳ not run (install gate failed)
- **Verdict**: ❌ not installable under DSH 0.1.0-rc.6 at test time

