---
lang: "uk"
type: "exercise"
slug: "tile-search"
title: "Пошук фішки"
status: "published"
source_repo: "i18n"
source_path: "locales/uk/curriculum/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "a84cd6f"
content_version: "537e6d807da9"
published_at: "2026-08-12"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"У рішенні забагато рядків коду. Спробуйте зробити його коротшим."}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"Знайдіть фішку"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"Напишіть функцію, яка перевіряє, чи є на підставці фішка з певною літерою. Поверніть true, якщо фішку знайдено, і false, якщо ні."},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"Розвʼяжіть за 8 рядків коду"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"Чи вдасться вкласти розвʼязок цієї вправи лише у 8 рядків коду?"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"Літера на початку"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"Шукана літера є першою фішкою на підставці."},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"Літера в середині"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"Шукана літера стоїть у середині підставки."},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"Літера в кінці"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"Шукана літера є останньою фішкою на підставці."},{"key":"letterNotFound.name","english":"Letter not found","target":"Літеру не знайдено"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"Цієї літери на підставці немає."},{"key":"emptyRack.name","english":"Empty rack","target":"Порожня підставка"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"На порожній підставці немає фішок, серед яких можна шукати."},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"Підставка з дублікатами"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"Шукана літера стоїть серед фішок, які повторюються."},{"key":"singleTileFound.name","english":"Single tile found","target":"Єдину фішку знайдено"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"Підставка з однією фішкою, яка збігається з шуканою."},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"Єдину фішку не знайдено"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"Підставка з однією фішкою, яка не збігається з шуканою."},{"key":"bonus1.name","english":"8 lines of code","target":"8 рядків коду"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"Розвʼяжіть вправу лише за 8 рядків коду."}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"Як зробити це вручну?"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"Ми би проходили `haystack` літера за літерою, порівнюючи кожну з `needle`, і щойно знайшли збіг, то зупинилися б. Якщо дійшли до кінця без збігу, `needle` там немає."},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"Як організувати цикл і порівняння?"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"Цикл `for-of` дає нам кожну літеру рядка тексту по черзі. Усередині нього умовна конструкція порівнює поточну літеру з `needle`."},{"key":"returnTrue.question","english":"When should I return true?","target":"Коли слід повернути true?"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"Щойно знайдено збіг. Перевіряти решту літер уже немає сенсу."},{"key":"returnFalse.question","english":"When should I return false?","target":"Коли слід повернути false?"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"ЛИШЕ після того, як цикл завершився, не знайшовши збігу. Поширена помилка: поставити `return false` всередині циклу. Тоді функція завершується після першої ж літери, що не збіглася, ще до перевірки решти літер."}]}]}]
---

Ми створюємо бота для гри в «Скрабл». Перш ніж бот спробує викласти слово, йому потрібно перевірити, чи є на його підставці фішка з певною літерою.

Підставку записано у вигляді рядка тексту (англ. _string_) з літер (наприклад, `"SCRAB"`).

Напишіть функцію з назвою `contains` (містить), яка приймає такі вхідні дані:

- `haystack` (стіг сіна): підставка з фішками, у вигляді рядка тексту
- `needle` (голка): літера, яку потрібно знайти

Поверніть `true`, якщо ця літера є на підставці, або `false`, якщо її там немає.

Приклади:

- `contains("SCRAB", "A")` повертає `true`
- `contains("SCRAB", "Z")` повертає `false`
- `contains("", "A")` повертає `false`
