# zhaoolee-notes

- **来源**: `https://codeload.github.com/zhaoolee/notes/tar.gz/HEAD`
- **安装包名/版本**: `notes` 1.6.1 · commit: 7f17349
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 97 处（逐条见下） |
| 4 兼容钉版 | 1.6.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/zhaoolee/notes/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/zhaoolee-notes.install.md](../logs/zhaoolee-notes.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `notes/.env.example:21`
- `notes/DOCS/architecture.md:223`
- `notes/DOCS/architecture.md:401`
- `notes/DOCS/architecture.md:403`
- `notes/DOCS/auth-and-sync.md:8`
- `notes/DOCS/auth-and-sync.md:35`
- `notes/DOCS/auth-and-sync.md:59`
- `notes/DOCS/auth-and-sync.md:64`
- `notes/DOCS/auth-and-sync.md:86`
- `notes/DOCS/auth-and-sync.md:87`
- `notes/DOCS/auth-and-sync.md:159`
- `notes/DOCS/backup-and-disaster-recovery.md:56`
- `notes/DOCS/backup-and-disaster-recovery.md:107`
- `notes/DOCS/backup-and-disaster-recovery.md:110`
- `notes/DOCS/backup-and-disaster-recovery.md:255`
> 判定: 笔记应用文档（.env 管理/备份白名单/0600 权限说明——文档反复强调凭据安全实践），非插件行为。
- … 其余 5 处

### 混淆线索（17 处）
- `notes/DOCS/references/smartisan-notes-android-4.2.1/layouts/fragment_detail.xml:7`
- `notes/DOCS/references/smartisan-notes-android-4.2.1/layouts/search_bar.xml:9`
- `notes/backend/tests/api-feedback.test.ts:477`
- `notes/server/auth.ts:236`
- `notes/server/auth.ts:273`
- `notes/server/auth.ts:860`
- `notes/server/auth.ts:968`
- `notes/server/index.ts:925`
- `notes/src/components/NoteSheet.tsx:50`
- `notes/src/fixtures/smartisan-web-test-workspace.ts:93`
- `notes/src/fixtures/smartisan-web-test-workspace.ts:129`
- `notes/src/fixtures/smartisan-web-test-workspace.ts:141`
- `notes/src/fixtures/smartisan-web-test-workspace.ts:177`
- `notes/src/fixtures/smartisan-web-test-workspace.ts:189`
- `notes/src/fixtures/smartisan-web-test-workspace.ts:201`
> 判定: Android 布局 XML 引用 + base64url 编解码（认证令牌）+ 测试 fixtures 长文本，均正常。
- … 其余 2 处

### 安装钩子（1 处）
- `notes/MEMORY/project-facts.md:56`
> 判定: MEMORY 文档提及 prepare 报错记录（文档文本）。

### 子进程（20 处）
- `notes/backend/tests/ai-feedback.test.ts:2`
- `notes/backend/tests/ai-feedback.test.ts:158`
- `notes/backend/tests/api-feedback.test.ts:2`
- `notes/backend/tests/api-feedback.test.ts:200`
- `notes/backend/tests/auth-feedback.test.ts:2`
- `notes/backend/tests/auth-feedback.test.ts:133`
- `notes/backend/tests/notes-export-api-skill-feedback.test.ts:2`
- `notes/backend/tests/notes-export-api-skill-feedback.test.ts:16`
- `notes/backend/tests/notes-export-api-skill-feedback.test.ts:129`
- `notes/backend/tests/skill-token-feedback.test.ts:2`
- `notes/backend/tests/skill-token-feedback.test.ts:10`
- `notes/backend/tests/skill-token-feedback.test.ts:145`
- `notes/backend/tests/workspace-archive-feedback.test.ts:2`
- `notes/backend/tests/workspace-archive-feedback.test.ts:129`
- `notes/dsh-plugin/tests/e2e-export.test.ts:6`
> 判定: 测试脚本 spawn 服务（开发期）。
- … 其余 5 处

### 网络出口（20 处）
- `notes/backend/tests/ai-feedback.test.ts:38`
- `notes/backend/tests/ai-feedback.test.ts:197`
- `notes/backend/tests/ai-feedback.test.ts:201`
- `notes/backend/tests/ai-feedback.test.ts:216`
- `notes/backend/tests/ai-feedback.test.ts:228`
- `notes/backend/tests/ai-feedback.test.ts:278`
- `notes/backend/tests/api-feedback.test.ts:118`
- `notes/backend/tests/api-feedback.test.ts:250`
- `notes/backend/tests/api-feedback.test.ts:261`
- `notes/backend/tests/api-feedback.test.ts:276`
- `notes/backend/tests/api-feedback.test.ts:280`
- `notes/backend/tests/api-feedback.test.ts:316`
- `notes/backend/tests/api-feedback.test.ts:357`
- `notes/backend/tests/api-feedback.test.ts:403`
- `notes/backend/tests/api-feedback.test.ts:411`
> 判定: 测试脚本 fetch 本机服务（baseUrl=localhost），开发期。
- … 其余 5 处

### 文件写入/删除（19 处）
- `notes/backend/tests/notes-export-api-skill-feedback.test.ts:10`
- `notes/backend/tests/notes-export-api-skill-feedback.test.ts:167`
- `notes/backend/tests/notes-export-api-skill-feedback.test.ts:202`
- `notes/backend/tests/notes-export-api-skill-feedback.test.ts:287`
- `notes/backend/tests/skill-token-feedback.test.ts:4`
- `notes/backend/tests/skill-token-feedback.test.ts:357`
- `notes/backend/tests/skill-token-feedback.test.ts:379`
- `notes/dsh-plugin/lib/notes-client.js:10`
- `notes/dsh-plugin/lib/notes-client.js:120`
- `notes/dsh-plugin/src/notes-client.ts:10`
- `notes/dsh-plugin/src/notes-client.ts:209`
- `notes/server/auth.ts:471`
- `notes/server/index.ts:2513`
- `notes/server/index.ts:3143`
- `notes/server/index.ts:3164`
> 判定: 服务端文件写入（归档/导出，0600 权限）+ 测试临时文件，属应用功能本身。
- … 其余 4 处




> **目录结构发现**：安装成功，但包根无 `cordis.patch.yml`——插件组件位于仓库子目录（如 dsh-plugin/ 或 adapters/dsh/），属单仓多包结构；直接 `dsh plugin add` 安装的是仓库根包，不一定能作为插件挂载。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/zhaoolee/notes/tar.gz/HEAD` → `notes@1.6.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 167 source files scanned; 97 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意 — note: no cordis.patch.yml (not a real plugin entry) — note: no cordis.patch.yml at package root (monorepo layout)

