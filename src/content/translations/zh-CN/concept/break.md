---
lang: "zh-CN"
type: "concept"
slug: "break"
title: "`break`关键字"
status: "published"
source_repo: "i18n"
source_path: "locales/zh-CN/curriculum/concepts/break/page.md"
en_md5: "30148766de67ae467ab1a4852ad35895"
governance_sha: "3d354c0"
content_version: "99a1044ea4b3"
published_at: "2026-08-10"
---

`break` 关键字可以用在任何循环体中的任何位置。

花括号之间的部分就是循环体。当 Jiki 看到 `break` 时，他会立刻退出循环，继续执行循环后面的代码。

所以，如果我们有一个限制条件，要求这个循环运行 50 次，但我们想在用户射击 5 次时停下来，我们可以在顶部写一个计数到 50 的 for 循环。

但接着我们可以在循环中间放一个条件，检查用户是否射击了五次，如果达到了，我们就 `break`（跳出循环）来终止循环。

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // exit the loop
  }
}
```
