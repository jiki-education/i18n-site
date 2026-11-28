---
lang: "tr"
type: "concept"
slug: "continue"
title: "`continue` anahtar kelimesi"
status: "published"
source_repo: "i18n"
source_path: "locales/tr/curriculum/concepts/continue/page.md"
en_md5: "6cd21a2f25c493f61d000f865014709d"
governance_sha: "a5ccff6a"
content_version: "4c4e6010ceac"
published_at: "2026-11-28"
---

Bazen bir döngüden tamamen çıkmak yerine yalnızca belirli bir yinelemeyi atlamak isteyebiliriz. Diyelim ki sadece tek sayılar için bir şeyler yapmak istiyoruz.

`i` tek sayıysa bu sefer döngüyü çalıştırmayalım, diyebilmek isteriz.

Ama döngüden tamamen çıkmak istemeyiz. Yalnızca bu tek yinelemeyi atlayıp sonra bir sonrakine bakmak isteriz.

Bunun için de `continue` adında başka bir anahtar kelimemiz var.

Jiki `continue` gördüğünde, bir sonraki yineleme için doğrudan döngünün başına döner. Yani bir `for-of` döngüsünde `continue` görürse, dizideki bir sonraki öğeye geçer.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // "something" için döngünün kalanını atlar
  }
  // Döngünün kalanı...
}
```

Bir `for` döngüsünde ise `i++` artırımına uğrar ve ardından bir sonraki yinelemeye başlar.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Çift sayılar için döngünün kalanını atlar
  }
  // Döngünün kalanı...
}
```
