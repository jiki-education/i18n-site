---
lang: "pt-PT"
type: "exercise"
slug: "lunchbox"
title: "Lancheira"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/lunchbox"
en_md5: "1b10370bd59c8562e032443bbe98c6b3"
governance_sha: "accabaea"
content_version: "1d61e46a1ab4"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"A tua solução tem demasiadas linhas de código. Consegues torná-la mais curta?"}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":"Arruma a lancheira"},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a rucksack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the rucksack.","target":"Divide os itens entre a lancheira e a mochila: arruma o máximo que conseguires na lancheira sem ultrapassar a capacidade, e põe tudo o resto na mochila."},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":"Resolve em 16 linhas de código"},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":"Consegues resolver este exercício com apenas 16 linhas de código?"}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":"Cabe tudo"},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the rucksack stays empty.","target":"Uma lancheira espaçosa onde todos os itens cabem, por isso a mochila fica vazia."},{"key":"packTheMost.name","english":"Fit the most","target":"Arruma o máximo"},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the rucksack.","target":"O espaço é apertado, por isso os itens pequenos vão para a lancheira e os grandes ficam para a mochila."},{"key":"justTheSnack.name","english":"Just the snack","target":"Só o lanche"},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the rucksack.","target":"Só o item mais pequeno de todos cabe; os restantes vão para a mochila."},{"key":"nothingFits.name","english":"Nothing fits","target":"Não cabe nada"},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the rucksack.","target":"Até o item mais pequeno é demasiado grande, por isso tudo acaba na mochila."},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":"Lancheira vazia"},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the rucksack come back empty.","target":"Não há itens de todo, por isso tanto a lancheira como a mochila voltam vazias."},{"key":"bonus1.name","english":"16 lines of code","target":"16 linhas de código"},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":"Resolve o exercício com apenas 16 linhas de código."}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":"Como obtenho o nome e o tamanho de cada item?"},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":"Cada item é um par. A primeira parte é o nome e a segunda é o tamanho, por isso podes lê-los um de cada vez."},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":"Como arrumo o maior número possível de itens?"},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":"Pensa em quais itens adicionar primeiro. Itens mais pequenos deixam mais espaço para os outros, por isso compensa tratar deles antes dos grandes."},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":"Os itens estão listados do maior para o menor — como é que os percorro do menor para o maior?"},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":"Há um método de array que te devolve uma cópia invertida de um array. Inverte os itens primeiro, e depois percorre-os nessa nova ordem."},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":"Como é que decido para onde vai cada item?"},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the rucksack.","target":"Mantém um total acumulado dos tamanhos que já adicionaste. Antes de adicionar um item, verifica se o total mais o tamanho dele ainda cabe dentro da capacidade. Se couber, vai para a lancheira; caso contrário, vai para a mochila."}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":"Devolve uma cópia do array com os elementos pela ordem inversa, sem alterar o original."},{"key":"toReversed.category","english":"Arrays","target":"Arrays"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Adiciona um elemento ao fim do array, alterando-o diretamente."},{"key":"push.category","english":"Arrays","target":"Arrays"}]}]}]
---

Quando andava na escola, arrumava a lancheira todos os dias. A minha mãe deixava-me os itens à minha frente (arrumados do maior para o menor) e eu tentava pôr o máximo possível na lancheira, mas, claro, só cabia nela uma certa quantidade. O que não coubesse na lancheira, tinha de o pôr na mochila e de andar com ele o dia inteiro, em vez de o deixar no cacifo.

Neste exercício, o teu trabalho é criar um algoritmo que determine o que eu consigo pôr na lancheira e o que tenho de pôr na mochila.

O teu trabalho é escrever uma função chamada `packLunch(items, capacity)` (arrumar a lancheira). A função recebe dois parâmetros de entrada: o array de itens (do maior para o menor) e o tamanho da lancheira `capacity` (capacidade), um número.

O array de itens é um array aninhado: cada item também é um array com dois elementos, o nome do item e o tamanho do item. Os itens vão sempre do maior para o menor. Por exemplo, o array de itens pode ser:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

A lancheira tem uma capacidade máxima. Tens de descobrir que itens podem ir para a lancheira. Arruma o máximo de itens que conseguires. Tudo o resto deve ir para a mochila.

A tua função deve devolver um array que contém dois elementos. O primeiro elemento é um array com os itens para a lancheira, e o segundo é o array com os itens para a mochila. Os dois arrays devem estar ordenados do menor para o maior.

Por exemplo, para o array acima, com uma capacidade de 20, espera-se que devolvas o seguinte:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Métodos úteis

Tal como em todos os exercícios desta seção, vais querer usar o método `.push(element)` para construir os teus arrays.

Também tens um novo método chamado `[...].toReversed()`, que cria uma cópia de um array com todos os itens pela ordem inversa. Por exemplo:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Não tens de o usar, mas pode dar jeito.

Diverte-te!
