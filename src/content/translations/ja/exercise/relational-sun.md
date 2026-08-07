---
lang: "ja"
type: "exercise"
slug: "relational-sun"
title: "変数が決める太陽"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/relational-sun"
en_md5: "9ff58522efc81e1fab45e94feaa23998"
governance_sha: "1011050"
content_version: "44da935d801d"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"wrongPosition","english":"The sun is either in the wrong place or the wrong size. Check your `sunX` and `sunY` calculations, and make sure you're passing `radius` to `circle`.","target":"太陽の位置が間違っているか、大きさが違います。`sunX`と`sunY`の計算を確認し、`radius`を`circle`に渡しているかどうか確かめてください。"},{"key":"notResponsive","english":"Your code doesn't scale correctly when `gap` is {{gap}} and `radius` is {{radius}}. `sunX` and `sunY` should be derived from `gap` and `radius`, not hardcoded numbers.","target":"`gap`（隙間）が{{gap}}、`radius`（半径）が{{radius}}の場合に、コードが正しく対応していません。`sunX`と`sunY`は`gap`と`radius`から計算で導き出す必要があります。数字を直接書いて（ハードコードして）はいけません。"}]},{"name":"tasks","rows":[{"key":"positionSun.name","english":"Position the sun","target":"太陽の位置を決めよう"},{"key":"positionSun.description","english":"Derive `sunX` and `sunY` from `canvasSize`, `gap`, and `radius` so the sun scales correctly.","target":"`canvasSize`（キャンバスサイズ）、`gap`（隙間）、`radius`（半径）から`sunX`と`sunY`を導き出し、太陽が正しく配置されるようにします。"}]},{"name":"scenarios","rows":[{"key":"positionSun.name","english":"Position the sun","target":"太陽の位置を決めよう"},{"key":"positionSun.description","english":"Derive the sun's position from `gap` and `radius` so it scales.","target":"`gap`（隙間）と`radius`（半径）から太陽の位置を導き出し、拡大縮小に対応できるようにします。"}]},{"name":"hints","rows":[{"key":"sunXPosition.question","english":"How should I think about the sun's x position?","target":"太陽のx座標をどのように考えればよいでしょうか？"},{"key":"sunXPosition.answer","english":"Picture the right edge of the canvas. The edge of the sun sits `gap` to the left of that edge. The *centre* of the sun is one more radius further in than that.","target":"キャンバスの右端を想像してください。太陽の端は、その端から`gap`だけ左にあります。太陽の*中心*は、そこからさらに半径1つ分だけ内側に入ります。"},{"key":"sunYPosition.question","english":"How should I think about the sun's y position?","target":"太陽のy座標をどのように考えればよいでしょうか？"},{"key":"sunYPosition.answer","english":"It's the same idea as the x position, but measured down from the top edge of the canvas instead of in from the right edge.","target":"x座標の場合と同じ考え方ですが、右端から内側ではなく、キャンバスの上端から下方向に測ります。"},{"key":"whyNotHardcode.question","english":"Why can't I just write the numbers directly?","target":"なぜ数字を直接書いてはいけないのですか？"},{"key":"whyNotHardcode.answer","english":"If you hardcode `sunX` and `sunY`, the sun will stay in one place when `gap` or `radius` change. Building them from `gap` and `radius` keeps the sun in the corner no matter what values you choose.","target":"`sunX`と`sunY`をハードコードしてしまうと、`gap`や`radius`が変わっても太陽が同じ場所に留まってしまいます。`gap`と`radius`から計算して作ることで、どのような値を選んでも太陽は常に隅に配置されます。"}]},{"name":"functions","rows":[{"key":"circle.description","english":"Draw a circle centered at (centerX, centerY) with the given radius and color","target":"指定された半径と色で、中心が(centerX, centerY)の円を描きます。"},{"key":"circle.category","english":"Drawing Shapes","target":"図形の描画"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"すべての入力は数値でなければなりません"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"青の値は0から255の間でなければなりません"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"x、y、半径の入力は数値でなければなりません"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"色は、指示で指定された名前付きの色（\"orange\"、\"blue\"、\"white\"など）か、#で始まる16進数の色でなければなりません"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"この演習では色を指定してはいけません"},{"key":"colorNotString","english":"Color must be a string","target":"色は文字列でなければなりません"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"x、y、rx、ryの入力は数値でなければなりません"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"緑の値は0から255の間でなければなりません"},{"key":"heightPositive","english":"Height must be greater than 0","target":"高さは0より大きくなければなりません"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"色相は0から360の間でなければなりません"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"明度は0から100の間でなければなりません"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"x1、y1、x2、y2の入力は数値でなければなりません"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"x、y、幅、高さの入力は数値でなければなりません"},{"key":"redRange","english":"Red must be between 0 and 255","target":"赤の値は0から255の間でなければなりません"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"彩度は0から100の間でなければなりません"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"x1、y1、x2、y2、x3、y3の入力は数値でなければなりません"},{"key":"widthPositive","english":"Width must be greater than 0","target":"幅は0より大きくなければなりません"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"幅${arg3}、高さ${arg4}、色${arg5}の長方形を座標(${arg1}, ${arg2})に描きました"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"幅${arg3}、高さ${arg4}の長方形を座標(${arg1}, ${arg2})に描きました"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"3点(${arg1}, ${arg2})、(${arg3}, ${arg4})、(${arg5}, ${arg6})を頂点とする色${arg7}の三角形を描きました"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"3点(${arg1}, ${arg2})、(${arg3}, ${arg4})、(${arg5}, ${arg6})を頂点とする三角形を描きました"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"中心(${arg1}, ${arg2})、半径${arg3}、色${arg4}の円を描きました"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"中心(${arg1}, ${arg2})、半径${arg3}の円を描きました"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"中心(${arg1}, ${arg2})、水平半径${arg3}、垂直半径${arg4}、色${arg5}の楕円を描きました"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"中心(${arg1}, ${arg2})、水平半径${arg3}、垂直半径${arg4}の楕円を描きました"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"(${arg1}, ${arg2})から(${arg3}, ${arg4})への色${arg5}の線を描きました"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"(${arg1}, ${arg2})から(${arg3}, ${arg4})への線を描きました"},{"key":"clear","english":"cleared the canvas","target":"キャンバスをクリアしました"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"HSL色（色相: ${arg1}、彩度: ${arg2}、明度: ${arg3}）を16進数の文字列に変換しました"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"RGB色（赤: ${arg1}、緑: ${arg2}、青: ${arg3}）を16進数の文字列に変換しました"}]}]}]
---

この演習では、算術演算と変数を使って、空の右上隅に太陽を配置します。重要な条件は、太陽の縁が常にキャンバスの端から固定の**隙間**だけ離れていることです。太陽の大きさには関係なく。

ファイルの先頭に4つの変数（英: _variable_）をあらかじめ設定してあります：

- `canvasSize`（キャンバスのサイズ）: キャンバスのサイズで、値は`100`です。
- `color`（色）: `"yellow"`に設定されています。
- `gap`（隙間）: 太陽の縁がキャンバスの上端と右端からどれだけ離れているかを表します。
- `radius`（半径）: 太陽の半径です。

### 2つのステップ

この演習を解くには、次の2つを行います。

#### 1. 派生変数を定義する

`gap`、`radius`、`canvasSize` を使って、太陽の中心が右上隅にくるように `sunX`（太陽のX座標）と `sunY`（太陽のY座標）という変数を定義します。

#### 2. 円を描く

`sunX`、`sunY`、`radius`、`color` を使って円を描きます。

## 柔軟性

`gap`の初期値は10、`radius`の初期値は15に設定されています。まずはそれらの値で演習を解き、背景を参考にして位置を確認してください。コードが正しければ、ページ上の正しい位置に円が表示されます。

しかし、この演習に合格するためには、値を「ハードコード」する（つまり、直接数値を書く）ことはできません。`sunX`と`sunY`は、他の変数を使った計算式である必要があります。

演習に合格したら、「Tidy my code」ボタンをクリックし、ファイルの先頭にある`gap`と`radius`の値を変更してみてください。コードを再実行すると、太陽が大きくなったり移動したりしますが、常に隅に留まっているのが確認できます。

終わったら、右上の「Dashboard」をクリックして通常通り続行してください。
