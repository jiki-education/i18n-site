---
lang: "hu"
type: "exercise"
slug: "dnd-roll"
title: "D&D dobás"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "c80036b"
content_version: "4285a761a393"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"Sajnálom, Jikinek nincs kéznél {{sides}} oldalú dobókockája!"},{"key":"announceNumber","english":"You can only announce a number","target":"Csak számot jelenthetsz be"},{"key":"attackNumber","english":"Attack must be a number","target":"A támadásnak számnak kell lennie"},{"key":"damageNumber","english":"Damage must be a number","target":"A sebzésnek számnak kell lennie"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"feldobott egy kockát, és ${return} lett az eredmény"},{"key":"announce","english":"announced ${arg1}","target":"bejelentette ezt az értéket: ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"lecsapott a koboldra ${arg1} támadással és ${arg2} sebzéssel"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"3 bejelentést vártunk, de {{got}} érkezett. Ügyelj arra, hogy minden dobást bejelents."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"Az első bejelentés {{attack}} (a támadó dobás) kellett volna legyen, de {{got}} lett."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"A második bejelentés {{damage}} (az alap sebzés dobás) kellett volna legyen, de {{got}} lett."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"A harmadik bejelentés {{bonus}} (a bónusz dobás) kellett volna legyen, de {{got}} lett."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"Nem csaptál le a koboldra. Ügyelj arra, hogy meghívd a <code>strike()</code> függvényt."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"A támadás {{attack}} kellett volna legyen, de {{got}} lett. Add át a támadó dobást a <code>strike()</code> függvénynek."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"Az összes sebzés {{totalDamage}} ({{damage}} + {{bonus}}) kellett volna legyen, de {{got}} lett. Add össze az alap sebzést és a bónuszt."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"Dobj a kockákkal és csapj le a koboldra"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"Dobj három kockával (d20 a támadáshoz, d12 az alap sebzéshez, d10 a bónuszhoz), jelentsd be minden dobást, majd csapj le a koboldra a támadó dobásoddal és az összes sebzéssel (alap + bónusz)."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"Dobás és csapás"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"Dobj d20-szal a támadáshoz, d12-vel az alap sebzéshez, d10-zel a bónuszhoz. Csapj le a koboldra a támadásoddal és az összes sebzéssel."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"Hogyan válasszam ki, milyen típusú kockát használjak?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"Egy 20 oldalú kockához használd a 20-at a roll bemeneteként - pl. `roll(20)`. Egy 12 oldalú kockához hívd meg a `roll(12)`-t."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"Feldob egy adott oldalszámú kockát, és **visszaadja** az eredményt."},{"key":"roll.category","english":"Dice","target":"Kocka"},{"key":"announce.description","english":"Announces a dice roll value.","target":"Bejelent egy kockadobás értéket."},{"key":"announce.category","english":"Action","target":"Művelet"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"Lecsap a koboldra a megadott támadó dobással és összes sebzéssel."},{"key":"strike.category","english":"Action","target":"Művelet"}]}]}]
---

Egy botot készítesz, amelyik Dungeons and Dragonst (DnD) tud játszani. Ha nem ismered a DnD-t, az alapötlet az, hogy sok különböző helyzettel találkozol, és kockákkal dobsz, hogy kiderüljön, mi történik. Sokféle kocka van, különböző oldalszámmal (nem csak a hatoldalú kocka, amit megszokhattál)!

Az egyik helyzet, amit kezelned kell, egy kobolddal való találkozás. Ahhoz, hogy megtámadd a koboldot, a következőket kell tenned:

- Készíts egy **támadási pontszámot** egy 20 oldalú kocka feldobásával.
- Készíts egy **alap sebzési pontszámot** egy 12 oldalú kocka feldobásával.
- Készíts egy **bónusz sebzési pontszámot** egy 10 oldalú kocka feldobásával.
- Add össze az alap sebzést és a bónusz sebzést, hogy megkapd az **összes sebzést**.
- Csapj le a koboldra a támadó dobásoddal és az összes sebzéssel.

Minden kockadobás után be kell jelentened a dobott számot a többi játékosnak, akikkel játszol. Ha úgy próbálsz lecsapni, hogy nem jelented be a számokat, azt hihetik, hogy csalsz!

Három függvényt használhatsz:

- A `roll(sides)` (adott oldalszámú kockát dob) feldob egy adott oldalszámú kockát. Ez a függvény visszaadja (`returns` angolul) az eredményt.
- Az `announce(value)` (bejelent) bejelent egy kockadobást.
- A `strike(attack, damage)` (lecsap) lecsap a koboldra a támadó dobásoddal és az összes sebzéssel.

**Fontos:** Minden alkalommal, amikor meghívod a `roll()`-t, Jiki feldob egy kockát, és más számot kap. Ne várd, hogy ugyanazt a kockát kétszer feldobva mindig ugyanaz a szám jön ki.
