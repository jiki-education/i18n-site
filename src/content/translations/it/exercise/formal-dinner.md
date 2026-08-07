---
lang: "it"
type: "exercise"
slug: "formal-dinner"
title: "Cena formale"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/exercises/formal-dinner"
en_md5: "8d6a2f3dd90b3a487a6bf855f31ef025"
governance_sha: "364d17d"
content_version: "e7e6f6143980"
published_at: "2026-08-07"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Trova il tavolo dell'ospite"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Scrivi una funzione che prenda la lista dei nomi completi degli invitati, la lista corrispondente dei nomi dei tavoli e l'ospite in arrivo annunciato con un appellativo ed un cognome. Restituisci il nome del tavolo a cui è seduto quell'ospite, oppure `\"No table found\"` se non è nel piano dei posti a tavola."},{"key":"solveTightly.name","english":"Solve it tightly","target":"Risolvilo in modo compatto"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"Bonus: questo può essere scritto in modo molto più compatto di quanto potresti aspettarti. Riesci a far stare l'intera soluzione in una manciata di righe?"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Piano dei posti vuoto"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Nessuno è seduto da nessuna parte quando il piano è vuoto."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad viene respinto"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"Il nome non è nel piano dei posti a tavola."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad viene accompagnato al suo tavolo"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt è nel piano, quindi il signor Pitt ottiene il suo tavolo."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"Cavaliere del regno"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Un appellativo diverso, ed un ospite che non è il primo nel piano."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Il signor Bond, presumo"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond è nel piano."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Hmmm... il signor Bond, presumo"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"Solo Jason Bourne è nel piano, non James Bond."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Non proprio il signor Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Né Ada Spitt né Hugo Ross-Pitt sono il signor Pitt, quindi non ha un posto qui."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"Che ne dici di un barone?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Il barone Lloyd Webber ha un cognome composto da due parole."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Mark è il barone?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Un altro Webber non conta: il cognome deve corrispondere per intero."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"Pulito ed ordinato: lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time your solution has to fit into a much smaller number of lines.","target":"Lo stesso piano dei posti di prima, ma questa volta la tua soluzione deve stare in un numero molto più piccolo di righe."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"Come sono collegate le due liste tra loro?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"Sono una coppia. Il primo invitato siede al primo tavolo, il secondo al secondo, e così via. Quindi non basta sapere *che* un invitato è nel piano: devi sapere *dove* si trova nel piano."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"L'ospite dice «Mr Pitt» ma il piano dice «Brad Pitt». Come faccio a confrontarli?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Quelle due stringhe non saranno mai uguali, quindi un confronto diretto non ti porterà da nessuna parte. Pensa a quale parte di ciò che l'ospite ha annunciato appare effettivamente nel piano, ed in quale punto della voce del piano ti aspetteresti di trovarla."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"Un cognome potrebbe corrispondere all'ospite sbagliato?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Assolutamente sì. Leggi «Ada Spitt» e «Hugo Ross-Pitt» ad alta voce, e poi pensa al signor Pitt. Chiediti che cosa rende un cognome un vero cognome su quella riga, piuttosto che solo alcune lettere che si trovano per caso alla fine."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"Cosa devo restituire quando nessuno corrisponde?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"La stringa `\"No table found\"`, esattamente come scritta. La parte più difficile è capire quando puoi dirlo. Se hai controllato il primissimo invitato nel piano e non è quello giusto, puoi già sapere con certezza che non è seduto da qualche parte?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Continua! Vedi se riesci a risolverlo in meno righe."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"Il numero di elementi in un array: la stessa proprietà length che hai usato sulle stringhe (fornito dal livello stdlib)"},{"key":"length.category","english":"List Operations","target":"Operazioni su array"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"Suddivide una stringa in una lista di parti, separandola in corrispondenza di ogni separatore (fornito dal livello stdlib)"},{"key":"split.category","english":"String Operations","target":"Operazioni su stringhe"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"Crea un nuovo array da una parte di un array, a partire da una posizione (fornito dal livello stdlib)"},{"key":"slice.category","english":"List Operations","target":"Operazioni su array"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"Unisce gli elementi di un array in una stringa, con un separatore tra loro (fornito dal livello stdlib)"},{"key":"join.category","english":"List Operations","target":"Operazioni su array"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"Verifica se una stringa termina con un'altra stringa (fornito dal livello stdlib)"},{"key":"endsWith.category","english":"String Operations","target":"Operazioni su stringhe"}]}]}]
---

Sei tornato al tuo secondo lavoro come buttafuori. È la sera dopo l'After Party, e c'è un'altra festa. Questa volta è una cena formale, quindi stasera sei meno "uomo robusto alla porta" e più "persona con un bloc-notes ed un bel panciotto".

Questo non è decisamente il posto per usare **solo** il tuo nome. Anzi, non è proprio il posto per usare il tuo nome. Qui, tutti vengono chiamati con un appellativo (_honorific_ in inglese) (Miss, Mr, Dr, ecc.) ed il proprio cognome.

Gli organizzatori ti hanno consegnato il piano dei posti a tavola sotto forma di due liste separate. Una contiene i nomi completi degli invitati. L'altra contiene il nome del tavolo a cui ogni invitato è seduto (che prendono il nome da alberi e fiori). Come per "Dopo la festa", le due liste sono allineate: l'invitato alla posizione 3 della prima lista siede al tavolo alla posizione 3 della seconda.

Quindi, quando il signor Pitt fa il suo ingresso, devi capire che si tratta del "Brad Pitt" sulla tua lista, e poi dirgli a che tavolo è seduto.

Scrivi una funzione chiamata `tableFor` (cerca il tavolo a cui un ospite è seduto). La funzione ha tre input:

- Il primo è la lista dei nomi completi degli invitati, come stringhe
- Il secondo è la lista dei nomi dei tavoli, nello stesso ordine degli invitati
- Il terzo è l'ospite in arrivo, formattato come un appellativo seguito dal cognome (ad es. "Mr Pitt")

Restituisci il nome del tavolo a cui l'ospite è seduto. Se non è affatto nel piano dei posti, restituisci invece la stringa `"No table found"` (niente tentativi di fortuna, qui!).

L'appellativo è sempre esattamente una parola, e tutto ciò che segue è il cognome dell'ospite. La maggior parte dei cognomi è di una parola, ma alcuni più illustri sono composti da due.

Fai attenzione, però. Molti cognomi somigliano molto ad altri cognomi.

### Metodi e proprietà di stringhe ed array

Oltre alla proprietà `.length` che hai conosciuto nell'ultimo esercizio, ci sono quattro metodi che potresti trovare utili. Ci sono molti modi per risolvere questo esercizio, ma questi ti porteranno alla soluzione più breve possibile.

`"...".split(substring)` suddivide una stringa usando un'altra stringa. Ad esempio:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` cattura una parte di un array, a partire dall'indice `start` e proseguendo fino alla fine dell'array. Gli elementi catturati vengono copiati in un NUOVO array, che ti viene restituito. Di fatto, questo rimuove i primi `start` elementi. Ad esempio:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` unisce gli elementi di un array usando la stringa fornita. Ad esempio:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` ti dice se una stringa termina con un'altra stringa. Ad esempio:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
