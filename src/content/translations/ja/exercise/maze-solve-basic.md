---
lang: "ja"
type: "exercise"
slug: "maze-solve-basic"
title: "迷路を解こう"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "33fd2de"
content_version: "69c7f248c6ae"
published_at: "2026-07-31"
forum_topic_id: 311
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"迷路のゴールまでたどり着けませんでした。"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"キャラクターを迷路のゴールまで導く"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"迷路を進んで、緑のゴールにたどり着く"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"キャラクターを迷路のゴールまで導く"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"キャラクターを迷路の中で動かして、緑のゴールのマスまでたどり着かせましょう。"}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"何を、どこへ動かすのですか？"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"左上からスタートするキャラクターを、赤い縞模様のマスを避けながら、右下にある緑の丸まで動かします。"},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"左に曲がらせたのに、キャラクターが右を向きます！"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"キャラクターは、今向いている方向を基準にして曲がります。たとえば右を向いているときに左へ曲がると、キャラクターは上を向くことになります。"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"おっと、迷路の端から落ちそうになりました！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"いたっ！壁にぶつかってしまいました！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"あつっ！火の中に入ってしまいました！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"うわっ！うんちを踏んでしまいました！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"キャラクターを 1 マス前に進めます"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"キャラクターの向きを 90 度左に変えます"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"キャラクターの向きを 90 度右に変えます"}]}]}]
---

はじめての演習へようこそ！

この演習の目的は、学習環境の使い方に慣れることです。左に見えている迷路を、キャラクターに指示を出して解いていきます。キャラクターがたどるべき指示をすべて書き出したら、**コードを実行** をクリックしてみましょう。書いたとおりに動いてくれます。

使える指示は、次の 3 つです。

- `move()`（進む）は、キャラクターを 1 歩前に進めます
- `turnLeft()`（左を向く）は、キャラクターを左に向かせます（今向いている方向から見て左です）
- `turnRight()`（右を向く）は、キャラクターを右に向かせます（今向いている方向から見て右です）

左側には、最初の 3 つの指示がすでに書いてあります。まずは **「コードを実行」** ボタンをクリックして、どう動くか見てみましょう。そのあとで **指示を追加して**、キャラクターを迷路のゴールまで進めてください。指示は 1 行に 1 つずつ書き、**コードを実行** を押すと、まとめて実行されます。

コードをこまめに実行する習慣をつけておくと、あとあと役に立ちます！

迷路を解けたら、ダッシュボードに戻って次のレッスンを始めましょう。
