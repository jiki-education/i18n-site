---
lang: "pt-BR"
type: "exercise"
slug: "adventures-in-poetry"
title: "Aventuras na Poesia"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/adventures-in-poetry"
en_md5: "444b0a68f443ccb86f15cc0f43fb63d7"
governance_sha: "e619d11e"
content_version: "6234cd6a3036"
published_at: "2026-09-01"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"endOfPath","english":"The poet has walked off the end of the path. Something should have stopped the walk before now.","target":"O poeta andou até depois do fim do caminho. Alguma coisa deveria ter interrompido a caminhada antes disso."},{"key":"isEmojiString","english":"You can only check whether a piece of text is an emoji.","target":"Você só pode verificar se um pedaço de texto é um emoji."},{"key":"reciteString","english":"You can only recite a piece of text.","target":"Você só pode recitar um pedaço de texto."}]},{"name":"checks","rows":[{"key":"notRecited","english":"The poet never recited anything. Make sure you call <code>recite()</code> once the walk is over.","target":"O poeta não recitou nada. Certifique-se de chamar <code>recite()</code> quando a caminhada terminar."},{"key":"wrongPoem","english":"The poet recited \"{{got}}\" but the poem should be \"{{expected}}\".","target":"O poeta recitou \"{{got}}\", mas o poema deveria ser \"{{expected}}\"."},{"key":"noFunctions","english":"Write your solution as one walk, without defining any functions of your own.","target":"Escreva sua solução como uma única caminhada, sem escrever funções auxiliares."},{"key":"reciteOnce","english":"The poet should recite the poem once, after the walk has finished.","target":"O poeta deve recitar o poema uma vez, depois que a caminhada terminar."},{"key":"tooDeeplyNested","english":"Your code nests too deeply. You are only allowed two levels, so a loop with an <code>if</code> inside it, but nothing inside that <code>if</code>.","target":"Seu código está aninhado demais. Você só pode usar dois níveis, ou seja, um laço com um <code>if</code> dentro dele, mas nada dentro desse <code>if</code>."},{"key":"noAndOrNot","english":"This exercise is about a different way of making decisions, so <code>&&</code> and <code>!</code> are not allowed here. <code>||</code> is fine.","target":"Este exercício é sobre um jeito diferente de tomar decisões, então <code>&&</code> e <code>!</code> não são permitidos aqui. Já <code>||</code> pode."},{"key":"needsContinue","english":"Your solution needs to use <code>continue</code>.","target":"Sua solução precisa usar <code>continue</code>."},{"key":"needsBreak","english":"Your solution needs to use <code>break</code>.","target":"Sua solução precisa usar <code>break</code>."},{"key":"tooManyLines","english":"Your solution is longer than it needs to be. See if you can get it down by handling each kind of square in one place.","target":"Sua solução está mais longa do que precisa. Veja se consegue encurtá-la tratando cada tipo de casa em um só lugar."}]},{"name":"tasks","rows":[{"key":"collectThePoem.name","english":"Collect the poem and recite it","target":"Colete o poema e recite-o"},{"key":"collectThePoem.description","english":"Walk along the path, gather the words of the poem, stop in the right place, and recite what you gathered.","target":"Percorra o caminho, junte as palavras do poema, pare no lugar certo e recite o que você juntou."},{"key":"solveTightly.name","english":"Tighten it up","target":"Enxugue o código"},{"key":"solveTightly.description","english":"Solve the same walk, but get your code down to the line limit.","target":"Resolva a mesma caminhada, mas reduza seu código até o limite de linhas."}]},{"name":"scenarios","rows":[{"key":"hope.name","english":"A path with gaps","target":"Um caminho com casas vazias"},{"key":"hope.description","english":"Six words with bare grass between them, and a checkered flag at the end.","target":"Seis palavras com grama entre elas, e uma bandeira quadriculada no final."},{"key":"wandered.name","english":"Scenery on the path","target":"Cenário no caminho"},{"key":"wandered.description","english":"The same idea, but now there are plants and creatures growing between the words.","target":"A mesma ideia, mas agora há plantas e bichos crescendo entre as palavras."},{"key":"mists.name","english":"Scenery next to the flag","target":"Cenário ao lado da bandeira"},{"key":"mists.description","english":"A leaf sits on the square just before the checkered flag.","target":"Uma folha está na casa logo antes da bandeira quadriculada."},{"key":"notLost.name","english":"Exactly seven words","target":"Exatamente sete palavras"},{"key":"notLost.description","english":"A line with seven words on it, so the poet stops counting before the flag.","target":"Um verso com sete palavras, então o poeta para antes de chegar à bandeira."},{"key":"hopeContinued.name","english":"A poem that is too long","target":"Um poema longo demais"},{"key":"hopeContinued.description","english":"This path holds more than seven words, so the poet stops part way through the line.","target":"Este caminho tem mais de sete palavras, então o poeta para no meio do verso."},{"key":"highlands.name","english":"An apostrophe","target":"Um apóstrofo"},{"key":"highlands.description","english":"A line of Burns, with an apostrophe sitting on its own square.","target":"Um verso de Burns, com um apóstrofo sozinho em uma casa."},{"key":"heartScenery.name","english":"Scenery after an apostrophe","target":"Cenário depois de um apóstrofo"},{"key":"heartScenery.description","english":"A mushroom grows between the apostrophe and the word it joins to, so whatever remembers the spacing has to survive a skipped square.","target":"Um cogumelo cresce entre o apóstrofo e a palavra que ele junta, então o que quer que controle o espaçamento precisa sobreviver a uma casa pulada."},{"key":"tyger.name","english":"A comma","target":"Uma vírgula"},{"key":"tyger.description","english":"A line of Blake, with a comma sitting on its own square.","target":"Um verso de Blake, com uma vírgula sozinha em uma casa."},{"key":"pleure.name","english":"Bare grass to begin","target":"Grama no começo"},{"key":"pleure.description","english":"A line of Verlaine, with a few empty squares before the poem starts.","target":"Um verso de Verlaine, com algumas casas vazias antes de o poema começar."},{"key":"yasegaeru.name","english":"A line of Issa","target":"Um verso de Issa"},{"key":"yasegaeru.description","english":"Seven words of haiku, with a line limit to keep your guards tight.","target":"Sete palavras de haicai, com um limite de linhas para manter suas condições enxutas."}]},{"name":"hints","rows":[{"key":"scenery.question","english":"The plants and creatures are ending up in my poem.","target":"As plantas e os bichos estão indo parar no meu poema."},{"key":"scenery.answer","english":"Only words belong in the poem. Everything else on the path needs to be left behind, which means your loop has to get to the next square without adding anything.","target":"Só as palavras pertencem ao poema. Todo o resto do caminho precisa ficar para trás, o que significa que seu laço tem que chegar à próxima casa sem adicionar nada."},{"key":"flagSkipped.question","english":"My poet never stops walking.","target":"Meu poeta nunca para de andar."},{"key":"flagSkipped.answer","english":"The checkered flag is an emoji too. If you deal with scenery before you deal with the flag, the flag gets treated as scenery and the walk never ends. Order matters.","target":"A bandeira quadriculada também é um emoji. Se você tratar o cenário antes de tratar a bandeira, a bandeira é tratada como cenário e a caminhada nunca termina. A ordem importa."},{"key":"spacing.question","english":"My words are all squashed together, or there is a space at the start.","target":"Minhas palavras estão todas grudadas, ou há um espaço no começo."},{"key":"spacing.answer","english":"Think about when a space is needed. It is needed **between** two words, not before the first one, so something has to remember whether anything has been written yet.","target":"Pense em quando o espaço é necessário. Ele é necessário **entre** duas palavras, não antes da primeira, então alguma coisa precisa lembrar se algo já foi escrito."},{"key":"apostrophe.question","english":"I am getting `heart ' s` instead of `heart's`.","target":"Estou obtendo `heart ' s` em vez de `heart's`."},{"key":"apostrophe.answer","english":"An apostrophe joins the words on either side of it, so no space belongs before it or after it. A comma is the opposite way round, with no space before it but a space after.","target":"Um apóstrofo junta as palavras dos dois lados dele, então não vai espaço antes nem depois dele. A vírgula é o contrário: sem espaço antes, mas com um espaço depois."},{"key":"reciteOnce.question","english":"Why can I only call `recite()` once?","target":"Por que só posso chamar `recite()` uma vez?"},{"key":"reciteOnce.answer","english":"The poet recites the finished poem, so there is only one moment where that can happen. There is more than one way for the walk to end, and all of them need to reach that same moment.","target":"O poeta recita o poema pronto, então só existe um momento em que isso pode acontecer. Há mais de um jeito de a caminhada terminar, e todos eles precisam chegar a esse mesmo momento."}]},{"name":"describers","rows":[{"key":"move","english":"walked forward and found ${return}","target":"andou para a frente e encontrou ${return}"},{"key":"isEmoji","english":"checked whether ${arg1} was an emoji","target":"verificou se ${arg1} era um emoji"},{"key":"recite","english":"recited \"${arg1}\"","target":"recitou \"${arg1}\""}]},{"name":"functions","rows":[{"key":"move.description","english":"Walks the poet forward onto the next square and **returns** whatever was on it.","target":"Faz o poeta avançar até a próxima casa e **retorna** o que estava nela."},{"key":"move.category","english":"Movement","target":"Movimento"},{"key":"isEmoji.description","english":"**Returns** `true` if the thing you pass it is an emoji.","target":"**Retorna** `true` se o que você passar for um emoji."},{"key":"isEmoji.category","english":"Checks","target":"Verificações"},{"key":"recite.description","english":"Makes the poet recite a poem out loud.","target":"Faz o poeta recitar um poema em voz alta."},{"key":"recite.category","english":"Action","target":"Ação"}]}]}]
---

Você está criando um jogo de poesia robótica chamado "Aventuras na Poesia". Como primeiro passo, você precisa programar o robô para que, enquanto anda, ele colete palavras e depois recite o poema no final.

Cada casa contém uma destas quatro coisas:

1. Nada (`""`)
2. Uma **palavra** do poema.
3. Cenário, como uma folha ou uma borboleta (um emoji).
4. Uma bandeira quadriculada, que diz ao robô para parar.

Para ajudar, você tem algumas funções. Primeiro, você tem a função `move()`, que diz ao robô poeta para avançar até a próxima casa e retorna o que estava nela. Você tem a função `isEmoji(thing)`, que retorna um boolean dizendo se a string que você passar é um emoji. E, por fim, você tem a função `recite(poem)`, que você precisa usar com o poema final.

Seu trabalho é percorrer o caminho, montar o poema e depois recitá-lo.

## As regras

- As **palavras** entram no poema, com um **espaço entre cada uma**.
- O **cenário** não faz parte do poema e deve ser ignorado.
- Um **apóstrofo** fica sozinho em uma casa e junta as palavras dos dois lados dele. `heart`, depois `'`, depois `s` vira `heart's`.
- Uma **vírgula** também fica sozinha em uma casa. Ela gruda na palavra anterior, mas ainda há um espaço depois dela.
- O poeta para de andar quando chega à **bandeira quadriculada**, ou assim que tiver coletado **sete palavras**. O que acontecer primeiro.
- Sempre que o poeta parar, e não importa como tenha parado, ele recita o que coletou. Você só pode chamar `recite()` **uma vez**.

## Restrições

Há muitas formas de resolver este exercício, mas queremos que você use as palavras-chave `continue` e `break` que aprendeu há pouco, então existem algumas regras:

1. Sua solução deve usar tanto `continue` quanto `break`.
2. Você não pode usar `&&` nem `!` na sua solução.
3. Você não pode escrever funções auxiliares.
4. Você só pode usar dois níveis de indentação:

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

Isso significa que a solução que você vai encontrar é bem "achatada".

Boa sorte e divirta-se!
