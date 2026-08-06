---
lang: "ko"
type: "exercise"
slug: "golf-scenarios"
title: "골프 샷 시나리오"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/golf-scenarios"
en_md5: "7ad7d621d35bee023767aa9463c2b8e9"
governance_sha: "c80036b"
content_version: "fc8228560d51"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"wrongShotEnd","english":"The ball didn't end up in the right place for this shot. Check it travels the full shot length.","target":"이 샷에서 공이 올바른 위치에 가지 못했어요. 공이 샷 거리만큼 이동했는지 확인해 보세요."},{"key":"missingPositions","english":"The ball must roll through each position one step at a time, not jump straight to the end.","target":"공은 각 위치를 한 걸음씩 지나가야 해요. 곧장 끝으로 점프하면 안 돼요."}]},{"name":"tasks","rows":[{"key":"rollAndCelebrate.name","english":"Roll the ball","target":"공 굴리기"},{"key":"rollAndCelebrate.description","english":"Get the shot length and roll the ball right by that amount.","target":"샷 거리를 가져와서 그만큼 공을 오른쪽으로 굴리세요."}]},{"name":"scenarios","rows":[{"key":"shortShot.name","english":"Short shot (20)","target":"짧은 샷 (20)"},{"key":"shortShot.description","english":"In this scenario, `getShotLength()` will return 20. Roll the ball 20 steps from the tee.","target":"이 시나리오에서는 `getShotLength()`가 20을 반환해요. 공을 티에서 20걸음 굴리세요."},{"key":"mediumShot.name","english":"Medium shot (35)","target":"중간 샷 (35)"},{"key":"mediumShot.description","english":"In this scenario, `getShotLength()` will return 35. Roll the ball 35 steps from the tee.","target":"이 시나리오에서는 `getShotLength()`가 35를 반환해요. 공을 티에서 35걸음 굴리세요."},{"key":"longShot.name","english":"Long shot (50)","target":"긴 샷 (50)"},{"key":"longShot.description","english":"In this scenario, `getShotLength()` will return 50. Roll the ball 50 steps from the tee.","target":"이 시나리오에서는 `getShotLength()`가 50을 반환해요. 공을 티에서 50걸음 굴리세요."},{"key":"veryLongShot.name","english":"Very long shot (60)","target":"아주 긴 샷 (60)"},{"key":"veryLongShot.description","english":"In this scenario, `getShotLength()` will return 60. Roll the ball 60 steps from the tee.","target":"이 시나리오에서는 `getShotLength()`가 60을 반환해요. 공을 티에서 60걸음 굴리세요."}]},{"name":"hints","rows":[{"key":"notSureWhereToStart.question","english":"I'm not sure where to start","target":"어디서부터 시작해야 할지 모르겠어요."},{"key":"notSureWhereToStart.answer","english":"This is just like the previous golf exercise, where you rolled the ball a fixed number of steps. The only difference is that the number of steps is no longer a fixed value — it comes from `getShotLength()` instead. Wherever you used a number before, you can use the result of a function instead.","target":"이전 골프 연습 문제와 비슷해요. 거기서는 공을 정해진 걸음 수만큼 굴렸죠. 유일한 차이는 걸음 수가 더 이상 고정된 값이 아니고 `getShotLength()`에서 얻은 값을 사용한다는 점이에요. 전에 숫자를 썼던 곳에 함수의 결과를 사용하면 돼요."},{"key":"ballStopsShort.question","english":"My ball stops one step short (or goes one too far)","target":"공이 한 걸음 짧게 멈추거나 한 걸음 더 나가요."},{"key":"ballStopsShort.answer","english":"Think carefully about your starting position and how many times you roll. The ball sits on the tee at 28, so its first roll should take it to 29. Count the steps from there to where it needs to end up.","target":"출발 위치와 굴리는 횟수를 잘 생각해 보세요. 공은 28번 티에 놓여 있어요. 첫 걸음으로 29로 가야 해요. 거기서부터 도착 지점까지 걸음 수를 세어 보세요."}]},{"name":"functions","rows":[{"key":"moveTo.description","english":"Moves the ball to position **x**.","target":"공을 **x** 위치로 이동해요."},{"key":"moveTo.category","english":"Movement","target":"이동"},{"key":"getShotLength.description","english":"Returns the **length of the shot** — how many units the ball travels to the right.","target":"**샷 거리**를 반환해요. 공이 오른쪽으로 이동하는 단위 수를 알려줘요."},{"key":"getShotLength.category","english":"Information","target":"정보"}]},{"name":"describers","rows":[{"key":"moveTo","english":"moved the ball to position ${arg1}","target":"공을 ${arg1} 위치로 이동했어요."},{"key":"getShotLength","english":"retrieved the shot length","target":"샷 거리를 가져왔어요."}]}]},{"heading":"Shared \"golf\" messages","note":"Shared by every exercise in the golf category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"xNotNumber","english":"x must be a number","target":null},{"key":"yNotNumber","english":"y must be a number","target":null}]},{"name":"describers","rows":[{"key":"rollRight","english":"rolled the ball one unit to the right","target":null},{"key":"moveTo","english":"moved the ball to the given position","target":null},{"key":"getShotLength","english":"retrieved the shot length","target":null},{"key":"fireFireworks","english":"fired off celebratory fireworks","target":null}]}]}]
---

시나리오가 있는 첫 연습 문제에 오신 걸 환영해요.

다시 골프장으로 돌아왔어요. 이번 연습 문제에서는 이전 문제들을 바탕으로 하면서도 새로운 방식으로 발전시켜 볼 거예요. 이전처럼 `moveTo(x)` (이동) 함수를 사용해서 공을 옮겨야 해요. 단, 한 번에 끝까지 점프하는 게 아니라 **한 걸음씩** 이동해야 해요. 공은 **28번 위치의 티에서 시작해요.**

새로운 점은 정해진 거리만큼 움직이는 대신, 골퍼가 공을 얼마나 멀리 쳤는지에 따라 다른 거리를 움직여야 한다는 거예요. 골퍼가 공을 친 거리를 알려면, 숫자를 반환하는 `getShotLength()` (샷 거리 가져오기) 함수를 사용할 수 있어요.

### 시나리오

왼쪽을 보면 네 가지 시나리오에 해당하는 회색 점 네 개가 보일 거예요. **각 점을 클릭**하면 다른 시나리오가 나타나요. 시나리오에 따라 `getShotLength()`가 반환하는 숫자가 달라져요. `"Run Code"`를 클릭하면 모든 점이 빨간색으로 바뀌는 걸 볼 수 있어요.

여러분이 할 일은 `getShotLength()`가 반환할 수 있는 모든 값에 대해 동작하는 하나의 프로그램을 작성하는 거예요.

행운을 빌어요! 재미있게 해봐요!
