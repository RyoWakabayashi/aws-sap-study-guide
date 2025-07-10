// AWS Solution Architect Professional 上級編 - ユースケース問題

const advancedUseCasesQuestions = [
  {
    id: 'adv-uc-001',
    category: 'ユースケース',
    question: `大手自動車メーカーが、コネクテッドカープラットフォームを構築しています。以下の要件があります：

1. 世界中の1000万台の車両からのリアルタイムデータ収集
2. 車両診断、予知保全、交通最適化
3. 自動運転支援とV2X通信
4. プライバシー規制（GDPR、CCPA）への準拠
5. 地域別データローカライゼーション
6. 99.99%の可用性とセキュリティ
7. 機械学習による高度な分析

この包括的なコネクテッドカーソリューションに最適なアーキテクチャはどれですか？`,
    options: [
      'IoT Core + Kinesis + SageMaker + Timestream + Lambda + RoboMaker + Location Service + Macie + GuardDuty + Global Infrastructure + Edge Locationsを使用し、統合コネクテッドカープラットフォームを構築する',
      'EC2 + RDS + S3 + Lambda + API Gateway + CloudWatch + VPCを使用し、従来型車両管理システムを構築する',
      'Kubernetes + Kafka + Spark + Cassandra + TensorFlow + Prometheus + Grafanaを使用し、オープンソース車両プラットフォームを構築する',
      'Azure IoT + Google Cloud AI + AWS Storage + Multi-cloud + Hybrid Architectureを使用し、マルチクラウド車両プラットフォームを構築する'
    ],
    correct: 0,
    explanation: `コネクテッドカープラットフォームには、IoT Core + Kinesis + SageMaker + Timestream + Lambda + RoboMaker + Location Service + Macie + GuardDuty + Global Infrastructure + Edge Locationsの統合ソリューションが最適です。

理由：
1. **IoT Core**: 1000万台車両の大規模IoT管理
2. **Kinesis**: リアルタイムデータストリーミング
3. **SageMaker**: 予知保全・交通最適化AI
4. **Timestream**: 車両時系列データ管理
5. **RoboMaker**: 自動運転シミュレーション
6. **Location Service**: V2X通信・位置情報処理
7. **Macie + GuardDuty**: プライバシー保護・セキュリティ
8. **Global Infrastructure**: 地域別データローカライゼーション`
  },
  {
    id: 'adv-uc-002',
    category: 'ユースケース',
    question:
      '大手銀行が、次世代デジタルバンキングエコシステムを構築しています。オープンバンキング、リアルタイム決済、AI投資アドバイス、不正検知、規制準拠が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'API Gateway + Lambda + SageMaker + Kinesis + Aurora + DynamoDB + Cognito + KMS + CloudTrail + Macie + GuardDuty + Personalizeを使用する',
      'EC2 + RDS + ElastiCache + Application Load Balancer + CloudWatch + IAMを使用する',
      'Microservices + Kubernetes + Istio + Kafka + Redis + PostgreSQL + Prometheusを使用する',
      'Blockchain + Smart Contracts + DeFi + Cryptocurrency + Distributed Ledgerを使用する'
    ],
    correct: 0,
    explanation:
      '次世代デジタルバンキングには、API Gateway + Lambda + SageMaker + Kinesis + Aurora + DynamoDB + Cognito + KMS + CloudTrail + Macie + GuardDuty + Personalizeが最適です。オープンAPI、AI分析、セキュリティ、規制準拠を統合的に実現できます。'
  },
  {
    id: 'adv-uc-003',
    category: 'ユースケース',
    question:
      '大手病院グループが、統合医療プラットフォームを構築しています。電子カルテ統合、テレヘルス、AI診断支援、医療研究、患者ポータルが要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'HealthLake + Comprehend Medical + Transcribe Medical + Rekognition + Connect + Chime + SageMaker + Macie + PrivateLink + KMSを使用する',
      'RDS + Lambda + API Gateway + S3 + CloudFront + Cognito + IAMを使用する',
      'FHIR + HL7 + DICOM + OAuth + SAML + PostgreSQL + Redis + Dockerを使用する',
      'Blockchain + Smart Contracts + Patient Records + Decentralized Identity + Cryptographyを使用する'
    ],
    correct: 0,
    explanation:
      '統合医療プラットフォームには、HealthLake + Comprehend Medical + Transcribe Medical + Rekognition + Connect + Chime + SageMaker + Macie + PrivateLink + KMSが最適です。医療特化サービス、AI診断、テレヘルス、HIPAA準拠を実現できます。'
  },
  {
    id: 'adv-uc-004',
    category: 'ユースケース',
    question:
      '大手小売チェーンが、次世代オムニチャネルプラットフォームを構築しています。統合在庫管理、パーソナライゼーション、リアルタイム分析、サプライチェーン最適化が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'EventBridge + Lambda + Personalize + Kinesis + DynamoDB + SageMaker + QuickSight + Supply Chain + Location Service + Forecastを使用する',
      'EC2 + RDS + ElastiCache + Application Load Balancer + S3 + CloudFrontを使用する',
      'Microservices + API Gateway + Kubernetes + Kafka + Redis + Elasticsearch + Grafanaを使用する',
      'ERP + CRM + WMS + POS + BI + ETL + Data Warehouseを使用する'
    ],
    correct: 0,
    explanation:
      'オムニチャネル小売には、EventBridge + Lambda + Personalize + Kinesis + DynamoDB + SageMaker + QuickSight + Supply Chain + Location Service + Forecastが最適です。統合イベント処理、AI分析、サプライチェーン最適化を実現できます。'
  },
  {
    id: 'adv-uc-005',
    category: 'ユースケース',
    question:
      '大手メディア企業が、次世代ストリーミングプラットフォームを構築しています。4K/8K配信、AI推薦、インタラクティブコンテンツ、グローバル展開が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'MediaLive + MediaPackage + CloudFront + Personalize + Rekognition + Transcribe + Translate + Kinesis + Lambda@Edge + IVSを使用する',
      'EC2 + S3 + CloudFront + RDS + ElastiCache + Lambda + API Gatewayを使用する',
      'Kubernetes + Docker + FFmpeg + Nginx + Redis + PostgreSQL + Prometheusを使用する',
      'CDN + Video Encoding + Recommendation Engine + Analytics + Payment Gateway + CMSを使用する'
    ],
    correct: 0,
    explanation:
      '次世代ストリーミングには、MediaLive + MediaPackage + CloudFront + Personalize + Rekognition + Transcribe + Translate + Kinesis + Lambda@Edge + IVSが最適です。メディア特化サービス、AI機能、グローバル配信、インタラクティブ機能を実現できます。'
  },
  {
    id: 'adv-uc-006',
    category: 'ユースケース',
    question:
      '大手ゲーム会社が、次世代クラウドゲーミングプラットフォームを構築しています。ストリーミングゲーム、マルチプレイヤー、AI NPC、ブロックチェーン統合が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'GameLift + Global Accelerator + EC2 GPU + Kinesis + DynamoDB + SageMaker + Managed Blockchain + Lambda + API Gatewayを使用する',
      'EC2 + Auto Scaling + Application Load Balancer + RDS + ElastiCache + S3を使用する',
      'Kubernetes + Docker + Unity + Unreal Engine + Redis + PostgreSQL + Prometheusを使用する',
      'Game Engines + Multiplayer Servers + CDN + Analytics + Payment + Social Featuresを使用する'
    ],
    correct: 0,
    explanation:
      'クラウドゲーミングには、GameLift + Global Accelerator + EC2 GPU + Kinesis + DynamoDB + SageMaker + Managed Blockchain + Lambda + API Gatewayが最適です。ゲーム特化機能、GPU処理、AI、ブロックチェーン統合を実現できます。'
  },
  {
    id: 'adv-uc-007',
    category: 'ユースケース',
    question:
      '大手物流会社が、次世代スマート物流プラットフォームを構築しています。自動運転配送、ドローン配送、AI最適化、IoT統合が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'IoT Core + RoboMaker + SageMaker + Location Service + Kinesis + Lambda + Ground Station + Timestream + Forecast + Supply Chainを使用する',
      'EC2 + RDS + S3 + Lambda + API Gateway + CloudWatch + VPCを使用する',
      'Kubernetes + Kafka + Spark + Cassandra + TensorFlow + Prometheus + Grafanaを使用する',
      'WMS + TMS + GPS + Telematics + Route Optimization + Fleet Managementを使用する'
    ],
    correct: 0,
    explanation:
      'スマート物流には、IoT Core + RoboMaker + SageMaker + Location Service + Kinesis + Lambda + Ground Station + Timestream + Forecast + Supply Chainが最適です。IoT統合、ロボティクス、AI最適化、衛星通信を実現できます。'
  },
  {
    id: 'adv-uc-008',
    category: 'ユースケース',
    question:
      '大手エネルギー会社が、次世代スマートグリッドプラットフォームを構築しています。再生可能エネルギー統合、AI需給予測、ブロックチェーン取引、カーボンニュートラルが要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'IoT Core + SageMaker + Forecast + Timestream + Managed Blockchain + Lambda + Kinesis + Ground Station + Sustainability + Carbon Footprintを使用する',
      'EC2 + RDS + S3 + Lambda + API Gateway + CloudWatch + Kinesisを使用する',
      'SCADA + HMI + Historian + Energy Management + Demand Response + Grid Optimizationを使用する',
      'Kubernetes + Kafka + Spark + InfluxDB + TensorFlow + Prometheus + Grafanaを使用する'
    ],
    correct: 0,
    explanation:
      '次世代スマートグリッドには、IoT Core + SageMaker + Forecast + Timestream + Managed Blockchain + Lambda + Kinesis + Ground Station + Sustainability + Carbon Footprintが最適です。IoT統合、AI予測、ブロックチェーン、持続可能性を実現できます。'
  },
  {
    id: 'adv-uc-009',
    category: 'ユースケース',
    question:
      '大手航空会社が、次世代航空プラットフォームを構築しています。予測メンテナンス、燃料最適化、乗客体験向上、持続可能性が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'IoT Core + SageMaker + Lookout for Equipment + Personalize + Location Service + Forecast + Sustainability + Carbon Footprint + Connect + Chimeを使用する',
      'EC2 + RDS + S3 + Lambda + API Gateway + CloudWatch + Kinesisを使用する',
      'Aviation MRO + Flight Operations + Passenger Services + Fuel Management + Route Optimizationを使用する',
      'Kubernetes + Kafka + Spark + Cassandra + TensorFlow + Prometheus + Grafanaを使用する'
    ],
    correct: 0,
    explanation:
      '次世代航空プラットフォームには、IoT Core + SageMaker + Lookout for Equipment + Personalize + Location Service + Forecast + Sustainability + Carbon Footprint + Connect + Chimeが最適です。予知保全、AI最適化、乗客体験、持続可能性を統合的に実現できます。'
  },
  {
    id: 'adv-uc-010',
    category: 'ユースケース',
    question:
      '大手政府機関が、次世代デジタル政府プラットフォームを構築しています。市民サービス統合、AI行政、ブロックチェーン投票、透明性確保が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'GovCloud + Cognito + Lambda + SageMaker + Managed Blockchain + Comprehend + Textract + Connect + Chime + Audit Manager + Transparency Reportsを使用する',
      'EC2 + RDS + S3 + Lambda + API Gateway + IAM + CloudTrailを使用する',
      'Digital Identity + e-Government + Citizen Portal + Online Services + Document Management + Workflow Automationを使用する',
      'Kubernetes + Microservices + API Gateway + Database + Analytics + Security + Complianceを使用する'
    ],
    correct: 0,
    explanation:
      'デジタル政府プラットフォームには、GovCloud + Cognito + Lambda + SageMaker + Managed Blockchain + Comprehend + Textract + Connect + Chime + Audit Manager + Transparency Reportsが最適です。政府特化環境、AI行政、ブロックチェーン、透明性を実現できます。'
  },

  // 複数選択問題
  {
    id: 'adv-usecase-multi-001',
    category: 'ユースケース',
    question: `スタートアップ企業が、急成長に対応できるスケーラブルなSaaSプラットフォームを構築しています。以下の要件があります：

**要件：**
- 予測困難なユーザー増加への対応
- 開発・運用コストの最小化
- 高い開発速度とデプロイ頻度
- グローバル展開への対応
- セキュリティとコンプライアンス
- データ分析による事業改善

このSaaSプラットフォームに最適なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Lambda - サーバーレス実行環境',
      'Amazon CloudFront - グローバルコンテンツ配信',
      'Amazon Cognito - ユーザー認証・管理',
      'Amazon RDS - リレーショナルデータベース',
      'AWS Fargate - サーバーレスコンテナ',
      'Amazon Redshift - データウェアハウス'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Lambda**
- 完全サーバーレスで運用負荷ゼロ
- 自動スケーリングによる急成長対応
- 実行時間のみの従量課金
- 高い開発速度の実現
- スタートアップに最適なコスト構造

**2. Amazon CloudFront**
- グローバル展開への即座対応
- エッジロケーションでの高速配信
- 自動スケーリングと負荷分散
- セキュリティ機能の統合
- コスト効率的な配信

**3. Amazon Cognito**
- ユーザー認証・管理の完全マネージド
- ソーシャルログイン統合
- セキュリティとコンプライアンス対応
- スケーラブルなユーザー管理
- 開発工数の大幅削減

**他の選択肢について：**
- **RDS**: データベースには重要だが、スケーラビリティに限界
- **Fargate**: コンテナには適しているが、Lambdaがより軽量
- **Redshift**: データ分析には重要だが、初期段階には不要`
  },

  {
    id: 'adv-usecase-multi-002',
    category: 'ユースケース',
    question: `大手メディア企業が、次世代の動画配信プラットフォームを構築しています。以下の要件があります：

**要件：**
- 4K/8K動画の世界規模配信
- リアルタイムライブストリーミング
- 個人化されたコンテンツレコメンデーション
- 動画の自動トランスコーディング
- 視聴分析とビジネスインテリジェンス
- コンテンツ保護とDRM

この次世代動画プラットフォームに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'AWS Elemental MediaLive - ライブ動画処理',
      'Amazon Personalize - 機械学習レコメンデーション',
      'Amazon Kinesis Video Streams - 動画ストリーミング',
      'AWS Elemental MediaConvert - 動画トランスコーディング',
      'Amazon QuickSight - ビジネスインテリジェンス',
      'AWS WAF - Webアプリケーション保護'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. AWS Elemental MediaLive**
- リアルタイムライブストリーミング処理
- 4K/8K高画質動画の配信対応
- 自動スケーリングによる視聴者数対応
- 複数出力形式への同時配信
- 放送品質の信頼性

**2. Amazon Personalize**
- 機械学習による個人化レコメンデーション
- 視聴履歴に基づく自動最適化
- リアルタイム推奨システム
- A/Bテスト機能による効果測定
- メディア業界特化のアルゴリズム

**他の選択肢について：**
- **Kinesis Video Streams**: 動画取り込みには適しているが、配信には不適切
- **MediaConvert**: トランスコーディングには重要だが、ライブ配信の主要機能ではない
- **QuickSight**: 分析には有用だが、動画配信の主要機能ではない
- **WAF**: セキュリティには重要だが、動画処理の主要機能ではない`
  },

  {
    id: 'adv-usecase-multi-003',
    category: 'ユースケース',
    question: `ヘルスケア企業が、AI駆動の遠隔医療プラットフォームを構築しています。以下の要件があります：

**要件：**
- HIPAA規制への完全準拠
- 医療画像の高速処理・分析
- リアルタイム診断支援
- 患者データの安全な管理
- 医師間のセキュアな情報共有
- 機械学習による診断精度向上

このAI遠隔医療プラットフォームに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'Amazon SageMaker - 機械学習プラットフォーム',
      'Amazon Comprehend Medical - 医療テキスト分析',
      'AWS HealthLake - 医療データ統合管理',
      'Amazon Rekognition - 画像・動画分析',
      'Amazon Connect - コンタクトセンター',
      'AWS PrivateLink - プライベート接続'
    ],
    correct: [0, 2, 5],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon SageMaker**
- 医療AI・機械学習モデルの開発
- 診断支援アルゴリズムの構築
- 医療画像の高度な分析処理
- HIPAA準拠の機械学習環境
- 診断精度向上の継続的改善

**2. AWS HealthLake**
- 医療データの統合管理
- FHIR標準による相互運用性
- 患者データの安全な保存・検索
- 医療記録の構造化と分析
- HIPAA規制への完全準拠

**3. AWS PrivateLink**
- 医療システム間のセキュア接続
- インターネットを経由しない通信
- 患者データの高度なプライバシー保護
- 医師間の安全な情報共有
- 規制要件への準拠

**他の選択肢について：**
- **Comprehend Medical**: 医療テキスト分析には有用だが、画像処理の主要機能ではない
- **Rekognition**: 一般的な画像分析には有用だが、医療特化機能が不足
- **Connect**: コンタクトセンターには有用だが、診断支援の主要機能ではない`
  }
]

module.exports = advancedUseCasesQuestions
