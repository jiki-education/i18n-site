---
lang: "hr"
type: "concept"
slug: "building-arrays"
title: "Izgradnja polja"
status: "published"
source_repo: "i18n"
source_path: "locales/hr/curriculum/concepts/building-arrays/page.md"
en_md5: "c3358ca032f965cf058bb72df37ffbd4"
governance_sha: "a5ccff6a"
content_version: "a9c22f6fa0f8"
published_at: "2026-11-28"
---

Do sada radiš s poljima kojima se vrijednost postavi na početku i ostaje nepromijenjena. Ali što ako želiš dodavati stvari u polje tijekom vremena? Za to polja imaju metodu koja se zove `push` (gurni).

Push ima jedan ulaz: ono što želiš pričvrstiti na kraj polja. U ovom slučaju želimo gurnuti riječ `"Isaac"` na kraj polja koje već sadrži `"DJ"` i `"Bethany"`.

Da bi to napravio, Jiki vadi polje iz kutije, pričvršćuje `"Isaac"` na kraj lanca i zatim cijelu stvar vraća u kutiju. Primijeti razliku: sa stringovima je Jiki svaki put stvarao novi string, a ovdje zapravo mijenja polje.

U programiranju ćeš često vidjeti jedan obrazac: krene se od praznog polja i ono se postupno gradi. Zamisli da imamo velik popis imena i da želimo proći kroz njih. Svaki put kad naiđemo na nekoga tko je mentor, dodajmo ga u svoje polje.

Taj ćeš obrazac ponavljanja i dodavanja koristiti vrlo često.
