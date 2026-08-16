# dsh-vision-router

- **来源**: `https://codeload.github.com/ysr666/dsh-vision-router/tar.gz/HEAD`
- **安装包名/版本**: `dsh-vision-router` 1.4.3 · commit: 9fdec2e
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 58 处（逐条见下） |
| 4 兼容钉版 | 1.4.3 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/ysr666/dsh-vision-router/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-vision-router.install.md](../logs/dsh-vision-router.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（20 处）
- `dsh-vision-router/README.md:33`
- `dsh-vision-router/README.md:147`
- `dsh-vision-router/README.zh.md:33`
- `dsh-vision-router/README.zh.md:145`
- `dsh-vision-router/index.js:2441`
- `dsh-vision-router/index.js:3063`
- `dsh-vision-router/index.js:3143`
- `dsh-vision-router/index.js:3327`
- `dsh-vision-router/index.js:3747`
- `dsh-vision-router/index.js:3754`
- `dsh-vision-router/index.js:3756`
- `dsh-vision-router/index.js:3757`
- `dsh-vision-router/index.js:5741`
- `dsh-vision-router/lib/catalog-corrections.js:242`
- `dsh-vision-router/lib/client.js:63`
> 判定: 视觉供应商 API（用户配置 + 内置 OVH 匿名兜底）+ 自有路由 /_dsh/vision-router/* + 代理白名单过滤（hostMatchesAny 只代理声明的主机，安全正向），无外联。
- … 其余 5 处

### 混淆线索（1 处）
- `dsh-vision-router/README.md:147`
> 判定: README 长行（文档），正常。

### 凭证读取（20 处）
- `dsh-vision-router/README.md:174`
- `dsh-vision-router/README.md:264`
- `dsh-vision-router/README.md:367`
- `dsh-vision-router/README.md:410`
- `dsh-vision-router/README.md:433`
- `dsh-vision-router/README.md:434`
- `dsh-vision-router/README.md:463`
- `dsh-vision-router/README.zh.md:172`
- `dsh-vision-router/README.zh.md:262`
- `dsh-vision-router/README.zh.md:365`
- `dsh-vision-router/README.zh.md:407`
- `dsh-vision-router/README.zh.md:428`
- `dsh-vision-router/README.zh.md:429`
- `dsh-vision-router/README.zh.md:458`
- `dsh-vision-router/docs/doctor.md:35`
> 判定: README 文档 + 通过 credentials 解析视觉供应商 key（含 stealth 模式接管官方路由说明），属功能本身。
- … 其余 5 处

### 文件写入/删除（10 处）
- `dsh-vision-router/index.js:23`
- `dsh-vision-router/index.js:4637`
- `dsh-vision-router/index.js:5302`
- `dsh-vision-router/index.js:5392`
- `dsh-vision-router/index.js:5394`
- `dsh-vision-router/lib/doctor.js:1`
- `dsh-vision-router/lib/doctor.js:36`
- `dsh-vision-router/lib/doctor.js:145`
- `dsh-vision-router/lib/file-logger.js:1`
- `dsh-vision-router/lib/file-logger.js:100`
> 判定: 文件日志（0600 权限）与缓存/清单写入，属功能本身。

### 子进程（7 处）
- `dsh-vision-router/index.js:28`
- `dsh-vision-router/index.js:1482`
- `dsh-vision-router/lib/file-logger.js:4`
- `dsh-vision-router/lib/file-logger.js:168`
- `dsh-vision-router/lib/file-logger.js:172`
- `dsh-vision-router/lib/file-logger.js:175`
- `dsh-vision-router/lib/self-update.js:1`
> 判定: exec open/explorer/xdg-open 打开日志目录 + self-update 工具，参数数组传递，属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/ysr666/dsh-vision-router/tar.gz/HEAD` → `dsh-vision-router@1.4.3`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 29 source files scanned; 58 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

