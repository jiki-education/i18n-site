---
lang: "sr"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/two-fer"
en_md5: "7e59867ebe08e4bd9b598aae4a8be76a"
governance_sha: "c80036b"
content_version: "a61f01e5c46a"
published_at: "2026-08-06"
forum_topic_id: 1031
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Tvoje rešenje koristi više od šest linija koda."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Napravi two-fer funkciju"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Napiši funkciju twoFer koja prima ime i vraća 'One for [name], one for me.' Ako ime nije zadato (prazan string), umesto imena upotrebi 'you'."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Reši u šest linija koda"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Možeš li ovo da rešiš sa samo šest linija koda?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Ime nije zadato"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Ime nije zadato, pa vrati 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Zadato ime je Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Njeno ime je 'Alice', pa vrati 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Zadato ime je Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Njegovo ime je 'Tom', pa vrati 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"Šest linija koda"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Reši vežbu sa samo šest linija koda."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Šta se menja u zavisnosti od ulaza?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Samo jedna stvar. Ime u sredini rečenice. Ako je ime zadato, upotrebi ga. Ako nije, upotrebi podrazumevano `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Kako da proverim da li je ime zadato?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Pomoću `if` naredbe koja poredi ulaz sa praznim stringom `\"\"`. Ako je prazan, upotrebi `\"you\"`. U suprotnom, upotrebi ulaz."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Kako da sastavim konačnu rečenicu?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Spoji tri dela (`\"One for \"`, izabrano ime i `\", one for me.\"`) pomoću spajanja stringova (`+`) ili šablonskog stringa."}]}]}]
---

Sada ćemo nadograditi onu jednostavnu vežbu „Hello“ i dodati nekoliko novih pravila.

U nekim engleskim naglascima, kada se „two for“ izgovori brzo, zvuči kao „two fer“. Izraz „two-for-one“, to jest „dva za jedan“, znači da ako kupiš jedan proizvod, drugi dobijaš besplatno.

Zamisli pekaru koja ima prazničnu ponudu: možeš da kupiš dva kolačića po ceni jednog. Iskoristiš ponudu i odlučiš da dodatni kolačić pokloniš nekom drugom.

Tvoj zadatak je da odrediš šta ćeš reći dok poklanjaš taj dodatni kolačić.

- Ako znaš ime te osobe (npr. Alice), reći ćeš: `"One for Alice, one for me."` („Jedan za Alice, jedan za mene.“)
- Ako ne znaš ime osobe, reći ćeš: `"One for you, one for me."` („Jedan za tebe, jedan za mene.“)

Napiši funkciju pod nazivom `twoFer(name)` (`twoFer` znači „dva za“, a `name` znači „ime“) koja vraća odgovarajuću rečenicu.

Evo nekoliko primera:

| Poziv funkcije     | Vraća                           |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

Za bonus: možeš li ovo da napišeš koristeći **samo 6 linija koda**?

Srećno!
