# dsh-shared-memory

- **来源**: `https://codeload.github.com/futongxu9-maker/dsh-shared-memory/tar.gz/HEAD`
- **安装包名/版本**: `dsh-shared-memory` 2.0.0 · commit: 589c037
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 14 处（逐条见下） |
| 4 兼容钉版 | 2.0.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/futongxu9-maker/dsh-shared-memory/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-shared-memory.install.md](../logs/dsh-shared-memory.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（7 处）
- `dsh-shared-memory/README.md:32`
- `dsh-shared-memory/README.md:33`
- `dsh-shared-memory/README.md:47`
- `dsh-shared-memory/lib/index.js:4`
- `dsh-shared-memory/lib/index.js:43`
- `dsh-shared-memory/shared-memory.mjs:4`
- `dsh-shared-memory/shared-memory.mjs:35`
> 判定: README 文档文本与代码注释（~/.dsh 路径说明）。
### 网络出口（2 处）
- `dsh-shared-memory/lib/client.js:52`
- `dsh-shared-memory/lib/client.js:55`
> 判定: fetch 自有路由 /api/shared-memory，同源请求。
### 文件写入/删除（5 处）
- `dsh-shared-memory/lib/index.js:28`
- `dsh-shared-memory/lib/index.js:125`
- `dsh-shared-memory/shared-memory.mjs:21`
- `dsh-shared-memory/shared-memory.mjs:75`
- `dsh-shared-memory/shared-memory.mjs:312`
> 判定: 读写记忆文件（~/.dsh/memories/ 下），属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/futongxu9-maker/dsh-shared-memory/tar.gz/HEAD` → `dsh-shared-memory@2.0.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 14 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

