---
lang: "sv"
type: "concept"
slug: "logical-or"
title: "Operatorn `||` (eller)"
status: "published"
source_repo: "i18n"
source_path: "locales/sv/curriculum/concepts/logical-or/page.md"
en_md5: "e7bc3f103a37719cdf3a77920d09e24e"
governance_sha: "494ce4b"
content_version: "51ef610541a1"
published_at: "2026-08-10"
---

Vi kan också använda `or`, och tyvärr finns det inte här heller något trevligt or-nyckelord i JavaScript. I stället måste vi skriva de här två lodstrecken (`|`) bredvid varandra, och det betyder eller. Det ser konstigt ut, men det är det egentligen inte. Du vänjer dig.

Vi kan alltså säga att den som är över 20 eller är klädd i discokläder får komma in. Det blir alltså en rolig fest med discoklädda barn och illa klädda vuxna, vilket ju låter rimligt.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki välkomnar en blandning av discoklädda barn och vardagsklädda vuxna genom dörren till en fest"
  width="327"
  height="400"
/>

En sak som brukar ställa till det, både med and och med or, är att varje sida av and/or måste vara en fullständig jämförelse. Även om du jämför samma variabel på båda sidorna måste du alltså upprepa den. Du kan inte skriva `if age is less than 13 or greater than 20`. Du måste skriva `if age is less than 13 or age is greater than 20`. Båda sidorna måste vara fullständiga jämförelser.

```javascript
if (age < 13 || age > 20)
```

Du behöver fundera på när båda villkoren spelar roll och när det räcker att bara ett av dem är sant.
