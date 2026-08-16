# dsh-sticky-note

- **来源**: `https://codeload.github.com/Meredith2328/dsh-sticky-note/tar.gz/HEAD`
- **安装包名/版本**: `dsh-sticky-note` 0.2.1 · commit: ebabb6c
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 8 处（逐条见下） |
| 4 兼容钉版 | 0.2.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Meredith2328/dsh-sticky-note/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-sticky-note.install.md](../logs/dsh-sticky-note.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（1 处）
- `dsh-sticky-note/README.md:47`
> 判定: README 里的 ~/.dsh/sticky-notes 是默认存储路径说明，属文档文本。

### 文件写入/删除（5 处）
- `dsh-sticky-note/lib/index.js:1`
- `dsh-sticky-note/lib/index.js:62`
- `dsh-sticky-note/lib/index.js:78`
- `dsh-sticky-note/lib/index.js:272`
- `dsh-sticky-note/lib/index.js:286`
> 判定: 便签插件的配置/列表/内容持久化写入（~/.dsh/sticky-notes 下），属功能本身。

### 子进程（2 处）
- `dsh-sticky-note/lib/index.js:4`
- `dsh-sticky-note/lib/index.js:108`
> 判定: spawn 的是 explorer/open/xdg-open 打开便签目录（默认程序打开文件），无 shell 拼接，参数数组传递天然免注入。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Meredith2328/dsh-sticky-note/tar.gz/HEAD` → `dsh-sticky-note@0.2.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: per-category judgements added;  6 source files scanned; 8 hits — see per-category lists above (hits are leads, not verdicts)
- **Verdict**: ⚠️ 可用但注意

