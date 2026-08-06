---
lang: "ja"
type: "exercise"
slug: "weather-symbols"
title: "天気記号"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/weather-symbols"
en_md5: "8bf4ae32a3a835c12bcd2ba77e3b6ebb"
governance_sha: "c80036b"
content_version: "b376c92ad698"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"dayIsntCorrect","english":"Day {{day}}'s weather isn't right.","target":"{{day}}の天気が正しくありません。"}]},{"name":"tasks","rows":[{"key":"drawForecast.name","english":"Draw the forecast","target":"天気予報を描く"},{"key":"drawForecast.description","english":"Draw each day's weather into its own box, using the day's position in the list as the box number.","target":"各日の天気を、リスト内の位置を箱番号として、それぞれの箱に描きましょう。"}]},{"name":"scenarios","rows":[{"key":"mixedWeek.name","english":"A Mixed Week","target":"混合週"},{"key":"mixedWeek.description","english":"A bit of everything across the six days.","target":"6日間で色々な天気が混ざっています。"},{"key":"sunnyWeek.name","english":"A Sunny Week","target":"晴れの週"},{"key":"sunnyWeek.description","english":"Lots of sunshine, with a couple of cloudier days.","target":"晴れが多く、曇りの日が2日ほどあります。"},{"key":"rainyWeek.name","english":"A Rainy Week","target":"雨の週"},{"key":"rainyWeek.description","english":"A soggy week of clouds and rain.","target":"曇りと雨のじめじめした週。"},{"key":"snowyWeek.name","english":"A Snowy Week","target":"雪の週"},{"key":"snowyWeek.description","english":"A cold week full of snow.","target":"雪の多い寒い一週間。"}]},{"name":"hints","rows":[{"key":"loopWithIndex.question","english":"How do I go through the days and know which box each one goes in?","target":"各日を順に処理し、それぞれの箱番号を知るにはどうすればよいですか？"},{"key":"loopWithIndex.answer","english":"Loop over `days` with a counter that goes from `0` up to `days.length - 1`. That counter is the box number for each day.","target":"`days`を、`0`から`days.length - 1`までのカウンターでループします。そのカウンターが各日の箱番号です。"},{"key":"descriptionToSymbols.question","english":"How do I turn a description like `\"Miserable 😩\"` into symbols?","target":"`\"Miserable 😩\"`のような説明文を天気記号に変換するにはどうすればよいですか？"},{"key":"descriptionToSymbols.answer","english":"Match the description against each possible one and pick the matching list of symbols, for example `[\"cloud\", \"rain\"]`. The instructions list every description and its symbols.","target":"各説明文を可能なものと照合し、該当する記号のリストを選びます。例えば`[\"cloud\", \"rain\"]`です。説明文とそれに対応する記号の一覧は、課題の説明に全て載っています。"},{"key":"weekdaysList.question","english":"How do I get the weekday name for each box?","target":"各箱の曜日名をどうやって取得しますか？"},{"key":"weekdaysList.answer","english":"Make a list of the six weekday names in order, `\"Monday\"` through `\"Saturday\"`, and read the one at your current position using the same counter as the box number.","target":"6つの曜日名（順に`\"Monday\"`から`\"Saturday\"`）のリストを作成し、箱番号と同じカウンターで現在の位置のものを取得します。"},{"key":"passArgs.question","english":"What do I pass to `draw`?","target":"`draw`には何を渡せばよいですか？"},{"key":"passArgs.answer","english":"Three things: the box number (your counter), the weekday name for that box, and the list of symbols for that day.","target":"3つです：箱番号（カウンター）、その箱の曜日名、その日の天気記号のリストです。"},{"key":"tidyWithHelper.question","english":"My loop is getting long. How can I tidy it?","target":"ループが長くなってきました。どう整理すればいいですか？"},{"key":"tidyWithHelper.answer","english":"You can move the description-to-symbols matching into its own function and call it from the loop. This is optional, but it keeps the loop short and easy to read.","target":"説明文から記号への変換処理を独自の関数に移し、ループからその関数を呼び出すことができます。これは任意ですが、ループが短くなり読みやすくなります。"}]},{"name":"functions","rows":[{"key":"draw.description","english":"Draw the given weather symbols into a forecast box. Takes the box number (0 to 5), the weekday name to label it with, and the list of symbols.","target":"指定された天気記号を予報ボックスに描画します。引数として箱番号（0～5）、ラベルとしての曜日名、記号のリストを受け取ります。"},{"key":"draw.category","english":"Drawing","target":"描画"}]},{"name":"describers","rows":[{"key":"draw","english":"drew ${arg3} into ${arg2}'s box","target":"${arg2}の箱に${arg3}を描きました"}]},{"name":"errors","rows":[{"key":"elementsMustBeList","english":"The weather symbols (the third input to draw) must be a list, like [\"sun\", \"cloud\"].","target":"天気記号（drawへの3番目の入力）は、`[\"sun\", \"cloud\"]`のようなリストでなければなりません。"},{"key":"elementsMustBeStrings","english":"The weather symbols in the list must all be strings, like \"sun\" or \"rain\".","target":"リスト内の天気記号はすべて文字列でなければなりません。例えば`\"sun\"`や`\"rain\"`です。"},{"key":"unknownElement","english":"\"{{element}}\" isn't a weather symbol. Use \"sun\", \"cloud\", \"rain\", or \"snow\".","target":"\"{{element}}\"は天気記号ではありません。`\"sun\"`、`\"cloud\"`、`\"rain\"`、`\"snow\"`のいずれかを使用してください。"},{"key":"indexMustBeNumber","english":"The box number (the first input to draw) must be a number.","target":"箱番号（drawへの最初の入力）は数値でなければなりません。"},{"key":"indexOutOfRange","english":"The box number must be a whole number between 0 and {{max}}.","target":"箱番号は0から{{max}}までの整数でなければなりません。"},{"key":"dayMustBeString","english":"The weekday (the second input to draw) must be text, like \"Monday\".","target":"曜日（drawへの2番目の入力）は、`\"Monday\"`のようなテキストでなければなりません。"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"すべての入力は数値でなければなりません"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"青の値は0から255の間でなければなりません"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"x、y、半径の入力は数値でなければなりません"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"色は、指示で指定された名前付きの色（\"orange\"、\"blue\"、\"white\"など）か、#で始まる16進数の色でなければなりません"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"この演習では色を指定してはいけません"},{"key":"colorNotString","english":"Color must be a string","target":"色は文字列でなければなりません"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"x、y、rx、ryの入力は数値でなければなりません"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"緑の値は0から255の間でなければなりません"},{"key":"heightPositive","english":"Height must be greater than 0","target":"高さは0より大きくなければなりません"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"色相は0から360の間でなければなりません"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"明度は0から100の間でなければなりません"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"x1、y1、x2、y2の入力は数値でなければなりません"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"x、y、幅、高さの入力は数値でなければなりません"},{"key":"redRange","english":"Red must be between 0 and 255","target":"赤の値は0から255の間でなければなりません"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"彩度は0から100の間でなければなりません"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"x1、y1、x2、y2、x3、y3の入力は数値でなければなりません"},{"key":"widthPositive","english":"Width must be greater than 0","target":"幅は0より大きくなければなりません"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"幅${arg3}、高さ${arg4}、色${arg5}の長方形を座標(${arg1}, ${arg2})に描きました"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"幅${arg3}、高さ${arg4}の長方形を座標(${arg1}, ${arg2})に描きました"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"3点(${arg1}, ${arg2})、(${arg3}, ${arg4})、(${arg5}, ${arg6})を頂点とする色${arg7}の三角形を描きました"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"3点(${arg1}, ${arg2})、(${arg3}, ${arg4})、(${arg5}, ${arg6})を頂点とする三角形を描きました"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"中心(${arg1}, ${arg2})、半径${arg3}、色${arg4}の円を描きました"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"中心(${arg1}, ${arg2})、半径${arg3}の円を描きました"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"中心(${arg1}, ${arg2})、水平半径${arg3}、垂直半径${arg4}、色${arg5}の楕円を描きました"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"中心(${arg1}, ${arg2})、水平半径${arg3}、垂直半径${arg4}の楕円を描きました"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"(${arg1}, ${arg2})から(${arg3}, ${arg4})への色${arg5}の線を描きました"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"(${arg1}, ${arg2})から(${arg3}, ${arg4})への線を描きました"},{"key":"clear","english":"cleared the canvas","target":"キャンバスをクリアしました"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"HSL色（色相: ${arg1}、彩度: ${arg2}、明度: ${arg3}）を16進数の文字列に変換しました"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"RGB色（赤: ${arg1}、緑: ${arg2}、青: ${arg3}）を16進数の文字列に変換しました"}]}]}]
---

6日間の天気予報を作るよう頼まれました。しかし、通常の気象データを受け取る代わりに、上司が天気の様子を自分の感じ方で説明してくれます（例：「Snowboarding time! 🏂」や「Miserable 😩」）。

6つの天気の説明からなる配列（英: _array_）が与えられます。1日ひとつずつです。あなたの仕事は、それぞれの日の天気を専用の箱に描き込むことです。

天気予報は、月曜から土曜までの各曜日1つずつ、6つの箱からなるグリッドとして表示されます。説明文は順に並んでいます。最初（箱 `0`）が月曜の天気、2番目（箱 `1`）が火曜の天気、というように土曜（箱 `5`）まで続きます。（上司は日曜日に家を出ないので天気を気にせず、そのため私たちは報告できません…）

## 1日分を描く

`draw`（描画）関数をあらかじめ用意しました。この関数がすべての描画をやってくれます。あなたの仕事は、中に入れる正しい要素を考えることです。

```js
draw(box, day, elements)
```

- `box`は描画先の箱（`0` ～ `5`）です。
- `day`は箱に付ける曜日ラベルで、例えば `"Monday"` です。
- `elements`は表示する天気記号の配列です（詳細は後述）。

曜日は、順に `"Monday"`、`"Tuesday"`、`"Wednesday"`、`"Thursday"`、`"Friday"`、`"Saturday"` です。

したがって、最初の日が `"Exciting 🤩"` なら、次のように書きます。

```js
draw(0, "Monday", ["cloud", "snow"])
```

## 各説明の意味

各説明文は、次の特定の記号の配列に対応しています。

- `"Sunny ☀️"`: `["sun"]`
- `"Dull 😴"`: `["cloud"]`
- `"Miserable 😩"`: `["cloud", "rain"]`
- `"Hopeful 🤞"`: `["sun", "cloud"]`
- `"Rainbow territory! 🌈"`: `["sun", "cloud", "rain"]`
- `"Exciting 🤩"`: `["cloud", "snow"]`
- `"Snowboarding time! 🏂"`: `["sun", "cloud", "snow"]`

## 課題

`days`リストを1日ずつ処理します。各説明文を、対応する記号のリストに変換し、該当する曜日ラベルを付けて、その日の箱に`draw`します。
