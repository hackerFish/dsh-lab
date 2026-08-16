# dsh-at-file

- **来源**: `https://codeload.github.com/omdsh-dev/dsh-at-file/tar.gz/HEAD`
- **安装包名/版本**: `dsh-at-file` 0.6.1 · commit: e0db46f
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 13 处（逐条见下） |
| 4 兼容钉版 | 0.6.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/omdsh-dev/dsh-at-file/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-at-file.install.md](../logs/dsh-at-file.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（3 处）
- `dsh-at-file/README.md:75`
- `dsh-at-file/README.zh.md:75`
- `dsh-at-file/lib/client.js:14776`
> 判定: README 文档 + .env 文件扩展名防护逻辑（@ 文件功能**主动排除 .env 等敏感文件**，安全正向）。

### 混淆线索（9 处）
- `dsh-at-file/lib/client.js:1284`
- `dsh-at-file/lib/client.js:2642`
- `dsh-at-file/lib/client.js:2699`
- `dsh-at-file/lib/index.js:112`
- `dsh-at-file/lib/index.js:113`
- `dsh-at-file/lib/index.js:2414`
- `dsh-at-file/lib/index.js:3772`
- `dsh-at-file/lib/index.js:3829`
- `dsh-at-file/lib/types/client/styles.d.ts:11`
> 判定: atob/Buffer base64 是文件内容编解码（@ 文件读取），CSS 打包产物，均正常。

### 动态执行（1 处）
- `dsh-at-file/lib/index.js:304`
> 判定: new Function 把配置中的 callback 字段编译为函数（配置驱动回调，配置来源为用户），属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/omdsh-dev/dsh-at-file/tar.gz/HEAD` → `dsh-at-file@0.6.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 30 source files scanned; 13 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

