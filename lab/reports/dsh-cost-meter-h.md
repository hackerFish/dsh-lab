# dsh-cost-meter-h

- **来源**: `https://codeload.github.com/Han-1413141/dsh-cost-meter/tar.gz/HEAD`
- **安装包名/版本**: `dsh-cost-meter` 1.3.1 · commit: 889303b
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 21 处（逐条见下） |
| 4 兼容钉版 | 1.3.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Han-1413141/dsh-cost-meter/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-cost-meter-h.install.md](../logs/dsh-cost-meter-h.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（12 处）
- `dsh-cost-meter/README.en.md:221`
- `dsh-cost-meter/README.md:220`
- `dsh-cost-meter/lib/index.js:12`
- `dsh-cost-meter/lib/index.js:18`
- `dsh-cost-meter/lib/index.js:218`
- `dsh-cost-meter/lib/index.js:219`
- `dsh-cost-meter/lib/index.js:221`
- `dsh-cost-meter/lib/index.js:309`
- `dsh-cost-meter/lib/index.js:311`
- `dsh-cost-meter/lib/index.js:312`
- `dsh-cost-meter/lib/index.js:314`
- `dsh-cost-meter/package.json:54`
> 判定: 通过 dsh-credentials 解析 OPENCODE_GO_API_KEY / DEEPSEEK_API_KEY（计费需要密钥），属功能本身。
### 网络出口（6 处）
- `dsh-cost-meter/lib/client.js:1759`
- `dsh-cost-meter/lib/client.js:2096`
- `dsh-cost-meter/lib/client.js:2097`
- `dsh-cost-meter/lib/index.js:258`
- `dsh-cost-meter/lib/index.js:328`
- `dsh-cost-meter/lib/index.js:383`
> 判定: fetch 目标均为官方接口：opencode.ai 配额接口、DeepSeek 官方余额接口与官方价格页，无第三方外联。
### 文件写入/删除（3 处）
- `dsh-cost-meter/lib/store.js:8`
- `dsh-cost-meter/lib/store.js:452`
- `dsh-cost-meter/lib/store.js:453`
> 判定: 记账本原子写入（tmp + rename），本地持久化属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Han-1413141/dsh-cost-meter/tar.gz/HEAD` → `dsh-cost-meter@1.3.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 10 source files scanned; 21 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

