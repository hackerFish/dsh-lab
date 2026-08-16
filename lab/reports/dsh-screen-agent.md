# dsh-screen-agent

- **来源**: `https://codeload.github.com/lak321/dsh-screen-agent/tar.gz/HEAD`
- **安装包名/版本**: `HEAD` 0.0.0 · commit: 1ce00c9
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 6 处（逐条见下） |
| 4 兼容钉版 | unknown · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/lak321/dsh-screen-agent/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-screen-agent.install.md](../logs/dsh-screen-agent.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（4 处）
- `HEAD/README.md:16`
- `HEAD/README.md:42`
- `HEAD/README.md:49`
- `HEAD/install/cordis.patch.example.yml:3`
> 判定: README 文档（截图存储路径说明）。

### 子进程（2 处）
- `HEAD/host/lib/index.js:14`
- `HEAD/host/lib/index.js:30`
> 判定: spawn powershell 截图脚本（Windows 屏幕捕获，核心功能），windowsHide，属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/lak321/dsh-screen-agent/tar.gz/HEAD` → `HEAD@unknown`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 11 source files scanned; 6 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

