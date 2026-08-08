---
lang: "uk"
type: "exercise"
slug: "bouncer"
title: "Охоронець"
status: "published"
source_repo: "i18n"
source_path: "locales/uk/curriculum/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "15e00d5"
content_version: "6987f208cb7a"
published_at: "2026-08-08"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"Людині 25 років: її мали впустити, але не впустили."},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"Людині 18 років: її не мали впускати, але впустили."},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"Людині 21 рік: її мали впустити, але не впустили."},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"Людині рівно 20 років: це не більше ніж 20, тож її не мали впускати, але впустили."}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"Перевірте вік людини"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"Дізнайтеся вік людини та перевірте, чи він більший за 20. Якщо так, впустіть її."}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"Вік 25"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"Людині 25 років: її слід впустити."},{"key":"age18.name","english":"Age 18","target":"Вік 18"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"Людині 18 років: її не слід впускати."},{"key":"age21.name","english":"Age 21","target":"Вік 21"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"Людині 21 рік: це вже більше ніж 20, тож її слід впустити."},{"key":"age20.name","english":"Age 20","target":"Вік 20"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"Людині рівно 20 років: це не більше ніж 20, тож її не слід впускати."}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"Як дізнатися вік людини?"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"Скористайтеся функцією `askAge()`. У кожному сценарії вона буде повертати інше значення."},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"Як виконати різні дії залежно від ситуації?"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"Скористайтеся умовною конструкцією `if`. Якщо потрібна додаткова допомога, перегляньте відповідну сторінку концепції!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"запитав вік людини"},{"key":"letIn","english":"let the person in","target":"впустив людину"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"Повертає **вік** людини, яка чекає надворі."},{"key":"askAge.category","english":"Information","target":"Інформація"},{"key":"letIn.description","english":"Lets the person in.","target":"Впускає людину всередину."},{"key":"letIn.category","english":"Action","target":"Дія"}]}]}]
---

Ми програмуємо робота-охоронця для бару «Неонова Брама». Завдання робота: перевірити вік людини і вирішити, чи впускати її.

У нас є дві функції:

- `askAge()` (запитати вік) повертає вік людини, яка чекає надворі
- `letIn()` (впустити) впускає людину всередину

Правило закладу: всередину пускають лише тих, кому **21 рік або більше**.

Запитайте вік людини і, якщо вона достатньо доросла, впустіть її!
