# dsh-file-claim

- **来源**: `https://codeload.github.com/Nwflower/dsh-file-claim/tar.gz/HEAD`
- **安装包名/版本**: `dsh-file-claim` 0.1.7 · commit: 50f60f3
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 24 处（逐条见下） |
| 4 兼容钉版 | 0.1.7 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Nwflower/dsh-file-claim/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-file-claim.install.md](../logs/dsh-file-claim.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 文件写入/删除（20 处）
- `dsh-file-claim/claim.mjs:32`
- `dsh-file-claim/claim.mjs:38`
- `dsh-file-claim/claim.mjs:107`
- `dsh-file-claim/claim.mjs:130`
- `dsh-file-claim/claim.mjs:134`
- `dsh-file-claim/claim.mjs:177`
- `dsh-file-claim/claim.mjs:185`
- `dsh-file-claim/claim.mjs:200`
- `dsh-file-claim/claim.mjs:615`
- `dsh-file-claim/claim.mjs:616`
- `dsh-file-claim/claim.mjs:617`
- `dsh-file-claim/claim.mjs:620`
- `dsh-file-claim/claim.mjs:621`
- `dsh-file-claim/claim.mjs:625`
- `dsh-file-claim/claim.mjs:630`
> 判定: 文件认领注册表/锁文件/三路合并工作文件的管理（原子写 tmp+rename），属功能本身。
- … 其余 5 处

### 子进程（4 处）
- `dsh-file-claim/claim.mjs:33`
- `dsh-file-claim/claim.mjs:645`
- `dsh-file-claim/claim.mjs:661`
- `dsh-file-claim/claim.mjs:663`
> 判定: spawnSync 调用 git merge-file/rev-parse/show 做三路合并与内容提取（无 shell 拼接，参数数组传递），属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Nwflower/dsh-file-claim/tar.gz/HEAD` → `dsh-file-claim@0.1.7`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 24 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

