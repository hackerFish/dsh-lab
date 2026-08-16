# dsh-plugin-registry

- **来源**: `https://codeload.github.com/beancookie/dsh-plugin-registry/tar.gz/HEAD`
- **安装包名/版本**: `dsh-plugin-registry` 0.1.0 · commit: c6c646b
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 9 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/beancookie/dsh-plugin-registry/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-plugin-registry.install.md](../logs/dsh-plugin-registry.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（4 处）
- `dsh-plugin-registry/data/registry-snapshot.json:776`
- `dsh-plugin-registry/data/registry-snapshot.json:1724`
- `dsh-plugin-registry/data/registry-snapshot.json:1725`
- `dsh-plugin-registry/data/registry-snapshot.json:2466`
> 判定: registry-snapshot.json 是插件描述数据（含他插件的中英文说明文本），非敏感行为。

### 网络出口（4 处）
- `dsh-plugin-registry/data/registry-snapshot.json:3219`
- `dsh-plugin-registry/data/registry-snapshot.json:3220`
- `dsh-plugin-registry/lib/client.js:292`
- `dsh-plugin-registry/lib/registry.js:19`
> 判定: fetch 插件注册表 URL（4s 超时，更新快照）+ 自有路由，属功能本身。

### 子进程（1 处）
- `dsh-plugin-registry/lib/profile.js:1`
> 判定: execFile 管理 profile（注册表插件的安装/卸载功能），需看具体命令——见日志；参数数组传递。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/beancookie/dsh-plugin-registry/tar.gz/HEAD` → `dsh-plugin-registry@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 12 source files scanned; 9 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

