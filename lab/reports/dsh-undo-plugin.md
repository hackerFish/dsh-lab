# dsh-undo-plugin

- **来源**: `https://codeload.github.com/lire1131/dsh-undo-plugin/tar.gz/HEAD`
- **安装包名/版本**: `dsh-undo-savepoint` 0.3.4 · commit: 2d498c2
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 44 处（逐条见下） |
| 4 兼容钉版 | 0.3.4 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/lire1131/dsh-undo-plugin/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-undo-plugin.install.md](../logs/dsh-undo-plugin.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `dsh-undo-savepoint/README.en.md:34`
- `dsh-undo-savepoint/README.en.md:56`
- `dsh-undo-savepoint/README.en.md:64`
- `dsh-undo-savepoint/README.en.md:70`
- `dsh-undo-savepoint/README.md:36`
- `dsh-undo-savepoint/README.md:58`
- `dsh-undo-savepoint/README.md:66`
- `dsh-undo-savepoint/README.md:72`
- `dsh-undo-savepoint/lib/client.js:88`
- `dsh-undo-savepoint/lib/client.js:173`
- `dsh-undo-savepoint/lib/index.js:155`
- `dsh-undo-savepoint/lib/index.js:156`
- `dsh-undo-savepoint/lib/index.js:221`
- `dsh-undo-savepoint/lib/index.js:241`
- `dsh-undo-savepoint/lib/index.js:266`
- … 其余 5 处

> 判定: 命中是快照/脱敏/回滚密钥的核心功能——代码对 .env/.credentials.yaml 自动脱敏、真实值存本机 vault 并警告勿外传，属安全正向设计，未见异常。

### 混淆线索（2 处）
- `dsh-undo-savepoint/lib/client.js:10`
- `dsh-undo-savepoint/lib/client.js:20`

> 判定: 命中为客户端 bundle 内联 CSS 字符串，属正常打包现象，未见异常。

### 网络出口（1 处）
- `dsh-undo-savepoint/lib/client.js:245`

> 判定: fetch 是 WebUI 调用插件自带的本地 REST API（/api/undo/*，同源请求），无外传，未见异常。

### 子进程（1 处）
- `dsh-undo-savepoint/lib/index.js:37`

> 判定: execFile 调用 PowerShell 弹本机目录/文件选择对话框及做 zip 打包（导出/导入），属宣称功能，未见异常。

### 文件写入/删除（20 处）
- `dsh-undo-savepoint/lib/index.js:207`
- `dsh-undo-savepoint/lib/index.js:270`
- `dsh-undo-savepoint/lib/index.js:445`
- `dsh-undo-savepoint/lib/index.js:478`
- `dsh-undo-savepoint/lib/index.js:480`
- `dsh-undo-savepoint/lib/index.js:575`
- `dsh-undo-savepoint/lib/index.js:606`
- `dsh-undo-savepoint/lib/index.js:753`
- `dsh-undo-savepoint/lib/index.js:776`
- `dsh-undo-savepoint/lib/index.js:791`
- `dsh-undo-savepoint/lib/index.js:835`
- `dsh-undo-savepoint/lib/index.js:846`
- `dsh-undo-savepoint/lib/index.js:1100`
- `dsh-undo-savepoint/lib/index.js:1873`
- `dsh-undo-savepoint/tools/e2e-watch.mjs:9`
- … 其余 5 处

> 判定: 写入是快照保存与回滚的必然动作——写快照、脱敏文件、vault、manifest 及恢复配置，属功能本身，未见异常。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/lire1131/dsh-undo-plugin/tar.gz/HEAD` → `dsh-undo-savepoint@0.3.4`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 19 source files scanned; 44 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

