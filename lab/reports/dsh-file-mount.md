# dsh-file-mount

- **来源**: `https://codeload.github.com/acefun29/dsh-file-mount/tar.gz/HEAD`
- **安装包名/版本**: `dsh-file-mount` 0.5.0 · commit: ff6c7b6
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 8 处（逐条见下） |
| 4 兼容钉版 | 0.5.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/acefun29/dsh-file-mount/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-file-mount.install.md](../logs/dsh-file-mount.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（2 处）
- `dsh-file-mount/README.en.md:56`
- `dsh-file-mount/lib/client.js:300`
> 判定: README 文本 + 打包 CSS，正常。
### 文件写入/删除（5 处）
- `dsh-file-mount/lib/index.js:5`
- `dsh-file-mount/lib/index.js:7`
- `dsh-file-mount/lib/index.js:561`
- `dsh-file-mount/lib/index.js:563`
- `dsh-file-mount/lib/index.js:1150`
> 判定: 挂载状态写入 + 可写性探测（写 x 再删），属功能本身。
### 安装钩子（1 处）
- `dsh-file-mount/package.json:28`
> 判定: prepare 为 tsc && tsdown 构建，无危险操作。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/acefun29/dsh-file-mount/tar.gz/HEAD` → `dsh-file-mount@0.5.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 24 source files scanned; 8 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

