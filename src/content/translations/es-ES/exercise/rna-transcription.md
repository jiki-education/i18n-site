---
lang: "es-ES"
type: "exercise"
slug: "rna-transcription"
title: "Transcripción de ARN"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/rna-transcription"
en_md5: "47a83172695ceff4aaf716396bf70712"
governance_sha: "16f805d"
content_version: "2821a2130e19"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"transcribeDnaToRna.name","english":"Transcribe DNA to RNA","target":null},{"key":"transcribeDnaToRna.description","english":"Write a function that takes a DNA strand and returns its RNA complement. Each nucleotide should be replaced with its complement: G->C, C->G, T->A, A->U.","target":null}]},{"name":"scenarios","rows":[{"key":"rnaEmptySequence.name","english":"Empty RNA sequence","target":null},{"key":"rnaEmptySequence.description","english":"An empty DNA sequence should return an empty RNA sequence.","target":null},{"key":"rnaCytosineToGuanine.name","english":"Cytosine to guanine","target":null},{"key":"rnaCytosineToGuanine.description","english":"The RNA complement of cytosine (C) is guanine (G).","target":null},{"key":"rnaGuanineToCytosine.name","english":"Guanine to cytosine","target":null},{"key":"rnaGuanineToCytosine.description","english":"The RNA complement of guanine (G) is cytosine (C).","target":null},{"key":"rnaThymineToAdenine.name","english":"Thymine to adenine","target":null},{"key":"rnaThymineToAdenine.description","english":"The RNA complement of thymine (T) is adenine (A).","target":null},{"key":"rnaAdenineToUracil.name","english":"Adenine to uracil","target":null},{"key":"rnaAdenineToUracil.description","english":"The RNA complement of adenine (A) is uracil (U).","target":null},{"key":"rnaFullSequence.name","english":"Full RNA complement","target":null},{"key":"rnaFullSequence.description","english":"Convert a full DNA sequence to its RNA complement.","target":null}]},{"name":"hints","rows":[{"key":"transcriptionRule.question","english":"What's the transcription rule?","target":null},{"key":"transcriptionRule.answer","english":"Each DNA nucleotide maps to one RNA nucleotide: G to C, C to G, T to A, and A to U. Your job is to apply this rule to every character in the input.","target":null},{"key":"mappingInCode.question","english":"How do I do that mapping in code?","target":null},{"key":"mappingInCode.answer","english":"One option is two 'parallel' strings, `\"GCTA\"` for DNA and `\"CGAU\"` for RNA. The RNA complement of a DNA letter is the letter at the same position in the RNA string. You'll need to find the position in the DNA string first.","target":null},{"key":"processStrand.question","english":"How do I process the whole strand?","target":null},{"key":"processStrand.answer","english":"Loop through each character of the DNA string, find its RNA complement, and append it onto a result string using concatenation with `+`.","target":null}]}]}]
---

Your task is to determine the RNA complement of a given DNA sequence.

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G), and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G), and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

- G -> C
- C -> G
- T -> A
- A -> U

Create a function called <define>`dnaToRna(dna)`</define> that takes a DNA string as input and returns a string representing the RNA equivalent.
