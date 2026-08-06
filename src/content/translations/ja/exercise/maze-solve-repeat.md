---
lang: "ja"
type: "exercise"
slug: "maze-solve-repeat"
title: "ループ迷路"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-repeat"
en_md5: "8e2c5079e7cf134afee6f3c110ebb33b"
governance_sha: "c80036b"
content_version: "8020e1e263fa"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"notReachedEnd","english":"You didn't reach the end of the maze.","target":"迷路のゴールに到達しませんでした。"},{"key":"tooManyLines","english":"Your solution has too many lines of code. Look for groups of consecutive move() calls and replace each group with a repeat loop.","target":"解答のコードの行数が多すぎます。連続する`move()`の呼び出しのグループを探して、それぞれを`repeat`ループで置き換えてください。"},{"key":"oneLineOver","english":"You're just one line too long! A repeat loop isn't always shorter: repeating something only two or three times can take more lines than writing the calls out, so look for a repeat that isn't actually saving you anything.","target":"あと1行だけ長すぎます！`repeat`ループがいつも短くなるとは限りません。2、3回の繰り返しでは、呼び出しをそのまま書くより行数が増えることもあります。だから、実際には行数を節約できていない`repeat`ループを探してください。"}]},{"name":"tasks","rows":[{"key":"solveMazeWithRepeat.name","english":"Refactor the maze solution using repeat loops","target":"`repeat`ループで迷路の解答をリファクタリングする"},{"key":"solveMazeWithRepeat.description","english":"Replace consecutive `move()` calls with repeat loops to make the code shorter.","target":"コードを短くするために、連続する`move()`の呼び出しを`repeat`ループで置き換えます。"}]},{"name":"scenarios","rows":[{"key":"mazeRepeat1.name","english":"Refactor the maze solution using repeat loops","target":"`repeat`ループで迷路の解答をリファクタリングする"},{"key":"mazeRepeat1.description","english":"Use repeat loops to avoid consecutive `move()` calls.","target":"連続する`move()`の呼び出しを避けるために`repeat`ループを使います。"}]},{"name":"hints","rows":[{"key":"noIdea.question","english":"I have no idea what to do","target":"何をすればいいのか見当もつきません。"},{"key":"noIdea.answer","english":"Look for groups of consecutive `move()` calls. For example, instead of:\n\n```javascript\nmove()\nmove()\nmove()\n```\n\nYou can write:\n\n```javascript\nrepeat(3) {\n  move()\n}\n```\n\nFind the groups and replace them!","target":"連続する`move()`の呼び出しのグループを探してください。たとえば、次のように書く代わりに：\n\n```javascript\nmove()\nmove()\nmove()\n```\n\n次のように書くことができます：\n\n```javascript\nrepeat(3) {\n  move()\n}\n```\n\nグループを見つけて置き換えましょう！"},{"key":"tooManyLines.question","english":"Using repeats but got too many lines?","target":"`repeat`を使っているのに、まだ行数が多いですか？"},{"key":"tooManyLines.answer","english":"Is it always better to use a repeat? In some cases, it might be shorter to just have two moves next to each other.","target":"いつも`repeat`を使う方が良いとは限りません。場合によっては、`move()`を2つ並べたままの方が短くなります。"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the character **one step forward** in the current direction. The character will only move if the target position is not blocked by a wall.","target":"現在の向きに**1歩前進**します。移動先が壁で塞がれていない場合にのみ移動します。"},{"key":"move.category","english":"Movement","target":"移動"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"キャラクターを**左に90度回転**（反時計回り）します。これにより、キャラクターが向いている方向が変わります。"},{"key":"turnLeft.category","english":"Movement","target":"移動"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"キャラクターを**右に90度回転**（時計回り）します。これにより、キャラクターが向いている方向が変わります。"},{"key":"turnRight.category","english":"Movement","target":"移動"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"あらら！迷路の端から落ちそうになりました！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"いたっ！壁にぶつかってしまいました！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"あちっ！火の中に入ってしまいました！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"うわっ！うんちを踏んでしまいました！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"キャラクターを 1 マス前に進めます"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"キャラクターを左に 90 度回転させます"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"キャラクターを右に 90 度回転させます"}]}]}]
---

迷路を解くためのコードはすでに用意されていますが、とても長く、同じような処理が何度も繰り返されています。課題は、そのコードをできるだけ**少ない行数**に書き換えることです。

その秘密は、`repeat`ループ（英: _loop_）を使うことです。たとえば、`repeat`ループの構文は次のとおりです。

```javascript
repeat(3) {
  // ここに繰り返したい内容を書きます。
}
```

ここでの目標は、コードをできるだけ短く、つまり**コード22行**にすることです。つまり、`repeat`ループを使うべき場面と使わないほうがいい場面を見極める必要があります。空白行やコメントだけが書かれた行は目標の行数にカウントされないので、読みやすくするために適宜空白行を入れても構いません。

頑張ってください！
