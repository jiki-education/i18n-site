---
lang: "pt-PT"
type: "exercise"
slug: "adventures-in-poetry"
title: "Aventuras na poesia"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/adventures-in-poetry"
en_md5: "444b0a68f443ccb86f15cc0f43fb63d7"
governance_sha: "e619d11e"
content_version: "208649b7640d"
published_at: "2026-09-01"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"endOfPath","english":"The poet has walked off the end of the path. Something should have stopped the walk before now.","target":"O poeta saiu do fim do caminho. Algo devia ter parado a caminhada antes disso."},{"key":"isEmojiString","english":"You can only check whether a piece of text is an emoji.","target":"Só podes verificar se um texto é um emoji."},{"key":"reciteString","english":"You can only recite a piece of text.","target":"Só podes recitar um texto."}]},{"name":"checks","rows":[{"key":"notRecited","english":"The poet never recited anything. Make sure you call <code>recite()</code> once the walk is over.","target":"O poeta nunca recitou nada. Certifica-te de que chamas <code>recite()</code> quando a caminhada terminar."},{"key":"wrongPoem","english":"The poet recited \"{{got}}\" but the poem should be \"{{expected}}\".","target":"O poeta recitou \"{{got}}\" mas o poema devia ser \"{{expected}}\"."},{"key":"noFunctions","english":"Write your solution as one walk, without defining any functions of your own.","target":"Escreve a tua solução como uma caminhada única, sem definires funções tuas."},{"key":"reciteOnce","english":"The poet should recite the poem once, after the walk has finished.","target":"O poeta deve recitar o poema uma vez, depois de terminar a caminhada."},{"key":"tooDeeplyNested","english":"Your code nests too deeply. You are only allowed two levels, so a loop with an <code>if</code> inside it, but nothing inside that <code>if</code>.","target":"O teu código está demasiado aninhado. Só podes usar dois níveis, ou seja, um ciclo com um <code>if</code> lá dentro, mas nada dentro desse <code>if</code>."},{"key":"noAndOrNot","english":"This exercise is about a different way of making decisions, so <code>&&</code> and <code>!</code> are not allowed here. <code>||</code> is fine.","target":"Este exercício é sobre uma forma diferente de tomar decisões, por isso <code>&&</code> e <code>!</code> não são permitidos aqui. O <code>||</code> é permitido."},{"key":"needsContinue","english":"Your solution needs to use <code>continue</code>.","target":"A tua solução precisa de usar <code>continue</code>."},{"key":"needsBreak","english":"Your solution needs to use <code>break</code>.","target":"A tua solução precisa de usar <code>break</code>."},{"key":"tooManyLines","english":"Your solution is longer than it needs to be. See if you can get it down by handling each kind of square in one place.","target":"A tua solução é mais longa do que precisa de ser. Vê se consegues reduzi-la ao tratar de cada tipo de quadrado num único lugar."}]},{"name":"tasks","rows":[{"key":"collectThePoem.name","english":"Collect the poem and recite it","target":"Recolhe o poema e recita-o"},{"key":"collectThePoem.description","english":"Walk along the path, gather the words of the poem, stop in the right place, and recite what you gathered.","target":"Percorre o caminho, recolhe as palavras do poema, detém-te no sítio certo e recita o que recolheste."},{"key":"solveTightly.name","english":"Tighten it up","target":"Compacta-o"},{"key":"solveTightly.description","english":"Solve the same walk, but get your code down to the line limit.","target":"Resolve a mesma caminhada, mas reduz o teu código ao limite de linhas."}]},{"name":"scenarios","rows":[{"key":"hope.name","english":"A path with gaps","target":"Um caminho com lacunas"},{"key":"hope.description","english":"Six words with bare grass between them, and a checkered flag at the end.","target":"Seis palavras com relva entre elas e uma bandeira axadrezada no fim."},{"key":"wandered.name","english":"Scenery on the path","target":"Cenário no caminho"},{"key":"wandered.description","english":"The same idea, but now there are plants and creatures growing between the words.","target":"A mesma ideia, mas agora há plantas e criaturas entre as palavras."},{"key":"mists.name","english":"Scenery next to the flag","target":"Cenário junto à bandeira"},{"key":"mists.description","english":"A leaf sits on the square just before the checkered flag.","target":"Uma folha está no quadrado imediatamente antes da bandeira axadrezada."},{"key":"notLost.name","english":"Exactly seven words","target":"Exatamente sete palavras"},{"key":"notLost.description","english":"A line with seven words on it, so the poet stops counting before the flag.","target":"Uma linha com sete palavras, por isso o poeta deixa de contar antes da bandeira."},{"key":"hopeContinued.name","english":"A poem that is too long","target":"Um poema demasiado longo"},{"key":"hopeContinued.description","english":"This path holds more than seven words, so the poet stops part way through the line.","target":"Este caminho contém mais de sete palavras, por isso o poeta detém-se a meio da linha."},{"key":"highlands.name","english":"An apostrophe","target":"Um apóstrofo"},{"key":"highlands.description","english":"A line of Burns, with an apostrophe sitting on its own square.","target":"Uma linha de Burns, com um apóstrofo num quadrado só para ele."},{"key":"heartScenery.name","english":"Scenery after an apostrophe","target":"Cenário depois de um apóstrofo"},{"key":"heartScenery.description","english":"A mushroom grows between the apostrophe and the word it joins to, so whatever remembers the spacing has to survive a skipped square.","target":"Um cogumelo cresce entre o apóstrofo e a palavra a que se liga, por isso o que quer que se lembre do espaçamento tem de sobreviver a um quadrado ignorado."},{"key":"tyger.name","english":"A comma","target":"Uma vírgula"},{"key":"tyger.description","english":"A line of Blake, with a comma sitting on its own square.","target":"Uma linha de Blake, com uma vírgula num quadrado só para ela."},{"key":"pleure.name","english":"Bare grass to begin","target":"Relva nua no início"},{"key":"pleure.description","english":"A line of Verlaine, with a few empty squares before the poem starts.","target":"Uma linha de Verlaine, com alguns quadrados vazios antes do poema começar."},{"key":"yasegaeru.name","english":"A line of Issa","target":"Uma linha de Issa"},{"key":"yasegaeru.description","english":"Seven words of haiku, with a line limit to keep your guards tight.","target":"Sete palavras de haiku, com um limite de linhas para manter as tuas condições apertadas."}]},{"name":"hints","rows":[{"key":"scenery.question","english":"The plants and creatures are ending up in my poem.","target":"As plantas e as criaturas estão a acabar no meu poema."},{"key":"scenery.answer","english":"Only words belong in the poem. Everything else on the path needs to be left behind, which means your loop has to get to the next square without adding anything.","target":"Só as palavras pertencem ao poema. Tudo o resto no caminho tem de ficar para trás, o que significa que o teu ciclo tem de passar ao quadrado seguinte sem acrescentar nada."},{"key":"flagSkipped.question","english":"My poet never stops walking.","target":"O meu poeta nunca para de andar."},{"key":"flagSkipped.answer","english":"The checkered flag is an emoji too. If you deal with scenery before you deal with the flag, the flag gets treated as scenery and the walk never ends. Order matters.","target":"A bandeira axadrezada também é um emoji. Se tratares do cenário antes de tratares da bandeira, a bandeira é tratada como cenário e a caminhada nunca termina. A ordem faz a diferença."},{"key":"spacing.question","english":"My words are all squashed together, or there is a space at the start.","target":"As minhas palavras estão todas juntas, ou há um espaço no início."},{"key":"spacing.answer","english":"Think about when a space is needed. It is needed **between** two words, not before the first one, so something has to remember whether anything has been written yet.","target":"Pensa em quando é necessário um espaço. É necessário **entre** duas palavras, não antes da primeira, por isso algo tem de se lembrar se alguma coisa já foi escrita."},{"key":"apostrophe.question","english":"I am getting `heart ' s` instead of `heart's`.","target":"Estou a obter `heart ' s` em vez de `heart's`."},{"key":"apostrophe.answer","english":"An apostrophe joins the words on either side of it, so no space belongs before it or after it. A comma is the opposite way round, with no space before it but a space after.","target":"Um apóstrofo liga as palavras de cada lado, por isso não há espaço antes nem depois dele. Uma vírgula é o contrário: sem espaço antes, mas com espaço depois."},{"key":"reciteOnce.question","english":"Why can I only call `recite()` once?","target":"Porque é que só posso chamar `recite()` uma vez?"},{"key":"reciteOnce.answer","english":"The poet recites the finished poem, so there is only one moment where that can happen. There is more than one way for the walk to end, and all of them need to reach that same moment.","target":"O poeta recita o poema acabado, por isso só há um momento em que isso pode acontecer. Há mais de uma forma de terminar a caminhada, e todas elas precisam de chegar a esse mesmo momento."}]},{"name":"describers","rows":[{"key":"move","english":"walked forward and found ${return}","target":"avançou e encontrou ${return}"},{"key":"isEmoji","english":"checked whether ${arg1} was an emoji","target":"verificou se ${arg1} era um emoji"},{"key":"recite","english":"recited \"${arg1}\"","target":"recitou \"${arg1}\""}]},{"name":"functions","rows":[{"key":"move.description","english":"Walks the poet forward onto the next square and **returns** whatever was on it.","target":"Avança o poeta para o quadrado seguinte e **devolve** o que estava nele."},{"key":"move.category","english":"Movement","target":"Movimento"},{"key":"isEmoji.description","english":"**Returns** `true` if the thing you pass it is an emoji.","target":"**Devolve** `true` se aquilo que lhe passas for um emoji."},{"key":"isEmoji.category","english":"Checks","target":"Verificações"},{"key":"recite.description","english":"Makes the poet recite a poem out loud.","target":"Faz o poeta recitar um poema em voz alta."},{"key":"recite.category","english":"Action","target":"Ação"}]}]}]
---

Estás a criar um jogo robótico de poesia chamado «Aventuras na poesia». Como primeiro passo, tens de programar o robô para que, à medida que avança, recolha as palavras e, no fim, recite o poema.

Cada quadrado contém uma destas quatro coisas:

1. Nada (`""`)
2. Uma **palavra** do poema.
3. **Cenário**, como uma folha ou uma borboleta (um emoji).
4. Uma **bandeira axadrezada**, que diz ao robô para parar.

Para te ajudar, tens algumas funções. Primeiro, tens a função `move()`, que diz ao robô poético para avançar para o quadrado seguinte e devolve o que estava nesse quadrado. Tens a função `isEmoji(thing)`, que devolve um Boolean a indicar-te se a string que lhe passas é um emoji. E, por fim, tens a função `recite(poem)`, que deves usar com o poema final.

A tua tarefa é percorrer o caminho, construir o poema e, no fim, recitá-lo.

## As regras

- As **palavras** entram no poema, com um **espaço entre cada uma**.
- O **cenário** não faz parte do poema e deve ser ignorado.
- Um **apóstrofo** fica num quadrado só para ele e liga as palavras de cada lado. `heart`, depois `'` e depois `s`, dá `heart's`.
- Uma **vírgula** também fica num quadrado só para ela. Cola-se à palavra anterior, mas continua a haver um espaço depois dela.
- O poeta deixa de andar quando chega à **bandeira axadrezada** ou assim que tiver recolhido **sete palavras**. O que acontecer primeiro.
- Sempre que o poeta para, e independentemente de como parou, recita aquilo que recolheu. Só podes chamar `recite()` **uma vez**.

## Restrições

Há muitas formas de resolver este exercício, mas queremos que uses as palavras-chave `continue` e `break` que aprendeste recentemente, por isso há algumas regras:

1. A tua solução tem de usar `continue` e `break`.
2. Não podes usar `&&` nem `!` na tua solução.
3. Não podes escrever funções auxiliares.
4. Só podes ter dois níveis de indentação:

```javascript

// Permitido - 2 níveis de indentação
repeat() {
  if(...) {
    //...
  }
}

// Não permitido - 3 níveis de indentação
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Ou seja, a solução a que vais chegar é bastante «plana».

Boa sorte e diverte-te!
