# dsh-excel-chat

- **来源**: `https://codeload.github.com/hccccc01333/dsh-excel-chat/tar.gz/HEAD`
- **安装包名/版本**: `vera` 0.34.1 · commit: 0f45892
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 49 处（逐条见下） |
| 4 兼容钉版 | 0.34.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/hccccc01333/dsh-excel-chat/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-excel-chat.install.md](../logs/dsh-excel-chat.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（17 处）
- `vera/.github/workflows/publish.yml:45`
- `vera/CHANGELOG.md:337`
- `vera/README.md:60`
- `vera/README.md:141`
- `vera/docs/benchmark.md:20`
- `vera/docs/usage.md:27`
- `vera/src/deepseek.ts:55`
- `vera/src/deepseek.ts:59`
- `vera/src/deepseek.ts:60`
- `vera/tests/invoke-benchmark.ts:5`
- `vera/tests/invoke-conversation.ts:15`
- `vera/tests/invoke-conversation.ts:16`
- `vera/tests/invoke-conversation.ts:20`
- `vera/tests/invoke-llm-benchmark.ts:5`
- `vera/tests/invoke-real-llm.ts:9`
- … 其余 2 处

> 判定: 读取 DEEPSEEK_API_KEY 调用官方 DeepSeek 接口实现“修复顾问”LLM 是宣称功能本身；其余为文档/测试及 GitHub Actions 关闭持久化凭据等安全配置，未见异常。

### 子进程（6 处）
- `vera/bundle/dist/chart-visual.js:1`
- `vera/bundle/dist/chart-visual.js:154`
- `vera/src/chart-visual.ts:1`
- `vera/src/chart-visual.ts:195`
- `vera/tests/chart-visual.test.ts:3`
- `vera/tests/pack-bundle.test.ts:3`

> 判定: spawn 的是固定路径 PowerShell + 内置脚本，用于驱动本机 Excel 导出/创建/修改图表（Windows 功能），属宣称功能，未见异常。

### 文件写入/删除（20 处）
- `vera/bundle/dist/chart-visual.js:3`
- `vera/bundle/dist/chart-visual.js:37`
- `vera/bundle/dist/chart-visual.js:124`
- `vera/bundle/dist/chart-visual.js:139`
- `vera/bundle/dist/diff.js:1`
- `vera/bundle/dist/diff.js:37`
- `vera/bundle/dist/doctor.js:74`
- `vera/bundle/dist/health-report.js:49`
- `vera/bundle/dist/operations.js:7`
- `vera/bundle/dist/operations.js:719`
- `vera/bundle/dist/operations.js:1705`
- `vera/bundle/dist/patch.js:48`
- `vera/bundle/dist/pivot.js:3`
- `vera/bundle/dist/pivot.js:122`
- `vera/bundle/dist/pivot.js:124`
- … 其余 5 处

> 判定: 均为 Excel 操作库的读写导出——写 xlsx/csv、透视表脚本与配置、HTML 预览、审计日志及临时 .ps1 脚本，属功能本身，未见异常。

### 混淆线索（3 处）
- `vera/bundle/dist/index.js:217`
- `vera/bundle/dist-client/client.js:8585`
- `vera/src/index.ts:232`

> 判定: 命中为打包产物（bundle/dist）的压缩代码与客户端内联 CSS，属正常构建现象，未见异常。

### 安装钩子（1 处）
- `vera/bundle/package.json:53`

> 判定: prepare/prepublishOnly 只是发布前跑 npm run build 编译 TypeScript，属常规构建钩子，未见异常。

### 网络出口（2 处）
- `vera/src/deepseek.ts:28`
- `vera/src/deepseek.ts:83`

> 判定: fetch 只发往官方 DeepSeek 聊天接口（api.deepseek.com）实现修复顾问，属宣称功能，无外传第三方域名，未见异常。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/hccccc01333/dsh-excel-chat/tar.gz/HEAD` → `vera@0.34.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 199 source files scanned; 49 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

