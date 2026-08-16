# dsh-recommend

- **来源**: GitHub [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) · npm `dsh-recommend`
- **版本**: npm 安装得 0.2.0（仓库 README 标注 0.3.0，存在发布滞后）· 测试日期 2026-08-16
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS
- **结论**: ✅ 推荐（行为与宣称一致——这是"给插件打榜的插件"，我们把它也测了一遍）

## 四关结果

| 关 | 结果 |
|---|---|
| 安装 | ✅（npm 直装，1.3s） |
| 冒烟 | ⏳ 未执行（需模型凭据，本环境未提供） |
| 安全快检 | 命中与功能一致，见下 |
| 兼容钉版 | 插件 0.2.0（npm） · DSH 0.1.0-rc.6 |

## 安装

```bash
dsh plugin --profile web add dsh-recommend --ignore-workspace-root-check
```

安装日志要点：

```
dependencies:
+ dsh-recommend 0.2.0
Done in 1.3s
```

## 安全快检（`tools/scan.mjs`，10 个文件）

| 类别 | 命中 | 判定 |
|---|---|---|
| 网络出口 | 2 | 拉取榜单数据（`registry.json`，其功能） |
| 文件写入/删除 | 2 | 本地缓存榜单数据 |
| 子进程/动态执行/凭证/原生模块 | 0 | — |

## 元视角备注

dsh-recommend 本身是一个"插件排行榜"（公开评分模型 + 每 2 小时自动抓取 + 静态榜单站）。**它给插件打分，dsh-lab 给插件做实测——两者是互补关系，不是竞争关系**：它的分是"流行度/维护性"信号，我们的报告是"能不能装、代码里有什么"的证据。这也是我们把它纳入实测的原因：榜单工具本身也得能被验证。

## 一句话

想在不装插件的情况下浏览"哪些 DSH 插件值得看"，先装它；想验证某个插件"真的能装、代码干净"，来看 [dsh-lab](../../INDEX.md)。
