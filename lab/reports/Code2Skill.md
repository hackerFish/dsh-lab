# Code2Skill

- **来源**: `https://codeload.github.com/leechen298/Code2Skill/tar.gz/HEAD`
- **安装包名/版本**: `@leechen298/code2skill` 1.1.3 · commit: e59a74f
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 62 处（逐条见下） |
| 4 兼容钉版 | 1.1.3 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/leechen298/Code2Skill/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/Code2Skill.install.md](../logs/Code2Skill.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（20 处）
- `@leechen298/code2skill/skills/code2skill-generate/references/artifact-contract.md:90`
- `@leechen298/code2skill/skills/code2skill-generate/references/artifact-contract.md:92`
- `@leechen298/code2skill/skills/code2skill-generate/references/artifact-contract.md:99`
- `@leechen298/code2skill/skills/code2skill-generate/references/artifact-contract.md:139`
- `@leechen298/code2skill/skills/code2skill-generate/references/artifact-contract.md:195`
- `@leechen298/code2skill/skills/code2skill-generate/references/artifact-contract.md:197`
- `@leechen298/code2skill/skills/code2skill-generate/references/artifact-contract.md:203`
- `@leechen298/code2skill/skills/code2skill-generate/references/capability-model.md:94`
- `@leechen298/code2skill/skills/code2skill-generate/references/capability-model.md:96`
- `@leechen298/code2skill/skills/code2skill-generate/references/capability-model.md:120`
- `@leechen298/code2skill/skills/code2skill-generate/references/documentation-contract.md:3`
- `@leechen298/code2skill/skills/code2skill-generate/references/documentation-contract.md:55`
- `@leechen298/code2skill/skills/code2skill-generate/references/documentation-contract.md:104`
- `@leechen298/code2skill/skills/code2skill-generate/references/evidence-and-discovery.md:75`
- `@leechen298/code2skill/skills/code2skill-generate/references/mcp-tool-design.md:91`
- `@leechen298/code2skill/skills/code2skill-generate/references/mcp-tool-design.md:125`
- `@leechen298/code2skill/skills/code2skill-generate/references/mcp-tool-design.md:141`
- `@leechen298/code2skill/skills/code2skill-generate/references/verification.md:20`
- `@leechen298/code2skill/skills/code2skill-generate/references/verification.md:22`
- `@leechen298/code2skill/skills/code2skill-generate/references/verification.md:89`
> 判定: 全部命中为 skills 规范文档（artifact-contract.md 等）的长行文本，非混淆。
### 凭证读取（11 处）
- `@leechen298/code2skill/skills/code2skill-generate/references/documentation-contract.md:104`
- `@leechen298/code2skill/skills/code2skill-generate/references/mcp-tool-design.md:137`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/probe_mcp.py:98`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/run_pipeline.py:16`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:136`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:139`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:207`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:364`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:523`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1384`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_core_export.py:114`
> 判定: 规范文档 + 校验脚本中'不得包含凭据'的**校验规则字符串**（安全校验器本身），与 dsh-plugin-vetting 同型，属预期命中。
### 文件写入/删除（16 处）
- `@leechen298/code2skill/skills/code2skill-generate/scripts/finalize_export.py:95`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/run_pipeline.py:862`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/run_pipeline.py:912`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/run_pipeline.py:1039`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/run_vectors.py:54`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/run_vectors.py:340`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1256`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1257`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1316`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1323`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1324`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:2023`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:2024`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_vnext.py:4977`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_vnext.py:4987`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_vnext.py:4988`
> 判定: 校验脚本的规则字符串（writeFile/unlink 等危险模式清单）+ 导出清理，属校验器本身。
### 网络出口（10 处）
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1248`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1323`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1422`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1430`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1461`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1469`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1486`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:2023`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:2370`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_vnext.py:4987`
> 判定: 校验脚本的规则字符串（fetch/axios/WebSocket 模式清单），属校验器本身。
### 子进程（5 处）
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1257`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1261`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:1324`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_artifacts.py:2024`
- `@leechen298/code2skill/skills/code2skill-generate/scripts/validate_vnext.py:4989`
> 判定: 校验脚本的规则字符串（child_process/spawn 模式清单），属校验器本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/leechen298/Code2Skill/tar.gz/HEAD` → `@leechen298/code2skill@1.1.3`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 29 source files scanned; 62 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

