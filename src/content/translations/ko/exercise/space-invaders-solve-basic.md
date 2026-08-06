---
lang: "ko"
type: "exercise"
slug: "space-invaders-solve-basic"
title: "Space Invaders"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/space-invaders-solve-basic"
en_md5: "832d47151ead209ebf0f931a8472ec30"
governance_sha: "c80036b"
content_version: "c248c2721d77"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"move","english":"moved the laser cannon to the right","target":"레이저 캐논을 오른쪽으로 이동시켰어요"}]},{"name":"checks","rows":[{"key":"notShotAllAliens","english":"You didn't shoot down all the aliens.","target":"외계인을 모두 격추하지 못했어요"}]},{"name":"tasks","rows":[{"key":"shootTheAliens.name","english":"Shoot all the aliens","target":"외계인 모두 격추"},{"key":"shootTheAliens.description","english":"Move your laser cannon to the right and shoot each alien as you pass underneath it. Don't miss or move off the edge!","target":"레이저 캐논을 오른쪽으로 이동하며, 아래로 지나가는 외계인을 차례대로 격추하세요. 빗나가거나 오른쪽 가장자리 밖으로 이동하지 마세요!"}]},{"name":"scenarios","rows":[{"key":"shootTheAliens.name","english":"Shoot the Aliens","target":"외계인 격추"},{"key":"shootTheAliens.description","english":"Move right and shoot all the aliens","target":"오른쪽으로 이동하여 외계인 모두 격추"}]},{"name":"hints","rows":[{"key":"whatDoINeedToDo.question","english":"What do I need to do?","target":"뭘 해야 하나요?"},{"key":"whatDoINeedToDo.answer","english":"Like the maze, you need to move your character (this time a laser, not a person). But you also need to shoot from the laser! Move the laser underneath an alien then shoot. Then move again until you're under the next alien, and shoot again. Continue until you've shot down the last alien!","target":"미로처럼 캐릭터를 이동해야 해요 (이번에는 사람이 아니라 레이저예요). 하지만 레이저에서 발사도 해야 해요! 외계인 아래로 레이저를 이동한 다음 발사하세요. 그런 다음 다음 외계인 아래로 다시 이동하고, 다시 발사하세요. 마지막 외계인을 격추할 때까지 계속하세요!"},{"key":"cantWasteAmmo.question","english":"I get told I can't waste ammo.","target":"탄약을 낭비할 수 없다고 나와요"},{"key":"cantWasteAmmo.answer","english":"You should only `shoot()` when you're directly below an alien. Try moving one step further (or maybe you've gone one too far?)","target":"외계인 바로 아래에 있을 때만 `shoot()`을 해야 해요. 한 칸 더 움직여 보세요 (혹은 한 칸 너무 많이 갔을 수도 있어요?)"}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the laser cannon **one position to the right**. If you move off the right edge of the screen, you lose!","target":"레이저 캐논을 **오른쪽으로 한 칸** 이동시켜요. 화면 오른쪽 가장자리 밖으로 이동하면 게임에서 집니다!"},{"key":"move.category","english":"Movement","target":"이동"},{"key":"shoot.description","english":"Shoots the laser upwards. **Only shoot when there's an alien above you**, or you lose the game!","target":"레이저를 위로 발사해요. **외계인이 위에 있을 때만 발사하세요**, 그렇지 않으면 게임에서 집니다!"},{"key":"shoot.category","english":"Action","target":"액션"}]}]},{"heading":"Shared \"space-invaders\" messages","note":"Shared by every exercise in the space-invaders category, not just this one. A change here changes all of them.","namespaces":[{"name":"describers","rows":[{"key":"moveLeft","english":"moved the laser cannon to the left","target":null},{"key":"moveRight","english":"moved the laser cannon to the right","target":null},{"key":"shoot","english":"shot the laser upwards","target":null},{"key":"isAlienAbove","english":"determined if there was an alien above the laser cannon","target":null},{"key":"getStartingAliensInRow","english":"retrieved the starting positions of row ${arg1} of aliens","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]},{"name":"errors","rows":[{"key":"laserOverheated","english":"Oh no! Your laser cannon overheated from shooting too fast! You need to move before you can shoot a second time.","target":null},{"key":"missedShot","english":"Oh no, you missed. Wasting ammo is not allowed!","target":null},{"key":"moveOffEdge","english":"Oh no, you tried to move off the edge!","target":null},{"key":"rowNotNumber","english":"Oh no, the row input you provided is not a number.","target":null},{"key":"rowOutOfRange","english":"Oh no, you tried to access a row of aliens that doesn't exist. You asked for row {{row}}, but the rows are numbered 0 to {{max}}.","target":null},{"key":"notAllAliensDead","english":"You need to defeat all the aliens before you can celebrate!","target":null}]}]}]
---

두 번째 연습 문제, Space Invaders에 오신 것을 환영해요! 이 게임은 1970년대의 고전 아케이드 게임으로, 제가 처음 해본 게임 중 하나예요. 앞으로 몇 주 동안 외계인을 물리칠 완전 자동 레이저를 만들게 될 거예요. 하지만 지금은 모든 외계인을 수동으로 격추하는 거예요.

두 가지 함수(영어: _functions_)가 있어요:

- `move()`(이동)은 레이저 캐논을 오른쪽으로 한 칸 이동시켜요.
- `shoot()`(발사)은 레이저를 위로 발사해요.

첫 번째 `move()`는 이미 넣어 두었어요. **외계인이 어디 있는지 살펴보고**, `move()`와 `shoot()` 호출을 순서대로 작성해서 모두 없애 보세요.

주의하세요:

- 위에 외계인이 없을 때 발사하면 오류(영어: _error_)가 발생해요 (어쨌든 탄약 낭비는 허용되지 않으니까요!).
- 화면 오른쪽 가장자리 밖으로 이동하면 오류가 발생해요.

즐겁게 해봐요!
