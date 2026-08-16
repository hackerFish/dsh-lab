# dsh-reverse-skill

- **来源**: `https://codeload.github.com/dhicoc/dsh-reverse-skill/tar.gz/HEAD`
- **安装包名/版本**: `@dhicoc/dsh-reverse-skill` 1.0.2 · commit: ff9c693
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 126 处（逐条见下） |
| 4 兼容钉版 | 1.0.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/dhicoc/dsh-reverse-skill/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-reverse-skill.install.md](../logs/dsh-reverse-skill.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（20 处）
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/README.md:51`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-pcap-protocol/SKILL.md:3`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-pcap-protocol/SKILL.md:26`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-pcap-protocol/SKILL.md:45`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-pcap-protocol/references/pcap-protocol.md:5`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-runtime-routing/SKILL.md:3`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-runtime-routing/SKILL.md:18`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-runtime-routing/SKILL.md:26`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-runtime-routing/references/runtime-routing.md:7`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-web-runtime/SKILL.md:55`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-websocket-runtime/SKILL.md:2`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-websocket-runtime/SKILL.md:3`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-websocket-runtime/SKILL.md:6`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-websocket-runtime/SKILL.md:44`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-websocket-runtime/agents/openai.yaml:2`
> 判定: 全部命中位于技能文档（CTF/WebSocket/路由逆向的 SKILL 说明与参考文档），非运行代码。
- … 其余 5 处

### 凭证读取（20 处）
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-cloud-metadata-path/SKILL.md:3`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-cloud-metadata-path/agents/openai.yaml:4`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-container-runtime/references/container-runtime.md:26`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-dpapi-credential-chain/SKILL.md:3`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-firmware-layout/SKILL.md:3`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-firmware-layout/SKILL.md:33`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-firmware-layout/SKILL.md:49`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-identity-windows/SKILL.md:10`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-k8s-control-plane/SKILL.md:45`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-queue-worker-drift/SKILL.md:27`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-queue-worker-drift/references/queue-worker-drift.md:6`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-ssrf-metadata-pivot/SKILL.md:3`
- `@dhicoc/dsh-reverse-skill/CTF-Sandbox-Orchestrator/competition-ssrf-metadata-pivot/SKILL.md:10`
- `@dhicoc/dsh-reverse-skill/skills/api-security/references/jwt-oauth-testing.md:91`
- `@dhicoc/dsh-reverse-skill/skills/attack-chain/SKILL.md:275`
> 判定: 全部为渗透测试技能文档/参考（'凭据'是安全测试主题词），非插件自身行为。
- … 其余 5 处

### 文件写入/删除（16 处）
- `@dhicoc/dsh-reverse-skill/skills/case-review/SKILL.md:67`
- `@dhicoc/dsh-reverse-skill/skills/case-review/scripts/review_case.py:376`
- `@dhicoc/dsh-reverse-skill/skills/ida-reverse/references/ida-mcp-cheatsheet.md:145`
- `@dhicoc/dsh-reverse-skill/skills/malware-analysis/SKILL.md:116`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/ssti模板注入.md:559`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/ssti模板注入.md:563`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/供应链攻击.md:229`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:5378`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:5383`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:23291`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/waf-bypass.md:3220`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/waf-bypass.md:3224`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/playbooks/rce.md:3338`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/playbooks/rce.md:4397`
- `@dhicoc/dsh-reverse-skill/skills/pwn-chain/references/heap-pwn.md:19`
> 判定: 渗透测试参考文档中的 payload 示例文本（恶意载荷是**被分析的对象**，非插件执行）。
- … 其余 1 处

### 原生模块（4 处）
- `@dhicoc/dsh-reverse-skill/skills/field-journal/2026-07-22_electron-bytenode-privileged-update-chain.md:17`
- `@dhicoc/dsh-reverse-skill/skills/reverse-engineering/languages-platforms.md:271`
- `@dhicoc/dsh-reverse-skill/skills/reverse-engineering/languages-platforms.md:273`
- `@dhicoc/dsh-reverse-skill/skills/reverse-engineering/languages-platforms.md:274`
> 判定: 逆向工程技能文档中的检查命令示例（.node/ffi 是分析目标），非插件加载。

### 子进程（20 处）
- `@dhicoc/dsh-reverse-skill/skills/field-journal/CONTRIBUTE-BACK.md:45`
- `@dhicoc/dsh-reverse-skill/skills/field-journal/precedent-pentest.md:471`
- `@dhicoc/dsh-reverse-skill/skills/field-journal/precedent-pentest.md:473`
- `@dhicoc/dsh-reverse-skill/skills/field-journal/precedent-pentest.md:483`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/intranet/凭证窃取.md:326`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/lfi-rfi文件包含.md:153`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/lfi-rfi文件包含.md:730`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/lfi-rfi文件包含.md:737`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/lfi-rfi文件包含.md:760`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/rce远程代码执行.md:134`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/rce远程代码执行.md:182`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/rce远程代码执行.md:191`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/rce远程代码执行.md:664`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/sql-nosql注入.md:526`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/sql-nosql注入.md:530`
> 判定: 渗透测试 payload 参考中的命令示例（bash/php 反弹 shell 等均为**文档化攻击载荷**，属该技能库的教学内容）。
- … 其余 5 处

### 动态执行（20 处）
- `@dhicoc/dsh-reverse-skill/skills/field-journal/CONTRIBUTE-BACK.md:45`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/references/web-attack-cheatsheet.md:166`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/methodology/02-bypass-toolkit.md:105`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/ai安全.md:337`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/lfi-rfi文件包含.md:304`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/lfi-rfi文件包含.md:308`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/lfi-rfi文件包含.md:772`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/lfi-rfi文件包含.md:776`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/lfi-rfi文件包含.md:779`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/rce远程代码执行.md:165`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/rce远程代码执行.md:173`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/rce远程代码执行.md:198`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/rce远程代码执行.md:205`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/rce远程代码执行.md:243`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/rce远程代码执行.md:245`
> 判定: 渗透测试参考中的 eval/webshell 载荷文本（教学/分析用途）。
- … 其余 5 处

### 混淆线索（20 处）
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/xss跨站脚本.md:955`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/xss跨站脚本.md:959`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/xss跨站脚本.md:1441`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/xss跨站脚本.md:1445`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/框架漏洞.md:569`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:9950`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:9960`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:10563`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:10573`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:14450`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:15949`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:16229`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:18351`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:18384`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:18407`
> 判定: XSS 载荷与 base64 示例（攻击载荷文档），非插件混淆代码。
- … 其余 5 处

### 安装钩子（6 处）
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/供应链攻击.md:67`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/by-category/web/供应链攻击.md:68`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:23074`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/payloader/raw/web.json:23132`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/playbooks/rce.md:4270`
- `@dhicoc/dsh-reverse-skill/skills/pentest-tools/src-hunter/references/playbooks/rce.md:4271`
> 判定: 供应链攻击参考文档中的 preinstall/postinstall 示例（被分析案例），非插件自身安装脚本。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/dhicoc/dsh-reverse-skill/tar.gz/HEAD` → `@dhicoc/dsh-reverse-skill@1.0.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 496 source files scanned; 126 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

