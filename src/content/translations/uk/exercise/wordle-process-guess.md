---
lang: "uk"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: обробка спроби"
status: "published"
source_repo: "i18n"
source_path: "locales/uk/curriculum/exercises/wordle-process-guess"
en_md5: "3947aa1be7871fcfb0e523cb3c036d7f"
governance_sha: "560b647e"
content_version: "b89c4f3ebf8e"
published_at: "2026-09-02"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"allCorrect","english":"We expected all the letters to be green","target":"Ми очікували, що всі літери будуть зеленими"},{"key":"absent","english":"We expected the 'a' and 'u' to be absent","target":"Ми очікували, що літери 'a' та 'u' матимуть стан absent"},{"key":"present","english":"We expected the 'l' and 'e' to be present.","target":"Ми очікували, що літери 'l' та 'e' матимуть стан present."},{"key":"complex","english":"We expected present, present, present, correct, absent","target":"Ми очікували: present, present, present, correct, absent"},{"key":"differentWord","english":"We expected correct, present, present, present, absent","target":"Ми очікували: correct, present, present, present, absent"},{"key":"rowMismatch","english":null,"target":"Літера «{{letter}}» у комірці {{square}} має бути «{{expected}}», а не «{{actual}}»."},{"key":"rowNotColored","english":null,"target":"Рядок так і не було розфарбовано."},{"key":"rowWrongLength","english":null,"target":"Кількість станів у рядку: {{actual}}, а потрібно {{expected}}."}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":"Обробити одну спробу"},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":"Створіть функцію processGuess, яка приймає секретне слово та спробу, визначає стан кожної літери (correct, present або absent), а потім викликає colorRow(1, states) з результатами."}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":"Усі правильні"},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":"Обробіть повністю правильну спробу"},{"key":"absent.name","english":"Some absent","target":"Деякі відсутні"},{"key":"absent.description","english":"Handle when some letters are wrong","target":"Обробіть випадок, коли деякі літери неправильні"},{"key":"present.name","english":"Some present","target":"Деякі присутні"},{"key":"present.description","english":"Deal with letters in the wrong place","target":"Обробіть літери, які стоять не на своєму місці"},{"key":"complex.name","english":"Complex","target":"Складний"},{"key":"complex.description","english":"Deal with a more complex scenario","target":"Обробіть складніший сценарій"},{"key":"differentWord.name","english":"A different word","target":"Інше слово"},{"key":"differentWord.description","english":"And finally a different word!","target":"І нарешті інше слово!"}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":"Як порівняти кожну літеру спроби із секретним словом?"},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":"Пройдімося циклом по позиціях від `0` до `4`. Для кожної позиції порівняймо `guess[i]` з `target[i]`."},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":"Коли літера отримує стан `\"correct\"`, `\"present\"` чи `\"absent\"`?"},{"key":"stateRules.answer","english":"If `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":"Якщо `guess[i]` дорівнює `target[i]`, то це `\"correct\"`. Інакше, якщо літера є десь у `target`, то це `\"present\"`. Якщо ні, то це `\"absent\"`."},{"key":"buildList.question","english":"How do I build up the array of states?","target":"Як поступово наповнити масив станів?"},{"key":"buildList.answer","english":"Start with an empty array, then use `states.push(value)` inside the loop to add each state onto the end in order.","target":"Почнімо з порожнього масиву, а потім усередині циклу використаймо `states.push(value)`, щоб по черзі додавати кожен стан у кінець."},{"key":"finishedList.question","english":"Where does the finished array go?","target":"Куди передати готовий масив?"},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to color the first row of the board with your computed states.","target":"Передайте його у виклик `colorRow(1, states)`, щоб розфарбувати перший рядок ігрового поля обчисленими станами."}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":"Розфарбовує рядок на ігровому полі Wordle відповідно до заданих станів."},{"key":"colorRow.category","english":"Wordle","target":"Wordle"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Додає елемент у кінець масиву, змінюючи сам масив."},{"key":"push.category","english":"Arrays","target":"Масиви"},{"key":"includes.description","english":"Checks whether a string contains another string, returning true or false.","target":"Перевіряє, чи містить один рядок тексту інший, і повертає правду або неправду."},{"key":"includes.category","english":"Strings","target":"Рядки тексту"}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":"розфарбував рядок на ігровому полі Wordle"}]}]}]
---

Ласкаво просимо до Wordle, гри, яка стала шалено популярною під час локдаунів Covid-19!

Гра працює так:

- Є секретне слово, яке гравець намагається вгадати.
- Гравець має 6 спроб, щоб вгадати його.
- Для кожної спроби є 5 комірок, по одній на кожну літеру:
  - Якщо літера правильна, комірка стає зеленою.
  - Якщо літера є в секретному слові, але стоїть не на своєму місці, комірка стає жовтою.
  - Якщо літери в секретному слові немає, комірка стає сірою.

За кілька вправ ми реалізуємо всю гру Wordle, але в **цій вправі** ми лише змусимо все працювати для першого рядка.

Для цього створіть функцію `processGuess(target, guess)` (обробити спробу). Вона має визначити стан кожної літери у спробі, а потім викликати функцію `colorRow(1, states)` (розфарбувати рядок) з масивом станів для кожної літери: `"correct"`, `"present"` або `"absent"`.

Наприклад, виклик `processGuess("Hello", "Holes")` має використати `colorRow` так:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Переконайтеся, що розумієте цей приклад, перш ніж рухатися далі!

### Методи

Як і в кількох попередніх вправах, масив станів можна поступово наповнювати за допомогою методу `push`, який додає елемент у кінець масиву. Наприклад, `states.push("correct")` додає `"correct"` у кінець масиву `states`.

Також доступний метод `includes`, якщо потрібно перевірити, чи містить один рядок тексту (англ. _string_) інший.

Успіхів!
