---
lang: "hu"
type: "exercise"
slug: "plant-the-flowers"
title: "Virágültetés"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "c80036b"
content_version: "925d2d06568a"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"9 virágot vártunk, de {{got}} virágot találtunk."},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"Hiányzik egy virág a 10-es pozícióban."},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"Hiányzik egy virág az 50-es pozícióban."},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"Hiányzik egy virág a 90-es pozícióban."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"A megoldásod túl sok sorból áll. Próbáld meg rövidebbre fogni."}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Ültess 9 virágot"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"Használj egy változót és egy repeat ciklust, hogy elültess 9 virágot a 10-es, 20-as, 30-as, ..., 90-es pozíciókba."}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Ültess 9 virágot"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"Ültess virágokat a 10-es, 20-as, 30-as, 40-es, 50-es, 60-as, 70-es, 80-as és 90-es pozíciókba."}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"Teljesen elakadtam."},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"Nézd meg a legutóbbi videókat arról, hogyan kell repeat ciklusokat használni és változókat frissíteni az állapot nyomon követéséhez. Mindent elmondanak, amit tudnod kell."}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"Elültet egy virágot a megadott **pozícióba**."},{"key":"plant.category","english":"Gardening","target":"Kertészkedés"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"elültetett egy virágot a(z) ${arg1} pozícióba"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":"Position must be a number"}]}]}]
---

Egy automatikus virágültető gépet készítesz.

A gépnek egyenletesen kell virágokat ültetnie a pázsiton, egymástól `10`-es távolságra. Tehát az első virág a `10`-es pozícióba kerüljön, a második a `20`-asba, és így tovább.

Rendelkezésedre áll egy `plant(position)` (ültet adott pozícióra) függvény, ami egy pozíciót vár bemenetként. Például: `plant(10)` elültet egy virágot a 10-es pozícióba.

A feladatot **5 sornyi kóddal** kell megoldanod, tehát találnod kell egy megoldást, ami nem csupán abból áll, hogy egymás után leírod: `plant(10)`, `plant(20)` stb.

Sok szerencsét!
