---
lang: "tr"
type: "concept"
slug: "break"
title: "`break` anahtar kelimesi"
status: "published"
source_repo: "i18n"
source_path: "locales/tr/curriculum/concepts/break/page.md"
en_md5: "bd746b6c93016dcb2789bd26e38ab33a"
governance_sha: "a5ccff6a"
content_version: "3280afb70916"
published_at: "2026-11-28"
---

`break` anahtar kelimesi herhangi bir döngünün gövdesinde, herhangi bir yerde kullanılabilir.

Süslü parantezlerin arasında kalan kısım gövdedir. Jiki bunu gördüğünde döngüden hemen çıkar ve döngünün altında ne kod varsa ona geçer.

Diyelim ki bu döngüyü 50 kez çalıştırmamızı söyleyen bir kısıtımız var, ama kullanıcı beş kez ateş ederse durmak istiyoruz. O zaman en üstte 50'ye kadar sayan bir `for` döngüsü koyabiliriz.

Ama sonra döngünün ortasına, kullanıcının beş kez ateş edip etmediğini kontrol eden bir koşul koyabiliriz ve eğer ettiyse, döngüyü durdurmak için `break` (döngüden çıkmak) deyimini kullanırız.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // döngüden çık
  }
}
```
