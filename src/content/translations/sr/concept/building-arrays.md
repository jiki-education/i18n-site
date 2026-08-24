---
lang: "sr"
type: "concept"
slug: "building-arrays"
title: "Popunjavanje nizova"
status: "published"
source_repo: "i18n"
source_path: "locales/sr/curriculum/concepts/building-arrays/page.md"
en_md5: "c3358ca032f965cf058bb72df37ffbd4"
governance_sha: "45861691"
content_version: "e3a5030e1c1c"
published_at: "2026-08-24"
---

Dosad, nizovi sa kojima radiš imaju vrednost koja je jednostavno postavljena na početku i fiksna je. Ali šta ako želiš da vremenom dodaješ stvari u niz?

Pa, za to nizovi imaju metodu `push` (dodavanje na kraj niza).

`push` prima jedan ulaz – stvar koju želiš da prikačiš na kraj niza. Dakle, u ovom slučaju želimo da dodamo reč `"Isaac"` na kraj niza koji već sadrži `"DJ"` i `"Bethany"`.

Da bi ovo uradio, Džiki izvadi niz iz kutije, prikači `"Isaac"` na kraj lanca i zatim celu stvar vrati u kutiju. Obrati pažnju: za razliku od ranije sa stringovima, gde je Džiki svaki put kreirao novi string, ovde on zapravo menja niz.

Jedan šablon koji ćeš često viđati u programiranju jeste da počneš sa praznim nizom i da ga postepeno gradiš. Zamisli da imamo veliku listu imena i da želimo da prođemo kroz njih. Svaki put kada naiđemo na nekog ko je mentor, dodajemo ga u naš niz.

Ovaj šablon petlje i dodavanja je nešto što ćeš mnogo koristiti.
