---
lang: "pt-BR"
type: "exercise"
slug: "three-letter-acronym"
title: "Acrônimo de três letras"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "215346b"
content_version: "8b415a6ed09b"
published_at: "2026-08-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Sua solução tem linhas de código demais. Você consegue deixá-la mais curta?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"Crie a função acrônimo"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"Escreva uma função acrônimo que recebe três palavras e retorna um acrônimo de três letras, formado pela primeira letra de cada palavra."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"Resolva em 3 linhas de código"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"Você consegue resolver este exercício com apenas 3 linhas de código?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Portable Network Graphics"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"Crie o acrônimo 'PNG' a partir de 'Portable', 'Network', 'Graphics'."},{"key":"css.name","english":"Cascading Style Sheets","target":"Cascading Style Sheets"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"Crie o acrônimo 'CSS' a partir de 'Cascading', 'Style', 'Sheets'."},{"key":"www.name","english":"World Wide Web","target":"World Wide Web"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"Crie o acrônimo 'WWW' a partir de 'World', 'Wide', 'Web'."},{"key":"lol.name","english":"Lowercase words","target":"Palavras em minúsculas"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"Crie o acrônimo 'lol' a partir de 'laugh', 'out', 'loud'."},{"key":"bonus1.name","english":"3 lines of code","target":"3 linhas de código"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"Resolva o exercício com apenas 3 linhas de código."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"Como eu pego só o primeiro caractere de uma palavra?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"Use indexação na string. O primeiro caractere está no índice `[0]`."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"Como eu construo o resultado de três letras?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"Pegue o primeiro caractere de cada palavra e junte-os em ordem usando concatenação (`+`) ou uma template string."}]}]}]
---

Um acrônimo é uma palavra formada a partir das primeiras letras de outras palavras. Por exemplo, 'Portable Network Graphics' dá origem a 'PNG'.

Escreva uma função chamada `acronym` (acrônimo) que recebe três palavras e retorna um acrônimo de três letras, formado pela primeira letra de cada palavra.

Por exemplo, se você receber 'Cascading', 'Style' e 'Sheets', deve retornar 'CSS'.
