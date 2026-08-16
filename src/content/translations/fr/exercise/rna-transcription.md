---
lang: "fr"
type: "exercise"
slug: "rna-transcription"
title: "Transcription en ARN"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/rna-transcription"
en_md5: "47a83172695ceff4aaf716396bf70712"
governance_sha: "b951b19"
content_version: "ff31ef1ad9dc"
published_at: "2026-08-16"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"transcribeDnaToRna.name","english":"Transcribe DNA to RNA","target":"Transcris l'ADN en ARN"},{"key":"transcribeDnaToRna.description","english":"Write a function that takes a DNA strand and returns its RNA complement. Each nucleotide should be replaced with its complement: G->C, C->G, T->A, A->U.","target":"Écris une fonction qui prend un brin d'ADN et renvoie son complément ARN. Chaque nucléotide doit être remplacé par son complément : G->C, C->G, T->A, A->U."}]},{"name":"scenarios","rows":[{"key":"rnaEmptySequence.name","english":"Empty RNA sequence","target":"Séquence d'ARN vide"},{"key":"rnaEmptySequence.description","english":"An empty DNA sequence should return an empty RNA sequence.","target":"Une séquence d'ADN vide doit renvoyer une séquence d'ARN vide."},{"key":"rnaCytosineToGuanine.name","english":"Cytosine to guanine","target":"De la cytosine à la guanine"},{"key":"rnaCytosineToGuanine.description","english":"The RNA complement of cytosine (C) is guanine (G).","target":"Le complément ARN de la cytosine (C) est la guanine (G)."},{"key":"rnaGuanineToCytosine.name","english":"Guanine to cytosine","target":"De la guanine à la cytosine"},{"key":"rnaGuanineToCytosine.description","english":"The RNA complement of guanine (G) is cytosine (C).","target":"Le complément ARN de la guanine (G) est la cytosine (C)."},{"key":"rnaThymineToAdenine.name","english":"Thymine to adenine","target":"De la thymine à l'adénine"},{"key":"rnaThymineToAdenine.description","english":"The RNA complement of thymine (T) is adenine (A).","target":"Le complément ARN de la thymine (T) est l'adénine (A)."},{"key":"rnaAdenineToUracil.name","english":"Adenine to uracil","target":"De l'adénine à l'uracile"},{"key":"rnaAdenineToUracil.description","english":"The RNA complement of adenine (A) is uracil (U).","target":"Le complément ARN de l'adénine (A) est l'uracile (U)."},{"key":"rnaFullSequence.name","english":"Full RNA complement","target":"Complément ARN complet"},{"key":"rnaFullSequence.description","english":"Convert a full DNA sequence to its RNA complement.","target":"Convertis une séquence d'ADN complète en son complément ARN."}]},{"name":"hints","rows":[{"key":"transcriptionRule.question","english":"What's the transcription rule?","target":"Quelle est la règle de transcription ?"},{"key":"transcriptionRule.answer","english":"Each DNA nucleotide maps to one RNA nucleotide: G to C, C to G, T to A, and A to U. Your job is to apply this rule to every character in the input.","target":"Chaque nucléotide de l'ADN correspond à un nucléotide de l'ARN : G devient C, C devient G, T devient A et A devient U. Ton travail consiste à appliquer cette règle à chaque caractère de l'entrée."},{"key":"mappingInCode.question","english":"How do I do that mapping in code?","target":"Comment faire cette correspondance dans le code ?"},{"key":"mappingInCode.answer","english":"One option is two 'parallel' strings, `\"GCTA\"` for DNA and `\"CGAU\"` for RNA. The RNA complement of a DNA letter is the letter at the same position in the RNA string. You'll need to find the position in the DNA string first.","target":"Une option consiste à utiliser deux strings « parallèles », `\"GCTA\"` pour l'ADN et `\"CGAU\"` pour l'ARN. Le complément ARN d'une lettre d'ADN est la lettre située à la même position dans la string d'ARN. Il te faudra d'abord trouver sa position dans la string d'ADN."},{"key":"processStrand.question","english":"How do I process the whole strand?","target":"Comment traiter le brin en entier ?"},{"key":"processStrand.answer","english":"Loop through each character of the DNA string, find its RNA complement, and append it onto a result string using concatenation with `+`.","target":"Parcours chaque caractère de la string d'ADN, trouve son complément ARN et ajoute-le à une string de résultat en utilisant la concaténation avec `+`."}]}]}]
---

Ton objectif est de déterminer le complément ARN d'une séquence d'ADN donnée.

Les brins d'ADN comme les brins d'ARN sont des séquences de nucléotides.

Les quatre nucléotides présents dans l'ADN sont l'adénine (A), la cytosine (C), la guanine (G) et la thymine (T).

Les quatre nucléotides présents dans l'ARN sont l'adénine (A), la cytosine (C), la guanine (G) et l'uracile (U).

À partir d'un brin d'ADN, on forme le brin d'ARN transcrit en remplaçant chaque nucléotide par son complément :

- G -> C
- C -> G
- T -> A
- A -> U

Crée une fonction appelée `dnaToRna(dna)` (de l'ADN vers l'ARN) qui prend en entrée une _string_ contenant l'ADN et renvoie une _string_ représentant l'équivalent ARN.
