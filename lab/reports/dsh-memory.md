# dsh-memory

- **来源**: `https://codeload.github.com/flymysql/dsh-memory/tar.gz/HEAD`
- **安装包名/版本**: `dsh-memory-vault` 0.1.5 · commit: d6afee4
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 1 处（逐条见下） |
| 4 兼容钉版 | 0.1.5 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/flymysql/dsh-memory/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-memory.install.md](../logs/dsh-memory.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（1 处）
- `dsh-memory-vault/lib/client.js:27`
> 判定: 客户端请求插件自己的本地 `/dsh-memory/entries` 记忆库路由，是功能本身，并非外联第三方。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/flymysql/dsh-memory/tar.gz/HEAD` → `dsh-memory-vault@0.1.5`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 1 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

