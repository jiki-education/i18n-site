---
lang: "fr"
type: "exercise"
slug: "three-letter-acronym"
title: "Acronyme de trois lettres"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "14855b9"
content_version: "202bc43cd985"
published_at: "2026-08-09"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Ta solution a trop de lignes de code. Peux-tu la raccourcir ?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"Crée la fonction acronym"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"Écris une fonction acronym qui prend trois mots et renvoie un acronyme de trois lettres formé en prenant la première lettre de chaque mot."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"Résous en 3 lignes de code"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"Peux-tu résoudre cet exercice en seulement 3 lignes de code ?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Portable Network Graphics"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"Crée l'acronyme « PNG » à partir de « Portable », « Network » et « Graphics »."},{"key":"css.name","english":"Cascading Style Sheets","target":"Cascading Style Sheets"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"Crée l'acronyme « CSS » à partir de « Cascading », « Style » et « Sheets »."},{"key":"www.name","english":"World Wide Web","target":"World Wide Web"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"Crée l'acronyme « WWW » à partir de « World », « Wide » et « Web »."},{"key":"lol.name","english":"Lowercase words","target":"Mots en minuscules"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"Crée l'acronyme « lol » à partir de « laugh », « out » et « loud »."},{"key":"bonus1.name","english":"3 lines of code","target":"3 lignes de code"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"Résous l'exercice en seulement 3 lignes de code."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"Comment obtenir uniquement le premier caractère d'un mot ?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"Utilise l'indexation sur la string. Le premier caractère se trouve à l'indice `[0]`."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"Comment construire le résultat de trois lettres ?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"Prends le premier caractère de chaque mot et assemble-les dans l'ordre à l'aide de la concaténation (`+`) ou d'une template string."}]}]}]
---

Un acronyme est un mot formé à partir des premières lettres d'autres mots. Par exemple, « Portable Network Graphics » devient « PNG ».

Écris une fonction appelée `acronym` (acronyme) qui prend trois mots et renvoie un acronyme de trois lettres en prenant la première lettre de chaque mot.

Par exemple, si elle reçoit « Cascading », « Style » et « Sheets », elle doit renvoyer « CSS ».
