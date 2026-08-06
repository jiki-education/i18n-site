---
lang: "el"
type: "exercise"
slug: "caesar-cipher"
title: "Κρυπτογράφηση του Καίσαρα"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "c80036b"
content_version: "31ff2aedfac9"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"Κωδικοποίησε ένα μήνυμα"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"Γράψε μια συνάρτηση `encode` που μετατοπίζει κάθε γράμμα σε ένα μήνυμα κατά μια δεδομένη ποσότητα. Τα κενά παραμένουν ως κενά. Τα γράμματα που ξεπερνούν το 'z' επιστρέφουν στην αρχή του αλφαβήτου."}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"Απλή μετατόπιση κατά 1"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"Μετατόπισε κάθε γράμμα προς τα εμπρός κατά 1: a->b, b->c, c->d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"Μετατόπιση κατά 3"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"Μετατόπισε κάθε γράμμα προς τα εμπρός κατά 3: h->k, e->h, l->o, o->r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"Επαναφορά στην αρχή του αλφαβήτου"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"Όταν η μετατόπιση ξεπερνά το 'z', επιστρέφει στην αρχή: x->a, y->b, z->c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"Μήνυμα με κενά"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"Τα κενά παραμένουν ως κενά, μόνο τα γράμματα μετατοπίζονται."},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"Κρυπτογράφηση ROT13"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"Το ROT13 είναι μια ειδική περίπτωση της κρυπτογράφησης του Καίσαρα με μετατόπιση 13."}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"Πώς μπορώ να σκεφτώ τη μετατόπιση ενός γράμματος κατά Ν θέσεις;"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"Κάθε γράμμα έχει μια θέση στο αλφάβητο (το a είναι στη θέση 0, το b στη θέση 1, και ούτω καθεξής). Για να μετατοπίσεις, βρίσκεις αυτή τη θέση, προσθέτεις την ποσότητα μετατόπισης και, στη συνέχεια, μετατρέπεις τη νέα θέση ξανά σε γράμμα ανατρέχοντας στο αλφάβητο."},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"Πώς βρίσκω τη θέση ενός γράμματος στο αλφάβητο;"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"Μπορείς να αναζητήσεις ένα μικρότερο κομμάτι μέσα σε μια συμβολοσειρά με την `indexOf`. Καλώντας την στη συμβολοσειρά του αλφαβήτου, σου δίνει τη θέση ενός γράμματος, ή -1 αν το γράμμα δεν βρίσκεται. Για να κάνεις το αντίστροφο, χρησιμοποίησε τη θέση για να πάρεις το γράμμα από τη συμβολοσειρά του αλφαβήτου."},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"Τι συμβαίνει όταν η μετατόπιση ξεπερνά το 'z';"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"Πρέπει να επιστρέψει ξανά στο 'a'. Ο τελεστής modulo (`%`) είναι τέλειος για αυτό. Υπολογίζοντας τη θέση modulo 26 επαναφέρεις οποιονδήποτε αριθμό στο εύρος 0 έως 25."},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"Πώς το εφαρμόζω αυτό σε ολόκληρο μήνυμα;"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"Διάτρεξε κάθε χαρακτήρα του μηνύματος, μετατόπισέ τον χρησιμοποιώντας τη βοηθητική σου συνάρτηση για μεμονωμένα γράμματα και χρησιμοποίησε τη συνένωση (`+`) για να χτίσεις τη συμβολοσειρά αποτελέσματος από τα μετατοπισμένα γράμματα."}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"Βρες τη θέση μιας μικρότερης συμβολοσειράς μέσα σε μια συμβολοσειρά, ή -1 αν δεν βρίσκεται (παρέχεται από το επίπεδο stdlib)"},{"key":"indexOf.category","english":"String Operations","target":"Λειτουργίες Συμβολοσειρών"}]}]}]
---

Η Κρυπτογράφηση του Καίσαρα είναι μία από τις παλαιότερες και απλούστερες τεχνικές κρυπτογράφησης. Τη χρησιμοποιούσε ο Ιούλιος Καίσαρας για να στέλνει μυστικά μηνύματα στους στρατηγούς του.

Η κρυπτογράφηση λειτουργεί μετατοπίζοντας κάθε γράμμα του μηνύματος κατά έναν σταθερό αριθμό θέσεων στο αλφάβητο. Για παράδειγμα, με μετατόπιση 3, το 'a' γίνεται 'd', το 'b' γίνεται 'e' κοκ. Αν η μετατόπιση ξεπεράσει το 'z', επιστρέφει στην αρχή του αλφαβήτου.

Τα κενά παραμένουν ως κενά (δεν μετατοπίζονται).

Δημιούργησε μια συνάρτηση με όνομα `encode(message, shift)` (κωδικοποίησε(μήνυμα, μετατόπιση)) που δέχεται ένα μήνυμα με πεζά γράμματα και ένα ποσό μετατόπισης, και επιστρέφει το κωδικοποιημένο μήνυμα.

Για παράδειγμα:

- `encode("abc", 1)` επιστρέφει `"bcd"`
- `encode("xyz", 3)` επιστρέφει `"abc"` (επιστρέφει στην αρχή)
- `encode("hello world", 5)` επιστρέφει `"mjqqt btwqi"`

Συμβουλή: Θα χρειαστείς να σπάσεις αυτό το πρόβλημα σε μικρότερες βοηθητικές συναρτήσεις!

### Τυχαίο γεγονός

Κάποτε παρουσίαζα ένα τεχνολογικό συνέδριο στην Μπράγκα της Πορτογαλίας. Πέντε λεπτά πριν βγω στη σκηνή, οι διοργανωτές ήρθαν και, κάπως ντροπαλά, με ρώτησαν αν θα με πείραζε να ντυθώ Ιούλιος Καίσαρας για το πρώτο μέρος της ημέρας, για να γιορτάσουν τη ρωμαϊκή κληρονομιά της Μπράγκα. Τα κατάφερα άραγε;

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Ο Jeremy ντυμένος Καίσαρας"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
