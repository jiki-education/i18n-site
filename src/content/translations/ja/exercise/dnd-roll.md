---
lang: "ja"
type: "exercise"
slug: "dnd-roll"
title: "D&D ロール"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/dnd-roll"
en_md5: "9f9dc476ef35afe5b76effc918ca5771"
governance_sha: "c80036b"
content_version: "6772b38da6d5"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"unknownDice","english":"Sorry - Jiki doesn't have a {{sides}} sided dice handy!","target":"すみません、Jikiは{{sides}}面ダイスを持っていません！"},{"key":"announceNumber","english":"You can only announce a number","target":"宣言できるのは数値だけです。"},{"key":"attackNumber","english":"Attack must be a number","target":"攻撃値は数値でなければなりません。"},{"key":"damageNumber","english":"Damage must be a number","target":"ダメージは数値でなければなりません。"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled a die and got ${return}","target":"サイコロを振り、${return}が出ました。"},{"key":"announce","english":"announced ${arg1}","target":"${arg1}を宣言しました。"},{"key":"strike","english":"struck the goblin with attack ${arg1} and damage ${arg2}","target":"攻撃ロール${arg1}、ダメージ${arg2}でゴブリンを攻撃しました。"}]},{"name":"checks","rows":[{"key":"announcementCount","english":"Expected 3 announcements but got {{got}}. Make sure you announce each roll.","target":"3回の宣言が必要ですが、{{got}}回でした。各出目を必ず宣言してください。"},{"key":"firstAnnouncement","english":"Expected the first announcement to be {{attack}} (the attack roll) but got {{got}}.","target":"最初の宣言は{{attack}}（攻撃ロール）のはずですが、{{got}}でした。"},{"key":"secondAnnouncement","english":"Expected the second announcement to be {{damage}} (the base damage roll) but got {{got}}.","target":"2番目の宣言は{{damage}}（基本ダメージ）のはずですが、{{got}}でした。"},{"key":"thirdAnnouncement","english":"Expected the third announcement to be {{bonus}} (the bonus roll) but got {{got}}.","target":"3番目の宣言は{{bonus}}（追加ダメージ）のはずですが、{{got}}でした。"},{"key":"notStruck","english":"You didn't strike the goblin. Make sure you call <code>strike()</code>.","target":"ゴブリンを攻撃していません。<code>strike()</code>を呼び出しているか確認してください。"},{"key":"wrongAttack","english":"Expected the attack to be {{attack}} but got {{got}}. Pass the attack roll to <code>strike()</code>.","target":"攻撃ロールは{{attack}}のはずですが、{{got}}でした。<code>strike()</code>に攻撃ロールを渡してください。"},{"key":"wrongDamage","english":"Expected total damage to be {{totalDamage}} ({{damage}} + {{bonus}}) but got {{got}}. Add the base damage and bonus together.","target":"合計ダメージは{{totalDamage}}（{{damage}} + {{bonus}}）のはずですが、{{got}}でした。基本ダメージと追加ダメージを合計してください。"}]},{"name":"tasks","rows":[{"key":"rollAndStrike.name","english":"Roll the dice and strike the goblin","target":"サイコロを振ってゴブリンを攻撃する"},{"key":"rollAndStrike.description","english":"Roll three dice (d20 for attack, d12 for base damage, d10 for bonus), announce each roll, then strike the goblin with your attack roll and total damage (base + bonus).","target":"3つのサイコロを振り（攻撃用にd20、基本ダメージ用にd12、追加ダメージ用にd10）、それぞれの出目を宣言してから、攻撃ロールと合計ダメージ（基本＋追加）でゴブリンを攻撃してください。"}]},{"name":"scenarios","rows":[{"key":"randomRolls.name","english":"Roll and strike","target":"ダイスを振って攻撃"},{"key":"randomRolls.description","english":"Roll d20 for attack, d12 for base damage, d10 for bonus. Strike the goblin with your attack and total damage.","target":"攻撃にd20、基本ダメージにd12、追加ダメージにd10を振り、攻撃ロールと合計ダメージでゴブリンを攻撃します。"}]},{"name":"hints","rows":[{"key":"chooseDie.question","english":"How do I choose what type of die to use?","target":"どのサイコロを使うか、どうやって決めればいいですか？"},{"key":"chooseDie.answer","english":"For a 20 sided dice, use 20 as the input to roll - e.g. `roll(20)`. For a 12 sided dice, call `roll(12)`.","target":"20面ダイスを使うには、`roll`の入力に20を指定します。例えば`roll(20)`です。12面ダイスなら`roll(12)`を呼び出します。"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls a die with the given number of sides and **returns** the result.","target":"指定された面数のサイコロを振り、結果を**返します**。"},{"key":"roll.category","english":"Dice","target":"サイコロ"},{"key":"announce.description","english":"Announces a dice roll value.","target":"サイコロの出目を宣言します。"},{"key":"announce.category","english":"Action","target":"アクション"},{"key":"strike.description","english":"Strikes the goblin with the given attack roll and total damage.","target":"指定された攻撃ロールと合計ダメージでゴブリンを攻撃します。"},{"key":"strike.category","english":"Action","target":"アクション"}]}]}]
---

あなたはダンジョンズ＆ドラゴンズ（DnD）をプレイできるボットを作っています。DnDに馴染みがない方のために説明すると、基本的にはさまざまなシナリオに遭遇し、サイコロを振って何が起こるかを決めるゲームです。サイコロには面の数が違うものがたくさんあります（普段使う6面ダイスだけではありません！）。

今回扱うシナリオのひとつは、ゴブリンとの遭遇です。ゴブリンを攻撃するには、次の手順を踏みます。

- 20面ダイスを振って**攻撃値**を出す
- 12面ダイスを振って**基本ダメージ値**を出す
- 10面ダイスを振って**追加ダメージ値**を出す
- 基本ダメージ値と追加ダメージ値を足し合わせて、**合計ダメージ**を求める
- 攻撃ロールと合計ダメージを使ってゴブリンを攻撃する

サイコロを振るたびに、出た目を一緒にプレイしている仲間に宣言する必要があります。出目を宣言せずに攻撃しようとすると、ずるをしていると思われてしまいます！

使える関数は3つあります。

- `roll(sides)`（サイコロを振る）は、指定された面数のサイコロを振ります。この関数は結果を**返します**（英: _return_）。
- `announce(value)`（宣言する）は、サイコロの出目を宣言します。
- `strike(attack, damage)`（攻撃する）は、攻撃ロールと合計ダメージでゴブリンを攻撃します。

**重要:** `roll()`を呼び出すたびに、Jikiはサイコロを振り、異なる目を出します。同じサイコロを2回振っても、毎回同じ目が出るとは考えないでください。
