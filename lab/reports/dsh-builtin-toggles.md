# dsh-builtin-toggles

- **来源**: `https://codeload.github.com/Starfie1d1272/dsh-builtin-toggles/tar.gz/HEAD`
- **安装包名/版本**: `dsh-builtin-toggles` 0.3.1 · commit: 044cf9e
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 9 处（逐条见下） |
| 4 兼容钉版 | 0.3.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Starfie1d1272/dsh-builtin-toggles/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-builtin-toggles.install.md](../logs/dsh-builtin-toggles.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（1 处）
- `dsh-builtin-toggles/README.en.md:43`
> 判定: README 长行（文档文本）。

### 凭证读取（4 处）
- `dsh-builtin-toggles/lib/client.js:1193`
- `dsh-builtin-toggles/lib/index.js:262`
- `dsh-builtin-toggles/lib/index.js:263`
- `dsh-builtin-toggles/lib/index.js:1652`
> 判定: credentials 服务引用与 DSH_HOME 解析（内置开关管理功能），无异常。

### 文件写入/删除（4 处）
- `dsh-builtin-toggles/lib/index.d.ts:147`
- `dsh-builtin-toggles/lib/index.js:4`
- `dsh-builtin-toggles/lib/index.js:1299`
- `dsh-builtin-toggles/lib/index.js:1663`
> 判定: 通过 @deepseek-ai/dsh-atomic-write 原子写（随机后缀+rename），属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Starfie1d1272/dsh-builtin-toggles/tar.gz/HEAD` → `dsh-builtin-toggles@0.3.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 14 source files scanned; 9 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

