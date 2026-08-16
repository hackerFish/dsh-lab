# dsh-shortcuts

- **来源**: GitHub [Ricketts-Guo/dsh-shortcuts](https://github.com/Ricketts-Guo/dsh-shortcuts) · npm 包名 `dsh-shortcuts`
- **版本**: 1.1.0 · commit `0d12280`（main）
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-16
- **结论**: ✅ 推荐（功能明确、零依赖；注意其附带的 `install.sh` 是远程脚本，见下）

## 四关结果

| 关 | 结果 |
|---|---|
| 安装 | ✅（本地目录路径） |
| 冒烟 | ⏳ 未执行（需模型凭据，本环境未提供） |
| 安全快检 | 命中均有合理解释，见下 |
| 兼容钉版 | 插件 1.1.0 · DSH 0.1.0-rc.6 |

## 安装

```bash
git clone https://github.com/Ricketts-Guo/dsh-shortcuts
dsh plugin --profile web add ./dsh-shortcuts --ignore-workspace-root-check
# 或 npm: dsh plugin --profile web add dsh-shortcuts --ignore-workspace-root-check
```

安装日志要点：

```
dependencies:
+ dsh-shortcuts 1.1.0 <- ../../../_src/dsh-shortcuts
Done in 556ms
```

## 安全快检（`tools/scan.mjs`，10 个文件）

| 类别 | 命中 | 判定 |
|---|---|---|
| 凭证读取 | 6 | 全部为 README/install.sh 中提到的 `~/.dsh` 路径文本，无代码读取 |
| 网络出口 | 1 | 同源 `/dsh-shortcuts-permission` 路由（切换权限预置） |
| 动态执行 | 1 | 在测试文件 `test/shortcuts.test.cjs` |
| 子进程/原生模块 | 0 | 见下方勘误 |

**扫描器勘误记录**：初版 `tools/scan.mjs` 的 `\bexec\s*\(` 模式把正则方法 `.exec(`（如 `/^selectModel(\d+)$/.exec(...)`）误报为"子进程"，导致首扫在 `lib/client.js:767,772` 出现 2 处假命中。已修正模式为 `(?<!\.)\bexec\s*\(` 并复扫，确认实际为 0。**保留此记录以示扫描器的局限：命中 ≠ 恶意，未命中 ≠ 无害。**

## 附带脚本说明

仓库带一个 `install.sh`（`curl -fsSL ... | bash` 一键安装）：会克隆仓库到 `~/dsh-shortcuts` 并注册进 profile。**本项目未执行该脚本**（测试走 `dsh plugin add` 官方路径）。如果你打算用一键脚本，请自行审阅后再执行——任何 `curl | bash` 都等于执行远程代码。

## 一句话

34+ 个可自定义键盘快捷键（会话、视图、剪贴板、模型切换、权限预置循环等）。零运行时依赖，浏览器侧 bundle，属于"装上就能用"的类型。
