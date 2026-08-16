---
lang: "de"
type: "concept"
slug: "while-loops"
title: "`while`-Schleifen verstehen"
status: "published"
source_repo: "i18n"
source_path: "locales/de/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "22c97e3"
content_version: "cb0c23acf3b4"
published_at: "2026-08-16"
---

Die nächste Schleife, die du kennenlernen solltest, ist die `while`-Schleife (solange).

Sie sagt: „Solange eine Bedingung gilt, führe die Schleife aus.“ Stell dir vor, in Space Invaders gibt es eine Regel, dass du nur fünfmal schießen darfst. Dann hätten wir hier eine Schleife, die sagt: Solange die Anzahl der Schüsse kleiner als fünf ist, führe eine Schleife aus, in der jemand das Spiel spielen kann.

```javascript
while (numShots < 5) {
  // Alien abschießen
  numShots++
}
```

Jedes Mal, wenn jemand schießt, erhöhen wir `numShots` um eins. Irgendwann erreichen wir fünf, und die Schleife endet.

Ein Problem bei `while`-Schleifen ist allerdings, dass sich leicht Bugs einschleichen, durch die die Schleife nie endet. Solche Schleifen heißen Endlosschleifen (_infinite loops_ auf Englisch), und sie gehören zu den häufigsten Bugs in Programmen.

Wenn dein Computer langsam wird, die Lüfter anspringen und alles laut wird, dann liegt das oft daran, dass jemand eine Endlosschleife, die nie endet, in seinem Code gelassen hat.
