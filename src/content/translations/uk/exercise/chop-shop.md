---
lang: "uk"
type: "exercise"
slug: "chop-shop"
title: "Перукарня «Чик-чик»"
status: "published"
source_repo: "i18n"
source_path: "locales/uk/curriculum/exercises/chop-shop"
en_md5: "eef10493cf2492b9996e60c7771b3a8f"
governance_sha: "accabaea"
content_version: "e00777a52f1a"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":"Чи вдасться їх вмістити?"},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":"Напишіть функцію, яка визначає, чи встигнемо ми прийняти нового клієнта до кінця дня, з огляду на поточну чергу та час, що лишився."}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":"У черзі нікого"},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":"У черзі нікого, а часу вдосталь."},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":"Наприкінці дня"},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":"У черзі нікого, але часу недостатньо."},{"key":"busyDayNoTime.name","english":"A full day","target":"Насичений день"},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":"Повна черга, і часу недостатньо."},{"key":"busyDayButTime.name","english":"Just squeezes in","target":"Ледве вміщається"},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":"День насичений, але часу якраз вистачає."},{"key":"stillEarly.name","english":"Still early","target":"Ще рано"},{"key":"stillEarly.description","english":"It's still early in the day.","target":"День ще тільки починається."},{"key":"cuttingItFine.name","english":"Just in time","target":"В останню мить"},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":"Клієнт устиг в останню мить!"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":"З чого почати: з черги чи з нового клієнта?"},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":"Спершу зʼясуймо, скільки часу забере черга, а потім погляньмо, скільки лишиться для нового клієнта. Допоміжна функція, яка перетворює назву стрижки на її тривалість (у хвилинах), зробить рішення значно охайнішим."},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":"Як відняти час кожної стрижки від часу, що лишився?"},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":"Пройдімося циклом по черзі. Для кожної стрижки зʼясуймо тривалість за допомогою допоміжної функції та віднімімо її від залишку часу до кінця дня."},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":"Як вирішити, чи вміщається нова стрижка?"},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":"Опрацювавши чергу, порівняймо час, що лишився, із тривалістю нової стрижки. Якщо тривалість нової стрижки не перевищує часу, що лишився, то вона вміщається."}]}]}]
---

Ми керуємо маленькою перукарнею, де швидкість важливіша за якість. Можливо, клієнти виходять від нас трохи скуйовдженими, зате їм не доводиться довго сидіти в кріслі.

Ми пропонуємо кілька різних послуг, від укладання до повної стрижки, і кожна з них займає свій час. Салон працює за принципом живої черги, без жодної системи запису.

Ближче до кінця дня нам потрібен спосіб дізнатися, чи встигнемо ми прийняти нових клієнтів, які заходять до салону.

Напишіть функцію `canFitIn` (чи можна вмістити), яка приймає три вхідні значення:

- Перше: масив рядків тексту (англ. _string_) зі стрижками, які вже стоять у черзі
- Друге: стрижка, яку хоче новий клієнт (рядок тексту)
- Третє: кількість хвилин, що лишилися до кінця дня (число)

Поверніть булеве значення (англ. _Boolean_): чи вдасться вмістити цього клієнта.

Ось стрижки, які ми пропонуємо:

- Mohawk: 20 хвилин
- Slicked-Back Pixie: 15 хвилин
- Bob: 25 хвилин
- Shave and Polish: 15 хвилин
- Afro Trim: 45 хвилин
- Up-do: 30 хвилин

### Вкладені масиви

Це перша вправа, у якій ми маємо справу з масивом, елементами якого є інші масиви. Такі масиви ми називаємо «вкладеними». Вкладений масив нічим не відрізняється від будь-якого іншого, просто замість рядків тексту чи чисел він містить інші масиви.

Погляньмо на масив `cuts` (стрижки). Він містить інші масиви, по одному на кожну стрижку, і кожен із цих масивів має два елементи: назву та тривалість.

Найпростіше уявити це так: спершу є внутрішні масиви, тобто пари з назви й тривалості, а потім усі вони зібрані разом в іншому масиві.

Індексація тут працює так само, як і всюди, але індекси можна ставити один за одним, ось так...

```javascript
const cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
