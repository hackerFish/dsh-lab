# dsh-backup

- **来源**: `https://codeload.github.com/xiaoyuyu6420/dsh-backup/tar.gz/HEAD`
- **安装包名/版本**: `dsh-backup` 0.5.0 · commit: e1b94e4
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 30 处（逐条见下） |
| 4 兼容钉版 | 0.5.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/xiaoyuyu6420/dsh-backup/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-backup.install.md](../logs/dsh-backup.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（19 处）
- `dsh-backup/README.md:6`
- `dsh-backup/README.md:13`
- `dsh-backup/README.md:16`
- `dsh-backup/README.md:35`
- `dsh-backup/README.md:59`
- `dsh-backup/README.md:83`
- `dsh-backup/README.zh.md:5`
- `dsh-backup/README.zh.md:11`
- `dsh-backup/README.zh.md:14`
- `dsh-backup/README.zh.md:53`
- `dsh-backup/README.zh.md:77`
- `dsh-backup/lib/index.js:4`
- `dsh-backup/lib/index.js:21`
- `dsh-backup/lib/index.js:296`
- `dsh-backup/lib/index.js:358`
- … 其余 4 处
> 判定: 这些命中是备份功能本身的说明——插件备份的 ~/.dsh 里含明文凭据，作者已在 README 明示风险；GitHub 同步是可选功能，token 只用于推送到用户自配的私有仓库，非隐蔽外传。

### 混淆线索（8 处）
- `dsh-backup/lib/client.js:3`
- `dsh-backup/lib/client.js:3`
- `dsh-backup/lib/client.js:4`
- `dsh-backup/lib/client.js:6`
- `dsh-backup/lib/client.js:6`
- `dsh-backup/lib/client.js:65`
- `dsh-backup/lib/client.js:67`
- `dsh-backup/lib/client.js:333`
> 判定: 是打包压缩后的前端 bundle，属正常构建产物，未见异常。

### 文件写入/删除（2 处）
- `dsh-backup/lib/index.js:33`
- `dsh-backup/lib/index.js:252`
> 判定: 写备份归档、校验和等插件自有数据，是备份功能本身。

### 子进程（1 处）
- `dsh-backup/lib/index.js:148`
> 判定: 调用 tar/chmod/git 等系统命令完成打包、收紧权限与 GitHub 同步，是备份功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/xiaoyuyu6420/dsh-backup/tar.gz/HEAD` → `dsh-backup@0.5.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 30 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

