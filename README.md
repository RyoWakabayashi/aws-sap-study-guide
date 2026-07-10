# AWS Solution Architect Professional 試験対策ガイド

## 概要

このガイドは AWS Solution Architect Professional (SAP-C02) 試験の合格を目指す方向けの包括的な学習教材です。

## 試験情報

- **試験コード**: SAP-C02
- **試験時間**: 180 分
- **問題数**: 75 問 (採点対象 65 問 + 非採点 10 問。非採点問題は試験中に判別不可)
- **合格点**: 750 点/1000 点 (スコアは 100〜1000 のスケールスコア)
- **形式**: 単一選択 (選択肢 4 つから正解 1 つ)、複数選択 (選択肢 5 つ以上から正解 2 つ以上)
- **想定対象者**: AWS を用いたクラウドソリューションの設計・実装経験 2 年以上
- **有効期限**: 3 年間
- **試験料**: $300 USD
- **前提資格**: 特になし (Associate 認定は必須ではないが強く推奨)

> 出典: [AWS Certified Solutions Architect - Professional (SAP-C02) 公式試験ガイド](https://docs.aws.amazon.com/aws-certification/latest/examguides/solutions-architect-professional-02.html)

## 出題ドメイン (2025 年時点の最新試験ガイド)

SAP-C02 は 2022 年 11 月に改訂され、現在は **4 つのドメイン**で構成されています (旧 5 ドメイン構成の情報は古いバージョンのため注意)。

| ドメイン | 出題比率 | 主なタスクステートメント |
|---|---|---|
| **Domain 1: 組織の複雑さに対応するソリューション設計** | 26% | ①ネットワーク接続戦略の設計 ②セキュリティ統制の規定 ③信頼性・回復力のあるアーキテクチャ設計 ④マルチアカウント環境の設計 ⑤コスト最適化と可視化戦略の決定 |
| **Domain 2: 新規ソリューションの設計** | 29% | ①デプロイ戦略の設計 ②事業継続性を確保するソリューション設計 ③要件に基づくセキュリティ統制の決定 ④信頼性要件を満たす戦略設計 ⑤パフォーマンス目標を満たすソリューション設計 ⑥コスト最適化戦略の決定 |
| **Domain 3: 既存ソリューションの継続的改善** | 25% | ①運用上の優秀性の改善戦略 ②セキュリティの改善戦略 ③パフォーマンスの改善戦略 ④信頼性の改善戦略 ⑤コスト最適化の機会特定 |
| **Domain 4: ワークロードの移行とモダナイゼーションの加速** | 20% | ①移行対象ワークロードの選定 ②最適な移行アプローチの決定 ③既存ワークロードの新アーキテクチャ決定 ④モダナイゼーションの機会特定 |

合計 100%。旧 SAP-C01 や誤って流布している「5 ドメイン・12.5/31/25/12.5/19%」という情報は現行試験には該当しないため、学習の際は必ず[公式試験ガイド](https://docs.aws.amazon.com/aws-certification/latest/examguides/solutions-architect-professional-02.html)の最新版を確認してください。

### 出題範囲に含まれる主要サービス (公式ガイド Appendix より抜粋)

- **Compute**: EC2, Auto Scaling, Elastic Beanstalk, EKS, Fargate, Lambda, Lightsail, Outposts, Wavelength, App Runner, Batch
- **Database**: Aurora (Serverless 含む), DynamoDB, ElastiCache, DocumentDB, Neptune, RDS, Redshift, Keyspaces, Timestream
- **Networking**: VPC, Direct Connect, VPN, Transit Gateway, PrivateLink, Route 53, CloudFront, Global Accelerator, ELB
- **Security**: IAM, KMS, ACM, CloudHSM, Cognito, GuardDuty, Security Hub, Inspector, Macie, WAF, Shield, Secrets Manager
- **Migration**: Application Discovery Service, Application Migration Service (MGN), DMS, SCT, DataSync,
  Snow Family, Migration Hub, Transfer Family
- **Management/Governance**: CloudFormation, Control Tower, Organizations, Systems Manager, Trusted Advisor,
  Compute Optimizer, Config, Well-Architected Tool
- **Analytics**: Athena, EMR, Glue, Kinesis (Data Streams/Firehose/Analytics), MSK, OpenSearch Service, Lake Formation, QuickSight

**試験範囲外 (Out of scope)** とされているもの: Amazon GameLift、モバイルアプリのフロントエンド開発、12-factor app 方法論、OS の詳細な内部知識 など。

### 2025〜2026 年にかけての試験関連の主な動き

- 2025 年 12 月の re:Invent 2025 にて Graviton5、Trainium3、Database Savings Plans、Lambda Durable Functions
  などが発表されており、今後の試験改訂やシナリオ問題で背景知識として問われる可能性があります。
- **AWS Application Migration Service (MGN)** は 2026 年 6 月に **AWS Transform MGN** へリブランドされました。
  試験ガイド上はまだ「AWS Application Migration Service」表記ですが、コンソールや最新ドキュメントでは
  新名称が使われるため両方の名称を押さえておきましょう。
- **CloudWatch Database Insights** が **RDS Performance Insights** の後継として位置付けられています
  (2025 年 11 月末で新規機能追加は Performance Insights から移行)。
- 出題範囲は「非網羅的リスト」であるため、公式ガイドに載っていない新しいサービスも背景知識として
  問われる場合があります。特に Well-Architected Framework の考え方に基づいた「なぜその選択をするか」
  という設計判断力が問われる点は変わりません。

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
- [クイズゲーム](./quiz-game/)

### 🔗 公式リソース

- [AWS 公式ドキュメント](https://docs.aws.amazon.com/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [AWS Architecture Center](https://aws.amazon.com/architecture/)
- [AWS Black Belt Online Seminar](https://aws.amazon.com/jp/events/webinars/blackbelt/)
- [AWS re:Invent セッション](https://reinvent.awsevents.com/)

### 🎥 動画で学ぶ

各分野ファイルの「公式リソース」欄には該当サービスの AWS Black Belt 資料・動画を個別リンクしていますが、
それ以外にも以下の動画コンテンツが学習に有用です。

#### AWS Black Belt Online Seminar（日本語・体系的にサービスを学べる定番シリーズ）

- [AWS Black Belt Online Seminar YouTube 再生リスト][bb-playlist] — 全セッションの動画がここに集約
- [AWS Black Belt Online Seminar 資料一覧（AWS 公式ブログ）](https://aws.amazon.com/jp/blogs/news/aws-blackbelt-overview/) —
  開催月ごとの資料・動画公開案内
- [AWS Black Belt Online Seminar 一覧まとめ（DevelopersIO）](https://dev.classmethod.jp/articles/blackbelt-list/) —
  サービス名から資料・動画を横断検索できる非公式まとめ。個別リンクが見つからないサービスはここで検索すると良い
- [re:Invent 2025 速報アップデート（AWS Black Belt）](https://aws.amazon.com/jp/blogs/news/2025-12-reinvent2025-aws-blackbelt/) —
  re:Invent の新発表を日本語でキャッチアップできる回

#### AWS Skill Builder（AWS公式の無料学習プラットフォーム）

- [Exam Prep: AWS Certified Solutions Architect - Professional (SAP-C02)][skillbuilder-examprep] —
  ドメインごとの解説動画と公式練習問題（Standard コースは無料、模擬試験等は有料サブスクリプション）
- [Exam Prep Plan: SAP-C02][skillbuilder-plan] — 学習の進め方をステップ形式で提示するラーニングプラン

#### 英語の無料フルコース

- [AWS Certified Solutions Architect Professional (SAP-C02) 認定コース](https://www.youtube.com/watch?v=hyEw7dQ9-JE) —
  freeCodeCamp / Andrew Brown による約70時間の無料フルコース

#### re:Invent・アーキテクチャ事例

- [AWS Events 公式 YouTube チャンネル（re:Invent 過去セッション含む）](https://www.youtube.com/@AWSEventsChannel/playlists)
- [This Is My Architecture（顧客・パートナーの実アーキテクチャ事例を2〜5分で紹介）](https://aws.amazon.com/this-is-my-architecture/)
- [Amazon Web Services Japan 公式 YouTube チャンネル](https://www.youtube.com/channel/UCnjKWUK2t5QJYfeqqilhJhQ)

> Black Belt の資料 (PDF) には対応する解説動画 (YouTube) が用意されていることがほとんどです。
> 本ガイド内のリンクが PDF の場合も、動画版を見たい場合は上記のまとめサイトやプレイリストから
> 同名のセッションを検索してください。

[bb-playlist]: https://www.youtube.com/playlist?list=PLzWGOASvSx6FIwIC2X1nObr1KcMCBBlqY
[skillbuilder-examprep]: https://skillbuilder.aws/category/exam-prep/solutions-architect-professional-SAP-C02
[skillbuilder-plan]: https://skillbuilder.aws/learning-plan/2WE6EHYVK5/exam-prep-plan-aws-certified-solutions-architect--professional-sapc02--english/FY9X4K2SVJ

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
- 2026-07-10: 試験ドメイン情報を現行 SAP-C02 (4 ドメイン・26/29/25/20%) に訂正、各分野に 2025〜2026 年の AWS 最新サービス動向を追記

---

## 免責事項

### 情報の正確性について

- この教材は 2026 年 7 月時点の情報に基づいて作成されています
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
