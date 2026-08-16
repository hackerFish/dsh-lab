# dsh-plugin-vetting

- **来源**: GitHub [truelove-dreamer/dsh-plugin-vetting](https://github.com/truelove-dreamer/dsh-plugin-vetting) · npm `dsh-plugin-vetting`
- **版本**: 0.5.6 · 测试日期 2026-08-16
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS
- **结论**: ✅ 推荐（行为与宣称一致——这是"给插件做恶意扫描的插件"，我们把它本身也扫了一遍）

## 四关结果

| 关 | 结果 |
|---|---|
| 安装 | ✅（npm 直装，1.1s） |
| 冒烟 | ⏳ 未执行（需模型凭据，本环境未提供） |
| 安全快检 | 命中与功能一致（见"元视角"） |
| 兼容钉版 | 插件 0.5.6 · DSH 0.1.0-rc.6 |

## 安装

```bash
dsh plugin --profile web add dsh-plugin-vetting --ignore-workspace-root-check
```

安装日志要点：

```
dependencies:
+ dsh-plugin-vetting 0.5.6
Done in 1.1s
```

## 安全快检（`tools/scan.mjs`，7 个文件）

| 类别 | 命中 | 判定 |
|---|---|---|
| 子进程 | 9 | `lib/rules.js`、`lib/scan.js` 等——**规则表里的模式字符串**（它扫描别人用没用 child_process，规则里自然写着这些词） |
| 动态执行 | 5 | 同上（eval/new Function 是它的检测目标，规则表与 README 含这些词） |
| 文件写入/删除 | 2 | 报告/缓存落盘 |
| 凭证读取 | 1 | 规则表提及凭据模式 |
| 网络出口 | 0 | — |

## 元视角备注

**扫"安全扫描器"的结果注定满屏危险词**——它的工作就是识别这些模式，所以规则表和检测代码里到处都是。这恰恰是静态扫描的根本局限的一个生动案例：**模式命中只能说明"值得看一眼"，不能说明"有问题"**。dsh-lab 的快检与它的恶意扫描定位不同：我们报告命中清单与上下文判断，不做恶意判决；它做恶意启发式与安装门禁。两者可以配合使用。

## 一句话

想给"装不装某个插件"加一道自动门禁，装它；想读懂扫描结果背后的上下文，看 dsh-lab 的报告（每一份都带命中清单与人工判定）。
