---
lang: "pt-BR"
type: "exercise"
slug: "formal-dinner"
title: "Jantar Formal"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/formal-dinner"
en_md5: "ef1a7cb430985cf200bcbeeb451a561f"
governance_sha: "bd48403"
content_version: "f9159cfa05c9"
published_at: "2026-08-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Encontre a mesa do convidado"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Escreva uma função que recebe a lista dos nomes completos dos convidados, a lista correspondente dos nomes das mesas e um convidado que chega anunciado por um título e um sobrenome. Retorne o nome da mesa onde esse convidado está sentado, ou `\"No table found\"` se ele não estiver no mapa de lugares."},{"key":"solveTightly.name","english":"Solve it in 9 lines","target":"Resolva-o em 9 linhas"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Try and solve this in 9 lines of code or fewer.","target":"Bônus: isso pode ser escrito de forma muito mais compacta do que você espera. Tente resolver isso em 9 linhas de código ou menos."}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Mapa de lugares vazio"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Ninguém está sentado em lugar nenhum quando o mapa está vazio."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad é barrado"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"O nome não está no mapa de lugares."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad é encaminhado para o seu lugar"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt está no mapa de lugares, então o Mr Pitt recebe a mesa dele."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"Cavaleiro do reino"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Um título diferente e um convidado que não é o primeiro do mapa."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Mr Bond, presumo"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond está no mapa de lugares."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Hmmm... Mr Bond, presumo"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"Apenas Jason Bourne está no mapa de lugares, e não James Bond."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Não é bem o Mr Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Nem Ada Spitt nem Hugo Ross-Pitt são o Mr Pitt, então ele não tem lugar aqui."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"Que tal um Barão?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"O Barão Lloyd Webber tem duas palavras no sobrenome."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"O Mark é o Barão?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Um Webber diferente não conta: o sobrenome precisa corresponder por completo."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"Limpo e organizado: Lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time try and solve this in 9 lines of code or fewer.","target":"O mesmo mapa de lugares de antes, mas desta vez tente resolver isso em 9 linhas de código ou menos."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"Como as duas listas se relacionam entre si?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"Elas formam um par. O primeiro convidado fica na primeira mesa, o segundo na segunda mesa, e assim por diante. Portanto, não basta saber *que* um convidado está no mapa: você precisa saber *onde* no mapa ele está."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"O convidado diz 'Mr Pitt', mas o mapa diz 'Brad Pitt'. Como eu comparo os dois?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Essas duas strings nunca serão iguais, então uma comparação direta não te leva a lugar nenhum. Pense em que parte do que o convidado anunciou aparece de fato no mapa e em que parte da entrada do mapa você esperaria encontrá-la."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"Será que um sobrenome pode corresponder ao convidado errado?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Claro que pode. Leia 'Ada Spitt' e 'Hugo Ross-Pitt' em voz alta, e depois pense no Mr Pitt. Pergunte a você mesmo o que faz de um sobrenome um sobrenome verdadeiro nessa linha, em vez de apenas algumas letras que por acaso estão no fim dela."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"O que devo retornar quando ninguém corresponde?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"A string `\"No table found\"`, exatamente como está escrita. A parte mais difícil é saber quando você pode dizê-la. Se você verificou o primeiro convidado do mapa e ele não é a pessoa que você procura, já sabe, na verdade, que ele não está sentado em lugar nenhum?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can get down to 9 lines of code.","target":"Continue! Veja se você consegue chegar às 9 linhas de código."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"O número de itens numa lista: a mesma propriedade length que você já usou em strings (fornecido pelo nível stdlib)"},{"key":"length.category","english":"List Operations","target":"Operações com listas"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"Dividir uma string numa lista de pedaços, partindo em cada separador (fornecido pelo nível stdlib)"},{"key":"split.category","english":"String Operations","target":"Operações com strings"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"Criar uma nova lista a partir de parte de uma lista, começando numa posição (fornecido pelo nível stdlib)"},{"key":"slice.category","english":"List Operations","target":"Operações com listas"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"Juntar os itens de uma lista numa única string, com um separador entre eles (fornecido pelo nível stdlib)"},{"key":"join.category","english":"List Operations","target":"Operações com listas"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"Verificar se uma string termina com uma string menor (fornecido pelo nível stdlib)"},{"key":"endsWith.category","english":"String Operations","target":"Operações com strings"}]}]}]
---

Você está de volta ao seu bico como segurança. É a noite depois da After Party, e tem mais uma festa. Desta vez é um jantar formal, então hoje à noite você é menos "homem musculoso na porta" e mais "pessoa com uma prancheta e um colete bonito".

Definitivamente, não é o lugar para usar só o seu primeiro nome. Na verdade, não é mesmo o lugar para usar o seu primeiro nome. Aqui, todo mundo usa um título (_honorific_ em inglês), como Miss, Mr, Dr, etc., e o sobrenome.

Os organizadores te entregaram o mapa de lugares em duas listas separadas. Uma contém os nomes completos dos convidados. A outra contém o nome da mesa onde cada convidado está sentado (mesas com nomes de árvores e flores). Assim como na After Party, as duas listas estão alinhadas: o convidado na posição 3 da primeira lista está sentado na mesa da posição 3 da segunda lista.

Então, quando o Mr Pitt entra, você precisa descobrir que se trata do "Brad Pitt" da sua lista e depois dizer para ele em que mesa está sentado.

Escreva uma função chamada `tableFor` (que retorna a mesa onde um convidado está sentado). A função tem três entradas:

- A primeira é a lista dos nomes completos dos convidados, como strings
- A segunda é a lista dos nomes das mesas, na mesma ordem dos convidados
- A terceira é o convidado que chega, formatado como um título seguido do sobrenome (por exemplo, "Mr Pitt")

Retorne o nome da mesa onde o convidado está sentado. Se o convidado não estiver no mapa de lugares, retorne a string `"No table found"` (aqui não tem espertinhos!).

O título é sempre exatamente uma palavra, e tudo o que vem depois é o sobrenome do convidado. A maioria dos sobrenomes tem uma palavra, mas alguns sobrenomes pomposos têm duas.

No entanto, tome cuidado. Muitos sobrenomes se parecem muito com outros sobrenomes.

### Métodos e propriedades de strings e arrays

Além da propriedade `.length` que você aprendeu no último exercício, há quatro métodos que podem te ser úteis. Há muitas formas de resolver este exercício, mas estes métodos te levam à solução mais curta possível.

`"...".split(substring)` divide uma string usando outra string. Por exemplo:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` captura uma parte de um array, começando no índice `start` e continuando até o fim do array. Os elementos capturados são copiados para um NOVO array, que é retornado para você. Na prática, isso descarta os primeiros `start` elementos. Por exemplo:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` junta os elementos de um array com a string fornecida. Por exemplo:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` te diz se uma string termina com outra string. Por exemplo:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
