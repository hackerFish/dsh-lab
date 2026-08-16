# dsh-global-rules

- **来源**: npm `dsh-global-rules` · [仓库](https://github.com/badai147/dsh-global-rules)
- **版本**: 0.1.0
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-16
- **结论**: ✅ 推荐（行为与宣称功能一致，零依赖、无构建脚本）

## 四关结果

| 关 | 结果 |
|---|---|
| 安装 | ✅（需 `--ignore-workspace-root-check`，见下） |
| 冒烟 | ⏳ 未执行（需模型凭据，本环境未提供） |
| 安全快检 | 命中与宣称功能一致，见下 |
| 兼容钉版 | 插件 0.1.0 · DSH 0.1.0-rc.6 |

## 安装

```bash
export DSH_HOME=/tmp/dsh-lab-home            # 隔离环境
dsh plugin --profile web add dsh-global-rules --ignore-workspace-root-check
```

**环境摩擦**：pnpm 9 默认拒绝向 profile workspace 根目录添加依赖（`ERR_PNPM_ADDING_TO_ROOT`），需要追加 `--ignore-workspace-root-check` 或 `export npm_config_ignore_workspace_root_check=true`。这不是插件问题。

安装日志要点：

```
Progress: resolved 1, reused 0, downloaded 1, added 1, done
dependencies:
+ dsh-global-rules 0.1.0
Done in 13.1s
```

## 安全快检（`tools/scan.mjs`，6 个文件）

| 类别 | 命中 | 判定 |
|---|---|---|
| 凭证读取 | 7（代码 2 + README/package.json 文本 5） | 代码两处为读写 `~/.dsh/AGENTS.md`，与插件宣称功能一致 |
| 网络出口 | 2 | 同源 `/global-rules` 配置路由，非第三方外呼 |
| 文件写入/删除 | 2 | 写 `~/.dsh/AGENTS.md`（本插件唯一功能） |
| 子进程/动态执行/原生模块 | 0 | — |

## 一句话

在 Web 设置面板里编辑全局 `~/.dsh/AGENTS.md` 规则，保存即生效。功能单一、无依赖、无构建脚本、行为可读——**装起来最轻的那一类插件**。
