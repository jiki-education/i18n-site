---
lang: "uk"
type: "exercise"
slug: "caesar-cipher"
title: "Шифр Цезаря"
status: "published"
source_repo: "i18n"
source_path: "locales/uk/curriculum/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "5fb7d79"
content_version: "2edb0e55fd06"
published_at: "2026-08-09"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"Закодуйте повідомлення"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"Напишіть функцію encode, яка зсуває кожну літеру повідомлення на задану кількість позицій. Пробіли мають залишатися пробілами. Літери, що виходять за межі «z», мають переходити на початок алфавіту."}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"Простий зсув на 1"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"Зсуваємо кожну літеру вперед на 1: a->b, b->c, c->d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"Зсув на 3"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"Зсуваємо кожну літеру вперед на 3: h->k, e->h, l->o, o->r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"Перехід через кінець алфавіту"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"Коли зсув виходить за межі «z», літери переходять на початок алфавіту: x->a, y->b, z->c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"Повідомлення з пробілами"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"Пробіли мають залишатися пробілами, зсуваються лише літери."},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"Шифрування ROT13"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13 є окремим випадком шифру Цезаря зі зсувом 13."}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"Як думати про зсув літери на N позицій?"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"Кожна літера має свою позицію в алфавіті (a стоїть на позиції 0, b на позиції 1 і так далі). Щоб зробити зсув, знаходимо цю позицію, додаємо величину зсуву, а тоді перетворюємо нову позицію назад на літеру, знайшовши її в алфавіті."},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"Як знайти позицію літери в алфавіті?"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"Шукати менший шматок у рядку тексту можна за допомогою `indexOf`. Якщо викликати її на рядку з алфавітом, вона поверне позицію літери, або -1, якщо літеру не знайдено. Щоб піти у зворотний бік, звернімося до рядка з алфавітом за індексом позиції й отримаємо літеру."},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"Що станеться, коли зсув вийде за межі «z»?"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"Тоді потрібно перейти назад до «a». Оператор остачі від ділення (`%`) чудово для цього підходить: остача від ділення позиції на 26 повертає будь-яке число в діапазон від 0 до 25."},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"Як застосувати це до цілого повідомлення?"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"Переберіть кожен символ повідомлення в циклі, зсуньте його за допомогою нашої допоміжної функції для однієї літери й скористайтеся конкатенацією (`+`), щоб зібрати рядок-результат зі зсунутих літер."}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"Знаходить позицію меншого рядка тексту всередині рядка, або -1, якщо його не знайдено (надається стандартною бібліотекою рівня)"},{"key":"indexOf.category","english":"String Operations","target":"Робота з рядками"}]}]}]
---

Шифр Цезаря належить до найдавніших і найпростіших технік шифрування. Ним користувався Юлій Цезар, щоб надсилати таємні повідомлення своїм генералам.

Шифр працює так: кожна літера повідомлення зсувається на фіксовану кількість позицій в алфавіті. Наприклад, із зсувом 3 «a» стає «d», «b» стає «e» і так далі. Якщо зсув виходить за межі «z», він переходить на початок алфавіту.

Пробіли мають залишатися пробілами (їх не зсуваємо).

Створіть функцію `encode(message, shift)` (закодувати повідомлення зі зсувом), яка приймає повідомлення, написане малими літерами, та величину зсуву й повертає закодоване повідомлення.

Наприклад:

- `encode("abc", 1)` повертає `"bcd"`
- `encode("xyz", 3)` повертає `"abc"` (з переходом через кінець алфавіту)
- `encode("hello world", 5)` повертає `"mjqqt btwqi"`

Підказка: цю задачу варто розбити на менші допоміжні функції!

### Цікавий факт

Одного разу я був ведучим технічної конференції в Бразі, у Португалії. За пʼять хвилин до мого виходу на сцену організатори підійшли до мене і трохи знічено спитали, чи не погодився б я вбратися Юлієм Цезарем на першу частину дня, щоб ушанувати римську спадщину Браги. Як гадаєте, вдалося мені...?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Джеремі в образі Цезаря"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
