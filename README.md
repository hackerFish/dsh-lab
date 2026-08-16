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

## 当前实测覆盖

| 插件 | 来源 | 插件版本 | 测试 DSH 版本 | 测试日期 | 安装 | 冒烟 | 快检 | 报告 |
|---|---|---|---|---|---|---|---|---|
| dsh-global-rules | npm | 0.1.0 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 行为与宣称一致 | [报告](lab/reports/dsh-global-rules.md) |
| dsh-mermaid | github AKS1st | 0.4.2 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 命中均有合理解释 | [报告](lab/reports/dsh-mermaid.md) |
| dsh-shortcuts | github Ricketts-Guo | 1.1.0 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 注意 install.sh | [报告](lab/reports/dsh-shortcuts.md) |
| dsh-deeplink | github qyw233 | 0.5.0 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 代码零命中 | [报告](lab/reports/dsh-deeplink.md) |
| dsh-navbar | github vlln | 0.3.0 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 11 文件零命中 | [报告](lab/reports/dsh-navbar.md) |
| dsh-spotlight | github 0xsline | 0.0.2 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 运行代码无命中 | [报告](lab/reports/dsh-spotlight.md) |
| dsh-share | github zljr | 0.1.1 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 行为与功能一致 | [报告](lab/reports/dsh-share.md) |
| modlens | github liustack | 3.17.3 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 命中与功能相符 | [报告](lab/reports/modlens.md) |
| dsh-recommend | npm | 0.2.0 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 行为与宣称一致 | [报告](lab/reports/dsh-recommend.md) |
| dsh-plugin-vetting | npm | 0.5.6 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 规则表命中属预期 | [报告](lab/reports/dsh-plugin-vetting.md) |

> 已发布 10 份实测报告（含完整日志与复现命令）；另发现 6 个"目录收录但仓库已消失"的失效条目，见 [失效记录](lab/reports/stale-entries.md)。⏳=冒烟关需模型凭据，将用实验室自有凭据补测。

---

## 中文指南（原创）

- [guides/01-quickstart.md](guides/01-quickstart.md) — 5 分钟上手：安装、profile 与 DSH_HOME 是什么
- [guides/02-first-plugin.md](guides/02-first-plugin.md) — 从零写并发布你的第一个插件
- [guides/03-pitfalls.md](guides/03-pitfalls.md) — 装插件之前的权限认知与常见翻车点

---


> 配套仓库：[awesome-dsh-skills](https://github.com/hackerFish/awesome-dsh-skills) — 12 个实测技能（SKILL.md），复制即用；与本站点共用"先验证再发布"的标准。
> 配套仓库：[awesome-dsh-skills](https://github.com/hackerFish/awesome-dsh-skills) — 12 个实测技能；[awesome-dsh-presets](https://github.com/hackerFish/awesome-dsh-presets) — 4 个实测预设与 4 份规则。三件套同一标准：先验证，再发布。
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
