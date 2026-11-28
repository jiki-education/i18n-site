---
lang: "id"
type: "concept"
slug: "continue"
title: "Kata kunci `continue`"
status: "published"
source_repo: "i18n"
source_path: "locales/id/curriculum/concepts/continue/page.md"
en_md5: "6cd21a2f25c493f61d000f865014709d"
governance_sha: "a5ccff6a"
content_version: "13b0da7004da"
published_at: "2026-11-28"
---

Ada kalanya kita ingin melewati satu iterasi tertentu dalam perulangan, bukan keluar dari perulangan itu. Bayangkan kita hanya ingin melakukan sesuatu untuk angka ganjil.

Kita ingin bisa mengatakan: kalau `i` (indeks) ganjil, jangan jalankan perulangan kali ini.

Tapi kita tidak ingin keluar sepenuhnya dari perulangan. Kita hanya ingin melewati satu iterasi ini, lalu lanjut melihat iterasi berikutnya.

Untuk itu, ada satu kata kunci lagi yang bernama `continue`.

Saat Jiki melihat `continue`, dia langsung melompat kembali ke awal perulangan untuk iterasi berikutnya. Jadi di perulangan for-of, kalau dia melihat `continue`, dia lanjut ke item berikutnya dalam daftar.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Melewati sisa perulangan untuk "something"
  }
  // Sisa perulangan...
}
```

Di perulangan for, dia menjalankan increment `i++`, lalu memulai iterasi berikutnya.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Melewati sisa perulangan untuk angka genap
  }
  // Sisa perulangan...
}
```
