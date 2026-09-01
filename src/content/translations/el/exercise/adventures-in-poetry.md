---
lang: "el"
type: "exercise"
slug: "adventures-in-poetry"
title: "Περιπέτειες στην Ποίηση"
status: "published"
source_repo: "i18n"
source_path: "locales/el/curriculum/exercises/adventures-in-poetry"
en_md5: "444b0a68f443ccb86f15cc0f43fb63d7"
governance_sha: "e619d11e"
content_version: "305ddeab82c7"
published_at: "2026-09-01"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"errors","rows":[{"key":"endOfPath","english":"The poet has walked off the end of the path. Something should have stopped the walk before now.","target":"Ο ποιητής βγήκε από το τέλος του μονοπατιού. Κάτι θα έπρεπε να είχε σταματήσει το περπάτημα πριν από τώρα."},{"key":"isEmojiString","english":"You can only check whether a piece of text is an emoji.","target":"Μπορείς να ελέγξεις μόνο αν ένα κομμάτι κειμένου είναι emoji."},{"key":"reciteString","english":"You can only recite a piece of text.","target":"Μπορείς να απαγγείλεις μόνο ένα κομμάτι κειμένου."}]},{"name":"checks","rows":[{"key":"notRecited","english":"The poet never recited anything. Make sure you call <code>recite()</code> once the walk is over.","target":"Ο ποιητής δεν απάγγειλε τίποτα. Φρόντισε να καλέσεις τη <code>recite()</code> μόλις τελειώσει το περπάτημα."},{"key":"wrongPoem","english":"The poet recited \"{{got}}\" but the poem should be \"{{expected}}\".","target":"Ο ποιητής απάγγειλε \"{{got}}\", αλλά το ποίημα θα έπρεπε να είναι \"{{expected}}\"."},{"key":"noFunctions","english":"Write your solution as one walk, without defining any functions of your own.","target":"Γράψε τη λύση σου ως ένα περπάτημα, χωρίς να ορίσεις δικές σου συναρτήσεις."},{"key":"reciteOnce","english":"The poet should recite the poem once, after the walk has finished.","target":"Ο ποιητής θα πρέπει να απαγγείλει το ποίημα μία φορά, αφού τελειώσει το περπάτημα."},{"key":"tooDeeplyNested","english":"Your code nests too deeply. You are only allowed two levels, so a loop with an <code>if</code> inside it, but nothing inside that <code>if</code>.","target":"Ο κώδικάς σου έχει πολύ βαθιά εμφώλευση. Επιτρέπονται μόνο δύο επίπεδα, δηλαδή ένας βρόχος με ένα <code>if</code> μέσα του, αλλά τίποτα μέσα σε αυτό το <code>if</code>."},{"key":"noAndOrNot","english":"This exercise is about a different way of making decisions, so <code>&&</code> and <code>!</code> are not allowed here. <code>||</code> is fine.","target":"Αυτή η άσκηση αφορά έναν διαφορετικό τρόπο λήψης αποφάσεων, οπότε τα <code>&&</code> και <code>!</code> δεν επιτρέπονται εδώ. Το <code>||</code> επιτρέπεται."},{"key":"needsContinue","english":"Your solution needs to use <code>continue</code>.","target":"Η λύση σου πρέπει να χρησιμοποιεί το <code>continue</code>."},{"key":"needsBreak","english":"Your solution needs to use <code>break</code>.","target":"Η λύση σου πρέπει να χρησιμοποιεί το <code>break</code>."},{"key":"tooManyLines","english":"Your solution is longer than it needs to be. See if you can get it down by handling each kind of square in one place.","target":"Η λύση σου είναι μεγαλύτερη από ό,τι χρειάζεται. Δες αν μπορείς να τη συντομεύσεις, ώστε να χειρίζεσαι κάθε είδος τετραγώνου σε ένα μόνο σημείο."}]},{"name":"tasks","rows":[{"key":"collectThePoem.name","english":"Collect the poem and recite it","target":"Μάζεψε το ποίημα και απάγγειλέ το"},{"key":"collectThePoem.description","english":"Walk along the path, gather the words of the poem, stop in the right place, and recite what you gathered.","target":"Περπάτησε στο μονοπάτι, μάζεψε τις λέξεις του ποιήματος, σταμάτα στο σωστό σημείο και απάγγειλε ό,τι μάζεψες."},{"key":"solveTightly.name","english":"Tighten it up","target":"Σφίξε το"},{"key":"solveTightly.description","english":"Solve the same walk, but get your code down to the line limit.","target":"Λύσε το ίδιο περπάτημα, αλλά μείωσε τον κώδικά σου ώστε να τηρεί το όριο γραμμών."}]},{"name":"scenarios","rows":[{"key":"hope.name","english":"A path with gaps","target":"Ένα μονοπάτι με κενά"},{"key":"hope.description","english":"Six words with bare grass between them, and a checkered flag at the end.","target":"Έξι λέξεις με σκέτο γρασίδι ανάμεσά τους, και μια καρό σημαία στο τέλος."},{"key":"wandered.name","english":"Scenery on the path","target":"Σκηνικό στο μονοπάτι"},{"key":"wandered.description","english":"The same idea, but now there are plants and creatures growing between the words.","target":"Η ίδια ιδέα, αλλά τώρα φυτρώνουν φυτά και πλάσματα ανάμεσα στις λέξεις."},{"key":"mists.name","english":"Scenery next to the flag","target":"Σκηνικό δίπλα στη σημαία"},{"key":"mists.description","english":"A leaf sits on the square just before the checkered flag.","target":"Ένα φύλλο βρίσκεται στο τετράγωνο ακριβώς πριν από την καρό σημαία."},{"key":"notLost.name","english":"Exactly seven words","target":"Ακριβώς επτά λέξεις"},{"key":"notLost.description","english":"A line with seven words on it, so the poet stops counting before the flag.","target":"Μια γραμμή με επτά λέξεις πάνω της, οπότε ο ποιητής σταματά να μετράει πριν από τη σημαία."},{"key":"hopeContinued.name","english":"A poem that is too long","target":"Ένα ποίημα που είναι πολύ μεγάλο"},{"key":"hopeContinued.description","english":"This path holds more than seven words, so the poet stops part way through the line.","target":"Αυτό το μονοπάτι περιέχει περισσότερες από επτά λέξεις, οπότε ο ποιητής σταματά στη μέση της γραμμής."},{"key":"highlands.name","english":"An apostrophe","target":"Μια απόστροφος"},{"key":"highlands.description","english":"A line of Burns, with an apostrophe sitting on its own square.","target":"Μια γραμμή του Burns, με μια απόστροφο να βρίσκεται σε δικό της τετράγωνο."},{"key":"heartScenery.name","english":"Scenery after an apostrophe","target":"Σκηνικό μετά από μια απόστροφο"},{"key":"heartScenery.description","english":"A mushroom grows between the apostrophe and the word it joins to, so whatever remembers the spacing has to survive a skipped square.","target":"Ένα μανιτάρι φυτρώνει ανάμεσα στην απόστροφο και στη λέξη στην οποία ενώνεται, οπότε αυτό που θυμάται τα κενά πρέπει να επιβιώσει από ένα τετράγωνο που παραλείπεται."},{"key":"tyger.name","english":"A comma","target":"Ένα κόμμα"},{"key":"tyger.description","english":"A line of Blake, with a comma sitting on its own square.","target":"Μια γραμμή του Blake, με ένα κόμμα να βρίσκεται σε δικό του τετράγωνο."},{"key":"pleure.name","english":"Bare grass to begin","target":"Σκέτο γρασίδι στην αρχή"},{"key":"pleure.description","english":"A line of Verlaine, with a few empty squares before the poem starts.","target":"Μια γραμμή του Verlaine, με μερικά άδεια τετράγωνα πριν ξεκινήσει το ποίημα."},{"key":"yasegaeru.name","english":"A line of Issa","target":"Μια γραμμή του Issa"},{"key":"yasegaeru.description","english":"Seven words of haiku, with a line limit to keep your guards tight.","target":"Επτά λέξεις χαϊκού, με όριο γραμμών για να κρατήσεις τους ελέγχους σου σφιχτούς."}]},{"name":"hints","rows":[{"key":"scenery.question","english":"The plants and creatures are ending up in my poem.","target":"Τα φυτά και τα πλάσματα καταλήγουν στο ποίημά μου."},{"key":"scenery.answer","english":"Only words belong in the poem. Everything else on the path needs to be left behind, which means your loop has to get to the next square without adding anything.","target":"Μόνο οι λέξεις ανήκουν στο ποίημα. Όλα τα υπόλοιπα στο μονοπάτι πρέπει να μείνουν πίσω, που σημαίνει ότι ο βρόχος σου πρέπει να φτάνει στο επόμενο τετράγωνο χωρίς να προσθέτει τίποτα."},{"key":"flagSkipped.question","english":"My poet never stops walking.","target":"Ο ποιητής μου δεν σταματά ποτέ να περπατά."},{"key":"flagSkipped.answer","english":"The checkered flag is an emoji too. If you deal with scenery before you deal with the flag, the flag gets treated as scenery and the walk never ends. Order matters.","target":"Η καρό σημαία είναι επίσης emoji. Αν ασχοληθείς με το σκηνικό πριν ασχοληθείς με τη σημαία, η σημαία αντιμετωπίζεται ως σκηνικό και το περπάτημα δεν τελειώνει ποτέ. Η σειρά έχει σημασία."},{"key":"spacing.question","english":"My words are all squashed together, or there is a space at the start.","target":"Οι λέξεις μου είναι όλες κολλημένες μεταξύ τους, ή υπάρχει κενό στην αρχή."},{"key":"spacing.answer","english":"Think about when a space is needed. It is needed **between** two words, not before the first one, so something has to remember whether anything has been written yet.","target":"Σκέψου πότε χρειάζεται ένα κενό. Χρειάζεται **ανάμεσα** σε δύο λέξεις, όχι πριν από την πρώτη, οπότε κάτι πρέπει να θυμάται αν έχει ήδη γραφτεί κάτι."},{"key":"apostrophe.question","english":"I am getting `heart ' s` instead of `heart's`.","target":"Παίρνω `heart ' s` αντί για `heart's`."},{"key":"apostrophe.answer","english":"An apostrophe joins the words on either side of it, so no space belongs before it or after it. A comma is the opposite way round, with no space before it but a space after.","target":"Η απόστροφος ενώνει τις λέξεις που βρίσκονται στις δύο πλευρές της, οπότε δεν υπάρχει κενό ούτε πριν ούτε μετά από αυτήν. Το κόμμα λειτουργεί αντίστροφα, χωρίς κενό πριν αλλά με κενό μετά."},{"key":"reciteOnce.question","english":"Why can I only call `recite()` once?","target":"Γιατί μπορώ να καλέσω τη `recite()` μόνο μία φορά;"},{"key":"reciteOnce.answer","english":"The poet recites the finished poem, so there is only one moment where that can happen. There is more than one way for the walk to end, and all of them need to reach that same moment.","target":"Ο ποιητής απαγγέλλει το ολοκληρωμένο ποίημα, οπότε υπάρχει μόνο μία στιγμή που μπορεί να συμβεί αυτό. Υπάρχουν περισσότεροι από ένας τρόποι για να τελειώσει το περπάτημα, και όλοι πρέπει να καταλήξουν στην ίδια στιγμή."}]},{"name":"describers","rows":[{"key":"move","english":"walked forward and found ${return}","target":"περπάτησε μπροστά και βρήκε ${return}"},{"key":"isEmoji","english":"checked whether ${arg1} was an emoji","target":"έλεγξε αν το ${arg1} ήταν emoji"},{"key":"recite","english":"recited \"${arg1}\"","target":"απάγγειλε \"${arg1}\""}]},{"name":"functions","rows":[{"key":"move.description","english":"Walks the poet forward onto the next square and **returns** whatever was on it.","target":"Κάνει τον ποιητή να προχωρήσει μπροστά στο επόμενο τετράγωνο και **επιστρέφει** ό,τι υπήρχε πάνω του."},{"key":"move.category","english":"Movement","target":"Κίνηση"},{"key":"isEmoji.description","english":"**Returns** `true` if the thing you pass it is an emoji.","target":"**Επιστρέφει** `true` αν αυτό που του περνάς είναι emoji."},{"key":"isEmoji.category","english":"Checks","target":"Έλεγχοι"},{"key":"recite.description","english":"Makes the poet recite a poem out loud.","target":"Κάνει τον ποιητή να απαγγείλει ένα ποίημα δυνατά."},{"key":"recite.category","english":"Action","target":"Δράση"}]}]}]
---

Φτιάχνεις ένα ρομποτικό παιχνίδι ποίησης με το όνομα "Adventures in Poetry". Ως πρώτο σου βήμα, πρέπει να προγραμματίσεις το ρομπότ ώστε, καθώς περπατά, να μαζεύει λέξεις και στο τέλος να απαγγέλλει το ποίημα.

Κάθε τετράγωνο περιέχει ένα από τα εξής τέσσερα πράγματα:

1. Τίποτα (`""`)
2. Μία **λέξη** από το ποίημα.
3. Ένα σκηνικό, όπως ένα φύλλο ή μια πεταλούδα (ένα emoji).
4. Μία καρό σημαία, που λέει στο ρομπότ να σταματήσει.

Για να σε βοηθήσουν, έχεις μερικές συναρτήσεις. Πρώτα, έχεις τη συνάρτηση `move()`, η οποία λέει στο ποιητικό ρομπότ να προχωρήσει μπροστά στο επόμενο τετράγωνο και επιστρέφει ό,τι υπήρχε πάνω του. Έχεις τη συνάρτηση `isEmoji(thing)`, η οποία επιστρέφει μια τιμή boolean που σου λέει αν η συμβολοσειρά που της περνάς είναι emoji. Και τέλος, έχεις τη συνάρτηση `recite(poem)`, την οποία πρέπει να χρησιμοποιήσεις με το τελικό ποίημα.

Η δουλειά σου είναι να περπατήσεις στο μονοπάτι, να συνθέσεις το ποίημα και μετά να το απαγγείλεις.

## Οι κανόνες

- Οι **λέξεις** μπαίνουν στο ποίημα, με ένα **κενό ανάμεσά τους**.
- Το **σκηνικό** δεν είναι μέρος του ποιήματος και πρέπει να το αγνοείς.
- Η **απόστροφος** βρίσκεται σε δικό της τετράγωνο και ενώνει τις λέξεις που βρίσκονται στις δύο πλευρές της. Το `heart`, μετά το `'` και μετά το `s`, γίνεται `heart's`.
- Το **κόμμα** βρίσκεται επίσης σε δικό του τετράγωνο. Κολλάει στη λέξη που βρίσκεται πριν από αυτό, αλλά μετά από αυτό υπάρχει ακόμα κενό.
- Ο ποιητής σταματά να περπατά όταν φτάσει στην **καρό σημαία** ή μόλις μαζέψει **επτά λέξεις**. Όποιο από τα δύο συμβεί πρώτο.
- Όποτε σταματά ο ποιητής, και όπως κι αν σταμάτησε, απαγγέλλει ό,τι μάζεψε. Μπορείς να καλέσεις τη `recite()` **μόνο μία φορά**.

## Περιορισμοί

Υπάρχουν πολλοί τρόποι να λύσεις αυτή την άσκηση, αλλά θέλουμε να χρησιμοποιήσεις τις λέξεις-κλειδιά `continue` και `break` που έμαθες πρόσφατα, οπότε υπάρχουν μερικοί κανόνες:

1. Η λύση σου πρέπει να χρησιμοποιεί και το `continue` και το `break`.
2. Δεν μπορείς να χρησιμοποιήσεις `&&` ή `!` στη λύση σου.
3. Δεν μπορείς να γράψεις βοηθητικές συναρτήσεις.
4. Μπορείς να έχεις μόνο δύο επίπεδα εσοχής:

```javascript

// Επιτρέπεται - 2 επίπεδα εσοχής
repeat() {
  if(...) {
    //...
  }
}

// Δεν επιτρέπεται - 3 επίπεδα εσοχής
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Αυτό σημαίνει ότι η λύση που θα σκεφτείς είναι αρκετά "επίπεδη".

Καλή τύχη και καλή διασκέδαση!
