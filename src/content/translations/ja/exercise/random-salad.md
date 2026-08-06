---
lang: "ja"
type: "exercise"
slug: "random-salad"
title: "ランダムサラダ"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/random-salad"
en_md5: "e5aaa7fb66d90d3c7074f04bc6296752"
governance_sha: "c80036b"
content_version: "b05ca1768966"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"leavesNumber","english":"Leaves must be a number","target":null},{"key":"tomatoesNumber","english":"Tomatoes must be a number","target":null},{"key":"croutonsNumber","english":"Croutons must be a number","target":null},{"key":"olivesNumber","english":"Olives must be a number","target":null}]},{"name":"checks","rows":[{"key":"saladNotMade","english":"You didn't make the salad. Make sure you call <code>makeSalad()</code> with all four ingredients.","target":null},{"key":"needLeavesRandomInt","english":"You need to call <code>Math.randomInt(40, 100)</code> to generate the number of leaves.","target":null},{"key":"needTomatoesRandomInt","english":"You need to call <code>Math.randomInt(5, leaves / 5)</code> to generate the number of tomatoes.","target":null},{"key":"needCroutonsRandomInt","english":"You need to call <code>Math.randomInt(tomatoes, tomatoes * 2)</code> to generate the number of croutons.","target":null},{"key":"needOlivesRandomInt","english":"You need to call <code>Math.randomInt(1, tomatoes / 2)</code> to generate the number of olives.","target":null}]},{"name":"tasks","rows":[{"key":"makeRandomSalad.name","english":"Make a random salad","target":null},{"key":"makeRandomSalad.description","english":"Generate a random amount of each ingredient using Math.randomInt() and make the salad.","target":null}]},{"name":"scenarios","rows":[{"key":"randomSalad.name","english":"Random salad","target":null},{"key":"randomSalad.description","english":"Make a salad with random amounts of each ingredient.","target":null}]},{"name":"hints","rows":[{"key":"leavesExample.question","english":"Give me an example of how to work out the leaves","target":null},{"key":"leavesExample.answer","english":"Use `let leaves = Math.randomInt(40, 100)` to generate a random amount of salad leaves that you can then use in the other functions.","target":null},{"key":"leavesCount.question","english":"How many leaves do I need?","target":null},{"key":"leavesCount.answer","english":"Between 40 and 100.","target":null},{"key":"tomatoesCount.question","english":"How many tomatoes do I need?","target":null},{"key":"tomatoesCount.answer","english":"At least 5, but no more than leaves / 5","target":null},{"key":"croutonsCount.question","english":"How many croutons do I need?","target":null},{"key":"croutonsCount.answer","english":"At least as many as tomatoes, up to double the amount of tomatoes","target":null},{"key":"olivesCount.question","english":"How many olives do I need?","target":null},{"key":"olivesCount.answer","english":"At least 1, up to half the number of tomatoes","target":null},{"key":"makeSalad.question","english":"How do I make the salad?","target":null},{"key":"makeSalad.answer","english":"Once you've worked out how many ingredients you need for each, input leaves, tomatoes, croutons, olives into makeSalad().","target":null}]},{"name":"describers","rows":[{"key":"makeSalad","english":"made a salad with ${arg1} leaves, ${arg2} tomatoes, ${arg3} croutons, and ${arg4} olives","target":null}]},{"name":"functions","rows":[{"key":"makeSalad.description","english":"Makes a salad with the given amounts of each ingredient.","target":null},{"key":"makeSalad.category","english":"Action","target":null}]}]}]
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
