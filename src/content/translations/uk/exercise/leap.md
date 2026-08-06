---
lang: "uk"
type: "exercise"
slug: "leap"
title: "Високосні роки"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/leap"
en_md5: "0e6c7c50ad01b4d9fe07d721fd973afb"
governance_sha: "b2e9ffc"
content_version: "9f5d51b12d21"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanOneLine","english":"You used more than one line of code within the function.","target":"У тілі функції використано більше ніж один рядок коду."}]},{"name":"tasks","rows":[{"key":"determineLeapYear.name","english":"Determine if the year is a leap year","target":"Визначте, чи є рік високосним"},{"key":"determineLeapYear.description","english":"Write a function called isLeapYear that takes a year as its input and returns true if it is a leap year, or false if it is not.","target":"Напишіть функцію isLeapYear, яка приймає рік як вхідні дані й повертає true, якщо рік високосний, або false, якщо ні."},{"key":"solveInOneLine.name","english":"Solve in one line of code","target":"Розвʼяжіть за один рядок коду"},{"key":"solveInOneLine.description","english":"Can you solve this with only one line of code within the function?","target":"Чи вдасться розвʼязати цю вправу, написавши лише один рядок коду всередині функції?"}]},{"name":"scenarios","rows":[{"key":"year2015.name","english":"Year 2015","target":"2015 рік"},{"key":"year2015.description","english":"2015 is not divisible by 4 so is not a leap year.","target":"2015 не ділиться на 4, тому не є високосним роком."},{"key":"year1970.name","english":"Year 1970","target":"1970 рік"},{"key":"year1970.description","english":"1970 is not divisible by 4 so is not a leap year.","target":"1970 не ділиться на 4, тому не є високосним роком."},{"key":"year2100.name","english":"Year 2100","target":"2100 рік"},{"key":"year2100.description","english":"2100 is divisible by 100 but not by 400 so is not a leap year.","target":"2100 ділиться на 100, але не на 400, тому не є високосним роком."},{"key":"year1900.name","english":"Year 1900","target":"1900 рік"},{"key":"year1900.description","english":"1900 is divisible by 100 but not by 400 so is not a leap year.","target":"1900 ділиться на 100, але не на 400, тому не є високосним роком."},{"key":"year1800.name","english":"Year 1800","target":"1800 рік"},{"key":"year1800.description","english":"1800 is divisible by 100 but not by 400 so is not a leap year.","target":"1800 ділиться на 100, але не на 400, тому не є високосним роком."},{"key":"year2000.name","english":"Year 2000","target":"2000 рік"},{"key":"year2000.description","english":"2000 is divisible by 400 so is a leap year.","target":"2000 ділиться на 400, тому є високосним роком."},{"key":"year2400.name","english":"Year 2400","target":"2400 рік"},{"key":"year2400.description","english":"2400 is divisible by 400 so is a leap year.","target":"2400 ділиться на 400, тому є високосним роком."},{"key":"year1996.name","english":"Year 1996","target":"1996 рік"},{"key":"year1996.description","english":"1996 is divisible by 4 but not by 100 so is a leap year.","target":"1996 ділиться на 4, але не на 100, тому є високосним роком."},{"key":"year1960.name","english":"Year 1960","target":"1960 рік"},{"key":"year1960.description","english":"1960 is divisible by 4 but not by 100 so is a leap year.","target":"1960 ділиться на 4, але не на 100, тому є високосним роком."},{"key":"bonus1.name","english":"One line of code","target":"Один рядок коду"},{"key":"bonus1.description","english":"Solve the exercise with only one line of code within the function.","target":"Розвʼяжіть вправу, написавши лише один рядок коду всередині функції."}]},{"name":"hints","rows":[{"key":"basicRule.question","english":"What's the basic rule for a leap year?","target":"Яке основне правило для високосного року?"},{"key":"basicRule.answer","english":"Years divisible by 4 are leap years. So `year % 4 === 0` is the starting test.","target":"Роки, що діляться на 4, є високосними. Тож перевірку варто почати з `year % 4 === 0`."},{"key":"exceptions.question","english":"Are there exceptions?","target":"Чи є винятки?"},{"key":"exceptions.answer","english":"Yes. Years divisible by 100 are NOT leap years, even though they're divisible by 4. For example, 1900 isn't a leap year.","target":"Так. Роки, що діляться на 100, НЕ є високосними, хоча й діляться на 4. Наприклад, 1900 рік не є високосним."},{"key":"exceptionsToExceptions.question","english":"Are there exceptions to the exception?","target":"Чи є винятки з цього винятку?"},{"key":"exceptionsToExceptions.answer","english":"Yes. Years divisible by 400 ARE leap years after all. For example, 2000 is. So the rule cascades: divisible by 4, but not by 100, unless also by 400.","target":"Так. Роки, що діляться на 400, УСЕ Ж є високосними. Наприклад, 2000 рік. Тож правило працює каскадом: рік ділиться на 4, але не на 100, окрім випадку, коли він також ділиться на 400."},{"key":"checkDivisibility.question","english":"How do I check divisibility?","target":"Як перевірити подільність?"},{"key":"checkDivisibility.answer","english":"Use the remainder operator `%`. `year % 4 === 0` is true when the year divides exactly by 4 with nothing left over. Same trick with 100 and 400.","target":"Скористайтеся оператором остачі від ділення `%`. Вираз `year % 4 === 0` дає правду, коли рік ділиться на 4 без остачі. Той самий прийом працює зі 100 і 400."}]}]}]
---

У цій вправі ми досліджуємо високосні роки!

Високосний рік (за григоріанським календарем) настає:

- У кожному році, що ділиться на 4 без остачі.
- Якщо ж рік ділиться без остачі на 100, то він високосний лише тоді, коли також ділиться без остачі на 400.

Кілька прикладів:

- 1997 рік не був високосним, бо він не ділиться на 4.
- 1900 рік не був високосним, бо він не ділиться на 400.
- 2000 рік був високосним!

Завдання: напишіть функцію `isLeapYear` (чи є рік високосним), яка приймає рік як вхідні дані й повертає `true`, якщо рік високосний, або `false`, якщо ні.

Не поспішайте з цією вправою. Спершу добре все обміркуйте!
