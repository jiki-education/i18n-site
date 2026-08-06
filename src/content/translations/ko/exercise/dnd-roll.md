---
lang: "ko"
type: "exercise"
slug: "dnd-roll"
title: "D&D 주사위 굴리기"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "c80036b"
content_version: "4dd9bcc26ee7"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"죄송해요, Jiki는 {{sides}}면체 주사위를 가지고 있지 않아요!"},{"key":"announceNumber","english":"You can only announce a number","target":"숫자만 발표할 수 있어요."},{"key":"attackNumber","english":"Attack must be a number","target":"공격 점수는 숫자여야 해요."},{"key":"damageNumber","english":"Damage must be a number","target":"피해량은 숫자여야 해요."}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"주사위를 굴려 ${return}이/가 나왔어요"},{"key":"announce","english":"announced ${arg1}","target":"${arg1}을/를 발표했어요"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"공격 점수 ${arg1}와 피해량 ${arg2}로 고블린을 공격했어요"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"3번의 발표를 예상했지만 {{got}}번 발표했어요. 주사위를 굴릴 때마다 발표하는지 확인하세요."},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"첫 번째 발표가 {{attack}}(공격 점수)여야 하는데 {{got}}이 나왔어요."},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"두 번째 발표가 {{damage}}(기본 피해 점수)여야 하는데 {{got}}이 나왔어요."},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"세 번째 발표가 {{bonus}}(보너스 피해 점수)여야 하는데 {{got}}이 나왔어요."},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"고블린을 공격하지 않았어요. <code>strike()</code>를 호출했는지 확인하세요."},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"공격 점수가 {{attack}}이어야 하는데 {{got}}이 나왔어요. 공격 점수를 <code>strike()</code>에 전달하세요."},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"총 피해량이 {{totalDamage}} ({{damage}} + {{bonus}})이어야 하는데 {{got}}이 나왔어요. 기본 피해 점수와 보너스 피해 점수를 더하세요."}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"주사위를 굴리고 고블린을 공격하세요"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"20면체 주사위(공격), 12면체 주사위(기본 피해), 10면체 주사위(보너스)를 굴려 각 결과를 발표한 뒤, 공격 점수와 총 피해량(기본 피해 + 보너스)으로 고블린을 공격하세요."}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"굴리고 공격하기"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"20면체 주사위로 공격 점수를, 12면체 주사위로 기본 피해 점수를, 10면체 주사위로 보너스 피해 점수를 굴리세요. 공격 점수와 총 피해량으로 고블린을 공격하세요."}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"어떤 주사위를 사용할지 어떻게 알 수 있나요?"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"20면체 주사위는 `roll(20)`, 12면체 주사위는 `roll(12)`를 호출하세요."}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"주어진 면 수의 주사위를 굴려 결과를 **반환**해요."},{"key":"roll.category","english":"Dice","target":"주사위"},{"key":"announce.description","english":"Announces a dice roll value.","target":"주사위 결과를 발표해요."},{"key":"announce.category","english":"Action","target":"행동"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"주어진 공격 점수와 총 피해량으로 고블린을 공격해요."},{"key":"strike.category","english":"Action","target":"행동"}]}]}]
---

지금부터 던전 앤 드래곤즈(D&D)를 플레이할 수 있는 봇을 만들어 볼게요. D&D가 처음이시라면, 기본적으로는 수많은 시나리오를 만나고 주사위를 굴려 결과를 결정하는 게임이에요. 익숙한 6면체 주사위뿐만 아니라, 면 수가 다른 다양한 주사위들이 있어요!

처리해야 할 시나리오 중 하나는 고블린을 만나는 거예요. 고블린을 공격하려면 다음 절차를 따라야 해요:

- 20면체 주사위를 굴려 **공격 점수**를 만들어요.
- 12면체 주사위를 굴려 **기본 피해 점수**를 만들어요.
- 10면체 주사위를 굴려 **보너스 피해 점수**를 만들어요.
- 기본 피해 점수와 보너스 피해 점수를 더해서 **총 피해량**을 구해요.
- 공격 점수와 총 피해량으로 고블린을 공격해요.

주사위를 굴릴 때마다, 나온 숫자를 함께 플레이하는 사람들에게 꼭 발표해야 해요. 발표하지 않고 공격하면, 속임수라고 생각할 수 있거든요!

사용할 수 있는 함수는 세 가지예요:

- `roll(sides)`(지정한 면 수의 주사위를 굴리는 함수): 주어진 면 수의 주사위를 굴려요. 이 함수는 결과를 반환해요(영어: _returns_).
- `announce(value)`(주사위 값을 발표하는 함수): 주사위 결과를 발표해요.
- `strike(attack, damage)`(공격 점수와 총 피해량으로 고블린을 공격하는 함수): 공격 점수와 총 피해량으로 고블린을 공격해요.

**중요:** `roll()`을 호출할 때마다 Jiki는 주사위를 굴려 다른 숫자를 얻어요. 같은 주사위를 두 번 굴린다고 해서 같은 숫자가 나올 거라고 기대하면 안 돼요.
