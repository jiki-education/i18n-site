---
lang: "pt-BR"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: Processe a Tentativa"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/wordle-process-guess"
en_md5: "3947aa1be7871fcfb0e523cb3c036d7f"
governance_sha: "accabaea"
content_version: "3a00f43293b8"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"allCorrect","english":"We expected all the letters to be green","target":"Esperávamos que todas as letras ficassem verdes"},{"key":"absent","english":"We expected the 'a' and 'u' to be absent","target":"Esperávamos que o 'a' e o 'u' fossem absent"},{"key":"present","english":"We expected the 'l' and 'e' to be present.","target":"Esperávamos que o 'l' e o 'e' fossem present."},{"key":"complex","english":"We expected present, present, present, correct, absent","target":"Esperávamos present, present, present, correct, absent"},{"key":"differentWord","english":"We expected correct, present, present, present, absent","target":"Esperávamos correct, present, present, present, absent"}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":"Processe uma única tentativa"},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":"Crie uma função chamada processGuess que recebe uma palavra secreta e uma tentativa, descobre o estado de cada letra (correct, present ou absent) e depois chama colorRow(1, states) com os resultados."}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":"Tudo correto"},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":"Lide com uma tentativa totalmente correta"},{"key":"absent.name","english":"Some absent","target":"Algumas ausentes"},{"key":"absent.description","english":"Handle when some letters are wrong","target":"Trate o caso em que algumas letras estão erradas"},{"key":"present.name","english":"Some present","target":"Algumas presentes"},{"key":"present.description","english":"Deal with letters in the wrong place","target":"Lide com letras no lugar errado"},{"key":"complex.name","english":"Complex","target":"Complexo"},{"key":"complex.description","english":"Deal with a more complex scenario","target":"Lide com um cenário mais complexo"},{"key":"differentWord.name","english":"A different word","target":"Uma palavra diferente"},{"key":"differentWord.description","english":"And finally a different word!","target":"E, por fim, uma palavra diferente!"}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":"Como eu comparo cada letra da tentativa com a palavra secreta?"},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":"Percorra as posições `0` a `4` com um laço. Para cada posição, compare `guess[i]` com `target[i]`."},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":"Quando uma letra é `\"correct\"`, `\"present\"` ou `\"absent\"`?"},{"key":"stateRules.answer","english":"If `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":"Se `guess[i]` for igual a `target[i]`, ela é `\"correct\"`. Caso contrário, se a letra existir em algum lugar de `target`, ela é `\"present\"`. Se não existir, é `\"absent\"`."},{"key":"buildList.question","english":"How do I build up the array of states?","target":"Como eu monto o array de estados?"},{"key":"buildList.answer","english":"Start with an empty array, then use `states.push(value)` inside the loop to add each state onto the end in order.","target":"Comece com um array vazio e depois use `states.push(value)` dentro do laço para adicionar cada estado ao final, na ordem."},{"key":"finishedList.question","english":"Where does the finished array go?","target":"Para onde vai o array pronto?"},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to color the first row of the board with your computed states.","target":"Passe o array para `colorRow(1, states)` para colorir a primeira linha do tabuleiro com os estados que você calculou."}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":"Colore uma linha do tabuleiro do Wordle com os estados informados."},{"key":"colorRow.category","english":"Wordle","target":"Wordle"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Adiciona um elemento ao final de um array, alterando o próprio array."},{"key":"push.category","english":"Arrays","target":"Arrays"},{"key":"includes.description","english":"Checks whether a string contains another string, returning true or false.","target":"Verifica se uma string contém outra string, retornando true ou false."},{"key":"includes.category","english":"Strings","target":"Strings"}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":"coloriu uma linha no tabuleiro do Wordle"}]}]}]
---

Conheça o Wordle, o jogo que viralizou durante os lockdowns da Covid-19!

O jogo funciona assim:

- Existe uma palavra secreta que o usuário está tentando adivinhar.
- O usuário tem 6 tentativas para acertar.
- Para cada tentativa há 5 quadradinhos, um para cada letra:
  - Se uma letra estiver correta, o quadradinho fica verde.
  - Se uma letra estiver na palavra secreta, mas no lugar errado, o quadradinho fica amarelo.
  - Se uma letra não estiver na palavra secreta, o quadradinho fica cinza.

Daqui a alguns exercícios, você vai implementar o jogo Wordle completo, mas **neste exercício**, você só vai fazer as coisas funcionarem na primeira linha.

Para isso, você precisa criar uma função chamada `processGuess(target, guess)` (processar a tentativa: `target` é a palavra secreta e `guess` é a tentativa do jogador). Ela deve descobrir o estado de cada letra da tentativa e depois chamar a função `colorRow(1, states)` (colorir a linha) com um array de estados para cada letra: `"correct"`, `"present"` ou `"absent"`.

Por exemplo, `processGuess("Hello", "Holes")` deve usar `colorRow` com:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Certifique-se de que você entendeu isso antes de continuar!

### Métodos

Como nos últimos exercícios, você pode montar o array de estados usando o método `push`, que adiciona um elemento ao final de um array. Por exemplo, `states.push("correct")` adiciona `"correct"` ao final do array `states`.

Você também tem o método `includes`, caso queira verificar se uma string contém outra string.

Boa sorte!
