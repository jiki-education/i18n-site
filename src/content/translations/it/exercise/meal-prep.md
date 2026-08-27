---
lang: "it"
type: "exercise"
slug: "meal-prep"
title: "Preparazione dei pasti"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/exercises/meal-prep"
en_md5: "8bcf8310b9da1c637816c3b85a27725c"
governance_sha: "accabaea"
content_version: "aa7adb12bff3"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":"Crea la lista della spesa"},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":"Scrivi una funzione che accetta il contenuto del frigo e gli ingredienti di una ricetta e restituisce gli ingredienti che devi comprare (gli ingredienti della ricetta che non sono nel frigo)."}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":"Frigo vuoto"},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":"Quando il frigo è vuoto, devi comprare tutto."},{"key":"youHaveEverything.name","english":"You have everything","target":"Hai tutto"},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":"Quando hai tutti gli ingredienti, la lista della spesa è vuota."},{"key":"oneThing.name","english":"One thing","target":"Un ingrediente"},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":"Quando ti manca un solo ingrediente."},{"key":"fewThings.name","english":"A few things","target":"Alcuni ingredienti"},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":"Quando ti mancano alcuni ingredienti."}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":"Come lo farei nella vita reale?"},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":"Scorri la ricetta un ingrediente alla volta e controlli il frigo per ciascuno. Tutto ciò che manca va sulla lista della spesa. Il programma fa la stessa cosa."},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":"Come controllo se un ingrediente è nel frigo?"},{"key":"checkFridgeItem.answer","english":"The `includes` method does this for you. Calling it on the fridge with an ingredient gives you back `true` or `false`.","target":"Il metodo `includes` lo fa per te. Chiamandolo sul frigo con un ingrediente ti restituisce `true` o `false`."},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":"Come costruisco la lista della spesa?"},{"key":"buildShoppingList.answer","english":"Start with an empty array. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":"Inizia con un array vuoto. Per ogni ingrediente della ricetta che il frigo non contiene, aggiungilo alla lista della spesa con `push()`."}]},{"name":"functions","rows":[{"key":"includes.description","english":"Checks whether an array contains a specific item, returning true or false.","target":"Controlla se un array contiene un elemento specifico, restituendo vero o falso."},{"key":"includes.category","english":"Arrays","target":"Array"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Aggiunge un elemento alla fine di un array, modificando l'array stesso."},{"key":"push.category","english":"Arrays","target":"Array"}]}]}]
---

Sei il tipo di persona a cui piace fare un salto al negozio ogni giorno per comprare gli ingredienti che ti servono per cena. È una bella scusa per sgranchirti le gambe e scambiare due chiacchiere con il negoziante sotto casa.

Ogni giorno scegli una ricetta, poi controlli cosa c'è nel frigo e annoti cosa devi comprare.

Ora hai deciso di semplificarti un po' la vita scrivendo un programma che fa il lavoro faticoso al posto tuo! Confronta quello che c'è sulla lista con quello che c'è nel frigo e restituisce la differenza.

Il tuo compito è scrivere una funzione chiamata `shoppingList(fridgeContents, recipeItems)` (lista della spesa). Accetta due input: il contenuto del frigo come array di stringhe e gli ingredienti della ricetta, anche questi come array di stringhe. Deve restituire ciò che devi comprare, come array di stringhe.

Per esempio:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### Il metodo push

Per risolvere l'esercizio devi costruire l'array usando il metodo `.push(element)`. Puoi creare un solo nuovo array nel codice. Riguarda il video precedente se non sei sicuro di cosa fare.

Potresti anche usare il metodo `includes` (più sotto trovi un ripasso).

Buon divertimento!
