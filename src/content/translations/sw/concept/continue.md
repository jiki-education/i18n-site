---
lang: "sw"
type: "concept"
slug: "continue"
title: "Keyword ya `continue`"
status: "published"
source_repo: "i18n"
source_path: "locales/sw/curriculum/concepts/continue/page.md"
en_md5: "6cd21a2f25c493f61d000f865014709d"
governance_sha: "a5ccff6a"
content_version: "5c91fd7a9a35"
published_at: "2026-11-28"
---

Kuna nyakati ambazo tunaweza kutaka kuruka marudio fulani ya kitanzi badala ya kutoka ndani yake kabisa. Fikiria tunataka kufanya mambo kwa namba witiri pekee.

Tunataka kuweza kusema: kama `i` (kihesabu) ni namba witiri, usiendeshe kitanzi wakati huu.

Lakini hatutaki kutoka kabisa kwenye kitanzi. Tunataka tu kuruka marudio haya moja, kisha tuangalie yanayofuata.

Na kwa hili, tuna keyword nyingine inayoitwa `continue`.

Jiki anapoona `continue`, anaruka tu hadi mwanzo wa kitanzi kwa marudio yanayofuata. Kwa hiyo katika kitanzi cha `for-of`, akiona `continue`, anaendelea hadi kipengele kinachofuata katika orodha.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Inaruka sehemu iliyobaki ya kitanzi kwa "something"
  }
  // Sehemu iliyobaki ya kitanzi...
}
```

Katika `for` kitanzi, anapitia hatua ya nyongeza ya `i++` kisha anaanza marudio yanayofuata.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Inaruka sehemu iliyobaki ya kitanzi kwa namba shufwa
  }
  // Sehemu iliyobaki ya kitanzi...
}
```
