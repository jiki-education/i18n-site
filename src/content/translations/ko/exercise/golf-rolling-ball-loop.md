---
lang: "ko"
type: "exercise"
slug: "golf-rolling-ball-loop"
title: "공 굴리기"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-rolling-ball-loop"
en_md5: "e581ca0b932527b029cef23f9ad49a5e"
governance_sha: "c80036b"
content_version: "d7ed6f64522d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"ballNotAtEnd","english":"The ball rolled to {{ballX}}, which isn't 60 from where it started.","target":"공이 {{ballX}}까지 굴러갔는데, 시작 지점에서 60걸음 떨어진 곳이 아니에요."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, starting from 29.","target":"공이 29부터 시작해서 한 걸음씩 각 위치를 통과해야 해요."},{"key":"codeQuality.tooManyLines","english":"Your solution has too many lines of code. Try using a loop to make it shorter.","target":"코드 줄이 너무 많아요. 루프를 사용해서 더 짧게 만들어 보세요."}]},{"name":"tasks","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"공을 홀에 굴려 넣어요"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"공을 홀에 굴려 넣어요."}]},{"name":"scenarios","rows":[{"key":"rollBall.name","english":"Roll the ball into the hole","target":"공을 홀에 굴려 넣어요"},{"key":"rollBall.description","english":"Roll the ball into the hole.","target":"공을 홀에 굴려 넣어요."}]},{"name":"hints","rows":[{"key":"icantWorkItOut.question","english":"I can't work it out","target":"어떻게 해야 할지 모르겠어요"},{"key":"icantWorkItOut.answer","english":"You have two tools to use:\n- A repeat loop, which you use by writing `repeat(n) { }` where `n` is the amount of times you want to roll and where you can put anything inside the braces (`{ }`).\n- A `roll()` function that rolls the ball one step to the right.\n\nHow can you combine them?","target":"두 가지 도구를 사용할 수 있어요:\n- `repeat` 루프는 `repeat(n) { }`처럼 작성하는데, `n`은 굴리고 싶은 횟수이고, 중괄호(`{ }`) 안에 원하는 코드를 넣을 수 있어요.\n- 공을 오른쪽으로 한 걸음 굴리는 `roll()` 함수가 있어요.\n\n이 둘을 어떻게 조합하면 될까요?"}]},{"name":"functions","rows":[{"key":"roll.description","english":"Rolls the ball **one step to the right**.","target":"공을 **오른쪽으로 한 걸음** 굴려요."},{"key":"roll.category","english":"Movement","target":"이동"}]},{"name":"describers","rows":[{"key":"roll","english":"rolled the ball one step to the right","target":"공을 오른쪽으로 한 걸음 굴렸어요"}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

이제 `repeat` 루프(영어: _loop_)를 직접 사용해볼까요!

골프공이 티에 놓여 있어요. 이 공을 60걸음 떨어진 홀까지 굴려 넣어야 해요.

이 연습 문제를 **세 줄의 코드**로 해결해 보세요. 즐겁게 해봐요!
