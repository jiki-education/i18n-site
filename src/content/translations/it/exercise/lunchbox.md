---
lang: "it"
type: "exercise"
slug: "lunchbox"
title: "Portapranzo"
status: "published"
source_repo: "i18n"
source_path: "locales/it/curriculum/exercises/lunchbox"
en_md5: "b6274dbfc7f2e050c514feb7da65b588"
governance_sha: "3af8e97d"
content_version: "7bb80bec7f48"
published_at: "2026-08-28"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"La soluzione ha troppe righe di codice. Riesci a renderla più breve?"}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":"Prepara il portapranzo"},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a backpack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the backpack.","target":"Dividi gli oggetti tra il portapranzo e lo zaino: fai entrare nel portapranzo il maggior numero possibile di oggetti senza superare la capienza, e metti tutto il resto nello zaino."},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":"Risolvi in 16 righe di codice"},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":"Riesci a risolvere questo esercizio con sole 16 righe di codice?"}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":"Tutto ci sta"},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the backpack stays empty.","target":"Un portapranzo capiente in cui ogni oggetto trova posto, quindi lo zaino resta vuoto."},{"key":"packTheMost.name","english":"Fit the most","target":"Fai entrare il più possibile"},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the backpack.","target":"Lo spazio è limitato, quindi gli oggetti piccoli vanno nel portapranzo e quelli grandi restano nello zaino."},{"key":"justTheSnack.name","english":"Just the snack","target":"Solo lo spuntino"},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the backpack.","target":"Solo l'oggetto più piccolo trova posto; il resto va nello zaino."},{"key":"nothingFits.name","english":"Nothing fits","target":"Non entra niente"},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the backpack.","target":"Anche l'oggetto più piccolo è troppo grande, quindi tutto finisce nello zaino."},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":"Portapranzo vuoto"},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the backpack come back empty.","target":"Non ci sono affatto oggetti, quindi sia il portapranzo sia lo zaino restano vuoti."},{"key":"bonus1.name","english":"16 lines of code","target":"16 righe di codice"},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":"Risolvi l'esercizio con sole 16 righe di codice."}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":"Come faccio a ottenere il nome e la dimensione di ogni oggetto?"},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":"Ogni oggetto è una coppia. La prima parte è il nome e la seconda è la dimensione, quindi puoi leggerli dall'oggetto uno alla volta."},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":"Come faccio a far entrare il maggior numero possibile di oggetti?"},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":"Pensa a quali oggetti aggiungere per primi. Gli oggetti più piccoli lasciano più spazio agli altri, quindi conviene iniziare da loro e lasciare i più grandi per dopo."},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":"Gli oggetti sono ordinati dal più grande al più piccolo: come faccio a esaminarli dal più piccolo al più grande?"},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":"Esiste un metodo degli array che restituisce una copia invertita di un array. Inverti prima gli oggetti, poi lavora su di essi in questo nuovo ordine."},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":"Come faccio a decidere dove va ogni oggetto?"},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the backpack.","target":"Tieni un totale progressivo delle dimensioni che hai aggiunto. Prima di aggiungere un oggetto, controlla se il totale più la sua dimensione rientra ancora nella capienza. Se sì, va nel portapranzo, altrimenti va nello zaino."}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":"Restituisce una copia dell'array con gli elementi in ordine inverso, senza modificare l'originale."},{"key":"toReversed.category","english":"Arrays","target":"Array"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Aggiunge un elemento alla fine di un array, modificando l'array stesso."},{"key":"push.category","english":"Arrays","target":"Array"}]}]}]
---

Da bambino, ogni giorno preparavo il portapranzo per la scuola. Mia madre mi metteva a disposizione gli oggetti (ordinati con cura dal più grande al più piccolo) e io cercavo di farci stare il più possibile, ma ovviamente il portapranzo poteva contenerne solo una certa quantità. Tutto quello che non ci stava dovevo metterlo nello zaino e portarlo con me tutto il giorno, invece di lasciarlo nell'armadietto.

In questo esercizio, il tuo compito è creare un algoritmo che stabilisca cosa posso mettere nel portapranzo e cosa devo mettere nello zaino.

Devi scrivere una funzione chiamata `packLunch(items, capacity)` (prepara il pranzo), che accetta due input: l'array di oggetti (dal più grande al più piccolo) e la capienza del portapranzo `capacity` (un numero).

L'array di oggetti è un array annidato: ogni oggetto è a sua volta un array con due elementi: il nome dell'oggetto e la sua dimensione. Gli oggetti sono sempre ordinati dal più grande al più piccolo. Per esempio, l'array di oggetti potrebbe essere:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

Il portapranzo ha una capienza massima. Devi capire quali oggetti possono entrare nel portapranzo. Fai entrare il maggior numero possibile di oggetti. Tutto il resto deve andare nello zaino.

La funzione deve restituire un array contenente due elementi. Il primo elemento è un array con gli oggetti per il portapranzo, il secondo con gli oggetti per lo zaino. Entrambi gli array devono essere ordinati dal più piccolo al più grande.

Per esempio, per l'array qui sopra, con una capienza di 20, dovresti restituire:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Metodi utili

Come in tutti gli esercizi di questa sezione, ti servirà il metodo `.push(element)` per costruire gli array.

Hai anche un nuovo metodo chiamato `[...].toReversed()`, che crea una copia di un array con tutti gli elementi in ordine inverso. Per esempio:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Non devi usarlo per forza, ma potrebbe esserti utile.

Buon divertimento!
