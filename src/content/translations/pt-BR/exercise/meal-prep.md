---
lang: "pt-BR"
type: "exercise"
slug: "meal-prep"
title: "Preparo de Refeições"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/meal-prep"
en_md5: "8bcf8310b9da1c637816c3b85a27725c"
governance_sha: "accabaea"
content_version: "2c214593f707"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":"Criar a lista de compras"},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":"Escreva uma função que recebe o conteúdo da sua geladeira e os ingredientes de uma receita, e retorna os itens que você precisa comprar (os itens da receita que não estão na geladeira)."}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":"Geladeira vazia"},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":"Quando a geladeira está vazia, você precisa comprar tudo."},{"key":"youHaveEverything.name","english":"You have everything","target":"Você tem tudo"},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":"Quando você tem todos os ingredientes, a lista de compras fica vazia."},{"key":"oneThing.name","english":"One thing","target":"Uma coisa só"},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":"Quando falta só um ingrediente."},{"key":"fewThings.name","english":"A few things","target":"Algumas coisas"},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":"Quando faltam alguns ingredientes."}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":"Como eu faria isso na vida real?"},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":"Você passaria pela receita um ingrediente de cada vez e conferiria a geladeira para cada um. O que estiver faltando vai para a lista de compras. Seu código faz a mesma coisa."},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":"Como eu confiro se um item está na geladeira?"},{"key":"checkFridgeItem.answer","english":"The `includes` method does this for you. Calling it on the fridge with an ingredient gives you back `true` or `false`.","target":"O método `includes` faz isso por você. Chame-o na geladeira passando um ingrediente e ele retorna `true` ou `false`."},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":"Como eu monto a lista de compras?"},{"key":"buildShoppingList.answer","english":"Start with an empty array. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":"Comece com um array vazio. Para cada item da receita que a geladeira não contém, use `push()` para colocá-lo na lista de compras."}]},{"name":"functions","rows":[{"key":"includes.description","english":"Checks whether an array contains a specific item, returning true or false.","target":"Confere se um array contém um item específico, retornando true ou false."},{"key":"includes.category","english":"Arrays","target":"Arrays"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Adiciona um elemento ao final de um array, modificando o próprio array."},{"key":"push.category","english":"Arrays","target":"Arrays"}]}]}]
---

Você é o tipo de pessoa que gosta de dar um pulinho no mercado todo dia para comprar os ingredientes do jantar. É uma boa desculpa para esticar as pernas e bater um papo com o dono da vendinha do bairro.

Todo dia você escolhe uma receita, confere o que tem na geladeira e anota o que precisa comprar.

Agora você decidiu facilitar a sua vida escrevendo um programa que faz o trabalho pesado por você! Ele confere o que está na sua lista, compara com o que tem na geladeira e mostra a diferença.

Seu trabalho é escrever uma função chamada `shoppingList(fridgeContents, recipeItems)` (lista de compras). Ela recebe duas entradas: o conteúdo da sua geladeira, como um array de strings, e os itens da receita, também como um array de strings. Ela deve retornar as coisas que você precisa comprar, como um array de strings.

Por exemplo:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### O método push

Para resolver o exercício, você precisa montar seu array usando o método `.push(element)`. Você só pode criar um array novo no seu código. Assista de novo ao vídeo anterior se não tiver certeza do que fazer.

Você também pode querer usar o método `includes` (veja abaixo para relembrar).

Divirta-se!
