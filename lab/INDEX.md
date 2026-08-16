# 实测索引（INDEX）· Hands-on Test Index

> 每份报告 = 四关实测 + 完整日志 + 复现命令。方法见 [docs/METHODOLOGY.md](../docs/METHODOLOGY.md)（[EN](../docs/METHODOLOGY.en.md)），报告正文在 [reports/](reports/)，安装日志在 [logs/](logs/)。
> Every report = four-gate hands-on test + full logs + repro commands.

**状态图例 / Legend**：✅ 通过 passed · ❌ 未通过 failed（附原因 with reason） · ⏳ 未执行 not run（附原因 with reason）

**测试环境 / Env**：DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 首轮 2026-08-16，第二批 2026-08-17，第三批 2026-08-17

## 通过 / Passed（50 份）

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
| dsh-balance-meter | 计费 | github Ghost011118 | 0.1.0 | ✅ | ⏳ | 凭据仅本机读取，fetch 官方余额接口+自有路由 | ✅ 推荐 | [reports/dsh-balance-meter.md](reports/dsh-balance-meter.md) |
| dsh-cost-meter-s | 计费 | github Sttrevens | 0.1.0-rc.2 | ✅ | ⏳ | 写默认价格表，属功能本身 | ✅ 推荐 | [reports/dsh-cost-meter-s.md](reports/dsh-cost-meter-s.md) |
| dsh-cost-meter-h | 计费 | github Han-1413141 | 1.3.1 | ✅ | ⏳ | fetch 官方配额/余额/价格接口，无第三方 | ✅ 推荐 | [reports/dsh-cost-meter-h.md](reports/dsh-cost-meter-h.md) |
| dsh-opencodego-usage | 计费 | github BeiZi6 | 0.1.0 | ✅ | ⏳ | curl 官方配额 API，带凭据头无 shell 拼接 | ✅ 推荐 | [reports/dsh-opencodego-usage.md](reports/dsh-opencodego-usage.md) |
| dsh-opencode-go-usage | 计费 | github v587d | 0.1.1 | ✅ | ⏳ | 配置 0600 权限原子写，安全正向 | ✅ 推荐 | [reports/dsh-opencode-go-usage.md](reports/dsh-opencode-go-usage.md) |
| dsh-mnemon | 记忆 | github omdsh-dev | 0.1.6 | ✅ | ⏳ | 仅 README 命中，代码无凭证处理 | ✅ 推荐 | [reports/dsh-mnemon.md](reports/dsh-mnemon.md) |
| dsh-memory-jesse | 记忆 | github Jesse-njx | 0.1.0 | ✅ | ⏳ | 仅 README 命中 | ✅ 推荐 | [reports/dsh-memory-jesse.md](reports/dsh-memory-jesse.md) |
| dsh-file-memory | 记忆 | github ICCuse | 0.1.0 | ✅ | ⏳ | **代码零命中** | ✅ 推荐 | [reports/dsh-file-memory.md](reports/dsh-file-memory.md) |
| dsh-knowledge | 记忆 | github ICCuse | 0.1.0 | ✅ | ⏳ | **代码零命中** | ✅ 推荐 | [reports/dsh-knowledge.md](reports/dsh-knowledge.md) |
| dsh-mneme | 记忆 | github modusensus | 0.3.7 | ✅ | ⏳ | 密钥仅本机 SQLite；embedding 请求配置端点 | ✅ 推荐 | [reports/dsh-mneme.md](reports/dsh-mneme.md) |
| dsh-shared-memory | 记忆 | github futongxu9-maker | 2.0.0 | ✅ | ⏳ | 自有路由 + 记忆文件读写 | ✅ 推荐 | [reports/dsh-shared-memory.md](reports/dsh-shared-memory.md) |
| dsh-memory-meow | 记忆 | github Phant0Meow | 0.5.1 | ✅ | ⏳ | 仅 README 命中 | ✅ 推荐 | [reports/dsh-memory-meow.md](reports/dsh-memory-meow.md) |
| dsh-skin | 主题 | github KinGao294 | 0.3.1 | ✅ | ⏳ | 仅 README 命中 | ✅ 推荐 | [reports/dsh-skin.md](reports/dsh-skin.md) |
| dsh-skin-switcher | 主题 | github zhtx2024 | 0.2.1 | ✅ | ⏳ | 原子改写 cordis.patch.yml，属功能本身 | ✅ 推荐 | [reports/dsh-skin-switcher.md](reports/dsh-skin-switcher.md) |
| dsh-theme-kit | 主题 | github ink5897 | 0.1.2 | ✅ | ⏳ | 媒体误扫已勘误（扫描器修 SKIP_EXTS） | ✅ 推荐 | [reports/dsh-theme-kit.md](reports/dsh-theme-kit.md) |
| dsh-theme-plugin | 主题 | github BeiZi6 | 0.1.0 | ✅ | ⏳ | **代码零命中** | ✅ 推荐 | [reports/dsh-theme-plugin.md](reports/dsh-theme-plugin.md) |
| dsh-premium-themes | 主题 | github xiaoyanzi191 | 0.1.0 | ✅ | ⏳ | 自有路由 + 配置回调编译，功能本身 | ✅ 推荐 | [reports/dsh-premium-themes.md](reports/dsh-premium-themes.md) |
| dsh-pi-tui | 工具 | github lqhl | 0.1.1 | ✅ | ⏳ | prepare 为 husky，无危险操作 | ✅ 推荐 | [reports/dsh-pi-tui.md](reports/dsh-pi-tui.md) |
| dsh-bash-terminal | 工具 | github MAXeaglet | 0.3.14 | ✅ | ⏳ | 终端插件：node-pty 执行用户主动调用的命令 | ⚠️ 可用但注意（高危能力=功能本身） | [reports/dsh-bash-terminal.md](reports/dsh-bash-terminal.md) |
| dsh-file-mentions | 文件 | github a903067276-rgb | 1.0.0 | ✅ | ⏳ | 自有路由 + open/explorer 打开文件 | ✅ 推荐 | [reports/dsh-file-mentions.md](reports/dsh-file-mentions.md) |
| dsh-hud | UI | github a903067276-rgb | 1.0.0 | ✅ | ⏳ | 自有路由，同源请求 | ✅ 推荐 | [reports/dsh-hud.md](reports/dsh-hud.md) |
| dsh-file-mount | 文件 | github acefun29 | 0.5.0 | ✅ | ⏳ | 挂载状态写 + 可写性探测，功能本身 | ✅ 推荐 | [reports/dsh-file-mount.md](reports/dsh-file-mount.md) |
| dsh-file-uploads | 文件 | github l541402398 | 1.0.0 | ✅ | ⏳ | 自有路由 + 上传文件管理 | ✅ 推荐 | [reports/dsh-file-uploads.md](reports/dsh-file-uploads.md) |
| dsh-chat-import | 会话 | github Nwflower | 0.5.1 | ✅ | ⏳ | zstd/git 解压导入 + 自有路由，功能本身 | ✅ 推荐 | [reports/dsh-chat-import.md](reports/dsh-chat-import.md) |

## 本次未通过 / Failed（12，全部带可复现原因）

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
| dsh-scholar | github lzszq | ❌ 声明 workspace 依赖 `@dsh-scholar/research-client@workspace:^` 但发布包中不存在（发布不完整） | [reports/dsh-scholar.md](reports/dsh-scholar.md) |
| dsh-TUI | github ccch1mneyyy | ❌ prepare 内 `pnpm install` 失败（根因在仓库自身构建步骤） | [reports/dsh-TUI.md](reports/dsh-TUI.md) |

**目录失效条目**（社区目录收录但仓库已不存在，API+网页双通道确认，本轮新发现 7 个 `dsh-external/*`）：见 [reports/stale-entries.md](reports/stale-entries.md)。

## English Summary

- **Coverage**: 50 passed / 12 failed (with reproducible causes) — all under DSH 0.1.0-rc.6, batches tested 2026-08-16/17.
- **Key finding**: 8 plugins from the `omdsh-dev` family + `dsh-turn-navigator`/`dsh-wash-calendar` depend on `@deepseek-ai/dsh-type-meta`, which returns **404 on both registry.npmjs.org and npmmirror** (unpublished) — they cannot install today.
- **Verdicts are point-in-time snapshots**; see [METHODOLOGY.en.md](../docs/METHODOLOGY.en.md).

> ⏳ 冒烟关需要模型凭据；dsh-lab 将用自己的测试凭据执行（单插件消耗上限 0.5 元等价 token）。无凭据复现者跳过该关即可。
> Smoke gate needs model credentials; skip it when reproducing without credentials.
