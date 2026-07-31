---
lang: "vi"
type: "exercise"
slug: "maze-solve-basic"
title: "Giải mê cung"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/maze-solve-basic"
en_md5: "6ed23a25576883e0f33304cffc408fe0"
governance_sha: "33fd2de"
content_version: "2b0ce12fa230"
published_at: "2026-07-31"
forum_topic_id: 322
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"checks","rows":[{"key":"didNotReachEnd","english":"You didn't reach the end of the maze.","target":"Bạn chưa đến được cuối mê cung."}]},{"name":"tasks","rows":[{"key":"solveMaze.name","english":"Guide the person to the end of the maze","target":"Dẫn nhân vật đến cuối mê cung"},{"key":"solveMaze.description","english":"Navigate through the maze to reach the green target","target":"Đi qua mê cung để đến được ô đích màu xanh lá"}]},{"name":"scenarios","rows":[{"key":"maze1.name","english":"Guide the person to the end of the maze","target":"Dẫn nhân vật đến cuối mê cung"},{"key":"maze1.description","english":"Your job is to navigate your person through the maze to the green goal square.","target":"Việc của bạn là dẫn nhân vật đi qua mê cung để đến ô đích màu xanh lá."}]},{"name":"hints","rows":[{"key":"whatAmIMoving.question","english":"What am I moving where?","target":"Mình phải di chuyển cái gì, đi đâu?"},{"key":"whatAmIMoving.answer","english":"You're moving the little person, who starts at the top-left, to the green circle at the bottom right, avoiding any red striped cells.","target":"Bạn cần đưa nhân vật nhỏ, xuất phát ở góc trên bên trái, đến hình tròn màu xanh lá ở góc dưới bên phải, và tránh các ô kẻ sọc đỏ."},{"key":"turnLeftTurnsRight.question","english":"When I turn left, the person turns right!","target":"Mình cho quay sang trái mà nhân vật lại quay sang phải!"},{"key":"turnLeftTurnsRight.answer","english":"The person turns relative to the position they're facing. So if you are facing right, and turn left, the person will change to face up.","target":"Nhân vật quay so với hướng đang nhìn. Vì vậy nếu nhân vật đang nhìn sang phải mà bạn cho quay sang trái thì nhân vật sẽ chuyển sang nhìn lên trên."}]}]},{"heading":"Shared \"maze\" messages","note":"Shared by every exercise in the maze category, not just this one. A change here changes all of them.","namespaces":[{"name":"errors","rows":[{"key":"fellOffEdge","english":"Oh no - you tried to fall off the edge of the maze!","target":"Ôi không, bạn suýt rơi khỏi mép mê cung rồi!"},{"key":"hitWall","english":"Ouch - you walked into a wall!","target":"Ối, bạn đi thẳng vào tường rồi!"},{"key":"walkedIntoFire","english":"Ouch! You walked into the fire!","target":"Ối! Bạn đi thẳng vào đống lửa rồi!"},{"key":"walkedIntoPoop","english":"Ewww! You walked into the poop! 💩💩💩","target":"Eo ơi! Bạn giẫm phải bãi phân rồi! 💩💩💩"}]},{"name":"describers","rows":[{"key":"move","english":"Move the character forward one cell","target":"Di chuyển nhân vật tiến lên một ô"},{"key":"turnLeft","english":"Turn the character 90 degrees left","target":"Xoay nhân vật 90 độ sang trái"},{"key":"turnRight","english":"Turn the character 90 degrees right","target":"Xoay nhân vật 90 độ sang phải"}]}]}]
---

Chào mừng bạn đến với bài tập đầu tiên!

Bài tập này giúp bạn làm quen với cách môi trường học tập hoạt động. Việc của bạn là giải mê cung ở bên trái bằng cách đưa chỉ dẫn cho nhân vật nhỏ trong đó. Bạn viết ra tất cả các chỉ dẫn mà nhân vật cần làm theo, rồi bấm **Chạy Code** để nhân vật thực hiện chúng.

Ba chỉ dẫn bạn có thể dùng là:

- `move()` (di chuyển) đưa nhân vật tiến lên một bước
- `turnLeft()` (quay sang trái) quay nhân vật sang trái (so với hướng nhân vật đang nhìn)
- `turnRight()` (quay sang phải) quay nhân vật sang phải (so với hướng nhân vật đang nhìn)

Ở bên trái, bạn thấy chúng tôi đã viết sẵn ba chỉ dẫn đầu tiên cho bạn. Hãy bắt đầu bằng cách bấm nút **"Chạy Code"** để xem chúng làm gì. Sau đó **thêm chỉ dẫn** để đưa nhân vật của bạn đến cuối mê cung. Mỗi dòng viết một chỉ dẫn, rồi bấm **Chạy Code** để chạy tất cả.

Bạn nên tập thói quen chạy code thường xuyên nhé!

Sau khi giải xong mê cung, bạn có thể quay lại Trang tổng quan và bắt đầu bài học tiếp theo.
