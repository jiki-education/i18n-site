---
lang: "it"
type: "exercise"
slug: "three-letter-acronym"
title: "Acronimo di tre lettere"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "c80036b"
content_version: "e139510c521d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"La tua soluzione ha troppe righe di codice. Puoi accorciarla?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"Crea la funzione `acronym`"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"Scrivi una funzione per calcolare un acronimo che prenda tre parole e restituisca un acronimo di tre lettere formato dalla prima lettera di ciascuna parola."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"Risolvi in 3 righe di codice"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"Riesci a risolvere questo esercizio con solo 3 righe di codice?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Grafica di Rete Portabile"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"Crea l'acronimo 'PNG' da 'Portable', 'Network', 'Graphics'."},{"key":"css.name","english":"Cascading Style Sheets","target":"Fogli di Stile a Cascata"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"Crea l'acronimo 'CSS' da 'Cascading', 'Style', 'Sheets'."},{"key":"www.name","english":"World Wide Web","target":"Rete Mondiale"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"Crea l'acronimo 'WWW' da 'World', 'Wide', 'Web'."},{"key":"lol.name","english":"Lowercase words","target":"Parole in minuscolo"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"Crea l'acronimo 'lol' da 'laugh', 'out', 'loud'."},{"key":"bonus1.name","english":"3 lines of code","target":"3 righe di codice"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"Risolvi l'esercizio con solo 3 righe di codice."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"Come faccio a ottenere solo il primo carattere di una parola?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"Accedendo alla stringa tramite indice. Il primo carattere si trova all'indice `[0]`."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"Come faccio a costruire il risultato di tre lettere?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"Prendi il primo carattere di ogni parola e uniscili nell'ordine usando la concatenazione (`+`) o una stringa interpolata."}]}]}]
---

Un acronimo è una parola formata dalle prime lettere di altre parole. Ad esempio, 'Portable Network Graphics' diventa 'PNG'.

Scrivi una funzione chiamata `acronym` (acronimo) che prende tre parole e restituisce un acronimo di tre lettere prendendo la prima lettera di ogni parola.

Ad esempio, se ricevi 'Cascading', 'Style' e 'Sheets', dovresti restituire 'CSS'.
