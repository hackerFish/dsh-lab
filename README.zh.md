# 🐋 DSH 实验室（dsh-lab）

**每个条目都经过真机实测的 DeepSeek Harness 插件精选与中文指南。**

> DeepSeek Harness（DSH）是 DeepSeek 开源的"一切皆插件"Agent 框架，官方仓库已有 12 万+ star，社区插件超过 800 个且每天新增数百个。但生态现状是：**收录 ≠ 能用，star 高 ≠ 安全，自动榜单 ≠ 实测**。本仓库的立场很简单——**不收录任何未经真机测试的条目**：每个插件都在隔离环境中实际安装、检查、记录，只发布有据可查、可复现的结论。

---

## 为什么需要 dsh-lab

- **数量失控**：社区插件 800+，"余额/成本显示"一个功能就有 30 个上下的同类实现，选择成本极高。
- **收录≠背书**：主流目录明确声明"收录不构成安全审查"。换句话说，目前没有人在告诉你哪个插件真的装得上、真的能用。
- **信任真空**：自动化榜单按 star/更新频率打分，但这些信号不反映安装成功率、兼容性，更不反映代码里有没有出格行为。
- **版本漂移**：DSH 主线 rc 版本更新频繁，插件今天能用、明天可能就坏了，但没有公开的兼容性记录。

**dsh-lab 的答案：只发布我们亲手测过的结论，并公开全部测试日志与复现命令。** 测不过的条目照实标注"未通过"而不是消失；没测过的条目不出现在报告里，而不是用描述文字代替测试。

---

## 四关实测法

每个条目按固定四关测试，报告逐项标注状态（✅ 通过 / ❌ 未通过 / ⏳ 未执行），绝不模糊：

| 关 | 名称 | 说明 |
|---|---|---|
| 1 | **安装** | 在隔离的 `DSH_HOME` 中执行 `dsh plugin --profile web add`，记录完整日志与退出码 |
| 2 | **冒烟** | 带最小任务的 headless 会话运行，验证插件不导致启动/运行崩溃（需要模型凭据） |
| 3 | **安全快检** | 对安装后的实际代码做静态模式扫描（网络、子进程、动态执行、凭证读取等），列出命中清单 |
| 4 | **兼容钉版** | 记录测试时的 DSH 版本与插件版本；任一版本变化后重新测试并更新报告 |

完整协议、扫描模式清单与复现命令见 **[docs/METHODOLOGY.md](docs/METHODOLOGY.md)**。

---

## 当前实测覆盖（26 通过 + 10 失败已记录，2026-08-16/17，DSH 0.1.0-rc.6）

**第一批（2026-08-16，10 份全通过）**：dsh-global-rules · dsh-mermaid · dsh-shortcuts · dsh-deeplink · dsh-navbar · dsh-spotlight · dsh-share · modlens · dsh-recommend · dsh-plugin-vetting —— 全部安装成功且代码行为与宣称一致。

**第二批（2026-08-17，16 通过 + 10 失败）**：

- ✅ 新增通过 16 个：ds-api-usage · dsh-backup · dsh-custom-tool · dsh-deepseek-billing · dsh-diff-viewer · dsh-excel-chat · dsh-memory · dsh-message-edit · dsh-plugin-deepseek-balance · dsh-prompt-studio · dsh-spend · dsh-sticky-note · dsh-task-status · dsh-trajectory-reader · dsh-undo-plugin · dsh-web-archive
- ❌ 失败 10 个（均带可复现原因）：omdsh 系 6 个（dsh-toolkit + 5 个 tool-*）+ dsh-turn-navigator + dsh-wash-calendar 依赖**已撤包的 `@deepseek-ai/dsh-type-meta`**（npm 与 npmmirror 均 404）；dsh-tool-git 的 prepare 脚本自身配置损坏；dsh-focus-chat 构建需 node ≥24.11（测试机 24.3.0）
- 📋 完整 26 行表格 + 失败清单见 **[lab/INDEX.md](lab/INDEX.md)**

> 已发布 36 份实测报告（含完整日志与复现命令）；新增 7 个真失效条目（`dsh-external/*`，API+网页双通道 404 确认），早期 6 个"失效条目"误报及勘误见 [失效记录](lab/reports/stale-entries.md)。⏳=冒烟关需模型凭据，将用实验室自有凭据补测。

---

## 指南（双语 / Bilingual guides）

- [01-quickstart.md](guides/01-quickstart.md) · [EN](guides/01-quickstart.en.md) — 5 分钟上手：安装、profile 与 DSH_HOME 是什么
- [02-first-plugin.md](guides/02-first-plugin.md) · [EN](guides/02-first-plugin.en.md) — 从零写并发布你的第一个插件
- [03-pitfalls.md](guides/03-pitfalls.md) · [EN](guides/03-pitfalls.en.md) — 装插件之前的权限认知与常见翻车点
- [FAQ.md](docs/FAQ.md) · [EN 内嵌] — 常见问题大白话版：✅ 推荐=保证吗？命中=恶意吗？

---


> 配套仓库：[awesome-dsh-skills](https://github.com/hackerFish/awesome-dsh-skills) — 12 个实测技能（SKILL.md），复制即用；[awesome-dsh-presets](https://github.com/hackerFish/awesome-dsh-presets) — 4 个实测预设与 4 份规则。三件套同一标准：先验证，再发布。
## 路线图

见 [docs/ROADMAP.md](docs/ROADMAP.md)：

1. **阶段 1（现在）**：实测精选 + 原创教程，建立"只信测试结果"的编辑标准。
2. **阶段 2**：插件 × DSH 版本**兼容性矩阵**，CI 每日自动重测——为即将到来的版本漂移期提供唯一权威数据。
3. **阶段 3**：同类插件**竞技场**，用真实任务两两对比（如 30 个余额面板里哪个真的准）。

---

## 免责声明

- 每份报告是**测试时点的快照**；插件更新后结论可能失效，我们定期复测并更新日期。
- "安全快检"是静态模式扫描，**不构成安全背书**：未命中 ≠ 无害，命中 ≠ 恶意。
- 本仓库与 DeepSeek 官方无隶属关系。

---

## 贡献

按 [CONTRIBUTING.md](CONTRIBUTING.md) 参与：送测请求、实测不一致反馈、教程纠错。**所有文案为原创，不接受从其他目录/仓库搬运的描述。**

---

## 许可证

[MIT](LICENSE)
