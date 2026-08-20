---
lang: "es-ES"
type: "exercise"
slug: "hamming"
title: "Hamming"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "16f805d"
content_version: "733b7a3c6273"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"Has usado más líneas de las necesarias, mira si puedes reducirlo."}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"Calcular la distancia de Hamming"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"Escribe una función que calcule la distancia de Hamming entre dos cadenas de ADN de igual longitud. La distancia de Hamming es el número de posiciones en las que los caracteres correspondientes difieren."},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"Resolver en once líneas de código"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"¿Puedes resolver esto usando no más de once líneas de código?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"Cadenas vacías"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"Las cadenas vacías tienen una distancia de Hamming de 0."},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"Cadenas idénticas de una sola letra"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"Las cadenas idénticas de una sola letra tienen una distancia de Hamming de 0."},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"Cadenas largas idénticas"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"Las cadenas largas idénticas tienen una distancia de Hamming de 0."},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"Cadenas diferentes de una sola letra"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"Las cadenas diferentes de una sola letra tienen una distancia de Hamming de 1."},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"Cadenas largas diferentes"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"Las cadenas largas con diferencias tienen una distancia de Hamming calculada."},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"Once líneas de código"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"Resuelve el ejercicio usando no más de once líneas de código."}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"¿Qué significa «distancia de Hamming» en términos simples?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"Es el número de posiciones en las que las dos cadenas difieren. Así que 'GAGA' vs 'GATA' difieren solo en la posición 3, dando una distancia de 1."},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"¿Cómo comparo caracteres en la misma posición en ambas cadenas?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"Necesitarás recorrer ambas cadenas en sincronía, para poder extraer el carácter en el mismo lugar de cada una a medida que avanzas."},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"¿Cómo hago un seguimiento de «cuántas diferencias» hay?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"Necesitarás algo que lleve un total acumulado, que se ajuste cada vez que detectes una diferencia, para devolverlo una vez que hayas revisado cada posición."}]}]}]
---

¡Este es un clásico ejercicio de Exercism sobre biología molecular!

Tu cuerpo está formado por células que contienen ADN. Esas células se desgastan regularmente y necesitan ser reemplazadas, lo cual logran dividiéndose en células hijas. De hecho, ¡el cuerpo humano promedio experimenta alrededor de 10 mil billones de divisiones celulares a lo largo de la vida!

Cuando las células se dividen, su ADN también se replica. A veces, durante este proceso ocurren errores y fragmentos individuales de ADN se codifican con información incorrecta. Si comparamos dos cadenas de ADN y contamos las diferencias entre ellas, podemos ver cuántos errores ocurrieron. A esto se le llama «distancia de Hamming».

La distancia de Hamming es útil en muchas áreas de la ciencia, no solo en biología, ¡así que es una buena expresión para conocer!

Tu tarea es calcular la distancia de Hamming entre dos cadenas de ADN. El ADN emplea las letras C, A, G y T. Dos cadenas podrían verse así:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Tienen 7 diferencias, por lo que la distancia de Hamming es 7.

Crea una función llamada `hammingDistance` (distancia de Hamming) que tenga dos argumentos: las dos cadenas de ADN como strings. Debe devolver un número, la distancia.

Ambas cadenas de ADN siempre tendrán la misma longitud.
