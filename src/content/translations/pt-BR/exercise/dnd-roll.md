---
lang: "pt-BR"
type: "exercise"
slug: "dnd-roll"
title: "Dados de D&D"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "bd48403"
content_version: "3f7443d27ae2"
published_at: "2026-08-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"Desculpe, o Jiki não tem à mão um dado de {{sides}} lados!"},{"key":"announceNumber","english":"You can only announce a number","target":"Você só pode anunciar um número"},{"key":"attackNumber","english":"Attack must be a number","target":"O ataque tem que ser um número"},{"key":"damageNumber","english":"Damage must be a number","target":"O dano tem que ser um número"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"lançou um dado e obteve ${return}"},{"key":"announce","english":"announced ${arg1}","target":"anunciou ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"golpeou o goblin com ataque ${arg1} e dano ${arg2}"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"Esperávamos 3 anúncios, mas houve {{got}}. Certifique-se de que você anuncia cada lançamento."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"Esperávamos que o primeiro anúncio fosse {{attack}} (o lançamento de ataque), mas foi {{got}}."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"Esperávamos que o segundo anúncio fosse {{damage}} (o lançamento de dano base), mas foi {{got}}."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"Esperávamos que o terceiro anúncio fosse {{bonus}} (o lançamento de bônus), mas foi {{got}}."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"Você não golpeou o goblin. Certifique-se de que está chamando <code>strike()</code>."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"Esperávamos que o ataque fosse {{attack}}, mas foi {{got}}. Passe o lançamento de ataque para <code>strike()</code>."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"Esperávamos que o dano total fosse {{totalDamage}} ({{damage}} + {{bonus}}), mas foi {{got}}. Some o dano base e o bônus."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"Lance os dados e golpeie o goblin"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"Lance três dados (d20 para o ataque, d12 para o dano base, d10 para o bônus), anuncie cada lançamento e depois golpeie o goblin com o seu lançamento de ataque e o dano total (base + bônus)."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"Lance e golpeie"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"Lance o d20 para o ataque, o d12 para o dano base e o d10 para o bônus. Golpeie o goblin com o seu ataque e o dano total."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"Como eu escolho o tipo de dado a usar?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"Para um dado de 20 lados, use 20 como valor de entrada de roll, por exemplo `roll(20)`. Para um dado de 12 lados, chame `roll(12)`."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"Lança um dado com o número de lados indicado e **retorna** o resultado."},{"key":"roll.category","english":"Dice","target":"Dados"},{"key":"announce.description","english":"Announces a dice roll value.","target":"Anuncia o valor de um lançamento de dados."},{"key":"announce.category","english":"Action","target":"Ação"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"Golpeia o goblin com o lançamento de ataque e o dano total indicados."},{"key":"strike.category","english":"Action","target":"Ação"}]}]}]
---

Você está criando um bot que consegue jogar Dungeons and Dragons (DnD). Se você não conhece DnD, a premissa básica é que você encontra um monte de cenários e lança dados para descobrir o que acontece. Há muitos dados diferentes, com diferentes números de lados (não só o dado de seis lados com o qual você talvez esteja acostumado!)

Um dos cenários que você precisa resolver é o encontro com um goblin. Para atacar o goblin, você precisa:

- Gerar uma **pontuação de ataque** lançando um dado de 20 lados.
- Gerar uma **pontuação de dano base** lançando um dado de 12 lados.
- Gerar uma **pontuação de dano bônus** lançando um dado de 10 lados.
- Somar o dano base e o dano bônus para obter o seu **dano total**.
- Golpear o goblin com o seu lançamento de ataque e o dano total.

Sempre que você lança um dado, você precisa anunciar o número que saiu às outras pessoas com quem você está jogando. Se você tentar golpear sem anunciar os números, elas podem achar que você está trapaceando!

Você tem três funções que pode usar:

- `roll(sides)` (lançar; _sides_ são os lados) lança um dado com o número de lados indicado. Esta função retorna (_returns_ em inglês) o resultado.
- `announce(value)` (anunciar; _value_ é o valor) anuncia o lançamento de um dado.
- `strike(attack, damage)` (golpear; _attack_ é o ataque e _damage_ o dano) golpeia o goblin com o seu lançamento de ataque e o dano total.

**Importante:** Sempre que você chama `roll()`, o Jiki lança um dado e obtém um número diferente. Não espere que lançar o mesmo dado duas vezes dê o mesmo número a cada vez.
