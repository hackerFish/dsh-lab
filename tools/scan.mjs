#!/usr/bin/env node
// dsh-lab 关 3「安全快检」扫描器（零依赖）
// 用法: node tools/scan.mjs <目录> [--max-lines N]
// 输出: 按类别列出命中文件与行号；退出码 0=扫描完成（命中与否不影响退出码，这是线索不是判决）。

import { readdir, stat, readFile } from 'node:fs/promises'
import { join, extname, relative } from 'node:path'

const PATTERNS = {
  '网络出口': [/fetch\s*\(/i, /http\.request/i, /https\.request/i, /\baxios\b/i, /node-fetch/i, /\bWebSocket\b/i, /net\.connect/i],
  '子进程': [/child_process/i, /execSync/i, /spawnSync/i, /\bspawn\s*\(/i, /(?<!\.)\bexec\s*\(/i, /node-pty/i],
  '动态执行': [/\beval\s*\(/i, /new\s+Function/i, /vm\.runIn/i],
  '文件写入/删除': [/writeFile/i, /appendFile/i, /createWriteStream/i, /rmSync/i, /\bunlink/i, /renameSync/i],
  '凭证读取': [/DEEPSEEK_API_KEY/i, /~\/\.dsh/i, /\bcredentials\b/i, /\.env['"`]/i],
  '原生模块': [/\.node['"`]/, /\bffi\b/i, /\baddon\b/i],
  '安装钩子': [/["']postinstall["']/, /["']preinstall["']/, /["']prepare["']/],
  '混淆线索': [/Buffer\.from\([^,]+,\s*['"]base64/i, /\batob\s*\(/i],
}

const MAX_LINE_LEN = 800
const SKIP_DIRS = new Set(['.git', 'node_modules', 'assets', 'images', 'img'])
const SKIP_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.svg', '.map', '.lock', '.sum'])

async function walk(dir, out = []) {
  let entries
  try { entries = await readdir(dir) } catch { return out }
  for (const name of entries) {
    const full = join(dir, name)
    let st
    try { st = await stat(full) } catch { continue }
    if (st.isDirectory()) {
      if (!SKIP_DIRS.has(name)) await walk(full, out)
    } else if (st.isFile() && !SKIP_EXTS.has(extname(name).toLowerCase()) && st.size < 2_000_000) {
      out.push(full)
    }
  }
  return out
}

const root = process.argv[2]
if (!root) { console.error('用法: node tools/scan.mjs <目录>'); process.exit(2) }

const files = await walk(root)
const hits = {}
let scanned = 0

for (const file of files) {
  let text
  try { text = await readFile(file, 'utf8') } catch { continue }
  scanned++
  const lines = text.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.length > MAX_LINE_LEN) {
      (hits['混淆线索'] ??= []).push(`${relative(process.cwd(), file)}:${i + 1} [超长行 ${line.length} 字符]`)
    }
    for (const [cat, pats] of Object.entries(PATTERNS)) {
      for (const p of pats) {
        if (p.test(line)) {
          (hits[cat] ??= []).push(`${relative(process.cwd(), file)}:${i + 1}`)
          break
        }
      }
    }
  }
}

console.log(`# 扫描完成: ${root}`)
console.log(`扫描文件数: ${scanned}`)
console.log('')
if (Object.keys(hits).length === 0) {
  console.log('未命中任何模式。')
} else {
  for (const [cat, list] of Object.entries(hits)) {
    console.log(`## ${cat} (${new Set(list).size} 处)`)
    for (const h of [...new Set(list)].slice(0, 20)) console.log(`  - ${h}`)
    if (new Set(list).size > 20) console.log(`  ... 其余 ${new Set(list).size - 20} 处省略`)
    console.log('')
  }
}
console.log('提醒: 命中 ≠ 恶意，未命中 ≠ 无害。本扫描是线索，不是判决。')
