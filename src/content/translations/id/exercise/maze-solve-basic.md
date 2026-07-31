---
lang: "id"
type: "exercise"
slug: "maze-solve-basic"
title: "Selesaikan labirinnya"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "45feeea"
content_version: "0cdb873ba368"
published_at: "2026-07-31"
forum_topic_id: 806
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Kamu belum sampai ke ujung labirin."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Pandu tokohnya sampai ke ujung labirin"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Susuri labirinnya untuk mencapai target hijau"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Pandu tokohnya sampai ke ujung labirin"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Tugasmu adalah memandu tokohmu melewati labirin sampai ke kotak tujuan berwarna hijau."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Aku memindahkan apa dan ke mana?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Kamu memindahkan tokoh kecil yang mulai dari pojok kiri atas ke lingkaran hijau di pojok kanan bawah, sambil menghindari sel bergaris merah."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Waktu aku belok kiri, tokohnya malah belok kanan!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"Tokohnya berbelok relatif terhadap arah yang sedang dia hadapi. Jadi kalau dia sedang menghadap ke kanan lalu kamu belok kiri, dia akan berbalik menghadap ke atas."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Waduh, kamu mencoba jatuh dari tepi labirin!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Aduh, kamu menabrak dinding!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Aduh! Kamu berjalan masuk ke api!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Iiih! Kamu menginjak kotoran! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Pindahkan karakter maju satu petak"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Putar karakter 90 derajat ke kiri"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Putar karakter 90 derajat ke kanan"}]}]}]
---

Selamat datang di latihan pertamamu!

Tujuan latihan ini adalah membuatmu terbiasa dengan cara kerja lingkungan belajarnya. Tugasmu adalah menyelesaikan labirin yang ada di sebelah kiri dengan memberi instruksi kepada tokoh kecil di sana. Kamu menuliskan semua instruksi yang harus dia ikuti, lalu klik **Jalankan Kode** supaya dia menjalankannya.

Tiga instruksi yang bisa kamu pakai adalah:

- `move()` (bergerak) yang memindahkan tokohnya satu langkah ke depan
- `turnLeft()` (belok kiri) memutar tokohnya ke kiri (relatif terhadap arah yang sedang dia hadapi)
- `turnRight()` (belok kanan) memutar tokohnya ke kanan (relatif terhadap arah yang sedang dia hadapi)

Di sebelah kiri, kamu bisa lihat kalau tiga instruksi pertama sudah kami tuliskan. Mulailah dengan mengeklik tombol **“Jalankan Kode”** untuk melihat apa yang dilakukannya. Lalu **tambahkan instruksi lain** supaya tokohmu sampai ke ujung labirin. Tulis satu instruksi di setiap baris, lalu tekan **Jalankan Kode** untuk menjalankan semuanya.

Membiasakan diri menjalankan kodemu secara rutin itu kebiasaan yang bagus!

Setelah labirinnya selesai, kamu bisa kembali ke Dasbor dan mulai materi berikutnya.
