---
lang: "sw"
type: "concept"
slug: "string-concatenation"
title: "Uunganishaji wa String"
status: "published"
source_repo: "i18n"
source_path: "locales/sw/curriculum/concepts/string-concatenation/page.md"
en_md5: "0e6c7a941a1fb1161445da27a4d7e818"
governance_sha: "a5ccff6a"
content_version: "12672619f455"
published_at: "2026-11-28"
---

Tayari unajua string ni nini. Ni vipande vya karatasi vilivyoandikwa maandishi.

Hadi kufikia hapa, kila string uliyotumia ni ile uliyoandika moja kwa moja. Nini hufanyika ikiwa unataka kuunda string kutokana na variable au masharti? Tunafanyaje hivyo?

Kuna njia mbili.

Ya kwanza inaitwa _string concatenation_ (uunganishaji wa string), ambayo ni njia ya kifahari, na yenye kuchanganya kidogo, ya kusema kuunganisha string mbili pamoja.

Fikiria una maneno mawili, `"hello"` na `"world"` (dunia), na unataka kuunda string iliyo na `"hello world"`.

Unaweza tu kuandika `"hello world"` kama string moja, lakini unaweza pia kuandika `"hello " + "world"`, na hiyo itakupa string ile ile.

Sasa, kwa wazi, hilo halina matumizi makubwa katika hali hii. Lakini vipi ikiwa tuna variable yenye jina la mtu na tunataka kumsalimu?

Kwa hiyo fikiria tuna variable inayoitwa `name` (jina), na wakati mwingine ina `"Jeremy"` (jina Jeremy) na wakati mwingine ina `"Jiki"` (jina Jiki). Tunataka kusema `"hello Jeremy"` au `"hello Jiki"` kwa kutumia variable hiyo.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki akiwa ameshika sanduku lenye lebo ya name, ambalo linaweza kuwa na thamani tofauti"
  width="207"
  height="400"
/>

Sawa, tunaweza kufanikisha hili kwa kutumia uunganishaji huu:

```javascript
"hello " + name // "hello Jeremy" or "hello Jiki"
```

Hiyo itatupatia `"hello Jeremy"` au `"hello Jiki"` au kumsalimu mtu mwingine yeyote, kulingana na kilicho ndani ya sanduku la `name`.
