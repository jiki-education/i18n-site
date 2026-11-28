---
lang: "cs"
type: "concept"
slug: "logical-or"
title: "Operátor `||` (nebo)"
status: "published"
source_repo: "i18n"
source_path: "locales/cs/curriculum/concepts/logical-or/page.md"
en_md5: "e7bc3f103a37719cdf3a77920d09e24e"
governance_sha: "a5ccff6a"
content_version: "0c273e7959d4"
published_at: "2026-11-28"
---

Použít můžeme i `or`, ale v JavaScriptu zase bohužel žádné pěkné klíčové slovo or neexistuje. Místo toho musíme napsat tyhle dvě svislé čáry (anglicky _bars_) hned vedle sebe, a tím říct nebo. Vypadá to divně, ale vůbec divné to není. Zvykneš si.

Můžeme tedy říct, že když je někomu přes dvacet nebo má na sobě diskotékové oblečení, může dovnitř. Takže nás čeká zábavná párty s dětmi v diskotékovém oblečení a dospělými, kteří se oblékli špatně, což zní rozumně.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki vítá ve dveřích na párty směsici dětí v diskotékovém oblečení a dospělých v běžném oblečení"
  width="327"
  height="400"
/>

U and i or platí jedna věc, na které se lidé snadno zaseknou: každá ze stran musí být úplné porovnání. Takže i když na obou stranách porovnáváš stejnou proměnnou, musíš ji zopakovat. Nemůžeš napsat `if age is less than 13 or greater than 20`. Musíš napsat `if age is less than 13 or age is greater than 20`. Obě strany musí být úplná porovnání.

```javascript
if (age < 13 || age > 20)
```

Musíš myslet na to, kdy záleží na obou podmínkách a kdy stačí, aby platila jen jedna z nich.
