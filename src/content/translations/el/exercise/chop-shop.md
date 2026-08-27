---
lang: "el"
type: "exercise"
slug: "chop-shop"
title: "Το κουρείο"
status: "published"
source_repo: "i18n"
source_path: "locales/el/curriculum/exercises/chop-shop"
en_md5: "eef10493cf2492b9996e60c7771b3a8f"
governance_sha: "accabaea"
content_version: "6a5cba5090d7"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"canFitIn.name","english":"Can You Fit Them In?","target":"Χωράνε;"},{"key":"canFitIn.description","english":"Write a function that determines if a new customer can be served before closing time, given the current queue and time remaining.","target":"Γράψε μια συνάρτηση που υπολογίζει αν ένας νέος πελάτης μπορεί να εξυπηρετηθεί πριν το κλείσιμο, με βάση την τρέχουσα ουρά και τον χρόνο που απομένει."}]},{"name":"scenarios","rows":[{"key":"emptyQueue.name","english":"No one in the queue","target":"Κανείς στην ουρά"},{"key":"emptyQueue.description","english":"No-one in the queue, plenty of time.","target":"Κανείς στην ουρά, άφθονος χρόνος."},{"key":"emptyQueueButNoTime.name","english":"Late in the day","target":"Αργά την ημέρα"},{"key":"emptyQueueButNoTime.description","english":"No-one in the queue but not enough time.","target":"Κανείς στην ουρά αλλά δεν υπάρχει αρκετός χρόνος."},{"key":"busyDayNoTime.name","english":"A full day","target":"Μια γεμάτη μέρα"},{"key":"busyDayNoTime.description","english":"A full queue and not enough time.","target":"Γεμάτη ουρά και όχι αρκετός χρόνος."},{"key":"busyDayButTime.name","english":"Just squeezes in","target":"Μόλις που χωράει"},{"key":"busyDayButTime.description","english":"A full day but there's just enough time.","target":"Μια γεμάτη μέρα αλλά υπάρχει μόλις αρκετός χρόνος."},{"key":"stillEarly.name","english":"Still early","target":"Ακόμα νωρίς"},{"key":"stillEarly.description","english":"It's still early in the day.","target":"Είναι ακόμα νωρίς μέσα στη μέρα."},{"key":"cuttingItFine.name","english":"Just in time","target":"Μόλις στην ώρα"},{"key":"cuttingItFine.description","english":"They've made it just in time!","target":"Πρόλαβαν μόλις στην ώρα!"}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where should I start. The queue, or the new customer?","target":"Από πού να ξεκινήσω; Από την ουρά ή από τον νέο πελάτη;"},{"key":"whereToStart.answer","english":"First work out how much time the queue will eat up, then see what's left over for the new customer. A helper that turns a haircut name into its duration (in minutes) will make this much cleaner.","target":"Πρώτα υπολόγισε πόσο χρόνο θα χρειαστεί η ουρά, μετά δες τι απομένει για τον νέο πελάτη. Μια βοηθητική συνάρτηση που μετατρέπει το όνομα ενός κουρέματος σε διάρκεια (σε λεπτά) θα το κάνει πολύ πιο καθαρό."},{"key":"subtractQueueTime.question","english":"How do I subtract each haircut's time from the remaining time?","target":"Πώς αφαιρώ τον χρόνο κάθε κουρέματος από τον χρόνο που απομένει;"},{"key":"subtractQueueTime.answer","english":"Loop through the queue. For each haircut, look up its duration with your helper and subtract that from your running total of time left in the day.","target":"Επανέλαβε για κάθε κούρεμα στην ουρά. Για κάθε κούρεμα, βρες τη διάρκειά του με τη βοηθητική συνάρτηση και αφαίρεσέ την από το συνολικό χρόνο που απομένει."},{"key":"decideIfFits.question","english":"How do I decide if the new haircut fits?","target":"Πώς αποφασίζω αν χωράει το νέο κούρεμα;"},{"key":"decideIfFits.answer","english":"After processing the queue, compare the remaining time against the duration of the new haircut. If the new haircut's time is less than or equal to the time left, it fits.","target":"Αφού επεξεργαστείς την ουρά, σύγκρινε τον χρόνο που απομένει με τη διάρκεια του νέου κουρέματος. Αν ο χρόνος του νέου κουρέματος είναι μικρότερος ή ίσος με τον χρόνο που απομένει, χωράει."}]}]}]
---

Διατηρείς ένα μικρό κομμωτήριο που δίνει έμφαση στην ταχύτητα και όχι στην ποιότητα. Οι πελάτες μπορεί να φεύγουν λίγο ατημέλητοι, αλλά τουλάχιστον δεν κάθονται πολλή ώρα στην καρέκλα.

Προσφέρεις μερικές διαφορετικές υπηρεσίες, από χτένισμα μέχρι πλήρη κουρέματα, που χρειάζονται διαφορετικό χρόνο για να ολοκληρωθούν. Το κομμωτήριο λειτουργεί με σειρά προτεραιότητας. Δεν υπάρχει σύστημα ραντεβού.

Καθώς πλησιάζει το τέλος της ημέρας, χρειάζεσαι έναν τρόπο να ξέρεις αν έχεις χρόνο για τους νέους πελάτες που μπαίνουν στο μαγαζί.

Γράψε μια συνάρτηση που ονομάζεται `canFitIn` (χωράει) και δέχεται τρεις εισόδους:

- Η πρώτη είναι τα κουρέματα που έχεις ήδη στην ουρά (ένας πίνακας από συμβολοσειρές)
- Η δεύτερη είναι το κούρεμα που θέλει ο νέος πελάτης (μια συμβολοσειρά)
- Η τρίτη είναι ο αριθμός των λεπτών που απομένουν μέχρι το τέλος της ημέρας (ένας αριθμός)

Επίστρεψε μια τιμή Boolean για το αν μπορείς να χωρέσεις τον πελάτη.

Τα στυλ που προσφέρεις είναι:

- Mohawk: 20 λεπτά
- Slicked-Back Pixie: 15 λεπτά
- Bob: 25 λεπτά
- Shave and Polish: 15 λεπτά
- Afro Trim: 45 λεπτά
- Up-do: 30 λεπτά

### Εμφωλευμένοι πίνακες

Αυτή είναι η πρώτη άσκηση όπου έχεις να κάνεις με έναν πίνακα που περιέχει άλλους πίνακες ως στοιχεία. Αυτούς τους ονομάζουμε «εμφωλευμένους πίνακες». Οι εμφωλευμένοι πίνακες είναι ίδιοι με κάθε άλλον πίνακα, μόνο που αντί να περιέχουν συμβολοσειρές ή αριθμούς, περιέχουν άλλους πίνακες.

Ρίξε μια ματιά στον πίνακα `cuts` (κουρέματα). Περιέχει άλλους πίνακες, έναν για κάθε κούρεμα, και καθένας από αυτούς τους πίνακες έχει δύο στοιχεία, ένα όνομα και μια διάρκεια.

Ο ευκολότερος τρόπος να το σκεφτείς είναι να φανταστείς πρώτα τους εσωτερικούς πίνακες, τα ζευγάρια ονομάτων και διαρκειών, και μετά να τους φανταστείς όλους μαζί ομαδοποιημένους μέσα σε έναν άλλον πίνακα.

Η προσπέλαση με θέσεις λειτουργεί όπως ακριβώς και παντού αλλού, αλλά μπορείς να βάλεις πολλές θέσεις τη μία μετά την άλλη, έτσι...

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
