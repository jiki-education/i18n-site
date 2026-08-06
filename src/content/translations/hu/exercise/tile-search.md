---
lang: "hu"
type: "exercise"
slug: "tile-search"
title: "Csempekeresés"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "c80036b"
content_version: "04b94dbe85ce"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"A megoldásod túl sok kódsorból áll. Le tudod rövidíteni?"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"Csempe keresése"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"Írj egy függvényt, ami ellenőrzi, hogy egy adott betűcsempe benne van-e a készletben. True-t adj vissza, ha megtalálta, false-t, ha nem."},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"Oldd meg 8 kódsorban"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"Meg tudod oldani ezt a feladatot mindössze 8 kódsorban?"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"Betű az elején"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"A betű az első csempe a készletben."},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"Betű középen"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"A betű a készlet közepén van."},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"Betű a végén"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"A betű az utolsó csempe a készletben."},{"key":"letterNotFound.name","english":"Letter not found","target":"Nincs meg a betű"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"A betű nincs benne a készletben."},{"key":"emptyRack.name","english":"Empty rack","target":"Üres készlet"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"Egy üres készletben nincsenek megtalálható csempék."},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"Duplikált csempék"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"A betű ismétlődő csempék között jelenik meg."},{"key":"singleTileFound.name","english":"Single tile found","target":"Egyetlen csempe megtalálható"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"Egy készlet egyetlen csempével, ami egyezik."},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"Egyetlen csempe nem egyezik"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"Egy készlet egyetlen csempével, ami nem egyezik."},{"key":"bonus1.name","english":"8 lines of code","target":"8 kódsor"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"Oldd meg a feladatot mindössze 8 kódsorban."}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"Hogy csinálnám ezt kézzel?"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"Betűnként végigmennél a szénakazalon, és minden betűt összehasonlítanál a tűvel. Amint találsz egyezést, megállsz. Ha a végére érsz anélkül, hogy egyezést találtál volna, a tű nincs ott."},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"Hogyan csináljak ciklust és hasonlítsak össze?"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"Egy for-of ciklus sorban megadja a string minden betűjét. A cikluson belül egy if-utasítás összehasonlítja az aktuális betűt a tűvel."},{"key":"returnTrue.question","english":"When should I return true?","target":"Mikor adjak vissza true-t?"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"Amint találsz egyezést. Nincs értelme tovább ellenőrizni a hátralévő betűket."},{"key":"returnFalse.question","english":"When should I return false?","target":"Mikor adjak vissza false-t?"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"CSAK akkor adj vissza false-t, ha a ciklus már befejeződött, és nem találtál egyezést. Gyakori hiba, hogy a `return false`-t a cikluson belülre írod. Ez már az első nem egyező betűnél feladja, mielőtt a többit ellenőrizted volna."}]}]}]
---

Egy Scrabble-botot építesz. Mielőtt a bot megpróbál kirakni egy szót, ellenőriznie kell, hogy van-e egy adott betűcsempe a készletében.

A készlet egy betűkből álló stringként van ábrázolva (pl. `"SCRAB"`).

Írj egy `contains` (tartalmaz) nevű függvényt, amely két bemenetet kap:

- `haystack` (szénakazal): a csempekészlet, stringként
- `needle` (tű): a keresendő betű

Add vissza `true`-t, ha a betű benne van a készletben, különben `false`-t.

Példák:

- `contains("SCRAB", "A")` `true`-t ad vissza
- `contains("SCRAB", "Z")` `false`-t ad vissza
- `contains("", "A")` `false`-t ad vissza
