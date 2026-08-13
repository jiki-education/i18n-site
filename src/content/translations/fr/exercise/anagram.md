---
lang: "fr"
type: "exercise"
slug: "anagram"
title: "Anagramme"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/anagram"
en_md5: "aaaf62156edf53213c0e34e2c9893ce4"
governance_sha: "53cdc3d"
content_version: "92cd90de2c50"
published_at: "2026-08-13"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findAnagrams.name","english":"Find Anagrams","target":null},{"key":"findAnagrams.description","english":"Write a function that finds all anagrams of a target word from a list of possibilities. An anagram uses the same letters rearranged. The function should be case-insensitive, exclude the target word itself, and return results sorted alphabetically.","target":null},{"key":"sortedResults.name","english":"Alphabetical Sorting","target":null},{"key":"sortedResults.description","english":"Ensure your results are returned in alphabetical order (bonus challenge).","target":null}]},{"name":"scenarios","rows":[{"key":"noMatches.name","english":"No matches","target":null},{"key":"noMatches.description","english":"If no anagrams exist in the candidates, return an empty list.","target":null},{"key":"twoAnagrams.name","english":"Detects two anagrams","target":null},{"key":"twoAnagrams.description","english":"Find two anagrams from a list of candidates.","target":null},{"key":"noSubsets.name","english":"Does not detect anagram subsets","target":null},{"key":"noSubsets.description","english":"An anagram must use all letters exactly once.","target":null},{"key":"singleMatch.name","english":"Detects single anagram","target":null},{"key":"singleMatch.description","english":"Find a single anagram from a list.","target":null},{"key":"differentCase.name","english":"Detects multiple anagrams with different case","target":null},{"key":"differentCase.description","english":"Anagrams should be detected regardless of case.","target":null},{"key":"caseInsensitive.name","english":"Detects anagrams case-insensitively","target":null},{"key":"caseInsensitive.description","english":"Case should not affect anagram detection.","target":null},{"key":"notItself.name","english":"Words are not anagrams of themselves (case-insensitive)","target":null},{"key":"notItself.description","english":"A word should not be considered an anagram of itself.","target":null},{"key":"otherThanItself.name","english":"Words other than themselves can be anagrams","target":null},{"key":"otherThanItself.description","english":"Detect valid anagrams excluding the target word itself.","target":null},{"key":"alphabeticalSorting.name","english":"Results sorted alphabetically","target":null},{"key":"alphabeticalSorting.description","english":"Verify anagrams are returned in alphabetical order.","target":null}]},{"name":"hints","rows":[{"key":"howToTellAnagrams.question","english":"How do I tell if two words are anagrams?","target":null},{"key":"howToTellAnagrams.answer","english":"Two words are anagrams if they contain the exact same letters in any order. The easiest way to check that in code is to sort the letters of both. If the sorted versions are equal, they're anagrams.","target":null},{"key":"caseTrippingUp.question","english":"Why aren't my matches working even when the letters are right?","target":null},{"key":"caseTrippingUp.answer","english":"Case is probably tripping you up. 'Stone' and 'tones' should match, but they have different capitals. Convert everything to lowercase before comparing.","target":null},{"key":"targetCountsAsItself.question","english":"Should the target word itself count as an anagram of itself?","target":null},{"key":"targetCountsAsItself.answer","english":"No, a word isn't its own anagram. Filter the target out of your candidate list using a case-insensitive comparison, since it might appear in a different case.","target":null},{"key":"collectingMatches.question","english":"How do I collect up the matches?","target":null},{"key":"collectingMatches.answer","english":"Start with an empty list and use `push()` to add each anagram you find. Don't forget that the results need to be sorted alphabetically before you return them.","target":null}]},{"name":"functions","rows":[{"key":"push.description","english":"Returns a new list with the element added to the end (provided by level stdlib)","target":null},{"key":"push.category","english":"List Operations","target":null},{"key":"sortString.description","english":"Takes a string and returns its characters sorted alphabetically (provided by level stdlib)","target":null},{"key":"sortString.category","english":"String Operations","target":null}]}]}]
---

At a garage sale, you find a lovely vintage typewriter at a bargain price! However, whenever you type a word, the letters come out in the wrong order. Sometimes they're actually the letters you wrote, sometimes it gets really confused and outputs totally wrong letters.

For example, when you first typed the word "stone", it output "banana". Very frustrating. However, the second time you typed "stone", it output "notes" and you realised that while still extremely annoying, this could actually have a useful function - finding anagrams - two words that contain the same letters (e.g. "stone" and "notes").

### Your Job

You decided to write a quick program, which takes all the words the typewriter outputs, along with the word you typed, and get a list of the ones that are actually anagrams.

Create a function called <define>`findAnagrams(word, possibilities)`</define> that takes a target word (a string) and a list of possible anagrams, and returns which of the possibilities are actually anagrams of the target.

An anagram is a rearrangement of letters to form a new word. For example, 'owns' is an anagram of 'snow'. Important rules:

- A word is NOT its own anagram (e.g., 'stop' is not an anagram of 'stop')
- Matching is case-insensitive (e.g., 'PoTS' is an anagram of 'sTOp')
- Return anagrams with their original casing from the possibilities list
- Results should be sorted alphabetically

Example: `findAnagrams('stone', ['stone', 'Seton', 'banana', 'tons', 'notes', 'tones'])` returns ['Seton', 'notes', 'tones']
