---
lang: "sr"
type: "exercise"
slug: "bouncer"
title: "Izbacivač"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "c80036b"
content_version: "4ad4e737f429"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"Osoba ima 25 godina — trebalo je da bude puštena unutra, ali nije."},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"Osoba ima 18 godina — nije trebalo da bude puštena unutra, ali jeste."},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"Osoba ima 21 godinu — trebalo je da bude puštena unutra, ali nije."},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"Osoba ima tačno 20 godina — nije preko 20, tako da nije trebalo da bude puštena unutra, ali jeste."}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"Proveri godine osobe"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"Dobavi godine osobe i proveri da li ima preko 20 godina. Ako ima, pusti je unutra."}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"25 godina"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"Osoba ima 25 godina — treba da bude puštena unutra."},{"key":"age18.name","english":"Age 18","target":"18 godina"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"Osoba ima 18 godina — ne treba da bude puštena unutra."},{"key":"age21.name","english":"Age 21","target":"21 godina"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"Osoba ima 21 godinu — tek preko 20, treba da bude puštena unutra."},{"key":"age20.name","english":"Age 20","target":"20 godina"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"Osoba ima tačno 20 godina — nije preko 20, tako da ne treba da bude puštena unutra."}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"Kako da saznam koliko ima godina?"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"Koristi funkciju `askAge()`. Ona će vratiti različitu vrednost u svakom scenariju."},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"Kako da menjam ono što radim?"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"Koristi `if` naredbu — pogledaj koncept ako ti treba dodatna pomoć!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"pitao za godine osobe"},{"key":"letIn","english":"let the person in","target":"pustio osobu unutra"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"Vraća **godine** osobe koja čeka napolju."},{"key":"askAge.category","english":"Information","target":"Informacije"},{"key":"letIn.description","english":"Lets the person in.","target":"Pušta osobu unutra."},{"key":"letIn.category","english":"Action","target":"Akcija"}]}]}]
---

Kodiraš robotskog izbacivača za bar „Neon Gates“. Posao robota je da proveri nečije godine i odluči da li da ih pusti unutra.

Imaš dve funkcije:

- `askAge()` (pita za godine) vraća godine osobe koja čeka napolju
- `letIn()` (pušta unutra) pušta osobu unutra

Pravila lokala kažu da su dozvoljeni samo oni **sa 21 godinom i stariji**.

Pitaj osobu za godine, i ako su dovoljno stari, pusti ih unutra!
