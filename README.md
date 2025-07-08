# AWS Solution Architect Professional 試験対策ガイド

## 概要

このガイドは AWS Solution Architect Professional (SAP-C02) 試験の合格を目指す方向けの包括的な学習教材です。

## 試験情報

- **試験時間**: 180 分
- **問題数**: 75 問
- **合格点**: 750 点/1000 点
- **形式**: 複数選択、複数回答
- **有効期限**: 3 年間
- **試験料**: $300 USD

## 出題ドメイン

1. **複雑な組織の設計** (12.5%)

2. **新しいソリューションの設計** (31%)

3. **既存ソリューションの移行** (25%)

4. **コスト管理** (12.5%)

5. **継続的改善** (19%)

## 学習教材構成

### 📚 分野別学習ガイド

- [01. コンピューティングサービス](./01-compute.md)
- [02. ストレージサービス](./02-storage.md)
- [03. データベースサービス](./03-database.md)
- [04. ネットワーキング](./04-networking.md)
- [05. セキュリティ](./05-security.md)
- [06. 監視・ログ](./06-monitoring.md)
- [07. アーキテクチャパターン](./07-architecture.md)
- [08. コスト最適化](./08-cost-optimization.md)
- [09. 災害復旧](./09-disaster-recovery.md)
- [10. 移行戦略](./10-migration.md)

### 📋 実践・演習

- [実践問題集](./practice-questions.md)
- [ハンズオン演習](./hands-on-labs.md)
- [ケーススタディ](./case-studies.md)

### 🔗 公式リソース

- [AWS 公式ドキュメント](https://docs.aws.amazon.com/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [AWS Architecture Center](https://aws.amazon.com/architecture/)
- [AWS Black Belt Online Seminar](https://aws.amazon.com/jp/events/webinars/blackbelt/)
- [AWS re:Invent セッション](https://reinvent.awsevents.com/)

## 学習の進め方

### Phase 1: 基礎固め (2-3 週間)

1. 各サービスの基本概念理解

2. サービス間の比較・使い分け

3. 基本的なアーキテクチャパターン

### Phase 2: 応用・実践 (3-4 週間)

1. 複雑なアーキテクチャ設計

2. コスト最適化手法

3. セキュリティベストプラクティス

### Phase 3: 試験対策 (1-2 週間)

1. 模擬試験・過去問演習

2. 弱点分野の集中学習

3. 最終確認・復習

## 推奨学習時間

- **総学習時間**: 80-120 時間
- **1 日の学習時間**: 2-3 時間
- **学習期間**: 6-8 週間

## 前提知識

- AWS 基礎サービスの理解
- Solutions Architect Associate レベルの知識
- 実際の AWS 環境での経験 (推奨)

## 合格のポイント

1. **サービス比較の理解**: 似たサービスの違いと使い分け

2. **アーキテクチャパターン**: 典型的な設計パターンの習得

3. **コスト最適化**: 各サービスの料金体系と最適化手法

4. **セキュリティ**: 多層防御とベストプラクティス

5. **災害復旧**: RTO/RPO 要件に応じた戦略選択

6. **Well-Architected Framework**: 6 つの柱の深い理解

## 開発・貢献

### ローカル開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# Markdownファイルのリント実行
npm run lint:md

# 自動修正可能な問題を修正
npm run lint:md:fix
```

### VS Code 拡張機能

推奨拡張機能が自動的に提案されます：

- markdownlint: Markdown 品質チェック
- Markdown All in One: Markdown 編集支援
- Markdown Preview Enhanced: プレビュー機能

### CI/CD

- GitHub Actions で Markdownlint を自動実行
- プルリクエスト時に品質チェック
- main ブランチへのプッシュ時にチェック

## 更新履歴

- 2025-07-08: 初版作成
- 各分野の詳細教材を分割作成
- markdownlint CI/CD 追加

---

## 免責事項

### 情報の正確性について

- この教材は 2025 年 7 月時点の情報に基づいて作成されています
- AWS サービスは継続的にアップデートされるため、最新の情報については必ず[AWS 公式ドキュメント](https://docs.aws.amazon.com/)をご確認ください
- 料金情報、サービス仕様、機能詳細等は変更される可能性があります

### 利用目的について

- この教材は個人的な学習目的で作成された非公式の資料です
- AWS Solution Architect Professional 試験の学習支援を目的としていますが、合格を保証するものではありません
- 商用利用や再配布は想定していません

### 責任の制限について

- この教材の内容を参考にした結果生じた以下について、作成者は一切の責任を負いません：
  - 試験の不合格
  - AWS サービス利用に伴う費用
  - システム設計・構築における問題
  - その他直接的・間接的な損害

### 推奨事項

- 実際のシステム設計・構築前には必ず公式ドキュメントを確認してください
- 本番環境での実装前には十分なテストを実施してください
- 重要な判断については AWS サポートや認定パートナーにご相談ください

---

_この教材は継続的に更新されます。最新の AWS サービス情報は公式ドキュメントをご確認ください。_

---

## ライセンス

このプロジェクトは MIT License の下で公開されています。

詳細は [LICENSE](./LICENSE) ファイルをご確認ください。

### 第三者ライセンス

このプロジェクトで使用している依存関係のライセンス情報：

- **markdownlint**: MIT License
- **その他の npm パッケージ**: 各パッケージのライセンスに従います

### 貢献について

このプロジェクトへの貢献を歓迎します。プルリクエストを送信する際は、MIT License に同意したものとみなされます。
