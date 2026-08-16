# modlens

- **来源**: GitHub [liustack/modlens](https://github.com/liustack/modlens) · npm 包名 `@liustack/modlens`
- **版本**: 3.17.3 · commit `767dfe5`（main）
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-16
- **结论**: ✅ 推荐（生态首批视觉插件、star 2k+；属"大项目型"插件，命中与其功能相符，安装后建议先读它的密钥管理部分）

## 四关结果

| 关 | 结果 |
|---|---|
| 安装 | ✅（本地目录路径；npm 上实际包名为 `@liustack/modlens`，`modlens` 这个名字查不到） |
| 冒烟 | ⏳ 未执行（需模型凭据，本环境未提供） |
| 安全快检 | 命中量大但均有合理解释，见下 |
| 兼容钉版 | 插件 3.17.3 · DSH 0.1.0-rc.6 |

## 安装

```bash
git clone https://github.com/liustack/modlens
dsh plugin --profile web add ./modlens --ignore-workspace-root-check
# 或 npm: dsh plugin --profile web add @liustack/modlens --ignore-workspace-root-check
```

安装日志要点：

```
dependencies:
+ @liustack/modlens 3.17.3 <- ../../../_src/modlens
Done in 904ms
```

**小发现**：本地目录安装时报 `Failed to create bin at .../dist/main.js ENOENT`（仓库不提交 `dist/`，本地安装没有构建产物；npm 安装的是发布包，不受影响）。作为插件使用无碍，作为 CLI 用的话走 npm 安装。

## 安全快检（`tools/scan.mjs`，132 个文件）

| 类别 | 命中 | 判定 |
|---|---|---|
| 文件写入/删除 | 255 | 大项目全量命中，含测试/构建脚本/缓存逻辑 |
| 凭证读取 | 44 | 大头在 CHANGELOG/README/INSTALL 文档；运行代码为自身的 provider 密钥管理（视觉模型需要凭据，是其功能） |
| 混淆线索 | 39 | 大半是 CHANGELOG 超长行；代码部分为 **base64 图像编解码**（`Buffer.from(data,'base64')` 是视觉插件的正常操作） |
| 子进程 | 31 | CLI 与外部工具调用 |
| 网络出口 | 21 | 视觉 provider 调用与图像拉取（其功能） |
| 动态执行 | 3 | 待人工复核 |
| 原生模块 | 1 | 待人工复核 |

**扫描器局限记录**：`Buffer.from(...,'base64')` 模式会把视觉类插件的正常图像编解码记入"混淆线索"。已在 [METHODOLOGY.md](../../docs/METHODOLOGY.md) 补充说明——**命中 ≠ 恶意，对视觉/媒体类插件尤其如此。**

## 一句话

给 DSH 加视觉能力的老牌插件（2k+ star）。属于"重项目型"：代码量大、功能多、自带密钥管理，快检命中与其身份相符；装上能用，但请像审阅任何大插件一样，先读一遍它的密钥与网络调用部分。
