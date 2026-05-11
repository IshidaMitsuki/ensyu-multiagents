# Agent Log

このファイルは、各エージェントの共有メモリです。Copilot Chatで役割プロンプトを実行したら、結果をこの下に追記してください。

## Initial State

- アプリ名: 研究タスクボード
- 現在の機能: タスク追加、状態変更、削除、ローカル保存
- 演習の目的: 役割分担したAI開発の流れを体験する

## 2026-05-11

- ドキュメントの役割呼び出し先を `.github/prompts/` から `.github/agents/` に揃えた
- README とワークシートの表記を custom agents 前提に更新した
- 受講者はプロンプトファイルではなく、各役割の `.agent.md` を Copilot Chat から使う

## 2026-05-11 追記

- Planner → Implementer → Tester → Reviewer → Documenter を人間が順番に実行する方式に整理した
- README とワークシートから、自動一括実行を想定した操作手順を削除した
- カスタムエージェントが表示されない場合は、対象の `.agent.md` ファイル本文をCopilot Chatに貼り付けて進める説明を追加した
