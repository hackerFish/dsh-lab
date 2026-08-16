# mattpocock-skills-dsh

- **来源**: `https://codeload.github.com/gongyijie85/mattpocock-skills-dsh/tar.gz/HEAD`
- **安装包名/版本**: `mattpocock-skills-dsh` 0.1.2 · commit: e354fee
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 14 处（逐条见下） |
| 4 兼容钉版 | 0.1.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/gongyijie85/mattpocock-skills-dsh/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/mattpocock-skills-dsh.install.md](../logs/mattpocock-skills-dsh.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（9 处）
- `mattpocock-skills-dsh/README.en.md:151`
- `mattpocock-skills-dsh/README.md:149`
- `mattpocock-skills-dsh/skills/ask-matt/SKILL.md:83`
- `mattpocock-skills-dsh/skills/wayfinder/SKILL.md:80`
- `mattpocock-skills-dsh/skills/wizard/SKILL.md:3`
- `mattpocock-skills-dsh/skills/wizard/SKILL.md:8`
- `mattpocock-skills-dsh/skills/wizard/SKILL.md:10`
- `mattpocock-skills-dsh/skills/wizard/SKILL.md:20`
- `mattpocock-skills-dsh/skills/wizard/SKILL.md:25`
> 判定: 技能文档（wizard 技能说明 .env 处理），非插件代码。

### 网络出口（4 处）
- `mattpocock-skills-dsh/skills/tdd/mocking.md:44`
- `mattpocock-skills-dsh/skills/tdd/mocking.md:45`
- `mattpocock-skills-dsh/skills/tdd/mocking.md:46`
- `mattpocock-skills-dsh/skills/tdd/mocking.md:51`
> 判定: 教学文档中的 fetch 示例代码，非运行代码。

### 混淆线索（1 处）
- `mattpocock-skills-dsh/skills/to-tickets/SKILL.md:40`
> 判定: SKILL.md 长行（文档）。




> **目录结构发现**：安装成功，但包根无 `cordis.patch.yml`——插件组件位于仓库子目录（如 dsh-plugin/ 或 adapters/dsh/），属单仓多包结构；直接 `dsh plugin add` 安装的是仓库根包，不一定能作为插件挂载。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/gongyijie85/mattpocock-skills-dsh/tar.gz/HEAD` → `mattpocock-skills-dsh@0.1.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 55 source files scanned; 14 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意 — note: no cordis.patch.yml (not a real plugin entry) — note: no cordis.patch.yml at package root (monorepo layout)

