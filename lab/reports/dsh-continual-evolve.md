# dsh-continual-evolve

- **来源**: `https://codeload.github.com/ZK-Andy/dsh-continual-evolve/tar.gz/HEAD`
- **安装包名/版本**: `dsh-continual-evolve` 0.1.1 · commit: 7dd0a0c
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 29 处（逐条见下） |
| 4 兼容钉版 | 0.1.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/ZK-Andy/dsh-continual-evolve/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-continual-evolve.install.md](../logs/dsh-continual-evolve.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（2 处）
- `dsh-continual-evolve/README.md:235`
- `dsh-continual-evolve/README.zh.md:161`
> 判定: README 文档（日志路径说明）。

### 文件写入/删除（20 处）
- `dsh-continual-evolve/lib/auto.js:18`
- `dsh-continual-evolve/lib/auto.js:54`
- `dsh-continual-evolve/lib/auto.js:103`
- `dsh-continual-evolve/lib/benchmark.js:16`
- `dsh-continual-evolve/lib/benchmark.js:69`
- `dsh-continual-evolve/lib/benchmark.js:70`
- `dsh-continual-evolve/lib/benchmark.js:103`
- `dsh-continual-evolve/lib/benchmark.js:108`
- `dsh-continual-evolve/lib/benchmark.js:150`
- `dsh-continual-evolve/lib/benchmark.js:155`
- `dsh-continual-evolve/lib/command.js:4`
- `dsh-continual-evolve/lib/command.js:213`
- `dsh-continual-evolve/lib/logfile.js:2`
- `dsh-continual-evolve/lib/logfile.js:124`
- `dsh-continual-evolve/lib/logfile.js:129`
> 判定: 进化评审/基准/日志/挂载文件写入（0600 权限日志），属功能本身。
- … 其余 5 处

### 混淆线索（6 处）
- `dsh-continual-evolve/lib/planner.d.ts:12`
- `dsh-continual-evolve/lib/review.d.ts:31`
- `dsh-continual-evolve/lib/rubric.js:98`
- `dsh-continual-evolve/lib/rubric.js:99`
- `dsh-continual-evolve/lib/rubric.js:100`
- `dsh-continual-evolve/lib/skillquality.d.ts:22`
> 判定: 系统提示词常量 + base64url 编解码（rubric 加密载荷），正常。

### 安装钩子（1 处）
- `dsh-continual-evolve/package.json:49`
> 判定: prepare 为 tsc 编译。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/ZK-Andy/dsh-continual-evolve/tar.gz/HEAD` → `dsh-continual-evolve@0.1.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 63 source files scanned; 29 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

