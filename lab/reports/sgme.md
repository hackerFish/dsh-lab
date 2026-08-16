# sgme

- **来源**: `https://codeload.github.com/freehul/sgme/tar.gz/HEAD`
- **安装包名/版本**: `dsh-sgme` 0.1.1 · commit: c0def26
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 74 处（逐条见下） |
| 4 兼容钉版 | 0.1.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/freehul/sgme/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/sgme.install.md](../logs/sgme.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `dsh-sgme/.env.example:10`
- `dsh-sgme/Dockerfile:7`
- `dsh-sgme/adapters/dsh/README.md:33`
- `dsh-sgme/adapters/dsh/README.md:94`
- `dsh-sgme/adapters/dsh/import_history.py:8`
- `dsh-sgme/adapters/dsh/import_history.py:33`
- `dsh-sgme/adapters/dsh/import_history.py:46`
- `dsh-sgme/adapters/dsh/import_history.py:59`
- `dsh-sgme/adapters/dsh/install.py:36`
- `dsh-sgme/adapters/dsh/install.py:39`
- `dsh-sgme/adapters/dsh/install.py:199`
- `dsh-sgme/adapters/dsh/install.py:202`
- `dsh-sgme/adapters/dsh/sgme-bridge/README.md:16`
- `dsh-sgme/adapters/dsh/sgme-bridge/README.md:30`
- `dsh-sgme/adapters/dsh/sgme-bridge/lib/index.js:2032`
> 判定: 适配器文档与安装脚本（.env 密钥注册说明，明确 gitignore 不入库）+ 桥接插件读 ~/.dsh 规则文件，属功能本身。
- … 其余 5 处

### 子进程（1 处）
- `dsh-sgme/adapters/dsh/codegraph-bridge/lib/index.js:13`
> 判定: codegraph-bridge execFile（代码图谱工具调用），参数数组传递。

### 混淆线索（20 处）
- `dsh-sgme/adapters/dsh/codegraph-bridge/pnpm-lock.yaml:171`
- `dsh-sgme/adapters/dsh/codegraph-bridge/pnpm-lock.yaml:218`
- `dsh-sgme/adapters/dsh/codegraph-bridge/pnpm-lock.yaml:240`
- `dsh-sgme/adapters/dsh/codegraph-bridge/pnpm-lock.yaml:258`
- `dsh-sgme/adapters/dsh/sgme-bridge/lib/index.js:712`
- `dsh-sgme/adapters/dsh/sgme-bridge/lib/index.js:713`
- `dsh-sgme/adapters/dsh/sgme-bridge/pnpm-lock.yaml:1113`
- `dsh-sgme/adapters/dsh/sgme-bridge/pnpm-lock.yaml:1171`
- `dsh-sgme/adapters/dsh/sgme-bridge/pnpm-lock.yaml:1193`
- `dsh-sgme/adapters/dsh/sgme-bridge/pnpm-lock.yaml:1211`
- `dsh-sgme/docs/requirements/SGME-Backlog-v0.2.md:53`
- `dsh-sgme/docs/requirements/SGME-Backlog-v0.2.md:54`
- `dsh-sgme/docs/requirements/SGME-Backlog-v0.2.md:55`
- `dsh-sgme/docs/requirements/SGME-Backlog-v0.2.md:99`
- `dsh-sgme/docs/requirements/SGME-Backlog-v0.2.md:100`
> 判定: pnpm-lock.yaml 长行（锁文件）+ base64 编解码工具 + backlog 文档表格，正常。
- … 其余 5 处

### 网络出口（20 处）
- `dsh-sgme/adapters/dsh/sgme-bridge/lib/index.js:37`
- `dsh-sgme/adapters/dsh/sgme-bridge/lib/index.js:102`
- `dsh-sgme/adapters/dsh/sgme-bridge/lib/index.js:123`
- `dsh-sgme/adapters/dsh/sgme-bridge/lib/index.js:1712`
- `dsh-sgme/adapters/dsh/sgme-bridge/lib/index.js:1716`
- `dsh-sgme/adapters/dsh/sgme-bridge/src/context.ts:196`
- `dsh-sgme/adapters/dsh/sgme-bridge/src/context.ts:201`
- `dsh-sgme/adapters/dsh/sgme-bridge/src/sgme-client.ts:230`
- `dsh-sgme/adapters/dsh/sgme-bridge/src/sgme-client.ts:310`
- `dsh-sgme/adapters/dsh/sgme-bridge/src/sgme-client.ts:334`
- `dsh-sgme/adapters/hermes/README.md:17`
- `dsh-sgme/adapters/hermes/__init__.py:12`
- `dsh-sgme/adapters/hermes/__init__.py:58`
- `dsh-sgme/adapters/hermes/__init__.py:245`
- `dsh-sgme/docs/design/SGME-实施变更记录-v0.9.md:496`
> 判定: sgme-bridge fetch SGME 服务端（用户自配 URL，记忆召回 API），属功能本身。
- … 其余 5 处

### 动态执行（1 处）
- `dsh-sgme/adapters/dsh/sgme-bridge/lib/index.js:893`
> 判定: new Function 是打包进产物的 schemastery 校验库对 schema.callback 字段的编译（配置驱动回调，同 prompt-studio 模式），非插件自行任意 eval。

### 文件写入/删除（12 处）
- `dsh-sgme/adapters/dsh/sgme-bridge/tests/rules.test.ts:6`
- `dsh-sgme/adapters/dsh/sgme-bridge/tests/rules.test.ts:45`
- `dsh-sgme/adapters/dsh/sgme-bridge/tests/rules.test.ts:70`
- `dsh-sgme/adapters/dsh/sgme-bridge/tests/rules.test.ts:96`
- `dsh-sgme/eval/runner.py:324`
- `dsh-sgme/migrations/0001_split_three_dbs.py:108`
- `dsh-sgme/sgme/backup/manager.py:404`
- `dsh-sgme/sgme/operations/template.py:229`
- `dsh-sgme/sgme/operations/template.py:626`
- `dsh-sgme/sgme/server/routes_backup.py:122`
- `dsh-sgme/sgme/skills_hub/__init__.py:305`
- `dsh-sgme/tests/test_operations_append.py:240`
> 判定: 适配器安装/状态文件写入（install.py 写 .env 注册密钥，0600 权限），属功能本身。




> **目录结构发现**：安装成功，但包根无 `cordis.patch.yml`——插件组件位于仓库子目录（如 dsh-plugin/ 或 adapters/dsh/），属单仓多包结构；直接 `dsh plugin add` 安装的是仓库根包，不一定能作为插件挂载。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/freehul/sgme/tar.gz/HEAD` → `dsh-sgme@0.1.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 451 source files scanned; 74 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意 — note: no cordis.patch.yml (not a real plugin entry) — note: no cordis.patch.yml at package root (monorepo layout)

