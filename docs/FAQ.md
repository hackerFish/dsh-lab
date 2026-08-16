# 常见问题（FAQ）· Frequently Asked Questions

> 中文在前，English follows each item. 全部内容对应仓库的实测数据，不空谈。

---

## 1. dsh-lab 和官方/社区目录是什么关系？

**中文**：没有隶属关系。官方仓库（deepseek-ai）管 DSH 框架本身；社区目录（如 awesome-dsh-plugin）负责收录清单——收录≠安装测试。dsh-lab 是第三方编辑位：**只发布我们自己动手测过的结论**，目录里的条目只是我们的候选池，不是我们的结论来源。

**EN**: We are an independent third-party curation site. Community directories list plugins, but listing ≠ tested. dsh-lab only publishes conclusions from tests we ran ourselves; directory entries are our candidate pool, not our source of truth.

## 2. 为什么我的插件不在报告里？

**中文**：三种可能：(a) 还没排到测试队列；(b) 测试失败且失败原因已如实记录（❌）；(c) 我们还没发现它。想加速？按 [CONTRIBUTING](../CONTRIBUTING.md) 提送测请求。**我们从不为"没测过"的插件写描述性结论。**

**EN**: Either (a) it hasn't reached the test queue, (b) it failed testing and the failure is recorded honestly (❌), or (c) we haven't found it. Open a [送测/request](../CONTRIBUTING.en.md) issue to speed things up. **We never write descriptive verdicts for untested plugins.**

## 3. "四关"是什么？

**中文**：安装（装得上吗）→ 冒烟（跑得起来吗）→ 安全快检（代码里有什么出格行为吗）→ 兼容钉版（记录插件×DSH 版本，变化即复测）。完整协议见 [METHODOLOGY](METHODOLOGY.md)。

**EN**: Install (does it install) → Smoke (does it boot) → Static quick-scan (what does the code actually do) → Version pinning (plugin × DSH versions recorded; re-test on change). Full protocol: [METHODOLOGY](METHODOLOGY.en.md).

## 4. "✅ 推荐" = 一定能用吗？

**中文**：不是"保证"。它只代表**在我们测试时点**（见报告头部的 DSH 版本与日期）：安装成功、代码检查无异常线索、行为与宣称一致。DSH 更新或插件更新后结论可能失效——这正是"兼容钉版"存在的意义。**所有报告都是测试时点的快照。**

**EN**: No guarantee. ✅ means that **at our test timestamp** (DSH version + date in the report header) it installed cleanly, scanned without suspicious findings, and behaved as advertised. Verdicts can expire as versions drift — that's exactly why we pin versions. **Every report is a point-in-time snapshot.**

## 5. 为什么大多报告的"冒烟"是 ⏳？

**中文**：冒烟关需要真实模型凭据（会真实消耗 token）。实验室没有把这部分成本转嫁给读者：无凭据时不猜结果，如实标 ⏳ 并写明原因。我们的路线图（[ROADMAP](ROADMAP.md)）把"实验室自有测试凭据"列为阶段 2 前置。

**EN**: The smoke gate calls a real model and consumes real tokens. We don't fake it: without credentials the cell is honestly marked ⏳ with the reason. Lab-owned test credentials are a Phase-2 prerequisite in [ROADMAP](ROADMAP.en.md).

## 6. 快检"有命中" = 恶意吗？

**中文**：**不是。** 快检是静态模式扫描，命中只是"代码里出现了这类行为"的线索。例如：视觉插件解码图片必然命中 base64 模式；安全审查类插件的规则表天然布满危险字符串。命中的真实含义在每份报告的判定列里逐条解释。同样，零命中也不等于无害——我们没有能力做人工安全审计，快检只是降低风险的线索层。

**EN**: **No.** The scan lists behavioral patterns, not verdicts. A vision plugin legitimately hits base64 patterns; a vetting plugin's rule table is full of dangerous strings by design. Each hit is interpreted per-report. Zero hits is also not "harmless" — we run pattern-level quick scans, not security audits.

## 7. 我能自己复现吗？

**中文**：能，而且我们要求"任何人在任何机器上都能复现"。每份报告都有完整复现命令（隔离 `DSH_HOME` + 一条 `dsh plugin add`），完整安装日志在 `lab/logs/`。复现结果与我们不一致？按 [CONTRIBUTING](../CONTRIBUTING.md) 提不一致反馈，我们复测并保留勘误记录。

**EN**: Yes — reproducibility is a hard requirement. Every report ships the exact repro commands (isolated `DSH_HOME` + one `dsh plugin add`), with full install logs in `lab/logs/`. If your result differs, file an inconsistency issue; we re-test and keep the erratum on record.

## 8. 插件/DSH 更新了怎么办？

**中文**：看"兼容钉版"：版本一变就触发复测，报告日期与结论随之更新。阶段 2 起由 CI 每日自动执行（见 [ROADMAP](ROADMAP.md)）。

**EN**: Version pinning handles drift: any version change triggers re-testing and report refresh. From Phase 2, CI runs this daily ([ROADMAP](ROADMAP.en.md)).

## 9. 什么是 DeepSeek Harness（DSH）？

**中文**：DeepSeek 开源的"一切皆插件"AI Agent 框架——核心是一个 Cordis 风格的插件运行时 + Web 界面，模型工具、界面组件、预设、技能都以插件形式加载。官方仓库 12 万+ star，社区插件数百个。

**EN**: DeepSeek's open-source "everything is a plugin" AI agent framework — a Cordis-style plugin runtime plus a web UI where model tools, UI components, presets, and skills all load as plugins. 120k+ stars upstream, hundreds of community plugins.

---

> 没回答你的问题？开 issue 提问，我们会把高频问题补进这里。
> Question not covered? Open an issue — recurring ones get added here.
