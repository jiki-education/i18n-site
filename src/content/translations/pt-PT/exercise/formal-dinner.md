---
lang: "pt-PT"
type: "exercise"
slug: "formal-dinner"
title: "Jantar Formal"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/formal-dinner"
en_md5: "ef1a7cb430985cf200bcbeeb451a561f"
governance_sha: "a347f3f"
content_version: "457b2ca7da38"
published_at: "2026-08-22"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Encontra a mesa do convidado"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Escreve uma função que recebe a lista dos nomes completos dos convidados, a lista correspondente dos nomes das mesas e um convidado que chega anunciado como um título e um apelido. Devolve o nome da mesa onde o convidado está sentado, ou `\"No table found\"` se não estiver no mapa de lugares."},{"key":"solveTightly.name","english":"Solve it in 9 lines","target":"Resolve em 9 linhas"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Try and solve this in 9 lines of code or fewer.","target":"Bónus: isto pode ser escrito de forma muito mais compacta do que poderias esperar. Tenta resolver isto em 9 linhas de código ou menos."}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Mapa de lugares vazio"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Ninguém está sentado em lado nenhum quando o mapa está vazio."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad é mandado embora"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"O nome não está no mapa de lugares."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad é encaminhado para a sua mesa"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt está no mapa, por isso o Mr Pitt recebe a sua mesa."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"Cavaleiro do reino"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Um título diferente e um convidado que não é o primeiro no mapa."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Mr Bond, presumo"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond está no mapa."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Hmmm... Mr Bond, presumo"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"Só Jason Bourne está no mapa, não James Bond."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Não é bem o Mr Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Nem Ada Spitt nem Hugo Ross-Pitt são o Mr Pitt, por isso ele não tem lugar aqui."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"Que tal um barão?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"O barão Lloyd Webber tem duas palavras no apelido."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"O Mark é o barão?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Um Webber diferente não conta, o apelido tem de corresponder por completo."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"Limpo e arrumado: Lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time try and solve this in 9 lines of code or fewer.","target":"O mesmo mapa de lugares de antes, mas desta vez tenta resolver isto em 9 linhas de código ou menos."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"Como é que as duas listas se relacionam entre si?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"Elas formam um par. O primeiro convidado senta-se na primeira mesa, o segundo convidado na segunda mesa, e assim por diante. Por isso, não basta saber *que* um convidado está no mapa: precisas de saber *onde* no mapa ele está."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"O convidado diz \"Mr Pitt\", mas o mapa diz \"Brad Pitt\". Como é que eu comparo isto?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Essas duas strings nunca serão iguais, por isso uma comparação direta não te levará a lado nenhum. Pensa em que parte do que o convidado anunciou aparece realmente no mapa, e em que posição da entrada no mapa esperarias encontrá-la."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"Poderá um apelido corresponder ao convidado errado?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Pode, sem dúvida. Lê \"Ada Spitt\" e \"Hugo Ross-Pitt\" em voz alta, e depois pensa no Mr Pitt. Pergunta a ti próprio o que faz de um apelido um apelido a sério nessa linha, em vez de serem apenas algumas letras que por acaso estão no fim."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"O que devo devolver quando ninguém corresponde?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"A string `\"No table found\"`, exatamente como está escrita. A parte mais complicada é saber quando é que tens autorização para a dizer. Se já verificaste o primeiro convidado do mapa e não é o teu homem, sabes realmente que ele não está sentado em lado nenhum?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can get down to 9 lines of code.","target":"Continua! Vê se consegues reduzir para 9 linhas de código."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"O número de itens numa lista - a mesma propriedade length que usaste em strings (fornecida pela stdlib do nível)"},{"key":"length.category","english":"List Operations","target":"Operações com Listas"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"Divide uma string numa lista de pedaços, partindo em cada separador (fornecida pela stdlib do nível)"},{"key":"split.category","english":"String Operations","target":"Operações com Strings"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"Cria uma nova lista a partir de parte de uma lista, começando numa posição (fornecida pela stdlib do nível)"},{"key":"slice.category","english":"List Operations","target":"Operações com Listas"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"Junta os itens de uma lista numa string, com um separador entre eles (fornecida pela stdlib do nível)"},{"key":"join.category","english":"List Operations","target":"Operações com Listas"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"Verifica se uma string termina com uma string mais pequena (fornecida pela stdlib do nível)"},{"key":"endsWith.category","english":"String Operations","target":"Operações com Strings"}]}]}]
---

Estás de volta ao teu biscate como porteiro. É a noite a seguir à After Party, e há mais uma festa. Desta vez é um jantar formal, por isso esta noite és menos "homem musculado à porta" e mais "pessoa com uma prancheta e um colete bonito".

Definitivamente, não é o sítio para usar só o teu nome próprio. Na verdade, não é mesmo o sítio para usar o teu nome próprio. Aqui, toda a gente usa um título (_honorific_ em inglês), como Miss, Mr, Dr, etc., e o apelido.

Os organizadores entregaram-te o mapa de lugares em duas listas separadas. Uma contém os nomes completos dos convidados. A outra contém o nome da mesa onde cada convidado está sentado (mesas com nomes de árvores e flores). Tal como na After Party, as duas listas estão alinhadas: o convidado na posição 3 da primeira lista está sentado na mesa da posição 3 da segunda lista.

Por isso, quando o Mr Pitt entra, tens de descobrir que se trata do "Brad Pitt" da tua lista e depois dizer-lhe em que mesa está sentado.

Escreve uma função chamada `tableFor` (que devolve a mesa onde um convidado está sentado). A função tem três parâmetros de entrada:

- O primeiro é a lista dos nomes completos dos convidados, como strings
- O segundo é a lista dos nomes das mesas, pela mesma ordem dos convidados
- O terceiro é o convidado que chega, formatado como um título seguido do apelido (por exemplo, "Mr Pitt")

Devolve o nome da mesa onde o convidado está sentado. Se o convidado não estiver no mapa de lugares, devolve a string `"No table found"` (aqui não há espertos!).

O título é sempre exatamente uma palavra, e tudo o que vem a seguir é o apelido do convidado. A maioria dos apelidos tem uma palavra, mas alguns apelidos pomposos têm duas.

No entanto, tem cuidado. Muitos apelidos parecem-se muito com outros apelidos.

### Métodos e propriedades de strings e arrays

Além da propriedade `.length` que aprendeste no último exercício, há quatro métodos que te podem ser úteis. Há muitas formas de resolver este exercício, mas estes métodos levam-te à solução mais curta possível.

`"...".split(substring)` divide uma string usando outra string. Por exemplo:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` captura uma parte de um array, começando no índice `start` e continuando até ao fim do array. Os elementos capturados são copiados para um NOVO array, que te é devolvido. Na prática, isto descarta os primeiros `start` elementos. Por exemplo:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` junta os elementos de um array com a string fornecida. Por exemplo:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` diz-te se uma string termina com outra string. Por exemplo:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
