---
lang: "es-419"
type: "exercise"
slug: "lower-pangram"
title: "Pangrama simple"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/lower-pangram"
en_md5: "5559219b53e3710c746f0bffd6314e62"
governance_sha: "c80036b"
content_version: "fc34eb01993f"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"noNestedLoops","english":"Try not to put one loop inside another. Move the search for a single letter into its own function, then call it from <code>isPangram</code>.","target":null},{"key":"tooManyLines","english":"Almost! See if you can solve it in fewer lines by leaning on your helper function.","target":null}]},{"name":"tasks","rows":[{"key":"checkLowerPangram.name","english":"Check Lower Pangram","target":null},{"key":"checkLowerPangram.description","english":"Write a function that checks whether a lowercase sentence contains every letter of the alphabet. Have it call a small helper function to do the per-letter search.","target":null},{"key":"decomposeTightly.name","english":"Solve it in 16 lines","target":null},{"key":"decomposeTightly.description","english":"Bonus: with the search pulled out into a helper, the whole solution fits in 16 lines. Can you match it?","target":null}]},{"name":"scenarios","rows":[{"key":"lowerPangramEmpty.name","english":"Empty sentence","target":null},{"key":"lowerPangramEmpty.description","english":"An empty sentence is not a pangram.","target":null},{"key":"lowerPangramFullAlphabet.name","english":"Full lowercase alphabet","target":null},{"key":"lowerPangramFullAlphabet.description","english":"The complete lowercase alphabet is a pangram.","target":null},{"key":"lowerPangramClassic.name","english":"Classic pangram","target":null},{"key":"lowerPangramClassic.description","english":"The classic pangram sentence contains all 26 letters.","target":null},{"key":"lowerPangramMissingX.name","english":"Missing letter 'x'","target":null},{"key":"lowerPangramMissingX.description","english":"A sentence missing the letter 'x' is not a pangram.","target":null},{"key":"lowerPangramMissingH.name","english":"Missing letter 'h'","target":null},{"key":"lowerPangramMissingH.description","english":"A sentence missing the letter 'h' is not a pangram.","target":null},{"key":"lowerPangramWithUnderscores.name","english":"With underscores","target":null},{"key":"lowerPangramWithUnderscores.description","english":"A pangram with underscores instead of spaces.","target":null},{"key":"lowerPangramWithNumbers.name","english":"With numbers","target":null},{"key":"lowerPangramWithNumbers.description","english":"A pangram with numbers included.","target":null},{"key":"lowerPangramNumbersReplacingLetters.name","english":"Numbers replacing letters","target":null},{"key":"lowerPangramNumbersReplacingLetters.description","english":"A sentence where letters are replaced by numbers is not a pangram.","target":null},{"key":"lowerPangramBonusLineCount.name","english":"Tight and tidy","target":null},{"key":"lowerPangramBonusLineCount.description","english":"The complete solution fits in 16 lines when the search lives in its own function.","target":null}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where do I start?","target":null},{"key":"whereToStart.answer","english":"You need to check whether every letter of the alphabet is in the string. So you're going to need to do some looping and comparing.","target":null},{"key":"checkEveryLetter.question","english":"How do I check that every letter of the alphabet is there?","target":null},{"key":"checkEveryLetter.answer","english":"Loop through `\"abcdefghijklmnopqrstuvwxyz\"`, one letter at a time. For each letter, check whether the sentence contains it.","target":null},{"key":"avoidNestedLoops.question","english":"I've solved the exercise but I don't know how to use the helper function.","target":null},{"key":"avoidNestedLoops.answer","english":"If you've solved this, it's likely you have one outer loop and then an inner loop. That inner loop is checking if something includes something else. Extracting the inner loop into a helper function called `includes(...)`, and then use that from in the outer loop, is probably a good approach. A helper function is just a normal function defined in the normal way.","target":null}]}]}]
---

Un pangrama (_pangram_ en inglés) es una oración que usa **todas las letras del alfabeto al menos una vez**. ¡El pangrama en inglés más conocido es «the quick brown fox jumps over the lazy dog»!

Los próximos tres ejercicios tratarán sobre cómo determinar si una oración es un pangrama.

En este primer ejercicio, solo necesitas manejar letras minúsculas. El argumento solo contendrá letras minúsculas y otros caracteres como espacios, números o signos de puntuación, pero ninguna letra mayúscula.

Tu tarea es escribir `isPangram(sentence)` (que verifica si una oración es un pangrama), que recibe una oración como argumento y devuelve `true` si contiene todas las letras de la «a» a la «z» al menos una vez, o `false` en caso contrario.

### Funciones auxiliares

Para completar el ejercicio, no puedes usar bucles anidados. En cambio, como en el último ejercicio, la clave está en crear una **función auxiliar** que `isPangram(...)` utilice.

Esta función auxiliar te ayudará a determinar si un string contiene a otro string. Te recomendamos que llames a esta función `includes` y que llames a sus argumentos `haystack` (pajar) y `needle` (aguja). La idea es que queremos «encontrar la aguja en el pajar», una frase antigua en inglés.

Si crear varias funciones te parece abrumador, tal vez prefieras resolver el ejercicio primero sin la función auxiliar, usando un bucle anidado, y luego pensar cómo dividirlo en una función auxiliar.

¡Diviértete!
