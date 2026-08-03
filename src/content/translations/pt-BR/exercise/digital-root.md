---
lang: "pt-BR"
type: "exercise"
slug: "digital-root"
title: "Raiz Digital"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "e4d40de"
content_version: "ce5a38cf5ca7"
published_at: "2026-08-03"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Some os dígitos"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Escreva uma função chamada digitalRoot que recebe um número e soma os dígitos dele. Para números que já têm um único dígito, e para números cujos dígitos somam um único dígito, essa primeira passada é suficiente."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Continue reduzindo até sobrar um dígito"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"Às vezes, somar os dígitos uma vez ainda deixa mais de um dígito (por exemplo, 942 soma 15). Continue somando os dígitos do resultado até restar um único dígito."},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"Bônus: mantenha a solução curta"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"Sua solução já funciona. Para este bônus, dê uma arrumada nela para que a função inteira caiba em poucas linhas, sem nada sobrando."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Zero"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"A raiz digital de 0 é 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Já é um único dígito"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Um número que já tem um único dígito é a própria raiz digital dele."},{"key":"drTwoDigits.name","english":"Two digits","target":"Dois dígitos"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 se reduz a 7 em uma única passada (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Três dígitos, uma passada"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 se reduz a 6 em uma única passada (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"Duas passadas necessárias"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39 soma 12, que depois soma 3."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Um número que precisa de uma segunda passada"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942 soma 15, que depois soma 6."},{"key":"drLarge.name","english":"A larger number","target":"Um número maior"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 se reduz até chegar a 2."},{"key":"drNines.name","english":"All nines","target":"Só noves"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999 soma 45, que depois soma 9."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Uma solução curta e arrumada"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345 se reduz a 6 (1 + 2 + 3 + 4 + 5 = 15, depois 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"O que é exatamente uma raiz digital?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Some todos os dígitos do número. Se isso der um único dígito, essa é a resposta. Se der mais de um dígito, some também os dígitos desse resultado, e continue até sobrar só um dígito."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"Como eu somo os dígitos de um número?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Transforme o número em uma string para poder percorrer caractere por caractere com um laço `for...of`. Mantenha um total acumulado, somando cada dígito pelo caminho."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"Mas cada dígito é um caractere, não um número."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Quando você percorre a string, cada caractere (como `\"4\"`) é texto. Use `Number(char)` para transformá-lo no número `4` antes de somar ao seu total."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"Como eu continuo sem saber de quantas passadas vou precisar?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"Você não sabe de antemão quantas vezes vai precisar somar os dígitos, então um laço `while` cai como uma luva. Continue no laço enquanto o número tiver mais de um dígito."},{"key":"keepGoing.question","english":"When do I stop?","target":"Quando eu paro?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Pare assim que o número tiver um único dígito. Nesse momento, retorne esse valor."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"Quase! Neste exercício, queremos que você use um laço `while` para continuar reduzindo até restar um único dígito."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"Por pouco! Sua solução funciona, mas está um pouco longa. Veja se consegue enxugar mais um pouco."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Converte uma string com dígitos em um número"},{"key":"number.category","english":"Type Conversion","target":"Conversão de tipo"},{"key":"string.description","english":"Convert a number into a string","target":"Converte um número em uma string"},{"key":"string.category","english":"Type Conversion","target":"Conversão de tipo"}]}]}]
---

A raiz digital (_digital root_ em inglês) de um número é o que você obtém quando soma os dígitos dele repetidamente até sobrar um único dígito.

Se somar os dígitos uma vez ainda deixar mais de um dígito, você soma os dígitos _desse_ resultado, e continua até restar um único dígito.

Por exemplo, para encontrar a raiz digital de `942`:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

Então a raiz digital de `942` é `6`.

Um número que já tem um único dígito (como `7`) é a própria raiz digital dele.

Crie uma função chamada `digitalRoot` que recebe um número e retorna a raiz digital dele.

### A função `String()`

Nas últimas lições, você teve acesso à função `Number(str)`, que converte uma string em um número.

Você pode fazer o mesmo ao contrário e transformar um número em uma string usando a função `String(num)`. Por exemplo:

```js
String(147) === "147"
```

De novo, repare que ela começa com letra maiúscula, e de novo, não se preocupe com o porquê por enquanto!

### Colocando em prática o que você aprendeu.

Embora existam muitas formas de resolver este exercício, a solução que queremos que você encontre usa um laço `while`.

Divirta-se!
