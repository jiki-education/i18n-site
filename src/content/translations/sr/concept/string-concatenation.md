---
lang: "sr"
type: "concept"
slug: "string-concatenation"
title: "Spajanje stringova"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/string-concatenation/source.md"
en_md5: "0e6c7a941a1fb1161445da27a4d7e818"
governance_sha: "c80036b"
content_version: "78deb7dbcf5c"
published_at: "2026-08-06"
---

Već znaš šta su stringovi. To su komadići papira sa tekstom na njima.

Do sada, svaki string koji si koristio je onaj koji si direktno otkucao. Šta se dešava kada želiš da napraviš string na osnovu promenljivih ili uslova? Kako to da uradimo?

Postoje dva načina.

Prvi se zove spajanje stringova (engl. _string concatenation_), što je otmen i pomalo zbunjujući način da se kaže spajanje dva stringa.

Zamisli da imaš dve reči, `"hello"` (zdravo) i `"world"` (svet), i želiš da napraviš string koji sadrži `"hello world"`.

Mogao bi jednostavno da napišeš `"hello world"` kao jedan string, ali bi takođe mogao da napišeš `"hello " + "world"` i to bi ti dalo isti string.

Naravno, to u ovom slučaju nije baš korisno. Ali šta ako bismo imali promenljivu u kojoj se nalazi nečije ime i želeli da ih pozdravimo?

Zamisli da imamo promenljivu pod nazivom `name` (ime), koja ponekad sadrži `"Jeremy"` (ime Jeremy) a ponekad `"Jiki"` (ime Jiki). Želimo da kažemo `"hello Jeremy"` ili `"hello Jiki"` koristeći tu promenljivu.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki drži kutiju sa natpisom 'ime', koja može da sadrži različite vrednosti"
  width="207"
  height="400"
/>

Pa, to možemo postići koristeći ovaj koncept spajanja:

```javascript
"hello " + name // "hello Jeremy" or "hello Jiki"
```

To će nam dati ili `"hello Jeremy"`, ili `"hello Jiki"`, ili `"hello "` plus neko drugo ime, u zavisnosti od toga šta se nalazi u kutiji `name`.
