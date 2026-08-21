---
lang: "pt-BR"
type: "exercise"
slug: "bouncer"
title: "Segurança"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "bd48403"
content_version: "35fc8a6b1a9c"
published_at: "2026-08-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"A pessoa tem 25 anos, então ela devia ter entrado, mas não entrou."},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"A pessoa tem 18 anos, então ela não devia ter entrado, mas entrou."},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"A pessoa tem 21 anos, então ela devia ter entrado, mas não entrou."},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"A pessoa tem exatamente 20 anos, não tem mais de 20 anos, então ela não devia ter entrado, mas entrou."}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"Verifique a idade da pessoa"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"Obtenha a idade da pessoa e verifique se ela tem mais de 20 anos. Se tiver, deixe-a entrar."}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"Idade 25"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"A pessoa tem 25 anos, então ela deve entrar."},{"key":"age18.name","english":"Age 18","target":"Idade 18"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"A pessoa tem 18 anos, então ela não deve entrar."},{"key":"age21.name","english":"Age 21","target":"Idade 21"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"A pessoa tem 21 anos, pouco mais de 20, então ela deve entrar."},{"key":"age20.name","english":"Age 20","target":"Idade 20"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"A pessoa tem exatamente 20 anos, ou seja, não tem mais de 20 anos, então ela não deve entrar."}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"Como é que eu sei a idade da pessoa?"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"Use a função `askAge()`. Ela retorna um valor diferente em cada cenário."},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"Como é que eu posso variar o que faço?"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"Use uma condicional `if`. Consulte o conceito se você precisar de mais ajuda!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"perguntou a idade da pessoa"},{"key":"letIn","english":"let the person in","target":"deixou a pessoa entrar"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"Retorna a **idade** da pessoa que está esperando lá fora."},{"key":"askAge.category","english":"Information","target":"Informação"},{"key":"letIn.description","english":"Lets the person in.","target":"Deixa a pessoa entrar."},{"key":"letIn.category","english":"Action","target":"Ação"}]}]}]
---

Você está programando um segurança robô para o bar The Neon Gates. O trabalho do robô é verificar a idade de uma pessoa e decidir se deixa ela entrar.

Você tem duas funções:

- `askAge()` (pergunta a idade) retorna a idade da pessoa que está esperando lá fora.
- `letIn()` (deixa entrar) deixa a pessoa entrar.

A regra da balada é que só entram pessoas com **21 anos ou mais**.

Pergunte a idade da pessoa e, se tiver idade suficiente, deixe-a entrar!
