---
lang: "sr"
type: "exercise"
slug: "three-letter-acronym"
title: "Tročlani akronim"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "1011050"
content_version: "25dab22c9522"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Tvoje rešenje ima previše linija koda. Možeš li ga skratiti?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"Napravi akronim funkciju"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"Napiši funkciju koja pravi akronim, prima tri reči i vraća tročlani akronim, formiran uzimanjem prvog slova svake reči."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"Reši u 3 linije koda"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"Možeš li da rešiš ovu vežbu sa samo 3 linije koda?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Prenosiva mrežna grafika"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"Napravi akronim 'PNG' od reči 'Portable', 'Network', 'Graphics'."},{"key":"css.name","english":"Cascading Style Sheets","target":"Kaskadni listovi stilova"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"Napravi akronim 'CSS' od reči 'Cascading', 'Style', 'Sheets'."},{"key":"www.name","english":"World Wide Web","target":"Svetska mreža"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"Napravi akronim 'WWW' od reči 'World', 'Wide', 'Web'."},{"key":"lol.name","english":"Lowercase words","target":"Reči malim slovima"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"Napravi akronim 'lol' od reči 'laugh', 'out', 'loud'."},{"key":"bonus1.name","english":"3 lines of code","target":"3 linije koda"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"Reši vežbu sa samo 3 linije koda."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"Kako da dobijem samo prvi karakter reči?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"Indeksiranjem niske. Prvi karakter je na indeksu `[0]`."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"Kako da sastavim tročlani rezultat?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"Uzmi prvi karakter svake reči i spoji ih redom koristeći spajanje (`+`) ili šablon niske."}]}]}]
---

Akronim je reč nastala od prvih slova drugih reči. Na primer, 'Portable Network Graphics' postaje 'PNG'.

Napiši funkciju pod nazivom `acronym` (akronim) koja prima tri reči i vraća akronim od tri slova tako što uzima prvo slovo svake reči.

Na primer, ako dobiješ reči 'Cascading', 'Style' i 'Sheets', treba da vratiš 'CSS'.
