# 目录失效条目记录（含勘误）

> **2026-08-16 晚间勘误：首批 6 个「仓库消失」标记经复测全部存活，原结论判误，疑似测试机 Clash 代理间歇 SSL/连接故障所致。** 原始记录与复测证据全部保留在下方——实验室的立场是：**结论错了就公开改，包括我们自己的结论。**

## 勘误过程

初次检查（2026-08-16）时，6 个条目被标记为「仓库已消失」。同日 20:52–20:57 复测：全部 6 个仓库 GitHub API 200、网页 200；其中 2 个 `git ls-remote` 直接返回 HEAD，其余 4 个的 git 访问被本机代理限速中断（`Operation too slow`），但 API 元数据（`private:false` + `pushed_at`）确认存活。判定：**原「失效」结论为本机网络故障导致的误报，非仓库真实状态。**

| 条目 | 原始标记 | 复测结果 | 判定 |
|---|---|---|---|
| `Meredith2328/dsh-sticky-note` | `git clone` 返回 repository not found | git ls-remote 返回 HEAD `ebabb6c`；API 200 | 存活 ✅ |
| `dingyi222666/dsh-focus-chat` | `git clone` 返回 repository not found | git ls-remote 返回 HEAD `e05d2d0`；API 200 | 存活 ✅ |
| `Nagi-ovo/dsh-visualize` | GitHub API 200 但 `git clone` 404 | API 200（pushed 2026-08-15） | 存活 ✅ |
| `hanzhangzzz/dsh-diagram` | 同上 | API 200（pushed 2026-08-15） | 存活 ✅ |
| `AKS1st/dsh-sysmon` | 同上 | API 200（pushed 2026-08-15） | 存活 ✅ |
| `AKS1st/dsh-cyber-particle` | 同上 | API 200（pushed 2026-08-16） | 存活 ✅ |

## 当前状态

- **失效条目数：0**。本页仅保留勘误记录，不再列出失效条目。
- 复测证据底稿：[lab/logs/stale-repos-verify.md](../logs/stale-repos-verify.md)。

## 教训与自查命令（仍然有效）

失效类结论必须**双通道交叉验证**：git 通道可能被本机代理干扰，请同时查 GitHub API：

```bash
git ls-remote https://github.com/<owner>/<repo> HEAD
# 输出为空且报 not found → 再交叉验证，不要直接下结论
curl -s https://api.github.com/repos/<owner>/<repo> | grep '"full_name"'
# API 返回 full_name 且 private:false → 仓库存活，之前的 git 失败是网络问题
```

如果你发现新的失效条目，或以上条目状态再次变化，欢迎按 [CONTRIBUTING.md](../../CONTRIBUTING.md) 反馈。
