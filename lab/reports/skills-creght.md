# skills-creght

- **来源**: `https://codeload.github.com/creght-dev/skills/tar.gz/HEAD`
- **安装包名/版本**: `creght-skills` 1.0.0 · commit: 5e20ab3
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 4 处（逐条见下） |
| 4 兼容钉版 | 1.0.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/creght-dev/skills/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/skills-creght.install.md](../logs/skills-creght.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（4 处）
- `creght-skills/skills/creght/references/cli.md:247`
- `creght-skills/skills/creght/references/func.md:31`
- `creght-skills/skills/creght/references/func.md:72`
- `creght-skills/skills/creght/references/func.md:162`
> 判定: 技能集合仓库的参考文档（'凭据来自 process.env'等规范说明），非插件代码。




> **目录结构发现**：安装成功，但包根无 `cordis.patch.yml`——插件组件位于仓库子目录（如 dsh-plugin/ 或 adapters/dsh/），属单仓多包结构；直接 `dsh plugin add` 安装的是仓库根包，不一定能作为插件挂载。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/creght-dev/skills/tar.gz/HEAD` → `creght-skills@1.0.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 33 source files scanned; 4 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意 — note: no cordis.patch.yml (not a real plugin entry) — note: no cordis.patch.yml at package root (monorepo layout)

