# dsh-hud

- **来源**: `https://codeload.github.com/a903067276-rgb/dsh-hud/tar.gz/HEAD`
- **安装包名/版本**: `dsh-hud` 1.0.0 · commit: a9aa0a1
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 4 处（逐条见下） |
| 4 兼容钉版 | 1.0.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/a903067276-rgb/dsh-hud/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-hud.install.md](../logs/dsh-hud.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（2 处）
- `dsh-hud/README.md:55`
- `dsh-hud/README.zh-CN.md:53`
> 判定: README 文档文本（挂载路径说明）。
### 网络出口（2 处）
- `dsh-hud/lib/client.js:41`
- `dsh-hud/lib/client.js:52`
> 判定: fetch 自有路由 /api/dsh-hud*，同源请求。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/a903067276-rgb/dsh-hud/tar.gz/HEAD` → `dsh-hud@1.0.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 7 source files scanned; 4 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

