---
lang: "fr"
type: "exercise"
slug: "meal-prep"
title: "Préparation des repas"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/meal-prep"
en_md5: "8bcf8310b9da1c637816c3b85a27725c"
governance_sha: "accabaea"
content_version: "f47774e25bc7"
published_at: "2026-08-27"
forum_topic_id: 1673
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":"Crée la liste de courses"},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":"Écris une fonction qui prend le contenu de ton frigo et les ingrédients d'une recette, et renvoie ce que tu dois acheter (les ingrédients de la recette qui ne sont pas dans le frigo)."}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":"Frigo vide"},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":"Quand le frigo est vide, tu dois tout acheter."},{"key":"youHaveEverything.name","english":"You have everything","target":"Tu as tout"},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":"Quand tu as tous les ingrédients, la liste de courses est vide."},{"key":"oneThing.name","english":"One thing","target":"Un seul ingrédient"},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":"Quand il ne te manque qu'un seul ingrédient."},{"key":"fewThings.name","english":"A few things","target":"Quelques ingrédients"},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":"Quand il te manque quelques ingrédients."}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":"Comment est-ce que je ferais ça dans la vraie vie ?"},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":"En parcourant la recette ingrédient par ingrédient, puis en vérifiant le frigo pour chaque. Tout ce qui manque va sur la liste de courses. Ton code fait exactement la même chose."},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":"Comment vérifier si un ingrédient est dans le frigo ?"},{"key":"checkFridgeItem.answer","english":"The `includes` method does this for you. Calling it on the fridge with an ingredient gives you back `true` or `false`.","target":"La méthode `includes` le fait pour toi. Appelle-la sur le frigo avec un ingrédient : elle te renvoie `true` ou `false`."},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":"Comment construire la liste de courses ?"},{"key":"buildShoppingList.answer","english":"Start with an empty array. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":"Commence avec un tableau vide. Pour chaque ingrédient de la recette que le frigo ne contient pas, ajoute-le à la liste de courses avec `push()`."}]},{"name":"functions","rows":[{"key":"includes.description","english":"Checks whether an array contains a specific item, returning true or false.","target":"Vérifie si un tableau contient un élément précis, et renvoie true ou false."},{"key":"includes.category","english":"Arrays","target":"Tableaux"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Ajoute un élément à la fin d'un tableau, en modifiant directement le tableau."},{"key":"push.category","english":"Arrays","target":"Tableaux"}]}]}]
---

Tu fais partie des gens qui aiment passer au magasin chaque jour pour acheter les ingrédients du dîner. Ça te donne une bonne excuse pour te dégourdir les jambes et discuter avec le commerçant du coin.

Chaque jour, tu choisis une recette, puis tu regardes ce qu'il y a dans le frigo et tu notes ce qu'il te faut acheter.

Tu as maintenant décidé de te simplifier la vie en écrivant un programme qui fait le travail à ta place ! Il compare ce qu'il y a sur ta liste avec ce qu'il y a dans le frigo, et affiche la différence.

Ton travail consiste à écrire une fonction appelée `shoppingList(fridgeContents, recipeItems)` (liste de courses). Elle prend deux entrées : le contenu de ton frigo, sous forme de tableau de _strings_, et les ingrédients de la recette, également en tableau de _strings_. Elle doit renvoyer ce qu'il te faut acheter, là aussi sous forme de tableau de _strings_.

Par exemple :

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### La méthode push

Pour résoudre l'exercice, tu dois construire ton tableau à l'aide de la méthode `.push(element)`. Tu ne peux créer qu'un seul nouveau tableau dans ton code. Revois la vidéo précédente si tu ne sais pas trop quoi faire.

Tu peux aussi utiliser la méthode `includes` (voir le rappel ci-dessous).

Amuse-toi bien !
