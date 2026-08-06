---
lang: "hu"
type: "exercise"
slug: "caesar-cipher"
title: "Caesar-rejtjel"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "c80036b"
content_version: "68f063b9ee6b"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"Üzenet kódolása"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"Írj egy `encode` függvényt, amely az üzenet minden betűjét eltolja egy adott értékkel. A szóközök maradjanak szóközök. Azok a betűk, amelyeknél az eltolás túllép a 'z'-n, körbeérnek az ábécé elejére."}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"Egyszerű eltolás 1-gyel"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"Minden betűt 1-gyel eltolunk előre: a→b, b→c, c→d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"3-as eltolás"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"Minden betűt 3-mal eltolunk előre: h→k, e→h, l→o, o→r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"Körbeérés az ábécében"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"Amikor az eltolás túllép a 'z'-n, körbeér: x→a, y→b, z→c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"Üzenet szóközökkel"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"A szóközök maradjanak szóközök, csak a betűk tolódnak el."},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"ROT13 titkosítás"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"A ROT13 a Caesar-rejtjel egy speciális esete 13-as eltolással."}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"Hogyan gondolkodjak egy betű N pozícióval való eltolásáról?"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"Minden betűnek van egy pozíciója az ábécében (az 'a' a 0. pozícióban van, a 'b' az 1. pozícióban, és így tovább). Az eltoláshoz keresd meg ezt a pozíciót, add hozzá az eltolás értékét, majd a kapott új pozíció alapján vedd ki a betűt az ábécéből."},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"Hogyan találom meg egy betű pozícióját az ábécében?"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"Az `indexOf` segítségével kereshetsz meg egy rövidebb szöveget egy szövegben. Ha meghívod az ábécé szövegre, visszaadja a betű pozícióját, vagy -1-et, ha nem találja. A visszafelé irányhoz használd a pozíciót az ábécé szöveg indexelésére, hogy megkapd a betűt."},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"Mi történik, amikor az eltolás túllép a 'z'-n?"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"Körbe kell érnie az ábécé elejére, az 'a'-hoz. A modulo operátor (`%`) tökéletes erre. Ha a pozíciót modulo 26-tal vesszük, az bármilyen számot a 0 és 25 közötti tartományba hozza."},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"Hogyan alkalmazzam ezt egy teljes üzenetre?"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"Menj végig ciklusban az üzenet minden karakterén, told el az egybetűs segédfüggvényeddel, és használj összefűzést (`+`) a kapott betűkből álló eredmény karakterlánc felépítéséhez."}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"Megkeresi egy rövidebb karakterlánc pozícióját egy karakterláncban, vagy -1-et ad vissza, ha nem találja (a feladat stdlib-je biztosítja)."},{"key":"indexOf.category","english":"String Operations","target":"Szövegműveletek"}]}]}]
---

A Caesar-rejtjel az egyik legkorábbi és legegyszerűbb titkosítási módszer. Julius Caesar használta arra, hogy titkos üzeneteket küldjön a tábornokainak.

A rejtjel úgy működik, hogy az üzenet minden betűjét egy rögzített számmal eltolja az ábécében. Például 3-as eltolásnál az 'a'-ból 'd' lesz, a 'b'-ből 'e', és így tovább. Ha az eltolás túllép a 'z'-n, akkor körbeér az ábécé elejére.

A szóközök maradjanak szóközök (nem tolódnak el).

Hozz létre egy `encode(message, shift)` (kódol(üzenet, eltolás)) nevű függvényt, amely egy kisbetűs üzenetet és egy eltolási értéket kap, és visszaadja a kódolt üzenetet.

Például:

- `encode("abc", 1)` eredménye `"bcd"`
- `encode("xyz", 3)` eredménye `"abc"` (körbeér)
- `encode("hello world", 5)` eredménye `"mjqqt btwqi"`

Tipp: Ezt a problémát érdemes kisebb segédfüggvényekre bontani!

### Véletlen tény

Egyszer egy tech-konferencia műsorvezetője voltam a portugáliai Bragában. Öt perccel azelőtt, hogy színpadra léptem volna, odajöttek hozzám a szervezők, és kissé zavartan megkérdezték, hogy nem bánnám-e, ha Julius Caesarnak öltöznék be a nap első felére, hogy megünnepeljük Braga római örökségét. Sikerült bevállalnom...?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Jeremy Caesar jelmezben"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
