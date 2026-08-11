---
lang: "fr"
type: "exercise"
slug: "caesar-cipher"
title: "Le chiffre de César"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/caesar-cipher"
en_md5: "d3e1c006a952dafab93205195f0af6db"
governance_sha: "c148436"
content_version: "cad9b080ecf2"
published_at: "2026-08-11"
forum_topic_id: 1380
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"encodeMessage.name","english":"Encode a message","target":"Chiffre un message"},{"key":"encodeMessage.description","english":"Write an encode function that shifts each letter in a message by a given amount. Spaces should remain as spaces. Letters that shift past 'z' should wrap around to the beginning of the alphabet.","target":"Écris une fonction « encode » (« chiffrer ») qui décale chaque lettre d'un message d'un nombre de positions donné. Les espaces restent des espaces. Les lettres qui dépassent « z » repartent au début de l'alphabet."}]},{"name":"scenarios","rows":[{"key":"caesarSimpleShift.name","english":"Simple shift by 1","target":"Décalage simple de 1"},{"key":"caesarSimpleShift.description","english":"Shift each letter forward by 1: a->b, b->c, c->d.","target":"Décale chaque lettre de 1 : a->b, b->c, c->d."},{"key":"caesarShiftBy3.name","english":"Shift by 3","target":"Décalage de 3"},{"key":"caesarShiftBy3.description","english":"Shift each letter forward by 3: h->k, e->h, l->o, o->r.","target":"Décale chaque lettre de 3 : h->k, e->h, l->o, o->r."},{"key":"caesarWrapAround.name","english":"Wrap around the alphabet","target":"Fais le tour de l'alphabet"},{"key":"caesarWrapAround.description","english":"When shifting goes past 'z', it wraps around: x->a, y->b, z->c.","target":"Quand le décalage dépasse « z », on repart au début : x->a, y->b, z->c."},{"key":"caesarWithSpaces.name","english":"Message with spaces","target":"Message avec des espaces"},{"key":"caesarWithSpaces.description","english":"Spaces should remain as spaces, only letters are shifted.","target":"Les espaces restent des espaces, seules les lettres subissent un décalage."},{"key":"caesarRot13.name","english":"ROT13 encryption","target":"Chiffrement ROT13"},{"key":"caesarRot13.description","english":"ROT13 is a special case of the Caesar cipher with a shift of 13.","target":"ROT13 est un cas particulier du chiffre de César, avec un décalage de 13."}]},{"name":"hints","rows":[{"key":"shiftingLetterByN.question","english":"How do I think about shifting a letter by N positions?","target":"Comment décaler une lettre de N positions ?"},{"key":"shiftingLetterByN.answer","english":"Each letter has a position in the alphabet (a is at position 0, b at 1, and so on). To shift, you find that position, add the shift amount, then turn the new position back into a letter by looking it up in the alphabet.","target":"Chaque lettre a une position dans l'alphabet (a est à la position 0, b à la position 1, et ainsi de suite). Pour décaler, tu trouves cette position, tu ajoutes le décalage, puis tu transformes la nouvelle position en lettre en la cherchant dans l'alphabet."},{"key":"letterPosition.question","english":"How do I find the position of a letter in the alphabet?","target":"Comment trouver la position d'une lettre dans l'alphabet ?"},{"key":"letterPosition.answer","english":"You can search a string for a smaller piece with `indexOf`. Calling it on the alphabet string gives you a letter's position, or -1 if the letter isn't found. To go the other way, index back into the alphabet string with the position to get the letter.","target":"Tu peux chercher un bout de texte dans une string avec `indexOf`. L'appeler sur la string de l'alphabet te donne la position d'une lettre, ou -1 si elle n'est pas trouvée. Pour retrouver une lettre, utilise la position comme indice dans la string de l'alphabet."},{"key":"wrapPastZ.question","english":"What happens when the shift goes past 'z'?","target":"Que se passe-t-il quand le décalage dépasse « z » ?"},{"key":"wrapPastZ.answer","english":"It needs to wrap around back to 'a'. The modulo operator (`%`) is perfect for this. Taking the position modulo 26 brings any number back into the 0 to 25 range.","target":"Il faut repartir à « a ». L'opérateur modulo (`%`) est parfait pour ça. Prendre la position modulo 26 ramène n'importe quel nombre dans l'intervalle de 0 à 25."},{"key":"applyToWholeMessage.question","english":"How do I apply this to a whole message?","target":"Comment appliquer ça à tout un message ?"},{"key":"applyToWholeMessage.answer","english":"Loop through each character of the message, shift it using your single-letter helper, and use concatenation (`+`) to build up the result string from the shifted letters.","target":"Parcours chaque caractère du message, décale-le avec ta fonction auxiliaire pour une seule lettre, et utilise la concaténation (`+`) pour construire la string du résultat à partir des lettres décalées."}]},{"name":"functions","rows":[{"key":"indexOf.description","english":"Find the position of a smaller string within a string, or -1 if it isn't found (provided by level stdlib)","target":"Trouve la position d'une petite string dans une string, ou -1 si elle n'est pas trouvée (fournie par la bibliothèque standard du niveau)"},{"key":"indexOf.category","english":"String Operations","target":"Opérations sur les strings"}]}]}]
---

Le chiffre de César est l'une des techniques de chiffrement les plus anciennes et les plus simples. Jules César l'utilisait pour envoyer des messages secrets à ses généraux.

Le principe consiste à décaler chaque lettre du message d'un nombre fixe de positions dans l'alphabet. Par exemple, avec un décalage de 3, « a » devient « d », « b » devient « e », et ainsi de suite. Si le décalage dépasse « z », on repart au début de l'alphabet.

Les espaces doivent rester des espaces (la règle de décalage ne s'applique pas à eux).

Crée une fonction appelée `encode(message, shift)` (encode = chiffrer, shift = décalage) qui prend un message en minuscules et un décalage, et renvoie le message chiffré.

Par exemple :

- `encode("abc", 1)` renvoie `"bcd"`
- `encode("xyz", 3)` renvoie `"abc"` (on repart au début de l'alphabet)
- `encode("hello world", 5)` renvoie `"mjqqt btwqi"`

Astuce : tu auras tout intérêt à découper ce problème en petites fonctions auxiliaires !

### Anecdote

Un jour, j'animais une conférence tech à Braga, au Portugal. Cinq minutes avant mon entrée en scène, les organisateurs sont venus me voir et m'ont demandé, un peu gênés, si cela ne me dérangerait pas de me déguiser en Jules César pour la première partie de la journée, afin de célébrer le passé romain de Braga. Ai-je été convaincant... ?

<img
  src="/static/images/exercise-assets/caesar-cipher/jeremy-as-caesar.webp"
  alt="Jeremy déguisé en César"
  style="width: 100%; max-width: 300px; border: 5px solid var(--color-purple-500); padding: 4px; border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;"
/>
