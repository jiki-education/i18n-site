---
lang: "it"
type: "exercise"
slug: "formal-dinner"
title: "Cena di gala"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/exercises/formal-dinner"
en_md5: "8d6a2f3dd90b3a487a6bf855f31ef025"
governance_sha: "7b8066c"
content_version: "a65e14024220"
published_at: "2026-08-09"
forum_topic_id: 1288
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Trova il tavolo dell'ospite"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Scrivi una funzione che riceva la lista dei nomi completi degli invitati, la lista corrispondente dei nomi dei tavoli e l'ospite in arrivo, indicato con il titolo e il cognome. Restituisci il nome del tavolo a cui è assegnato quell'ospite, oppure `\"No table found\"` se non compare nello schema dei posti a tavola."},{"key":"solveTightly.name","english":"Solve it tightly","target":"Risolvilo in modo conciso"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"Bonus: questo può essere scritto in modo molto più conciso di quanto potresti aspettarti. Riesci a far stare l'intera soluzione in una manciata di righe?"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Schema dei posti vuoto"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Nessuno è seduto da nessuna parte quando lo schema è vuoto."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Brad viene mandato via"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"Il nome non è nello schema dei posti a tavola."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Brad viene accompagnato al suo tavolo"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Brad Pitt è nello schema dei posti, quindi gli viene assegnato il suo tavolo."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"Cavaliere del Regno Unito"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Un titolo diverso e un ospite che non occupa il primo posto nello schema dei posti."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Dunque lei è il signor Bond, immagino."},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"James Bond è nello schema dei posti."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Hmmm... dunque lei è il signor Bond, immagino."},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"Solo Jason Bourne è nello schema dei posti, non James Bond."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Non è il signor Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Né la signora Ada Spitt né il signor Hugo Ross-Pitt sono il signor Pitt, quindi non hanno un posto qui."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"E se fosse un barone?"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Il barone Lloyd Webber ha un cognome composto da due parole."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Mark è un barone?"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Un'altra persona con il cognome Webber non vale: il cognome deve essere identico."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"La persona pulita e ordinata è Lord Doyle."},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time your solution has to fit into a much smaller number of lines.","target":"Lo stesso schema dei posti di prima, ma questa volta devi scrivere la soluzione in molte meno righe."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"Come sono collegate le due liste tra loro?"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"Sono una coppia. Il primo invitato siede al primo tavolo, il secondo al secondo, e così via. Quindi non basta sapere *che* un invitato è nello schema dei posti: devi sapere *dove* si trova nello schema dei posti."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"L'ospite si presenta come \"Mr Pitt\", ma nello schema dei posti compare \"Brad Pitt\". Come faccio a capire che sono la stessa persona?"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Le due stringhe non saranno mai identiche, quindi un confronto diretto non serve. Devi capire quale parte del nome annunciato dall'ospite compare davvero nello schema dei posti e in quale punto della voce dello schema ti aspetteresti di trovarla."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"Un cognome potrebbe corrispondere all'ospite sbagliato?"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Assolutamente sì. Leggi «Ada Spitt» e «Hugo Ross-Pitt» ad alta voce, e poi pensa al signor Pitt. Chiediti che cosa, in quella riga, identifica davvero il cognome, invece di prendere semplicemente delle lettere che capitano alla fine."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"Che cosa devo restituire quando nessun nome corrisponde?"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"Devi restituire la stringa `\"No table found\"`, esattamente così com'è. La parte difficile è capire quando puoi farlo. Se controlli il primo invitato nello schema e non è quello giusto, puoi già dire con certezza che l'ospite non è seduto da nessuna parte?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Continua! Vedi se riesci a risolverlo in meno righe."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"Il numero di elementi in un array: la stessa proprietà length che hai usato sulle stringhe (fornito dal livello stdlib)"},{"key":"length.category","english":"List Operations","target":"Operazioni su array"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"Suddivide una stringa in una lista di parti, separandola in corrispondenza di ogni separatore (fornito dal livello stdlib)"},{"key":"split.category","english":"String Operations","target":"Operazioni su stringhe"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"Crea un nuovo array da una parte di un array, a partire da una posizione (fornito dal livello stdlib)"},{"key":"slice.category","english":"List Operations","target":"Operazioni su array"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"Unisce gli elementi di un array in una stringa, con un separatore tra loro (fornito dal livello stdlib)"},{"key":"join.category","english":"List Operations","target":"Operazioni su array"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"Verifica se una stringa termina con un'altra stringa (fornito dal livello stdlib)"},{"key":"endsWith.category","english":"String Operations","target":"Operazioni su stringhe"}]}]}]
---

Sei tornato al tuo lavoro occasionale come buttafuori. È la sera dopo l'After Party, e c'è un'altra festa. Questa volta è una cena di gala, quindi stasera sei meno il tipo grosso alla porta e più quello con taccuino e panciotto.

Questo non è decisamente il posto per usare **solo** il tuo nome. Anzi, non è proprio il posto per usare il tuo nome. Qui, tutti vengono chiamati con un titolo (_honorific_ in inglese) (Miss, Mr, Dr, ecc.) ed il cognome.

Gli organizzatori ti hanno consegnato lo schema dei posti a tavola sotto forma di due liste separate. Una lista contiene i nomi completi degli invitati. L'altra lista contiene il nome del tavolo dove ogni invitato è seduto (ogni tavolo ha il nome di alberi e fiori). Come per "Dopo la festa", le due liste corrispondono: l'invitato numero 3 della prima lista siede al tavolo numero 3 della seconda.

Quando il signor Pitt arriva, devi riconoscere che è il "Brad Pitt" presente nella tua lista e indicargli il tavolo assegnato.

Scrivi una funzione chiamata `tableFor` (cerca il tavolo a cui un ospite è seduto). La funzione ha tre input:

- Il primo è la lista dei nomi completi degli invitati, come stringhe
- Il secondo è la lista dei nomi dei tavoli, nello stesso ordine degli invitati
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
