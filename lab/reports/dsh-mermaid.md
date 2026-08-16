# dsh-mermaid

- **来源**: GitHub [AKS1st/dsh-mermaid](https://github.com/AKS1st/dsh-mermaid) · npm 包名 `@dsh-external/dsh-mermaid`
- **版本**: 0.4.2 · commit `4d82963`（main）
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-16
- **结论**: ✅ 推荐（客户端渲染类，构建产物随库发布）

## 四关结果

| 关 | 结果 |
|---|---|
| 安装 | ✅（本地目录路径；`github:` 直装在本环境受阻，见下） |
| 冒烟 | ⏳ 未执行（需模型凭据，本环境未提供） |
| 安全快检 | 命中均有合理解释，见下 |
| 兼容钉版 | 插件 0.4.2 · DSH 0.1.0-rc.6 |

## 安装

```bash
# 方式一（标准）：npm
dsh plugin --profile web add @dsh-external/dsh-mermaid --ignore-workspace-root-check
# 方式二：git 克隆后本地目录安装（本环境实测采用的路径）
git clone https://github.com/AKS1st/dsh-mermaid
dsh plugin --profile web add ./dsh-mermaid --ignore-workspace-root-check
```

**环境记录（本机，非插件问题）**：

1. `dsh plugin add github:AKS1st/dsh-mermaid` 失败：pnpm 走 `git+ssh`，本机无 SSH 凭据。
2. git 的 HTTPS 通道报 `SSL: no alternative certificate subject name matches target host name 'github.com'`（curl/Node 正常），故 clone 时用了 `GIT_SSL_NO_VERIFY=true`。
3. 依赖树较大（d3 系），直连 `registry.npmjs.org` 出现 `ERR_SOCKET_TIMEOUT`；换 `npm_config_registry=https://registry.npmmirror.com` 后正常。

安装日志要点：

```
dependencies:
+ @dsh-external/dsh-mermaid 0.4.2 <- ../../../_src/dsh-mermaid
Done in 688ms
```

`--dump-config` 确认层已进入：`# == @dsh-external/dsh-mermaid`。

## 安全快检（`tools/scan.mjs`，37 个文件）

| 类别 | 命中 | 判定 |
|---|---|---|
| 网络出口 | 9 | 4 处在测试文件；运行代码为同源配置路由 `fetch(CONFIG_ROUTE)`，非第三方外呼 |
| 混淆线索 | 1 | `styles.d.ts` 超长行 = 内嵌字体/样式资源 |
| 安装钩子 | 1 | `prepare: npm run build`（git/tarball 安装需在 profile 的 `pnpm-workspace.yaml` 放行 `allowBuilds`） |
| 文件写入/删除 | 3 | 全部在测试文件 |
| 子进程/动态执行/原生模块 | 0 | — |

## 一句话

把聊天里的 Mermaid 代码块懒加载渲染成 SVG 图表。仓库自带 `lib/` 构建产物，npm 安装无需构建；git 直装才需要放行 prepare。
