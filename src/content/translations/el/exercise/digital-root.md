---
lang: "el"
type: "exercise"
slug: "digital-root"
title: "Ψηφιακή ρίζα"
status: "published"
source_repo: "i18n"
source_path: "locales/el/curriculum/exercises/digital-root"
en_md5: "defdd57bb547464b7d3e0e8c5aefb5dc"
governance_sha: "4caf34be"
content_version: "136724e84b43"
published_at: "2026-09-26"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Άθροισε τα ψηφία"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Γράψε μια συνάρτηση με το όνομα digitalRoot που παίρνει έναν αριθμό και προσθέτει τα ψηφία του. Για αριθμούς που είναι ήδη μονοψήφιοι, και για αριθμούς των οποίων τα ψηφία αθροίζονται σε ένα μόνο ψηφίο, αυτό το πρώτο πέρασμα αρκεί."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Συνέχισε να συρρικνώνεις μέχρι να μείνει ένα μόνο ψηφίο"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"Μερικές φορές, προσθέτοντας τα ψηφία μία φορά μένεις ακόμα με περισσότερα από ένα ψηφία (για παράδειγμα, το 942 αθροίζεται σε 15). Συνέχισε να προσθέτεις τα ψηφία του αποτελέσματος μέχρι να μείνει ένα μόνο ψηφίο."},{"key":"keepItTight.name","english":"Solve it in 10 lines","target":"Λύσε το σε 10 γραμμές"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, try and solve this in 10 lines of code or fewer.","target":"Η λύση σου ήδη λειτουργεί. Για αυτό το μπόνους, δοκίμασε να το λύσεις σε 10 γραμμές κώδικα ή λιγότερες."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Μηδέν"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"Η ψηφιακή ρίζα του 0 είναι 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Ήδη μονοψήφιος"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Ένας αριθμός που είναι ήδη μονοψήφιος είναι ο ίδιος η ψηφιακή του ρίζα."},{"key":"drTwoDigits.name","english":"Two digits","target":"Δύο ψηφία"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"Το 16 συρρικνώνεται σε 7 με ένα πέρασμα (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Τρία ψηφία, ένα πέρασμα"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"Το 132 συρρικνώνεται σε 6 με ένα πέρασμα (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"Χρειάζονται δύο περάσματα"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"Το 39 αθροίζεται σε 12, το οποίο στη συνέχεια αθροίζεται σε 3."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Ένας αριθμός που χρειάζεται δεύτερο πέρασμα"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"Το 942 αθροίζεται σε 15, το οποίο στη συνέχεια αθροίζεται σε 6."},{"key":"drLarge.name","english":"A larger number","target":"Ένας μεγαλύτερος αριθμός"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"Το 493193 συρρικνώνεται όλο το δρόμο μέχρι το 2."},{"key":"drNines.name","english":"All nines","target":"Όλα εννιάρια"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"Το 99999 αθροίζεται σε 45, το οποίο στη συνέχεια αθροίζεται σε 9."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Μια καθαρή, σύντομη λύση"},{"key":"drBonusTight.description","english":"Try and solve this in 10 lines of code or fewer. 12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"Δοκίμασε να το λύσεις σε 10 γραμμές κώδικα ή λιγότερες. Το 12345 συρρικνώνεται σε 6 (1 + 2 + 3 + 4 + 5 = 15, μετά 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"Τι ακριβώς είναι η ψηφιακή ρίζα;"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Πρόσθεσε όλα τα ψηφία του αριθμού. Αν αυτό σου δώσει ένα μόνο ψηφίο, αυτή είναι η απάντηση. Αν σου δώσει περισσότερα από ένα ψηφία, πρόσθεσε και τα ψηφία εκείνου του αποτελέσματος, και συνέχισε μέχρι να μείνει μόνο ένα ψηφίο."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"Πώς προσθέτω τα ψηφία ενός αριθμού;"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Μετέτρεψε τον αριθμό σε συμβολοσειρά για να μπορέσεις να τον διασχίσεις χαρακτήρα προς χαρακτήρα με έναν βρόχο `for...of`. Κράτα ένα τρέχον άθροισμα, προσθέτοντας κάθε ψηφίο καθώς προχωράς."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"Κάθε ψηφίο είναι όμως χαρακτήρας, όχι αριθμός."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Όταν κάνεις βρόχο πάνω στη συμβολοσειρά, κάθε χαρακτήρας (όπως `\"4\"`) είναι κείμενο. Χρησιμοποίησε το `Number(char)` για να τον μετατρέψεις στον αριθμό `4` πριν τον προσθέσεις στο σύνολό σου."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"Πώς μπορώ να συνεχίσω χωρίς να ξέρω πόσα περάσματα χρειάζομαι;"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"Δεν ξέρεις εκ των προτέρων πόσες φορές θα χρειαστεί να προσθέσεις τα ψηφία, οπότε ένας βρόχος `while` είναι ιδανικός. Συνέχισε να κάνεις βρόχο όσο ο αριθμός έχει περισσότερα από ένα ψηφία."},{"key":"keepGoing.question","english":"When do I stop?","target":"Πότε σταματάω;"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Σταμάτησε μόλις ο αριθμός είναι μονοψήφιος. Τότε, επέστρεψέ τον."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"Σχεδόν! Για αυτή την άσκηση θέλουμε να χρησιμοποιήσεις έναν βρόχο `while` για να συνεχίσεις να συρρικνώνεις μέχρι να μείνει ένα μόνο ψηφίο."},{"key":"tooManyLines","english":"Keep going! See if you can get down to 10 lines of code.","target":"Συνέχισε! Δες αν μπορείς να φτάσεις στις 10 γραμμές κώδικα ή λιγότερες."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Μετατρέπει μια συμβολοσειρά που περιέχει ψηφία σε αριθμό"},{"key":"number.category","english":"Type Conversion","target":"Μετατροπή τύπου"},{"key":"string.description","english":"Convert a number into a string","target":"Μετατρέπει έναν αριθμό σε συμβολοσειρά"},{"key":"string.category","english":"Type Conversion","target":"Μετατροπή τύπου"}]}]}]
---

Η ψηφιακή ρίζα (_digital root_ στα αγγλικά) ενός αριθμού είναι αυτό που παίρνεις όταν προσθέτεις συνέχεια τα ψηφία του μεταξύ τους, μέχρι να μείνει μόνο ένα ψηφίο.

Αν προσθέτοντας τα ψηφία μία φορά μένεις ακόμα με περισσότερα από ένα ψηφία, προσθέτεις τα ψηφία _εκείνου_ του αποτελέσματος, και συνεχίζεις μέχρι να μείνει ένα μόνο ψηφίο.

Για παράδειγμα, για να βρεις την ψηφιακή ρίζα του `942`:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

Άρα η ψηφιακή ρίζα του `942` είναι `6`.

Ένας αριθμός που είναι ήδη μονοψήφιος (όπως το `7`) είναι ο ίδιος η ψηφιακή του ρίζα.

Φτιάξε μια συνάρτηση με το όνομα `digitalRoot` που παίρνει έναν αριθμό και επιστρέφει την ψηφιακή του ρίζα.

### Η συνάρτηση `String()`

Στις τελευταίες ενότητες είχες στη διάθεσή σου τη συνάρτηση `Number(str)`, που μετατρέπει μια συμβολοσειρά σε αριθμό.

Μπορείς να κάνεις και το αντίστροφο, να μετατρέψεις δηλαδή έναν αριθμό σε συμβολοσειρά, με τη συνάρτηση `String(num)`. Για παράδειγμα:

```js
String(147) === "147"
```

Πρόσεξε και πάλι ότι ξεκινάει με κεφαλαίο γράμμα, και για την ώρα μην ανησυχείς για το γιατί!

### Ώρα να εφαρμόσεις όσα έμαθες.

Αν και υπάρχουν πολλοί τρόποι να λύσεις αυτή την άσκηση, η λύση που θέλουμε να βρεις χρησιμοποιεί έναν `while` βρόχο.

Καλή διασκέδαση!
