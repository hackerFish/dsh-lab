# dsh-scholar 安装日志（截断尾部 4000 字符）

```
[0mimport.meta[38;5;249m [0m[38;5;249ma[0m[38;5;249ms[0m[38;5;249m [0m[38;5;249m{[0m[38;5;249m [0m[38;5;249me[0m[38;5;249mn[0m[38;5;249mv[0m[38;5;249m?[0m[38;5;249m:[0m[38;5;249m [0m[38;5;249m{[0m[38;5;249m [0m[38;5;249mD[0m[38;5;249mE[0m[38;5;249mV[0m[38;5;249m?[0m[38;5;249m:[0m[38;5;249m [0m[38;5;249mb[0m[38;5;249mo[0m[38;5;249mo[0m[38;5;249ml[0m[38;5;249me[0m[38;5;249ma[0m[38;5;249mn[0m[38;5;249m;[0m[38;5;249m [0m[38;5;249mM[0m[38;5;249mO[0m[38;5;249mD[0m[38;5;249mE[0m[38;5;249m?[0m[38;5;249m:[0m[38;5;249m [0m[38;5;249ms[0m[38;5;249mt[0m[38;5;249mr[0m[38;5;249mi[0m[38;5;249mn[0m[38;5;249mg[0m[38;5;249m [0m[38;5;249m}[0m[38;5;249m [0m[38;5;249m}[0m[38;5;249m)[0m[38;5;249m.[0m[38;5;249me[0m[38;5;249mn[0m[38;5;249mv[0m
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: packages/dsh-research-ui build:  [38;5;240m    │[0m                ─────┬─────  
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: packages/dsh-research-ui build:  [38;5;240m    │[0m                     ╰─────── This `import.meta` will be replaced with an empty object (`{}`) automatically. If this is desired, you can suppress this warning by adding `transform.define: { 'import.meta': {} }`. If `import.meta` needs to be kept as-is, you need to set the output format to `esm`.
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: packages/dsh-research-ui build: [38;5;246m─────╯[0m
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: packages/dsh-research-ui build: ✔ Build complete in 571ms
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: packages/dsh-research-ui build: research-ui client bundle verified: @dsh-scholar/research-ui -> ./lib/client.js
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: packages/dsh-research-ui build: Done
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: $ tsc -p tsconfig.json && tsc -p tsconfig.client.json && tsdown --config tsdown.client.config.ts
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: ℹ tsdown v0.22.2 powered by rolldown v1.1.5
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: ℹ config file: /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3/tmp/_tmp_82078_885343031bbe0ba1ffb16b4d824b50b1/tsdown.client.config.ts 
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: ℹ entry: src/client/index.tsx
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: ℹ target: es2022
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: ℹ tsconfig: tsconfig.json
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare:  WARN  `external` is deprecated. Use `deps.neverBundle` instead.
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: ℹ Build start
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: ℹ lib/client.js      57.23 kB │ gzip: 13.25 kB
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: ℹ lib/client.js.map  95.68 kB │ gzip: 23.59 kB
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: ℹ 2 files, total: 152.91 kB
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: ✔ Build complete in 80ms
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: . prepare: Done
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: Done in 1m 5.7s using pnpm v11.20.0
...2078_885343031bbe0ba1ffb16b4d824b50b1 pnpm-install: Done
Progress: resolved 0, reused 0, downloaded 1, added 0
 ERR_PNPM_WORKSPACE_PKG_NOT_FOUND  In : "@dsh-scholar/research-client@workspace:^" is in the dependencies but no package named "@dsh-scholar/research-client" is present in the workspace

This error happened while installing the dependencies of @dsh-scholar/research-plugin@0.1.0

Packages found in the workspace: 
dsh: pnpm failed in profile directory /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/dsh-scholar/profiles/web

```
