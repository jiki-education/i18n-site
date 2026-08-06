---
lang: "ko"
type: "exercise"
slug: "maze-solve-repeat"
title: "루프 미로"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-repeat"
en_md5: "8e2c5079e7cf134afee6f3c110ebb33b"
governance_sha: "c80036b"
content_version: "7faa10956397"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"notReachedEnd","english":"You didn't reach the end of the maze.","target":"미로의 끝에 도달하지 못했어요."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Look for groups of consecutive move() calls and replace each group with a repeat loop.","target":"코드 줄 수가 너무 많아요. 연속되는 `move()` 호출을 찾아 각 그룹을 repeat 루프로 바꿔보세요."},{"key":"oneLineOver","english":"You're just one line too long! A repeat loop isn't always shorter: repeating something only two or three times can take more lines than writing the calls out, so look for a repeat that isn't actually saving you anything.","target":"코드가 딱 한 줄 길어요! repeat 루프가 항상 짧은 건 아니에요: 어떤 동작을 두세 번 반복하는 것은 호출을 그냥 나열하는 것보다 더 많은 줄을 차지할 수 있어요. 그래서 실제로 줄 수를 줄여주지 않는 repeat을 찾아보세요."}]},{"name":"tasks","rows":[{"key":"solveMazeWithRepeat.name","english":"Refactor the maze solution using repeat loops","target":"repeat 루프를 사용해 미로 해결 코드 리팩토링하기"},{"key":"solveMazeWithRepeat.description","english":"Replace consecutive `move()` calls with repeat loops to make the code shorter.","target":"코드를 짧게 만들기 위해 연속되는 `move()` 호출을 repeat 루프로 바꿔보세요."}]},{"name":"scenarios","rows":[{"key":"mazeRepeat1.name","english":"Refactor the maze solution using repeat loops","target":"repeat 루프를 사용해 미로 해결 코드 리팩토링하기"},{"key":"mazeRepeat1.description","english":"Use repeat loops to avoid consecutive `move()` calls.","target":"연속된 `move()` 호출을 피하기 위해 repeat 루프를 사용해요."}]},{"name":"hints","rows":[{"key":"noIdea.question","english":"I have no idea what to do","target":"뭘 해야 할지 모르겠어요."},{"key":"noIdea.answer","english":"Look for groups of consecutive `move()` calls. For example, instead of:\n\n```javascript\nmove()\nmove()\nmove()\n```\n\nYou can write:\n\n```javascript\nrepeat(3) {\n  move()\n}\n```\n\nFind the groups and replace them!","target":"연속된 `move()` 호출 그룹을 찾아보세요. 예를 들어:\n\n```javascript\nmove()\nmove()\nmove()\n```\n\n대신 이렇게 쓸 수 있어요:\n\n```javascript\nrepeat(3) {\n  move()\n}\n```\n\n그룹을 찾아서 바꿔보세요!"},{"key":"tooManyLines.question","english":"Using repeats but got too many lines?","target":"repeat을 사용했는데도 코드 줄 수가 너무 많나요?"},{"key":"tooManyLines.answer","english":"Is it always better to use a repeat? In some cases, it might be shorter to just have two moves next to each other.","target":"repeat을 사용하는 것이 항상 더 나은가요? 때로는 `move()` 두 개를 그냥 나란히 두는 것이 더 짧을 수 있어요."}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the character **one step forward** in the current direction. The character will only move if the target position is not blocked by a wall.","target":"캐릭터를 현재 방향으로 **한 칸 앞으로** 이동시켜요. 목표 위치가 벽으로 막혀 있지 않을 때만 이동해요."},{"key":"move.category","english":"Movement","target":"이동"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"캐릭터를 **왼쪽으로 90도 회전**(반시계 방향)시켜요. 캐릭터가 바라보는 방향이 바뀌어요."},{"key":"turnLeft.category","english":"Movement","target":"이동"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"캐릭터를 **오른쪽으로 90도 회전**(시계 방향)시켜요. 캐릭터가 바라보는 방향이 바뀌어요."},{"key":"turnRight.category","english":"Movement","target":"이동"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"이런, 미로 밖으로 떨어질 뻔했어요!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"아야! 벽에 부딪혔어요!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"아야! 불 속으로 걸어 들어갔어요!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"으악! 똥을 밟았어요! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"캐릭터를 한 칸 앞으로 움직여요"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"캐릭터를 왼쪽으로 90도 돌려요"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"캐릭터를 오른쪽으로 90도 돌려요"}]}]}]
---

미로를 해결하는 작동 코드를 받았는데, 아주 길고 반복이 많아요. 할 일은 코드를 **가능한 한 적은 줄 수**로 바꾸는 거예요.

이 비결은 `repeat` 루프(영어: _loops_)를 사용해 코드를 더 짧게 만드는 거예요. 예를 들어, `repeat`문의 문법은 이렇게 생겼어요.

```javascript
repeat(3) {
  // 반복할 내용을 여기에 넣어요.
}
```

여기서 목표는 코드를 최대한 짧게, **22줄**로 만드는 거예요. 그러려면 `repeat`문을 언제 사용하는 게 좋을지, 언제 사용하지 않는 게 좋을지 고민해야 해요. 빈 줄이나 주석만 있는 줄은 목표 줄 수에 포함되지 않으니, 코드를 더 읽기 좋게 여백을 넣어도 괜찮아요!

행운을 빌어요!
