---
lang: "it"
type: "exercise"
slug: "adventures-in-poetry"
title: "Avventure nella poesia"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/exercises/adventures-in-poetry"
en_md5: "444b0a68f443ccb86f15cc0f43fb63d7"
governance_sha: "e619d11e"
content_version: "cbb48c3ae628"
published_at: "2026-09-01"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"endOfPath","english":"The poet has walked off the end of the path. Something should have stopped the walk before now.","target":"Il poeta è uscito dal sentiero. Qualcosa avrebbe dovuto fermare la camminata prima di ora."},{"key":"isEmojiString","english":"You can only check whether a piece of text is an emoji.","target":"Puoi solo controllare se una stringa è un'emoji."},{"key":"reciteString","english":"You can only recite a piece of text.","target":"Puoi solo recitare una stringa."}]},{"name":"checks","rows":[{"key":"notRecited","english":"The poet never recited anything. Make sure you call <code>recite()</code> once the walk is over.","target":"Il poeta non ha recitato nulla. Assicurati di chiamare <code>recite()</code> una volta terminata la camminata."},{"key":"wrongPoem","english":"The poet recited \"{{got}}\" but the poem should be \"{{expected}}\".","target":"Il poeta ha recitato \"{{got}}\" ma la poesia dovrebbe essere \"{{expected}}\"."},{"key":"noFunctions","english":"Write your solution as one walk, without defining any functions of your own.","target":"Scrivi la soluzione come un'unica camminata, senza definire nessuna funzione."},{"key":"reciteOnce","english":"The poet should recite the poem once, after the walk has finished.","target":"Il poeta dovrebbe recitare la poesia una sola volta, dopo che la camminata è terminata."},{"key":"tooDeeplyNested","english":"Your code nests too deeply. You are only allowed two levels, so a loop with an <code>if</code> inside it, but nothing inside that <code>if</code>.","target":"Il codice è annidato troppo in profondità. Puoi usare solo due livelli: quindi un ciclo con un <code>if</code> al suo interno, ma niente all'interno di quell'<code>if</code>."},{"key":"noAndOrNot","english":"This exercise is about a different way of making decisions, so <code>&&</code> and <code>!</code> are not allowed here. <code>||</code> is fine.","target":"Questo esercizio riguarda un modo diverso di prendere decisioni, quindi <code>&&</code> e <code>!</code> non sono ammessi qui. <code>||</code> invece è ammesso."},{"key":"needsContinue","english":"Your solution needs to use <code>continue</code>.","target":"La soluzione deve usare <code>continue</code>."},{"key":"needsBreak","english":"Your solution needs to use <code>break</code>.","target":"La soluzione deve usare <code>break</code>."},{"key":"tooManyLines","english":"Your solution is longer than it needs to be. See if you can get it down by handling each kind of square in one place.","target":"La soluzione è più lunga del necessario. Cerca di ridurla gestendo ogni tipo di casella in un unico punto."}]},{"name":"tasks","rows":[{"key":"collectThePoem.name","english":"Collect the poem and recite it","target":"Raccogli la poesia e recitala"},{"key":"collectThePoem.description","english":"Walk along the path, gather the words of the poem, stop in the right place, and recite what you gathered.","target":"Cammina lungo il sentiero, raccogli le parole della poesia, fermati nel punto giusto e recita ciò che hai raccolto."},{"key":"solveTightly.name","english":"Tighten it up","target":"Snellisci il codice"},{"key":"solveTightly.description","english":"Solve the same walk, but get your code down to the line limit.","target":"Risolvi la stessa camminata, ma riduci il codice al limite di righe."}]},{"name":"scenarios","rows":[{"key":"hope.name","english":"A path with gaps","target":"Un sentiero con spazi vuoti"},{"key":"hope.description","english":"Six words with bare grass between them, and a checkered flag at the end.","target":"Sei parole con solo erba tra loro, e una bandiera a scacchi alla fine."},{"key":"wandered.name","english":"Scenery on the path","target":"Decorazioni sul sentiero"},{"key":"wandered.description","english":"The same idea, but now there are plants and creatures growing between the words.","target":"La stessa idea, ma ora ci sono piante e creature che crescono tra le parole."},{"key":"mists.name","english":"Scenery next to the flag","target":"Decorazioni vicino alla bandiera"},{"key":"mists.description","english":"A leaf sits on the square just before the checkered flag.","target":"Una foglia si trova sulla casella appena prima della bandiera a scacchi."},{"key":"notLost.name","english":"Exactly seven words","target":"Esattamente sette parole"},{"key":"notLost.description","english":"A line with seven words on it, so the poet stops counting before the flag.","target":"Una riga con sette parole, quindi il poeta smette di contare prima della bandiera."},{"key":"hopeContinued.name","english":"A poem that is too long","target":"Una poesia troppo lunga"},{"key":"hopeContinued.description","english":"This path holds more than seven words, so the poet stops part way through the line.","target":"Questo sentiero contiene più di sette parole, quindi il poeta si ferma a metà della riga."},{"key":"highlands.name","english":"An apostrophe","target":"Un apostrofo"},{"key":"highlands.description","english":"A line of Burns, with an apostrophe sitting on its own square.","target":"Una riga di Burns, con un apostrofo su una casella tutta sua."},{"key":"heartScenery.name","english":"Scenery after an apostrophe","target":"Decorazioni dopo un apostrofo"},{"key":"heartScenery.description","english":"A mushroom grows between the apostrophe and the word it joins to, so whatever remembers the spacing has to survive a skipped square.","target":"Un fungo cresce tra l'apostrofo e la parola a cui si unisce, quindi ciò che tiene traccia della spaziatura deve sopravvivere a una casella saltata."},{"key":"tyger.name","english":"A comma","target":"Una virgola"},{"key":"tyger.description","english":"A line of Blake, with a comma sitting on its own square.","target":"Una riga di Blake, con una virgola su una casella tutta sua."},{"key":"pleure.name","english":"Bare grass to begin","target":"Solo erba all'inizio"},{"key":"pleure.description","english":"A line of Verlaine, with a few empty squares before the poem starts.","target":"Una riga di Verlaine, con alcune caselle vuote prima che inizi la poesia."},{"key":"yasegaeru.name","english":"A line of Issa","target":"Una riga di Issa"},{"key":"yasegaeru.description","english":"Seven words of haiku, with a line limit to keep your guards tight.","target":"Sette parole di haiku, con un limite di righe per tenere i controlli stretti."}]},{"name":"hints","rows":[{"key":"scenery.question","english":"The plants and creatures are ending up in my poem.","target":"Le piante e le creature finiscono nella mia poesia."},{"key":"scenery.answer","english":"Only words belong in the poem. Everything else on the path needs to be left behind, which means your loop has to get to the next square without adding anything.","target":"Solo le parole appartengono alla poesia. Tutto il resto sul sentiero deve essere lasciato indietro, il che significa che il ciclo deve passare alla casella successiva senza aggiungere nulla."},{"key":"flagSkipped.question","english":"My poet never stops walking.","target":"Il mio poeta non smette mai di camminare."},{"key":"flagSkipped.answer","english":"The checkered flag is an emoji too. If you deal with scenery before you deal with the flag, the flag gets treated as scenery and the walk never ends. Order matters.","target":"Anche la bandiera a scacchi è un'emoji. Se gestisci le decorazioni prima della bandiera, la bandiera viene trattata come decorazione e la camminata non finisce mai. L'ordine è importante."},{"key":"spacing.question","english":"My words are all squashed together, or there is a space at the start.","target":"Le mie parole sono tutte attaccate, oppure c'è uno spazio all'inizio."},{"key":"spacing.answer","english":"Think about when a space is needed. It is needed **between** two words, not before the first one, so something has to remember whether anything has been written yet.","target":"Pensa a quando è necessario uno spazio. È necessario **tra** due parole, non prima della prima, quindi qualcosa deve ricordare se è già stato scritto qualcosa."},{"key":"apostrophe.question","english":"I am getting `heart ' s` instead of `heart's`.","target":"Ottengo `heart ' s` invece di `heart's`."},{"key":"apostrophe.answer","english":"An apostrophe joins the words on either side of it, so no space belongs before it or after it. A comma is the opposite way round, with no space before it but a space after.","target":"Un apostrofo unisce le parole ai suoi lati, quindi non deve esserci spazio né prima né dopo. Una virgola è il contrario: nessuno spazio prima ma uno spazio dopo."},{"key":"reciteOnce.question","english":"Why can I only call `recite()` once?","target":"Perché posso chiamare `recite()` solo una volta?"},{"key":"reciteOnce.answer","english":"The poet recites the finished poem, so there is only one moment where that can happen. There is more than one way for the walk to end, and all of them need to reach that same moment.","target":"Il poeta recita la poesia finita, quindi c'è solo un momento in cui può succedere. Ci sono diversi modi in cui può finire la camminata, e tutti devono arrivare a quello stesso momento."}]},{"name":"describers","rows":[{"key":"move","english":"walked forward and found ${return}","target":"è avanzato e ha trovato ${return}"},{"key":"isEmoji","english":"checked whether ${arg1} was an emoji","target":"ha controllato se ${arg1} era un'emoji"},{"key":"recite","english":"recited \"${arg1}\"","target":"ha recitato \"${arg1}\""}]},{"name":"functions","rows":[{"key":"move.description","english":"Walks the poet forward onto the next square and **returns** whatever was on it.","target":"Fa avanzare il poeta sulla casella successiva e **restituisce** tutto ciò che c'era su di essa."},{"key":"move.category","english":"Movement","target":"Movimento"},{"key":"isEmoji.description","english":"**Returns** `true` if the thing you pass it is an emoji.","target":"**Restituisce** `true` se quello che passi è un'emoji."},{"key":"isEmoji.category","english":"Checks","target":"Controlli"},{"key":"recite.description","english":"Makes the poet recite a poem out loud.","target":"Fa recitare al poeta una poesia ad alta voce."},{"key":"recite.category","english":"Action","target":"Azione"}]}]}]
---

Stai creando un gioco di poesia con un robot chiamato «Avventure nella poesia». Come primo passo, devi programmare il robot in modo che, mentre cammina, raccolga le parole e poi reciti la poesia alla fine.

Ogni casella contiene una di queste quattro cose:

1. Niente (`""`)
2. Una **parola** della poesia.
3. Un elemento decorativo come una foglia o una farfalla (un'emoji).
4. Una bandiera a scacchi, che dice al robot di fermarsi.

Per aiutarti, hai a disposizione alcune funzioni. Per prima cosa, hai la funzione `move()`, che dice al robot poeta di avanzare sulla casella successiva e restituisce tutto ciò che c'era su di essa. Hai poi una funzione `isEmoji(thing)`, che restituisce un valore booleano che ti dice se la stringa che passi è un'emoji. Infine hai una funzione `recite(poem)`, che devi usare con la poesia finale.

Il tuo compito è percorrere il sentiero, comporre la poesia e poi recitarla.

## Le regole

- Le **parole** vanno nella poesia, con uno **spazio tra una parola e l'altra**.
- Gli **elementi decorativi** non fanno parte della poesia e vanno ignorati.
- Un **apostrofo** occupa una casella tutta sua e unisce le parole ai suoi lati. `heart`, poi `'` e poi `s` diventa `heart's`.
- Anche la **virgola** occupa una casella tutta sua. Si attacca alla parola che la precede, ma dopo c'è comunque uno spazio.
- Il poeta smette di camminare quando raggiunge la **bandiera a scacchi**, oppure non appena ha raccolto **sette parole**. Vale quella che si verifica per prima.
- Ogni volta che il poeta si ferma, in qualunque modo lo faccia, recita ciò che ha raccolto. Puoi chiamare `recite()` **solo una volta**.

## Restrizioni

Ci sono molti modi per risolvere questo esercizio, ma vogliamo che tu usi le parole chiave `continue` e `break` che hai imparato di recente, quindi ecco alcune regole:

1. La soluzione deve usare sia `continue` che `break`.
2. Non puoi usare `&&` o `!` nella soluzione.
3. Non puoi scrivere nessuna funzione ausiliaria.
4. Puoi usare al massimo due livelli di indentazione:

```javascript

// Consentito: 2 livelli di indentazione
repeat() {
  if(...) {
    //...
  }
}

// Non consentito: 3 livelli di indentazione
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Questo significa che la soluzione che scriverai sarà piuttosto «piatta».

Buona fortuna e divertiti!
