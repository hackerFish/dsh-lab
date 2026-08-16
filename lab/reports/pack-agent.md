# pack-agent

- **来源**: `https://codeload.github.com/sakikoTGW/pack-agent/tar.gz/HEAD`
- **安装包名/版本**: `@sakikotgw/pack-agent` 0.4.2 · commit: 04f7eca
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 52 处（逐条见下） |
| 4 兼容钉版 | 0.4.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/sakikoTGW/pack-agent/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/pack-agent.install.md](../logs/pack-agent.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 子进程（20 处）
- `@sakikotgw/pack-agent/bin/agent-pack-mcp.js:5`
- `@sakikotgw/pack-agent/bin/agent-pack-mcp.js:14`
- `@sakikotgw/pack-agent/bin/agent-pack-mcp.js:34`
- `@sakikotgw/pack-agent/bin/agent-pack.js:6`
- `@sakikotgw/pack-agent/bin/agent-pack.js:15`
- `@sakikotgw/pack-agent/bin/agent-pack.js:35`
- `@sakikotgw/pack-agent/bin/packagent-mcp.js:5`
- `@sakikotgw/pack-agent/bin/packagent-mcp.js:14`
- `@sakikotgw/pack-agent/bin/packagent-mcp.js:34`
- `@sakikotgw/pack-agent/bin/packagent.js:12`
- `@sakikotgw/pack-agent/bin/packagent.js:15`
- `@sakikotgw/pack-agent/bin/packagent.js:24`
- `@sakikotgw/pack-agent/bin/packagent.js:44`
- `@sakikotgw/pack-agent/dsh-modpack/catalog.ts:4`
- `@sakikotgw/pack-agent/dsh-modpack/catalog.ts:60`
> 判定: spawnSync 打包进程（打包器构建子进程），属功能本身。
- … 其余 5 处

### 文件写入/删除（20 处）
- `@sakikotgw/pack-agent/dsh-modpack/compile.ts:70`
- `@sakikotgw/pack-agent/dsh-modpack/compile.ts:72`
- `@sakikotgw/pack-agent/dsh-modpack/compile.ts:134`
- `@sakikotgw/pack-agent/dsh-modpack/compile.ts:227`
- `@sakikotgw/pack-agent/dsh-modpack/compile.ts:325`
- `@sakikotgw/pack-agent/dsh-modpack/compile.ts:350`
- `@sakikotgw/pack-agent/dsh-modpack/compile.ts:352`
- `@sakikotgw/pack-agent/dsh-modpack/compile.ts:391`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:8537`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:8648`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:9157`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:9160`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:9219`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:9314`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:9415`
> 判定: 打包器写包文件/索引（核心功能），属功能本身。
- … 其余 5 处

### 混淆线索（4 处）
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:39`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:40`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:3564`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:3566`
> 判定: 打包产物（标识符正则表/base64 编解码），正常。

### 凭证读取（7 处）
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:8397`
- `@sakikotgw/pack-agent/dsh-plugin/lib/index.js:8401`
- `@sakikotgw/pack-agent/src/adapters.ts:181`
- `@sakikotgw/pack-agent/src/adapters.ts:191`
- `@sakikotgw/pack-agent/src/adapters.ts:195`
- `@sakikotgw/pack-agent/src/experience-projection.ts:645`
- `@sakikotgw/pack-agent/src/pack-ignore.ts:131`
> 判定: 适配器检测 ~/.dsh 路径 + pack-ignore 排除 credentials.json（**主动忽略凭据文件**，安全正向）。

### 网络出口（1 处）
- `@sakikotgw/pack-agent/src/fetch-pack.ts:17`
> 判定: fetch 远程包（fetch-pack，用户提供的源），属功能本身。




> **目录结构发现**：安装成功，但包根无 `cordis.patch.yml`——插件组件位于仓库子目录（如 dsh-plugin/ 或 adapters/dsh/），属单仓多包结构；直接 `dsh plugin add` 安装的是仓库根包，不一定能作为插件挂载。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/sakikoTGW/pack-agent/tar.gz/HEAD` → `@sakikotgw/pack-agent@0.4.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 104 source files scanned; 52 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意 — note: no cordis.patch.yml (not a real plugin entry) — note: no cordis.patch.yml at package root (monorepo layout)

