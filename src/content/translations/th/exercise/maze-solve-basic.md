---
lang: "th"
type: "exercise"
slug: "maze-solve-basic"
title: "หาทางออกจากเขาวงกต"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "a12c370c8d1532022a89fdd74166be21"
governance_sha: "9e31abf"
content_version: "8a94b2dbdd6b"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"คุณยังไปไม่ถึงจุดสิ้นสุดของเขาวงกต"}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"พาตัวละครไปให้ถึงจุดสิ้นสุดของเขาวงกต"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"เดินผ่านเขาวงกตไปให้ถึงเป้าหมายสีเขียว"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"พาตัวละครไปให้ถึงจุดสิ้นสุดของเขาวงกต"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"งานของคุณคือพาตัวละครเดินผ่านเขาวงกตไปให้ถึงช่องเป้าหมายสีเขียว"}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"ฉันต้องเลื่อนอะไรไปที่ไหน?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"คุณกำลังเลื่อนตัวละครตัวเล็กๆ ที่เริ่มจากมุมซ้ายบน ไปยังวงกลมสีเขียวที่มุมขวาล่าง โดยหลีกเลี่ยงช่องลายทางสีแดงทั้งหมด"},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"พอฉันสั่งเลี้ยวซ้าย ตัวละครกลับเลี้ยวขวา!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if they are facing right, and turn left, the person will change to face up.","target":"ตัวละครจะหมุนเทียบกับทิศทางที่ตัวละครหันหน้าอยู่ ดังนั้นถ้าตัวละครหันหน้าไปทางขวาแล้วเลี้ยวซ้าย ตัวละครจะเปลี่ยนไปหันหน้าขึ้นด้านบน"}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"แย่แล้ว คุณพยายามจะเดินตกขอบเขาวงกต!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"โอ๊ย เดินชนกำแพงแล้ว!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"โอ๊ย! เดินเข้าไปในกองไฟแล้ว!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"แหวะ! เดินไปเหยียบอึเข้าแล้ว! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"เลื่อนตัวละครไปข้างหน้าหนึ่งช่อง"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"หมุนตัวละครไปทางซ้าย 90 องศา"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"หมุนตัวละครไปทางขวา 90 องศา"}]}]}]
---

ยินดีต้อนรับสู่แบบฝึกหัดแรกของคุณ!

เป้าหมายของแบบฝึกหัดนี้คือให้คุณคุ้นเคยกับการทำงานของสภาพแวดล้อมการเรียน งานของคุณคือหาทางออกจากเขาวงกตที่เห็นทางด้านซ้าย โดยให้คำสั่งกับตัวละครตัวเล็กๆ เขียนคำสั่งทั้งหมดที่ตัวละครต้องทำตาม แล้วคลิก **Run Code** เพื่อให้ตัวละครทำตามคำสั่งเหล่านั้น

คำสั่งทั้ง 3 คำสั่งที่ใช้ได้คือ

- `move()` (เคลื่อนที่) เลื่อนตัวละครไปข้างหน้าหนึ่งช่อง
- `turnLeft()` (เลี้ยวซ้าย) หมุนตัวละครไปทางซ้าย (เทียบกับทิศทางที่ตัวละครหันหน้าอยู่)
- `turnRight()` (เลี้ยวขวา) หมุนตัวละครไปทางขวา (เทียบกับทิศทางที่ตัวละครหันหน้าอยู่)

จะเห็นว่าเราเขียนคำสั่ง 3 คำสั่งแรกไว้ให้แล้วทางด้านซ้าย เริ่มจากคลิกปุ่ม **"Run Code"** เพื่อดูว่าคำสั่งเหล่านั้นทำอะไร จากนั้น **เพิ่มคำสั่งอีก** เพื่อพาตัวละครของคุณไปให้ถึงจุดสิ้นสุดของเขาวงกต เขียนคำสั่งบรรทัดละหนึ่งคำสั่ง แล้วกด **Run Code** เพื่อรันทั้งหมด

การรันโค้ดบ่อยๆ จนติดเป็นนิสัยเป็นเรื่องที่ดีมาก!

เมื่อผ่านเขาวงกตได้แล้ว คุณก็กลับไปที่ Dashboard เพื่อเริ่มบทเรียนถัดไปได้เลย
