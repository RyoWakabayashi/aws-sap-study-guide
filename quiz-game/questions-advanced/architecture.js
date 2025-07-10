// AWS Solution Architect Professional 上級編 - アーキテクチャ問題

const advancedArchitectureQuestions = [
  {
    id: 'adv-arch-001',
    category: 'アーキテクチャ',
    question: `大手金融機関が、次世代デジタルバンキングプラットフォームを構築しています。以下の要件があります：

1. マイクロサービスアーキテクチャによる疎結合設計
2. 世界中からの同時アクセス（ピーク時500万ユーザー）
3. 99.99%の可用性とゼロダウンタイムデプロイ
4. 金融規制（PCI DSS、SOX、GDPR）への準拠
5. リアルタイム取引処理（レイテンシ10ms以下）
6. 災害復旧（RTO: 5分、RPO: 0）
7. セキュリティとコンプライアンスの自動監査

この要件を満たすために、最も適切なマイクロサービスアーキテクチャはどれですか？`,
    options: [
      'EKS + Istio + Fargate + Aurora Global Database + ElastiCache + API Gateway + CloudTrail + Config + Security Hubを使用し、クラウドネイティブ金融アーキテクチャを構築する',
      'ECS + Application Load Balancer + RDS Multi-AZ + ElastiCache + Lambda + Step Functions + CloudWatchを使用し、コンテナベース金融アーキテクチャを構築する',
      'Lambda + API Gateway + DynamoDB Global Tables + Step Functions + EventBridge + SQS + SNSを使用し、サーバーレス金融アーキテクチャを構築する',
      'EC2 Auto Scaling + Application Load Balancer + RDS + ElastiCache + CloudFront + Route 53を使用し、従来型金融アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `金融機関のデジタルバンキングには、EKS + Istio + Fargate + Aurora Global Database + ElastiCache + API Gateway + CloudTrail + Config + Security Hubの組み合わせが最適です。

理由：
1. **EKS + Istio**: マイクロサービス間の通信制御とセキュリティ
2. **Fargate**: サーバーレスコンテナで運用負荷軽減
3. **Aurora Global Database**: グローバル展開とゼロRPO災害復旧
4. **ElastiCache**: 10ms以下の低レイテンシ実現
5. **API Gateway**: 統一されたAPI管理とセキュリティ
6. **CloudTrail + Config**: 金融規制の自動監査
7. **Security Hub**: 統合セキュリティ管理

他の選択肢の問題点：
- **ECS + Application Load Balancer + RDS Multi-AZ + ElastiCache + Lambda + Step Functions + CloudWatchを使用し、コンテナベース金融アーキテクチャを構築する**: ECSはKubernetesエコシステムの豊富な機能を活用できない
- **Lambda + API Gateway + DynamoDB Global Tables + Step Functions + EventBridge + SQS + SNSを使用し、サーバーレス金融アーキテクチャを構築する**: Lambdaの実行時間制限により複雑な金融処理に不適切
- **EC2 Auto Scaling + Application Load Balancer + RDS + ElastiCache + CloudFront + Route 53を使用し、従来型金融アーキテクチャを構築する**: 従来型アーキテクチャはマイクロサービス要件を満たさない`
  },
  {
    id: 'adv-arch-002',
    category: 'アーキテクチャ',
    question: `大手eコマース企業が、グローバル展開のためのマルチリージョンアーキテクチャを設計しています。以下の要件があります：

1. 世界5地域での同時運用（アクティブ-アクティブ）
2. 地域間でのデータ整合性保証
3. 地域別の法規制対応（データローカライゼーション）
4. 災害時の自動フェイルオーバー（RTO: 1分）
5. グローバル負荷分散と最適化
6. 地域間でのコンテンツ同期
7. 統一された監視とガバナンス

この要件を満たすために、最も適切なマルチリージョンアーキテクチャはどれですか？`,
    options: [
      'Route 53 + Global Accelerator + Aurora Global Database + DynamoDB Global Tables + S3 Cross-Region Replication + CloudFront + Transit Gateway + Control Towerを使用し、グローバルアクティブ-アクティブアーキテクチャを構築する',
      'Application Load Balancer + RDS Read Replicas + ElastiCache + S3 + CloudFront + VPC Peeringを使用し、マスター-スレーブアーキテクチャを構築する',
      'API Gateway + Lambda + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレスマルチリージョンアーキテクチャを構築する',
      'EC2 Auto Scaling + Network Load Balancer + Aurora + ElastiCache + Direct Connect + Site-to-Site VPNを使用し、ハイブリッドマルチリージョンアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `eコマース企業のマルチリージョンアーキテクチャには、Route 53 + Global Accelerator + Aurora Global Database + DynamoDB Global Tables + S3 Cross-Region Replication + CloudFront + Transit Gateway + Control Towerの組み合わせが最適です。

理由：
1. **Route 53**: 地理的ルーティングとヘルスチェック
2. **Global Accelerator**: グローバル負荷分散と最適化
3. **Aurora Global Database**: 地域間でのデータ整合性とRTO 1分
4. **DynamoDB Global Tables**: グローバルデータ同期
5. **S3 Cross-Region Replication**: コンテンツの地域間同期
6. **CloudFront**: グローバルCDN
7. **Transit Gateway**: 地域間ネットワーク接続
8. **Control Tower**: 統一ガバナンス

他の選択肢の問題点：
- **Application Load Balancer + RDS Read Replicas + ElastiCache + S3 + CloudFront + VPC Peeringを使用し、マスター-スレーブアーキテクチャを構築する**: マスター-スレーブはアクティブ-アクティブ要件を満たさない
- **API Gateway + Lambda + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレスマルチリージョンアーキテクチャを構築する**: サーバーレスのみでは複雑なeコマース処理に限界
- **EC2 Auto Scaling + Network Load Balancer + Aurora + ElastiCache + Direct Connect + Site-to-Site VPNを使用し、ハイブリッドマルチリージョンアーキテクチャを構築する**: ハイブリッドは地域別法規制対応が複雑`
  },
  {
    id: 'adv-arch-003',
    category: 'アーキテクチャ',
    question: `大手製造業が、Industry 4.0対応のスマートファクトリーアーキテクチャを構築しています。以下の要件があります：

1. 工場内IoTデバイス（数万台）との統合
2. エッジコンピューティングによるリアルタイム制御
3. クラウドとオンプレミスのハイブリッド環境
4. 生産データの機械学習分析
5. サプライチェーン全体の可視化
6. セキュリティとコンプライアンス
7. 段階的なデジタル変革

この要件を満たすために、最も適切なスマートファクトリーアーキテクチャはどれですか？`,
    options: [
      'AWS Outposts + IoT Greengrass + IoT Core + SageMaker + Timestream + QuickSight + Direct Connect + Systems Manager + Config + GuardDutyを使用し、ハイブリッドスマートファクトリーアーキテクチャを構築する',
      'EC2 + Lambda + IoT Core + Kinesis + S3 + Athena + QuickSight + VPC + CloudWatchを使用し、クラウドファーストスマートファクトリーアーキテクチャを構築する',
      'EKS + Kubernetes + Prometheus + Grafana + InfluxDB + MQTT + Node-REDを使用し、オープンソーススマートファクトリーアーキテクチャを構築する',
      'VMware Cloud on AWS + vSphere + NSX + vSAN + vRealize + Tanzu + Pivotal Cloud Foundryを使用し、VMwareベーススマートファクトリーアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `製造業のスマートファクトリーには、AWS Outposts + IoT Greengrass + IoT Core + SageMaker + Timestream + QuickSight + Direct Connect + Systems Manager + Config + GuardDutyの組み合わせが最適です。

理由：
1. **AWS Outposts**: オンプレミスでのAWSサービス利用
2. **IoT Greengrass**: エッジでのリアルタイム制御
3. **IoT Core**: 数万台IoTデバイスの統合管理
4. **SageMaker**: 生産データの機械学習分析
5. **Timestream**: 製造時系列データの効率的管理
6. **QuickSight**: サプライチェーン可視化
7. **Direct Connect**: 安定したクラウド接続
8. **Systems Manager**: ハイブリッド環境の統合管理

他の選択肢の問題点：
- **EC2 + Lambda + IoT Core + Kinesis + S3 + Athena + QuickSight + VPC + CloudWatchを使用し、クラウドファーストスマートファクトリーアーキテクチャを構築する**: クラウドファーストは製造業の既存システム統合に課題
- **EKS + Kubernetes + Prometheus + Grafana + InfluxDB + MQTT + Node-REDを使用し、オープンソーススマートファクトリーアーキテクチャを構築する**: オープンソースは製造業の安定性要件に不適切
- **VMware Cloud on AWS + vSphere + NSX + vSAN + vRealize + Tanzu + Pivotal Cloud Foundryを使用し、VMwareベーススマートファクトリーアーキテクチャを構築する**: VMwareベースはAWSサービスとの統合に制限`
  },
  {
    id: 'adv-arch-004',
    category: 'アーキテクチャ',
    question: `大手メディア企業が、次世代ストリーミングプラットフォームを構築しています。以下の要件があります：

1. 世界中への4K/8K動画配信
2. 同時視聴者数：1億人以上
3. 動的な品質調整とパーソナライゼーション
4. ライブ配信とVODの統合
5. マルチデバイス対応（TV、スマホ、PC）
6. コンテンツ保護とDRM
7. 視聴分析とレコメンデーション

この要件を満たすために、最も適切なストリーミングアーキテクチャはどれですか？`,
    options: [
      'MediaLive + MediaPackage + MediaStore + CloudFront + Lambda@Edge + Personalize + Kinesis + OpenSearch + QuickSight + WAF + Shieldを使用し、エンドツーエンドストリーミングアーキテクチャを構築する',
      'EC2 + FFmpeg + Nginx + S3 + CloudFront + ElastiCache + RDS + Lambda + API Gatewayを使用し、カスタムストリーミングアーキテクチャを構築する',
      'ECS + Docker + Kubernetes + Istio + Prometheus + Grafana + ELK Stack + Redisを使用し、コンテナベースストリーミングアーキテクチャを構築する',
      'Lambda + Step Functions + DynamoDB + S3 + CloudFront + API Gateway + Kinesis + SNSを使用し、サーバーレスストリーミングアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `メディア企業のストリーミングプラットフォームには、MediaLive + MediaPackage + MediaStore + CloudFront + Lambda@Edge + Personalize + Kinesis + OpenSearch + QuickSight + WAF + Shieldの組み合わせが最適です。

理由：
1. **MediaLive**: ライブ動画エンコーディング
2. **MediaPackage**: 動画パッケージングとDRM
3. **MediaStore**: 高性能動画ストレージ
4. **CloudFront**: 1億人同時配信対応CDN
5. **Lambda@Edge**: エッジでの動的品質調整
6. **Personalize**: 視聴者別レコメンデーション
7. **Kinesis**: リアルタイム視聴分析
8. **OpenSearch**: 視聴ログ検索・分析
9. **WAF + Shield**: DDoS攻撃からの保護

他の選択肢の問題点：
- **EC2 + FFmpeg + Nginx + S3 + CloudFront + ElastiCache + RDS + Lambda + API Gatewayを使用し、カスタムストリーミングアーキテクチャを構築する**: カスタム実装は1億人規模のスケーラビリティに限界
- **ECS + Docker + Kubernetes + Istio + Prometheus + Grafana + ELK Stack + Redisを使用し、コンテナベースストリーミングアーキテクチャを構築する**: コンテナベースはメディア特化機能が不足
- **Lambda + Step Functions + DynamoDB + S3 + CloudFront + API Gateway + Kinesis + SNSを使用し、サーバーレスストリーミングアーキテクチャを構築する**: サーバーレスは大規模動画処理に不適切`
  },
  {
    id: 'adv-arch-005',
    category: 'アーキテクチャ',
    question: `大手ヘルスケア企業が、統合医療プラットフォームを構築しています。以下の要件があります：

1. 病院・クリニック・薬局の統合
2. 電子カルテとPHRの連携
3. 医療画像の高速共有
4. テレヘルス・遠隔診療対応
5. HIPAA・GDPR準拠
6. 医療機器との安全な接続
7. 医療研究データの匿名化

この要件を満たすために、最も適切な統合医療アーキテクチャはどれですか？`,
    options: [
      'HealthLake + Comprehend Medical + Transcribe Medical + Connect + Chime + Macie + PrivateLink + VPC Endpoints + CloudTrail + Config + KMSを使用し、HIPAA準拠統合医療アーキテクチャを構築する',
      'RDS + Lambda + API Gateway + S3 + CloudFront + Cognito + IAM + CloudWatch + VPCを使用し、従来型医療アーキテクチャを構築する',
      'EHR + HL7 FHIR + DICOM + OAuth + SAML + PostgreSQL + Redis + Nginx + Dockerを使用し、標準準拠医療アーキテクチャを構築する',
      'Blockchain + Smart Contracts + IPFS + Ethereum + Hyperledger + Kubernetes + Microservicesを使用し、分散型医療アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `ヘルスケア企業の統合医療プラットフォームには、HealthLake + Comprehend Medical + Transcribe Medical + Connect + Chime + Macie + PrivateLink + VPC Endpoints + CloudTrail + Config + KMSの組み合わせが最適です。

理由：
1. **HealthLake**: FHIR準拠の医療データ統合
2. **Comprehend Medical**: 医療テキストの自然言語処理
3. **Transcribe Medical**: 診療音声の文字起こし
4. **Connect + Chime**: テレヘルス・遠隔診療基盤
5. **Macie**: PHI（個人健康情報）の自動検出
6. **PrivateLink**: 医療機器との安全な接続
7. **CloudTrail + Config**: HIPAA準拠監査
8. **KMS**: 医療データの暗号化管理

他の選択肢の問題点：
- **RDS + Lambda + API Gateway + S3 + CloudFront + Cognito + IAM + CloudWatch + VPCを使用し、従来型医療アーキテクチャを構築する**: 従来型アーキテクチャは医療特化機能が不足
- **EHR + HL7 FHIR + DICOM + OAuth + SAML + PostgreSQL + Redis + Nginx + Dockerを使用し、標準準拠医療アーキテクチャを構築する**: 標準準拠だがクラウドスケーラビリティに限界
- **Blockchain + Smart Contracts + IPFS + Ethereum + Hyperledger + Kubernetes + Microservicesを使用し、分散型医療アーキテクチャを構築する**: 分散型は医療業界の規制要件に不適切`
  },
  {
    id: 'adv-arch-006',
    category: 'アーキテクチャ',
    question: `大手ゲーム会社が、次世代クラウドゲーミングプラットフォームを構築しています。以下の要件があります：

1. 世界中からの低レイテンシアクセス（20ms以下）
2. 同時プレイヤー数：1000万人以上
3. ゲームストリーミングとクラウドレンダリング
4. プレイヤーデータの同期と整合性
5. チート対策とセキュリティ
6. 動的スケーリングとコスト最適化
7. ゲーム分析とプレイヤー行動予測

この要件を満たすために、最も適切なクラウドゲーミングアーキテクチャはどれですか？`,
    options: [
      'GameLift + Global Accelerator + EC2 GPU Instances + ElastiCache + DynamoDB Global Tables + Kinesis + SageMaker + CloudFront + Lambda@Edgeを使用し、クラウドゲーミング特化アーキテクチャを構築する',
      'ECS + Application Load Balancer + RDS + ElastiCache + S3 + CloudFront + Lambda + API Gatewayを使用し、コンテナベースゲーミングアーキテクチャを構築する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functions + SQS + SNSを使用し、サーバーレスゲーミングアーキテクチャを構築する',
      'Kubernetes + Docker + NVIDIA GPU + Redis + PostgreSQL + Kafka + Prometheus + Grafanaを使用し、オープンソースゲーミングアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `ゲーム会社のクラウドゲーミングプラットフォームには、GameLift + Global Accelerator + EC2 GPU Instances + ElastiCache + DynamoDB Global Tables + Kinesis + SageMaker + CloudFront + Lambda@Edgeの組み合わせが最適です。

理由：
1. **GameLift**: ゲーム専用のマネージドサービス
2. **Global Accelerator**: 20ms以下の低レイテンシ実現
3. **EC2 GPU Instances**: クラウドレンダリング処理
4. **ElastiCache**: 高速データアクセス
5. **DynamoDB Global Tables**: プレイヤーデータの同期
6. **Kinesis**: リアルタイムゲーム分析
7. **SageMaker**: プレイヤー行動予測
8. **CloudFront + Lambda@Edge**: エッジでの最適化

他の選択肢の問題点：
- **ECS + Application Load Balancer + RDS + ElastiCache + S3 + CloudFront + Lambda + API Gatewayを使用し、コンテナベースゲーミングアーキテクチャを構築する**: ECSはゲーム特化機能が不足
- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functions + SQS + SNSを使用し、サーバーレスゲーミングアーキテクチャを構築する**: サーバーレスは低レイテンシゲーミングに不適切
- **Kubernetes + Docker + NVIDIA GPU + Redis + PostgreSQL + Kafka + Prometheus + Grafanaを使用し、オープンソースゲーミングアーキテクチャを構築する**: オープンソースは1000万人規模のスケーラビリティに限界`
  },
  {
    id: 'adv-arch-007',
    category: 'アーキテクチャ',
    question: `大手物流会社が、自動運転配送システムのアーキテクチャを構築しています。以下の要件があります：

1. 自動運転車両との双方向通信
2. リアルタイム配送ルート最適化
3. 車両状態監視と予知保全
4. 配送センターとの統合
5. 交通情報・気象データ連携
6. 安全性とセキュリティ
7. 段階的な自動化導入

この要件を満たすために、最も適切な自動運転配送アーキテクチャはどれですか？`,
    options: [
      'IoT Core + Greengrass + RoboMaker + Location Service + Forecast + SageMaker + Kinesis + Timestream + Lambda + Step Functions + Direct Connectを使用し、自動運転配送特化アーキテクチャを構築する',
      'EC2 + Lambda + API Gateway + DynamoDB + S3 + CloudWatch + VPC + NAT Gatewayを使用し、従来型配送アーキテクチャを構築する',
      'EKS + Kubernetes + Istio + Prometheus + Grafana + Kafka + Redis + PostgreSQLを使用し、コンテナベース配送アーキテクチャを構築する',
      'Blockchain + Smart Contracts + IPFS + Ethereum + IoT + Edge Computing + 5Gを使用し、分散型配送アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `物流会社の自動運転配送システムには、IoT Core + Greengrass + RoboMaker + Location Service + Forecast + SageMaker + Kinesis + Timestream + Lambda + Step Functions + Direct Connectの組み合わせが最適です。

理由：
1. **IoT Core**: 自動運転車両との双方向通信
2. **Greengrass**: エッジでのリアルタイム処理
3. **RoboMaker**: 自動運転シミュレーション
4. **Location Service**: 配送ルート最適化
5. **Forecast**: 交通・気象予測
6. **SageMaker**: 予知保全モデル
7. **Kinesis**: リアルタイムデータストリーミング
8. **Timestream**: 車両データの時系列管理
9. **Direct Connect**: 配送センターとの安定接続

他の選択肢の問題点：
- **EC2 + Lambda + API Gateway + DynamoDB + S3 + CloudWatch + VPC + NAT Gatewayを使用し、従来型配送アーキテクチャを構築する**: 従来型は自動運転特化機能が不足
- **EKS + Kubernetes + Istio + Prometheus + Grafana + Kafka + Redis + PostgreSQLを使用し、コンテナベース配送アーキテクチャを構築する**: コンテナベースは自動運転の特殊要件に不適切
- **Blockchain + Smart Contracts + IPFS + Ethereum + IoT + Edge Computing + 5Gを使用し、分散型配送アーキテクチャを構築する**: 分散型は物流業界の安全性要件に不適切`
  },
  {
    id: 'adv-arch-008',
    category: 'アーキテクチャ',
    question: `大手エネルギー会社が、次世代スマートグリッドアーキテクチャを構築しています。以下の要件があります：

1. 発電所・変電所・配電網の統合制御
2. 再生可能エネルギーの変動対応
3. 電力需給のリアルタイム最適化
4. 停電予防と自動復旧
5. 電力取引とマーケット連携
6. サイバーセキュリティ対策
7. カーボンニュートラル支援

この要件を満たすために、最も適切なスマートグリッドアーキテクチャはどれですか？`,
    options: [
      'IoT Core + Greengrass + Timestream + Forecast + SageMaker + Kinesis + Lambda + Step Functions + Direct Connect + PrivateLink + GuardDuty + Configを使用し、スマートグリッド特化アーキテクチャを構築する',
      'EC2 + RDS + ElastiCache + Lambda + API Gateway + CloudWatch + VPC + Security Groupsを使用し、従来型電力アーキテクチャを構築する',
      'EKS + Kubernetes + Prometheus + Grafana + InfluxDB + MQTT + Node-RED + Redisを使用し、オープンソース電力アーキテクチャを構築する',
      'SCADA + HMI + PLC + DCS + Historian + OPC UA + Modbus + DNP3を使用し、産業制御電力アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `エネルギー会社のスマートグリッドには、IoT Core + Greengrass + Timestream + Forecast + SageMaker + Kinesis + Lambda + Step Functions + Direct Connect + PrivateLink + GuardDuty + Configの組み合わせが最適です。

理由：
1. **IoT Core**: 電力設備の統合IoT管理
2. **Greengrass**: エッジでのリアルタイム制御
3. **Timestream**: 電力時系列データの効率的管理
4. **Forecast**: 電力需給予測
5. **SageMaker**: 停電予防と最適化モデル
6. **Kinesis**: リアルタイム電力データ処理
7. **Lambda + Step Functions**: 自動復旧ワークフロー
8. **Direct Connect**: 電力設備との安定接続
9. **GuardDuty**: サイバーセキュリティ対策

他の選択肢の問題点：
- **EC2 + RDS + ElastiCache + Lambda + API Gateway + CloudWatch + VPC + Security Groupsを使用し、従来型電力アーキテクチャを構築する**: 従来型は電力業界の特殊要件に不適切
- **EKS + Kubernetes + Prometheus + Grafana + InfluxDB + MQTT + Node-RED + Redisを使用し、オープンソース電力アーキテクチャを構築する**: オープンソースは電力インフラの安定性要件に不適切
- **SCADA + HMI + PLC + DCS + Historian + OPC UA + Modbus + DNP3を使用し、産業制御電力アーキテクチャを構築する**: 産業制御のみではクラウド統合に限界`
  },
  {
    id: 'adv-arch-009',
    category: 'アーキテクチャ',
    question: `大手航空会社が、次世代航空管制支援システムを構築しています。以下の要件があります：

1. 航空管制システムとのリアルタイム連携
2. フライト最適化と遅延最小化
3. 気象データ・空域情報の統合
4. 緊急時の自動対応
5. 航空規制（ICAO、FAA）への準拠
6. 99.999%の可用性要件
7. 完全な監査証跡

この要件を満たすために、最も適切な航空管制支援アーキテクチャはどれですか？`,
    options: [
      'Direct Connect + PrivateLink + Aurora Global Database + ElastiCache + Lambda + Step Functions + Kinesis + Timestream + CloudTrail + Config + KMS + CloudHSMを使用し、航空業界特化アーキテクチャを構築する',
      'EC2 + RDS Multi-AZ + ElastiCache + Lambda + API Gateway + CloudWatch + VPC + NACLsを使用し、従来型航空アーキテクチャを構築する',
      'EKS + Kubernetes + Istio + Prometheus + Grafana + PostgreSQL + Redis + Kafkaを使用し、コンテナベース航空アーキテクチャを構築する',
      'Serverless + Lambda + DynamoDB + API Gateway + Step Functions + EventBridge + SQS + SNSを使用し、サーバーレス航空アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `航空会社の航空管制支援システムには、Direct Connect + PrivateLink + Aurora Global Database + ElastiCache + Lambda + Step Functions + Kinesis + Timestream + CloudTrail + Config + KMS + CloudHSMの組み合わせが最適です。

理由：
1. **Direct Connect**: 航空管制との専用高速接続
2. **PrivateLink**: セキュアなプライベート通信
3. **Aurora Global Database**: 99.999%可用性とグローバル同期
4. **ElastiCache**: 高速データアクセス
5. **Lambda + Step Functions**: 緊急時自動対応
6. **Kinesis**: リアルタイムフライトデータ処理
7. **Timestream**: 航空データの時系列管理
8. **CloudTrail + Config**: 航空規制準拠監査
9. **KMS + CloudHSM**: 最高レベルの暗号化

他の選択肢の問題点：
- **EC2 + RDS Multi-AZ + ElastiCache + Lambda + API Gateway + CloudWatch + VPC + NACLsを使用し、従来型航空アーキテクチャを構築する**: 従来型は航空業界の厳格な要件に不適切
- **EKS + Kubernetes + Istio + Prometheus + Grafana + PostgreSQL + Redis + Kafkaを使用し、コンテナベース航空アーキテクチャを構築する**: コンテナベースは航空管制の安定性要件に不適切
- **Serverless + Lambda + DynamoDB + API Gateway + Step Functions + EventBridge + SQS + SNSを使用し、サーバーレス航空アーキテクチャを構築する**: サーバーレスは航空管制の継続性要件に不適切`
  },
  {
    id: 'adv-arch-010',
    category: 'アーキテクチャ',
    question: `大手政府機関が、国家レベルのデジタル政府プラットフォームを構築しています。以下の要件があります：

1. 複数省庁・機関の統合
2. 国民サービスのデジタル化
3. 最高機密レベルのセキュリティ
4. 災害時の事業継続性
5. 大規模トラフィック対応
6. 多言語・多文化対応
7. 透明性と説明責任

この要件を満たすために、最も適切なデジタル政府アーキテクチャはどれですか？`,
    options: [
      'AWS GovCloud + Control Tower + Organizations + SSO + CloudHSM + GuardDuty + Macie + Config + CloudTrail + Security Hub + Transit Gateway + Direct Connectを使用し、政府特化アーキテクチャを構築する',
      'Multi-Account + IAM + KMS + VPC + CloudFront + Route 53 + RDS + Lambda + API Gatewayを使用し、標準政府アーキテクチャを構築する',
      'Kubernetes + Docker + Istio + Vault + Consul + Prometheus + Grafana + ELK Stackを使用し、オープンソース政府アーキテクチャを構築する',
      'Hybrid Cloud + VMware + OpenStack + Kubernetes + Red Hat + SUSE + Ubuntuを使用し、マルチベンダー政府アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `政府機関のデジタル政府プラットフォームには、AWS GovCloud + Control Tower + Organizations + SSO + CloudHSM + GuardDuty + Macie + Config + CloudTrail + Security Hub + Transit Gateway + Direct Connectの組み合わせが最適です。

理由：
1. **AWS GovCloud**: 政府専用の分離されたクラウド環境
2. **Control Tower**: 複数省庁の統合ガバナンス
3. **Organizations**: アカウント管理と統制
4. **SSO**: 統一認証基盤
5. **CloudHSM**: 最高機密レベルの暗号化
6. **GuardDuty + Macie**: 高度な脅威検知
7. **Config + CloudTrail**: 完全な監査証跡
8. **Security Hub**: 統合セキュリティ管理
9. **Transit Gateway**: 省庁間ネットワーク統合

他の選択肢の問題点：
- **Multi-Account + IAM + KMS + VPC + CloudFront + Route 53 + RDS + Lambda + API Gatewayを使用し、標準政府アーキテクチャを構築する**: 標準環境は政府の最高機密要件に不十分
- **Kubernetes + Docker + Istio + Vault + Consul + Prometheus + Grafana + ELK Stackを使用し、オープンソース政府アーキテクチャを構築する**: オープンソースは政府の規制要件対応が困難
- **Hybrid Cloud + VMware + OpenStack + Kubernetes + Red Hat + SUSE + Ubuntuを使用し、マルチベンダー政府アーキテクチャを構築する**: マルチベンダーは統合管理とセキュリティに課題`
  },

  // 複数選択問題
  {
    id: 'adv-arch-multi-001',
    category: 'アーキテクチャ',
    question: `グローバル展開するフィンテック企業が、マイクロサービスベースの決済プラットフォームを構築しています。以下の要件があります：

**要件：**
- 99.99%の可用性とゼロダウンタイムデプロイ
- 地域別規制要件への対応
- 1秒間に100万件の取引処理
- イベント駆動アーキテクチャの実装
- 障害の局所化と自動復旧
- 開発チーム間の独立性確保

このマイクロサービスアーキテクチャに必要な設計パターンを**3つ**選択してください。`,
    options: [
      'Circuit Breaker Pattern - 障害の連鎖防止と自動復旧',
      'Event Sourcing Pattern - イベント駆動による状態管理',
      'Saga Pattern - 分散トランザクション管理',
      'CQRS Pattern - 読み書き分離による性能最適化',
      'Bulkhead Pattern - リソース分離による障害局所化',
      'Strangler Fig Pattern - レガシーシステムの段階的移行'
    ],
    correct: [0, 1, 4],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Circuit Breaker Pattern**
- サービス間の障害連鎖を防止
- 自動的な障害検知と復旧
- 99.99%可用性要件への対応
- レスポンス時間の安定化
- 障害時のグレースフルデグラデーション

**2. Event Sourcing Pattern**
- イベント駆動アーキテクチャの実装
- 取引履歴の完全な監査証跡
- 状態の再構築と時点復旧
- 金融規制要件への対応
- 高いデータ整合性保証

**3. Bulkhead Pattern**
- リソースの物理的・論理的分離
- 障害の局所化による影響範囲限定
- 地域別規制要件への対応
- 独立したスケーリング
- 開発チーム間の独立性確保

**他の選択肢について：**
- **Saga Pattern**: 分散トランザクションには有用だが、高可用性の主要パターンではない
- **CQRS Pattern**: 性能最適化には有用だが、可用性の主要パターンではない
- **Strangler Fig Pattern**: レガシー移行には有用だが、新規構築には不適切`
  },

  {
    id: 'adv-arch-multi-002',
    category: 'アーキテクチャ',
    question: `大手メディア企業が、動画ストリーミングプラットフォームのアーキテクチャを設計しています。以下の要件があります：

**要件：**
- 全世界1億人の同時視聴者対応
- 4K/8K動画の低レイテンシ配信
- 個人化されたコンテンツレコメンデーション
- 動的な品質調整（アダプティブストリーミング）
- コンテンツ保護とDRM
- コスト効率的な運用

このストリーミングアーキテクチャに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'Amazon CloudFront - グローバルコンテンツ配信ネットワーク',
      'AWS Elemental MediaPackage - 動画パッケージング・配信',
      'Amazon Kinesis Video Streams - リアルタイム動画ストリーミング',
      'AWS Lambda@Edge - エッジコンピューティング',
      'Amazon ElastiCache - 高速キャッシング',
      'AWS Batch - バッチ処理サービス'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. Amazon CloudFront**
- 全世界のエッジロケーションからの高速配信
- 1億人規模の同時視聴者対応
- 低レイテンシ動画配信の実現
- 自動スケーリングと負荷分散
- コスト効率的なグローバル配信

**2. AWS Elemental MediaPackage**
- アダプティブストリーミングの実装
- 複数の動画品質の動的配信
- DRMによるコンテンツ保護
- HLS/DASH形式での配信最適化
- 視聴デバイスに応じた最適化

**他の選択肢について：**
- **Kinesis Video Streams**: リアルタイムストリーミングには適しているが、大規模配信には不適切
- **Lambda@Edge**: エッジ処理には有用だが、動画配信の主要機能ではない
- **ElastiCache**: キャッシングには重要だが、動画配信の主要サービスではない
- **Batch**: バッチ処理には適しているが、リアルタイム配信には不適切`
  },

  {
    id: 'adv-arch-multi-003',
    category: 'アーキテクチャ',
    question: `スタートアップ企業が、急成長に対応できるサーバーレスアーキテクチャを設計しています。以下の要件があります：

**要件：**
- 予測困難なトラフィック変動への対応
- 開発・運用コストの最小化
- 高い開発速度とデプロイ頻度
- 自動スケーリングと高可用性
- 従量課金によるコスト最適化
- マイクロサービス間の疎結合

このサーバーレスアーキテクチャに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Lambda - サーバーレス関数実行',
      'Amazon API Gateway - APIマネジメント',
      'Amazon EventBridge - イベント駆動統合',
      'AWS Step Functions - ワークフローオーケストレーション',
      'Amazon SQS - メッセージキューイング',
      'AWS Fargate - サーバーレスコンテナ'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Lambda**
- 完全サーバーレスで運用負荷ゼロ
- 自動スケーリングと高可用性
- 実行時間のみの従量課金
- 予測困難なトラフィックに最適
- 高い開発速度の実現

**2. Amazon API Gateway**
- RESTful APIの統合管理
- 自動スケーリングと負荷分散
- 認証・認可の統合機能
- APIバージョニングとデプロイ管理
- マイクロサービス間の統一インターフェース

**3. Amazon EventBridge**
- イベント駆動アーキテクチャの実装
- サービス間の疎結合実現
- 自動的なイベントルーティング
- 第三者サービスとの統合
- スケーラブルなイベント処理

**他の選択肢について：**
- **Step Functions**: ワークフロー管理には有用だが、基本的なサーバーレス要件ではない
- **SQS**: メッセージキューには重要だが、EventBridgeがより包括的
- **Fargate**: サーバーレスコンテナには有用だが、Lambdaがより軽量`
  }
]

module.exports = advancedArchitectureQuestions
