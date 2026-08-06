---
lang: "uk"
type: "exercise"
slug: "collatz-conjecture"
title: "Гіпотеза Коллатца"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "b2e9ffc"
content_version: "74cb97f3de9c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"Обчислити кроки Коллатца"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"Напишіть функцію, яка приймає число й повертає, скільки кроків потрібно, щоб дійти до 1 за правилами гіпотези Коллатца: якщо число парне, ділимо його на 2; якщо непарне, множимо на 3 і додаємо 1."}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"Число 1"},{"key":"number1.description","english":"Zero steps for one.","target":"Нуль кроків для одиниці."},{"key":"number16.name","english":"Number 16","target":"Число 16"},{"key":"number16.description","english":"Divide if even.","target":"Ділимо, якщо парне."},{"key":"number12.name","english":"Number 12","target":"Число 12"},{"key":"number12.description","english":"Even and odd steps.","target":"Парні та непарні кроки."},{"key":"number1000000.name","english":"Number 1000000","target":"Число 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"Багато парних та непарних кроків."}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"Як продовжувати, доки число не дійде до 1?"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"Скористайтеся циклом `repeat()` без числа: він повторюється без кінця, доки з нього не вийти через `return`. Усередині циклу замінюйте число наступним числом послідовності, а коли воно дійде до 1, поверніть результат."},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"Як вирішити, яке правило застосувати на кожному кроці?"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"Перевірте, чи число парне. Для цього підійде оператор остачі від ділення: `number % 2 === 0` означає, що число парне. Якщо воно парне, поділіть його навпіл. Інакше обчисліть `3 * number + 1`."},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"Як відстежувати відповідь (кількість кроків)?"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"Заведіть змінну-лічильник, яка рахує, скільки разів застосовано правила. Подумайте, що має відбуватися з нею на кожному оберті циклу і що функція має повернути, коли число дійде до 1."}]}]}]
---

Одного вечора ми натрапили на старий записник, списаний загадковими нотатками, ніби хтось одержимо ганявся за якоюсь ідеєю. На одній зі сторінок вирізнялося єдине запитання: **Чи кожне число знайде свій шлях до 1?** Воно стосувалося так званої **гіпотези Коллатца**, головоломки, що десятиліттями спантеличує мислителів.

Правила оманливо прості:

1. Обираємо число.
2. Якщо воно парне, ділимо його на 2.
3. Якщо воно непарне, множимо його на 3, а потім додаємо 1.
4. Повторюємо з отриманим результатом, і так без кінця.

Наприклад, почнімо з 12:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

Якщо рахувати від другого числа (6), знадобилося 9 кроків, щоб дійти до 1.

Створіть функцію з назвою `collatzSteps` (кроки Коллатца), яка приймає одне вхідне значення, число. Поверніть **кількість кроків**, потрібних, щоб дійти від будь-якого заданого числа до 1 за правилами гіпотези Коллатца.
