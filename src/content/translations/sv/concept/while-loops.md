---
lang: "sv"
type: "concept"
slug: "while-loops"
title: "While-loopar"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/while-loops/source.md"
en_md5: "daef89c6551b1d1cbc0e58668fd368bc"
governance_sha: "471034c"
content_version: "a5b4a9562317"
published_at: "2026-08-03"
---

Nästa loop du ska lära dig om är en `while`-loop (så länge).

Den säger: ”Så länge ett villkor är sant, kör loopen.” Vi kanske till exempel har en regel som säger att du bara får skjuta fem gånger i Space Invaders. Då skulle vi ha en loop här som säger: så länge antalet skott är mindre än fem, kör en loop som låter någon spela spelet.

```javascript
while (numShots < 5) {
  // skjut en alien
  numShots++
}
```

Varje gång någon skjuter ökar vi `numShots` med ett, och till slut når vi fem och loopen avslutas.

Ett problem med `while`-loopar är dock att det är ganska lätt att råka skapa buggar som gör att loopen aldrig tar slut. De kallas oändliga loopar (_infinite loops_ på engelska), och de är en av de vanligaste buggarna i program.

När din dator blir seg, fläktarna börjar snurra och allt låter högt, då beror det ofta på att någon har lämnat kvar en oändlig loop som aldrig tar slut i sin kod.
