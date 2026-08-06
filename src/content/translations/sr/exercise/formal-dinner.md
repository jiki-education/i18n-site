---
lang: "sr"
type: "exercise"
slug: "formal-dinner"
title: "Formalna večera"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/formal-dinner"
en_md5: "8d6a2f3dd90b3a487a6bf855f31ef025"
governance_sha: "c80036b"
content_version: "1573011bf0fd"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Pronađi sto gosta"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Napiši funkciju koja prima listu punih imena gostiju, odgovarajuću listu imena stolova i gosta koji dolazi, najavljenog kao oslovljavanje i prezime. Vrati ime stola za kojim taj gost sedi, ili `\"No table found\"` ako nije na rasporedu sedenja."},{"key":"solveTightly.name","english":"Solve it tightly","target":"Reši sažeto"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"Bonus: ovo se može napisati mnogo kompaktnije nego što očekuješ. Možeš li da celo rešenje svedeš na svega nekoliko redova?"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Prazan raspored sedenja"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Niko ne sedi nigde kada je raspored prazan."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad je odbijen"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"Ime nije na rasporedu sedenja."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad je upućen do svog stola"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt je na rasporedu, pa gospodin Pitt dobija svoj sto."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"Vitez kraljevstva"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Drugo oslovljavanje i gost koji nije prvi na rasporedu."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Gospodin Bond, pretpostavljam"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond je na rasporedu."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Hmmm... Gospodin Bond, pretpostavljam"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"Na rasporedu je samo Jason Bourne, a ne James Bond."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Nije baš gospodin Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Ni Ada Spitt ni Hugo Ross-Pitt nisu gospodin Pitt, tako da on nema mesto ovde."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"Šta kažeš na barona?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Baron Lloyd Webber ima dve reči u prezimenu."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Da li je Mark baron?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Drugi Webber se ne računa - prezime mora da se poklopi u celosti."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"Uredno i pregledno: Lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time your solution has to fit into a much smaller number of lines.","target":"Isti raspored sedenja kao pre, ali ovog puta tvoje rešenje mora da stane u mnogo manji broj redova."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"Kako su dve liste povezane?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"One su par. Prvi gost sedi za prvim stolom, drugi gost za drugim stolom, i tako dalje. Dakle, nije dovoljno znati *da* je gost na rasporedu - treba da znaš *gde* se na rasporedu nalazi."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"Gost kaže 'Mr Pitt', ali na rasporedu piše 'Brad Pitt'. Kako da ih uporedim?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Ta dva stringa nikada neće biti jednaka, pa direktno poređenje neće uraditi ništa. Razmisli o tome koji deo onoga što je gost najavio se zapravo pojavljuje na rasporedu, i na kom mestu u zapisu sa rasporeda očekuješ da ga nađeš."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"Može li prezime da odgovara pogrešnom gostu?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Apsolutno može. Pročitaj 'Ada Spitt' i 'Hugo Ross-Pitt' naglas, a zatim razmisli o gospodinu Pittu. Zapitaj se šta čini prezime pravim prezimenom u toj stavci, a ne samo nekoliko slova koja se nađu na kraju."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"Šta treba da vratim kada niko ne odgovara?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"String `\"No table found\"`, tačno tako kako je napisano. Nezgrapniji deo je znati kada smeš to da kažeš. Ako si proverio baš prvog gosta na rasporedu i on nije tvoj čovek, da li zaista već znaš da on ne sedi negde?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Nastavi! Pokušaj da rešiš u manje redova."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"Broj elemenata u nizu - isto svojstvo `length` koje si koristio na stringovima (obezbeđeno od strane nivoa stdlib)"},{"key":"length.category","english":"List Operations","target":"Operacije nad nizovima"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"Deli string na niz delova, razdvajajući na svakom separatoru (obezbeđeno od strane nivoa stdlib)"},{"key":"split.category","english":"String Operations","target":"Operacije nad stringovima"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"Pravi novi niz od dela niza, počev od date pozicije (obezbeđeno od strane nivoa stdlib)"},{"key":"slice.category","english":"List Operations","target":"Operacije nad nizovima"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"Spaja elemente niza u jedan string, sa separatorom između njih (obezbeđeno od strane nivoa stdlib)"},{"key":"join.category","english":"List Operations","target":"Operacije nad nizovima"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"Proverava da li se string završava manjim stringom (obezbeđeno od strane nivoa stdlib)"},{"key":"endsWith.category","english":"String Operations","target":"Operacije nad stringovima"}]}]}]
---

Vraćaš se svom sporednom poslu izbacivača. Veče je posle After Party, a tu je i još jedna fešta. Ovog puta je to formalna večera, pa si večeras manje „nabildovan tip na vratima“ a više „osoba sa klipbordom i finim prslukom“.

Ovde definitivno nije mesto gde se koristi **samo** ime. Zapravo, ovde se uopšte ne koristi ime. Ovde se svi oslovljavaju oslovljavanjem (engl. _honorific_) (gospođica, gospodin, dr, itd) i prezimenom.

Organizatori su ti dali raspored sedenja u vidu dve odvojene liste. Jedna sadrži puna imena gostiju. Druga sadrži ime stola za kojim svaki gost sedi (nazvanog po drveću i cveću). Kao i kod „After Party“, te dve liste su usklađene: gost na poziciji 3 u prvoj listi sedi za stolom na poziciji 3 u drugoj listi.

Zato kad gospodin Pitt uđe, treba da shvatiš da je to „Brad Pitt“ sa tvoje liste i da mu kažeš za kojim stolom je.

Napiši funkciju pod nazivom `tableFor` (pronalazi za kojim stolom gost sedi). Funkcija ima tri ulaza:

- Prvi je lista punih imena gostiju, kao stringovi
- Drugi je lista imena stolova, u istom redosledu kao gosti
- Treći je gost koji dolazi, formatiran kao oslovljavanje iza kog sledi prezime (npr. "Mr Pitt")

Vrati ime stola za kojim gost sedi. Ako ga uopšte nema na rasporedu sedenja, vrati string `"No table found"` (nema uljeza!).

Oslovljavanje je uvek tačno jedna reč, a sve posle nje je prezime gosta. Većina prezimena je od jedne reči, ali nekolicina velikih se prostire na dve reči.

Ipak, budi oprezan. Mnogo prezimena liči na druga prezimena.

### String/Array Methods & Properties

Pored svojstva `.length` koje si naučio u prošloj vežbi, postoje četiri metode koje bi ti mogle biti korisne. Postoji mnogo načina da se reši ova vežba, ali ove će te dovesti do najkraćeg mogućeg rešenja.

`"...".split(substring)` deli string korišćenjem drugog stringa. Na primer:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` hvata deo niza, počev od indeksa `start` pa do kraja niza. Uhvaćeni elementi se kopiraju u NOVI niz, koji ti se vraća. U stvari, ovim se odbacuje prvih `start` elemenata. Na primer:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` spaja elemente niza pomoću datog stringa. Na primer:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` ti kaže da li se string završava drugim stringom. Na primer:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
