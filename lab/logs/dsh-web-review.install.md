# dsh-web-review 安装日志（截断尾部 4000 字符）

```
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3
  Virtual store is at:             node_modules/.pnpm
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install$ pnpm install
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Scope: all 3 workspace projects
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: ? Verifying lockfile against supply-chain policies (450 entries)...
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Lockfile is up to date, resolution step is skipped
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Progress: resolved 1, reused 0, downloaded 0, added 0
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Packages: +355
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Packages are cloned from the content-addressable store to the virtual store.
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install:   Content-addressable store is at: /Users/matiansa/Library/pnpm/store/v11
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install:   Virtual store is at:             node_modules/.pnpm
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Progress: resolved 355, reused 272, downloaded 0, added 124
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Progress: resolved 355, reused 272, downloaded 55, added 281
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Progress: resolved 355, reused 272, downloaded 81, added 353
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Progress: resolved 355, reused 272, downloaded 83, added 355, done
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: ✓ Lockfile passes supply-chain policies (450 entries in 4.4s)
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: .../node_modules/ffmpeg-static install$ node install.js
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: .../node_modules/ffmpeg-static install: Done
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: devDependencies:
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + @testing-library/dom 10.4.1
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + @testing-library/react 16.3.2
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + @types/node 22.20.1
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + @types/react 18.3.31
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + @types/react-dom 18.3.7
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + ffmpeg-static 5.3.0
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + jsdom 25.0.1
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + playwright 1.62.1
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + react 18.3.1
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + react-dom 18.3.1
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + tsdown 0.22.14
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + tsx 4.23.5
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + typescript 6.0.3
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: + vitest 3.2.7
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: . prepare$ pnpm prepare:hooks
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: . prepare: $ git config core.hooksPath scripts/git-hooks
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: . prepare: Done
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Done in 1m 20.3s using pnpm v11.20.0
...2358_1ff37eeec9d34188a6079a14a48f244a pnpm-install: Done
Progress: resolved 0, reused 0, downloaded 1, added 0
Packages: +1
+
Progress: resolved 1, reused 0, downloaded 1, added 1, done

dependencies:
+ dsh-web-review 0.3.0-rc.2

Done in 1m 39.4s
dsh: warning: dsh-web-review declares no dsh.bundle — installed as a plain dependency, not a profile layer (a later update that gains one activates it automatically)

```
