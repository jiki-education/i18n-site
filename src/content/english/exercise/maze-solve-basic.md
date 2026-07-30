---
type: "exercise"
slug: "maze-solve-basic"
title: "Solve the Maze"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
captured_at: "2026-07-30"
---

Welcome to your first exercise!

The aim of this exercise is to get you familiar with how the learning environment works. Your task is to solve the maze you can see to the left by giving the little person instructions. You write out all the instructions that the person needs to follow, then click **Run Code** to get it to follow them.

The three instructions you can use are:

- <define>`move()`</define> which moves the character one step forward
- <define>`turnLeft()`</define> turns the character left (relative to the direction they're currently facing)
- <define>`turnRight()`</define> turns the character right (relative to the direction they're currently facing)

You can see that we've already written the first three instructions on the left hand side. Start by clicking the **"Run Code"** button to see what they do. Then **add more instructions** to move your character to the end of the maze. Put one instruction on each line then hit **Run Code** to run them all.

It's good practice to get into the habit of running your code regularly!

Once you solve the maze you can head back to the Dashboard and start the next lesson.

---

## Messages shown in the exercise

### checks

| Key | Message |
|-----|---------|
| `didNotReachEnd` | You didn't reach the end of the maze. |

### tasks

| Key | Message |
|-----|---------|
| `solveMaze.name` | Guide the person to the end of the maze |
| `solveMaze.description` | Navigate through the maze to reach the green target |

### scenarios

| Key | Message |
|-----|---------|
| `maze1.name` | Guide the person to the end of the maze |
| `maze1.description` | Your job is to navigate your person through the maze to the green goal square. |

### hints

| Key | Message |
|-----|---------|
| `whatAmIMoving.question` | What am I moving where? |
| `whatAmIMoving.answer` | You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells. |
| `turnLeftTurnsRight.question` | When I turn left, the person turns right! |
| `turnLeftTurnsRight.answer` | The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up. |

---

## Shared "maze" messages

Shared by every exercise in the maze category, not just this one. A change here changes all of them.

### errors

| Key | Message |
|-----|---------|
| `fellOffEdge` | Oh no - you tried to fall off the edge of the maze! |
| `hitWall` | Ouch - you walked into a wall! |
| `walkedIntoFire` | Ouch! You walked into the fire! |
| `walkedIntoPoop` | Ewww! You walked into the poop! 💩💩💩 |

### describers

| Key | Message |
|-----|---------|
| `move` | Move the character forward one cell |
| `turnLeft` | Turn the character 90 degrees left |
| `turnRight` | Turn the character 90 degrees right |
