# データベースサービス

<!-- 
Copyright (c) 2025 AWS SAP Study Guide
Licensed under the MIT License. See LICENSE file for details.
-->

## 目次

1. [リレーショナルデータベース](#リレーショナルデータベース)
2. [NoSQLデータベース](#nosqlデータベース)
3. [データウェアハウス・分析](#データウェアハウス分析)
4. [インメモリ・キャッシュ](#インメモリキャッシュ)
5. [データベース選択の指針](#データベース選択の指針)
6. [パフォーマンス最適化](#パフォーマンス最適化)

---

## リレーショナルデータベース

### Amazon RDS

基本概念と特徴

- フルマネージドなリレーショナルデータベースサービス
- 複数のデータベースエンジンをサポート
- 自動バックアップ、パッチ適用、監視機能
- Multi-AZ配置による高可用性

サポートエンジン

- **MySQL**: オープンソース、Web アプリケーション
- **PostgreSQL**: 高機能、エンタープライズ用途
- **MariaDB**: MySQL 互換、オープンソース
- **Oracle**: エンタープライズ、既存システム移行
- **SQL Server**: Microsoft 環境、Windows 統合
- **Aurora**: AWS 独自、クラウドネイティブ

使用場面

- **OLTP ワークロード**: トランザクション処理
- **既存アプリケーション**: 最小限の変更での移行
- **構造化データ**: ACID 特性が必要
- **複雑なクエリ**: JOIN、集計処理

### Amazon Aurora

基本概念

- AWS が開発したクラウドネイティブデータベース
- MySQL、PostgreSQL との互換性
- 従来の RDS より高性能・高可用性
- ストレージの自動スケーリング

主要な特徴

- **高性能**: MySQL の5倍、PostgreSQL の3倍の性能
- **高可用性**: 3つの AZ に6つのコピーを自動作成
- **自動スケーリング**: 10GB から128TB まで自動拡張
- **高速復旧**: クラッシュ後の高速復旧

Aurora の種類

- **Aurora Provisioned**: 予測可能なワークロード
- **Aurora Serverless v1**: 断続的なワークロード
- **Aurora Serverless v2**: 幅広いワークロード、瞬時スケーリング
- **Aurora Global Database**: グローバル展開、災害復旧

使用場面

- **高性能要件**: 大量のトランザクション処理
- **高可用性要件**: ミッションクリティカルシステム
- **変動負荷**: Aurora Serverless での自動スケーリング
- **グローバル展開**: Global Database でのマルチリージョン

### RDS vs Aurora の選択基準

RDS を選択する場合

- **既存システム移行**: 最小限の変更で移行
- **特定エンジン要件**: Oracle、SQL Server の機能
- **コスト重視**: 小規模システム
- **シンプルな要件**: 基本的なデータベース機能

Aurora を選択する場合

- **高性能要件**: 大量の同時接続、高スループット
- **高可用性要件**: 99.99% 以上の可用性
- **スケーラビリティ**: 急激な成長への対応
- **クラウドネイティブ**: AWS サービスとの統合

### 公式リソース

- [RDS サービス紹介](https://aws.amazon.com/jp/rds/)
- [RDS Black Belt](https://aws.amazon.com/jp/blogs/news/webinar-bb-rds-2018/)
- [Aurora サービス紹介](https://aws.amazon.com/jp/rds/aurora/)
- [Aurora Black Belt](https://aws.amazon.com/jp/blogs/news/webinar-bb-amazon-aurora-mysql-2019/)

---

## NoSQLデータベース

### Amazon DynamoDB

基本概念と特徴

- フルマネージドな NoSQL データベース
- キー・バリュー、ドキュメントデータモデル
- 単一桁ミリ秒のレスポンス時間
- 自動スケーリング、グローバル分散

主要な特徴

- **高性能**: 一貫した低レイテンシ
- **スケーラビリティ**: 事実上無制限のスケーリング
- **高可用性**: 複数 AZ での自動レプリケーション
- **サーバーレス**: インフラ管理不要

データモデル

- **パーティションキー**: データ分散の基準
- **ソートキー**: パーティション内でのソート
- **グローバルセカンダリインデックス**: 異なるキーでのクエリ
- **ローカルセカンダリインデックス**: 同一パーティション内の別ソート

課金モデル

- **オンデマンド**: 使用量に応じた従量課金
- **プロビジョンド**: 事前に容量を指定
- **Auto Scaling**: 需要に応じた自動調整

使用場面

- **Web・モバイルアプリ**: セッション管理、ユーザープロファイル
- **ゲーム**: リーダーボード、プレイヤーデータ
- **IoT**: センサーデータ、時系列データ
- **リアルタイム分析**: 高頻度の読み書き

#### 公式リソース

- [DynamoDB サービス紹介](https://aws.amazon.com/jp/dynamodb/)
- [DynamoDB Black Belt](https://docs.aws.amazon.com/ja_jp/dynamodb/)

### Amazon DocumentDB

基本概念

- MongoDB 互換のドキュメントデータベース
- フルマネージド、高可用性
- JSON ドキュメントの格納・クエリ
- MongoDB ワークロードの AWS 移行に最適

主要な特徴

- **MongoDB 互換**: 既存アプリケーションの移行が容易
- **高可用性**: 3つの AZ での自動レプリケーション
- **スケーラビリティ**: 読み取りレプリカによる読み取り性能向上
- **セキュリティ**: VPC、暗号化、IAM 統合

使用場面

- **コンテンツ管理**: CMS、カタログ管理
- **ユーザープロファイル**: 柔軟なスキーマが必要
- **リアルタイム分析**: ログ分析、メトリクス収集
- **MongoDB 移行**: 既存 MongoDB アプリケーション

#### 公式リソース

- [DocumentDB サービス紹介](https://aws.amazon.com/jp/documentdb/)
- [DocumentDB Black Belt](https://docs.aws.amazon.com/ja_jp/documentdb/latest/developerguide/connect_programmatically.html)

### Amazon Keyspaces (Apache Cassandra)

基本概念

- Apache Cassandra 互換のワイドカラムストア
- 高可用性、線形スケーラビリティ
- 大規模な分散アプリケーション向け
- CQL (Cassandra Query Language) サポート

主要な特徴

- **線形スケーラビリティ**: ノード追加による性能向上
- **高可用性**: 複数リージョンでのレプリケーション
- **一貫性レベル**: 要件に応じた一貫性選択
- **サーバーレス**: 使用量に応じた課金

使用場面

- **時系列データ**: IoT、監視データ
- **高書き込み負荷**: ログ、イベントデータ
- **分散アプリケーション**: グローバル展開
- **Cassandra 移行**: 既存 Cassandra クラスター

---

## データウェアハウス・分析

### Amazon Redshift

基本概念

- フルマネージドなデータウェアハウス
- 列指向ストレージ、並列処理
- ペタバイト規模のデータ分析
- 標準 SQL、BI ツール統合

主要な特徴

- **高性能**: 並列処理による高速クエリ
- **スケーラビリティ**: ノード追加による拡張
- **コスト効率**: 従来の1/10のコスト
- **統合**: S3、EMR、QuickSight との連携

Redshift の種類

- **Redshift Cluster**: 従来型、予測可能なワークロード
- **Redshift Serverless**: サーバーレス、変動ワークロード
- **Redshift Spectrum**: S3 データの直接クエリ

使用場面

- **データウェアハウス**: 企業データの統合分析
- **ビジネスインテリジェンス**: レポート、ダッシュボード
- **データマイニング**: 大規模データの分析
- **ETL 処理**: データ変換、集計

#### 公式リソース

- [Redshift サービス紹介](https://aws.amazon.com/jp/redshift/)
- [Redshift Black Belt](https://aws.amazon.com/jp/blogs/news/bb-amazon-redshift-2023/)

### Amazon Athena

基本概念

- サーバーレスなクエリサービス
- S3 データの直接分析
- 標準 SQL、従量課金
- データカタログとの統合

主要な特徴

- **サーバーレス**: インフラ管理不要
- **従量課金**: スキャンしたデータ量のみ課金
- **高速**: 並列処理による高速クエリ
- **統合**: Glue、QuickSight との連携

使用場面

- **アドホック分析**: 一時的なデータ分析
- **ログ分析**: CloudTrail、VPC Flow Logs
- **データレイク**: S3 データレイクの分析
- **コスト最適化**: 軽量な分析ワークロード

---

## インメモリ・キャッシュ

### Amazon ElastiCache

基本概念

- フルマネージドなインメモリキャッシュ
- Redis、Memcached エンジンをサポート
- マイクロ秒レベルのレスポンス時間
- アプリケーション性能の大幅向上

Redis vs Memcached

Redis の特徴

- **データ構造**: 文字列、リスト、セット、ハッシュ
- **永続化**: ディスクへのデータ保存
- **レプリケーション**: マスター・スレーブ構成
- **高可用性**: 自動フェイルオーバー

Memcached の特徴

- **シンプル**: キー・バリューのみ
- **マルチスレッド**: 並列処理
- **水平スケーリング**: ノード追加による拡張
- **軽量**: 低メモリフットプリント

使用場面

- **セッション管理**: Web アプリケーションのセッション
- **データベースキャッシュ**: 頻繁なクエリ結果のキャッシュ
- **リアルタイム分析**: 高速データアクセス
- **ゲーム**: リーダーボード、チャット

#### 公式リソース

- [ElastiCache サービス紹介](https://aws.amazon.com/jp/elasticache/)
- [ElastiCache Black Belt](https://docs.aws.amazon.com/ja_jp/AmazonElastiCache/latest/dg/WhatIs.corecomponents.html)

### Amazon MemoryDB for Redis

基本概念

- Redis 互換のインメモリデータベース
- 耐久性とインメモリ性能を両立
- マイクロ秒の読み取り、単一桁ミリ秒の書き込み
- Multi-AZ での高可用性

ElastiCache Redis との違い

- **耐久性**: データの永続化保証
- **一貫性**: 強一貫性の提供
- **用途**: プライマリデータベースとしての利用
- **コスト**: より高価だが高機能

使用場面

- **リアルタイムアプリケーション**: チャット、ゲーム
- **高速トランザクション**: 金融、広告
- **セッション管理**: 大規模 Web アプリケーション
- **キャッシュ**: 高耐久性が必要なキャッシュ

---

## データベース選択の指針

### ワークロード特性による選択

OLTP (Online Transaction Processing)

- **特徴**: 高頻度の小さなトランザクション
- **要件**: ACID 特性、低レイテンシ、高同時実行性
- **推奨**: RDS、Aurora、DynamoDB
- **例**: EC サイト、銀行システム、予約システム

OLAP (Online Analytical Processing)

- **特徴**: 大量データの複雑な分析
- **要件**: 高スループット、複雑なクエリ、集計処理
- **推奨**: Redshift、Athena、EMR
- **例**: データウェアハウス、BI、レポート

リアルタイム処理

- **特徴**: 低レイテンシ、高スループット
- **要件**: マイクロ秒レスポンス、高可用性
- **推奨**: DynamoDB、ElastiCache、MemoryDB
- **例**: ゲーム、広告、IoT

### データ構造による選択

構造化データ

- **特徴**: 固定スキーマ、関係性
- **推奨**: RDS、Aurora、Redshift
- **例**: 顧客情報、注文データ、財務データ

半構造化データ

- **特徴**: 柔軟なスキーマ、JSON、XML
- **推奨**: DocumentDB、DynamoDB
- **例**: ログデータ、設定情報、カタログ

非構造化データ

- **特徴**: スキーマなし、多様な形式
- **推奨**: S3、Elasticsearch
- **例**: 画像、動画、テキスト

### スケーラビリティ要件による選択

垂直スケーリング

- **特徴**: サーバースペックの向上
- **制限**: ハードウェア限界
- **推奨**: RDS、Aurora（リードレプリカ併用）
- **適用**: 中小規模システム

水平スケーリング

- **特徴**: サーバー台数の増加
- **利点**: 理論上無制限の拡張
- **推奨**: DynamoDB、Cassandra、Redshift
- **適用**: 大規模システム、グローバル展開

### 一貫性要件による選択

強一貫性

- **特徴**: 常に最新データを読み取り
- **推奨**: RDS、Aurora、DynamoDB（強一貫性読み取り）
- **適用**: 金融、在庫管理

結果整合性

- **特徴**: 最終的にデータが一致
- **利点**: 高可用性、高性能
- **推奨**: DynamoDB（結果整合性読み取り）、S3
- **適用**: ソーシャルメディア、コンテンツ配信

---

## パフォーマンス最適化

### RDS・Aurora 最適化

インスタンス最適化

- **インスタンスタイプ**: ワークロードに応じた選択
- **ストレージタイプ**: gp3、io2 の適切な選択
- **Multi-AZ**: 可用性と性能のバランス
- **リードレプリカ**: 読み取り負荷の分散

クエリ最適化

- **インデックス**: 適切なインデックス設計
- **クエリチューニング**: 実行計画の最適化
- **接続プーリング**: 接続数の効率化
- **キャッシュ**: クエリ結果のキャッシュ

監視・分析

- **Performance Insights**: クエリ性能の可視化
- **CloudWatch**: メトリクス監視
- **拡張監視**: OS レベルの詳細監視
- **ログ分析**: スロークエリの特定

### DynamoDB 最適化

テーブル設計

- **パーティションキー**: 均等な分散
- **ソートキー**: 効率的なクエリパターン
- **GSI**: 柔軟なアクセスパターン
- **項目サイズ**: 400KB 以下の最適化

パフォーマンス設定

- **読み取り一貫性**: 要件に応じた選択
- **バッチ操作**: 複数項目の効率的処理
- **並列処理**: Scan、Query の並列実行
- **キャッシュ**: DAX による高速化

容量管理

- **オンデマンド**: 予測困難なワークロード
- **プロビジョンド**: 予測可能なワークロード
- **Auto Scaling**: 需要変動への自動対応
- **予約容量**: 長期利用でのコスト削減

### キャッシュ戦略

キャッシュパターン

- **Cache-Aside**: アプリケーション制御
- **Write-Through**: 書き込み時キャッシュ更新
- **Write-Behind**: 非同期キャッシュ更新
- **Refresh-Ahead**: 事前キャッシュ更新

キャッシュ階層

- **アプリケーションレベル**: インメモリキャッシュ
- **データベースレベル**: クエリ結果キャッシュ
- **CDN レベル**: 静的コンテンツキャッシュ
- **ブラウザレベル**: クライアントサイドキャッシュ

---

## まとめ

### 試験でのポイント

データベース選択の判断基準

1. **ワークロード特性**: OLTP、OLAP、リアルタイム
2. **データ構造**: 構造化、半構造化、非構造化
3. **スケーラビリティ**: 垂直、水平スケーリング
4. **一貫性要件**: 強一貫性、結果整合性
5. **可用性要件**: SLA、災害復旧
6. **コスト要件**: 初期コスト、運用コスト

よくある設計パターン

- **読み取り重視**: リードレプリカ、キャッシュ活用
- **書き込み重視**: 水平分散、非同期処理
- **混合ワークロード**: 適切なデータベース組み合わせ
- **グローバル展開**: マルチリージョン、レプリケーション

パフォーマンス最適化

- **適切な設計**: スキーマ、インデックス、パーティション
- **監視・分析**: Performance Insights、CloudWatch
- **キャッシュ活用**: 複数レイヤーでのキャッシュ
- **継続的改善**: 定期的な見直し、チューニング

---

## ライセンス

このコンテンツは MIT License の下で公開されています。詳細は [LICENSE](./LICENSE) ファイルをご確認ください。
