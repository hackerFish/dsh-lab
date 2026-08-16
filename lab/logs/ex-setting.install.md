# ex-setting 安装日志（截断尾部 4000 字符）

```
dsh: initialized profile web at /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/ex-setting/profiles/web
(node:87356) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilities.
(Use `node --trace-deprecation ...` to show where the warning was created)
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3
  Virtual store is at:             node_modules/.pnpm
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install$ pnpm install
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: (node:87371) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilities.
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: (Use `node --trace-deprecation ...` to show where the warning was created)
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: Progress: resolved 0, reused 1, downloaded 0, added 0
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: Progress: resolved 59, reused 59, downloaded 0, added 0
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: Progress: resolved 67, reused 59, downloaded 8, added 0
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: Progress: resolved 69, reused 59, downloaded 10, added 0
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install:  ERROR  Command failed with exit code 128: git fetch --depth 1 origin 1807ade62c031e3526082dd72003f98fbf900c0f
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: fatal: unable to access 'https://github.com/dsh-external/fabric.git/': Error in the HTTP2 framing layer
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: This error happened while installing a direct dependency of /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3/tmp/_tmp_87356_b9ee05e974eac8471acedf3cd3f51544
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: pnpm: Command failed with exit code 128: git fetch --depth 1 origin 1807ade62c031e3526082dd72003f98fbf900c0f
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: fatal: unable to access 'https://github.com/dsh-external/fabric.git/': Error in the HTTP2 framing layer
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install:     at makeError (/Users/matiansa/.cache/node/corepack/v1/pnpm/9.15.4/dist/pnpm.cjs:17875:17)
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install:     at handlePromise (/Users/matiansa/.cache/node/corepack/v1/pnpm/9.15.4/dist/pnpm.cjs:18446:33)
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install:     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install:     at async execGit (/Users/matiansa/.cache/node/corepack/v1/pnpm/9.15.4/dist/pnpm.cjs:114213:7)
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install:     at async gitFetcher (/Users/matiansa/.cache/node/corepack/v1/pnpm/9.15.4/dist/pnpm.cjs:114166:11)
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install:     at async fetcher (/Users/matiansa/.cache/node/corepack/v1/pnpm/9.15.4/dist/pnpm.cjs:133730:16)
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install:     at async run (/Users/matiansa/.cache/node/corepack/v1/pnpm/9.15.4/dist/pnpm.cjs:133180:23)
...7356_b9ee05e974eac8471acedf3cd3f51544 pnpm-install: Failed
 ERR_PNPM_PREPARE_PACKAGE  Failed to prepare git-hosted package fetched from "https://codeload.github.com/omdsh-dev/ex-setting/tar.gz/HEAD": @deepseek-ai/dsh-ex-setting@0.0.2 pnpm-install: `pnpm install`
Exit status 1

This error happened while installing a direct dependency of /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/ex-setting/profiles/web
dsh: pnpm failed in profile directory /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/ex-setting/profiles/web

```
