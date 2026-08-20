---
lang: "es-ES"
type: "exercise"
slug: "three-letter-acronym"
title: "Acrónimo de tres letras"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "16f805d"
content_version: "ddf8b4fc7a0c"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Tu solución tiene demasiadas líneas de código. ¿Puedes acortarla?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"Crear función acrónimo"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"Escribe una función acrónimo que reciba tres palabras y devuelva un acrónimo de tres letras formado por la primera letra de cada palabra."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"Resolver en 3 líneas de código"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"¿Puedes resolver este ejercicio con solo 3 líneas de código?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Portable Network Graphics"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"Crea el acrónimo 'PNG' a partir de 'Portable', 'Network', 'Graphics'."},{"key":"css.name","english":"Cascading Style Sheets","target":"Cascading Style Sheets"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"Crea el acrónimo 'CSS' a partir de 'Cascading', 'Style', 'Sheets'."},{"key":"www.name","english":"World Wide Web","target":"World Wide Web"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"Crea el acrónimo 'WWW' a partir de 'World', 'Wide', 'Web'."},{"key":"lol.name","english":"Lowercase words","target":"Palabras en minúscula"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"Crea el acrónimo 'lol' a partir de 'laugh', 'out', 'loud'."},{"key":"bonus1.name","english":"3 lines of code","target":"3 líneas de código"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"Resuelve el ejercicio con solo 3 líneas de código."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"¿Cómo obtengo solo el primer carácter de una palabra?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"Accediendo al carácter por su índice en el string. El primer carácter está en el índice `[0]`."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"¿Cómo construyo el resultado de tres letras?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"Toma el primer carácter de cada palabra y únelos en orden usando concatenación (`+`) o un template string."}]}]}]
---

Un acrónimo es una palabra formada por las primeras letras de otras palabras. Por ejemplo, «Portable Network Graphics» se convierte en «PNG».

Escribe una función llamada `acronym` (acrónimo) que recibe tres palabras y devuelve un acrónimo de tres letras tomando la primera letra de cada palabra.

Por ejemplo, si le das «Cascading», «Style» y «Sheets», debes devolver `'CSS'`.
