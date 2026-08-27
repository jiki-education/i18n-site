---
lang: "pt-BR"
type: "exercise"
slug: "chop-shop"
title: "O Salão Vapt-Vupt"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/chop-shop"
en_md5: "eef10493cf2492b9996e60c7771b3a8f"
governance_sha: "accabaea"
content_version: "016a77f5a759"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":"Dá para encaixar?"},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":"Escreva uma função que determine se dá para atender uma nova pessoa antes do fim do dia, considerando a fila atual e o tempo que resta."}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":"Ninguém na fila"},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":"Ninguém na fila e tempo de sobra."},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":"Fim do dia"},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":"Ninguém na fila, mas o tempo não é suficiente."},{"key":"busyDayNoTime.name","english":"A full day","target":"Um dia cheio"},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":"A fila está cheia e não há tempo suficiente."},{"key":"busyDayButTime.name","english":"Just squeezes in","target":"Encaixa por pouco"},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":"Um dia cheio, mas o tempo dá certinho."},{"key":"stillEarly.name","english":"Still early","target":"Ainda é cedo"},{"key":"stillEarly.description","english":"It's still early in the day.","target":"O dia ainda está no começo."},{"key":"cuttingItFine.name","english":"Just in time","target":"Bem na hora"},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":"A pessoa chegou bem em cima da hora!"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":"Por onde eu começo? Pela fila ou pela nova pessoa?"},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":"Primeiro calcule quanto tempo a fila vai consumir e depois veja quanto sobra para a nova pessoa. Uma função auxiliar que transforma o nome de um corte na duração dele (em minutos) vai deixar tudo bem mais limpo."},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":"Como eu subtraio o tempo de cada corte do tempo restante?"},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":"Percorra a fila com um laço. Para cada corte, busque a duração dele com a sua função auxiliar e subtraia esse valor do total de tempo que ainda resta no dia."},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":"Como eu decido se dá para encaixar o novo corte?"},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":"Depois de processar a fila, compare o tempo restante com a duração do novo corte. Se o tempo do novo corte for menor ou igual ao tempo que sobra, dá para encaixar."}]}]}]
---

Você tem um pequeno salão de cabeleireiro que prioriza a velocidade em vez da qualidade. As pessoas podem sair com o corte um pouco irregular, mas não precisam passar muito tempo na cadeira.

Você oferece alguns serviços diferentes, de penteados a cortes completos, e cada um leva um tempo diferente para ficar pronto. O salão funciona por ordem de chegada. Não existe sistema de agendamento.

Quando o fim do dia se aproxima, você precisa de um jeito de saber se ainda tem tempo para atender as pessoas novas que entrarem no salão.

Escreva uma função chamada `canFitIn` (dá para encaixar) que recebe três entradas:

- A primeira são os cortes que já estão na fila (array de strings)
- A segunda é o corte que a nova pessoa quer (string)
- A terceira é a quantidade de minutos que restam no dia (número)

Retorne um Boolean indicando se você consegue encaixar a pessoa.

Os estilos que você oferece são:

- Mohawk: 20 minutos
- Slicked-Back Pixie: 15 minutos
- Bob: 25 minutos
- Shave and Polish: 15 minutos
- Afro Trim: 45 minutos
- Up-do: 30 minutos

### Arrays aninhados

Este é o primeiro exercício em que você lida com um array que contém outros arrays como elementos. Chamamos esses arrays de "arrays aninhados". Arrays aninhados são iguais a qualquer outro array, mas em vez de conter strings ou números, eles contêm outros arrays.

Dê uma olhada no array `cuts` (cortes). Ele contém outros arrays, um para cada corte de cabelo, e cada um desses arrays tem dois elementos: um nome e uma duração.

O jeito mais fácil de pensar nisso é imaginar primeiro os arrays internos, os pares de nome e duração, e depois pensar em todos eles agrupados dentro de outro array.

A indexação funciona igual a qualquer outro lugar, mas você pode encadear índices assim...

```javascript
const cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
