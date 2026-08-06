---
lang: "el"
type: "exercise"
slug: "reverse-string"
title: "Αντιστροφή συμβολοσειράς"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "c80036b"
content_version: "9ceb919f7d40"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"Αντιστροφή συμβολοσειρών"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"Αντέστρεψε μια συμβολοσειρά ώστε να διαβάζεται από δεξιά προς τα αριστερά αντί από αριστερά προς τα δεξιά."}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"Κενή συμβολοσειρά"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"Μια κενή συμβολοσειρά πρέπει να επιστρέφει μια κενή συμβολοσειρά όταν αντιστρέφεται."},{"key":"reverseWord.name","english":"A word","target":"Μια λέξη"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"Αντέστρεψε τη λέξη 'robot'."},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"Λέξη με κεφαλαίο"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"Αντέστρεψε μια λέξη με κεφαλαίο 'Ramen'."},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"Πρόταση με στίξη"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"Αντέστρεψε μια πρόταση με στίξη 'I'm hungry!'."},{"key":"reversePalindrome.name","english":"Palindrome","target":"Παλίνδρομο"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"Ένα παλίνδρομο παραμένει ίδιο όταν αντιστρέφεται."},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"Λέξη άρτιου μήκους"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"Αντέστρεψε μια λέξη άρτιου μήκους 'drawer'."},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"Πλατιοί χαρακτήρες"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"Αντέστρεψε πλατιούς χαρακτήρες Unicode '子猫'."},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"Οικογένεια emoji"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"Αντέστρεψε ένα emoji οικογένειας."},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"Σημαία ουράνιου τόξου"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"Φτιάξε μια σημαία ουράνιου τόξου αντιστρέφοντας τη σειρά."}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"Πώς θα αντέστρεφα μια λέξη με το χέρι;"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"Θα τη διάβαζες από αριστερά προς τα δεξιά αλλά θα την έγραφες από δεξιά προς τα αριστερά. Ισοδύναμα, θα έπαιρνες κάθε γράμμα με τη σειρά και θα το τοποθετούσες μπροστά από ό,τι είχες γράψει μέχρι στιγμής."},{"key":"mapToCode.question","english":"How does that map to code?","target":"Πώς μεταφράζεται αυτό σε κώδικα;"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"Διάσχισε τη συμβολοσειρά εισόδου χαρακτήρα-χαρακτήρα. Για κάθε χαρακτήρα, χτίσε το αποτέλεσμα προσθέτοντάς τον στην αρχή. Αυτό σημαίνει να τον τοποθετείς στην ΑΡΧΗ του αποτελέσματος και όχι στο τέλος."},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"Πώς προσθέτω έναν χαρακτήρα στην αρχή αντί για το τέλος;"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"Με τον τελεστή `+`, η προσθήκη στην αρχή είναι απλά θέμα σειράς. Αντί για `result + char` (που προσθέτει στο τέλος), χρησιμοποίησε `char + result` (που προσθέτει στην αρχή)."}]}]}]
---

Η αντιστροφή συμβολοσειρών (διαβάζοντάς τες από δεξιά προς τα αριστερά, αντί από αριστερά προς τα δεξιά) είναι μια εξαιρετικά συνηθισμένη εργασία στον προγραμματισμό.

Για παράδειγμα, στη βιοπληροφορική, η αντιστροφή της αλληλουχίας συμβολοσειρών DNA ή RNA είναι συχνά σημαντική για διάφορες αναλύσεις, όπως τον εντοπισμό συμπληρωματικών αλυσίδων ή την αναγνώριση παλίνδρομων αλληλουχιών.

Η δική σου αποστολή είναι να δημιουργήσεις μια συνάρτηση με το όνομα `reverse` (αντιστροφή), η οποία δέχεται μια συμβολοσειρά ως είσοδο και επιστρέφει την αντεστραμμένη εκδοχή της.

Παραδείγματα:

- Μετέτρεψε το "stressed" σε "desserts"
- Μετέτρεψε το "strops" σε "sports"
- Μετέτρεψε το "racecar" σε "racecar" (παλίνδρομο)

### Αυτά τα δύο τελευταία σενάρια...

Τα δύο τελευταία σενάρια φαίνονται παράξενα, έτσι δεν είναι; Τι συμβαίνει;

Τελικά, πολλά emoji στην πραγματικότητα αποτελούνται από άλλα emoji που συνδέονται μεταξύ τους με κρυφά (μηδενικού πλάτους) κενά.

Το emoji οικογένειας (👩‍👩‍👧‍👦) αποτελείται από δύο γυναίκες και δύο παιδιά. Όταν αντιστρέφεται, μπορείς να δεις τους μεμονωμένους χαρακτήρες (👦‍👧‍👩‍👩).

Το άλλο είναι ένα ουράνιο τόξο και μια σημαία (🌈‍️🏳). Όταν αντιστρέφεις τη σειρά για να πάρεις πρώτα τη σημαία και μετά το ουράνιο τόξο, γίνεται μια σημαία του ουράνιου τόξου (🏳️‍🌈️)!

Αν χτίσεις το αποτέλεσμά σου έναν χαρακτήρα τη φορά, αυτά θα λειτουργήσουν κατευθείαν. Αν αντίθετα καταφύγεις σε κάποιο πιο έξυπνο κόλπο, μπορεί να δεις τα emoji να διαλύονται.
