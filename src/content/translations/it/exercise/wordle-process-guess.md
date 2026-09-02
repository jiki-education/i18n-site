---
lang: "it"
type: "exercise"
slug: "wordle-process-guess"
title: "Wordle: elabora il tentativo"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/exercises/wordle-process-guess"
en_md5: "9c8afa4a4caa91fe2e3243fc4cd4f81d"
governance_sha: "f2cbb192"
content_version: "6b5d7a34be04"
published_at: "2026-09-02"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"rowMismatch","english":"The \"{{letter}}\" at square {{square}} should be \"{{expected}}\", not \"{{actual}}\".","target":"La lettera «{{letter}}» nella casella {{square}} dovrebbe essere «{{expected}}», non «{{actual}}»."},{"key":"rowNotColored","english":"The row wasn't colored.","target":"La riga non è stata colorata."},{"key":"rowWrongLength","english":"The row got {{actual}} states, but a row needs {{expected}}.","target":"La riga ha ricevuto {{actual}} stati, ma una riga ne richiede {{expected}}."},{"key":"allCorrect","english":null,"target":"Ci aspettavamo che tutte le lettere fossero verdi"},{"key":"absent","english":null,"target":"Ci aspettavamo che 'a' e 'u' fossero assenti"},{"key":"present","english":null,"target":"Ci aspettavamo che 'l' e 'e' fossero presenti."},{"key":"complex","english":null,"target":"Ci aspettavamo present, present, present, correct, absent"},{"key":"differentWord","english":null,"target":"Ci aspettavamo correct, present, present, present, absent"}]},{"name":"tasks","rows":[{"key":"processGuess.name","english":"Process a single guess","target":"Elabora un singolo tentativo"},{"key":"processGuess.description","english":"Create a function called processGuess that takes a target word and a guess, works out the state of each letter (correct, present, or absent), then calls colorRow(1, states) with the results.","target":"Crea una funzione chiamata processGuess che riceve una parola segreta e un tentativo, determina lo stato di ogni lettera (correct, present o absent), poi chiama colorRow(1, states) con i risultati."}]},{"name":"scenarios","rows":[{"key":"allCorrect.name","english":"All correct","target":"Tutte corrette"},{"key":"allCorrect.description","english":"Deal with a fully correct guess","target":"Gestisci un tentativo completamente corretto"},{"key":"absent.name","english":"Some absent","target":"Alcune assenti"},{"key":"absent.description","english":"Handle when some letters are wrong","target":"Gestisci il caso in cui alcune lettere sono sbagliate"},{"key":"present.name","english":"Some present","target":"Alcune presenti"},{"key":"present.description","english":"Deal with letters in the wrong place","target":"Gestisci le lettere nel posto sbagliato"},{"key":"complex.name","english":"Complex","target":"Complesso"},{"key":"complex.description","english":"Deal with a more complex scenario","target":"Gestisci uno scenario più complesso"},{"key":"differentWord.name","english":"A different word","target":"Una parola diversa"},{"key":"differentWord.description","english":"And finally a different word!","target":"E infine una parola diversa!"}]},{"name":"hints","rows":[{"key":"compareLetters.question","english":"How do I compare each letter of the guess to the target?","target":"Come confronto ogni lettera del tentativo con la parola segreta?"},{"key":"compareLetters.answer","english":"Loop through the positions `0` to `4`. For each position, compare `guess[i]` with `target[i]`.","target":"Esegui un ciclo sulle posizioni da `0` a `4`. Per ogni posizione, confronta `guess[i]` con `target[i]`."},{"key":"stateRules.question","english":"When is a letter `\"correct\"` vs `\"present\"` vs `\"absent\"`?","target":"Quando una lettera è `\"correct\"`, `\"present\"` o `\"absent\"`?"},{"key":"stateRules.answer","english":"If `guess[i]` equals `target[i]`, it's `\"correct\"`. Otherwise, if the letter exists somewhere in `target`, it's `\"present\"`. If not, it's `\"absent\"`.","target":"Se `guess[i]` è uguale a `target[i]`, è `\"correct\"`. Altrimenti, se la lettera esiste da qualche parte in `target`, è `\"present\"`. Se no, è `\"absent\"`."},{"key":"buildList.question","english":"How do I build up the array of states?","target":"Come costruisco l'array di stati?"},{"key":"buildList.answer","english":"Start with an empty array, then use `states.push(value)` inside the loop to add each state onto the end in order.","target":"Inizia con un array vuoto, poi usa `states.push(value)` all'interno del ciclo per aggiungere ogni stato in fondo, in ordine."},{"key":"finishedList.question","english":"Where does the finished array go?","target":"Dove finisce l'array completato?"},{"key":"finishedList.answer","english":"Pass it to `colorRow(1, states)` to color the first row of the board with your computed states.","target":"Passalo a `colorRow(1, states)` per colorare la prima riga della griglia con gli stati che hai calcolato."}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":"Colora una riga della griglia di Wordle con gli stati indicati."},{"key":"colorRow.category","english":"Wordle","target":"Wordle"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Aggiunge un elemento in fondo a un array, modificando l'array sul posto."},{"key":"push.category","english":"Arrays","target":"Array"},{"key":"includes.description","english":"Checks whether a string contains another string, returning true or false.","target":"Controlla se una stringa contiene un'altra stringa, restituendo true o false."},{"key":"includes.category","english":"Strings","target":"Stringhe"}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":"ha colorato una riga della griglia di Wordle"}]}]}]
---

Benvenuto a Wordle, il gioco che è diventato virale durante i lockdown per il Covid-19!

Il gioco funziona così:

- C'è una parola segreta che l'utente cerca di indovinare.
- L'utente ha 6 tentativi per indovinarla.
- Per ogni tentativo ci sono 5 caselle, una per ogni lettera:
  - Se una lettera è corretta, la casella diventa verde.
  - Se una lettera è nella parola segreta ma nel posto sbagliato, la casella diventa gialla.
  - Se una lettera non è nella parola segreta, la casella diventa grigia.

In alcuni esercizi implementerai il gioco completo di Wordle, ma in **questo esercizio** ti limiterai a far funzionare la prima riga.

Per farlo, devi creare una funzione chiamata `processGuess(target, guess)` (elabora il tentativo). Deve determinare lo stato di ogni lettera del tentativo, poi chiamare la funzione `colorRow(1, states)` (colora la riga) con un array di stati, uno per ogni lettera: `"correct"`, `"present"` o `"absent"`.

Per esempio, `processGuess("Hello", "Holes")` dovrebbe usare `colorRow` con:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Assicurati di aver capito prima di continuare!

### Metodi

Come negli ultimi due esercizi, puoi costruire l'array di stati usando il metodo `push`, che aggiunge un elemento in fondo a un array. Per esempio, `states.push("correct")` aggiunge `"correct"` alla fine dell'array `states`.

Hai anche a disposizione il metodo `includes` se vuoi controllare se una stringa contiene un'altra stringa.

Buona fortuna!
