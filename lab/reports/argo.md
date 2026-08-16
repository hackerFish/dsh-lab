# argo

- **来源**: `https://codeload.github.com/taxueseek/argo/tar.gz/HEAD`
- **安装包名/版本**: `argo-search` 2.8.0 · commit: 49f8a80
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 33 处（逐条见下） |
| 4 兼容钉版 | 2.8.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/taxueseek/argo/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/argo.install.md](../logs/argo.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（20 处）
- `argo-search/README.en.md:311`
- `argo-search/README.ko.md:353`
- `argo-search/scripts/article.py:25`
- `argo-search/scripts/article.py:53`
- `argo-search/scripts/cache.py:772`
- `argo-search/scripts/cache.py:776`
- `argo-search/scripts/chrome_cdp.py:12`
- `argo-search/scripts/chrome_cdp.py:16`
- `argo-search/scripts/chrome_cdp.py:18`
- `argo-search/scripts/chrome_cdp.py:126`
- `argo-search/scripts/chrome_cdp.py:131`
- `argo-search/scripts/chrome_cdp.py:139`
- `argo-search/scripts/chrome_cdp.py:141`
- `argo-search/scripts/chrome_cdp.py:142`
- `argo-search/scripts/chrome_cdp.py:157`
> 判定: README 文档（argo_fetch 工具说明）+ python 抓取脚本（用户提供的 URL，30s 超时）+ Chrome CDP WebSocket 客户端（本机浏览器自动化），属搜索功能本身。
- … 其余 5 处

### 子进程（2 处）
- `argo-search/bin/argo.js:6`
- `argo-search/bin/argo.js:25`
> 判定: bin/argo.js spawn python 子进程（CLI 入口），属功能本身。

### 凭证读取（6 处）
- `argo-search/scripts/content_security.py:200`
- `argo-search/scripts/content_security.py:202`
- `argo-search/scripts/content_security.py:206`
- `argo-search/scripts/content_security.py:207`
- `argo-search/sub-skills/ego-search/scripts/webbridge_adapter.py:365`
- `argo-search/sub-skills/local-seek/scripts/seek.py:55`
> 判定: content_security.py 的**凭据泄露检测正则**（安全防护规则）+ webbridge credentials:'include'（页面内 fetch 标准语义）+ 文档。

### 文件写入/删除（5 处）
- `argo-search/scripts/lang_pref.py:306`
- `argo-search/scripts/link_source.py:121`
- `argo-search/scripts/link_source.py:126`
- `argo-search/scripts/link_source.py:130`
- `argo-search/sub-skills/local-search/search_v3.py:772`
> 判定: 状态文件/链接清理（unlink 属功能本身）。




> **目录结构发现**：安装成功，但包根无 `cordis.patch.yml`——插件组件位于仓库子目录（如 dsh-plugin/ 或 adapters/dsh/），属单仓多包结构；直接 `dsh plugin add` 安装的是仓库根包，不一定能作为插件挂载。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/taxueseek/argo/tar.gz/HEAD` → `argo-search@2.8.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 129 source files scanned; 33 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意 — note: no cordis.patch.yml (not a real plugin entry) — note: no cordis.patch.yml at package root (monorepo layout)

