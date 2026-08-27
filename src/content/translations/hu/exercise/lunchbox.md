---
lang: "hu"
type: "exercise"
slug: "lunchbox"
title: "Uzsonnásdoboz"
status: "published"
source_repo: "i18n"
source_path: "locales/hu/curriculum/exercises/lunchbox"
en_md5: "1b10370bd59c8562e032443bbe98c6b3"
governance_sha: "accabaea"
content_version: "e30afc28ed57"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"A megoldásod túl sok kódsorból áll. Le tudnád rövidíteni?"}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":"Pakold be az uzsonnásdobozt"},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a rucksack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the rucksack.","target":"Oszd szét az elemeket egy uzsonnásdoboz és egy hátizsák között: pakolj be minél többet az uzsonnásdobozba anélkül, hogy túllépnéd a befogadóképességét, és minden mást tegyél a hátizsákba."},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":"Oldd meg 16 sorban"},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":"Meg tudod oldani ezt a feladatot mindössze 16 sorban?"}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":"Minden belefér"},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the rucksack stays empty.","target":"Egy tágas uzsonnásdoboz, amelybe minden elem belefér, így a hátizsák üres marad."},{"key":"packTheMost.name","english":"Fit the most","target":"Minél több fér be"},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the rucksack.","target":"Szűkös a hely, ezért a kisebb elemek az uzsonnásdobozba kerülnek, a nagyobbak pedig a hátizsákba kerülnek."},{"key":"justTheSnack.name","english":"Just the snack","target":"Csak a nasi"},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the rucksack.","target":"Csak a legeslegkisebb elem fér be, a többi a hátizsákba kerül."},{"key":"nothingFits.name","english":"Nothing fits","target":"Semmi sem fér be"},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the rucksack.","target":"Még a legkisebb elem is túl nagy, ezért minden a hátizsákban köt ki."},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":"Üres uzsonnásdoboz"},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the rucksack come back empty.","target":"Egyáltalán nincsenek elemek, ezért mind az uzsonnásdoboz, mind a hátizsák üresen tér vissza."},{"key":"bonus1.name","english":"16 lines of code","target":"16 sor kód"},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":"Oldd meg a feladatot mindössze 16 sor kóddal."}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":"Hogyan kapom meg az egyes elemek nevét és méretét?"},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":"Minden elem egy pár. Az első rész a név, a második a méret, ezért egyenként ki tudod olvasni őket az elemből."},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":"Hogyan tudom bepakolni a lehető legtöbb elemet?"},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":"Gondold át, mely elemeket érdemes először hozzáadni. A kisebb elemek több helyet hagynak a többinek, ezért érdemes előbb a kisebbekkel foglalkozni, mint a nagyobbakkal."},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":"Az elemek a legnagyobbtól a legkisebbig vannak felsorolva. Hogyan menjek végig rajtuk a legkisebbtől a legnagyobbig?"},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":"Van egy tömbmetódus, ami visszaadja a tömb megfordított másolatát. Először fordítsd meg az elemeket, aztán dolgozd fel őket ebben az új sorrendben."},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":"Hogyan tudom eldönteni, hogy melyik elem hova kerül?"},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the rucksack.","target":"Tartsd számon a már hozzáadott méretek összegét. Mielőtt hozzáadsz egy elemet, nézd meg, hogy az összeg és az elem mérete együtt még belefér-e a befogadóképességbe. Ha igen, az elem az uzsonnásdobozba kerül, ha nem, akkor a hátizsákba."}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":"Visszaadja a tömb másolatát az elemekkel fordított sorrendben, anélkül, hogy az eredeti tömböt megváltoztatná."},{"key":"toReversed.category","english":"Arrays","target":"Tömbök"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Hozzáad egy elemet a tömb végéhez, és megváltoztatja az eredeti tömböt."},{"key":"push.category","english":"Arrays","target":"Tömbök"}]}]}]
---

Gyerekkoromban minden nap bepakoltam az uzsonnásdobozomat az iskolába. Édesanyám kikészítette nekem az elemeket (szépen elrendezve a legnagyobbtól a legkisebbig), én pedig megpróbáltam minél többet bepakolni az uzsonnásdobozba. A doboz persze csak korlátozott mennyiséget tudott befogadni. Ami nem fért bele, azt a hátizsákomba kellett tennem, és egész nap magammal cipelnem, ahelyett hogy a szekrényemben hagytam volna.

Ebben a feladatban az a dolgod, hogy olyan algoritmust készíts, amely kiszámolja, mi fér be az uzsonnásdobozba, és mit kell a hátizsákba tennem.

A feladatod, hogy írj egy `packLunch(items, capacity)` (csomagold be az uzsonnát) nevű függvényt, amely két bemenetet kap: az elemek tömbjét (a legnagyobb az első), és az uzsonnásdoboz méretét, a `capacity` (befogadóképesség) nevű számot.

Az elemek tömbje egymásba ágyazott tömb, vagyis minden elem maga is egy kételemű tömb, amely az elem nevét és a méretét tartalmazza. Az elemek mindig a legnagyobbtól a legkisebbig vannak rendezve. Az elemek tömbje például így nézhet ki:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

Az uzsonnásdoboznak van egy maximális befogadóképessége. Azt kell kiszámolnod, hogy mely elemek férnek be az uzsonnásdobozba. Pakolj be a lehető legtöbb elemet. Minden más a hátizsákba kerüljön.

A függvénynek egy kételemű tömböt kell visszaadnia. Az első elem az uzsonnásdobozba kerülő elemek tömbje, a második pedig a hátizsákba kerülő elemeké. Mindkét tömböt a legkisebbtől a legnagyobbig kell rendezni.

A fenti tömbbel és 20-as befogadóképességgel például ezt kellene visszaadnod:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Segítő metódusok

Ahogy ebben a szakaszban az összes feladatnál, a tömbjeid felépítéséhez érdemes a `.push(element)` metódust használnod.

Van egy új metódusod is, a `[...].toReversed()`, amely a tömb másolatát készíti el úgy, hogy minden elem fordított sorrendben szerepel. Például:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Nem kötelező használnod, de jól jöhet.

Jó szórakozást!
