# dsh-trajectory-reader

- **来源**: `https://codeload.github.com/flyingtimes/dsh-trajectory-reader/tar.gz/HEAD`
- **安装包名/版本**: `@clarkchan/trajectory-reader` 0.2.5 · commit: 6f8b4f3
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 3 处（逐条见下） |
| 4 兼容钉版 | 0.2.5 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/flyingtimes/dsh-trajectory-reader/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-trajectory-reader.install.md](../logs/dsh-trajectory-reader.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（2 处）
- `@clarkchan/trajectory-reader/client.js:580`
- `@clarkchan/trajectory-reader/client.js:646`
> 判定: fetch 插件自身路由做轨迹摘要，无第三方外联。

### 文件写入/删除（1 处）
- `@clarkchan/trajectory-reader/index.js:147`
> 判定: appendFileSync 写 /tmp/tr-summarize.log 调试日志，无敏感数据外发。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/flyingtimes/dsh-trajectory-reader/tar.gz/HEAD` → `@clarkchan/trajectory-reader@0.2.5`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: per-category judgements added;  6 source files scanned; 3 hits — see per-category lists above (hits are leads, not verdicts)
- **Verdict**: ⚠️ 可用但注意

