---
lang: "ko"
type: "exercise"
slug: "maze-solve-walk"
title: "걸어서 이동하기"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-walk"
en_md5: "5f035995ce732e0595cd4d3c95814b84"
governance_sha: "c80036b"
content_version: "ea3c5651f9eb"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"walkExpectsNumber","english":"walk() expects a number of steps","target":"`walk()`는 걸음 수를 숫자로 입력받아야 해요."}]},{"name":"describers","rows":[{"key":"walk","english":"Walk forward a given number of steps","target":"지정한 걸음 수만큼 앞으로 걷기"}]},{"name":"checks","rows":[{"key":"notReachedEnd","english":"You didn't reach the end of the maze.","target":"미로의 끝에 도달하지 못했어요."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide person to the end of the maze","target":"사람을 미로 끝까지 안내하세요"},{"key":"solveMaze.description","english":"Navigate through the maze using walk(), turnLeft(), and turnRight() to reach the green target cell.","target":"`walk()`, `turnLeft()`, `turnRight()`를 사용해 미로를 탐색하고 초록색 목표 칸에 도달하세요."}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide person to the end of the maze","target":"사람을 미로 끝까지 안내하세요"},{"key":"maze1.description","english":"Your job is to reach the goal.","target":"할 일은 초록색 목표 칸에 도달하는 거예요."}]},{"name":"hints","rows":[{"key":"moveNotWorking.question","english":"Why doesn't `move()` work any more?","target":"왜 `move()`가 더 이상 작동하지 않을까요?"},{"key":"moveNotWorking.answer","english":"Each exercise in Jiki has different functions you can use. In this exercise, you have the `walk(...)` function. Replace the `n` with the number of steps you want to walk. So `walk(1)` does exactly the same as `move()` did last time.","target":"Jiki의 각 연습 문제마다 사용할 수 있는 기계가 달라요. 이번 연습 문제에서는 `walk(...)` 기계를 사용해요. 괄호 안의 숫자를 걷고 싶은 걸음 수로 바꾸세요. 그러면 `walk(1)`은 지난번 `move()`와 정확히 똑같은 동작을 해요."}]},{"name":"functions","rows":[{"key":"walk.description","english":"Moves the character **forward by the given number of steps** in the current direction. Each step moves one cell. The character will stop and report an error if it hits a wall.","target":"현재 방향으로 **지정한 걸음 수만큼** 캐릭터를 앞으로 이동시켜요. 한 걸음당 한 칸씩 이동해요. 벽에 부딪히면 멈추고 오류를 알려줘요."},{"key":"walk.category","english":"Movement","target":"이동"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"캐릭터를 **왼쪽으로 90도** 회전시켜요 (시계 반대 방향). 캐릭터가 바라보는 방향이 바뀌어요."},{"key":"turnLeft.category","english":"Movement","target":"이동"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"캐릭터를 **오른쪽으로 90도** 회전시켜요 (시계 방향). 캐릭터가 바라보는 방향이 바뀌어요."},{"key":"turnRight.category","english":"Movement","target":"이동"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"이런, 미로 밖으로 떨어질 뻔했어요!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"아야! 벽에 부딪혔어요!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"아야! 불 속으로 걸어 들어갔어요!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"으악! 똥을 밟았어요! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"캐릭터를 한 칸 앞으로 움직여요"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"캐릭터를 왼쪽으로 90도 돌려요"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"캐릭터를 오른쪽으로 90도 돌려요"}]}]}]
---

다시 미로로 돌아왔어요! 지난번에는 한 걸음씩 움직이기 위해 `move()`(이동) 기계를 사용했어요. 그 방법도 괜찮았지만, `move()`를 연달아 여러 번 적는 건 꽤 번거로웠어요!

이번 연습 문제에서는 `move()`를 `walk()`(걷기)라는 새로운 기계(영어: _function_)로 바꿨어요. 이 기계는 숫자를 입력(영어: _input_)으로 받아 그 수만큼 앞으로 이동해요. 예를 들어, `walk(3)`은 앞으로 3걸음 이동하고, `walk(1)`은 앞으로 딱 1걸음만 이동해요.

앞으로 모든 연습 문제에는 아래와 같은 "기계" 섹션이 있어서, 사용할 수 있는 기계가 무엇이고 어떻게 작동하는지 쉽게 확인할 수 있어요.

`walk()`, `turnLeft()`(왼쪽으로 돌기), `turnRight()`(오른쪽으로 돌기)를 사용해 미로를 탐색하고 초록색 목표 칸에 도달하세요.
