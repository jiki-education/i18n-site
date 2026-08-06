---
lang: "sr"
type: "concept"
slug: "building-arrays"
title: "Popunjavanje nizova"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/concepts/building-arrays/source.md"
en_md5: "c3358ca032f965cf058bb72df37ffbd4"
governance_sha: "c80036b"
content_version: "de51bdb13056"
published_at: "2026-08-06"
---

Dosad, nizovi sa kojima radiš imaju vrednost koja je jednostavno postavljena na početku i fiksna je. Ali šta ako želiš da vremenom dodaješ stvari u niz?

Pa, za to nizovi imaju metodu `push` (dodavanje na kraj niza).

`push` prima jedan ulaz – stvar koju želiš da prikačiš na kraj niza. Dakle, u ovom slučaju želimo da dodamo reč `"Isaac"` na kraj niza koji već sadrži `"DJ"` i `"Bethany"`.

Da bi ovo uradio, Jiki izvadi niz iz kutije, prikači `"Isaac"` na kraj lanca i zatim celu stvar vrati u kutiju. Obrati pažnju: za razliku od ranije sa stringovima, gde je Jiki svaki put kreirao novi string, ovde on zapravo menja niz.

Jedan šablon koji ćeš često viđati u programiranju jeste da počneš sa praznim nizom i da ga postepeno gradiš. Zamisli da imamo veliku listu imena i da želimo da prođemo kroz njih. Svaki put kada naiđemo na nekog ko je mentor, dodajemo ga u naš niz.

Ovaj šablon petlje i dodavanja je nešto što ćeš mnogo koristiti.
