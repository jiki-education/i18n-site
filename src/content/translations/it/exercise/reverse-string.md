---
lang: "it"
type: "exercise"
slug: "reverse-string"
title: "Inverti una stringa"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "c80036b"
content_version: "b0265af9adba"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"Invertire stringhe"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"Invertire una stringa in modo che venga letta da destra a sinistra anziché da sinistra a destra."}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"Stringa vuota"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"Una stringa vuota dovrebbe restituire una stringa vuota quando viene invertita."},{"key":"reverseWord.name","english":"A word","target":"Una parola"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"Invertire la parola 'robot'."},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"Parola con la maiuscola"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"Invertire una parola con l'iniziale maiuscola, 'Ramen'."},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"Frase con punteggiatura"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"Invertire una frase con punteggiatura: 'I'm hungry!'"},{"key":"reversePalindrome.name","english":"Palindrome","target":"Palindromo"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"Un palindromo rimane uguale quando viene invertito."},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"Parola di lunghezza pari"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"Invertire una parola di lunghezza pari, 'drawer'."},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"Caratteri a larghezza intera"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"Invertire caratteri Unicode a larghezza intera, '子猫'."},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"Famiglia di emoji"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"Invertire una famiglia di emoji."},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"Bandiera arcobaleno"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"Crea una bandiera arcobaleno invertendo."}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"Come posso invertire una parola a mano?"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"La leggi da sinistra a destra ma la scrivi da destra a sinistra. In pratica, prendi ogni lettera e la metti davanti a quello che hai scritto finora."},{"key":"mapToCode.question","english":"How does that map to code?","target":"Come si traduce in codice?"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"Scorri la stringa di input carattere per carattere. Per ogni carattere, costruisci il risultato anteponendolo. Significa metterlo all'INIZIO del risultato, non alla fine."},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"Come faccio ad anteporre invece di accodare?"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"Con l'operatore `+`, anteporre è solo una questione di ordine. Invece di `result + char` (che accoda), usa `char + result` (che antepone)."}]}]}]
---

Invertire le stringhe (leggerle da destra a sinistra, anziché da sinistra a destra) è un compito sorprendentemente comune nella programmazione.

Per esempio, in bioinformatica, invertire la sequenza di stringhe di DNA o RNA è spesso importante per diverse analisi, come trovare filamenti complementari o identificare sequenze palindrome.

Il tuo compito è creare una funzione chiamata `reverse` (inverti), che prende una stringa come input e restituisce la versione invertita.

Esempi:

- Trasforma «stressed» in «desserts»
- Trasforma «strops» in «sports»
- Trasforma «racecar» in «racecar» (un palindromo)

### Quegli ultimi due scenari...

Gli ultimi due scenari sembrano strani, vero? Cosa sta succedendo?

Si scopre che molti emoji sono in realtà composti da altri emoji uniti insieme con spazi nascosti a larghezza zero.

L'emoji famiglia (👩‍👩‍👧‍👦) è composto da due donne e due bambini. Quando viene invertito, puoi vedere i singoli caratteri (👦‍👧‍👩‍👩).

L'altro è un arcobaleno e una bandiera (🌈‍️🏳). Quando inverti l'ordine per ottenere prima la bandiera e poi l'arcobaleno, diventa una bandiera arcobaleno (🏳️‍🌈️)!

Se costruisci il tuo risultato un carattere alla volta, questi dovrebbero funzionare senza problemi. Se invece cerchi un trucco più astuto, potresti scoprire che gli emoji si spezzano.
