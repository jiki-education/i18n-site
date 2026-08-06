---
lang: "ko"
type: "exercise"
slug: "driving-test"
title: "운전면허 시험"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/driving-test"
en_md5: "98e0dc4c13cbedbd859f1cf05363faa2"
governance_sha: "c80036b"
content_version: "f3b1c4a1bc36"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"코드 줄 수가 너무 많아요. 더 짧게 만들 수 있을까요?"}]},{"name":"tasks","rows":[{"key":"didTheyPass.name","english":"Did They Pass?","target":"통과 여부 판단하기"},{"key":"didTheyPass.description","english":"Write a function that analyzes driving test marks and determines if the student passed. A student fails if they have any major faults (💥) or 5 or more minor faults (❌).","target":"운전 시험 표시를 분석하여 학생이 합격했는지 판단하는 함수를 작성하세요. 메이저 실수(💥)가 하나라도 있거나 마이너 실수(❌)가 5개 이상이면 불합격이에요."},{"key":"solveInElevenLines.name","english":"Solve in 12 lines of code","target":"12줄로 해결하기"},{"key":"solveInElevenLines.description","english":"Can you solve this exercise with only 12 lines of code?","target":"이 연습 문제를 단 12줄로 해결할 수 있을까요?"}]},{"name":"scenarios","rows":[{"key":"perfectMarks.name","english":"The perfect student!","target":"완벽한 학생!"},{"key":"perfectMarks.description","english":"They did everything right - wow!","target":"모든 걸 완벽하게 해냈어요 - 와!"},{"key":"dangerous.name","english":"Danger to society","target":"사회에 위험한 인물"},{"key":"dangerous.description","english":"We can't let this one on the road!","target":"이 사람은 도로에 내보낼 수 없어요!"},{"key":"oneBigMistake.name","english":"One big mistake","target":"큰 실수 하나"},{"key":"oneBigMistake.description","english":"One big mistake is all it takes to fail!","target":"큰 실수 하나면 불합격이에요!"},{"key":"scrapedThrough.name","english":"Scraped through","target":"아슬아슬하게 통과"},{"key":"scrapedThrough.description","english":"They cut it close but they passed!","target":"간신히 통과했어요!"},{"key":"oneMistakeTooMany.name","english":"One mistake too many!","target":"너무 많은 실수!"},{"key":"oneMistakeTooMany.description","english":"All those little errors added up.","target":"작은 실수들이 쌓였네요."},{"key":"bonus1.name","english":"12 lines of code","target":"12줄의 코드"},{"key":"bonus1.description","english":"Solve the exercise with only 12 lines of code.","target":"단 12줄로 연습 문제를 해결하세요."}]},{"name":"hints","rows":[{"key":"lookAtEachMark.question","english":"How do I look at each individual mark?","target":"각각의 표시를 어떻게 확인하나요?"},{"key":"lookAtEachMark.answer","english":"Loop through the marks string one character at a time. Each character is either ✅, ❌, or 💥.","target":"marks 문자열을 한 글자씩 반복해서 살펴보세요. 각 문자는 ✅, ❌, 💥 중 하나입니다."},{"key":"emojiInQuotes.question","english":"Why is my code complaining about 💥?","target":"왜 💥에 대해 오류가 발생하나요?"},{"key":"emojiInQuotes.answer","english":"Emoji like 💥 and ❌ still need to be wrapped in quotation marks. They're characters in a string just like letters are.","target":"💥이나 ❌ 같은 이모지도 따옴표 안에 넣어야 해요. 문자열 속의 문자도 알파벳과 마찬가지로 문자예요."},{"key":"majorFault.question","english":"What should I do when I see a 💥 (major)?","target":"💥(메이저)를 보면 어떻게 해야 하나요?"},{"key":"majorFault.answer","english":"Any single major fails the test, no matter what else has happened. So you can return `false` straight away as soon as you see one. There's no need to keep looking.","target":"메이저 실수가 하나라도 있으면 다른 건 상관없이 불합격이에요. 그래서 💥를 보는 즉시 `false`를 반환해도 돼요. 더 살펴볼 필요가 없어요."},{"key":"minorCount.question","english":"How do I handle minors, where the count matters?","target":"횟수가 중요한 마이너 실수는 어떻게 처리하나요?"},{"key":"minorCount.answer","english":"Keep a counter variable and add 1 to it each time you see a ❌. Ignore the ✅s, they don't change anything.","target":"카운터 변수를 하나 만들고 ❌를 볼 때마다 1씩 더하세요. ✅는 무시해도 돼요. 아무 영향도 안 줘요."},{"key":"finalCheck.question","english":"What do I check at the end?","target":"마지막에 무엇을 확인하나요?"},{"key":"finalCheck.answer","english":"Once the loop's finished and you haven't seen a major, the test passes if there were fewer than 5 minors. Return `true` if the minor count is less than 5, otherwise `false`.","target":"반복이 끝나고 메이저가 하나도 없었다면, 마이너 횟수가 5개 미만이면 시험에 통과해요. 마이너 횟수가 5 미만이면 `true`를, 그렇지 않으면 `false`를 반환해요."}]}]}]
---

영국에서 운전면허 시험을 볼 때, 관찰, 기술, 주차 등 여러 영역에서 평가를 받아요.

작은 실수('마이너')는 몇 개까지 괜찮지만, 큰 실수('메이저')는 하나라도 하면 안 돼요. 메이저 실수를 하나라도 하거나 마이너 실수가 5개 이상이면 불합격이에요. 그렇지 않으면 도로 주행을 하게 돼요!

한가한 시간에 운전면허 시험을 진행해요. 학생이 운전하는 동안 각 항목에 대해 다음과 같이 표시해요:

- 마이너 실수를 하면 표에 ❌를 추가해요
- 메이저 실수를 하면 💥를 추가해요
- 그 항목을 문제없이 통과하면 ✅를 적어요

`didTheyPass`(통과 여부를 판단하는 함수)라는 이름의 함수를 작성해요. 이 함수는 합격(✅), 마이너 실수(❌), 메이저 실수(💥) 기호가 들어 있는 문자열을 입력받아요. 통과 여부를 판단해서 통과하면 `true`를, 그렇지 않으면 `false`를 반환해야 해요.
