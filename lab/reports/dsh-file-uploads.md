# dsh-file-uploads

- **来源**: `https://codeload.github.com/l541402398/dsh-file-uploads/tar.gz/HEAD`
- **安装包名/版本**: `dsh-file-uploads` 1.0.0 · commit: 3ea46e1
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
dsh plugin --profile web add https://codeload.github.com/l541402398/dsh-file-uploads/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-file-uploads.install.md](../logs/dsh-file-uploads.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（4 处）
- `dsh-file-uploads/client.js:25`
- `dsh-file-uploads/client.js:250`
- `dsh-file-uploads/client.js:421`
- `dsh-file-uploads/client.js:445`
> 判定: fetch 自有路由 /api/dsh-uploads，同源请求。
### 文件写入/删除（5 处）
- `dsh-file-uploads/index.js:2`
- `dsh-file-uploads/index.js:214`
- `dsh-file-uploads/index.js:257`
- `dsh-file-uploads/index.js:375`
- `dsh-file-uploads/index.js:385`
> 判定: 上传文件的 link/unlink 管理（删除/清理上传文件），属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/l541402398/dsh-file-uploads/tar.gz/HEAD` → `dsh-file-uploads@1.0.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 11 source files scanned; 9 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

