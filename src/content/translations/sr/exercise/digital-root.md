---
lang: "sr"
type: "exercise"
slug: "digital-root"
title: "Digitalni koren"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "c80036b"
content_version: "e7edee4b50b0"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Saberi cifre"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Napiši funkciju pod nazivom digitalRoot koja prima broj i sabira njegove cifre. Za brojeve koji već imaju samo jednu cifru, i za brojeve čije cifre daju jednocifren zbir, ovaj prvi prolaz je dovoljan."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Nastavi da sažimaš dok ne ostane jedna cifra"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"Ponekad i posle prvog sabiranja cifara ostane više od jedne cifre (na primer, cifre broja 942 daju zbir 15). Nastavi da sabiraš cifre rezultata dok ne ostane jedna cifra."},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"Bonus: neka bude kratko"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"Tvoje rešenje već radi. Za ovaj bonus ga sredi tako da cela funkcija stane u mali broj linija, bez ikakvog viška."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Nula"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"Digitalni koren broja 0 je 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Već jedna cifra"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Broj koji već ima samo jednu cifru sam je svoj digitalni koren."},{"key":"drTwoDigits.name","english":"Two digits","target":"Dve cifre"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 se sažima u 7 u jednom prolazu (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Tri cifre, jedan prolaz"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 se sažima u 6 u jednom prolazu (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"Potrebna dva prolaza"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39 daje zbir 12, koji zatim daje zbir 3."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Broj kome treba drugi prolaz"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942 daje zbir 15, koji zatim daje zbir 6."},{"key":"drLarge.name","english":"A larger number","target":"Veći broj"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 se sažima sve do 2."},{"key":"drNines.name","english":"All nines","target":"Same devetke"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999 daje zbir 45, koji zatim daje zbir 9."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Uredno, kratko rešenje"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345 se sažima u 6 (1 + 2 + 3 + 4 + 5 = 15, zatim 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"Šta je tačno digitalni koren?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Saberi sve cifre broja. Ako time dobiješ jednu cifru, to je odgovor. Ako dobiješ više od jedne cifre, saberi i cifre tog rezultata, i tako nastavi dok ne ostane samo jedna cifra."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"Kako da saberem cifre broja?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Pretvori broj u string tako da možeš da prođeš kroz njega karakter po karakter pomoću `for...of` petlje. Vodi tekući zbir i dodaj mu svaku cifru redom."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"Ali svaka cifra je karakter, a ne broj."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Kada u petlji prolaziš kroz string, svaki karakter (kao `\"4\"`) je tekst. Upotrebi `Number(char)` da ga pretvoriš u broj `4` pre nego što ga dodaš zbiru."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"Kako da nastavim kada ne znam koliko prolaza mi treba?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"Ne znaš unapred koliko puta će trebati da sabereš cifre, pa je `while` petlja odličan izbor. Ponavljaj petlju dok broj ima više od jedne cifre."},{"key":"keepGoing.question","english":"When do I stop?","target":"Kada da stanem?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Stani čim broj postane jednocifren. Tada ga vrati."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"Skoro! Za ovu vežbu želimo da upotrebiš `while` petlju i da sažimaš broj dok ne ostane jedna cifra."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"Tako blizu! Tvoje rešenje radi, ali je malo predugačko. Probaj da ga skratiš."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Pretvara string koji sadrži cifre u broj"},{"key":"number.category","english":"Type Conversion","target":"Konverzija tipova"},{"key":"string.description","english":"Convert a number into a string","target":"Pretvara broj u string"},{"key":"string.category","english":"Type Conversion","target":"Konverzija tipova"}]}]}]
---

Digitalni koren (engl. _digital root_) broja je ono što dobiješ kada sabiraš njegove cifre sve dok ne ostane samo jedna cifra.

Ako ti posle prvog sabiranja cifara i dalje ostane više od jedne cifre, sabereš cifre _tog_ rezultata, i tako nastavljaš dok ne ostane jedna cifra.

Na primer, da bismo našli digitalni koren broja `942`:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

Dakle, digitalni koren broja `942` je `6`.

Broj koji već ima samo jednu cifru (kao `7`) sam je svoj digitalni koren.

Napravi funkciju pod nazivom `digitalRoot` koja prima broj i vraća njegov digitalni koren.

### Funkcija `String()`

U poslednjih nekoliko lekcija na raspolaganju ti je funkcija `Number(str)`, koja pretvara string u broj.

Isto možeš da uradiš i u suprotnom smeru, pa broj pretvoriš u string pomoću funkcije `String(num)`. Na primer:

```js
String(147) === "147"
```

Primeti da i ova funkcija počinje velikim slovom, i ponovo, za sada ne brini zašto je to tako!

### Primena naučenog u praksi

Iako postoji mnogo načina da se ova vežba reši, rešenje do kog želimo da dođeš koristi `while` petlju.

Uživaj!
