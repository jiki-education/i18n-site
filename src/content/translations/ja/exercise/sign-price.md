---
lang: "ja"
type: "exercise"
slug: "sign-price"
title: "看板の価格"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/sign-price"
en_md5: "213371ff2930f42dcaf9062f99d59618"
governance_sha: "c80036b"
content_version: "e68358f3ad2c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"コードの行数が多すぎます。短くできますか？"}]},{"name":"tasks","rows":[{"key":"calculateSignPrice.name","english":"Calculate Sign Price","target":"看板の価格を計算する"},{"key":"calculateSignPrice.description","english":"Write a function that calculates the price of a sign. Each letter costs $12. Spaces are free and should not be counted. Return the result as a formatted string.","target":"看板の価格を計算する関数を作成してください。各文字は12ドルかかります。スペースは無料で、カウントしないでください。結果を整形された文字列で返してください。"},{"key":"solveInNineLines.name","english":"Solve in 9 lines of code","target":"9行のコードで解く"},{"key":"solveInNineLines.description","english":"Can you solve this exercise with only 9 lines of code?","target":"この演習をわずか9行のコードで解けますか？"}]},{"name":"scenarios","rows":[{"key":"simpleWord.name","english":"Simple word","target":"シンプルな単語"},{"key":"simpleWord.description","english":"A single word with no spaces.","target":"スペースが含まれない1つの単語"},{"key":"singleLetter.name","english":"Single letter","target":"単一の文字"},{"key":"singleLetter.description","english":"A sign with just one letter.","target":"1文字だけの看板"},{"key":"twoWords.name","english":"Two words","target":"2つの単語"},{"key":"twoWords.description","english":"Two words with a space that should be skipped.","target":"スキップすべきスペースが1つある2つの単語"},{"key":"multipleSpaces.name","english":"Multiple spaces","target":"複数のスペース"},{"key":"multipleSpaces.description","english":"Multiple words with several spaces to skip.","target":"スキップすべきスペースがいくつかある複数の単語"},{"key":"longText.name","english":"Long text","target":"長いテキスト"},{"key":"longText.description","english":"A longer sign with more letters.","target":"文字数の多い長い看板"},{"key":"allSpaces.name","english":"All spaces","target":"すべてスペース"},{"key":"allSpaces.description","english":"A sign with only spaces has no letters to charge for.","target":"スペースだけの看板には課金対象の文字がありません"},{"key":"bonus1.name","english":"9 lines of code","target":"9行のコード"},{"key":"bonus1.description","english":"Solve the exercise with only 9 lines of code.","target":"この演習をわずか9行のコードで解いてください"}]},{"name":"hints","rows":[{"key":"whatCounting.question","english":"What am I actually counting?","target":"実際に何を数えているのですか？"},{"key":"whatCounting.answer","english":"Letters. Specifically, anything that isn't a space. So you want a counter that goes up for each non-space character in the sign text.","target":"文字です。具体的には、スペース以外のすべてです。看板のテキスト内の各スペース以外の文字に対してカウントアップするカウンターが必要です。"},{"key":"loopCharacters.question","english":"How do I loop through the characters?","target":"文字をループするにはどうすればよいですか？"},{"key":"loopCharacters.answer","english":"A `for...of` loop gives you each character in turn, so you can look at them one at a time.","target":"`for...of`ループを使うと、各文字を順番に取得できるので、1つずつ確認できます。"},{"key":"checkSpace.question","english":"How do I check whether a character is a space?","target":"文字がスペースかどうかを確認するには？"},{"key":"checkSpace.answer","english":"Inside the loop, use an if-statement to compare the character against `\" \"`. Only count the character when it isn't a space.","target":"ループ内で、文字を`\" \"`と比較するif文を使います。スペースでない場合にのみカウントします。"},{"key":"buildResultString.question","english":"How do I build the result string?","target":"結果の文字列はどのように作りますか？"},{"key":"buildResultString.answer","english":"Use string concatenation or template strings. Check the concepts if you need a reminder on these.","target":"文字列の連結やテンプレート文字列を使います。これらの復習が必要なら、コンセプトを確認してください。"}]}]}]
---

看板製作のお店を営んでいます。看板に書かれた文字1つにつき、12ドルいただきます。スペースは無料（料金がかかりません）です。

看板の文字列を受け取り、合計金額を表すメッセージを返す関数 `signPrice`（看板の価格）を作成してください。返す文字列は、`"That will cost "` の後に金額を付けたものです。たとえば：

- `signPrice("Burgers")`（7文字）は `"That will cost $84"` を返します。
- `signPrice("Frank's Hotdogs")`（14文字、スペースを除く）は `"That will cost $168"` を返します。

楽しんでください！
