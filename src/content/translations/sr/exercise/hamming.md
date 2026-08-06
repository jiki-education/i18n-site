---
lang: "sr"
type: "exercise"
slug: "hamming"
title: "Hamming"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "c80036b"
content_version: "d77c5f7d9a91"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"Koristiš više linija nego što je potrebno — pokušaj da skratiš."}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"Izračunaj Hammingovo rastojanje"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"Napiši funkciju koja izračunava Hammingovo rastojanje između dva DNK lanca jednake dužine. Hammingovo rastojanje je broj pozicija na kojima se odgovarajući karakteri razlikuju."},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"Reši u jedanaest linija koda"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"Možeš li da rešiš ovo koristeći najviše jedanaest linija koda?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"Prazni lanci"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"Prazni lanci imaju Hammingovo rastojanje 0."},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"Jednoslovni identični lanci"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"Jednoslovni identični lanci imaju Hammingovo rastojanje 0."},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"Dugi identični lanci"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"Dugi identični lanci imaju Hammingovo rastojanje 0."},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"Jednoslovni različiti lanci"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"Jednoslovni različiti lanci imaju Hammingovo rastojanje 1."},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"Dugi različiti lanci"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"Dugi različiti lanci imaju izračunato Hammingovo rastojanje."},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"Jedanaest linija koda"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"Reši vežbu koristeći najviše jedanaest linija koda."}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"Šta „Hammingovo rastojanje” znači jednostavnim rečima?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"To je broj pozicija na kojima se dva stringa razlikuju. Na primer, 'GAGA' i 'GATA' se razlikuju samo na poziciji 3, što daje rastojanje 1."},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"Kako da uporedim karaktere na istoj poziciji u oba stringa?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"Moraćeš da prolaziš kroz oba stringa sinhronizovano, tako da možeš da uzmeš karakter na istom mestu iz svakog dok ideš."},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"Kako da pratim „koliko ima razlika”?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"Trebaće ti nešto što održava tekući zbir, ažuriran kad god primetiš neslaganje, tako da bude spremno za vraćanje kad proveriš svaku poziciju."}]}]}]
---

Ovo je klasična Exercism vežba o molekularnoj biologiji!

Tvoje telo se sastoji od ćelija koje sadrže DNK. Te ćelije se redovno troše i treba ih zameniti, što postižu deobom na ćerke ćelije. Zapravo, prosečno ljudsko telo doživi oko 10 kvadriliona deoba ćelija tokom života!

Kada se ćelije dele, i njihova DNK se replicira. Ponekad tokom tog procesa dođe do grešaka i pojedinačni delovi DNK se kodiraju sa pogrešnom informacijom. Ako uporedimo dva lanca DNK i izbrojimo razlike između njih, možemo da vidimo koliko je grešaka nastalo. To je poznato kao „Hammingovo rastojanje”.

Hammingovo rastojanje je korisno u mnogim oblastima nauke, ne samo u biologiji, pa je dobro biti upoznat sa tim izrazom!

Tvoj zadatak je da izračunaš Hammingovo rastojanje između dva DNK lanca. DNK koristi slova C, A, G i T. Dva lanca mogu da izgledaju ovako:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Imaju 7 razlika, i stoga je Hammingovo rastojanje 7.

Kreiraj funkciju pod nazivom `hammingDistance` (Hammingovo rastojanje) koja ima dva ulaza: dva DNK lanca kao stringove. Treba da vrati broj kao rastojanje.

Oba DNK lanca će uvek biti iste dužine.
