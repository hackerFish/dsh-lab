# hkinsure

- **来源**: `https://codeload.github.com/Anlushu/hkinsure/tar.gz/HEAD`
- **安装包名/版本**: `HEAD` unknown · commit: ba94fa4
- **测试环境**: DSH 0.1.0-rc.6 · pnpm 9.15.4 · node 24.3.0 · macOS · 2026-08-17 (UTC)
- **结论**: ⚠️ 可用但注意

## 四关结果

| 关 | 结果 |
|---|---|
| 1 安装 | ✅ |
| 2 冒烟 | ⏳ 未执行（需模型凭据） |
| 3 安全快检 | 命中 20 处（逐条见下） |
| 4 兼容钉版 | unknown · DSH 0.1.0-rc.6 |


## 复现命令

```bash
export DSH_HOME=$PWD/lab-t/<name> && npm_config_store_dir=$PWD/.pnpm-store
dsh plugin --profile web add https://codeload.github.com/Anlushu/hkinsure/tar.gz/HEAD --ignore-workspace-root-check
```

完整安装日志: [logs/hkinsure.install.md](../logs/hkinsure.install.md)

## 安全快检命中清单

> 命中 ≠ 恶意：这是线索不是判决。分类与模式见 [docs/METHODOLOGY.md](../../docs/METHODOLOGY.md) 关 3。

### 混淆线索（20 处）
- `HEAD/data/details/1739941181810880511.json:1`
- `HEAD/data/details/1739942414884864000.json:1`
- `HEAD/data/details/1739942952448897021.json:1`
- `HEAD/data/details/1739944212711419904.json:1`
- `HEAD/data/details/1739944335272624128.json:1`
- `HEAD/data/details/1739946126261956601.json:1`
- `HEAD/data/details/1740177004593987581.json:1`
- `HEAD/data/details/1740179934651428864.json:1`
- `HEAD/data/details/1740184666731249661.json:1`
- `HEAD/data/details/1742488845093486592.json:1`
- `HEAD/data/details/1758687047903657984.json:1`
- `HEAD/data/details/1758709541712740351.json:1`
- `HEAD/data/details/1758712232270168064.json:1`
- `HEAD/data/details/1758718274869723136.json:1`
- `HEAD/data/details/1758718708817117184.json:1`
> 判定: data/details/*.json 是保险产品演示数据文件（长行 JSON 误报），非代码行为。
- … 其余 5 处

## English Summary

- **Install**: ✅ passed — `https://codeload.github.com/Anlushu/hkinsure/tar.gz/HEAD` → `HEAD@unknown`
- **Smoke**: ⏳ not run (needs model credentials)
- **Static scan**: 306 source files scanned; 20 hits — see per-category lists above (hits are leads, not verdicts); per-category judgements added
- **Verdict**: ⚠️ 可用但注意

