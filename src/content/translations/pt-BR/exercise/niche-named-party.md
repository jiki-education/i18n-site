---
lang: "pt-BR"
type: "exercise"
slug: "niche-named-party"
title: "Festa de Nomes Exclusivos"
status: "published"
source_repo: "i18n"
source_path: "locales/pt-BR/curriculum/exercises/niche-named-party"
en_md5: "470a19833eba55849106588dfa7326f2"
governance_sha: "215346b"
content_version: "adf1461ca6f6"
published_at: "2026-08-21"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"checkTheName.name","english":"Check the name","target":"Verifique o nome"},{"key":"checkTheName.description","english":"Write a `handleGuest` function that checks whether the person's name starts with the allowed letters for tonight's party. Return `true` if it does, or `false` if it doesn't.","target":"Escreva uma função `handleGuest` que verifica se o nome da pessoa começa com as letras permitidas para a festa desta noite. Retorne `true` se começar, ou `false` se não começar."},{"key":"solveTightly.name","english":"Solve it in 20 lines","target":"Resolva em 20 linhas"},{"key":"solveTightly.description","english":"Bonus: with the length-counting pulled out into a helper function that `handleGuest` reuses, the whole solution fits in 20 lines. Can you match it?","target":"Bônus: com a contagem do comprimento extraída para uma função auxiliar que o `handleGuest` reutiliza, a solução completa cabe em 20 linhas. Você consegue igualar?"}]},{"name":"scenarios","rows":[{"key":"sarahSParty.name","english":"S Party: Sarah arrives","target":"Festa do S: a Sarah chega"},{"key":"sarahSParty.description","english":"Tonight only names starting with \"S\" are allowed. Sarah should get in!","target":"Esta noite, só são permitidos nomes que começam com \"S\". A Sarah deve entrar!"},{"key":"bradSParty.name","english":"S Party: Brad arrives","target":"Festa do S: o Brad chega"},{"key":"bradSParty.description","english":"Tonight only names starting with \"S\" are allowed. Brad should be turned away.","target":"Esta noite, só são permitidos nomes que começam com \"S\". O Brad deve ser barrado!"},{"key":"bradleyBradParty.name","english":"Brad Party: Bradley arrives","target":"Festa do Brad: o Bradley chega"},{"key":"bradleyBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Bradley should get in!","target":"Esta noite, só são permitidos nomes que começam com \"Brad\". O Bradley deve entrar!"},{"key":"bradBradleyParty.name","english":"Bradley Party: Brad arrives","target":"Festa do Bradley: o Brad chega"},{"key":"bradBradleyParty.description","english":"Tonight only names starting with \"Bradley\" are allowed. Brad is too short, so he's not allowed.","target":"Esta noite, só são permitidos nomes que começam com \"Bradley\". O nome Brad é curto demais, então não é permitido."},{"key":"brianBradParty.name","english":"Brad Party: Brian arrives","target":"Festa do Brad: o Brian chega"},{"key":"brianBradParty.description","english":"Tonight only names starting with \"Brad\" are allowed. Brian should be turned away.","target":"Esta noite, só são permitidos nomes que começam com \"Brad\". O Brian deve ser barrado!"},{"key":"silence.name","english":"S Party: Silence...","target":"Festa do S: silêncio..."},{"key":"silence.description","english":"The person doesn't say their name. An empty name can't start with anything. Turn them away!","target":"A pessoa não diz o nome. Um nome vazio não pode começar com nada. Barre a pessoa!"},{"key":"cherCherParty.name","english":"Cher Party: Cher arrives","target":"Festa do Cher: a Cher chega"},{"key":"cherCherParty.description","english":"Tonight only names starting with \"Cher\" are allowed. Cher's name is exactly \"Cher\" — let her in!","target":"Esta noite, só são permitidos nomes que começam com \"Cher\". O nome da Cher é exatamente \"Cher\", então deixe-a entrar!"},{"key":"nicheNamedPartyBonusLineCount.name","english":"Neat and tidy","target":"Limpo e organizado"},{"key":"nicheNamedPartyBonusLineCount.description","english":"The shortest solution fits in 20 lines. Can you find it?","target":"A solução mais curta cabe em 20 linhas. Você consegue encontrá-la?"}]},{"name":"checks","rows":[{"key":"tooManyLines","english":"Keep going! See if you can solve it in fewer lines.","target":"Continue! Veja se você consegue resolvê-lo em menos linhas."}]},{"name":"hints","rows":[{"key":"checkStartsWith.question","english":"How do I check that a name starts with certain letters?","target":"Como eu verifico se um nome começa com determinadas letras?"},{"key":"checkStartsWith.answer","english":"Compare each character of the allowed prefix with the character at the same position in the name. If any character differs, the name doesn't match.","target":"Compare cada caractere do prefixo permitido com o caractere na mesma posição do nome. Se algum caractere for diferente, o nome não corresponde."},{"key":"loopCharacters.question","english":"How do I look at one character at a time?","target":"Como eu vejo um caractere de cada vez?"},{"key":"loopCharacters.answer","english":"Use string iteration to step through a string.","target":"Use iteração de strings para percorrer uma string."},{"key":"findEquivalentLetter.question","english":"How do I find the equivalent letter in the other word?","target":"Como eu encontro a letra equivalente na outra palavra?"},{"key":"findEquivalentLetter.answer","english":"Use string indexing to find a specific letter.","target":"Use indexação de strings para encontrar uma letra específica."},{"key":"longerAllowedPrefix.question","english":"What if the allowed prefix is longer than the name?","target":"E se o prefixo permitido for mais longo do que o nome?"},{"key":"longerAllowedPrefix.answer","english":"That person can't match, so you should return `false`.","target":"Essa pessoa não pode corresponder, então você deve retornar `false`."}]}]}]
---

A festa desta noite é muito exclusiva: só entram as pessoas cujos nomes começam com uma sequência específica de letras!

A sua tarefa é escrever uma função chamada `handleGuest` (lidar com o convidado) que recebe duas entradas:

- `name` - o nome da pessoa na porta
- `allowedPrefix` - as letras iniciais exigidas para a festa desta noite

A função deve retornar `true` se a pessoa puder entrar e `false` se ela for barrada.

Por exemplo:

- Se o prefixo permitido desta noite for `"S"`, a Sarah entra (retorna `true`), mas o Brad não entra (retorna `false`).
- Se o prefixo permitido for `"Brad"`, o Brad e o Bradley entram, mas o Brian não entra.

### Funções auxiliares

Ao longo deste exercício, você vai perceber que precisa calcular o comprimento do nome do convidado e também o comprimento do prefixo permitido. Esta é a oportunidade perfeita para criar uma função auxiliar chamada `getLength(someString)`, que conta quantas letras a string tem. Depois, você pode usar essa função em lugares diferentes dentro de `handleGuest(...)`.

O cenário bônus desafia você a resolver isso no menor número de linhas possível. Você também pode encontrar outras soluções que prefira e que usem mais linhas. Isso é perfeitamente aceitável (e incentivamos você a explorar abordagens diferentes), mas tente também encontrar a versão mais curta.

Divirta-se!
