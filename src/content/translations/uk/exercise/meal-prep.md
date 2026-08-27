---
lang: "uk"
type: "exercise"
slug: "meal-prep"
title: "Приготування страв"
status: "published"
source_repo: "i18n"
source_path: "locales/uk/curriculum/exercises/meal-prep"
en_md5: "8bcf8310b9da1c637816c3b85a27725c"
governance_sha: "accabaea"
content_version: "dbb75f793b0a"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":"Створити список покупок"},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":"Напишіть функцію, яка приймає вміст холодильника та інгредієнти рецепта й повертає те, що потрібно купити (інгредієнти рецепта, яких немає в холодильнику)."}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":"Порожній холодильник"},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":"Коли холодильник порожній, купити доведеться все."},{"key":"youHaveEverything.name","english":"You have everything","target":"Усе вже є"},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":"Коли всі інгредієнти вже є, список покупок порожній."},{"key":"oneThing.name","english":"One thing","target":"Лише одне"},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":"Коли бракує лише одного інгредієнта."},{"key":"fewThings.name","english":"A few things","target":"Кілька речей"},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":"Коли бракує кількох інгредієнтів."}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":"Як би ми зробили це в реальному житті?"},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":"Ми б пройшлися рецептом, інгредієнт за інгредієнтом, і для кожного зазирнули б у холодильник. Усе, чого бракує, потрапляє до списку покупок. Наш код робить те саме."},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":"Як перевірити, чи є щось у холодильнику?"},{"key":"checkFridgeItem.answer","english":"The `includes` method does this for you. Calling it on the fridge with an ingredient gives you back `true` or `false`.","target":"Метод `includes` робить це за нас. Якщо викликати його на масиві з вмістом холодильника й передати інгредієнт, він поверне `true` або `false`."},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":"Як побудувати список покупок?"},{"key":"buildShoppingList.answer","english":"Start with an empty array. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":"Почнімо з порожнього масиву. Кожен інгредієнт рецепта, якого немає в холодильнику, додаймо до списку покупок за допомогою `push()`."}]},{"name":"functions","rows":[{"key":"includes.description","english":"Checks whether an array contains a specific item, returning true or false.","target":"Перевіряє, чи містить масив певний елемент, і повертає true або false."},{"key":"includes.category","english":"Arrays","target":"Масиви"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Додає елемент у кінець масиву, змінюючи сам масив."},{"key":"push.category","english":"Arrays","target":"Масиви"}]}]}]
---

Ми з тих людей, хто любить щодня заскочити до крамниці по інгредієнти для вечері. Це чудова нагода розімʼяти ноги й побалакати з місцевим продавцем.

Щодня ми обираємо рецепт, потім зазираємо в холодильник і занотовуємо, що потрібно купити.

А тепер ми вирішили трохи полегшити собі життя й написати програму, яка зробить усю важку роботу за нас! Вона звіряє те, що є в нашому списку, з тим, що лежить у холодильнику, і видає різницю.

Наше завдання: написати функцію з назвою `shoppingList(fridgeContents, recipeItems)` (список покупок). Вона приймає два набори вхідних даних: вміст холодильника як масив рядків тексту (англ. _string_) та інгредієнти рецепта, теж як масив рядків тексту. Функція має повернути те, що потрібно купити, також масивом рядків тексту.

Наприклад:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### Метод push

Щоб розвʼязати цю вправу, потрібно будувати свій масив за допомогою методу `.push(element)`. У своєму коді можна створити лише один новий масив. Якщо ми не впевнені, що робити, варто ще раз переглянути попереднє відео.

Також може стати в пригоді метод `includes` (нагадування про нього є нижче).

Успіхів!
