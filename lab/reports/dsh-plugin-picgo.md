# dsh-plugin-picgo

- **来源**: `https://codeload.github.com/PicGo/dsh-plugin/tar.gz/HEAD`
- **安装包名/版本**: `@picgo/dsh-plugin` 0.1.0 · commit: 2f7dd01
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 2 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/PicGo/dsh-plugin/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-plugin-picgo.install.md](../logs/dsh-plugin-picgo.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 安装钩子（1 处）
- `@picgo/dsh-plugin/package.json:49`
> 判定: prepare 为 tsdown 构建。

### 混淆线索（1 处）
- `@picgo/dsh-plugin/skills/picgo-upload/SKILL.md:3`
> 判定: SKILL.md 长行（技能文档），非混淆。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/PicGo/dsh-plugin/tar.gz/HEAD` → `@picgo/dsh-plugin@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 6 source files scanned; 2 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

