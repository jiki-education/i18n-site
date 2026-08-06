---
lang: "ko"
type: "exercise"
slug: "hello"
title: "인사"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "c80036b"
content_version: "fb747c8e6288"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"`sayHello` 함수 만들기"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"이름을 받아서 'Hello, [name]!' 형식의 인사말을 반환하는 `sayHello` 함수를 작성하세요."}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Aiko에게 인사하기"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"'Hello, Aiko!'를 반환하기"},{"key":"helloPriya.name","english":"Greet Priya","target":"Priya에게 인사하기"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"'Hello, Priya!'를 반환하기"},{"key":"helloMei.name","english":"Greet Mei","target":"Mei에게 인사하기"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"'Hello, Mei!'를 반환하기"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"만들려는 답의 기본 형태는 무엇일까요?"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"세 부분을 합쳐서: 고정된 시작 부분 `\"Hello, \"`, 그다음에 이름, 그리고 고정된 끝 부분 `\"!\"`."},{"key":"joinStrings.question","english":"How do I join strings together?","target":"문자열을 어떻게 합칠 수 있나요?"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"`+`를 사용한 문자열 연결이나 `${}` 자리표시자를 사용한 템플릿 문자열을 통해 세 부분을 하나의 문자열로 합쳐 보세요."}]}]}]
---

다음 두 연습 문제에서는 함수 만들기 연습을 이어가면서 문자열 조작도 시작해 볼 거예요.

먼저 가장 간단한 경우부터 살펴볼게요.

여기서 할 일은 `sayHello(name)`(인사하기) 함수를 만드는 거예요.

이 함수는 전달받은 이름에 맞춰 인사말을 반환해요. 예를 들어 `sayHello("Jeremy")`라고 쓰면 `"Hello, Jeremy!"`를 반환하고, `sayHello("Nicole")`이라고 쓰면 `"Hello, Nicole!"`을 반환해요.

이번 문제는 금방 끝나면서, 더 재미있는 다음 문제를 위한 기초가 되어 줄 거예요.
