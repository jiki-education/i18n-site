---
lang: "uk"
type: "exercise"
slug: "digital-root"
title: "Цифровий корінь"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "d9dccd9"
content_version: "6c381f7226c1"
published_at: "2026-08-02"
forum_topic_id: 880
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Додайте цифри"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Напишіть функцію з назвою digitalRoot, яка приймає число й додає його цифри. Для чисел, що вже складаються з однієї цифри, і для чисел, цифри яких у сумі дають одну цифру, цього першого проходу (однієї ітерації циклу) достатньо."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Згортайте, доки не залишиться одна цифра"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"Іноді після одного додавання цифр усе ще залишається більше однієї цифри (наприклад, 942 у сумі дає 15). Продовжуйте додавати цифри результату, доки не залишиться одна цифра."},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"Бонус: зробіть рішення коротким"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"Рішення вже працює. У цьому бонусі впорядкуйте його так, щоб уся функція вмістилася в кілька рядків, без надлишкового коду."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Нуль"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"Цифровий корінь числа 0 дорівнює 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Уже одна цифра"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Число, що вже складається з однієї цифри, є власним цифровим коренем."},{"key":"drTwoDigits.name","english":"Two digits","target":"Дві цифри"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 згортається до 7 за один прохід (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Три цифри, один прохід"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 згортається до 6 за один прохід (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"Потрібні два проходи"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39 у сумі дає 12, яке потім дає 3."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Число, якому потрібен другий прохід"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942 у сумі дає 15, яке потім дає 6."},{"key":"drLarge.name","english":"A larger number","target":"Більше число"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 згортається аж до 2."},{"key":"drNines.name","english":"All nines","target":"Самі девʼятки"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999 у сумі дає 45, яке потім дає 9."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Охайне коротке рішення"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345 згортається до 6 (1 + 2 + 3 + 4 + 5 = 15, потім 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"Що таке цифровий корінь?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Додайте всі цифри числа. Якщо вийшла одна цифра, це і є відповідь. Якщо цифр більше однієї, додайте цифри цього результату теж, і так далі, доки не залишиться одна цифра."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"Як додати цифри числа?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Перетворіть число на рядок тексту, щоб пройтися ним символ за символом за допомогою циклу `for...of`. Ведіть поточну суму, додаючи кожну цифру."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"Але ж кожна цифра тут не число, а символ."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Коли ми перебираємо рядок тексту в циклі, кожен символ (наприклад, `\"4\"`) залишається текстом. Скористайтеся `Number(char)`, щоб перетворити його на число `4`, перш ніж додавати до суми."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"Як продовжувати, якщо я не знаю, скільки проходів знадобиться?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"Заздалегідь невідомо, скільки разів доведеться додавати цифри, тому цикл `while` чудово підходить. Повторюйте цикл, доки в числі більше однієї цифри."},{"key":"keepGoing.question","english":"When do I stop?","target":"Коли зупинитися?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Зупиніться, щойно число складається з однієї цифри. У цей момент поверніть його."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"Майже! У цій вправі ми хочемо, щоб для згортання до однієї цифри використовувався цикл `while`."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"Майже вийшло! Рішення працює, але воно трохи задовге. Спробуйте зробити його компактнішим."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Перетворює рядок тексту, що містить цифри, на число"},{"key":"number.category","english":"Type Conversion","target":"Перетворення типів"},{"key":"string.description","english":"Convert a number into a string","target":"Перетворює число на рядок тексту"},{"key":"string.category","english":"Type Conversion","target":"Перетворення типів"}]}]}]
---

Цифровий корінь (англ. _digital root_) числа отримуємо, коли додаємо його цифри знову і знову, доки не залишиться одна цифра.

Якщо після першого додавання цифр усе ще виходить більше однієї цифри, додаємо цифри _цього_ результату, і так далі, доки не залишиться одна цифра.

Наприклад, щоб знайти цифровий корінь числа `942`:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

Отже, цифровий корінь числа `942` дорівнює `6`.

Число, що вже складається з однієї цифри (наприклад, `7`), є власним цифровим коренем.

Створіть функцію з назвою `digitalRoot`, яка приймає число й повертає його цифровий корінь.

### Функція `String()`

Протягом кількох останніх уроків нам була доступна функція `Number(str)`, яка перетворює рядок тексту (англ. _string_) на число.

Те саме можна зробити й у зворотному напрямку: перетворити число на рядок тексту за допомогою функції `String(num)`. Наприклад:

```js
String(147) === "147"
```

Звернімо увагу: назва знову починається з великої літери. І знову поки що не перейматимемося, чому саме так!

### Застосуймо вивчене на практиці

Хоча цю вправу можна розвʼязати багатьма способами, рішення, на яке ми тут очікуємо, використовує цикл `while`.

Успіхів!
