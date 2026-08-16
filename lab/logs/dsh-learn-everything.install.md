# dsh-learn-everything 安装日志（截断尾部 4000 字符）

```
 to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilities.
(Use `node --trace-deprecation ...` to show where the warning was created)
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3
  Virtual store is at:             node_modules/.pnpm
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install$ pnpm install
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: ? Verifying lockfile against supply-chain policies (299 entries)...
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: Lockfile is up to date, resolution step is skipped
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: Progress: resolved 1, reused 0, downloaded 0, added 0
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: Packages: +217
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: Progress: resolved 217, reused 112, downloaded 0, added 111
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: Progress: resolved 217, reused 112, downloaded 61, added 173
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: Progress: resolved 217, reused 112, downloaded 102, added 213
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: ✓ Lockfile passes supply-chain policies (299 entries in 4s)
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: Progress: resolved 217, reused 112, downloaded 104, added 215
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: Progress: resolved 217, reused 112, downloaded 104, added 216
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: Progress: resolved 217, reused 112, downloaded 105, added 217, done
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: dependencies:
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + dompurify 3.4.13
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + mermaid 11.16.0
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: devDependencies:
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + @types/node 26.2.0
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + @types/react 18.3.31
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + @types/react-dom 18.3.7
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + esbuild 0.28.2
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + playwright 1.61.1
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + react 18.3.1
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + react-dom 18.3.1
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + tsdown 0.20.3
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + typescript 6.0.3
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: + vitest 3.2.7
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: . prepare$ node scripts/setup-dsh-links.mjs && pnpm build
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: . prepare: dsh-explain link setup failed: no DSH source tree found; set DSH_SOURCE_DIR (tried /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/dsh-learn-everything/source/current, /Users/matiansa/.dsh/source/current)
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: . prepare: Failed
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: [ELIFECYCLE] Command failed with exit code 1.
...4208_baebeb2f2dccda312dc1326d71c6aa85 pnpm-install: Failed
 ERR_PNPM_PREPARE_PACKAGE  Failed to prepare git-hosted package fetched from "https://codeload.github.com/cendaifeng/dsh-learn-everything/tar.gz/HEAD": dsh-learn-everything@0.1.0 pnpm-install: `pnpm install`
Exit status 1

This error happened while installing a direct dependency of /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/dsh-learn-everything/profiles/web
dsh: pnpm failed in profile directory /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/dsh-learn-everything/profiles/web

```
