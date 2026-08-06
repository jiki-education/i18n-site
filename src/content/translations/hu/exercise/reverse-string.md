---
lang: "hu"
type: "exercise"
slug: "reverse-string"
title: "Karakterlánc megfordítása"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "c80036b"
content_version: "a373cded0624"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"Karakterláncok megfordítása"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"Fordíts meg egy karakterláncot, hogy jobbról balra olvasható legyen, ne balról jobbra."}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"Üres karakterlánc"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"Egy üres karakterlánc megfordítva is üres karakterláncot ad vissza."},{"key":"reverseWord.name","english":"A word","target":"Egy szó"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"Fordítsd meg a 'robot' szót."},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"Egy nagybetűs szó"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"Fordítsd meg a nagybetűs 'Ramen' szót."},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"Mondat írásjellel"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"Fordítsd meg az 'I'm hungry!' írásjeles mondatot."},{"key":"reversePalindrome.name","english":"Palindrome","target":"Palindrom"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"Egy palindrom megfordítva is ugyanaz marad."},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"Páros hosszúságú szó"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"Fordítsd meg a páros hosszúságú 'drawer' szót."},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"Széles karakterek"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"Fordítsd meg a '子猫' széles Unicode karaktereket."},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"Emoji család"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"Fordíts meg egy emoji családot."},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"Szivárványzászló"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"Készíts szivárványzászlót a megfordítással."}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"Hogyan lehetne kézzel megfordítani egy szót?"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"Balról jobbra olvasnád, de jobbról balra írnád. Vagyis minden betűt egymás után az addig leírtak elé tennél."},{"key":"mapToCode.question","english":"How does that map to code?","target":"Hogyan valósítható meg ez kódban?"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"Menj végig a bemeneti karakterlánc karakterein. Minden karaktert az addigi eredmény elé illesztve építsd fel a végeredményt. Tehát a karaktert az eredmény elejére tedd, ne a végére."},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"Hogyan fűzhetek a karakterlánc elejére a hozzáfűzés helyett?"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"A `+` operátorral az elé fűzés csak sorrend kérdése. `result + char` (ami hozzáfűz) helyett használd a `char + result` kifejezést (ami elé fűz)."}]}]}]
---

A karakterláncok megfordítása (vagyis jobbról balra, nem a megszokott balról jobbra irányban olvasva) meglepően gyakori feladat a programozásban.

Például a bioinformatikában a DNS- vagy RNS-szekvenciák megfordítása gyakran fontos különböző elemzésekhez, például komplementer szálak kereséséhez vagy palindrom szekvenciák azonosításához.

Feladatod, hogy hozz létre egy `reverse` (megfordít) nevű függvényt, amely egy karakterláncot kap bemenetként, és visszaadja a megfordított változatát.

Példák:

- A "stressed" szóból "desserts" lesz.
- A "strops" szóból "sports" lesz.
- A "racecar" szóból "racecar" lesz (palindrom).

### Az utolsó két forgatókönyv furcsa, igaz?

Mi történik itt?

Kiderül, hogy rengeteg emoji valójában több másik emojiból áll össze, amelyeket láthatatlan (nulla szélességű) szóközök kapcsolnak össze.

A család emoji (👩‍👩‍👧‍👦) két nőből és két gyermekből áll össze. Amikor megfordítod, láthatod az egyes karaktereket (👦‍👧‍👩‍👩).

A másik egy szivárvány és egy zászló (🌈‍️🏳). Ha megfordítod a sorrendet, és előbb a zászló, aztán a szivárvány jön, akkor szivárványzászló (🏳️‍🌈️) lesz belőle!

Ha karakterenként építed fel az eredményt, ezek gond nélkül működnek. Ha viszont valami ravaszabb trükkhöz nyúlsz, előfordulhat, hogy az emojik szétesnek.
