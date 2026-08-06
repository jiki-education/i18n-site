---
lang: "ko"
type: "exercise"
slug: "reverse-string"
title: "문자열 뒤집기"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "c80036b"
content_version: "79a42a518a19"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"문자열 뒤집기"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"왼쪽에서 오른쪽이 아닌, 오른쪽에서 왼쪽으로 읽히도록 문자열을 뒤집어요."}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"빈 문자열"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"빈 문자열을 뒤집으면 빈 문자열이 반환돼야 해요."},{"key":"reverseWord.name","english":"A word","target":"단어"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"'robot'이라는 단어를 뒤집어요."},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"대문자로 시작하는 단어"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"'Ramen'이라는 대문자로 시작하는 단어를 뒤집어요."},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"문장 부호가 있는 문장"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"문장 부호가 포함된 문장 'I'm hungry!'을 뒤집어요."},{"key":"reversePalindrome.name","english":"Palindrome","target":"회문"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"회문은 뒤집어도 동일해요."},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"짝수 길이의 단어"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"'drawer'처럼 글자 수가 짝수인 단어를 뒤집어요."},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"전각 문자"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"'子猫' 같은 전각 문자를 뒤집어요."},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"가족 이모지"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"가족 이모지를 뒤집어요."},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"무지개 깃발"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"뒤집기로 무지개 깃발을 만들어요."}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"단어를 직접 손으로 뒤집으려면 어떻게 하나요?"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"왼쪽에서 오른쪽으로 읽지만, 오른쪽에서 왼쪽으로 써요. 또는 각 글자를 차례대로 가져와서 지금까지 쓴 것 앞에 붙여요."},{"key":"mapToCode.question","english":"How does that map to code?","target":"이걸 코드로 어떻게 바꿀까요?"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"입력 문자열을 한 글자씩 루프를 돌아요. 각 글자에 대해, 결과 앞에 붙여서 결과를 만들어요. 즉, 결과의 뒤가 아니라 앞에 넣는 거예요."},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"'뒤에 붙이기' 대신 '앞에 붙이기'를 어떻게 하나요?"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"`+` 연산자를 사용하면, 앞에 붙이기는 순서만 바꾸면 돼요. `result + char` (뒤에 붙이기) 대신 `char + result` (앞에 붙이기)를 사용해요."}]}]}]
---

문자열을 뒤집는 것(왼쪽에서 오른쪽이 아닌, 오른쪽에서 왼쪽으로 읽는 것)은 프로그래밍에서 의외로 흔한 작업이에요.

예를 들어, 생물정보학에서 DNA나 RNA 문자열의 서열을 뒤집는 것은 상보적 가닥을 찾거나 회문 서열을 식별하는 등 다양한 분석에 종종 중요하게 쓰여요.

과제는 `reverse`(뒤집기)라는 함수를 만드는 거예요. 이 함수는 문자열을 입력으로 받아서 뒤집어진 문자열을 반환해요.

예:

- "stressed"를 "desserts"로 바꾸기
- "strops"를 "sports"로 바꾸기
- "racecar"를 "racecar"로 바꾸기 (회문)

### 마지막 두 시나리오...

마지막 두 시나리오는 이상해 보이죠? 무슨 일이 일어나는 걸까요?

사실 많은 이모지들은 숨겨진(너비가 0인) 공백으로 다른 이모지들이 합쳐져 만들어진다는 거예요.

가족 이모지(👩‍👩‍👧‍👦)는 여성 두 명과 아이 두 명으로 구성돼요. 뒤집으면 개별 문자들(👦‍👧‍👩‍👩)을 볼 수 있어요.

다른 하나는 무지개와 깃발(🌈‍️🏳)이에요. 순서를 뒤집어서 깃발 다음에 무지개가 오면 무지개 깃발(🏳️‍🌈️)이 돼요!

결과를 한 글자씩 만들어 나가면 이들은 그냥 잘 작동해요. 대신 더 교묘한 방법을 써 보면 이모지가 깨질 수도 있어요.
