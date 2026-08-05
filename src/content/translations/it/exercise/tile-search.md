---
lang: "it"
type: "exercise"
slug: "tile-search"
title: "Ricerca tra le tessere"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "f53ad5d"
content_version: "dc61b5fe4bce"
published_at: "2026-08-05"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"La tua soluzione ha troppe righe di codice. Riesci a renderla più breve?"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"Cerca una tessera"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"Scrivi una funzione che verifica se una specifica lettera tessera è nel leggìo. Restituisci true se trovata, false altrimenti."},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"Risolvi in 8 righe di codice"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"Riesci a risolvere questo esercizio con solo 8 righe di codice?"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"Lettera all'inizio"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"La lettera è la prima tessera nel leggìo."},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"Lettera in mezzo"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"La lettera è nel mezzo del leggìo."},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"Lettera alla fine"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"La lettera è l'ultima tessera nel leggìo."},{"key":"letterNotFound.name","english":"Letter not found","target":"Lettera non trovata"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"La lettera non è nel leggìo."},{"key":"emptyRack.name","english":"Empty rack","target":"Leggìo vuoto"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"Un leggìo vuoto non ha tessere da trovare."},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"Leggìo con duplicati"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"La lettera appare tra tessere duplicate."},{"key":"singleTileFound.name","english":"Single tile found","target":"Tessera singola trovata"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"Un leggìo con una tessera che corrisponde."},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"Tessera singola non trovata"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"Un leggìo con una tessera che non corrisponde."},{"key":"bonus1.name","english":"8 lines of code","target":"8 righe di codice"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"Risolvi l'esercizio con solo 8 righe di codice."}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"Come lo farei a mano?"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"Scorreresti haystack una lettera alla volta, confrontando ciascuna con needle. Non appena trovi una corrispondenza ti fermi. Se arrivi alla fine senza corrispondenza, needle non c'è."},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"Come faccio a iterare e confrontare?"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"Un ciclo for-of ti dà ogni lettera della stringa a turno. All'interno, un'istruzione if confronta la lettera corrente con needle."},{"key":"returnTrue.question","english":"When should I return true?","target":"Quando dovrei restituire true?"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"Non appena trovi una corrispondenza. Non ha senso controllare le lettere rimanenti."},{"key":"returnFalse.question","english":"When should I return false?","target":"Quando dovrei restituire false?"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"SOLO dopo che il ciclo è terminato senza aver trovato una corrispondenza. Un errore comune è mettere `return false` all'interno del ciclo. Questo si arrende subito dopo la prima lettera non corrispondente, prima di aver controllato il resto."}]}]}]
---

Stai costruendo un bot per Scrabble. Prima che il bot provi a giocare una parola, deve verificare se nel proprio leggìo si trova una specifica lettera.

Il leggìo è rappresentato come una stringa di lettere (ad es. `"SCRAB"`).

Scrivi una funzione chiamata `contains` (contiene) che accetta due input:

- `haystack` (il pagliaio): il leggìo di tessere, come stringa
- `needle` (l'ago): la lettera da cercare

Restituisci `true` se la lettera si trova nel leggìo, altrimenti `false`.

Esempi:

- `contains("SCRAB", "A")` restituisce `true`
- `contains("SCRAB", "Z")` restituisce `false`
- `contains("", "A")` restituisce `false`
