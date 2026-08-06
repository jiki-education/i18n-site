---
lang: "hu"
type: "exercise"
slug: "collatz-conjecture"
title: "Collatz-sejtés"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "c80036b"
content_version: "272e6c31215d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"Collatz-lépések kiszámítása"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"Írj egy függvényt, amely bemenetként egy számot vár, és visszaadja, hogy hány lépés szükséges az 1 eléréséhez a Collatz-sejtés szabályait követve: ha páros, oszd el 2-vel; ha páratlan, szorozd meg 3-mal, és adj hozzá 1-et."}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"1-es szám"},{"key":"number1.description","english":"Zero steps for one.","target":"Nulla lépés az 1-es számhoz."},{"key":"number16.name","english":"Number 16","target":"16-os szám"},{"key":"number16.description","english":"Divide if even.","target":"Ha páros, oszd el."},{"key":"number12.name","english":"Number 12","target":"12-es szám"},{"key":"number12.description","english":"Even and odd steps.","target":"Páros és páratlan lépések."},{"key":"number1000000.name","english":"Number 1000000","target":"1000000-es szám"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"Nagy számú páros és páratlan lépés."}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"Hogyan ismételjem addig, amíg a szám el nem éri az 1-et?"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"Használj egy `repeat()` ciklust szám nélkül — ez végtelenségig ismétlődik, amíg `return`-nel ki nem lépsz belőle. A cikluson belül helyettesítsd a számot a sorozat következő tagjával, és adj vissza, amint eléri az 1-et."},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"Hogyan döntsem el, melyik szabályt használjam minden lépésnél?"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"Ellenőrizd, hogy a szám páros-e. A modulo operátor ezt csinálja. `number % 2 === 0` azt jelenti, hogy páros. Ha páros, felezd meg. Egyébként végezd el ezt: `3 * number + 1`."},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"Hogyan számoljam a választ (a lépések számát)?"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"Használj egy számláló változót, hogy nyilvántartsd, hányszor alkalmaztad a szabályokat. Gondold végig, mi történjen vele minden ciklusismétlésnél, és mit adjon vissza a függvény, amikor a szám eléri az 1-et."}]}]}]
---

Egy este rábukkantál egy régi jegyzetfüzetre, amely tele volt rejtélyes firkálmányokkal, mintha valaki megszállottan kergetett volna egy gondolatot. Az egyik oldalon egyetlen kérdés emelkedett ki: **Vajon minden szám el tud jutni 1-ig?** Ez a **Collatz-sejtéshez** kapcsolódott, egy olyan rejtvényhez, amely évtizedek óta zavarba hozza a gondolkodókat.

A szabályok megtévesztően egyszerűek:

1. Válassz egy számot.
2. Ha páros, oszd el 2-vel.
3. Ha páratlan, szorozd meg 3-mal, és adj hozzá 1-et.
4. Ismételd meg az eredménnyel, és folytasd a végtelenségig.

Például 12-vel kezdve:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

A második számtól (a 6-tól) számolva 9 lépés kellett az 1 eléréséhez.

Hozz létre egy `collatzSteps` (collatz-lépések) nevű függvényt, amely bemenetként egy számot vár. Add vissza, hogy **hány lépés** szükséges ahhoz, hogy egy tetszőleges számból eljussunk 1-ig, a Collatz-sejtés szabályait követve.
