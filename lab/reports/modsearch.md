# modsearch

- **来源**: `https://codeload.github.com/liustack/modsearch/tar.gz/HEAD`
- **安装包名/版本**: `@liustack/modsearch` 5.4.2 · commit: 1182522
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 25 处（逐条见下） |
| 4 兼容钉版 | 5.4.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/liustack/modsearch/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/modsearch.install.md](../logs/modsearch.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（11 处）
- `@liustack/modsearch/CHANGELOG.md:19`
- `@liustack/modsearch/CHANGELOG.md:35`
- `@liustack/modsearch/CHANGELOG.md:38`
- `@liustack/modsearch/CHANGELOG.md:41`
- `@liustack/modsearch/CHANGELOG.md:52`
- `@liustack/modsearch/CHANGELOG.md:59`
- `@liustack/modsearch/CHANGELOG.md:60`
- `@liustack/modsearch/CHANGELOG.md:69`
- `@liustack/modsearch/CHANGELOG.md:71`
- `@liustack/modsearch/CHANGELOG.md:78`
- `@liustack/modsearch/skills/modsearch/references/configure.md:135`
> 判定: CHANGELOG/docs 长行（文档），非混淆。

### 网络出口（5 处）
- `@liustack/modsearch/CHANGELOG.md:80`
- `@liustack/modsearch/docs/security.md:27`
- `@liustack/modsearch/docs/troubleshooting.md:39`
- `@liustack/modsearch/docs/troubleshooting.md:127`
- `@liustack/modsearch/docs/troubleshooting.zh-CN.md:127`
> 判定: docs 文档（tavily 引擎说明），非代码行为。

### 凭证读取（4 处）
- `@liustack/modsearch/docs/commit.md:74`
- `@liustack/modsearch/docs/security.md:19`
- `@liustack/modsearch/skills/modsearch/references/configure.md:78`
- `@liustack/modsearch/skills/modsearch/references/configure.md:83`
> 判定: docs 安全说明（'不提交 .env/凭据'、URL 凭据过滤）+ tavily apiKey 配置文档，属文档。

### 子进程（3 处）
- `@liustack/modsearch/docs/testing.md:33`
- `@liustack/modsearch/dsh/index.js:17`
- `@liustack/modsearch/dsh/index.js:336`
> 判定: spawn 搜索引擎 CLI（modsearch 核心功能，参数数组传递）+ docs 说明，属功能本身。

### 原生模块（2 处）
- `@liustack/modsearch/skills/modsearch/references/runtime.md:77`
- `@liustack/modsearch/skills/modsearch/references/runtime.zh-CN.md:50`
> 判定: docs 中 checked.node 文件名文本（运行环境检查项），非原生加载。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/liustack/modsearch/tar.gz/HEAD` → `@liustack/modsearch@5.4.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 30 source files scanned; 25 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

