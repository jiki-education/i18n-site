---
lang: "it"
type: "exercise"
slug: "dnd-roll"
title: "Tiro di dadi in D&D"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "c50ef8d"
content_version: "abf036f0fdec"
published_at: "2026-08-04"
forum_topic_id: 1148
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"Spiacente, Jiki non ha un dado a {{sides}} facce a portata di mano!"},{"key":"announceNumber","english":"You can only announce a number","target":"Puoi annunciare solo un numero"},{"key":"attackNumber","english":"Attack must be a number","target":"L'attacco deve essere un numero"},{"key":"damageNumber","english":"Damage must be a number","target":"Il danno deve essere un numero"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"ha lanciato un dado e ha ottenuto ${return}"},{"key":"announce","english":"announced ${arg1}","target":"ha annunciato ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"ha colpito il goblin con l'attacco ${arg1} e il danno ${arg2}"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"Erano attesi 3 annunci, ma ne hai fatti {{got}}. Assicurati di annunciare ogni lancio."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"Il primo annuncio doveva essere {{attack}} (il tiro per attaccare), ma hai ottenuto {{got}}."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"Il secondo annuncio doveva essere {{damage}} (il tiro per il danno base), ma hai ottenuto {{got}}."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"Il terzo annuncio doveva essere {{bonus}} (il tiro per il danno bonus), ma hai ottenuto {{got}}."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"Non hai colpito il goblin. Assicurati di chiamare <code>strike()</code>."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"L'attacco doveva essere {{attack}}, ma hai ottenuto {{got}}. Passa il tiro per attaccare a <code>strike()</code>."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"Il danno totale doveva essere {{totalDamage}} ({{damage}} + {{bonus}}), ma hai ottenuto {{got}}. Somma il danno base e il bonus."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"Lancia i dadi e colpisci il goblin"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"Lancia tre dadi (d20 per l'attacco, d12 per il danno base, d10 per il bonus), annuncia ogni lancio, poi colpisci il goblin con il tuo tiro per attaccare e il danno totale (base + bonus)."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"Lancia e colpisci"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"Lancia un d20 per l'attacco, d12 per il danno base, d10 per il bonus. Colpisci il goblin con il tuo attacco e il danno totale."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"Come scelgo il tipo di dado da usare?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"Per un dado a 20 facce, usa 20 come input per roll, ad esempio `roll(20)`. Per un dado a 12 facce, chiama `roll(12)`."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"Lancia un dado con il numero di facce dato e **restituisce** il risultato."},{"key":"roll.category","english":"Dice","target":"Dadi"},{"key":"announce.description","english":"Announces a dice roll value.","target":"Annuncia il valore di un lancio di dado."},{"key":"announce.category","english":"Action","target":"Azione"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"Colpisce il goblin con il tiro per attaccare e il danno totale dati."},{"key":"strike.category","english":"Action","target":"Azione"}]}]}]
---

Stai creando un bot in grado di giocare a Dungeons and Dragons (DnD). Se non conosci DnD, l'idea di base è che incontri molti scenari e lanci i dadi per determinare cosa succede. Ci sono molti dadi diversi con un diverso numero di facce (non solo il dado a sei facce a cui potresti essere abituato!)

Uno degli scenari che devi gestire è incontrare un goblin. Per attaccare il goblin devi:

- Genera un **punteggio di attacco** lanciando un dado a 20 facce.
- Genera un **punteggio di danno base** lanciando un dado a 12 facce.
- Genera un **punteggio di danno bonus** lanciando un dado a 10 facce.
- Somma il danno base e il danno bonus per ottenere il **danno totale**.
- Colpisci il goblin con il tuo tiro per attaccare e il danno totale.

Dopo ogni volta che lanci un dado, devi annunciare il numero che hai ottenuto alle altre persone con cui stai giocando. Se provi a colpire senza annunciare i numeri, potrebbero pensare che stai barando!

Hai a disposizione tre funzioni:

- `roll(sides)` (lanciare un dado) lancia un dado con il numero di facce dato. Questa funzione restituisce (_returns_ in inglese) il risultato.
- `announce(value)` (annunciare un valore) annuncia un lancio di dado.
- `strike(attack, damage)` (colpire con attacco e danno) colpisce il goblin con il tuo tiro per attaccare e il danno totale.

**Importante:** Ogni volta che chiami `roll()`, Jiki lancia un dado e ottiene un numero diverso. Non aspettarti che lanciando due volte lo stesso dado si ottenga lo stesso numero ogni volta.
