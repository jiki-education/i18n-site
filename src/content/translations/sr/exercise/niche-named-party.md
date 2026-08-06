---
lang: "sr"
type: "exercise"
slug: "niche-named-party"
title: "Ekskluzivna žurka"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "c80036b"
content_version: "8f0f32757da9"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"Proveri ime"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"Napiši funkciju `handleGuest` koja proverava da li ime osobe počinje dozvoljenim prefiksom za večerašnju žurku. Vrati `true` ako počinje, a `false` ako ne počinje."},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"Reši u 20 linija"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"Bonus: kada se brojanje dužine izdvoji u pomoćnu funkciju koju `handleGuest` ponovo koristi, celo rešenje staje u 20 linija. Možeš li da ga pronađeš?"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"S žurka: Sarah dolazi"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"Večeras su dozvoljena samo imena koja počinju sa „S”. Sarah treba da uđe!"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"S žurka: Brad dolazi"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"Večeras su dozvoljena samo imena koja počinju sa „S”. Brad ne bi trebalo da uđe."},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"Brad žurka: Bradley dolazi"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"Večeras su dozvoljena samo imena koja počinju sa „Brad”. Bradley treba da uđe!"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"Bradley žurka: Brad dolazi"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"Večeras su dozvoljena samo imena koja počinju sa „Bradley”. Brad je prekratak, pa nije dozvoljen."},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"Brad žurka: Brian dolazi"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"Večeras su dozvoljena samo imena koja počinju sa „Brad”. Brian treba da bude odbijen."},{"key":"silence.name","english":"S Party: Silence...","target":"S žurka: Tišina..."},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"Osoba ne kaže svoje ime. Prazno ime ne može da počne ni sa čim. Odbij ga!"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"Cher žurka: Cher dolazi"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"Večeras su dozvoljena samo imena koja počinju sa „Cher”. Cherino ime je tačno „Cher” – pusti je da uđe!"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"Uredno i čisto"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"Najkraće rešenje staje u 20 linija. Možeš li da ga pronađeš?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Samo napred! Pokušaj da rešiš sa manje linija."}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"Kako da proverim da ime počinje određenim slovima?"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"Uporedi svaki karakter dozvoljenog prefiksa sa karakterom na istoj poziciji u imenu. Ako se bilo koji karakter razlikuje, ime se ne poklapa."},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"Kako da prolazim kroz karaktere jedan po jedan?"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"Koristi iteraciju kroz string da prolaziš kroz karaktere."},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"Kako da pronađem odgovarajuće slovo u drugoj reči?"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"Koristi indeksiranje stringova da pronađeš određeno slovo."},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"Šta ako je dozvoljeni prefiks duži od imena?"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"U tom slučaju ime se ne poklapa, pa treba da vratiš `false`."}]}]}]
---

Večerašnja žurka je veoma ekskluzivna: samo ljudi čija imena počinju određenim nizom slova smeju da uđu!

Tvoj zadatak je da napišeš funkciju `handleGuest` (obradi gosta) koja prima dva ulaza:

- `name` : ime osobe na vratima
- `allowedPrefix` : potrebna početna slova za večerašnju žurku

Treba da vrati `true` ako je osobi dozvoljen ulaz, a `false` ako treba da bude odbijena.

Na primer:

- Ako je večerašnji dozvoljeni prefiks `"S"`, onda Sarah ulazi (vraća `true`), ali Brad ne ulazi (vraća `false`).
- Ako je dozvoljeni prefiks `"Brad"`, onda Brad i Bradley ulaze, ali Brian ne ulazi.

### Pomoćne funkcije

Dok radiš ovu vežbu, biće ti potrebno da izračunaš dužinu imena gosta, kao i dužinu dozvoljenog prefiksa. Ovo je savršena prilika da napraviš pomoćnu funkciju `getLength(someString)`, koja broji koliko slova ima u stringu. Zatim možeš da koristiš ovu funkciju na različitim mestima unutar `handleGuest(...)`.

Bonus scenario izaziva te da rešiš ovo sa najmanjim mogućim brojem linija. Možeš smisliti i druga rešenja koja ti se više sviđaju, koja koriste više linija. To je sasvim u redu (i ohrabrujemo te da istražuješ različite pristupe), ali pokušaj da pronađeš i najkraću verziju.

Zabavi se!
