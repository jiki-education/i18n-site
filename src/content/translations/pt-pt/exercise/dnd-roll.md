---
lang: "pt-pt"
type: "exercise"
slug: "dnd-roll"
title: "Dados de D&D"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-pt/curriculum/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "14855b9"
content_version: "30776e85604f"
published_at: "2026-08-09"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"Desculpa, o Jiki não tem à mão um dado de {{sides}} lados!"},{"key":"announceNumber","english":"You can only announce a number","target":"Só podes anunciar um número"},{"key":"attackNumber","english":"Attack must be a number","target":"O ataque tem de ser um número"},{"key":"damageNumber","english":"Damage must be a number","target":"O dano tem de ser um número"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"lançou um dado e obteve ${return}"},{"key":"announce","english":"announced ${arg1}","target":"anunciou ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"golpeou o goblin com ataque ${arg1} e dano ${arg2}"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"Esperávamos 3 anúncios, mas houve {{got}}. Certifica-te de que anuncias cada lançamento."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"Esperávamos que o primeiro anúncio fosse {{attack}} (o lançamento de ataque), mas foi {{got}}."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"Esperávamos que o segundo anúncio fosse {{damage}} (o lançamento de dano base), mas foi {{got}}."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"Esperávamos que o terceiro anúncio fosse {{bonus}} (o lançamento de bónus), mas foi {{got}}."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"Não golpeaste o goblin. Certifica-te de que chamas <code>strike()</code>."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"Esperávamos que o ataque fosse {{attack}}, mas foi {{got}}. Passa o lançamento de ataque a <code>strike()</code>."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"Esperávamos que o dano total fosse {{totalDamage}} ({{damage}} + {{bonus}}), mas foi {{got}}. Soma o dano base e o bónus."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"Lança os dados e golpeia o goblin"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"Lança três dados (d20 para o ataque, d12 para o dano base, d10 para o bónus), anuncia cada lançamento e depois golpeia o goblin com o teu lançamento de ataque e o dano total (base + bónus)."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"Lançar e golpear"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"Lança o d20 para o ataque, o d12 para o dano base e o d10 para o bónus. Golpeia o goblin com o teu ataque e o dano total."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"Como escolho o tipo de dado a usar?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"Para um dado de 20 lados, usa 20 como valor de entrada de roll, por exemplo `roll(20)`. Para um dado de 12 lados, chama `roll(12)`."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"Lança um dado com o número de lados indicado e **devolve** o resultado."},{"key":"roll.category","english":"Dice","target":"Dados"},{"key":"announce.description","english":"Announces a dice roll value.","target":"Anuncia o valor de um lançamento de dados."},{"key":"announce.category","english":"Action","target":"Ação"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"Golpeia o goblin com o lançamento de ataque e o dano total indicados."},{"key":"strike.category","english":"Action","target":"Ação"}]}]}]
---

Estás a criar um bot que consegue jogar Dungeons and Dragons (DnD). Se não conheces DnD, a premissa básica é que encontras imensos cenários e lanças dados para descobrir o que acontece. Há muitos dados diferentes, com diferentes números de lados (não só o dado de seis lados a que talvez estejas habituado!)

Um dos cenários que tens de resolver é o encontro com um goblin. Para atacares o goblin, precisas de:

- Gerar uma **pontuação de ataque** lançando um dado de 20 lados.
- Gerar uma **pontuação de dano base** lançando um dado de 12 lados.
- Gerar uma **pontuação de dano bónus** lançando um dado de 10 lados.
- Somar o dano base e o dano bónus para obteres o teu **dano total**.
- Golpear o goblin com o teu lançamento de ataque e o dano total.

Sempre que lanças um dado, tens de anunciar o número que saiu às outras pessoas com quem estás a jogar. Se tentares golpear sem anunciar os números, podem pensar que estás a fazer batota!

Tens três funções que podes usar:

- `roll(sides)` (lançar; _sides_ são os lados) lança um dado com o número de lados indicado. Esta função devolve (_returns_ em inglês) o resultado.
- `announce(value)` (anunciar; _value_ é o valor) anuncia o lançamento de um dado.
- `strike(attack, damage)` (golpear; _attack_ é o ataque e _damage_ o dano) golpeia o goblin com o teu lançamento de ataque e o dano total.

**Importante:** Sempre que chamas `roll()`, o Jiki lança um dado e obtém um número diferente. Não esperes que lançar o mesmo dado duas vezes dê o mesmo número de cada vez.
