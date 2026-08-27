---
lang: "fr"
type: "exercise"
slug: "chop-shop"
title: "Le salon express"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/chop-shop"
en_md5: "eef10493cf2492b9996e60c7771b3a8f"
governance_sha: "accabaea"
content_version: "582ba83d7d0f"
published_at: "2026-08-27"
forum_topic_id: 1669
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":"Détermine si tu peux les prendre en charge"},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":"Écris une fonction qui détermine si un nouveau client peut être servi avant la fermeture, en fonction de la file d'attente actuelle et du temps restant."}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":"Personne dans la file"},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":"Personne dans la file d'attente et tout le temps qu'il faut."},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":"Tard dans la journée"},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":"Personne dans la file d'attente, mais pas assez de temps."},{"key":"busyDayNoTime.name","english":"A full day","target":"Une journée bien remplie"},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":"Une file d'attente pleine et pas assez de temps."},{"key":"busyDayButTime.name","english":"Just squeezes in","target":"Ça passe tout juste"},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":"Une journée bien remplie, mais juste assez de temps."},{"key":"stillEarly.name","english":"Still early","target":"Encore tôt"},{"key":"stillEarly.description","english":"It's still early in the day.","target":"Il est encore tôt dans la journée."},{"key":"cuttingItFine.name","english":"Just in time","target":"Juste à temps"},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":"La personne arrive juste à temps !"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":"Par où commencer ? Par la file d'attente ou par le nouveau client ?"},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":"Commence par calculer combien de temps la file d'attente va consommer, puis regarde ce qu'il reste pour le nouveau client. Une fonction auxiliaire qui transforme le nom d'une coupe en sa durée (en minutes) rendra le code beaucoup plus propre."},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":"Comment soustraire la durée de chaque coupe du temps restant ?"},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":"Parcours la file d'attente. Pour chaque coupe, récupère sa durée grâce à ta fonction auxiliaire et soustrais-la de ton total de temps restant dans la journée."},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":"Comment décider si la nouvelle coupe rentre dans le temps restant ?"},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":"Une fois la file d'attente traitée, compare le temps restant à la durée de la nouvelle coupe. Si la durée de la nouvelle coupe est inférieure ou égale au temps restant, ça passe !"}]}]}]
---

Tu tiens un petit salon de coiffure qui mise sur la rapidité plutôt que sur la qualité. Les clients ressortent parfois un peu ébouriffés, mais au moins ils ne passent pas des heures dans le fauteuil.

Tu proposes plusieurs prestations, de la simple mise en forme à la coupe complète, qui prennent plus ou moins de temps. Le salon fonctionne selon le principe du premier arrivé, premier servi : il n'y a pas de système de rendez-vous.

À l'approche de la fin de la journée, il te faut un moyen de savoir si tu as le temps de t'occuper des nouvelles personnes qui entrent dans le salon.

Écris une fonction appelée `canFitIn` (peut prendre en charge la personne) qui prend trois entrées :

- La première correspond aux coupes déjà dans la file d'attente (un tableau de _strings_)
- La deuxième est la coupe que la nouvelle personne souhaite (une _string_)
- La troisième est le nombre de minutes restantes dans la journée (un nombre)

Renvoie un booléen qui indique si tu peux t'occuper de la personne.

Les coupes que tu proposes sont :

- Mohawk : 20 minutes
- Slicked-Back Pixie : 15 minutes
- Bob : 25 minutes
- Shave and Polish : 15 minutes
- Afro Trim : 45 minutes
- Up-do : 30 minutes

### Tableaux imbriqués

C'est le premier exercice où tu manipules un tableau qui contient d'autres tableaux comme éléments. On appelle ça des « tableaux imbriqués ». Un tableau imbriqué est un tableau comme les autres, mais au lieu de contenir des _strings_ ou des nombres, il contient d'autres tableaux.

Regarde le tableau `cuts` (les coupes). Il contient d'autres tableaux, un pour chaque coupe de cheveux, et chacun de ces tableaux a deux éléments : un nom et une durée.

Le plus simple, ici, est de penser d'abord aux tableaux intérieurs (les paires composées d'un nom et d'une durée), puis d'imaginer qu'ils sont tous regroupés ensemble dans un autre tableau.

L'indexation fonctionne comme partout ailleurs, mais tu peux enchaîner les indices comme ceci...

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
