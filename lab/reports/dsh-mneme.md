# dsh-mneme

- **来源**: `https://codeload.github.com/modusensus/dsh-mneme/tar.gz/HEAD`
- **安装包名/版本**: `@modusensus/dsh-mneme` 0.3.7 · commit: 87b4c8f
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 60 处（逐条见下） |
| 4 兼容钉版 | 0.3.7 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/modusensus/dsh-mneme/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-mneme.install.md](../logs/dsh-mneme.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（20 处）
- `@modusensus/dsh-mneme/SECURITY.md:250`
- `@modusensus/dsh-mneme/docs/devlog/2026-08-14-dsh-mneme-dev-log.md:28`
- `@modusensus/dsh-mneme/dsh-mneme/README.md:18`
- `@modusensus/dsh-mneme/dsh-mneme/README.md:81`
- `@modusensus/dsh-mneme/dsh-mneme/README.md:130`
- `@modusensus/dsh-mneme/dsh-mneme/README.md:143`
- `@modusensus/dsh-mneme/dsh-mneme/README.md:149`
- `@modusensus/dsh-mneme/dsh-mneme/README.md:164`
- `@modusensus/dsh-mneme/dsh-mneme/README.md:183`
- `@modusensus/dsh-mneme/dsh-mneme/cordis.patch.yml:7`
- `@modusensus/dsh-mneme/dsh-mneme/docs/ENTITIES.md:225`
- `@modusensus/dsh-mneme/dsh-mneme/docs/LOCAL_MODEL.md:29`
- `@modusensus/dsh-mneme/dsh-mneme/docs/LOCAL_MODEL.md:31`
- `@modusensus/dsh-mneme/dsh-mneme/docs/LOCAL_MODEL.md:61`
- `@modusensus/dsh-mneme/dsh-mneme/docs/LOCAL_MODEL.md:66`
- `@modusensus/dsh-mneme/dsh-mneme/docs/LOCAL_MODEL.md:78`
- `@modusensus/dsh-mneme/dsh-mneme/docs/MIGRATION.md:11`
- `@modusensus/dsh-mneme/dsh-mneme/docs/MIGRATION.md:72`
- `@modusensus/dsh-mneme/dsh-mneme/lib/config.js:4`
- `@modusensus/dsh-mneme/dsh-mneme/lib/config.js:46`
> 判定: README/SECURITY 文档文本 + 配置默认路径（~/.dsh/memory）；SECURITY.md 明确密钥仅存本机 SQLite 不上传，属安全设计。
### 网络出口（20 处）
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:16`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:22`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:146`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:163`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:258`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:259`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:260`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:261`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:274`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:285`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:312`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:326`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:332`
- `@modusensus/dsh-mneme/dsh-mneme/lib/client.js:346`
- `@modusensus/dsh-mneme/dsh-mneme/lib/embedding.js:26`
- `@modusensus/dsh-mneme/dsh-mneme/lib/local-embedder.js:139`
- `@modusensus/dsh-mneme/dsh-mneme/lib/local-embedder.js:221`
- `@modusensus/dsh-mneme/dsh-mneme/src/embedding.js:26`
- `@modusensus/dsh-mneme/dsh-mneme/src/local-embedder.js:139`
- `@modusensus/dsh-mneme/dsh-mneme/src/local-embedder.js:221`
> 判定: 客户端 fetch 全部是自有路由 /api/dsh-mneme/*；embedding.js 请求目标为配置的嵌入模型端点（OpenAI 兼容），local-embedder 请求本地服务，均属功能本身。
### 文件写入/删除（20 处）
- `@modusensus/dsh-mneme/dsh-mneme/lib/mirror.js:1`
- `@modusensus/dsh-mneme/dsh-mneme/lib/mirror.js:139`
- `@modusensus/dsh-mneme/dsh-mneme/lib/mirror.js:144`
- `@modusensus/dsh-mneme/dsh-mneme/src/mirror.js:1`
- `@modusensus/dsh-mneme/dsh-mneme/src/mirror.js:139`
- `@modusensus/dsh-mneme/dsh-mneme/src/mirror.js:144`
- `@modusensus/dsh-mneme/dsh-mneme/test/entities.test.js:9`
- `@modusensus/dsh-mneme/dsh-mneme/test/entities.test.js:85`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:3`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:73`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:82`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:90`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:100`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:109`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:139`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:150`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:159`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:183`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:236`
- `@modusensus/dsh-mneme/dsh-mneme/test/fnew-0112.test.js:264`
> 判定: mirror.js 写记忆文件（SQLite + Markdown 双存）+ 测试临时目录清理，属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/modusensus/dsh-mneme/tar.gz/HEAD` → `@modusensus/dsh-mneme@0.3.7`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 97 source files scanned; 60 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

