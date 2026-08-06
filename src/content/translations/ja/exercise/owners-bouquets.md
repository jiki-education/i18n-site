---
lang: "ja"
type: "exercise"
slug: "owners-bouquets"
title: "オーナーの花束"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/owners-bouquets"
en_md5: "412a9f3a6ed5bb6b797c6239d51492be"
governance_sha: "c80036b"
content_version: "8efaa27f4b3d"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount_one","english":"The owner expected to see {{count}} flower planted. But you planted {{got}}.","target":"オーナーは{{count}}本の花が植えられることを期待していました。しかし、植えられたのは{{got}}本でした。"},{"key":"flowerCount_other","english":"The owner expected to see {{count}} flowers planted. But you planted {{got}}.","target":"オーナーは{{count}}本の花が植えられることを期待していました。しかし、植えられたのは{{got}}本でした。"},{"key":"flowerAtPosition","english":"Expected a flower at position {{position}}, but didn't find one.","target":"{{position}}の位置に花が植えられることを期待していましたが、見つかりませんでした。"},{"key":"strayFlower","english":"Found a flower at position {{position}}, which isn't where the owner wanted one. The flowers should be evenly spaced.","target":"{{position}}の位置に花が見つかりましたが、それはオーナーが望んだ場所ではありません。花は均等に植える必要があります。"}]},{"name":"tasks","rows":[{"key":"plantFlowersEvenly.name","english":"Plant flowers evenly","target":"花を均等に植える"},{"key":"plantFlowersEvenly.description","english":"Use askNumberOfFlowers() to find out how many flowers to plant, calculate the gap, and plant them evenly spaced.","target":"askNumberOfFlowers()で植える花の本数を調べ、間隔を計算し、均等に植えます。"}]},{"name":"scenarios","rows":[{"key":"oneFlower.name","english":"The owner wants 1 flower","target":"オーナーは1本の花を希望"},{"key":"oneFlower.description","english":"In this scenario, `askNumberOfFlowers()` will return 1. Plant 1 flower at position 50.","target":"このシナリオでは、`askNumberOfFlowers()`は1を返します。50の位置に1本の花を植えます。"},{"key":"threeFlowers.name","english":"The owner wants 3 flowers","target":"オーナーは3本の花を希望"},{"key":"threeFlowers.description","english":"In this scenario, `askNumberOfFlowers()` will return 3. Plant 3 flowers at positions 25, 50, and 75.","target":"このシナリオでは、`askNumberOfFlowers()`は3を返します。25、50、75の位置に3本の花を植えます。"},{"key":"fourFlowers.name","english":"The owner wants 4 flowers","target":"オーナーは4本の花を希望"},{"key":"fourFlowers.description","english":"In this scenario, `askNumberOfFlowers()` will return 4. Plant 4 flowers at positions 20, 40, 60, and 80.","target":"このシナリオでは、`askNumberOfFlowers()`は4を返します。20、40、60、80の位置に4本の花を植えます。"},{"key":"nineFlowers.name","english":"The owner wants 9 flowers","target":"オーナーは9本の花を希望"},{"key":"nineFlowers.description","english":"In this scenario, `askNumberOfFlowers()` will return 9. Plant 9 flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"このシナリオでは、`askNumberOfFlowers()`は9を返します。10、20、30、40、50、60、70、80、90の位置に9本の花を植えます。"}]},{"name":"hints","rows":[{"key":"chooseGap.question","english":"How do I work out where to plant each flower?","target":"各花を植える位置はどうやって計算しますか？"},{"key":"chooseGap.answer","english":"First work out the gap between flowers:\n\n```javascript\n100 / (numberOfFlowers + 1)\n```\n\nThe first flower goes at that position, and each next flower is one more gap along. So if there are 3 flowers the gap is 25, and they go at 25, 50 and 75.","target":"まず、花と花の間隔を計算します。\n\n```javascript\n100 / (numberOfFlowers + 1)\n```\n\n最初の花はその位置に植え、次の花はそこから間隔分だけ進んだ位置に植えます。たとえば、花が3本の場合は間隔は25になり、25、50、75の位置に植えます。"},{"key":"seeScenarios.question","english":"How do I see the different scenarios","target":"異なるシナリオを見るにはどうすればいいですか？"},{"key":"seeScenarios.answer","english":"Click on the circles on the left hand side in between your code and the results.","target":"コードと結果の間にある、左側の円をクリックしてください。"}]},{"name":"functions","rows":[{"key":"askNumberOfFlowers.description","english":"Returns the **number of flowers** to plant.","target":"植える**花の本数**を返します。"},{"key":"askNumberOfFlowers.category","english":"Gardening","target":"ガーデニング"},{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"指定した**位置**に花を植えます。"},{"key":"plant.category","english":"Gardening","target":"ガーデニング"}]},{"name":"describers","rows":[{"key":"askNumberOfFlowers","english":"asked for the number of flowers to plant","target":"植える花の本数を尋ねました"},{"key":"plant","english":"planted a flower at position ${arg1}","target":"${arg1}の位置に花を植えました"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":null}]}]}]
---

複数のシナリオを使う演習へようこそ。

自動で花を植える機械の話に戻りましょう。前回はいつも9本の花を植えていましたが、今回は事情が変わります。この家の持ち主から言われた数だけ、ロボットが花を植えられるようにしなければなりません。

そのために、`askNumberOfFlowers()`（花の数を尋ねる）という関数があります。この関数を使うと、家の持ち主に何本の花を植えるかを尋ね、その答えが数値で返ってきます。関数が3を返したら3本の花を、8を返したら8本の花を植えます。

庭をきれいに保つよう厳しく言われていますので、花は庭に均等に植える必要があります。花が3本なら、25、50、75の位置に植えます。4本なら20、40、60、80に植え、以下同じようにします（いつも通り、庭の幅は100単位です）。

### シナリオ

先ほど解いたゴルフの演習と同じように、左側に灰色のドットが4つあり、それぞれ異なるシナリオを表しています。**各ドットをクリック**すると異なるシナリオが表示されますが、今回は`askNumberOfFlowers()`が毎回異なる数値を返します。

この演習では、`askNumberOfFlowers()`が返す可能性のあるすべての値に対して動作するプログラムを1つだけ書いてください。

頑張ってください！
