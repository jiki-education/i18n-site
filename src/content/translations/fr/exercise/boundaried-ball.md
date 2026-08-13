---
lang: "fr"
type: "exercise"
slug: "boundaried-ball"
title: "La balle entre quatre murs"
status: "published"
source_repo: "i18n"
source_path: "locales/fr/curriculum/exercises/boundaried-ball"
en_md5: "c7d152e2b95d6472f51118005a04cfeb"
governance_sha: "53cdc3d"
content_version: "00a44aca6922"
published_at: "2026-08-13"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"wrongMoveCount","english":"We expected the ball to move twice around the game area and land back in the same starting place.","target":null},{"key":"missedLeftWall","english":"The ball didn't seem to touch the middle of the left hand side.","target":null},{"key":"missedRightWall","english":"The ball didn't seem to touch the middle of the right hand side.","target":null},{"key":"missedTopMiddle","english":"The ball didn't seem to touch the top middle.","target":null},{"key":"missedBottomMiddle","english":"The ball didn't seem to touch the bottom middle.","target":null}]},{"name":"tasks","rows":[{"key":"bounceBall.name","english":"Make the ball bounce around","target":null},{"key":"bounceBall.description","english":"Create a ball and make it bounce off all four walls of the game area.","target":null}]},{"name":"scenarios","rows":[{"key":"addBall.name","english":"Add the ball","target":null},{"key":"addBall.description","english":"Add the ball and make it bounce around the game area.","target":null}]},{"name":"hints","rows":[{"key":"createBall.question","english":"How do I get a ball to work with?","target":null},{"key":"createBall.answer","english":"Use `new` to make one: `let ball = new Ball()`. Then pass `ball` to `moveBall(ball)` inside the loop to make it move.","target":null},{"key":"detectWall.question","english":"How do I tell when the ball has reached a wall?","target":null},{"key":"detectWall.answer","english":"The ball's edge is `radius` away from its centre. For the left wall, check `ball.cx - ball.radius <= 0`. For the right wall, `ball.cx + ball.radius >= 100`.","target":null},{"key":"reverseVelocity.question","english":"What should I do when the ball hits a wall?","target":null},{"key":"reverseVelocity.answer","english":"Set the velocity so it moves the other way next step. At the left wall set `ball.xVelocity = 1`; at the right wall set it to `-1`. Use `=`, not `+=`, so the velocity stays exactly `1` or `-1`.","target":null},{"key":"checkAllWalls.question","english":"Why does my ball still escape sometimes?","target":null},{"key":"checkAllWalls.answer","english":"You probably only checked two walls. Add the same kind of check for the top (`ball.cy - ball.radius <= 0`) and bottom (`ball.cy + ball.radius >= 100`), flipping `yVelocity` instead of `xVelocity`.","target":null}]},{"name":"describers","rows":[{"key":"moveBall","english":"Moves the ball according to its velocity","target":null}]},{"name":"functions","rows":[{"key":"ball.description","english":"Creates a new Ball instance with properties: `cx`, `cy` (center position), `radius`, `xVelocity`, and `yVelocity`.","target":null},{"key":"ball.category","english":"Objects","target":null},{"key":"moveBall.description","english":"Moves the ball according to its current `xVelocity` and `yVelocity`.","target":null},{"key":"moveBall.category","english":"Movement","target":null}]}]}]
---

In this exercise, you'll create a ball and make it bounce off the walls of a game area.

You have a <define>`Ball`</define> class that you can create an instance of using `new Ball()`. The ball has these properties:

- <define>`cx`</define> and <define>`cy`</define>: the center coordinates of the ball (read-only)
- <define>`radius`</define>: the size of the ball (read-only)
- <define>`xVelocity`</define> and <define>`yVelocity`</define>: how the ball moves each step (you can change these)

You also have a function:

- <define>`moveBall(ball)`</define>: moves the ball according to its velocity

The game area ranges from 0 to 100 in both directions.

Your job is to:

1. Create a Ball instance
2. Loop 376 times
3. Each loop, check if the ball is at or past a wall and reverse its velocity
4. Call `moveBall(ball)` to move it

The velocities should always be `1` or `-1`. The ball should never overlap the edge of the game area.
