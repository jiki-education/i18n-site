---
lang: "sr"
type: "exercise"
slug: "collatz-conjecture"
title: "Collatzova hipoteza"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "c80036b"
content_version: "594828c4a8da"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"Izračunaj Collatzove korake"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"Napiši funkciju koja prima broj i vraća koliko je koraka potrebno da se stigne do 1 po pravilima Collatzove hipoteze: ako je paran, podeli sa 2; ako je neparan, pomnoži sa 3 i dodaj 1."}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"Broj 1"},{"key":"number1.description","english":"Zero steps for one.","target":"Nula koraka za jedan."},{"key":"number16.name","english":"Number 16","target":"Broj 16"},{"key":"number16.description","english":"Divide if even.","target":"Podeli ako je paran."},{"key":"number12.name","english":"Number 12","target":"Broj 12"},{"key":"number12.description","english":"Even and odd steps.","target":"Parne i neparne korake."},{"key":"number1000000.name","english":"Number 1000000","target":"Broj 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"Veliki broj parnih i neparnih koraka."}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"Kako da nastavim dok broj ne dostigne 1?"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"Koristi `repeat()` petlju bez broja — ponavlja se beskonačno sve dok iz nje ne izađeš pomoću `return`-a. Unutar petlje, zameni broj sledećim brojem u nizu, a kada broj dostigne 1, pozovi `return`."},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"Kako da odlučim koje pravilo da primenim u svakom koraku?"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"Proveri da li je broj paran. Operator modulo to radi. `number % 2 === 0` znači da je paran. Ako je paran, prepolovi ga. U suprotnom, izračunaj `3 * number + 1`."},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"Kako da pratim odgovor (broj koraka)?"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"Koristi brojačku promenljivu koja pamti koliko si puta primenio pravila. Razmisli šta treba da joj se desi u svakom krugu petlje i šta tvoja funkcija treba da vrati kada broj dostigne 1."}]}]}]
---

Jedne večeri nailaziš na staru svesku ispunjenu zagonetnim škrabotinama, kao da je neko opsesivno jurio neku ideju. Na jednoj stranici isticao se jedan jedini pitanje: **Može li svaki broj pronaći svoj put do 1?** Bilo je povezano s nečim što se zove **Collatzova hipoteza**, zagonetkom koja decenijama zbunjuje mislioce.

Pravila su varljivo jednostavna:

1. Izaberi broj.
2. Ako je paran, podeli ga sa 2.
3. Ako je neparan, pomnoži ga sa 3 i zatim dodaj 1.
4. Ponavljaj sa dobijenim rezultatom, nastavljajući unedogled.

Na primer, počevši od 12:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

Računajući od drugog broja (6), trebalo je 9 koraka da bi se stiglo do 1.

Napravi funkciju pod imenom `collatzSteps` (broj koraka) koja prima jedan ulaz, broj. Vrati **koliko koraka** je potrebno da se od bilo kog datog broja stigne do 1, prateći pravila Collatzove hipoteze.
