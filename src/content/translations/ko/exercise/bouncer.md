---
lang: "ko"
type: "exercise"
slug: "bouncer"
title: "바운서"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/bouncer"
en_md5: "eefcfb32249cce303d014044e557b2af"
governance_sha: "c80036b"
content_version: "5d5146ac5682"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"age25NotLetIn","english":"The person is 25 — they should have been let in, but weren't.","target":"25살이에요. 들여보내야 하는데, 들여보내지 않았어요."},{"key":"age18LetIn","english":"The person is 18 — they should not have been let in, but were.","target":"18살이에요. 들여보내면 안 되는데, 들여보냈어요."},{"key":"age21NotLetIn","english":"The person is 21 — they should have been let in, but weren't.","target":"21살이에요. 들여보내야 하는데, 들여보내지 않았어요."},{"key":"age20LetIn","english":"The person is exactly 20 — not over 20, so they should not have been let in, but were.","target":"정확히 20살이에요. 20살을 넘지 않았으니 들여보내면 안 되는데, 들여보냈어요."}]},{"name":"tasks","rows":[{"key":"checkAge.name","english":"Check the person's age","target":"나이 확인하기"},{"key":"checkAge.description","english":"Get the person's age and check if they're over 20. If they are, let them in.","target":"사람의 나이를 가져와서 20살을 넘었는지 확인하고, 넘었으면 들여보내 주세요."}]},{"name":"scenarios","rows":[{"key":"age25.name","english":"Age 25","target":"25살"},{"key":"age25.description","english":"The person is 25 years old — they should be let in.","target":"25살이에요. 들여보내야 해요."},{"key":"age18.name","english":"Age 18","target":"18살"},{"key":"age18.description","english":"The person is 18 years old — they should not be let in.","target":"18살이에요. 들여보내면 안 돼요."},{"key":"age21.name","english":"Age 21","target":"21살"},{"key":"age21.description","english":"The person is 21 years old — just above 20, they should be let in.","target":"21살이에요. 20살을 넘었으니 들여보내야 해요."},{"key":"age20.name","english":"Age 20","target":"20살"},{"key":"age20.description","english":"The person is exactly 20 — not over 20, so they should not be let in.","target":"정확히 20살이에요. 20살을 넘지 않았으니 들여보내면 안 돼요."}]},{"name":"hints","rows":[{"key":"askAge.question","english":"How do I know their age?","target":"나이를 어떻게 알 수 있나요?"},{"key":"askAge.answer","english":"Use the `askAge()` function. It will return a different value in each scenario.","target":"`askAge()` 함수를 사용하면 돼요. 각 시나리오마다 다른 값을 반환해요."},{"key":"ifStatement.question","english":"How do I vary what I do?","target":"어떻게 다르게 처리할 수 있나요?"},{"key":"ifStatement.answer","english":"Use an `if` statement - check the concept if you need more help!","target":"`if` 문을 사용해 보세요. 더 도움이 필요하면 개념을 확인해 보세요!"}]},{"name":"describers","rows":[{"key":"askAge","english":"asked the person's age","target":"사람의 나이를 물어봤어요"},{"key":"letIn","english":"let the person in","target":"사람을 들여보냈어요"}]},{"name":"functions","rows":[{"key":"askAge.description","english":"Returns the **age** of the person waiting outside.","target":"밖에서 기다리는 사람의 **나이**를 반환해요."},{"key":"askAge.category","english":"Information","target":"정보"},{"key":"letIn.description","english":"Lets the person in.","target":"사람을 들여보내요."},{"key":"letIn.category","english":"Action","target":"동작"}]}]}]
---

네온 게이트 바를 위해 로봇 바운서를 코딩하고 있어요. 로봇의 임무는 사람의 나이를 확인하고 입장 여부를 결정하는 거예요.

두 개의 함수가 있어요.

- `askAge()`(나이를 물어보는 함수)는 밖에서 기다리는 사람의 나이를 반환해요.
- `letIn()`(들여보내는 함수)는 사람을 들여보내요.

이 바의 규칙은 **21세 이상**만 입장할 수 있다는 거예요.

사람의 나이를 물어보고, 나이가 충분하면 들여보내 주세요!
