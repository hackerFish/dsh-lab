# 实测索引（INDEX）· Hands-on Test Index

> 每份报告 = 四关实测 + 完整日志 + 复现命令。方法见 [docs/METHODOLOGY.md](../docs/METHODOLOGY.md)（[EN](../docs/METHODOLOGY.en.md)），报告正文在 [reports/](reports/)，安装日志在 [logs/](logs/)。
> Every report = four-gate hands-on test + full logs + repro commands.

**状态图例 / Legend**：✅ 通过 passed · ❌ 未通过 failed（附原因 with reason） · ⏳ 未执行 not run（附原因 with reason）

**测试环境 / Env**：DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 首轮 2026-08-16，第二批 2026-08-17

## 通过 / Passed（26 份）

| 插件 | 分类 | 来源 | 版本 | 安装 | 冒烟 | 快检 | 结论 | 报告 |
|---|---|---|---|---|---|---|---|---|
| dsh-global-rules | 规则 | npm | 0.1.0 | ✅ | ⏳ | 行为与宣称一致 | ✅ 推荐 | [reports/dsh-global-rules.md](reports/dsh-global-rules.md) |
| dsh-mermaid | 图表 | github AKS1st | 0.4.2 | ✅ | ⏳ | 命中均有合理解释 | ✅ 推荐 | [reports/dsh-mermaid.md](reports/dsh-mermaid.md) |
| dsh-shortcuts | 快捷键 | github Ricketts-Guo | 1.1.0 | ✅ | ⏳ | 注意 install.sh | ✅ 推荐 | [reports/dsh-shortcuts.md](reports/dsh-shortcuts.md) |
| dsh-deeplink | 链接 | github qyw233 | 0.5.0 | ✅ | ⏳ | 代码零命中 | ✅ 推荐 | [reports/dsh-deeplink.md](reports/dsh-deeplink.md) |
| dsh-navbar | 导航栏 | github vlln | 0.3.0 | ✅ | ⏳ | 11 文件零命中 | ✅ 推荐 | [reports/dsh-navbar.md](reports/dsh-navbar.md) |
| dsh-spotlight | 搜索 | github 0xsline | 0.0.2 | ✅ | ⏳ | 运行代码无命中 | ✅ 推荐 | [reports/dsh-spotlight.md](reports/dsh-spotlight.md) |
| dsh-share | 分享 | github zljr | 0.1.1 | ✅ | ⏳ | 行为与功能一致 | ✅ 推荐 | [reports/dsh-share.md](reports/dsh-share.md) |
| modlens | 视觉 | github liustack | 3.17.3 | ✅ | ⏳ | 命中与功能相符 | ✅ 推荐 | [reports/modlens.md](reports/modlens.md) |
| dsh-recommend | 推荐 | npm | 0.2.0 | ✅ | ⏳ | 行为与宣称一致 | ✅ 推荐 | [reports/dsh-recommend.md](reports/dsh-recommend.md) |
| dsh-plugin-vetting | 安全 | npm | 0.5.6 | ✅ | ⏳ | 规则表命中属预期 | ✅ 推荐 | [reports/dsh-plugin-vetting.md](reports/dsh-plugin-vetting.md) |
| ds-api-usage | 计费 | github Sev7een | 0.1.0 | ✅ | ⏳ | 读既有 DEEPSEEK_API_KEY 查余额，属功能本身 | ✅ 推荐 | [reports/ds-api-usage.md](reports/ds-api-usage.md) |
| dsh-backup | 数据 | github xiaoyuyu6420 | 0.5.0 | ✅ | ⏳ | 备份/恢复 ~/.dsh，读写属功能本身 | ✅ 推荐 | [reports/dsh-backup.md](reports/dsh-backup.md) |
| dsh-custom-tool | 工具 | github omdsh-dev | 0.1.2 | ✅ | ⏳ | 执行器类：沙箱 worker + allowNetwork 开关，未见异常 | ⚠️ 可用但注意（会执行用户自定义代码） | [reports/dsh-custom-tool.md](reports/dsh-custom-tool.md) |
| dsh-deepseek-billing | 计费 | github Jolly-J | 0.1.0-rc.5 | ✅ | ⏳ | 读凭据查余额 API，属功能本身 | ✅ 推荐 | [reports/dsh-deepseek-billing.md](reports/dsh-deepseek-billing.md) |
| dsh-diff-viewer | UI | github lehhair | 0.1.0 | ✅ | ⏳ | 1 处“子进程”命中系 document.execCommand 误报 | ✅ 推荐 | [reports/dsh-diff-viewer.md](reports/dsh-diff-viewer.md) |
| dsh-excel-chat | 数据 | github hccccc01333 | 0.34.1 | ✅ | ⏳ | Excel 操作库，文件读写属功能本身 | ✅ 推荐 | [reports/dsh-excel-chat.md](reports/dsh-excel-chat.md) |
| dsh-memory | 记忆 | github flymysql | 0.1.5 | ✅ | ⏳ | 1 处网络出口（同步），常规 | ✅ 推荐 | [reports/dsh-memory.md](reports/dsh-memory.md) |
| dsh-message-edit | UI | github Moeblack | 0.2.3 | ✅ | ⏳ | 消息编辑，命中均常规 | ✅ 推荐 | [reports/dsh-message-edit.md](reports/dsh-message-edit.md) |
| dsh-plugin-deepseek-balance | 计费 | github fishxcode | 0.1.0 | ✅ | ⏳ | 查余额 API + 安装钩子，属功能本身 | ✅ 推荐 | [reports/dsh-plugin-deepseek-balance.md](reports/dsh-plugin-deepseek-balance.md) |
| dsh-prompt-studio | 提示词 | github Moeblack | 0.4.0 | ✅ | ⏳ | 提示词管理，命中均常规 | ✅ 推荐 | [reports/dsh-prompt-studio.md](reports/dsh-prompt-studio.md) |
| dsh-spend | 计费 | github nonewind | 0.4.1 | ✅ | ⏳ | 读凭据计费，属功能本身 | ✅ 推荐 | [reports/dsh-spend.md](reports/dsh-spend.md) |
| dsh-sticky-note | UI | github Meredith2328 | 0.2.1 | ✅ | ⏳ | 便签读写文件，属功能本身 | ✅ 推荐 | [reports/dsh-sticky-note.md](reports/dsh-sticky-note.md) |
| dsh-task-status | UI | github vlln | 0.3.0 | ✅ | ⏳ | 2 处网络出口，常规 | ✅ 推荐 | [reports/dsh-task-status.md](reports/dsh-task-status.md) |
| dsh-trajectory-reader | 会话 | github flyingtimes | 0.2.5 | ✅ | ⏳ | 读轨迹文件，属功能本身 | ✅ 推荐 | [reports/dsh-trajectory-reader.md](reports/dsh-trajectory-reader.md) |
| dsh-undo-plugin | UI | github lire1131 | 0.3.4 | ✅ | ⏳ | 保存点读写 + 凭证读取属功能本身 | ✅ 推荐 | [reports/dsh-undo-plugin.md](reports/dsh-undo-plugin.md) |
| dsh-web-archive | 数据 | github renat3u | 0.1.1 | ✅ | ⏳ | **代码零命中** | ✅ 推荐 | [reports/dsh-web-archive.md](reports/dsh-web-archive.md) |

## 本次未通过 / Failed this batch（10，全部带可复现原因）

| 插件 | 来源 | 失败原因（详见报告） | 报告 |
|---|---|---|---|
| dsh-toolkit | github omdsh-dev | ❌ 依赖 `@deepseek-ai/dsh-type-meta` 在 npm 与 npmmirror 均 404（已撤包），无法解析 | [reports/dsh-toolkit.md](reports/dsh-toolkit.md) |
| dsh-tool-calculator | github omdsh-dev | ❌ 同上：`dsh-type-meta` 撤包 | [reports/dsh-tool-calculator.md](reports/dsh-tool-calculator.md) |
| dsh-tool-json | github omdsh-dev | ❌ 同上 | [reports/dsh-tool-json.md](reports/dsh-tool-json.md) |
| dsh-tool-markdown | github omdsh-dev | ❌ 同上 | [reports/dsh-tool-markdown.md](reports/dsh-tool-markdown.md) |
| dsh-tool-regex | github omdsh-dev | ❌ 同上 | [reports/dsh-tool-regex.md](reports/dsh-tool-regex.md) |
| dsh-tool-stat | github omdsh-dev | ❌ 同上 | [reports/dsh-tool-stat.md](reports/dsh-tool-stat.md) |
| dsh-turn-navigator | github vibeinging | ❌ 同上：`dsh-type-meta` 撤包 | [reports/dsh-turn-navigator.md](reports/dsh-turn-navigator.md) |
| dsh-wash-calendar | github zimai233 | ❌ 同上 | [reports/dsh-wash-calendar.md](reports/dsh-wash-calendar.md) |
| dsh-tool-git | github lxj808624 | ❌ prepare 脚本 `pnpm install` 报 "packages field missing or empty"（仓库自身配置） | [reports/dsh-tool-git.md](reports/dsh-tool-git.md) |
| dsh-focus-chat | github dingyi222666 | ❌ prepare 需 yarn 构建，`tsdown@0.22.14` 要求 node ≥24.11（本机 24.3.0） | [reports/dsh-focus-chat.md](reports/dsh-focus-chat.md) |

**目录失效条目**（社区目录收录但仓库已不存在，API+网页双通道确认，本轮新发现 7 个 `dsh-external/*`）：见 [reports/stale-entries.md](reports/stale-entries.md)。

## English Summary

- **Coverage**: 26 passed / 10 failed (with reproducible causes) — all under DSH 0.1.0-rc.6, second batch tested 2026-08-17.
- **Key finding**: 8 plugins from the `omdsh-dev` family + `dsh-turn-navigator`/`dsh-wash-calendar` depend on `@deepseek-ai/dsh-type-meta`, which returns **404 on both registry.npmjs.org and npmmirror** (unpublished) — they cannot install today.
- **Verdicts are point-in-time snapshots**; see [METHODOLOGY.en.md](../docs/METHODOLOGY.en.md).

> ⏳ 冒烟关需要模型凭据；dsh-lab 将用自己的测试凭据执行（单插件消耗上限 0.5 元等价 token）。无凭据复现者跳过该关即可。
> Smoke gate needs model credentials; skip it when reproducing without credentials.
