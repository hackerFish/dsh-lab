# dsh-mobile-gui-agent

- **来源**: `https://codeload.github.com/kunjinkao-os/dsh-mobile-gui-agent/tar.gz/HEAD`
- **安装包名/版本**: `dsh-mobile-gui-agent` 0.2.0 · commit: 7c2b560
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 26 处（逐条见下） |
| 4 兼容钉版 | 0.2.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/kunjinkao-os/dsh-mobile-gui-agent/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-mobile-gui-agent.install.md](../logs/dsh-mobile-gui-agent.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（4 处）
- `dsh-mobile-gui-agent/SECURITY.md:11`
- `dsh-mobile-gui-agent/docs/superpowers/plans/2026-08-14-phone-input-and-verification-fixes.md:278`
- `dsh-mobile-gui-agent/lib/agent/approval.js:7`
- `dsh-mobile-gui-agent/src/agent/approval.ts:23`
> 判定: SECURITY.md 文档（明确避免包含密钥/凭据）+ 账号安全操作的审批规则（安全正向）。

### 混淆线索（18 处）
- `dsh-mobile-gui-agent/generated/typert.host.js:1590`
- `dsh-mobile-gui-agent/generated/typert.host.js:1706`
- `dsh-mobile-gui-agent/lib/adb/screenshot.js:44`
- `dsh-mobile-gui-agent/lib/adb/screenshot.js:45`
- `dsh-mobile-gui-agent/lib/client.js:3`
- `dsh-mobile-gui-agent/lib/client.js:1297`
- `dsh-mobile-gui-agent/lib/client.js:2655`
- `dsh-mobile-gui-agent/lib/client.js:2712`
- `dsh-mobile-gui-agent/lib/client.js:14720`
- `dsh-mobile-gui-agent/lib/client.js:14935`
- `dsh-mobile-gui-agent/lib/client.js:15143`
- `dsh-mobile-gui-agent/lib/client.js:15355`
- `dsh-mobile-gui-agent/lib/client.js:15563`
- `dsh-mobile-gui-agent/lib/typert.host.js:1590`
- `dsh-mobile-gui-agent/lib/typert.host.js:1706`
> 判定: 打包产物 + adb 截图 base64 编解码（对比截屏差异），正常。
- … 其余 3 处

### 子进程（4 处）
- `dsh-mobile-gui-agent/lib/adb/adb-client.js:27`
- `dsh-mobile-gui-agent/lib/adb/adb-client.js:71`
- `dsh-mobile-gui-agent/src/adb/adb-client.ts:40`
- `dsh-mobile-gui-agent/src/adb/adb-client.ts:83`
> 判定: adb 命令 spawn（Android 设备控制，核心功能），参数数组传递，属功能本身。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/kunjinkao-os/dsh-mobile-gui-agent/tar.gz/HEAD` → `dsh-mobile-gui-agent@0.2.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 131 source files scanned; 26 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

