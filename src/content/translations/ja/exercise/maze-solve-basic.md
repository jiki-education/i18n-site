---
lang: "ja"
type: "exercise"
slug: "maze-solve-basic"
title: "迷路を解く"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "c80036b"
content_version: "356d7ff4529e"
published_at: "2026-08-06"
forum_topic_id: 808
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"迷路のゴールにたどり着けませんでした。"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"キャラクターを迷路のゴールまで導く"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"迷路を進み、緑色のゴールに到達する"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"キャラクターを迷路のゴールまで導く"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"ここでの作業は、キャラクターを迷路の中を進め、緑色のゴールのマスに到達させることです。"}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"何をどこに動かしているのですか？"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"左上からスタートするキャラクターを、赤い縞模様のマスを避けて、右下にある緑の円まで動かしているのです。"},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"左に曲がると、キャラクターが右に曲がってしまいます！"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"キャラクターは、向いている方向を基準に曲がります。つまり、右を向いているときに左に曲がると、キャラクターは上を向きます。"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"あらら！迷路の端から落ちそうになりました！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"いたっ！壁にぶつかってしまいました！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"あちっ！火の中に入ってしまいました！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"うわっ！うんちを踏んでしまいました！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"キャラクターを 1 マス前に進めます"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"キャラクターを左に 90 度回転させます"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"キャラクターを右に 90 度回転させます"}]}]}]
---

初めての演習にようこそ！

この演習の目的は、学習環境の使い方に慣れることです。あなたの課題は、左側に表示されている迷路を、Jiki に指示を与えて解くことです。キャラクターが従うべき指示をすべて書き出し、**コードを実行** ボタンをクリックして、その指示に従わせます。

使える指示は次の 3 つです：

- `move()`（一歩前に進む）は、キャラクターを一歩前に進ませます。
- `turnLeft()`（左に曲がる）は、キャラクターを現在の向きから左に曲げます。
- `turnRight()`（右に曲がる）は、キャラクターを現在の向きから右に曲げます。

左側のコードエディタには、すでに最初の 3 つの指示が書かれています。まずは **「コードを実行」** ボタンをクリックして、その動作を確認してみましょう。その後、**さらに指示を追加**して、キャラクターを迷路のゴールまで動かします。各行に 1 つずつ指示を書き、**コードを実行** を押してすべてを実行します。

コードをこまめに実行する習慣をつけるのは良いことです！

迷路が解けたら、ダッシュボードに戻って次のレッスンを始めましょう。
