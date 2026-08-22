---
lang: "pt-PT"
type: "exercise"
slug: "three-letter-acronym"
title: "Acrónimo de três letras"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "a347f3f"
content_version: "e63f7fabe4a4"
published_at: "2026-08-22"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"A tua solução tem demasiadas linhas de código. Consegues torná-la mais curta?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"Cria a função acrónimo"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"Escreve uma função acrónimo que recebe três palavras e devolve um acrónimo de três letras, formado pela primeira letra de cada palavra."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"Resolve em 3 linhas de código"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"Consegues resolver este exercício com apenas 3 linhas de código?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Portable Network Graphics"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"Cria o acrónimo 'PNG' a partir de 'Portable', 'Network', 'Graphics'."},{"key":"css.name","english":"Cascading Style Sheets","target":"Cascading Style Sheets"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"Cria o acrónimo 'CSS' a partir de 'Cascading', 'Style', 'Sheets'."},{"key":"www.name","english":"World Wide Web","target":"World Wide Web"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"Cria o acrónimo 'WWW' a partir de 'World', 'Wide', 'Web'."},{"key":"lol.name","english":"Lowercase words","target":"Palavras em minúsculas"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"Cria o acrónimo 'lol' a partir de 'laugh', 'out', 'loud'."},{"key":"bonus1.name","english":"3 lines of code","target":"3 linhas de código"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"Resolve o exercício com apenas 3 linhas de código."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"Como obtenho apenas o primeiro caráter de uma palavra?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"Usa indexação na string. O primeiro caráter está no índice `[0]`."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"Como construo o resultado de três letras?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"Pega no primeiro caráter de cada palavra e junta-os por ordem usando concatenação (`+`) ou uma template string."}]}]}]
---

Um acrónimo é uma palavra formada a partir das primeiras letras de outras palavras. Por exemplo, 'Portable Network Graphics' dá origem a 'PNG'.

Escreve uma função chamada `acronym` (acrónimo) que recebe três palavras e devolve um acrónimo de três letras, formado pela primeira letra de cada palavra.

Por exemplo, se receberes 'Cascading', 'Style' e 'Sheets', deves devolver 'CSS'.
