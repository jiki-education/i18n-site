---
lang: "it"
type: "exercise"
slug: "chop-shop"
title: "The Chop Shop"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/exercises/chop-shop"
en_md5: "eef10493cf2492b9996e60c7771b3a8f"
governance_sha: "accabaea"
content_version: "fb2133e38a90"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":"Riesci a inserirli?"},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":"Scrivi una funzione che determina se un nuovo cliente può essere servito prima della chiusura, considerando la coda attuale e il tempo rimanente."}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":"Nessuno in coda"},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":"Nessuno in coda, tempo in abbondanza."},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":"A fine giornata"},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":"Nessuno in coda ma non abbastanza tempo."},{"key":"busyDayNoTime.name","english":"A full day","target":"Giornata piena"},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":"Coda piena e tempo insufficiente."},{"key":"busyDayButTime.name","english":"Just squeezes in","target":"Entra per un pelo"},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":"Giornata piena ma c'è appena il tempo sufficiente."},{"key":"stillEarly.name","english":"Still early","target":"Ancora presto"},{"key":"stillEarly.description","english":"It's still early in the day.","target":"È ancora presto nella giornata."},{"key":"cuttingItFine.name","english":"Just in time","target":"Appena in tempo"},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":"Ce l'hanno fatta appena in tempo!"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":"Da dove dovrei iniziare? Dalla coda o dal nuovo cliente?"},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":"Prima calcola quanto tempo richiederà la coda, poi guarda quanto rimane per il nuovo cliente. Una funzione ausiliaria che trasforma il nome di un taglio nella sua durata (in minuti) renderà tutto molto più pulito."},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":"Come faccio a sottrarre il tempo di ogni taglio dal tempo rimanente?"},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":"Esegui un ciclo sulla coda. Per ogni taglio, ricava la sua durata con la tua funzione ausiliaria e sottraila dal totale del tempo rimasto nella giornata."},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":"Come faccio a capire se il nuovo taglio può essere inserito?"},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":"Dopo aver elaborato la coda, confronta il tempo rimanente con la durata del nuovo taglio. Se il tempo del nuovo taglio è minore o uguale al tempo rimasto, può essere inserito."}]}]}]
---

Gesti un piccolo salone da barbiere che punta più sulla velocità che sulla qualità. I clienti potrebbero uscire con un taglio non proprio perfetto, ma non passano troppo tempo sulla poltrona.

Offri diversi servizi, dalla messa in piega al taglio completo, che richiedono tempi diversi. Gestisci il salone in base all'ordine di arrivo: chi arriva prima viene servito prima. Non esiste un sistema di appuntamenti.

Verso la fine della giornata ti serve un modo per capire se hai tempo per eventuali nuovi clienti che entrano nel salone.

Scrivi una funzione chiamata `canFitIn` (può essere inserita) che accetta tre input:

- Il primo input è l'elenco dei tagli che hai già in coda (un array di stringhe)
- Il secondo input è il taglio richiesto dalla nuova persona (una stringa)
- Il terzo input è il numero di minuti rimasti nella giornata (un numero)

Restituisci un valore booleano che indica se puoi inserire la persona.

I servizi che offri sono:

- Mohawk: 20 minuti
- Slicked-Back Pixie: 15 minuti
- Bob: 25 minuti
- Shave and Polish: 15 minuti
- Afro Trim: 45 minuti
- Up-do: 30 minuti

### Array annidati

Questo è il primo esercizio in cui hai a che fare con un array che contiene altri array come elementi. Li chiamiamo «array annidati». Gli array annidati sono uguali a qualsiasi altro array: invece di contenere stringhe o numeri, contengono altri array.

Dai un'occhiata all'array `cuts` (tagli). Contiene altri array, uno per ogni taglio, e ognuno di questi array ha due elementi: un nome e una durata.

Qui è più semplice pensare prima agli array interni, cioè alle coppie di nome e durata, e poi immaginarli tutti raggruppati insieme in un altro array.

L'accesso tramite indice funziona come nel resto del corso, ma qui puoi concatenare più indici, in questo modo...

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
