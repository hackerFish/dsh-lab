# 装插件之前必须知道的坑

> 本文的"实测坑"全部来自 dsh-lab 在隔离环境中的真实复现（DSH `0.1.0-rc.6`，2026-08）。每一条都附复现方法与解法。

## 1. 最底层的一条：装插件 = 运行第三方代码

DSH 社区目录在自己的首页用整段警告声明：**安装插件会在你的机器上以你自己的权限运行第三方代码**——它能读文件、用凭据、联网；工具审批（approval）管不到插件代码本身；被目录收录也不代表做过安全审查。

所以"收录"和"star 高"都不能作为信任依据。装之前至少做三件事：

1. 看仓库的入口文件和清单（`cordis.patch.yml` 装载了什么）；
2. 看有没有 `postinstall`/`prepare` 脚本，脚本里写什么；
3. 拿不准的，先用隔离 `DSH_HOME`（指向临时目录）装一遍看看行为。

## 2. 实测坑 A：pnpm 9 拦下 `dsh plugin add`

**现象**：`dsh plugin --profile web add <插件>` 报 `ERR_PNPM_ADDING_TO_ROOT`，退出码 1。

**原因**：`dsh plugin add` 内部把请求转发给 profile 目录里的 pnpm；pnpm 9 默认拒绝向 workspace 根目录添加依赖。

**解法**（二选一）：

```bash
dsh plugin --profile web add <插件> --ignore-workspace-root-check
export npm_config_ignore_workspace_root_check=true
```

**判别**：如果网上有人抱怨"某插件装不上"，先看是不是这个错——**大概率不是插件的问题**。

## 3. 实测坑 B：git 直装被网络拦

**现象**：`dsh plugin add github:owner/repo` 报 `git ls-remote git+ssh://...` 失败，或 `SSL: no alternative certificate subject name matches...`。

**原因**：git 协议走 `git+ssh`（需要 SSH 凭据）或 `git+https`（在某些拦截型网络下证书校验失败）。

**解法**：改用 codeload tarball 直链（走 HTTPS 下载，不需要 git）：

```bash
dsh plugin --profile web add https://codeload.github.com/<owner>/<repo>/tar.gz/HEAD --ignore-workspace-root-check
```

## 4. 实测坑 C：依赖树大 → registry 超时

**现象**：安装卡在 `Progress: resolved ... downloaded ...`，随后 `GET https://registry.npmjs.org/... error (ERR_SOCKET_TIMEOUT)`。

**原因**：插件自带大依赖树（例如图表类插件带 d3 + 一堆 @types），直连 npm 官方源超时（国内网络尤其常见）。

**解法**：

```bash
export npm_config_registry=https://registry.npmmirror.com
dsh plugin --profile web add <插件> --ignore-workspace-root-check
```

## 5. 实测坑 D：git 插件的 prepare 构建被拦

**现象**：git/tarball 安装时报 `pnpm blocks until allowed`，提示在 profile 的 `pnpm-workspace.yaml` 里加 `allowBuilds`。

**原因**：pnpm 默认拦截依赖的构建脚本（这是 pnpm 的安全设计）。

**解法**：按提示把 pnpm 打印的确切 key 写进 `$DSH_HOME/profiles/web/pnpm-workspace.yaml` 的 `allowBuilds` 列表，再重跑安装。

**注意**：这一步是在**放行第三方构建脚本**——做之前回看第 1 条。

## 6. 版本漂移：今天能用，明天可能坏

DSH 主线 rc 版本更新非常频繁。UI 类插件最脆弱：界面结构一变，插件轻则失效、重则让页面报错。建议：

- 装完先 `dsh --profile web --dump-config` 存一份基线；
- 升级 DSH 或插件前，备份 `$DSH_HOME/profiles/<名字>/`（`package.json` + `cordis.patch.yml` 是核心资产）；
- 出问题先移除最近装的插件（`dsh plugin` 管理），看是否恢复，再定位。

## 7. 同质化选择：30 个余额面板，装哪个？

这是生态当前最真实的问题：同一功能有几十个实现，star 差别不大，描述都是"好看好用"。**star 不反映安装成功率与兼容性**。

dsh-lab 的建议：只认**带测试日期的实测报告**（见 [lab/INDEX.md](../lab/INDEX.md)），并核对报告的 DSH 版本与你正在用的版本是否一致。没有实测记录的，按本指南第 1 条的清单自查。

## 8. 自救流程（收藏这个顺序）

1. `dsh --profile web --dump-config` → 看插件层是否真的在配置里；
2. 看启动日志（Web 页面或终端输出）→ 有没有指向某插件的报错；
3. 移除可疑插件 → 重启 → 确认是否恢复；
4. 还不能解决 → 到官方仓库的 GitHub Discussions 提问（官方明示会关注），附上 DSH 版本、插件清单、报错日志。

## 9. 与 dsh-lab 的关系

我们的报告**只描述我们做过的事**：每一关要么 ✅ 要么 ❌（附原因）要么 ⏳（附原因），全部可复现。欢迎你复现后报"结论不一致"——这正是这个仓库保持诚实的方式。
