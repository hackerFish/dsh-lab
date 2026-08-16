# dsh-genui

- **来源**: `https://codeload.github.com/omdsh-dev/dsh-genui/tar.gz/HEAD`
- **安装包名/版本**: `@omdsh-dev/dsh-genui` 0.8.6 · commit: 2187fa4
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 17 处（逐条见下） |
| 4 兼容钉版 | 0.8.6 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/omdsh-dev/dsh-genui/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-genui.install.md](../logs/dsh-genui.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（12 处）
- `@omdsh-dev/dsh-genui/README.md:109`
- `@omdsh-dev/dsh-genui/README.md:135`
- `@omdsh-dev/dsh-genui/README.md:152`
- `@omdsh-dev/dsh-genui/README.md:153`
- `@omdsh-dev/dsh-genui/README.md:156`
- `@omdsh-dev/dsh-genui/README.md:167`
- `@omdsh-dev/dsh-genui/README.zh-CN.md:109`
- `@omdsh-dev/dsh-genui/README.zh-CN.md:152`
- `@omdsh-dev/dsh-genui/README.zh-CN.md:153`
- `@omdsh-dev/dsh-genui/README.zh-CN.md:156`
- `@omdsh-dev/dsh-genui/README.zh-CN.md:167`
- `@omdsh-dev/dsh-genui/tsdown.config.ts:114`
> 判定: README 文档（e2e 运行示例）与 tsdown 配置，非运行代码行为。

### 混淆线索（3 处）
- `@omdsh-dev/dsh-genui/lib/client.js:1`
- `@omdsh-dev/dsh-genui/lib/client.js:5`
- `@omdsh-dev/dsh-genui/lib/types/plugin/index.d.ts:16`
> 判定: ModuleLoader 打包产物（构建输出），正常。

### 动态执行（2 处）
- `@omdsh-dev/dsh-genui/lib/types/client/safe-math.d.ts:5`
- `@omdsh-dev/dsh-genui/src/client/safe-math.ts:5`
> 判定: 命中行是注释文本——明确写 'WITHOUT eval / new Function'（手写递归求值器），属安全正向反命中。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/omdsh-dev/dsh-genui/tar.gz/HEAD` → `@omdsh-dev/dsh-genui@0.8.6`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 89 source files scanned; 17 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

