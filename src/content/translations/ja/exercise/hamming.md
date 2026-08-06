---
lang: "ja"
type: "exercise"
slug: "hamming"
title: "ハミング"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "c80036b"
content_version: "53fe47ab1f11"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"必要以上に行数を使っています。もう少し短くできないか見直してみましょう。"}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"ハミング距離を計算する"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"同じ長さの2本のDNA鎖間のハミング距離を計算する関数を書いてください。ハミング距離とは、対応する位置の文字が異なる箇所の数です。"},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"11行で解く"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"11行以内のコードでこの問題を解けますか？"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"空のDNA鎖"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"空のDNA鎖のハミング距離は0です。"},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"1文字の同一DNA鎖"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"1文字で同一のDNA鎖のハミング距離は0です。"},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"長い同一DNA鎖"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"長い同一のDNA鎖のハミング距離は0です。"},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"1文字の異なるDNA鎖"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"1文字で異なるDNA鎖のハミング距離は1です。"},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"長い異なるDNA鎖"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"異なる部分のある長いDNA鎖のハミング距離は計算して求められます。"},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"11行のコード"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"11行以内のコードで演習を解きます。"}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"「ハミング距離」を平易な言葉で言うとどういう意味ですか？"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"2つの文字列で異なる位置の数です。例えば 'GAGA' と 'GATA' では3番目の位置だけが異なるので、距離は1になります。"},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"同じ位置にある文字を、2つの文字列でどう比較すればいいですか？"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"両方の文字列を同時に進めていき、同じ位置の文字をそれぞれ取り出せるようにする必要があります。"},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"違いがいくつあるかをどうやって数えればいいですか？"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"違いを見つけるたびに更新される合計を保持するものが必要です。すべての位置をチェックし終えたら、それを返せるようにしておきます。"}]}]}]
---

これは分子生物学に関するExercismの定番の演習です！

人の体は、DNAを含む細胞でできています。それらの細胞は定期的にすり減り、入れ替わる必要があり、娘細胞に分裂することでそれを実現しています。実際、平均的な人の体は生涯で約1京回もの細胞分裂を経験します！

細胞が分裂するとき、DNAも複製されます。この過程で時にミスが起こり、DNAの一部に誤った情報が書き込まれます。2本のDNA鎖を比較して、その違いを数えると、どれだけのミスが起きたかがわかります。これが「ハミング距離」として知られています。

ハミング距離は生物学だけでなく、科学の多くの分野で役立つので、知っておいて損はない言葉です！

課題は、2つのDNA鎖間のハミング距離を計算することです。DNAではC、A、G、Tの文字が使われます。2本の鎖は次のように見えるかもしれません：

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

これらには7つの違いがあり、したがってハミング距離は7です。

`hammingDistance`（ハミング距離）という名前の関数を作成してください。この関数は2つの入力として、2つのDNA鎖を文字列で受け取ります。距離として数値を返すようにしてください。

両方のDNA鎖は常に同じ長さです。
