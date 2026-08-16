# 目录失效条目记录

本页记录"社区目录收录了，但仓库已拉不到"的条目。**这不是对任何人的指控**——生态扩张期的目录维护赶不上仓库变化，很正常；这里的价值是提醒你：**安装前先确认仓库还活着。**

| 目录收录条目 | 现象 | 检查时间 |
|---|---|---|
| `Meredith2328/dsh-sticky-note` | `git clone` 返回 repository not found | 2026-08-16 |
| `dingyi222666/dsh-focus-chat` | `git clone` 返回 repository not found | 2026-08-16 |
| `Nagi-ovo/dsh-visualize` | GitHub API 200 但 `git clone` 404（疑似改名/删除后的重定向残留） | 2026-08-16 |
| `hanzhangzzz/dsh-diagram` | GitHub API 200 但 `git clone` 404（同上） | 2026-08-16 |
| `AKS1st/dsh-sysmon` | GitHub API 200 但 `git clone` 404（同上） | 2026-08-16 |
| `AKS1st/dsh-cyber-particle` | GitHub API 200 但 `git clone` 404（同上） | 2026-08-16 |

**规律**：第一批失效条目多为"API 可查、clone 即 404"——可能是仓库改名或删除后目录未更新。**自查命令**：

```bash
git ls-remote https://github.com/<owner>/<repo> HEAD
# 输出为空且报 not found → 不要再用目录里的链接
```

如果你发现新的失效条目，或以上条目已恢复，欢迎按 [CONTRIBUTING.md](../../CONTRIBUTING.md) 反馈。
