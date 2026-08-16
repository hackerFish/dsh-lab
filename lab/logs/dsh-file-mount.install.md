# dsh-file-mount 安装日志（截断尾部 4000 字符）

```
nstall: Done in 23.1s
...2889_00de9bcf40f1b78d222d0f7006b8377f pnpm-install: Done
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack$ pnpm test && pnpm typecheck
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack: > dsh-file-mount@0.5.0 test /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3/tmp/_tmp_82889_00de9bcf40f1b78d222d0f7006b8377f
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack: > vitest run
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  RUN  v4.1.10 /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3/tmp/_tmp_82889_00de9bcf40f1b78d222d0f7006b8377f
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/client/mounted-files.spec.ts (18 tests) 37ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/file-cache.spec.ts (27 tests) 61ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/freshness.spec.ts (18 tests) 16ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/store.spec.ts (12 tests) 14ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/ranges.spec.ts (18 tests) 72ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/render.spec.ts (12 tests) 115ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/compaction.spec.ts (5 tests) 8ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/diff.spec.ts (12 tests) 12ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/adversarial.spec.ts (8 tests) 1100ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:      ✓ file_mount_forget drops the ledger entry and the next read re-sends (item 25)  350ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/tokens.spec.ts (9 tests) 42ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/glob.spec.ts (5 tests) 16ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/paths.spec.ts (3 tests) 83ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/integration.spec.ts (20 tests) 2019ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:      ✓ anchors the first read, dedupes the second, mounts only the missing tail on the third  410ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:      ✓ survives a jsonl persistence round trip (standard user/message carrier)  324ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  ✓ tests/client/view.client.spec.tsx (4 tests) 140ms
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:  Test Files  14 passed (14)
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:       Tests  171 passed (171)
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:    Start at  02:05:44
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack:    Duration  4.62s (transform 2.30s, setup 0ms, import 4.21s, tests 3.74s, environment 3.10s)
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack: > dsh-file-mount@0.5.0 typecheck /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3/tmp/_tmp_82889_00de9bcf40f1b78d222d0f7006b8377f
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack: > tsc --noEmit
...2889_00de9bcf40f1b78d222d0f7006b8377f prepack: Done
Progress: resolved 0, reused 0, downloaded 1, added 0
Progress: resolved 1, reused 0, downloaded 1, added 0
Progress: resolved 13, reused 12, downloaded 1, added 0
Progress: resolved 35, reused 33, downloaded 1, added 0
Progress: resolved 45, reused 44, downloaded 1, added 0
Progress: resolved 86, reused 85, downloaded 1, added 0
Progress: resolved 124, reused 122, downloaded 1, added 0
Progress: resolved 125, reused 124, downloaded 1, added 0
Progress: resolved 126, reused 124, downloaded 1, added 0
Progress: resolved 145, reused 144, downloaded 1, added 0
Progress: resolved 166, reused 165, downloaded 1, added 0
Progress: resolved 173, reused 172, downloaded 1, added 0
Packages: +173
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 173, reused 172, downloaded 1, added 95
Progress: resolved 173, reused 172, downloaded 1, added 169
Progress: resolved 173, reused 172, downloaded 1, added 173, done

dependencies:
+ dsh-file-mount 0.5.0

Done in 55.6s

```
