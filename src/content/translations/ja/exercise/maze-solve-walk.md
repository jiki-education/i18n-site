---
lang: "ja"
type: "exercise"
slug: "maze-solve-walk"
title: "散歩してみましょう"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-walk"
en_md5: "5f035995ce732e0595cd4d3c95814b84"
governance_sha: "c80036b"
content_version: "0e16f18775ff"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"walkExpectsNumber","english":"walk() expects a number of steps","target":"walk()には歩数（数値）の指定が必要です"}]},{"name":"describers","rows":[{"key":"walk","english":"Walk forward a given number of steps","target":"指定された歩数分、前に進む"}]},{"name":"checks","rows":[{"key":"notReachedEnd","english":"You didn't reach the end of the maze.","target":"迷路のゴールにたどり着けませんでした"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide person to the end of the maze","target":"人を迷路のゴールまで案内する"},{"key":"solveMaze.description","english":"Navigate through the maze using walk(), turnLeft(), and turnRight() to reach the green target cell.","target":"walk()、turnLeft()、turnRight()を使って迷路を進み、緑色の目標マスにたどり着きましょう。"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide person to the end of the maze","target":"人を迷路のゴールまで案内する"},{"key":"maze1.description","english":"Your job is to reach the goal.","target":"ゴールにたどり着くことが目的です。"}]},{"name":"hints","rows":[{"key":"moveNotWorking.question","english":"Why doesn't `move()` work any more?","target":"なぜ`move()`が使えなくなったのですか？"},{"key":"moveNotWorking.answer","english":"Each exercise in Jiki has different functions you can use. In this exercise, you have the `walk(...)` function. Replace the `n` with the number of steps you want to walk. So `walk(1)` does exactly the same as `move()` did last time.","target":"Jikiの演習ごとに使える関数が異なります。この演習では、`walk(...)`関数が使えます。`n`の部分を、進みたい歩数に置き換えてください。つまり、`walk(1)`は前回の`move()`とまったく同じ動きをします。"}]},{"name":"functions","rows":[{"key":"walk.description","english":"Moves the character **forward by the given number of steps** in the current direction. Each step moves one cell. The character will stop and report an error if it hits a wall.","target":"現在の向きで、**指定された歩数分、前方に**進みます。1歩で1マス進みます。壁にぶつかると停止し、エラーを報告します。"},{"key":"walk.category","english":"Movement","target":"移動"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"キャラクターを**左に90度**（反時計回り）回転させます。向いている方向が変わります。"},{"key":"turnLeft.category","english":"Movement","target":"移動"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"キャラクターを**右に90度**（時計回り）回転させます。向いている方向が変わります。"},{"key":"turnRight.category","english":"Movement","target":"移動"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"あらら！迷路の端から落ちそうになりました！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"いたっ！壁にぶつかってしまいました！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"あちっ！火の中に入ってしまいました！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"うわっ！うんちを踏んでしまいました！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"キャラクターを 1 マス前に進めます"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"キャラクターを左に 90 度回転させます"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"キャラクターを右に 90 度回転させます"}]}]}]
---

また迷路に戻ってきました！　前回ここに来たときは、`move()`（1歩ずつ進む関数）を使って1歩ずつ移動しました。その方法でも動きましたが、`move()`を何度も連続して書くのはかなり面倒です！

今回の演習では、`move()`を、新しい`walk()`（指定歩数分進む）という関数（英: _function_）に置き換えました。この関数は、数値を入力として受け取り、その歩数だけ前に進みます。たとえば、`walk(3)`は3歩前に進み、`walk(1)`は1歩だけ前に進みます。

これからの演習では、以下のような「関数」セクションが表示され、どのような関数が利用可能で、どのように動作するかがすぐにわかるようになります。

`walk()`、`turnLeft()`（左に曲がる）、`turnRight()`（右に曲がる）を使って迷路の中を進み、緑色の目標マスまでたどり着きましょう。
