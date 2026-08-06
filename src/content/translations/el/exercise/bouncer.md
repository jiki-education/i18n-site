---
lang: "el"
type: "exercise"
slug: "bouncer"
title: "Πορτιέρης"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "e6000d2"
content_version: "262439384cb2"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"Το άτομο είναι 25 ετών — θα έπρεπε να το αφήσεις να μπει, αλλά δεν το άφησες."},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"Το άτομο είναι 18 ετών — δε θα έπρεπε να το αφήσεις να μπει, αλλά το άφησες."},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"Το άτομο είναι 21 ετών — θα έπρεπε να το αφήσεις να μπει, αλλά δεν το άφησες."},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"Το άτομο είναι ακριβώς 20 ετών — δεν είναι πάνω από 20, οπότε δε θα έπρεπε να το αφήσεις να μπει, αλλά το άφησες."}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"Έλεγξε την ηλικία του ατόμου"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"Πάρε την ηλικία του ατόμου και έλεγξε αν είναι πάνω από 20. Αν είναι, άφησέ το να μπει."}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"Ηλικία 25"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"Το άτομο είναι 25 ετών — θα πρέπει να αφεθεί να μπει."},{"key":"age18.name","english":"Age 18","target":"Ηλικία 18"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"Το άτομο είναι 18 ετών — δε θα πρέπει να αφεθεί να μπει."},{"key":"age21.name","english":"Age 21","target":"Ηλικία 21"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"Το άτομο είναι 21 ετών — μόλις πάνω από 20, θα πρέπει να αφεθεί να μπει."},{"key":"age20.name","english":"Age 20","target":"Ηλικία 20"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"Το άτομο είναι ακριβώς 20 ετών — δεν είναι πάνω από 20, οπότε δε θα πρέπει να αφεθεί να μπει."}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"Πώς ξέρω την ηλικία του;"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"Χρησιμοποίησε τη συνάρτηση `askAge()`. Θα επιστρέφει διαφορετική τιμή σε κάθε σενάριο."},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"Πώς μπορώ να κάνω κάτι διαφορετικό ανάλογα με την περίπτωση;"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"Χρησιμοποίησε μια εντολή `if` — έλεγξε την έννοια αν χρειάζεσαι περισσότερη βοήθεια!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"ρώτησε την ηλικία του ατόμου"},{"key":"letIn","english":"let the person in","target":"άφησε το άτομο να μπει"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"Επιστρέφει την **ηλικία** του ατόμου που περιμένει έξω."},{"key":"askAge.category","english":"Information","target":"Πληροφορίες"},{"key":"letIn.description","english":"Lets the person in.","target":"Αφήνει το άτομο να μπει."},{"key":"letIn.category","english":"Action","target":"Ενέργεια"}]}]}]
---

Προγραμματίζεις έναν ρομποτικό πορτιέρη για το μπαρ The Neon Gates. Η δουλειά του ρομπότ είναι να ελέγχει την ηλικία κάποιου και να αποφασίζει αν θα τον αφήσει να μπει.

Έχεις δύο συναρτήσεις:

- `askAge()` (ρωτά την ηλικία) επιστρέφει την ηλικία του ατόμου που περιμένει έξω
- `letIn()` (επιτρέπει την είσοδο) αφήνει το άτομο να μπει

Η πολιτική του μαγαζιού είναι ότι επιτρέπεται η είσοδος μόνο σε άτομα **21 ετών και άνω**. Ρώτα την ηλικία του ατόμου, και αν είναι αρκετά μεγάλο, άφησέ το να μπει!
