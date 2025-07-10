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
- **Amazon DynamoDB Global Tables + DynamoDB Accelerator (DAX) + DynamoDB Streams + Lambda + API Gateway**: DynamoDBは金融トランザクションのACID要件に制限あり
- **Amazon RDS Multi-AZ + Read Replicas + ElastiCache + Application Load Balancer + CloudWatch**: 従来のRDSでは100,000 TPSの要件を満たせない
- **Amazon DocumentDB + MongoDB Atlas + ElastiCache + API Gateway + Lambda**: DocumentDBは金融システムには不適切

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
- **Amazon RDS + ElastiCache + Amazon CloudSearch + Amazon EMR + AWS DataSync + Lambda**: CloudSearchは廃止予定、EMRは運用負荷が高い
- **MongoDB Atlas + Amazon ElastiCache + Amazon Kinesis + Amazon S3 + AWS Batch + Step Functions**: MongoDB Atlasは完全マネージドでない、運用負荷あり
- **Amazon DynamoDB + Amazon Neptune + Amazon Timestream + Amazon QuickSight + AWS AppSync + API Gateway**: Neptuneはグラフデータベースで要件に不適切

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
- **Amazon DynamoDB + Amazon Kinesis + Amazon EMR + Amazon Elasticsearch + S3 + Step Functions + SQS**: DynamoDBは時系列データに最適化されていない、EMRは運用負荷が高い
- **Amazon RDS + Amazon Kinesis + Amazon Redshift + Amazon CloudWatch + S3 + Lambda + CloudFormation**: RDSは大規模時系列データには不適切、Redshiftはリアルタイム処理に不向き
- **Amazon Aurora + Amazon MSK + Amazon Athena + Amazon Grafana + S3 + Glue + EventBridge**: Auroraは時系列データに特化していない、MSKは複雑性を増す

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
  },
  {
    id: 'adv-db-004',
    category: 'データベース',
    question: `大手金融機関が、リアルタイム不正検知システムのデータベース設計を行っています。以下の要件があります：

1. 取引データの即座の書き込み（1秒間に100万件）
2. 複雑な不正パターン検索（グラフ分析、時系列分析）
3. 機械学習モデルへのリアルタイムデータ供給
4. 99.99%の可用性要件
5. 規制要件による完全な監査証跡
6. 地理的分散による災害復旧
7. 過去10年分のデータでの分析

この要件を満たすために、最も適切なデータベースアーキテクチャはどれですか？`,
    options: [
      'DynamoDB + DynamoDB Streams + Kinesis Analytics + Neptune + Timestream + Aurora Global Databaseを使用し、マルチモーダルデータベース環境を構築する',
      'RDS PostgreSQL + Read Replicas + ElastiCache + Redshift + CloudWatch + AWS Backupを使用し、従来型RDBMS環境を構築する',
      'DocumentDB + Atlas Search + EMR + S3 + Glue + Athenaを使用し、NoSQL分析環境を構築する',
      'Aurora Serverless + Lambda + API Gateway + S3 + QuickSightを使用し、サーバーレスデータベース環境を構築する'
    ],
    correct: 0,
    explanation: `金融機関の不正検知システムには、DynamoDB + DynamoDB Streams + Kinesis Analytics + Neptune + Timestream + Aurora Global Databaseの組み合わせが最適です。

理由：
1. **DynamoDB**: 100万件/秒の高速書き込みに対応
2. **DynamoDB Streams**: リアルタイムデータ変更の検知
3. **Kinesis Analytics**: ストリーミングデータの即座分析
4. **Neptune**: グラフデータベースで不正パターンの関係分析
5. **Timestream**: 時系列データの効率的な保存と分析
6. **Aurora Global Database**: 地理的分散と高可用性

他の選択肢の問題点：
- **RDS PostgreSQL + Read Replicas + ElastiCache + Redshift + CloudWatch + AWS Backupを使用し、従来型RDBMS環境を構築する**: PostgreSQLは100万件/秒の書き込み性能に限界
- **DocumentDB + Atlas Search + EMR + S3 + Glue + Athenaを使用し、NoSQL分析環境を構築する**: DocumentDBは金融業界の厳格な整合性要件に不適切
- **Aurora Serverless + Lambda + API Gateway + S3 + QuickSightを使用し、サーバーレスデータベース環境を構築する**: Aurora Serverlessは高頻度アクセスには不適切`
  },
  {
    id: 'adv-db-005',
    category: 'データベース',
    question: `大手製薬会社が、創薬研究データの統合データベースを構築しています。以下の要件があります：

1. 分子構造データ、実験結果、臨床試験データの統合管理
2. 複雑な化学構造検索とパターンマッチング
3. 機械学習による創薬候補の予測分析
4. 研究者間でのセキュアなデータ共有
5. FDA規制（21 CFR Part 11）への準拠
6. データの完全性と監査証跡
7. 25年間の長期データ保持

この要件を満たすために、最も適切なデータベースアーキテクチャはどれですか？`,
    options: [
      'Aurora PostgreSQL + RDS Proxy + ElastiCache + Neptune + S3 + Macie + CloudTrailを使用し、コンプライアンス対応研究データベースを構築する',
      'DynamoDB + Lambda + API Gateway + SageMaker + S3 + Athenaを使用し、サーバーレス研究データベースを構築する',
      'DocumentDB + Atlas Search + EMR + Redshift + QuickSight + AWS Configを使用し、NoSQL研究データベースを構築する',
      'RDS MySQL + Multi-AZ + Read Replicas + Backup + CloudWatch + IAMを使用し、従来型研究データベースを構築する'
    ],
    correct: 0,
    explanation: `製薬会社の研究データベースには、Aurora PostgreSQL + RDS Proxy + ElastiCache + Neptune + S3 + Macie + CloudTrailの組み合わせが最適です。

理由：
1. **Aurora PostgreSQL**: 化学構造データの複雑クエリに対応
2. **RDS Proxy**: 接続プールによる高可用性とセキュリティ
3. **ElastiCache**: 頻繁な検索クエリの高速化
4. **Neptune**: 分子間の関係性分析
5. **S3**: 大容量実験データの長期保存
6. **Macie**: 機密研究データの自動分類と保護
7. **CloudTrail**: FDA規制に必要な完全な監査証跡

他の選択肢の問題点：
- **DynamoDB + Lambda + API Gateway + SageMaker + S3 + Athenaを使用し、サーバーレス研究データベースを構築する**: DynamoDBは複雑な化学構造検索に不適切
- **DocumentDB + Atlas Search + EMR + Redshift + QuickSight + AWS Configを使用し、NoSQL研究データベースを構築する**: DocumentDBは製薬業界の厳格なデータ整合性要件に不十分
- **RDS MySQL + Multi-AZ + Read Replicas + Backup + CloudWatch + IAMを使用し、従来型研究データベースを構築する**: MySQLは高度な化学構造検索機能が不足`
  },
  {
    id: 'adv-db-006',
    category: 'データベース',
    question: `大手小売チェーンが、オムニチャネル在庫管理システムを構築しています。以下の要件があります：

1. 全国1000店舗 + ECサイトの在庫リアルタイム同期
2. 商品マスタ：1億SKU以上の商品情報管理
3. 在庫移動の厳密な整合性管理
4. ピーク時（セール期間）の10倍トラフィック対応
5. 店舗システムとの双方向データ同期
6. 在庫予測とレコメンデーション機能
7. 災害時の事業継続性

この要件を満たすために、最も適切なデータベースアーキテクチャはどれですか？`,
    options: [
      'Aurora Global Database + DynamoDB + ElastiCache + Kinesis + Lambda + SageMakerを使用し、ハイブリッド在庫管理データベースを構築する',
      'RDS PostgreSQL + Multi-AZ + Read Replicas + Application Load Balancer + CloudWatchを使用し、従来型在庫管理データベースを構築する',
      'DynamoDB Global Tables + DynamoDB Accelerator + API Gateway + Step Functions + S3を使用し、NoSQL在庫管理データベースを構築する',
      'DocumentDB + Atlas Search + EMR + Redshift + QuickSight + DataSyncを使用し、ドキュメント型在庫管理データベースを構築する'
    ],
    correct: 0,
    explanation: `オムニチャネル在庫管理には、Aurora Global Database + DynamoDB + ElastiCache + Kinesis + Lambda + SageMakerの組み合わせが最適です。

理由：
1. **Aurora Global Database**: 商品マスタの一貫性とグローバル同期
2. **DynamoDB**: 高頻度在庫更新の高性能処理
3. **ElastiCache**: 在庫照会の高速レスポンス
4. **Kinesis**: リアルタイム在庫変更の配信
5. **Lambda**: 在庫整合性チェックと自動調整
6. **SageMaker**: 在庫予測とレコメンデーション

他の選択肢の問題点：
- **RDS PostgreSQL + Multi-AZ + Read Replicas + Application Load Balancer + CloudWatchを使用し、従来型在庫管理データベースを構築する**: PostgreSQLは1000店舗同時アクセスの性能要件に限界
- **DynamoDB Global Tables + DynamoDB Accelerator + API Gateway + Step Functions + S3を使用し、NoSQL在庫管理データベースを構築する**: DynamoDBのみでは複雑な在庫整合性管理が困難
- **DocumentDB + Atlas Search + EMR + Redshift + QuickSight + DataSyncを使用し、ドキュメント型在庫管理データベースを構築する**: DocumentDBは在庫の厳密な整合性管理に不適切`
  },
  {
    id: 'adv-db-007',
    category: 'データベース',
    question: `大手ゲーム会社が、MMORPGのプレイヤーデータ管理システムを構築しています。以下の要件があります：

1. 同時接続プレイヤー：100万人以上
2. プレイヤーデータ：キャラクター、アイテム、ギルド情報
3. リアルタイムランキングとリーダーボード
4. ゲーム内経済システム（アイテム取引）
5. チート検知とデータ整合性チェック
6. 地域別サーバーでのデータ分離
7. プレイヤー行動分析とゲームバランス調整

この要件を満たすために、最も適切なゲーム向けデータベースアーキテクチャはどれですか？`,
    options: [
      'DynamoDB + DynamoDB Global Tables + ElastiCache + Kinesis + Lambda + Neptune + Timestreamを使用し、ゲーム特化データベースを構築する',
      'Aurora MySQL + Read Replicas + RDS Proxy + ElastiCache + CloudWatch + AWS Backupを使用し、RDBMS基盤ゲームデータベースを構築する',
      'DocumentDB + Atlas Search + EMR + S3 + Glue + Athenaを使用し、ドキュメント型ゲームデータベースを構築する',
      'Redshift + Spectrum + S3 + QuickSight + SageMaker + DataPipelineを使用し、分析特化ゲームデータベースを構築する'
    ],
    correct: 0,
    explanation: `MMORPGのデータ管理には、DynamoDB + DynamoDB Global Tables + ElastiCache + Kinesis + Lambda + Neptune + Timestreamの組み合わせが最適です。

理由：
1. **DynamoDB**: 100万同時接続の高性能プレイヤーデータ管理
2. **Global Tables**: 地域別サーバーでのデータ同期
3. **ElastiCache**: リアルタイムランキングの高速処理
4. **Kinesis**: プレイヤー行動のリアルタイム収集
5. **Lambda**: チート検知とデータ整合性チェック
6. **Neptune**: ギルドやフレンド関係のグラフ分析
7. **Timestream**: プレイヤー行動の時系列分析

他の選択肢の問題点：
- **Aurora MySQL + Read Replicas + RDS Proxy + ElastiCache + CloudWatch + AWS Backupを使用し、RDBMS基盤ゲームデータベースを構築する**: Aurora MySQLは100万同時接続の性能要件に限界
- **DocumentDB + Atlas Search + EMR + S3 + Glue + Athenaを使用し、ドキュメント型ゲームデータベースを構築する**: DocumentDBはリアルタイムゲーム処理に不適切
- **Redshift + Spectrum + S3 + QuickSight + SageMaker + DataPipelineを使用し、分析特化ゲームデータベースを構築する**: Redshiftは分析用途でリアルタイムゲーム処理に不適切`
  },
  {
    id: 'adv-db-008',
    category: 'データベース',
    question: `大手物流会社が、グローバル配送追跡システムを構築しています。以下の要件があります：

1. 世界中の荷物追跡（1日あたり1億個の荷物）
2. リアルタイム位置情報更新
3. 配送ルート最適化
4. 顧客への配送状況通知
5. 配送予測と遅延アラート
6. 地域別の配送データ管理
7. 配送履歴の長期保存（7年間）

この要件を満たすために、最も適切な物流データベースアーキテクチャはどれですか？`,
    options: [
      'DynamoDB + DynamoDB Streams + Kinesis + Lambda + Neptune + Timestream + S3を使用し、物流特化データベースを構築する',
      'Aurora PostgreSQL + PostGIS + Read Replicas + ElastiCache + CloudWatch + AWS Backupを使用し、地理空間データベースを構築する',
      'DocumentDB + Atlas Search + EMR + Redshift + QuickSight + DataSyncを使用し、ドキュメント型物流データベースを構築する',
      'RDS MySQL + Multi-AZ + Application Load Balancer + S3 + Glue + Athenaを使用し、従来型物流データベースを構築する'
    ],
    correct: 0,
    explanation: `グローバル物流追跡システムには、DynamoDB + DynamoDB Streams + Kinesis + Lambda + Neptune + Timestream + S3の組み合わせが最適です。

理由：
1. **DynamoDB**: 1億個/日の荷物データの高性能処理
2. **DynamoDB Streams**: リアルタイム位置情報更新の検知
3. **Kinesis**: 配送状況の即座通知
4. **Lambda**: 配送予測と遅延アラート処理
5. **Neptune**: 配送ルート最適化のグラフ分析
6. **Timestream**: 配送履歴の効率的な時系列管理
7. **S3**: 7年間の長期履歴保存

他の選択肢の問題点：
- **Aurora PostgreSQL + PostGIS + Read Replicas + ElastiCache + CloudWatch + AWS Backupを使用し、地理空間データベースを構築する**: PostGISは地理空間機能は優秀だが、1億個/日の処理性能に限界
- **DocumentDB + Atlas Search + EMR + Redshift + QuickSight + AWS Configを使用し、ドキュメント型物流データベースを構築する**: DocumentDBは物流の複雑なクエリ処理に不適切
- **RDS MySQL + Multi-AZ + Application Load Balancer + S3 + Glue + Athenaを使用し、従来型物流データベースを構築する**: MySQLは大規模物流データの性能要件を満たせない`
  },
  {
    id: 'adv-db-009',
    category: 'データベース',
    question: `大手メディア企業が、コンテンツ管理システム（CMS）を構築しています。以下の要件があります：

1. 記事、動画、画像など多様なコンテンツタイプ
2. 多言語対応（50言語以上）
3. 全文検索とコンテンツ推薦
4. 編集者間でのリアルタイム協調編集
5. コンテンツのバージョン管理と承認ワークフロー
6. 高トラフィック時の読み取り性能
7. コンテンツの自動分類とタグ付け

この要件を満たすために、最も適切なCMSデータベースアーキテクチャはどれですか？`,
    options: [
      'DocumentDB + Amazon OpenSearch + ElastiCache + S3 + Lambda + Comprehend + Translateを使用し、コンテンツ特化データベースを構築する',
      'Aurora PostgreSQL + Read Replicas + RDS Proxy + ElastiCache + CloudSearch + AWS Backupを使用し、RDBMS基盤CMSデータベースを構築する',
      'DynamoDB + DynamoDB Accelerator + Kinesis + Lambda + SageMaker + S3を使用し、NoSQL CMSデータベースを構築する',
      'RDS MySQL + Multi-AZ + Application Load Balancer + CloudFront + CloudWatch + IAMを使用し、従来型CMSデータベースを構築する'
    ],
    correct: 0,
    explanation: `メディア企業のCMSには、DocumentDB + Amazon OpenSearch + ElastiCache + S3 + Lambda + Comprehend + Translateの組み合わせが最適です。

理由：
1. **DocumentDB**: 多様なコンテンツタイプの柔軟なスキーマ管理
2. **OpenSearch**: 多言語全文検索とコンテンツ推薦
3. **ElastiCache**: 高トラフィック時の読み取り性能向上
4. **S3**: 画像・動画ファイルの大容量ストレージ
5. **Lambda**: リアルタイム協調編集の処理
6. **Comprehend**: コンテンツの自動分類と感情分析
7. **Translate**: 50言語対応の自動翻訳

他の選択肢の問題点：
- **Aurora PostgreSQL + Read Replicas + RDS Proxy + ElastiCache + CloudSearch + AWS Backupを使用し、RDBMS基盤CMSデータベースを構築する**: PostgreSQLは多様なコンテンツタイプの管理に制限
- **DynamoDB + DynamoDB Accelerator + Kinesis + Lambda + SageMaker + S3を使用し、NoSQL CMSデータベースを構築する**: DynamoDBは複雑なコンテンツクエリに不適切
- **RDS MySQL + Multi-AZ + Application Load Balancer + CloudFront + CloudWatch + IAMを使用し、従来型CMSデータベースを構築する**: MySQLは多言語全文検索機能が不十分`
  },
  {
    id: 'adv-db-010',
    category: 'データベース',
    question: `大手保険会社が、保険金請求処理システムを現代化しています。以下の要件があります：

1. 保険契約、請求、支払履歴の統合管理
2. 不正請求の自動検知
3. 規制要件（Solvency II、IFRS 17）への準拠
4. 顧客情報の厳格なプライバシー保護
5. 災害時の大量請求処理（通常の100倍）
6. 保険数理計算とリスク分析
7. 監査証跡の完全性保証

この要件を満たすために、最も適切な保険業界向けデータベースアーキテクチャはどれですか？`,
    options: [
      'Aurora Global Database + DynamoDB + Neptune + Timestream + Macie + CloudTrail + SageMakerを使用し、保険業界特化データベースを構築する',
      'RDS Oracle + Data Guard + GoldenGate + Exadata + APEX + OEMを使用し、Oracle統合保険データベースを構築する',
      'DocumentDB + Atlas Search + EMR + Redshift + QuickSight + AWS Configを使用し、NoSQL保険データベースを構築する',
      'PostgreSQL + PostGIS + pgpool + Patroni + Barman + Zabbixを使用し、オープンソース保険データベースを構築する'
    ],
    correct: 0,
    explanation: `保険会社の請求処理システムには、Aurora Global Database + DynamoDB + Neptune + Timestream + Macie + CloudTrail + SageMakerの組み合わせが最適です。

理由：
1. **Aurora Global Database**: 保険契約データの高可用性とグローバル同期
2. **DynamoDB**: 災害時の大量請求処理（100倍スケール）
3. **Neptune**: 不正請求検知のための関係分析
4. **Timestream**: 保険数理計算の時系列データ管理
5. **Macie**: 顧客情報の自動分類と保護
6. **CloudTrail**: 規制要件に必要な完全な監査証跡
7. **SageMaker**: 不正検知とリスク分析の機械学習

他の選択肢の問題点：
- **RDS Oracle + Data Guard + GoldenGate + Exadata + APEX + OEMを使用し、Oracle統合保険データベースを構築する**: Oracleは高コストで、クラウドネイティブな拡張性に限界
- **DocumentDB + Atlas Search + EMR + Redshift + QuickSight + AWS Configを使用し、NoSQL保険データベースを構築する**: DocumentDBは保険業界の厳格なデータ整合性要件に不十分
- **PostgreSQL + PostGIS + pgpool + Patroni + Barman + Zabbixを使用し、オープンソース保険データベースを構築する**: オープンソースは保険業界の規制要件対応が困難`
  },

  // 複数選択問題
  {
    id: 'adv-db-multi-001',
    category: 'データベース',
    question: `グローバル展開するソーシャルメディア企業が、ユーザー行動分析システムを構築しています。以下の要件があります：

**要件：**
- 全世界10億人のユーザーデータ管理
- リアルタイムレコメンデーション機能
- ユーザー行動ログの高速書き込み（1秒間に100万件）
- 複雑なグラフクエリによる関係性分析
- 地域別データ主権要件への対応
- 99.99%の可用性

このシステムに必要なAWSデータベースサービスを**3つ**選択してください。`,
    options: [
      'Amazon DynamoDB Global Tables - グローバル分散NoSQLデータベース',
      'Amazon Neptune - グラフデータベース',
      'Amazon ElastiCache for Redis - インメモリキャッシュ',
      'Amazon RDS Multi-AZ - リレーショナルデータベース',
      'Amazon Redshift - データウェアハウス',
      'Amazon DocumentDB - ドキュメントデータベース'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon DynamoDB Global Tables**
- 10億人規模のユーザーデータに対応する無制限スケーラビリティ
- 1秒間に数百万件の書き込み処理が可能
- 複数リージョンでの自動レプリケーション
- 地域別データ主権要件への対応

**2. Amazon Neptune**
- ソーシャルグラフの関係性分析に最適化
- 複雑なグラフクエリの高速実行
- ユーザー間の関係性やコミュニティ検出
- レコメンデーションアルゴリズムの基盤

**3. Amazon ElastiCache for Redis**
- リアルタイムレコメンデーションの高速応答
- セッション管理とキャッシュ機能
- ミリ秒レベルのレスポンス時間
- 高可用性とフェイルオーバー機能

**他の選択肢について：**
- **RDS Multi-AZ**: スケーラビリティが不十分で10億人規模に対応困難
- **Redshift**: バッチ分析には適しているがリアルタイム処理に不適切
- **DocumentDB**: MongoDBワークロードには適しているが要件に最適化されていない`
  },

  {
    id: 'adv-db-multi-002',
    category: 'データベース',
    question: `大手小売チェーンが、オムニチャネル在庫管理システムを構築しています。以下の要件があります：

**要件：**
- 全国1,000店舗の在庫データリアルタイム同期
- ECサイトと実店舗の在庫統合管理
- 在庫予測と自動発注機能
- トランザクション整合性の保証
- 災害時の事業継続性（RPO: 1分、RTO: 5分）
- 分析レポートとBI機能

このシステムに必要なAWSデータベースサービスを**2つ**選択してください。`,
    options: [
      'Amazon Aurora Global Database - グローバル分散リレーショナルデータベース',
      'Amazon DynamoDB - NoSQLデータベース',
      'Amazon Redshift - データウェアハウス',
      'Amazon RDS Proxy - データベース接続プール',
      'Amazon ElastiCache - インメモリキャッシュ',
      'Amazon Timestream - 時系列データベース'
    ],
    correct: [0, 2],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. Amazon Aurora Global Database**
- ACID特性によるトランザクション整合性保証
- 複数リージョンでの自動レプリケーション
- RPO: 1秒、RTO: 1分未満の災害復旧性能
- 在庫データの厳密な整合性管理
- 高可用性とフェイルオーバー機能

**2. Amazon Redshift**
- 大量の在庫・売上データの分析処理
- 在庫予測モデルの学習データ基盤
- BIツールとの統合によるレポート生成
- 列指向ストレージによる高速分析
- 自動発注アルゴリズムのデータソース

**他の選択肢について：**
- **DynamoDB**: 在庫管理に必要なトランザクション整合性が不十分
- **RDS Proxy**: 接続管理には有用だが主要機能ではない
- **ElastiCache**: キャッシュ機能は有用だが主要データストアではない
- **Timestream**: 時系列データには適しているが在庫管理の主要要件ではない`
  },

  {
    id: 'adv-db-multi-003',
    category: 'データベース',
    question: `ヘルスケア企業が、患者データ管理システムを構築しています。以下の要件があります：

**要件：**
- 患者の医療記録（構造化・非構造化データ）
- HIPAA規制への完全準拠
- 医療画像データ（DICOM）の管理
- 研究用データの匿名化処理
- 高度な検索・分析機能
- 99.999%の可用性とデータ保護

このシステムに必要なAWSデータベースサービスを**3つ**選択してください。`,
    options: [
      'Amazon RDS for PostgreSQL - HIPAA準拠リレーショナルデータベース',
      'Amazon DocumentDB - 医療記録ドキュメント管理',
      'Amazon OpenSearch Service - 医療データ検索・分析',
      'Amazon DynamoDB - 高可用性NoSQLデータベース',
      'Amazon Neptune - 医療知識グラフ',
      'Amazon Redshift - 医療データウェアハウス'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon RDS for PostgreSQL**
- HIPAA規制に完全準拠
- 構造化された患者データの厳密な管理
- 暗号化とアクセス制御の強化
- バックアップと監査ログの完全性
- 医療業界標準への対応

**2. Amazon DocumentDB**
- 非構造化医療記録の柔軟な管理
- JSON形式の医療データ保存
- スキーマレス設計による拡張性
- MongoDB互換性による既存システム統合
- 自動バックアップとポイントインタイム復旧

**3. Amazon OpenSearch Service**
- 医療記録の高度な全文検索
- 症状・診断・治療法の横断検索
- 研究用データの分析とビジュアライゼーション
- 機械学習による医療データ分析
- リアルタイム検索とアラート機能

**他の選択肢について：**
- **DynamoDB**: 医療データの複雑な関係性管理には不適切
- **Neptune**: 医療知識グラフには有用だが主要要件ではない
- **Redshift**: 研究分析には有用だが日常的な患者データ管理には不適切`
  }
]

module.exports = advancedDatabaseQuestions
