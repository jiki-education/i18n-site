---
lang: "zh-CN"
type: "exercise"
slug: "dnd-roll"
title: "龙与地下城掷骰"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "c80036b"
content_version: "3a550a634f91"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"抱歉，Jiki 手边没有 {{sides}} 面的骰子！"},{"key":"announceNumber","english":"You can only announce a number","target":"你只能宣布一个数字"},{"key":"attackNumber","english":"Attack must be a number","target":"攻击必须是一个数字"},{"key":"damageNumber","english":"Damage must be a number","target":"伤害必须是一个数字"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"投了一次骰子，得到 ${return}"},{"key":"announce","english":"announced ${arg1}","target":"宣布了 ${arg1}"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"用攻击 ${arg1} 和伤害 ${arg2} 打击了哥布林"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"预期有 3 次宣布，但得到了 {{got}} 次。确保你宣布了每一次投掷。"},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"预期第一次宣布为 {{attack}}（攻击点数），但得到了 {{got}}。"},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"预期第二次宣布为 {{damage}}（基础伤害点数），但得到了 {{got}}。"},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"预期第三次宣布为 {{bonus}}（额外伤害点数），但得到了 {{got}}。"},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"你没有打击哥布林。确保你调用了 <code>strike()</code>。"},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"预期攻击为 {{attack}}，但得到了 {{got}}。将攻击点数传递给 <code>strike()</code>。"},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"预期总伤害为 {{totalDamage}}（{{damage}} + {{bonus}}），但得到了 {{got}}。把基础伤害和额外伤害加在一起。"}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"投骰子并打击哥布林"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"投掷三枚骰子（d20 用于攻击，d12 用于基础伤害，d10 用于额外伤害），宣布每次投掷的结果，然后用你的攻击点数和总伤害（基础伤害 + 额外伤害）打击哥布林。"}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"投掷并打击"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"投掷 d20 决定攻击，d12 决定基础伤害，d10 决定额外伤害。用你的攻击点数和总伤害打击哥布林。"}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"如何选择使用哪种骰子？"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"对于 20 面的骰子，将 20 作为输入传递给 `roll`，例如 `roll(20)`。对于 12 面的骰子，调用 `roll(12)`。"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"投掷给定面数的骰子并**返回**结果。"},{"key":"roll.category","english":"Dice","target":"骰子"},{"key":"announce.description","english":"Announces a dice roll value.","target":"宣布一次骰子投掷的值。"},{"key":"announce.category","english":"Action","target":"行动"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"用给定的攻击点数和总伤害打击哥布林。"},{"key":"strike.category","english":"Action","target":"行动"}]}]}]
---

你正在制作一个能玩龙与地下城（DnD）的机器人。如果你不熟悉 DnD，基本设定是你会在各种场景中掷骰子来决定接下来会发生什么。骰子有很多种，面的数量各不相同（可不只是你熟悉的六面骰！）

你需要处理的一个场景是遭遇一只哥布林。要攻击哥布林，你需要：

- 投一枚 20 面骰子，生成**攻击点数**。
- 投一枚 12 面骰子，生成**基础伤害点数**。
- 投一枚 10 面骰子，生成**额外伤害点数**。
- 将基础伤害与额外伤害相加，得到你的**总伤害**。
- 用你的攻击骰值和总伤害打击哥布林。

每次投完骰子，你都需要向一起游戏的其他玩家宣布你掷出的点数。如果不出声就攻击，别人可能会觉得你在作弊！

你有三个可以使用的函数：

- `roll(sides)`（投掷指定面数的骰子）会投一枚给定面数的骰子。这个函数会返回（英语：_returns_）结果。
- `announce(value)`（宣布骰子点数）用来宣布一次掷骰的结果。
- `strike(attack, damage)`（发动攻击）使用你的攻击骰值和总伤害打击哥布林。

**重要提示：** 每次调用 `roll()`，Jiki 都会投一次骰子，并得到不同的数字。别想着投同一枚骰子两次会得到同样的点数。
