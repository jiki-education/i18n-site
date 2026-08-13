---
lang: "zh-TW"
type: "exercise"
slug: "two-fer"
title: "買一送一 (Two-Fer)"
status: "published"
source_repo: "i18n"
source_path: "locales/zh-TW/curriculum/exercises/two-fer"
en_md5: "259ef6df34222c26ac1869815e38f66e"
governance_sha: "58f1c5d"
content_version: "0ae21872bdd3"
published_at: "2026-08-13"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"你使用了超過 6 行程式碼。"}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"建立買一送一函式"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"寫一個 twoFer 函式，它會接收一個名字並回傳 'One for [name], one for me.'。如果沒有提供名字（空字串），則使用 'you' 來代替名字。"},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"用 6 行程式碼解決"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"你能只用 6 行程式碼就解決這個問題嗎？"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"沒有提供名字"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"沒有提供名字，所以回傳 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"提供的名字為 Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"她的名字是 'Alice'，所以回傳 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"提供的名字為 Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"他的名字是 'Tom'，所以回傳 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"6 行程式碼"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"只用 6 行程式碼來完成這個練習。"}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"什麼會根據輸入而改變呢？"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"只有一點，就是句子中間的名字。如果有提供名字，就使用它。如果沒有，就使用預設的 `\"you\"`。"},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"我該如何檢查「是否有提供名字」呢？"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"使用 `if` 敘述將輸入與空字串 `\"\"` 進行比較。如果是空的，就使用 `\"you\"`。否則，就使用輸入的值。"},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"我該如何組合出最後的句子呢？"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"使用字串串接（`+`）或樣板字串，將這三個部分（`\"One for \"`、選定的名字，以及 `\", one for me.\"`）連接起來。"}]}]}]
---

現在，我們要以那個簡單的「Hello」練習為基礎，並加上一些額外的規則。

在某些英文口音中，當你快速唸出「two for」時，聽起來會像是「two fer」。「Two-for-one」是一種表達方式，意思是如果你買了一個，就能免費再獲得一個（也就是買一送一）。

想像一下，有一家麵包店推出了節慶優惠，你可以用一塊餅乾的價格買到兩塊餅乾。你接受了這個優惠，並決定把多出來的那塊餅乾送給別人。

你的任務是決定在送出多出來的餅乾時，你要說些什麼。

- 如果你知道對方的名字（例如 Alice），那麼你會說：`"One for Alice, one for me."`
- 如果你不知道對方的名字，你會說：`"One for you, one for me."`

寫一個名為 `twoFer(name)`（買一送一）的函式，讓它回傳對應的對話。

這裡有一些範例：

| 函式呼叫 | 回傳值 |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

作為加分挑戰，你能只用**短短 6 行程式碼**就寫出這個功能嗎？

祝你好運喔！
