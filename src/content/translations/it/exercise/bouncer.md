---
lang: "it"
type: "exercise"
slug: "bouncer"
title: "Buttafuori"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "c50ef8d"
content_version: "977c41a2a79e"
published_at: "2026-08-04"
forum_topic_id: 1177
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"La persona ha 25 anni: avrebbe dovuto essere fatta entrare, ma non lo è stata."},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"La persona ha 18 anni: non avrebbe dovuto essere fatta entrare, ma lo è stata."},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"La persona ha 21 anni: avrebbe dovuto essere fatta entrare, ma non lo è stata."},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"La persona ha esattamente 20 anni: non ha più di 20 anni, quindi non avrebbe dovuto essere fatta entrare, ma lo è stata."}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"Controlla l'età della persona"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"Ottieni l'età della persona e controlla se ha più di 20 anni. Se sì, falla entrare."}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"Età 25"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"La persona ha 25 anni: dovrebbe essere fatta entrare."},{"key":"age18.name","english":"Age 18","target":"Età 18"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"La persona ha 18 anni: non dovrebbe essere fatta entrare."},{"key":"age21.name","english":"Age 21","target":"Età 21"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"La persona ha 21 anni: appena sopra i 20, dovrebbe essere fatta entrare."},{"key":"age20.name","english":"Age 20","target":"Età 20"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"La persona ha esattamente 20 anni: non ha più di 20, quindi non dovrebbe essere fatta entrare."}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"Come faccio a sapere la loro età?"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"Usa la funzione `askAge()`. Restituirà un valore diverso in ogni scenario."},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"Come faccio a variare ciò che faccio?"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"Usa un'istruzione `if`. Dai un'occhiata al concetto se hai bisogno di più aiuto!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"ha chiesto l'età della persona"},{"key":"letIn","english":"let the person in","target":"ha fatto entrare la persona"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"Restituisce l'**età** della persona in attesa fuori."},{"key":"askAge.category","english":"Information","target":"Informazione"},{"key":"letIn.description","english":"Lets the person in.","target":"Fa entrare la persona."},{"key":"letIn.category","english":"Action","target":"Azione"}]}]}]
---

Stai programmando un buttafuori robotico per il bar The Neon Gates. Il compito del robot è controllare l'età di una persona e decidere se farla entrare.

Hai a disposizione due funzioni:

- `askAge()` (chiedi l'età) restituisce l'età della persona in attesa fuori
- `letIn()` (fai entrare) fa entrare la persona

La regola del locale è che possono entrare solo le persone **di almeno 21 anni**.

Chiedi l'età della persona e, se ha l'età richiesta, falla entrare!
