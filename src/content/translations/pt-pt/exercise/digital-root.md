---
lang: "pt-pt"
type: "exercise"
slug: "digital-root"
title: "Raiz Digital"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/digital-root"
en_md5: "554e48db79141f8304144e152643a47c"
governance_sha: "e4d40de"
content_version: "71e61de7e682"
published_at: "2026-08-03"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"sumTheDigits.name","english":"Sum the digits","target":"Soma os algarismos"},{"key":"sumTheDigits.description","english":"Write a function called digitalRoot that takes a number and adds its digits together. For numbers that are already a single digit, and for numbers whose digits sum to a single digit, this first pass is enough.","target":"Escreve uma função chamada digitalRoot que recebe um número e soma os seus algarismos. Para números que já têm um único algarismo, e para números cujos algarismos somam um único algarismo, esta primeira passagem chega."},{"key":"collapseToSingleDigit.name","english":"Keep collapsing until one digit is left","target":"Continua a reduzir até restar um algarismo"},{"key":"collapseToSingleDigit.description","english":"Sometimes summing the digits once still leaves more than one digit (for example 942 sums to 15). Keep summing the digits of the result until a single digit remains.","target":"Às vezes, somar os algarismos uma vez ainda deixa mais do que um algarismo (por exemplo, 942 soma 15). Continua a somar os algarismos do resultado até restar um único algarismo."},{"key":"keepItTight.name","english":"Bonus: keep it short","target":"Bónus: mantém a solução curta"},{"key":"keepItTight.description","english":"Your solution already works. For this bonus, tidy it up so the whole function fits in a small number of lines, without any extra clutter.","target":"A tua solução já funciona. Para este bónus, arruma-a para que a função inteira caiba num número pequeno de linhas, sem nada a mais."}]},{"name":"scenarios","rows":[{"key":"drZero.name","english":"Zero","target":"Zero"},{"key":"drZero.description","english":"The digital root of 0 is 0.","target":"A raiz digital de 0 é 0."},{"key":"drSingleDigit.name","english":"Already a single digit","target":"Já é um único algarismo"},{"key":"drSingleDigit.description","english":"A number that is already a single digit is its own digital root.","target":"Um número que já tem um único algarismo é a sua própria raiz digital."},{"key":"drTwoDigits.name","english":"Two digits","target":"Dois algarismos"},{"key":"drTwoDigits.description","english":"16 collapses to 7 in a single pass (1 + 6).","target":"16 reduz-se a 7 numa única passagem (1 + 6)."},{"key":"drThreeDigits.name","english":"Three digits, one pass","target":"Três algarismos, uma passagem"},{"key":"drThreeDigits.description","english":"132 collapses to 6 in a single pass (1 + 3 + 2).","target":"132 reduz-se a 6 numa única passagem (1 + 3 + 2)."},{"key":"drThirtyNine.name","english":"Two passes needed","target":"São precisas duas passagens"},{"key":"drThirtyNine.description","english":"39 sums to 12, which then sums to 3.","target":"39 soma 12, que por sua vez soma 3."},{"key":"drTwoPasses.name","english":"A number that needs a second pass","target":"Um número que precisa de uma segunda passagem"},{"key":"drTwoPasses.description","english":"942 sums to 15, which then sums to 6.","target":"942 soma 15, que por sua vez soma 6."},{"key":"drLarge.name","english":"A larger number","target":"Um número maior"},{"key":"drLarge.description","english":"493193 collapses all the way down to 2.","target":"493193 reduz-se até chegar a 2."},{"key":"drNines.name","english":"All nines","target":"Só noves"},{"key":"drNines.description","english":"99999 sums to 45, which then sums to 9.","target":"99999 soma 45, que por sua vez soma 9."},{"key":"drBonusTight.name","english":"A tidy, short solution","target":"Uma solução curta e arrumada"},{"key":"drBonusTight.description","english":"12345 collapses down to 6 (1 + 2 + 3 + 4 + 5 = 15, then 1 + 5 = 6).","target":"12345 reduz-se a 6 (1 + 2 + 3 + 4 + 5 = 15, e depois 1 + 5 = 6)."}]},{"name":"hints","rows":[{"key":"whatIsIt.question","english":"What exactly is a digital root?","target":"O que é exatamente uma raiz digital?"},{"key":"whatIsIt.answer","english":"Add up all the digits of the number. If that gives you a single digit, that's the answer. If it gives you more than one digit, add up the digits of that result too, and keep going until only one digit is left.","target":"Soma todos os algarismos do número. Se isso te der um único algarismo, essa é a resposta. Se te der mais do que um algarismo, soma também os algarismos desse resultado, e continua até restar apenas um algarismo."},{"key":"sumDigits.question","english":"How do I add up the digits of a number?","target":"Como somo os algarismos de um número?"},{"key":"sumDigits.answer","english":"Turn the number into a string so you can walk through it character by character with a `for...of` loop. Keep a running total, adding each digit as you go.","target":"Transforma o número numa string para poderes percorrê-la caráter a caráter com um ciclo `for...of`. Mantém um total acumulado, somando cada algarismo à medida que avanças."},{"key":"digitsToNumbers.question","english":"Each digit is a character though, not a number.","target":"Mas cada algarismo é um caráter, não um número."},{"key":"digitsToNumbers.answer","english":"When you loop over the string, each character (like `\"4\"`) is text. Use `Number(char)` to turn it into the number `4` before adding it to your total.","target":"Quando percorres a string, cada caráter (como `\"4\"`) é texto. Usa `Number(char)` para o transformares no número `4` antes de o somares ao teu total."},{"key":"whichLoop.question","english":"How do I keep going without knowing how many passes I need?","target":"Como continuo sem saber quantas passagens vou precisar?"},{"key":"whichLoop.answer","english":"You don't know in advance how many times you'll need to sum the digits, so a `while` loop is a great fit. Keep looping while the number has more than one digit.","target":"Não sabes de antemão quantas vezes vais precisar de somar os algarismos, por isso um ciclo `while` encaixa na perfeição. Continua o ciclo enquanto o número tiver mais do que um algarismo."},{"key":"keepGoing.question","english":"When do I stop?","target":"Quando é que paro?"},{"key":"keepGoing.answer","english":"Stop as soon as the number is a single digit. At that point, return it.","target":"Para assim que o número for um único algarismo. Nesse momento, devolve-o."}]},{"name":"checks","rows":[{"key":"mustUseWhile","english":"Almost! For this exercise we want you to use a `while` loop to keep collapsing until a single digit remains.","target":"Quase! Neste exercício queremos que uses um ciclo `while` para continuares a reduzir até restar um único algarismo."},{"key":"tooManyLines","english":"So close! Your solution works, but it's a little long. See if you can tighten it up.","target":"Por pouco! A tua solução funciona, mas está um bocadinho longa. Vê se a consegues encurtar."}]},{"name":"functions","rows":[{"key":"number.description","english":"Convert a string containing digits to a number","target":"Converte uma string com algarismos num número"},{"key":"number.category","english":"Type Conversion","target":"Conversão de Tipos"},{"key":"string.description","english":"Convert a number into a string","target":"Converte um número numa string"},{"key":"string.category","english":"Type Conversion","target":"Conversão de Tipos"}]}]}]
---

A raiz digital (_digital root_ em inglês) de um número é o que obténs quando somas os seus algarismos repetidamente até restar apenas um algarismo.

Se somares os algarismos uma vez e ainda ficares com mais do que um algarismo, somas os algarismos _desse_ resultado, e continuas até restar um único algarismo.

Por exemplo, para encontrar a raiz digital de `942`:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

Portanto, a raiz digital de `942` é `6`.

Um número que já tem um único algarismo (como `7`) é a sua própria raiz digital.

Cria uma função chamada `digitalRoot` que recebe um número e devolve a sua raiz digital.

### A função `String()`

Nas últimas lições tiveste acesso à função `Number(str)`, que converte uma string num número.

Podes fazer o mesmo ao contrário e transformar um número numa string com a função `String(num)`. Por exemplo:

```js
String(147) === "147"
```

Mais uma vez, repara que começa com uma letra maiúscula e, mais uma vez, não te preocupes com o porquê para já!

### Pôr em prática o que aprendeste.

Embora haja muitas formas de resolver este exercício, a solução que queremos que encontres usa um ciclo `while`.

Diverte-te!
