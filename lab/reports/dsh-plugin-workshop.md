# dsh-plugin-workshop

- **来源**: `https://codeload.github.com/yyyyukari/dsh-plugin-workshop/tar.gz/HEAD`
- **安装包名/版本**: `@dsh-external/dsh-plugin-workshop` 1.6.1 · commit: acc2d75
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 48 处（逐条见下） |
| 4 兼容钉版 | 1.6.1 · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/yyyyukari/dsh-plugin-workshop/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/dsh-plugin-workshop.install.md](../logs/dsh-plugin-workshop.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 网络出口（20 处）
- `@dsh-external/dsh-plugin-workshop/lib/client.js:42`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:44`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:56`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:60`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:68`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:70`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:132`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:161`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:170`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:191`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:448`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:475`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:495`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:613`
- `@dsh-external/dsh-plugin-workshop/lib/client.js:806`
> 判定: 查询 GitHub API/raw.githubusercontent（插件发现与元数据）+ **translate.googleapis.com（描述机翻）**+ 自有路由——第三方访问明确可见，属插件工坊功能本身。
- … 其余 5 处

### 混淆线索（2 处）
- `@dsh-external/dsh-plugin-workshop/lib/client.js:1093`
- `@dsh-external/dsh-plugin-workshop/src/client/index.js:1091`
> 判定: CSS 打包产物，正常。

### 子进程（4 处）
- `@dsh-external/dsh-plugin-workshop/lib/index.js:26`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:65`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:77`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:381`
> 判定: git clone 安装插件 + Windows cmd /c 运行第三方安装脚本（**会执行第三方代码**，属插件工坊核心功能，需用户知悉）。

### 文件写入/删除（20 处）
- `@dsh-external/dsh-plugin-workshop/lib/index.js:27`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:237`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:240`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:263`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:349`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:380`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:403`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:428`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:491`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:523`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:568`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:574`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:578`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:580`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:581`
> 判定: 克隆/安装/临时目录清理，属功能本身。
- … 其余 5 处

### 凭证读取（2 处）
- `@dsh-external/dsh-plugin-workshop/lib/index.js:374`
- `@dsh-external/dsh-plugin-workshop/lib/index.js:375`
> 判定: 读取 Windows 注册表检测 DEEPSEEK_API_KEY 环境（环境检测），无外发。

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/yyyyukari/dsh-plugin-workshop/tar.gz/HEAD` → `@dsh-external/dsh-plugin-workshop@1.6.1`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 9 source files scanned; 48 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

