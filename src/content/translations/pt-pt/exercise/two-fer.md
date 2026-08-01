---
lang: "pt-pt"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/two-fer"
en_md5: "7e59867ebe08e4bd9b598aae4a8be76a"
governance_sha: "21ba311"
content_version: "be64894f9bbc"
published_at: "2026-08-01"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Usaste mais de seis linhas de código."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Cria a função two-fer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Escreve uma função twoFer que recebe um nome e devolve 'One for [name], one for me.' Se não for indicado nenhum nome (uma string vazia), usa 'you' em vez do nome."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Resolve em seis linhas de código"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Consegues resolver isto com apenas seis linhas de código?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Sem nome indicado"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Não é indicado nenhum nome, por isso devolve 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Nome dado: Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"O nome dela é 'Alice', por isso devolve 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Nome dado: Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"O nome dele é 'Tom', por isso devolve 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"Seis linhas de código"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Resolve o exercício com apenas seis linhas de código."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"O que muda consoante o valor recebido?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Só uma coisa: o nome no meio da frase. Se recebeste um nome, usa-o. Se não, usa o valor por omissão `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Como verifico se recebi um nome?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Com uma condicional que compara o valor recebido com a string vazia `\"\"`. Se estiver vazia, usa `\"you\"`. Caso contrário, usa o valor recebido."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Como construo a frase final?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Junta as três partes (`\"One for \"`, o nome escolhido e `\", one for me.\"`) usando concatenação (`+`) ou uma template string."}]}]}]
---

Agora vamos pegar naquele exercício simples do "Hello" e acrescentar algumas regras extra.

Em alguns sotaques ingleses, quando se diz 'two for' depressa, soa a 'two fer'. "Two-for-one" é uma forma de dizer que, se comprares um, levas outro grátis.

Imagina uma pastelaria com uma promoção especial em que podes comprar duas bolachas pelo preço de uma. Aproveitas a promoção e decides dar a bolacha extra a outra pessoa.

A tua tarefa é determinar o que vais dizer ao entregar a bolacha extra.

- Se souberes o nome da pessoa (por exemplo, Alice), dizes: "One for Alice, one for me."
- Se não souberes o nome da pessoa, dizes: "One for you, one for me."

Escreve uma função chamada `twoFer(name)` (dois para, em que `name` é o nome da pessoa) que devolve a frase certa.

Aqui tens alguns exemplos:

| Chamada da função  | Devolve                         |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

Para o bónus, consegues escrever isto usando **apenas 6 linhas de código**?

Boa sorte!
