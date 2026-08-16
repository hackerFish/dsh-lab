# dsh-data-agent

- **来源**: `https://codeload.github.com/omdsh-dev/dsh-data-agent/tar.gz/HEAD`
- **安装包名/版本**: `@yejiming/dsh-data-agent` 0.0.9 · commit: 844e358
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 32 处（逐条见下） |
| 4 兼容钉版 | 0.0.9 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/omdsh-dev/dsh-data-agent/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-data-agent.install.md](../logs/dsh-data-agent.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（2 处）
- `@yejiming/dsh-data-agent/lib/client.js:93`
- `@yejiming/dsh-data-agent/lib/client.js:42568`
> 判定: 两处均为打包进产物的 CSS 字符串，正常构建输出。

### 网络出口（10 处）
- `@yejiming/dsh-data-agent/lib/client.js:401`
- `@yejiming/dsh-data-agent/lib/client.js:558`
- `@yejiming/dsh-data-agent/lib/client.js:573`
- `@yejiming/dsh-data-agent/lib/client.js:586`
- `@yejiming/dsh-data-agent/lib/client.js:628`
- `@yejiming/dsh-data-agent/lib/client.js:641`
- `@yejiming/dsh-data-agent/lib/client.js:676`
- `@yejiming/dsh-data-agent/lib/client.js:692`
- `@yejiming/dsh-data-agent/lib/client.js:704`
- `@yejiming/dsh-data-agent/lib/client.js:26945`
> 判定: 客户端 fetch 全部是插件自有路由 /plugins/data-agent/*；剩余一处是 ECharts 图表库内部动画数据流，无外联。

### 子进程（3 处）
- `@yejiming/dsh-data-agent/lib/client.js:21610`
- `@yejiming/dsh-data-agent/lib/client.js:21627`
- `@yejiming/dsh-data-agent/lib/connections-DeauhaZi.js:944`
> 判定: client.js 的 exec() 是图表动画回调节点（非 child_process）；host 端 ctx.subprocess.spawn 是 SQL 连接器执行数据库驱动（注释：凭据走 stdin、不出现在 argv），属功能本身。

### 凭证读取（17 处）
- `@yejiming/dsh-data-agent/lib/client.js:43044`
- `@yejiming/dsh-data-agent/lib/client.js:43118`
- `@yejiming/dsh-data-agent/lib/connections-DeauhaZi.js:4`
- `@yejiming/dsh-data-agent/lib/connections-DeauhaZi.js:649`
- `@yejiming/dsh-data-agent/lib/connections-DeauhaZi.js:701`
- `@yejiming/dsh-data-agent/lib/connections-DeauhaZi.js:1065`
- `@yejiming/dsh-data-agent/lib/connections-DeauhaZi.js:1120`
- `@yejiming/dsh-data-agent/lib/index.js:17`
- `@yejiming/dsh-data-agent/lib/index.js:129`
- `@yejiming/dsh-data-agent/lib/index.js:162`
- `@yejiming/dsh-data-agent/lib/types/index.d.ts:151`
- `@yejiming/dsh-data-agent/lib/types/query.d.ts:5`
- `@yejiming/dsh-data-agent/lib/types/routes.d.ts:5`
- `@yejiming/dsh-data-agent/lib/types/storage.d.ts:4`
- `@yejiming/dsh-data-agent/lib/types/tool.d.ts:14`
> 判定: SQL 连接密码通过 dsh credentials 解析，且注释明确'凭据经 stdin 前缀传入、绝不出现在 argv'——安全正向设计。
- … 其余 2 处

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/omdsh-dev/dsh-data-agent/tar.gz/HEAD` → `@yejiming/dsh-data-agent@0.0.9`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 38 source files scanned; 32 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

