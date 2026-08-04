---
lang: "uk"
type: "exercise"
slug: "dnd-roll"
title: "Кидок у D&D"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "c5ca79a"
content_version: "5e4822aaf7f1"
published_at: "2026-08-04"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"На жаль, у Jiki немає під рукою кубика з {{sides}} гранями!"},{"key":"announceNumber","english":"You can only announce a number","target":"Оголосити можна лише число"},{"key":"attackNumber","english":"Attack must be a number","target":"Атака має бути числом"},{"key":"damageNumber","english":"Damage must be a number","target":"Шкода має бути числом"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"кинув кубик і отримав ${return}"},{"key":"announce","english":"announced ${arg1}","target":"оголосив ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"вдарив гобліна з атакою ${arg1} та шкодою ${arg2}"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"Очікувалося 3 оголошення, а отримано {{got}}. Переконайтеся, що кожен кидок оголошено."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"Очікувалося, що першим оголошенням буде {{attack}} (кидок атаки), а отримано {{got}}."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"Очікувалося, що другим оголошенням буде {{damage}} (кидок базової шкоди), а отримано {{got}}."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"Очікувалося, що третім оголошенням буде {{bonus}} (бонусний кидок), а отримано {{got}}."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"Гобліна не вдарено. Переконайтеся, що <code>strike()</code> викликано."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"Очікувалася атака {{attack}}, а отримано {{got}}. Передайте кидок атаки у <code>strike()</code>."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"Очікувалася загальна шкода {{totalDamage}} ({{damage}} + {{bonus}}), а отримано {{got}}. Додайте базову шкоду та бонус разом."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"Киньте кубики та вдарте гобліна"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"Киньте три кубики (d20 для атаки, d12 для базової шкоди, d10 для бонусу), оголосіть кожен кидок, а потім вдарте гобліна, використавши кидок атаки та загальну шкоду (база + бонус)."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"Кидок і удар"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"Киньте d20 для атаки, d12 для базової шкоди, d10 для бонусу. Вдарте гобліна, використавши атаку та загальну шкоду."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"Як вибрати, яким кубиком кидати?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"Для 20-гранного кубика передайте 20 як вхідні дані для roll, наприклад `roll(20)`. Для 12-гранного кубика викличте `roll(12)`."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"Кидає кубик із заданою кількістю граней і **повертає** результат."},{"key":"roll.category","english":"Dice","target":"Кубики"},{"key":"announce.description","english":"Announces a dice roll value.","target":"Оголошує значення кидка кубика."},{"key":"announce.category","english":"Action","target":"Дія"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"Вдаряє гобліна з указаним кидком атаки та загальною шкодою."},{"key":"strike.category","english":"Action","target":"Дія"}]}]}]
---

Ми створюємо бота, який вміє грати в Dungeons and Dragons (DnD). Для тих, хто ще не знайомий із DnD: суть гри в тому, що гравці потрапляють у безліч різних ситуацій і кидають кубики, щоб визначити, що станеться далі. Кубики бувають найрізноманітніші, з різною кількістю граней (не лише звичний шестигранний!)

Однією з ситуацій, які наш бот має вміти обробляти, є зустріч із гобліном. Щоб атакувати гобліна, зробіть ось що:

- Згенеруйте **показник атаки**, кинувши 20-гранний кубик.
- Згенеруйте **показник базової шкоди**, кинувши 12-гранний кубик.
- Згенеруйте **показник бонусної шкоди**, кинувши 10-гранний кубик.
- Додайте базову та бонусну шкоду разом, щоб отримати **загальну шкоду**.
- Вдарте гобліна, використавши кидок атаки та загальну шкоду.

Після кожного кидка кубика потрібно оголошувати випале число іншим гравцям. Якщо спробувати вдарити, не оголосивши чисел, вони можуть подумати, що ми шахруємо!

У нас є три функції:

- `roll(sides)` (кинути; `sides` означає кількість граней) кидає кубик із заданою кількістю граней. Ця функція повертає (англ. _returns_) результат.
- `announce(value)` (оголосити; `value` означає значення) оголошує результат кидка кубика.
- `strike(attack, damage)` (вдарити; `attack` означає атаку, `damage` означає шкоду) вдаряє гобліна з кидком атаки та загальною шкодою.

**Важливо:** щоразу, коли ми викликаємо `roll()`, Jiki кидає кубик і отримує нове число. Не варто очікувати, що два кидки одного кубика дадуть однакове число.
