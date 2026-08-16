# dsh-navbar

- **来源**: GitHub [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) · npm 包名 `@vlln/dsh-navbar`
- **版本**: 0.3.0 · commit `10e9d15`（main）
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-16
- **结论**: ✅ 推荐（第二批被测插件中快检最干净：11 个文件零命中）

## 四关结果

| 关 | 结果 |
|---|---|
| 安装 | ✅（本地目录路径，940ms 完成） |
| 冒烟 | ⏳ 未执行（需模型凭据，本环境未提供） |
| 安全快检 | 代码零命中 |
| 兼容钉版 | 插件 0.3.0 · DSH 0.1.0-rc.6 |

## 安装

```bash
git clone https://github.com/vlln/dsh-navbar
dsh plugin --profile web add ./dsh-navbar --ignore-workspace-root-check
# 或 npm: dsh plugin --profile web add @vlln/dsh-navbar --ignore-workspace-root-check
```

安装日志要点：

```
dependencies:
+ @vlln/dsh-navbar 0.3.0 <- ../../../_src/dsh-navbar
Done in 940ms
```

## 安全快检（`tools/scan.mjs`，11 个文件）

**零命中**：无网络出口、无子进程、无动态执行、无文件写入、无凭证读取、无原生模块、无安装钩子模式。

## 一句话

会话内节点导航栏（在用户消息之间快速跳转）。零依赖、无构建脚本（package.json 仅 `build` 脚本）、代码干净——与 dsh-deeplink 同属"小工具典范"梯队。
