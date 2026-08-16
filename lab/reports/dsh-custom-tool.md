# dsh-custom-tool

- **来源**: `https://codeload.github.com/omdsh-dev/dsh-custom-tool/tar.gz/HEAD`
- **安装包名/版本**: `dsh-custom-tool` 0.1.2 · commit: 7cb9564
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 41 处（逐条见下） |
| 4 兼容钉版 | 0.1.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/omdsh-dev/dsh-custom-tool/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-custom-tool.install.md](../logs/dsh-custom-tool.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（4 处）
- `dsh-custom-tool/AGENTS.md:22`
- `dsh-custom-tool/lib/index.js:59`
- `dsh-custom-tool/lib/types/settings.d.ts:24`
- `dsh-custom-tool/lib/types/workspace-store.d.ts:4`

> 判定: 这几处都是“不要提交/继承凭证”的说明与注释——代码刻意避免把 DSH 凭证传给用户自定义代码，属安全正向写法，未见异常。

### 文件写入/删除（12 处）
- `dsh-custom-tool/README.md:32`
- `dsh-custom-tool/README.zh.md:32`
- `dsh-custom-tool/lib/executor-worker.js:5`
- `dsh-custom-tool/lib/executor-worker.js:58`
- `dsh-custom-tool/lib/executor-worker.js:61`
- `dsh-custom-tool/lib/index.js:147`
- `dsh-custom-tool/lib/index.js:182`
- `dsh-custom-tool/lib/index.js:183`
- `dsh-custom-tool/lib/index.js:1354`
- `dsh-custom-tool/lib/index.js:1379`
- `dsh-custom-tool/lib/index.js:1561`
- `dsh-custom-tool/lib/types/types.d.ts:16`

> 判定: 写文件是功能本身——把用户自定义工具持久化到本地存储，以及 workspace 作用域下被限定在会话根目录内的 fs 读写，未见异常。

### 网络出口（3 处）
- `dsh-custom-tool/README.md:81`
- `dsh-custom-tool/README.zh.md:81`
- `dsh-custom-tool/lib/executor-worker.js:102`

> 判定: 网络访问是自定义工具执行用户代码时的能力，且受 allowNetwork 开关控制（关闭即禁用），属功能本身，未见异常。

### 动态执行（2 处）
- `dsh-custom-tool/lib/executor-worker.js:130`
- `dsh-custom-tool/lib/index.js:587`

> 判定: executor-worker.js 的 vm.runInContext 是在沙箱 worker 里执行用户提供的自定义工具代码（本插件核心功能）；index.js:587 是打包进产物的 schema 校验库对 callback 字段的编译，非插件自行任意 eval，未见异常。

### 混淆线索（20 处）
- `dsh-custom-tool/lib/index.js:395`
- `dsh-custom-tool/lib/index.js:396`
- `dsh-custom-tool/lib/index.js:1354`
- `dsh-custom-tool/lib/index.js:1551`
- `dsh-custom-tool/lib/index.js:1553`
- `dsh-custom-tool/lib/workers/editor-worker.entry.js:5`
- `dsh-custom-tool/lib/workers/editor-worker.entry.js:7`
- `dsh-custom-tool/lib/workers/editor-worker.entry.js:8`
- `dsh-custom-tool/lib/workers/editor-worker.entry.js:9`
- `dsh-custom-tool/lib/workers/editor-worker.entry.js:10`
- `dsh-custom-tool/lib/workers/editor-worker.entry.js:12`
- `dsh-custom-tool/lib/workers/editor-worker.entry.js:20`
- `dsh-custom-tool/lib/workers/editor-worker.entry.js:21`
- `dsh-custom-tool/lib/workers/editor-worker.entry.js:22`
- `dsh-custom-tool/lib/workers/editor-worker.entry.js:23`
- … 其余 5 处

> 判定: 命中均为正常产物——base64 工具函数、超长的系统提示文案字符串、以及 Monaco 编辑器压缩/内联打包，非恶意混淆，未见异常。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/omdsh-dev/dsh-custom-tool/tar.gz/HEAD` → `dsh-custom-tool@0.1.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 49 source files scanned; 41 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

