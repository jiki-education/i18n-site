---
lang: "es-ES"
type: "exercise"
slug: "extract-words"
title: "Extraer palabras"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/extract-words"
en_md5: "9a7ea1b313b99e8cfdd60f1405dc7715"
governance_sha: "16f805d"
content_version: "2c06667e8877"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"extractWords.name","english":"Extract words","target":null},{"key":"extractWords.description","english":"Write an extract_words function that takes a sentence and returns a list of words. Words are separated by spaces, and periods should be ignored.","target":null}]},{"name":"scenarios","rows":[{"key":"simpleTwoWords.name","english":"Two words","target":null},{"key":"simpleTwoWords.description","english":"Extract two simple words separated by a space.","target":null},{"key":"sentenceWithPeriod.name","english":"Sentence with period","target":null},{"key":"sentenceWithPeriod.description","english":"Extract words from a sentence that ends with a period.","target":null},{"key":"longerSentence.name","english":"Longer sentence","target":null},{"key":"longerSentence.description","english":"Extract words from a longer sentence with a period.","target":null},{"key":"singleWord.name","english":"Single word","target":null},{"key":"singleWord.description","english":"Extract a single word with no spaces or periods.","target":null},{"key":"singleWordWithPeriod.name","english":"Single word with period","target":null},{"key":"singleWordWithPeriod.description","english":"Extract a single word from a string ending with a period.","target":null}]},{"name":"hints","rows":[{"key":"buildingUpWord.question","english":"How should I build up the list of words as I go?","target":null},{"key":"buildingUpWord.answer","english":"Keep two things alongside each other: an empty list for the finished words, and an empty string that you're currently building up letter by letter. When the current word is 'finished', push it into the list and start a new empty word.","target":null},{"key":"wordFinished.question","english":"How do I know when a word is finished?","target":null},{"key":"wordFinished.answer","english":"Loop through each character. When you hit a space, the current word has ended. Push it to the list and reset the building-up string to empty. Otherwise, append the character to the building-up string.","target":null},{"key":"doubleSpaces.question","english":"What if there are two spaces in a row?","target":null},{"key":"doubleSpaces.answer","english":"That would give you an empty word. Only push the current word to the list if it's not empty, otherwise skip.","target":null},{"key":"punctuation.question","english":"What about punctuation like a full stop?","target":null},{"key":"punctuation.answer","english":"Just skip it. Don't add periods to the current word. So when looping, if the character is a period, ignore it entirely.","target":null},{"key":"missingLastWord.question","english":"Why am I missing the last word?","target":null},{"key":"missingLastWord.answer","english":"After the loop ends, your final word is still sitting in the building-up string and hasn't been pushed yet. Push it (if non-empty) after the loop finishes.","target":null}]},{"name":"functions","rows":[{"key":"push.description","english":"Returns a new list with the element added to the end (provided by level stdlib)","target":null},{"key":"push.category","english":"List Operations","target":null}]}]}]
---

You're building a simple text processor. Given a sentence, you need to extract all the individual words from it and return them as a list.

Words are separated by spaces. Sentences may end with a period, which should be ignored (not included in any word).

For example, given the sentence `"I love cake."`, you should return:

```
["I", "love", "cake"]
```

Create a function called <define>`extractWords`</define> that takes a sentence as its input and returns a list of the words in the sentence.
