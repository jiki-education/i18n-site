---
lang: "ko"
type: "exercise"
slug: "lower-pangram"
title: "간단한 팬그램"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/lower-pangram"
en_md5: "5559219b53e3710c746f0bffd6314e62"
governance_sha: "c80036b"
content_version: "80d9b1c8217a"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"noNestedLoops","english":"Try not to put one loop inside another. Move the search for a single letter into its own function, then call it from <code>isPangram</code>.","target":"루프 안에 또 다른 루프를 넣지 않도록 해 보세요. 한 글자를 찾는 부분을 별도의 함수로 분리한 다음, <code>isPangram</code>에서 그 함수를 호출해 보세요."},{"key":"tooManyLines","english":"Almost! See if you can solve it in fewer lines by leaning on your helper function.","target":"거의 다 왔어요! 헬퍼 함수를 활용하면 더 적은 줄로 해결할 수 있어요."}]},{"name":"tasks","rows":[{"key":"checkLowerPangram.name","english":"Check Lower Pangram","target":"소문자 팬그램 확인하기"},{"key":"checkLowerPangram.description","english":"Write a function that checks whether a lowercase sentence contains every letter of the alphabet. Have it call a small helper function to do the per-letter search.","target":"소문자로 된 문장이 알파벳의 모든 글자를 포함하는지 확인하는 함수를 작성해 보세요. 각 글자 검색은 작은 헬퍼 함수를 호출하여 처리하도록 해요."},{"key":"decomposeTightly.name","english":"Solve it in 16 lines","target":"16줄로 풀어보기"},{"key":"decomposeTightly.description","english":"Bonus: with the search pulled out into a helper, the whole solution fits in 16 lines. Can you match it?","target":"보너스: 검색 부분을 헬퍼 함수로 분리하면 전체 코드를 16줄 안에 작성할 수 있어요. 한번 해볼까요?"}]},{"name":"scenarios","rows":[{"key":"lowerPangramEmpty.name","english":"Empty sentence","target":"빈 문장"},{"key":"lowerPangramEmpty.description","english":"An empty sentence is not a pangram.","target":"빈 문장은 팬그램이 아니에요."},{"key":"lowerPangramFullAlphabet.name","english":"Full lowercase alphabet","target":"알파벳 전체 소문자"},{"key":"lowerPangramFullAlphabet.description","english":"The complete lowercase alphabet is a pangram.","target":"알파벳 소문자 전체는 팬그램이에요."},{"key":"lowerPangramClassic.name","english":"Classic pangram","target":"클래식 팬그램"},{"key":"lowerPangramClassic.description","english":"The classic pangram sentence contains all 26 letters.","target":"전형적인 팬그램 문장은 26개의 글자를 모두 포함해요."},{"key":"lowerPangramMissingX.name","english":"Missing letter 'x'","target":"'x' 글자 없음"},{"key":"lowerPangramMissingX.description","english":"A sentence missing the letter 'x' is not a pangram.","target":"'x' 글자가 빠진 문장은 팬그램이 아니에요."},{"key":"lowerPangramMissingH.name","english":"Missing letter 'h'","target":"'h' 글자 없음"},{"key":"lowerPangramMissingH.description","english":"A sentence missing the letter 'h' is not a pangram.","target":"'h' 글자가 빠진 문장은 팬그램이 아니에요."},{"key":"lowerPangramWithUnderscores.name","english":"With underscores","target":"밑줄이 있는 문장"},{"key":"lowerPangramWithUnderscores.description","english":"A pangram with underscores instead of spaces.","target":"공백 대신 밑줄을 사용한 팬그램."},{"key":"lowerPangramWithNumbers.name","english":"With numbers","target":"숫자가 포함된 문장"},{"key":"lowerPangramWithNumbers.description","english":"A pangram with numbers included.","target":"숫자가 포함된 팬그램."},{"key":"lowerPangramNumbersReplacingLetters.name","english":"Numbers replacing letters","target":"글자를 숫자로 대체한 문장"},{"key":"lowerPangramNumbersReplacingLetters.description","english":"A sentence where letters are replaced by numbers is not a pangram.","target":"글자가 숫자로 대체된 문장은 팬그램이 아니에요."},{"key":"lowerPangramBonusLineCount.name","english":"Tight and tidy","target":"간결하고 깔끔하게"},{"key":"lowerPangramBonusLineCount.description","english":"The complete solution fits in 16 lines when the search lives in its own function.","target":"검색을 별도 함수로 분리하면 전체 코드가 16줄 안에 들어맞아요."}]},{"name":"hints","rows":[{"key":"whereToStart.question","english":"Where do I start?","target":"어디서부터 시작해야 할까요?"},{"key":"whereToStart.answer","english":"You need to check whether every letter of the alphabet is in the string. So you're going to need to do some looping and comparing.","target":"알파벳 모든 글자가 문자열에 포함되어 있는지 확인해야 해요. 그러려면 루프를 돌면서 비교하는 과정이 필요할 거예요."},{"key":"checkEveryLetter.question","english":"How do I check that every letter of the alphabet is there?","target":"알파벳 모든 글자가 있는지 어떻게 확인하나요?"},{"key":"checkEveryLetter.answer","english":"Loop through `\"abcdefghijklmnopqrstuvwxyz\"`, one letter at a time. For each letter, check whether the sentence contains it.","target":"`\"abcdefghijklmnopqrstuvwxyz\"` 문자열을 순회하며, 한 글자씩 문장에 들어있는지 확인해 보세요."},{"key":"avoidNestedLoops.question","english":"I've solved the exercise but I don't know how to use the helper function.","target":"연습 문제는 풀었는데 헬퍼 함수를 어떻게 사용해야 할지 모르겠어요."},{"key":"avoidNestedLoops.answer","english":"If you've solved this, it's likely you have one outer loop and then an inner loop. That inner loop is checking if something includes something else. Extracting the inner loop into a helper function called `includes(...)`, and then use that from in the outer loop, is probably a good approach. A helper function is just a normal function defined in the normal way.","target":"이미 해결하셨다면, 아마 바깥쪽 루프 하나와 안쪽 루프 하나를 사용하셨을 거예요. 그 안쪽 루프는 어떤 것을 포함하는지 확인하고 있을 텐데요. 안쪽 루프를 `includes(...)`라는 헬퍼 함수로 분리한 다음, 바깥쪽 루프에서 그 함수를 호출해 보세요. 헬퍼 함수는 평범한 방법으로 정의한 일반 함수일 뿐이에요."}]}]}]
---

팬그램(영어: _pangram_)은 알파벳의 모든 글자를 적어도 한 번 이상 사용하는 문장이에요. 가장 잘 알려진 영어 팬그램은 "the quick brown fox jumps over the lazy dog"예요!

이어지는 세 개의 연습 문제는 모두 문장이 팬그램인지 판별하는 내용이에요.

이 첫 번째 연습 문제에서는 소문자만 다루면 돼요. 입력에는 소문자와 공백, 숫자, 구두점 같은 다른 문자만 들어 있고, 대문자는 전혀 없어요.

여러분의 할 일은 `isPangram(sentence)`(문장이 팬그램인지 확인하는 함수)를 작성하는 거예요. 이 함수는 문장을 입력으로 받아서, "a"부터 "z"까지의 모든 글자를 적어도 한 번씩 포함하면 `true`를, 그렇지 않으면 `false`를 반환해요.

### 헬퍼 함수

이 연습 문제를 통과하려면 중첩 루프를 사용하면 안 돼요. 대신, 이전 연습 문제처럼, 핵심은 `isPangram(...)`이 사용할 **헬퍼 함수**를 만드는 거예요.

이 헬퍼 함수는 어떤 문자열이 다른 문자열을 포함하는지 판별하는 데 도움을 줄 거예요. 함수 이름을 `includes`로 짓고, 입력으로는 `haystack`(건초더미)과 `needle`(바늘)을 사용하는 걸 추천해요. 여기에는 "건초더미에서 바늘 찾기"라는 오래된 영어 속담에서 따온 아이디어가 담겨 있어요.

여러 함수를 만드는 게 부담스럽다면, 먼저 헬퍼 함수 없이 중첩 루프를 사용해 문제를 해결한 뒤, 그 코드를 어떻게 헬퍼 함수로 분리할지 고민해 봐도 좋아요.

재미있게 풀어봐요!
