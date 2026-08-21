---
lang: "pt-BR"
type: "exercise"
slug: "hamming"
title: "Hamming"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "215346b"
content_version: "edd6246aa72a"
published_at: "2026-08-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"Você usou mais linhas do que o necessário. Veja se consegue reduzi-las."}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"Calcule a distância de Hamming"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"Escreva uma função que calcula a distância de Hamming entre duas cadeias de DNA de comprimento igual. A distância de Hamming é o número de posições em que as letras correspondentes diferem."},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"Resolva em onze linhas de código"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"Você consegue resolver isso com no máximo onze linhas de código?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"Cadeias vazias"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"Cadeias vazias têm uma distância de Hamming de 0."},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"Cadeias idênticas de letra única"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"Cadeias idênticas de letra única têm uma distância de Hamming de 0."},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"Cadeias longas idênticas"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"Cadeias longas idênticas têm uma distância de Hamming de 0."},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"Cadeias diferentes de letra única"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"Cadeias diferentes de letra única têm uma distância de Hamming de 1."},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"Cadeias longas diferentes"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"Cadeias longas com diferenças têm uma distância de Hamming calculada."},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"Onze linhas de código"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"Resolva o exercício com no máximo onze linhas de código."}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"O que significa “distância de Hamming” em termos simples?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"É o número de posições em que as duas strings diferem. Assim, “GAGA” versus “GATA” diferem apenas na posição 3, dando uma distância de 1."},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"Como comparo letras na mesma posição em ambas as strings?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"Você precisa percorrer as duas strings em sincronia, para poder retirar a letra no mesmo ponto de cada uma à medida que avança."},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"Como controlo “quantas diferenças” existem?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"Você precisa de algo que mantenha um total acumulado, ajustado sempre que detecta uma diferença, para estar pronto a retornar assim que tiver verificado todas as posições."}]}]}]
---

Este é um exercício clássico do Exercism sobre biologia molecular!

O seu corpo é feito de células que contêm DNA. Essas células se desgastam com frequência e precisam ser substituídas, o que elas conseguem fazer se dividindo em células-filhas. Na verdade, o corpo humano médio passa por cerca de 10.000 trilhões de divisões celulares ao longo da vida!

Quando as células se dividem, o DNA delas também se replica. Às vezes, durante esse processo, acontecem erros e partes isoladas de DNA são codificadas com a informação errada. Se a gente comparar duas cadeias de DNA e contar as diferenças entre elas, consegue ver quantos erros aconteceram. Isso é conhecido como a “distância de Hamming”.

A distância de Hamming é útil em muitas áreas da ciência, não só na biologia, então é uma expressão que vale a pena conhecer!

A sua tarefa é calcular a distância de Hamming entre duas cadeias de DNA. O DNA usa as letras C, A, G e T. Duas cadeias podem ter este aspecto:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Elas têm 7 diferenças, então a distância de Hamming é 7.

Crie uma função chamada `hammingDistance` (distância de Hamming) que tem duas entradas: as duas cadeias de DNA como strings. Ela deve retornar a distância como um número.

As duas cadeias de DNA têm sempre o mesmo comprimento.
