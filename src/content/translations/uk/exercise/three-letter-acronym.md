---
lang: "uk"
type: "exercise"
slug: "three-letter-acronym"
title: "Трилітерний акронім"
status: "published"
source_repo: "i18n"
source_path: "locales/uk/curriculum/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "a84cd6f"
content_version: "3e7599ff529a"
published_at: "2026-08-12"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"У рішенні забагато рядків коду. Чи вдасться зробити його коротшим?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"Створіть функцію акроніма"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"Напишіть функцію акроніма, яка приймає три слова і повертає трилітерний акронім, утворений з першої літери кожного слова."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"Розвʼяжіть за 3 рядки коду"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"Чи вдасться розвʼязати цю вправу лише за 3 рядки коду?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Portable Network Graphics"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"Створіть акронім «PNG» зі слів «Portable», «Network», «Graphics»."},{"key":"css.name","english":"Cascading Style Sheets","target":"Cascading Style Sheets"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"Створіть акронім «CSS» зі слів «Cascading», «Style», «Sheets»."},{"key":"www.name","english":"World Wide Web","target":"World Wide Web"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"Створіть акронім «WWW» зі слів «World», «Wide», «Web»."},{"key":"lol.name","english":"Lowercase words","target":"Слова з малих літер"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"Створіть акронім «lol» зі слів «laugh», «out», «loud»."},{"key":"bonus1.name","english":"3 lines of code","target":"3 рядки коду"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"Розвʼяжіть вправу лише за 3 рядки коду."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"Як отримати лише перший символ слова?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"Скористайтеся індексацією рядка тексту (англ. _string_): перший символ має індекс `[0]`."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"Як зібрати трилітерний результат?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"Візьміть перший символ кожного слова і зʼєднайте їх по порядку за допомогою конкатенації (`+`) або шаблонного рядка."}]}]}]
---

Акронімом називають слово, утворене з перших літер інших слів. Наприклад, «Portable Network Graphics» перетворюється на «PNG».

Напишіть функцію з назвою `acronym` (акронім), яка приймає три слова і повертає трилітерний акронім, утворений з першої літери кожного слова.

Наприклад, якщо функція отримає «Cascading», «Style» і «Sheets», вона має повернути «CSS».
