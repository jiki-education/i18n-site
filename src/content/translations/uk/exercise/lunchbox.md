---
lang: "uk"
type: "exercise"
slug: "lunchbox"
title: "Ланчбокс"
status: "published"
source_repo: "i18n"
source_path: "locales/uk/curriculum/exercises/lunchbox"
en_md5: "1b10370bd59c8562e032443bbe98c6b3"
governance_sha: "accabaea"
content_version: "92c66ebc462b"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Рішення містить забагато рядків коду. Спробуйте зробити його коротшим."}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":"Спакуйте ланчбокс"},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a rucksack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the rucksack.","target":"Розподіліть предмети між ланчбоксом і рюкзаком: вмістіть у ланчбокс якомога більше предметів, не перевищуючи його місткості, а все інше покладіть у рюкзак."},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":"Розвʼяжіть за 16 рядків коду"},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":"Чи вдасться розвʼязати цю вправу лише за 16 рядків коду?"}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":"Усе вміщається"},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the rucksack stays empty.","target":"Просторий ланчбокс, у який вміщається кожен предмет, тож рюкзак залишається порожнім."},{"key":"packTheMost.name","english":"Fit the most","target":"Вмістіть якомога більше"},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the rucksack.","target":"Місця обмаль, тож малі предмети йдуть у ланчбокс, а великі залишаються для рюкзака."},{"key":"justTheSnack.name","english":"Just the snack","target":"Лише перекус"},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the rucksack.","target":"Вміщається лише найменший предмет, а решта йде в рюкзак."},{"key":"nothingFits.name","english":"Nothing fits","target":"Нічого не вміщається"},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the rucksack.","target":"Навіть найменший предмет завеликий, тож усе опиняється в рюкзаку."},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":"Порожній ланчбокс"},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the rucksack come back empty.","target":"Предметів немає взагалі, тож і ланчбокс, і рюкзак повертаються порожніми."},{"key":"bonus1.name","english":"16 lines of code","target":"16 рядків коду"},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":"Розвʼяжіть вправу лише за 16 рядків коду."}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":"Як отримати назву й розмір кожного предмета?"},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":"Кожен предмет є парою. Перша частина містить назву, а друга зберігає розмір, тож їх можна зчитувати з предмета по черзі."},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":"Як вмістити якомога більше предметів?"},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":"Подумаймо, які предмети додавати першими. Менші предмети залишають більше місця для інших, тож варто розібратися з ними раніше, ніж із великими."},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":"Предмети розташовані від найбільшого до найменшого. Як перебрати їх від найменшого?"},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":"Існує метод, який повертає копію масиву зі зворотним порядком елементів. Спершу перевернімо масив предметів, а тоді пройдімося ним у цьому новому порядку."},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":"Як вирішити, куди піде кожен предмет?"},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the rucksack.","target":"Ведімо поточну суму розмірів уже доданих предметів. Перед додаванням предмета перевірмо, чи вміститься ця сума разом із його розміром у місткість. Якщо так, то предмет іде в ланчбокс, інакше він іде в рюкзак."}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":"Повертає копію масиву зі зворотним порядком елементів, не змінюючи оригінальний масив."},{"key":"toReversed.category","english":"Arrays","target":"Масиви"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Додає елемент у кінець масиву, змінюючи при цьому сам масив."},{"key":"push.category","english":"Arrays","target":"Масиви"}]}]}]
---

У дитинстві я щодня пакував ланчбокс до школи. Мама виставляла для мене предмети (акуратно розкладені від найбільшого до найменшого), і я намагався вмістити в ланчбокс якомога більше, але, звісно, вмістити він міг лише обмежену кількість. Усе, що не влазило, доводилося класти в рюкзак і носити з собою цілий день, замість того щоб залишити в шафці.

У цій вправі потрібно створити алгоритм, який визначає, що можна вмістити в ланчбокс, а що доведеться покласти в рюкзак.

Напишіть функцію з назвою `packLunch(items, capacity)` (спакувати обід), яка приймає два вхідні значення: масив предметів (від найбільшого до найменшого) і розмір ланчбокса `capacity` (місткість), що є числом.

Масив предметів вкладений: кожен предмет також є масивом із двох елементів, а саме назви предмета та його розміру. Предмети завжди розташовані від найбільшого до найменшого. Наприклад, масив предметів може мати такий вигляд:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

Ланчбокс має максимальну місткість. Потрібно визначити, які предмети можуть потрапити в ланчбокс. Вмістіть якомога більше предметів. Усе інше має піти в рюкзак.

Функція має повернути масив, що містить два елементи. Перший елемент є масивом предметів для ланчбокса, а другий містить предмети для рюкзака. Обидва масиви мають бути впорядковані від найменшого до найбільшого.

Наприклад, для наведеного вище масиву з місткістю 20 очікується такий результат:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Корисні методи

Як і в усіх вправах цього розділу, для побудови масивів знадобиться метод `.push(element)`.

Також доступний новий метод `[...].toReversed()`, який створює копію масиву зі зворотним порядком елементів. Наприклад:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Використовувати його не обовʼязково, але він може стати в пригоді.

Розважайтеся!
