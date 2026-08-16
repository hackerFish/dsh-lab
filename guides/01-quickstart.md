# 5 分钟上手 DeepSeek Harness

> 本文基于 2026-08 实测的 DSH `0.1.0-rc.6`。DSH 更新频繁，若命令行为变化，以 `dsh --help` 和官方文档为准。

## 1. DSH 是什么

DeepSeek Harness（`dsh`）是 DeepSeek 开源的 Agent 框架，核心设计是"一切皆插件"：模型、工具、沙箱、会话存储、Web UI，甚至 Agent 主循环本身，都是可替换的插件。你运行的 `dsh web` 本质上是一个由插件组成的 profile（配置栈）。

## 2. 安装

```bash
npm install -g @deepseek-ai/dsh
# 或 pnpm add -g @deepseek-ai/dsh
```

验证：

```bash
dsh --help
```

## 3. 三种入口模式

| 命令 | 作用 |
|---|---|
| `dsh web` | 启动 Web 界面（等价 `dsh --profile web`） |
| `dsh --profile headless "任务"` | 无界面跑一个会话，输出最终回答后退出 |
| `dsh plugin --profile web add <插件>` | 给 profile 装插件（内部转发给 pnpm） |

**注意**：启动命令所在的目录就是默认工作区（workspace）。想换工作区，在目标目录里启动，或用对应参数指定。

## 4. DSH_HOME 与 profile

DSH 的所有数据（profile、会话、设置）放在 `DSH_HOME` 下，默认是 `~/.dsh`。

每个 profile 是一个目录（`$DSH_HOME/profiles/<名字>`），核心两个文件：

- `package.json`：`dsh.profile.bundles` 声明这个 profile 由哪些 bundle 组成（`web` profile 默认是 `@deepseek-ai/dsh-base` + `@deepseek-ai/dsh-web-app`）；`dependencies` 里就是已安装的插件。
- `cordis.patch.yml`：**你的个人补丁层**，可以覆盖任何插件的配置。

配置叠加顺序（后者覆盖前者）：`bundles 顺序 → profile 的 cordis.patch.yml → ~/.dsh/cordis.patch.yml → --patch 参数`。

想看当前生效的完整配置，不用启动服务：

```bash
dsh --profile web --dump-config
```

## 5. 安装第一个插件

```bash
dsh plugin --profile web add dsh-global-rules          # npm 包名
dsh plugin --profile web add github:owner/repo          # GitHub 仓库
dsh plugin --profile web add /本地/路径                  # 本地目录（开发调试）
```

装完重启 `dsh web` 生效；或先 `--dump-config` 确认插件层已进入配置。

### 实测坑 1：pnpm 9 的 workspace-root 检查

在 pnpm 9 上，上面的命令可能直接报 `ERR_PNPM_ADDING_TO_ROOT` 并失败。**这不是插件坏了，是 pnpm 拒绝向 workspace 根目录加依赖**。两种解法任选：

```bash
dsh plugin --profile web add <插件> --ignore-workspace-root-check
# 或先 export npm_config_ignore_workspace_root_check=true
```

### 实测坑 2：国内网络

- 依赖树大的插件直连 `registry.npmjs.org` 容易超时，用镜像：

```bash
export npm_config_registry=https://registry.npmmirror.com
```

- 部分插件会在运行时从 `raw.githubusercontent.com` 拉数据，国内不可达时可看插件文档是否提供 jsDelivr 等镜像地址。

## 6. 安全底线（重要）

**安装插件 = 用你当前用户的权限运行第三方代码**。插件能读你的文件、用你的凭据、访问网络，而且工具审批机制管不到插件代码本身。所以：

1. 只装你愿意信任其作者的插件；
2. 装之前看一眼源码（入口文件 + 有没有 `postinstall`/`prepare` 脚本）；
3. 拿不准的先在无凭据的隔离环境试（`DSH_HOME` 指到临时目录即可，见 [METHODOLOGY.md](../docs/METHODOLOGY.md) 的做法）。

## 7. 下一步

- 想自己写插件：[02-first-plugin.md](02-first-plugin.md)
- 想知道还有哪些坑：[03-pitfalls.md](03-pitfalls.md)
- 想知道哪个插件真的能装能用：看本仓库的 [实测报告](../lab/INDEX.md)
