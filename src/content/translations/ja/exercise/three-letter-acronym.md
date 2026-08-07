---
lang: "ja"
type: "exercise"
slug: "three-letter-acronym"
title: "3文字のアクロニム"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "90a620a"
content_version: "e31a71c69b79"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"解答の行数が多すぎます。もっと短くできますか？"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"アクロニム関数を作成する"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"3つの単語を受け取り、各単語の最初の文字を取って作られた3文字のアクロニムを返すアクロニム関数を書きます。"},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"3行のコードで解く"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"この演習を、たった3行のコードで解けますか？"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Portable Network Graphics"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"「Portable」「Network」「Graphics」から「PNG」というアクロニムを作成します。"},{"key":"css.name","english":"Cascading Style Sheets","target":"Cascading Style Sheets"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"「Cascading」「Style」「Sheets」から「CSS」というアクロニムを作成します。"},{"key":"www.name","english":"World Wide Web","target":"World Wide Web"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"「World」「Wide」「Web」から「WWW」というアクロニムを作成します。"},{"key":"lol.name","english":"Lowercase words","target":"小文字の単語"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"「laugh」「out」「loud」から「lol」というアクロニムを作成します。"},{"key":"bonus1.name","english":"3 lines of code","target":"3行のコード"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"この演習を3行のコードだけで解きます。"}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"単語の最初の文字だけを取り出すにはどうすればよいですか？"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"文字列にインデックスでアクセスします。最初の文字はインデックス`[0]`にあります。"},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"3文字の結果を組み立てるにはどうすればよいですか？"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"各単語の最初の文字を取り出し、連結（`+`）またはテンプレート文字列を使って順番に結合します。"}]}]}]
---

アクロニムとは、複数の単語の頭文字をとって作られた言葉です。たとえば、'Portable Network Graphics'の場合、'PNG'になります。

3つの単語を受け取り、各単語の最初の文字を取って3文字のアクロニムを返す `acronym` という関数を書いてください。

たとえば、'Cascading'、'Style'、'Sheets'が与えられたら、'CSS'を返す必要があります。
