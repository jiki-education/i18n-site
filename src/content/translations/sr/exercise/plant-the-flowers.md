---
lang: "sr"
type: "exercise"
slug: "plant-the-flowers"
title: "Posadi cveće"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/plant-the-flowers"
en_md5: "4cdf23fd99e55e08a5eece1751d712e2"
governance_sha: "c80036b"
content_version: "beb66f8c0201"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"flowerCount","english":"Expected 9 flowers, but found {{got}}.","target":"Očekivano 9 cvetova, ali pronađeno {{got}}."},{"key":"missingFlowerAt10","english":"Missing a flower at position 10.","target":"Nedostaje cvet na poziciji 10."},{"key":"missingFlowerAt50","english":"Missing a flower at position 50.","target":"Nedostaje cvet na poziciji 50."},{"key":"missingFlowerAt90","english":"Missing a flower at position 90.","target":"Nedostaje cvet na poziciji 90."},{"key":"tooManyLines","english":"Your solution has too many lines of code. Try to find a way to make it shorter.","target":"Tvoje rešenje ima previše linija koda. Pokušaj da nađeš način da ga skratiš."}]},{"name":"tasks","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Posadi 9 cvetova"},{"key":"plantFlowers.description","english":"Use a variable and a repeat loop to plant 9 flowers at positions 10, 20, 30, ..., 90.","target":"Koristi promenljivu i `repeat` petlju da posadiš 9 cvetova na pozicijama 10, 20, 30, ..., 90."}]},{"name":"scenarios","rows":[{"key":"plantFlowers.name","english":"Plant 9 flowers","target":"Posadi 9 cvetova"},{"key":"plantFlowers.description","english":"Plant flowers at positions 10, 20, 30, 40, 50, 60, 70, 80, and 90.","target":"Posadi cveće na pozicijama 10, 20, 30, 40, 50, 60, 70, 80 i 90."}]},{"name":"hints","rows":[{"key":"stuck.question","english":"I'm totally stuck","target":"Ne znam kako da nastavim."},{"key":"stuck.answer","english":"Check the recent videos on how to use repeat loops and how to update variables to track state. They should tell you everything you need to know.","target":"Pogledaj nedavne video snimke o tome kako da koristiš `repeat` petlje i kako da ažuriraš promenljive da pratiš stanje. Trebalo bi da ti pruže sve potrebne informacije."}]},{"name":"functions","rows":[{"key":"plant.description","english":"Plants a flower at the given **position**.","target":"Sadi cvet na datoj **poziciji**."},{"key":"plant.category","english":"Gardening","target":"Baštovanstvo"}]},{"name":"describers","rows":[{"key":"plant","english":"planted a flower at position ${arg1}","target":"posadio cvet na poziciji ${arg1}"}]}]},{"heading":"Shared \"flower-planting\" messages","note":"Shared by every exercise in the flower-planting category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"positionNumber","english":"Position must be a number","target":null}]}]}]
---

Praviš automatizovanu mašinu za sađenje cveća.

Treba da posadi cveće ravnomerno po travnjaku, na svakih `10` jedinica rastojanja. Tako da prvi cvet treba da bude na poziciji `10`, drugi na `20`, i tako dalje.

Imaš funkciju `plant(position)` (posadi na poziciji) koja prima poziciju kao ulaz. Na primer: `plant(10)` posadi cvet na poziciji 10.

Treba da rešiš ovu vežbu u **5 linija koda**, tako da ćeš morati da nađeš način da ne pišeš samo `plant(10)`, `plant(20)` itd.

Srećno!
