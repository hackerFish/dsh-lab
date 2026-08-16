# dsh-plugin-writing-guard

- **来源**: `https://codeload.github.com/xmutfyh/dsh-plugin-writing-guard/tar.gz/HEAD`
- **安装包名/版本**: `dsh-plugin-writing-guard` 1.3.0 · commit: fd04bf0
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 6 处（逐条见下） |
| 4 兼容钉版 | 1.3.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/xmutfyh/dsh-plugin-writing-guard/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-plugin-writing-guard.install.md](../logs/dsh-plugin-writing-guard.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（5 处）
- `dsh-plugin-writing-guard/README.en.md:221`
- `dsh-plugin-writing-guard/README.en.md:245`
- `dsh-plugin-writing-guard/README.md:373`
- `dsh-plugin-writing-guard/README.md:396`
- `dsh-plugin-writing-guard/lib/index.js:183`
> 判定: README + 代码注释中的状态文件路径（~/.dsh/plugins/...），属功能本身。
### 文件写入/删除（1 处）
- `dsh-plugin-writing-guard/lib/index.js:115`
> 判定: 增量审计状态文件原子写（tmp + writeFile），属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/xmutfyh/dsh-plugin-writing-guard/tar.gz/HEAD` → `dsh-plugin-writing-guard@1.3.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 6 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

