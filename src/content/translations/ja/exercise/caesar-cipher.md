---
lang: "ja"
type: "exercise"
slug: "caesar-cipher"
title: "シーザー暗号"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "c80036b"
content_version: "7c8519b30732"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"メッセージの暗号化"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"与えられた数だけメッセージの各文字をずらす暗号化関数を作成してください。スペースはスペースのままにします。'z'を超えてずれた文字は、アルファベットの先頭に戻ります。"}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"1つずらす"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"各文字を1つ前にずらします：a->b、b->c、c->d。"},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"3つずらす"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"各文字を3つ前にずらします：h->k、e->h、l->o、o->r。"},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"アルファベットの先頭に戻る"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"ずらした結果'z'を超えると、先頭に戻ります：x->a、y->b、z->c。"},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"スペースを含むメッセージ"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"スペースはスペースのままで、文字だけがずらされます。"},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"ROT13暗号化"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13は、シーザー暗号でずらす数を13にした特殊なケースです。"}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"文字をNだけずらすとは、どう考えればいいですか？"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"各文字はアルファベットの中で位置を持っています（aは0、bは1の位置、というように）。ずらすには、その位置を見つけて、ずらす数を足し、その新しい位置からアルファベットを参照して文字に戻します。"},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"アルファベット内の文字の位置を見つけるには、どうすればよいですか？"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"`indexOf`を使うと、文字列から小さな文字列を検索できます。アルファベットの文字列に対して呼び出すと、その文字の位置が得られ、見つからない場合は-1が返ります。逆方向に変換するには、位置を使ってアルファベット文字列にインデックスでアクセスすると、その文字が得られます。"},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"ずらした結果が'z'を超えたら、どうなりますか？"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"'a'に戻る必要があります。この場合、剰余演算子（`%`）が最適です。位置を26で割った剰余（`% 26`）を取ると、どんな数も0から25の範囲に戻ります。"},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"これをメッセージ全体に適用するにはどうすればいいですか？"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"メッセージの各文字をループで処理し、1文字用の補助関数でずらしてから、連結（`+`）を使って結果の文字列を作り上げます。"}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"文字列内で小さな文字列を検索し、その位置を返します。見つからなければ-1を返します（このレベルの標準ライブラリで提供）。"},{"key":"indexOf.category","english":"String Operations","target":"文字列操作"}]}]}]
---

シーザー暗号は、最も古く、最も単純な暗号化手法の一つです。ユリウス・カエサルが将軍たちに秘密のメッセージを送るために使用していました。

この暗号は、メッセージの各文字をアルファベットで決まった数だけずらすことで機能します。たとえば、ずらす数を3にすると、'a'は'd'に、'b'は'e'になります。ずらした結果'z'を超えた場合は、アルファベットの先頭に戻ります。

スペースはスペースのまま（ずらさず）にします。

小文字のメッセージとずらす数を受け取り、暗号化されたメッセージを返す`encode(message, shift)`（暗号化する関数）を作成しましょう。

例：

- `encode("abc", 1)` は `"bcd"` を返します
- `encode("xyz", 3)` は `"abc"` を返します（先頭に戻る）
- `encode("hello world", 5)` は `"mjqqt btwqi"` を返します

ヒント：この問題は、小さな補助関数に分解するとよいでしょう。

### 豆知識

私はかつて、ポルトガルのブラガで行われた技術カンファレンスの司会を務めていました。ステージに上がる5分前に、主催者がやってきて、少し申し訳なさそうに「ブラガの古代ローマの遺産を祝うため、今日の前半はユリウス・カエサルの衣装を着ていただけませんか」と頼んできました。果たして、うまく決まったでしょうか…？

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="シーザーに扮したジェレミー"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
