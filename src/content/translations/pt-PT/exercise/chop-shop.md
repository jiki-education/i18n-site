---
lang: "pt-PT"
type: "exercise"
slug: "chop-shop"
title: "The Chop Shop"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/chop-shop"
en_md5: "eef10493cf2492b9996e60c7771b3a8f"
governance_sha: "accabaea"
content_version: "00b05b935a4a"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":"Consegues encaixá-lo?"},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":"Escreve uma função que determina se um novo cliente pode ser atendido antes do fecho, tendo em conta a fila atual e o tempo restante."}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":"Fila vazia"},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":"Ninguém na fila, muito tempo."},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":"Fim do dia"},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":"Ninguém na fila, mas não há tempo suficiente."},{"key":"busyDayNoTime.name","english":"A full day","target":"Dia cheio"},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":"Fila cheia e não há tempo suficiente."},{"key":"busyDayButTime.name","english":"Just squeezes in","target":"Encaixa à justa"},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":"Dia cheio, mas há tempo à justa."},{"key":"stillEarly.name","english":"Still early","target":"Ainda é cedo"},{"key":"stillEarly.description","english":"It's still early in the day.","target":"Ainda é cedo no dia."},{"key":"cuttingItFine.name","english":"Just in time","target":"Mesmo a tempo"},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":"Chegou mesmo a tempo!"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":"Por onde devo começar? Pela fila ou pelo novo cliente?"},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":"Primeiro, calcula quanto tempo a fila vai ocupar e vê quanto sobra para o novo cliente. Uma função auxiliar que converte o nome de um corte de cabelo na sua duração (em minutos) facilita muito."},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":"Como é que subtraio o tempo de cada corte de cabelo ao tempo restante?"},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":"Percorre a fila com um ciclo. Para cada corte de cabelo, consulta a duração com a tua função auxiliar e subtrai-a ao total de tempo que resta no dia."},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":"Como é que decido se o novo corte de cabelo cabe?"},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":"Depois de processares a fila, compara o tempo restante com a duração do novo corte de cabelo. Se a duração do novo corte for menor ou igual ao tempo que resta, ele cabe."}]}]}]
---

Tens um pequeno salão de cabeleireiro que dá prioridade à rapidez em vez da qualidade. Os clientes podem sair com um acabamento menos perfeito, mas não têm de passar demasiado tempo na cadeira.

Ofereces vários serviços, desde penteados a cortes completos, que demoram tempos diferentes. O salão funciona por ordem de chegada. Não há marcações.

À medida que o dia se aproxima do fim, precisas de uma forma de saber se tens tempo para atender os novos clientes que entram no salão.

Escreve uma função chamada `canFitIn` (consegue encaixar) que recebe três parâmetros de entrada:

- O primeiro são os cortes de cabelo que já tens na fila (array de strings).
- O segundo é o corte de cabelo que o novo cliente quer (string).
- O terceiro é o número de minutos que restam no dia (number).

Devolve um boolean que indica se consegues encaixar a pessoa.

Os estilos que ofereces são:

- Mohawk: 20 minutos
- Slicked-Back Pixie: 15 minutos
- Bob: 25 minutos
- Shave and Polish: 15 minutos
- Afro Trim: 45 minutos
- Up-do: 30 minutos

### Arrays aninhados

Este é o primeiro exercício em que lidas com um array que contém outros arrays como elementos. Chamamos-lhes «arrays aninhados». Os arrays aninhados são iguais a qualquer outro array, mas, em vez de conterem strings ou números, contêm outros arrays.

Repara no array `cuts` (cortes). Contém outros arrays, um para cada corte de cabelo, e cada um destes arrays tem dois elementos: um nome e uma duração.

É mais fácil olhares primeiro para os arrays interiores, os pares de nomes e durações, e depois imaginares todos esses pares agrupados noutro array.

A indexação funciona da mesma forma que em qualquer outro contexto, mas podes encadear índices assim...

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
