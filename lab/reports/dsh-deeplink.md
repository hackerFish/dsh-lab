# dsh-deeplink

- **来源**: GitHub [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) · npm 包名 `@dsh-community/dsh-deeplink`
- **版本**: 0.5.0 · commit `0ec5da3`（main）
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-16
- **结论**: ✅ 推荐（首批四个被测插件中快检最干净的一个）

## 四关结果

| 关 | 结果 |
|---|---|
| 安装 | ✅（本地目录路径） |
| 冒烟 | ⏳ 未执行（需模型凭据，本环境未提供） |
| 安全快检 | 代码零命中，仅 README 文本 2 处 |
| 兼容钉版 | 插件 0.5.0 · DSH 0.1.0-rc.6 |

## 安装

```bash
git clone https://github.com/qyw233/dsh-deeplink
dsh plugin --profile web add ./dsh-deeplink --ignore-workspace-root-check
# 或 npm: dsh plugin --profile web add @dsh-community/dsh-deeplink --ignore-workspace-root-check
```

安装日志要点：

```
dependencies:
+ @dsh-community/dsh-deeplink 0.5.0 <- ../../../_src/dsh-deeplink
Done in 645ms
```

## 安全快检（`tools/scan.mjs`，7 个文件）

| 类别 | 命中 | 判定 |
|---|---|---|
| 凭证读取 | 2 | 均为 README 中提到的 `~/.dsh` 路径文本 |
| 网络/子进程/动态执行/文件写/原生模块 | 0 | — |

## 一句话

通过 `?session=` / `?workspace=` 参数直接打开指定会话或工作区。功能单一、零依赖、无构建脚本、无网络调用——小工具类的典范。
