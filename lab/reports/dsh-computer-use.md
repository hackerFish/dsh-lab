# dsh-computer-use

- **来源**: `https://codeload.github.com/Anionex/dsh-computer-use/tar.gz/HEAD`
- **安装包名/版本**: `@anionex/dsh-computer-use` 0.1.0 · commit: 76bfe86
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 57 处（逐条见下） |
| 4 兼容钉版 | 0.1.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Anionex/dsh-computer-use/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-computer-use.install.md](../logs/dsh-computer-use.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（20 处）
- `@anionex/dsh-computer-use/README.md:122`
- `@anionex/dsh-computer-use/docs/interaction-policy.md:37`
- `@anionex/dsh-computer-use/lib/client.js:305`
- `@anionex/dsh-computer-use/lib/client.js:308`
- `@anionex/dsh-computer-use/lib/types/skill.d.ts:6`
- `@anionex/dsh-computer-use/native/macos/Sources/Helper/CursorImage.swift:8`
- `@anionex/dsh-computer-use/native/macos/bin/dsh-computer-use-helper:1`
- `@anionex/dsh-computer-use/native/macos/bin/dsh-computer-use-helper:2`
- `@anionex/dsh-computer-use/native/macos/bin/dsh-computer-use-helper:3`
- `@anionex/dsh-computer-use/native/macos/bin/dsh-computer-use-helper:4`
- `@anionex/dsh-computer-use/native/macos/bin/dsh-computer-use-helper:5`
- `@anionex/dsh-computer-use/native/macos/bin/dsh-computer-use-helper:6`
- `@anionex/dsh-computer-use/native/macos/bin/dsh-computer-use-helper:12`
- `@anionex/dsh-computer-use/native/macos/bin/dsh-computer-use-helper:15`
- `@anionex/dsh-computer-use/native/macos/bin/dsh-computer-use-helper:18`
> 判定: README/docs/JSX/CSS 产物 + macOS Helper 内置 base64 光标图（原生辅助器），均正常。
- … 其余 5 处

### 凭证读取（8 处）
- `@anionex/dsh-computer-use/README.md:275`
- `@anionex/dsh-computer-use/README.zh.md:275`
- `@anionex/dsh-computer-use/lib/client.js:158`
- `@anionex/dsh-computer-use/lib/client.js:177`
- `@anionex/dsh-computer-use/scripts/model-e2e.mjs:219`
- `@anionex/dsh-computer-use/scripts/model-e2e.mjs:265`
- `@anionex/dsh-computer-use/src/client/index.tsx:223`
- `@anionex/dsh-computer-use/src/client/index.tsx:245`
> 判定: fetch 的 credentials:'same-origin'（标准同源凭据语义）+ 测试脚本读 DEEPSEEK_API_KEY（开发期），非敏感行为。

### 网络出口（4 处）
- `@anionex/dsh-computer-use/lib/client.js:158`
- `@anionex/dsh-computer-use/lib/client.js:175`
- `@anionex/dsh-computer-use/src/client/index.tsx:223`
- `@anionex/dsh-computer-use/src/client/index.tsx:243`
> 判定: 客户端 fetch 自有路由（ROUTE），credentials same-origin，无外联。

### 子进程（14 处）
- `@anionex/dsh-computer-use/lib/providers/native-helper.js:102`
- `@anionex/dsh-computer-use/lib/providers/native-helper.js:193`
- `@anionex/dsh-computer-use/lib/providers/native-helper.js:239`
- `@anionex/dsh-computer-use/scripts/build-native.mjs:4`
- `@anionex/dsh-computer-use/scripts/build-native.mjs:28`
- `@anionex/dsh-computer-use/scripts/check-native.mjs:4`
- `@anionex/dsh-computer-use/scripts/model-e2e.mjs:3`
- `@anionex/dsh-computer-use/scripts/model-e2e.mjs:47`
- `@anionex/dsh-computer-use/scripts/model-e2e.mjs:88`
- `@anionex/dsh-computer-use/scripts/validate.mjs:4`
- `@anionex/dsh-computer-use/scripts/validate.mjs:49`
- `@anionex/dsh-computer-use/src/providers/native-helper.ts:149`
- `@anionex/dsh-computer-use/src/providers/native-helper.ts:232`
- `@anionex/dsh-computer-use/src/providers/native-helper.ts:276`
> 判定: ctx.subprocess.spawn 启动 macOS 原生辅助器（辅助功能/屏幕控制，本插件核心功能）+ 构建/测试脚本，属功能本身。

### 文件写入/删除（11 处）
- `@anionex/dsh-computer-use/scripts/build-client.mjs:1`
- `@anionex/dsh-computer-use/scripts/build-client.mjs:19`
- `@anionex/dsh-computer-use/scripts/build-client.mjs:23`
- `@anionex/dsh-computer-use/scripts/build-native.mjs:5`
- `@anionex/dsh-computer-use/scripts/build-native.mjs:100`
- `@anionex/dsh-computer-use/scripts/build-native.mjs:133`
- `@anionex/dsh-computer-use/scripts/model-e2e.mjs:4`
- `@anionex/dsh-computer-use/scripts/model-e2e.mjs:194`
- `@anionex/dsh-computer-use/scripts/model-e2e.mjs:255`
- `@anionex/dsh-computer-use/scripts/validate.mjs:6`
- `@anionex/dsh-computer-use/scripts/validate.mjs:227`
> 判定: 构建/测试脚本写产物与隔离 home（开发期），无运行时敏感写入。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Anionex/dsh-computer-use/tar.gz/HEAD` → `@anionex/dsh-computer-use@0.1.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 80 source files scanned; 57 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

