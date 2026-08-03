---
lang: "sv"
type: "concept"
slug: "break"
title: "Break"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/break/source.md"
en_md5: "30148766de67ae467ab1a4852ad35895"
governance_sha: "18055e8"
content_version: "5d020ebb2a27"
published_at: "2026-08-03"
---

Nyckelordet `break` kan du använda var som helst i kroppen på vilken loop som helst.

Delen mellan klammerparenteserna (`{}`), det är kroppen. Och när Jiki ser ett `break` hoppar han ur loopen direkt och går vidare till koden som står under loopen.

Säg att vi har ett krav som säger att loopen ska köras 50 gånger, men att vi vill stanna om spelaren har skjutit fem gånger. Då kan vi ha en `for`-loop högst upp som räknar upp mot 50.

Men mitt i loopen kan vi ha ett villkor som kollar om spelaren har skjutit fem gånger, och om så är fallet använder vi `break` (avbryt) för att stoppa loopen.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // avbryt loopen
  }
}
```
