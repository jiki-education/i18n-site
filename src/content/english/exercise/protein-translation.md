---
type: "exercise"
slug: "protein-translation"
title: "Protein Translation"
en_md5: "3868e62c7a08c04d09df4445a3271977"
source_repo: "front-end"
source_path: "curriculum/src/exercises/protein-translation"
captured_at: "2026-08-20"
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
