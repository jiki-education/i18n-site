---
lang: "es-ES"
type: "exercise"
slug: "scrabble-score"
title: "Puntaje de Scrabble"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/scrabble-score"
en_md5: "3919b650b6fa7797701d43e6b181c42a"
governance_sha: "16f805d"
content_version: "f45131c2373c"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createLetterValuesFunction.name","english":"Create the letterValues function","target":null},{"key":"createLetterValuesFunction.description","english":"Write a letterValues function that returns a dictionary mapping each uppercase letter to its Scrabble point value. Start with the provided list of letter groups and their values, and convert it into a dictionary.","target":null},{"key":"singleLetters.name","english":"Score single letters","target":null},{"key":"singleLetters.description","english":"Write a scrabbleScore function that takes a word and returns its total Scrabble score. Start by getting it working for single letters.","target":null},{"key":"words.name","english":"Score words","target":null},{"key":"words.description","english":"Now get scrabbleScore working with full words of different lengths.","target":null},{"key":"edgeCases.name","english":"Handle edge cases","target":null},{"key":"edgeCases.description","english":"Finally, make sure your function handles edge cases like empty strings and the full alphabet.","target":null}]},{"name":"scenarios","rows":[{"key":"letterValues.name","english":"The letterValues function","target":null},{"key":"letterValues.description","english":"The letterValues function should return a complete dictionary of letter scores.","target":null},{"key":"scrabbleLowercaseLetter.name","english":"Lowercase letter","target":null},{"key":"scrabbleLowercaseLetter.description","english":"Calculate the score for a single lowercase letter.","target":null},{"key":"scrabbleUppercaseLetter.name","english":"Uppercase letter","target":null},{"key":"scrabbleUppercaseLetter.description","english":"Calculate the score for a single uppercase letter.","target":null},{"key":"scrabbleValuableLetter.name","english":"Valuable letter","target":null},{"key":"scrabbleValuableLetter.description","english":"Calculate the score for a valuable letter.","target":null},{"key":"scrabbleShortWord.name","english":"Short word","target":null},{"key":"scrabbleShortWord.description","english":"Calculate the score for a short word.","target":null},{"key":"scrabbleShortValuableWord.name","english":"Short, valuable word","target":null},{"key":"scrabbleShortValuableWord.description","english":"Calculate the score for a short word with valuable letters.","target":null},{"key":"scrabbleMediumWord.name","english":"Medium word","target":null},{"key":"scrabbleMediumWord.description","english":"Calculate the score for a medium-length word.","target":null},{"key":"scrabbleMediumValuableWord.name","english":"Medium, valuable word","target":null},{"key":"scrabbleMediumValuableWord.description","english":"Calculate the score for a medium-length word with valuable letters.","target":null},{"key":"scrabbleLongMixedCaseWord.name","english":"Long, mixed-case word","target":null},{"key":"scrabbleLongMixedCaseWord.description","english":"Calculate the score for a long word with mixed case letters.","target":null},{"key":"scrabbleEnglishLikeWord.name","english":"English-like word","target":null},{"key":"scrabbleEnglishLikeWord.description","english":"Calculate the score for an English-like word.","target":null},{"key":"scrabbleEmptyInput.name","english":"Empty input","target":null},{"key":"scrabbleEmptyInput.description","english":"Calculate the score for an empty string.","target":null},{"key":"scrabbleEntireAlphabet.name","english":"Entire alphabet","target":null},{"key":"scrabbleEntireAlphabet.description","english":"Calculate the score for a string with every letter of the alphabet.","target":null}]},{"name":"hints","rows":[{"key":"startingPoint.question","english":"Where should I start with the letter values?","target":null},{"key":"startingPoint.answer","english":"Don't write a 26-line lookup by hand. Start with a list of groups, for example `[\"AEIOULNRST\", \"DG\", \"BCMP\", \"FHVWY\", \"K\", \"JX\", \"QZ\"]` and their matching values `[1, 2, 3, 4, 5, 8, 10]`.","target":null},{"key":"buildLookup.question","english":"How do I turn those groups into a usable lookup?","target":null},{"key":"buildLookup.answer","english":"Build a dictionary by iterating through each group's letters and mapping each individual letter to the group's value. Now `dict[\"A\"]` directly gives you `1`.","target":null},{"key":"lowercaseInput.question","english":"Why don't my lookups work for lowercase input?","target":null},{"key":"lowercaseInput.answer","english":"If your dictionary keys are uppercase, looking up `'a'` won't match `'A'`. Convert each letter to uppercase before looking up its value.","target":null},{"key":"addUpScore.question","english":"How do I add up the score?","target":null},{"key":"addUpScore.answer","english":"Loop through the word, look up each letter's value in your dictionary, and add it to a running total. Return the total at the end.","target":null}]},{"name":"functions","rows":[{"key":"toUpperCase.description","english":"Convert a string to uppercase (provided by level stdlib)","target":null},{"key":"toUpperCase.category","english":"String Operations","target":null}]}]}]
---

Scrabble is a word game where players place letter tiles on a board to form words. Each letter has a value, and a word's score is the sum of its letters' values.

Your task is to compute a word's Scrabble score by summing the values of its letters.

The letters are valued as follows:

- A, E, I, O, U, L, N, R, S, T = 1 point
- D, G = 2 points
- B, C, M, P = 3 points
- F, H, V, W, Y = 4 points
- K = 5 points
- J, X = 8 points
- Q, Z = 10 points

For example, the word "cabbage" is worth 14 points: 3 + 1 + 3 + 3 + 1 + 2 + 1.

You need to create two functions:

1. <define>`letterValues()`</define> - Returns a <define>dictionary</define> where each <define>key</define> is an uppercase letter and each value is its point value. We've given you a list of letter groups and their values as a starting point — convert this into a dictionary rather than typing it out manually.

2. <define>`scrabbleScore(word)`</define> - Takes a word and returns its total Scrabble score using the letter values dictionary.
