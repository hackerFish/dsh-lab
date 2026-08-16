# dsh-side-panel

- **来源**: `https://codeload.github.com/ccq1/dsh-side-panel/tar.gz/HEAD`
- **安装包名/版本**: `@dsh-external/dsh-side-panel` 0.2.0 · commit: baca780
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 19 处（逐条见下） |
| 4 兼容钉版 | 0.2.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/ccq1/dsh-side-panel/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-side-panel.install.md](../logs/dsh-side-panel.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 文件写入/删除（4 处）
- `@dsh-external/dsh-side-panel/lib/index.js:1`
- `@dsh-external/dsh-side-panel/lib/index.js:259`
- `@dsh-external/dsh-side-panel/lib/types/index.js:1`
- `@dsh-external/dsh-side-panel/lib/types/index.js:191`
> 判定: 文件浏览器写文件（编辑保存），属功能本身。

### 子进程（4 处）
- `@dsh-external/dsh-side-panel/lib/index.js:2`
- `@dsh-external/dsh-side-panel/lib/index.js:445`
- `@dsh-external/dsh-side-panel/lib/types/index.js:2`
- `@dsh-external/dsh-side-panel/lib/types/index.js:267`
> 判定: 终端 spawn（script -qfec 包装，含 shell 路径白名单校验 ^/[A-Za-z0-9_./-]+��+ execFile，属终端/文件面板功能本身。

### 原生模块（2 处）
- `@dsh-external/dsh-side-panel/lib/types/client/index.js:14`
- `@dsh-external/dsh-side-panel/package.json:49`
> 判定: xterm addon 引用（终端 UI 组件），无原生加载。

### 混淆线索（6 处）
- `@dsh-external/dsh-side-panel/lib/types/client/index.js:37`
- `@dsh-external/dsh-side-panel/lib/types/client/index.js:39`
- `@dsh-external/dsh-side-panel/lib/types/client/index.js:41`
- `@dsh-external/dsh-side-panel/lib/types/client/index.js:43`
- `@dsh-external/dsh-side-panel/lib/types/client/index.js:45`
- `@dsh-external/dsh-side-panel/lib/types/client/index.js:56`
> 判定: CSS 打包产物，正常。

### 网络出口（2 处）
- `@dsh-external/dsh-side-panel/lib/types/client/index.js:60`
- `@dsh-external/dsh-side-panel/lib/types/client/index.js:64`
> 判定: fetch 自有路由（FILE_BROWSER_ROUTE），同源请求。

### 安装钩子（1 处）
- `@dsh-external/dsh-side-panel/package.json:38`
> 判定: prepare 为 npm run build。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/ccq1/dsh-side-panel/tar.gz/HEAD` → `@dsh-external/dsh-side-panel@0.2.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 14 source files scanned; 19 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

