---
lang: "el"
type: "exercise"
slug: "three-letter-acronym"
title: "Ακρωνύμιο Τριών Γραμμάτων"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "c80036b"
content_version: "117fdb731c4c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"Η λύση σου έχει πάρα πολλές γραμμές κώδικα. Μπορείς να την κάνεις πιο σύντομη;"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"Φτιάξε συνάρτηση ακρωνύμιου"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"Γράψε μια συνάρτηση ακρωνύμιου που παίρνει τρεις λέξεις και επιστρέφει ένα τριγράμματο ακρωνύμιο, παίρνοντας το πρώτο γράμμα κάθε λέξης."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"Λύσε σε 3 γραμμές κώδικα"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"Μπορείς να λύσεις αυτή την άσκηση με μόνο 3 γραμμές κώδικα;"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"Φορητά Γραφικά Δικτύου"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"Δημιούργησε το ακρωνύμιο 'PNG' από τις λέξεις 'Portable', 'Network', 'Graphics'."},{"key":"css.name","english":"Cascading Style Sheets","target":"Διαδοχικά Φύλλα Στυλ"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"Δημιούργησε το ακρωνύμιο 'CSS' από τις λέξεις 'Cascading', 'Style', 'Sheets'."},{"key":"www.name","english":"World Wide Web","target":"Παγκόσμιος Ιστός"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"Δημιούργησε το ακρωνύμιο 'WWW' από τις λέξεις 'World', 'Wide', 'Web'."},{"key":"lol.name","english":"Lowercase words","target":"Πεζές λέξεις"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"Δημιούργησε το ακρωνύμιο 'lol' από τις λέξεις 'laugh', 'out', 'loud'."},{"key":"bonus1.name","english":"3 lines of code","target":"3 γραμμές κώδικα"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"Λύσε την άσκηση με μόνο 3 γραμμές κώδικα."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"Πώς μπορώ να πάρω μόνο τον πρώτο χαρακτήρα μιας λέξης;"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"Με χρήση της θέσης στη συμβολοσειρά. Ο πρώτος χαρακτήρας βρίσκεται στη θέση `[0]`."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"Πώς μπορώ να φτιάξω το τριγράμματο αποτέλεσμα;"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"Πάρε τον πρώτο χαρακτήρα κάθε λέξης και ένωσέ τους με τη σειρά, χρησιμοποιώντας συνένωση (`+`) ή μια πρότυπη συμβολοσειρά."}]}]}]
---

Ένα ακρωνύμιο είναι μια λέξη που σχηματίζεται από τα πρώτα γράμματα άλλων λέξεων. Για παράδειγμα, το "Portable Network Graphics" γίνεται "PNG".

Γράψε μια συνάρτηση με όνομα `acronym` (ακρωνύμιο) που παίρνει τρεις λέξεις και επιστρέφει ένα τριγράμματο ακρωνύμιο παίρνοντας το πρώτο γράμμα κάθε λέξης.

Για παράδειγμα, αν της δώσεις "Cascading", "Style" και "Sheets", θα πρέπει να επιστρέφει "CSS".
