---
lang: "ja"
type: "exercise"
slug: "bouncer"
title: "バウンサー"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "c80036b"
content_version: "b9f70fbe96a5"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"25歳の人です。本来なら入場を許可されるべきなのに、許可されませんでした。"},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"18歳の人です。本来なら入場を許可されるべきではないのに、許可されてしまいました。"},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"21歳の人です。本来なら入場を許可されるべきなのに、許可されませんでした。"},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"ちょうど20歳の人です。20歳を超えていないため、本来なら入場を許可されるべきではないのに、許可されてしまいました。"}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"年齢を確認する"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"その人の年齢を取得し、20歳を超えているかどうかを確認します。超えていれば、入場を許可します。"}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"25歳"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"25歳の人です。入場を許可されるべきです。"},{"key":"age18.name","english":"Age 18","target":"18歳"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"18歳の人です。入場を許可されるべきではありません。"},{"key":"age21.name","english":"Age 21","target":"21歳"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"21歳の人です。20歳をちょうど超えたところで、入場を許可されるべきです。"},{"key":"age20.name","english":"Age 20","target":"20歳"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"ちょうど20歳の人です。20歳を超えていないため、入場を許可されるべきではありません。"}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"年齢はどうやってわかりますか？"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"`askAge()`関数を使います。各シナリオで異なる値を返します。"},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"処理を変えるにはどうすればいいですか？"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"`if`文を使います。もっとヘルプが必要なら、コンセプトを確認してください！"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"その人の年齢を尋ねました"},{"key":"letIn","english":"let the person in","target":"その人を入場させました"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"外で待っている人の**年齢**を返します。"},{"key":"askAge.category","english":"Information","target":"情報"},{"key":"letIn.description","english":"Lets the person in.","target":"その人を入場させます。"},{"key":"letIn.category","english":"Action","target":"アクション"}]}]}]
---

The Neon Gatesバーのロボットバウンサーをプログラムしてみましょう。このロボットの仕事は、待っている人の年齢を確認し、入店させるかどうかを判断することです。

使える関数は次の2つです。

- `askAge()`（年齢を尋ねる） は、外で待っている人の年齢を返します。
- `letIn()`（入場させる） は、その人を中に入れます。

この店のルールでは、**21歳以上**の人だけが入店を許可されます。

年齢を尋ねて、十分な年齢であれば、中に入れてあげましょう！
