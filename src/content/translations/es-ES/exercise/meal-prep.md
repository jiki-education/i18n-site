---
lang: "es-ES"
type: "exercise"
slug: "meal-prep"
title: "Preparación de comidas"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/meal-prep"
en_md5: "b3409be0d1afe4f277b21f4a3ce5c209"
governance_sha: "16f805d"
content_version: "23c941633def"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":null},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":null}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":null},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":null},{"key":"youHaveEverything.name","english":"You have everything","target":null},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":null},{"key":"oneThing.name","english":"One thing","target":null},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":null},{"key":"fewThings.name","english":"A few things","target":null},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":null}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":null},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":null},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":null},{"key":"checkFridgeItem.answer","english":"A small helper, something like 'is this item in this list?', keeps the main loop readable. Inside it, loop through the list and compare each entry to the item you're looking for.","target":null},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":null},{"key":"buildShoppingList.answer","english":"Start with an empty list. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":null}]},{"name":"functions","rows":[{"key":"push.description","english":"Returns a new list with the element added to the end (provided by level stdlib)","target":null},{"key":"push.category","english":"List Operations","target":null}]}]}]
---

You're the sort of person that likes to pop to the shops each day to get whatever ingredients you need for dinner. It gives you a nice excuse to stretch your legs and chat to the local shopkeeper.

Each day you choose a recipe, then check what's in the fridge, and note down what you need to buy.

Now you've decided to make your life a little easier, by writing a program to do the hard work for you!

Write a function called <define>`shoppingList`</define>. It takes two inputs: the contents of your fridge as a list of strings, and the items in the recipe as a list of strings. It should return the things you need to buy, as a list of strings.
