---
lang: "el"
type: "exercise"
slug: "two-fer"
title: "Two-Fer"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/two-fer"
en_md5: "7e59867ebe08e4bd9b598aae4a8be76a"
governance_sha: "c80036b"
content_version: "3bf2e1209b17"
published_at: "2026-08-06"
forum_topic_id: 1061
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"moreThanSixLines","english":"You used more than six lines of code.","target":"Χρησιμοποίησες περισσότερες από έξι γραμμές κώδικα."}]},{"name":"tasks","rows":[{"key":"createTwoFerFunction.name","english":"Create two-fer function","target":"Δημιούργησε τη συνάρτηση two-fer"},{"key":"createTwoFerFunction.description","english":"Write a twoFer function that takes a name and returns 'One for [name], one for me.' If no name is given (empty string), use 'you' instead of the name.","target":"Γράψε μια συνάρτηση twoFer που παίρνει ένα όνομα και επιστρέφει 'One for [name], one for me.' Αν δεν δοθεί όνομα (κενή συμβολοσειρά), χρησιμοποίησε 'you' στη θέση του ονόματος."},{"key":"solveInSixLines.name","english":"Solve in six lines of code","target":"Λύσε το σε έξι γραμμές κώδικα"},{"key":"solveInSixLines.description","english":"Can you solve this with only six lines of code?","target":"Μπορείς να το λύσεις με μόλις έξι γραμμές κώδικα;"}]},{"name":"scenarios","rows":[{"key":"twoFerDefault.name","english":"No name given","target":"Δεν δίνεται όνομα"},{"key":"twoFerDefault.description","english":"No name is given so return 'One for you, one for me.'","target":"Δεν δίνεται όνομα, οπότε επίστρεψε 'One for you, one for me.'"},{"key":"twoFerAlice.name","english":"Name given as Alice","target":"Δίνεται το όνομα Alice"},{"key":"twoFerAlice.description","english":"Her name is 'Alice' so return 'One for Alice, one for me.'","target":"Τη λένε 'Alice', οπότε επίστρεψε 'One for Alice, one for me.'"},{"key":"twoFerTom.name","english":"Name given as Tom","target":"Δίνεται το όνομα Tom"},{"key":"twoFerTom.description","english":"His name is 'Tom' so return 'One for Tom, one for me.'","target":"Τον λένε 'Tom', οπότε επίστρεψε 'One for Tom, one for me.'"},{"key":"bonus1.name","english":"Six lines of code","target":"Έξι γραμμές κώδικα"},{"key":"bonus1.description","english":"Solve the exercise with only six lines of code.","target":"Λύσε την άσκηση με μόλις έξι γραμμές κώδικα."}]},{"name":"hints","rows":[{"key":"whatChanges.question","english":"What changes based on the input?","target":"Τι αλλάζει ανάλογα με την είσοδο;"},{"key":"whatChanges.answer","english":"Just one thing. The name in the middle of the sentence. If you were given a name, use it. If not, use the default `\"you\"`.","target":"Μόνο ένα πράγμα. Το όνομα στη μέση της πρότασης. Αν σου δόθηκε όνομα, χρησιμοποίησέ το. Αν όχι, χρησιμοποίησε το προεπιλεγμένο `\"you\"`."},{"key":"checkGivenName.question","english":"How do I check 'was I given a name'?","target":"Πώς ελέγχω αν \"μου δόθηκε όνομα\";"},{"key":"checkGivenName.answer","english":"An if-statement comparing the input to the empty string `\"\"`. If it's empty, use `\"you\"`. Otherwise, use the input.","target":"Με μια εντολή `if` που συγκρίνει την είσοδο με την κενή συμβολοσειρά `\"\"`. Αν είναι κενή, χρησιμοποίησε το `\"you\"`. Αλλιώς, χρησιμοποίησε την είσοδο."},{"key":"buildSentence.question","english":"How do I build the final sentence?","target":"Πώς φτιάχνω την τελική πρόταση;"},{"key":"buildSentence.answer","english":"Join the three pieces (`\"One for \"`, the chosen name, and `\", one for me.\"`) using concatenation (`+`) or a template string.","target":"Ένωσε τα τρία κομμάτια (`\"One for \"`, το επιλεγμένο όνομα και `\", one for me.\"`) με συνένωση (`+`) ή με ένα template string."}]}]}]
---

Τώρα θα χτίσουμε πάνω σε εκείνη την απλή άσκηση "Hello" και θα προσθέσουμε μερικούς έξτρα κανόνες.

Σε ορισμένες αγγλικές προφορές, όταν λες γρήγορα το "two for", ακούγεται σαν "two fer". Το two-for-one είναι ένας τρόπος να πεις ότι, αν αγοράσεις ένα, παίρνεις κι ένα ακόμη δωρεάν.

Φαντάσου έναν φούρνο που έχει γιορτινή προσφορά: δύο μπισκότα στην τιμή του ενός. Δέχεσαι την προσφορά και αποφασίζεις να δώσεις το έξτρα μπισκότο σε κάποιον άλλον.

Η αποστολή σου είναι να αποφασίσεις τι θα πεις καθώς χαρίζεις το έξτρα μπισκότο.

- Αν ξέρεις το όνομα του άλλου (π.χ. Alice), θα πεις: "One for Alice, one for me."
- Αν δεν ξέρεις το όνομά του, θα πεις: "One for you, one for me."

Γράψε μια συνάρτηση με το όνομα `twoFer(name)` (κατά λέξη "δύο για", με το `name` να είναι το όνομα) που επιστρέφει την κατάλληλη ατάκα.

Ορίστε μερικά παραδείγματα:

| Κλήση συνάρτησης   | Επιστρέφει                      |
| :----------------- | :------------------------------ |
| `twoFer("Alice")`  | `"One for Alice, one for me."`  |
| `twoFer("Jeremy")` | `"One for Jeremy, one for me."` |
| `twoFer("")`       | `"One for you, one for me."`    |

Για το μπόνους, μπορείς να το γράψεις χρησιμοποιώντας **μόλις 6 γραμμές κώδικα**;

Καλή επιτυχία!
