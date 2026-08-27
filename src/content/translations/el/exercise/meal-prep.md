---
lang: "el"
type: "exercise"
slug: "meal-prep"
title: "Προετοιμασία γευμάτων"
status: "published"
source_repo: "i18n"
source_path: "locales/el/curriculum/exercises/meal-prep"
en_md5: "8bcf8310b9da1c637816c3b85a27725c"
governance_sha: "accabaea"
content_version: "2ae15728bdb7"
published_at: "2026-08-27"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createShoppingList.name","english":"Create Shopping List","target":"Δημιουργία λίστας αγορών"},{"key":"createShoppingList.description","english":"Write a function that takes the contents of your fridge and a recipe's ingredients, and returns the items you need to buy (items in the recipe that aren't in the fridge).","target":"Γράψε μια συνάρτηση που παίρνει το περιεχόμενο του ψυγείου σου και τα υλικά μιας συνταγής, και επιστρέφει τα υλικά που χρειάζεται να αγοράσεις (τα υλικά της συνταγής που δεν υπάρχουν στο ψυγείο)."}]},{"name":"scenarios","rows":[{"key":"emptyFridge.name","english":"Empty fridge","target":"Άδειο ψυγείο"},{"key":"emptyFridge.description","english":"When the fridge is empty, you need to buy everything.","target":"Όταν το ψυγείο είναι άδειο, πρέπει να αγοράσεις τα πάντα."},{"key":"youHaveEverything.name","english":"You have everything","target":"Τα έχεις όλα"},{"key":"youHaveEverything.description","english":"When you have all ingredients, the shopping list is empty.","target":"Όταν έχεις όλα τα υλικά, η λίστα αγορών είναι κενή."},{"key":"oneThing.name","english":"One thing","target":"Ένα υλικό"},{"key":"oneThing.description","english":"When you're missing just one ingredient.","target":"Όταν σου λείπει μόνο ένα υλικό."},{"key":"fewThings.name","english":"A few things","target":"Λίγα υλικά"},{"key":"fewThings.description","english":"When you're missing a few ingredients.","target":"Όταν σου λείπουν μερικά υλικά."}]},{"name":"hints","rows":[{"key":"realLifeApproach.question","english":"How would I do this in real life?","target":"Πώς θα το έκανα αυτό στην πραγματική ζωή;"},{"key":"realLifeApproach.answer","english":"You'd go through the recipe one ingredient at a time and check the fridge for each. Anything missing goes on the shopping list. Your code does the same thing.","target":"Θα περνούσες τη συνταγή ένα υλικό τη φορά και θα έλεγχες το ψυγείο για καθένα. Ό,τι λείπει μπαίνει στη λίστα αγορών. Το ίδιο κάνει και ο κώδικάς σου."},{"key":"checkFridgeItem.question","english":"How do I check if a fridge item is there?","target":"Πώς ελέγχω αν ένα υλικό υπάρχει στο ψυγείο;"},{"key":"checkFridgeItem.answer","english":"The `includes` method does this for you. Calling it on the fridge with an ingredient gives you back `true` or `false`.","target":"Η μέθοδος `includes` το κάνει αυτό για σένα. Καλώντας τη στο ψυγείο με ένα υλικό, σου επιστρέφει `true` ή `false`."},{"key":"buildShoppingList.question","english":"How do I build up the shopping list?","target":"Πώς φτιάχνω τη λίστα αγορών;"},{"key":"buildShoppingList.answer","english":"Start with an empty array. For each recipe item that the fridge doesn't contain, `push()` it onto the shopping list.","target":"Ξεκίνα με έναν κενό πίνακα. Για κάθε υλικό της συνταγής που δεν υπάρχει στο ψυγείο, πρόσθεσέ το στη λίστα αγορών με `push()`."}]},{"name":"functions","rows":[{"key":"includes.description","english":"Checks whether an array contains a specific item, returning true or false.","target":"Ελέγχει αν ένας πίνακας περιέχει ένα συγκεκριμένο στοιχείο, επιστρέφοντας αληθής ή ψευδής."},{"key":"includes.category","english":"Arrays","target":"Πίνακες"},{"key":"push.description","english":"Adds an element onto the end of an array, changing the array in place.","target":"Προσθέτει ένα στοιχείο στο τέλος ενός πίνακα, αλλάζοντας τον πίνακα επί τόπου."},{"key":"push.category","english":"Arrays","target":"Πίνακες"}]}]}]
---

Είσαι από εκείνους που τους αρέσει να πετάγονται καθημερινά στα μαγαζιά για να πάρουν ό,τι υλικά χρειάζονται για το βραδινό. Είναι μια ωραία αφορμή να τεντώσεις τα πόδια σου και να πιάσεις κουβέντα με τον μαγαζάτορα της γειτονιάς.

Κάθε μέρα διαλέγεις μια συνταγή, μετά ελέγχεις τι υπάρχει στο ψυγείο και σημειώνεις τι πρέπει να αγοράσεις.

Τώρα αποφάσισες να κάνεις τη ζωή σου λίγο πιο εύκολη, γράφοντας ένα πρόγραμμα που θα κάνει τη δύσκολη δουλειά για σένα! Ελέγχει τι υπάρχει στη λίστα σου σε σχέση με το τι υπάρχει στο ψυγείο και βγάζει τη διαφορά.

Η δουλειά σου είναι να γράψεις μια συνάρτηση με το όνομα `shoppingList(fridgeContents, recipeItems)` (λίστα αγορών). Παίρνει δύο εισόδους: το περιεχόμενο του ψυγείου σου ως πίνακα συμβολοσειρών και τα υλικά της συνταγής, επίσης ως πίνακα συμβολοσειρών. Θα πρέπει να επιστρέφει ό,τι χρειάζεται να αγοράσεις, ως πίνακα συμβολοσειρών.

Για παράδειγμα:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### Η μέθοδος push

Για να λύσεις την άσκηση πρέπει να χτίσεις τον πίνακά σου χρησιμοποιώντας τη μέθοδο `.push(element)`. Επιτρέπεται να δημιουργήσεις μόνο έναν νέο πίνακα στον κώδικά σου. Δες ξανά το προηγούμενο βίντεο αν δεν είσαι σίγουρος τι να κάνεις.

Ίσως σου φανεί χρήσιμη και η μέθοδος `includes` (δες παρακάτω για μια υπενθύμιση).

Καλή διασκέδαση!
