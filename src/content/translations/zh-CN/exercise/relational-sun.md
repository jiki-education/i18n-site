---
lang: "zh-CN"
type: "exercise"
slug: "relational-sun"
title: "关系太阳"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/relational-sun"
en_md5: "9ff58522efc81e1fab45e94feaa23998"
governance_sha: "c80036b"
content_version: "49a9c8a636b5"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"wrongPosition","english":"The sun is either in the wrong place or the wrong size. Check your `sunX` and `sunY` calculations, and make sure you're passing `radius` to `circle`.","target":"太阳的位置或大小不正确。请检查 `sunX` 和 `sunY` 的计算，并确保将 `radius` 作为参数传入 `circle`。"},{"key":"notResponsive","english":"Your code doesn't scale correctly when `gap` is {{gap}} and `radius` is {{radius}}. `sunX` and `sunY` should be derived from `gap` and `radius`, not hardcoded numbers.","target":"当 `gap` 为 {{gap}}、`radius` 为 {{radius}} 时，你的代码无法正确缩放。`sunX` 和 `sunY` 应基于 `gap` 和 `radius` 计算得出，而非硬编码数字。"}]},{"name":"tasks","rows":[{"key":"positionSun.name","english":"Position the sun","target":"放置太阳"},{"key":"positionSun.description","english":"Derive `sunX` and `sunY` from `canvasSize`, `gap`, and `radius` so the sun scales correctly.","target":"基于 `canvasSize`、`gap` 和 `radius` 推导出 `sunX` 和 `sunY`，使太阳正确缩放。"}]},{"name":"scenarios","rows":[{"key":"positionSun.name","english":"Position the sun","target":"放置太阳"},{"key":"positionSun.description","english":"Derive the sun's position from `gap` and `radius` so it scales.","target":"基于 `gap` 和 `radius` 推导出太阳的位置，使其正确缩放。"}]},{"name":"hints","rows":[{"key":"sunXPosition.question","english":"How should I think about the sun's x position?","target":"我该如何考虑太阳的 x 坐标？"},{"key":"sunXPosition.answer","english":"Picture the right edge of the canvas. The edge of the sun sits `gap` to the left of that edge. The *centre* of the sun is one more radius further in than that.","target":"想象画布的右边缘。太阳的边缘在该边缘左侧 `gap` 的位置。太阳的*中心*则再往左一个 `radius` 的距离。"},{"key":"sunYPosition.question","english":"How should I think about the sun's y position?","target":"我该如何考虑太阳的 y 坐标？"},{"key":"sunYPosition.answer","english":"It's the same idea as the x position, but measured down from the top edge of the canvas instead of in from the right edge.","target":"思路与 x 坐标相同，只是从画布的上边缘向下测量，而非从右边缘向左。"},{"key":"whyNotHardcode.question","english":"Why can't I just write the numbers directly?","target":"为什么我不能直接写数字？"},{"key":"whyNotHardcode.answer","english":"If you hardcode `sunX` and `sunY`, the sun will stay in one place when `gap` or `radius` change. Building them from `gap` and `radius` keeps the sun in the corner no matter what values you choose.","target":"如果你硬编码 `sunX` 和 `sunY`，当 `gap` 或 `radius` 改变时，太阳会停留在原地。而根据 `gap` 和 `radius` 计算它们，则无论你选择什么值，太阳都会始终待在角落。"}]},{"name":"functions","rows":[{"key":"circle.description","english":"Draw a circle centered at (centerX, centerY) with the given radius and color","target":"以 (centerX, centerY) 为中心，使用指定的半径和颜色绘制一个圆形。"},{"key":"circle.category","english":"Drawing Shapes","target":"绘制形状"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"所有输入必须是数字"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"蓝色必须在 0 到 255 之间"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"x、y 和半径输入必须是数字"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"颜色必须是指令中指定的命名颜色（如 \"orange\"、\"blue\"、\"white\" 等），或以 # 开头的十六进制颜色"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"此项练习不应指定颜色"},{"key":"colorNotString","english":"Color must be a string","target":"颜色必须是字符串"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"x、y、rx 和 ry 输入必须是数字"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"绿色必须在 0 到 255 之间"},{"key":"heightPositive","english":"Height must be greater than 0","target":"高度必须大于 0"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"色相必须在 0 到 360 之间"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"亮度必须在 0 到 100 之间"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"x1、y1、x2 和 y2 输入必须是数字"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"x、y、宽度和高度输入必须是数字"},{"key":"redRange","english":"Red must be between 0 and 255","target":"红色必须在 0 到 255 之间"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"饱和度必须在 0 到 100 之间"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"x1、y1、x2、y2、x3 和 y3 输入必须是数字"},{"key":"widthPositive","english":"Width must be greater than 0","target":"宽度必须大于 0"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"在坐标 (${arg1}, ${arg2}) 处绘制了一个矩形，宽度为 ${arg3}，高度为 ${arg4}，颜色为 ${arg5}"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"在坐标 (${arg1}, ${arg2}) 处绘制了一个矩形，宽度为 ${arg3}，高度为 ${arg4}"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"绘制了一个三角形，三个顶点为：(${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})，颜色为 ${arg7}"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"绘制了一个三角形，三个顶点为：(${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"以 (${arg1}, ${arg2}) 为圆心绘制了一个圆，半径为 ${arg3}，颜色为 ${arg4}"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"以 (${arg1}, ${arg2}) 为圆心绘制了一个圆，半径为 ${arg3}"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"以 (${arg1}, ${arg2}) 为中心绘制了一个椭圆，水平半径为 ${arg3}，垂直半径为 ${arg4}，颜色为 ${arg5}"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"以 (${arg1}, ${arg2}) 为中心绘制了一个椭圆，水平半径为 ${arg3}，垂直半径为 ${arg4}"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"绘制了一条从 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4}) 的线段，颜色为 ${arg5}"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"绘制了一条从 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4}) 的线段"},{"key":"clear","english":"cleared the canvas","target":"清空了画布"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"将 HSL 颜色（色相：${arg1}，饱和度：${arg2}，亮度：${arg3}）转换为十六进制字符串"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"将 RGB 颜色（红色：${arg1}，绿色：${arg2}，蓝色：${arg3}）转换为十六进制字符串"}]}]}]
---

在这个练习中，你的任务是使用算术和变量将太阳放在天空的右上角。关键约束是：无论太阳有多大，它的边缘与画布边缘之间始终应有一个固定的**间距**。

我们在文件顶部为你预设了四个变量（英语：_variable_）：

- `canvasSize`（画布尺寸）：画布的尺寸，值为 `100`。
- `color`（颜色）：设为 `"yellow"`。
- `gap`（间距）：太阳边缘与画布上边缘和右边缘的距离。
- `radius`（半径）：太阳的半径。

### 两步过程

要解决这个练习，请做两件事：

#### 1. 定义派生变量

定义 `sunX`（太阳 x 坐标）和 `sunY`（太阳 y 坐标）变量，使用 `gap`、`radius` 和 `canvasSize` 将太阳的中心设置在右上角。

#### 2. 绘制圆形

使用 `sunX`、`sunY`、`radius` 和 `color` 绘制一个圆形。

## 灵活性

默认情况下，`gap` 设为 10，`radius` 设为 15。首先用这些值完成练习，这样你就可以利用背景来对齐位置。当代码正确时，你会看到圆形出现在页面的正确位置上。

但是，要通过练习，你不能只是“硬编码”数值（即直接设为一个固定的数字），`sunX` 和 `sunY` 必须是由其他变量参与的计算表达式。

通过练习后，点击“Tidy my code”，然后尝试更改文件顶部的 `gap` 和 `radius` 的值，重新运行代码，看看太阳在保持角落位置的同时如何变大或移动。

完成后，你可以点击右上角的“Dashboard”照常继续。
