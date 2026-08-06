---
lang: "ja"
type: "exercise"
slug: "plant-the-flowers"
title: "花を植えよう"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "c80036b"
content_version: "bbf6b4ae534f"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"9本の花が必要ですが、{{got}}本見つかりました。"},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"位置10に花がありません。"},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"位置50に花がありません。"},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"位置90に花がありません。"},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"解答のコードが長すぎます。もっと短くする方法を見つけてみてください。"}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"9本の花を植える"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"変数と`repeat`ループを使って、10、20、30、...、90の位置に9本の花を植えます。"}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"9本の花を植える"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"10、20、30、40、50、60、70、80、90の位置に花を植えます。"}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"どうしても先に進めません"},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"`repeat`ループの使い方と、変数を更新して状態を追跡する方法について、最近の動画を確認しましょう。きっと必要な情報がすべて説明されています。"}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"指定された**位置**に花を植えます。"},{"key":"plant.category","english":"Gardening","target":"ガーデニング"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"位置${arg1}に花を植えました"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":null}]}]}]
---

これから、自動で花を植える機械を作ります。

この機械は、芝生の上に `10` 間隔で均等に花を植えます。ですから、最初の花は位置 `10`、次は `20`、その次は `30`…という具合です。

`plant(position)`（花を植える）という、位置を入力として受け取る関数があります。たとえば、`plant(10)` を実行すると、位置 `10` に花が植えられます。

この演習は、**5行のコード** で解答しなければなりません。ですから、`plant(10)` や `plant(20)` とひとつずつ書くのではなく、何か工夫が必要です。

がんばってください！
