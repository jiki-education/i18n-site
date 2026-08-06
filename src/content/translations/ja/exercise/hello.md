---
lang: "ja"
type: "exercise"
slug: "hello"
title: "こんにちは"
status: "published"
source_repo: "front-end"
source_path: "curriculum/src/exercises/hello"
en_md5: "0e1932189205e5eaa4f7ddfa58b16f6c"
governance_sha: "c80036b"
content_version: "4c0eda4d6f1b"
published_at: "2026-08-06"
messages: [{"heading":"Messages shown in the exercise","namespaces":[{"name":"tasks","rows":[{"key":"createSayHelloFunction.name","english":"Create sayHello function","target":"sayHello関数を作成"},{"key":"createSayHelloFunction.description","english":"Write a sayHello function that takes a name and returns a greeting in the format 'Hello, [name]!'.","target":"名前を受け取り、「Hello, [name]!」という挨拶を返すsayHello関数を書いてください。"}]},{"name":"scenarios","rows":[{"key":"helloAiko.name","english":"Greet Aiko","target":"Aikoに挨拶"},{"key":"helloAiko.description","english":"Return 'Hello, Aiko!'","target":"「Hello, Aiko!」を返す"},{"key":"helloPriya.name","english":"Greet Priya","target":"Priyaに挨拶"},{"key":"helloPriya.description","english":"Return 'Hello, Priya!'","target":"「Hello, Priya!」を返す"},{"key":"helloMei.name","english":"Greet Mei","target":"Meiに挨拶"},{"key":"helloMei.description","english":"Return 'Hello, Mei!'","target":"「Hello, Mei!」を返す"}]},{"name":"hints","rows":[{"key":"answerShape.question","english":"What's the basic shape of the answer I'm trying to build?","target":"作成しようとしている解答の基本的な形は何ですか？"},{"key":"answerShape.answer","english":"Three pieces joined together: the fixed start `\"Hello, \"`, then the name, then the fixed end `\"!\"`.","target":"3つの部品を結合します。最初の固定部分`\"Hello, \"`、次に名前、最後の固定部分`\"!\"`です。"},{"key":"joinStrings.question","english":"How do I join strings together?","target":"文字列を連結するにはどうすればよいですか？"},{"key":"joinStrings.answer","english":"Use concatenation with `+`, or a template string with `${}` placeholders, to stick all three pieces together into a single string.","target":"`+`を使った連結、または`${}`プレースホルダーを使ったテンプレート文字列を用いて、3つの部品を1つの文字列に結合してください。"}]}]}]
---

次の2つの演習では、引き続き関数の作り方を練習し、文字列の操作を始めます。

まずは、最もシンプルなケースを見ていきましょう。

今回作るのは、`sayHello(name)`（名前を受け取って挨拶を返す関数）です。

この関数は、指定された相手への挨拶を返すようにします。つまり、`sayHello("Jeremy")`と書けば`"Hello, Jeremy!"`を返し、`sayHello("Nicole")`と書けば`"Hello, Nicole!"`を返します。

これは簡単な演習で、次にもっと面白い演習の基礎を固めるものになるはずです。
