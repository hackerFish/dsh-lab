# dsh-turn-rewind

- **来源**: `https://codeload.github.com/Anionex/dsh-turn-rewind/tar.gz/HEAD`
- **安装包名/版本**: `@anionex/dsh-turn-rewind` 0.1.1 · commit: b1b85f1
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 35 处（逐条见下） |
| 4 兼容钉版 | 0.1.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Anionex/dsh-turn-rewind/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-turn-rewind.install.md](../logs/dsh-turn-rewind.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（5 处）
- `@anionex/dsh-turn-rewind/README.md:130`
- `@anionex/dsh-turn-rewind/README.md:140`
- `@anionex/dsh-turn-rewind/README.zh.md:128`
- `@anionex/dsh-turn-rewind/README.zh.md:138`
- `@anionex/dsh-turn-rewind/docs/FORMAT.md:3`
> 判定: README/docs 文档（存储路径与保留策略说明）。

### 网络出口（6 处）
- `@anionex/dsh-turn-rewind/lib/client.js:138`
- `@anionex/dsh-turn-rewind/lib/client.js:203`
- `@anionex/dsh-turn-rewind/lib/client.js:248`
- `@anionex/dsh-turn-rewind/src/client/index.tsx:246`
- `@anionex/dsh-turn-rewind/src/client/index.tsx:306`
- `@anionex/dsh-turn-rewind/src/client/index.tsx:345`
> 判定: fetch 自有路由（PATH 为 /api 下的插件路由），同源请求。

### 混淆线索（2 处）
- `@anionex/dsh-turn-rewind/lib/client.js:287`
- `@anionex/dsh-turn-rewind/lib/client.js:289`
> 判定: JSX/CSS 打包产物，正常。

### 子进程（2 处）
- `@anionex/dsh-turn-rewind/lib/git.js:1`
- `@anionex/dsh-turn-rewind/src/git.ts:1`
> 判定: execFile 调 git（恢复检查点文件），参数数组传递，属功能本身。

### 文件写入/删除（20 处）
- `@anionex/dsh-turn-rewind/lib/path-utils.js:1`
- `@anionex/dsh-turn-rewind/lib/path-utils.js:67`
- `@anionex/dsh-turn-rewind/lib/path-utils.js:141`
- `@anionex/dsh-turn-rewind/lib/path-utils.js:190`
- `@anionex/dsh-turn-rewind/lib/store.js:2`
- `@anionex/dsh-turn-rewind/lib/store.js:63`
- `@anionex/dsh-turn-rewind/lib/store.js:79`
- `@anionex/dsh-turn-rewind/lib/store.js:104`
- `@anionex/dsh-turn-rewind/lib/store.js:122`
- `@anionex/dsh-turn-rewind/lib/store.js:191`
- `@anionex/dsh-turn-rewind/lib/store.js:244`
- `@anionex/dsh-turn-rewind/lib/store.js:256`
- `@anionex/dsh-turn-rewind/lib/store.js:301`
- `@anionex/dsh-turn-rewind/lib/store.js:312`
- `@anionex/dsh-turn-rewind/src/path-utils.ts:1`
> 判定: 变更台账（change-ledger）写入/锁/清理（含崩溃残留锁清理），属功能本身。
- … 其余 5 处

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Anionex/dsh-turn-rewind/tar.gz/HEAD` → `@anionex/dsh-turn-rewind@0.1.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 42 source files scanned; 35 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

