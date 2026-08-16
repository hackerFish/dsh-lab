# dsh-path-reveal

- **来源**: `https://codeload.github.com/futongxu9-maker/dsh-path-reveal/tar.gz/HEAD`
- **安装包名/版本**: `dsh-path-reveal` 1.0.0 · commit: 3a0e531
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 9 处（逐条见下） |
| 4 兼容钉版 | 1.0.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/futongxu9-maker/dsh-path-reveal/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-path-reveal.install.md](../logs/dsh-path-reveal.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（4 处）
- `dsh-path-reveal/README.md:27`
- `dsh-path-reveal/README.md:28`
- `dsh-path-reveal/lib/index.js:4`
- `dsh-path-reveal/path-reveal.mjs:4`
> 判定: README/注释（挂载路径说明）。

### 网络出口（1 处）
- `dsh-path-reveal/lib/client.js:44`
> 判定: fetch 自有路由（路径 API），同源请求。

### 子进程（4 处）
- `dsh-path-reveal/lib/index.js:21`
- `dsh-path-reveal/lib/index.js:73`
- `dsh-path-reveal/path-reveal.mjs:21`
- `dsh-path-reveal/path-reveal.mjs:73`
> 判定: spawn 系统文件管理器（explorer/open）显示文件位置（参数数组传递），属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/futongxu9-maker/dsh-path-reveal/tar.gz/HEAD` → `dsh-path-reveal@1.0.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 9 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

