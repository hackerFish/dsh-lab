# dsh-memento

- **来源**: `https://codeload.github.com/PerryLink/dsh-memento/tar.gz/HEAD`
- **安装包名/版本**: `dsh-memento` 0.4.0 · commit: 724ad2e
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 32 处（逐条见下） |
| 4 兼容钉版 | 0.4.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/PerryLink/dsh-memento/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-memento.install.md](../logs/dsh-memento.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（19 处）
- `dsh-memento/ARCHITECTURE.md:141`
- `dsh-memento/CHANGELOG.md:29`
- `dsh-memento/README.es.md:88`
- `dsh-memento/README.es.md:188`
- `dsh-memento/README.hi.md:88`
- `dsh-memento/README.hi.md:188`
- `dsh-memento/README.md:16`
- `dsh-memento/README.md:88`
- `dsh-memento/README.md:159`
- `dsh-memento/README.md:188`
- `dsh-memento/README.pt.md:88`
- `dsh-memento/README.pt.md:188`
- `dsh-memento/README.zh.md:88`
- `dsh-memento/README.zh.md:188`
- `dsh-memento/docs/protocol-v1.md:22`
> 判定: README 多语言文档；README 明示 'Zero network, zero credentials'（本地数据库、0600 权限、无网络），属安全设计。
- … 其余 4 处

### 混淆线索（8 处）
- `dsh-memento/README.es.md:54`
- `dsh-memento/README.es.md:108`
- `dsh-memento/README.hi.md:54`
- `dsh-memento/README.hi.md:108`
- `dsh-memento/README.md:54`
- `dsh-memento/README.md:108`
- `dsh-memento/README.pt.md:54`
- `dsh-memento/README.pt.md:108`
> 判定: README 多语言长行（西班牙语/印地语/葡萄牙语文档），非混淆。

### 网络出口（3 处）
- `dsh-memento/client/client.js:204`
- `dsh-memento/client/client.js:214`
- `dsh-memento/client/client.js:218`
> 判定: fetch 自有路由 /api/memento/*，同源请求。

### 文件写入/删除（2 处）
- `dsh-memento/test/protocol-conformance/run.mjs:12`
- `dsh-memento/test/protocol-conformance/run.mjs:59`
> 判定: 测试协议临时目录清理，开发期。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/PerryLink/dsh-memento/tar.gz/HEAD` → `dsh-memento@0.4.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 39 source files scanned; 32 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

