# ハンズオン演習ガイド

<!--
Copyright (c) 2025 AWS SAP Study Guide
Licensed under the MIT License. See LICENSE file for details.
-->

SAP-C02は「2年以上の実務経験」を前提とした試験であり、座学だけでは掴みにくい「勘所」がシナリオ問題で問われます。
本ガイドは、各ドメインに対応する最小限のハンズオン演習をまとめたものです。実際に手を動かすことで、
md資料で読んだ内容が「なぜそう設計するのか」という実感に変わります。

> ⚠️ **重要な注意事項**
>
> - ここで扱うサービスの多くは**課金対象**です。無料利用枠の範囲を超えると請求が発生します。
> - 各演習の最後に必ず**クリーンアップ手順**を実施し、不要なリソースを削除してください。
> - 本番環境や共有アカウントでは実施せず、**学習専用の個人アカウント**（可能であれば新規に近いアカウント）で行ってください。
> - AWS Organizations や Control Tower の操作は、既存の組織構造に影響を与える可能性があるため、
>   すでに組織で利用しているAWSアカウントでは実施しないでください。
> - 手順はAWSコンソールの変更により変わることがあります。詳細手順は各サービスの公式ドキュメント・
>   ワークショップ（[AWS Workshop Studio](https://catalog.workshops.aws/)）を参照してください。

## 目次

1. [このガイドの使い方](#このガイドの使い方)
2. [Lab 1: マルチアカウント基盤の構築（Domain 1）](#lab-1-マルチアカウント基盤の構築domain-1)
3. [Lab 2: VPC間接続とハイブリッドDNS（Domain 1）](#lab-2-vpc間接続とハイブリッドdnsdomain-1)
4. [Lab 3: Aurora Global Database によるマルチリージョン設計（Domain 2）](#lab-3-aurora-global-database-によるマルチリージョン設計domain-2)
5. [Lab 4: サーバーレス3層アーキテクチャの構築（Domain 2）](#lab-4-サーバーレス3層アーキテクチャの構築domain-2)
6. [Lab 5: GuardDuty + Security Hub による統合脅威検知（Domain 1/3）](#lab-5-guardduty--security-hub-による統合脅威検知domain-13)
7. [Lab 6: AWS Resilience Hub でのレジリエンス評価（Domain 3）](#lab-6-aws-resilience-hub-でのレジリエンス評価domain-3)
8. [Lab 7: CloudWatch Application Signals による可観測性強化（Domain 3）](#lab-7-cloudwatch-application-signals-による可観測性強化domain-3)
9. [Lab 8: Application Migration Service によるサーバー移行体験（Domain 4）](#lab-8-application-migration-service-によるサーバー移行体験domain-4)
10. [Lab 9: Database Migration Service によるDB移行体験（Domain 4）](#lab-9-database-migration-service-によるdb移行体験domain-4)
11. [学習後のクリーンアップチェックリスト](#学習後のクリーンアップチェックリスト)

---

## このガイドの使い方

- 各Labは独立しています。学習中のドメイン・興味のあるサービスから着手してください。
- 「学習ポイント」は、[頻出キーワード対応表](./12-keyword-cheatsheet.md)や各分野ガイドと対応させています。
- 手順は「何を・なぜ行うか」の概要にとどめています。詳細なクリック手順はAWS公式チュートリアルを参照してください。
- 想定コストは目安です。リソースを放置すると想定を超える場合があるため、演習後は必ずクリーンアップしてください。

---

## Lab 1: マルチアカウント基盤の構築（Domain 1）

**対応するタスクステートメント**: Domain 1 Task 4（マルチアカウントAWS環境の設計）

### 目的

AWS Organizations と Control Tower を使い、複数アカウントの標準化されたガバナンスモデルを体験する。

### 手順概要

1. AWS Organizations を有効化し、OU（組織単位）を作成する（例: `Security`、`Workloads`、`Sandbox`）
2. AWS Control Tower のランディングゾーンをセットアップする（**新規のAWS Organizationsでのみ実行可能**）
3. Account Factory で新規メンバーアカウントを作成する
4. 必須ガードレール・強く推奨されるガードレールの内容を確認する
5. SCP（サービスコントロールポリシー）を1つ作成し、特定のリージョンでのリソース作成を禁止してみる

### 学習ポイント

- Control Tower のランディングゾーンと、手動で作るOrganizations構成の違い
- 予防的統制（SCP）と発見的統制（Config Rules）の役割の違い
- Account Factory による標準化されたアカウント発行のメリット

### 想定コスト

Control Tower 自体は無料だが、作成される CloudTrail・Config・S3ログバケット等のログ関連サービスに従量課金が発生する。

### クリーンアップ

Control Tower のランディングゾーンの解体は複雑なため、**学習用の使い捨てアカウント（AWS Organizationsを新規作成できる環境）** で実施することを強く推奨する。

---

## Lab 2: VPC間接続とハイブリッドDNS（Domain 1）

**対応するタスクステートメント**: Domain 1 Task 1（ネットワーク接続戦略の設計）

### 目的

複数VPCの接続パターン（Peering、Transit Gateway）とハイブリッドDNS解決を体験する。

### 手順概要

1. 2つのVPC（VPC-A、VPC-B）を異なるCIDRで作成する
2. VPC Peering で接続し、ルートテーブルを設定して疎通確認する
3. 3つ目のVPCを作成し、Transit Gateway経由でハブ&スポーク接続に切り替える
4. Route 53 Resolver のインバウンド/アウトバウンドエンドポイントを作成し、オンプレミス（模擬的にEC2上のBINDやRoute 53 Private Hosted Zone）とのDNS解決を試す

### 学習ポイント

- VPC Peeringはフルメッシュになるとルート管理が煩雑になる実感
- Transit Gatewayによる集約管理のメリット
- ハイブリッドDNSの設計（[04. ネットワーキング](./04-networking.md)と対応）

### 想定コスト

Transit Gatewayのアタッチメント時間課金、データ処理料金。VPC Peering自体は無料（データ転送料は発生）。

### クリーンアップ

Transit Gatewayのアタッチメント削除 → Transit Gateway削除 → VPC Peering削除 → VPC削除の順で実施。

---

## Lab 3: Aurora Global Database によるマルチリージョン設計（Domain 2）

**対応するタスクステートメント**: Domain 2 Task 4（信頼性要件を満たす戦略設計）

### 目的

Aurora Global Database を構築し、クロスリージョンのレプリケーション遅延とフェイルオーバーを体験する。

### 手順概要

1. プライマリリージョンに Aurora MySQL/PostgreSQL クラスターを作成する
2. セカンダリリージョンを追加し、Global Database化する
3. プライマリ側でデータを書き込み、セカンダリ側の読み取りエンドポイントで反映されるまでの時間を計測する
4. マネージドプランドスイッチオーバー（計画的切り替え）を実行し、所要時間を確認する

### 学習ポイント

- Aurora Global Database の非同期レプリケーション特性（[03. データベースサービス](./03-database.md)）
- Aurora DSQL との違い（強整合性が必要な場合はGlobal Databaseでは不十分）
- フェイルオーバー所要時間の実測値と、RTO要件との照合

### 想定コスト

Aurora インスタンス（db.t4g.medium程度でも数時間で数百円程度）+ クロスリージョンレプリケーションのデータ転送料金。

### クリーンアップ

セカンダリクラスター削除 → Global Database解除 → プライマリクラスター削除。**削除保護が有効な場合は先に解除**する。

---

## Lab 4: サーバーレス3層アーキテクチャの構築（Domain 2）

**対応するタスクステートメント**: Domain 2 Task 1/5（デプロイ戦略の設計、パフォーマンス目標を満たす設計）

### 目的

API Gateway + Lambda + DynamoDB の構成でサーバーレスアプリケーションを構築し、Auto Scalingの挙動を体験する。

### 手順概要

1. DynamoDB テーブルをオンデマンドモードで作成する
2. Lambda関数（CRUD処理）を作成し、DynamoDBと連携する
3. API Gateway（REST または HTTP API）でLambdaを公開する
4. 負荷テストツール（`ab`や[Artillery](https://www.artillery.io/)等）で簡易的な負荷をかけ、CloudWatchメトリクスでスケーリングの様子を観察する
5. Lambdaに Provisioned Concurrency を設定し、コールドスタートの有無を比較する

### 学習ポイント

- サーバーレスの「運用負荷ゼロ」の実感と、コールドスタートというトレードオフ
- DynamoDBのオンデマンド vs プロビジョンドキャパシティの選択基準
- API Gatewayのスロットリング設定の効果

### 想定コスト

無料利用枠内に収まることが多いが、負荷テストの規模によっては数十円〜数百円程度。

### クリーンアップ

API Gateway → Lambda → DynamoDB の順で削除。CloudWatch Logsのロググループも忘れずに削除する。

---

## Lab 5: GuardDuty + Security Hub による統合脅威検知（Domain 1/3）

**対応するタスクステートメント**: Domain 1 Task 2（セキュリティ統制の規定）、Domain 3 Task 2（セキュリティの改善戦略）

### 目的

GuardDutyとSecurity Hubを有効化し、検出結果の集約・優先順位付けを体験する。

### 手順概要

1. GuardDutyを有効化する（Extended Threat Detectionはデフォルトで有効）
2. Security Hub を有効化し、GuardDutyの結果が集約されることを確認する
3. GuardDutyの「サンプル検出結果を生成」機能でテストFindingを作成する
4. Security Hub のExposureダッシュボードでリスクの優先順位付けを確認する
5. EventBridge ルールを作成し、重大度の高いFindingをSNS経由でメール通知する

### 学習ポイント

- GuardDuty単体の検知と、Security Hubでの統合可視化の違い（[05. セキュリティ](./05-security.md)）
- 自動対応（EventBridge + Lambda/SNS）による運用負荷削減の実感
- Extended Threat Detectionが検知する「多段階攻撃」の考え方

### 想定コスト

GuardDutyは分析対象データ量に応じた従量課金だが、個人学習環境では無料利用枠内に収まることが多い。

### クリーンアップ

EventBridgeルール削除 → Security Hub無効化 → GuardDuty無効化。

---

## Lab 6: AWS Resilience Hub でのレジリエンス評価（Domain 3）

**対応するタスクステートメント**: Domain 3 Task 4（信頼性の改善戦略）

### 目的

既存のアプリケーション構成をResilience Hubに登録し、レジリエンス評価とレコメンデーションを確認する。

### 手順概要

1. Lab 4で作成したサーバーレスアプリケーション（またはCloudFormationスタック）をResilience Hubにアプリケーションとして登録する
2. RTO/RPOの目標値を設定したレジリエンスポリシーを作成する
3. 評価（Assess）を実行し、レジリエンススコアとレコメンデーションを確認する
4. レコメンデーションのうち1つ（例: DynamoDBのPoint-in-Timeリカバリ有効化）を実際に適用し、再評価してスコアの変化を確認する

### 学習ポイント

- 「レジリエンスを継続的に評価・改善する」という考え方そのもの（[09. 災害復旧](./09-disaster-recovery.md)）
- RTO/RPO目標と実際のアーキテクチャのギャップの可視化
- 次世代Resilience Hubのモジュール式ポリシーの概念

### 想定コスト

Resilience Hub自体の評価機能は無料利用枠が大きく、個人学習では概ね無料。

### クリーンアップ

Resilience Hub上のアプリケーション登録を解除する（対象リソース自体はLab 4のクリーンアップに従う）。

---

## Lab 7: CloudWatch Application Signals による可観測性強化（Domain 3）

**対応するタスクステートメント**: Domain 3 Task 1/3（運用上の優秀性・パフォーマンスの改善戦略）

### 目的

Application Signalsでサービスマップを自動生成し、SLO監視を体験する。

### 手順概要

1. Lab 4のLambda関数にX-Rayトレーシングを有効化する
2. CloudWatch Application Signalsを有効化し、自動生成されるサービスマップを確認する
3. レイテンシに関するSLO（例: p99レイテンシ200ms以下）を作成する
4. 意図的に処理を遅延させるコードをLambdaに追加し、SLO違反のアラートが発火することを確認する

### 学習ポイント

- コード変更なしでのトポロジー自動検出という価値（[06. 監視・ログ](./06-monitoring.md)）
- SLOという「ビジネス要件と技術メトリクスを繋ぐ」考え方
- X-RayとApplication Signalsの役割分担

### 想定コスト

無料利用枠内に収まることが多い。

### クリーンアップ

SLO削除 → Application Signals向けインストルメンテーション解除（Lambdaレイヤーの削除等）。

---

## Lab 8: Application Migration Service によるサーバー移行体験（Domain 4）

**対応するタスクステートメント**: Domain 4 Task 2（最適な移行アプローチの決定）

### 目的

AWS Application Migration Service（AWS MGN、2026年に AWS Transform MGN へ改称）を使い、Rehost移行の流れを体験する。

### 手順概要

1. 移行元となるEC2インスタンス（オンプレミスの代わりに使用）を1台用意する
2. MGNレプリケーションエージェントをインストールし、継続的レプリケーションを開始する
3. レプリケーション状況（進捗率、遅延）をコンソールで確認する
4. テスト起動（Test Instance Launch）を実行し、移行先環境が正常に起動するか確認する
5. カットオーバーを実行し、移行完了までの流れを体験する

### 学習ポイント

- 継続的レプリケーション（CDC的な仕組み）によるダウンタイム最小化の考え方（[10. 移行戦略](./10-migration.md)）
- テスト起動と実際のカットオーバーを分離する設計の重要性
- Relocate（VMware Cloud on AWS）との違い：MGNはOSレベルのレプリケーション、Relocateはハイパーバイザーレベル

### 想定コスト

移行元・移行先双方のEC2インスタンス稼働費用、EBSスナップショット費用。

### クリーンアップ

MGNコンソールでソースサーバーの追跡を終了 → 移行先・移行元インスタンスを削除。

---

## Lab 9: Database Migration Service によるDB移行体験（Domain 4）

**対応するタスクステートメント**: Domain 4 Task 2/3（移行アプローチの決定、新アーキテクチャの決定）

### 目的

AWS DMSを使い、フルロード＋CDCによるデータベース移行を体験する。

### 手順概要

1. 移行元データベース（例: EC2上のMySQL、または既存のRDS）にサンプルデータを投入する
2. 移行先としてAurora MySQLクラスターを作成する
3. DMSレプリケーションインスタンスを作成する
4. ソース・ターゲットのエンドポイントを設定し、接続テストを行う
5. フルロード＋CDCのレプリケーションタスクを作成し、実行する
6. 移行元にデータを追加/更新し、移行先に反映されるまでの遅延を確認する

### 学習ポイント

- フルロードとCDCの役割分担（[10. 移行戦略](./10-migration.md)）
- 異機種移行の場合はSCTでのスキーマ変換が別途必要になる点
- レプリケーションインスタンスのサイジングがスループットに与える影響

### 想定コスト

DMSレプリケーションインスタンス（dms.t3.micro等）の稼働費用、移行先Auroraの稼働費用。

### クリーンアップ

レプリケーションタスク削除 → エンドポイント削除 → レプリケーションインスタンス削除 → 移行元・移行先データベース削除。

---

## 学習後のクリーンアップチェックリスト

演習後は、以下を必ず確認してください。

- [ ] EC2インスタンス・RDS/Auroraクラスターが停止・削除されている
- [ ] NAT Gateway、Transit Gateway、VPC Endpointなど時間課金のネットワークリソースが削除されている
- [ ] EBSボリューム・スナップショットの不要分が削除されている
- [ ] Elastic IPが未アタッチのまま残っていない（未使用のEIPは課金対象）
- [ ] CloudWatch Logsのロググループに不要な保持期間設定がされていない
- [ ] GuardDuty・Security Hub・Config等、有効化したモニタリング系サービスを不要なら無効化した
- [ ] AWS Budgetsで予算アラートを設定し、想定外の課金に早期に気づける状態にした
- [ ] Cost Explorerで直近の利用状況を確認し、想定外のサービスが課金されていないか確認した

---

## ライセンス

このコンテンツは MIT License の下で公開されています。詳細は [LICENSE](./LICENSE) ファイルをご確認ください。
