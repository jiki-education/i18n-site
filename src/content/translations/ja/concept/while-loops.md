---
lang: "ja"
type: "concept"
slug: "while-loops"
title: "`while`ループを理解する"
status: "published"
source_repo: "i18n"
source_path: "locales/ja/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "494ce4b"
content_version: "cd0f653f1cfa"
published_at: "2026-08-10"
---

次に知っておきたいループは、`while`ループ（英: _while_ loop）です。

これは、「ある条件が成り立っている間、ループを実行する」という意味です。たとえば、スペースインベーダーで「5回までしか撃てない」というルールがあるとします。この場合、「ショットの回数が5回未満の間、ゲームを続ける」というループを書くことになります。

```javascript
while (numShots < 5) {
  // エイリアンを撃つ
  numShots++
}
```

誰かが撃つたびに、`numShots`を1ずつ増やしていきます。そして、やがて5に達すると、ループを抜けます。

しかし、`while`ループにはひとつ問題があります。ループが終わらないバグがとても発生しやすいのです。これは**無限ループ（英: *infinite loop*）**と呼ばれ、プログラムで最もよくあるバグのひとつです。

パソコンが遅くなったり、ファンが回り始めてうるさくなったりするのは、多くの場合、誰かがコードの中に終わらない無限ループを残してしまったからです。
