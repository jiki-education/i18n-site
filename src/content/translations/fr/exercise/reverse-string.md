---
lang: "fr"
type: "exercise"
slug: "reverse-string"
title: "Inverse la string"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "b951b19"
content_version: "9fe188fbd930"
published_at: "2026-08-16"
forum_topic_id: 1616
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"Inverse des strings"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"Inverse une string pour qu'elle se lise de droite à gauche plutôt que de gauche à droite."}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"String vide"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"Une string vide doit renvoyer une string vide une fois inversée."},{"key":"reverseWord.name","english":"A word","target":"Un mot"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"Inverse le mot 'robot'."},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"Un mot avec une majuscule"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"Inverse un mot qui commence par une majuscule : 'Ramen'."},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"Phrase avec ponctuation"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"Inverse une phrase avec de la ponctuation : 'I'm hungry!'"},{"key":"reversePalindrome.name","english":"Palindrome","target":"Palindrome"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"Un palindrome reste identique une fois inversé."},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"Mot de longueur paire"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"Inverse un mot de longueur paire : 'drawer'."},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"Caractères larges"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"Inverse des caractères Unicode larges : '子猫'."},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"Emoji famille"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"Inverse un emoji famille."},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"Drapeau arc-en-ciel"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"Fabrique un drapeau arc-en-ciel en inversant."}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"Comment inverser un mot manuellement ?"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"En le lisant de gauche à droite, mais en l'écrivant de droite à gauche. Autrement dit, en prenant chaque lettre l'une après l'autre et en la plaçant devant ce qui est déjà écrit."},{"key":"mapToCode.question","english":"How does that map to code?","target":"Comment traduire ça en code ?"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"Parcours la string d'entrée caractère par caractère. Pour chaque caractère, construis le résultat en l'ajoutant au début. Autrement dit, place-le au DÉBUT de ton résultat, pas à la fin."},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"Comment ajouter au début plutôt qu'à la fin ?"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"Avec l'opérateur `+`, ajouter au début est juste une question d'ordre. Au lieu de `result + char` (qui ajoute à la fin), utilise `char + result` (qui ajoute au début)."}]}]}]
---

Inverser des _strings_ (les lire de droite à gauche plutôt que de gauche à droite) est une tâche étonnamment courante en programmation.

Par exemple, en bio-informatique, inverser des _strings_ d'ADN ou d'ARN est souvent important pour toutes sortes d'analyses, comme la recherche de brins complémentaires ou l'identification de séquences palindromiques.

Ta mission est de créer une fonction appelée `reverse` (inverser), qui prend une _string_ en entrée et renvoie sa version inversée.

Exemples :

- Transforme "stressed" en "desserts"
- Transforme "strops" en "sports"
- Transforme "racecar" en "racecar" (un palindrome)

### Nos deux derniers scénarios...

Les deux derniers scénarios ont l'air étranges, non ? Que se passe-t-il ?

En fait, beaucoup d'emojis sont composés d'autres emojis reliés entre eux par des espaces cachés (de largeur nulle).

L'emoji famille (👩‍👩‍👧‍👦) est composé de deux femmes et de deux enfants. Quand on l'inverse, on voit apparaître les caractères individuels (👦‍👧‍👩‍👩).

L'autre est un arc-en-ciel suivi d'un drapeau (🌈‍️🏳). Quand on inverse l'ordre pour obtenir le drapeau puis l'arc-en-ciel, ça devient un drapeau arc-en-ciel (🏳️‍🌈️) !

Si tu construis ton résultat caractère par caractère, ça devrait aller comme sur des roulettes. Si tu optes pour une astuce plus futée, tu risques de voir les emojis se fragmenter.
