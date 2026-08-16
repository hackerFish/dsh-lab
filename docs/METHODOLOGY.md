# 四关实测法（METHODOLOGY）

本文件定义 dsh-lab 的测试协议。目标：任何人在任何机器上都能复现我们的每一条结论。**测试过程不依赖作者的机器、凭据或运气——只依赖公开命令。**

---

## 0. 环境隔离

每次测试都在一个独立的 `DSH_HOME` 中进行，绝不触碰机器上真实的 `~/.dsh`：

```bash
export DSH_HOME=/path/to/scratch/.lab-home          # 隔离的 DSH 主目录
export npm_config_store_dir=/path/to/scratch/.pnpm-store  # 隔离 pnpm 全局仓库
```

测试环境信息记录在每份报告头部：

| 字段 | 说明 |
|---|---|
| `dshVersion` | 测试所用 DSH 版本（`@deepseek-ai/dsh` 的 `version` 字段） |
| `pnpmVersion` | `pnpm --version` |
| `nodeVersion` | `node --version` |
| `platform` | 操作系统与架构 |
| `testedAt` | 测试完成的 UTC 时间 |

---

## 关 1：安装

在隔离的 `DSH_HOME` 中初始化 `web` profile，然后安装被测插件：

```bash
dsh plugin --profile web add <插件名>          # npm 包名
dsh plugin --profile web add github:owner/repo # GitHub 仓库
dsh plugin --profile web add <本地目录>         # 本地目录（调试用）
```

**判定标准**：命令退出码为 0，且 profile 的 `package.json` 的 `dependencies` 中出现该插件。

**已知环境摩擦**（真实复现过，报告与指南中会标注）：

1. **pnpm 9 的 workspace-root 检查**：`dsh plugin add` 会因 `ERR_PNPM_ADDING_TO_ROOT` 失败。解法：追加 `--ignore-workspace-root-check`，或设置环境变量 `npm_config_ignore_workspace_root_check=true`。若报告未声明用了该解法，说明默认命令即成功。
2. **git 协议可达性**：`github:` 直装依赖本机 git 走 `git+ssh`/`git+https`。在 git 网络被拦截的环境（SSL 主体名不匹配等），可改用 codeload tarball 直链：`dsh plugin --profile web add https://codeload.github.com/<owner>/<repo>/tar.gz/HEAD`。
3. **registry 可达性**：依赖树较大的插件直连 `registry.npmjs.org` 可能超时。可用镜像：`export npm_config_registry=https://registry.npmmirror.com`。
4. **prepare 构建脚本**：git/tarball 安装时 pnpm 默认拦截 `prepare` 脚本，需要按 pnpm 提示在 profile 的 `pnpm-workspace.yaml` 的 `allowBuilds` 下放行。报告会把这一步原样记下来。

**每份报告必须**：附完整安装日志（脱敏后）与最终 `dependencies` 行。

---

## 关 2：冒烟

用 headless 模式跑一个最小任务，验证插件不会导致进程崩溃或会话创建失败：

```bash
dsh --profile headless "请回答：1+1=?"   # 会话创建、模型调用、插件加载同时被验证
```

**判定标准**：进程正常退出并输出最终回答；会话日志无因插件引起的异常。

**凭据说明**：本关需要模型凭据。dsh-lab 使用自己的测试凭据执行，并公开每轮消耗上限（当前上限：单插件 ≤ 人民币 0.5 元等价 token）。**无凭据的复现者可以跳过本关**——这不会影响报告的其余结论，报告会明确标注 ⏳。

---

## 关 3：安全快检

对**安装后实际落盘**的插件代码做静态模式扫描（不是读 README，不是读仓库主页）。扫描范围：profile 的 `node_modules/<插件>` 内全部源码文件。

扫描模式清单（命中即记录文件与行号，**不自动下结论**）：

| 类别 | 模式（正则，大小写不敏感） |
|---|---|
| 网络出口 | `fetch\s*\(`, `http\.request`, `https\.request`, `axios`, `node-fetch`, `WebSocket`, `net\.connect` |
| 子进程 | `child_process`, `execSync`, `spawnSync`, `spawn\s*\(`, `exec\s*\(`, `node-pty` |
| 动态执行 | `eval\s*\(`, `new Function`, `vm\.runIn` |
| 文件写入/删除 | `writeFile`, `appendFile`, `createWriteStream`, `rmSync`, `unlink`, `renameSync` |
| 凭证读取 | `DEEPSEEK_API_KEY`, `~/.dsh`, `credentials`, `.env` |
| 原生模块 | `\.node["']`, `ffi`, `addon` |
| 安装钩子 | `"postinstall"`, `"preinstall"` |
| 混淆线索 | `Buffer\.from\([^,]+,\s*['"]base64`, `atob\s*\(`, 超长单行（>800 字符） |

**判定标准**：逐类列出命中文件与行号。**命中 ≠ 恶意，未命中 ≠ 无害**：快检是线索，不是判决。若插件自带 `prepare`/`postinstall` 脚本，扫描其内容。

**每份报告必须**：附扫描脚本（本仓库 `tools/scan.mjs`，零依赖）与该插件的完整命中清单。

**扫描器已知局限**（发现一条记一条）：

1. `Buffer.from(...,'base64')` 等 base64 模式会把**视觉/媒体类插件正常的图像编解码**记入"混淆线索"（2026-08-16 在 modlens 报告中发现）。
2. 安全扫描类插件的**规则表天然布满危险模式字符串**，扫它们必然满屏命中（2026-08-16 在 dsh-plugin-vetting 报告中发现）。
3. `.exec(`（正则方法）曾被误报为子进程调用，已修复为 `(?<!\.)\bexec\s*\(` 并保留勘误（2026-08-16）。

---

## 关 4：兼容钉版

- 记录：插件版本（安装后的 `package.json` 版本号 + 来源 commit）、测试时 DSH 版本。
- **复测触发条件**：DSH 发布新版本，或插件发布新版本，任一发生即重新测试并更新报告日期。
- 阶段 2 上线后，本关由 CI 每日自动执行（见 [ROADMAP.md](ROADMAP.md)）。

---

## 报告 schema

每份报告放在 `lab/reports/<插件名>.md`，固定字段：

```markdown
# <插件名>
- 来源: <仓库或 npm 链接> | 版本: <x.y.z> | commit: <sha 或 unknown>
- 测试环境: DSH <ver> · pnpm <ver> · node <ver> · <platform> · 测试日期 <UTC>
- 结论: ✅ 推荐 / ⚠️ 可用但注意 / ❌ 不推荐（含一句话理由）
- 四关: 安装 ✅/❌ · 冒烟 ✅/❌/⏳ · 快检（命中清单） · 钉版（版本记录）
- 复现: <完整命令>
- 日志: <脱敏日志要点或链接>
```

**状态图例**：✅ 通过 / ❌ 未通过（附原因）/ ⏳ 未执行（附原因）。任何结论都必须能对上日志。

---

## 诚信条款

- 报告永远**只描述我们做过的事**。没测过的关写 ⏳，不写推测。
- 测试结果若受环境因素影响（如网络），必须把环境因素写进报告，而不是归咎于插件。
- 发现报告错误：欢迎按 [CONTRIBUTING.md](../CONTRIBUTING.md) 提复现不一致，我们复测后勘误并保留勘误记录。
