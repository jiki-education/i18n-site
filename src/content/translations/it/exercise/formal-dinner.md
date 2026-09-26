---
lang: "it"
type: "exercise"
slug: "formal-dinner"
title: "Cena di gala"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/exercises/formal-dinner"
en_md5: "b0628bfad9d662c21ab91a40b9e5bc2b"
governance_sha: "4caf34be"
content_version: "24da7eb89872"
published_at: "2026-09-26"
forum_topic_id: 1288
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Trova il tavolo dell'ospite"},{"key":"findGuestTable.description","english":"Write a function that takes the array of guests' full names, the matching array of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Scrivi una funzione che prende l'array dei nomi completi degli invitati, l'array corrispondente dei nomi dei tavoli e un ospite in arrivo annunciato con un titolo ed il proprio cognome. Restituisci il nome del tavolo a cui è seduto quell'ospite, oppure `\"No table found\"` se non è nello schema dei posti a tavola."},{"key":"solveTightly.name","english":"Solve it in 9 lines","target":"Risolvilo in 9 righe"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Try and solve this in 9 lines of code or fewer.","target":"Bonus: questo può essere scritto in modo molto più compatto di quanto potresti aspettarti. Prova a risolverlo in 9 righe di codice o meno."}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Schema dei posti a tavola vuoto"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Nessuno è seduto da nessuna parte quando lo schema è vuoto."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad viene respinto"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"Il nome non è nello schema dei posti a tavola."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad viene accompagnato al suo posto"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt è nello schema, quindi il signor Pitt riceve il suo tavolo."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"Cavaliere del regno"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Un titolo diverso, ed un ospite che non è il primo nello schema."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Signor Bond, presumo"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond è nello schema."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Hmmm... Signor Bond, presumo"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"Solo Jason Bourne è nello schema, non James Bond."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Non proprio il signor Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Né Ada Spitt né Hugo Ross-Pitt sono il signor Pitt, quindi non ha un posto qui."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"Che ne dici di un barone?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Il barone Lloyd Webber ha due parole nel proprio cognome."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Mark è il barone?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Un Webber diverso non conta: il cognome deve corrispondere per intero."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"Pulito ed ordinato: Lord Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time try and solve this in 9 lines of code or fewer.","target":"Lo stesso schema dei posti a tavola di prima, ma questa volta prova a risolverlo in 9 righe di codice o meno."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two arrays relate to each other?","target":"Come sono collegati tra loro i due array?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"Sono una coppia. Il primo invitato siede al primo tavolo, il secondo invitato siede al secondo tavolo, e così via. Quindi non basta sapere *che* un invitato è nello schema: devi sapere *dove* si trova nello schema."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"L'ospite dice «Mr Pitt» ma lo schema dice «Brad Pitt». Come faccio a confrontarli?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Quelle due stringhe non saranno mai uguali, quindi un confronto diretto non ti porterà da nessuna parte. Pensa a quale parte di ciò che l'ospite ha annunciato compare effettivamente nello schema, ed in quale punto della voce dello schema ti aspetteresti di trovarla."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"Un cognome potrebbe corrispondere all'ospite sbagliato?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Potrebbe eccome. Leggi ad alta voce «Ada Spitt» e «Hugo Ross-Pitt», e poi pensa al signor Pitt. Chiediti cosa rende un cognome un vero cognome in quella riga, piuttosto che solo alcune lettere che si trovano per caso alla fine."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"Cosa devo restituire quando nessuno corrisponde?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"La stringa `\"No table found\"`, così com'è scritta. La parte più difficile è sapere quando puoi dirla. Se hai controllato il primissimo invitato nello schema e non è lui, sai già con certezza che non è seduto da nessuna parte?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can get down to 9 lines of code.","target":"Continua! Vedi se riesci a scendere a 9 righe di codice."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in an array - the same length property you've used on strings","target":"Il numero di elementi in un array: la stessa proprietà length che hai usato sulle stringhe"},{"key":"length.category","english":"Array Operations","target":"Operazioni sugli array"},{"key":"split.description","english":"Split a string into an array of pieces, breaking at each separator","target":"Divide una stringa in un array di parti, spezzandola a ogni separatore"},{"key":"split.category","english":"String Operations","target":"Operazioni sulle stringhe"},{"key":"slice.description","english":"Make a new array from part of an array, starting at a position","target":"Crea un nuovo array da una parte di un array, a partire da una posizione"},{"key":"slice.category","english":"Array Operations","target":"Operazioni sugli array"},{"key":"join.description","english":"Join the items of an array into one string, with a separator between them","target":"Unisci gli elementi di un array in un'unica stringa, con un separatore tra loro"},{"key":"join.category","english":"Array Operations","target":"Operazioni sugli array"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string","target":"Controlla se una stringa termina con una stringa più corta"},{"key":"endsWith.category","english":"String Operations","target":"Operazioni sulle stringhe"}]}]}]
---

Sei tornato al tuo lavoro occasionale come buttafuori. È la sera dopo l'After Party, e c'è un'altra festa. Questa volta è una cena di gala, quindi stasera sei meno il tipo grosso alla porta e più quello con taccuino e panciotto.

Questo non è decisamente il posto per usare **solo** il tuo nome. Anzi, non è proprio il posto per usare il tuo nome. Qui, tutti vengono chiamati con un titolo (_honorific_ in inglese) (Miss, Mr, Dr, ecc.) ed il cognome.

Gli organizzatori ti hanno consegnato lo schema dei posti a tavola sotto forma di due array separati. Un array contiene i nomi completi degli invitati. L'altro array contiene il nome del tavolo dove ogni invitato è seduto (ogni tavolo ha il nome di alberi e fiori). Come per "Dopo la festa", i due array corrispondono: l'invitato numero 3 del primo array siede al tavolo numero 3 del secondo.

Quando il signor Pitt arriva, devi riconoscere che è il "Brad Pitt" presente nella tua lista e indicargli il tavolo assegnato.

Scrivi una funzione chiamata `tableFor` (cerca il tavolo a cui un ospite è seduto). La funzione ha tre input:

- Il primo è l'array dei nomi completi degli invitati, come stringhe
- Il secondo è l'array dei nomi dei tavoli, nello stesso ordine degli invitati
- Il terzo è l'ospite in arrivo, formattato come un titolo seguito dal cognome (ad es. "Mr Pitt")

Indica il nome del tavolo a cui l'ospite è assegnato. Se non compare nello schema dei posti, usa la stringa `"No table found"` (niente soluzioni improvvisate, qui!).

Il titolo è sempre un elemento unico (Miss, Mr, Dr) e ciò che viene dopo è il cognome dell'ospite. La maggior parte dei cognomi è formata da una sola parola, ma alcuni cognomi "importanti" (o particolari) ne hanno due.

Fai attenzione: molti cognomi si assomigliano.

### Metodi e proprietà di stringhe ed array

Oltre alla proprietà `.length` che hai visto nell'ultimo esercizio, ci sono quattro metodi che possono tornarti utili. Ci sono diversi modi per risolvere questo esercizio, ma questi ti permetteranno di arrivare alla soluzione più breve.

`"...".split(substring)` divide una stringa usando un'altra stringa. Ad esempio:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` estrae una parte di un array, a partire dall'indice `start` e proseguendo fino alla fine dell'array. Gli elementi estratti vengono copiati in un NUOVO array, che ti viene restituito. Di fatto, questo rimuove i primi `start` elementi. Ad esempio:

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
