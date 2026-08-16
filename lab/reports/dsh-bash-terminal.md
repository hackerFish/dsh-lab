# dsh-bash-terminal

- **来源**: `https://codeload.github.com/MAXeaglet/dsh-bash-terminal/tar.gz/HEAD`
- **安装包名/版本**: `dsh-bash-terminal` 0.3.14 · commit: 6894913
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 17 处（逐条见下） |
| 4 兼容钉版 | 0.3.14 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/MAXeaglet/dsh-bash-terminal/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-bash-terminal.install.md](../logs/dsh-bash-terminal.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 子进程（13 处）
- `dsh-bash-terminal/README.en.md:19`
- `dsh-bash-terminal/README.en.md:53`
- `dsh-bash-terminal/README.md:131`
- `dsh-bash-terminal/README.md:158`
- `dsh-bash-terminal/lib/index.js:219`
- `dsh-bash-terminal/lib/index.js:239`
- `dsh-bash-terminal/lib/terminal.js:2`
- `dsh-bash-terminal/lib/terminal.js:9`
- `dsh-bash-terminal/lib/terminal.js:91`
- `dsh-bash-terminal/lib/terminal.js:96`
- `dsh-bash-terminal/lib/terminal.js:98`
- `dsh-bash-terminal/lib/terminal.js:113`
- `dsh-bash-terminal/package.json:83`
> 判定: 核心功能本身：terminal 工具通过 node-pty / ctx.subprocess.spawn 执行用户命令（README 明示），权限极高但属宣称功能；判定：终端插件，执行的是用户主动调用的命令。
### 原生模块（2 处）
- `dsh-bash-terminal/README.en.md:43`
- `dsh-bash-terminal/README.md:148`
> 判定: node-pty 原生模块（终端必需）+ README 提及 DSH 沙箱 addon，均与功能相符。
### 文件写入/删除（2 处）
- `dsh-bash-terminal/scripts/build-client.mjs:7`
- `dsh-bash-terminal/scripts/build-client.mjs:36`
> 判定: 构建脚本写 dist，开发期用途。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/MAXeaglet/dsh-bash-terminal/tar.gz/HEAD` → `dsh-bash-terminal@0.3.14`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 11 source files scanned; 17 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

