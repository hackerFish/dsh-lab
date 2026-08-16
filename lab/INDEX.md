# 实测索引（INDEX）

> 每份报告 = 四关实测 + 完整日志 + 复现命令。方法见 [docs/METHODOLOGY.md](../docs/METHODOLOGY.md)，报告正文在 [reports/](reports/)，安装日志在 [logs/](logs/)。

**状态图例**：✅ 通过 · ❌ 未通过（附原因） · ⏳ 未执行（附原因）

| 插件 | 来源 | 插件版本 | 测试 DSH | 测试日期 | 安装 | 冒烟 | 快检 | 结论 | 报告 |
|---|---|---|---|---|---|---|---|---|---|
| dsh-global-rules | npm | 0.1.0 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 行为与宣称一致 | ✅ 推荐 | [reports/dsh-global-rules.md](reports/dsh-global-rules.md) |
| dsh-mermaid | github AKS1st | 0.4.2 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 命中均有合理解释 | ✅ 推荐 | [reports/dsh-mermaid.md](reports/dsh-mermaid.md) |
| dsh-shortcuts | github Ricketts-Guo | 1.1.0 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 注意 install.sh | ✅ 推荐 | [reports/dsh-shortcuts.md](reports/dsh-shortcuts.md) |
| dsh-deeplink | github qyw233 | 0.5.0 | 0.1.0-rc.6 | 2026-08-16 | ✅ | ⏳ | 代码零命中 | ✅ 推荐 | [reports/dsh-deeplink.md](reports/dsh-deeplink.md) |

**目录失效条目**（收录了但仓库拉不到）：见 [reports/stale-entries.md](reports/stale-entries.md)。

> ⏳ 冒烟关需要模型凭据；dsh-lab 将用自己的测试凭据执行（单插件消耗上限 0.5 元等价 token）。无凭据复现者跳过该关即可。
