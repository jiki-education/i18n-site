---
lang: "id"
type: "concept"
slug: "string-templates"
title: "Template string"
status: "published"
source_repo: "i18n"
source_path: "locales/id/curriculum/concepts/string-templates/page.md"
en_md5: "7fd0e09ac3b32db5f159f8e772872104"
governance_sha: "a5ccff6a"
content_version: "a0ba00edeb27"
published_at: "2026-11-28"
---

Kita bisa memakai sesuatu yang disebut template literal untuk menyisipkan string ke dalam string lain.

Jadi, daripada menggabungkan string satu per satu, kita bisa membuat string atau template yang di dalamnya punya ruang untuk string lain.

Untuk melakukannya, kita memakai _backtick_ (tanda kutip terbalik), alih-alih tanda kutip biasa.

Sesuai namanya, backtick itu seperti tanda kutip yang dibalik, tapi bisa jadi kamu belum pernah memakainya sama sekali, jadi kamu perlu mencari tombol yang tepat di keyboard-mu.

Dengan backtick, kita membuat template yang bisa memuat string lain. Lalu untuk menyisipkan string ke dalam template itu, kita memakai sintaks aneh lainnya, yaitu tanda dolar dan kurung kurawal. Contohnya, untuk mendapatkan hasil yang sama seperti `"hello " + name` yang tadi kita lihat pada penggabungan string, kita bisa menulis:

```javascript
`hello ${name}` // "hello Jeremy" or "hello Jiki"
```

<img
  class="concept-image"
  src="/static/images/concept-assets/string-templates/jiki-name-box.webp"
  alt="Jiki memegang kotak bertuliskan name, nilai yang disisipkan ke dalam template"
  width="207"
  height="400"
/>

Dan itu melakukan hal yang persis sama dengan menggabungkan string satu sama lain.

Tapi kalau ada banyak string yang semuanya harus disatukan di satu tempat, cara ini bisa jauh lebih efisien.

Kamu butuh sedikit waktu untuk terbiasa dengan sintaks yang satu ini, tapi sebenarnya tidak ada yang terlalu rumit.
