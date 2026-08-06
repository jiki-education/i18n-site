---
lang: "zh-CN"
type: "exercise"
slug: "weather-symbols"
title: "天气符号"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/weather-symbols"
en_md5: "8bf4ae32a3a835c12bcd2ba77e3b6ebb"
governance_sha: "c80036b"
content_version: "af94c67ab3d4"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"dayIsntCorrect","english":"Day {{day}}'s weather isn't right.","target":"第{{day}}天的天气不对。"}]},{"name":"tasks","rows":[{"key":"drawForecast.name","english":"Draw the forecast","target":"绘制天气预报"},{"key":"drawForecast.description","english":"Draw each day's weather into its own box, using the day's position in the list as the box number.","target":"将每天的天气绘制到各自的盒子中，并将当天的位置在列表中的序号作为盒子编号。"}]},{"name":"scenarios","rows":[{"key":"mixedWeek.name","english":"A Mixed Week","target":"混合的一周"},{"key":"mixedWeek.description","english":"A bit of everything across the six days.","target":"六天中包含了各种天气。"},{"key":"sunnyWeek.name","english":"A Sunny Week","target":"阳光明媚的一周"},{"key":"sunnyWeek.description","english":"Lots of sunshine, with a couple of cloudier days.","target":"大部分日子阳光明媚，只有一两天多云。"},{"key":"rainyWeek.name","english":"A Rainy Week","target":"多雨的一周"},{"key":"rainyWeek.description","english":"A soggy week of clouds and rain.","target":"乌云笼罩，阴雨绵绵的一周。"},{"key":"snowyWeek.name","english":"A Snowy Week","target":"多雪的一周"},{"key":"snowyWeek.description","english":"A cold week full of snow.","target":"寒冷的一周，天天大雪纷飞。"}]},{"name":"hints","rows":[{"key":"loopWithIndex.question","english":"How do I go through the days and know which box each one goes in?","target":"如何遍历 days 列表，并知道每个描述对应哪个盒子？"},{"key":"loopWithIndex.answer","english":"Loop over `days` with a counter that goes from `0` up to `days.length - 1`. That counter is the box number for each day.","target":"使用一个从 0 到 days.length - 1 的计数器遍历 days 数组。这个计数器就是每个描述对应的盒子编号。"},{"key":"descriptionToSymbols.question","english":"How do I turn a description like `\"Miserable 😩\"` into symbols?","target":"如何把像 \"Miserable 😩\" 这样的描述转换成符号？"},{"key":"descriptionToSymbols.answer","english":"Match the description against each possible one and pick the matching list of symbols, for example `[\"cloud\", \"rain\"]`. The instructions list every description and its symbols.","target":"逐一匹配描述，找到对应的符号数组，例如 [\"cloud\", \"rain\"]。练习说明中列出了所有描述及其符号。"},{"key":"weekdaysList.question","english":"How do I get the weekday name for each box?","target":"如何知道每个盒子该标注星期几？"},{"key":"weekdaysList.answer","english":"Make a list of the six weekday names in order, `\"Monday\"` through `\"Saturday\"`, and read the one at your current position using the same counter as the box number.","target":"按顺序创建一个包含六个星期名称的列表，从 \"Monday\" 到 \"Saturday\"。使用与盒子编号相同的计数器，读取列表中对应位置的名称。"},{"key":"passArgs.question","english":"What do I pass to `draw`?","target":"应该向 draw 传递什么？"},{"key":"passArgs.answer","english":"Three things: the box number (your counter), the weekday name for that box, and the list of symbols for that day.","target":"三个参数：盒子编号（即你的计数器）、该盒子对应的星期名称，以及该天的符号数组。"},{"key":"tidyWithHelper.question","english":"My loop is getting long. How can I tidy it?","target":"我的循环变得越来越长，怎样能整理得简洁些？"},{"key":"tidyWithHelper.answer","english":"You can move the description-to-symbols matching into its own function and call it from the loop. This is optional, but it keeps the loop short and easy to read.","target":"你可以将描述到符号的匹配过程放到一个独立的函数中，然后在循环里调用它。这是可选的，但能让循环简短易读。"}]},{"name":"functions","rows":[{"key":"draw.description","english":"Draw the given weather symbols into a forecast box. Takes the box number (0 to 5), the weekday name to label it with, and the list of symbols.","target":"将给定的天气符号绘制到一个天气预报盒子中。参数包括：盒子编号（0 到 5）、要标注的星期几名称，以及符号列表。"},{"key":"draw.category","english":"Drawing","target":"绘图"}]},{"name":"describers","rows":[{"key":"draw","english":"drew ${arg3} into ${arg2}'s box","target":"将 ${arg3} 绘制到 ${arg2} 的盒子里。"}]},{"name":"errors","rows":[{"key":"elementsMustBeList","english":"The weather symbols (the third input to draw) must be a list, like [\"sun\", \"cloud\"].","target":"天气符号（draw 的第三个参数）必须是一个数组，例如 [\"sun\", \"cloud\"]。"},{"key":"elementsMustBeStrings","english":"The weather symbols in the list must all be strings, like \"sun\" or \"rain\".","target":"数组中的天气符号必须全部是字符串，例如 \"sun\" 或 \"rain\"。"},{"key":"unknownElement","english":"\"{{element}}\" isn't a weather symbol. Use \"sun\", \"cloud\", \"rain\", or \"snow\".","target":"\"{{element}}\" 不是一个有效的天气符号。请使用 \"sun\"、\"cloud\"、\"rain\" 或 \"snow\"。"},{"key":"indexMustBeNumber","english":"The box number (the first input to draw) must be a number.","target":"盒子编号（draw 的第一个参数）必须是一个数字。"},{"key":"indexOutOfRange","english":"The box number must be a whole number between 0 and {{max}}.","target":"盒子编号必须是 0 到 {{max}} 之间的整数。"},{"key":"dayMustBeString","english":"The weekday (the second input to draw) must be text, like \"Monday\".","target":"星期几（draw 的第二个参数）必须是字符串，例如 \"Monday\"。"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"所有输入必须是数字"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"蓝色必须在 0 到 255 之间"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"x、y 和半径输入必须是数字"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"颜色必须是指令中指定的命名颜色（如 \"orange\"、\"blue\"、\"white\" 等），或以 # 开头的十六进制颜色"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"此项练习不应指定颜色"},{"key":"colorNotString","english":"Color must be a string","target":"颜色必须是字符串"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"x、y、rx 和 ry 输入必须是数字"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"绿色必须在 0 到 255 之间"},{"key":"heightPositive","english":"Height must be greater than 0","target":"高度必须大于 0"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"色相必须在 0 到 360 之间"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"亮度必须在 0 到 100 之间"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"x1、y1、x2 和 y2 输入必须是数字"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"x、y、宽度和高度输入必须是数字"},{"key":"redRange","english":"Red must be between 0 and 255","target":"红色必须在 0 到 255 之间"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"饱和度必须在 0 到 100 之间"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"x1、y1、x2、y2、x3 和 y3 输入必须是数字"},{"key":"widthPositive","english":"Width must be greater than 0","target":"宽度必须大于 0"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"在坐标 (${arg1}, ${arg2}) 处绘制了一个矩形，宽度为 ${arg3}，高度为 ${arg4}，颜色为 ${arg5}"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"在坐标 (${arg1}, ${arg2}) 处绘制了一个矩形，宽度为 ${arg3}，高度为 ${arg4}"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"绘制了一个三角形，三个顶点为：(${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})，颜色为 ${arg7}"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"绘制了一个三角形，三个顶点为：(${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"以 (${arg1}, ${arg2}) 为圆心绘制了一个圆，半径为 ${arg3}，颜色为 ${arg4}"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"以 (${arg1}, ${arg2}) 为圆心绘制了一个圆，半径为 ${arg3}"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"以 (${arg1}, ${arg2}) 为中心绘制了一个椭圆，水平半径为 ${arg3}，垂直半径为 ${arg4}，颜色为 ${arg5}"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"以 (${arg1}, ${arg2}) 为中心绘制了一个椭圆，水平半径为 ${arg3}，垂直半径为 ${arg4}"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"绘制了一条从 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4}) 的线段，颜色为 ${arg5}"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"绘制了一条从 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4}) 的线段"},{"key":"clear","english":"cleared the canvas","target":"清空了画布"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"将 HSL 颜色（色相：${arg1}，饱和度：${arg2}，亮度：${arg3}）转换为十六进制字符串"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"将 RGB 颜色（红色：${arg1}，绿色：${arg2}，蓝色：${arg3}）转换为十六进制字符串"}]}]}]
---

有人请你制作一份六天的天气预报。然而，你收到的不是传统的气象数据，你的老板根据自己的感受来描述天气（例如“Snowboarding time! 🏂”或“Miserable 😩”）。

你拿到了一个包含六条天气描述的数组（英语：_array_），每天一条，你的任务是将每天的天气绘制到各自的盒子中。

天气预报显示为一个由六个盒子组成的网格，每个盒子对应从周一到周六的一个工作日。描述按顺序排列：第一个（盒子 `0`）是周一的天气，第二个（盒子 `1`）是周二的，依此类推，直到周六（盒子 `5`）。（你的老板周日不出门，所以他不关心天气，因此我们永远没法报道那天的天气……）

## 绘制每一天

我们为你提供了一个 `draw`（绘制）函数，它会为你完成所有的绘图工作。你的任务是确定要传入的正确元素。

```js
draw(box, day, elements)
```

- `box` 是要绘制的盒子（`0` 到 `5`）。
- `day` 是要标注到盒子上的星期几，例如 `"Monday"`。
- `elements` 是要显示的天气符号的数组（详见下文）。

一周的日期按顺序是：`"Monday"`、`"Tuesday"`、`"Wednesday"`、`"Thursday"`、`"Friday"` 和 `"Saturday"`。

因此，如果第一天是 `"Exciting 🤩"`，你会写：

```js
draw(0, "Monday", ["cloud", "snow"])
```

## 每种描述的含义

每种描述都对应一个特定的符号数组：

- `"Sunny ☀️"`: `["sun"]`
- `"Dull 😴"`: `["cloud"]`
- `"Miserable 😩"`: `["cloud", "rain"]`
- `"Hopeful 🤞"`: `["sun", "cloud"]`
- `"Rainbow territory! 🌈"`: `["sun", "cloud", "rain"]`
- `"Exciting 🤩"`: `["cloud", "snow"]`
- `"Snowboarding time! 🏂"`: `["sun", "cloud", "snow"]`

## 你的任务

逐个遍历 `days` 列表。对于每个描述，将其转换为正确的符号列表，并用对应的星期几标注，然后 `draw` 到对应日期的盒子中。
