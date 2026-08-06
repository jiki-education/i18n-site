---
lang: "ko"
type: "exercise"
slug: "rainbow-ball"
title: "무지개 공"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/rainbow-ball"
en_md5: "9ce8ac697138ecf8e2f936dcd6c73059"
governance_sha: "c80036b"
content_version: "f2777eabf935"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"uniqueColoredCircles","english":"Expected at least 50 uniquely colored circles.","target":"서로 다른 색의 원이 최소 50개 필요해요."},{"key":"uniquePositionedCircles","english":"Expected at least 30 different positions.","target":"서로 다른 위치의 원이 최소 30개 필요해요."},{"key":"canvasCoverage","english":"The ball didn't paint enough of the canvas. It should bounce around until over 80% is covered.","target":"공이 캔버스를 충분히 그리지 않았어요. 80% 이상 덮일 때까지 튕겨야 해요."},{"key":"hueBounced","english":"The hue didn't hit 360 then climb back down again.","target":"hue 값이 360에 도달한 후 다시 감소하지 않았어요."},{"key":"hueSweep","english":"The rainbow trail didn't sweep through all the colours.","target":"무지개 자취가 모든 색을 거치지 않았어요."}]},{"name":"tasks","rows":[{"key":"rainbowBall.name","english":"Create a bouncing rainbow ball","target":"튀어다니는 무지개 공 만들기"},{"key":"rainbowBall.description","english":"Create a ball that bounces around the canvas, leaving a trail of colorful circles that cycle through rainbow colors.","target":"캔버스 위를 튕기며 무지개 색으로 순환하는 원 자취를 남기는 공을 만들어요."}]},{"name":"scenarios","rows":[{"key":"rainbowBall.name","english":"Rainbow ball","target":"무지개 공"},{"key":"rainbowBall.description","english":"Draw a rainbow trail from different circles.","target":"서로 다른 원으로 무지개 자취를 그려요."}]},{"name":"hints","rows":[{"key":"stateToTrack.question","english":"What state do I need to track?","target":"어떤 상태를 추적해야 하나요?"},{"key":"stateToTrack.answer","english":"The ball's position, and how it's moving. Keep those separate: one variable for *where* the ball is, another for *how it's changing*. The same idea applies to the hue: you need its current value plus a direction it's heading in.","target":"공의 위치와 움직임이에요. 둘을 따로 관리하세요: *공이 어디에 있는지* 나타내는 변수 하나, *어떻게 변하는지* 나타내는 변수 하나. hue도 마찬가지예요: 현재 값과 가고 있는 방향이 필요해요."},{"key":"moveAndShift.question","english":"How do I make the ball move and the colour shift each frame?","target":"매 프레임마다 공을 움직이고 색을 바꾸려면 어떻게 하나요?"},{"key":"moveAndShift.answer","english":"At the start of each loop iteration, add your direction variables to the position and to `hue`. That way the direction variables fully control the motion. Flipping their sign or changing their size instantly changes how the ball moves and how the colour shifts.","target":"각 루프 반복의 시작에서, 방향 변수를 위치와 `hue`에 더하세요. 그러면 방향 변수가 움직임을 완전히 제어해요. 부호를 바꾸거나 크기를 바꾸면 공의 움직임과 색 변화가 즉시 달라져요."},{"key":"velocityTip.question","english":"I can't work out how to do this. Any tips?","target":"이걸 어떻게 해야 할지 모르겠어요. 팁이 있을까요?"},{"key":"velocityTip.answer","english":"What are these numbers that `x` and `y` change by? They're a mixture of speed (the size of the number) and direction (whether it moves the ball forward or back). So `2` would be a speed of 2 moving to the right or bottom. And `-3` would be a speed of 3 moving to the left or top. A number that is a speed and a distance is called a **velocity** (time to update your variable names?) So when you want to change the direction of the ball, you change the sign of the velocity, from positive to negative or vice versa.","target":"`x`와 `y`가 얼마나 변할지 정하는 이 숫자들은 뭘까요? 이 숫자는 속도(숫자의 크기)와 방향(공을 앞으로 보낼지 뒤로 보낼지)이 합쳐진 거예요. 그래서 `2`는 오른쪽이나 아래로 속도 2로 움직이는 것이고, `-3`은 왼쪽이나 위로 속도 3으로 움직이는 거예요. 이렇게 속도와 방향을 함께 나타내는 숫자를 **속도**라고 부른답니다(이제 변수 이름도 바꿔볼까요?). 그래서 공의 방향을 바꾸고 싶을 때는 속도의 부호를 바꾸면 돼요: 양수에서 음수로, 혹은 그 반대로요."},{"key":"bounceOffEdges.question","english":"How do I make the ball bounce off the edges?","target":"공이 가장자리에서 튕기게 하려면 어떻게 하나요?"},{"key":"bounceOffEdges.answer","english":"After updating position, check whether `x` or `y` has crossed the canvas boundary. When it has, reverse the direction variable for that axis. The instructions specify the canvas range.","target":"위치를 업데이트한 후, `x`나 `y`가 캔버스 경계를 넘었는지 확인하세요. 넘었다면, 해당 축의 방향 변수를 반대로 바꿔요. 설명서에 캔버스 범위가 나와 있어요."},{"key":"randomBounceSpeed.question","english":"How do I give the bounce a random new speed each time?","target":"매번 튕길 때마다 임의의 새로운 속도를 주려면 어떻게 하나요?"},{"key":"randomBounceSpeed.answer","english":"When the ball hits an edge, set the direction variable using `Math.randomInt(min, max)` instead of just flipping its sign. Pick a positive range when bouncing off the left or top, and a negative range when bouncing off the right or bottom.","target":"공이 가장자리에 닿았을 때, 방향 변수를 부호만 바꾸는 대신 `Math.randomInt(min, max)`로 설정하세요. 왼쪽이나 위쪽에서 튕길 때는 양수 범위를, 오른쪽이나 아래쪽에서 튕길 때는 음수 범위를 선택하세요."},{"key":"cycleHue.question","english":"How do I cycle the hue through the rainbow?","target":"hue가 무지개 색을 순환하게 하려면 어떻게 하나요?"},{"key":"cycleHue.answer","english":"Apply the same trick to `hue` as to position. When it leaves its valid range, flip `hueDirection`. The colour will then sweep up to the top of the spectrum and back down again on its own.","target":"위치에 썼던 방법을 `hue`에도 똑같이 적용하세요. hue가 유효 범위를 벗어나면 `hueDirection`을 반대로 바꿔요. 그러면 색이 스스로 스펙트럼의 끝까지 올라갔다가 다시 내려올 거예요."}]},{"name":"functions","rows":[{"key":"circle.description","english":"Draw a circle with its center at (centerX, centerY) with the given radius and color","target":"중심이 (centerX, centerY)이고 주어진 반지름과 색상을 가진 원을 그려요."},{"key":"circle.category","english":"Drawing Shapes","target":"도형 그리기"},{"key":"hsl.description","english":"Convert HSL color values (hue 0-360, saturation 0-100, lightness 0-100) to a hex color string","target":"HSL 색상 값(색조 0-360, 채도 0-100, 밝기 0-100)을 hex 색상 문자열로 변환해요."},{"key":"hsl.category","english":"Colors","target":"색상"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"모든 입력값은 숫자여야 해요"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"파랑은 0에서 255 사이여야 해요"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"x, y, 반지름 입력값은 숫자여야 해요"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"색상은 지시 사항에 명시된 이름이 있는 색상(\"orange\", \"blue\", \"white\" 등)이거나 #으로 시작하는 16진수 색상이어야 해요"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"이 연습 문제에서는 색상을 지정하지 않아야 해요"},{"key":"colorNotString","english":"Color must be a string","target":"색상은 문자열이어야 해요"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"x, y, rx, ry 입력값은 숫자여야 해요"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"초록은 0에서 255 사이여야 해요"},{"key":"heightPositive","english":"Height must be greater than 0","target":"높이는 0보다 커야 해요"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"색상은 0에서 360 사이여야 해요"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"명도는 0에서 100 사이여야 해요"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"x1, y1, x2, y2 입력값은 숫자여야 해요"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"x, y, 너비, 높이 입력값은 숫자여야 해요"},{"key":"redRange","english":"Red must be between 0 and 255","target":"빨강은 0에서 255 사이여야 해요"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"채도는 0에서 100 사이여야 해요"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"x1, y1, x2, y2, x3, y3 입력값은 숫자여야 해요"},{"key":"widthPositive","english":"Width must be greater than 0","target":"너비는 0보다 커야 해요"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"좌표 (${arg1}, ${arg2})에 너비 ${arg3}, 높이 ${arg4}, 색상 ${arg5}인 직사각형을 그렸어요"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"좌표 (${arg1}, ${arg2})에 너비 ${arg3}, 높이 ${arg4}인 직사각형을 그렸어요"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"세 점 (${arg1}, ${arg2}), (${arg3}, ${arg4}), (${arg5}, ${arg6})과 색상 ${arg7}으로 삼각형을 그렸어요"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"세 점 (${arg1}, ${arg2}), (${arg3}, ${arg4}), (${arg5}, ${arg6})으로 삼각형을 그렸어요"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"중심 좌표 (${arg1}, ${arg2})에 반지름 ${arg3}, 색상 ${arg4}인 원을 그렸어요"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"중심 좌표 (${arg1}, ${arg2})에 반지름 ${arg3}인 원을 그렸어요"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"중심 좌표 (${arg1}, ${arg2})에 가로 반지름 ${arg3}, 세로 반지름 ${arg4}, 색상 ${arg5}인 타원을 그렸어요"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"중심 좌표 (${arg1}, ${arg2})에 가로 반지름 ${arg3}, 세로 반지름 ${arg4}인 타원을 그렸어요"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"(${arg1}, ${arg2})에서 (${arg3}, ${arg4})까지 색상 ${arg5}인 선을 그렸어요"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"(${arg1}, ${arg2})에서 (${arg3}, ${arg4})까지 선을 그렸어요"},{"key":"clear","english":"cleared the canvas","target":"캔버스를 지웠어요"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"HSL 색상 (색상: ${arg1}, 채도: ${arg2}, 명도: ${arg3})을 16진수 문자열로 변환했어요"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"RGB 색상 (빨강: ${arg1}, 초록: ${arg2}, 파랑: ${arg3})을 16진수 문자열로 변환했어요"}]}]}]
---

이번 과제는 캔버스 위를 무작위로 튀어다니며 무지개를 그리는 공을 만드는 거예요.

완성된 결과는 대략 아래와 같은 모습이에요:

<img src="/static/images/exercise-assets/rainbow-ball/example.gif" alt="캔버스 위를 튀며 색깔 있는 자취를 남기는 무지개 공 애니메이션" style="width: 100%; max-width: 200px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

이번 연습 문제에서는 `Math.randomInt(min, max)`(주어진 최솟값과 최댓값 사이의 임의의 정수를 반환하는 함수) 함수를 사용할 수 있어요. 이 함수는 여러분이 지정한 `min`과 `max` 사이의 임의의 정수를 반환해요.

잠시 시간을 내서 이 문제를 어떻게 풀지 생각해 보세요. 문제 해결 과정이 이 연습 문제에서 가장 중요한 부분이에요. 그래서 천천히 생각하고, **아래 공식을 읽기 전에 아이디어를 적어 두세요.**

접근 방식을 어느 정도 생각했다면 계속 읽어 보세요. 하지만 충분히 고민하기 전에는 넘어가지 말아요!

## 공식

이 프로젝트는 공의 위치를 담당하는 변수와, 그 변수를 꾸준히 증가시키거나 감소시키는 구조로 이루어져 있어요. 그리고 공이 **어떻게** 움직일지 제어하고 특정 조건이 만족되면 값이 바뀌는 다른 변수들도 필요해요.

### 그리기

- 처음 그리는 원은 `(5, 5)` 위치에 있어야 해요.
- 모든 원은 반지름이 `10`이에요.
- 원의 색상은 HSL을 사용하고, 색조(hue)는 `100` (녹색), 채도(saturation)는 `80` (강렬한 색), 밝기(lightness)는 `50` (중간 밝기)로 시작해요.

### 애니메이션

- 처음에는 각 반복 회차마다 공을 오른쪽으로 `2`, 아래로 `1`만큼 이동해요.
- 색조(hue)는 매 회차마다 `1`씩 증가하다가 최댓값인 `360`에 도달하면 다시 감소하기 시작해요. 채도와 밝기는 변할 필요가 없어요.

### 튕기기

- 공이 캔버스 가장자리에 닿으면 방향을 바꿔야 해요. (방법을 모르겠다면 힌트를 확인해 보세요.)
- 좀 더 재미있게 만들려면 `Math.randomInt(min, max)` 함수를 사용해서 방향을 바꿔 보세요. 원하는 애니메이션 스타일이 나오도록 `min`(최솟값)과 `max`(최댓값)를 선택해요.

## 체크 통과 조건

이번 연습 문제에서는 꽤 자유롭게 만들 수 있어요. 다음 두 가지만 확인할게요:

- 처음 몇 개의 원이 올바르게 그려졌어요.
- 캔버스의 80% 이상이 그려졌어요.

이를 달성하기 위해 선택하는 숫자는 여러분 마음이에요. 아마 `500`에서 `1000`회 반복하는 repeat 블록을 사용하는 게 좋을 거예요.

## 단계별로 나누기…

이 연습 문제의 핵심은 한 번에 하나씩 해결하는 거예요:

1. 공이 움직이며 색이 변하게 만들기
2. 오른쪽 벽에 튕기게 만들기
3. 아래쪽 벽에 튕기게 만들기
4. 무작위로 튕기게 만들기
