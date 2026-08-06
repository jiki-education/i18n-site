---
lang: "hu"
type: "exercise"
slug: "hamming"
title: "Hamming"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "c80036b"
content_version: "bbbdf3b6eec7"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"Több sort írtál, mint kellene – próbáld meg lerövidíteni!"}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"Számítsd ki a Hamming-távolságot"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"Írj egy függvényt, ami kiszámítja két azonos hosszúságú DNS-szál Hamming-távolságát. A Hamming-távolság azon pozíciók száma, ahol a megfelelő karakterek eltérnek."},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"Oldd meg tizenegy sorban"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"Meg tudod oldani legfeljebb tizenegy kódsorral?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"Üres DNS-szálak"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"Az üres DNS-szálak Hamming-távolsága 0."},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"Egybetűs azonos DNS-szálak"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"Az egybetűs, azonos DNS-szálak Hamming-távolsága 0."},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"Hosszú azonos DNS-szálak"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"A hosszú azonos DNS-szálak Hamming-távolsága 0."},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"Egybetűs eltérő DNS-szálak"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"Az egybetűs eltérő DNS-szálak Hamming-távolsága 1."},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"Hosszú eltérő DNS-szálak"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"A hosszú eltérő DNS-szálak Hamming-távolsága kiszámításra kerül."},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"Legfeljebb tizenegy sor"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"Oldd meg a feladatot legfeljebb tizenegy kódsorban."}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"Mit jelent a Hamming-távolság egyszerű szavakkal?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"Azon pozíciók száma, ahol a két string eltér. Tehát a „GAGA” és a „GATA” csak a 3. pozícióban tér el, ami 1 távolságot ad."},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"Hogyan hasonlítsam össze a karaktereket ugyanazon a pozíción mindkét stringben?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"Végig kell haladnod mindkét stringen egyszerre, hogy minden lépésnél ki tudd venni az adott pozíción lévő karaktert mindkét stringből."},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"Hogyan tartsam nyilván az eltérések számát?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"Szükséged lesz valamire, ami folyamatosan nyilvántartja az eltérések számát, és minden egyes eltérésnél növeli, hogy miután minden pozíciót ellenőriztél, készen álljon a visszaadásra."}]}]}]
---

Ez egy klasszikus Exercism-feladat a molekuláris biológiáról!

A tested sejtekből épül fel, amelyek DNS-t tartalmaznak. Ezek a sejtek rendszeresen elhasználódnak és pótlásra szorulnak, amit úgy érnek el, hogy leánysejtekre osztódnak. Sőt, egy átlagos emberi test élete során körülbelül 10 kvadrillió sejtosztódáson megy keresztül!

Amikor a sejtek osztódnak, a DNS-ük is másolódik. Néha e folyamat során hibák történnek, és a DNS egyes darabjai hibás információval kódolódnak. Ha összehasonlítunk két DNS-szálat, és megszámoljuk a köztük lévő különbségeket, láthatjuk, hány hiba történt. Ezt nevezzük „Hamming-távolság”-nak.

A Hamming-távolság a tudomány számos területén hasznos, nem csak a biológiában, így jó, ha ismerjük ezt a fogalmat!

A feladatod, hogy kiszámítsd két DNS-szál Hamming-távolságát. A DNS a C, A, G és T betűket használja. Két szál így nézhet ki:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Köztük 7 eltérés van, így a Hamming-távolság 7.

Hozz létre egy `hammingDistance` (hamming-távolság) nevű függvényt, amelynek két bemenete van: a két DNS-szál, stringként. Egy számot kell visszaadnia a távolságként.

A két DNS-szál mindig azonos hosszúságú lesz.
