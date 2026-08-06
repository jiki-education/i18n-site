---
lang: "ja"
type: "exercise"
slug: "niche-named-party"
title: "ニッチな名前のパーティー"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "c80036b"
content_version: "6a876c7a3d47"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"名前をチェックする"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"`handleGuest`関数を作成し、その人の名前が今夜のパーティーで許可される文字で始まるかどうかを確認しましょう。始まる場合は`true`を、そうでない場合は`false`を返しましょう。"},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"20行で解答する"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"ボーナス: 文字数を数える処理をヘルパー関数に分けて、`handleGuest`から呼び出すことで、解答全体が20行に収まります。同じように書けるか挑戦してみましょう。"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"Sパーティー：Sarahが到着"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"今夜は\"S\"で始まる名前の人だけが入場できます。Sarahは入場できるはずです！"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"Sパーティー：Bradが到着"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"今夜は\"S\"で始まる名前の人だけが入場できます。Bradは追い返されます。"},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"Bradパーティー：Bradleyが到着"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"今夜は\"Brad\"で始まる名前の人だけが入場できます。Bradleyは入場できるはずです！"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"Bradleyパーティー：Bradが到着"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"今夜は\"Bradley\"で始まる名前の人だけが入場できます。Bradは短すぎるため、入場できません。"},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"Bradパーティー：Brianが到着"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"今夜は\"Brad\"で始まる名前の人だけが入場できます。Brianは追い返されます。"},{"key":"silence.name","english":"S Party: Silence...","target":"Sパーティー：無言…"},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"その人は名前を言いません。空の名前では何も始まらないので、追い返しましょう。"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"Cherパーティー：Cherが到着"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"今夜は\"Cher\"で始まる名前の人だけが入場できます。Cherの名前は\"Cher\"そのものです。入場させましょう！"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"きれいに整頓"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"最短の解答は20行に収まります。見つけられますか？"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"続けてみましょう！もっと少ない行数で解けるか試してみてください。"}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"名前が特定の文字で始まるかどうかを確認するにはどうすればいいですか？"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"許可される先頭文字列の各文字を、名前の同じ位置の文字と比較します。いずれかの文字が異なれば、その名前は一致しません。"},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"1文字ずつ確認するにはどうすればいいですか？"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"文字列の繰り返し処理を使って、文字列を1文字ずつ見ていきます。"},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"もう一方の単語の対応する文字を見つけるにはどうすればいいですか？"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"文字列のインデックスを使って、特定の文字を取得します。"},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"許可される先頭文字列が名前より長い場合はどうなりますか？"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"その場合は一致しないので、`false`を返してください。"}]}]}]
---

今夜のパーティーはとても特別で、名前が特定の文字の並びで始まる人だけが入場できます！

ここでは、`handleGuest`（ゲストの入場可否を判断する）という関数を作成します。この関数は2つの入力を受け取ります：

- `name` - 入り口に立っている人の名前
- `allowedPrefix` - 今夜のパーティーで求められる先頭の文字列

この関数は、その人が入場できるなら`true`を、追い返されるべきなら`false`を返します。

例えば：

- 今夜の許可される先頭文字が `"S"` なら、Sarahは入場でき（`true`を返し）、Bradはできません（`false`を返します）。
- 許可される先頭文字が `"Brad"` なら、BradとBradleyは入場でき、Brianはできません。

### ヘルパー関数

この演習を進めていくと、ゲストの名前の長さや、許可される先頭部分の長さを調べる必要が出てくるでしょう。これは、`getLength(someString)`というヘルパー関数を作成する絶好の機会です。この関数は文字列の中に含まれる文字の数を数えます。この関数は、`handleGuest(...)`の中のさまざまな場所で利用できます。

ボーナスシナリオでは、できるだけ少ない行数で解答することに挑戦します。もっと多くの行を使う別の解答を思いつくかもしれませんし、それはまったく問題ありません（さまざまなアプローチを試すことは大歓迎です）。しかし、一番短いバージョンも探してみてください。

それでは、楽しんで！
