---
lang: "ko"
type: "exercise"
slug: "golf-rolling-ball-state"
title: "상태 있는 공"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-state"
en_md5: "f203d7c055cd4ad8de235218c470df98"
governance_sha: "c80036b"
content_version: "eba182c98d68"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"positionNotNumber","english":"position must be a number","target":"position은 숫자여야 해요."}]},{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball didn't reach the hole. It's at position {{ballX}}, but needs to be at position 88.","target":"공이 홀에 도달하지 못했어요. 위치 {{ballX}}에 있지만, 위치 88에 도착해야 해요."},{"key":"missingPositions","english":"The ball must roll through each position individually, not jump directly to the end.","target":"공이 각 위치를 하나씩 거쳐서 굴러가야 해요. 바로 끝으로 건너뛰면 안 돼요."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"공을 홀에 넣기"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"공을 홀에 넣기"}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"공을 홀에 넣기"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"공을 홀에 넣기"}]},{"name":"hints","rows":[{"key":"dontKnowWhereToStart.question","english":"I don't know where to start","target":"어디서부터 시작해야 할지 모르겠어요."},{"key":"dontKnowWhereToStart.answer","english":"The key is to move the ball one step forward each time. You can use a variable to do this. Think about how that might work.","target":"핵심은 공을 한 번에 한 칸씩 앞으로 움직이는 거예요. 변수를 사용해서 이렇게 할 수 있어요. 어떻게 하면 될지 생각해 보세요."},{"key":"stillCantFigureItOut.question","english":"I still can't figure it out","target":"아직도 어떻게 해야 할지 모르겠어요."},{"key":"stillCantFigureItOut.answer","english":"You want to create a variable to track where the ball is. It should start where it is now, then many times increase by one. Every time it increases you should `moveTo(...)` using the variable as an input.","target":"공 위치를 추적할 변수를 만들어야 해요. 변수는 지금 공의 위치에서 시작해서, 여러 번 1씩 증가시켜야 해요. 증가할 때마다 변수를 입력으로 `moveTo(...)`를 호출해야 해요."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to **position**.","target":"공을 **position**으로 이동해요."},{"key":"moveTo.category","english":"Movement","target":"이동"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"공을 ${arg1} 위치로 이동했어요."}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

골프 게임을 만드는 작업으로 다시 돌아왔어요. 이번에는 만들려는 것이 조금 달라졌어요.

이전에 사용했던 `roll()`(굴러가다) 함수 대신, 이번에는 공을 원하는 위치로 즉시 옮겨주는 `moveTo(position)`(특정 위치로 이동시키기) 함수를 사용해요.

이제 플레이어가 공을 치면, 공을 바로 최종 위치로 옮길 수도 있어요. 하지만 애니메이션이 없으면 영 재미없어요. 그래서 대신 `moveTo(position)`을 여러 번 사용해서 공이 굴러가는 것처럼 보이게 만들고 싶어요.

공은 위치 **28**에서 시작해서 **88**까지 도달해야 해요.

이 문제를 **5줄의 코드**로 풀어야 해요. 행운을 빌어요!
