---
lang: "pt-PT"
type: "exercise"
slug: "caesar-cipher"
title: "Cifra de César"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-PT/curriculum/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "a347f3f"
content_version: "2a95e6bc597f"
published_at: "2026-08-22"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"Codificar uma mensagem"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"Escreve uma função de codificação que desloca cada letra de uma mensagem num desvio dado. Os espaços devem permanecer como espaços. As letras que ultrapassam 'z' no deslocamento devem dar a volta ao início do alfabeto."}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"Desvio simples de 1"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"Desloca cada letra uma posição para a frente: a->b, b->c, c->d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"Desvio de 3"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"Desloca cada letra três posições para a frente: h->k, e->h, l->o, o->r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"Dar a volta ao alfabeto"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"Quando o desvio ultrapassa 'z', dá a volta: x->a, y->b, z->c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"Mensagem com espaços"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"Os espaços devem permanecer como espaços, apenas as letras são deslocadas."},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"Encriptação ROT13"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13 é um caso especial da Cifra de César com um desvio de 13."}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"Como devo pensar em deslocar uma letra em N posições?"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"Cada letra tem uma posição no alfabeto (a está na posição 0, b na 1, e assim por diante). Para deslocar, encontras essa posição, somas o valor do desvio e depois transformas a nova posição novamente numa letra, procurando-a no alfabeto."},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"Como encontro a posição de uma letra no alfabeto?"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"Podes procurar uma parte mais pequena numa string com `indexOf`. Chamá-lo na string do alfabeto devolve a posição de uma letra, ou -1 se a letra não for encontrada. Para fazer o inverso, usa a posição como índice na string do alfabeto para obter a letra."},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"O que acontece quando o desvio ultrapassa 'z'?"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"É preciso dar a volta para 'a'. O operador módulo (`%`) é perfeito para isto. Calcular a posição módulo 26 traz qualquer número de volta ao intervalo de 0 a 25."},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"Como aplico isto a uma mensagem inteira?"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"Percorre cada caráter da mensagem, desloca-o usando a tua função auxiliar de letra única e usa a concatenação (`+`) para construir a string de resultado a partir das letras deslocadas."}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"Encontra a posição de uma string mais pequena dentro de uma string, ou -1 se não for encontrada (fornecido pela stdlib do nível)"},{"key":"indexOf.category","english":"String Operations","target":"Operações com Strings"}]}]}]
---

A Cifra de César é uma das técnicas de encriptação mais antigas e mais simples. Foi usada por Júlio César para enviar mensagens secretas aos seus generais.

A cifra funciona ao deslocar cada letra da mensagem num número fixo de posições no alfabeto. Por exemplo, com um desvio de 3, 'a' passa a 'd', 'b' passa a 'e', e assim sucessivamente. Se o desvio for além de 'z', dá a volta ao início do alfabeto.

Os espaços devem ser mantidos como espaços (não são deslocados).

Cria uma função chamada `encode(message, shift)` (codificar) que recebe uma mensagem em minúsculas e um valor de desvio, e devolve a mensagem codificada.

Por exemplo:

- `encode("abc", 1)` devolve `"bcd"`
- `encode("xyz", 3)` devolve `"abc"` (dá a volta)
- `encode("hello world", 5)` devolve `"mjqqt btwqi"`

Dica: Vais querer dividir este problema em funções auxiliares mais pequenas!

### Curiosidade

Uma vez, fui o apresentador numa conferência de tecnologia em Braga, Portugal. Cinco minutos antes de entrar em palco, os organizadores aproximaram-se. Um pouco envergonhados, perguntaram-me se me importaria de ir vestido de Júlio César durante a primeira parte do dia, para celebrar a herança romana de Braga. Será que consegui...?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Jeremy vestido de Júlio César"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
