# trio

- **来源**: `https://codeload.github.com/huey1in/trio/tar.gz/HEAD`
- **安装包名/版本**: `dsh-reef` 1.5.2 · commit: 5d5ade9
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 61 处（逐条见下） |
| 4 兼容钉版 | 1.5.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/huey1in/trio/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/trio.install.md](../logs/trio.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `dsh-reef/README.md:180`
- `dsh-reef/lib/github.mjs:12`
- `dsh-reef/lib/github.mjs:13`
- `dsh-reef/lib/github.mjs:14`
- `dsh-reef/lib/github.mjs:25`
- `dsh-reef/lib/gitlab.mjs:11`
- `dsh-reef/lib/gitlab.mjs:12`
- `dsh-reef/lib/gitlab.mjs:13`
- `dsh-reef/lib/gitlab.mjs:23`
- `dsh-reef/lib/settings-SS63ejBT.mjs:131`
- `dsh-reef/lib/settings-SS63ejBT.mjs:184`
- `dsh-reef/lib/settings-SS63ejBT.mjs:206`
- `dsh-reef/lib/settings-SS63ejBT.mjs:208`
- `dsh-reef/lib/settings-SS63ejBT.mjs:209`
- `dsh-reef/lib/settings-SS63ejBT.mjs:210`
> 判定: GitHub/GitLab token 通过 dsh credentials 解析（仓库评审工具核心功能），属功能本身。
- … 其余 5 处

### 文件写入/删除（20 处）
- `dsh-reef/lib/browser.mjs:3`
- `dsh-reef/lib/browser.mjs:373`
- `dsh-reef/lib/browser.mjs:478`
- `dsh-reef/lib/settings-SS63ejBT.mjs:1`
- `dsh-reef/lib/settings-SS63ejBT.mjs:154`
- `dsh-reef/lib/settings-SS63ejBT.mjs:181`
- `dsh-reef/lib/settings-SS63ejBT.mjs:182`
- `dsh-reef/lib/settings-SS63ejBT.mjs:277`
- `dsh-reef/lib/settings-SS63ejBT.mjs:372`
- `dsh-reef/lib/settings-SS63ejBT.mjs:373`
- `dsh-reef/src/browser/session.ts:2`
- `dsh-reef/src/browser/session.ts:352`
- `dsh-reef/src/browser/tools.ts:2`
- `dsh-reef/src/browser/tools.ts:131`
- `dsh-reef/src/lib/credentials.ts:9`
> 判定: 浏览器会话文件/配置写入（0600 权限，含自有凭据存储回退），属功能本身。
- … 其余 5 处

### 网络出口（20 处）
- `dsh-reef/lib/console.mjs:124`
- `dsh-reef/lib/github.mjs:22`
- `dsh-reef/lib/github.mjs:39`
- `dsh-reef/lib/github.mjs:144`
- `dsh-reef/lib/github.mjs:191`
- `dsh-reef/lib/github.mjs:228`
- `dsh-reef/lib/github.mjs:258`
- `dsh-reef/lib/github.mjs:259`
- `dsh-reef/lib/github.mjs:342`
- `dsh-reef/lib/github.mjs:348`
- `dsh-reef/lib/github.mjs:415`
- `dsh-reef/lib/github.mjs:436`
- `dsh-reef/lib/gitlab.mjs:21`
- `dsh-reef/lib/gitlab.mjs:36`
- `dsh-reef/lib/gitlab.mjs:130`
> 判定: fetch GitHub/GitLab API（apiBase 用户可配置，评审/issue/PR 功能本身），无外联第三方。
- … 其余 5 处

### 安装钩子（1 处）
- `dsh-reef/package.json:48`
> 判定: prepare 为 tsdown 构建。




> **目录结构发现**：安装成功，但包根无 `cordis.patch.yml`——插件组件位于仓库子目录（如 dsh-plugin/ 或 adapters/dsh/），属单仓多包结构；直接 `dsh plugin add` 安装的是仓库根包，不一定能作为插件挂载。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/huey1in/trio/tar.gz/HEAD` → `dsh-reef@1.5.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 59 source files scanned; 61 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意 — note: no cordis.patch.yml (not a real plugin entry) — note: no cordis.patch.yml at package root (monorepo layout)

