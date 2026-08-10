---
lang: "zh-TW"
type: "concept"
slug: "while-loops"
title: "認識`while`迴圈"
status: "published"
source_repo: "i18n"
source_path: "locales/zh-TW/curriculum/concepts/while-loops/page.md"
en_md5: "aeceed2abb1434307cfd7c9a0df55c81"
governance_sha: "494ce4b"
content_version: "d4055c885cc5"
published_at: "2026-08-10"
---

接下來要認識的迴圈是 `while` 迴圈。

這表示：「當某個條件成立時，執行這個迴圈。」假設在 Space Invaders 中，我們有一條規則是只能射擊 5 次。所以我們可以在這裡寫一個迴圈，意思是，當射擊次數少於 5 次時，執行讓玩家繼續遊戲的迴圈。

```javascript
while (numShots < 5) {
  // 射擊外星人
  numShots++
}
```

每次有人射擊時，我們就把 `numShots` 增加 1，最後會達到 5，然後迴圈就會結束。

不過，`while` 迴圈有一個問題，就是很容易出現讓迴圈永遠不會結束的 bug。這被稱為無限迴圈（英文：_infinite loops_），它們是程式中最常見的 bug 之一。

當你的電腦變慢、風扇開始轉動、發出很大的噪音時，通常是因為有人在他們的程式碼裡留下了一個永遠不會結束的無限迴圈。
