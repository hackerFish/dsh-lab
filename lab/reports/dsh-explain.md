# dsh-explain

- **来源**: `https://codeload.github.com/yuezengwu/dsh-explain/tar.gz/HEAD`
- **安装包名/版本**: `dsh-explain` 0.1.0 · commit: f2cd85b
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 6 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/yuezengwu/dsh-explain/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-explain.install.md](../logs/dsh-explain.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（5 处）
- `dsh-explain/lib/client/styles.d.ts:2`
- `dsh-explain/lib/client.js:1283`
- `dsh-explain/lib/client.js:2641`
- `dsh-explain/lib/client.js:2698`
- `dsh-explain/lib/types/schema.d.ts:4`
> 判定: CSS 打包产物 + atob 解码（base64 数据）+ SQL schema 常量，均正常。
### 安装钩子（1 处）
- `dsh-explain/package.json:80`
> 判定: prepare 为 pnpm build，发布构建。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/yuezengwu/dsh-explain/tar.gz/HEAD` → `dsh-explain@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 47 source files scanned; 6 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

