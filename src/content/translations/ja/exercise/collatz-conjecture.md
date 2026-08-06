---
lang: "ja"
type: "exercise"
slug: "collatz-conjecture"
title: "コラッツ予想"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "c80036b"
content_version: "a11e2797e2ac"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"コラッツのステップ数を計算する"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"数値を受け取り、コラッツ予想のルール（偶数なら2で割り、奇数なら3を掛けて1を足す）に従って、1に到達するまでのステップ数を返す関数を作成してください。"}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"1"},{"key":"number1.description","english":"Zero steps for one.","target":"1の場合は0ステップ"},{"key":"number16.name","english":"Number 16","target":"16"},{"key":"number16.description","english":"Divide if even.","target":"偶数なら2で割る"},{"key":"number12.name","english":"Number 12","target":"12"},{"key":"number12.description","english":"Even and odd steps.","target":"偶数と奇数のステップ"},{"key":"number1000000.name","english":"Number 1000000","target":"1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"多くの偶数と奇数のステップ"}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"数が1になるまでループを続けるにはどうすればいいですか？"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"引数なしの `repeat()` ループを使ってください。これは `return` で抜けるまで無限に繰り返します。ループの中で、数を次の数に置き換え、1に達したら `return` します。"},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"各ステップでどちらのルールを適用するか、どうやって判断しますか？"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"数が偶数かどうかを調べるには、余り（`%`）を使います。`number % 2 === 0` なら偶数です。偶数の場合は2で割り、そうでなければ `3 * number + 1` をします。"},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"ステップ数をどのように数えたらいいですか？"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"ルールを適用した回数を記録するカウンター変数を用意します。ループを回るたびに、その変数をどう更新するか、そして数が1に達したときに何を返すべきかを考えてください。"}]}]}]
---

ある晩、古いノートを見つけました。謎の走り書きで埋め尽くされ、まるで誰かが一つの考えに取り憑かれて追い求めていたかのようです。あるページには、ひときわ目を引く問いがありました。**「どんな数でも必ず1にたどり着けるのだろうか？」**　それは**コラッツ予想**と呼ばれる、数十年にわたって多くの人を悩ませてきたパズルです。

ルールは驚くほど単純です。

1. 数を1つ選びます。
2. その数が偶数なら、2で割ります。
3. 奇数なら、3を掛けてから1を足します。
4. その結果に対して同じ操作を、無限に繰り返します。

たとえば、12から始めると次のようになります。

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

2番目の数（6）から数えると、1に到達するまでに9ステップかかりました。

`collatzSteps`（コラッツのステップ数）という関数を作成してください。この関数は1つの入力（数値）を受け取り、コラッツ予想のルールに従って、任意の数から1に到達するまでに**何ステップ**かかるかを返します。
