---
lang: "hu"
type: "exercise"
slug: "formal-dinner"
title: "Hivatalos vacsora"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/formal-dinner"
en_md5: "8d6a2f3dd90b3a487a6bf855f31ef025"
governance_sha: "c80036b"
content_version: "5e65ec761a29"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Keresd meg a vendég asztalát"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `No table found` if they aren't on the seating plan."},{"key":"solveTightly.name","english":"Solve it tightly","target":"Oldd meg röviden"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"Bónusz: ezt sokkal tömörebben is meg lehet írni, mint gondolnád. Sikerül az egész megoldást néhány sorban megírnod?"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Üres ülésrend"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Senki sem ül sehol, ha az ülésrend üres."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Bradet elutasítják"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"A név nincs rajta az ülésrenden."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Bradet az asztalához kísérik"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt rajta van az ülésrenden, így Mr Pitt megkapja az asztalát."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"A birodalom lovagja"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Eltérő megszólítás, és egy vendég, aki nem az első az ülésrenden."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Mr Bond, gondolom"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond rajta van az ülésrenden."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Hmmm... Mr Bond, gondolom"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"Csak Jason Bourne van rajta az ülésrenden, James Bond nem."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Nem egészen Mr Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Sem Ada Spitt, sem Hugo Ross-Pitt nem Mr Pitt, így itt nincs helye."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"És egy báró?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Báró Lloyd Webber vezetékneve két szóból áll."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Mark a báró?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Egy másik Webber nem számít, a teljes vezetéknévnek egyeznie kell."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"Tömören: Lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time your solution has to fit into a much smaller number of lines.","target":"Ugyanaz az ülésrend, mint korábban, de ezúttal a megoldásodnak sokkal kevesebb sorba kell beleférnie."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"Hogyan viszonyul egymáshoz a két lista?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"Egy párt alkotnak. Az első vendég az első asztalhoz ül, a második vendég a második asztalhoz, és így tovább. Tehát nem elég tudni, *hogy* egy vendég rajta van az ülésrenden, azt is tudnod kell, hogy *hol* van rajta."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"A vendég azt mondja, „Mr Pitt”, de az ülésrenden „Brad Pitt” szerepel. Hogyan hasonlítsam össze ezeket?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Ez a két string soha nem lesz egyenlő, tehát egy egyszerű összehasonlítás nem vezet sehova. Gondold át, hogy a vendég által bemondottak melyik része szerepel ténylegesen az ülésrenden, és a bejegyzés melyik részében várnád, hogy megtaláld."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"Előfordulhat, hogy egy vezetéknév rossz vendégre illik?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Igen, nagyon is előfordulhat. Olvasd fel hangosan, hogy „Ada Spitt” és „Hugo Ross-Pitt”, aztán gondolj Mr Pittre. Kérdezd meg magadtól, hogy mitől lesz egy vezetéknév *igazi* vezetéknév azon a soron, és nem csak néhány betű, ami véletlenül a végén szerepel."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"Mit adjak vissza, ha senki sem egyezik?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"The string `No table found`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Ne add fel! Próbáld megoldani kevesebb sorban!"}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"A lista elemeinek száma – ugyanaz a length tulajdonság, amit stringeknél már használtál (a feladat stdlib-je biztosítja)."},{"key":"length.category","english":"List Operations","target":"Listaműveletek"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"Feldarabol egy stringet részek listájára, minden elválasztónál elvágva (a feladat stdlib-je biztosítja)."},{"key":"split.category","english":"String Operations","target":"Stringműveletek"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"Új listát készít egy lista egy részéből, egy adott pozíciótól kezdve (a feladat stdlib-je biztosítja)."},{"key":"slice.category","english":"List Operations","target":"Listaműveletek"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"Összefűzi egy lista elemeit egyetlen stringgé, és az elemek közé egy elválasztót tesz (a feladat stdlib-je biztosítja)."},{"key":"join.category","english":"List Operations","target":"Listaműveletek"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"Ellenőrzi, hogy egy string egy másik stringgel végződik-e (a feladat stdlib-je biztosítja)."},{"key":"endsWith.category","english":"String Operations","target":"Stringműveletek"}]}]}]
---

Visszatértél a kidobói mellékállásodba. Az After Party utáni este van, és máris itt a következő összejövetel. Ezúttal egy hivatalos vacsora, úgyhogy ma este kevésbé vagy „ajtóban álló izomember”, mint inkább „egy dossziés, elegáns mellényes személy”.

Itt semmiképp sem elég **csak** a keresztneved használni. Igazából egyáltalán nem itt a helye a keresztnévnek. Itt mindenki megszólítást (_honorific_ angolul) és a vezetéknevét használja (pl. Miss, Mr, Dr stb.).

A szervezők két listában adták át az ülésrendet. Az egyiken a vendégek teljes nevei vannak. A másikon annak az asztalnak a neve, ahol minden vendég ül (minden asztalt fáról vagy virágról neveztek el). Az After Partyhoz hasonlóan a két lista párhuzamos: az első lista 3. helyén álló vendég a második lista 3. helyén lévő asztalnál foglal helyet.

Amikor tehát Mr Pitt beviharzik, ki kell találnod, hogy ő a listádon szereplő „Brad Pitt”, és meg kell mondanod neki, melyik asztalnál ül.

Írj egy `tableFor` (megkeresi, hogy egy vendég melyik asztalnál ül) nevű függvényt. A függvény három bemenetet kap:

- Az első a vendégek teljes neveinek listája, stringek formájában
- A második az asztalnevek listája, ugyanabban a sorrendben, mint a vendégek
- A harmadik pedig az érkező vendég, megszólítással és vezetéknévvel formázva (pl. „Mr Pitt”)

Add vissza annak az asztalnak a nevét, ahol a vendég ül. Ha egyáltalán nincs rajta az ülésrenden, akkor a `"No table found"` stringet add vissza (nincs itt helye mázlistáknak!).

A megszólítás mindig pontosan egy szó, és ami utána következik, az a vendég vezetékneve. A legtöbb vezetéknév egy szóból áll, de néhány előkelőbb név két szóra nyúlik.

De vigyázz, mert rengeteg vezetéknév nagyon hasonlít más vezetéknevekre.

### String/Array metódusok és tulajdonságok

Az előző feladatban megismert `.length` tulajdonság mellett négy olyan metódus is létezik, amelyek hasznosak lehetnek. Sokféleképpen megoldhatod a feladatot, de ezek segítségével juthatsz el a legrövidebb megoldáshoz.

`"...".split(részstring)` egy stringet darabol fel egy másik string mentén. Például:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` egy tömb egy részét fogja meg, a `start` indextől kezdve a tömb végéig. A kimetszett elemek egy **új** tömbbe kerülnek, amit visszakapsz. Tulajdonképpen eldobja az első `start` elemet. Például:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` egy tömb elemeit összefűzi a megadott stringgel. Például:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` megmondja, hogy egy string egy másik stringgel végződik-e. Például:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
