---
lang: "hu"
type: "exercise"
slug: "bouncer"
title: "Bouncer"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "c80036b"
content_version: "43c8921fc9e3"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"A személy 25 éves — be kellett volna engedned, de nem tetted."},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"A személy 18 éves — nem kellett volna beengedned, de beengetted."},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"A személy 21 éves — be kellett volna engedned, de nem tetted."},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"A személy pontosan 20 éves — nem 20 év feletti, ezért nem kellett volna beengedned, de beengetted."}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"Ellenőrizd a személy korát"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"Kérd le a személy korát, és ellenőrizd, hogy 20 év feletti-e. Ha igen, engedd be!"}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"25 éves"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"A személy 25 éves — be kell engedned."},{"key":"age18.name","english":"Age 18","target":"18 éves"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"A személy 18 éves — nem engedheted be."},{"key":"age21.name","english":"Age 21","target":"21 éves"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"A személy 21 éves — éppen 20 év feletti, be kell engedned."},{"key":"age20.name","english":"Age 20","target":"20 éves"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"A személy pontosan 20 éves — nem 20 év feletti, ezért nem engedheted be."}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"Hogyan tudhatom meg a korát?"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"Használd az `askAge()` függvényt. Minden forgatókönyvben más értéket ad vissza."},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"Hogyan változtathatom, hogy mit tegyek?"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"Használj egy `if` utasítást – nézd meg a fogalmat, ha több segítségre van szükséged!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"lekérdezte a személy korát"},{"key":"letIn","english":"let the person in","target":"beengette a személyt"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"Visszaadja a kint várakozó személy **korát**."},{"key":"askAge.category","english":"Information","target":"Információ"},{"key":"letIn.description","english":"Lets the person in.","target":"Beengedi a személyt."},{"key":"letIn.category","english":"Action","target":"Művelet"}]}]}]
---

Egy robotkidobót programozol a The Neon Gates bárhoz. A robot feladata, hogy ellenőrizze valaki életkorát, és eldöntse, beengeti-e.

Két függvényed van:

- `askAge()` (kérdezd le a kort) visszaadja a kint várakozó személy korát
- `letIn()` (engedj be) beengeti a személyt

A bár szabályzata szerint kizárólag **21 éves vagy idősebb** vendégek léphetnek be.

Kérdezd meg a személy korát, és ha elég idős, engedd be!
