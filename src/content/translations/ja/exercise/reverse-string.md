---
lang: "ja"
type: "exercise"
slug: "reverse-string"
title: "文字列の反転"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "c80036b"
content_version: "8b6a8c2c522e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"文字列の反転"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"文字列を反転させ、左から右ではなく右から左に読めるようにします。"}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"空文字列"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"空文字列を反転させると、空文字列が返ります。"},{"key":"reverseWord.name","english":"A word","target":"単語"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"'robot' という単語を反転させてください。"},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"大文字で始まる単語"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"大文字で始まる単語 'Ramen' を反転させてください。"},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"句読点を含む文"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"句読点を含む文 'I'm hungry!' を反転させてください。"},{"key":"reversePalindrome.name","english":"Palindrome","target":"回文"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"回文は反転しても同じままです。"},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"偶数文字数の単語"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"偶数文字数の単語 'drawer' を反転させてください。"},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"全角文字"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"全角文字 '子猫' を反転させてください。"},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"絵文字の家族"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"絵文字の家族を反転させてください。"},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"レインボーフラッグ"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"反転させてレインボーフラッグを作ってください。"}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"単語を手で反転させるには、どうしますか？"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"左から右に読んで、右から左に書きます。つまり、各文字を順に取り出し、今まで書いたものの前に置いていきます。"},{"key":"mapToCode.question","english":"How does that map to code?","target":"それをコードにすると、どうなりますか？"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"入力文字列を1文字ずつループします。各文字を、結果の前に追加していきます。つまり、結果の後ろではなく前に置くのです。"},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"後ろに追加（append）ではなく、前に追加（prepend）するにはどうすればよいですか？"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"`+` 演算子では、前に追加するのは順序の問題です。`result + char`（後ろに追加）の代わりに、`char + result`（前に追加）を使います。"}]}]}]
---

文字列を反転させる（左から右ではなく、右から左に読む）ことは、プログラミングでは意外とよく出てくる処理です。

たとえばバイオインフォマティクスでは、DNAやRNAの塩基配列を逆順にすることが、相補鎖を探したり回文配列を特定するといった解析で重要になります。

課題は、`reverse`（逆にする）という関数を作成してください。この関数は文字列を入力として受け取り、反転した文字列を返すものです。

例：

- `"stressed"` を `"desserts"` にする
- `"strops"` を `"sports"` にする
- `"racecar"` を `"racecar"` にする（回文）

### 最後の2つの例について

最後の2つの例は、ちょっと変に見えませんか？　何が起こっているのでしょう？

実は、多くの絵文字は、見えない（幅ゼロの）スペースでつなぎ合わせた、他の絵文字からできています。

家族の絵文字（👩‍👩‍👧‍👦）は、女性2人と子ども2人でできています。これを逆にすると、個々の文字（👦‍👧‍👩‍👩）が見えてきます。

もう一つは虹と旗（🌈‍️🏳）です。順番を逆にして旗、虹の順にすると、レインボーフラッグ（🏳️‍🌈️）になります！

結果を1文字ずつ組み立てれば、これらは問題なく動きます。もし、もっと賢いやり方を使おうとすると、絵文字がバラバラになってしまうかもしれません。
