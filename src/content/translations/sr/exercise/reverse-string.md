---
lang: "sr"
type: "exercise"
slug: "reverse-string"
title: "Obrnuti string"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "c80036b"
content_version: "cb8cc19765fc"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"Obrni stringove"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"Obrni string tako da se čita s desna na levo umesto s leva na desno."}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"Prazan string"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"Prazan string treba da vrati prazan string kada se obrne."},{"key":"reverseWord.name","english":"A word","target":"Reč"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"Obrni reč „robot“."},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"Reč sa velikim početnim slovom"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"Obrni reč sa velikim početnim slovom „Ramen“."},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"Rečenica sa interpunkcijom"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"Obrni rečenicu sa interpunkcijom „I'm hungry!“"},{"key":"reversePalindrome.name","english":"Palindrome","target":"Palindrom"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"Palindrom ostaje isti kada se obrne."},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"Reč parne dužine"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"Obrni reč parne dužine „drawer“."},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"Široki karakteri"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"Obrni široke Unicode karaktere „子猫“."},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"Emodži porodica"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"Obrni emodži porodicu."},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"Zastava duge"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"Napravi zastavu duge obrtanjem."}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"Kako ručno obrnuti reč?"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"Čita se s leva na desno, ali piše s desna na levo. Drugim rečima, uzmeš svako slovo redom i staviš ga ispred onoga što si do tada napisao."},{"key":"mapToCode.question","english":"How does that map to code?","target":"Kako to preslikati u kod?"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"Prođi kroz ulazni string karakter po karakter. Za svaki karakter, gradi rezultat dodavanjem na početak. To znači da ga stavljaš na POČETAK rezultata, a ne na kraj."},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"Kako da dodam na početak umesto na kraj?"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"Sa operatorom `+`, dodavanje na početak je samo pitanje redosleda. Umesto `result + char` (što dodaje na kraj), koristi `char + result` (što dodaje na početak)."}]}]}]
---

Obrtanje stringova (čitanje s desna na levo, umesto s leva na desno) je iznenađujuće čest zadatak u programiranju.

Na primer, u bioinformatici, obrtanje sekvence DNK ili RNK stringova često je važno za različite analize, poput pronalaženja komplementarnih lanaca ili identifikacije palindromskih sekvenci.

Tvoj zadatak je da kreiraš funkciju pod nazivom `reverse` (obrnuti), koja uzima string kao ulaz i vraća obrnutu verziju.

Primeri:

- Pretvori "stressed" u "desserts"
- Pretvori "strops" u "sports"
- Pretvori "racecar" u "racecar" (palindrom)

### Ta poslednja dva scenarija...

Zadnja dva scenarija izgledaju čudno, zar ne? Šta se dešava?

Ispostavlja se da je mnogo emodžija zapravo sastavljeno od drugih emodžija spojenih skrivenim (nulte širine) razmacima.

Porodični emodži (👩‍👩‍👧‍👦) sastoji se od dve žene i dvoje dece. Kada se obrne, mogu se videti pojedinačni karakteri (👦‍👧‍👩‍👩).

Onaj drugi je duga i zastava (🌈‍️🏳). Kada obrneš redosled tako da prvo bude zastava pa duga, postaje dugina zastava (🏳️‍🌈️)!

Ako gradiš svoj rezultat jedan po jedan karakter, ovo bi trebalo da radi. Ako umesto toga posegneš za pametnijim trikom, mogao bi da otkriješ da se emodžiji raspadnu.
