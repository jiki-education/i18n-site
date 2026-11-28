---
lang: "sw"
type: "concept"
slug: "properties"
title: "Sifa"
status: "published"
source_repo: "i18n"
source_path: "locales/sw/curriculum/concepts/properties/page.md"
en_md5: "0634cd72388bef118e9dd22131a3c1cd"
governance_sha: "a5ccff6a"
content_version: "fb028250f1bf"
published_at: "2026-11-28"
---

Hadi sasa, tunapofikiria kuhusu string au namba, tumekuwa tukiziona kama vitu visivyobadilika.

Na ingawa ni hivyo, pia zina uwezo mwingi uliojengwa ndani yao ambao Jiki anaweza kutumia.

Kuna aina mbili za uwezo tutakaozungumzia: sifa na metodu.

Sifa ni ukweli tunaoweza kumwomba Jiki atuambie kuhusu vitu. Kwa mfano, string zina sifa inayoitwa `length` (urefu), ambayo Jiki anaweza kutumia kutuambia urefu wa string.

Kwa hivyo, badala ya kutumia kitanzi kupitia herufi zote ili kujua ukubwa wa string, tunaweza kumwomba Jiki atuambie tu.

Na ili kufanya hivi, tunatumia mtindo mpya wa sintaksia: nukta.

Kwa mfano, kama tuna string `"Jeremy"` na tunataka kupata urefu wake, tunaweza kuandika:

```javascript
"Jeremy".length // 6
```

Jiki anapounda string, huhesabu herufi na kuandika tu namba ya herufi hizo kwenye kona.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki akihesabu herufi za string Jeremy na kuandika namba kwenye kona"
  width="359"
  height="400"
/>

Na kisha tunapotumia sifa `length`, Jiki huenda tu kuangalia namba hiyo ilikuwa nini. Kwa hivyo katika mfano wetu wa `"Jeremy".length`, Jiki anapounda string `"Jeremy"`, huhesabu herufi, anaandika namba sita kwenye kona, na kisha tunapoandika `"Jeremy".length`, huenda kuangalia. Kwa hivyo unaweza kufikiria sifa kama ukweli kuhusu kitu hicho.
