---
lang: "ja"
type: "exercise"
slug: "raindrops"
title: "雨滴の音"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/raindrops"
en_md5: "0bf4b9da3621fc60bdeab8dd785c918a"
governance_sha: "c80036b"
content_version: "500455071d11"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixteenLines","english":"You used more than sixteen lines of code.","target":"コードが16行を超えています。"}]},{"name":"tasks","rows":[{"key":"plings.name","english":"Plings","target":"プリング"},{"key":"plings.description","english":"Start off by getting the Pling sounds right. If the number is divisible by 3, return \"Pling\".","target":"まずはプリング音を正しく出せるようにしましょう。数値が3で割り切れる場合、\"Pling\"を返します。"},{"key":"plangs.name","english":"Plangs","target":"プラング"},{"key":"plangs.description","english":"Now get the Plang sounds right. If the number is divisible by 5, add \"Plang\" to the result. If it's divisible by both 3 and 5, return \"PlingPlang\".","target":"次はプラング音を正しく出しましょう。数値が5で割り切れる場合、結果に\"Plang\"を追加します。3と5の両方で割り切れる場合は、\"PlingPlang\"を返します。"},{"key":"plongs.name","english":"Plongs","target":"プロング"},{"key":"plongs.description","english":"Now get the Plong sounds right. If the number is divisible by 7, add \"Plong\" to the result. Numbers can be divisible by multiple factors.","target":"次はプロング音を正しく出しましょう。数値が7で割り切れる場合、結果に\"Plong\"を追加します。数値は複数の因数で割り切れることがあります。"},{"key":"noSound.name","english":"Numbers with no raindrop sound","target":"雨滴の音が出ない数値"},{"key":"noSound.description","english":"Finally, if the number is not divisible by 3, 5, or 7, return the number itself as a string.","target":"最後に、数値が3、5、7のいずれでも割り切れない場合、数値自体を文字列として返します。"},{"key":"solveInSixteenLines.name","english":"Solve in sixteen lines of code","target":"16行で解く"},{"key":"solveInSixteenLines.description","english":"Can you solve this with only sixteen lines of code?","target":"この演習を16行のコードで解けますか？"}]},{"name":"scenarios","rows":[{"key":"number3.name","english":"Number 3","target":"数値3"},{"key":"number3.description","english":"If 3 is input, return \"Pling\".","target":"3が入力された場合、\"Pling\"を返します。"},{"key":"number27.name","english":"Number 27","target":"数値27"},{"key":"number27.description","english":"If 27 is input, return \"Pling\".","target":"27が入力された場合、\"Pling\"を返します。"},{"key":"number5.name","english":"Number 5","target":"数値5"},{"key":"number5.description","english":"If 5 is input, return \"Plang\".","target":"5が入力された場合、\"Plang\"を返します。"},{"key":"number3125.name","english":"Number 3125","target":"数値3125"},{"key":"number3125.description","english":"If 3125 is input, return \"Plang\".","target":"3125が入力された場合、\"Plang\"を返します。"},{"key":"number15.name","english":"Number 15","target":"数値15"},{"key":"number15.description","english":"If 15 is input, return \"PlingPlang\".","target":"15が入力された場合、\"PlingPlang\"を返します。"},{"key":"number7.name","english":"Number 7","target":"数値7"},{"key":"number7.description","english":"If 7 is input, return \"Plong\".","target":"7が入力された場合、\"Plong\"を返します。"},{"key":"number21.name","english":"Number 21","target":"数値21"},{"key":"number21.description","english":"If 21 is input, return \"PlingPlong\".","target":"21が入力された場合、\"PlingPlong\"を返します。"},{"key":"number35.name","english":"Number 35","target":"数値35"},{"key":"number35.description","english":"If 35 is input, return \"PlangPlong\".","target":"35が入力された場合、\"PlangPlong\"を返します。"},{"key":"number105.name","english":"Number 105","target":"数値105"},{"key":"number105.description","english":"If 105 is input, return \"PlingPlangPlong\".","target":"105が入力された場合、\"PlingPlangPlong\"を返します。"},{"key":"number8.name","english":"Number 8","target":"数値8"},{"key":"number8.description","english":"If 8 is input, return \"8\".","target":"8が入力された場合、\"8\"を返します。"},{"key":"number52.name","english":"Number 52","target":"数値52"},{"key":"number52.description","english":"If 52 is input, return \"52\".","target":"52が入力された場合、\"52\"を返します。"},{"key":"bonus1.name","english":"Sixteen lines of code","target":"16行のコード"},{"key":"bonus1.description","english":"Solve the exercise with only sixteen lines of code.","target":"16行のコードだけでこの演習を解いてください。"}]},{"name":"hints","rows":[{"key":"onlyOneSound.question","english":"Why does my function only return one sound?","target":"なぜ関数が一つの音しか返さないのですか？"},{"key":"onlyOneSound.answer","english":"If you `return` inside each `if`, you give up as soon as the first divisor matches. You want to combine them. Instead of returning, append the sound to a result string and keep going.","target":"各`if`文の中で`return`すると、最初に条件が一致した時点で処理が終わってしまいます。複数の音を組み合わせるには、`return`を使わずに、結果の文字列に音を追加して続けます。"},{"key":"buildCombinedSound.question","english":"How do I build up the combined sound?","target":"組み合わせた音を作り上げるにはどうすればいいですか？"},{"key":"buildCombinedSound.answer","english":"Start with an empty result string. For each divisor (3, 5, 7), if it divides the number, append the corresponding sound onto the end of the result using concatenation with `+`.","target":"空の結果文字列から始めます。各割る数（3、5、7）について、その数で割り切れる場合、`+`を使った連結で、対応する音を結果の末尾に追加します。"},{"key":"noneMatch.question","english":"What if none of the divisors match?","target":"どの割る数にも当てはまらない場合はどうなりますか？"},{"key":"noneMatch.answer","english":"If the result is still empty after all three checks, the answer is just the number itself as a string. Convert the number and return that.","target":"3つのチェックの後でも結果が空のままなら、答えは数値自体を文字列にしたものです。数値を変換してそれを返します。"},{"key":"convertToString.question","english":"I return the number but it wants me to return it as a string. How do I do that?","target":"数値を返したのですが、文字列として返すように求められています。どうすればいいですか？"},{"key":"convertToString.answer","english":"Numbers and strings are different types, even if they look the same. You can convert a number to a string by putting it inside a template string with `${...}`.","target":"数値と文字列は、見た目が同じでも異なる型です。`${...}`を使ったテンプレート文字列の中に数値を入れることで、文字列に変換できます。"},{"key":"howManyReturns.question","english":"How many return statements should I have?","target":"`return`文はいくつ使うべきですか？"},{"key":"howManyReturns.answer","english":"Just one or two, typically. The whole point is letting the if-statements modify the result string, then returning that result once at the end.","target":"通常は1つか2つです。ポイントは、`if`文で結果の文字列を変更し、最後にその結果を1回だけ`return`することです。"}]}]}]
---

Raindropsは、プログラミングの面接で古くから使われてきた定番のFizzBuzz問題のバリエーションです。

ここでの課題は、与えられた数値を、対応する雨滴の音に変換することです。

そのために、その数値が何で割り切れるかを調べます（たとえば、数値10は1、2、5、10で割り切れます。数値12は1、2、3、4、6、12で割り切れます）。

与えられた数値が:

- 3で割り切れる場合、結果に "Pling" を追加します。
- 5で割り切れる場合、結果に "Plang" を追加します。
- 7で割り切れる場合、結果に "Plong" を追加します。
- 3でも5でも7でも割り切れない場合、結果は数値を文字列にしたものになります。

数値を入力として受け取り、その雨滴の音を返す、`raindrops(num)`（雨滴の音）という関数を作成する必要があります。

結果の文字列は、連結（英: _concatenation_）（`+`）またはテンプレート文字列（英: _template string_）を使って組み立てます。

### 例

- `raindrops(28)` は `"Plong"` を返します。28は7で割り切れ、3や5では割り切れないからです。
- `raindrops(30)` は `"PlingPlang"` を返します。30は3と5で割り切れ、7では割り切れないからです。
- `raindrops(34)` は `"34"` を返します。34は3でも5でも7でも割り切れないからです。
