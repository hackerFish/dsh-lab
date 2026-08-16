# dsh-code-intel

- **来源**: `https://codeload.github.com/lonelymoon87/dsh-code-intel/tar.gz/HEAD`
- **安装包名/版本**: `dsh-code-intel` 0.1.2 · commit: 3e95b9c
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 10 处（逐条见下） |
| 4 兼容钉版 | 0.1.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/lonelymoon87/dsh-code-intel/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-code-intel.install.md](../logs/dsh-code-intel.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（7 处）
- `dsh-code-intel/README.md:40`
- `dsh-code-intel/README.zh-CN.md:40`
- `dsh-code-intel/dist/index.js:10`
- `dsh-code-intel/dist/indexer.js:2`
- `dsh-code-intel/dist/indexer.js:175`
- `dsh-code-intel/package.json:61`
- `dsh-code-intel/package.json:70`
> 判定: **只保存 credential reference 不保存秘密值**（README+代码双重确认，安全正向）+ inject 声明，无异常。

### 网络出口（1 处）
- `dsh-code-intel/dist/indexer.js:184`
> 判定: fetch embedding.endpoint（用户配置的嵌入服务），属功能本身。

### 文件写入/删除（1 处）
- `dsh-code-intel/dist/indexer.js:266`
> 判定: 文件监听器的 unlink 事件处理（索引失效标记），属功能本身。

### 安装钩子（1 处）
- `dsh-code-intel/package.json:29`
> 判定: prepare 为 pnpm build。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/lonelymoon87/dsh-code-intel/tar.gz/HEAD` → `dsh-code-intel@0.1.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 13 source files scanned; 10 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

