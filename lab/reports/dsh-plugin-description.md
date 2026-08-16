# dsh-plugin-description

- **来源**: `https://codeload.github.com/MysaDC/dsh-plugin-description/tar.gz/HEAD`
- **安装包名/版本**: `dsh-plugin-description` 1.2.1 · commit: 64047f4
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 35 处（逐条见下） |
| 4 兼容钉版 | 1.2.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/MysaDC/dsh-plugin-description/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-plugin-description.install.md](../logs/dsh-plugin-description.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（14 处）
- `dsh-plugin-description/descriptions/plugin-descriptions.json:70`
- `dsh-plugin-description/descriptions/plugin-descriptions.json:71`
- `dsh-plugin-description/descriptions/plugin-descriptions.json:72`
- `dsh-plugin-description/descriptions/plugin-descriptions.json:435`
- `dsh-plugin-description/descriptions/plugin-descriptions.json:436`
- `dsh-plugin-description/lib/index.js:18`
- `dsh-plugin-description/lib/index.js:28`
- `dsh-plugin-description/scripts/regenerate-descriptions.mjs:36`
- `dsh-plugin-description/scripts/regenerate-descriptions.mjs:193`
- `dsh-plugin-description/scripts/regenerate-descriptions.mjs:194`
- `dsh-plugin-description/scripts/regenerate-descriptions.mjs:236`
- `dsh-plugin-description/scripts/regenerate-descriptions.mjs:237`
- `dsh-plugin-description/scripts/regenerate-descriptions.mjs:238`
- `dsh-plugin-description/src/index.js:28`
> 判定: 描述数据文件（plugin-descriptions.json 含 dsh-credentials-local 的中英文描述文本）+ 用户字典路径，属文档/数据。

### 子进程（2 处）
- `dsh-plugin-description/descriptions/plugin-descriptions.json:99`
- `dsh-plugin-description/lib/index.js:18`
> 判定: 描述数据中的 subprocess 服务中文描述文本（数据），非代码。

### 网络出口（4 处）
- `dsh-plugin-description/lib/client.js:156`
- `dsh-plugin-description/lib/client.js:201`
- `dsh-plugin-description/src/client.js:156`
- `dsh-plugin-description/src/client.js:201`
> 判定: fetch 自有路由（/plugin-descriptions*），同源请求。

### 文件写入/删除（13 处）
- `dsh-plugin-description/lib/index.js:14`
- `dsh-plugin-description/lib/index.js:45`
- `dsh-plugin-description/scripts/build.mjs:9`
- `dsh-plugin-description/scripts/build.mjs:61`
- `dsh-plugin-description/scripts/build.mjs:62`
- `dsh-plugin-description/scripts/build.mjs:66`
- `dsh-plugin-description/scripts/build.mjs:70`
- `dsh-plugin-description/scripts/build.mjs:71`
- `dsh-plugin-description/scripts/build.mjs:72`
- `dsh-plugin-description/scripts/regenerate-descriptions.mjs:6`
- `dsh-plugin-description/scripts/regenerate-descriptions.mjs:370`
- `dsh-plugin-description/src/index.js:14`
- `dsh-plugin-description/src/index.js:45`
> 判定: 用户字典文件写入（与 settings.yaml 同级的用户自有文件），属功能本身。

### 混淆线索（1 处）
- `dsh-plugin-description/lib/index.js:18`
> 判定: 打包进产物的中英文描述 JSON 常量（超长行），正常。

### 动态执行（1 处）
- `dsh-plugin-description/scripts/build.mjs:37`
> 判定: build 脚本用 new Function 包装客户端源码（开发期构建工具），非运行时行为。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/MysaDC/dsh-plugin-description/tar.gz/HEAD` → `dsh-plugin-description@1.2.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 12 source files scanned; 35 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

