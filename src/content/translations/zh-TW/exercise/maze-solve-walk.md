---
lang: "zh-TW"
type: "exercise"
slug: "maze-solve-walk"
title: "散散步"
status: "published"
source_repo: "i18n"
source_path: "locales/zh-TW/curriculum/exercises/maze-solve-walk"
en_md5: "5f035995ce732e0595cd4d3c95814b84"
governance_sha: "129eea0"
content_version: "a0ace2f7bb93"
published_at: "2026-08-17"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"walkExpectsNumber","english":"walk() expects a number of steps","target":"`walk()` 需要一個數字作為步數"}]},{"name":"describers","rows":[{"key":"walk","english":"Walk forward a given number of steps","target":"往前走指定的步數"}]},{"name":"checks","rows":[{"key":"notReachedEnd","english":"You didn't reach the end of the maze.","target":"你還沒有抵達迷宮的終點喔。"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide person to the end of the maze","target":"引導角色抵達迷宮終點"},{"key":"solveMaze.description","english":"Navigate through the maze using walk(), turnLeft(), and turnRight() to reach the green target cell.","target":"使用 `walk()`、`turnLeft()` 和 `turnRight()` 來通過迷宮，並抵達綠色的目標格子。"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide person to the end of the maze","target":"引導角色抵達迷宮終點"},{"key":"maze1.description","english":"Your job is to reach the goal.","target":"你的任務是抵達終點。"}]},{"name":"hints","rows":[{"key":"moveNotWorking.question","english":"Why doesn't `move()` work any more?","target":"為什麼 `move()` 不能用了呢？"},{"key":"moveNotWorking.answer","english":"Each exercise in Jiki has different functions you can use. In this exercise, you have the `walk(...)` function. Replace the `n` with the number of steps you want to walk. So `walk(1)` does exactly the same as `move()` did last time.","target":"Jiki 的每個練習都有不同的函式可以使用。在這個練習中，你可以使用 `walk(...)` 函式。把 `n` 替換成你想要走的步數。所以 `walk(1)` 的作用就和上次的 `move()` 完全一樣喔。"}]},{"name":"functions","rows":[{"key":"walk.description","english":"Moves the character **forward by the given number of steps** in the current direction. Each step moves one cell. The character will stop and report an error if it hits a wall.","target":"讓角色朝目前的方向**往前走指定的步數**。每一步會移動一格。如果角色撞到牆壁，就會停下來並回報錯誤。"},{"key":"walk.category","english":"Movement","target":"移動"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"讓角色**向左轉 90 度**（逆時針）。這會改變角色面對的方向。"},{"key":"turnLeft.category","english":"Movement","target":"移動"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"讓角色**向右轉 90 度**（順時針）。這會改變角色面對的方向。"},{"key":"turnRight.category","english":"Movement","target":"移動"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"糟糕！你差點從迷宮的邊緣掉下去了！"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"哎唷！你撞到牆壁了！"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"哎唷！你走進火裡了！"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"噁！你踩到便便了！💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"讓角色向前移動 1 格"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"讓角色向左轉 90 度"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"讓角色向右轉 90 度"}]}]}]
---

我們又回到迷宮了！上次你在這裡時，使用了 `move()`（移動）函式來一次移動一步。這樣做雖然可行，但連續寫好幾次 `move()` 實在有點麻煩呢！

在這個練習中，我們把 `move()` 替換成了一個叫做 `walk()`（走路）的新函式（英文：_function_）。這個函式會接收一個數字作為輸入（英文：_input_），並往前走那麼多步。舉例來說，`walk(3)` 會往前走 3 步，而 `walk(1)` 則只會往前走 1 步。

在未來所有的練習中，你都會看到像下面這樣的「函式」區塊，讓你可以輕鬆查看有哪些函式可以使用，以及它們是如何運作的。

使用 `walk()`、`turnLeft()`（左轉）和 `turnRight()`（右轉）來通過迷宮，並抵達綠色的目標格子吧！
