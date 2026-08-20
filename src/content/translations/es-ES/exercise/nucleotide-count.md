---
lang: "es-ES"
type: "exercise"
slug: "nucleotide-count"
title: "Conteo de nucleótidos"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/nucleotide-count"
en_md5: "9874f79d36f66b380c30bbcd765e8590"
governance_sha: "16f805d"
content_version: "79d514ad9228"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"countNucleotides.name","english":"Count Nucleotides","target":null},{"key":"countNucleotides.description","english":"Write a function that counts the occurrences of each nucleotide (A, C, G, T) in a DNA strand and returns a dictionary with the counts. Return false if the strand contains invalid characters.","target":null}]},{"name":"scenarios","rows":[{"key":"nucleotideCountEmptyStrand.name","english":"Empty strand","target":null},{"key":"nucleotideCountEmptyStrand.description","english":"An empty strand should result in all counts being zero.","target":null},{"key":"nucleotideCountSingleNucleotide.name","english":"Single nucleotide","target":null},{"key":"nucleotideCountSingleNucleotide.description","english":"A single-character strand should correctly count the nucleotide.","target":null},{"key":"nucleotideCountRepeatedNucleotide.name","english":"Repeated nucleotide","target":null},{"key":"nucleotideCountRepeatedNucleotide.description","english":"A strand with repeated nucleotides should correctly count occurrences.","target":null},{"key":"nucleotideCountMixedStrand.name","english":"Mixed nucleotide strand","target":null},{"key":"nucleotideCountMixedStrand.description","english":"A strand with multiple nucleotides should correctly count each nucleotide.","target":null},{"key":"nucleotideCountInvalidNucleotide.name","english":"Invalid nucleotide","target":null},{"key":"nucleotideCountInvalidNucleotide.description","english":"A strand with invalid nucleotides should return false.","target":null}]},{"name":"hints","rows":[{"key":"setupCounts.question","english":"How do I set up the counts?","target":null},{"key":"setupCounts.answer","english":"Start with a dictionary with all four nucleotides (`A`, `C`, `G`, `T`) set to 0. As you go through the strand, you'll add 1 to whichever count matches.","target":null},{"key":"validChars.question","english":"How do I know which characters count as valid?","target":null},{"key":"validChars.answer","english":"The valid characters are exactly the keys of your dictionary. Using `keys()` to get them means you don't have to write the alphabet of nucleotides out twice.","target":null},{"key":"checkEach.question","english":"How do I check each character?","target":null},{"key":"checkEach.answer","english":"Loop through the strand one character at a time. For each, check whether it's a valid nucleotide before counting it.","target":null},{"key":"invalidChars.question","english":"What should I do for invalid characters?","target":null},{"key":"invalidChars.answer","english":"The spec asks you to return `false` straight away. There's no recovering once you see an invalid character. Just stop and return false.","target":null}]},{"name":"functions","rows":[{"key":"keys.description","english":"Returns a list of all keys in the dictionary (provided by level stdlib)","target":null},{"key":"keys.category","english":"Dictionary Operations","target":null}]}]}]
---

DNA is a long chain of other chemicals and the most important are the four nucleotides, adenine, cytosine, guanine and thymine. A single DNA chain can contain billions of these four nucleotides and the order in which they occur is important! We call the order of these nucleotides in a bit of DNA a "DNA sequence".

We represent a DNA sequence as an ordered collection of these four nucleotides and a common way to do that is with a string of characters such as "ATTACG" for a DNA sequence of 6 nucleotides. 'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' for thymine.

Create a function called <define>`countNucleotides`</define> that takes a DNA strand, and outputs a dictionary whose keys are the DNA letters, and the values are the amount of times those appear.

If the strand contains any invalid characters, return `false`.

For example:

- `countNucleotides("GATTACA")` returns `{ "A": 3, "C": 1, "G": 1, "T": 2 }`
- `countNucleotides("INVALID")` returns `false`
