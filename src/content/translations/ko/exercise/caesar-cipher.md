---
lang: "ko"
type: "exercise"
slug: "caesar-cipher"
title: "시저 암호"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "c80036b"
content_version: "1c20e2d9ca4c"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":null},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":null}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":null},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":null},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":null},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":null},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":null},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":null},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":null},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":null},{"key":"caesarRot13.name","english":"ROT13 encryption","target":null},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":null}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":null},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":null},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":null},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":null},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":null},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":null},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":null},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":null}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":null},{"key":"indexOf.category","english":"String Operations","target":null}]}]}]
---

시저 암호는 가장 오래되고 간단한 암호화 기법 중 하나예요. 율리우스 카이사르가 장군들에게 비밀 메시지를 보내기 위해 사용했어요.

이 암호는 메시지의 각 글자를 알파벳에서 일정한 수만큼 이동시키는 방식이에요. 예를 들어, 이동 값이 3이면 'a'는 'd'가 되고, 'b'는 'e'가 되는 식이에요. 이동 값이 'z'를 넘어가면 알파벳의 처음으로 돌아가요.

공백은 이동하지 않고 그대로 공백으로 둬요.

`encode(message, shift)`(소문자 메시지와 이동 값을 받아 암호화된 메시지를 반환하는 함수)라는 함수를 만드세요.

예시:

- `encode("abc", 1)`은 `"bcd"`를 반환해요
- `encode("xyz", 3)`은 `"abc"`를 반환해요 (끝을 넘어가면 처음으로 돌아가요)
- `encode("hello world", 5)`은 `"mjqqt btwqi"`를 반환해요

힌트: 이 문제를 더 작은 보조 함수들로 나누어 보세요!

### 재미있는 사실

한때 포르투갈의 브라가에서 열린 기술 컨퍼런스의 진행을 맡은 적이 있어요. 무대에 오르기 5분 전, 주최측이 찾아와서는 브라가의 로마 유산을 기념하기 위해 그날 첫 부분을 율리우스 카이사르 분장을 하고 진행해도 괜찮겠냐고 조금 쑥스러워하며 물어봤어요. 과연 잘 해냈을까요...?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="시저로 분장한 Jeremy"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
