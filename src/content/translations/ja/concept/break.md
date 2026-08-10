---
lang: "ja"
type: "concept"
slug: "break"
title: "`break`キーワード"
status: "published"
source_repo: "i18n"
source_path: "locales/ja/curriculum/concepts/break/page.md"
en_md5: "30148766de67ae467ab1a4852ad35895"
governance_sha: "3d354c0"
content_version: "a8a9f6bc5fdd"
published_at: "2026-08-10"
---

`break`キーワードは、どのループの本体でも使えます。

波括弧で囲まれた部分が本体です。そしてJikiがそれを見つけたら、すぐにループを抜けて、ループの下にあるコードへ進みます。

例えば、このループを50回実行するという制約があるけれど、ユーザーが5回シュートしたら止めたい場合、一番上に50まで数えるforループを置きます。

しかし、ループの途中に条件を置いて、ユーザーが5回シュートしたかをチェックし、もしそうなら、即座に抜ける（英: _break_）のです。

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // ループを抜ける
  }
}
```
