---
lang: "ja"
type: "concept"
slug: "properties"
title: "プロパティ"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/properties/source.md"
en_md5: "0634cd72388bef118e9dd22131a3c1cd"
governance_sha: "c80036b"
content_version: "e1ac77c86141"
published_at: "2026-08-06"
---

これまで、文字列や数値は、どちらかと言えば動きの少ないものだと考えてきたかもしれません。

でも実は、そうした静的なものの中にも、Jikiが使えるたくさんの機能が組み込まれているのです。

これから見ていく機能には、大きく分けてプロパティとメソッドの2種類があります。

プロパティは、Jikiにものについて尋ねて教えてもらえる、いわばそのものの「情報」です。

たとえば文字列には、`length`（長さ）というプロパティがあって、Jikiはこれを使って文字列の長さを教えてくれます。

ですから、文字列の長さを知るために、ループで文字をひとつひとつ数えなくても、Jikiに尋ねるだけでいいのです。

それには、新しい書き方であるドット（`.`）を使います。

たとえば、文字列`"Jeremy"`があって、その長さを知りたい場合は、次のように書けばいいのです。

```javascript
"Jeremy".length // 6
```

Jikiが文字列を作るとき、その文字を数えて、何文字だったかを隅のほうにちょこっと書き込んでおくイメージです。

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="文字列Jeremyの文字数を数えて、隅に数字を書き込むJiki"
  width="359"
  height="400"
/>

そして、`length`プロパティを使うと、Jikiはそのメモした数字を確認しに行くだけです。

ですから、`"Jeremy".length`の例で言うと、Jikiが文字列`"Jeremy"`を作るときに、文字を数えて、隅に6という数字を書き込みます。その後で、私たちが`"Jeremy".length`と書くと、Jikiがその数字を確認しに行くわけです。

つまり、プロパティとは、そのものについての「事実」のようなものだと考えることができます。
