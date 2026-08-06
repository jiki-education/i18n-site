---
lang: "ko"
type: "exercise"
slug: "pangram"
title: "Pangram"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/pangram"
en_md5: "205c5f475fea9213d1eaedbe6583844e"
governance_sha: "c80036b"
content_version: "31e07aff4959"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkPangram.name","english":"Check Pangram","target":"팬그램 확인"},{"key":"checkPangram.description","english":"Write a function that checks if a sentence is a pangram (contains every letter of the alphabet at least once). The check should be case-insensitive.","target":"문장이 팬그램(알파벳 모든 글자를 최소 한 번 이상 포함)인지 확인하는 함수를 만들어요. 대소문자는 구분하지 않아요."}]},{"name":"scenarios","rows":[{"key":"pangramEmptySentence.name","english":"Empty sentence","target":"빈 문장"},{"key":"pangramEmptySentence.description","english":"An empty sentence is not a pangram.","target":"빈 문장은 팬그램이 아니에요."},{"key":"pangramPerfectLowercase.name","english":"Perfect lowercase","target":"완벽한 소문자"},{"key":"pangramPerfectLowercase.description","english":"A perfect lowercase alphabet is a pangram.","target":"완벽한 소문자 알파벳은 팬그램이에요."},{"key":"pangramOnlyLowercase.name","english":"Only lowercase","target":"소문자만"},{"key":"pangramOnlyLowercase.description","english":"A sentence with only lowercase letters covering all letters is a pangram.","target":"소문자로만 이루어져 모든 글자를 포함하는 문장은 팬그램이에요."},{"key":"pangramMissingX.name","english":"Missing letter 'x'","target":"글자 'x' 없음"},{"key":"pangramMissingX.description","english":"A sentence missing the letter 'x' is not a pangram.","target":"글자 'x'가 없는 문장은 팬그램이 아니에요."},{"key":"pangramMissingH.name","english":"Missing letter 'h'","target":"글자 'h' 없음"},{"key":"pangramMissingH.description","english":"A sentence missing the letter 'h' is not a pangram.","target":"글자 'h'가 없는 문장은 팬그램이 아니에요."},{"key":"pangramMissingAM.name","english":"Missing letters beyond a-m","target":"a~m 이후 글자 누락"},{"key":"pangramMissingAM.description","english":"A string with 'a' to 'm' in lowercase and uppercase is not a pangram.","target":"소문자와 대문자로 'a'부터 'm'까지만 있는 문자열은 팬그램이 아니에요."},{"key":"pangramWithUnderscores.name","english":"With underscores","target":"밑줄 포함"},{"key":"pangramWithUnderscores.description","english":"A pangram sentence with underscores.","target":"밑줄이 포함된 팬그램 문장이에요."},{"key":"pangramWithNumbers.name","english":"With numbers","target":"숫자 포함"},{"key":"pangramWithNumbers.description","english":"A pangram sentence with numbers included.","target":"숫자가 포함된 팬그램 문장이에요."},{"key":"pangramNumbersReplacingLetters.name","english":"Numbers replacing letters","target":"글자를 숫자로 대체"},{"key":"pangramNumbersReplacingLetters.description","english":"A sentence where letters are replaced by numbers is not a pangram.","target":"글자를 숫자로 대체한 문장은 팬그램이 아니에요."},{"key":"pangramMixedCasePunctuation.name","english":"Mixed case and punctuation","target":"대소문자 혼합과 구두점"},{"key":"pangramMixedCasePunctuation.description","english":"A pangram with mixed case and punctuation.","target":"대소문자와 구두점이 섞인 팬그램이에요."},{"key":"pangramCaseInsensitive.name","english":"Case insensitive missing letters","target":"대소문자 무시, 글자 누락"},{"key":"pangramCaseInsensitive.description","english":"A case-insensitive sentence without all letters is not a pangram.","target":"대소문자를 구분하지 않아도 모든 글자가 없으면 팬그램이 아니에요."}]},{"name":"hints","rows":[{"key":"helpers.question","english":"What helpers will save me trouble here?","target":"어떤 도우미 함수가 도움이 될까요?"},{"key":"helpers.answer","english":"A `includes()` helper (which asks 'does this character appear in this string?') and a `toLowerCase()` helper (so case differences don't trip you up) make the main logic short and clear.","target":"`includes()` 도우미 함수(이 문자가 이 문자열에 있는지 확인하는)와 `toLowerCase()` 도우미 함수(대소문자 차이로 헷갈리지 않게)를 만들면 주요 로직이 간결하고 명확해져요."},{"key":"whyLowercase.question","english":"Why should I lowercase the sentence?","target":"왜 문장을 소문자로 바꿔야 하나요?"},{"key":"whyLowercase.answer","english":"'The quick brown fox...' contains both 'T' and 't'. If you only check against lowercase letters, the capitals won't match. Convert the sentence to lowercase once at the start so every comparison is consistent.","target":"'The quick brown fox...'에는 'T'와 't'가 모두 있어요. 소문자만 확인하면 대문자가 일치하지 않아요. 처음에 문장을 소문자로 바꾸면 모든 비교가 일관되게 처리돼요."},{"key":"checkEveryLetter.question","english":"How do I check every letter is there?","target":"모든 글자가 있는지 어떻게 확인하나요?"},{"key":"checkEveryLetter.answer","english":"Loop through each letter of the alphabet `\"abcdefghijklmnopqrstuvwxyz\"`. For each, use `includes()` to check if it appears in the lowercased sentence.","target":"알파벳 `\"abcdefghijklmnopqrstuvwxyz\"`의 각 글자를 순회하면서, 각 글자에 대해 `includes()`를 사용해 소문자로 바꾼 문장에 나타나는지 확인해요."},{"key":"stopEarly.question","english":"When can I stop early?","target":"언제 중단할 수 있나요?"},{"key":"stopEarly.answer","english":"As soon as you find a letter that's missing, return `false`. There's no point checking the rest. Only return `true` after the entire alphabet has been confirmed.","target":"빠진 글자를 발견하면 즉시 `false`를 반환해요. 나머지를 더 확인할 필요가 없어요. 모든 알파벳을 다 확인한 후에만 `true`를 반환해요."}]}]}]
---

팬그램 시리즈의 두 번째 문제에 오신 것을 환영해요. 팬그램은 알파벳의 모든 글자를 적어도 한 번 이상 사용한 문장을 말해요.

이번 문제는 이전에 풀었던 팬그램 문제보다 복잡해요. 대문자도 함께 다루기 때문이죠. 그로 인해 생각보다 훨씬 복잡해져요.

`isPangram`(팬그램 판별)이라는 함수를 만들어요. 이 함수는 문장을 문자열로 받아서, 팬그램인지 아닌지를 나타내는 불리언 값을 반환해요.

시작점으로 이전 코드를 제공했어요.

### 도우미 함수

기존에 작성한 도우미 함수(이름을 `includes`로 지었을 거예요) 외에도, 이 문제를 해결하기 위해 두 개의 새로운 도우미 함수를 만드는 것을 추천해요. 함수 이름은 표준으로 통일하는 편이 좋아요.

1. `indexOf(건초더미, 바늘)`: 건초더미에서 바늘이 **어디에** 있는지 계산하는 함수예요. `includes`처럼 `true`/`false`를 반환하는 대신, 바늘의 **인덱스**를 반환해요. 예를 들어 `indexOf("Jeremy", "r")`는 `2`를 반환해요 (0부터 센다는 점을 기억하세요).
2. `toLowerCase(문자열)`: 문자열을 받아 소문자로 변환한 결과를 반환하는 함수예요. 예를 들어 `toLowerCase("JeReMy")`는 `"jeremy"`를 반환해요.

재미있게 풀어봐요!
