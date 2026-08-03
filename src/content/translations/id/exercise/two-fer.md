---
lang: "id"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/two-fer"
en_md5: "7e59867ebe08e4bd9b598aae4a8be76a"
governance_sha: "510e99d"
content_version: "402a762a963f"
published_at: "2026-08-03"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Kamu menggunakan lebih dari enam baris kode."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Buat fungsi two-fer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Tulis sebuah fungsi twoFer yang menerima sebuah nama dan mengembalikan 'One for [name], one for me.' Kalau tidak ada nama yang diberikan (string kosong), gunakan 'you' sebagai pengganti nama."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Selesaikan dalam enam baris kode"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Bisakah kamu menyelesaikannya hanya dengan enam baris kode?"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Tidak ada nama yang diberikan"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Tidak ada nama yang diberikan, jadi kembalikan 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Nama yang diberikan: Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Namanya 'Alice', jadi kembalikan 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Nama yang diberikan: Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Namanya 'Tom', jadi kembalikan 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"Enam baris kode"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Selesaikan latihan ini hanya dengan enam baris kode."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Apa yang berubah berdasarkan input?"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Hanya satu hal: nama di tengah kalimatnya. Kalau kamu diberi sebuah nama, gunakan nama itu. Kalau tidak, gunakan nilai default `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Bagaimana cara mengecek 'apakah aku diberi nama'?"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Gunakan percabangan `if` yang membandingkan input dengan string kosong `\"\"`. Kalau kosong, gunakan `\"you\"`. Kalau tidak, gunakan input tersebut."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Bagaimana cara menyusun kalimat akhirnya?"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Gabungkan ketiga bagiannya (`\"One for \"`, nama yang dipilih, dan `\", one for me.\"`) menggunakan penggabungan (`+`) atau template string."}]}]}]
---

Sekarang kita akan melanjutkan latihan "Hello" yang sederhana itu dengan menambahkan beberapa aturan ekstra.

Dalam beberapa aksen bahasa Inggris, kalau kamu mengucapkan 'two for' dengan cepat, bunyinya terdengar seperti 'two fer'. Two-for-one adalah cara mengatakan bahwa kalau kamu membeli satu, kamu mendapat satu lagi secara gratis.

Bayangkan sebuah toko roti sedang mengadakan promo liburan: beli dua kue kering dengan harga satu. Kamu mengambil promo itu dan memutuskan untuk memberikan kue ekstranya kepada orang lain.

Tugasmu adalah menentukan apa yang akan kamu ucapkan saat memberikan kue ekstra itu.

- Kalau kamu tahu nama orangnya (misalnya Alice), kamu akan berkata: "One for Alice, one for me."
- Kalau kamu tidak tahu namanya, kamu akan berkata: "One for you, one for me."

Tulislah sebuah fungsi bernama `twoFer(name)` (artinya "dua untuk"; `name` berarti nama) yang mengembalikan kalimat yang sesuai.

Berikut beberapa contohnya:

| Pemanggilan fungsi | Nilai kembalian                 |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

Sebagai bonus, bisakah kamu menuliskannya hanya dengan **6 baris kode**?

Semoga berhasil!
