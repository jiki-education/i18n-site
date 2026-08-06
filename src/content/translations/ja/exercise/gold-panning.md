---
lang: "ja"
type: "exercise"
slug: "gold-panning"
title: "砂金採り"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/gold-panning"
en_md5: "e62d584285e129af1ec13bb8d337d0fc"
governance_sha: "c80036b"
content_version: "2f430636347d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"needsRecharge","english":"The robot needs to recharge after selling.","target":"売った後、ロボットは充電が必要です。"},{"key":"sellBeforeAnythingElse","english":"The robot needs to go and sell before it does anything else.","target":"ロボットは他のことをする前に、売りに行く必要があります。"},{"key":"sellNumber","english":"You can only sell a number of nuggets","target":"売ることができるのは、砂金の個数だけです。"}]},{"name":"checks","rows":[{"key":"notSold","english":"You didn't sell your nuggets. Make sure you call <code>sell()</code> after panning.","target":"砂金を売っていません。すくい取った後に、必ず <code>sell()</code> を呼び出してください。"},{"key":"wrongSoldTotal","english":"Expected to sell {{expectedTotal}} nuggets ({{panValues}}) but you sold {{got}}. Make sure you add each pan result to your running total.","target":"売るべき砂金は {{expectedTotal}} 個 ({{panValues}}) ですが、{{got}} 個を売りました。すくい取るたびに、出た砂金の数を合計に加算しているか確認してください。"}]},{"name":"tasks","rows":[{"key":"panAndSell.name","english":"Pan for gold and sell your haul","target":"砂金をすくい取って売る"},{"key":"panAndSell.description","english":"Pan 5 times to collect gold nuggets, keeping a running total, then sell everything at the trading post.","target":"5回すくい取って砂金を集め、逐次合計を記録し、最後に全てを交易所で売りましょう。"}]},{"name":"scenarios","rows":[{"key":"randomPans.name","english":"Pan and sell","target":"砂金すくいと売却"},{"key":"randomPans.description","english":"Pan 5 times for a random number of nuggets each time, then sell the total.","target":"毎回ランダムな数の砂金を5回すくい取り、その合計を売ります。"}]},{"name":"hints","rows":[{"key":"wrongSellAmount.question","english":"It says I'm selling the wrong amount of gold.","target":"売る砂金の量が間違っていると表示されます。"},{"key":"wrongSellAmount.answer","english":"You need to sell ALL the gold you find in the 5 pans in one go at the end, not selling after each pan.","target":"5回すくい取った砂金は、1回ごとに売るのではなく、最後にまとめて全部売る必要があります。"},{"key":"trackingTotal.question","english":"I am using pan multiple times but I don't know how to keep track of how much I have.","target":"`pan` を何度も使っていますが、集めた砂金の合計をどうやって管理すればいいのかわかりません。"},{"key":"trackingTotal.answer","english":"Think about what you've learned in recent video lessons. You need to use a variable to keep track of the **total** amount of gold that you have collected across **all** the pans together.","target":"最近の動画レッスンで学んだことを思い出してください。**全て**のすくい取りで集めた砂金の**合計**を管理するために、変数を使う必要があります。"},{"key":"fiveLines.question","english":"I've got it working, but I can't get down to 5 lines.","target":"動作はしますが、コードを5行にまで減らせません。"},{"key":"fiveLines.answer","english":"Do you have repetitive code in your solution? If so, what can we use to reduce that repetitiveness?","target":"解答に繰り返しのコードがありますか？　もしあるなら、その繰り返しを減らすために何が使えるでしょうか？"},{"key":"stillFiveLines.question","english":"I still can't get it down to 5 lines of code.","target":"それでもコードが5行にまで減らせません。"},{"key":"stillFiveLines.answer","english":"You should only need to use one variable. Are you using more?","target":"必要な変数は1つだけのはずです。今、2つ以上使っていませんか？"}]},{"name":"describers","rows":[{"key":"pan","english":"panned and found ${return} nuggets","target":"すくい取り、${return}個の砂金を見つけました"},{"key":"sell","english":"sold ${arg1} nuggets at the trading post","target":"交易所で${arg1}個の砂金を売りました"}]},{"name":"functions","rows":[{"key":"pan.description","english":"Dips your pan in the river and **gives back** the number of gold nuggets found.","target":"川で砂金をすくい取り、見つかった砂金の個数を**返します**。"},{"key":"pan.category","english":"Mining","target":"採掘"},{"key":"sell.description","english":"Sells your gold nuggets at the trading post.","target":"交易所で砂金を売ります。"},{"key":"sell.category","english":"Action","target":"アクション"}]}]}]
---

カリフォルニアがテクノロジーの中心地になる前は、金の中心地でした！30万人以上の人々がやって来て、売るために川で小さな砂金を探し始めたのです。

この演習では、砂金採りに出かけるロボットを作ります。

ここでは `pan()`（砂金をすくい取る）関数が使えます。この関数を使うと、水から砂金をすくい取ることができます。この関数は、見つけた砂金の個数を返します。

また、`sell(numberOfNuggets)`（砂金の個数を売る）関数も使えます。この関数で、集めた砂金の合計を売ることができます。

ロボットには、何度か砂金をすくってから集計する余裕があります。ロボットが川へ行き、**5回**砂金をすくい、その都度採取した砂金の量を記録し、最後に5回分の合計を売るようにコードを書いてください。

このパズルを、**5行のコード**（またはそれ以下）で解いてみましょう！
