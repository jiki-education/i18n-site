---
lang: "ko"
type: "exercise"
slug: "maze-solve-basic"
title: "미로를 풀어봐요"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "8764d9c"
content_version: "f7ccb730919b"
published_at: "2026-08-01"
forum_topic_id: 809
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"미로 끝에 도착하지 못했어요."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"캐릭터를 미로 끝까지 안내하기"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"미로를 통과해서 초록색 목표 지점에 도착해 봐요"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"캐릭터를 미로 끝까지 안내하기"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"미로를 지나 초록색 목표 칸까지 캐릭터를 안내하는 게 이번 할 일이에요."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"무엇을 어디로 옮기는 건가요?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"왼쪽 위에서 출발하는 작은 캐릭터를 오른쪽 아래에 있는 초록색 원까지 옮기면 돼요. 빨간 줄무늬 칸은 피해서 가야 해요."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"왼쪽으로 돌렸는데 캐릭터가 오른쪽으로 돌아요!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"캐릭터는 지금 바라보는 방향을 기준으로 돌아요. 그래서 오른쪽을 보고 있을 때 왼쪽으로 돌면 위쪽을 바라보게 돼요."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"이런, 미로 밖으로 떨어질 뻔했어요!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"아야! 벽에 부딪혔어요!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"아야! 불 속으로 걸어 들어갔어요!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"으악! 똥을 밟았어요! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"캐릭터를 한 칸 앞으로 움직여요"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"캐릭터를 왼쪽으로 90도 돌려요"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"캐릭터를 오른쪽으로 90도 돌려요"}]}]}]
---

첫 번째 연습 문제에 오신 걸 환영해요!

이 문제의 목표는 학습 환경이 어떻게 돌아가는지 익히는 거예요. 할 일은 왼쪽에 보이는 미로를 푸는 거예요. 작은 캐릭터에게 지시를 내려서 길을 찾아가게 하면 돼요. 캐릭터가 따라야 할 지시를 모두 적은 다음, **코드 실행** 버튼을 눌러서 그대로 따라 하게 해요.

사용할 수 있는 지시는 세 가지예요.

- `move()` (이동): 캐릭터를 한 칸 앞으로 움직여요
- `turnLeft()` (왼쪽으로 돌기): 캐릭터를 왼쪽으로 돌려요 (지금 바라보는 방향 기준이에요)
- `turnRight()` (오른쪽으로 돌기): 캐릭터를 오른쪽으로 돌려요 (지금 바라보는 방향 기준이에요)

왼쪽을 보면 첫 세 개의 지시는 이미 적혀 있어요. 먼저 **"코드 실행"** 버튼을 눌러서 어떻게 움직이는지 확인해 봐요. 그다음 **지시를 더 추가해서** 캐릭터를 미로 끝까지 데려가 봐요. 지시는 한 줄에 하나씩 적고, **코드 실행**을 눌러서 전부 실행해요.

코드를 자주 실행해 보는 습관을 들이면 좋아요!

미로를 풀고 나면 대시보드로 돌아가서 다음 레슨을 시작할 수 있어요.
