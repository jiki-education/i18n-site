---
lang: "uk"
type: "exercise"
slug: "niche-named-party"
title: "Вечірка для обраних імен"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "0a8ed07"
content_version: "b81b46095287"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"Перевірте імʼя"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"Напишіть функцію `handleGuest`, яка перевіряє, чи починається імʼя людини з дозволених на сьогоднішній вечірці літер. Поверніть `true`, якщо так, або `false`, якщо ні."},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"Розвʼяжіть за 20 рядків"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"Бонус: якщо винести підрахунок довжини в допоміжну функцію, яку `handleGuest` використовує кілька разів, усе рішення вміщується у 20 рядків коду. Вдасться повторити?"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"Вечірка «S»: приходить Sarah"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"Сьогодні пускають лише імена, що починаються з \"S\". Sarah має зайти!"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"Вечірка «S»: приходить Brad"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"Сьогодні пускають лише імена, що починаються з \"S\". Brad доведеться піти геть."},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"Вечірка «Brad»: приходить Bradley"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"Сьогодні пускають лише імена, що починаються з \"Brad\". Bradley має зайти!"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"Вечірка «Bradley»: приходить Brad"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"Сьогодні пускають лише імена, що починаються з \"Bradley\". Імʼя Brad закоротке, тож його не пускають."},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"Вечірка «Brad»: приходить Brian"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"Сьогодні пускають лише імена, що починаються з \"Brad\". Brian доведеться піти геть."},{"key":"silence.name","english":"S Party: Silence...","target":"Вечірка «S»: тиша..."},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"Людина не називає свого імені. Порожнє імʼя не може починатися ні з чого. Не пускайте її!"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"Вечірка «Cher»: приходить Cher"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"Сьогодні пускають лише імена, що починаються з \"Cher\". Імʼя Cher точно збігається з \"Cher\", тож впустіть її!"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"Коротко й акуратно"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"Найкоротше рішення вміщується у 20 рядків коду. Вдасться його знайти?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Так тримати! Спробуйте розвʼязати задачу за меншу кількість рядків."}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"Як перевірити, що імʼя починається з певних літер?"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"Порівняйте кожен символ дозволеного префікса із символом на тій самій позиції в імені. Якщо хоч один символ відрізняється, імʼя не підходить."},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"Як переглядати по одному символу за раз?"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"Перебирайте рядок тексту, щоб пройтися ним символ за символом."},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"Як знайти відповідну літеру в іншому слові?"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"Скористайтеся індексом, щоб дістати конкретну літеру з рядка тексту."},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"А що, як дозволений префікс довший за імʼя?"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"Таке імʼя не може збігтися, тож поверніть `false`."}]}]}]
---

Сьогоднішня вечірка дуже ексклюзивна: на неї пускають лише тих, чиї імена починаються з певної послідовності літер!

Напишіть функцію з назвою `handleGuest` (означає «прийняти гостя»), яка приймає два вхідні значення:

- `name`: імʼя людини біля дверей
- `allowedPrefix`: літери, з яких сьогодні має починатися імʼя

Функція має повернути `true`, якщо людину можна пустити, і `false`, якщо їй доведеться піти геть.

Наприклад:

- Якщо сьогодні дозволений префікс `"S"`, то Sarah заходить (функція повертає `true`), а Brad ні (повертає `false`).
- Якщо дозволений префікс `"Brad"`, то Brad і Bradley заходять, а Brian ні.

### Допоміжні функції

Працюючи над цією вправою, ми помітимо, що потрібно зʼясувати довжину імені гостя, а також довжину дозволеного префікса. Це чудова нагода створити допоміжну функцію з назвою `getLength(someString)`, яка рахує, скільки літер у рядку тексту (англ. _string_). Потім цю функцію можна використовувати в різних місцях усередині `handleGuest(...)`

Бонусний сценарій пропонує розвʼязати цю вправу за мінімально можливу кількість рядків коду. Можливо, зʼявляться й інші рішення, які подобатимуться більше, хоч і займатимуть більше рядків. Це цілком нормально (експериментувати з різними підходами навіть корисно), але спробуймо знайти й найкоротший варіант.

Гарної вечірки!
