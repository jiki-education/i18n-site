---
lang: "sv"
type: "concept"
slug: "continue"
title: "Nyckelordet `continue`"
status: "published"
source_repo: "i18n"
source_path: "locales/sv/curriculum/concepts/continue/page.md"
en_md5: "6c3f7483826e27d44d6c404cc9f621dd"
governance_sha: "3d354c0"
content_version: "1b499cd71a22"
published_at: "2026-08-10"
---

Ibland kan vi vilja hoppa över ett visst varv i en loop, i stället för att avbryta den helt. Tänk dig att vi bara vill göra saker för udda tal.

Vi vill kunna säga att om `i` (loopvariabeln) är udda ska loopen inte köras den här gången.

Men vi vill inte hoppa ur loopen helt och hållet. Vi vill bara hoppa över just det här varvet och sedan titta på nästa.

Och för det har vi ännu ett nyckelord: `continue`.

När Jiki ser `continue` hoppar han bara tillbaka till början av loopen, till nästa varv. I en `for-of`-loop går han alltså vidare till nästa element i listan när han ser `continue`.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Hoppar över resten av loopen för "something"
  }
  // Resten av loopen...
}
```

I en `for`-loop kommer han i stället fram till ökningen `i++` och börjar sedan på nästa varv.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Hoppar över resten av loopen för jämna tal
  }
  // Resten av loopen...
}
```
