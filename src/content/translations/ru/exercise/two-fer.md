---
lang: "ru"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/ru/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "0e11138"
content_version: "f16518d9f8c1"
published_at: "2026-08-10"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Вы использовали больше шести строк кода."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Создайте функцию two-fer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Напишите функцию twoFer, которая принимает имя и возвращает 'One for [name], one for me.' Если имя не задано (пустая строка), используйте 'you' вместо имени."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Уложитесь в шесть строк кода"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Сможете ли вы обойтись всего шестью строками кода?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Имя не задано"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Имя не задано, поэтому верните 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Задано имя Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Её зовут 'Alice', поэтому верните 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Задано имя Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Его зовут 'Tom', поэтому верните 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"Шесть строк кода"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Выполните упражнение всего в шесть строк кода."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Что меняется в зависимости от входных данных?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Всего одно. Имя в середине предложения. Если вам дали имя, используйте его. Если нет, используйте значение по умолчанию `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Как проверить, задано ли имя?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"С помощью условной конструкции, сравнивающей входные данные с пустой строкой `\"\"`. Если строка пустая, используйте `\"you\"`. Иначе используйте входные данные."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Как собрать итоговое предложение?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Соедините три части (`\"One for \"`, выбранное имя и `\", one for me.\"`) с помощью конкатенации (`+`) или шаблонной строки."}]}]}]
---

Теперь давайте возьмём за основу то простое упражнение «Hello» и добавим несколько дополнительных правил.

В некоторых английских акцентах, если быстро произнести «two for», получается «two fer». Оборот «two-for-one» означает: покупая одну вещь, ещё одну вы получаете бесплатно.

Представьте пекарню, где по праздничной акции можно купить два печенья по цене одного. Вы соглашаетесь на предложение и решаете отдать лишнее печенье кому-нибудь другому.

Ваша задача: определить, что вы скажете, отдавая лишнее печенье.

- Если вы знаете имя человека (например, Alice), вы скажете: `"One for Alice, one for me."`
- Если имени вы не знаете, вы скажете: `"One for you, one for me."`

Напишите функцию с названием `twoFer(name)` (`twoFer` означает «два за одного», а `name` означает имя), которая возвращает подходящую реплику.

Вот несколько примеров:

| Вызов функции      | Возвращает                      |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

А вот и бонус: сможете ли вы написать это, использовав **всего 6 строк кода**?

Удачи!
