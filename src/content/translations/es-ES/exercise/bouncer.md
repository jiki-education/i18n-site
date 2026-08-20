---
lang: "es-ES"
type: "exercise"
slug: "bouncer"
title: "Portero"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "16f805d"
content_version: "d4d11ccdf119"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"La persona tiene 25 años. Deberían haberla dejado entrar, pero no lo han hecho."},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"La persona tiene 18 años. No deberían haberla dejado entrar, pero lo han hecho."},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"La persona tiene 21 años. Deberían haberla dejado entrar, pero no lo han hecho."},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"La persona tiene exactamente 20 años. No tiene más de 20, así que no deberían haberla dejado entrar, pero lo han hecho."}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"Verificar la edad de la persona"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"Obtén la edad de la persona y verifica si tiene más de 20 años. Si es así, déjala entrar."}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"25 años"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"La persona tiene 25 años, deberían dejarla entrar."},{"key":"age18.name","english":"Age 18","target":"18 años"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"La persona tiene 18 años, no deberían dejarla entrar."},{"key":"age21.name","english":"Age 21","target":"21 años"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"La persona tiene 21 años, apenas por encima de 20, deberían dejarla entrar."},{"key":"age20.name","english":"Age 20","target":"20 años"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"La persona tiene exactamente 20 años. No tiene más de 20, así que no deberían dejarla entrar."}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"¿Cómo sé su edad?"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"Usa la función `askAge()`. Devolverá un valor diferente en cada escenario."},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"¿Cómo puedo variar lo que hago?"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"Usa una instrucción `if` - ¡revisa el concepto si necesitas más ayuda!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"preguntó la edad de la persona"},{"key":"letIn","english":"let the person in","target":"dejó entrar a la persona"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"Devuelve la **edad** de la persona que espera fuera."},{"key":"askAge.category","english":"Information","target":"Información"},{"key":"letIn.description","english":"Lets the person in.","target":"Deja entrar a la persona."},{"key":"letIn.category","english":"Action","target":"Acción"}]}]}]
---

Estás programando un portero robótico para el bar The Neon Gates. La tarea del robot es verificar la edad de alguien y decidir si dejarlo entrar.

Tienes dos funciones:

- `askAge()` (pide la edad) devuelve la edad de la persona que espera fuera
- `letIn()` (deja entrar) permite que la persona entre

La política del local es que solo se permite la entrada a personas de **21 años en adelante**.

Pregunta la edad de la persona, y si es lo suficientemente mayor, ¡déjala entrar!
