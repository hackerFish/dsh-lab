# dsh-deep-whale

- **来源**: `https://codeload.github.com/Small-tailqwq/dsh-deep-whale/tar.gz/HEAD`
- **安装包名/版本**: `HEAD` unknown · commit: 873f5c6
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 30 处（逐条见下） |
| 4 兼容钉版 | unknown · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Small-tailqwq/dsh-deep-whale/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-deep-whale.install.md](../logs/dsh-deep-whale.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（1 处）
- `HEAD/maid-atelier/build/tsdown.client.ts:113`
> 判定: 注释文本（'页面通过 /api 的 fetch/WebSocket 与 host 通信'——自有路由说明）。

### 凭证读取（3 处）
- `HEAD/maid-atelier/build/tsdown.client.ts:136`
- `HEAD/maid-atelier/build/tsdown.client.ts:231`
- `HEAD/maid-atelier/build/tsdown.client.ts:237`
> 判定: tsdown 配置的 import.meta.env 注入（构建期环境变量），非敏感。

### 混淆线索（19 处）
- `HEAD/maid-atelier/src/client/art.ts:6`
- `HEAD/maid-atelier/src/client/art.ts:8`
- `HEAD/maid-atelier/src/client/art.ts:12`
- `HEAD/maid-atelier/src/client/art.ts:15`
- `HEAD/maid-atelier/src/client/art.ts:22`
- `HEAD/maid-atelier/src/client/art.ts:25`
- `HEAD/maid-atelier/src/client/art.ts:28`
- `HEAD/maid-atelier/src/client/background-art.generated.ts:5`
- `HEAD/maid-atelier/src/client/background-art.generated.ts:6`
- `HEAD/maid-atelier/src/client/background-art.generated.ts:7`
- `HEAD/maid-atelier/src/client/background-art.generated.ts:8`
- `HEAD/maid-atelier/src/client/chrome-art.generated.ts:5`
- `HEAD/maid-atelier/src/client/chrome-art.generated.ts:6`
- `HEAD/maid-atelier/src/client/chrome-art.generated.ts:7`
- `HEAD/maid-atelier/src/client/chrome-art.generated.ts:8`
> 判定: 全部为 data:image/webp;base64 内嵌美术资源（UI 主题图片，正常内容）与 SVG 品牌图。
- … 其余 4 处

### 原生模块（7 处）
- `HEAD/maid-atelier/src/client/maid-atelier.module.css:2442`
- `HEAD/maid-atelier/src/client/maid-atelier.module.css:2457`
- `HEAD/maid-atelier/src/client/maid-atelier.module.css:2478`
- `HEAD/maid-atelier/src/client/maid-atelier.module.css:2488`
- `HEAD/maid-atelier/src/client/maid-atelier.module.css:2534`
- `HEAD/maid-atelier/src/client/maid-atelier.module.css:2543`
- `HEAD/maid-atelier/tests/apply.spec.ts:1025`
> 判定: CSS 中的 slot 选择器文本（conversation.chat.node），非原生模块。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Small-tailqwq/dsh-deep-whale/tar.gz/HEAD` → `HEAD@unknown`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 21 source files scanned; 30 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

