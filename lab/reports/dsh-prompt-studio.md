# dsh-prompt-studio

- **来源**: `https://codeload.github.com/Moeblack/dsh-prompt-studio/tar.gz/HEAD`
- **安装包名/版本**: `dsh-prompt-studio` 0.4.0 · commit: be5e97d
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 12 处（逐条见下） |
| 4 兼容钉版 | 0.4.0 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Moeblack/dsh-prompt-studio/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-prompt-studio.install.md](../logs/dsh-prompt-studio.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（5 处）
- `dsh-prompt-studio/client.js:267`
- `dsh-prompt-studio/client.js:275`
- `dsh-prompt-studio/client.js:326`
- `dsh-prompt-studio/client.js:349`
- `dsh-prompt-studio/client.js:358`
> 判定: 五处 fetch 均为插件自身注册的同源路由（设置/目录/资源接口），无第三方外联。

### 混淆线索（3 处）
- `dsh-prompt-studio/client.js:402`
- `dsh-prompt-studio/index.mjs:61`
- `dsh-prompt-studio/index.mjs:62`
> 判定: base64 命中是配置编解码工具函数，超长行是打包进产物的 CSS，均正常。

### 文件写入/删除（2 处）
- `dsh-prompt-studio/index.mjs:3`
- `dsh-prompt-studio/index.mjs:1125`
> 判定: 读取与写入提示词资源文件（保存/导出），属功能本身。

### 动态执行（1 处）
- `dsh-prompt-studio/index.mjs:243`
> 判定: new Function 是把配置中的 callback 字段编译为函数（配置驱动回调，配置来源为用户），属功能本身。

### 凭证读取（1 处）
- `dsh-prompt-studio/index.mjs:1079`
> 判定: ~/.dsh 路径解析是把显示路径映射到 DSH_HOME 下，无凭证外发。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Moeblack/dsh-prompt-studio/tar.gz/HEAD` → `dsh-prompt-studio@0.4.0`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: per-category judgements added;  6 source files scanned; 12 hits — see per-category lists above (hits are leads, not verdicts)
- **Verdict**: ⚠️ 可用但注意

