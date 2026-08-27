---
lang: "pt-PT"
type: "exercise"
slug: "meal-prep"
title: "Preparação de refeições"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/meal-prep"
en_md5: "8bcf8310b9da1c637816c3b85a27725c"
governance_sha: "accabaea"
content_version: "875d3cee78c3"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":"Criar lista de compras"},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":"Escreve uma função que recebe o conteúdo do teu frigorífico e os ingredientes de uma receita, e devolve os itens que precisas de comprar (os itens da receita que não estão no frigorífico)."}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":"Frigorífico vazio"},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":"Quando o frigorífico está vazio, precisas de comprar tudo."},{"key":"youHaveEverything.name","english":"You have everything","target":"Tens tudo"},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":"Quando tens todos os ingredientes, a lista de compras está vazia."},{"key":"oneThing.name","english":"One thing","target":"Uma coisa"},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":"Quando te falta apenas um ingrediente."},{"key":"fewThings.name","english":"A few things","target":"Algumas coisas"},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":"Quando te faltam alguns ingredientes."}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":"Como é que eu faria isto na vida real?"},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":"Percorrerias a receita um ingrediente de cada vez e verificarias o frigorífico para cada um. O que estiver em falta vai para a lista de compras. O teu código faz o mesmo."},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":"Como é que verifico se um item está no frigorífico?"},{"key":"checkFridgeItem.answer","english":"The `includes` method does this for you. Calling it on the fridge with an ingredient gives you back `true` or `false`.","target":"Ao chamares o método `includes` no frigorífico com um ingrediente, ele devolve-te `true` ou `false`."},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":"Como é que construo a lista de compras?"},{"key":"buildShoppingList.answer","english":"Start with an empty array. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":"Começa com um array vazio. Para cada item da receita que o frigorífico não contém, usa `push()` para o adicionares à lista de compras."}]},{"name":"functions","rows":[{"key":"includes.description","english":"Checks whether an array contains a specific item, returning true or false.","target":"Verifica se um array contém um item específico, devolvendo true ou false."},{"key":"includes.category","english":"Arrays","target":"Arrays"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Acrescenta um elemento ao final de um array, alterando o array no local."},{"key":"push.category","english":"Arrays","target":"Arrays"}]}]}]
---

És o tipo de pessoa que gosta de dar um salto às lojas todos os dias para comprar os ingredientes de que precisas para o jantar. É uma boa desculpa para esticar as pernas e conversar com o lojista lá da zona.

Todos os dias escolhes uma receita, verificas o que há no frigorífico e apontas o que precisas de comprar.

Agora decidiste tornar a tua vida um pouco mais fácil: vais escrever um programa que faz o trabalho pesado por ti! Ele verifica o que está na tua lista, compara com o que está no frigorífico e devolve a diferença.

O teu trabalho é escrever uma função chamada `shoppingList(fridgeContents, recipeItems)` (lista de compras). Recebe dois parâmetros de entrada: o conteúdo do teu frigorífico como um array de strings, e os itens da receita, também como um array de strings. Deve devolver as coisas que precisas de comprar, como um array de strings.

Por exemplo:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### O método push

Para resolveres o exercício, precisas de construir o teu array com o método `.push(element)`. Só podes criar um array novo no teu código. Vê o vídeo anterior outra vez se não tiveres a certeza do que fazer.

Também podes querer usar o método `includes` (vê abaixo para recordar).

Diverte-te!
