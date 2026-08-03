---
lang: "sv"
type: "concept"
slug: "building-arrays"
title: "Bygga arrayer"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/building-arrays/source.md"
en_md5: "c3358ca032f965cf058bb72df37ffbd4"
governance_sha: "18055e8"
content_version: "96d2fc294442"
published_at: "2026-08-03"
---

Hittills har du jobbat med arrayer där värdet sätts i början och sedan är fast. Men tänk om du vill lägga till saker i en array efter hand? För det har arrayer en metod som heter `push` (trycka in).

Push har en indata: det du vill fästa längst bak i arrayen. I det här fallet vill vi alltså trycka in ordet `"Isaac"` i slutet av en array som redan innehåller `"DJ"` och `"Bethany"`.

För att göra det tar Jiki ut arrayen ur lådan, fäster `"Isaac"` längst bak i kedjan och lägger sedan tillbaka alltihop i lådan. Lägg märke till att det är annorlunda mot strängar: där skapade Jiki en ny sträng varje gång, men här ändrar han faktiskt själva arrayen.

Ett mönster du kommer att se ofta när du programmerar är att börja med en tom array och bygga upp den efter hand. Tänk dig att vi har en lång lista med namn som vi vill gå igenom. Varje gång vi hittar någon som är mentor lägger vi till den i vår array.

Det här mönstret, att loopa och lägga till, är något du kommer att använda ofta.
