---
lang: "ko"
type: "exercise"
slug: "sign-price"
title: "간판 가격"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/sign-price"
en_md5: "213371ff2930f42dcaf9062f99d59618"
governance_sha: "c80036b"
content_version: "9d5df547ffc0"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"코드 줄이 너무 많아요. 더 짧게 만들어 볼 수 있을까요?"}]},{"name":"tasks","rows":[{"key":"calculateSignPrice.name","english":"Calculate Sign Price","target":"간판 가격 계산하기"},{"key":"calculateSignPrice.description","english":"Write a function that calculates the price of a sign. Each letter costs $12. Spaces are free and should not be counted. Return the result as a formatted string.","target":"간판의 가격을 계산하는 함수를 작성해요. 글자 하나는 $12이고, 공백은 무료라서 세지 않아요. 결과를 형식이 지정된 문자열로 반환해요."},{"key":"solveInNineLines.name","english":"Solve in 9 lines of code","target":"코드 9줄로 풀기"},{"key":"solveInNineLines.description","english":"Can you solve this exercise with only 9 lines of code?","target":"이 연습 문제를 코드 9줄만으로 풀 수 있을까요?"}]},{"name":"scenarios","rows":[{"key":"simpleWord.name","english":"Simple word","target":"간단한 단어"},{"key":"simpleWord.description","english":"A single word with no spaces.","target":"공백이 없는 단어 하나."},{"key":"singleLetter.name","english":"Single letter","target":"글자 하나"},{"key":"singleLetter.description","english":"A sign with just one letter.","target":"글자가 하나뿐인 간판."},{"key":"twoWords.name","english":"Two words","target":"두 단어"},{"key":"twoWords.description","english":"Two words with a space that should be skipped.","target":"공백 하나를 건너뛰어야 하는 두 단어."},{"key":"multipleSpaces.name","english":"Multiple spaces","target":"공백 여러 개"},{"key":"multipleSpaces.description","english":"Multiple words with several spaces to skip.","target":"건너뛰어야 할 공백이 여러 개 있는 여러 단어."},{"key":"longText.name","english":"Long text","target":"긴 텍스트"},{"key":"longText.description","english":"A longer sign with more letters.","target":"글자가 더 많은 긴 간판."},{"key":"allSpaces.name","english":"All spaces","target":"공백만 있음"},{"key":"allSpaces.description","english":"A sign with only spaces has no letters to charge for.","target":"공백만 있는 간판은 청구할 글자가 없어요."},{"key":"bonus1.name","english":"9 lines of code","target":"코드 9줄"},{"key":"bonus1.description","english":"Solve the exercise with only 9 lines of code.","target":"코드 9줄만으로 연습 문제 풀기"}]},{"name":"hints","rows":[{"key":"whatCounting.question","english":"What am I actually counting?","target":"실제로 무엇을 세고 있나요?"},{"key":"whatCounting.answer","english":"Letters. Specifically, anything that isn't a space. So you want a counter that goes up for each non-space character in the sign text.","target":"글자예요. 정확히는 공백이 아닌 모두를 세는 거예요. 그러니까 간판 문자열에서 공백이 아닌 문자마다 하나씩 올라가는 카운터를 만들면 돼요."},{"key":"loopCharacters.question","english":"How do I loop through the characters?","target":"문자를 어떻게 하나씩 살펴보나요?"},{"key":"loopCharacters.answer","english":"A `for...of` loop gives you each character in turn, so you can look at them one at a time.","target":"`for...of`문을 사용하면 각 문자를 차례대로 가져올 수 있어요. 그래서 한 번에 하나씩 볼 수 있어요."},{"key":"checkSpace.question","english":"How do I check whether a character is a space?","target":"문자가 공백인지 어떻게 확인하나요?"},{"key":"checkSpace.answer","english":"Inside the loop, use an if-statement to compare the character against `\" \"`. Only count the character when it isn't a space.","target":"루프 안에서 if문을 사용해 문자를 `\" \"`와 비교해요. 공백이 아닐 때만 문자를 세요."},{"key":"buildResultString.question","english":"How do I build the result string?","target":"결과 문자열을 어떻게 만드나요?"},{"key":"buildResultString.answer","english":"Use string concatenation or template strings. Check the concepts if you need a reminder on these.","target":"문자열 연결이나 템플릿 문자열을 사용해요. 이에 대해 다시 보고 싶다면 개념을 확인해 보세요."}]}]}]
---

간판 제작소를 운영하고 있어요. 간판마다 글자 하나에 $12를 받고, 공백은 무료예요(비용이 들지 않아요).

간판 문구를 받아 총 가격이 포함된 형식의 메시지를 반환하는 `signPrice`(간판 가격)라는 함수를 작성하세요. 반환할 문자열은 `"That will cost "`(가격을 알려주는 구절) 뒤에 가격이 붙는 형태예요. 예를 들어:

- `signPrice("Burgers")`(글자 7개)는 `"That will cost $84"`를 반환해야 해요.
- `signPrice("Frank's Hotdogs")`(글자 14개, 공백 제외)는 `"That will cost $168"`를 반환해야 해요.

재미있게 풀어봐요!
