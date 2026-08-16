# dsh-cowork 安装日志（截断尾部 4000 字符）

```
21ba6da52b6709f4ac36ed622e4f8b pnpm-install$ pnpm install
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: ! Corepack is about to download https://registry.npmjs.org/pnpm/-/pnpm-11.8.0.tgz
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Scope: all 6 workspace projects
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: ? Verifying lockfile against supply-chain policies (245 entries)...
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Lockfile is up to date, resolution step is skipped
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Progress: resolved 1, reused 0, downloaded 0, added 0
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Packages: +221
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Progress: resolved 221, reused 11, downloaded 0, added 0
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Progress: resolved 221, reused 11, downloaded 35, added 9
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Progress: resolved 221, reused 11, downloaded 111, added 29
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Progress: resolved 221, reused 11, downloaded 202, added 84
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Progress: resolved 221, reused 11, downloaded 208, added 194
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: ✓ Lockfile passes supply-chain policies (245 entries in 5.4s)
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Progress: resolved 221, reused 11, downloaded 208, added 219
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Progress: resolved 221, reused 11, downloaded 210, added 221, done
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: .../.pnpm/koffi@3.1.4/node_modules/koffi install$ node ./cnoke.cjs -P . -D src/koffi --prebuild --release
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: .../.pnpm/koffi@3.1.4/node_modules/koffi install: Done
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: devDependencies:
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: + @types/node 24.13.3
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: + typescript 5.9.3
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare$ pnpm -r build
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: Scope: 5 of 6 workspace projects
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: packages/chatnode-wechat build$ tsc -p tsconfig.json
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: packages/core build$ tsc -p tsconfig.json
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: packages/core build: Done
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: packages/chatnode-wechat build: Done
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: packages/dsh build$ tsc -p tsconfig.json
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: packages/cli build$ tsc -p tsconfig.json
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: packages/mcp build$ tsc -p tsconfig.json
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: packages/cli build: Done
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: packages/dsh build: Done
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: packages/mcp build: Done
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: . prepare: Done
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Done in 14.1s using pnpm v11.8.0
...5236_b321ba6da52b6709f4ac36ed622e4f8b pnpm-install: Done
Progress: resolved 0, reused 0, downloaded 1, added 0
Packages: +1
+
Progress: resolved 1, reused 0, downloaded 1, added 1, done

dependencies:
+ dsh-cowork 0.1.0

Done in 23.5s
dsh: warning: dsh-cowork declares no dsh.bundle — installed as a plain dependency, not a profile layer (a later update that gains one activates it automatically)

```
