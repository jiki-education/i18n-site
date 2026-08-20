---
lang: "es-ES"
type: "exercise"
slug: "wordle-process-game"
title: "Wordle: Juega una partida"
status: "published"
source_repo: "i18n"
source_path: "locales/es-ES/curriculum/exercises/wordle-process-game"
en_md5: "7608ad70842face3e19d316b4ee980f5"
governance_sha: "16f805d"
content_version: "713bd310d993"
published_at: "2026-08-20"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"holeInOne.firstRow","english":"We expected all the letters to be green","target":null},{"key":"twoGuesses.firstRow","english":"We expected the second letter to be absent","target":null},{"key":"twoGuesses.secondRow","english":"We expected all the letters to be green","target":null},{"key":"threeGuesses.firstRow","english":"We expected the second and fourth letters to be absent","target":null},{"key":"threeGuesses.secondRow","english":"We expected the second letter to be absent","target":null},{"key":"threeGuesses.thirdRow","english":"We expected all the letters to be green","target":null},{"key":"phew.firstRow","english":"We expected everything to be absent.","target":null},{"key":"phew.secondRow","english":"We expected everything to be absent.","target":null},{"key":"phew.thirdRow","english":"We expected the last two to be present and the rest absent.","target":null},{"key":"phew.fourthRow","english":"We expected the first to be present and the rest absent.","target":null},{"key":"phew.fifthRow","english":"We expected the second to be present and the rest absent","target":null},{"key":"phew.sixthRow","english":"We expected all the letters to be green","target":null}]},{"name":"tasks","rows":[{"key":"processGame.name","english":"Process a full game","target":null},{"key":"processGame.description","english":"Create a function called processGame that takes a target word and a list of guesses, and calls colorRow for each guess with the correct states.","target":null}]},{"name":"scenarios","rows":[{"key":"holeInOne.name","english":"First time!","target":null},{"key":"holeInOne.description","english":"Deal with a first correct guess.","target":null},{"key":"twoGuesses.name","english":"Nailed it in two","target":null},{"key":"twoGuesses.description","english":"Deal with two guesses.","target":null},{"key":"threeGuesses.name","english":"Got there in three","target":null},{"key":"threeGuesses.description","english":"Deal with three guesses.","target":null},{"key":"phew.name","english":"Phew!","target":null},{"key":"phew.description","english":"Phew! That was close!","target":null}]},{"name":"hints","rows":[{"key":"reuseWork.question","english":"How do I reuse my work from `processGuess`?","target":null},{"key":"reuseWork.answer","english":"The logic that turns one guess into a list of states is the same. Pull it into a helper function (or copy it) and call it for each guess in the list.","target":null},{"key":"trackRow.question","english":"How do I track which row each guess belongs to?","target":null},{"key":"trackRow.answer","english":"Loop through the guesses with an index. The row number is the index plus `1` (since `colorRow` expects rows numbered `1-6`).","target":null},{"key":"colourRow.question","english":"How do I actually colour each row?","target":null},{"key":"colourRow.answer","english":"Once you have the `states` list for a guess, call `colorRow(rowNumber, states)`.","target":null},{"key":"fewerGuesses.question","english":"What if the player has made fewer than 6 guesses?","target":null},{"key":"fewerGuesses.answer","english":"Only colour rows for the guesses that exist. The list length tells you how many to process, so you naturally stop at the right point.","target":null}]},{"name":"functions","rows":[{"key":"colorRow.description","english":"Colors a row on the Wordle board with the given states.","target":null},{"key":"colorRow.category","english":"Wordle","target":null},{"key":"push.description","english":"Adds an element to a list and returns the new list. Does not change the original list.","target":null},{"key":"push.category","english":"Lists","target":null}]},{"name":"describers","rows":[{"key":"colorRow","english":"colored a row on the wordle board","target":null}]}]}]
---

Now that you can process a single guess, it's time to process a whole game!

Create a function called <define>`processGame`</define> that takes two inputs:

1. The secret target word.
2. A list of guesses the player has made.

You should work out the state of each row then call the <define>`colorRow(row, states)`</define> function with the row number (`1-6`) and a list of states for each letter.

For example, if the first guess was correct:

```
colorRow(1, ["correct", "correct", "correct", "correct", "correct"])
```
