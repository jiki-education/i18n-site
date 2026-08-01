---
lang: "it"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/two-fer"
en_md5: "7e59867ebe08e4bd9b598aae4a8be76a"
governance_sha: "dfefa8a"
content_version: "fae89c192291"
published_at: "2026-08-01"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Hai usato più di sei righe di codice."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Crea la funzione two-fer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Scrivi una funzione twoFer che riceve un nome e restituisce 'One for [name], one for me.' Se non viene dato nessun nome (stringa vuota), usa 'you' al posto del nome."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Risolvi in sei righe di codice"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Riesci a risolverlo con solo sei righe di codice?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Nessun nome dato"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Non viene dato nessun nome, quindi restituisci 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Il nome dato è Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Il suo nome è 'Alice', quindi restituisci 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Il nome dato è Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Il suo nome è 'Tom', quindi restituisci 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"Sei righe di codice"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Risolvi l'esercizio con solo sei righe di codice."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Che cosa cambia in base all'input?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Una cosa sola: il nome in mezzo alla frase. Se ti è stato dato un nome, usalo. Altrimenti usa il valore predefinito `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Come faccio a controllare se mi è stato dato un nome?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Con un'istruzione if che confronta l'input con la stringa vuota `\"\"`. Se è vuota, usa `\"you\"`. Altrimenti, usa l'input."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Come faccio a costruire la frase finale?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Unisci i tre pezzi (`\"One for \"`, il nome scelto e `\", one for me.\"`) usando la concatenazione (`+`) o una template string."}]}]}]
---

Adesso partiamo da quel semplice esercizio "Hello" e aggiungiamo qualche regola in più.

In alcuni accenti inglesi, quando dici "two for" velocemente, suona come "two fer". "Two-for-one" è un modo per dire che, se ne compri uno, ne ricevi un altro gratis.

Immagina una pasticceria che ha un'offerta speciale per le feste: puoi comprare due biscotti al prezzo di uno. Approfitti dell'offerta e decidi di regalare il biscotto in più a qualcun altro.

Il tuo compito è decidere che cosa dirai mentre regali il biscotto in più.

- Se conosci il nome della persona (per esempio Alice), dirai: "One for Alice, one for me."
- Se non conosci il nome della persona, dirai: "One for you, one for me."

Scrivi una funzione chiamata `twoFer(name)` (due per uno, con `name` il nome della persona) che restituisca la frase giusta.

Ecco alcuni esempi:

| Chiamata di funzione | Restituisce                     |
| :------------------- | :------------------------------ |
| `twoFer("Alice")`    | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")`   | `"One for Jeremy, one for me."` |
| `twoFer("")`         | `"One for you, one for me."`    |

Per il bonus, riesci a scriverla usando **solo 6 righe di codice**?

Buona fortuna!
