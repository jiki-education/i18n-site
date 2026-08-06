---
lang: "ja"
type: "exercise"
slug: "alphanumeric"
title: "英数字判定"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/alphanumeric"
en_md5: "c8cd152f90c7fb519617ff5757e02c36"
governance_sha: "c80036b"
content_version: "d1ea66e74711"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"classifyString.name","english":"Classify a string","target":null},{"key":"classifyString.description","english":"Write helper functions to check if a string is alpha, numeric, or alphanumeric, then use them to classify the input string.","target":null},{"key":"useContinue.name","english":"Use continue","target":null},{"key":"useContinue.description","english":"In your isAlphanumeric check, once a character is a letter or a digit you're happy with it. Use continue to move straight on to the next character instead of nesting more conditions.","target":null}]},{"name":"scenarios","rows":[{"key":"duck.name","english":"Duck","target":null},{"key":"duck.description","english":"A purely alphabetic string should be classified as \"Alpha\".","target":null},{"key":"number.name","english":"42","target":null},{"key":"number.description","english":"A purely numeric string should be classified as \"Numeric\".","target":null},{"key":"alphanumeric.name","english":"Duck42","target":null},{"key":"alphanumeric.description","english":"A string with both letters and numbers should be classified as \"Alphanumeric\".","target":null},{"key":"notAlphanumeric1.name","english":"It's not 42!","target":null},{"key":"notAlphanumeric1.description","english":"A string with special characters should be classified as \"Unknown\".","target":null},{"key":"notAlphanumeric2.name","english":"42 Rubber Duck!","target":null},{"key":"notAlphanumeric2.description","english":"A string with spaces and special characters should be classified as \"Unknown\".","target":null},{"key":"alphanumericUsesContinue.name","english":"Used continue","target":null},{"key":"alphanumericUsesContinue.description","english":"Your solution works and uses continue to move past characters that are already accounted for.","target":null}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start when there are several functions to write?","target":null},{"key":"whereToStart.answer","english":"Pick the smallest helper first. Each helper loops over the characters of the string and asks the same kind of yes/no question about every one of them. Get one working and the others follow the same shape.","target":null},{"key":"checkAllLetters.question","english":"How do I check if every character in the input is a letter?","target":null},{"key":"checkAllLetters.answer","english":"Loop through each character and check whether it appears in the alphabet. A string's `.includes()` method answers exactly that: `\"...\".includes(char)`. Remember to include both lowercase and uppercase letters, otherwise a capital like the \"D\" in \"Duck\" won't count. If any character isn't in the alphabet, it isn't all alpha.","target":null},{"key":"checkAllDigits.question","english":"How do I do the same check for digits?","target":null},{"key":"checkAllDigits.answer","english":"Exactly the same pattern, but check against `\"0123456789\"` instead of the alphabet.","target":null},{"key":"alphanumericMeaning.question","english":"What does 'alphanumeric' mean. Does it mean both?","target":null},{"key":"alphanumericMeaning.answer","english":"Alphanumeric means each character is either a letter OR a digit. So for each character, if it's alpha you're happy, and if it's numeric you're also happy. Use `continue` to skip on. Only if it's neither should you reject.","target":null},{"key":"pickingLabels.question","english":"How do I pick between the four labels in whatAmI()?","target":null},{"key":"pickingLabels.answer","english":"Call all three helpers and use if/else. The order matters. Check the stricter cases ('alpha only' and 'numeric only') before 'alphanumeric', which is the looser case.","target":null}]},{"name":"checks","rows":[{"key":"mustUseContinue","english":"So close! Use `continue` to skip on to the next character.","target":null},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long.","target":null},{"key":"useIsAlpha","english":"This exercise wants you to write an `isAlpha()` helper and use it to classify the string.","target":null},{"key":"useIsNumeric","english":"This exercise wants you to write an `isNumeric()` helper and use it to classify the string.","target":null},{"key":"useIsAlphanumeric","english":"This exercise wants you to write an `isAlphanumeric()` helper and use it to classify the string.","target":null}]}]}]
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
