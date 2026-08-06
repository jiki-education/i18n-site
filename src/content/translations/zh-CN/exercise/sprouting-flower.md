---
lang: "zh-CN"
type: "exercise"
slug: "sprouting-flower"
title: "生长的花"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/sprouting-flower"
en_md5: "c90a40fd93e8b73b6b77a3bb9591f201"
governance_sha: "c80036b"
content_version: "34c752b72293"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"firstFlowerHeadWrong","english":"The flower head on the first frame isn't correct.","target":"第一帧的花不正确。"},{"key":"finalFlowerHeadWrong","english":"The flower head on the last frame isn't correct.","target":"最后一帧的花不正确。"},{"key":"firstPistilWrong","english":"The pistil on the first frame isn't correct.","target":"第一帧的花蕊不正确。"},{"key":"finalPistilWrong","english":"The pistil on the last frame isn't correct.","target":"最后一帧的花蕊不正确。"},{"key":"firstStemWrong","english":"The stem on the first frame isn't correct.","target":"第一帧的茎不正确。"},{"key":"finalStemWrong","english":"The stem on the last frame isn't correct.","target":"最后一帧的茎不正确。"},{"key":"firstLeftLeafWrong","english":"The left leaf on the first frame isn't correct.","target":"第一帧的左边的叶子不正确。"},{"key":"finalLeftLeafWrong","english":"The left leaf on the last frame isn't correct.","target":"最后一帧的左边的叶子不正确。"},{"key":"firstRightLeafWrong","english":"The right leaf on the first frame isn't correct.","target":"第一帧的右边的叶子不正确。"},{"key":"finalRightLeafWrong","english":"The right leaf on the last frame isn't correct.","target":"最后一帧的右边的叶子不正确。"}]},{"name":"tasks","rows":[{"key":"drawScene.name","english":"Draw the scene","target":"绘制场景"},{"key":"drawScene.description","english":"Make the flower sprout. Take it one step at a time!","target":"让花生长出来。一次只做一步！"}]},{"name":"scenarios","rows":[{"key":"drawSproutingFlower.name","english":"Make the flower sprout","target":"让花生长出来"},{"key":"drawSproutingFlower.description","english":"Take it one step at a time!","target":"一步一步来！"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start when laying out the scene?","target":"布局场景时，我应该从哪里开始？"},{"key":"whereToStart.answer","english":"Pick one central point. The centre of the flower is a good anchor. The stem, pistil, and leaves can all be derived from it. That way the whole flower stays connected as it animates.","target":"选择一个中心点。花的中心就是一个很好的锚点。茎、花蕊和叶子都可以从这个中心点派生出来，这样整个花在动画过程中就会保持连接。"},{"key":"growEachIteration.question","english":"How do I make the flower rise and grow each iteration?","target":"如何让花在每次迭代中上升并变大？"},{"key":"growEachIteration.answer","english":"At the very top of the loop body, before any drawing, update `flowerCenterY` and `flowerRadius` to their new values for this frame. The instructions give the amounts. What matters is updating *before* the draw calls, not after.","target":"在循环体的最顶部，进行任何绘制之前，将 `flowerCenterY` 和 `flowerRadius` 更新为当前帧的新值。指令中给出了具体数值。关键是要在绘制*之前*更新，而不是之后。"},{"key":"stemAttached.question","english":"How do I keep the stem attached to the flower as it moves up?","target":"当花向上移动时，如何让茎保持连接？"},{"key":"stemAttached.answer","english":"Don't give the stem a fixed top. Its top *is* `flowerCenterY`. Its bottom is the ground. So its height is the distance between them. Its width can then be derived from that height.","target":"不要给茎一个固定的顶部。它的顶部*就是* `flowerCenterY`。底部是地面。所以它的高度是这两者之间的距离。然后可以根据这个高度计算出宽度。"},{"key":"leafSizing.question","english":"How do I size the leaves so they grow with the flower?","target":"如何设置叶子的大小，让它们和花一起生长？"},{"key":"leafSizing.answer","english":"The leaves' `radiusX` and `radiusY` are fractions of `flowerRadius`. That way they scale together. Anchor their vertical position to the stem, not to a fixed canvas Y, so they ride up with the flower.","target":"叶子的 `radiusX` 和 `radiusY` 是 `flowerRadius` 的分数。这样它们会一起缩放。把它们的垂直位置锚定在茎上，而不是固定的画布 Y 坐标，这样它们就会随着花一起上升。"},{"key":"flowerNeverChanges.question","english":"My flower draws once and never changes. What's wrong?","target":"我的花绘制一次就不再改变了。哪里出错了？"},{"key":"flowerNeverChanges.answer","english":"You're probably setting the initial values once before the loop but not updating them *inside* the loop. The loop body has to mutate your variables every iteration, before the draw calls.","target":"你可能只在循环之前设置了一次初始值，但没有*在循环内部*更新它们。循环体必须在每次迭代中，在绘制之前，修改变量的值。"},{"key":"firstFlowerCoords.question","english":"Can you give me the coordinates for the first flower to check against?","target":"能给我第一朵花的坐标让我核对吗？"},{"key":"firstFlowerCoords.answer","english":"On the first iteration, the shapes should be:\n\n- Flower: `circle(50, 89, 0.4)`\n- Pistil: `circle(50, 89, 0.1)`\n- Stem: `rectangle(49.95, 89, 0.1, 1)`\n- Left leaf: `ellipse(49.75, 89.5, 0.2, 0.08)`\n- Right leaf: `ellipse(50.25, 89.5, 0.2, 0.08)`\n\nToggle the info switch on the scrubber bar to see your own values at that frame.","target":"在第一次迭代时，各形状应为：\n\n- 花：`circle(50, 89, 0.4)`\n- 花蕊：`circle(50, 89, 0.1)`\n- 茎：`rectangle(49.95, 89, 0.1, 1)`\n- 左边的叶子：`ellipse(49.75, 89.5, 0.2, 0.08)`\n- 右边的叶子：`ellipse(50.25, 89.5, 0.2, 0.08)`\n\n切换进度条上的信息开关，即可查看该帧你自己的值。"},{"key":"finalFlowerCoords.question","english":"Can you give me the coordinates for the final flower to check against?","target":"能给我最后一朵花的坐标让我核对吗？"},{"key":"finalFlowerCoords.answer","english":"On the last iteration, the shapes should be:\n\n- Flower: `circle(50, 30, 24)`\n- Pistil: `circle(50, 30, 6)`\n- Stem: `rectangle(47, 30, 6, 60)`\n- Left leaf: `ellipse(35, 60, 12, 4.8)`\n- Right leaf: `ellipse(65, 60, 12, 4.8)`\n\nToggle the info switch on the scrubber bar to see your own values at that frame.","target":"在最后一次迭代时，各形状应为：\n\n- 花：`circle(50, 30, 24)`\n- 花蕊：`circle(50, 30, 6)`\n- 茎：`rectangle(47, 30, 6, 60)`\n- 左边的叶子：`ellipse(35, 60, 12, 4.8)`\n- 右边的叶子：`ellipse(65, 60, 12, 4.8)`\n\n切换进度条上的信息开关，即可查看该帧你自己的值。"}]},{"name":"functions","rows":[{"key":"rectangle.description","english":"Draws a **rectangle** at position (left, top) with the specified width, height, and color. The position represents the top-left corner of the rectangle.","target":"在 (left, top) 位置绘制一个**矩形**，宽度、高度和颜色由参数指定。这个位置代表矩形的左上角。"},{"key":"rectangle.category","english":"Drawing Shapes","target":"绘制形状"},{"key":"circle.description","english":"Draws a **circle** at center position (centerX, centerY) with the specified radius and color.","target":"在 (centerX, centerY) 中心位置绘制一个**圆形**，半径和颜色由参数指定。"},{"key":"circle.category","english":"Drawing Shapes","target":"绘制形状"},{"key":"ellipse.description","english":"Draws an **ellipse** at center position (centerX, centerY) with the specified radiusX, radiusY, and color.","target":"在 (centerX, centerY) 中心位置绘制一个**椭圆**，radiusX、radiusY 和颜色由参数指定。"},{"key":"ellipse.category","english":"Drawing Shapes","target":"绘制形状"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"所有输入必须是数字"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"蓝色必须在 0 到 255 之间"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"x、y 和半径输入必须是数字"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"颜色必须是指令中指定的命名颜色（如 \"orange\"、\"blue\"、\"white\" 等），或以 # 开头的十六进制颜色"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"此项练习不应指定颜色"},{"key":"colorNotString","english":"Color must be a string","target":"颜色必须是字符串"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"x、y、rx 和 ry 输入必须是数字"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"绿色必须在 0 到 255 之间"},{"key":"heightPositive","english":"Height must be greater than 0","target":"高度必须大于 0"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"色相必须在 0 到 360 之间"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"亮度必须在 0 到 100 之间"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"x1、y1、x2 和 y2 输入必须是数字"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"x、y、宽度和高度输入必须是数字"},{"key":"redRange","english":"Red must be between 0 and 255","target":"红色必须在 0 到 255 之间"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"饱和度必须在 0 到 100 之间"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"x1、y1、x2、y2、x3 和 y3 输入必须是数字"},{"key":"widthPositive","english":"Width must be greater than 0","target":"宽度必须大于 0"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"在坐标 (${arg1}, ${arg2}) 处绘制了一个矩形，宽度为 ${arg3}，高度为 ${arg4}，颜色为 ${arg5}"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"在坐标 (${arg1}, ${arg2}) 处绘制了一个矩形，宽度为 ${arg3}，高度为 ${arg4}"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"绘制了一个三角形，三个顶点为：(${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})，颜色为 ${arg7}"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"绘制了一个三角形，三个顶点为：(${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"以 (${arg1}, ${arg2}) 为圆心绘制了一个圆，半径为 ${arg3}，颜色为 ${arg4}"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"以 (${arg1}, ${arg2}) 为圆心绘制了一个圆，半径为 ${arg3}"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"以 (${arg1}, ${arg2}) 为中心绘制了一个椭圆，水平半径为 ${arg3}，垂直半径为 ${arg4}，颜色为 ${arg5}"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"以 (${arg1}, ${arg2}) 为中心绘制了一个椭圆，水平半径为 ${arg3}，垂直半径为 ${arg4}"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"绘制了一条从 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4}) 的线段，颜色为 ${arg5}"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"绘制了一条从 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4}) 的线段"},{"key":"clear","english":"cleared the canvas","target":"清空了画布"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"将 HSL 颜色（色相：${arg1}，饱和度：${arg2}，亮度：${arg3}）转换为十六进制字符串"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"将 RGB 颜色（红色：${arg1}，绿色：${arg2}，蓝色：${arg3}）转换为十六进制字符串"}]}]}]
---

你的任务是制作一朵花，在 `60` 次迭代中生长出来。

动画效果大致如下。

<img src="/static/images/exercise-assets/sprouting-flower/frames.webp" alt="展示一朵花在 60 次迭代中从地面生长出来的帧" style="width: 100%; max-width: 600px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

这个练习的关键在于建立不同元素之间的关系。这是编程中的一项关键技能。

**在继续阅读更多指令之前**，先花几分钟从概念上思考一下如何实现。把你认为需要遵循的步骤写在一张纸上。

**一旦你有了满意的解决方案**（或者已经放弃），**向下滚动**来查看指令。

---

## 如何解决

这里的关键元素是花的中心点。其他所有东西都可以从中心点计算出来。在循环的每次迭代中，中心点应该向上移动 `1`（在绘制之前）。

其他一些你需要知道的事情：

- 画布的左上角是 `0,0`，右下角是 `100,100`。
- 花的半径从 `0` 开始。每次迭代（在绘制之前）应该增加 `0.4`。
- 花蕊（花中间黄色的部分）的半径从 `0` 开始。每次迭代（在绘制之前）应该增加 `0.1`。
- 茎应该从花的中心开始，一直延伸到地面。
- 茎的宽度是茎的高度的 10%（所以 `stemHeight / 10`（茎的高度除以 10））。
- 所有东西都在水平轴上居中。
- 叶子紧贴着茎的两侧。
- 叶子位于茎的一半位置。
- 叶子的 `radiusX`（水平半径）是花半径的 50%。
- 叶子的 `radiusY`（垂直半径）是花半径的 20%。
- 花朵的颜色可以是 `"red"` 或 `"pink"`，随你喜欢。花蕊（花的中心）应该是 `"yellow"`。草地应该是 `"green"`。背景应该是 `"skyblue"`。

**至关重要**的一点是一次只做一件事：

- 先画出粉色的花，让它向上移动。
- 然后让它生长。
- 添加较小的黄色花蕊。
- 添加茎。
- 添加左边的叶子。
- 添加右边的叶子。

使用进度条滚动代码来找出哪里出错了。

### 这是一个有难度的练习

这是一个具有挑战性的练习。慢慢来。如果你真的卡住了，寻求帮助，并记得告诉我们很多信息：哪里出错了，以及你为什么认为是这个原因。

如果你不清楚发生了什么，使用进度条（左下角的播放条）来检查变量的值。点击小开关按钮查看每一行的信息。

记住，学习在于挣扎。每当你犯错并解决了它，你都在成为一个程序员。最终一切都会变得容易。继续前进吧。
