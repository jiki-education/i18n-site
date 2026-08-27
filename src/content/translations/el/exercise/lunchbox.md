---
lang: "el"
type: "exercise"
slug: "lunchbox"
title: "Το Ταπεράκι"
status: "published"
source_repo: "i18n"
source_path: "locales/el/curriculum/exercises/lunchbox"
en_md5: "1b10370bd59c8562e032443bbe98c6b3"
governance_sha: "accabaea"
content_version: "f4cb9d0d8f00"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Η λύση σου έχει πάρα πολλές γραμμές κώδικα. Μπορείς να την κάνεις πιο σύντομη;"}]},{"name":"tasks","rows":[{"key":"packLunchbox.name","english":"Pack the Lunchbox","target":"Ετοίμασε το Ταπεράκι"},{"key":"packLunchbox.description","english":"Split the items into a lunchbox and a rucksack: fit as many as you can into the lunchbox without going over its capacity, and put everything else in the rucksack.","target":"Χώρισε τα αντικείμενα σε ένα ταπεράκι και ένα σακίδιο: χώρεσε όσα περισσότερα μπορείς στο ταπεράκι χωρίς να υπερβείς τη χωρητικότητά του, και βάλε όλα τα υπόλοιπα στο σακίδιο."},{"key":"solveInSixteenLines.name","english":"Solve in 16 lines of code","target":"Λύσε σε 16 γραμμές κώδικα"},{"key":"solveInSixteenLines.description","english":"Can you solve this exercise with only 16 lines of code?","target":"Μπορείς να λύσεις αυτή την άσκηση με μόνο 16 γραμμές κώδικα;"}]},{"name":"scenarios","rows":[{"key":"everythingFits.name","english":"Everything fits","target":"Όλα χωράνε"},{"key":"everythingFits.description","english":"A roomy lunchbox where every item fits, so the rucksack stays empty.","target":"Ένα ευρύχωρο ταπεράκι όπου χωράνε όλα τα αντικείμενα, οπότε το σακίδιο μένει άδειο."},{"key":"packTheMost.name","english":"Fit the most","target":"Χώρεσε τα περισσότερα"},{"key":"packTheMost.description","english":"Space is tight, so the small items go in the lunchbox and the big ones are left for the rucksack.","target":"Ο χώρος είναι περιορισμένος, οπότε τα μικρά αντικείμενα μπαίνουν στο ταπεράκι και τα μεγάλα μένουν για το σακίδιο."},{"key":"justTheSnack.name","english":"Just the snack","target":"Μόνο το σνακ"},{"key":"justTheSnack.description","english":"Only the very smallest item fits; the rest go in the rucksack.","target":"Μόνο το πολύ μικρότερο αντικείμενο χωράει. Τα υπόλοιπα μπαίνουν στο σακίδιο."},{"key":"nothingFits.name","english":"Nothing fits","target":"Δεν χωράει τίποτα"},{"key":"nothingFits.description","english":"Even the smallest item is too big, so everything ends up in the rucksack.","target":"Ακόμα και το μικρότερο αντικείμενο είναι πολύ μεγάλο, οπότε όλα καταλήγουν στο σακίδιο."},{"key":"emptyLunchbox.name","english":"Empty lunchbox","target":"Άδειο ταπεράκι"},{"key":"emptyLunchbox.description","english":"There are no items at all, so both the lunchbox and the rucksack come back empty.","target":"Δεν υπάρχουν καθόλου αντικείμενα, οπότε τόσο το ταπεράκι όσο και το σακίδιο επιστρέφουν άδεια."},{"key":"bonus1.name","english":"16 lines of code","target":"16 γραμμές κώδικα"},{"key":"bonus1.description","english":"Solve the exercise with only 16 lines of code.","target":"Λύσε την άσκηση με μόνο 16 γραμμές κώδικα."}]},{"name":"hints","rows":[{"key":"readEachItem.question","english":"How do I get each item's name and size?","target":"Πώς παίρνω το όνομα και το μέγεθος κάθε αντικειμένου;"},{"key":"readEachItem.answer","english":"Each item is a pair. The first part is the name and the second is the size, so you can read them out of the item one at a time.","target":"Κάθε αντικείμενο είναι ένα ζεύγος. Το πρώτο μέρος είναι το όνομα και το δεύτερο είναι το μέγεθος, οπότε μπορείς να τα διαβάσεις από το αντικείμενο ένα-ένα."},{"key":"fitTheMost.question","english":"How do I fit in as many items as possible?","target":"Πώς μπορώ να χωρέσω όσο το δυνατόν περισσότερα αντικείμενα;"},{"key":"fitTheMost.answer","english":"Think about which items to add first. Smaller items leave more room for others, so it pays to deal with them before the big ones.","target":"Σκέψου ποια αντικείμενα να προσθέσεις πρώτα. Τα μικρότερα αντικείμενα αφήνουν περισσότερο χώρο για τα άλλα, οπότε αξίζει να ασχοληθείς με αυτά πριν από τα μεγάλα."},{"key":"goSmallestFirst.question","english":"The items are listed largest first — how do I go through them smallest first?","target":"Τα αντικείμενα είναι καταχωρισμένα από το μεγαλύτερο στο μικρότερο. Πώς μπορώ να τα διατρέξω από το μικρότερο στο μεγαλύτερο;"},{"key":"goSmallestFirst.answer","english":"There's an array method that gives you back a reversed copy of an array. Reverse the items first, then work through them in that new order.","target":"Υπάρχει μια μέθοδος πίνακα που σου δίνει πίσω ένα αντίστροφο αντίγραφο ενός πίνακα. Αντέστρεψε πρώτα τα αντικείμενα και μετά διέτρεξέ τα με αυτή τη νέα σειρά."},{"key":"knowWhenFull.question","english":"How do I decide where each item goes?","target":"Πώς αποφασίζω πού πηγαίνει το κάθε αντικείμενο;"},{"key":"knowWhenFull.answer","english":"Keep a running total of the sizes you've added. Before adding an item, check whether the total plus its size would still fit within the capacity. If it does, it goes in the lunchbox, otherwise it goes in the rucksack.","target":"Κράτα ένα συνεχές άθροισμα των μεγεθών που έχεις προσθέσει. Πριν προσθέσεις ένα αντικείμενο, έλεγξε αν το άθροισμα μαζί με το μέγεθός του θα χωρούσε ακόμα μέσα στη χωρητικότητα. Αν ναι, πηγαίνει στο ταπεράκι, διαφορετικά πηγαίνει στο σακίδιο."}]},{"name":"functions","rows":[{"key":"toReversed.description","english":"Returns a copy of the array with the elements in reverse order, without changing the original.","target":"Επιστρέφει ένα αντίγραφο του πίνακα με τα στοιχεία σε αντίστροφη σειρά, χωρίς να αλλάξει τον αρχικό."},{"key":"toReversed.category","english":"Arrays","target":"Πίνακες"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Προσθέτει ένα στοιχείο στο τέλος ενός πίνακα, αλλάζοντας τον πίνακα επιτόπου."},{"key":"push.category","english":"Arrays","target":"Πίνακες"}]}]}]
---

Όταν ήμουν παιδί, ετοίμαζα το ταπεράκι μου κάθε μέρα για το σχολείο. Η μητέρα μου άφηνε έξω αντικείμενα για μένα (τακτοποιημένα από το μεγαλύτερο στο μικρότερο αντικείμενο) και προσπαθούσα να χωρέσω όσο το δυνατόν περισσότερα στο ταπεράκι, αλλά προφανώς χωρούσε μόνο μέχρι ένα σημείο. Ό,τι δε χωρούσε, έπρεπε να το βάλω στο σακίδιό μου και να το κουβαλάω μαζί μου όλη μέρα, αντί να το αφήσω στο ντουλαπάκι μου.

Σε αυτή την άσκηση, η δουλειά σου είναι να δημιουργήσεις έναν αλγόριθμο που υπολογίζει τι χωράει στο ταπεράκι και τι πρέπει να βάλω στο σακίδιό μου.

Γράψε μια συνάρτηση που ονομάζεται `packLunch(items, capacity)` (ετοίμασε το ταπεράκι) και δέχεται δύο εισόδους: τον πίνακα αντικειμένων (πρώτα το μεγαλύτερο) και τη χωρητικότητα του ταπερακιού, `capacity` (χωρητικότητα), που είναι ένας αριθμός.

Ο πίνακας αντικειμένων είναι ένας εμφωλευμένος πίνακας: κάθε αντικείμενο είναι κι αυτό ένας πίνακας με δύο στοιχεία, το όνομα του αντικειμένου και το μέγεθός του. Τα αντικείμενα είναι πάντα από το μεγαλύτερο στο μικρότερο. Για παράδειγμα, ο πίνακας αντικειμένων μπορεί να είναι:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

Το ταπεράκι έχει μέγιστη χωρητικότητα. Πρέπει να υπολογίσεις ποια αντικείμενα χωράνε στο ταπεράκι. Χώρεσε όσα περισσότερα αντικείμενα μπορείς. Όλα τα υπόλοιπα πρέπει να μπουν στο σακίδιο.

Η συνάρτησή σου πρέπει να επιστρέφει έναν πίνακα που περιέχει δύο στοιχεία. Το πρώτο στοιχείο είναι ένας πίνακας με τα αντικείμενα για το ταπεράκι και το δεύτερο είναι ένας πίνακας με τα αντικείμενα για το σακίδιο. Και οι δύο πίνακες πρέπει να είναι ταξινομημένοι από το μικρότερο στο μεγαλύτερο.

Για παράδειγμα, για τον παραπάνω πίνακα, με χωρητικότητα 20, θα πρέπει να επιστρέψεις:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Μέθοδοι που θα σε βοηθήσουν

Όπως σε όλες τις ασκήσεις αυτής της ενότητας, θα χρειαστείς τη μέθοδο `.push(element)` για να φτιάξεις τους πίνακές σου.

Έχεις επίσης μια νέα μέθοδο που ονομάζεται `[...].toReversed()`, η οποία δημιουργεί ένα αντίγραφο ενός πίνακα με όλα τα αντικείμενα σε αντίστροφη σειρά. Για παράδειγμα:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Δεν είσαι υποχρεωμένος να τη χρησιμοποιήσεις, αλλά μπορεί να σου φανεί χρήσιμη.

Καλή διασκέδαση!
