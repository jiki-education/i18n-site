---
lang: "ko"
type: "exercise"
slug: "space-invaders-nested-repeat"
title: "스페이스 인베이더: 중첩 반복"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/space-invaders-nested-repeat"
en_md5: "c0d87f1fa433152d98bce923dbfa1f52"
governance_sha: "c80036b"
content_version: "1ae5455d4c70"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"describers","rows":[{"key":"move","english":"moved the laser cannon to the right","target":"레이저 대포를 오른쪽으로 한 칸 이동시켰어요"}]},{"name":"checks","rows":[{"key":"notShotAllAliens","english":"You didn't shoot down all the aliens.","target":"모든 외계인을 격추하지 못했어요"},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try using a repeat loop inside another repeat loop to make it shorter!","target":"코드 줄 수가 너무 많아요. `repeat` 반복문 안에 또 다른 `repeat` 반복문을 넣어서 더 짧게 만들어 보세요!"}]},{"name":"tasks","rows":[{"key":"nestedRepeatShoot.name","english":"Use nested repeat loops to shoot all the aliens","target":"중첩 반복으로 외계인 모두 격추하기"},{"key":"nestedRepeatShoot.description","english":"Find the pattern in the alien positions and use a repeat loop inside another repeat loop to destroy them all in 7 lines of code or fewer.","target":"외계인들의 위치에서 패턴을 찾아보고, `repeat` 반복문 안에 또 다른 `repeat` 반복문을 사용해서 7줄 이하의 코드로 모두 물리쳐 보세요."}]},{"name":"scenarios","rows":[{"key":"nestedRepeatShoot.name","english":"Nested Repeat and Shoot","target":"중첩 반복과 발사"},{"key":"nestedRepeatShoot.description","english":"Use nested repeat loops to shoot all the aliens","target":"중첩 반복문을 사용해 모든 외계인을 격추하세요"}]},{"name":"hints","rows":[{"key":"cantGetTo7Lines.question","english":"I can't get to 7 lines of code.","target":"코드 7줄로 만들 수가 없어요"},{"key":"cantGetTo7Lines.answer","english":"Think about this level as two blocks of things that need to happen.\n\n- The first block is the inner one, where we shoot 4 times - make sure that is three lines long.\n- The outer block is the inner block with some movement either side. That outer block needs to be repeated a few times too.\n\nIf you structure your code in this way, it should naturally end up at 7 lines of code.","target":"이 레벨을 두 개의 블록으로 생각해 보세요.\n\n- 첫 번째 블록은 안쪽 블록으로, 4번 발사합니다. 이 부분을 세 줄로 만드세요.\n- 바깥쪽 블록은 안쪽 블록을 감싸며 앞뒤로 약간의 이동이 있습니다. 이 바깥쪽 블록도 몇 번 반복해야 합니다.\n\n이와 같이 코드를 구성하면 자연스럽게 7줄의 코드가 됩니다."}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the laser cannon **one position to the right**. If you move off the right edge of the screen, you lose!","target":"레이저 대포를 **오른쪽으로 한 칸** 이동시켜요. 화면 오른쪽 가장자리를 벗어나면 게임에서 져요!"},{"key":"move.category","english":"Movement","target":"이동"},{"key":"shoot.description","english":"Shoots the laser upwards. **Only shoot when there's an alien above you**, or you lose the game!","target":"레이저를 위쪽으로 발사해요. **위에 외계인이 있을 때만 발사하세요**, 아니면 게임에서 져요!"},{"key":"shoot.category","english":"Action","target":"동작"}]}]},{"heading":"Shared \"space-invaders\" messages","note":"Shared by every exercise in the space-invaders category, not just this one. A change here changes all of them.","namespaces":[{"name":"describers","rows":[{"key":"moveLeft","english":"moved the laser cannon to the left","target":null},{"key":"moveRight","english":"moved the laser cannon to the right","target":null},{"key":"shoot","english":"shot the laser upwards","target":null},{"key":"isAlienAbove","english":"determined if there was an alien above the laser cannon","target":null},{"key":"getStartingAliensInRow","english":"retrieved the starting positions of row ${arg1} of aliens","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]},{"name":"errors","rows":[{"key":"laserOverheated","english":"Oh no! Your laser cannon overheated from shooting too fast! You need to move before you can shoot a second time.","target":null},{"key":"missedShot","english":"Oh no, you missed. Wasting ammo is not allowed!","target":null},{"key":"moveOffEdge","english":"Oh no, you tried to move off the edge!","target":null},{"key":"rowNotNumber","english":"Oh no, the row input you provided is not a number.","target":null},{"key":"rowOutOfRange","english":"Oh no, you tried to access a row of aliens that doesn't exist. You asked for row {{row}}, but the rows are numbered 0 to {{max}}.","target":null},{"key":"notAllAliensDead","english":"You need to defeat all the aliens before you can celebrate!","target":null}]}]}]
---

외계인이 더 많이 등장했고, 이제 **네 줄**이나 쌓여 있어요!

이전과 동일한 두 개의 함수를 사용할 수 있어요:

- `move()`(이동)는 레이저 대포를 오른쪽으로 한 칸 이동시켜요.
- `shoot()`(발사)은 레이저를 위쪽으로 발사해요.

다른 점은 각 행마다 외계인을 여러 번 발사해야 한다는 거예요.

풀이는 반드시 **7줄 이하의 코드**로 작성해야 해요. 행운을 빌어요!
