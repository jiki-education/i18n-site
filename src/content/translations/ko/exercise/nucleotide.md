---
lang: "ko"
type: "exercise"
slug: "nucleotide"
title: "뉴클레오타이드"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/nucleotide"
en_md5: "1a3fe935f5d7c6338efe81dc27d8e9f1"
governance_sha: "c80036b"
content_version: "4c80cace3bfd"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"countNucleotide.name","english":"Count a Nucleotide","target":"뉴클레오타이드 개수 세기"},{"key":"countNucleotide.description","english":"Write a function that counts how many times a specific nucleotide (A, C, G, or T) appears in a DNA strand. Return -1 if the nucleotide or any character in the strand is invalid.","target":"특정 뉴클레오타이드(A, C, G, T)가 DNA 가닥에서 몇 번 등장하는지 세는 함수를 만들어요. 뉴클레오타이드가 유효하지 않거나 가닥에 유효하지 않은 문자가 있으면 -1을 반환해요."}]},{"name":"scenarios","rows":[{"key":"nucleotideEmptyStrand.name","english":"Empty strand","target":"빈 가닥"},{"key":"nucleotideEmptyStrand.description","english":"An empty strand should return 0 for any valid nucleotide.","target":"빈 가닥의 경우, 유효한 뉴클레오타이드라면 0을 반환해요."},{"key":"nucleotideSingleMatch.name","english":"Single nucleotide strand","target":"단일 뉴클레오타이드 가닥"},{"key":"nucleotideSingleMatch.description","english":"A single-character strand matching the target should return 1.","target":"대상 뉴클레오타이드와 일치하는 한 글자 가닥은 1을 반환해요."},{"key":"nucleotideRepeated.name","english":"Repeated nucleotide","target":"반복된 뉴클레오타이드"},{"key":"nucleotideRepeated.description","english":"A strand of repeated nucleotides should count all of them.","target":"반복된 뉴클레오타이드로 이루어진 가닥의 경우, 모두 세어 반환해요."},{"key":"nucleotideMixedStrandA.name","english":"Count A in mixed strand","target":"혼합 가닥에서 A 개수 세기"},{"key":"nucleotideMixedStrandA.description","english":"Count a specific nucleotide in a mixed strand.","target":"혼합 가닥에서 특정 뉴클레오타이드의 개수를 세어요."},{"key":"nucleotideMixedStrandT.name","english":"Count T in mixed strand","target":"혼합 가닥에서 T 개수 세기"},{"key":"nucleotideMixedStrandT.description","english":"Count a different nucleotide in the same strand.","target":"같은 가닥에서 다른 뉴클레오타이드의 개수를 세어요."},{"key":"nucleotideInvalidNucleotide.name","english":"Invalid nucleotide","target":"유효하지 않은 뉴클레오타이드"},{"key":"nucleotideInvalidNucleotide.description","english":"An invalid nucleotide character should return -1.","target":"유효하지 않은 뉴클레오타이드 문자이면 -1을 반환해요."},{"key":"nucleotideInvalidStrand.name","english":"Invalid strand","target":"유효하지 않은 가닥"},{"key":"nucleotideInvalidStrand.description","english":"A strand containing invalid characters should return -1.","target":"유효하지 않은 문자가 포함된 가닥은 -1을 반환해요."}]},{"name":"hints","rows":[{"key":"checkValid.question","english":"How do I check that the character I'm asked about is valid?","target":"찾으라는 문자가 유효한지 어떻게 확인하나요?"},{"key":"checkValid.answer","english":"Strings have an `includes()` method that tells you whether one string appears inside another. That's a handy way to ask whether a character is one of the valid nucleotides. Validate before you start counting.","target":"문자열에는 하나의 문자열이 다른 문자열 안에 나타나는지 알려주는 `includes()` 메서드가 있어요. 이걸로 어떤 문자가 유효한 뉴클레오타이드 중 하나인지 쉽게 확인할 수 있어요. 개수를 세기 전에 먼저 유효성을 확인해요."},{"key":"invalidNucleotide.question","english":"What do I do if the nucleotide is invalid?","target":"뉴클레오타이드가 유효하지 않으면 어떻게 하나요?"},{"key":"invalidNucleotide.answer","english":"Return `-1` immediately. The spec uses that value to signal an invalid input.","target":"바로 `-1`을 반환해요. 문제에서는 이 값을 사용해 유효하지 않은 입력을 알려요."},{"key":"countOccurrences.question","english":"How do I count occurrences in the strand?","target":"가닥에서 몇 번 나오는지 어떻게 세나요?"},{"key":"countOccurrences.answer","english":"Loop through each character of the strand. If the character matches the nucleotide you're counting, add 1 to a counter. Return the counter at the end.","target":"가닥의 각 문자를 순회하며 반복문을 돌아요. 확인하려는 뉴클레오타이드와 일치하면 카운터에 1을 더해요. 마지막에 카운터를 반환해요."},{"key":"validateStrand.question","english":"Should I validate the strand too?","target":"가닥도 유효성을 확인해야 하나요?"},{"key":"validateStrand.answer","english":"Yes. If any character in the strand isn't a valid nucleotide, return `-1`. Check each character before counting.","target":"네. 가닥에 유효하지 않은 문자가 하나라도 있으면 `-1`을 반환해요. 개수를 세기 전에 각 문자를 확인해요."}]},{"name":"functions","rows":[{"key":"includes.description","english":"Check whether a string contains a smaller string (provided by level stdlib)","target":"문자열에 다른 문자열이 포함되어 있는지 확인해요 (레벨 표준 라이브러리에서 제공)."},{"key":"includes.category","english":"String Operations","target":"문자열 연산"}]}]}]
---

DNA는 긴 화학 물질의 사슬이고, 그중에서 가장 중요한 네 가지 뉴클레오타이드는 아데닌, 시토신, 구아닌, 타이민이에요. DNA 한 가닥에는 이 네 가지 뉴클레오타이드가 수십억 개나 있을 수 있고, 나타나는 순서가 중요해요!

DNA 서열은 "ATTACG" 같은 문자열로 표현해요. 'A'는 아데닌, 'C'는 시토신, 'G'는 구아닌, 'T'는 타이민을 의미해요.

`countNucleotide`(뉴클레오타이드 개수 세기)라는 함수를 만들어요. 이 함수는 DNA 가닥과 뉴클레오타이드 문자 하나를 받아서, 그 뉴클레오타이드가 가닥에 몇 번 등장하는지 개수를 반환해요.

뉴클레오타이드 문자가 유효하지 않으면 (A, C, G, T 중 하나가 아니면), `-1`을 반환해요.
가닥 안에 유효하지 않은 문자가 하나라도 있으면, 역시 `-1`을 반환해요.

예를 들어:

- `countNucleotide("GATTACA", "A")` → `3`을 반환해요.
- `countNucleotide("GATTACA", "T")` → `2`을 반환해요.
- `countNucleotide("GATTACA", "X")` → `-1`을 반환해요.

필요하면 `"...".includes(someString)`을 사용할 수 있어요.
