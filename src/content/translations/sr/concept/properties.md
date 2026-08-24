---
lang: "sr"
type: "concept"
slug: "properties"
title: "Svojstva"
status: "published"
source_repo: "i18n"
source_path: "locales/sr/curriculum/concepts/properties/page.md"
en_md5: "0634cd72388bef118e9dd22131a3c1cd"
governance_sha: "45861691"
content_version: "01043a2b98f1"
published_at: "2026-08-24"
---

Do sada, kada smo razmišljali o stringovima ili brojevima, mislili smo o njima kao o prilično statičnim stvarima.

I iako jesu, oni takođe imaju puno ugrađene funkcionalnosti koju Džiki može da koristi.

Postoje dve vrste mogućnosti koje ćemo da pogledamo: svojstva i metode.

Svojstva su činjenice koje možemo da tražimo od Džikija da nam kaže o stvarima. Tako, na primer, stringovi imaju svojstvo koje se zove `length` (dužina), pomoću kojeg Džiki može da nam kaže koliko je string dugačak.

Tako da umesto da prolazimo kroz sva slova da bismo saznali koliko je string veliki, možemo jednostavno da pitamo Džikija da nam kaže.

A da bismo to uradili, koristimo novi oblik sintakse, tačku.

Na primer, ako imamo string `"Jeremy"` i želimo da dobijemo njegovu dužinu, možemo da napišemo:

```javascript
"Jeremy".length // 6
```

Kada Džiki kreira string, on prebrojava slova i, onako, upiše broj u ćošku koliko ih ima.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Džiki broji slova stringa Jeremy i upisuje broj u ćošku"
  width="359"
  height="400"
/>

A onda kada koristimo svojstvo `length`, Džiki jednostavno ode i proveri koji je to broj bio. Tako u našem primeru `"Jeremy".length`, kada Džiki kreira string `"Jeremy"`, on prebroji slova, upiše broj šest u ćošku, a zatim kada napišemo `"Jeremy".length`, on ode i proveri ga. Tako da svojstva možeš da zamisliš kao činjenice o toj stvari.
