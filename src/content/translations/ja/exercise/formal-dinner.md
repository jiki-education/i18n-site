---
lang: "ja"
type: "exercise"
slug: "formal-dinner"
title: "フォーマルディナー"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/formal-dinner"
en_md5: "8d6a2f3dd90b3a487a6bf855f31ef025"
governance_sha: "c80036b"
content_version: "957be2c11e98"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"ゲストのテーブルを調べる"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"ゲストのフルネームの配列、それに対応するテーブル名の配列、そして敬称と名字で告げられた到着したゲストを受け取り、そのゲストが座っているテーブル名を返す関数を書いてください。座席表に載っていなければ`\"No table found\"`を返します。"},{"key":"solveTightly.name","english":"Solve it tightly","target":"簡潔に解く"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"ボーナス: これは、想像以上にずっとコンパクトに書けます。解答全体をほんの数行にまとめられますか？"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"空の座席表"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"座席表が空だと、誰も座っていません。"},{"key":"nameMissing.name","english":"Brad's turned away","target":"ブラッドは入場を断られる"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"その名前は座席表に載っていません。"},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"ブラッドは席に案内される"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"ブラッド・ピットが座席表に載っているので、ピット氏はテーブルを案内されます。"},{"key":"differentHonorific.name","english":"Knight of the realm","target":"王国の騎士"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"異なる敬称で、座席表の先頭ではないゲスト。"},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"ボンドさん、ですね"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"ジェームズ・ボンドが座席表に載っています。"},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"うーん…ボンドさん、でしょうか？"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"座席表にはジェイソン・ボーンしか載っておらず、ジェームズ・ボンドはいません。"},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"ピット氏ではありません"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"エイダ・スピットもヒューゴ・ロス＝ピットもピット氏ではないので、ここに席はありません。"},{"key":"lloydWebber.name","english":"How about a Baron?","target":"男爵はいかが？"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"ロイド＝ウェバー男爵の名字は2単語です。"},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"マークは男爵？"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"別のウェバーではだめです。名字は完全に一致する必要があります。"},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"簡潔に: ドイル卿"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time your solution has to fit into a much smaller number of lines.","target":"先ほどと同じ座席表ですが、今回は解答をもっと少ない行数に収めなければなりません。"}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"2つの配列は、どのように対応していますか？"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"これらはペアになっています。1番目のゲストは1番目のテーブルに、2番目のゲストは2番目のテーブルに、というように座ります。つまり、ゲストが座席表に*載っている*かどうかだけでなく、座席表の*どこに*載っているかを知る必要があります。"},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"ゲストは「Mr Pitt」と告げられますが、座席表には「Brad Pitt」とあります。これらをどう比較しますか？"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"この2つの文字列が等しくなることはないため、単純な比較ではうまくいきません。ゲストが告げた内容のうち、実際に座席表に現れるのはどの部分か、また、座席表の項目のどこにそれが現れるかを考えてみてください。"},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"名字が別のゲストと一致することはありますか？"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"もちろんあります。「Ada Spitt」と「Hugo Ross-Pitt」を声に出して読んでみて、それから「Mr Pitt」について考えてみてください。ある文字列が単に末尾にある文字の集まりではなく、本当に名字であるためには、何が必要かを自問してみましょう。"},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"誰も一致しなかった場合、何を返せばいいですか？"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"文字列`\"No table found\"`を、そのまま返します。難しいのは、それをいつ返してよいかを判断することです。座席表の一番最初のゲストを調べて一致しなかったからといって、その人がどこにも座っていないと本当に言えるでしょうか？"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"さあ、続けましょう！もっと少ない行数で解けるか試してみてください。"}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"配列の要素数です。文字列で使ったのと同じ`length`プロパティです（レベル標準ライブラリ提供）。"},{"key":"length.category","english":"List Operations","target":"配列操作"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"文字列を、指定した区切り文字で分割し、部分文字列の配列にします（レベル標準ライブラリ提供）。"},{"key":"split.category","english":"String Operations","target":"文字列操作"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"配列の一部から新しい配列を作ります。指定した位置から開始します（レベル標準ライブラリ提供）。"},{"key":"slice.category","english":"List Operations","target":"配列操作"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"配列の要素を、指定した区切り文字で連結して1つの文字列にします（レベル標準ライブラリ提供）。"},{"key":"join.category","english":"List Operations","target":"配列操作"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"文字列が、指定した小さな文字列で終わっているかどうかを調べます（レベル標準ライブラリ提供）。"},{"key":"endsWith.category","english":"String Operations","target":"文字列操作"}]}]}]
---

バウンサーとしての副業に戻ってきました。アフターパーティーの翌日の夜、また別の集まりがあります。今回はフォーマルなディナーなので、今夜は「ドアの前に立つ屈強な男」というより、「クリップボードを持った素敵なベスト姿の人」です。

ここでは、名前だけで呼ぶ場はまったくありません。それどころか、ファーストネームを使う場自体がありません。ここでは、みんな敬称（英: _honorific_）と名字で呼ばれます。例えばミス、ミスター、ドクターなどです。

主催者から、座席表として2つの別々の配列が渡されました。1つはゲストのフルネーム、もう1つは各ゲストが座るテーブルの名前（木や花の名前がついています）です。『After Party』のときと同じように、この2つの配列は対応しています。最初の配列の3番目のゲストは、2番目の配列の3番目のテーブルに座ります。

なので、ピット氏が颯爽と入ってきたら、その人がリスト上の「ブラッド・ピット」であることを突き止め、どのテーブルかを伝える必要があります。

ゲストが座っているテーブルを調べる`tableFor`という関数を書いてください。この関数には3つの入力があります。

- 1つ目はゲストのフルネーム（文字列）を格納した配列
- 2つ目はテーブル名（ゲストと同じ順序）を格納した配列
- 3つ目は到着したゲストの名前（敬称と名字で構成された文字列、例："Mr Pitt"）

そのゲストが座っているテーブルの名前を返します。もし座席表にまったく載っていない場合は、代わりに文字列`"No table found"`を返します（もぐりはお断りです！）。

敬称は常にちょうど1つの単語で、その後に続くのがゲストの名字です。ほとんどの名字は1つの単語ですが、一部の格式高い名字は2単語になることもあります。

ただし注意してください。よく似た名字がたくさんあります。

### 文字列/配列のメソッドとプロパティ

前回の演習で学んだ`.length`プロパティに加えて、便利なメソッドが4つあります。この演習を解く方法はたくさんありますが、これらを使うと最も短い解答が得られます。

`"...".split(substring)`は、文字列を別の文字列で分割します。例えば：

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)`は、インデックス`start`から配列の末尾までを切り出します。切り出された要素は新しい配列にコピーされ、それが返されます。つまり、先頭の`start`個の要素を落とすことになります。例えば：

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)`は、配列の要素を指定された文字列で結合します。例えば：

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)`は、文字列が別の文字列で終わっているかどうかを返します。例えば：

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
