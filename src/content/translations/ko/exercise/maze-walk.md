---
lang: "ko"
type: "exercise"
slug: "maze-walk"
title: "걷기 배우기"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-walk"
en_md5: "a15372817fd885ccc45a2fe27624bbf6"
governance_sha: "c80036b"
content_version: "39879225106f"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"notReachedEnd","english":"You didn't reach the end of the maze.","target":"미로의 끝에 도달하지 못했어요."},{"key":"walkNotDefined","english":"You should define a <code>walk</code> function that takes a number of steps and moves forward that many times.","target":"<code>walk</code> 함수를 정의해야 해요. 이 함수는 걸음 수를 입력으로 받아 그 횟수만큼 앞으로 이동해요."}]},{"name":"tasks","rows":[{"key":"writeWalk.name","english":"Write a walk function","target":"걷기 함수 작성하기"},{"key":"writeWalk.description","english":"Define a function called walk that takes a number of steps as its input and moves forward that many times.","target":"걷기라는 함수를 정의해요. 이 함수는 걸음 수를 입력으로 받아 그 횟수만큼 앞으로 이동해요."}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Navigate the maze","target":"미로 탐색하기"},{"key":"maze1.description","english":"Walk 3, turn left, walk 2, turn right, walk 4 to reach the target.","target":"3걸음 걷기, 왼쪽으로 돌기, 2걸음 걷기, 오른쪽으로 돌기, 4걸음 걷기로 목표에 도달해요."}]},{"name":"hints","rows":[{"key":"howToMoveForward.question","english":"How do I move forward?","target":"앞으로 어떻게 이동하나요?"},{"key":"howToMoveForward.answer","english":"Use the `move()` function.","target":"`move()` 함수를 사용해요."},{"key":"howToMoveSpecificTimes.question","english":"How do I move forward a specific number of times?","target":"특정 횟수만큼 앞으로 어떻게 이동하나요?"},{"key":"howToMoveSpecificTimes.answer","english":"You have solved other exercises where you had to do something a specific number of times (think back to making the golf ball roll a specific distance). Use the same ideas here.","target":"특정 횟수만큼 어떤 동작을 반복해야 했던 다른 연습 문제들을 해결한 적이 있을 거예요 (골프 공을 특정 거리만큼 굴렸던 것을 떠올려보세요). 여기서도 같은 방법을 사용해요."}]},{"name":"functions","rows":[{"key":"move.description","english":"Moves the character **one step forward** in the current direction. The character will only move if the target position is not blocked by a wall.","target":"캐릭터를 현재 방향으로 **한 걸음 앞으로** 이동시켜요. 벽에 막히지 않은 경우에만 이동해요."},{"key":"move.category","english":"Movement","target":"이동"},{"key":"turnLeft.description","english":"Turns the character **90 degrees to the left** (counterclockwise). This changes the direction the character is facing.","target":"캐릭터를 **왼쪽으로 90도** 회전시켜요 (시계 반대 방향). 캐릭터가 바라보는 방향을 바꿔요."},{"key":"turnLeft.category","english":"Movement","target":"이동"},{"key":"turnRight.description","english":"Turns the character **90 degrees to the right** (clockwise). This changes the direction the character is facing.","target":"캐릭터를 **오른쪽으로 90도** 회전시켜요 (시계 방향). 캐릭터가 바라보는 방향을 바꿔요."},{"key":"turnRight.category","english":"Movement","target":"이동"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"이런, 미로 밖으로 떨어질 뻔했어요!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"아야! 벽에 부딪혔어요!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"아야! 불 속으로 걸어 들어갔어요!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"으악! 똥을 밟았어요! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"캐릭터를 한 칸 앞으로 움직여요"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"캐릭터를 왼쪽으로 90도 돌려요"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"캐릭터를 오른쪽으로 90도 돌려요"}]}]}]
---

다시 미로로 돌아왔어요. 잠시 자동 해결에서 벗어나 볼게요. 이전에 수동으로 미로를 풀 때, 앞으로 세 걸음을 이동해야 했다면 `move()`(이동)를 세 번 작성해야 했을 거예요.

이번 연습 문제에서는 걸음 수를 입력으로 받아 그만큼 앞으로 이동하는 새로운 함수 `walk(numSteps)`(걷기)를 만들 거예요.

따라서 `walk(5)`를 사용하면 `move()`를 다섯 번 실행한 것과 같아요.

함수 아래에는 미로를 해결하는 샘플 코드가 있어요. 함수를 작성하고 나면, 아래 코드가 `turnLeft()`(왼쪽으로 돌기)와 `turnRight()`(오른쪽으로 돌기)를 사용해 이 함수와 함께 미로를 탐색할 거예요.

잘 해봐요!
