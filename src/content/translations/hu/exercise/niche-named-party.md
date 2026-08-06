---
lang: "hu"
type: "exercise"
slug: "niche-named-party"
title: "Exkluzív névparti"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "c80036b"
content_version: "68fe8e70ce17"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"Ellenőrizd a nevet"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"Írj egy `handleGuest` függvényt, amely ellenőrzi, hogy a személy neve a mai esti partihoz engedélyezett betűkkel kezdődik-e. Ha igen, adj vissza `true`-t, ha nem, akkor `false`-t."},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"Oldd meg 20 sorban"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"Bónusz: ha a hosszszámolást kiszervezed egy segédfüggvénybe, amit a `handleGuest` újrahasznál, a teljes megoldás belefér 20 sorba. Meg tudod csinálni?"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"S-parti: Sarah érkezik"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"Ma este csak az „S” betűvel kezdődő nevek engedélyezettek. Sarah bejuthat!"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"S-parti: Brad érkezik"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"Ma este csak az „S” betűvel kezdődő nevek engedélyezettek. Bradet el kell küldeni."},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"Brad-parti: Bradley érkezik"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"Ma este csak a „Brad” előtaggal kezdődő nevek engedélyezettek. Bradley bejuthat!"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"Bradley-parti: Brad érkezik"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"Ma este csak a „Bradley” előtaggal kezdődő nevek engedélyezettek. Brad neve túl rövid, így nem léphet be."},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"Brad-parti: Brian érkezik"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"Ma este csak a „Brad” előtaggal kezdődő nevek engedélyezettek. Brient el kell küldeni."},{"key":"silence.name","english":"S Party: Silence...","target":"S-parti: Csend…"},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"A személy nem mondja meg a nevét. Egy üres név nem kezdődhet semmivel. Küldd el!"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"Cher-parti: Cher érkezik"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"Ma este csak a „Cher” előtaggal kezdődő nevek engedélyezettek. Cher neve pontosan „Cher”, engedd be!"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"Tight and tidy"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"The complete solution fits in 20 lines when the length-counting lives in its own helper function."}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Almost! See if you can solve it in fewer lines by leaning on a helper function instead of repeating the length-counting loop."}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"Hogyan ellenőrizhetem, hogy egy név bizonyos betűkkel kezdődik-e?"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"Hasonlítsd össze az engedélyezett előtag minden karakterét a név ugyanazon a pozícióján lévő karakterével. Ha bármelyik karakter eltér, a név nem egyezik."},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"Hogyan nézhetem meg a karaktereket egyenként?"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"Használj string iterációt, hogy végiglépj egy stringen."},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"Hogyan találom meg a másik szóban a megfelelő betűt?"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"Használj string indexelést, hogy elérj egy adott betűt."},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"Mi van, ha az engedélyezett előtag hosszabb a névnél?"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"Az a személy nem egyezhet, ezért `false`-t kell visszaadnod."}]}]}]
---

A mai esti parti nagyon exkluzív – csak azok mehetnek be, akiknek a neve egy megadott betűsorral kezdődik!

A te dolgod, hogy írj egy `handleGuest` (vendég kezelése) nevű függvényt, amely két bemenetet fogad:

- `name` – az ajtóban álló személy neve
- `allowedPrefix` – a mai esti partihoz szükséges kezdőbetűk

A függvény `true` értéket adjon vissza, ha a személy beléphet, és `false`-t, ha el kell küldeni.

Például:

- Ha a mai esti előtag `"S"`, akkor Sarah bejut (`true`-t ad vissza), Brad viszont nem (`false`-t ad vissza).
- Ha az előtag `"Brad"`, akkor Brad és Bradley bejut, Brian viszont nem.

### Segédfüggvények

Ahogy haladsz ezzel a feladattal, szükséged lesz rá, hogy meghatározd a vendég nevének hosszát, és az előtag hosszát is. Ez a tökéletes alkalom, hogy létrehozz egy `getLength(someString)` nevű segédfüggvényt, amely megszámolja, hány betűből áll a string. Ezt a függvényt aztán a `handleGuest(...)`-en belül több helyen is felhasználhatod.

A bónusz forgatókönyv kihívása, hogy oldd meg a feladatot a lehető legkevesebb sorban. Találhatsz más megoldásokat is, amik több sort használnak, és ez teljesen rendben van (bátorítunk is, hogy fedezz fel különböző megközelítéseket), de próbáld meg megtalálni a legrövidebb verziót is.

Jó szórakozást!
