---
lang: "it"
type: "exercise"
slug: "collatz-conjecture"
title: "Congettura di Collatz"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "bd1cf4b"
content_version: "3630d5048cae"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"Calcola i passi di Collatz"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"Scrivi una funzione che prende un numero e restituisce quanti passi ci vogliono per arrivare a 1 seguendo le regole della Congettura di Collatz: se è pari, dividi per 2; se è dispari, moltiplica per 3 e aggiungi 1."}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"Numero 1"},{"key":"number1.description","english":"Zero steps for one.","target":"Zero passi per uno."},{"key":"number16.name","english":"Number 16","target":"Numero 16"},{"key":"number16.description","english":"Divide if even.","target":"Dividi se è pari."},{"key":"number12.name","english":"Number 12","target":"Numero 12"},{"key":"number12.description","english":"Even and odd steps.","target":"Passi pari e dispari."},{"key":"number1000000.name","english":"Number 1000000","target":"Numero 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"Un gran numero di passi pari e dispari."}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"Come faccio a continuare finché il numero non arriva a 1?"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"Usa un ciclo `repeat()` senza numero: si ripete all'infinito finché non esci con `return`. All'interno del ciclo, sostituisci il numero con il prossimo numero nella sequenza, e restituisci quando arriva a 1."},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"Come decido quale regola applicare a ogni passo?"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"Controlla se il numero è pari. L'operatore modulo serve a questo. `number % 2 === 0` significa che è pari. Se è pari, dividilo per 2. Altrimenti, fai `3 * number + 1`."},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"Come tengo traccia della risposta (il numero di passi)?"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"Tieni una variabile contatore per quante volte hai applicato le regole. Pensa a cosa deve succedere a ogni giro del ciclo, e a cosa la tua funzione dovrebbe restituire quando il numero arriva a 1."}]}]}]
---

Una sera, ti sei imbattuto in un vecchio taccuino pieno di scarabocchi criptici, come se qualcuno fosse ossessionato da un'idea. Su una pagina, una sola domanda spiccava: **Ogni numero può trovare la via per 1?** Era legato a qualcosa chiamato **Congettura di Collatz**, un rompicapo che ha lasciato perplessi i pensatori per decenni.

Le regole sono ingannevolmente semplici:

1. Scegli un numero.
2. Se è pari, dividilo per 2.
3. Se è dispari, moltiplicalo per 3 e poi aggiungi 1.
4. Ripeti con il risultato, continuando all'infinito.

Per esempio, partendo da 12:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

Contando dal secondo numero (6), ci sono voluti 9 passi per arrivare a 1.

Crea una funzione chiamata `collatzSteps` (passi di Collatz) che riceve un input, un numero. Restituisci **quanti passi** ci vogliono per arrivare da un numero qualsiasi a 1, seguendo le regole della Congettura di Collatz.
