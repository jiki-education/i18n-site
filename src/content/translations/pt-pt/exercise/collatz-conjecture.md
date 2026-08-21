---
lang: "pt-pt"
type: "exercise"
slug: "collatz-conjecture"
title: "Conjetura de Collatz"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-pt/curriculum/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "0284360"
content_version: "57ef348f77ee"
published_at: "2026-08-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"Calcular os passos de Collatz"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"Escreve uma função que recebe um número e devolve quantos passos são precisos para chegar ao 1 seguindo as regras da Conjetura de Collatz: se for par, divide por 2; se for ímpar, multiplica por 3 e soma 1."}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"Número 1"},{"key":"number1.description","english":"Zero steps for one.","target":"Zero passos para o um."},{"key":"number16.name","english":"Number 16","target":"Número 16"},{"key":"number16.description","english":"Divide if even.","target":"Divide se for par."},{"key":"number12.name","english":"Number 12","target":"Número 12"},{"key":"number12.description","english":"Even and odd steps.","target":"Passos pares e ímpares."},{"key":"number1000000.name","english":"Number 1000000","target":"Número 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"Grande número de passos pares e ímpares."}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"Como é que continuo até o número chegar ao 1?"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"Usa um ciclo `repeat()` sem número. Repete para sempre até usares `return` para sair dele. Dentro do ciclo, substitui o número pelo número seguinte na sequência e devolve assim que chegar ao 1."},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"Como é que decido qual regra aplicar em cada passo?"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"Verifica se o número é par. O operador módulo faz isso. `number % 2 === 0` significa que é par. Se for par, divide por 2. Caso contrário, faz `3 * number + 1`."},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"Como é que acompanho a resposta (o número de passos)?"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"Mantém uma variável de contagem para o número de vezes que aplicaste as regras. Pensa no que precisa de lhe acontecer a cada volta do ciclo e no que a tua função deve devolver quando o número chegar ao 1."}]}]}]
---

Uma noite, encontraste por acaso um caderno antigo cheio de rabiscos enigmáticos, como se alguém andasse obcecado a perseguir uma ideia. Numa das páginas, destacava-se uma única pergunta: **Será que todos os números conseguem chegar ao 1?** Estava ligada a algo chamado **Conjetura de Collatz**, um enigma que tem intrigado pensadores durante décadas.

As regras são enganadoramente simples:

1. Escolhe um número.
2. Se for par, divide-o por 2.
3. Se for ímpar, multiplica-o por 3 e depois soma 1.
4. Repete com o resultado, continuando indefinidamente.

Por exemplo, se começares com 12:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

A contar do segundo número (6), foram precisos 9 passos para chegar ao 1.

Cria uma função chamada `collatzSteps` (passos de Collatz) que recebe um parâmetro de entrada, um número. Devolve **quantos passos** são precisos para chegar ao 1 a partir de qualquer número, seguindo as regras da Conjetura de Collatz.
