---
lang: "es-419"
type: "exercise"
slug: "acronym"
title: "Acrónimo"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/acronym"
en_md5: "f42dbd1b0fe85c42e70bb2c37a4746c2"
governance_sha: "c80036b"
content_version: "8077cc9ee97e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":null},{"key":"createAcronymFunction.description","english":"Write a function that takes a phrase and returns its acronym: the first letter of each word, in uppercase. Words are separated by spaces and hyphens, and any other punctuation is ignored.","target":null},{"key":"solveTightly.name","english":"Solve it in 46 lines","target":null},{"key":"solveTightly.description","english":"Bonus: with the letter-testing and case-swapping pulled into helper functions that `acronym` reuses, the whole solution fits in 46 lines. Can you match it?","target":null}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Basic acronym: PNG","target":null},{"key":"png.description","english":"Convert 'Portable Network Graphics' to 'PNG'.","target":null},{"key":"ror.name","english":"Lowercase words: ROR","target":null},{"key":"ror.description","english":"Convert 'Ruby on Rails' to 'ROR'.","target":null},{"key":"gimp.name","english":"All caps word: GIMP","target":null},{"key":"gimp.description","english":"Convert 'GNU Image Manipulation Program' to 'GIMP'.","target":null},{"key":"firstWordOnly.name","english":"Single word: H","target":null},{"key":"firstWordOnly.description","english":"Convert 'HyperText' to 'H'.","target":null},{"key":"hyphenated.name","english":"Hyphenated phrase: CMOS","target":null},{"key":"hyphenated.description","english":"Convert 'Complementary metal-oxide semiconductor' to 'CMOS'.","target":null},{"key":"fifo.name","english":"Comma-separated: FIFO","target":null},{"key":"fifo.description","english":"Convert 'First In, First Out' to 'FIFO'.","target":null},{"key":"punctuation.name","english":"With punctuation: PHT","target":null},{"key":"punctuation.description","english":"Convert 'Portable, HyperText, Transmitter' to 'PHT'.","target":null},{"key":"hc.name","english":"With an apostrophe: HC","target":null},{"key":"hc.description","english":"Convert 'Halley's Comet' to 'HC'.","target":null},{"key":"simufta.name","english":"Consecutive delimiters: SIMUFTA","target":null},{"key":"simufta.description","english":"Convert 'Something - I made up from thin air' to 'SIMUFTA'.","target":null},{"key":"trnt.name","english":"Underscore emphasis: TRNT","target":null},{"key":"trnt.description","english":"Convert 'The Road _Not_ Taken' to 'TRNT'.","target":null},{"key":"long.name","english":"A very long one: ROTFLSHTMDCOALM","target":null},{"key":"long.description","english":"Convert 'Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me' to 'ROTFLSHTMDCOALM'.","target":null},{"key":"emoji.name","english":"With an emoji: HW","target":null},{"key":"emoji.description","english":"Convert 'Hello 👋 World' to 'HW'.","target":null},{"key":"acronymBonusLineCount.name","english":"Neat and tidy","target":null},{"key":"acronymBonusLineCount.description","english":"The tidiest solution reuses its helpers and fits in 46 lines. Can you find it?","target":null}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":null},{"key":"noMethods","english":"This exercise is about building the tools yourself. Solve it without using any built-in methods.","target":null}]},{"name":"hints","rows":[{"key":"pickLetters.question","english":"How do I pick out which letters become the acronym?","target":null},{"key":"pickLetters.answer","english":"The acronym is built from the letter that starts each word: the very first letter of the phrase, plus the first letter after every space or hyphen.","target":null},{"key":"findWordStarts.question","english":"How do I know when a new word starts?","target":null},{"key":"findWordStarts.answer","english":"Walk the phrase one character at a time and keep track of whether you're at the start of a new word. You are at the very beginning, and again straight after any space or hyphen. Anything that isn't a letter (punctuation, underscores, apostrophes) should be skipped rather than counted as the start of a word.","target":null},{"key":"buildResult.question","english":"How do I build up the result as I go?","target":null},{"key":"buildResult.answer","english":"Start with an empty string and add each chosen letter onto the end using `+`.","target":null},{"key":"uppercaseLetters.question","english":"How do I make a letter uppercase when there's no built-in for it?","target":null},{"key":"uppercaseLetters.answer","english":"There's no ready-made uppercaser here. Just like in Pangram, you can line up a lowercase alphabet against an uppercase one and swap a letter for the one at the same position. Letters that are already uppercase can stay as they are.","target":null}]}]}]
---

Ya has resuelto acrónimos sencillos de tres letras, como convertir `Portable Network Graphics` en `PNG`.

Sin embargo, en este ejercicio vamos un paso más allá y tratamos con todos los acrónimos: no solo los de tres letras. Y esto es mucho más difícil...

Tu tarea es escribir una función llamada `acronym(phrase)` que reciba una frase y devuelva su acrónimo.

## Las reglas

Una nueva palabra comienza después de un **espacio** o un **guion** (`-`). Cualquier otro carácter (comas, apóstrofos, guiones bajos, signos de exclamación, etc.) **no** es un separador y nunca forma parte del acrónimo. Solo cuentan las letras.

| Frase                     | Acrónimo |
| ------------------------- | -------- |
| As Soon As Possible       | ASAP     |
| Liquid-crystal display    | LCD      |
| Thank George It's Friday! | TGIF     |

## Atención

No te hemos dado ninguno de los métodos avanzados de JavaScript que verás más adelante en el curso (nada que convierta mágicamente una letra en mayúscula ni que te diga si un carácter es una letra). Tendrás que construir todas esas funciones auxiliares tú mismo antes de poder armar todo.

Este ejercicio es más complicado de lo que parece. ¡Diviértete!
