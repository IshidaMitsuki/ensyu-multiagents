# 受講者用ワークシート

## 1. 起動確認

1. VS Codeで `ensyu` フォルダを開く
2. `app/index.html` をブラウザで開く
3. タスクを1つ追加する
4. 状態を変更する
5. ブラウザを再読み込みして、タスクが残っていることを確認する

## 2. マルチエージェントの進め方

この演習では、Copilotを5つの役割として順番に使います。
各エージェントに送る文面は `workshop/chat-scripts.md` を使ってください。

| 順番 | 役割 | 使うエージェント | 目的 |
| --- | --- | --- | --- |
| 1 | Planner | `.github/agents/01-planner.agent.md` | 何を作るか決める |
| 2 | Implementer | `.github/agents/02-implementer.agent.md` | 小さく実装する |
| 3 | Tester | `.github/agents/03-tester.agent.md` | 壊れないか確認する |
| 4 | Reviewer | `.github/agents/04-reviewer.agent.md` | 差分をレビューする |
| 5 | Documenter | `.github/agents/05-documenter.agent.md` | 説明を更新する |

Copilot Chatのエージェント選択に表示されない場合は、対象の `.agent.md` ファイルの本文をCopilot Chatに貼り付けて実行してください。

## 3. Planner

Copilot Chatを開き、Plannerエージェントを選んで実行してください。

確認すること:

- 改善案は小さいか
- 受け入れ条件は確認可能か
- 変更対象ファイルが妥当か

## 4. Implementer

Implementerエージェントを選んで実行してください。実装後、必ず差分を読みます。

確認すること:

- 関係ないファイルが変わっていないか
- 既存機能が壊れていないか
- `workshop/agent-log.md` に作業内容が残っているか

## 5. Tester

Testerエージェントを選んで実行してください。出てきたテストケースをブラウザで実行します。

最低限の確認:

- タスク追加
- 状態変更
- 削除
- 再読み込み後の保存
- スマホ幅相当の表示

## 6. Reviewer

Reviewerエージェントを選んで実行してください。指摘が出たら、人間が採用するか判断します。

判断基準:

- 実際に再現できる問題か
- 演習の範囲に収まる修正か
- 読みやすさが上がるか

## 7. Documenter

Documenterエージェントを選んで実行してください。最後に、今回の改善を1分で説明できるようにします。

## 8. 振り返り

- 役割を分けたことで、どの作業がやりやすくなったか
- 逆に、役割を分けたことで面倒になったことは何か
- AIの提案を採用しない判断はどこで必要だったか
