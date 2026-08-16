# dsh-hdc-bridge

- **来源**: `https://codeload.github.com/1na-ko/dsh-hdc-bridge/tar.gz/HEAD`
- **安装包名/版本**: `dsh-hdc-bridge` 0.7.2 · commit: 41b9cf6
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 60 处（逐条见下） |
| 4 兼容钉版 | 0.7.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/1na-ko/dsh-hdc-bridge/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-hdc-bridge.install.md](../logs/dsh-hdc-bridge.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（20 处）
- `dsh-hdc-bridge/knowledge/index.json:129`
- `dsh-hdc-bridge/knowledge/index.json:131`
- `dsh-hdc-bridge/knowledge/index.json:132`
- `dsh-hdc-bridge/knowledge/index.json:133`
- `dsh-hdc-bridge/knowledge/index.json:139`
- `dsh-hdc-bridge/knowledge/index.json:142`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:46`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:345`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:459`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:649`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:752`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:854`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:2371`
- `dsh-hdc-bridge/knowledge/js-apis-webSocket.md:1`
- `dsh-hdc-bridge/knowledge/js-apis-webSocket.md:10`
- `dsh-hdc-bridge/knowledge/js-apis-webSocket.md:12`
- `dsh-hdc-bridge/knowledge/js-apis-webSocket.md:14`
- `dsh-hdc-bridge/knowledge/js-apis-webSocket.md:25`
- `dsh-hdc-bridge/knowledge/js-apis-webSocket.md:28`
- `dsh-hdc-bridge/knowledge/js-apis-webSocket.md:30`
> 判定: 命中全部位于 knowledge/ 目录——OpenHarmony 官方 API 文档快照（js-apis-http.md 等）的文本内容，非代码行为。
### 文件写入/删除（19 处）
- `dsh-hdc-bridge/knowledge/index.json:454`
- `dsh-hdc-bridge/knowledge/index.json:455`
- `dsh-hdc-bridge/knowledge/index.json:456`
- `dsh-hdc-bridge/knowledge/index.json:468`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1433`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1476`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1516`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1539`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1541`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1571`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1578`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1580`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1605`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1614`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1616`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:1638`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:2090`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:2092`
- `dsh-hdc-bridge/knowledge/js-apis-file-fs.md:2120`
> 判定: 同上：文档中的 unlink/renameSync 为鸿蒙 API 示例文本。
### 混淆线索（20 处）
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1264`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1265`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1266`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1267`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1268`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1269`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1270`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1271`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1272`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1273`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1274`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1275`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1276`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1278`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1279`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1280`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1281`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1282`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1283`
- `dsh-hdc-bridge/knowledge/js-apis-http.md:1284`
> 判定: markdown 表格超长行（文档排版），非混淆。
### 子进程（1 处）
- `dsh-hdc-bridge/lib/panel.mjs:9`
> 判定: lib/panel.mjs 通过 execFile 调用 hdc（鸿蒙设备连接工具）只读命令集——注释明确固定只读命令 + 硬超时 + watchdog，无 shell 拼接，属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/1na-ko/dsh-hdc-bridge/tar.gz/HEAD` → `dsh-hdc-bridge@0.7.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 48 source files scanned; 60 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

