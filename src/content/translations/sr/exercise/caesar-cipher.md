---
lang: "sr"
type: "exercise"
slug: "caesar-cipher"
title: "Cezarova šifra"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "c80036b"
content_version: "4731657a7675"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"Zakodiraj poruku"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"Napiši funkciju za kodiranje koja pomera svako slovo u poruci za zadati iznos. Razmaci treba da ostanu razmaci. Slova koja pomakom pređu 'z' treba da se vrate na početak alfabeta."}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"Jednostavan pomak za 1"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"Pomeri svako slovo napred za 1: a->b, b->c, c->d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"Pomak za 3"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"Pomeri svako slovo napred za 3: h->k, e->h, l->o, o->r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"Vraćanje na početak alfabeta"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"Kada pomeranje pređe 'z', vraća se na početak: x->a, y->b, z->c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"Poruka sa razmacima"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"Razmaci treba da ostanu razmaci, samo se slova pomeraju."},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"ROT13 šifrovanje"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13 je poseban slučaj Cezarove šifre sa pomakom od 13."}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"Kako da razmišljam o pomeranju slova za N pozicija?"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"Svako slovo ima poziciju u alfabetu (a je na poziciji 0, b na 1, i tako dalje). Da bi ga pomerio, pronađi tu poziciju, dodaj iznos pomaka, a zatim pretvori novu poziciju nazad u slovo tako što ćeš je potražiti u alfabetu."},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"Kako da pronađem poziciju slova u alfabetu?"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"Možeš da pretražiš nisku za manjim delom pomoću `indexOf`. Pozivom na nisci alfabeta dobijaš poziciju slova, ili -1 ako slovo nije pronađeno. Da bi dobio slovo iz pozicije, indeksiraj nazad u nisku alfabeta sa tom pozicijom."},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"Šta se dešava kada pomak pređe 'z'?"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"Treba da se vrati nazad na 'a'. Operator ostatka (`%`) je savršen za ovo. Uzimanje pozicije po modulu 26 vraća bilo koji broj u opseg od 0 do 25."},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"Kako da ovo primenim na celu poruku?"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"Prođi kroz svaki znak poruke petljom, pomeri ga koristeći svoju pomoćnu funkciju za jedno slovo, i koristi spajanje (`+`) da izgradiš rezultujuću nisku od pomerenih slova."}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"Pronađi poziciju manje niske unutar veće niske, ili -1 ako nije pronađena (obezbeđuje biblioteka nivoa stdlib)."},{"key":"indexOf.category","english":"String Operations","target":"Operacije nad niskama"}]}]}]
---

Cezarova šifra je jedna od najranijih i najjednostavnijih tehnika šifrovanja. Koristio ju je Julije Cezar da šalje tajne poruke svojim generalima.

Ova šifra funkcioniše tako što pomera svako slovo u poruci za fiksni broj mesta u alfabetu. Na primer, sa pomakom od 3, 'a' postaje 'd', 'b' postaje 'e', i tako dalje. Ako pomak pređe 'z', vraća se na početak alfabeta.

Razmaci ostaju razmaci (ne pomeraju se).

Kreiraj funkciju koja se zove `encode(message, shift)` (zakodira poruku sa pomakom) koja prima poruku napisanu malim slovima i iznos pomaka, i vraća šifrovanu poruku.

Na primer:

- `encode("abc", 1)` returns `"bcd"`
- `encode("xyz", 3)` returns `"abc"` (vraća se na početak)
- `encode("hello world", 5)` returns `"mjqqt btwqi"`

Savet: Biće ti lakše ako ovaj problem podeliš na manje pomoćne funkcije!

### Slučajna činjenica

Jednom sam bio voditelj na jednoj tech konferenciji u Bragi, u Portugalu. Pet minuta pre nego što sam trebalo da izađem na binu, organizatori su došli i pomalo postiđeno me pitali da li bih imao nešto protiv da se obučem kao Julije Cezar za prvi deo dana, kako bi proslavili rimsko nasleđe Brage. Da li sam uspeo da to izvedem...?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Džeremi obučen kao Cezar"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
