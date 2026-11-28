---
lang: "vi"
type: "concept"
slug: "continue"
title: "Từ khóa `continue`"
status: "published"
source_repo: "i18n"
source_path: "locales/vi/curriculum/concepts/continue/page.md"
en_md5: "6cd21a2f25c493f61d000f865014709d"
governance_sha: "a5ccff6a"
content_version: "5006d405f68e"
published_at: "2026-11-28"
---

Có những lúc chúng ta muốn bỏ qua một lần lặp cụ thể của vòng lặp thay vì thoát hẳn khỏi nó. Hãy tưởng tượng chúng ta chỉ muốn làm gì đó với các số lẻ.

Chúng ta muốn nói được rằng nếu `i` (biến đếm) là số lẻ thì lần này đừng chạy vòng lặp.

Nhưng chúng ta không muốn thoát hẳn khỏi vòng lặp. Chúng ta chỉ muốn bỏ qua riêng lần lặp này rồi xem đến lần tiếp theo.

Và để làm việc đó, chúng ta có một từ khóa khác tên là `continue`.

Khi Jiki thấy `continue`, cậu ấy chỉ nhảy về đầu vòng lặp để sang lần lặp tiếp theo. Vậy nên trong vòng lặp for-of, nếu thấy `continue` thì cậu ấy chuyển sang phần tử tiếp theo trong danh sách.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Bỏ qua phần còn lại của vòng lặp khi gặp "something"
  }
  // Phần còn lại của vòng lặp...
}
```

Còn trong vòng lặp for, cậu ấy chạy đến phần tăng `i++` rồi bắt đầu lần lặp tiếp theo.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Bỏ qua phần còn lại của vòng lặp với các số chẵn
  }
  // Phần còn lại của vòng lặp...
}
```
