# deepseek-harness-tui

- **来源**: `https://codeload.github.com/openma-ai/deepseek-harness-tui/tar.gz/HEAD`
- **安装包名/版本**: `HEAD` unknown · commit: 90ce0e8
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 53 处（逐条见下） |
| 4 兼容钉版 | unknown · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/openma-ai/deepseek-harness-tui/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/deepseek-harness-tui.install.md](../logs/deepseek-harness-tui.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `HEAD/README.en.md:67`
- `HEAD/README.en.md:99`
- `HEAD/README.en.md:120`
- `HEAD/README.en.md:121`
- `HEAD/README.md:88`
- `HEAD/README.md:109`
- `HEAD/complex-markdown-demo.md:100`
- `HEAD/npm/README.md:23`
- `HEAD/src/app.rs:454`
- `HEAD/src/app.rs:2054`
- `HEAD/src/main.rs:50`
- `HEAD/src/main.rs:56`
- `HEAD/src/runtime.rs:29`
- `HEAD/src/runtime.rs:30`
- `HEAD/src/runtime.rs:41`
> 判定: README + Rust 源码读取 DEEPSEEK_API_KEY 注入子运行时（TUI 启动 dsh runtime 的机制，且回退读取本机 ~/.dsh 配置），属功能本身。
- … 其余 5 处

### 网络出口（1 处）
- `HEAD/complex-markdown-demo.md:111`
> 判定: 文档示例文本（deploy 示例），非代码行为。

### 子进程（20 处）
- `HEAD/npm/bin/dsh-tui.js:5`
- `HEAD/npm/bin/dsh-tui.js:36`
- `HEAD/npm/lib/index.js:42`
- `HEAD/npm/lib/index.js:88`
- `HEAD/npm/lib/index.js:115`
- `HEAD/scripts/check-release-tag.test.mjs:2`
- `HEAD/scripts/check-release-tag.test.mjs:21`
- `HEAD/scripts/package-native.test.mjs:2`
- `HEAD/scripts/package-native.test.mjs:12`
- `HEAD/scripts/plugin-runner.test.mjs:21`
- `HEAD/scripts/test-attach.mjs:12`
- `HEAD/scripts/test-attach.mjs:20`
- `HEAD/src/app.rs:2408`
- `HEAD/src/clipboard.rs:66`
- `HEAD/src/controller.rs:46`
> 判定: spawn/spawnSync 启动 TUI 进程、attach-fds/tcp 模式与线程（Rust 多线程属正常并发），属功能本身。
- … 其余 5 处

### 混淆线索（1 处）
- `HEAD/npm/lib/index.js:549`
> 判定: base64 编码（IPC 数据），正常。

### 文件写入/删除（10 处）
- `HEAD/scripts/check-release-tag.test.mjs:3`
- `HEAD/scripts/check-release-tag.test.mjs:15`
- `HEAD/scripts/check-release-tag.test.mjs:16`
- `HEAD/scripts/check-release-tag.test.mjs:43`
- `HEAD/scripts/package-native.test.mjs:3`
- `HEAD/scripts/package-native.test.mjs:22`
- `HEAD/scripts/package-native.test.mjs:51`
- `HEAD/scripts/plugin-runner.test.mjs:2`
- `HEAD/scripts/plugin-runner.test.mjs:166`
- `HEAD/scripts/plugin-runner.test.mjs:167`
> 判定: 打包/发布测试脚本写临时文件，开发期。

### 原生模块（1 处）
- `HEAD/src/input/macos_mod.rs:35`
> 判定: macOS FFI 测试注释（'proves the FFI link works'），无实际加载。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/openma-ai/deepseek-harness-tui/tar.gz/HEAD` → `HEAD@unknown`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 49 source files scanned; 53 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

