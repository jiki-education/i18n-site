---
lang: "es-ES"
type: "exercise"
slug: "meal-prep"
title: "Preparación de comidas"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/meal-prep"
en_md5: "8bcf8310b9da1c637816c3b85a27725c"
governance_sha: "accabaea"
content_version: "d3da50ceef99"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":"Crear lista de la compra"},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":"Escribe una función que reciba el contenido de tu nevera y los ingredientes de una receta, y devuelva lo que necesitas comprar (los ingredientes de la receta que no están en la nevera)."}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":"Nevera vacía"},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":"Cuando la nevera está vacía, necesitas comprar todo."},{"key":"youHaveEverything.name","english":"You have everything","target":"Tienes todo"},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":"Cuando tienes todos los ingredientes, la lista de la compra está vacía."},{"key":"oneThing.name","english":"One thing","target":"Una cosa"},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":"Cuando te falta solo un ingrediente."},{"key":"fewThings.name","english":"A few things","target":"Unas cuantas cosas"},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":"Cuando te faltan unos cuantos ingredientes."}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":"¿Cómo haría esto en la vida real?"},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":"Repasarías la receta ingrediente a ingrediente y comprobarías la nevera para cada uno. Lo que falte se añade a la lista de la compra. Tu código hace lo mismo."},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":"¿Cómo compruebo si un ingrediente está en la nevera?"},{"key":"checkFridgeItem.answer","english":"The `includes` method does this for you. Calling it on the fridge with an ingredient gives you back `true` or `false`.","target":"El método `includes` lo hace por ti. Llamarlo sobre la nevera con un ingrediente te devuelve `true` o `false`."},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":"¿Cómo construyo la lista de la compra?"},{"key":"buildShoppingList.answer","english":"Start with an empty array. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":"Empieza con un array vacío. Por cada ingrediente de la receta que no esté en la nevera, añádelo a la lista de la compra con `push()`."}]},{"name":"functions","rows":[{"key":"includes.description","english":"Checks whether an array contains a specific item, returning true or false.","target":"Comprueba si un array contiene un elemento específico, devolviendo true o false."},{"key":"includes.category","english":"Arrays","target":"Arrays"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Añade un elemento al final de un array, modificando el array en su lugar."},{"key":"push.category","english":"Arrays","target":"Arrays"}]}]}]
---

Eres de esas personas a las que les gusta pasarse por la tienda cada día para comprar los ingredientes que necesitas para la cena. Es una buena excusa para estirar las piernas y charlar con el tendero del barrio.

Cada día eliges una receta, miras lo que hay en la nevera y apuntas lo que tienes que comprar.

Ahora has decidido hacerte la vida un poco más fácil escribiendo un programa que haga el trabajo duro por ti. Comprueba lo que hay en tu lista, lo compara con lo que hay en la nevera y te muestra la diferencia.

Tu tarea es escribir una función llamada `shoppingList(fridgeContents, recipeItems)` (lista de la compra). Recibe dos entradas: el contenido de tu nevera como un array de strings y los ingredientes de la receta, también como un array de strings. Debe devolver las cosas que necesitas comprar, como un array de strings.

Por ejemplo:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### El método push

Para resolver el ejercicio tienes que ir construyendo tu array con el método `.push(element)`. Solo puedes crear un array nuevo en tu código. Si no tienes claro qué hacer, vuelve a ver el vídeo anterior.

También puedes usar el método `includes` (más abajo tienes un recordatorio).

¡Diviértete!
