---
lang: "zh-CN"
type: "exercise"
slug: "relational-snowman"
title: "关联雪人"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/relational-snowman"
en_md5: "957fea62970d6c37351ce3908df01938"
governance_sha: "c80036b"
content_version: "e26b8f588b21"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"base","english":"The base (bottom) circle is either in the wrong place or the wrong size. Check `baseRadius` and `baseY`.","target":"底座（底部的）圆形要么位置错误，要么大小错误。请检查 `baseRadius` 和 `baseY`。"},{"key":"body","english":"The body (middle) circle is either in the wrong place or the wrong size. Check `bodyRadius` and `bodyY`.","target":"身体（中间的）圆形要么位置错误，要么大小错误。请检查 `bodyRadius` 和 `bodyY`。"},{"key":"head","english":"The head (top) circle is either in the wrong place or the wrong size. Check `headRadius` and `headY`.","target":"头部（顶部的）圆形要么位置错误，要么大小错误。请检查 `headRadius` 和 `headY`。"},{"key":"notResponsive","english":"Your code doesn't scale correctly when `size` is {{size}}. Every radius and y position should be derived from `size`.","target":"当 `size` 为 {{size}} 时，你的代码没有正确缩放。每个半径和 y 坐标都应该从 `size` 推导出来。"}]},{"name":"tasks","rows":[{"key":"buildRelationalSnowman.name","english":"Build the relational snowman","target":"搭建关联雪人"},{"key":"buildRelationalSnowman.description","english":"Derive all sizes and positions from `size` so the snowman scales correctly.","target":"从 `size` 推导出所有大小和位置，以便雪人能够正确缩放。"}]},{"name":"scenarios","rows":[{"key":"buildRelationalSnowman.name","english":"Build the relational snowman","target":"搭建关联雪人"},{"key":"buildRelationalSnowman.description","english":"Derive every radius and y position from `size`.","target":"从 `size` 推导出每个半径和 y 坐标。"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start?","target":"我应该从哪里开始？"},{"key":"whereToStart.answer","english":"Start with the base, because it's the only circle anchored to anything fixed (the bottom of the canvas). Once you know `baseY`, you can stack the body on top of it, and then the head on top of the body.","target":"从底座开始，因为它是唯一锚定在一个固定位置（画布底部）的圆形。一旦你知道了 `baseY`，你就可以把身体叠放在它上面，然后把头部叠放在身体上面。"},{"key":"baseSits.question","english":"How do I work out where the base sits?","target":"如何确定底座的位置？"},{"key":"baseSits.answer","english":"The bottom edge of the base sits `size` above the ground (Y=100). The center of the base is one base-radius further up from its bottom edge.","target":"底座的底边位于地面（Y=100）上方 `size` 处。底座圆心在其底边之上再往上一个底座半径的距离。"},{"key":"stackBody.question","english":"How do I stack the body on the base?","target":"如何把身体叠放在底座上？"},{"key":"stackBody.answer","english":"When two circles touch with one directly above the other, the distance between their centers equals the sum of their two radii.","target":"当两个圆相切，其中一个直接位于另一个上方时，它们圆心之间的距离等于两个半径之和。"},{"key":"head.question","english":"What about the head?","target":"那头部呢？"},{"key":"head.answer","english":"The head sits on the body in exactly the same way as the body sits on the base.","target":"头部与身体的关系，和身体与底座的关系完全一样。"},{"key":"whyDeriveFromSize.question","english":"Why must everything be derived from `size`?","target":"为什么所有内容都必须从 `size` 推导？"},{"key":"whyDeriveFromSize.answer","english":"If you hardcode a number, changing `size` will leave gaps or overlaps between the circles. Using formulas keeps everything in proportion.","target":"如果你直接写死一个数字，那么修改 `size` 会在圆之间留下间隙或造成重叠。使用公式能让所有部分保持比例。"}]},{"name":"functions","rows":[{"key":"circle.description","english":"Draw a circle centered at (centerX, centerY) with the given radius and color","target":"以 (centerX, centerY) 为圆心，用指定的半径和颜色画一个圆。"},{"key":"circle.category","english":"Drawing Shapes","target":"绘制形状"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"所有输入必须是数字"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"蓝色必须在 0 到 255 之间"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"x、y 和半径输入必须是数字"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"颜色必须是指令中指定的命名颜色（如 \"orange\"、\"blue\"、\"white\" 等），或以 # 开头的十六进制颜色"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"此项练习不应指定颜色"},{"key":"colorNotString","english":"Color must be a string","target":"颜色必须是字符串"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"x、y、rx 和 ry 输入必须是数字"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"绿色必须在 0 到 255 之间"},{"key":"heightPositive","english":"Height must be greater than 0","target":"高度必须大于 0"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"色相必须在 0 到 360 之间"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"亮度必须在 0 到 100 之间"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"x1、y1、x2 和 y2 输入必须是数字"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"x、y、宽度和高度输入必须是数字"},{"key":"redRange","english":"Red must be between 0 and 255","target":"红色必须在 0 到 255 之间"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"饱和度必须在 0 到 100 之间"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"x1、y1、x2、y2、x3 和 y3 输入必须是数字"},{"key":"widthPositive","english":"Width must be greater than 0","target":"宽度必须大于 0"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"在坐标 (${arg1}, ${arg2}) 处绘制了一个矩形，宽度为 ${arg3}，高度为 ${arg4}，颜色为 ${arg5}"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"在坐标 (${arg1}, ${arg2}) 处绘制了一个矩形，宽度为 ${arg3}，高度为 ${arg4}"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"绘制了一个三角形，三个顶点为：(${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})，颜色为 ${arg7}"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"绘制了一个三角形，三个顶点为：(${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"以 (${arg1}, ${arg2}) 为圆心绘制了一个圆，半径为 ${arg3}，颜色为 ${arg4}"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"以 (${arg1}, ${arg2}) 为圆心绘制了一个圆，半径为 ${arg3}"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"以 (${arg1}, ${arg2}) 为中心绘制了一个椭圆，水平半径为 ${arg3}，垂直半径为 ${arg4}，颜色为 ${arg5}"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"以 (${arg1}, ${arg2}) 为中心绘制了一个椭圆，水平半径为 ${arg3}，垂直半径为 ${arg4}"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"绘制了一条从 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4}) 的线段，颜色为 ${arg5}"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"绘制了一条从 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4}) 的线段"},{"key":"clear","english":"cleared the canvas","target":"清空了画布"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"将 HSL 颜色（色相：${arg1}，饱和度：${arg2}，亮度：${arg3}）转换为十六进制字符串"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"将 RGB 颜色（红色：${arg1}，绿色：${arg2}，蓝色：${arg3}）转换为十六进制字符串"}]}]}]
---

在本练习中，我们将再次搭建一个雪人。与上一练习类似，我们的目的是让所有部分都能通过算术运算从一个单一的 `size`（大小）变量推导出来。

根据你选择的 `size`，雪人应该会相应变大。

<img
  src="/static/images/exercise-assets/relational-snowman/sizes.webp"
  alt="大小为 1 到 5 时的雪人"
  style="width: 100%; max-width: 600px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>

### 工作原理

- 绘制画布的左上角为 `0,0`，右下角为 `100,100`。
- 你已经有一个预先写好的变量 `snowmanX`（雪人中心 x 坐标），表示图像的中心，以及一个可以变化的 `size` 变量，你可以将其从 `1` 改为 `5` 来让雪人变大。
- 你需要用算术表达式推导出所有其他变量。
- 头部的半径为 `size * 2`，身体的半径为 `size * 3`，底座的半径为 `size * 4`。
- 圆与圆之间应该彼此相切：身体直接位于底座之上，头部又直接位于身体之上。（相比之前的练习，这次的雪人稍微更不稳当一些——每个雪球都恰好放在下面的雪球上，彼此互不重叠融合。今天一定很冷！）
- 底座圆形的底部距离画布底部为 `size`。
- 你需要计算出所有三个雪球的圆心坐标。

### 变量

你的任务是按照上面的说明来设置这些变量。

- `headRadius`（头部半径）：从 `size` 推导
- `bodyRadius`（身体半径）：从 `size` 推导
- `baseRadius`（底座半径）：从 `size` 推导
- `baseY`（底座 y 坐标）：从 `size` 和 `baseRadius` 推导（底座位于地面）
- `bodyY`（身体 y 坐标）：从 `baseY`、`baseRadius` 和 `bodyRadius` 推导
- `headY`（头部 y 坐标）：从 `bodyY`、`bodyRadius` 和 `headRadius` 推导

### 玩玩看

你可以将 size 从 `1` 改为 `5`，雪人应该会变大。记得改动之后要点击“运行代码”。
