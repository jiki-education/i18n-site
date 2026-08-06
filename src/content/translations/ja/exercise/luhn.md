---
lang: "ja"
type: "exercise"
slug: "luhn"
title: "Luhn"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/luhn"
en_md5: "6325652b095bb16f3d5b8950b2c6389a"
governance_sha: "c80036b"
content_version: "1cb0494e77b3"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"doubleAndSum.name","english":"Double every second digit and sum","target":"右から1つおきの数字を2倍して合計"},{"key":"doubleAndSum.description","english":"Write a function called valid that ignores spaces, then doubles every second digit counting from the right (subtracting 9 from any result over 9), sums all the digits, and returns true when the total is divisible by 10.","target":"スペースを無視し、右から数えて1つおきの数字を2倍し（9を超えたら9を引く）、すべての数字を合計して10で割り切れる場合に`true`を返す`valid`関数を作成してください。"},{"key":"spotInvalidNumbers.name","english":"Spot invalid numbers","target":"無効な番号を見分ける"},{"key":"spotInvalidNumbers.description","english":"Numbers whose digits are all valid but whose checksum doesn't come out divisible by 10 should return false.","target":"すべての数字が有効でも、チェックサムが10で割り切れない番号は`false`を返します。"},{"key":"rejectBadInput.name","english":"Reject bad input","target":"不正な入力を拒否する"},{"key":"rejectBadInput.description","english":"Reject strings that are a single character or shorter, and reject any string containing a character that isn't a digit or a space.","target":"1文字以下の文字列、または数字とスペース以外の文字が含まれている文字列は無効とみなしてください。"}]},{"name":"scenarios","rows":[{"key":"luhnSimpleValid.name","english":"A simple valid number","target":"単純な有効な番号"},{"key":"luhnSimpleValid.description","english":"A valid number should return true.","target":"有効な番号は`true`を返します。"},{"key":"luhnValidTwoDigit.name","english":"Valid two-digit number","target":"有効な2桁の番号"},{"key":"luhnValidTwoDigit.description","english":"A valid two-digit number should return true.","target":"有効な2桁の番号は`true`を返します。"},{"key":"luhnValidCanadianSin.name","english":"Valid Canadian SIN","target":"有効なカナダのSIN"},{"key":"luhnValidCanadianSin.description","english":"A valid number with spaces should return true.","target":"スペースを含む有効な番号は`true`を返します。"},{"key":"luhnValidEvenDigits.name","english":"Valid number with an even number of digits","target":"有効な偶数桁の番号"},{"key":"luhnValidEvenDigits.description","english":"A valid number with an even number of digits should return true.","target":"有効な偶数桁の番号は`true`を返します。"},{"key":"luhnValidVeryLong.name","english":"Very long number","target":"非常に長い番号"},{"key":"luhnValidVeryLong.description","english":"A very long valid number should still return true.","target":"非常に長い有効な番号でも`true`を返します。"},{"key":"luhnInvalidCanadianSin.name","english":"Invalid Canadian SIN","target":"無効なカナダのSIN"},{"key":"luhnInvalidCanadianSin.description","english":"A number whose checksum fails should return false.","target":"チェックサムが通らない番号は`false`を返します。"},{"key":"luhnInvalidCreditCard.name","english":"Invalid credit card","target":"無効なクレジットカード番号"},{"key":"luhnInvalidCreditCard.description","english":"An invalid credit card number should return false.","target":"無効なクレジットカード番号は`false`を返します。"},{"key":"luhnInvalidLongRemainderDiv5.name","english":"Invalid long number with a remainder divisible by 5","target":"合計が5で割り切れるが10で割り切れない長い番号"},{"key":"luhnInvalidLongRemainderDiv5.description","english":"A long number whose total is divisible by 5 but not 10 should return false.","target":"合計が5で割り切れても10で割り切れない長い番号は`false`を返します。"},{"key":"luhnSingleDigit.name","english":"Single digit is invalid","target":"1桁の番号は無効"},{"key":"luhnSingleDigit.description","english":"A single-digit string can never be valid.","target":"1桁の文字列は決して有効になりません。"},{"key":"luhnZeroWithSpace.name","english":"Single zero with a space","target":"スペースを含む1桁の0"},{"key":"luhnZeroWithSpace.description","english":"A single zero with a space is invalid, because only one digit remains once spaces are ignored.","target":"スペースを含む1つの0は無効です。スペースを無視すると1桁しか残らないからです。"},{"key":"luhnTrailingLetter.name","english":"Trailing letter","target":"末尾に英字が付いた番号"},{"key":"luhnTrailingLetter.description","english":"A valid number with a non-digit added at the end becomes invalid.","target":"末尾に数字以外の文字が追加された有効な番号は無効になります。"},{"key":"luhnColon.name","english":"Colon character","target":"コロン文字"},{"key":"luhnColon.description","english":"A colon is one less than the character '0', and must not be treated as a digit.","target":"コロン（`:`）は文字`'0'`より1小さい値であり、数字として扱ってはいけません。"},{"key":"luhnPercent.name","english":"Percent character in the middle","target":"途中にパーセント記号が含まれる番号"},{"key":"luhnPercent.description","english":"A non-digit, non-space character in the middle makes the number invalid, even when the digits alone would sum to a multiple of 10.","target":"途中に数字でもスペースでもない文字が含まれている場合、数字だけなら合計が10の倍数になっていたとしても、その番号は無効です。"}]},{"name":"hints","rows":[{"key":"whatIsLuhn.question","english":"How does the Luhn check actually work?","target":"ルーンチェックは実際にどのように動くのですか？"},{"key":"whatIsLuhn.answer","english":"Ignore any spaces first. Then, starting from the rightmost digit and moving left, double every second digit. If a doubled value goes above 9, subtract 9. Add all the resulting digits together. If that total divides evenly by 10, the number is valid.","target":"最初にすべてのスペースを無視します。次に、右端の数字から左に向かって、1つおきの数字を2倍します。2倍した結果が9より大きい場合は9を引きます。得られた数字をすべて合計します。その合計が10で割り切れれば、番号は有効です。"},{"key":"stripSpaces.question","english":"What do I do with the spaces?","target":"スペースはどうすればいいですか？"},{"key":"stripSpaces.answer","english":"Spaces are only there for readability. Skip over them with `continue` so they don't count as digits and don't affect the positions of the real digits.","target":"スペースは読みやすさのためにあるだけです。`continue`を使ってスキップし、数字としてカウントされないように、また実際の数字の位置に影響を与えないようにします。"},{"key":"rejectNonDigits.question","english":"How do I reject invalid characters?","target":"無効な文字を拒否するにはどうすればいいですか？"},{"key":"rejectNonDigits.answer","english":"As you look at each character, if it isn't a space and isn't one of `0123456789`, you can immediately return `false`. A handy check is `\"0123456789\".includes(char)`.","target":"各文字を調べて、スペースでも`0123456789`のいずれでもなければ、すぐに`false`を返します。`\"0123456789\".includes(char)`を使うと便利です。"},{"key":"everySecondDigit.question","english":"Which digits do I double?","target":"どの数字を2倍すればいいですか？"},{"key":"everySecondDigit.answer","english":"Every second one. It helps to build up a clean string of just the digits first, then loop over it with an index so you can tell each digit's position.","target":"1つおきです。まず数字だけのきれいな文字列を作り、それからインデックスを使ってループして各数字の位置がわかるようにするとやりやすいです。"},{"key":"fromTheRight.question","english":"But I need to count from the right, not the left.","target":"でも、左からではなく右から数えないといけませんよね？"},{"key":"fromTheRight.answer","english":"If your clean digit string has length `len` and you're at index `i` (counting from 0 on the left), then its distance from the right is `len - 1 - i`. Double the digit whenever that distance is odd.","target":"数字だけの文字列の長さが`len`で、今が左から数えて`i`番目（0始まり）だとすると、右からの距離は`len - 1 - i`になります。その距離が奇数のときに数字を2倍します。"},{"key":"doublingOverNine.question","english":"What happens when doubling gives me a two-digit number?","target":"2倍すると2桁の数字になったらどうしますか？"},{"key":"doublingOverNine.answer","english":"If doubling makes the digit greater than 9, subtract 9 from it. For example 6 doubles to 12, and 12 - 9 = 3. (This gives the same answer as adding the two digits together.)","target":"2倍して9を超えたら、9を引きます。たとえば6を2倍すると12になり、12 - 9 = 3です。（これは2桁の数字を足し合わせたのと同じ答えになります。）"},{"key":"finalCheck.question","english":"What's the final validity check?","target":"最終的な有効性チェックは何ですか？"},{"key":"finalCheck.answer","english":"Add up every digit (doubled or not) and check whether the total is divisible by 10, i.e. `total % 10 === 0`. Remember to also reject strings that have one digit or fewer.","target":"すべての数字（2倍したものもそうでないものも）を合計し、その合計が10で割り切れるかどうか、つまり`total % 10 === 0`かどうかをチェックします。1桁以下の文字列も拒否するのを忘れないでください。"}]},{"name":"checks","rows":[{"key":"mustUseFor","english":"So close! This exercise wants you to solve it using a `for` loop.","target":"もう少しです！この演習では`for`ループを使って解くことが求められています。"}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing a digit to a number","target":"数字を含む文字列を数値に変換します"},{"key":"number.category","english":"Type Conversion","target":"型変換"},{"key":"includes.description","english":"Check whether a string contains a smaller string","target":"文字列が部分文字列を含むかどうかを調べます"},{"key":"includes.category","english":"String Operations","target":"文字列操作"},{"key":"length.description","english":"The number of characters in a string","target":"文字列の文字数"},{"key":"length.category","english":"String Operations","target":"文字列操作"}]}]}]
---

先ほど、本のISBN番号の検証について見ました。もうひとつ、さまざまな場面で使われる共通の計算式として、ルーン公式（英: _Luhn formula_）があります。もっとも有名なのは、クレジットカード番号の入力ミスを検出する用途です。

### ルーンチェック

ルーンチェックは次の手順で行います。

- 最も右の数字から左に向かって、1つおきの数字の値を2倍にします。
- 2倍にした結果が9より大きくなった場合は、そこから9を引きます。
- すべての数字を合計します。
- 合計が10で割り切れれば、その番号は有効です。

たとえば `"067"` で手順を追ってみましょう。

```
0   6   7     // 元の数字
0  12   7     // 右から1つおきの数字を2倍
0   3   7     // 12は9より大きいので、9を引くと → 3
       10     // すべての数字を合計する
     true     // 10は10で割り切れるので、067は有効
```

### 今回の課題

`valid`（有効）という関数を作成し、文字列を受け取ってLuhnチェックに合格すれば `true`、さもなければ `false` を返すようにします。

番号は文字列として与えられ、読みやすさのためにスペースを含むことがあります（例：`"4539 1488 0343 6467"`）。スペースは無視してください。

重要な注意点:

- 入力にはスペースが含まれる可能性があります。無視してください。
- 入力にスペース以外の文字が含まれている場合は、`false` を返してください。
- （スペースを取り除いた状態で）長さが1以下の文字列は、有効ではありません。

### 学んだことの実践

この演習を解く方法はいくつもありますが、皆さんに考えていただきたい解答は `for` ループを使うものです。

前回の演習で紹介した<a href="/concepts/type-conversion" target="_blank" rel="noopener noreferrer">`Number(str)`</a>関数も必要になります。

楽しんでください！
