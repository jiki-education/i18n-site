---
lang: "hu"
type: "exercise"
slug: "three-letter-acronym"
title: "Hárombetűs mozaikszó"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "c80036b"
content_version: "ae4214756162"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Your solution has too many lines of code. Can you make it shorter?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"Create acronym function"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"Solve in 3 lines of code"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"Can you solve this exercise with only 3 lines of code?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Portable Network Graphics"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'."},{"key":"css.name","english":"Cascading Style Sheets","target":"Cascading Style Sheets"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'."},{"key":"www.name","english":"World Wide Web","target":"World Wide Web"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'."},{"key":"lol.name","english":"Lowercase words","target":"Lowercase words"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"Create the acronym 'lol' from 'laugh', 'out', 'loud'."},{"key":"bonus1.name","english":"3 lines of code","target":"3 lines of code"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"Solve the exercise with only 3 lines of code."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"How do I get just the first character of a word?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"Indexing into the string. The first character is at index `[0]`."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"How do I build the three-letter result?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string."}]}]}]
---

A mozaikszó olyan szó, amely más szavak első betűiből áll össze. Például a „Portable Network Graphics” szavakból „PNG” lesz.

Írj egy `acronym` (mozaikszó) nevű függvényt, amely három szót kap, és mindegyik szó első betűjét felhasználva egy hárombetűs mozaikszót ad vissza.

Például ha a „Cascading”, „Style” és „Sheets” szavakat kapja, akkor a „CSS” értéket kell visszaadnia.
