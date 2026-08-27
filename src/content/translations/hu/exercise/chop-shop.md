---
lang: "hu"
type: "exercise"
slug: "chop-shop"
title: "The Chop Shop"
status: "published"
source_repo: "i18n"
source_path: "locales/hu/curriculum/exercises/chop-shop"
en_md5: "eef10493cf2492b9996e60c7771b3a8f"
governance_sha: "accabaea"
content_version: "165ac6a0dcb7"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":"Beférnek?"},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":"Írj egy függvényt, amely eldönti, hogy egy új vendéget ki lehet-e szolgálni zárás előtt, a jelenlegi sor és a hátralévő idő alapján."}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":"Senki nincs a sorban"},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":"Senki nincs a sorban, bőven van idő."},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":"Későre jár"},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":"Senki nincs a sorban, de nincs elég idő."},{"key":"busyDayNoTime.name","english":"A full day","target":"Zsúfolt nap"},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":"Teli sor, és nincs elég idő."},{"key":"busyDayButTime.name","english":"Just squeezes in","target":"Épphogy befér"},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":"Zsúfolt nap, de épphogy van elég idő."},{"key":"stillEarly.name","english":"Still early","target":"Még korán van"},{"key":"stillEarly.description","english":"It's still early in the day.","target":"Még a nap elején járunk."},{"key":"cuttingItFine.name","english":"Just in time","target":"Éppen időben"},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":"Éppen időben értek oda!"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":"Hol kezdjem? A sorral vagy az új vendéggel?"},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":"Először számold ki, mennyi időt emészt fel a sor, aztán nézd meg, mi marad az új vendégre. Egy segédfüggvény, amely egy hajvágás nevét az időtartamára (percekben) alakítja, sokkal tisztábbá teszi ezt."},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":"Hogyan vonom ki az egyes hajvágások idejét a hátralévő időből?"},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":"Menj végig a soron. Minden hajvágásnál keresd ki az időtartamát a segédfüggvényeddel, és vond ki azt a napból hátralévő idő futó összegéből."},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":"Hogyan döntöm el, hogy az új hajvágás belefér-e?"},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":"Miután feldolgoztad a sort, hasonlítsd össze a hátralévő időt az új hajvágás időtartamával. Ha az új hajvágás ideje kisebb vagy egyenlő a hátralévő idővel, akkor belefér."}]}]}]
---

Egy kis fodrászszalont vezetsz, ahol a gyorsaság fontosabb, mint a minőség. A vendégek talán kissé egyenetlen frizurával távoznak, cserébe nem kell túl sokáig a székben ülniük.

Néhány különböző szolgáltatást kínálsz, a hajformázástól a teljes hajvágásig, és ezek különböző ideig tartanak. A vendégeket érkezési sorrendben szolgálod ki, időpontfoglalás nincs.

Ahogy közeledik a nap vége, tudnod kell, hogy van-e még időd azokra az új vendégekre, akik betérnek a szalonba.

Írj egy `canFitIn` (befér-e) nevű függvényt, amely három bemenetet kap:

- Az első: a már sorban álló hajvágások (stringekből álló lánc).
- A második: a hajvágás, amelyet az új vendég szeretne (string).
- A harmadik: a napból hátralévő percek száma (szám).

Adj vissza egy boolean értéket arról, hogy befér-e a vendég.

Az alábbi stílusokat kínálod:

- Mohawk: 20 perc
- Slicked-Back Pixie: 15 perc
- Bob: 25 perc
- Shave and Polish: 15 perc
- Afro Trim: 45 perc
- Up-do: 30 perc

### Egymásba ágyazott láncok

Ez az első feladat, ahol olyan lánccal dolgozol, amely elemként más láncokat tartalmaz. Ezeket egymásba ágyazott láncoknak hívjuk. Az egymásba ágyazott láncok ugyanolyanok, mint bármelyik másik lánc, csak nem stringeket vagy számokat tartalmaznak, hanem más láncokat.

Nézd meg a `cuts` (vágások) láncot. Ez más láncokat tartalmaz, minden hajvágáshoz egyet, és ezek mindegyikének két eleme van: egy név és egy időtartam.

Ezt a legkönnyebb úgy elképzelni, hogy először a belső láncokra, a név-időtartam párokra gondolsz, majd arra, hogy ezek együtt egy másik láncban vannak.

Az indexelés ugyanúgy működik, mint mindenhol máshol, de az indexeket egymás után is írhatod, például így...

```javascript
const cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
