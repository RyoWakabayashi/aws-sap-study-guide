// AWS Solution Architect Professional 上級編 - アプリケーション統合問題

const advancedIntegrationQuestions = [
  {
    id: 'adv-int-001',
    category: 'アプリケーション統合',
    question: `大手eコマース企業が、マイクロサービス間の統合アーキテクチャを構築しています。以下の要件があります：

1. 100以上のマイクロサービス間の疎結合通信
2. イベント駆動アーキテクチャの実装
3. 非同期処理とリアルタイム処理の混在
4. 障害時の自動リトライと回復
5. メッセージの順序保証と重複排除
6. 高スループット（1秒間に100万メッセージ）
7. 統合監視とトレーサビリティ

この要件を満たす最適な統合アーキテクチャはどれですか？`,
    options: [
      'EventBridge + SQS + SNS + Kinesis + Step Functions + Lambda + X-Ray + CloudWatchを使用し、イベント駆動統合アーキテクチャを構築する',
      'API Gateway + Lambda + DynamoDB + S3 + CloudFrontを使用し、RESTful統合アーキテクチャを構築する',
      'ECS + Application Load Balancer + RDS + ElastiCacheを使用し、同期型統合アーキテクチャを構築する',
      'Apache Kafka + Zookeeper + Kafka Connect + Schema Registryを使用し、オープンソース統合アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `eコマース企業のマイクロサービス統合には、EventBridge + SQS + SNS + Kinesis + Step Functions + Lambda + X-Ray + CloudWatchの組み合わせが最適です。

理由：
1. **EventBridge**: 100以上のサービス間のイベントルーティング
2. **SQS**: 非同期処理と障害時の自動リトライ
3. **SNS**: ファンアウト型の通知配信
4. **Kinesis**: 高スループットリアルタイム処理
5. **Step Functions**: 複雑なワークフローオーケストレーション
6. **Lambda**: イベント駆動処理
7. **X-Ray**: 分散トレーシング
8. **CloudWatch**: 統合監視`
  },
  {
    id: 'adv-int-002',
    category: 'アプリケーション統合',
    question: `大手金融機関が、レガシーシステムとクラウドサービスの統合を実施しています。以下の課題があります：

1. メインフレーム（COBOL）との連携
2. リアルタイム取引処理の要件
3. 金融規制への準拠
4. データ形式の変換（EBCDIC、固定長等）
5. 高可用性とセキュリティ
6. 段階的移行の必要性
7. 監査証跡の完全性

この統合要件を満たす最適なアーキテクチャはどれですか？`,
    options: [
      'MQ + Connect + Lambda + Step Functions + API Gateway + KMS + CloudTrail + Configを使用し、レガシー統合アーキテクチャを構築する',
      'Direct Connect + VPN + EC2 + RDS + S3を使用し、ハイブリッド統合アーキテクチャを構築する',
      'EventBridge + SQS + Lambda + DynamoDBを使用し、モダン統合アーキテクチャを構築する',
      'API Gateway + Lambda + Aurora + ElastiCacheを使用し、サーバーレス統合アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `金融機関のレガシー統合には、MQ + Connect + Lambda + Step Functions + API Gateway + KMS + CloudTrail + Configの組み合わせが最適です。

理由：
1. **MQ**: メインフレームとの信頼性の高いメッセージング
2. **Connect**: データ形式変換とプロトコル変換
3. **Lambda**: リアルタイム処理とビジネスロジック
4. **Step Functions**: 複雑な金融ワークフロー
5. **API Gateway**: セキュアなAPI管理
6. **KMS**: 金融データの暗号化
7. **CloudTrail**: 監査証跡の完全性`
  },
  {
    id: 'adv-int-003',
    category: 'アプリケーション統合',
    question:
      '大手製造業が、IoTデバイスとエンタープライズシステムの統合を実施しています。工場の数万台のセンサーからのデータを既存のERP、MES、WMSシステムと統合する必要があります。リアルタイム監視、予知保全、品質管理の要件があります。最適な統合アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Lambda + Step Functions + API Gateway + SQS + EventBridge + Systems Managerを使用する',
      'MQTT Broker + Kafka + Spark + Hadoop + Hiveを使用する',
      'Direct Connect + VPN + EC2 + RDS + S3を使用する',
      'EventBridge + SNS + SQS + DynamoDB + Lambdaを使用する'
    ],
    correct: 0,
    explanation:
      '製造業のIoT統合には、IoT Core + Kinesis + Lambda + Step Functions + API Gateway + SQS + EventBridge + Systems Managerが最適です。IoT Coreで大量デバイス管理、Kinesisでリアルタイム処理、EventBridgeでエンタープライズシステム統合を実現できます。'
  },
  {
    id: 'adv-int-004',
    category: 'アプリケーション統合',
    question:
      '大手小売チェーンが、オムニチャネル戦略のためのシステム統合を実施しています。店舗POS、ECサイト、モバイルアプリ、在庫管理、顧客管理システムの統合が必要です。リアルタイム在庫同期、顧客体験の一貫性、ピーク時の負荷対応が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'API Gateway + Lambda + EventBridge + SQS + SNS + DynamoDB + Kinesis + Step Functionsを使用する',
      'Application Load Balancer + EC2 + RDS + ElastiCache + S3を使用する',
      'Direct Connect + VPN + VMware + vSphere + NSXを使用する',
      'Kafka + Zookeeper + Spark + Cassandra + Elasticsearchを使用する'
    ],
    correct: 0,
    explanation:
      '小売チェーンのオムニチャネル統合には、API Gateway + Lambda + EventBridge + SQS + SNS + DynamoDB + Kinesis + Step Functionsが最適です。API Gatewayで統一インターフェース、EventBridgeでシステム間連携、Kinesisでリアルタイム処理を実現できます。'
  },
  {
    id: 'adv-int-005',
    category: 'アプリケーション統合',
    question:
      '大手ヘルスケア企業が、病院システム、薬局システム、保険システムの統合を実施しています。HL7 FHIR準拠、HIPAA準拠、リアルタイム患者情報共有、医療機器との統合が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'HealthLake + API Gateway + Lambda + EventBridge + SQS + PrivateLink + Macie + CloudTrailを使用する',
      'RDS + Lambda + API Gateway + S3 + CloudFrontを使用する',
      'DocumentDB + Atlas Search + Lambda + API Gatewayを使用する',
      'DynamoDB + Lambda + API Gateway + Kinesis + SNSを使用する'
    ],
    correct: 0,
    explanation:
      'ヘルスケア統合には、HealthLake + API Gateway + Lambda + EventBridge + SQS + PrivateLink + Macie + CloudTrailが最適です。HealthLakeでFHIR準拠、PrivateLinkでセキュア通信、MacieでPHI保護を実現できます。'
  },
  {
    id: 'adv-int-006',
    category: 'アプリケーション統合',
    question:
      '大手物流会社が、配送管理システムの統合を実施しています。車両追跡、ルート最適化、倉庫管理、顧客通知システムの統合が必要です。リアルタイム位置情報、動的ルート変更、大量通知処理が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Lambda + Step Functions + SNS + SQS + Location Service + EventBridgeを使用する',
      'EC2 + RDS + ElastiCache + Lambda + API Gatewayを使用する',
      'ECS + Application Load Balancer + Aurora + S3を使用する',
      'Kafka + Spark + Cassandra + Redis + Elasticsearchを使用する'
    ],
    correct: 0,
    explanation:
      '物流システム統合には、IoT Core + Kinesis + Lambda + Step Functions + SNS + SQS + Location Service + EventBridgeが最適です。IoT Coreで車両IoT管理、Location Serviceで位置情報処理、EventBridgeでシステム統合を実現できます。'
  },
  {
    id: 'adv-int-007',
    category: 'アプリケーション統合',
    question:
      '大手メディア企業が、コンテンツ管理システムの統合を実施しています。動画編集、エンコーディング、配信、分析システムの統合が必要です。大容量ファイル処理、ワークフロー管理、リアルタイム分析が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'MediaConvert + Step Functions + S3 + Lambda + EventBridge + Kinesis + SQS + SNSを使用する',
      'EC2 + EFS + RDS + ElastiCache + CloudFrontを使用する',
      'ECS + Application Load Balancer + Aurora + S3を使用する',
      'EMR + Spark + Hadoop + Hive + Redshiftを使用する'
    ],
    correct: 0,
    explanation:
      'メディア統合には、MediaConvert + Step Functions + S3 + Lambda + EventBridge + Kinesis + SQS + SNSが最適です。MediaConvertで動画処理、Step Functionsでワークフロー、EventBridgeでシステム統合を実現できます。'
  },
  {
    id: 'adv-int-008',
    category: 'アプリケーション統合',
    question:
      '大手ゲーム会社が、ゲームサービスの統合を実施しています。ゲームサーバー、プレイヤー管理、課金システム、分析システムの統合が必要です。リアルタイム通信、高可用性、グローバル展開が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'GameLift + API Gateway + Lambda + EventBridge + DynamoDB + Kinesis + SQS + SNSを使用する',
      'EC2 + Application Load Balancer + RDS + ElastiCacheを使用する',
      'EKS + Kubernetes + Istio + Prometheus + Grafanaを使用する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFrontを使用する'
    ],
    correct: 0,
    explanation:
      'ゲームサービス統合には、GameLift + API Gateway + Lambda + EventBridge + DynamoDB + Kinesis + SQS + SNSが最適です。GameLiftでゲームサーバー管理、EventBridgeでサービス統合、Kinesisでリアルタイム分析を実現できます。'
  },
  {
    id: 'adv-int-009',
    category: 'アプリケーション統合',
    question:
      '大手エネルギー会社が、スマートグリッドシステムの統合を実施しています。発電所、変電所、配電網、スマートメーターの統合が必要です。リアルタイム制御、大量データ処理、高信頼性が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Lambda + Step Functions + EventBridge + Timestream + SQS + SNSを使用する',
      'EC2 + RDS + ElastiCache + Lambda + API Gatewayを使用する',
      'EMR + Spark + Hadoop + Kafka + Cassandraを使用する',
      'ECS + Application Load Balancer + Aurora + S3を使用する'
    ],
    correct: 0,
    explanation:
      'スマートグリッド統合には、IoT Core + Kinesis + Lambda + Step Functions + EventBridge + Timestream + SQS + SNSが最適です。IoT Coreで大量デバイス管理、Timestreamで時系列データ、EventBridgeでシステム統合を実現できます。'
  },
  {
    id: 'adv-int-010',
    category: 'アプリケーション統合',
    question:
      '大手航空会社が、航空システムの統合を実施しています。予約システム、チェックインシステム、手荷物追跡、航空管制連携の統合が必要です。高可用性、リアルタイム処理、規制準拠が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'API Gateway + Lambda + Step Functions + EventBridge + SQS + SNS + Aurora + KMS + CloudTrailを使用する',
      'EC2 + Application Load Balancer + RDS + ElastiCacheを使用する',
      'EKS + Kubernetes + Istio + Prometheus + Grafanaを使用する',
      'Lambda + DynamoDB + S3 + CloudFront + Route 53を使用する'
    ],
    correct: 0,
    explanation:
      '航空システム統合には、API Gateway + Lambda + Step Functions + EventBridge + SQS + SNS + Aurora + KMS + CloudTrailが最適です。API Gatewayで統一インターフェース、Step Functionsで複雑ワークフロー、EventBridgeでシステム統合を実現できます。'
  },

  // 複数選択問題
  {
    id: 'adv-int-multi-001',
    category: 'アプリケーション統合',
    question: `大手小売チェーンが、オムニチャネル戦略のためにECサイト、実店舗POS、在庫管理、CRMシステムを統合しています。以下の要件があります：

**要件：**
- リアルタイム在庫同期
- 顧客データの統合管理
- 注文処理の自動化
- 複数システム間のデータ整合性保証
- 障害時の自動復旧
- スケーラブルなメッセージ処理

このオムニチャネル統合に必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'Amazon EventBridge - イベント駆動統合',
      'AWS Step Functions - ワークフロー自動化',
      'Amazon SQS - 信頼性の高いメッセージキューイング',
      'Amazon SNS - プッシュ通知サービス',
      'AWS AppSync - GraphQL API統合',
      'Amazon MQ - マネージドメッセージブローカー'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon EventBridge**
- 複数システム間のイベント駆動統合
- リアルタイム在庫同期の実現
- カスタムイベントルールによる柔軟な統合
- 第三者システムとの統合対応
- 疎結合アーキテクチャの実現

**2. AWS Step Functions**
- 複雑な注文処理ワークフローの自動化
- 複数システム間の処理順序制御
- エラーハンドリングと自動復旧
- 視覚的なワークフロー管理
- 状態管理と監視機能

**3. Amazon SQS**
- システム間の信頼性の高いメッセージ配信
- 障害時のメッセージ保護
- スケーラブルなメッセージ処理
- デッドレターキューによるエラー処理
- 順序保証（FIFO）オプション

**他の選択肢について：**
- **SNS**: 通知には有用だが、システム統合の主要機能ではない
- **AppSync**: GraphQL統合には有用だが、オムニチャネル統合の主要機能ではない
- **MQ**: メッセージブローカーには有用だが、クラウドネイティブ統合には不適切`
  },

  {
    id: 'adv-int-multi-002',
    category: 'アプリケーション統合',
    question: `金融機関が、レガシーシステムと新しいデジタルバンキングプラットフォームを統合しています。以下の要件があります：

**要件：**
- レガシーシステムとの安全な統合
- リアルタイム取引処理
- 金融規制への準拠
- API管理とセキュリティ
- 取引データの完全性保証
- 段階的移行サポート

この金融システム統合に必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'Amazon API Gateway - API管理・セキュリティ',
      'AWS PrivateLink - プライベート接続',
      'Amazon Kinesis - リアルタイムデータストリーミング',
      'AWS Direct Connect - 専用線接続',
      'Amazon MQ - エンタープライズメッセージング',
      'AWS Transit Gateway - ネットワーク統合'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. Amazon API Gateway**
- レガシーシステムとの統一API管理
- 認証・認可による強固なセキュリティ
- API使用量の監視と制御
- 金融規制要件への準拠機能
- 段階的移行のサポート

**2. AWS PrivateLink**
- レガシーシステムとの安全なプライベート接続
- インターネットを経由しない通信
- 金融データの高度なセキュリティ確保
- ネットワーク分離による規制準拠
- 取引データの完全性保証

**他の選択肢について：**
- **Kinesis**: リアルタイム処理には有用だが、システム統合の主要機能ではない
- **Direct Connect**: 専用線接続には重要だが、アプリケーション統合の主要機能ではない
- **MQ**: メッセージングには有用だが、API統合の主要機能ではない
- **Transit Gateway**: ネットワーク統合には重要だが、アプリケーション統合の主要機能ではない`
  },

  {
    id: 'adv-int-multi-003',
    category: 'アプリケーション統合',
    question: `製造業が、IoTデバイス、ERP、MES（製造実行システム）、品質管理システムを統合したスマートファクトリーを構築しています。以下の要件があります：

**要件：**
- 大量IoTデータのリアルタイム処理
- 製造プロセスの自動化
- 品質データの統合分析
- 予知保全システムとの連携
- エッジとクラウドの統合
- 製造データの可視化

このスマートファクトリー統合に必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS IoT Core - IoTデバイス統合管理',
      'Amazon Kinesis Data Streams - 大量データストリーミング',
      'AWS IoT Analytics - IoTデータ分析・統合',
      'Amazon Timestream - 時系列データベース',
      'AWS Lambda - サーバーレス処理',
      'Amazon QuickSight - データ可視化'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS IoT Core**
- 大量IoTデバイスの統合管理
- デバイス認証とセキュア通信
- ルールエンジンによるデータルーティング
- 他のAWSサービスとの統合
- エッジとクラウドの統合基盤

**2. Amazon Kinesis Data Streams**
- 大量IoTデータのリアルタイム処理
- 高スループットデータストリーミング
- 複数のコンシューマーによる並列処理
- 製造プロセスのリアルタイム監視
- スケーラブルなデータ取り込み

**3. AWS IoT Analytics**
- IoTデータの前処理と変換
- 製造業特化のデータ分析機能
- 品質データの統合分析
- 予知保全データの準備
- 製造データの可視化支援

**他の選択肢について：**
- **Timestream**: 時系列データには適しているが、IoT統合の主要機能ではない
- **Lambda**: リアルタイム処理には有用だが、大量データ処理の主要機能ではない
- **QuickSight**: 可視化には重要だが、データ統合の主要機能ではない`
  }
]

module.exports = advancedIntegrationQuestions
