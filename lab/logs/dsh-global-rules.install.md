# dsh-global-rules 安装日志

## 首次失败（pnpm 9 workspace-root 检查）
dsh: initialized profile web at /Users/matiansa/Desktop/ds_hns/cy/.lab-home/profiles/web
 ERR_PNPM_ADDING_TO_ROOT  Running this command will add the dependency to the workspace root, which might not be what you want - if you really meant it, make it explicit by running this command again with the -w flag (or --workspace-root). If you don't want to see this warning anymore, you may set the ignore-workspace-root-check setting to true.

## 加 --ignore-workspace-root-check 后成功
dependencies:
+ dsh-global-rules 0.1.0
Done in 13.1s
