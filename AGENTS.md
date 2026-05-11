# Multi-Agent Operating Rules

このリポジトリでは、Copilotを以下の5つの役割として使います。各役割は `.github/agents/*.agent.md` から起動します。

## Roles

- Planner: 要件を小さく分解し、実装順序と受け入れ条件を作る
- Implementer: Plannerの計画に沿って、最小限のコード変更を行う
- Tester: ブラウザで確認できるテスト観点と再現手順を作る
- Reviewer: バグ、回帰、読みづらさ、過剰実装をレビューする
- Documenter: READMEや使い方を、実装後の状態に合わせて更新する

## Shared Memory

- すべての役割は `workshop/agent-log.md` を読んでから作業する
- 作業後は `workshop/agent-log.md` に、実施内容、判断、残課題を短く追記する
- 他の役割の判断を上書きする場合は理由を書く

## Content Expansion

エージェントは、演習の理解や動作確認に必要なコンテンツを増やしてよいです。ただし、増やす内容は役割の責務に収めます。

- Planner: 改善候補、受け入れ条件、追加してよいコンテンツの範囲を提案する
- Implementer: UI文言、空状態メッセージ、サンプルデータなど、機能に必要な小さなコンテンツを追加する
- Tester: テスト用入力例、確認観点、境界ケースを追加する
- Reviewer: 追加されたコンテンツが多すぎないか、演習目的に合うか確認する
- Documenter: FAQ、発展課題、振り返り質問など、学習に必要な説明を追加する

コンテンツを増やした場合は、必ず `workshop/agent-log.md` に何を増やしたかを書きます。

## Coding Rules

- アプリは外部依存なしのHTML/CSS/JavaScriptで作る
- まず動く小さな変更を優先する
- UIのテキストは日本語にする
- `localStorage` を使う場合は、保存キーを `lab-task-board-v1` に統一する
- レイアウト崩れが起きないよう、スマホ幅でも確認する
