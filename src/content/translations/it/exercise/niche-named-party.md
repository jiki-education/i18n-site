---
lang: "it"
type: "exercise"
slug: "niche-named-party"
title: "Festa per Nomi Specifici"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "cce97ae"
content_version: "4761d3023f27"
published_at: "2026-08-07"
forum_topic_id: 1298
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"Controlla il nome"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"Scrivi una funzione `handleGuest` che controlla se il nome della persona inizia con le lettere consentite per la festa di stasera. Restituisci `true` se è così, altrimenti `false`."},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"Risolvilo in 20 righe"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"Bonus: con il conteggio della lunghezza estratto in una funzione ausiliaria che `handleGuest` riutilizza, l'intera soluzione sta in 20 righe. Riesci ad eguagliarla?"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"Festa S: Arriva Sarah"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"Stasera sono consentiti solo i nomi che iniziano con \"S\". Sarah dovrebbe entrare!"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"Festa S: Arriva Brad"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"Stasera sono consentiti solo i nomi che iniziano con \"S\". Brad dovrebbe essere respinto."},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"Festa Brad: Arriva Bradley"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"Stasera sono consentiti solo i nomi che iniziano con \"Brad\". Bradley dovrebbe entrare!"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"Festa Bradley: Arriva Brad"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"Stasera sono consentiti solo i nomi che iniziano con \"Bradley\". Brad è troppo corto, quindi non è consentito."},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"Festa Brad: Arriva Brian"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"Stasera sono consentiti solo i nomi che iniziano con \"Brad\". Brian dovrebbe essere respinto."},{"key":"silence.name","english":"S Party: Silence...","target":"Festa S: Silenzio..."},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"La persona non dice il suo nome. Un nome vuoto non può iniziare con niente. Respingila!"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"Festa Cher: Arriva Cher"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"Stasera sono consentiti solo i nomi che iniziano con \"Cher\". Il nome di Cher è esattamente \"Cher\", falla entrare!"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"Compatta ed ordinata"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"La soluzione più corta sta in 20 righe. Riesci a trovarla?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Continua! Vedi se riesci a risolverlo in meno righe."}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"Come faccio a controllare che un nome inizi con certe lettere?"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"Confronta ogni carattere del prefisso consentito con il carattere nella stessa posizione del nome. Se un carattere è diverso, il nome non corrisponde."},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"Come faccio ad esaminare un carattere alla volta?"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"Usa l'iterazione su stringa per scorrere una stringa."},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"Come faccio a trovare la lettera equivalente nell'altra parola?"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"Usa l'indicizzazione delle stringhe per trovare una lettera specifica."},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"E se il prefisso consentito è più lungo del nome?"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"Quella persona non può corrispondere, quindi dovresti restituire `false`."}]}]}]
---

Stasera c'è una festa molto esclusiva: possono entrare solo le persone con il nome che inizia con una specifica sequenza di lettere!

Il tuo compito è scrivere una funzione chiamata `handleGuest` (controllare l'ospite) che accetta due input:

- `name`: il nome della persona alla porta
- `allowedPrefix`: le lettere iniziali richieste per la festa di stasera

Dovrebbe restituire `true` se la persona può entrare, e `false` se non è ammessa.

Per esempio:

- Se il prefisso (la lettera iniziale) consentito per stasera è `"S"`, allora Sarah può entrare (restituisce `true`) ma Brad non può entrare (restituisce `false`).
- Se il prefisso consentito è `"Brad"`, allora Brad e Bradley possono entrare, ma Brian non può entrare.

### Funzioni ausiliarie

Mentre lavori a questo esercizio, ti accorgerai che è necessario calcolare la lunghezza del nome dell'ospite ed anche la lunghezza del prefisso consentito. Questa è l'occasione perfetta per creare una funzione ausiliaria chiamata `getLength(someString)`, che conta quante lettere ci sono nella stringa. Poi potrai usare questa funzione in diversi punti all'interno di `handleGuest(...)`.

Lo scenario bonus ti sfida a risolvere questo esercizio nel minor numero di righe possibile. Potresti anche trovare altre soluzioni che preferisci, che usano più righe. Va benissimo (e sei incoraggiato ad esplorare approcci diversi), ma prova a trovare anche la versione più corta.

Divertiti!
