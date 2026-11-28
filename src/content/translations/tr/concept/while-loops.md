---
lang: "tr"
type: "concept"
slug: "while-loops"
title: "`while` döngülerini anlamak"
status: "published"
source_repo: "i18n"
source_path: "locales/tr/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "a5ccff6a"
content_version: "620475e4214b"
published_at: "2026-11-28"
---

Sırada öğreneceğimiz döngü while döngüsü.

Bu, “Bir koşul doğru olduğu sürece döngüyü çalıştır” demek. Diyelim ki Space Invaders'ta yalnızca beş kez ateş edilebileceğini söyleyen bir kural var. O zaman burada, “ateş sayısı beşten az olduğu sürece, oyunun oynanmasına izin veren bir döngüyü çalıştır” diyen bir döngümüz olur.

```javascript
while (numShots < 5) {
  // uzaylıyı vur
  numShots++
}
```

Her ateş edişte `numShots` değerini bir artırırız ve sonunda beşe ulaşırız, döngü de sona erer.

Şimdi, while döngülerinin bir sorunu var: döngünün hiç bitmemesine yol açan bug'ların ortaya çıkması oldukça kolay.

Bu tür döngülere sonsuz döngü (İngilizce: _infinite loops_) denir ve bunlar programlardaki en yaygın bug'lardan biridir.

Bilgisayarınız yavaşladığında, fanları dönmeye başladığında, her yer gürültüye boğulduğunda, bunun nedeni genellikle birinin kodunda hiç bitmeyen bir sonsuz döngü bırakmış olmasıdır.
