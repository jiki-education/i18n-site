---
lang: "pt-PT"
type: "exercise"
slug: "reverse-string"
title: "Inverter uma string"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/reverse-string"
en_md5: "d01eea6cf18d953304631f4a8015c3ea"
governance_sha: "a347f3f"
content_version: "5cdb7326ebd5"
published_at: "2026-08-22"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"reverseStrings.name","english":"Reverse Strings","target":"Inverter strings"},{"key":"reverseStrings.description","english":"Reverse a string so that it reads from right to left instead of left to right.","target":"Inverte uma string para que seja lida da direita para a esquerda em vez de da esquerda para a direita."}]},{"name":"scenarios","rows":[{"key":"reverseEmptyString.name","english":"Empty string","target":"String vazia"},{"key":"reverseEmptyString.description","english":"An empty string should return an empty string when reversed.","target":"Uma string vazia deve devolver uma string vazia quando invertida."},{"key":"reverseWord.name","english":"A word","target":"Uma palavra"},{"key":"reverseWord.description","english":"Reverse the word 'robot'.","target":"Inverte a palavra 'robot'."},{"key":"reverseCapitalizedWord.name","english":"A capitalized word","target":"Uma palavra com maiúscula"},{"key":"reverseCapitalizedWord.description","english":"Reverse a capitalized word 'Ramen'.","target":"Inverte uma palavra com maiúscula 'Ramen'."},{"key":"reverseSentencePunctuation.name","english":"Sentence with punctuation","target":"Frase com pontuação"},{"key":"reverseSentencePunctuation.description","english":"Reverse a sentence with punctuation 'I'm hungry!'","target":"Inverte uma frase com pontuação 'I'm hungry!'"},{"key":"reversePalindrome.name","english":"Palindrome","target":"Palíndromo"},{"key":"reversePalindrome.description","english":"A palindrome remains the same when reversed.","target":"Um palíndromo permanece igual quando invertido."},{"key":"reverseEvenSizedWord.name","english":"Even-sized word","target":"Palavra de tamanho par"},{"key":"reverseEvenSizedWord.description","english":"Reverse an even-sized word 'drawer'.","target":"Inverte uma palavra de tamanho par 'drawer'."},{"key":"reverseWideCharacters.name","english":"Wide characters","target":"Carateres largos"},{"key":"reverseWideCharacters.description","english":"Reverse wide Unicode characters '子猫'.","target":"Inverte carateres Unicode largos '子猫'."},{"key":"reverseEmojiFamily.name","english":"Emoji Family","target":"Família de emojis"},{"key":"reverseEmojiFamily.description","english":"Reverse an emoji family.","target":"Inverte uma família de emojis."},{"key":"reverseEmojiRainbowFlag.name","english":"Rainbow Flag","target":"Bandeira arco-íris"},{"key":"reverseEmojiRainbowFlag.description","english":"Make a rainbow flag by reversing.","target":"Faz uma bandeira arco-íris ao inverter."}]},{"name":"hints","rows":[{"key":"reverseByHand.question","english":"How would I reverse a word by hand?","target":"Como posso inverter uma palavra à mão?"},{"key":"reverseByHand.answer","english":"You'd read it left-to-right but write it right-to-left. Equivalently, you'd take each letter in turn and put it in front of what you've written so far.","target":"Lês da esquerda para a direita, mas escreves da direita para a esquerda. De forma equivalente, pegas em cada letra à vez e colocas à frente do que já escreveste."},{"key":"mapToCode.question","english":"How does that map to code?","target":"Como é que isso se transforma em código?"},{"key":"mapToCode.answer","english":"Loop through the input string character by character. For each character, build the result by prepending. That means putting it at the FRONT of your result, not the back.","target":"Percorre a string de entrada caráter a caráter. Para cada caráter, constrói o resultado colocando-o à frente. Isso significa colocá-lo à FRENTE do resultado, não no fim."},{"key":"prepend.question","english":"How do I 'prepend' instead of append?","target":"Como é que eu faço 'prepend' em vez de 'append'?"},{"key":"prepend.answer","english":"With the `+` operator, prepending is just a matter of order. Instead of `result + char` (which appends), use `char + result` (which prepends).","target":"Com o operador `+`, fazer 'prepend' é apenas uma questão de ordem. Em vez de `result + char` (que faz 'append'), usa `char + result` (que faz 'prepend')."}]}]}]
---

Inverter strings (lê-las da direita para a esquerda e não da esquerda para a direita) é uma tarefa surpreendentemente comum em programação.

Por exemplo, em bioinformática, inverter a sequência de strings de ADN ou ARN é muitas vezes importante para várias análises, como encontrar cadeias complementares ou identificar sequências palindrómicas.

A tua tarefa é criar uma função chamada `reverse` (inverter), que recebe uma string como parâmetro de entrada e devolve a versão invertida.

Exemplos:

- Transforma "stressed" em "desserts"
- Transforma "strops" em "sports"
- Transforma "racecar" em "racecar" (um palíndromo)

### Aqueles dois últimos cenários...

Os dois últimos cenários parecem estranhos, não te parece? O que se passa?

Acontece que muitos emojis são formados por outros emojis ligados entre si com espaços invisíveis (de largura zero).

O emoji da família (👩‍👩‍👧‍👦) é formado por duas mulheres e duas crianças. Quando o invertes, consegues ver os carateres individuais (👦‍👧‍👩‍👩).

O outro é um arco-íris e uma bandeira (🌈‍️🏳). Quando invertes a ordem para obter primeiro a bandeira e depois o arco-íris, transforma-se numa bandeira arco-íris (🏳️‍🌈️)!

Se construíres o resultado um caráter de cada vez, estes casos devem funcionar sem problemas. Se, em vez disso, tentares um truque mais esperto, podes reparar que os emojis se desfazem.
