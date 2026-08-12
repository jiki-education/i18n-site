---
lang: "fr"
type: "exercise"
slug: "hamming"
title: "Distance de Hamming"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "c7d7fc9"
content_version: "e89f3bd2bfe9"
published_at: "2026-08-12"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"Tu as utilisé plus de lignes que nécessaire. Essaie de raccourcir ton code."}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"Calcule la distance de Hamming"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"Écris une fonction qui calcule la distance de Hamming entre deux brins d'ADN de même longueur. La distance de Hamming est le nombre de positions où les caractères correspondants diffèrent."},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"Résous l'exercice en onze lignes de code"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"Peux-tu résoudre cet exercice en onze lignes de code maximum ?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"Brins vides"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"Des brins vides ont une distance de Hamming de 0."},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"Brins identiques d'une seule lettre"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"Des brins identiques d'une seule lettre ont une distance de Hamming de 0."},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"Longs brins identiques"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"De longs brins identiques ont une distance de Hamming de 0."},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"Brins différents d'une seule lettre"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"Des brins différents d'une seule lettre ont une distance de Hamming de 1."},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"Longs brins différents"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"De longs brins présentant des différences ont une distance de Hamming qui peut être calculée."},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"Onze lignes de code"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"Résous l'exercice en onze lignes de code maximum."}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"Que signifie « distance de Hamming » concrètement ?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"C'est le nombre de positions où les deux strings diffèrent. Par exemple, 'GAGA' et 'GATA' ne diffèrent qu'à la position 3, ce qui donne une distance de 1."},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"Comment comparer les caractères à la même position dans les deux strings ?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"Tu dois parcourir les deux strings en parallèle, pour pouvoir extraire au fur et à mesure le caractère qui se trouve au même endroit dans chaque string."},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"Comment compter le nombre de différences ?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"Tu as besoin de quelque chose qui garde un total en cours, ajusté à chaque fois que tu repères une différence, pour pouvoir le renvoyer une fois toutes les positions vérifiées."}]}]}]
---

C'est un exercice classique d'Exercism sur la biologie moléculaire !

Ton corps est composé de cellules qui contiennent de l'ADN. Ces cellules s'usent régulièrement et doivent être remplacées, ce qu'elles font en se divisant en cellules filles. En fait, un corps humain connaît en moyenne environ 10 millions de milliards de divisions cellulaires au cours d'une vie !

Quand les cellules se divisent, leur ADN se réplique aussi. Pendant ce processus, il arrive que des erreurs se produisent et que certains morceaux d'ADN soient encodés avec une information incorrecte. Si on compare deux brins d'ADN et qu'on compte les différences entre eux, on peut voir combien d'erreurs se sont produites. C'est ce qu'on appelle la « distance de Hamming ».

La distance de Hamming est utile dans de nombreux domaines scientifiques, pas seulement en biologie, c'est donc une notion vraiment intéressante à connaître !

Ta tâche consiste à calculer la distance de Hamming entre deux brins d'ADN. L'ADN utilise les lettres C, A, G et T. Deux brins peuvent ressembler à ceci :

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Ils présentent 7 différences, la distance de Hamming est donc de 7.

Crée une fonction appelée `hammingDistance` (distance de Hamming) qui prend deux entrées : les deux brins d'ADN sous forme de strings. Elle doit renvoyer un nombre correspondant à la distance.

Les deux brins d'ADN auront toujours la même longueur.
