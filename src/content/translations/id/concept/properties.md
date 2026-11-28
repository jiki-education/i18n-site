---
lang: "id"
type: "concept"
slug: "properties"
title: "Properti"
status: "published"
source_repo: "i18n"
source_path: "locales/id/curriculum/concepts/properties/page.md"
en_md5: "0634cd72388bef118e9dd22131a3c1cd"
governance_sha: "a5ccff6a"
content_version: "d758b9500a99"
published_at: "2026-11-28"
---

Sejauh ini, ketika kita membahas string atau angka, kita membayangkannya sebagai sesuatu yang cukup statis.

Padahal selain itu, di dalamnya juga sudah terpasang banyak kemampuan yang bisa Jiki gunakan.

Ada dua jenis kemampuan yang akan kita lihat, yaitu properti dan method.

Properti adalah fakta yang bisa kita minta Jiki sampaikan tentang sesuatu. Jadi misalnya, string punya properti bernama `length` (panjang), yang bisa Jiki pakai untuk memberi tahu kita seberapa panjang sebuah string.

Jadi daripada kita harus menelusuri semua hurufnya untuk menghitung seberapa besar sebuah string, kita cukup meminta Jiki memberitahukannya.

Dan untuk melakukannya, kita memakai bentuk sintaks baru, yaitu titik.

Misalnya, kalau kita punya string `"Jeremy"` dan ingin mengetahui panjangnya, kita bisa menulis:

```javascript
"Jeremy".length // 6
```

Saat Jiki membuat sebuah string, dia menghitung huruf-hurufnya dan menuliskan angka di sudutnya sesuai jumlah huruf tersebut.

<img
  class="concept-image"
  src="/static/images/concept-assets/properties/jiki-counting-letters.webp"
  alt="Jiki menghitung huruf-huruf pada string Jeremy dan menuliskan angkanya di sudut"
  width="359"
  height="400"
/>

Lalu saat kita memakai properti `length`, Jiki tinggal memeriksa angka tadi. Jadi pada contoh `"Jeremy".length` kita, ketika Jiki membuat string `"Jeremy"`, dia menghitung hurufnya, menuliskan angka enam di sudut, lalu saat kita menulis `"Jeremy".length`, dia memeriksa angka itu. Jadi kamu bisa membayangkan properti itu seperti fakta tentang sesuatu.
