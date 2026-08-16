# 从零写并发布你的第一个 DSH 插件

> 本文基于 2026-08 的 DSH `0.1.0-rc.6`。DSH 处于 rc 阶段，官方文档尚不完整，**本文描述的是当前可验证的结构，细节变化以官方包为准**。本文写作时参考了官方 `@deepseek-ai/dsh-*` 包的源码与清单——这也是最推荐的"文档"。

## 1. 插件的本质：一个 npm 包 + 一层补丁

DSH 插件在结构上就是**一个普通的 npm 包**，多了一个 `dsh` 声明字段，把包内的 `cordis.patch.yml` 标记为 bundle 补丁层：

```jsonc
// package.json（节选，字段取自官方 @deepseek-ai/dsh-base 的真实结构）
{
  "name": "my-dsh-plugin",
  "version": "0.1.0",
  "main": "lib/index.js",
  "dsh": {
    "bundle": {
      "patch": "./cordis.patch.yml"
    }
  }
}
```

`cordis.patch.yml` 是这个插件**往 profile 配置栈里插入的内容**——一个"行"的列表，每行声明一个要装载的包及其配置：

```yaml
# cordis.patch.yml（节选，行结构取自官方 dsh-base 的真实清单）
- insert:
    - id: my-plugin-host
      name: 'my-dsh-plugin'          # 装载这个包（host 侧）
      config:
        someOption: true
```

要点（这些规则来自官方清单注释，务必理解）：

- 每一行有唯一的 `id`，后续层（用户自己的 `cordis.patch.yml`）按 `id` 定位并覆盖。
- **覆盖是整行替换 `config`，不是合并**——所以你的插件想暴露配置项，就要在一层里写全。
- 行顺序不代表加载顺序（加载由服务依赖关系驱动），但建议按 host/client 分组，方便人读。

## 2. host 侧与 client 侧

- **host 侧**：运行在 DSH 的 Node.js 进程里。适合文件、网络、命令、会话、模型工具等能力。
- **client 侧**：运行在浏览器 Web UI 里。适合主题、界面面板、页面状态相关的 UI。

一个插件可以只有一侧，也可以两侧都有。**起步建议：先只写 host 侧**（无 UI 依赖，最好调试），跑通后再加 client 侧。

> 具体如何"装载"：参考你本机 `node_modules/@deepseek-ai/dsh-*` 里的官方包——它们就是最好的教材。也可以从社区的插件模板仓库起步（目前社区已有 `omdsh-dev/plugin-template`）。

## 3. 推荐的开发循环

1. **抄最小骨架**：从一个能装上的现有小插件或模板复制结构，改名字。
2. **本地目录直装调试**：不发布也能装：

   ```bash
   dsh plugin --profile web add /path/to/my-dsh-plugin --ignore-workspace-root-check
   dsh --profile web --dump-config   # 确认你的行出现在配置里
   ```

3. **验证加载**：`dsh web` 启动看日志；host 侧能力可以用 `dsh --profile headless "任务"` 触发。
4. **升级重测**：改代码后重新 `add` 本地目录（或删掉重装）再验。

## 4. 发布与让生态看见你

1. `npm publish`（确保 `files` 包含 `cordis.patch.yml` 和构建产物）。
2. GitHub 仓库打上 **`dsh-plugin`** topic——这是官方推荐的发现机制。
3. 向社区目录（如 awesome-dsh-plugin）提 PR 收录，格式是"一行名字 + 一句描述"，**描述请自己写**。
4. 在 README 写明：**开发/测试时的 DSH 版本**。rc 阶段 API 在变，这个信息未来会救你的用户。

## 5. 质量建议（避免一发布就被用户报"装了没反应"）

- 安装关先自测：干净 `DSH_HOME` 里 `add` 你的包，必须成功。
- 冒烟关自测：headless 跑一个最小任务，确认不崩。
- 把你的 `postinstall`/`prepare` 脚本减到最小：**没有构建脚本的插件最好装**（用户装你时不会遇到 allowBuilds 拦截）。
- 依赖能省则省：依赖树越肥，国内网络直连超时的概率越大。

## 6. 一点提醒

DSH 官方目前不接受外部 PR（见官方 CONTRIBUTING），生态贡献的主要形态就是插件 + 教程 + 答疑。你发布的每个插件都在定义这个生态——**把"它能被验证"当成发布标准，而不是把"它写完了"当成标准。**
