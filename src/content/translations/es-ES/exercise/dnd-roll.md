---
lang: "es-ES"
type: "exercise"
slug: "dnd-roll"
title: "Tirada de D&D"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "16f805d"
content_version: "a4911d8af781"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"Lo siento, Jiki no tiene a mano un dado de {{sides}} caras."},{"key":"announceNumber","english":"You can only announce a number","target":"Solo puedes anunciar un número."},{"key":"attackNumber","english":"Attack must be a number","target":"El ataque debe ser un número."},{"key":"damageNumber","english":"Damage must be a number","target":"El daño debe ser un número."}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"lanzó un dado y sacó ${return}"},{"key":"announce","english":"announced ${arg1}","target":"anunció ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"golpeó al goblin con ataque ${arg1} y daño ${arg2}"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"Se esperaban 3 anuncios pero se obtuvieron {{got}}. Asegúrate de anunciar cada tirada."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"Se esperaba que el primer anuncio fuera {{attack}} (la tirada de ataque) pero se obtuvo {{got}}."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"Se esperaba que el segundo anuncio fuera {{damage}} (la tirada de daño base) pero se obtuvo {{got}}."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"Se esperaba que el tercer anuncio fuera {{bonus}} (la tirada adicional) pero se obtuvo {{got}}."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"No has golpeado al goblin. Asegúrate de llamar a <code>strike()</code>."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"Se esperaba que el ataque fuera {{attack}} pero se obtuvo {{got}}. Pasa la tirada de ataque a <code>strike()</code>."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"Se esperaba que el daño total fuera {{totalDamage}} ({{damage}} + {{bonus}}) pero se obtuvo {{got}}. Suma el daño base y el adicional."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"Lanza los dados y golpea al goblin"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"Lanza tres dados (d20 para ataque, d12 para daño base, d10 para daño adicional), anuncia cada tirada y luego golpea al goblin con tu tirada de ataque y daño total (base + adicional)."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"Lanzar y golpear"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"Lanza d20 para ataque, d12 para daño base, d10 para daño adicional. Golpea al goblin con tu ataque y daño total."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"¿Cómo elijo qué tipo de dado usar?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"Para un dado de 20 caras, usa 20 como entrada para lanzar, por ejemplo: `roll(20)`. Para un dado de 12 caras, llama a `roll(12)`."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"Lanza un dado con el número de caras indicado y **devuelve** el resultado."},{"key":"roll.category","english":"Dice","target":"Dados"},{"key":"announce.description","english":"Announces a dice roll value.","target":"Anuncia el valor de una tirada de dado."},{"key":"announce.category","english":"Action","target":"Acción"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"Golpea al goblin con la tirada de ataque y el daño total indicados."},{"key":"strike.category","english":"Action","target":"Acción"}]}]}]
---

Estás creando un bot que pueda jugar Dungeons and Dragons (DnD). Si no conoces DnD, la idea básica es que te enfrentas a varios escenarios y lanzas dados para ver qué sucede. Hay muchos dados diferentes con distinta cantidad de caras (¡no solo el dado de seis caras al que quizás estés acostumbrado!).

Uno de los escenarios que debes manejar es encontrarte con un goblin. Para atacar al goblin necesitas:

- Genera una **puntuación de ataque** lanzando un dado de 20 caras.
- Genera una **puntuación de daño base** lanzando un dado de 12 caras.
- Genera una **puntuación de daño adicional** lanzando un dado de 10 caras.
- Suma el daño base y el daño adicional para obtener tu **daño total**.
- Golpea al goblin con tu tirada de ataque y el daño total.

Después de cada vez que lanzas un dado, debes anunciar el número que sacaste a las otras personas con las que juegas. Si intentas golpear sin anunciar los números, ¡podrían pensar que estás haciendo trampa!

Tienes tres funciones que puedes usar:

- `roll(sides)` (lanzar) lanza un dado con la cantidad de caras indicada. Esta función devuelve (_returns_ en inglés) el resultado.
- `announce(value)` (anunciar) anuncia una tirada de dado.
- `strike(attack, damage)` (golpear) golpea al goblin con tu tirada de ataque y el daño total.

**Importante:** Cada vez que llamas a `roll()`, Jiki lanza un dado y obtiene un número diferente. No esperes que lanzar el mismo dado dos veces dé el mismo número cada vez.
