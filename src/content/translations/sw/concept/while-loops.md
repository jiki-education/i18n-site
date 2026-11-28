---
lang: "sw"
type: "concept"
slug: "while-loops"
title: "Kuelewa Vitanzi vya `while`"
status: "published"
source_repo: "i18n"
source_path: "locales/sw/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "a5ccff6a"
content_version: "75a85195958d"
published_at: "2026-11-28"
---

Kitanzi kinachofuata kujifunza ni `while` kitanzi (yaani "wakati").

Hii inasema, "Wakati sharti fulani linatimizwa, endesha kitanzi." Kwa hiyo tunaweza kuwa na sheria inayosema unaweza kupiga risasi mara tano tu katika Space Invaders. Hivyo tutakuwa na kitanzi hapa kinachosema, basi, wakati idadi ya risasi ikiwa chini ya tano, endesha kitanzi kinachomruhusu mtu kucheza mchezo.

```javascript
while (numShots < 5) {
  // piga risasi alien
  numShots++
}
```

Kila mtu anapopiga risasi, tunaongeza `numShots` kwa moja, na hatimaye tutafikia tano na kitanzi kitaacha kuendesha.

Sasa, shida moja ya vitanzi vya `while` ni kwamba ni rahisi sana kupata hitilafu zinazosababisha kitanzi kisiishe kamwe. Na hivi huitwa vitanzi visivyo na mwisho (_infinite loops_ kwa Kiingereza), na ni mojawapo ya hitilafu zinazojitokeza mara nyingi zaidi katika programu.

Kompyuta yako inapopungua kasi, mafeni yanaanza kuzunguka, kila kitu kinakuwa na kelele, mara nyingi hiyo ni kwa sababu mtu ameacha kitanzi kisivyo na mwisho ambacho hakiishi kamwe kwenye msimbo wake.
