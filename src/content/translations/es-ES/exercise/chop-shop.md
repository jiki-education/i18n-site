---
lang: "es-ES"
type: "exercise"
slug: "chop-shop"
title: "The Chop Shop"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/chop-shop"
en_md5: "eef10493cf2492b9996e60c7771b3a8f"
governance_sha: "accabaea"
content_version: "c01d28c2d4a2"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":"¿Puedes atenderlos?"},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":"Escribe una función que determine si una persona nueva puede ser atendida antes de la hora de cierre, teniendo en cuenta la cola actual y el tiempo restante."}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":"No hay nadie en la cola"},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":"No hay nadie en la cola y hay tiempo de sobra."},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":"Al final del día"},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":"No hay nadie en la cola, pero no tienes tiempo suficiente."},{"key":"busyDayNoTime.name","english":"A full day","target":"Un día lleno"},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":"La cola está llena y no tienes tiempo suficiente."},{"key":"busyDayButTime.name","english":"Just squeezes in","target":"Apenas cabe"},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":"Un día lleno, pero hay tiempo justo."},{"key":"stillEarly.name","english":"Still early","target":"Aún es pronto"},{"key":"stillEarly.description","english":"It's still early in the day.","target":"Aún es pronto en el día."},{"key":"cuttingItFine.name","english":"Just in time","target":"Justo a tiempo"},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":"¡Han llegado justo a tiempo!"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":"¿Por dónde debería empezar? ¿La cola o la persona nueva?"},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":"Primero calcula cuánto tiempo va a consumir la cola y luego mira cuánto queda para la persona nueva. Una función auxiliar que convierta el nombre de un corte en su duración (en minutos) hará que todo sea mucho más limpio."},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":"¿Cómo resto el tiempo de cada corte del tiempo restante?"},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":"Recorre la cola con un bucle. Para cada corte, busca su duración con tu función auxiliar y réstala del total de tiempo que te queda en el día."},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":"¿Cómo decido si el nuevo corte cabe?"},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":"Después de procesar la cola, compara el tiempo restante con la duración del nuevo corte. Si el tiempo del nuevo corte es menor o igual que el tiempo que queda, cabe."}]}]}]
---

Llevas una pequeña peluquería que se centra en la rapidez más que en la calidad. Puede que la gente salga con el corte un poco descuidado, pero no pasa demasiado tiempo en el sillón.

Ofreces unos cuantos servicios, desde peinados hasta cortes de pelo completos, que llevan tiempos distintos. Atiendes por orden de llegada. No hay sistema de citas.

Cuando se acerca el final del día, necesitas una forma de saber si tienes tiempo para las personas nuevas que entran en la peluquería.

Escribe una función llamada `canFitIn` (puede atender) que recibe tres entradas:

- La primera entrada es el array de cortes que ya tienes en la cola (array de strings).
- La segunda entrada es el corte que quiere la persona nueva (string).
- La tercera entrada es la cantidad de minutos que quedan del día (número).

Devuelve un Boolean que indica si puedes atender a la persona.

Los estilos que ofreces son:

- Mohawk: 20 minutos
- Slicked-Back Pixie: 15 minutos
- Bob: 25 minutos
- Shave and Polish: 15 minutos
- Afro Trim: 45 minutos
- Up-do: 30 minutos

### Arrays anidados

Este es el primer ejercicio en el que trabajas con un array que contiene otros arrays como elementos. Los llamamos «arrays anidados». Los arrays anidados son iguales que cualquier otro array, pero en lugar de contener strings o números, contienen otros arrays.

Echa un vistazo al array `cuts` (cortes). Contiene otros arrays, uno por cada corte de pelo, y cada uno de estos arrays tiene dos elementos: un nombre y una duración.

Con esto, lo más fácil es pensar primero en los arrays internos (los pares de nombre y duración) y después pensar en que todos están agrupados dentro de otro array.

Acceder por índice funciona igual que siempre, pero puedes encadenar varios índices así...

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
