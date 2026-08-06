---
lang: "sr"
type: "exercise"
slug: "dnd-roll"
title: "D&D bacanje"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "c80036b"
content_version: "fdd6bf820e46"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"Izvini - Jiki nema pri ruci kockicu sa {{sides}} strana!"},{"key":"announceNumber","english":"You can only announce a number","target":"Možeš da objaviš samo broj."},{"key":"attackNumber","english":"Attack must be a number","target":"Napad mora biti broj."},{"key":"damageNumber","english":"Damage must be a number","target":"Šteta mora biti broj."}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"baca kockicu i dobija ${return}"},{"key":"announce","english":"announced ${arg1}","target":"objavljuje ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"napada goblina sa napadom ${arg1} i štetom ${arg2}"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"Očekuje se 3 objave, ali je dobijeno {{got}}. Proveri da li objavljuješ svako bacanje."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"Očekuje se da prva objava bude {{attack}} (rezultat napada), ali je dobijeno {{got}}."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"Očekuje se da druga objava bude {{damage}} (osnovna šteta), ali je dobijeno {{got}}."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"Očekuje se da treća objava bude {{bonus}} (dodatna šteta), ali je dobijeno {{got}}."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"Goblin nije napadnut. Proveri da li pozivaš <code>strike()</code>."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"Očekuje se da napad bude {{attack}}, ali je dobijeno {{got}}. Prosledi rezultat napada funkciji <code>strike()</code>."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"Očekuje se da ukupna šteta bude {{totalDamage}} ({{damage}} + {{bonus}}), ali je dobijeno {{got}}. Saberi osnovnu i dodatnu štetu."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"Baci kockice i napadni goblina"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"Baci tri kockice (d20 za napad, d12 za osnovnu štetu, d10 za dodatnu), objavi svako bacanje, zatim napadni goblina koristeći rezultat napada i ukupnu štetu (osnovna + dodatna)."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"Baci i napadni"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"Baci d20 za napad, d12 za osnovnu štetu, d10 za dodatnu. Napadni goblina sa napadom i ukupnom štetom."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"Kako da izaberem koju vrstu kockice da koristim?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"Za dvadesetostranu kockicu, koristi 20 kao ulaz za roll - npr. `roll(20)`. Za dvanaestostranu kockicu, pozovi `roll(12)`."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"Baca kockicu sa datim brojem strana i **vraća** rezultat."},{"key":"roll.category","english":"Dice","target":"Kockice"},{"key":"announce.description","english":"Announces a dice roll value.","target":"Objavljuje rezultat bacanja kockice."},{"key":"announce.category","english":"Action","target":"Akcija"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"Napada goblina koristeći dati rezultat napada i ukupnu štetu."},{"key":"strike.category","english":"Action","target":"Akcija"}]}]}]
---

Praviš bota koji može da igra Dungeons and Dragons (DnD). Ako nisi upoznat sa DnD, osnovna ideja je da nailaziš na razne scenarije i bacaš kockice kako bi saznao šta se dešava. Postoji mnogo različitih kockica sa različitim brojem strana (ne samo šestostrana kocka na koju si možda navikao!)

Jedan scenario koji treba da rešiš je susret sa goblinom. Da bi napao goblina potrebno je da:

- Generiši **rezultat napada** bacanjem dvadesetostrane kockice.
- Generiši **osnovnu štetu** bacanjem dvanaestostrane kockice.
- Generiši **dodatnu štetu** bacanjem desetostrane kockice.
- Saberi osnovnu i dodatnu štetu da dobiješ **ukupnu štetu**.
- Napadni goblina koristeći rezultat napada i ukupnu štetu.

Nakon svakog bacanja kockice, treba da objaviš broj koji dobiješ ostalim igračima. Ako pokušaš da napadneš bez objavljivanja brojeva, mogli bi da pomisle da varaš!

Imaš tri funkcije koje možeš da koristiš:

- `roll(sides)` (baca kockicu sa datim brojem strana) simulira bacanje kockice sa datim brojem strana. Ova funkcija vraća (engl. _returns_) rezultat.
- `announce(value)` (objavljuje vrednost) objavljuje rezultat bacanja kockice.
- `strike(attack, damage)` (napada goblina) napada goblina koristeći tvoj rezultat napada i ukupnu štetu.

**Važno:** Svaki put kada pozoveš `roll()`, Jiki baca kockicu i dobija različit broj. Ne očekuj da ćeš bacanjem iste kockice dva puta dobiti isti broj svaki put.
