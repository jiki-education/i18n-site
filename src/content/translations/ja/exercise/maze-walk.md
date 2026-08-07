---
lang: "ja"
type: "exercise"
slug: "maze-walk"
title: "歩き方を学ぶ"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-walk"
en_md5: "a15372817fd885ccc45a2fe27624bbf6"
governance_sha: "1011050"
content_version: "50a9587f2fbc"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"notReachedEnd","english":"You didn't reach the end of the maze.","target":"迷路の終わりに到達しませんでした。"},{"key":"walkNotDefined","english":"You should define a <code>walk</code> function that takes a number of steps and moves forward that many times.","target":"歩数を受け取り、その回数だけ前に進む<code>walk</code>関数を定義してください。"}]},{"name":"tasks","rows":[{"key":"writeWalk.name","english":"Write a walk function","target":"walk関数を書く"},{"key":"writeWalk.description","english":"Define a function called walk that takes a number of steps as its input and moves forward that many times.","target":"歩数を受け取り、その回数だけ前に進むwalkという関数を定義してください。"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Navigate the maze","target":"迷路を進む"},{"key":"maze1.description","english":"Walk 3, turn left, walk 2, turn right, walk 4 to reach the target.","target":"3歩進み、左に曲がり、2歩進み、右に曲がり、4歩進んで目標に到達する。"}]},{"name":"hints","rows":[{"key":"howToMoveForward.question","english":"How do I move forward?","target":"前に進むにはどうすればいいですか？"},{"key":"howToMoveForward.answer","english":"Use the `move()` function.","target":"`move()`関数を使います。"},{"key":"howToMoveSpecificTimes.question","english":"How do I move forward a specific number of times?","target":"指定した回数だけ前に進むにはどうすればいいですか？"},{"key":"howToMoveSpecificTimes.answer","english":"You have solved other exercises where you had to do something a specific number of times (think back to making the golf ball roll a specific distance). Use the same ideas here.","target":"これまでの演習で、指定した回数だけ動作を繰り返す方法を学びました（ゴルフボールを特定の距離だけ転がした演習を思い出してください）。ここでも同じ考え方を使ってください。"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the character **one step forward** in the current direction. The character will only move if the target position is not blocked by a wall.","target":"現在の方向に**1歩前進**します。キャラクターは、目的の位置が壁で塞がれていない場合にのみ移動します。"},{"key":"move.category","english":"Movement","target":"移動"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"キャラクターを**左に90度回転**（反時計回り）させます。これにより進行方向が変わります。"},{"key":"turnLeft.category","english":"Movement","target":"移動"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"キャラクターを**右に90度回転**（時計回り）させます。これにより進行方向が変わります。"},{"key":"turnRight.category","english":"Movement","target":"移動"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"あらら！迷路の端から落ちそうになりました！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"いたっ！壁にぶつかってしまいました！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"あちっ！火の中に入ってしまいました！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"うわっ！うんちを踏んでしまいました！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"キャラクターを 1 マス前に進めます"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"キャラクターを左に 90 度回転させます"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"キャラクターを右に 90 度回転させます"}]}]}]
---

また迷路に戻ってきました。ここで、自動で解くことから少し離れてみましょう。前に手動で迷路を解いたとき、前に3歩進むには、`move()`（移動する）と3回書く必要がありました。

この演習では、新しい関数 `walk(numSteps)`（指定した歩数だけ前に進む）を作成します。この関数は、歩数を入力として受け取り、その回数だけ前に進みます。

つまり、`walk(5)`を使うと、`move()`が5回実行されることになります。

関数の下には、迷路を解くサンプルコードが用意されています。関数を書き終えたら、その下のコードが、`turnLeft()`（左に曲がる）や `turnRight()`（右に曲がる）と組み合わせて、迷路を進みます。

がんばってください！
