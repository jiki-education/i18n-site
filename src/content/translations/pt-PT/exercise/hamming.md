---
lang: "pt-PT"
type: "exercise"
slug: "hamming"
title: "Hamming"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "a347f3f"
content_version: "04a2ce6c6631"
published_at: "2026-08-22"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"Usaste mais linhas do que o necessário. Vê se consegues reduzi-las."}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"Calcula a distância de Hamming"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"Escreve uma função que calcula a distância de Hamming entre duas cadeias de ADN de comprimento igual. A distância de Hamming é o número de posições em que as letras correspondentes diferem."},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"Resolve em onze linhas de código"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"Consegues resolver isto com no máximo onze linhas de código?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"Cadeias vazias"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"Cadeias vazias têm uma distância de Hamming de 0."},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"Cadeias idênticas de letra única"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"Cadeias idênticas de letra única têm uma distância de Hamming de 0."},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"Cadeias longas idênticas"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"Cadeias longas idênticas têm uma distância de Hamming de 0."},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"Cadeias diferentes de letra única"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"Cadeias diferentes de letra única têm uma distância de Hamming de 1."},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"Cadeias longas diferentes"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"Cadeias longas com diferenças têm uma distância de Hamming calculada."},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"Onze linhas de código"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"Resolve o exercício com no máximo onze linhas de código."}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"O que significa «distância de Hamming» em termos simples?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"É o número de posições em que as duas strings diferem. Assim, «GAGA» versus «GATA» diferem apenas na posição 3, dando uma distância de 1."},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"Como comparo letras na mesma posição em ambas as strings?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"Precisas de percorrer as duas strings em sincronia, para poderes retirar a letra no mesmo ponto de cada uma à medida que avanças."},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"Como controlo «quantas diferenças» existem?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"Precisas de algo que mantenha um total acumulado, ajustado sempre que detetas uma diferença, para estar pronto a devolver assim que tiveres verificado todas as posições."}]}]}]
---

Este é um exercício clássico do Exercism sobre biologia molecular!

O teu corpo é composto por células que contêm ADN. Essas células desgastam-se regularmente e precisam de ser substituídas, o que conseguem ao dividir-se em células-filhas. Na verdade, o corpo humano médio passa por cerca de 10 000 biliões de divisões celulares ao longo da vida!

Quando as células se dividem, o seu ADN também se replica. Por vezes, durante este processo, acontecem erros e partes isoladas de ADN são codificadas com a informação errada. Se compararmos duas cadeias de ADN e contarmos as diferenças entre elas, conseguimos ver quantos erros ocorreram. Isto é conhecido como a «distância de Hamming».

A distância de Hamming é útil em muitas áreas da ciência, não apenas na biologia, por isso, é uma expressão que vale a pena conhecer!

A tua tarefa é calcular a distância de Hamming entre duas cadeias de ADN. O ADN usa as letras C, A, G e T. Duas cadeias podem ter este aspeto:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Têm 7 diferenças, pelo que a distância de Hamming é 7.

Cria uma função chamada `hammingDistance` (distância de Hamming) que tem dois parâmetros de entrada: as duas cadeias de ADN como strings. Deve devolver a distância como um número.

As duas cadeias de ADN têm sempre o mesmo comprimento.
