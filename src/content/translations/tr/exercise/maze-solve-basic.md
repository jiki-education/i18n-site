---
lang: "tr"
type: "exercise"
slug: "maze-solve-basic"
title: "Labirenti çöz"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "33fd2de"
content_version: "07bf62973fe8"
published_at: "2026-07-31"
forum_topic_id: 328
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Labirentin sonuna ulaşamadınız."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Karakteri labirentin sonuna götürün"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Yeşil hedefe ulaşmak için labirentte ilerleyin"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Karakteri labirentin sonuna götürün"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Göreviniz, karakterinizi labirentin içinden geçirip yeşil hedef karesine ulaştırmaktır."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Neyi nereye taşıyorum?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Sol üstte başlayan küçük karakteri, kırmızı çizgili hücrelerden kaçınarak sağ alttaki yeşil daireye taşıyorsunuz."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Sola döndüğümde karakter sağa dönüyor!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"Karakter, baktığı yöne göre döner. Yani sağa bakıyorken sola dönerse, yukarı bakmaya başlar."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Eyvah, labirentin kenarından aşağı düşecektiniz!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Ah, duvara çarptınız!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Ah! Ateşin içine girdiniz!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"İyyy! Kakaya bastınız! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Karakteri bir hücre ileri taşır"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Karakteri 90 derece sola döndürür"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Karakteri 90 derece sağa döndürür"}]}]}]
---

İlk alıştırmanıza hoş geldiniz!

Bu alıştırmanın amacı, öğrenme ortamının nasıl çalıştığını size tanıtmaktır. Göreviniz, solda gördüğünüz labirenti küçük karaktere talimatlar vererek çözmektir. Karakterin izlemesi gereken bütün talimatları yazarsınız, sonra bunları uygulaması için **Kodu çalıştır** düğmesine tıklarsınız.

Kullanabileceğiniz üç talimat şunlardır:

- `move()` (hareket et), karakteri bir adım ileri taşır
- `turnLeft()` (sola dön), karakteri sola döndürür (o anda baktığı yöne göre)
- `turnRight()` (sağa dön), karakteri sağa döndürür (o anda baktığı yöne göre)

Sol tarafta ilk üç talimatı sizin için çoktan yazdığımızı görebilirsiniz. Ne yaptıklarını görmek için önce **“Kodu çalıştır”** düğmesine tıklayın. Sonra karakterinizi labirentin sonuna götürmek için **başka talimatlar ekleyin**. Her satıra bir talimat yazın, sonra hepsini çalıştırmak için **Kodu çalıştır** düğmesine basın.

Kodunuzu düzenli olarak çalıştırmayı alışkanlık hâline getirmek çok iyi bir yöntemdir!

Labirenti çözdükten sonra Kontrol paneline dönüp bir sonraki derse başlayabilirsiniz.
