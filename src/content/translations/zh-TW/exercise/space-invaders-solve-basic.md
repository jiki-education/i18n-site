---
lang: "zh-TW"
type: "exercise"
slug: "space-invaders-solve-basic"
title: "Space Invaders"
status: "published"
source_repo: "i18n"
source_path: "locales/zh-TW/curriculum/exercises/space-invaders-solve-basic"
en_md5: "832d47151ead209ebf0f931a8472ec30"
governance_sha: "129eea0"
content_version: "d772ce4f3080"
published_at: "2026-08-17"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"move","english":"moved the laser cannon to the right","target":"將雷射砲向右移動"}]},{"name":"checks","rows":[{"key":"notShotAllAliens","english":"You didn't shoot down all the aliens.","target":"你沒有擊落所有的外星人。"}]},{"name":"tasks","rows":[{"key":"shootTheAliens.name","english":"Shoot all the aliens","target":"擊落所有的外星人"},{"key":"shootTheAliens.description","english":"Move your laser cannon to the right and shoot each alien as you pass underneath it. Don't miss or move off the edge!","target":"將你的雷射砲向右移動，並在經過每個外星人下方時射擊牠們。不要漏掉任何一個，也不要移動超出邊緣喔！"}]},{"name":"scenarios","rows":[{"key":"shootTheAliens.name","english":"Shoot the Aliens","target":"擊落外星人"},{"key":"shootTheAliens.description","english":"Move right and shoot all the aliens","target":"向右移動並擊落所有的外星人"}]},{"name":"hints","rows":[{"key":"whatDoINeedToDo.question","english":"What do I need to do?","target":"我需要做什麼？"},{"key":"whatDoINeedToDo.answer","english":"Like the maze, you need to move your character (this time a laser, not a person). But you also need to shoot from the laser! Move the laser underneath an alien then shoot. Then move again until you're under the next alien, and shoot again. Continue until you've shot down the last alien!","target":"就像迷宮一樣，你需要移動你的角色（這次是雷射砲，不是人）。但你還需要發射雷射！將雷射砲移動到外星人下方然後射擊。接著再次移動，直到你位於下一個外星人下方，然後再次射擊。繼續這樣做，直到你擊落最後一個外星人為止！"},{"key":"cantWasteAmmo.question","english":"I get told I can't waste ammo.","target":"系統告訴我不能浪費彈藥。"},{"key":"cantWasteAmmo.answer","english":"You should only `shoot()` when you're directly below an alien. Try moving one step further (or maybe you've gone one too far?)","target":"你應該只在正下方有外星人時才呼叫 `shoot()`。試著再往前移動一步（或者你可能走得太遠了？）"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the laser cannon **one position to the right**. If you move off the right edge of the screen, you lose!","target":"將雷射砲**向右移動一個位置**。如果你移動超出了螢幕的右側邊緣，你就會輸掉遊戲！"},{"key":"move.category","english":"Movement","target":"移動"},{"key":"shoot.description","english":"Shoots the laser upwards. **Only shoot when there's an alien above you**, or you lose the game!","target":"向上發射雷射。**只有在上方有外星人時才能射擊**，否則你就會輸掉遊戲！"},{"key":"shoot.category","english":"Action","target":"動作"}]}]},{"heading":"Shared \"space-invaders\" messages","note":"Shared by every exercise in the space-invaders category, not just this one. A change here changes all of them.","namespaces":[{"name":"describers","rows":[{"key":"moveLeft","english":"moved the laser cannon to the left","target":"向左移動了雷射砲"},{"key":"moveRight","english":"moved the laser cannon to the right","target":"向右移動了雷射砲"},{"key":"shoot","english":"shot the laser upwards","target":"向上發射了雷射"},{"key":"isAlienAbove","english":"determined if there was an alien above the laser cannon","target":"判斷了雷射砲上方是否有外星人"},{"key":"getStartingAliensInRow","english":"retrieved the starting positions of row ${arg1} of aliens","target":"取得了第 ${arg1} 列外星人的起始位置"},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":"施放了慶祝煙火"}]},{"name":"errors","rows":[{"key":"laserOverheated","english":"Oh no! Your laser cannon overheated from shooting too fast! You need to move before you can shoot a second time.","target":"糟糕！你的雷射砲因為射擊太快而過熱了！你需要先移動，才能再次射擊喔。"},{"key":"missedShot","english":"Oh no, you missed. Wasting ammo is not allowed!","target":"哎呀，你沒打中。不可以浪費彈藥喔！"},{"key":"moveOffEdge","english":"Oh no, you tried to move off the edge!","target":"糟糕，你試圖移出邊界！"},{"key":"rowNotNumber","english":"Oh no, the row input you provided is not a number.","target":"糟糕，你輸入的列數不是數字喔。"},{"key":"rowOutOfRange","english":"Oh no, you tried to access a row of aliens that doesn't exist. You asked for row {{row}}, but the rows are numbered 0 to {{max}}.","target":"糟糕，你試圖存取不存在的外星人列。你要求的是第 {{row}} 列，但列的編號是從 0 到 {{max}} 喔。"},{"key":"notAllAliensDead","english":"You need to defeat all the aliens before you can celebrate!","target":"你需要打敗所有的外星人，然後才能慶祝喔！"}]}]}]
---

歡迎來到你的第二個練習，Space Invaders！這是一款 1970 年代的經典街機遊戲，也是我最早玩過的遊戲之一。在接下來的幾週裡，你將會打造一台全自動的雷射砲來擊落外星人。不過現在，你的任務只是手動擊落所有的外星人！

你有兩個函式（英文：_functions_）：

- `move()`（移動）會將你的雷射砲向右移動一個位置
- `shoot()`（射擊）會向上發射雷射

我們已經為你放好了第一個 `move()`。**看看外星人在哪裡**，然後寫下一連串的 `move()` 和 `shoot()` 呼叫來摧毀牠們全部。

請注意：

- 如果你在上方沒有外星人時射擊，你就會得到一個錯誤（英文：_error_）（畢竟，浪費彈藥是不被允許的！）
- 如果你移動超出了螢幕的右側邊緣，你就會得到一個錯誤。

玩得開心喔！
