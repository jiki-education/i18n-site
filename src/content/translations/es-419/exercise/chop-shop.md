---
lang: "es-419"
type: "exercise"
slug: "chop-shop"
title: "The Chop Shop"
status: "published"
source_repo: "i18n"
source_path: "locales/es-419/curriculum/exercises/chop-shop"
en_md5: "eef10493cf2492b9996e60c7771b3a8f"
governance_sha: "accabaea"
content_version: "30936acf4a6a"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":"¿Puedes hacer que quepan?"},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":"Escribe una función que determine si puedes atender a un cliente nuevo antes de la hora de cierre, con la fila actual y el tiempo restante."}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":"Nadie en la fila"},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":"No hay nadie en la fila y sobra tiempo."},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":"Al final del día"},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":"No hay nadie en la fila, pero no hay suficiente tiempo."},{"key":"busyDayNoTime.name","english":"A full day","target":"Un día completo"},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":"Una fila llena y no hay suficiente tiempo."},{"key":"busyDayButTime.name","english":"Just squeezes in","target":"Apenas cabe"},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":"Un día completo, pero el tiempo alcanza justo."},{"key":"stillEarly.name","english":"Still early","target":"Todavía es temprano"},{"key":"stillEarly.description","english":"It's still early in the day.","target":"Aún es temprano en el día."},{"key":"cuttingItFine.name","english":"Just in time","target":"Justo a tiempo"},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":"¡Llegaron justo a tiempo!"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":"¿Por dónde debería empezar? ¿Por la fila o por el cliente nuevo?"},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":"Primero calcula cuánto tiempo va a consumir la fila y luego mira cuánto queda para el cliente nuevo. Una función auxiliar que convierta el nombre de un corte en su duración (en minutos) va a hacer esto mucho más limpio."},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":"¿Cómo resto el tiempo de cada corte del tiempo restante?"},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":"Recorre la fila. Para cada corte, busca su duración con tu función auxiliar y resta ese tiempo del total acumulado de tiempo que te queda en el día."},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":"¿Cómo decido si el corte nuevo cabe?"},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":"Después de procesar la fila, compara el tiempo restante con la duración del corte nuevo. Si el tiempo del corte nuevo es menor o igual que el tiempo que queda, cabe."}]}]}]
---

Tienes una pequeña peluquería que prioriza la rapidez por encima de la calidad. La gente puede salir con el corte un poco desparejo, pero así no pasa demasiado tiempo en la silla.

Ofreces varios servicios, desde peinados hasta cortes completos, que toman tiempos distintos. Atiendes la peluquería por orden de llegada. No hay sistema de citas.

Cuando se acerca el final del día, necesitas una forma de saber si tienes tiempo para cualquier persona nueva que entre a la peluquería.

Escribe una función llamada `canFitIn` («cabe en el horario») que recibe tres argumentos:

- El primero son los cortes que ya tienes en la fila (un array de strings).
- El segundo es el corte que quiere la persona nueva (string).
- El tercero es la cantidad de minutos que quedan en el día (número).

Devuelve un boolean que indica si puedes atender a esa persona.

Los estilos que ofreces son:

- Mohawk: 20 minutos
- Slicked-Back Pixie: 15 minutos
- Bob: 25 minutos
- Shave and Polish: 15 minutos
- Afro Trim: 45 minutos
- Up-do: 30 minutos

### Arrays anidados

Este es el primer ejercicio en el que trabajas con un array que contiene otros arrays como elementos. Los llamamos «arrays anidados». Los arrays anidados son iguales que cualquier otro array, pero en lugar de contener strings o números, contienen otros arrays.

Observa el array `cuts` («cortes»). Contiene otros arrays, uno para cada corte de cabello, y cada uno de estos arrays tiene dos elementos: un nombre y una duración.

Para esto, lo más fácil es pensar primero en los arrays internos (los pares de nombre y duración), y después en que todos están agrupados dentro de otro array.

El acceso por índice funciona igual que siempre, pero puedes encadenar índices así:

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
