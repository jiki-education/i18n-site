---
lang: "ja"
type: "exercise"
slug: "after-party"
title: "アフターパーティー"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/after-party"
en_md5: "c59f1ee2393ff34f318369c56b15789f"
governance_sha: "c80036b"
content_version: "4ce4f37bcdc3"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"lookUpPlusOnes.name","english":"Check the Plus-Ones","target":"同伴可能人数を調べる"},{"key":"lookUpPlusOnes.description","english":"Someone gives you their first name. Return the number of extra guests they're allowed to bring in, or `\"Not on the list!\"` if they're not invited.","target":"誰かが下の名前を教えてくれたら、その人が連れて入れる追加のゲストの人数を返します。招待されていない場合は `\\\"Not on the list!\\\"` を返してください。"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty register","target":"空のリスト"},{"key":"emptyList.description","english":"Nobody's bringing anyone in when the list is empty.","target":"リストが空のとき、誰も連れて入れません。"},{"key":"nameMissing.name","english":"Brad's turned away","target":"ブラッドは入場できない"},{"key":"nameMissing.description","english":"The name's not on the list at all.","target":"その名前はリストにまったくありません。"},{"key":"namePresent.name","english":"Brad's allowed in","target":"ブラッドは入場できる"},{"key":"namePresent.description","english":"Brad's invited, and he's not travelling alone.","target":"ブラッドは招待されており、一人で来ていません。"},{"key":"similarName.name","english":"Close, but nope","target":"似ているけど、違う"},{"key":"similarName.description","english":"Bradley is not Brad, so Brad's still on the wrong side of the rope.","target":"ブラッドリーはブラッドではないので、ブラッドはやはり入れません。"},{"key":"doubleBarrelled.name","english":"A dutchman","target":"ハイフンつき"},{"key":"doubleBarrelled.description","english":"The name's on the list, but it's hyphenated.","target":"その名前はリストに載っていますが、ハイフンが含まれています。"},{"key":"allowedNobody.name","english":"Brad's flying solo","target":"ブラッドは一人で来ている"},{"key":"allowedNobody.description","english":"Brad is definitely invited. He's just not bringing anybody with him.","target":"ブラッドは確かに招待されていますが、誰も連れてきていません。"},{"key":"twoBrads.name","english":"Two Brads","target":"2人のブラッド"},{"key":"twoBrads.description","english":"There's more than one Brad on the list tonight, and the first one down is the one at the door.","target":"今夜のリストにはブラッドが複数人います。最初に見つけたブラッドが、実際に入場できる人物です。"},{"key":"cher.name","english":"Cher's in town","target":"シェールが来ている"},{"key":"cher.description","english":"Some people only have one name, and she's brought an entourage.","target":"名前が一つしかない人もいます。そして彼女は多くのお供を連れてきています。"},{"key":"cheryl.name","english":"Getting tough now","target":"難しくなってきた"},{"key":"cheryl.description","english":"Are Cheryl Crow and Cher friends? Doesn't matter - Cheryl is not Cher.","target":"シェリル・クロウとシェールは友達でしょうか？関係ありません。シェリルはシェールではありません。"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where do I even start with this?","target":"どこから始めればいいのでしょうか？"},{"key":"whereToStart.answer","english":"Picture yourself actually doing it on the door. Someone says a name, and you read down the clipboard until you spot them. It's worth noticing that the answer you have to give them isn't written next to their name on the list you're reading.","target":"実際に玄関で自分が同じことをしているところを想像してみましょう。誰かが名前を言ったら、クリップボードを上から順に、その名前を見つけるまで読み進めます。気をつけてほしいのは、相手に伝えるべき答えは、今見ているリストのその名前の隣には書かれていない、ということです。"},{"key":"twoLists.question","english":"There are two lists. How do they relate to each other?","target":"リストが2つあります。それらはどのように関係しているのでしょうか？"},{"key":"twoLists.answer","english":"Whatever you learn about *where* someone is in one list is just as true in the other. A position is a more useful thing to hold onto than a name.","target":"あるリストで、ある人が*どこに*いるかについて分かったことは、もう一方のリストでも全く同じです。位置情報は、名前よりも把握しておくのに便利です。"},{"key":"whatCountsAsAMatch.question","english":"When does a first name actually count as a match?","target":"下の名前が実際に一致とみなされるのは、どのようなときですか？"},{"key":"whatCountsAsAMatch.answer","english":"\"Brad\" should get Brad Pitt in, but not Bradley Cooper. Think about what's different about those two entries at the point where the letters you were given run out. There's more than one reasonable way to make that comparison, so pick whichever one you can explain to yourself.","target":"「ブラッド」ならブラッド・ピットは入場できますが、ブラッドリー・クーパーはできません。与えられた文字が終わった時点で、これら2つのエントリがどう違うかを考えてみてください。比較の方法はいくつか考えられるので、自分なりに説明できるものを選びましょう。"},{"key":"noSurname.question","english":"Cher hasn't got a surname. Does that break anything?","target":"シェールには名字がありません。何か問題が起こりますか？"},{"key":"noSurname.answer","english":"Have another look at what your match test assumes about a list entry. If it assumes there's always something after the first name, an entry that's *only* a first name won't get past it. And going the other way, a longer name shouldn't be able to claim a shorter entry.","target":"自分の一致チェックが、リストの各項目について何を前提にしているか、もう一度確認してみてください。もし下の名前の後に必ず何かが続くと考えているなら、名前*だけ*の項目はそのチェックを通過できません。そして逆方向では、長い名前が短い項目に当てはまってはいけません。"},{"key":"notOnTheList.question","english":"What do I do when they're not on the list?","target":"リストに載っていない場合はどうすればいいですか？"},{"key":"notOnTheList.answer","english":"Then they get the string `\"Not on the list!\"`, exactly as written. Two things are worth thinking about here. First, at what point can you be *certain* that someone isn't on the list? Second, notice that this is a genuinely different answer from a guest who's invited but allowed 0 extra guests, so make sure your function never confuses the two.","target":"その場合は、文字列 `\\\"Not on the list!\\\"` を、その通りに返します。ここで考えておきたいことが2つあります。第一に、その人がリストにいないと*確信*できるのはどの時点でしょうか？第二に、これは招待されているが追加ゲストが0人であるゲストとは全く別の答えです。関数がこの二つを混同しないように注意してください。"}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"リストの要素数です。文字列で使った length プロパティと同じものです（レベル標準ライブラリ提供）。"},{"key":"length.category","english":"List Operations","target":"リスト操作"},{"key":"startsWith.description","english":"Check whether a string begins with a smaller string (provided by level stdlib)","target":"文字列が、指定した小さな文字列で始まるかどうかをチェックします（レベル標準ライブラリ提供）。"},{"key":"startsWith.category","english":"String Operations","target":"文字列操作"}]}]}]
---

またバウンサーの役に戻ってきました。でも今回は、アフターパーティーに来る大物セレブたちが相手です。

彼らがパーティーに現れたら、下の名前だけで自分をわかってもらえると思っています。ブラッド・ピットがわざわざ名字を名乗ることはなく、ただ「ブラッド」と言って、まるでこちらが気まずくしているかのような顔をするでしょう。

今夜、クリップボードには2つのリストがあります。1つ目は `names` で、招待された全員のフルネームです。2つ目は `plusOnes` で、各ゲストが一緒に連れて入れる追加の人数、つまり同伴可能人数（英: _"plus-ones"_）です。この2つのリストは、同じ順番で1要素ずつ書き出されているため、並びが揃っています。例えば、`names` リストの3番目の要素は、`plusOnes` リストの3番目の要素と同じ人物に対応します。

`plusOnesFor`（同伴可能人数を取得する関数）という関数を書いてください。この関数は3つの入力を受け取ります。`names` リスト、`plusOnes` リスト、そして今あなたの前に立っている人の**下の名前（ファーストネーム）**です。その人が連れて入れる追加のゲストの人数を返すようにしてください。

気をつけてください。行列ができ始めていますが、彼らは静かに並んだりしません。「ブラッド」と言えばブラッド・ピットのことで、ブラッドリー・クーパーではありません。それに、中には名字を完全に捨ててしまうほど有名な人も1人や2人います。

招待されているゲストの中には、誰も連れて入れない人もいます。その場合、リストにある名前に対しては `0` がれっきとした答えになります。リストにまったく載っていない人は全く話が別で、その人に対しては、文字列 `"Not on the list!"` を、書かれているとおりに返すべきです。

### 配列のメソッドとプロパティ

文字列と同じように、配列にもメソッドやプロパティがあります。この演習では `.length` プロパティを使うと良いでしょう。これは文字列版とまったく同じように機能しますが、文字列の文字数ではなく、配列の要素数を教えてくれる点が異なります。例えば：

```js
["Jeremy", "Erik", "Aron"].length
// 3
```

楽しみましょう！
