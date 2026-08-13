---
lang: "fr"
type: "exercise"
slug: "smashing-blocks"
title: "Casse les blocs"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/smashing-blocks"
en_md5: "301110b2647132fe31b5d14c967a4ff5"
governance_sha: "53cdc3d"
content_version: "195ff1a04012"
published_at: "2026-08-13"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"wrongBlockCount","english":"You didn't create exactly 5 blocks.","target":null},{"key":"notAllSmashed","english":"You didn't smash all the blocks.","target":null},{"key":"tooManyBallMoves","english":"You moved the ball more times than you needed to!","target":null}]},{"name":"tasks","rows":[{"key":"addAndSmashBlocks.name","english":"Add and smash 5 blocks","target":null},{"key":"addAndSmashBlocks.description","english":"Create 5 blocks at the top of the game area, then bounce the ball to smash them all. Stop the ball once all blocks are smashed.","target":null},{"key":"differentDimensions.name","english":"Different dimensions","target":null},{"key":"differentDimensions.description","english":"In the full breakout game, the ball's radius and block height can change. Check your code works with different dimensions.","target":null}]},{"name":"scenarios","rows":[{"key":"addBlocks.name","english":"Add and smash 5 blocks","target":null},{"key":"addBlocks.description","english":"Add 5 blocks to the game area, then smash them!","target":null},{"key":"differentDimensions.name","english":"Different dimensions","target":null},{"key":"differentDimensions.description","english":"Check your code still works if the dimensions change!","target":null}]},{"name":"hints","rows":[{"key":"createFiveBlocks.question","english":"How do I create the five blocks?","target":null},{"key":"createFiveBlocks.answer","english":"Use a `for` loop, e.g. `for (let x = 1; x <= 5; x++) { ... }`, and call `new Block(left, top)` inside it.","target":null},{"key":"blockLeftPosition.question","english":"How do I work out each block's `left` position?","target":null},{"key":"blockLeftPosition.answer","english":"The first sits at `8`, and each block is `16` wide with a `1` gap, so the left is `8 + ((x - 1) * 17)`.","target":null},{"key":"detectHit.question","english":"How do I detect the ball hitting a block?","target":null},{"key":"detectHit.answer","english":"Check if the ball's top edge equals the block's bottom edge (`block.top + block.height`), and that the ball is horizontally aligned with the block.","target":null},{"key":"skipSmashed.question","english":"How do I skip blocks that are already smashed?","target":null},{"key":"skipSmashed.answer","english":"Inside your loop, check `block.smashed` and use `continue` to jump to the next block if it's already true.","target":null},{"key":"stopWhenAllSmashed.question","english":"How do I stop the ball when every block is gone?","target":null},{"key":"stopWhenAllSmashed.answer","english":"Write a small function that returns true when all blocks have `smashed === true`. When it returns true, `break` out of the main loop.","target":null}]},{"name":"describers","rows":[{"key":"moveBall","english":"Moves the ball according to its velocity","target":null}]},{"name":"functions","rows":[{"key":"ball.description","english":"Creates a new Ball instance with properties: `cx`, `cy` (center position), `radius`, `xVelocity`, and `yVelocity`.","target":null},{"key":"ball.category","english":"Objects","target":null},{"key":"block.description","english":"Creates a new Block instance with properties: `left`, `top`, `width` (16), `height`, and `smashed` (initially false).","target":null},{"key":"block.category","english":"Objects","target":null},{"key":"moveBall.description","english":"Moves the ball according to its current `xVelocity` and `yVelocity`.","target":null},{"key":"moveBall.category","english":"Movement","target":null},{"key":"push.description","english":"Adds an element to a list and returns the new list.","target":null},{"key":"push.category","english":"Lists","target":null}]}]}]
---

In the previous exercise, you got the ball bouncing around the game area. Now it's time to add some blocks!

You have a new <define>`Block`</define> class. When you create an instance using `new Block(left, top)`, you specify its `left` and `top` position. All blocks are `16` wide.

The block has <define>`top`</define>, <define>`left`</define>, <define>`width`</define> and <define>`height`</define> properties which you can read. It also has a <define>`smashed`</define> property you can read and write.

You have two jobs:

1. Create 5 blocks. They should all have a top of `31`. The first should have a left of `8`, and then they should be evenly distributed along the game area (with a gap of `1` between them).

2. Handle what happens when the ball hits a block. When this happens, set the block's `smashed` property to `true` (which makes it disappear) and reverse the ball's direction. Once all blocks are smashed, stop moving the ball.

For this exercise, the ball will only ever hit the bottom of a block, which simplifies the collision logic.
