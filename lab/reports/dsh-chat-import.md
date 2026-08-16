# dsh-chat-import

- **来源**: `https://codeload.github.com/Nwflower/dsh-chat-import/tar.gz/HEAD`
- **安装包名/版本**: `dsh-chat-import` 0.5.1 · commit: cd47635
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 38 处（逐条见下） |
| 4 兼容钉版 | 0.5.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Nwflower/dsh-chat-import/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-chat-import.install.md](../logs/dsh-chat-import.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `dsh-chat-import/CHANGELOG.md:223`
- `dsh-chat-import/CONTRIBUTING.md:48`
- `dsh-chat-import/README.md:83`
- `dsh-chat-import/README.md:202`
- `dsh-chat-import/README.md:215`
- `dsh-chat-import/README.zh-CN.md:83`
- `dsh-chat-import/README.zh-CN.md:202`
- `dsh-chat-import/README.zh-CN.md:215`
- `dsh-chat-import/index.d.ts:264`
- `dsh-chat-import/index.d.ts:342`
- `dsh-chat-import/index.mjs:53`
- `dsh-chat-import/lib/export-tool.mjs:82`
- `dsh-chat-import/lib/imports.mjs:4`
- `dsh-chat-import/lib/imports.mjs:13`
- `dsh-chat-import/lib/imports.mjs:35`
- `dsh-chat-import/lib/tools.mjs:610`
- `dsh-chat-import/lib/tools.mjs:614`
- `dsh-chat-import/lib/tools.mjs:747`
- `dsh-chat-import/lib/tools.mjs:762`
- `dsh-chat-import/lib/tools.mjs:948`
> 判定: README/CHANGELOG/代码注释中的 ~/.dsh 路径（会话导入导出功能本身）；CONTRIBUTING 明确不提交凭据与真实转录。
### 安装钩子（2 处）
- `dsh-chat-import/CHANGELOG.md:403`
- `dsh-chat-import/lib/tools.mjs:51`
> 判定: 两处均为文档文本（CHANGELOG 记录过一次 prepare 相关报错），非安装脚本。
### 混淆线索（2 处）
- `dsh-chat-import/README.md:241`
- `dsh-chat-import/ROADMAP.md:8`
> 判定: README/ROADMAP 中的中文长文本行被超长行规则命中（文档文本）。
### 网络出口（5 处）
- `dsh-chat-import/lib/client.js:385`
- `dsh-chat-import/lib/client.js:395`
- `dsh-chat-import/lib/client.js:410`
- `dsh-chat-import/lib/client.js:518`
- `dsh-chat-import/lib/client.js:557`
> 判定: fetch 自有路由 /api-import/*，同源请求。
### 子进程（2 处）
- `dsh-chat-import/lib/discovery.mjs:54`
- `dsh-chat-import/lib/dsh.mjs:4`
> 判定: execFileSync 调用 zstd（解压会话日志）与 git（版本工具），均属功能本身。
### 文件写入/删除（7 处）
- `dsh-chat-import/lib/discovery.mjs:133`
- `dsh-chat-import/lib/imports.mjs:48`
- `dsh-chat-import/lib/prompt-hint.mjs:14`
- `dsh-chat-import/lib/prompt-hint.mjs:35`
- `dsh-chat-import/lib/sync-config.mjs:37`
- `dsh-chat-import/lib/sync-loop.mjs:129`
- `dsh-chat-import/lib/sync-loop.mjs:420`
> 判定: 会话导入写 registry 与导出文件（~/.dsh/exports），属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Nwflower/dsh-chat-import/tar.gz/HEAD` → `dsh-chat-import@0.5.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 64 source files scanned; 38 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

