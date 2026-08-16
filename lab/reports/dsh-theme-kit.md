# dsh-theme-kit

- **来源**: `https://codeload.github.com/ink5897/dsh-theme-kit/tar.gz/HEAD`
- **安装包名/版本**: `dsh-theme-kit` 0.1.2 · commit: 0b2101b
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 22 处（逐条见下） |
| 4 兼容钉版 | 0.1.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/ink5897/dsh-theme-kit/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-theme-kit.install.md](../logs/dsh-theme-kit.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（20 处）
- `dsh-theme-kit/lib/client.js:1567`
- `dsh-theme-kit/lib/client.js:1604`
- `dsh-theme-kit/lib/client.js:3610`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:47`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:67`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:133`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:147`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:165`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:171`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:277`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:291`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:294`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:321`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:332`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:348`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:373`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:442`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:448`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:460`
- `dsh-theme-kit/wallpapers/dynamic/五条悟.mp4:471`
> 判定: CSS 打包 + atob 解码 data-URL 背景图（正常图片处理）；wallpapers/*.mp4 二进制曾被旧扫描器误读（已修 SKIP_EXTS，见方法论勘误），均非恶意。
### 文件写入/删除（2 处）
- `dsh-theme-kit/lib/index.js:5`
- `dsh-theme-kit/lib/index.js:131`
> 判定: 主题配置写入（tmp + rename 原子写），属功能本身。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/ink5897/dsh-theme-kit/tar.gz/HEAD` → `dsh-theme-kit@0.1.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 9 source files scanned; 22 hits — see per-category lists above (hits are leads, not verdicts)
- **Verdict**: ⚠️ 可用但注意

