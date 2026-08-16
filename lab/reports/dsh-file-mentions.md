# dsh-file-mentions

- **来源**: `https://codeload.github.com/a903067276-rgb/dsh-file-mentions/tar.gz/HEAD`
- **安装包名/版本**: `dsh-file-mentions` 1.0.0 · commit: c65d59b
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 5 处（逐条见下） |
| 4 兼容钉版 | 1.0.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/a903067276-rgb/dsh-file-mentions/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-file-mentions.install.md](../logs/dsh-file-mentions.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（2 处）
- `dsh-file-mentions/README.md:44`
- `dsh-file-mentions/README.zh-CN.md:43`
> 判定: README 文档文本（挂载路径说明）。
### 网络出口（2 处）
- `dsh-file-mentions/lib/client.js:40`
- `dsh-file-mentions/lib/client.js:245`
> 判定: fetch 自有路由 /api/file-mentions/*，同源请求。
### 子进程（1 处）
- `dsh-file-mentions/lib/index.js:14`
> 判定: execFile 调用系统 open/explorer/xdg-open 打开文件/文件夹（无 shell 拼接），属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/a903067276-rgb/dsh-file-mentions/tar.gz/HEAD` → `dsh-file-mentions@1.0.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 5 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

