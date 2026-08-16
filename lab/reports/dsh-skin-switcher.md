# dsh-skin-switcher

- **来源**: `https://codeload.github.com/zhtx2024/dsh-skin-switcher/tar.gz/HEAD`
- **安装包名/版本**: `dsh-skin-switcher` 0.2.1 · commit: 3f14524
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 19 处（逐条见下） |
| 4 兼容钉版 | 0.2.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/zhtx2024/dsh-skin-switcher/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-skin-switcher.install.md](../logs/dsh-skin-switcher.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（10 处）
- `dsh-skin-switcher/README.md:9`
- `dsh-skin-switcher/README.md:39`
- `dsh-skin-switcher/README.md:46`
- `dsh-skin-switcher/lib/client.js:158`
- `dsh-skin-switcher/lib/index.js:6`
- `dsh-skin-switcher/lib/index.js:56`
- `dsh-skin-switcher/lib/index.js:58`
- `dsh-skin-switcher/lib/index.js:60`
- `dsh-skin-switcher/lib/index.js:234`
- `dsh-skin-switcher/package.json:3`
> 判定: README/代码注释/package.json 描述中的 ~/.dsh 路径——插件功能本身就是原子改写 cordis.patch.yml 的 managed section，属功能本身。
### 混淆线索（1 处）
- `dsh-skin-switcher/lib/client.js:54`
> 判定: 打包进产物的 CSS 字符串，正常。
### 网络出口（3 处）
- `dsh-skin-switcher/lib/client.js:73`
- `dsh-skin-switcher/lib/client.js:94`
- `dsh-skin-switcher/lib/client.js:116`
> 判定: fetch 自有路由 /api/skin-switcher/*，同源请求。
### 文件写入/删除（5 处）
- `dsh-skin-switcher/lib/index.js:22`
- `dsh-skin-switcher/lib/index.js:220`
- `dsh-skin-switcher/lib/index.js:221`
- `dsh-skin-switcher/lib/index.js:428`
- `dsh-skin-switcher/lib/index.js:432`
> 判定: 原子重写（tmp + rename）cordis.patch.yml 与皮肤目录 symlink 管理，属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/zhtx2024/dsh-skin-switcher/tar.gz/HEAD` → `dsh-skin-switcher@0.2.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 6 source files scanned; 19 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

