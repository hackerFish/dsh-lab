# coding-coach

- **来源**: `https://codeload.github.com/xiehuan123/coding-coach/tar.gz/HEAD`
- **安装包名/版本**: `coding-coach` 1.0.2 · commit: e433380
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 57 处（逐条见下） |
| 4 兼容钉版 | 1.0.2 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/xiehuan123/coding-coach/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/coding-coach.install.md](../logs/coding-coach.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 凭证读取（14 处）
- `coding-coach/README.md:88`
- `coding-coach/README.md:89`
- `coding-coach/skills/deploy-to-vercel/SKILL.md:185`
- `coding-coach/skills/deploy-to-vercel/SKILL.md:205`
- `coding-coach/skills/deploy-to-vercel/resources/deploy-codex.sh:204`
- `coding-coach/skills/deploy-to-vercel/resources/deploy.sh:204`
- `coding-coach/skills/ui-ux-pro-max/data/_sync_all.py:79`
- `coding-coach/skills/ui-ux-pro-max/data/colors.csv:30`
- `coding-coach/skills/ui-ux-pro-max/data/products.csv:30`
- `coding-coach/skills/ui-ux-pro-max/data/products.csv:112`
- `coding-coach/skills/ui-ux-pro-max/data/styles.csv:27`
- `coding-coach/skills/ui-ux-pro-max/data/ui-reasoning.csv:6`
- `coding-coach/skills/ui-ux-pro-max/data/ui-reasoning.csv:30`
- `coding-coach/skills/ui-ux-pro-max/data/ui-reasoning.csv:41`
> 判定: 全部命中位于 skills 文档/教学数据（README、SKILL.md、CSV 数据集）——'credentials' 是 UI 设计术语与部署脚本注释，非运行代码。
### 文件写入/删除（1 处）
- `coding-coach/skills/deploy-to-vercel/SKILL.md:51`
> 判定: SKILL.md 文档中的 vercel 命令说明文本，非代码行为。
### 网络出口（20 处）
- `coding-coach/skills/tdd/mocking.md:44`
- `coding-coach/skills/tdd/mocking.md:45`
- `coding-coach/skills/tdd/mocking.md:46`
- `coding-coach/skills/tdd/mocking.md:51`
- `coding-coach/skills/ui-ux-pro-max/data/react-performance.csv:2`
- `coding-coach/skills/ui-ux-pro-max/data/react-performance.csv:4`
- `coding-coach/skills/ui-ux-pro-max/data/react-performance.csv:17`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/astro.csv:20`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/laravel.csv:12`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/laravel.csv:21`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/nextjs.csv:13`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/nextjs.csv:14`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/nuxtjs.csv:10`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/nuxtjs.csv:11`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/nuxtjs.csv:12`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/nuxtjs.csv:13`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/nuxtjs.csv:14`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/nuxtjs.csv:15`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/nuxtjs.csv:16`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/nuxtjs.csv:30`
> 判定: 教学文档中的 fetch 示例代码（TDD mocking 教程）与 CSV 数据文本，非运行代码。
### 混淆线索（20 处）
- `coding-coach/skills/to-tickets/SKILL.md:38`
- `coding-coach/skills/ui-ux-pro-max/SKILL.md:3`
- `coding-coach/skills/ui-ux-pro-max/data/charts.csv:5`
- `coding-coach/skills/ui-ux-pro-max/data/charts.csv:17`
- `coding-coach/skills/ui-ux-pro-max/data/charts.csv:23`
- `coding-coach/skills/ui-ux-pro-max/data/charts.csv:24`
- `coding-coach/skills/ui-ux-pro-max/data/charts.csv:26`
- `coding-coach/skills/ui-ux-pro-max/data/google-fonts.csv:587`
- `coding-coach/skills/ui-ux-pro-max/data/google-fonts.csv:1546`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:3`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:5`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:7`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:13`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:14`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:19`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:22`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:23`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:24`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:26`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/threejs.csv:28`
> 判定: SKILL.md 长行与 CSV 数据行（内容包），非混淆。
### 动态执行（2 处）
- `coding-coach/skills/ui-ux-pro-max/data/stacks/react-native.csv:25`
- `coding-coach/skills/ui-ux-pro-max/data/stacks/react.csv:13`
> 判定: CSV 数据行中的 'New function' 是 React 性能文档数据文本，非代码行为。
## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/xiehuan123/coding-coach/tar.gz/HEAD` → `coding-coach@1.0.2`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 170 source files scanned; 57 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

