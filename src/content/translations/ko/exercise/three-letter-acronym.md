---
lang: "ko"
type: "exercise"
slug: "three-letter-acronym"
title: "세 글자 두문자어"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/three-letter-acronym"
en_md5: "89ed5e0d5e09a14bbc4ae5dd39768af5"
governance_sha: "c80036b"
content_version: "ba2b959d653e"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"tooManyLines","english":"Your solution has too many lines of code. Can you make it shorter?","target":"코드가 너무 길어요. 더 짧게 만들 수 있을까요?"}]},{"name":"tasks","rows":[{"key":"createAcronymFunction.name","english":"Create acronym function","target":"두문자어 함수 만들기"},{"key":"createAcronymFunction.description","english":"Write an acronym function that takes three words and returns a three-letter acronym formed by taking the first letter of each word.","target":"세 개의 단어를 받아서 각 단어의 첫 글자로 만든 세 글자 두문자어를 반환하는 함수를 작성해요."},{"key":"solveInThreeLines.name","english":"Solve in 3 lines of code","target":"코드 3줄로 해결하기"},{"key":"solveInThreeLines.description","english":"Can you solve this exercise with only 3 lines of code?","target":"이 연습 문제를 코드 3줄만으로 풀 수 있을까요?"}]},{"name":"scenarios","rows":[{"key":"png.name","english":"Portable Network Graphics","target":"휴대용 네트워크 그래픽"},{"key":"png.description","english":"Create the acronym 'PNG' from 'Portable', 'Network', 'Graphics'.","target":"'Portable', 'Network', 'Graphics'에서 두문자어 'PNG'를 만드세요."},{"key":"css.name","english":"Cascading Style Sheets","target":"캐스케이딩 스타일 시트"},{"key":"css.description","english":"Create the acronym 'CSS' from 'Cascading', 'Style', 'Sheets'.","target":"'Cascading', 'Style', 'Sheets'에서 두문자어 'CSS'를 만드세요."},{"key":"www.name","english":"World Wide Web","target":"월드 와이드 웹"},{"key":"www.description","english":"Create the acronym 'WWW' from 'World', 'Wide', 'Web'.","target":"'World', 'Wide', 'Web'에서 두문자어 'WWW'를 만드세요."},{"key":"lol.name","english":"Lowercase words","target":"소문자 단어"},{"key":"lol.description","english":"Create the acronym 'lol' from 'laugh', 'out', 'loud'.","target":"'laugh', 'out', 'loud'에서 두문자어 'lol'을 만드세요."},{"key":"bonus1.name","english":"3 lines of code","target":"코드 3줄"},{"key":"bonus1.description","english":"Solve the exercise with only 3 lines of code.","target":"코드 3줄만으로 연습 문제를 해결하세요."}]},{"name":"hints","rows":[{"key":"firstCharacter.question","english":"How do I get just the first character of a word?","target":"단어의 첫 글자만 가져오려면 어떻게 하나요?"},{"key":"firstCharacter.answer","english":"Indexing into the string. The first character is at index `[0]`.","target":"문자열 인덱싱을 사용하면 돼요. 첫 글자는 인덱스 `[0]`으로 가져올 수 있어요."},{"key":"buildResult.question","english":"How do I build the three-letter result?","target":"세 글자 결과를 어떻게 만드나요?"},{"key":"buildResult.answer","english":"Take the first character of each word and join them together in order using concatenation (`+`) or a template string.","target":"각 단어의 첫 글자를 가져와서 연결(`+`)이나 템플릿 문자열을 사용해 순서대로 합치면 돼요."}]}]}]
---

두문자어는 다른 단어들의 첫 글자로 만든 단어예요. 예를 들어 'Portable Network Graphics'는 'PNG'가 돼요.

세 개의 단어를 받아서 각 단어의 첫 글자로 세 글자 두문자어를 반환하는 `acronym`(두문자어) 함수를 작성해요.

예를 들어 'Cascading', 'Style', 'Sheets'가 주어지면 'CSS'를 반환해야 해요.
