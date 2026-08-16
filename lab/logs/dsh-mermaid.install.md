# dsh-mermaid 安装日志

## github: 直装失败（git+ssh 无凭据 / git https SSL 主体名不匹配）
 ERROR  Command failed with exit code 128: git ls-remote git+ssh://git@github.com/AKS1st/dsh-mermaid.git HEAD

## 直连 npmjs 超时（依赖树大）
 WARN  GET https://registry.npmjs.org/@types%2Fd3-dispatch error (ERR_SOCKET_TIMEOUT). Will retry in 10 seconds. 2 retries left.

## 本地目录安装成功（npmmirror 镜像）
dependencies:
+ @dsh-external/dsh-mermaid 0.4.2 <- ../../../_src/dsh-mermaid
Done in 688ms
