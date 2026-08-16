# 失效条目复测日志（2026-08-16 20:50–20:57）

> **结论：首批 6 个「仓库消失」标记经复测全部存活，原结论判误。** 误判疑似本机 Clash 代理（127.0.0.1:7890）间歇 SSL/连接故障所致。勘误公开于 [../reports/stale-entries.md](../reports/stale-entries.md)，本日志为证据底稿。

## 复测结果总表

| 条目 | 原始标记 | 复测 git ls-remote | GitHub API | 网页 | 判定 |
|---|---|---|---|---|---|
| Meredith2328/dsh-sticky-note | repository not found | ✅ HEAD `ebabb6c` | 200 | 200 | **存活** |
| dingyi222666/dsh-focus-chat | repository not found | ✅ HEAD `e05d2d0`（直连 SSL 报错，关闭校验后成功） | 200 | 200 | **存活** |
| Nagi-ovo/dsh-visualize | API 200 但 clone 404 | ✅ HEAD `dd41b38` | 200（private:false, pushed 2026-08-15） | 200 | **存活** |
| hanzhangzzz/dsh-diagram | API 200 但 clone 404 | ⏳ 代理限速中断 | 200（private:false, pushed 2026-08-15） | 200 | **存活** |
| AKS1st/dsh-sysmon | API 200 但 clone 404 | ⏳ 代理限速中断 | 200（private:false, pushed 2026-08-15） | 200 | **存活** |
| AKS1st/dsh-cyber-particle | API 200 但 clone 404 | ⏳ 代理限速中断 | 200（private:false, pushed 2026-08-16） | 200 | **存活** |

## 原始输出

### Meredith2328/dsh-sticky-note

```
$ git ls-remote https://github.com/Meredith2328/dsh-sticky-note HEAD
ebabb6c746b1495c5f077e440d98b6665d7a61b9	HEAD
$ git -c http.sslVerify=false ls-remote https://github.com/Meredith2328/dsh-sticky-note HEAD
ebabb6c746b1495c5f077e440d98b6665d7a61b9	HEAD
```

### dingyi222666/dsh-focus-chat（完整复现代理故障全过程）

```
$ git ls-remote https://github.com/dingyi222666/dsh-focus-chat HEAD
fatal: unable to access 'https://github.com/dingyi222666/dsh-focus-chat/': SSL: no alternative certificate subject name matches target host name 'github.com'
$ git -c http.sslVerify=false ls-remote https://github.com/dingyi222666/dsh-focus-chat HEAD
e05d2d095471b49ec45612869eb0c9cfafa429ec	HEAD
```

### Nagi-ovo/dsh-visualize

```
$ git ls-remote https://github.com/Nagi-ovo/dsh-visualize HEAD
dd41b388db67f146c928772c6242c0acdb5bbeae	HEAD
```

### 其余 3 条（git 通道被代理限速中断，以 API 定案）

```
$ git -c http.sslVerify=false ls-remote https://github.com/hanzhangzzz/dsh-diagram HEAD
fatal: unable to access '...': Operation too slow. Less than 1 bytes/sec transferred the last 10 seconds
```

```
$ curl -s https://api.github.com/repos/hanzhangzzz/dsh-diagram
  "full_name": "hanzhangzzz/dsh-diagram", "private": false, "pushed_at": "2026-08-15T08:15:09Z"
$ curl -s https://api.github.com/repos/AKS1st/dsh-sysmon
  "full_name": "AKS1st/dsh-sysmon", "private": false, "pushed_at": "2026-08-15T07:32:15Z"
$ curl -s https://api.github.com/repos/AKS1st/dsh-cyber-particle
  "full_name": "AKS1st/dsh-cyber-particle", "private": false, "pushed_at": "2026-08-16T05:31:45Z"
```

## 误判原因分析

- 本机 git 经 Clash 代理访问 GitHub 存在**间歇性**两类故障：`SSL: no alternative certificate subject name matches target host name 'github.com'` 与连接限速中断（`Operation too slow`），二者在本次复测中都被当场复现。
- 初次检查（同日早些时候）极可能撞上了这些故障，把「访问失败」误记成了「仓库不存在」。
- 教训：**失效/失败类结论必须用第二通道（GitHub API）交叉验证后再发布。**
