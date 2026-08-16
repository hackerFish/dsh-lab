# dsh-remote

- **来源**: `https://codeload.github.com/flymysql/dsh-remote/tar.gz/HEAD`
- **安装包名/版本**: `dsh-remote` 0.5.7 · commit: bd56bcd
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 13 处（逐条见下） |
| 4 兼容钉版 | 0.5.7 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/flymysql/dsh-remote/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-remote.install.md](../logs/dsh-remote.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（4 处）
- `dsh-remote/README.md:38`
- `dsh-remote/README.md:125`
- `dsh-remote/README.zh.md:38`
- `dsh-remote/lib/index.js:301`
> 判定: SSH/SFTP 远程机器的密码/私钥路径（README 明示'给出凭据后 agent 可代表你在远程机执行 shell 命令'），属远程管理功能本身。

### 网络出口（1 处）
- `dsh-remote/lib/client.js:29`
> 判定: fetch 自有路由（远程文件浏览），同源请求。

### 文件写入/删除（7 处）
- `dsh-remote/lib/index.js:21`
- `dsh-remote/lib/index.js:121`
- `dsh-remote/lib/index.js:153`
- `dsh-remote/lib/index.js:186`
- `dsh-remote/lib/index.js:208`
- `dsh-remote/lib/index.js:384`
- `dsh-remote/lib/index.js:747`
> 判定: 本地机器清单/密钥文件写入 + SFTP 上传文件，属功能本身。

### 子进程（1 处）
- `dsh-remote/lib/index.js:317`
> 判定: SSH exec 在远程机器执行命令（核心功能，README 明示），属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/flymysql/dsh-remote/tar.gz/HEAD` → `dsh-remote@0.5.7`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 13 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

