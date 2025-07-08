# データベースサービス

## 目次
1. [RDS (Relational Database Service)](#rds-relational-database-service)
2. [Aurora](#aurora)
3. [DynamoDB](#dynamodb)
4. [DocumentDB](#documentdb)
5. [Neptune](#neptune)
6. [Redshift](#redshift)
7. [ElastiCache](#elasticache)
8. [サービス比較](#サービス比較)

---

## RDS (Relational Database Service)

### 概要
マネージドリレーショナルデータベースサービス。複数のデータベースエンジンをサポート。

### サポートエンジン

| エンジン | バージョン | 特徴 | 用途 |
|---------|-----------|------|------|
| **MySQL** | 5.7, 8.0 | オープンソース | Web アプリケーション |
| **PostgreSQL** | 11-15 | 高機能 | エンタープライズ |
| **MariaDB** | 10.4-10.6 | MySQL互換 | MySQL代替 |
| **Oracle** | 12c, 19c, 21c | エンタープライズ | 既存Oracle環境 |
| **SQL Server** | 2017-2022 | Microsoft | Windows環境 |

### 高可用性オプション

#### Multi-AZ配置
```
仕組み:
- プライマリ: アクティブ
- スタンバイ: 別AZで待機
- 同期レプリケーション
- 自動フェイルオーバー (1-2分)

利点:
- 高可用性
- 自動バックアップ
- メンテナンス時の無停止
- データ損失なし (RPO = 0)
```

#### Read Replica
```
仕組み:
- 非同期レプリケーション
- 読み取り専用
- 複数作成可能 (最大15個)
- クロスリージョン対応

利点:
- 読み取り性能向上
- 地理的分散
- 分析ワークロード分離
- 災害復旧
```

### バックアップ・復旧

#### 自動バックアップ
```json
{
  "BackupRetentionPeriod": 7,
  "BackupWindow": "03:00-04:00",
  "PreferredMaintenanceWindow": "sun:04:00-sun:05:00",
  "EnablePerformanceInsights": true,
  "PerformanceInsightsRetentionPeriod": 7
}
```

#### ポイントインタイム復旧
```bash
# 特定時点への復旧
aws rds restore-db-instance-to-point-in-time \
    --source-db-instance-identifier mydb-instance \
    --target-db-instance-identifier mydb-restored \
    --restore-time 2023-12-01T10:30:00.000Z
```

### パフォーマンス最適化

#### インスタンスクラス選択
```
汎用 (T3/T4g):
- バーストパフォーマンス
- 軽量ワークロード
- コスト効率

メモリ最適化 (R5/R6i):
- インメモリ処理
- 大規模データセット
- 高い同時接続数

コンピューティング最適化 (C5):
- CPU集約的処理
- 複雑なクエリ
```

#### ストレージ最適化
```
gp3 (推奨):
- 基準: 3,000 IOPS、125 MB/s
- 独立調整可能
- コスト効率

io1/io2:
- 高IOPS要件
- 一貫した性能
- ミッションクリティカル

Magnetic:
- 後方互換性のみ
- 新規作成非推奨
```

### 公式リソース
- [RDS サービス紹介](https://aws.amazon.com/jp/rds/)
- [RDS Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_RDS.pdf)

---

## Aurora

### 概要
クラウドネイティブなリレーショナルデータベース。MySQL/PostgreSQL互換。

### アーキテクチャ

#### ストレージ
```
特徴:
- 分散ストレージ
- 6つのコピー (3AZ × 2)
- 自動修復
- 最大128TB

利点:
- 高い耐久性 (99.999999999%)
- 高速復旧
- 自動スケーリング
- バックアップ不要
```

#### コンピューティング
```
Writer:
- 1つのプライマリインスタンス
- 読み書き可能
- 自動フェイルオーバー

Reader:
- 最大15個のリードレプリカ
- 読み取り専用
- 自動負荷分散
```

### Aurora Serverless

#### v1 (従来版)
```
特徴:
- ACU (Aurora Capacity Unit) ベース
- 自動一時停止
- コールドスタート有り

制限:
- VPC内のみ
- 一部機能制限
- パフォーマンス予測困難
```

#### v2 (推奨)
```
特徴:
- 瞬時スケーリング
- 常時稼働
- 細かい容量調整

利点:
- 予測可能な性能
- 機能制限なし
- パブリックアクセス対応
```

### Global Database

#### 構成
```
プライマリリージョン:
- Writer + Reader
- 読み書き処理

セカンダリリージョン:
- Reader のみ (最大5リージョン)
- 読み取り専用
- 1秒未満のレプリケーション遅延
```

#### 災害復旧
```bash
# 計画的フェイルオーバー
aws rds failover-global-cluster \
    --global-cluster-identifier my-global-cluster \
    --target-db-cluster-identifier my-secondary-cluster

# 非計画的フェイルオーバー
aws rds remove-from-global-cluster \
    --global-cluster-identifier my-global-cluster \
    --db-cluster-identifier my-secondary-cluster
```

### パフォーマンス機能

#### Aurora Parallel Query
```
対象: 分析クエリ
仕組み: ストレージレイヤーで並列処理
効果: 最大100倍高速化

適用条件:
- 大きなテーブル
- 集計クエリ
- フルテーブルスキャン
```

#### Aurora Machine Learning
```
統合サービス:
- SageMaker
- Comprehend

用途:
- 異常検知
- 感情分析
- 予測分析

例:
SELECT comprehend_detect_sentiment('This is great!') as sentiment;
```

### 公式リソース
- [Aurora サービス紹介](https://aws.amazon.com/jp/rds/aurora/)
- [Aurora Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_Aurora.pdf)

---

## DynamoDB

### 概要
フルマネージドNoSQLデータベース。高性能、自動スケーリング。

### データモデル

#### 基本構造
```
テーブル
├─ パーティションキー (必須)
├─ ソートキー (オプション)
└─ 属性 (最大400KB/アイテム)

例:
PK: UserId
SK: Timestamp
Attributes: Message, Status, etc.
```

#### キー設計パターン
```
良い設計:
- 均等分散: UserId + Random
- 時系列: UserId + Timestamp
- 階層: Country#Region#City

避けるべき:
- 単調増加: Timestamp のみ
- 少数値: Status のみ
- ホットパーティション
```

### 容量モード

#### オンデマンド
```
特徴:
- 自動スケーリング
- 使用量ベース課金
- 管理不要

用途:
- 予測困難なワークロード
- 新しいアプリケーション
- 断続的なトラフィック
```

#### プロビジョンド
```
特徴:
- 事前容量設定
- Auto Scaling対応
- 予約容量割引

用途:
- 予測可能なワークロード
- コスト最適化
- 一定のトラフィック
```

### Global Tables

#### 設定
```json
{
  "TableName": "MyGlobalTable",
  "BillingMode": "PAY_PER_REQUEST",
  "StreamSpecification": {
    "StreamEnabled": true,
    "StreamViewType": "NEW_AND_OLD_IMAGES"
  },
  "SSESpecification": {
    "Enabled": true
  },
  "Replicas": [
    {
      "RegionName": "us-east-1"
    },
    {
      "RegionName": "eu-west-1"
    },
    {
      "RegionName": "ap-northeast-1"
    }
  ]
}
```

#### 競合解決
```
Last Writer Wins:
- タイムスタンプベース
- 自動解決
- データ損失の可能性

カスタム解決:
- Lambda関数
- ビジネスロジック
- 複雑な制御
```

### インデックス

#### GSI (Global Secondary Index)
```json
{
  "IndexName": "GSI1",
  "KeySchema": [
    {
      "AttributeName": "Status",
      "KeyType": "HASH"
    },
    {
      "AttributeName": "CreatedAt",
      "KeyType": "RANGE"
    }
  ],
  "Projection": {
    "ProjectionType": "INCLUDE",
    "NonKeyAttributes": ["UserId", "Message"]
  }
}
```

#### LSI (Local Secondary Index)
```json
{
  "IndexName": "LSI1",
  "KeySchema": [
    {
      "AttributeName": "UserId",
      "KeyType": "HASH"
    },
    {
      "AttributeName": "Status",
      "KeyType": "RANGE"
    }
  ],
  "Projection": {
    "ProjectionType": "ALL"
  }
}
```

### DynamoDB Streams

#### 設定
```python
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('MyTable')

# Stream有効化
table.update(
    StreamSpecification={
        'StreamEnabled': True,
        'StreamViewType': 'NEW_AND_OLD_IMAGES'
    }
)
```

#### Lambda統合
```python
def lambda_handler(event, context):
    for record in event['Records']:
        if record['eventName'] == 'INSERT':
            # 新規アイテム処理
            new_image = record['dynamodb']['NewImage']
            process_new_item(new_image)
        elif record['eventName'] == 'MODIFY':
            # 更新アイテム処理
            old_image = record['dynamodb']['OldImage']
            new_image = record['dynamodb']['NewImage']
            process_updated_item(old_image, new_image)
```

### 公式リソース
- [DynamoDB サービス紹介](https://aws.amazon.com/jp/dynamodb/)
- [DynamoDB Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_DynamoDB.pdf)

---

## DocumentDB

### 概要
MongoDB互換のドキュメントデータベース。フルマネージド。

### 特徴
```
互換性: MongoDB 3.6, 4.0, 5.0 API
ストレージ: 最大64TB
レプリカ: 最大15個
バックアップ: ポイントインタイム復旧
暗号化: 保存時・転送時
```

### アーキテクチャ
```
クラスター構成:
- プライマリインスタンス (1個)
- レプリカインスタンス (最大15個)
- 分散ストレージ (3AZ × 2コピー)

接続:
- クラスターエンドポイント (書き込み)
- リーダーエンドポイント (読み取り)
```

### 移行
```bash
# mongodumpからの移行
mongodump --host source-mongodb --db mydb --out /backup

# DocumentDBへの復元
mongorestore --host docdb-cluster.cluster-xxx.docdb.amazonaws.com:27017 \
    --username myuser --password mypassword \
    --ssl --sslCAFile rds-ca-2019-root.pem \
    --sslAllowInvalidHostnames \
    /backup
```

### 公式リソース
- [DocumentDB サービス紹介](https://aws.amazon.com/jp/documentdb/)
- [DocumentDB Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_DocumentDB.pdf)

---

## Neptune

### 概要
フルマネージドグラフデータベース。Apache TinkerPop Gremlin、SPARQL対応。

### グラフモデル
```
Property Graph (Gremlin):
- 頂点 (Vertex)
- 辺 (Edge)
- プロパティ

RDF (SPARQL):
- トリプル (Subject-Predicate-Object)
- オントロジー
```

### 用途
```
ソーシャルネットワーク:
- 友達関係
- 影響度分析
- レコメンデーション

不正検知:
- 取引パターン
- 異常検知
- リスク評価

知識グラフ:
- 情報関連付け
- セマンティック検索
- AI/ML統合
```

### 公式リソース
- [Neptune サービス紹介](https://aws.amazon.com/jp/neptune/)
- [Neptune Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_Neptune.pdf)

---

## Redshift

### 概要
ペタバイト規模のデータウェアハウス。列指向ストレージ、MPP処理。

### アーキテクチャ
```
リーダーノード:
- クエリ計画
- 結果集約
- クライアント接続

コンピューティングノード:
- データ処理
- ローカルストレージ
- 並列実行
```

### ノードタイプ
```
ra3.xlplus: 4vCPU, 32GB RAM, マネージドストレージ
ra3.4xlarge: 12vCPU, 96GB RAM, マネージドストレージ
ra3.16xlarge: 48vCPU, 384GB RAM, マネージドストレージ

dc2.large: 2vCPU, 15GB RAM, 160GB SSD
dc2.8xlarge: 32vCPU, 244GB RAM, 2.56TB SSD
```

### Redshift Serverless
```
特徴:
- 自動スケーリング
- RPU (Redshift Processing Unit) ベース
- 管理不要

用途:
- 断続的なワークロード
- 開発・テスト
- 予測困難な負荷
```

### 公式リソース
- [Redshift サービス紹介](https://aws.amazon.com/jp/redshift/)
- [Redshift Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_Redshift.pdf)

---

## ElastiCache

### 概要
インメモリキャッシュサービス。Redis、Memcached対応。

### エンジン比較

| 機能 | Redis | Memcached |
|------|-------|-----------|
| **データ構造** | 複雑 | Key-Value |
| **永続化** | 対応 | 非対応 |
| **レプリケーション** | 対応 | 非対応 |
| **クラスタリング** | 対応 | 対応 |
| **Multi-AZ** | 対応 | 非対応 |
| **バックアップ** | 対応 | 非対応 |

### Redis設定
```json
{
  "CacheClusterId": "my-redis-cluster",
  "Engine": "redis",
  "CacheNodeType": "cache.r6g.large",
  "NumCacheNodes": 1,
  "ReplicationGroupId": "my-redis-rg",
  "AutomaticFailoverEnabled": true,
  "MultiAZEnabled": true,
  "NumCacheClusters": 3,
  "CacheSubnetGroupName": "my-subnet-group"
}
```

### 公式リソース
- [ElastiCache サービス紹介](https://aws.amazon.com/jp/elasticache/)
- [ElastiCache Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_ElastiCache.pdf)

---

## サービス比較

### データベースタイプ別選択

| 要件 | 推奨サービス | 理由 |
|------|-------------|------|
| **RDBMS** | Aurora | 高性能、クラウドネイティブ |
| **NoSQL** | DynamoDB | 自動スケーリング、高性能 |
| **ドキュメント** | DocumentDB | MongoDB互換 |
| **グラフ** | Neptune | 関係性データ |
| **分析** | Redshift | 大規模データウェアハウス |
| **キャッシュ** | ElastiCache | 高速アクセス |

### パフォーマンス比較

| サービス | レイテンシ | スループット | スケーラビリティ |
|---------|-----------|-------------|----------------|
| **Aurora** | 低 | 高 | 垂直・水平 |
| **DynamoDB** | 最低 | 最高 | 自動 |
| **RDS** | 低 | 中 | 垂直のみ |
| **DocumentDB** | 低 | 中 | 水平 |
| **ElastiCache** | 最低 | 最高 | 水平 |

---

*次のセクション: [04. ネットワーキング](./04-networking.md)*
