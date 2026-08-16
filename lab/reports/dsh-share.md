# dsh-share

- **来源**: GitHub [zljr/dsh-share](https://github.com/zljr/dsh-share) · npm 包名 `@zljr/dsh-share`
- **版本**: 0.1.1 · commit `c3f21ec`（main）
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-16
- **结论**: ✅ 推荐（行为与功能一致；分享是"冻结快照"，不随会话继续变化）

## 四关结果

| 关 | 结果 |
|---|---|
| 安装 | ✅（本地目录路径） |
| 冒烟 | ⏳ 未执行（需模型凭据，本环境未提供） |
| 安全快检 | 命中均有合理解释，见下 |
| 兼容钉版 | 插件 0.1.1 · DSH 0.1.0-rc.6 |

## 安装

```bash
git clone https://github.com/zljr/dsh-share
dsh plugin --profile web add ./dsh-share --ignore-workspace-root-check
# 或 npm: dsh plugin --profile web add @zljr/dsh-share --ignore-workspace-root-check
```

安装日志要点：

```
dependencies:
+ @zljr/dsh-share 0.1.1 <- ../../../_src/dsh-share
Done in 754ms
```

## 安全快检（`tools/scan.mjs`，31 个文件）

| 类别 | 命中 | 判定 |
|---|---|---|
| 文件写入/删除 | 4 | `src/host/store.ts`：把 token→快照注册表持久化为 `~/.dsh` 下的 JSON（插件核心功能，且实现细节好：先写临时文件再 rename，原子落盘） |
| 网络出口 | 3 | 全部在 `tests/host.test.mjs`，运行代码无命中 |
| 动态执行 | 2 | `scripts/build.mjs`（构建）与 `tests/client.test.mjs`（测试） |
| 凭证读取 | 2 | README 文本提及 `~/.dsh` 路径 |
| 子进程/原生模块 | 0 | — |

## 附注（功能设计上值得表扬的一点）

作者在源码注释里明确：分享的是**冻结快照**（transcript 与元数据一起落盘），之后打开分享**不会**重新读取可能已增长或被删除的会话；过期分享每次变更时被清理、绝不服务。这是"分享类"插件里少见的把数据边界想清楚的做法。

## 一句话

把当前会话通过 LAN 分享为只读、token 保护的 HTML 快照（含会话统计与 Markdown 渲染）。运行时代码干净，落盘行为与功能一致。
