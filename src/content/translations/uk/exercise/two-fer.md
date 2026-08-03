---
lang: "uk"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/two-fer"
en_md5: "7e59867ebe08e4bd9b598aae4a8be76a"
governance_sha: "2e49836"
content_version: "6c13b4d1571e"
published_at: "2026-08-03"
forum_topic_id: 880
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"У розвʼязку більше ніж шість рядків коду."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Створіть функцію two-fer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Напишіть функцію twoFer, яка приймає імʼя та повертає 'One for [name], one for me.' Якщо імʼя не задано (порожній рядок тексту), використайте 'you' замість імені."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Розвʼяжіть за шість рядків коду"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Чи вдасться розвʼязати це лише за шість рядків коду?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Імʼя не задано"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Імʼя не задано, тож повертаємо 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Задано імʼя Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Її звати 'Alice', тож повертаємо 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Задано імʼя Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Його звати 'Tom', тож повертаємо 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"Шість рядків коду"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Розвʼяжіть вправу лише за шість рядків коду."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Що змінюється залежно від вхідних даних?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Лише одне. Імʼя в середині речення. Якщо імʼя задано, використовуємо його. Якщо ні, беремо типове `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Як перевірити, чи задано імʼя?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Умовна конструкція, яка порівнює вхідні дані з порожнім рядком тексту `\"\"`. Якщо він порожній, використовуємо `\"you\"`. Інакше беремо вхідні дані."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Як зібрати підсумкове речення?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Зʼєднайте три частини (`\"One for \"`, обране імʼя та `\", one for me.\"`) за допомогою конкатенації (`+`) або шаблонного рядка."}]}]}]
---

Тепер ми розвинемо ту просту вправу «Hello» і додамо кілька нових правил.

У деяких англійських акцентах, якщо швидко вимовити «two for», воно звучить як «two fer». Two-for-one означає: якщо ми купуємо одну річ, то ще одну отримуємо безплатно.

Уявімо пекарню зі святковою акцією: два печива за ціною одного. Ми скористаємося пропозицією й вирішимо віддати зайве печиво комусь іншому.

Наше завдання: визначити, що ми скажемо, віддаючи зайве печиво.

- Якщо ми знаємо імʼя людини (наприклад, Alice), то скажемо: "One for Alice, one for me."
- Якщо імені ми не знаємо, скажемо: "One for you, one for me."

Напишіть функцію з назвою `twoFer(name)` (`twoFer` означає «два за одного», а `name` означає імʼя), яка повертає відповідну репліку.

Ось кілька прикладів:

| Виклик функції     | Повертає                        |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

А ось і бонус: чи вдасться нам написати це, використавши **лише 6 рядків коду**?

Успіхів!
