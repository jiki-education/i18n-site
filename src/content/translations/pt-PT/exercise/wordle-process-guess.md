---
lang: "pt-PT"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: Processar a Tentativa"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/wordle-process-guess"
en_md5: "9c8afa4a4caa91fe2e3243fc4cd4f81d"
governance_sha: "f2cbb192"
content_version: "09b76f3c4fb6"
published_at: "2026-09-02"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"rowMismatch","english":"The \"{{letter}}\" at square {{square}} should be \"{{expected}}\", not \"{{actual}}\".","target":"A letra \"{{letter}}\" na caixa {{square}} deveria ser \"{{expected}}\", não \"{{actual}}\"."},{"key":"rowNotColored","english":"The row wasn't colored.","target":"A linha não foi colorida."},{"key":"rowWrongLength","english":"The row got {{actual}} states, but a row needs {{expected}}.","target":"A linha recebeu {{actual}} estados, mas deveria ter {{expected}}."},{"key":"allCorrect","english":null,"target":"Esperávamos que todas as letras estivessem verdes"},{"key":"absent","english":null,"target":"Esperávamos que o 'a' e o 'u' estivessem ausentes"},{"key":"present","english":null,"target":"Esperávamos que o 'l' e o 'e' estivessem presentes."},{"key":"complex","english":null,"target":"Esperávamos present, present, present, correct, absent"},{"key":"differentWord","english":null,"target":"Esperávamos correct, present, present, present, absent"}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":"Processa uma única tentativa"},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":"Cria uma função chamada processGuess que recebe a palavra secreta e uma tentativa, determina o estado de cada letra (correct, present ou absent) e, em seguida, chama colorRow(1, states) com os resultados."}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":"Todas corretas"},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":"Lida com uma tentativa totalmente correta"},{"key":"absent.name","english":"Some absent","target":"Algumas ausentes"},{"key":"absent.description","english":"Handle when some letters are wrong","target":"Lida com o caso em que algumas letras estão erradas"},{"key":"present.name","english":"Some present","target":"Algumas presentes"},{"key":"present.description","english":"Deal with letters in the wrong place","target":"Lida com letras no sítio errado"},{"key":"complex.name","english":"Complex","target":"Complexo"},{"key":"complex.description","english":"Deal with a more complex scenario","target":"Lida com um cenário mais complexo"},{"key":"differentWord.name","english":"A different word","target":"Uma palavra diferente"},{"key":"differentWord.description","english":"And finally a different word!","target":"E, por fim, uma palavra diferente!"}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":"Como comparo cada letra da tentativa com a palavra secreta?"},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":"Percorre as posições `0` a `4`. Para cada posição, compara `guess[i]` com `target[i]`."},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":"Quando é que uma letra é `\"correct\"`, `\"present\"` ou `\"absent\"`?"},{"key":"stateRules.answer","english":"If `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":"Se `guess[i]` for igual a `target[i]`, é `\"correct\"`. Caso contrário, se a letra existir em algum lugar em `target`, é `\"present\"`. Se não, é `\"absent\"`."},{"key":"buildList.question","english":"How do I build up the array of states?","target":"Como construo o array de estados?"},{"key":"buildList.answer","english":"Start with an empty array, then use `states.push(value)` inside the loop to add each state onto the end in order.","target":"Começa com um array vazio e, em seguida, usa `states.push(value)` dentro do ciclo para adicionar cada estado ao fim, por ordem."},{"key":"finishedList.question","english":"Where does the finished array go?","target":"Para onde vai o array final?"},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to color the first row of the board with your computed states.","target":"Passa-o para `colorRow(1, states)` para colorir a primeira linha do tabuleiro com os estados que calculaste."}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":"Colore uma linha no tabuleiro do Wordle com os estados fornecidos."},{"key":"colorRow.category","english":"Wordle","target":"Wordle"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Adiciona um elemento no fim de um array, alterando o array em si."},{"key":"push.category","english":"Arrays","target":"Arrays"},{"key":"includes.description","english":"Checks whether a string contains another string, returning true or false.","target":"Verifica se uma string contém outra string, devolvendo true ou false."},{"key":"includes.category","english":"Strings","target":"Strings"}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":"coloriu uma linha no tabuleiro do Wordle"}]}]}]
---

Bem-vindo ao Wordle, o jogo que se tornou viral durante os confinamentos da covid-19!

O jogo funciona assim:

- Há uma palavra secreta que estás a tentar adivinhar.
- Tens 6 tentativas para acertar.
- Para cada tentativa há 5 caixas, uma para cada letra:
  - Se uma letra estiver correta, a caixa fica verde.
  - Se uma letra estiver na palavra secreta, mas no sítio errado, a caixa fica amarela.
  - Se uma letra não estiver na palavra secreta, a caixa fica cinzenta.

Ao longo de alguns exercícios, vais implementar o jogo Wordle completo, mas **neste exercício** só vais pôr a primeira linha a funcionar.

Para isso, tens de criar uma função chamada `processGuess(target, guess)` (processa a tentativa). A função deve determinar o estado de cada letra da tentativa e, em seguida, chamar a função `colorRow(1, states)` (colore a linha) com um array de estados para cada letra: `"correct"`, `"present"` ou `"absent"`.

Por exemplo, `processGuess("Hello", "Holes")` deve usar `colorRow` com:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Verifica se percebeste isto antes de continuar!

### Métodos

Tal como nos dois últimos exercícios, podes construir o array de estados com o método `push`, que adiciona um elemento no fim de um array. Por exemplo, `states.push("correct")` adiciona `"correct"` no fim do array `states`.

Também tens o método `includes` se quiseres verificar se uma string contém outra string.

Boa sorte!
