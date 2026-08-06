---
lang: "ja"
type: "exercise"
slug: "driving-test"
title: "運転免許試験"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/driving-test"
en_md5: "98e0dc4c13cbedbd859f1cf05363faa2"
governance_sha: "c80036b"
content_version: "fc1bf752e850"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"解答のコードが長すぎます。もう少し短くしてみましょう。"}]},{"name":"tasks","rows":[{"key":"didTheyPass.name","english":"Did They Pass?","target":"合否判定"},{"key":"didTheyPass.description","english":"Write a function that analyzes driving test marks and determines if the student passed. A student fails if they have any major faults (💥) or 5 or more minor faults (❌).","target":"運転免許試験の記号を分析し、合格かどうかを判定する関数を作成します。大きなミス（💥）が1回でもあるか、細かいミス（❌）が5回以上あると不合格です。"},{"key":"solveInElevenLines.name","english":"Solve in 12 lines of code","target":"コード12行で解く"},{"key":"solveInElevenLines.description","english":"Can you solve this exercise with only 12 lines of code?","target":"この演習を、わずか12行のコードで解けますか？"}]},{"name":"scenarios","rows":[{"key":"perfectMarks.name","english":"The perfect student!","target":"完璧な生徒！"},{"key":"perfectMarks.description","english":"They did everything right - wow!","target":"見事にすべて正解しました！"},{"key":"dangerous.name","english":"Danger to society","target":"社会の脅威"},{"key":"dangerous.description","english":"We can't let this one on the road!","target":"この人を路上に出せません！"},{"key":"oneBigMistake.name","english":"One big mistake","target":"大きなミス一回"},{"key":"oneBigMistake.description","english":"One big mistake is all it takes to fail!","target":"大きなミスが一つあれば、それだけで不合格です！"},{"key":"scrapedThrough.name","english":"Scraped through","target":"ぎりぎり合格"},{"key":"scrapedThrough.description","english":"They cut it close but they passed!","target":"ぎりぎりでしたが、合格しました！"},{"key":"oneMistakeTooMany.name","english":"One mistake too many!","target":"ミスが多すぎました！"},{"key":"oneMistakeTooMany.description","english":"All those little errors added up.","target":"細かいミスが積み重なってしまいました。"},{"key":"bonus1.name","english":"12 lines of code","target":"コード12行"},{"key":"bonus1.description","english":"Solve the exercise with only 12 lines of code.","target":"この演習を、わずか12行のコードで解きます。"}]},{"name":"hints","rows":[{"key":"lookAtEachMark.question","english":"How do I look at each individual mark?","target":"各記号を個別に確認するにはどうすればいいですか？"},{"key":"lookAtEachMark.answer","english":"Loop through the marks string one character at a time. Each character is either ✅, ❌, or 💥.","target":"記号の文字列を一文字ずつループします。各文字は✅、❌、💥のいずれかです。"},{"key":"emojiInQuotes.question","english":"Why is my code complaining about 💥?","target":"💥でエラーが出るのはなぜですか？"},{"key":"emojiInQuotes.answer","english":"Emoji like 💥 and ❌ still need to be wrapped in quotation marks. They're characters in a string just like letters are.","target":"💥や❌のような絵文字も、引用符で囲む必要があります。これらも普通の文字と同じように、文字列の中の一文字です。"},{"key":"majorFault.question","english":"What should I do when I see a 💥 (major)?","target":"💥（大きなミス）を見つけたら、どうすればいいですか？"},{"key":"majorFault.answer","english":"Any single major fails the test, no matter what else has happened. So you can return `false` straight away as soon as you see one. There's no need to keep looking.","target":"大きなミスが一回でもあれば、他の結果にかかわらず不合格です。ですから、💥を見つけたらすぐに`false`を返して構いません。それ以上確認する必要はありません。"},{"key":"minorCount.question","english":"How do I handle minors, where the count matters?","target":"細かいミスは回数が重要なのですが、どのように扱いますか？"},{"key":"minorCount.answer","english":"Keep a counter variable and add 1 to it each time you see a ❌. Ignore the ✅s, they don't change anything.","target":"カウンター用の変数を用意し、❌を見つけるたびに1を加えます。✅は無視してください。合否に影響しません。"},{"key":"finalCheck.question","english":"What do I check at the end?","target":"最後に何をチェックすればいいですか？"},{"key":"finalCheck.answer","english":"Once the loop's finished and you haven't seen a major, the test passes if there were fewer than 5 minors. Return `true` if the minor count is less than 5, otherwise `false`.","target":"ループが終わって大きなミスが一度もなければ、細かいミスが5回未満なら合格です。細かいミスの回数が5回未満なら`true`を、そうでなければ`false`を返します。"}]}]}]
---

イギリスで運転免許試験を受けると、観察力、運転技術、駐車など、さまざまな項目で評価されます。

細かいミス（"minor"）は何回か許されますが、大きなミス（"major"）は許されません。大きなミスを1回でもするか、細かいミスが5回以上あると不合格です。そうでなければ、路上に出て運転することになります！

余暇に、この運転免許試験の試験官を務めています。生徒が運転する間、各項目について次のように記録します：

- 細かいミスをしたら、記録表に ❌ を付けます
- 大きなミスをしたら、💥 を付けます
- 問題なくクリアしたら、✅ を記入します

`didTheyPass`（合否判定）関数を作成してください。この関数は、合格（✅）、細かいミス（❌）、大きなミス（💥）の記号を含む文字列を入力として受け取ります。合否を判定し、合格なら`true`を、不合格なら`false`を返すようにします。
