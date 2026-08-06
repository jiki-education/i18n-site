---
lang: "sr"
type: "exercise"
slug: "tile-search"
title: "Pretraga pločice"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/tile-search"
en_md5: "964730f77d4f532aa178b26e5504da86"
governance_sha: "c80036b"
content_version: "b02ae266152f"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Tvoje rešenje ima previše linija koda. Možeš li ga skratiti?"}]},{"name":"tasks","rows":[{"key":"searchForTile.name","english":"Search for a Tile","target":"Pretraga pločice"},{"key":"searchForTile.description","english":"Write a function that checks whether a specific letter tile is in the rack. Return true if found, false if not.","target":"Napiši funkciju koja proverava da li se određena pločica sa slovom nalazi na stalazu. Vrati true ako je pronađena, false ako nije."},{"key":"solveInEightLines.name","english":"Solve in 8 lines of code","target":"Reši u 8 linija koda"},{"key":"solveInEightLines.description","english":"Can you solve this exercise with only 8 lines of code?","target":"Možeš li da rešiš ovu vežbu sa samo 8 linija koda?"}]},{"name":"scenarios","rows":[{"key":"letterFoundAtStart.name","english":"Letter at the start","target":"Slovo na početku"},{"key":"letterFoundAtStart.description","english":"The letter is the first tile in the rack.","target":"Slovo je prva pločica na stalazu."},{"key":"letterFoundInMiddle.name","english":"Letter in the middle","target":"Slovo u sredini"},{"key":"letterFoundInMiddle.description","english":"The letter is in the middle of the rack.","target":"Slovo se nalazi u sredini stalaza."},{"key":"letterFoundAtEnd.name","english":"Letter at the end","target":"Slovo na kraju"},{"key":"letterFoundAtEnd.description","english":"The letter is the last tile in the rack.","target":"Slovo je poslednja pločica na stalazu."},{"key":"letterNotFound.name","english":"Letter not found","target":"Slovo nije pronađeno"},{"key":"letterNotFound.description","english":"The letter isn't in the rack.","target":"Slovo nije na stalazu."},{"key":"emptyRack.name","english":"Empty rack","target":"Prazan stalak"},{"key":"emptyRack.description","english":"An empty rack has no tiles to find.","target":"Prazan stalak nema pločica za traženje."},{"key":"duplicateLetters.name","english":"Rack with duplicates","target":"Stalak sa duplikatima"},{"key":"duplicateLetters.description","english":"The letter appears among duplicate tiles.","target":"Slovo se pojavljuje među dupliranim pločicama."},{"key":"singleTileFound.name","english":"Single tile found","target":"Pronađena jedna pločica"},{"key":"singleTileFound.description","english":"A rack with one tile that matches.","target":"Stalak sa jednom pločicom koja odgovara."},{"key":"singleTileNotFound.name","english":"Single tile not found","target":"Jedna pločica nije pronađena"},{"key":"singleTileNotFound.description","english":"A rack with one tile that doesn't match.","target":"Stalak sa jednom pločicom koja ne odgovara."},{"key":"bonus1.name","english":"8 lines of code","target":"8 linija koda"},{"key":"bonus1.description","english":"Solve the exercise with only 8 lines of code.","target":"Reši vežbu sa samo 8 linija koda."}]},{"name":"hints","rows":[{"key":"byHand.question","english":"How would I do this by hand?","target":"Kako da ovo uradim ručno?"},{"key":"byHand.answer","english":"You'd go through the haystack one letter at a time, comparing each to the needle. As soon as you found a match you'd stop. If you got to the end without a match, the needle isn't there.","target":"Prolaziš kroz haystack slovo po slovo, upoređuješ svako sa needle. Čim naiđeš na podudaranje, staješ. Ako dođeš do kraja bez podudaranja, needle nije tamo."},{"key":"loopAndCompare.question","english":"How do I loop and compare?","target":"Kako da napravim petlju i uporedim?"},{"key":"loopAndCompare.answer","english":"A for-of loop gives you each letter of the string in turn. Inside, an if-statement compares the current letter to the needle.","target":"For-of petlja ti daje svako slovo stringa redom. Unutar nje, if naredba upoređuje trenutno slovo sa needle."},{"key":"returnTrue.question","english":"When should I return true?","target":"Kada treba da vratim true?"},{"key":"returnTrue.answer","english":"As soon as you find a match. There's no point checking the remaining letters.","target":"Čim pronađeš podudaranje. Nema svrhe proveravati preostala slova."},{"key":"returnFalse.question","english":"When should I return false?","target":"Kada treba da vratim false?"},{"key":"returnFalse.answer","english":"ONLY after the loop has finished without finding a match. A common mistake is putting `return false` inside the loop. That gives up after the very first non-matching letter, before you've checked the rest.","target":"SAMO nakon što se petlja završi bez pronalaženja podudaranja. Česta greška je stavljanje `return false` unutar petlje. To odustaje nakon prvog slova koje se ne podudara, pre nego što proveriš ostala."}]}]}]
---

Praviš Scrabble bota. Pre nego što bot pokuša da odigra reč, treba da proveri da li ima pločicu sa određenim slovom u svom stalazu.

Stalak je predstavljen kao string slova (npr. `"SCRAB"`).

Napiši funkciju pod imenom `contains` (sadrži) koja prima dva ulaza:

- `haystack` (plast sena): stalaz pločica, kao string
- `needle` (igla): slovo koje se traži

Vrati `true` ako je slovo na stalazu, ili `false` ako nije.

Primeri:

- `contains("SCRAB", "A")` vraća `true`
- `contains("SCRAB", "Z")` vraća `false`
- `contains("", "A")` vraća `false`
