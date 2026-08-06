---
lang: "ja"
type: "concept"
slug: "continue"
title: "`continue`"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/continue/source.md"
en_md5: "6c3f7483826e27d44d6c404cc9f621dd"
governance_sha: "c80036b"
content_version: "3cfb3cd37179"
published_at: "2026-08-06"
---

ループを途中で完全に抜けるのではなく、特定の繰り返しだけをスキップしたいときがあります。たとえば、奇数に対してだけ処理をしたい場合を考えてみましょう。

もし`i`（インデックス変数）が奇数なら、その回の繰り返しだけをスキップしたいのです。

でも、ループから完全に抜け出したいわけではありません。今の繰り返しだけを飛ばして、次の繰り返しに進みたいのです。

そのために、`continue`という別のキーワードがあります。

Jikiは`continue`を見つけると、ループの先頭に戻って次の繰り返しに進みます。ですから、`for-of`ループの中に`continue`があると、リストの次の要素に移動するのです。

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // itemが"something"のとき、ループの残りをスキップ
  }
  // ループの残りの処理...
}
```

`for`ループでは、`i++`でカウンターを増やしてから、次の繰り返しを始めます。

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // iが偶数のとき、ループの残りをスキップ
  }
  // ループの残りの処理...
}
```
