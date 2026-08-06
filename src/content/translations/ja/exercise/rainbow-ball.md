---
lang: "ja"
type: "exercise"
slug: "rainbow-ball"
title: "レインボーボール"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/rainbow-ball"
en_md5: "9ce8ac697138ecf8e2f936dcd6c73059"
governance_sha: "c80036b"
content_version: "9dc107d45d75"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"uniqueColoredCircles","english":"Expected at least 50 uniquely colored circles.","target":"少なくとも50個の異なる色の円が必要です。"},{"key":"uniquePositionedCircles","english":"Expected at least 30 different positions.","target":"少なくとも30か所の異なる位置の円が必要です。"},{"key":"canvasCoverage","english":"The ball didn't paint enough of the canvas. It should bounce around until over 80% is covered.","target":"ボールがキャンバスを十分に塗りつぶせていません。80%以上覆われるまで跳ね回る必要があります。"},{"key":"hueBounced","english":"The hue didn't hit 360 then climb back down again.","target":"色相が360まで上がってから下がっていません。"},{"key":"hueSweep","english":"The rainbow trail didn't sweep through all the colours.","target":"虹の軌跡がすべての色を一巡していません。"}]},{"name":"tasks","rows":[{"key":"rainbowBall.name","english":"Create a bouncing rainbow ball","target":"跳ねるレインボーボールを作成"},{"key":"rainbowBall.description","english":"Create a ball that bounces around the canvas, leaving a trail of colorful circles that cycle through rainbow colors.","target":"虹色に変化する色とりどりの円の軌跡を残しつつ、キャンバス内を跳ね回るボールを作成します。"}]},{"name":"scenarios","rows":[{"key":"rainbowBall.name","english":"Rainbow ball","target":"レインボーボール"},{"key":"rainbowBall.description","english":"Draw a rainbow trail from different circles.","target":"さまざまな色の円で虹の軌跡を描く。"}]},{"name":"hints","rows":[{"key":"stateToTrack.question","english":"What state do I need to track?","target":"どの状態を管理する必要がありますか？"},{"key":"stateToTrack.answer","english":"The ball's position, and how it's moving. Keep those separate: one variable for *where* the ball is, another for *how it's changing*. The same idea applies to the hue: you need its current value plus a direction it's heading in.","target":"ボールの位置と、動き方の2つです。これらは分けて管理しましょう。ボールの*位置*を示す変数と、*どのように動いているか*を示す変数を用意します。色相にも同じ考え方を当てはめます。現在の色相の値と、変化する方向を持っておく必要があります。"},{"key":"moveAndShift.question","english":"How do I make the ball move and the colour shift each frame?","target":"各繰り返しで、ボールを移動させ、色を変化させるにはどうすればよいですか？"},{"key":"moveAndShift.answer","english":"At the start of each loop iteration, add your direction variables to the position and to `hue`. That way the direction variables fully control the motion. Flipping their sign or changing their size instantly changes how the ball moves and how the colour shifts.","target":"各繰り返しの先頭で、方向の変数を位置と`hue`に加算します。これにより、方向変数が動きをすべて制御することになります。符号を反転させたり、値を変えたりすることで、ボールの動きや色の変化の様子がすぐに変わります。"},{"key":"velocityTip.question","english":"I can't work out how to do this. Any tips?","target":"どうすればいいか見当がつきません。何かヒントはありますか？"},{"key":"velocityTip.answer","english":"What are these numbers that `x` and `y` change by? They're a mixture of speed (the size of the number) and direction (whether it moves the ball forward or back). So `2` would be a speed of 2 moving to the right or bottom. And `-3` would be a speed of 3 moving to the left or top. A number that is a speed and a distance is called a **velocity** (time to update your variable names?) So when you want to change the direction of the ball, you change the sign of the velocity, from positive to negative or vice versa.","target":"`x`と`y`が変化する量は何を意味しているのでしょうか？　それは、速さ（数値の大きさ）と方向（ボールを前に進めるか後ろに下げるか）の組み合わせです。例えば、`2`なら、右または下に2の速さで移動し、`-3`なら左または上に3の速さで移動します。速さと方向を合わせた数値を**速度**といいます（変数名をこれに合わせてみては？）。ボールの方向を変えたいときは、速度の符号を正から負、またはその逆に変えればよいのです。"},{"key":"bounceOffEdges.question","english":"How do I make the ball bounce off the edges?","target":"キャンバスの端で跳ね返るようにするにはどうすればいいですか？"},{"key":"bounceOffEdges.answer","english":"After updating position, check whether `x` or `y` has crossed the canvas boundary. When it has, reverse the direction variable for that axis. The instructions specify the canvas range.","target":"位置を更新した後で、`x`または`y`がキャンバスの境界を超えていないかチェックします。超えていたら、その軸の方向変数の符号を反転させます。キャンバスの範囲は指示に書かれている通りです。"},{"key":"randomBounceSpeed.question","english":"How do I give the bounce a random new speed each time?","target":"跳ね返るたびに、ランダムな新しい速度にするにはどうすればよいですか？"},{"key":"randomBounceSpeed.answer","english":"When the ball hits an edge, set the direction variable using `Math.randomInt(min, max)` instead of just flipping its sign. Pick a positive range when bouncing off the left or top, and a negative range when bouncing off the right or bottom.","target":"ボールが端に当たったら、符号を反転させるだけではなく、`Math.randomInt(min, max)` を使って方向変数を設定します。左端または上端で跳ね返るときは正の範囲、右端または下端で跳ね返るときは負の範囲を選んでください。"},{"key":"cycleHue.question","english":"How do I cycle the hue through the rainbow?","target":"色相を虹色に循環させるにはどうすればよいですか？"},{"key":"cycleHue.answer","english":"Apply the same trick to `hue` as to position. When it leaves its valid range, flip `hueDirection`. The colour will then sweep up to the top of the spectrum and back down again on its own.","target":"位置に対して行ったのと同じテクニックを`hue`にも使います。有効範囲を超えたら、`hueDirection`の符号を反転させます。そうすれば、色がスペクトルの上限まで上昇して、自動的にまた下降するようになります。"}]},{"name":"functions","rows":[{"key":"circle.description","english":"Draw a circle with its center at (centerX, centerY) with the given radius and color","target":"与えられた半径と色で、中心を (centerX, centerY) とする円を描画します。"},{"key":"circle.category","english":"Drawing Shapes","target":"図形描画"},{"key":"hsl.description","english":"Convert HSL color values (hue 0-360, saturation 0-100, lightness 0-100) to a hex color string","target":"HSL値（色相0〜360、彩度0〜100、明度0〜100）を16進数の色文字列に変換します。"},{"key":"hsl.category","english":"Colors","target":"色"}]}]},{"heading":"Shared \"draw\" messages","note":"Shared by every exercise in the draw category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"allInputsNumbers","english":"All inputs must be numbers","target":"すべての入力は数値でなければなりません"},{"key":"blueRange","english":"Blue must be between 0 and 255","target":"青の値は0から255の間でなければなりません"},{"key":"circleInputsNumbers","english":"The x, y, and radius inputs must be numbers","target":"x、y、半径の入力は数値でなければなりません"},{"key":"colorNamedOrHex","english":"Color must be a named color (\"orange\", \"blue\", \"white\", etc) specified in the instructions, or a hex color starting with #","target":"色は、指示で指定された名前付きの色（\"orange\"、\"blue\"、\"white\"など）か、#で始まる16進数の色でなければなりません"},{"key":"colorNotAllowed","english":"Color should not be specified for this exercise","target":"この演習では色を指定してはいけません"},{"key":"colorNotString","english":"Color must be a string","target":"色は文字列でなければなりません"},{"key":"ellipseInputsNumbers","english":"The x, y, rx, and ry inputs must be numbers","target":"x、y、rx、ryの入力は数値でなければなりません"},{"key":"greenRange","english":"Green must be between 0 and 255","target":"緑の値は0から255の間でなければなりません"},{"key":"heightPositive","english":"Height must be greater than 0","target":"高さは0より大きくなければなりません"},{"key":"hueRange","english":"Hue must be between 0 and 360","target":"色相は0から360の間でなければなりません"},{"key":"lightnessRange","english":"Lightness must be between 0 and 100","target":"明度は0から100の間でなければなりません"},{"key":"lineInputsNumbers","english":"The x1, y1, x2, and y2 inputs must be numbers","target":"x1、y1、x2、y2の入力は数値でなければなりません"},{"key":"rectInputsNumbers","english":"The x, y, width, and height inputs must be numbers","target":"x、y、幅、高さの入力は数値でなければなりません"},{"key":"redRange","english":"Red must be between 0 and 255","target":"赤の値は0から255の間でなければなりません"},{"key":"saturationRange","english":"Saturation must be between 0 and 100","target":"彩度は0から100の間でなければなりません"},{"key":"triangleInputsNumbers","english":"The x1, y1, x2, y2, x3, and y3 inputs must be numbers","target":"x1、y1、x2、y2、x3、y3の入力は数値でなければなりません"},{"key":"widthPositive","english":"Width must be greater than 0","target":"幅は0より大きくなければなりません"}]},{"name":"describers","rows":[{"key":"rectangle.default","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3}, a height of ${arg4}, and a color of ${arg5}","target":"幅${arg3}、高さ${arg4}、色${arg5}の長方形を座標(${arg1}, ${arg2})に描きました"},{"key":"rectangle.fixedColor","english":"drew a rectangle at coordinates (${arg1}, ${arg2}) with a width of ${arg3} and a height of ${arg4}","target":"幅${arg3}、高さ${arg4}の長方形を座標(${arg1}, ${arg2})に描きました"},{"key":"triangle.default","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6}) with a color of ${arg7}","target":"3点(${arg1}, ${arg2})、(${arg3}, ${arg4})、(${arg5}, ${arg6})を頂点とする色${arg7}の三角形を描きました"},{"key":"triangle.fixedColor","english":"drew a triangle with three points: (${arg1}, ${arg2}), (${arg3}, ${arg4}), and (${arg5}, ${arg6})","target":"3点(${arg1}, ${arg2})、(${arg3}, ${arg4})、(${arg5}, ${arg6})を頂点とする三角形を描きました"},{"key":"circle.default","english":"drew a circle with its center at (${arg1}, ${arg2}), a radius of ${arg3}, and a color of ${arg4}","target":"中心(${arg1}, ${arg2})、半径${arg3}、色${arg4}の円を描きました"},{"key":"circle.fixedColor","english":"drew a circle with its center at (${arg1}, ${arg2}) and a radius of ${arg3}","target":"中心(${arg1}, ${arg2})、半径${arg3}の円を描きました"},{"key":"ellipse.default","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, a vertical radius of ${arg4}, and a color of ${arg5}","target":"中心(${arg1}, ${arg2})、水平半径${arg3}、垂直半径${arg4}、色${arg5}の楕円を描きました"},{"key":"ellipse.fixedColor","english":"drew an ellipse with its center at (${arg1}, ${arg2}), a horizontal radius of ${arg3}, and a vertical radius of ${arg4}","target":"中心(${arg1}, ${arg2})、水平半径${arg3}、垂直半径${arg4}の楕円を描きました"},{"key":"line.default","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4}) with a color of ${arg5}","target":"(${arg1}, ${arg2})から(${arg3}, ${arg4})への色${arg5}の線を描きました"},{"key":"line.fixedColor","english":"drew a line from (${arg1}, ${arg2}) to (${arg3}, ${arg4})","target":"(${arg1}, ${arg2})から(${arg3}, ${arg4})への線を描きました"},{"key":"clear","english":"cleared the canvas","target":"キャンバスをクリアしました"},{"key":"hsl","english":"converted HSL color (hue: ${arg1}, saturation: ${arg2}, lightness: ${arg3}) to a hex string","target":"HSL色（色相: ${arg1}、彩度: ${arg2}、明度: ${arg3}）を16進数の文字列に変換しました"},{"key":"rgb","english":"converted RGB color (red: ${arg1}, green: ${arg2}, blue: ${arg3}) to a hex string","target":"RGB色（赤: ${arg1}、緑: ${arg2}、青: ${arg3}）を16進数の文字列に変換しました"}]}]}]
---

キャンバス上をランダムに跳ね回りながら、虹の軌跡を描くボールを作ってください。

動きは次のようになります。

<img src="/static/images/exercise-assets/rainbow-ball/example.gif" alt="キャンバス上を跳ね回る虹色のボールのアニメーション。動いた跡に色のついた軌跡が描かれる。" style="width: 100%; max-width: 200px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

この演習では、`Math.randomInt(min, max)` という関数が使えます。この関数は、渡した `min` と `max` の間のランダムな整数を返します。

この課題をどう解決するか、数分かけてじっくり考えてみてください。ここがこの演習で一番大切な部分です。次の「方針」を読む前に、自分のアイデアを書き出してみましょう。

アプローチが思いついたら、先を読んでください。でも、じっくり考える前に読み進めないでください！

## 方針

このプロジェクトでは、ボールの位置を表す変数（値がだんだん増えたり減ったりする）と、ボールが**どのように**動くかを制御し、特定の条件が満たされたときに変化する変数を使います。

### 描画

- 最初に描く円は `(5, 5)` にします。
- すべての円の半径は `10` とします。
- 円の色は HSL を使い、色相 `100`（緑）、彩度 `80`（鮮やかな色）、明度 `50`（中間の明るさ）から始めます。

### アニメーション

- 最初は、各繰り返しでボールを右に `2`、下に `1` 動かします。
- 色相は毎回 `1` ずつ増やし、最大値の `360` になったら、今度は減らし始めます。彩度と明度は変える必要はありません。

### バウンド

- ボールがキャンバスの端に達したら、向きを変えます。（やり方がわからないときは、ヒントを確認してください。）
- より楽しくするために、向きを変えるには `Math.randomInt(min, max)` 関数を使います。好きな動きになるように、`min` と `max` の値を選んでください。

## チェックを通過するには

この演習では、かなり自由に試してもらえるようにしています。確認するのは次の2点です：

- 最初のいくつかの円が正しく描かれていること。
- キャンバスの 80% 以上が色で塗られていること。

それを達成するための数値は自由に選んでかまいません。おそらく、`500` 回から `1000` 回程度繰り返す `repeat` ブロックが必要になるでしょう。

## 課題を分解しよう

この演習のコツは、一度にひとつずつ進めることです。

1. ボールが動くときに色が変わるようにする
2. 右側で跳ね返るようにする
3. 下端で跳ね返るようにする
4. ランダムに跳ね返るようにする
