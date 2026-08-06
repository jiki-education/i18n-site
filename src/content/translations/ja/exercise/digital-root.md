---
lang: "ja"
type: "exercise"
slug: "digital-root"
title: "デジタルルート"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "c80036b"
content_version: "93229ad57f06"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"各桁の和を計算する"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"`digitalRoot`という関数を作成し、数値の各桁を足し合わせます。一桁の数値や、各桁を足して一桁になる数値は、この一度目の計算だけで完了します。"},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"一桁になるまで縮約を続ける"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"場合によっては、一度桁を合計してもまだ一桁を超えることがあります（例：942は15になります）。結果の各桁を、一桁になるまで足し続けます。"},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"おまけ：短くまとめる"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"現在の解答でも正しく動作します。このおまけ課題では、関数全体を少ない行数に収め、余分な部分を省いて簡潔にしてください。"}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"ゼロ"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"0のデジタルルートは0です。"},{"key":"drSingleDigit.name","english":"Already a single digit","target":"すでに一桁の数値"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"もともと一桁の数値は、その値自体がデジタルルートになります。"},{"key":"drTwoDigits.name","english":"Two digits","target":"2桁の数値"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16は一度の計算で7に縮約されます（1 + 6）。"},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"3桁、一度の計算で完了"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132は一度の計算で6に縮約されます（1 + 3 + 2）。"},{"key":"drThirtyNine.name","english":"Two passes needed","target":"2回の計算が必要"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39は合計が12になり、さらに足して3になります。"},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"もう一度計算が必要な数値"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942は合計が15になり、さらに足して6になります。"},{"key":"drLarge.name","english":"A larger number","target":"大きな数値"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193は最終的に2に縮約されます。"},{"key":"drNines.name","english":"All nines","target":"すべてが9"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999は合計が45になり、さらに足して9になります。"},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"簡潔で短い解答"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345は最終的に6に縮約されます（1 + 2 + 3 + 4 + 5 = 15  → 1 + 5 = 6）。"}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"デジタルルートとは一体何ですか？"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"数値の各桁をすべて足し合わせます。結果が一桁であればそれが答えです。一桁を超える場合は、その結果の各桁もさらに足して、一桁になるまで繰り返します。"},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"数値の各桁を足すにはどうすればよいですか？"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"数値を文字列に変換し、`for...of`ループで一文字ずつ処理します。合計値を保持しながら、各桁を足していきます。"},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"しかし、各桁は数値ではなく文字ですよね？"},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"文字列をループで回すと、各文字（例：`\"4\"`）はテキストです。合計に加算する前に、`Number(char)`を使って数値の`4`に変換してください。"},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"何回計算が必要かわからない場合、どのように繰り返せばよいですか？"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"事前に何回桁を合計すればよいかわからないため、`while`ループが最適です。数値が一桁を超えている間、ループを続けます。"},{"key":"keepGoing.question","english":"When do I stop?","target":"いつ停止すればよいですか？"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"数値が一桁になったらすぐに停止し、その値を返します。"}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"もう少し！この演習では、一桁になるまで縮約を続けるために`while`ループを使っていただきたいです。"},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"あと少し！解答は正しく動作していますが、少し長いです。コンパクトにまとめてみてください。"}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"文字列を数値に変換します"},{"key":"number.category","english":"Type Conversion","target":"型変換"},{"key":"string.description","english":"Convert a number into a string","target":"数値を文字列に変換します"},{"key":"string.category","english":"Type Conversion","target":"型変換"}]}]}]
---

デジタルルート（英: _digital root_）とは、ある数字の各桁を、一桁になるまで足し続けた値のことです。

一度足しただけでまだ2桁以上になる場合は、その結果の各桁をさらに足し、一桁になるまで繰り返します。

例えば、`942`のデジタルルートを求めるには：

```
9 + 4 + 2 = 15
1 + 5 = 6
```

ですから、`942`のデジタルルートは`6`になります。

すでに一桁の数字（`7`など）は、それ自身がデジタルルートです。

`digitalRoot`という関数を作成してください。この関数は数値を受け取り、そのデジタルルートを返します。

### `String()`関数

ここ数回のレッスンでは、文字列を数値に変換する`Number(str)`関数を使ってきましたね。

同じことを逆に、`String(num)`関数を使って数値を文字列に変換することもできます。例えば：

```js
String(147) === "147"
```

ここでも、先頭が大文字であることに注意してください。でも、その理由は今はまだ気にしなくて大丈夫です！

### 学んだことを実践する

この演習にはさまざまな解き方がありますが、ここでは`while`ループを使った解答を目指してください。

楽しんでください！
