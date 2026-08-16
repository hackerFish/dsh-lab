# dsh-explain 安装日志（截断尾部 4000 字符）

```
chemastery 3.18.1
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + @testing-library/dom 10.4.1
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + @testing-library/react 16.3.2
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + @types/node 26.2.0
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + @types/react 18.3.31
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + @types/react-dom 18.3.7
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + esbuild 0.28.2
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + jsdom 29.1.1
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + lightningcss 1.33.0
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + playwright 1.61.1
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + react 18.3.1
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + react-dom 18.3.1
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + tsdown 0.20.3
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + typescript 6.0.3
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: + vitest 3.2.7
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare$ pnpm build
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: $ pnpm clean && pnpm build:host && pnpm build:client
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: $ node scripts/clean.mjs
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: $ tsc -p tsconfig.build.json && node scripts/generate-typert.mjs && tsdown
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: generated TypeRT host and Remote artifacts
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: ℹ tsdown v0.20.3 powered by rolldown v1.0.0-rc.3
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: ℹ config file: /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3/tmp/_tmp_86130_2d33b4298d75aedf3ba7b04b9908fcbd/tsdown.config.ts 
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: ℹ entry: lib/types/index.js
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: ℹ target: es2024
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: ℹ tsconfig: tsconfig.json
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: ℹ Build start
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: ℹ lib/index.js  140.56 kB │ gzip: 31.18 kB
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: ℹ 1 files, total: 140.56 kB
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: ✔ Build complete in 30ms
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: $ node scripts/build-client.mjs
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare:   lib/client.js      626.4kb
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare:   lib/client.js.map    1.1mb
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: ⚡ Done in 56ms
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: . prepare: Done
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: Done in 17.7s using pnpm v11.7.0
...6130_2d33b4298d75aedf3ba7b04b9908fcbd pnpm-install: Done
Progress: resolved 0, reused 0, downloaded 1, added 0
Progress: resolved 1, reused 0, downloaded 1, added 0
Progress: resolved 3, reused 2, downloaded 1, added 0
Progress: resolved 20, reused 17, downloaded 1, added 0
Progress: resolved 23, reused 20, downloaded 3, added 0
Progress: resolved 68, reused 64, downloaded 4, added 0
Progress: resolved 125, reused 120, downloaded 4, added 0
Progress: resolved 155, reused 148, downloaded 7, added 0
Progress: resolved 175, reused 168, downloaded 7, added 0
Packages: +180
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 180, reused 173, downloaded 7, added 18
Progress: resolved 180, reused 173, downloaded 7, added 152
Progress: resolved 180, reused 173, downloaded 7, added 180, done

dependencies:
+ dsh-explain 0.1.0

Done in 35.3s

```
