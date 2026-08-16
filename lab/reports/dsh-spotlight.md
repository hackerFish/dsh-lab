# dsh-spotlight

- **来源**: GitHub [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) · npm 包名 `@0xsline/dsh-spotlight`
- **版本**: 0.0.2 · commit `dd7ef5e`（main）
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-16
- **结论**: ✅ 推荐（运行代码无命中；仓库自带 7 个 SKILL.md 开发文档，适合想写插件的人）

## 四关结果

| 关 | 结果 |
|---|---|
| 安装 | ✅（本地目录路径） |
| 冒烟 | ⏳ 未执行（需模型凭据，本环境未提供） |
| 安全快检 | 命中全部在文档/测试，运行代码无命中，见下 |
| 兼容钉版 | 插件 0.0.2 · DSH 0.1.0-rc.6 |

## 安装

```bash
git clone https://github.com/0xsline/dsh-spotlight
dsh plugin --profile web add ./dsh-spotlight --ignore-workspace-root-check
# 或 npm: dsh plugin --profile web add @0xsline/dsh-spotlight --ignore-workspace-root-check
```

安装日志要点：

```
dependencies:
+ @0xsline/dsh-spotlight 0.0.2 <- ../../../_src/dsh-spotlight
Done in 670ms
```

## 安全快检（`tools/scan.mjs`，58 个文件）

| 类别 | 命中 | 判定 |
|---|---|---|
| 凭证读取 | 9 | 全部在 `.agents/skills/*/SKILL.md` 与测试快照文档中（提及 `~/.dsh` 路径的说明文字） |
| 混淆线索 | 1 | `docs/dsh-plugin-contracts.md` 超长行（文档） |
| 安装钩子 | 1 | `prepare: node scripts/prepare.mjs`（自带的 patch 提取脚本，git 安装需 allowBuilds 放行） |
| 网络/子进程/动态执行/文件写/原生模块 | 0 | — |

## 附注

仓库自带一整套 `.agents/skills/`（plugin-plan / implement / test / release 等 7 个 SKILL.md）——相当于作者把自己写插件的流程文档随包发布。对学习写插件的人来说是附赠教材（dsh-lab 的 [02-first-plugin.md](../../guides/02-first-plugin.md) 也推荐参考这类仓库）。

## 一句话

键盘优先的命令面板（command palette）。运行时代码快检无命中；注意 git 直装需要放行其 `prepare` 脚本。
