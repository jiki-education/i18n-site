---
lang: "pt-BR"
type: "exercise"
slug: "lunchbox"
title: "Lancheira"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/lunchbox"
en_md5: "b6274dbfc7f2e050c514feb7da65b588"
governance_sha: "3af8e97d"
content_version: "488a88886177"
published_at: "2026-08-28"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Sua solução tem linhas de código demais. Consegue deixá-la mais curta?"}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":"Arrume a lancheira"},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a backpack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the backpack.","target":"Separe os itens entre a lancheira e a mochila: encaixe o máximo que conseguir na lancheira sem passar da capacidade dela e coloque todo o resto na mochila."},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":"Resolva em 16 linhas de código"},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":"Consegue resolver este exercício com apenas 16 linhas de código?"}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":"Tudo cabe"},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the backpack stays empty.","target":"Uma lancheira espaçosa onde todos os itens cabem, então a mochila fica vazia."},{"key":"packTheMost.name","english":"Fit the most","target":"Encaixe o máximo"},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the backpack.","target":"O espaço é apertado, então os itens pequenos vão na lancheira e os grandes ficam para a mochila."},{"key":"justTheSnack.name","english":"Just the snack","target":"Só o lanchinho"},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the backpack.","target":"Só o menor item de todos cabe; o resto vai para a mochila."},{"key":"nothingFits.name","english":"Nothing fits","target":"Nada cabe"},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the backpack.","target":"Até o menor item é grande demais, então tudo acaba na mochila."},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":"Lancheira vazia"},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the backpack come back empty.","target":"Não há nenhum item, então tanto a lancheira quanto a mochila voltam vazias."},{"key":"bonus1.name","english":"16 lines of code","target":"16 linhas de código"},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":"Resolva o exercício com apenas 16 linhas de código."}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":"Como pego o nome e o tamanho de cada item?"},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":"Cada item é um par. A primeira parte é o nome e a segunda é o tamanho, então você pode ler os dois de dentro do item, um de cada vez."},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":"Como encaixo o máximo de itens possível?"},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":"Pense em quais itens adicionar primeiro. Itens menores deixam mais espaço para os outros, então vale a pena cuidar deles antes dos grandes."},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":"Os itens vêm do maior para o menor. Como percorro do menor para o maior?"},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":"Existe um método de array que retorna uma cópia invertida do array. Inverta os itens primeiro e depois trabalhe com eles nessa nova ordem."},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":"Como decido para onde vai cada item?"},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the backpack.","target":"Mantenha um total dos tamanhos que você já adicionou. Antes de adicionar um item, verifique se o total mais o tamanho dele ainda cabe dentro da capacidade. Se couber, ele vai para a lancheira; caso contrário, vai para a mochila."}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":"Retorna uma cópia do array com os elementos na ordem inversa, sem alterar o original."},{"key":"toReversed.category","english":"Arrays","target":"Arrays"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Adiciona um elemento ao final de um array, alterando o próprio array."},{"key":"push.category","english":"Arrays","target":"Arrays"}]}]}]
---

Quando era criança, eu arrumava minha lancheira todos os dias para a escola. Minha mãe deixava os itens separados para mim (organizados do maior para o menor) e eu tentava encaixar o máximo possível na lancheira, mas é claro que só cabia uma certa quantidade. Tudo o que não cabia, eu tinha que colocar na mochila e carregar comigo o dia inteiro, em vez de deixar no meu armário.

Neste exercício, seu trabalho é criar um algoritmo que descubra o que cabe na lancheira e o que eu preciso colocar na mochila.

Sua tarefa é escrever uma função chamada `packLunch(items, capacity)` (empacotar o lanche) que recebe duas entradas: o array de itens (do maior para o menor) e o tamanho da lancheira, `capacity` (capacidade), que é um número.

O array de itens é um array aninhado: cada item também é um array com dois elementos, o nome do item e o tamanho dele. Os itens vêm sempre do maior para o menor. Por exemplo, o array de itens pode ser:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

A lancheira tem uma capacidade máxima. Você precisa descobrir quais itens podem ir na lancheira. Coloque o máximo de itens que conseguir. Todo o resto deve ir para a mochila.

Sua função deve retornar um array com dois elementos. O primeiro elemento é um array com os itens da lancheira, e o segundo, com os itens da mochila. Os dois arrays devem estar ordenados do menor para o maior.

Por exemplo, para o array acima, com uma capacidade de 20, o esperado seria:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Métodos para ajudar

Como em todos os exercícios desta seção, você vai querer usar o método `.push(element)` para montar seus arrays.

Você também tem um método novo chamado `[...].toReversed()`, que cria uma cópia de um array com todos os itens na ordem inversa. Por exemplo:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Você não precisa usá-lo, mas ele pode ser útil.

Divirta-se!
