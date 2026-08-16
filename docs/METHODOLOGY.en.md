# Four-Gate Hands-On Testing Methodology (METHODOLOGY)

This document defines dsh-lab's testing protocol. Goal: anyone on any machine can reproduce every one of our conclusions. **The testing process does not depend on the author's machine, credentials, or luck — only on public commands.**

---

## 0. Environment Isolation

Every test runs in an isolated `DSH_HOME`, never touching the machine's real `~/.dsh`:

```bash
export DSH_HOME=/path/to/scratch/.lab-home          # 隔离的 DSH 主目录
export npm_config_store_dir=/path/to/scratch/.pnpm-store  # 隔离 pnpm 全局仓库
```

Test environment info is recorded at the top of every report:

| 字段 | 说明 |
|---|---|
| `dshVersion` | 测试所用 DSH 版本（`@deepseek-ai/dsh` 的 `version` 字段） |
| `pnpmVersion` | `pnpm --version` |
| `nodeVersion` | `node --version` |
| `platform` | 操作系统与架构 |
| `testedAt` | 测试完成的 UTC 时间 |

---

## Gate 1: Install

Initialize the `web` profile in an isolated `DSH_HOME`, then install the plugin under test:

```bash
dsh plugin --profile web add <插件名>          # npm 包名
dsh plugin --profile web add github:owner/repo # GitHub 仓库
dsh plugin --profile web add <本地目录>         # 本地目录（调试用）
```

**Acceptance criteria**: the command exits with code 0, and the plugin appears in the profile's `package.json` under `dependencies`.

**Known environment frictions** (reproduced for real; flagged in reports and guides):

1. **pnpm 9 workspace-root check**: `dsh plugin add` fails with `ERR_PNPM_ADDING_TO_ROOT`. Fix: append `--ignore-workspace-root-check`, or set the environment variable `npm_config_ignore_workspace_root_check=true`. If a report does not state this fix was used, the default command succeeded as-is.
2. **git protocol reachability**: `github:` direct installs rely on the local git's `git+ssh`/`git+https`. In environments where git networking is blocked (SSL subject-name mismatch, etc.), use a codeload tarball direct link instead: `dsh plugin --profile web add https://codeload.github.com/<owner>/<repo>/tar.gz/HEAD`.
3. **registry reachability**: plugins with large dependency trees may time out against `registry.npmjs.org` directly. Use a mirror: `export npm_config_registry=https://registry.npmmirror.com`.
4. **prepare build scripts**: for git/tarball installs, pnpm blocks `prepare` scripts by default; allow them under `allowBuilds` in the profile's `pnpm-workspace.yaml` as pnpm prompts. The report records this step verbatim.

**Every report must**: include the full install log (sanitized) and the final `dependencies` line.

---

## Gate 2: Smoke

Run a minimal task in headless mode to verify the plugin does not crash the process or fail session creation:

```bash
dsh --profile headless "请回答：1+1=?"   # 会话创建、模型调用、插件加载同时被验证
```

**Acceptance criteria**: the process exits normally and outputs a final answer; the session log has no plugin-caused exceptions.

**Credentials note**: this gate requires model credentials. dsh-lab runs it with its own test credentials and publishes the per-run spending cap (current cap: ≤ ¥0.5 CNY-equivalent tokens per plugin). **Reproducers without credentials may skip this gate** — it does not affect the rest of the report's conclusions, and the report marks it ⏳ explicitly.

---

## Gate 3: Security Static Quick-Scan

Run a static pattern scan over the **actually installed** plugin code (not the README, not the repo homepage). Scan scope: all source files under the profile's `node_modules/<插件>`.

Scan pattern list (hits are recorded with file and line number, **no automatic verdict**):

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

**Acceptance criteria**: list hit files and line numbers per category. **A hit ≠ malicious, no hit ≠ harmless**: the quick-scan is a lead, not a verdict. If the plugin ships `prepare`/`postinstall` scripts, scan their contents too.

**Every report must**: include the scan script (this repo's `tools/scan.mjs`, zero-dependency) and the plugin's complete hit list.

**Known scanner limitations** (record each one as found):

1. base64 patterns such as `Buffer.from(...,'base64')` record the **normal image encode/decode of visual/media plugins** under "obfuscation clues" (found in the modlens report on 2026-08-16).
2. security-scanning plugins have **rule tables naturally full of dangerous pattern strings**, so scanning them inevitably floods with hits (found in the dsh-plugin-vetting report on 2026-08-16).
3. `.exec(` (the regex method) was once misreported as a subprocess call; fixed to `(?<!\.)\bexec\s*\(` and kept in the erratum (2026-08-16).

---

## Gate 4: Compatibility & Version Pinning

- Record: plugin version (installed `package.json` version number + source commit) and the DSH version at test time.
- **Re-test triggers**: re-test and update the report date whenever DSH ships a new version or the plugin ships a new version — either one.
- After Phase 2 goes live, this gate runs automatically via CI daily (see [ROADMAP.md](ROADMAP.md)).

---

## Report Schema

Each report lives at `lab/reports/<插件名>.md`, with fixed fields:

```markdown
# <插件名>
- 来源: <仓库或 npm 链接> | 版本: <x.y.z> | commit: <sha 或 unknown>
- 测试环境: DSH <ver> · pnpm <ver> · node <ver> · <platform> · 测试日期 <UTC>
- 结论: ✅ 推荐 / ⚠️ 可用但注意 / ❌ 不推荐（含一句话理由）
- 四关: 安装 ✅/❌ · 冒烟 ✅/❌/⏳ · 快检（命中清单） · 钉版（版本记录）
- 复现: <完整命令>
- 日志: <脱敏日志要点或链接>
```

**Status legend**: ✅ passed / ❌ failed (with reason) / ⏳ not executed (with reason). Every conclusion must map back to the logs.

---

## Integrity Clause

- Reports only ever **describe what we actually did**. Gates not tested are marked ⏳, never speculation.
- If a test result is affected by environmental factors (e.g., network), the report must record the environmental factor instead of blaming the plugin.
- If you find a report error: open a reproduction inconsistency per [CONTRIBUTING.md](../CONTRIBUTING.md); we re-test, correct, and keep the erratum record.


---

## Scanner limitation addendum (2026-08-17)

4. `SKIP_EXTS` does not include `.mp4` and other media extensions, so binary videos get read as text and produce noisy garbage "hits" (found 2026-08-17 in dsh-theme-kit's `wallpapers/*.mp4`; the scanner's extension list has been fixed).
