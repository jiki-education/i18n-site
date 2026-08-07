---
lang: "ja"
type: "exercise"
slug: "alphanumeric"
title: "英数字判定"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/alphanumeric"
en_md5: "c8cd152f90c7fb519617ff5757e02c36"
governance_sha: "90a620a"
content_version: "742c0c868590"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"classifyString.name","english":"Classify a string","target":"文字列の分類"},{"key":"classifyString.description","english":"Write helper functions to check if a string is alpha, numeric, or alphanumeric, then use them to classify the input string.","target":"文字列が英字、数字、または英数字で構成されているかを判定するヘルパー関数を作成し、それらを使って入力文字列を分類します。"},{"key":"useContinue.name","english":"Use continue","target":"continueを使う"},{"key":"useContinue.description","english":"In your isAlphanumeric check, once a character is a letter or a digit you're happy with it. Use continue to move straight on to the next character instead of nesting more conditions.","target":"`isAlphanumeric`のチェックで、文字が英字または数字であれば、それで満足です。`continue`を使ってすぐ次の文字に進み、余計な条件の入れ子を避けましょう。"}]},{"name":"scenarios","rows":[{"key":"duck.name","english":"Duck","target":"Duck"},{"key":"duck.description","english":"A purely alphabetic string should be classified as \"Alpha\".","target":"英字のみの文字列は\"Alpha\"に分類されます。"},{"key":"number.name","english":"42","target":"42"},{"key":"number.description","english":"A purely numeric string should be classified as \"Numeric\".","target":"数字のみの文字列は\"Numeric\"に分類されます。"},{"key":"alphanumeric.name","english":"Duck42","target":"Duck42"},{"key":"alphanumeric.description","english":"A string with both letters and numbers should be classified as \"Alphanumeric\".","target":"英字と数字の両方を含む文字列は\"Alphanumeric\"に分類されます。"},{"key":"notAlphanumeric1.name","english":"It's not 42!","target":"It's not 42!"},{"key":"notAlphanumeric1.description","english":"A string with special characters should be classified as \"Unknown\".","target":"記号を含む文字列は\"Unknown\"に分類されます。"},{"key":"notAlphanumeric2.name","english":"42 Rubber Duck!","target":"42 Rubber Duck!"},{"key":"notAlphanumeric2.description","english":"A string with spaces and special characters should be classified as \"Unknown\".","target":"スペースや記号を含む文字列は\"Unknown\"に分類されます。"},{"key":"alphanumericUsesContinue.name","english":"Used continue","target":"continueを使用"},{"key":"alphanumericUsesContinue.description","english":"Your solution works and uses continue to move past characters that are already accounted for.","target":"解答は正しく動作し、`continue`を使ってすでに確認した文字を飛ばしています。"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start when there are several functions to write?","target":"いくつか関数を作るとき、どこから始めるのが良いですか？"},{"key":"whereToStart.answer","english":"Pick the smallest helper first. Each helper loops over the characters of the string and asks the same kind of yes/no question about every one of them. Get one working and the others follow the same shape.","target":"まずは一番小さなヘルパーから取り組みましょう。どのヘルパーも文字列の各文字をループして、同じ種類の「はい/いいえ」の質問をします。1つが動作すれば、他の関数も同じ形で書けます。"},{"key":"checkAllLetters.question","english":"How do I check if every character in the input is a letter?","target":"入力のすべての文字が英字かどうかを確認するにはどうすればいいですか？"},{"key":"checkAllLetters.answer","english":"Loop through each character and check whether it appears in the alphabet. A string's `.includes()` method answers exactly that: `\"...\".includes(char)`. Remember to include both lowercase and uppercase letters, otherwise a capital like the \"D\" in \"Duck\" won't count. If any character isn't in the alphabet, it isn't all alpha.","target":"各文字をループして、アルファベットに含まれるかどうかをチェックします。文字列の`.includes()`メソッドがまさにそれを実現します。`\"...\".includes(char)`というコードでチェックできます。大文字と小文字の両方を含めるのを忘れないでください。そうしないと、\"Duck\"の\"D\"のような大文字がカウントされません。1文字でもアルファベットに含まれていなければ、全体が英字ではありません。"},{"key":"checkAllDigits.question","english":"How do I do the same check for digits?","target":"数字について同じチェックをするにはどうすればいいですか？"},{"key":"checkAllDigits.answer","english":"Exactly the same pattern, but check against `\"0123456789\"` instead of the alphabet.","target":"全く同じパターンで、アルファベットの代わりに`\"0123456789\"`を使ってチェックします。"},{"key":"alphanumericMeaning.question","english":"What does 'alphanumeric' mean. Does it mean both?","target":"「英数字」とはどういう意味ですか？　両方ですか？"},{"key":"alphanumericMeaning.answer","english":"Alphanumeric means each character is either a letter OR a digit. So for each character, if it's alpha you're happy, and if it's numeric you're also happy. Use `continue` to skip on. Only if it's neither should you reject.","target":"英数字は、各文字が英字または数字のどちらかであることを意味します。したがって、各文字について、英字であればそれでよく、数字でも同様です。`continue`を使ってスキップしましょう。どちらでもない場合にのみ、不合格と判断します。"},{"key":"pickingLabels.question","english":"How do I pick between the four labels in whatAmI()?","target":"`whatAmI()`で4つのラベルからどれかを選ぶにはどうすればよいですか？"},{"key":"pickingLabels.answer","english":"Call all three helpers and use if/else. The order matters. Check the stricter cases ('alpha only' and 'numeric only') before 'alphanumeric', which is the looser case.","target":"3つのヘルパーをすべて呼び出して、`if`/`else`を使います。順番に注意してください。「英字のみ」や「数字のみ」のような厳しい条件を先に確認し、より緩い「英数字」は後回しにします。"}]},{"name":"checks","rows":[{"key":"mustUseContinue","english":"So close! Use `continue` to skip on to the next character.","target":"おしい！次の文字にスキップするために`continue`を使ってください。"},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long.","target":"おしい！解答は正しく動作していますが、少し長めです。"},{"key":"useIsAlpha","english":"This exercise wants you to write an `isAlpha()` helper and use it to classify the string.","target":"この演習では、`isAlpha()`ヘルパーを作って文字列の分類に使ってください。"},{"key":"useIsNumeric","english":"This exercise wants you to write an `isNumeric()` helper and use it to classify the string.","target":"この演習では、`isNumeric()`ヘルパーを作って文字列の分類に使ってください。"},{"key":"useIsAlphanumeric","english":"This exercise wants you to write an `isAlphanumeric()` helper and use it to classify the string.","target":"この演習では、`isAlphanumeric()`ヘルパーを作って文字列の分類に使ってください。"}]}]}]
---

この演習では、文字列に英字や数字が含まれているかどうかを判定する関数を作ります。

次の3つのヘルパー関数を作成します。

- `isAlpha(string)`（ASCII英字のみで構成されているかを判定する関数）は、文字列がASCII英字（たとえば `"A"`、`"a"`、`"Hello"`）だけで構成されているかどうかを判定します。
- `isNumeric(string)`（数字のみで構成されているかを判定する関数）は、文字列が数字（たとえば `"0"`、`"1"`、`"456"`）だけで構成されているかどうかを判定します。
- `isAlphanumeric(string)`（ASCII英字または数字のみで構成されているかを判定する関数）は、文字列がASCII英字または数字（たとえば `"Hello"`、`"42"`、`"Hello42"`）だけで構成されているかどうかを判定します。

その他の記号（たとえば `"! ?"`）や非ASCII文字（たとえば `"じき"`、`"正直"`）に対しては、3つの関数はすべて `false` を返します。

次に、これらのヘルパー関数を使って文字列を分類する `whatAmI(string)`（文字列の種類を判定する関数）を作ります。

- 英字のみの文字列は `"Alpha"` を返します。
- 数字のみの文字列は `"Numeric"` を返します。
- 英字と数字の両方を含む文字列は `"Alphanumeric"` を返します。
- それ以外の文字列は `"Unknown"` を返します。

### 学んだことを使ってみましょう

この演習にはさまざまな解法がありますが、求めているのは `continue` 文と上記の3つの関数を使った解答です。

また、この演習では、全体を42行以内のコードで書くことにも挑戦します。この目標が必ずしも実際の開発で理想的なコードとは限りません。数行増やした方がもっと良い解答になることもありますし、もっと短い解答も存在します。しかし、自分の力を伸ばすためのよい目標です。

楽しんでください！
