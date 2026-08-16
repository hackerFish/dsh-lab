# dsh-context 安装日志（截断尾部 4000 字符）

```
ed profile web at /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/dsh-context/profiles/web
(node:85820) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilities.
(Use `node --trace-deprecation ...` to show where the warning was created)
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3
  Virtual store is at:             node_modules/.pnpm
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install$ pnpm install
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: ! Corepack is about to download https://registry.npmjs.org/pnpm/-/pnpm-11.9.0.tgz
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: ? Verifying lockfile against supply-chain policies (211 entries)...
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: Lockfile is up to date, resolution step is skipped
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: Progress: resolved 1, reused 0, downloaded 0, added 0
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: Packages: +167
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: Progress: resolved 167, reused 122, downloaded 0, added 49
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: Progress: resolved 167, reused 122, downloaded 40, added 140
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: ✓ Lockfile passes supply-chain policies (211 entries in 3.1s)
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: Progress: resolved 167, reused 122, downloaded 44, added 166
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: Progress: resolved 167, reused 122, downloaded 45, added 167, done
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: .../esbuild@0.28.2/node_modules/esbuild postinstall$ node install.js
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: .../esbuild@0.28.2/node_modules/esbuild postinstall: Done
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: dependencies:
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + zod 4.4.3
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: devDependencies:
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + @deepseek-ai/cordis 4.0.1
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + @deepseek-ai/dsh-client-ui-primitives 0.1.0-rc.6
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + @deepseek-ai/dsh-session 0.1.0-rc.6
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + @deepseek-ai/dsh-session-projection 0.1.0-rc.6
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + @deepseek-ai/dsh-token-meter 0.1.0-rc.6
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + @types/react 18.3.31
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + esbuild 0.28.2
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + husky 9.1.7
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + jsdom 30.0.1
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + react 18.3.1
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + react-dom 18.3.1
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: + typescript 7.0.2
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: . prepare$ husky
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: . prepare: .git can't be found
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: . prepare: Done
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: Done in 5.4s using pnpm v11.9.0
...5820_99b091477d8cf7d54b50b6ac19f50719 pnpm-install: Done
Progress: resolved 0, reused 0, downloaded 1, added 0
Progress: resolved 1, reused 0, downloaded 1, added 0
Packages: +2
++
Progress: resolved 2, reused 1, downloaded 1, added 2, done

dependencies:
+ dsh-context 0.10.1

Done in 33.5s

```
