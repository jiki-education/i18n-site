---
lang: "es-419"
type: "exercise"
slug: "meal-prep"
title: "Preparación de comidas"
status: "published"
source_repo: "i18n"
source_path: "locales/es-419/curriculum/exercises/meal-prep"
en_md5: "8bcf8310b9da1c637816c3b85a27725c"
governance_sha: "accabaea"
content_version: "99eb5fce10da"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":"Crear lista de compras"},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":"Escribe una función que reciba el contenido de tu refrigerador y los ingredientes de una receta, y devuelva los artículos que necesitas comprar (los artículos de la receta que no están en el refrigerador)."}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":"Refrigerador vacío"},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":"Cuando el refrigerador está vacío, necesitas comprar todo."},{"key":"youHaveEverything.name","english":"You have everything","target":"Tienes todo"},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":"Cuando tienes todos los ingredientes, la lista de compras está vacía."},{"key":"oneThing.name","english":"One thing","target":"Falta un artículo"},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":"Cuando te falta solo un ingrediente."},{"key":"fewThings.name","english":"A few things","target":"Faltan varios artículos"},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":"Cuando te faltan varios ingredientes."}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":"¿Cómo lo haría en la vida real?"},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":"Irías repasando la receta ingrediente por ingrediente y revisarías el refrigerador para cada uno. Lo que falte va a la lista de compras. Tu código hace lo mismo."},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":"¿Cómo verifico si un artículo está en el refrigerador?"},{"key":"checkFridgeItem.answer","english":"The `includes` method does this for you. Calling it on the fridge with an ingredient gives you back `true` or `false`.","target":"El método `includes` hace esto por ti. Al llamarlo en el refrigerador con un ingrediente, te devuelve `true` o `false`."},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":"¿Cómo armo la lista de compras?"},{"key":"buildShoppingList.answer","english":"Start with an empty array. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":"Empieza con un array vacío. Para cada artículo de la receta que el refrigerador no contenga, usa `push()` para agregarlo a la lista de compras."}]},{"name":"functions","rows":[{"key":"includes.description","english":"Checks whether an array contains a specific item, returning true or false.","target":"Verifica si un array contiene un elemento específico, devolviendo true o false."},{"key":"includes.category","english":"Arrays","target":"Arrays"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Agrega un elemento al final de un array, modificando el array en su lugar."},{"key":"push.category","english":"Arrays","target":"Arrays"}]}]}]
---

Eres de esas personas a las que les gusta pasarse por la tienda cada día para comprar los ingredientes que necesitas para la cena. Es una buena excusa para estirar las piernas y charlar con el tendero del barrio.

Cada día eliges una receta, revisas lo que hay en el refrigerador y anotas lo que necesitas comprar.

Ahora decidiste hacerte la vida un poco más fácil: escribir un programa que hace el trabajo pesado por ti. El programa revisa lo que está en tu lista, lo compara con lo que hay en el refrigerador y te muestra la diferencia.

Tu tarea es escribir una función llamada `shoppingList(fridgeContents, recipeItems)` (lista de compras). Recibe dos argumentos: el contenido de tu refrigerador como un array de strings y los ingredientes de la receta, también como un array de strings. Debe devolver lo que necesitas comprar, como un array de strings.

Por ejemplo:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### El método push

Para resolver el ejercicio, necesitas armar tu array usando el método `.push(element)`. Solo puedes crear un array nuevo en tu código. Si no estás seguro de qué hacer, vuelve a ver el video anterior.

Quizás también quieras usar el método `includes` (más abajo hay un recordatorio).

¡Diviértete!
