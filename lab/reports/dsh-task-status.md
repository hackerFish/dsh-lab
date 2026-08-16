# dsh-task-status

- **来源**: `https://codeload.github.com/vlln/dsh-task-status/tar.gz/HEAD`
- **安装包名/版本**: `@vlln/dsh-task-status` 0.3.0 · commit: 97591e0
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 2 处（逐条见下） |
| 4 兼容钉版 | 0.3.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/vlln/dsh-task-status/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-task-status.install.md](../logs/dsh-task-status.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（2 处）
- `@vlln/dsh-task-status/lib/client.js:74`
- `@vlln/dsh-task-status/lib/client.js:112`
> 判定: 两处 fetch 均为插件自有路由（任务列表/任务输出），同源请求，正常。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/vlln/dsh-task-status/tar.gz/HEAD` → `@vlln/dsh-task-status@0.3.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: per-category judgements added;  6 source files scanned; 2 hits — see per-category lists above (hits are leads, not verdicts)
- **Verdict**: ⚠️ 可用但注意

