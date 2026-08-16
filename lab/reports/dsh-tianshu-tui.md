# dsh-tianshu-tui

- **来源**: `https://codeload.github.com/huiliyi37/dsh-tianshu-tui/tar.gz/HEAD`
- **安装包名/版本**: `@huiliyi37/dsh-tianshu-tui` 0.1.2-rc.10 · commit: 0bd5bcb
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 55 处（逐条见下） |
| 4 兼容钉版 | 0.1.2-rc.10 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/huiliyi37/dsh-tianshu-tui/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-tianshu-tui.install.md](../logs/dsh-tianshu-tui.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `@huiliyi37/dsh-tianshu-tui/README.en.md:62`
- `@huiliyi37/dsh-tianshu-tui/README.en.md:74`
- `@huiliyi37/dsh-tianshu-tui/README.en.md:76`
- `@huiliyi37/dsh-tianshu-tui/README.en.md:79`
- `@huiliyi37/dsh-tianshu-tui/README.en.md:183`
- `@huiliyi37/dsh-tianshu-tui/README.en.md:249`
- `@huiliyi37/dsh-tianshu-tui/README.en.md:276`
- `@huiliyi37/dsh-tianshu-tui/README.md:63`
- `@huiliyi37/dsh-tianshu-tui/README.md:74`
- `@huiliyi37/dsh-tianshu-tui/README.md:77`
- `@huiliyi37/dsh-tianshu-tui/README.md:78`
- `@huiliyi37/dsh-tianshu-tui/README.md:182`
- `@huiliyi37/dsh-tianshu-tui/README.md:248`
- `@huiliyi37/dsh-tianshu-tui/README.md:277`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:1198`
> 判定: README + /config 面板的 credentials 投影（设置面板显示凭据状态），属功能本身。
- … 其余 5 处

### 子进程（17 处）
- `@huiliyi37/dsh-tianshu-tui/README.en.md:136`
- `@huiliyi37/dsh-tianshu-tui/README.md:135`
- `@huiliyi37/dsh-tianshu-tui/SOURCE-MAP.md:105`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:2`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:145`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:232`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:13755`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:13764`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:14045`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:16933`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:16934`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:20774`
- `@huiliyi37/dsh-tianshu-tui/lib/types/lsp/manager.d.ts:1`
- `@huiliyi37/dsh-tianshu-tui/lib/types/lsp/multi-manager.d.ts:4`
- `@huiliyi37/dsh-tianshu-tui/lib/types/lsp/multi-manager.d.ts:12`
> 判定: spawn LSP 服务器与编辑器命令（TUI 的 LSP/编辑集成），参数数组传递，属功能本身。
- … 其余 2 处

### 混淆线索（4 处）
- `@huiliyi37/dsh-tianshu-tui/README.en.md:204`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:9233`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:9752`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:22288`
> 判定: base64 图片管线编解码 + ANSI 常量（TUI 渲染），正常。

### 文件写入/删除（11 处）
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:3`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:6`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:9067`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:9105`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:9127`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:9128`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:9233`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:16899`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:16910`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:16942`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:19902`
> 判定: 临时图片文件管理 + 导出写入，属功能本身。

### 网络出口（3 处）
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:102`
- `@huiliyi37/dsh-tianshu-tui/lib/index.js:18617`
- `@huiliyi37/dsh-tianshu-tui/lib/types/format/memory-overlay.d.ts:32`
> 判定: fetch 仅查 npm registry 最新版本（3s 超时更新检查），属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/huiliyi37/dsh-tianshu-tui/tar.gz/HEAD` → `@huiliyi37/dsh-tianshu-tui@0.1.2-rc.10`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 133 source files scanned; 55 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

