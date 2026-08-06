---
lang: "el"
type: "exercise"
slug: "collatz-conjecture"
title: "Εικασία Collatz"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/collatz-conjecture"
en_md5: "6fbe47d0456ca4f5db8e74b3f6de3cb0"
governance_sha: "c80036b"
content_version: "630a0a9d911e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"calculateCollatzSteps.name","english":"Calculate Collatz steps","target":"Υπολογισμός βημάτων Collatz"},{"key":"calculateCollatzSteps.description","english":"Write a function that takes a number and returns how many steps it takes to reach 1 following the Collatz Conjecture rules: if even, divide by 2; if odd, multiply by 3 and add 1.","target":"Γράψε μια συνάρτηση που παίρνει έναν αριθμό και επιστρέφει πόσα βήματα χρειάζονται για να φτάσει στο 1 ακολουθώντας τους κανόνες της Εικασίας Collatz: αν είναι άρτιος, διαίρεσέ τον διά 2, αν είναι περιττός, πολλαπλασίασέ τον επί 3 και πρόσθεσε 1."}]},{"name":"scenarios","rows":[{"key":"number1.name","english":"Number 1","target":"Αριθμός 1"},{"key":"number1.description","english":"Zero steps for one.","target":"Μηδέν βήματα για το 1."},{"key":"number16.name","english":"Number 16","target":"Αριθμός 16"},{"key":"number16.description","english":"Divide if even.","target":"Διαίρεση άρτιου."},{"key":"number12.name","english":"Number 12","target":"Αριθμός 12"},{"key":"number12.description","english":"Even and odd steps.","target":"Βήματα άρτιων και περιττών."},{"key":"number1000000.name","english":"Number 1000000","target":"Αριθμός 1000000"},{"key":"number1000000.description","english":"Large number of even and odd steps.","target":"Μεγάλος αριθμός βημάτων άρτιων και περιττών."}]},{"name":"hints","rows":[{"key":"loopUntilOne.question","english":"How do I keep going until the number reaches 1?","target":"Πώς συνεχίζω μέχρι ο αριθμός να φτάσει στο 1;"},{"key":"loopUntilOne.answer","english":"Use a `repeat()` loop with no number — it repeats forever until you `return` out of it. Inside the loop, replace the number with the next number in the sequence, and return once it reaches 1.","target":"Χρησιμοποίησε έναν βρόχο `repeat()` χωρίς αριθμό. Επαναλαμβάνεται για πάντα μέχρι να βγεις με `return`. Μέσα στον βρόχο, αντικατάστησε τον αριθμό με τον επόμενο αριθμό της ακολουθίας και κάνε `return` μόλις φτάσει στο 1."},{"key":"chooseRule.question","english":"How do I decide which rule to apply on each step?","target":"Πώς αποφασίζω ποιον κανόνα να εφαρμόσω σε κάθε βήμα;"},{"key":"chooseRule.answer","english":"Check whether the number is even. The modulo operator does this. `number % 2 === 0` means it's even. If even, halve it. Otherwise, do `3 * number + 1`.","target":"Έλεγξε αν ο αριθμός είναι άρτιος. Ο τελεστής υπολοίπου το κάνει αυτό. `number % 2 === 0` σημαίνει ότι είναι άρτιος. Αν είναι άρτιος, διαίρεσέ τον διά 2. Διαφορετικά, κάνε `3 * number + 1`."},{"key":"trackSteps.question","english":"How do I track the answer (the number of steps)?","target":"Πώς παρακολουθώ την απάντηση (τον αριθμό των βημάτων);"},{"key":"trackSteps.answer","english":"Keep a counter variable for how many times you've applied the rules. Think about what needs to happen to it each time round the loop, and what your function should return when the number reaches 1.","target":"Κράτα μια μεταβλητή μετρητή για το πόσες φορές έχεις εφαρμόσει τους κανόνες. Σκέψου τι πρέπει να συμβαίνει σε αυτήν κάθε φορά που γυρνάς στον βρόχο, και τι πρέπει να επιστρέφει η συνάρτησή σου όταν ο αριθμός φτάσει στο 1."}]}]}]
---

Ένα βράδυ, έπεσες πάνω σε ένα παλιό σημειωματάριο γεμάτο με αινιγματικές μουτζούρες, λες και κάποιος κυνηγούσε εμμονικά μια ιδέα. Σε μία σελίδα, ξεχώριζε μία και μόνο ερώτηση: **Μπορεί κάθε αριθμός να βρει τον δρόμο του προς το 1;** Ήταν συνδεδεμένο με κάτι που ονομάζεται **Εικασία Collatz**, ένα παζλ που έχει προβληματίσει τους στοχαστές εδώ και δεκαετίες.

Οι κανόνες είναι απατηλά απλοί:

1. Διάλεξε έναν αριθμό.
2. Αν είναι άρτιος, διαίρεσέ τον διά 2.
3. Αν είναι περιττός, πολλαπλασίασέ τον επί 3 και μετά πρόσθεσε 1.
4. Επανάλαβε με το αποτέλεσμα, συνεχίζοντας επ' αόριστον.

Για παράδειγμα, ξεκινώντας με το 12:

```
12 → 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

Μετρώντας από τον δεύτερο αριθμό (6), χρειάστηκαν 9 βήματα για να φτάσει στο 1.

Δημιούργησε μια συνάρτηση με όνομα `collatzSteps` (βήματα Collatz) που δέχεται μία είσοδο, έναν αριθμό. Επίστρεψε **πόσα βήματα** χρειάζονται για να φτάσει από οποιονδήποτε δεδομένο αριθμό στο 1, ακολουθώντας τους κανόνες της Εικασίας Collatz.
