---
lang: "fr"
type: "exercise"
slug: "bouncer"
title: "Videur"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "84303b0"
content_version: "9ab243966bc8"
published_at: "2026-08-08"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"La personne a 25 ans : tu aurais dû la faire entrer, mais elle n'est pas entrée."},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"La personne a 18 ans : tu n'aurais pas dû la faire entrer, mais elle est entrée."},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"La personne a 21 ans : tu aurais dû la faire entrer, mais elle n'est pas entrée."},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"La personne a exactement 20 ans : ce n'est pas plus de 20 ans, donc tu n'aurais pas dû la faire entrer, mais elle est entrée."}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"Vérifie l'âge de la personne"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"Demande l'âge de la personne et vérifie si elle a plus de 20 ans. Si c'est le cas, fais-la entrer."}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"25 ans"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"La personne a 25 ans : elle devrait pouvoir entrer."},{"key":"age18.name","english":"Age 18","target":"18 ans"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"La personne a 18 ans : elle ne devrait pas pouvoir entrer."},{"key":"age21.name","english":"Age 21","target":"21 ans"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"La personne a 21 ans, juste au-dessus de 20 : elle devrait pouvoir entrer."},{"key":"age20.name","english":"Age 20","target":"20 ans"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"La personne a exactement 20 ans : ce n'est pas plus de 20 ans, donc elle ne devrait pas pouvoir entrer."}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"Comment connaître l'âge de la personne ?"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"Utilise la fonction `askAge()`. Elle renvoie une valeur différente dans chaque scénario."},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"Comment agir différemment selon les cas ?"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"Utilise une instruction `if`. Consulte le concept si tu as besoin d'aide !"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"a demandé l'âge de la personne"},{"key":"letIn","english":"let the person in","target":"a fait entrer la personne"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"Renvoie l'**âge** de la personne qui attend dehors."},{"key":"askAge.category","english":"Information","target":"Information"},{"key":"letIn.description","english":"Lets the person in.","target":"Fait entrer la personne."},{"key":"letIn.category","english":"Action","target":"Action"}]}]}]
---

Tu programmes un videur robotisé pour le bar The Neon Gates. Le travail du robot consiste à vérifier l'âge de chaque personne et à décider si elle peut entrer ou non.

Tu disposes de deux fonctions :

- `askAge()` (demander l'âge) renvoie l'âge de la personne qui attend dehors
- `letIn()` (faire entrer) fait entrer la personne

La politique de l'établissement veut que seules les personnes de **21 ans et plus** soient autorisées à entrer.

Demande son âge à la personne, et si elle est assez âgée, fais-la entrer !
