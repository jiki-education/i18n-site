---
lang: "es-ES"
type: "exercise"
slug: "reverse-string"
title: "String invertida"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "16f805d"
content_version: "b0df4283750e"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"Invertir strings"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"Invertir un string para que se lea de derecha a izquierda en lugar de izquierda a derecha."}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"String vacío"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"Un string vacío al invertirlo debe devolver un string vacío."},{"key":"reverseWord.name","english":"A word","target":"Una palabra"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"Invierte la palabra 'robot'."},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"Palabra con mayúscula inicial"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"Invierte la palabra con mayúscula inicial 'Ramen'."},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"Oración con puntuación"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"Invierte la oración con puntuación 'I'm hungry!'."},{"key":"reversePalindrome.name","english":"Palindrome","target":"Palíndromo"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"Un palíndromo se mantiene igual al invertirlo."},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"Palabra de tamaño par"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"Invierte la palabra de tamaño par 'drawer'."},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"Caracteres anchos"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"Invierte los caracteres anchos Unicode '子猫'."},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"Emoji de familia"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"Invierte un emoji de familia."},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"Bandera arcoíris"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"Crea una bandera arcoíris al invertir."}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"¿Cómo invertirías una palabra a mano?"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"La lees de izquierda a derecha pero la escribes de derecha a izquierda. Equivale a tomar cada letra por turno y ponerla delante de lo que ya llevas escrito."},{"key":"mapToCode.question","english":"How does that map to code?","target":"¿Cómo se traduce eso a código?"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"Recorre el string de entrada carácter por carácter. Para cada carácter, construye el resultado anteponiéndolo. Es decir, colócalo AL INICIO de tu resultado, no al final."},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"¿Cómo hago para anteponer en vez de añadir al final?"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"Con el operador `+`, anteponer es solo cuestión de orden. En lugar de `result + char` (que añade al final), usa `char + result` (que antepone)."}]}]}]
---

Invertir strings (leerlos de derecha a izquierda, en vez de izquierda a derecha) es una tarea sorprendentemente común en programación.

Por ejemplo, en bioinformática, invertir la secuencia de strings de ADN o ARN suele ser importante para varios análisis, como encontrar cadenas complementarias o identificar secuencias palindrómicas.

Tu tarea es crear una función llamada `reverse` (invertir), que toma un string como argumento y devuelve la versión invertida.

Ejemplos:

- Convierte «stressed» en «desserts»
- Convierte «strops» en «sports»
- Convierte «racecar» en «racecar» (un palíndromo)

### Esos dos últimos escenarios...

Los dos últimos escenarios se ven extraños, ¿no? ¿Qué está pasando?

Resulta que muchos emojis en realidad están formados por otros emojis unidos con espacios ocultos (de ancho cero).

El emoji de familia (👩‍👩‍👧‍👦) está formado por dos mujeres y dos niños. Cuando se invierte, puedes ver los caracteres individuales (👦‍👧‍👩‍👩).

El otro es un arcoíris y una bandera (🌈‍️🏳). Cuando inviertes el orden para obtener la bandera y luego el arcoíris, se convierte en la bandera arcoíris (🏳️‍🌈️).

Si construyes tu resultado carácter por carácter, todo esto debería funcionar sin problema. Si en cambio buscas un truco más astuto, es posible que los emojis se rompan.
