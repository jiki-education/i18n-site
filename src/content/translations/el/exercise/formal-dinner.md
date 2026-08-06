---
lang: "el"
type: "exercise"
slug: "formal-dinner"
title: "Επίσημο Δείπνο"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/formal-dinner"
en_md5: "8d6a2f3dd90b3a487a6bf855f31ef025"
governance_sha: "c80036b"
content_version: "e5360627dcf8"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"findGuestTable.name","english":"Find the Guest's Table","target":"Βρες το τραπέζι του επισκέπτη"},{"key":"findGuestTable.description","english":"Write a function that takes the list of guests' full names, the matching list of table names, and an arriving guest announced as an honorific and a surname. Return the name of the table that guest is sitting at, or `\"No table found\"` if they aren't on the seating plan.","target":"Γράψε μια συνάρτηση που δέχεται τη λίστα με τα πλήρη ονόματα των επισκεπτών, την αντίστοιχη λίστα με τα ονόματα των τραπεζιών, και έναν επισκέπτη που φτάνει, ανακοινωμένο ως τιμητικός τίτλος και επίθετο. Επέστρεψε το όνομα του τραπεζιού στο οποίο κάθεται ο επισκέπτης, ή `\"No table found\"` αν δεν βρίσκεται στο πλάνο θέσεων."},{"key":"solveTightly.name","english":"Solve it tightly","target":"Λύσε το συνοπτικά"},{"key":"solveTightly.description","english":"Bonus: this can be written far more compactly than you might expect. Can you get the whole solution down to just a handful of lines?","target":"Μπόνους: αυτό μπορεί να γραφτεί πολύ πιο συμπαγώς απ' ό,τι μπορεί να περιμένεις. Μπορείς να συμπτύξεις ολόκληρη τη λύση σε ελάχιστες γραμμές;"}]},{"name":"scenarios","rows":[{"key":"emptyList.name","english":"Empty seating plan","target":"Άδειο πλάνο θέσεων"},{"key":"emptyList.description","english":"Nobody's sitting anywhere when the plan is empty.","target":"Κανείς δεν κάθεται πουθενά όταν το πλάνο θέσεων είναι άδειο."},{"key":"nameMissing.name","english":"Brad's turned away","target":"Ο Brad απορρίπτεται"},{"key":"nameMissing.description","english":"The name's not on the seating plan.","target":"Το όνομα δεν είναι στο πλάνο θέσεων."},{"key":"namePresent.name","english":"Brad's shown to his seat","target":"Ο Brad οδηγείται στο τραπέζι του"},{"key":"namePresent.description","english":"Brad Pitt is on the plan, so Mr Pitt gets his table.","target":"Ο Brad Pitt είναι στο πλάνο θέσεων, οπότε ο κύριος Pitt παίρνει το τραπέζι του."},{"key":"differentHonorific.name","english":"Knight of the realm","target":"Ιππότης του βασιλείου"},{"key":"differentHonorific.description","english":"A different honorific, and a guest who isn't first on the plan.","target":"Ένας διαφορετικός τιμητικός τίτλος, και ένας επισκέπτης που δεν είναι πρώτος στο πλάνο."},{"key":"bondSeated.name","english":"Mr Bond, I presume","target":"Ο κύριος Bond, υποθέτω"},{"key":"bondSeated.description","english":"James Bond is on the plan.","target":"Ο James Bond είναι στο πλάνο θέσεων."},{"key":"bondNotSeated.name","english":"Hmmm... Mr Bond, I presume","target":"Χμμ... Ο κύριος Bond, υποθέτω"},{"key":"bondNotSeated.description","english":"Only Jason Bourne is on the plan, not James Bond.","target":"Μόνο ο Jason Bourne είναι στο πλάνο θέσεων, όχι ο James Bond."},{"key":"partialSurname.name","english":"Not quite Mr Pitt","target":"Όχι ακριβώς ο κύριος Pitt"},{"key":"partialSurname.description","english":"Neither Ada Spitt nor Hugo Ross-Pitt is Mr Pitt, so he has no seat here.","target":"Ούτε η Ada Spitt ούτε ο Hugo Ross-Pitt είναι ο κύριος Pitt, οπότε δεν έχει θέση εδώ."},{"key":"lloydWebber.name","english":"How about a Baron?","target":"Κι ένας Βαρώνος;"},{"key":"lloydWebber.description","english":"Baron Lloyd Webber has two words in his surname.","target":"Ο Βαρώνος Lloyd Webber έχει δύο λέξεις στο επίθετό του."},{"key":"markWebber.name","english":"Is Mark the Baron?","target":"Είναι ο Mark ο Βαρώνος;"},{"key":"markWebber.description","english":"A different Webber doesn't count - the surname has to match in full.","target":"Ένας διαφορετικός Webber δεν μετράει. Το επίθετο πρέπει να ταιριάζει πλήρως."},{"key":"formalDinnerBonusLineCount.name","english":"Neat and tidy: Lord Doyle","target":"Περιποιημένο και τακτοποιημένο: Λόρδος Doyle"},{"key":"formalDinnerBonusLineCount.description","english":"The same seating plan as before, but this time your solution has to fit into a much smaller number of lines.","target":"Το ίδιο πλάνο θέσεων όπως πριν, αλλά αυτή τη φορά η λύση σου πρέπει να χωρέσει σε πολύ λιγότερες γραμμές."}]},{"name":"hints","rows":[{"key":"twoLists.question","english":"How do the two lists relate to each other?","target":"Πώς σχετίζονται οι δύο λίστες μεταξύ τους;"},{"key":"twoLists.answer","english":"They're a pair. The first guest sits at the first table, the second guest at the second table, and so on. So it's not enough to know *that* a guest is on the plan - you need to know *where* on the plan they are.","target":"Είναι ένα ζευγάρι. Ο πρώτος επισκέπτης κάθεται στο πρώτο τραπέζι, ο δεύτερος επισκέπτης στο δεύτερο τραπέζι, και ούτω καθεξής. Άρα δεν αρκεί να ξέρεις *ότι* ένας επισκέπτης είναι στο πλάνο. Πρέπει να ξέρεις *πού* είναι στο πλάνο."},{"key":"comparingNames.question","english":"The guest says 'Mr Pitt' but the plan says 'Brad Pitt'. How do I compare those?","target":"Ο επισκέπτης λέει 'κύριος Pitt' αλλά το πλάνο λέει 'Brad Pitt'. Πώς συγκρίνω αυτά;"},{"key":"comparingNames.answer","english":"Those two strings will never be equal, so a straight comparison won't get you anywhere. Have a think about which part of what the guest announced actually appears on the plan, and whereabouts in the plan's entry you'd expect to find it.","target":"Αυτές οι δύο συμβολοσειρές δεν πρόκειται ποτέ να είναι ίσες, οπότε μια απλή σύγκριση δεν θα σε βοηθήσει. Σκέψου ποιο μέρος από αυτό που ανακοίνωσε ο επισκέπτης εμφανίζεται πραγματικά στο πλάνο, και σε ποιο σημείο της καταχώρισης του πλάνου θα περίμενες να το βρεις."},{"key":"lookalikeSurnames.question","english":"Could a surname match the wrong guest?","target":"Θα μπορούσε ένα επίθετο να ταιριάξει σε λάθος επισκέπτη;"},{"key":"lookalikeSurnames.answer","english":"It absolutely could. Read 'Ada Spitt' and 'Hugo Ross-Pitt' out loud, and then think about Mr Pitt. Ask yourself what makes a surname a real surname on that line, rather than just some letters that happen to sit at the end of it.","target":"Θα μπορούσε σίγουρα. Διάβασε φωναχτά τα «Ada Spitt» και «Hugo Ross-Pitt», και μετά σκέψου τον κύριο Pitt. Ρώτησε τον εαυτό σου τι κάνει ένα επίθετο γνήσιο επίθετο σε εκείνη τη γραμμή, και όχι απλά μερικά γράμματα που τυχαίνει να βρίσκονται στο τέλος της."},{"key":"noMatch.question","english":"What should I return when nobody matches?","target":"Τι πρέπει να επιστρέψω όταν κανείς δεν ταιριάζει;"},{"key":"noMatch.answer","english":"The string `\"No table found\"`, exactly as written. The trickier bit is knowing when you're allowed to say it. If you've checked the very first guest on the plan and they're not your man, do you actually know yet that he isn't seated somewhere?","target":"Η συμβολοσειρά `\"No table found\"`, ακριβώς όπως είναι γραμμένη. Το πιο δύσκολο κομμάτι είναι να ξέρεις πότε επιτρέπεται να το πεις. Αν έχεις ελέγξει τον πρώτο-πρώτο επισκέπτη στο πλάνο και δεν είναι ο άνθρωπός σου, ξέρεις πραγματικά ήδη ότι δεν κάθεται κάπου;"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Συνέχισε! Δες αν μπορείς να το λύσεις σε λιγότερες γραμμές."}]},{"name":"functions","rows":[{"key":"length.description","english":"The number of items in a list - the same length property you've used on strings (provided by level stdlib)","target":"Ο αριθμός των στοιχείων σε μια λίστα, η ίδια ιδιότητα length που έχεις χρησιμοποιήσει σε συμβολοσειρές (παρέχεται από το level stdlib)"},{"key":"length.category","english":"List Operations","target":"Λειτουργίες Λιστών"},{"key":"split.description","english":"Split a string into a list of pieces, breaking at each separator (provided by level stdlib)","target":"Χωρίζει μια συμβολοσειρά σε μια λίστα από κομμάτια, σπάζοντας σε κάθε διαχωριστικό (παρέχεται από το level stdlib)"},{"key":"split.category","english":"String Operations","target":"Λειτουργίες Συμβολοσειρών"},{"key":"slice.description","english":"Make a new list from part of a list, starting at a position (provided by level stdlib)","target":"Δημιουργεί μια νέα λίστα από ένα μέρος μιας λίστας, ξεκινώντας από μια θέση (παρέχεται από το level stdlib)"},{"key":"slice.category","english":"List Operations","target":"Λειτουργίες Λιστών"},{"key":"join.description","english":"Join the items of a list into one string, with a separator between them (provided by level stdlib)","target":"Ενώνει τα στοιχεία μιας λίστας σε μία συμβολοσειρά, με ένα διαχωριστικό μεταξύ τους (παρέχεται από το level stdlib)"},{"key":"join.category","english":"List Operations","target":"Λειτουργίες Λιστών"},{"key":"endsWith.description","english":"Check whether a string ends with a smaller string (provided by level stdlib)","target":"Ελέγχει αν μια συμβολοσειρά τελειώνει με μια μικρότερη συμβολοσειρά (παρέχεται από το level stdlib)"},{"key":"endsWith.category","english":"String Operations","target":"Λειτουργίες Συμβολοσειρών"}]}]}]
---

Επιστρέφεις στην παράλληλη δουλειά σου ως μπράβος. Είναι το βράδυ μετά το After Party και ακολουθεί ακόμα ένα γλέντι. Αυτή τη φορά είναι ένα επίσημο δείπνο, οπότε απόψε είσαι λιγότερο «ο γεροδεμένος τύπος στην πόρτα» και περισσότερο «ο άνθρωπος με το πρόχειρο και το ωραίο γιλέκο».

Εδώ σίγουρα δεν είναι το μέρος για να χρησιμοποιήσεις **μόνο** το μικρό σου όνομα. Στην πραγματικότητα, δεν είναι το μέρος για να χρησιμοποιήσεις καν το μικρό σου όνομα. Εδώ, όλοι χρησιμοποιούν έναν τιμητικό τίτλο (_honorific_ στα αγγλικά) (Miss, Mr, Dr, κ.λπ.) και το επίθετό τους.

Οι διοργανωτές σού έχουν δώσει το πλάνο των θέσεων ως δύο ξεχωριστές λίστες. Η μία περιέχει τα πλήρη ονόματα των επισκεπτών. Η άλλη περιέχει το όνομα του τραπεζιού στο οποίο κάθεται κάθε επισκέπτης (ονόματα εμπνευσμένα από δέντρα και λουλούδια). Όπως και στο «After Party», οι δύο λίστες είναι ευθυγραμμισμένες: ο επισκέπτης στη θέση 3 της πρώτης λίστας κάθεται στο τραπέζι στη θέση 3 της δεύτερης λίστας.

Έτσι, όταν καταφθάνει ο κύριος Pitt, πρέπει να καταλάβεις ότι αυτός είναι ο «Brad Pitt» στη λίστα σου και μετά να του πεις σε ποιο τραπέζι βρίσκεται.

Γράψε μια συνάρτηση που ονομάζεται `tableFor` (αναζητά το τραπέζι στο οποίο κάθεται ένας επισκέπτης). Η συνάρτηση έχει τρία δεδομένα εισόδου:

- Το πρώτο είναι η λίστα με τα πλήρη ονόματα των επισκεπτών, ως συμβολοσειρές
- Το δεύτερο είναι η λίστα με τα ονόματα των τραπεζιών, με την ίδια σειρά όπως και οι επισκέπτες
- Το τρίτο είναι ο επισκέπτης που φτάνει, διατυπωμένος ως ένας τιμητικός τίτλος ακολουθούμενος από το επίθετό του (π.χ. «Mr Pitt»)

Επέστρεψε το όνομα του τραπεζιού στο οποίο κάθεται ο επισκέπτης. Αν δεν βρίσκεται καθόλου στο πλάνο των θέσεων, επέστρεψε τη συμβολοσειρά `"No table found"` (κανένα περιθώριο για τυχαίους!).

Ο τιμητικός τίτλος είναι πάντα ακριβώς μία λέξη και ό,τι ακολουθεί είναι το επίθετο του επισκέπτη. Τα περισσότερα επίθετα είναι μία λέξη, αλλά κάποια σπουδαία εκτείνονται σε δύο.

Πρόσεχε, όμως. Πολλά επίθετα μοιάζουν πολύ με άλλα επίθετα.

### Μέθοδοι και Ιδιότητες Συμβολοσειρών/Πινάκων

Εκτός από την ιδιότητα `.length` που έμαθες στην προηγούμενη ενότητα, υπάρχουν τέσσερις μέθοδοι που μπορεί να σου φανούν χρήσιμες. Υπάρχουν πολλοί τρόποι να λύσεις αυτή την άσκηση, αλλά αυτές θα σε οδηγήσουν στη συντομότερη δυνατή λύση.

`"...".split(substring)` χωρίζει μια συμβολοσειρά χρησιμοποιώντας μια άλλη συμβολοσειρά. Για παράδειγμα:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` δεσμεύει ένα μέρος ενός πίνακα, ξεκινώντας από τη θέση `start` και συνεχίζοντας μέχρι το τέλος του πίνακα. Τα δεσμευμένα στοιχεία αντιγράφονται σε έναν ΝΕΟ πίνακα, ο οποίος σου επιστρέφεται. Στην ουσία, αυτό ρίχνει τα πρώτα `start` στοιχεία. Για παράδειγμα:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` ενώνει τα στοιχεία ενός πίνακα με την παρεχόμενη συμβολοσειρά. Για παράδειγμα:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` σου λέει αν μια συμβολοσειρά τελειώνει με μια άλλη συμβολοσειρά. Για παράδειγμα:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
