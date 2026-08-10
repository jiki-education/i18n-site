---
lang: "zh-TW"
type: "exercise"
slug: "weather-symbols"
title: "天氣符號"
status: "published"
source_repo: "i18n"
source_path: "locales/zh-TW/curriculum/exercises/weather-symbols"
en_md5: "8bf4ae32a3a835c12bcd2ba77e3b6ebb"
governance_sha: "679b0c2"
content_version: "ebf29eb2b532"
published_at: "2026-08-10"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"dayIsntCorrect","english":"Day {{day}}'s weather isn't right.","target":"第 {{day}} 天的天氣不對。"}]},{"name":"tasks","rows":[{"key":"drawForecast.name","english":"Draw the forecast","target":"繪製天氣預報"},{"key":"drawForecast.description","english":"Draw each day's weather into its own box, using the day's position in the list as the box number.","target":"將每一天的天氣畫進各自的盒子裡，使用該天在陣列中的位置作為盒子編號。"}]},{"name":"scenarios","rows":[{"key":"mixedWeek.name","english":"A Mixed Week","target":"混合的一週"},{"key":"mixedWeek.description","english":"A bit of everything across the six days.","target":"這六天裡什麼天氣都有。"},{"key":"sunnyWeek.name","english":"A Sunny Week","target":"晴朗的一週"},{"key":"sunnyWeek.description","english":"Lots of sunshine, with a couple of cloudier days.","target":"陽光普照，只有幾天雲比較多。"},{"key":"rainyWeek.name","english":"A Rainy Week","target":"多雨的一週"},{"key":"rainyWeek.description","english":"A soggy week of clouds and rain.","target":"充滿雲和雨的潮濕一週。"},{"key":"snowyWeek.name","english":"A Snowy Week","target":"下雪的一週"},{"key":"snowyWeek.description","english":"A cold week full of snow.","target":"充滿雪的寒冷一週。"}]},{"name":"hints","rows":[{"key":"loopWithIndex.question","english":"How do I go through the days and know which box each one goes in?","target":"我該如何逐一處理每一天，並知道每一天要放進哪個盒子裡？"},{"key":"loopWithIndex.answer","english":"Loop over `days` with a counter that goes from `0` up to `days.length - 1`. That counter is the box number for each day.","target":"使用一個從 `0` 到 `days.length - 1` 的計數器來對 `days` 執行迴圈。這個計數器就是每一天的盒子編號。"},{"key":"descriptionToSymbols.question","english":"How do I turn a description like `\"Miserable 😩\"` into symbols?","target":"我該如何將像 `\"Miserable 😩\"` 這樣的描述轉換成符號？"},{"key":"descriptionToSymbols.answer","english":"Match the description against each possible one and pick the matching list of symbols, for example `[\"cloud\", \"rain\"]`. The instructions list every description and its symbols.","target":"將描述與每個可能的選項進行比對，並挑選出相符的符號陣列，例如 `[\"cloud\", \"rain\"]`。說明中列出了所有的描述及其對應的符號。"},{"key":"weekdaysList.question","english":"How do I get the weekday name for each box?","target":"我該如何取得每個盒子的星期幾名稱？"},{"key":"weekdaysList.answer","english":"Make a list of the six weekday names in order, `\"Monday\"` through `\"Saturday\"`, and read the one at your current position using the same counter as the box number.","target":"建立一個依序包含六個星期幾名稱的陣列，從 `\"Monday\"` 到 `\"Saturday\"`，並使用與盒子編號相同的計數器來讀取你目前位置的名稱。"},{"key":"passArgs.question","english":"What do I pass to `draw`?","target":"我要傳遞什麼給 `draw`？"},{"key":"passArgs.answer","english":"Three things: the box number (your counter), the weekday name for that box, and the list of symbols for that day.","target":"三個東西：盒子編號（你的計數器）、該盒子的星期幾名稱，以及那一天的符號陣列。"},{"key":"tidyWithHelper.question","english":"My loop is getting long. How can I tidy it?","target":"我的迴圈變得越來越長了。我該如何整理它？"},{"key":"tidyWithHelper.answer","english":"You can move the description-to-symbols matching into its own function and call it from the loop. This is optional, but it keeps the loop short and easy to read.","target":"你可以將「描述轉換為符號」的比對邏輯移到它專屬的函式中，然後在迴圈裡呼叫它。這不是強制的，但這樣可以讓迴圈保持簡短且易於閱讀。"}]},{"name":"functions","rows":[{"key":"draw.description","english":"Draw the given weather symbols into a forecast box. Takes the box number (0 to 5), the weekday name to label it with, and the list of symbols.","target":"將給定的天氣符號畫進天氣預報的盒子裡。需要傳入盒子編號（0 到 5）、用來標示的星期幾名稱，以及符號陣列。"},{"key":"draw.category","english":"Drawing","target":"繪圖"}]},{"name":"describers","rows":[{"key":"draw","english":"drew ${arg3} into ${arg2}'s box","target":"將 ${arg3} 畫進了 ${arg2} 的盒子裡"}]},{"name":"errors","rows":[{"key":"elementsMustBeList","english":"The weather symbols (the third input to draw) must be a list, like [\"sun\", \"cloud\"].","target":"天氣符號（draw 的第三個輸入）必須是一個陣列，例如 [\"sun\", \"cloud\"]。"},{"key":"elementsMustBeStrings","english":"The weather symbols in the list must all be strings, like \"sun\" or \"rain\".","target":"陣列中的天氣符號必須全部都是字串，例如 \"sun\" 或 \"rain\"。"},{"key":"unknownElement","english":"\"{{element}}\" isn't a weather symbol. Use \"sun\", \"cloud\", \"rain\", or \"snow\".","target":"\"{{element}}\" 不是一個天氣符號。請使用 \"sun\"、\"cloud\"、\"rain\" 或 \"snow\"。"},{"key":"indexMustBeNumber","english":"The box number (the first input to draw) must be a number.","target":"盒子編號（draw 的第一個輸入）必須是一個數字。"},{"key":"indexOutOfRange","english":"The box number must be a whole number between 0 and {{max}}.","target":"盒子編號必須是介於 0 到 {{max}} 之間的整數。"},{"key":"dayMustBeString","english":"The weekday (the second input to draw) must be text, like \"Monday\".","target":"星期幾（draw 的第二個輸入）必須是文字，例如 \"Monday\"。"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"所有輸入都必須是數字"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"藍色值必須介於 0 到 255 之間"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"x、y 和 radius 這幾個輸入都必須是數字"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"顏色必須是說明中指定的具名顏色（\"orange\"、\"blue\"、\"white\" 等），或是以 # 開頭的十六進位色碼"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"這個練習不需要指定顏色"},{"key":"colorNotString","english":"Color must be a string","target":"顏色必須是字串"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"x、y、rx 和 ry 這幾個輸入都必須是數字"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"綠色值必須介於 0 到 255 之間"},{"key":"heightPositive","english":"Height must be greater than 0","target":"高度必須大於 0"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"色相值必須介於 0 到 360 之間"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"亮度值必須介於 0 到 100 之間"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"x1、y1、x2 和 y2 這幾個輸入都必須是數字"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"x、y、width 和 height 這幾個輸入都必須是數字"},{"key":"redRange","english":"Red must be between 0 and 255","target":"紅色值必須介於 0 到 255 之間"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"飽和度值必須介於 0 到 100 之間"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"x1、y1、x2、y2、x3 和 y3 這幾個輸入都必須是數字"},{"key":"widthPositive","english":"Width must be greater than 0","target":"寬度必須大於 0"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"在座標 (${arg1}, ${arg2}) 畫了一個矩形，寬度為 ${arg3}、高度為 ${arg4}、顏色為 ${arg5}"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"在座標 (${arg1}, ${arg2}) 畫了一個矩形，寬度為 ${arg3}、高度為 ${arg4}"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"畫了一個三角形，三個頂點分別是 (${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})，顏色為 ${arg7}"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"畫了一個三角形，三個頂點分別是 (${arg1}, ${arg2})、(${arg3}, ${arg4}) 和 (${arg5}, ${arg6})"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"畫了一個圓形，圓心在 (${arg1}, ${arg2})，半徑為 ${arg3}，顏色為 ${arg4}"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"畫了一個圓形，圓心在 (${arg1}, ${arg2})，半徑為 ${arg3}"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"畫了一個橢圓形，中心在 (${arg1}, ${arg2})，水平半徑為 ${arg3}、垂直半徑為 ${arg4}，顏色為 ${arg5}"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"畫了一個橢圓形，中心在 (${arg1}, ${arg2})，水平半徑為 ${arg3}、垂直半徑為 ${arg4}"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"畫了一條線，從 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4})，顏色為 ${arg5}"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"畫了一條線，從 (${arg1}, ${arg2}) 到 (${arg3}, ${arg4})"},{"key":"clear","english":"cleared the canvas","target":"清除了畫布"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"把 HSL 顏色（色相：${arg1}，飽和度：${arg2}，亮度：${arg3}）轉換成十六進位色碼字串"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"把 RGB 顏色（紅：${arg1}，綠：${arg2}，藍：${arg3}）轉換成十六進位色碼字串"}]}]}]
---

有人請你製作一份六天的天氣預報。不過，你的老闆沒有給你傳統的天氣資料，而是根據他的感覺給你天氣描述（例如 "Snowboarding time! 🏂" 或 "Miserable 😩"）。

你收到了一個包含六個天氣描述的陣列（英文：_Array_），每天一個，而你的工作是將每一天的天氣畫進各自的盒子裡。

天氣預報會顯示為六個盒子的網格，從星期一到星期六，每天一個。這些描述會依序排列：第一個（盒子`0`）是星期一的天氣，第二個（盒子`1`）是星期二的天氣，以此類推直到星期六（盒子`5`）。（你的老闆星期天不出門，所以他不在乎天氣，我們也就永遠無法報告星期天的天氣……）

## 繪製一天

我們提供了一個`draw`（繪製）函式來幫你完成所有的繪圖工作。你的工作是找出要放進去的正確元素。

```js
draw(box, day, elements)
```

- `box`是要畫進去的盒子（`0`到`5`）。
- `day`是用來標示盒子的星期幾，例如`"Monday"`。
- `elements`是一個要顯示的天氣符號陣列（詳情請見下方）。

星期幾的順序依序為`"Monday"`、`"Tuesday"`、`"Wednesday"`、`"Thursday"`、`"Friday"`和`"Saturday"`。

所以如果第一天是`"Exciting 🤩"`，你會寫：

```js
draw(0, "Monday", ["cloud", "snow"])
```

## 每個描述的意義

每個描述都對應到一個特定的符號陣列：

- `"Sunny ☀️"`: `["sun"]`
- `"Dull 😴"`: `["cloud"]`
- `"Miserable 😩"`: `["cloud", "rain"]`
- `"Hopeful 🤞"`: `["sun", "cloud"]`
- `"Rainbow territory! 🌈"`: `["sun", "cloud", "rain"]`
- `"Exciting 🤩"`: `["cloud", "snow"]`
- `"Snowboarding time! 🏂"`: `["sun", "cloud", "snow"]`

## 你的任務

一次一天，依序處理`days`陣列吧。對於每一個描述，將它轉換成正確的符號陣列，並將它`draw`進那一天的盒子裡，標上對應的星期幾。
