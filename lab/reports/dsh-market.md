# dsh-market

- **来源**: `https://codeload.github.com/dsh-market/dsh-market/tar.gz/HEAD`
- **安装包名/版本**: `dshmarket` 1.10.1 · commit: 07c47af
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 84 处（逐条见下） |
| 4 兼容钉版 | 1.10.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/dsh-market/dsh-market/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-market.install.md](../logs/dsh-market.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `dshmarket/README.md:52`
- `dshmarket/client/client.js:355`
- `dshmarket/data/registry-snapshot.json:290`
- `dshmarket/data/registry-snapshot.json:291`
- `dshmarket/data/registry-snapshot.json:1160`
- `dshmarket/data/registry-snapshot.json:1161`
- `dshmarket/data/registry-snapshot.json:2240`
- `dshmarket/data/registry-snapshot.json:6875`
- `dshmarket/data/registry-snapshot.json:6876`
- `dshmarket/data/registry-snapshot.json:7370`
- `dshmarket/data/registry-snapshot.json:7985`
- `dshmarket/data/registry-snapshot.json:7986`
- `dshmarket/data/registry-snapshot.json:8150`
- `dshmarket/data/registry-snapshot.json:9290`
- `dshmarket/data/registry-snapshot.json:9605`
> 判定: README/registry 快照数据（插件描述文本）+ 备份导出凭据警告（安全提示），非敏感行为。
- … 其余 5 处

### 网络出口（20 处）
- `dshmarket/client/client.js:753`
- `dshmarket/client/client.js:1069`
- `dshmarket/client/client.js:1075`
- `dshmarket/client/client.js:1856`
- `dshmarket/client/client.js:1968`
- `dshmarket/client/client.js:1979`
- `dshmarket/client/client.js:1984`
- `dshmarket/client/client.js:1991`
- `dshmarket/client/client.js:2031`
- `dshmarket/client/client.js:2057`
- `dshmarket/client/client.js:2158`
- `dshmarket/client/client.js:2181`
- `dshmarket/client/client.js:2249`
- `dshmarket/client/client.js:2268`
- `dshmarket/client/client.js:2296`
> 判定: fetch raw.githubusercontent 拉取插件仓库文件（市场安装功能）+ 自有路由 /dsh-market/*，属功能本身。
- … 其余 5 处

### 混淆线索（3 处）
- `dshmarket/client/client.js:796`
- `dshmarket/client/client.js:1723`
- `dshmarket/src/client/MarketSection.tsx:177`
> 判定: CSS/SVG 打包产物，正常。

### 子进程（20 处）
- `dshmarket/data/registry-snapshot.json:1985`
- `dshmarket/data/registry-snapshot.json:1986`
- `dshmarket/data/registry-snapshot.json:2255`
- `dshmarket/data/registry-snapshot.json:2256`
- `dshmarket/lib/dsh-cli.js:6`
- `dshmarket/lib/dsh-cli.js:9`
- `dshmarket/lib/dsh-cli.js:74`
- `dshmarket/lib/dsh-cli.js:77`
- `dshmarket/lib/dsh-cli.js:79`
- `dshmarket/lib/dsh-cli.js:111`
- `dshmarket/lib/dsh-cli.js:131`
- `dshmarket/lib/dsh-cli.js:136`
- `dshmarket/lib/restart.js:11`
- `dshmarket/lib/restart.js:117`
- `dshmarket/lib/restart.js:130`
> 判定: registry 快照数据中的终端插件描述文本 + spawn dsh/pnpm 安装插件（市场核心功能，shell:false 无 shell 拼接），属功能本身。
- … 其余 5 处

### 文件写入/删除（20 处）
- `dshmarket/lib/backup.js:9`
- `dshmarket/lib/backup.js:117`
- `dshmarket/lib/backup.js:119`
- `dshmarket/lib/backup.js:133`
- `dshmarket/lib/backup.js:134`
- `dshmarket/lib/hot.js:26`
- `dshmarket/lib/hot.js:129`
- `dshmarket/lib/hot.js:177`
- `dshmarket/lib/hot.js:287`
- `dshmarket/lib/profile.js:6`
- `dshmarket/lib/profile.js:92`
- `dshmarket/lib/profile.js:379`
- `dshmarket/lib/routes.js:10`
- `dshmarket/lib/routes.js:204`
- `dshmarket/lib/routes.js:221`
> 判定: 插件安装/备份/热更新写 profile 文件（原子写），属功能本身。
- … 其余 5 处

### 安装钩子（1 处）
- `dshmarket/package.json:31`
> 判定: prepare 为 npm run build。




> **目录结构发现**：安装成功，但包根无 `cordis.patch.yml`——插件组件位于仓库子目录（如 dsh-plugin/ 或 adapters/dsh/），属单仓多包结构；直接 `dsh plugin add` 安装的是仓库根包，不一定能作为插件挂载。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/dsh-market/dsh-market/tar.gz/HEAD` → `dshmarket@1.10.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 82 source files scanned; 84 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意 — note: no cordis.patch.yml (not a real plugin entry) — note: no cordis.patch.yml at package root (monorepo layout)

