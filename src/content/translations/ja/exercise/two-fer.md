---
lang: "ja"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/two-fer"
en_md5: "7e59867ebe08e4bd9b598aae4a8be76a"
governance_sha: "c80036b"
content_version: "3f39f6db9ae1"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"コードが6行を超えています。"}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"two-fer関数を作成する"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"名前を受け取り、'One for [name], one for me.' を返す twoFer 関数を書いてください。名前が指定されない場合（空文字列）、名前の代わりに 'you' を使用してください。"},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"6行のコードで解く"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"この問題をわずか6行のコードで解けますか？"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"名前なし"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"名前が指定されていないので、'One for you, one for me.' を返します。"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Aliceが指定された場合"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"名前は 'Alice' なので、'One for Alice, one for me.' を返します。"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Tomが指定された場合"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"名前は 'Tom' なので、'One for Tom, one for me.' を返します。"},{"key":"bonus1.name","english":"Six lines of code","target":"6行のコード"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"わずか6行のコードで演習を解きます。"}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"入力によって何が変わりますか？"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"一つだけです。文の真ん中にある名前です。名前が与えられたらそれを使い、与えられなければ、既定の `\\\"you\\\"` を使います。"},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"「名前が与えられたか」をどのようにチェックしますか？"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"入力を空文字列 `\\\"\\\"` と比較するif文です。空なら `\\\"you\\\"` を使い、そうでなければ入力を使います。"},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"最終的な文をどのように組み立てますか？"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"三つの部分（`\\\"One for \\\"`、選んだ名前、および `\\\", one for me.\\\"`）を連結（`+`）またはテンプレート文字列で結合します。"}]}]}]
---

さて、あの簡単な「Hello」の演習を発展させて、もう少しルールを追加してみましょう。

英語の一部の方言では、「two for」を早く言うと「two fer」のように聞こえます。ツーフォーワンは、1つ買うともう1つ無料でもらえるという意味の表現です。

あるパン屋さんで、ホリデーセールとしてクッキーを2つ買うと1つ分の値段で買えるキャンペーンをしています。あなたはそのキャンペーンを利用し、余ったクッキーを誰かにあげることにしました。

この課題では、余ったクッキーを渡すときに言う言葉を決めます。

- もし相手の名前（例：Alice）がわかっているなら、次のように言います："One for Alice, one for me."
- もし相手の名前がわからなければ、次のように言います："One for you, one for me."

`twoFer(name)`（「二つで一つ」の意味）という関数を書いて、適切な会話を返すようにしてください。

例を示します。

| 関数呼び出し       | 戻り値                          |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

おまけとして、このプログラムを**たった6行のコード**で書けますか？

がんばって！
