---
lang: "es-ES"
type: "exercise"
slug: "protein-translation"
title: "Traducción de proteínas"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/protein-translation"
en_md5: "3868e62c7a08c04d09df4445a3271977"
governance_sha: "16f805d"
content_version: "b003cfbe2ce0"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"basicTranslations.name","english":"Basic Translations","target":null},{"key":"basicTranslations.description","english":"Translate single codons to their corresponding amino acids.","target":null},{"key":"multipleCodons.name","english":"Multiple Codons","target":null},{"key":"multipleCodons.description","english":"Translate RNA sequences containing multiple codons.","target":null},{"key":"stopCodonBehavior.name","english":"Stop Codon Behavior","target":null},{"key":"stopCodonBehavior.description","english":"Handle STOP codons correctly - translation should stop when a STOP codon is encountered.","target":null}]},{"name":"scenarios","rows":[{"key":"emptyRnaSequence.name","english":"Empty RNA sequence","target":null},{"key":"emptyRnaSequence.description","english":"An empty RNA sequence should result in an empty protein list.","target":null},{"key":"methionineSequence.name","english":"Methionine RNA sequence","target":null},{"key":"methionineSequence.description","english":"The RNA sequence 'AUG' should translate to 'Methionine'.","target":null},{"key":"phenylalanineSequence1.name","english":"Phenylalanine RNA sequence 1","target":null},{"key":"phenylalanineSequence1.description","english":"The RNA sequence 'UUU' should translate to 'Phenylalanine'.","target":null},{"key":"phenylalanineSequence2.name","english":"Phenylalanine RNA sequence 2","target":null},{"key":"phenylalanineSequence2.description","english":"The RNA sequence 'UUC' should translate to 'Phenylalanine'.","target":null},{"key":"leucineSequence1.name","english":"Leucine RNA sequence 1","target":null},{"key":"leucineSequence1.description","english":"The RNA sequence 'UUA' should translate to 'Leucine'.","target":null},{"key":"leucineSequence2.name","english":"Leucine RNA sequence 2","target":null},{"key":"leucineSequence2.description","english":"The RNA sequence 'UUG' should translate to 'Leucine'.","target":null},{"key":"sequenceTwoProteins.name","english":"Sequence of two protein codons","target":null},{"key":"sequenceTwoProteins.description","english":"The RNA sequence 'UUUUUU' should translate to ['Phenylalanine', 'Phenylalanine'].","target":null},{"key":"sequenceDifferentCodons.name","english":"Sequence of two different protein codons","target":null},{"key":"sequenceDifferentCodons.description","english":"The RNA sequence 'UUAUUG' should translate to ['Leucine', 'Leucine'].","target":null},{"key":"sequenceThreeProteins.name","english":"Sequence of three proteins","target":null},{"key":"sequenceThreeProteins.description","english":"The RNA sequence 'AUGUUUUGG' should translate to ['Methionine', 'Phenylalanine', 'Tryptophan'].","target":null},{"key":"stopCodonAtStart.name","english":"Stop codon at start","target":null},{"key":"stopCodonAtStart.description","english":"Translation should stop if a stop codon is at the beginning of the sequence.","target":null},{"key":"stopCodonAtEnd.name","english":"Stop codon at end","target":null},{"key":"stopCodonAtEnd.description","english":"Translation should stop if a stop codon is at the end of the sequence.","target":null},{"key":"stopCodonInMiddle.name","english":"Stop codon in middle","target":null},{"key":"stopCodonInMiddle.description","english":"Translation should stop if a stop codon is in the middle of the sequence.","target":null}]},{"name":"hints","rows":[{"key":"breakDown.question","english":"How do I break this down?","target":null},{"key":"breakDown.answer","english":"Two independent steps. First, split the RNA string into codons (groups of 3 characters). Second, translate each codon into the matching amino acid. Solving them separately is much easier than mixing them.","target":null},{"key":"lookup.question","english":"How should I do the codon to amino acid lookup?","target":null},{"key":"lookup.answer","english":"A dictionary mapping each codon (e.g. `\"AUG\"`) to its amino acid (e.g. `\"Methionine\"`) is the right shape for this. STOP codons map to `\"STOP\"`.","target":null},{"key":"splitChunks.question","english":"How do I split the string into chunks of 3?","target":null},{"key":"splitChunks.answer","english":"Walk through with a position counter that goes up by 3 each time. At each step, take the substring of length 3 starting at your position. That's the current codon.","target":null},{"key":"stopCodon.question","english":"What do I do when I hit a STOP codon?","target":null},{"key":"stopCodon.answer","english":"Stop translating completely. Use `break` to exit the loop. Don't add STOP to your protein list.","target":null}]},{"name":"functions","rows":[{"key":"push.description","english":"Returns a new list with the element added to the end (provided by level stdlib)","target":null},{"key":"push.category","english":"List Operations","target":null}]}]}]
---

RNA can be broken into three-nucleotide sequences called codons, and then translated to a protein. For example:

1. RNA: "AUGUUUUCU"
2. Codons: "AUG", "UUU", "UCU"
3. Protein: "Methionine", "Phenylalanine", "Serine"

There are also three terminating codons (STOP codons: UAA, UAG, UGA). If you encounter any of these, all translation ends and the protein is terminated.

Your task is to write a function <define>`translateRna`</define> that takes an RNA sequence and returns the list of amino acids.

Codon mappings:

- AUG -> Methionine
- UUU, UUC -> Phenylalanine
- UUA, UUG -> Leucine
- UCU, UCC, UCA, UCG -> Serine
- UAU, UAC -> Tyrosine
- UGU, UGC -> Cysteine
- UGG -> Tryptophan
- UAA, UAG, UGA -> STOP
