---
lang: "fr"
type: "exercise"
slug: "dnd-roll"
title: "Lancer de dés D&D"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "efae104"
content_version: "dba1255f0ffa"
published_at: "2026-08-05"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"Désolé, Jiki n'a pas de dé à {{sides}} faces sous la main !"},{"key":"announceNumber","english":"You can only announce a number","target":"Tu ne peux annoncer qu'un nombre"},{"key":"attackNumber","english":"Attack must be a number","target":"L'attaque doit être un nombre"},{"key":"damageNumber","english":"Damage must be a number","target":"Les dégâts doivent être un nombre"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"a lancé un dé et a obtenu ${return}"},{"key":"announce","english":"announced ${arg1}","target":"a annoncé ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"a frappé le gobelin avec une attaque de ${arg1} et des dégâts de ${arg2}"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"3 annonces étaient attendues, mais il y en a eu {{got}}. Vérifie que tu annonces chaque lancer."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"La première annonce attendue était {{attack}} (le jet d'attaque), mais c'était {{got}}."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"La deuxième annonce attendue était {{damage}} (le jet de dégâts de base), mais c'était {{got}}."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"La troisième annonce attendue était {{bonus}} (le jet bonus), mais c'était {{got}}."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"Tu n'as pas frappé le gobelin. Vérifie que tu appelles <code>strike()</code>."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"L'attaque attendue était {{attack}}, mais c'était {{got}}. Passe le jet d'attaque à <code>strike()</code>."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"Les dégâts totaux attendus étaient {{totalDamage}} ({{damage}} + {{bonus}}), mais c'était {{got}}. Additionne les dégâts de base et le bonus."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"Lance les dés et frappe le gobelin"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"Lance trois dés (un d20 pour l'attaque, un d12 pour les dégâts de base, un d10 pour le bonus), annonce chaque lancer, puis frappe le gobelin avec ton jet d'attaque et tes dégâts totaux (base + bonus)."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"Lance et frappe"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"Lance un d20 pour l'attaque, un d12 pour les dégâts de base, un d10 pour le bonus. Frappe le gobelin avec ton attaque et tes dégâts totaux."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"Comment choisir le type de dé à utiliser ?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"Pour un dé à 20 faces, utilise 20 comme entrée de `roll`, par exemple `roll(20)`. Pour un dé à 12 faces, appelle `roll(12)`."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"Lance un dé avec le nombre de faces indiqué et **renvoie** le résultat."},{"key":"roll.category","english":"Dice","target":"Dés"},{"key":"announce.description","english":"Announces a dice roll value.","target":"Annonce la valeur d'un lancer de dé."},{"key":"announce.category","english":"Action","target":"Action"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"Frappe le gobelin avec le jet d'attaque et les dégâts totaux indiqués."},{"key":"strike.category","english":"Action","target":"Action"}]}]}]
---

Tu crées un bot capable de jouer à Donjons et Dragons (DnD). Si tu ne connais pas DnD, le principe de base est le suivant : on rencontre toutes sortes de situations et on lance des dés pour déterminer ce qui se passe. Il existe de nombreux dés avec des nombres de faces différents (pas seulement le dé à six faces auquel tu es peut-être habitué !)

L'une des situations à gérer est la rencontre avec un gobelin. Pour attaquer le gobelin, tu dois :

- Générer un **score d'attaque** en lançant un dé à 20 faces.
- Générer un **score de dégâts de base** en lançant un dé à 12 faces.
- Générer un **score de dégâts bonus** en lançant un dé à 10 faces.
- Additionner les dégâts de base et les dégâts bonus pour obtenir tes **dégâts totaux**.
- Frapper le gobelin avec ton jet d'attaque et tes dégâts totaux.

Après chaque lancer de dé, tu dois annoncer le nombre obtenu aux autres personnes avec qui tu joues. Si tu essaies de frapper sans annoncer les nombres, elles pourraient croire que tu triches !

Tu as trois fonctions à ta disposition :

- `roll(sides)` (lancer un dé à `sides` faces) lance un dé avec le nombre de faces indiqué. Cette fonction renvoie (_returns_ en anglais) le résultat.
- `announce(value)` (annoncer une valeur) annonce un lancer de dé.
- `strike(attack, damage)` (frapper avec l'attaque et les dégâts) frappe le gobelin avec ton jet d'attaque et tes dégâts totaux.

**Important :** à chaque fois que tu appelles `roll()`, Jiki lance un dé et obtient un nombre différent. Ne t'attends pas à obtenir le même nombre chaque fois que tu lances le même dé.
