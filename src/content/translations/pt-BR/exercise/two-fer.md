---
lang: "pt-BR"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "0e11138"
content_version: "b1c290151b45"
published_at: "2026-08-10"
forum_topic_id: 1101
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Você usou mais de seis linhas de código."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Crie a função two-fer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Escreva uma função twoFer que recebe um nome e retorna 'One for [name], one for me.' Se nenhum nome for dado (string vazia), use 'you' no lugar do nome."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Resolva em seis linhas de código"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Você consegue resolver isso com só seis linhas de código?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Nenhum nome dado"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Nenhum nome é dado, então retorne 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Nome dado: Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"O nome dela é 'Alice', então retorne 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Nome dado: Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"O nome dele é 'Tom', então retorne 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"Seis linhas de código"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Resolva o exercício com só seis linhas de código."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"O que muda de acordo com a entrada?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Só uma coisa: o nome no meio da frase. Se você recebeu um nome, use esse nome. Se não, use o valor padrão `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Como eu verifico se recebi um nome?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Com uma condicional que compara a entrada com a string vazia `\"\"`. Se estiver vazia, use `\"you\"`. Caso contrário, use a entrada."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Como eu monto a frase final?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Junte os três pedaços (`\"One for \"`, o nome escolhido e `\", one for me.\"`) usando concatenação (`+`) ou uma template string."}]}]}]
---

Agora vamos partir daquele exercício simples do "Hello" e acrescentar algumas regras extras.

Em alguns sotaques do inglês, quando alguém fala "two for" rápido, soa como "two fer". "Two-for-one" é um jeito de dizer que, se você compra um, leva outro de graça: o famoso "dois por um".

Imagine uma padaria com uma promoção de festas em que você pode comprar dois biscoitos pelo preço de um. Você aproveita a oferta e decide dar o biscoito extra para outra pessoa.

Sua tarefa é determinar o que você vai dizer ao entregar o biscoito extra.

- Se você sabe o nome da pessoa (por exemplo, Alice), você dirá: `"One for Alice, one for me."`
- Se você não sabe o nome da pessoa, você dirá: `"One for you, one for me."`

Escreva uma função chamada `twoFer(name)` (dois por um, sendo `name` o nome da pessoa) que retorna a fala apropriada.

Aqui estão alguns exemplos:

| Chamada de função  | Retorna                         |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

Para o bônus: você consegue escrever isso usando **só 6 linhas de código**?

Boa sorte!
