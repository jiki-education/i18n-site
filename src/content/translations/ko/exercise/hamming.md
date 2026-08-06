---
lang: "ko"
type: "exercise"
slug: "hamming"
title: "Hamming"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hamming"
en_md5: "00c98b21780410fd419205c5850e1f4b"
governance_sha: "c80036b"
content_version: "1cf3b2b9780e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"You used more lines than needed — see if you can trim it down.","target":"코드가 필요 이상으로 길어요. 줄일 수 있는지 살펴보세요."}]},{"name":"tasks","rows":[{"key":"calculateHammingDistance.name","english":"Calculate the Hamming Distance","target":"해밍 거리 계산하기"},{"key":"calculateHammingDistance.description","english":"Write a function that calculates the Hamming distance between two DNA strands of equal length. The Hamming distance is the number of positions where the corresponding characters differ.","target":"길이가 같은 두 DNA 가닥 사이의 해밍 거리를 계산하는 함수를 작성하세요. 해밍 거리는 대응하는 문자가 서로 다른 위치의 개수예요."},{"key":"solveInElevenLines.name","english":"Solve in eleven lines of code","target":"코드 11줄로 해결하기"},{"key":"solveInElevenLines.description","english":"Can you solve this using no more than eleven lines of code?","target":"코드 11줄 이내로 이 문제를 풀어볼 수 있을까요?"}]},{"name":"scenarios","rows":[{"key":"hammingEmptyStrands.name","english":"Empty strands","target":"빈 가닥"},{"key":"hammingEmptyStrands.description","english":"Empty strands have a Hamming distance of 0.","target":"빈 가닥의 해밍 거리는 0이에요."},{"key":"hammingSingleLetterIdentical.name","english":"Single letter identical strands","target":"동일한 한 글자 가닥"},{"key":"hammingSingleLetterIdentical.description","english":"Single-letter identical strands have a Hamming distance of 0.","target":"한 글자로 이루어진 동일한 가닥의 해밍 거리는 0이에요."},{"key":"hammingLongIdenticalStrands.name","english":"Long identical strands","target":"긴 동일한 가닥"},{"key":"hammingLongIdenticalStrands.description","english":"Long identical strands have a Hamming distance of 0.","target":"긴 동일한 가닥의 해밍 거리는 0이에요."},{"key":"hammingSingleLetterDifferent.name","english":"Single letter different strands","target":"서로 다른 한 글자 가닥"},{"key":"hammingSingleLetterDifferent.description","english":"Single-letter different strands have a Hamming distance of 1.","target":"서로 다른 한 글자 가닥의 해밍 거리는 1이에요."},{"key":"hammingLongDifferentStrands.name","english":"Long different strands","target":"긴 서로 다른 가닥"},{"key":"hammingLongDifferentStrands.description","english":"Long strands with differences have a calculated Hamming distance.","target":"서로 다른 긴 가닥의 해밍 거리를 계산해요."},{"key":"hammingBonusElevenLines.name","english":"Eleven lines of code","target":"코드 11줄"},{"key":"hammingBonusElevenLines.description","english":"Solve the exercise using no more than eleven lines of code.","target":"코드 11줄 이내로 연습 문제를 풀어보세요."}]},{"name":"hints","rows":[{"key":"hammingDistanceMeaning.question","english":"What does 'Hamming distance' mean in plain terms?","target":"'해밍 거리'가 쉽게 말하면 어떤 뜻인가요?"},{"key":"hammingDistanceMeaning.answer","english":"It's the number of positions where the two strings differ. So 'GAGA' vs 'GATA' differ at position 3 only, giving a distance of 1.","target":"두 문자열에서 서로 다른 위치의 개수예요. 그래서 'GAGA' 대 'GATA'에서는 세 번째 위치만 달라서 거리가 1이에요."},{"key":"compareCharactersAtPosition.question","english":"How do I compare characters at the same position in both strings?","target":"두 문자열에서 같은 위치의 문자를 어떻게 비교하나요?"},{"key":"compareCharactersAtPosition.answer","english":"You'll need to move through both strings in sync, so you can pull out the character at the same spot from each one as you go.","target":"두 문자열을 동시에 훑으면서 각각 같은 위치의 문자를 뽑아내야 해요."},{"key":"trackDifferenceCount.question","english":"How do I track 'how many differences' there are?","target":"차이가 몇 개인지 어떻게 셀까요?"},{"key":"trackDifferenceCount.answer","english":"You'll need something that keeps a running total, adjusted whenever you spot a mismatch, so it's ready to hand back once you've checked every position.","target":"불일치를 발견할 때마다 누적 합계를 조정해서 모든 위치를 확인한 다음 반환할 수 있는 방식이 필요해요."}]}]}]
---

이것은 분자 생물학에 관한 Exercism의 고전적인 연습 문제예요!

우리 몸은 DNA를 담고 있는 세포로 이루어져 있어요. 이 세포들은 주기적으로 닳아서 교체되어야 하는데, 딸세포로 분열하면서 새것으로 바뀌어요. 사실, 평균적인 사람의 몸은 평생 약 1만 조 번의 세포 분열을 경험한답니다!

세포가 분열할 때 DNA도 복제돼요. 이 과정에서 가끔 실수가 생겨서 DNA 조각 하나가 잘못된 정보로 암호화될 때가 있어요. 두 DNA 가닥을 비교해서 차이를 세어보면 실수가 몇 번 일어났는지 알 수 있어요. 이것을 '해밍 거리'라고 해요.

해밍 거리는 생물학뿐만 아니라 과학의 여러 분야에서 유용하니 알아두면 좋은 개념이에요!

여러분의 과제는 두 DNA 가닥 사이의 해밍 거리를 계산하는 거예요. DNA는 C, A, G, T 네 글자를 사용해요. 두 가닥이 이렇게 생겼을 수 있어요:

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

차이가 7곳이므로 해밍 거리는 7이에요.

`hammingDistance`(해밍 거리)라는 함수를 만들어야 해요. 이 함수는 두 개의 입력, 즉 문자열인 두 DNA 가닥을 받아서 거리를 나타내는 숫자를 반환해야 해요.

두 DNA 가닥은 항상 길이가 같아요.
