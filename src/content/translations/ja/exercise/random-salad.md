---
lang: "ja"
type: "exercise"
slug: "random-salad"
title: "ランダムサラダ"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/random-salad"
en_md5: "e5aaa7fb66d90d3c7074f04bc6296752"
governance_sha: "1011050"
content_version: "51017ea63ae9"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"leavesNumber","english":"Leaves must be a number","target":"葉っぱの値は数値でなければなりません。"},{"key":"tomatoesNumber","english":"Tomatoes must be a number","target":"トマトの値は数値でなければなりません。"},{"key":"croutonsNumber","english":"Croutons must be a number","target":"クルトンの値は数値でなければなりません。"},{"key":"olivesNumber","english":"Olives must be a number","target":"オリーブの値は数値でなければなりません。"}]},{"name":"checks","rows":[{"key":"saladNotMade","english":"You didn't make the salad. Make sure you call <code>makeSalad()</code> with all four ingredients.","target":"サラダが作られていません。4つの材料すべてを指定して <code>makeSalad()</code> を呼び出しているか確認してください。"},{"key":"needLeavesRandomInt","english":"You need to call <code>Math.randomInt(40, 100)</code> to generate the number of leaves.","target":"葉っぱの枚数を生成するには、<code>Math.randomInt(40, 100)</code> を呼び出す必要があります。"},{"key":"needTomatoesRandomInt","english":"You need to call <code>Math.randomInt(5, leaves / 5)</code> to generate the number of tomatoes.","target":"トマトの数を生成するには、<code>Math.randomInt(5, leaves / 5)</code> を呼び出す必要があります。"},{"key":"needCroutonsRandomInt","english":"You need to call <code>Math.randomInt(tomatoes, tomatoes * 2)</code> to generate the number of croutons.","target":"クルトンの数を生成するには、<code>Math.randomInt(tomatoes, tomatoes * 2)</code> を呼び出す必要があります。"},{"key":"needOlivesRandomInt","english":"You need to call <code>Math.randomInt(1, tomatoes / 2)</code> to generate the number of olives.","target":"オリーブの数を生成するには、<code>Math.randomInt(1, tomatoes / 2)</code> を呼び出す必要があります。"}]},{"name":"tasks","rows":[{"key":"makeRandomSalad.name","english":"Make a random salad","target":"ランダムなサラダを作る"},{"key":"makeRandomSalad.description","english":"Generate a random amount of each ingredient using Math.randomInt() and make the salad.","target":"Math.randomInt() を使って各材料の量をランダムに生成し、サラダを作ります。"}]},{"name":"scenarios","rows":[{"key":"randomSalad.name","english":"Random salad","target":"ランダムサラダ"},{"key":"randomSalad.description","english":"Make a salad with random amounts of each ingredient.","target":"各材料の量をランダムにしてサラダを作ります。"}]},{"name":"hints","rows":[{"key":"leavesExample.question","english":"Give me an example of how to work out the leaves","target":"葉っぱの枚数の決め方の例を教えてください"},{"key":"leavesExample.answer","english":"Use `let leaves = Math.randomInt(40, 100)` to generate a random amount of salad leaves that you can then use in the other functions.","target":"`let leaves = Math.randomInt(40, 100)` を使ってサラダの葉っぱの枚数をランダムに生成します。この値は他の関数でも使えます。"},{"key":"leavesCount.question","english":"How many leaves do I need?","target":"葉っぱは何枚必要ですか？"},{"key":"leavesCount.answer","english":"Between 40 and 100.","target":"40枚から100枚の間です。"},{"key":"tomatoesCount.question","english":"How many tomatoes do I need?","target":"トマトは何個必要ですか？"},{"key":"tomatoesCount.answer","english":"At least 5, but no more than leaves / 5","target":"少なくとも5個、葉っぱ5枚につき1個を超えないこと。"},{"key":"croutonsCount.question","english":"How many croutons do I need?","target":"クルトンは何個必要ですか？"},{"key":"croutonsCount.answer","english":"At least as many as tomatoes, up to double the amount of tomatoes","target":"トマトの数以上、トマトの2倍以下です。"},{"key":"olivesCount.question","english":"How many olives do I need?","target":"オリーブは何個必要ですか？"},{"key":"olivesCount.answer","english":"At least 1, up to half the number of tomatoes","target":"少なくとも1個、トマトの数の半分以下です。"},{"key":"makeSalad.question","english":"How do I make the salad?","target":"どうやってサラダを作りますか？"},{"key":"makeSalad.answer","english":"Once you've worked out how many ingredients you need for each, input leaves, tomatoes, croutons, olives into makeSalad().","target":"各材料の量を決めたら、makeSalad() に葉っぱ、トマト、クルトン、オリーブを渡します。"}]},{"name":"describers","rows":[{"key":"makeSalad","english":"made a salad with ${arg1} leaves, ${arg2} tomatoes, ${arg3} croutons, and ${arg4} olives","target":"葉っぱ${arg1}枚、トマト${arg2}個、クルトン${arg3}個、オリーブ${arg4}個でサラダを作りました。"}]},{"name":"functions","rows":[{"key":"makeSalad.description","english":"Makes a salad with the given amounts of each ingredient.","target":"指定された量の各材料でサラダを作ります。"},{"key":"makeSalad.category","english":"Action","target":"アクション"}]}]}]
---

あなたと相棒は、サラダの分量でいつも意見が合いません。あなたは葉っぱをたっぷり入れたいのに、相棒はクルトンを多めに入れたがる。どちらも折れられず、ついに運任せで決めることにしました。

葉っぱ、トマト、オリーブ、クルトンのサラダを作ります。次のルールを厳守することに合意しました（激しい議論の末です！）：

- 葉っぱの枚数は、40枚から100枚の範囲で適度な量にする必要があります。
- トマトが多すぎるとサラダが水っぽく酸っぱくなります。トマトは少なくとも5個使い、葉っぱ5枚につき1個を超えないようにします。
- クルトンはトマトの汁を吸うのに十分な量が必要ですが、多すぎるとただのパンボウルになってしまいます。クルトンの数はトマトの数以上、かつトマトの2倍以下に決めました。
- オリーブは風味が強いので、控えめに使わないと他の具材を圧倒してしまいます。オリーブは少なくとも1個、でもトマトの数の半分以下にします。
- そして最も大事なルール：すべての材料の個数は、ランダムに生成する必要があります！

まずは**「コードを実行」を何度かクリック**して、サラダの動きを見てみましょう。この演習の"味"をひとしきり味わったら（しゃれです）、`Math.randomInt`（ランダムな整数を生成する）を使い、上のルールに従って材料の適切な組み合わせを選んでください。

いろいろな組み合わせを試して楽しんでください！
