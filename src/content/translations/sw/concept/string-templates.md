---
lang: "sw"
type: "concept"
slug: "string-templates"
title: "Violezo vya String"
status: "published"
source_repo: "i18n"
source_path: "locales/sw/curriculum/concepts/string-templates/page.md"
en_md5: "7fd0e09ac3b32db5f159f8e772872104"
governance_sha: "a5ccff6a"
content_version: "ac1d915b36c6"
published_at: "2026-11-28"
---

Tunaweza kutumia kitu kinachoitwa _template literals_ (violezo vya string) kuingiza string ndani ya string nyingine.

Kwa hiyo, badala ya kuongeza string pamoja, tunaweza kuwa na string au kiolezo kilicho na nafasi za string nyingine ndani yake.

Ili kufanya hivi, tunatumia _backticks_ (alama zinazoelekea nyuma) badala ya alama za nukuu.

Kama jina lake linavyosema, backtick ni alama inayoelekea nyuma, lakini inawezekana hujawahi kuitumia kabla, kwa hiyo unahitaji kuipata kitufe sahihi kwenye kibodi yako.

Tunazitumia kuunda kiolezo kinachoweza kuwa na string nyingine ndani yake. Na kisha, ili kuingiza string ndani ya kiolezo, tunatumia msimbo mwingine wa ajabu wenye alama ya dola na mabano yaliyopinda. Kwa mfano, ili kufikia kile kile tulichokiona hivi punde kwa kuunganisha string, yaani `"hello " + name`, tunaweza kuandika:

```javascript
`hello ${name}` // "hello Jeremy" au "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki akiwa ameshika sanduku lenye lebo ya name, thamani inayoingizwa ndani ya kiolezo"
  width="207"
  height="400"
/>

Na hiyo inafanya kitu kile kile kama kuongeza string pamoja.

Lakini unapokuwa na string nyingi zinazohitaji kuunganishwa zote mahali pamoja, hii inaweza kuwa bora zaidi kwa kiasi kikubwa.

Itakuchukua muda kidogo kuizoea sintaksia hii mahususi, lakini hakuna kitu kigumu sana kuhusu hiyo.
