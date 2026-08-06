---
lang: "zh-CN"
type: "exercise"
slug: "rainbow-ball"
title: "彩虹球"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/rainbow-ball"
en_md5: "9ce8ac697138ecf8e2f936dcd6c73059"
governance_sha: "c80036b"
content_version: "ae4f0a16d34e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"uniqueColoredCircles","english":"Expected at least 50 uniquely colored circles.","target":"预期至少有 50 个颜色不同的圆。"},{"key":"uniquePositionedCircles","english":"Expected at least 30 different positions.","target":"预期至少有 30 个不同的位置。"},{"key":"canvasCoverage","english":"The ball didn't paint enough of the canvas. It should bounce around until over 80% is covered.","target":"球没有覆盖足够的画布区域。它应该弹跳移动，直到超过 80% 的画布被涂上颜色。"},{"key":"hueBounced","english":"The hue didn't hit 360 then climb back down again.","target":"色调没有达到 360 然后再次回落。"},{"key":"hueSweep","english":"The rainbow trail didn't sweep through all the colours.","target":"彩虹轨迹没有扫过所有颜色。"}]},{"name":"tasks","rows":[{"key":"rainbowBall.name","english":"Create a bouncing rainbow ball","target":"创建一个弹跳的彩虹球"},{"key":"rainbowBall.description","english":"Create a ball that bounces around the canvas, leaving a trail of colorful circles that cycle through rainbow colors.","target":"创建一个在画布上弹跳的球，留下一串循环遍历彩虹颜色的彩色圆。"}]},{"name":"scenarios","rows":[{"key":"rainbowBall.name","english":"Rainbow ball","target":"彩虹球"},{"key":"rainbowBall.description","english":"Draw a rainbow trail from different circles.","target":"用不同的圆绘制出一条彩虹轨迹。"}]},{"name":"hints","rows":[{"key":"stateToTrack.question","english":"What state do I need to track?","target":"我需要跟踪哪些状态？"},{"key":"stateToTrack.answer","english":"The ball's position, and how it's moving. Keep those separate: one variable for *where* the ball is, another for *how it's changing*. The same idea applies to the hue: you need its current value plus a direction it's heading in.","target":"球的位置，以及它的移动方式。把它们分开：一个变量表示球的*位置*，另一个变量表示它的*变化方式*。同样的思路也适用于色调：你需要记录它的当前值和一个它正在前进的方向。"},{"key":"moveAndShift.question","english":"How do I make the ball move and the colour shift each frame?","target":"如何让球移动，并让颜色在每一帧中变化？"},{"key":"moveAndShift.answer","english":"At the start of each loop iteration, add your direction variables to the position and to `hue`. That way the direction variables fully control the motion. Flipping their sign or changing their size instantly changes how the ball moves and how the colour shifts.","target":"在每次循环迭代开始时，将方向变量加到位置和`hue`上。这样方向变量就能完全控制运动。改变它们的符号或大小，就能即时改变球的移动方式和颜色的变化方式。"},{"key":"velocityTip.question","english":"I can't work out how to do this. Any tips?","target":"我想不出该怎么做。有什么提示吗？"},{"key":"velocityTip.answer","english":"What are these numbers that `x` and `y` change by? They're a mixture of speed (the size of the number) and direction (whether it moves the ball forward or back). So `2` would be a speed of 2 moving to the right or bottom. And `-3` would be a speed of 3 moving to the left or top. A number that is a speed and a distance is called a **velocity** (time to update your variable names?) So when you want to change the direction of the ball, you change the sign of the velocity, from positive to negative or vice versa.","target":"`x` 和 `y` 的变化量是什么？它们是速率（数字的大小）和方向（球是向前还是向后移动）的组合。所以 `2` 表示速率为 2，向右或向下移动。而 `-3` 表示速率为 3，向左或向上移动。一个既有速率又有方向的值叫做**速度**（velocity）（是时候更新你的变量名了？）所以，当你想改变球的方向时，只要改变速度的符号，从正变负或从负变正。"},{"key":"bounceOffEdges.question","english":"How do I make the ball bounce off the edges?","target":"如何让球从边缘弹开？"},{"key":"bounceOffEdges.answer","english":"After updating position, check whether `x` or `y` has crossed the canvas boundary. When it has, reverse the direction variable for that axis. The instructions specify the canvas range.","target":"在更新位置后，检查 `x` 或 `y` 是否越过了画布边界。如果越过了，就反转那个轴的方向变量。指令中指定了画布的范围。"},{"key":"randomBounceSpeed.question","english":"How do I give the bounce a random new speed each time?","target":"如何让每次弹跳获得一个随机的新速度？"},{"key":"randomBounceSpeed.answer","english":"When the ball hits an edge, set the direction variable using `Math.randomInt(min, max)` instead of just flipping its sign. Pick a positive range when bouncing off the left or top, and a negative range when bouncing off the right or bottom.","target":"当球碰到边缘时，使用 `Math.randomInt(min, max)` 来设置方向变量，而不是仅仅反转它的符号。当球从左边缘或上边缘弹开时，选择一个正数范围；当从右边缘或下边缘弹开时，选择一个负数范围。"},{"key":"cycleHue.question","english":"How do I cycle the hue through the rainbow?","target":"如何让色调在彩虹颜色中循环？"},{"key":"cycleHue.answer","english":"Apply the same trick to `hue` as to position. When it leaves its valid range, flip `hueDirection`. The colour will then sweep up to the top of the spectrum and back down again on its own.","target":"对 `hue` 使用与位置相同的技巧。当它超出有效范围时，反转 `hueDirection`。颜色就会自动扫描到光谱的顶端，然后再回落。"}]},{"name":"functions","rows":[{"key":"circle.description","english":"Draw a circle with its center at (centerX, centerY) with the given radius and color","target":"以 (centerX, centerY) 为圆心，以给定的半径和颜色绘制一个圆"},{"key":"circle.category","english":"Drawing Shapes","target":"绘制形状"},{"key":"hsl.description","english":"Convert HSL color values (hue 0-360, saturation 0-100, lightness 0-100) to a hex color string","target":"将 HSL 颜色值（色调 0-360，饱和度 0-100，亮度 0-100）转换为十六进制颜色字符串"},{"key":"hsl.category","english":"Colors","target":"颜色"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"所有输入必须是数字"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"蓝色必须在 0 到 255 之间"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"x、y 和半径输入必须是数字"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"颜色必须是指令中指定的命名颜色（如 \"orange\"、\"blue\"、\"white\" 等），或以 # 开头的十六进制颜色"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"此项练习不应指定颜色"},{"key":"colorNotString","english":"Color must be a string","target":"颜色必须是字符串"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"x、y、rx 和 ry 输入必须是数字"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"绿色必须在 0 到 255 之间"},{"key":"heightPositive","english":"Height must be greater than 0","target":"高度必须大于 0"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"色相必须在 0 到 360 之间"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"亮度必须在 0 到 100 之间"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"x1、y1、x2 和 y2 输入必须是数字"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"x、y、宽度和高度输入必须是数字"},{"key":"redRange","english":"Red must be between 0 and 255","target":"红色必须在 0 到 255 之间"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"饱和度必须在 0 到 100 之间"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"x1、y1、x2、y2、x3 和 y3 输入必须是数字"},{"key":"widthPositive","english":"Width must be greater than 0","target":"宽度必须大于 0"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"在坐标 (${arg1}, ${arg2}) 处绘制了一个矩形，宽度为 ${arg3}，高度为 ${arg4}，颜色为 ${arg5}"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"在坐标 (${arg1}, ${arg2}) 处绘制了一个矩形，宽度为 ${arg3}，高度为 ${arg4}"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"绘制了一个三角形，三个顶点为：(${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})，颜色为 ${arg7}"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"绘制了一个三角形，三个顶点为：(${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"以 (${arg1}, ${arg2}) 为圆心绘制了一个圆，半径为 ${arg3}，颜色为 ${arg4}"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"以 (${arg1}, ${arg2}) 为圆心绘制了一个圆，半径为 ${arg3}"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"以 (${arg1}, ${arg2}) 为中心绘制了一个椭圆，水平半径为 ${arg3}，垂直半径为 ${arg4}，颜色为 ${arg5}"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"以 (${arg1}, ${arg2}) 为中心绘制了一个椭圆，水平半径为 ${arg3}，垂直半径为 ${arg4}"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"绘制了一条从 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4}) 的线段，颜色为 ${arg5}"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"绘制了一条从 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4}) 的线段"},{"key":"clear","english":"cleared the canvas","target":"清空了画布"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"将 HSL 颜色（色相：${arg1}，饱和度：${arg2}，亮度：${arg3}）转换为十六进制字符串"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"将 RGB 颜色（红色：${arg1}，绿色：${arg2}，蓝色：${arg3}）转换为十六进制字符串"}]}]}]
---

你的任务是创建一个球，让它在画布上随机弹跳，并在身后画出彩虹般的轨迹。

效果应该类似下面这样：

<img src="/static/images/exercise-assets/rainbow-ball/example.gif" alt="动画彩虹弹跳球在画布上弹跳，留下彩色轨迹" style="width: 100%; max-width: 200px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

作为本次练习的一部分，你会用到一个 `Math.randomInt(min, max)` 函数（返回一个介于你给定的最小值和最大值之间的随机整数）。

花几分钟仔细想想如何解决这个问题。这是练习中最有价值的部分，所以请慢慢来，**在阅读下面的公式之前，先写下你的思路。**

当你有了大致思路后，再继续往下读。但在花时间思考之前，不要往下读！

## 公式

这个项目的核心在于：有一组变量负责球的位置，它们会逐渐增大或减小；还有另一组变量控制着球的**移动方式**，并在满足特定条件时改变。

### 绘制

- 绘制的第一个圆应位于 `(5, 5)`。
- 所有圆的半径应为 `10`。
- 圆的颜色应使用 HSL，起始色调为 `100`（绿色），饱和度为 `80`（鲜艳颜色），亮度为 `50`（中等亮度）。

### 动画

- 一开始，在每次迭代中，球应向右移动 `2`，向下移动 `1`。
- 色调每次增加 `1`，直到达到最大值（`360`），然后开始减小。饱和度和亮度不需要改变。

### 弹跳

- 当球碰到画布边缘时，它应该改变方向。（如果不知道怎么做，可以查看提示。）
- 为了让事情更有趣，你应该使用 `Math.randomInt(min, max)` 函数来改变方向。选择能产生你想要的动画风格的 `min`（最小值）和 `max`（最大值）。

## 通过检查

在这个练习中，我们给了你很大的自由度。我们会检查以下内容：

- 前几个圆是正确的。
- 画布上超过 80% 的区域被涂上颜色。

为实现这一点，你选择的数字由你决定。你可能需要一个 `repeat` 循环块，让它迭代 `500` 到 `1000` 次。

## 拆解它……

这个练习的关键是一次只做一件事：

1. 让球在移动时改变颜色
2. 让它碰到右侧后反弹
3. 让它碰到底部后反弹
4. 让它随机反弹
