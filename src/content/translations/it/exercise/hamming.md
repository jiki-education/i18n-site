---
lang: "it"
type: "exercise"
slug: "hamming"
title: "Hamming"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "c80036b"
content_version: "78b9c6fe9afa"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"Hai usato più righe del necessario: vedi se riesci a ridurle."}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"Calcola la distanza di Hamming"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"Scrivi una funzione che calcola la distanza di Hamming tra due filamenti di DNA della stessa lunghezza. La distanza di Hamming è il numero di posizioni in cui i caratteri corrispondenti differiscono."},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"Risolvi in undici righe di codice"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"Riesci a risolverlo usando non più di undici righe di codice?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"Filamenti vuoti"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"I filamenti vuoti hanno una distanza di Hamming di 0."},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"Filamenti identici di una lettera"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"I filamenti identici di una sola lettera hanno una distanza di Hamming di 0."},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"Filamenti lunghi identici"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"I filamenti lunghi identici hanno una distanza di Hamming di 0."},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"Filamenti diversi di una lettera"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"I filamenti diversi di una sola lettera hanno una distanza di Hamming di 1."},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"Filamenti lunghi diversi"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"I filamenti lunghi con differenze hanno una distanza di Hamming calcolata."},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"Undici righe di codice"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"Risolvi l'esercizio usando non più di undici righe di codice."}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"Cosa significa «distanza di Hamming» in parole semplici?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"È il numero di posizioni in cui le due stringhe differiscono. Quindi «GAGA» e «GATA» differiscono solo nella posizione 3, con una distanza di 1."},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"Come posso confrontare i caratteri nella stessa posizione in entrambe le stringhe?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"Dovrai scorrere entrambe le stringhe in sincrono, in modo da poter estrarre il carattere nella stessa posizione da ciascuna mentre procedi."},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"Come faccio a tenere traccia di «quante differenze» ci sono?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"Avrai bisogno di qualcosa che mantenga un totale progressivo, aggiornato ogni volta che trovi una discordanza, in modo che sia pronto da restituire una volta controllate tutte le posizioni."}]}]}]
---

Questo è un classico esercizio di Exercism sulla biologia molecolare!

Il tuo corpo è fatto di cellule che contengono DNA. Queste cellule si usurano regolarmente e devono essere sostituite, cosa che ottengono dividendosi in cellule figlie. Infatti, il corpo umano medio vive circa 10 biliardi di divisioni cellulari nell'arco di una vita!

Quando le cellule si dividono, anche il loro DNA si replica. A volte, durante questo processo, si verificano errori e singoli pezzi di DNA vengono codificati con l'informazione sbagliata. Se confrontiamo due filamenti di DNA e contiamo le differenze tra loro, possiamo vedere quanti errori si sono verificati. Questa è nota come "distanza di Hamming".

La distanza di Hamming è utile in molti ambiti scientifici, non solo in biologia, quindi è una bella espressione da conoscere!

Il tuo compito è calcolare la distanza di Hamming tra due filamenti di DNA. Il DNA usa le lettere C, A, G e T. Due filamenti potrebbero apparire così:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

Hanno 7 differenze, quindi la distanza di Hamming è 7.

Crea una funzione chiamata `hammingDistance` (distanza di Hamming) che ha due input: i due filamenti di DNA come stringhe. Dovrebbe restituire un numero come distanza.

Entrambi i filamenti di DNA avranno sempre la stessa lunghezza.
