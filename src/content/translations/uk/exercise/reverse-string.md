---
lang: "uk"
type: "exercise"
slug: "reverse-string"
title: "Перевертання рядка тексту"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "0a8ed07"
content_version: "117e75c946f2"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"Перевернути рядки тексту"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"Переверніть рядок тексту так, щоб він читався справа наліво, а не зліва направо."}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"Порожній рядок"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"Для порожнього рядка функція має повернути порожній рядок."},{"key":"reverseWord.name","english":"A word","target":"Слово"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"Переверніть слово «robot»."},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"Слово з великої літери"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"Переверніть слово з великої літери «Ramen»."},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"Речення з пунктуацією"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"Переверніть речення з пунктуацією «I'm hungry!»"},{"key":"reversePalindrome.name","english":"Palindrome","target":"Паліндром"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"Паліндром після перевертання залишається незмінним."},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"Слово з парною кількістю літер"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"Переверніть слово з парною кількістю літер «drawer»."},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"Широкі символи"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"Переверніть широкі символи Unicode «子猫»."},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"Емодзі сімʼї"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"Переверніть емодзі сімʼї."},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"Веселковий прапор"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"Створіть веселковий прапор за допомогою перевертання."}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"Як перевернути слово вручну?"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"Ми читаємо слово зліва направо, а записуємо справа наліво. Інакше кажучи, беремо кожну літеру по черзі й ставимо її перед тим, що вже записали."},{"key":"mapToCode.question","english":"How does that map to code?","target":"Як це виразити в коді?"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"Переберіть вхідний рядок символ за символом. Для кожного символу будуйте результат, додаючи його спереду. Тобто ставте символ на ПОЧАТОК результату, а не в кінець."},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"Як додавати символи спереду, а не в кінець?"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"З оператором `+` все залежить лише від порядку. Замість `result + char` (додає в кінець) використайте `char + result` (додає спереду)."}]}]}]
---

Перевертання рядків тексту (англ. _string_), тобто читання їх справа наліво замість зліва направо, напрочуд часто трапляється у програмуванні.

Наприклад, у біоінформатиці перевертання послідовностей ДНК чи РНК часто буває важливим для різних аналізів, як-от пошуку комплементарних ланцюгів чи виявлення паліндромних послідовностей.

Завдання: створіть функцію з назвою `reverse` (перевернути), яка приймає рядок тексту як вхідні дані й повертає його перевернуту версію.

Приклади:

- «stressed» стає «desserts»
- «strops» стає «sports»
- «racecar» стає «racecar» (паліндром)

### Ті два останні сценарії...

Останні два сценарії виглядають дивно, чи не так? Що ж тут відбувається?

Виявляється, багато емодзі насправді складаються з інших емодзі, зʼєднаних між собою прихованими пробілами (нульової ширини).

Емодзі сімʼї (👩‍👩‍👧‍👦) складається з двох жінок і двох дітей. Коли ми його перевертаємо, стає видно окремі символи (👦‍👧‍👩‍👩).

Інший приклад: веселка і прапор (🌈‍️🏳). Коли ми міняємо їх місцями, щоб спершу йшов прапор, а потім веселка, вони перетворюються на веселковий прапор (🏳️‍🌈️)!

Якщо ми будуємо результат символ за символом, ці сценарії просто спрацюють. А якщо натомість вдатися до хитрішого трюку, емодзі можуть розпастися на частини.
