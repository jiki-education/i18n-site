---
lang: "uk"
type: "exercise"
slug: "formal-dinner"
title: "Урочиста вечеря"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/formal-dinner"
en_md5: "8d6a2f3dd90b3a487a6bf855f31ef025"
governance_sha: "0a8ed07"
content_version: "644e5d71c68c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Знайти стіл гостя"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Напишіть функцію, яка приймає масив повних імен гостей, відповідний масив назв столів і гостя, що прибув, оголошеного як звертання та прізвище. Поверніть назву стола, за яким сидить цей гість, або `\"No table found\"`, якщо його немає в плані розсадки."},{"key":"solveTightly.name","english":"Solve it tightly","target":"Розвʼязати компактно"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"Бонус: це можна записати значно компактніше, ніж може здатися. Чи вдасться нам вмістити все рішення лише в кілька рядків коду?"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Порожній план розсадки"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Коли план порожній, ніхто ніде не сидить."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad розвертають на вході"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"Цього імені немає в плані розсадки."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad проводять до столу"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt є в плані, тож Mr Pitt дізнається свій стіл."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"Лицар королівства"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Інше звертання і гість, який стоїть у плані не першим."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Mr Bond, якщо не помиляюся"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond є в плані."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Хм... Mr Bond, якщо не помиляюся"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"У плані є лише Jason Bourne, а не James Bond."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Не зовсім Mr Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Ані Ada Spitt, ані Hugo Ross-Pitt не є Mr Pitt, тож місця для нього тут немає."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"А як щодо барона?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"У Baron Lloyd Webber прізвище складається з двох слів."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Чи Mark і є барон?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Інший Webber не рахується: прізвище має збігатися повністю."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"Коротко і ясно: Lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time your solution has to fit into a much smaller number of lines.","target":"Той самий план розсадки, що й раніше, але цього разу рішення має вміститися в значно меншу кількість рядків коду."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"Як два масиви повʼязані між собою?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"Вони йдуть у парі. Перший гість сидить за першим столом, другий гість за другим, і так далі. Тож недостатньо знати, *що* гість є в плані: треба знати, *де* саме в плані він стоїть."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"Гість каже «Mr Pitt», а в плані написано «Brad Pitt». Як їх порівняти?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Ці два рядки тексту ніколи не будуть рівними, тож пряме порівняння нікуди нас не приведе. Подумаймо, яка частина того, що оголосив гість, справді зʼявляється в плані, і в якому саме місці запису плану ми очікуємо її знайти."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"Чи може прізвище збігтися не з тим гостем?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Ще й як може. Прочитаймо вголос «Ada Spitt» і «Hugo Ross-Pitt», а тоді згадаймо про Mr Pitt. Запитаймо себе: що робить прізвище справжнім прізвищем у цьому записі, а не просто літерами, які випадково опинилися в його кінці?"},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"Що повернути, коли ніхто не збігається?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"Рядок тексту `\"No table found\"`, саме в такому вигляді. Складніше зрозуміти, коли його можна казати. Якщо ми перевірили найпершого гостя в плані й це не наш гість, чи справді ми вже знаємо, що він не сидить десь далі?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Так тримати! Спробуймо розвʼязати це в меншій кількості рядків коду."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"Кількість елементів у масиві: та сама властивість length, яку ми вже використовували з рядками тексту (надається stdlib рівня)"},{"key":"length.category","english":"List Operations","target":"Операції з масивами"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"Розбити рядок тексту на масив частин, розриваючи його на кожному роздільнику (надається stdlib рівня)"},{"key":"split.category","english":"String Operations","target":"Операції з рядками"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"Створити новий масив із частини масиву, починаючи з певної позиції (надається stdlib рівня)"},{"key":"slice.category","english":"List Operations","target":"Операції з масивами"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"Зʼєднати елементи масиву в один рядок тексту, з роздільником між ними (надається stdlib рівня)"},{"key":"join.category","english":"List Operations","target":"Операції з масивами"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"Перевірити, чи закінчується рядок тексту меншим рядком (надається stdlib рівня)"},{"key":"endsWith.category","english":"String Operations","target":"Операції з рядками"}]}]}]
---

Ми знову на своєму підробітку охоронцем. Минув вечір афтепаті, а попереду вже нова гулянка. Цього разу це урочиста вечеря, тож сьогодні ми вже не «кремезний чоловʼяга на дверях», а радше «людина з планшетом і в елегантному жилеті».

Тут точно не годиться називатися **лише** імʼям. Власне, саме імʼя тут узагалі ні до чого. Тут кожного називають за ввічливим звертанням (англ. _honorific_), як-от Miss, Mr чи Dr, і прізвищем.

Організатори вручили нам план розсадки у вигляді двох окремих масивів. У першому зберігаються повні імена гостей. У другому лежать назви столів, за якими сидять гості (столи названо на честь дерев і квітів). Як і у вправі «Афтепаті», обидва масиви йдуть у парі: гість на позиції 3 у першому масиві сидить за столом на позиції 3 у другому.

Тож коли до зали велично заходить Mr Pitt, нам треба здогадатися, що це той самий «Brad Pitt» з нашого масиву, і сказати йому, за яким столом він сидить.

Напишіть функцію з назвою `tableFor` (вона знаходить стіл, за яким сидить гість). Функція приймає такі вхідні дані:

- Першим іде масив повних імен гостей, записаних як рядки тексту (англ. _string_)
- Другим іде масив назв столів, у тому самому порядку, що й гості
- Третім іде гість, який щойно прибув, у форматі «звертання, а за ним прізвище» (наприклад, "Mr Pitt")

Поверніть назву стола, за яким сидить гість. Якщо ж гостя взагалі немає в плані розсадки, натомість поверніть рядок тексту `"No table found"` (ніяких хитрунів тут не пропускаємо!).

Звертання завжди складається рівно з одного слова, а все, що йде після нього, і є прізвищем гостя. Більшість прізвищ складаються з одного слова, але кілька особливо аристократичних розтягуються на два.

Але будьмо уважні: чимало прізвищ дуже схожі на інші.

### Методи та властивості рядків і масивів

Окрім властивості `.length`, з якою ми познайомилися в попередній вправі, є ще чотири методи, які можуть стати в пригоді. Цю вправу можна розвʼязати багатьма способами, але саме ці методи приведуть нас до найкоротшого можливого рішення.

`"...".split(substring)` розбиває рядок тексту за іншим рядком. Наприклад:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` бере частину масиву, починаючи з індексу `start` і аж до кінця масиву. Взяті елементи копіюються в НОВИЙ масив, який і повертається нам. Фактично цей метод відкидає перші `start` елементів. Наприклад:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` зʼєднує елементи масиву в один рядок тексту, вставляючи між ними переданий рядок. Наприклад:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` каже нам, чи закінчується рядок тексту іншим рядком. Наприклад:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
