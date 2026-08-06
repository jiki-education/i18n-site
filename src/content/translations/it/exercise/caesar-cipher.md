---
lang: "it"
type: "exercise"
slug: "caesar-cipher"
title: "Cifrario di Cesare"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "c80036b"
content_version: "46db0b7d840e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"Codifica un messaggio"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"Scrivi una funzione `encode` che sposta ciascuna lettera di un messaggio di uno spostamento dato. Gli spazi devono rimanere spazi. Le lettere che, dopo lo spostamento, superano la 'z' devono ricominciare dall'inizio dell'alfabeto."}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"Semplice spostamento di 1"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"Sposta ciascuna lettera in avanti di 1: a->b, b->c, c->d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"Spostamento di 3"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"Sposta ciascuna lettera in avanti di 3: h->k, e->h, l->o, o->r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"Ricomincia dall'inizio dell'alfabeto"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"Quando lo spostamento supera la 'z', ricomincia dall'inizio: x->a, y->b, z->c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"Messaggio con spazi"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"Gli spazi devono rimanere spazi, solo le lettere vengono spostate."},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"Cifratura ROT13"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13 è un caso particolare del cifrario di Cesare con uno spostamento di 13."}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"Come ragiono sullo spostamento di una lettera di N posizioni?"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"Ogni lettera ha una posizione nell'alfabeto (a è in posizione 0, b in posizione 1 e così via). Per spostarla, devi trovare quella posizione, aggiungere il valore dello spostamento e quindi trasformare la nuova posizione in una lettera cercandola nell'alfabeto."},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"Come trovo la posizione di una lettera nell'alfabeto?"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"Puoi cercare una stringa all'interno di un'altra con `indexOf`. Chiamando `indexOf` sulla stringa che contiene l'alfabeto ottieni la posizione di una lettera, oppure -1 se la lettera non viene trovata. Per fare il contrario, puoi usare la posizione come indice sulla stringa dell'alfabeto per ottenere la lettera."},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"Cosa succede quando lo spostamento supera la 'z'?"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"La lettera deve ricominciare dalla 'a'. L'operatore modulo (`%`) è perfetto per questo. Calcolare il modulo 26 della posizione riporta qualsiasi numero nell'intervallo da 0 a 25."},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"Come applico questo a un intero messaggio?"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"Scorri ciascun carattere del messaggio, spostalo usando la tua funzione ausiliaria per una singola lettera, e usa la concatenazione (`+`) per costruire la stringa risultante dalle lettere spostate."}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"Trova la posizione di una stringa più piccola all'interno di una stringa, oppure -1 se non viene trovata (fornito dalla libreria standard del livello)."},{"key":"indexOf.category","english":"String Operations","target":"Operazioni sulle stringhe"}]}]}]
---

Il cifrario di Cesare è una delle tecniche di cifratura più antiche e semplici. Fu usato da Giulio Cesare per inviare messaggi segreti ai suoi generali.

Il cifrario funziona spostando ciascuna lettera del messaggio di un numero fisso di posizioni dell'alfabeto. Ad esempio, con uno spostamento di 3, 'a' diventa 'd', 'b' diventa 'e' e così via. Se lo spostamento supera la 'z', ricomincia dall'inizio dell'alfabeto.

Gli spazi devono rimanere spazi (non vengono spostati).

Crea una funzione chiamata `encode(message, shift)` (codifica un messaggio con uno spostamento) che prende un messaggio in minuscolo e un valore di spostamento, e restituisce il messaggio codificato.

Per esempio:

- `encode("abc", 1)` restituisce `"bcd"`
- `encode("xyz", 3)` restituisce `"abc"` (ricomincia dall'inizio)
- `encode("hello world", 5)` restituisce `"mjqqt btwqi"`

Suggerimento: conviene suddividere il problema in funzioni ausiliarie più piccole!

### Curiosità

Una volta facevo da presentatore a una conferenza tech a Braga, in Portogallo. Cinque minuti prima di salire sul palco, gli organizzatori si avvicinarono e, un po' imbarazzati, mi chiesero se mi dispiacesse vestirmi da Giulio Cesare per la prima parte della giornata, per celebrare l'eredità romana di Braga. Ce l'ho fatta...?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Jeremy vestito da Cesare"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
