// AWS Solution Architect Professional 上級編 - データベース問題

const advancedDatabaseQuestions = [
  {
    id: 'adv-db-001',
    category: 'データベース',
    question: `グローバル展開するフィンテック企業が、リアルタイム決済処理システムをAWSで構築しています。このシステムには以下の厳格な要件があります：

- 取引処理能力：1秒間に100,000件のトランザクション
- レスポンス時間：平均50ms以下、99パーセンタイルで100ms以下
- 可用性：99.99%以上（年間ダウンタイム52分以内）
- データ整合性：ACID特性の完全保証、分散トランザクション対応
- 地理的分散：5つの大陸でのデータ配置
- 規制要件：各国の金融規制に準拠（データ主権）
- 災害復旧：RPO 0秒、RTO 30秒以内
- セキュリティ：暗号化、監査ログ、アクセス制御
- スケーラビリティ：ピーク時の10倍トラフィックに対応
- コスト効率：従来システムより30%削減

この複雑な要件を満たす最適なデータベースアーキテクチャはどれですか？`,
    options: [
      'Amazon Aurora Global Database + Aurora Serverless v2 + RDS Proxy + ElastiCache Global Datastore + Database Activity Streams',
      'Amazon DynamoDB Global Tables + DynamoDB Accelerator (DAX) + DynamoDB Streams + Lambda + API Gateway',
      'Amazon RDS Multi-AZ + Read Replicas + ElastiCache + Application Load Balancer + CloudWatch',
      'Amazon DocumentDB + MongoDB Atlas + ElastiCache + API Gateway + Lambda'
    ],
    correct: 0,
    explanation: `正解は「Amazon Aurora Global Database + Aurora Serverless v2 + RDS Proxy + ElastiCache Global Datastore + Database Activity Streams」です。

この選択肢が最適な理由：

**高性能・スケーラビリティ要件への対応：**
1. **Aurora Global Database**: 
   - 地理的分散による低レイテンシ（50ms以下達成）
   - 自動フェイルオーバー（RTO 30秒以内）
   - クロスリージョンレプリケーション（RPO 1秒以内）
2. **Aurora Serverless v2**: 
   - 自動スケーリング（10倍トラフィック対応）
   - コスト最適化（使用量ベース課金）
3. **RDS Proxy**: 
   - 接続プーリングによる高効率化
   - 100,000 TPS対応

**データ整合性・可用性への対応：**
1. **ACID特性**: Auroraの完全なトランザクション保証
2. **99.99%可用性**: Multi-AZ配置とGlobal Database
3. **分散トランザクション**: Aurora分散アーキテクチャ

**規制・セキュリティ要件への対応：**
1. **データ主権**: リージョン別データ配置
2. **Database Activity Streams**: リアルタイム監査ログ
3. **暗号化**: 保存時・転送時の暗号化
4. **ElastiCache Global Datastore**: セッション管理とキャッシュ

**他の選択肢の問題点：**
- **選択肢B**: DynamoDBは金融トランザクションのACID要件に制限あり
- **選択肢C**: 従来のRDSでは100,000 TPSの要件を満たせない
- **選択肢D**: DocumentDBは金融システムには不適切

**アーキテクチャの利点：**
- 地理的分散による低レイテンシ
- 自動スケーリングによるコスト効率
- 金融グレードのセキュリティ
- 規制要件への完全対応
- 運用負荷の最小化`
  },

  {
    id: 'adv-db-002',
    category: 'データベース',
    question: `大手eコマース企業が、商品カタログ、在庫管理、注文処理、顧客管理を統合したマルチテナント型プラットフォームをAWSで構築しています。このシステムには以下の複雑な要件があります：

- テナント数：10,000社以上（B2B2Cモデル）
- データ分離：テナント間の完全なデータ分離
- 検索性能：商品検索で100ms以下のレスポンス
- 在庫更新：リアルタイム在庫同期（複数チャネル）
- 分析要件：リアルタイム売上分析とBI
- 国際化：50カ国以上での展開
- 季節変動：ピーク時は通常の20倍のトラフィック
- データ保護：GDPR、CCPA等のプライバシー規制対応
- 移行要件：既存の複数DBからの段階的移行
- 運用効率：DBA不要の自動運用

この多様な要件を満たす最適なデータベース戦略はどれですか？`,
    options: [
      'Amazon Aurora + Amazon OpenSearch + Amazon DynamoDB + Amazon Redshift + AWS Database Migration Service + AWS Glue',
      'Amazon RDS + ElastiCache + Amazon CloudSearch + Amazon EMR + AWS DataSync + Lambda',
      'MongoDB Atlas + Amazon ElastiCache + Amazon Kinesis + Amazon S3 + AWS Batch + Step Functions',
      'Amazon DynamoDB + Amazon Neptune + Amazon Timestream + Amazon QuickSight + AWS AppSync + API Gateway'
    ],
    correct: 0,
    explanation: `正解は「Amazon Aurora + Amazon OpenSearch + Amazon DynamoDB + Amazon Redshift + AWS Database Migration Service + AWS Glue」です。

この選択肢が最適な理由：

**マルチテナント・データ分離への対応：**
1. **Amazon Aurora**: 
   - テナント別データベース分離
   - 高性能トランザクション処理
   - 自動スケーリング（20倍トラフィック対応）
2. **DynamoDB**: 
   - テナント別テーブル設計
   - 無制限スケーラビリティ
   - リアルタイム在庫更新

**検索・分析要件への対応：**
1. **Amazon OpenSearch**: 
   - 高速商品検索（100ms以下）
   - 多言語対応（50カ国展開）
   - リアルタイムインデックス更新
2. **Amazon Redshift**: 
   - 大規模データ分析
   - リアルタイム売上分析
   - BI統合

**移行・運用要件への対応：**
1. **AWS Database Migration Service**: 
   - 既存DBからの段階的移行
   - 最小ダウンタイム移行
   - 異種DB間の移行サポート
2. **AWS Glue**: 
   - ETL処理の自動化
   - データカタログ管理
   - スキーマ進化対応

**規制・セキュリティ要件への対応：**
1. **データ保護**: 各サービスでの暗号化とアクセス制御
2. **GDPR対応**: データ削除とポータビリティ
3. **監査ログ**: CloudTrailとの統合

**他の選択肢の問題点：**
- **選択肢B**: CloudSearchは廃止予定、EMRは運用負荷が高い
- **選択肢C**: MongoDB Atlasは完全マネージドでない、運用負荷あり
- **選択肢D**: Neptuneはグラフデータベースで要件に不適切

**アーキテクチャの利点：**
- 各用途に最適化されたデータベース選択
- 完全マネージドサービスによる運用効率
- 自動スケーリングによるコスト効率
- 段階的移行による低リスク
- 規制要件への完全対応`
  },

  {
    id: 'adv-db-003',
    category: 'データベース',
    question: `大手製造業が、IoTセンサーデータを活用した予知保全システムをAWSで構築しています。このシステムには以下の特殊な要件があります：

- センサー数：100万台以上（工場、車両、機械）
- データ頻度：1秒間に1,000万件のデータポイント
- データ保存期間：リアルタイム（1日）、履歴（7年間）
- 分析要件：リアルタイム異常検知、予測分析、トレンド分析
- アラート：異常検知から1秒以内の通知
- 地理的分散：世界50カ国の工場
- データ形式：時系列データ、メタデータ、画像データ
- 機械学習：故障予測モデルの継続学習
- 可視化：リアルタイムダッシュボード
- コスト効率：データ量に応じた段階的コスト構造
- 災害復旧：重要データの地理的冗長化

この大規模IoTシステムに最適なデータベースアーキテクチャはどれですか？`,
    options: [
      'Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + S3 + Lambda + SNS',
      'Amazon DynamoDB + Amazon Kinesis + Amazon EMR + Amazon Elasticsearch + S3 + Step Functions + SQS',
      'Amazon RDS + Amazon Kinesis + Amazon Redshift + Amazon CloudWatch + S3 + Lambda + CloudFormation',
      'Amazon Aurora + Amazon MSK + Amazon Athena + Amazon Grafana + S3 + Glue + EventBridge'
    ],
    correct: 0,
    explanation: `正解は「Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + S3 + Lambda + SNS」です。

この選択肢が最適な理由：

**時系列データ処理への最適化：**
1. **Amazon Timestream**: 
   - 時系列データ専用データベース
   - 1,000万件/秒のインジェスト対応
   - 自動データ階層化（リアルタイム→履歴）
   - コスト効率的な長期保存（7年間）
2. **Amazon Kinesis**: 
   - リアルタイムデータストリーミング
   - 100万台のセンサーからの同時データ取得
   - 自動スケーリング

**リアルタイム分析・アラート：**
1. **Lambda**: 
   - リアルタイム異常検知処理
   - 1秒以内のアラート処理
   - サーバーレスによる自動スケーリング
2. **SNS**: 
   - 即座の通知配信
   - 多チャネル通知（SMS、Email、アプリ）

**機械学習・予測分析：**
1. **Amazon SageMaker**: 
   - 故障予測モデルの構築・訓練
   - 継続学習による精度向上
   - リアルタイム推論
2. **S3**: 
   - 機械学習用データレイク
   - 画像データの効率的保存

**可視化・ダッシュボード：**
1. **Amazon QuickSight**: 
   - リアルタイムダッシュボード
   - 地理的分散対応
   - 自動スケーリング

**他の選択肢の問題点：**
- **選択肢B**: DynamoDBは時系列データに最適化されていない、EMRは運用負荷が高い
- **選択肢C**: RDSは大規模時系列データには不適切、Redshiftはリアルタイム処理に不向き
- **選択肢D**: Auroraは時系列データに特化していない、MSKは複雑性を増す

**Timestreamの特別な利点：**
- 時系列データに最適化されたクエリエンジン
- 自動データ圧縮（90%削減）
- 内蔵の時系列分析関数
- サーバーレスによる運用効率
- 段階的課金によるコスト効率

**アーキテクチャの利点：**
- IoT特化の最適化設計
- リアルタイム処理能力
- 自動スケーリング
- コスト効率的な長期保存
- 機械学習統合`
  }
]

module.exports = advancedDatabaseQuestions
