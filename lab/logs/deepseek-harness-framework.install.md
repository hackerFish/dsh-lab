# deepseek-harness-framework 安装日志（截断尾部 4000 字符）

```
dsh: initialized profile web at /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/deepseek-harness-framework/profiles/web
(node:96024) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilities.
(Use `node --trace-deprecation ...` to show where the warning was created)
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/.pnpm-store/v3
  Virtual store is at:             node_modules/.pnpm
Progress: resolved 0, reused 0, downloaded 1, added 0
Packages: +1
+
Progress: resolved 1, reused 0, downloaded 1, added 0
Progress: resolved 1, reused 0, downloaded 1, added 1
Progress: resolved 1, reused 0, downloaded 1, added 1, done
.../node_modules/@deepseek-ai/dsh-root postinstall$ node scripts/install-lefthook.mjs
.../node_modules/@deepseek-ai/dsh-root postinstall: node:internal/modules/package_json_reader:255
.../node_modules/@deepseek-ai/dsh-root postinstall:   throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);
.../node_modules/@deepseek-ai/dsh-root postinstall:         ^
.../node_modules/@deepseek-ai/dsh-root postinstall: Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'lefthook' imported from /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/deepseek-harness-framework/profiles/web/node_modules/.pnpm/@deepseek-ai+dsh-root@https+++codeload.github.com+deepseek-ai+deepseek-harness+tar.gz+HEAD_62hpgrthnebfsqz2nkmlm3twwi/node_modules/@deepseek-ai/dsh-root/scripts/install-lefthook.mjs
.../node_modules/@deepseek-ai/dsh-root postinstall:     at Object.getPackageJSONURL (node:internal/modules/package_json_reader:255:9)
.../node_modules/@deepseek-ai/dsh-root postinstall:     at packageResolve (node:internal/modules/esm/resolve:767:81)
.../node_modules/@deepseek-ai/dsh-root postinstall:     at moduleResolve (node:internal/modules/esm/resolve:853:18)
.../node_modules/@deepseek-ai/dsh-root postinstall:     at defaultResolve (node:internal/modules/esm/resolve:983:11)
.../node_modules/@deepseek-ai/dsh-root postinstall:     at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:801:12)
.../node_modules/@deepseek-ai/dsh-root postinstall:     at #cachedDefaultResolve (node:internal/modules/esm/loader:725:25)
.../node_modules/@deepseek-ai/dsh-root postinstall:     at ModuleLoader.resolve (node:internal/modules/esm/loader:708:38)
.../node_modules/@deepseek-ai/dsh-root postinstall:     at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:309:38)
.../node_modules/@deepseek-ai/dsh-root postinstall:     at #link (node:internal/modules/esm/module_job:202:49) {
.../node_modules/@deepseek-ai/dsh-root postinstall:   code: 'ERR_MODULE_NOT_FOUND'
.../node_modules/@deepseek-ai/dsh-root postinstall: }
.../node_modules/@deepseek-ai/dsh-root postinstall: Node.js v24.3.0
.../node_modules/@deepseek-ai/dsh-root postinstall: Failed
 ELIFECYCLE  Command failed with exit code 1.
dsh: pnpm failed in profile directory /Users/matiansa/Desktop/ds_hns/cy/dsh-lab/lab-t/deepseek-harness-framework/profiles/web

```
