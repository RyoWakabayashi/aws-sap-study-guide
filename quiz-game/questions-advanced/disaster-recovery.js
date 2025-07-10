// AWS Solution Architect Professional 上級編 - 災害復旧問題

const advancedDisasterRecoveryQuestions = [
  {
    id: 'adv-dr-001',
    category: '災害復旧',
    question: `大手金融機関が、次世代災害復旧システムを構築しています。以下の厳格な要件があります：

1. RTO（目標復旧時間）：5分以内
2. RPO（目標復旧時点）：0秒（データ損失ゼロ）
3. 金融取引の継続性確保
4. 複数リージョン間での同期レプリケーション
5. 金融規制（SOX、PCI DSS）への準拠
6. 自動フェイルオーバーと手動制御の両立
7. 災害復旧テストの定期実行

この要件を満たす最適な災害復旧アーキテクチャはどれですか？`,
    options: [
      'Aurora Global Database + DynamoDB Global Tables + Route 53 Health Checks + Application Recovery Controller + AWS Backup + CloudFormation StackSets + Config Rules + CloudTrailを使用し、ゼロRPO金融災害復旧システムを構築する',
      'RDS Multi-AZ + S3 Cross-Region Replication + ELB Health Checks + Lambda + CloudWatch Alarmsを使用し、従来型災害復旧システムを構築する',
      'Aurora Read Replicas + DynamoDB Point-in-Time Recovery + Route 53 Failover + EC2 Auto Scalingを使用し、基本的災害復旧システムを構築する',
      'オンプレミス + AWS Site-to-Site VPN + Direct Connect + AWS Storage Gatewayを使用し、ハイブリッド災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: `金融機関のゼロRPO災害復旧には、Aurora Global Database + DynamoDB Global Tables + Route 53 Health Checks + Application Recovery Controller + AWS Backup + CloudFormation StackSets + Config Rules + CloudTrailの組み合わせが最適です。

理由：
1. **Aurora Global Database**: 1秒未満のRPOでグローバル同期レプリケーション
2. **DynamoDB Global Tables**: マルチマスター構成でゼロRPO実現
3. **Route 53 Health Checks**: 5分以内の自動フェイルオーバー
4. **Application Recovery Controller**: 金融取引の継続性制御
5. **AWS Backup**: 規制準拠のバックアップ管理
6. **CloudFormation StackSets**: 複数リージョンでの一貫したインフラ
7. **Config Rules**: 金融規制準拠の継続監視
8. **CloudTrail**: 完全な監査証跡

災害復旧性能：
- RTO: 3-5分（自動フェイルオーバー）
- RPO: 0秒（同期レプリケーション）
- 可用性: 99.99%以上

他の選択肢の問題点：
- **RDS Multi-AZ + S3 Cross-Region Replication + ELB Health Checks + Lambda + CloudWatch Alarmsを使用し、従来型災害復旧システムを構築する**: Multi-AZは単一リージョン内のみ、RPO要件を満たせない
- **Aurora Read Replicas + DynamoDB Point-in-Time Recovery + Route 53 Failover + EC2 Auto Scalingを使用し、基本的災害復旧システムを構築する**: Read Replicasは非同期でRPO 0秒を実現できない
- **オンプレミス + AWS Site-to-Site VPN + Direct Connect + AWS Storage Gatewayを使用し、ハイブリッド災害復旧システムを構築する**: ハイブリッドは複雑性が高く、RTO要件達成困難`
  },
  {
    id: 'adv-dr-002',
    category: '災害復旧',
    question: `大手製造業が、グローバル工場の災害復旧戦略を策定しています。以下の要件があります：

1. 世界5拠点の工場システム統合
2. 生産ライン停止時間の最小化（RTO: 30分）
3. 生産データの保護（RPO: 15分）
4. IoTデバイス（数万台）の災害時復旧
5. サプライチェーンシステムとの連携維持
6. 地域災害（地震、台風等）への対応
7. 段階的復旧とビジネス継続性

この要件を満たす最適な製造業災害復旧アーキテクチャはどれですか？`,
    options: [
      'AWS Outposts + Local Zones + Aurora Global Database + S3 Cross-Region Replication + IoT Device Management + Systems Manager + Backup + Site Recovery + Direct Connect + Transit Gatewayを使用し、製造業特化災害復旧システムを構築する',
      'EC2 Auto Scaling + RDS Multi-AZ + S3 + CloudWatch + Lambda + SNSを使用し、クラウドファースト災害復旧システムを構築する',
      'VMware Cloud on AWS + vSphere Replication + NSX + vSAN + Site Recovery Managerを使用し、VMware統合災害復旧システムを構築する',
      'オンプレミス冗長化 + テープバックアップ + 手動復旧プロセスを使用し、従来型災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: `製造業のグローバル災害復旧には、AWS Outposts + Local Zones + Aurora Global Database + S3 Cross-Region Replication + IoT Device Management + Systems Manager + Backup + Site Recovery + Direct Connect + Transit Gatewayの組み合わせが最適です。

理由：
1. **AWS Outposts**: 工場内でのローカル処理継続
2. **Local Zones**: 低レイテンシでの生産システム復旧
3. **Aurora Global Database**: 生産データのグローバル同期
4. **S3 Cross-Region Replication**: 設計図・仕様書の地域間複製
5. **IoT Device Management**: 数万台デバイスの一括復旧管理
6. **Systems Manager**: 工場システムの統合管理
7. **AWS Backup**: 生産データの定期バックアップ
8. **Site Recovery**: 段階的復旧オーケストレーション
9. **Direct Connect + Transit Gateway**: 安定した拠点間接続

災害復旧性能：
- RTO: 20-30分（段階的復旧）
- RPO: 10-15分（定期同期）
- IoT復旧: 自動デバイス再接続

他の選択肢の問題点：
- **EC2 Auto Scaling + RDS Multi-AZ + S3 + CloudWatch + Lambda + SNSを使用し、クラウドファースト災害復旧システムを構築する**: クラウドファーストは工場の既存システム統合に課題
- **VMware Cloud on AWS + vSphere Replication + NSX + vSAN + Site Recovery Managerを使用し、VMware統合災害復旧システムを構築する**: VMware統合は高コストで、IoT統合に限界
- **オンプレミス冗長化 + VPN + Direct Connect + Storage Gatewayを使用し、従来型災害復旧システムを構築する**: 従来型は復旧時間が長く、現代の製造要件に不適切`
  },
  {
    id: 'adv-dr-003',
    category: '災害復旧',
    question: `大手病院グループが、医療システムの災害復旧計画を強化しています。以下の要件があります：

1. 患者の生命に関わるシステムの継続性
2. 電子カルテシステムの即座復旧（RTO: 10分）
3. 患者データの完全保護（RPO: 5分）
4. 医療機器との接続維持
5. HIPAA準拠の災害復旧
6. 複数病院間でのデータ共有継続
7. 緊急時の医療スタッフアクセス確保

この要件を満たす最適な医療災害復旧アーキテクチャはどれですか？`,
    options: [
      'Aurora Global Database + HealthLake + S3 Cross-Region Replication + Route 53 Health Checks + PrivateLink + VPC Endpoints + Macie + CloudTrail + KMS + AWS Backupを使用し、HIPAA準拠医療災害復旧システムを構築する',
      'RDS Multi-AZ + S3 + CloudFront + Lambda + API Gateway + Cognitoを使用し、標準的医療災害復旧システムを構築する',
      'DocumentDB + Atlas Search + S3 + Route 53 + CloudWatch + SNSを使用し、NoSQL医療災害復旧システムを構築する',
      'オンプレミス冗長化 + VPN + Direct Connect + Storage Gatewayを使用し、ハイブリッド医療災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: `病院グループの医療災害復旧には、Aurora Global Database + HealthLake + S3 Cross-Region Replication + Route 53 Health Checks + PrivateLink + VPC Endpoints + Macie + CloudTrail + KMS + AWS Backupの組み合わせが最適です。

理由：
1. **Aurora Global Database**: 電子カルテの高速復旧とデータ保護
2. **HealthLake**: FHIR準拠の医療データ統合管理
3. **S3 Cross-Region Replication**: 医療画像の地域間複製
4. **Route 53 Health Checks**: 10分以内の自動フェイルオーバー
5. **PrivateLink + VPC Endpoints**: 医療機器との安全な接続維持
6. **Macie**: PHI（個人健康情報）の自動保護
7. **CloudTrail**: HIPAA準拠の完全監査証跡
8. **KMS**: 医療データの暗号化管理
9. **AWS Backup**: 規制準拠のバックアップ

医療災害復旧性能：
- RTO: 8-10分（生命維持システム優先）
- RPO: 3-5分（患者データ保護）
- HIPAA準拠: 100%維持

他の選択肢の問題点：
- **RDS Multi-AZ + S3 + CloudFront + Lambda + API Gateway + Cognitoを使用し、標準的医療災害復旧システムを構築する**: Multi-AZは単一リージョン、医療継続性に限界
- **DocumentDB + Atlas Search + S3 + Route 53 + CloudWatch + SNSを使用し、NoSQL医療災害復旧システムを構築する**: NoSQLは医療データの複雑な関係性管理に不適切
- **オンプレミス冗長化 + VPN + Direct Connect + Storage Gatewayを使用し、ハイブリッド医療災害復旧システムを構築する**: ハイブリッドは復旧時間が長く、緊急医療に不適切`
  },
  {
    id: 'adv-dr-004',
    category: '災害復旧',
    question: `大手メディア企業が、ライブ配信サービスの災害復旧システムを構築しています。以下の要件があります：

1. ライブ配信の無停止継続（RTO: 30秒）
2. 配信コンテンツの損失防止（RPO: 0秒）
3. 世界中の視聴者への影響最小化
4. 配信品質の維持
5. CDNの自動切り替え
6. 配信データの即座バックアップ
7. 視聴者数1億人規模での災害対応

この要件を満たす最適なライブ配信災害復旧アーキテクチャはどれですか？`,
    options: [
      'MediaLive + MediaPackage + CloudFront + Global Accelerator + Route 53 + S3 Cross-Region Replication + Kinesis + Lambda + EventBridge + Systems Managerを使用し、ライブ配信特化災害復旧システムを構築する',
      'EC2 + FFmpeg + Nginx + S3 + CloudFront + Route 53 + Auto Scalingを使用し、カスタムライブ配信災害復旧システムを構築する',
      'ECS + Docker + Kubernetes + Istio + Prometheus + Grafanaを使用し、コンテナベースライブ配信災害復旧システムを構築する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレスライブ配信災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: `メディア企業のライブ配信災害復旧には、MediaLive + MediaPackage + CloudFront + Global Accelerator + Route 53 + S3 Cross-Region Replication + Kinesis + Lambda + EventBridge + Systems Managerの組み合わせが最適です。

理由：
1. **MediaLive**: 冗長エンコーディングによる無停止配信
2. **MediaPackage**: 配信パッケージングの自動フェイルオーバー
3. **CloudFront**: グローバルCDNでの自動切り替え
4. **Global Accelerator**: Anycastによる最適経路維持
5. **Route 53**: 30秒以内のDNSフェイルオーバー
6. **S3 Cross-Region Replication**: 配信コンテンツの即座複製
7. **Kinesis**: リアルタイム配信データストリーミング
8. **Lambda + EventBridge**: 自動復旧オーケストレーション
9. **Systems Manager**: 配信インフラの統合管理

ライブ配信災害復旧性能：
- RTO: 20-30秒（視聴者への影響最小）
- RPO: 0秒（ライブ配信継続）
- スケール: 1億人同時視聴対応

他の選択肢の問題点：
- **EC2 + FFmpeg + Nginx + S3 + CloudFront + Route 53 + Auto Scalingを使用し、カスタムライブ配信災害復旧システムを構築する**: カスタム実装は1億人規模の災害復旧に限界
- **ECS + Docker + Kubernetes + Istio + Prometheus + Grafanaを使用し、コンテナベースライブ配信災害復旧システムを構築する**: コンテナベースはライブ配信の特殊要件に不適切
- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレスライブ配信災害復旧システムを構築する**: サーバーレスは大規模ライブ配信の継続性に限界`
  },
  {
    id: 'adv-dr-005',
    category: '災害復旧',
    question: `大手ゲーム会社が、オンラインゲームの災害復旧戦略を策定しています。以下の要件があります：

1. プレイヤーセッションの継続（RTO: 1分）
2. ゲームデータの完全保護（RPO: 30秒）
3. 世界中のプレイヤーへの影響最小化
4. ゲームサーバーの自動復旧
5. プレイヤーデータの整合性保証
6. リアルタイムマッチメイキング継続
7. 同時接続100万人での災害対応

この要件を満たす最適なゲーム災害復旧アーキテクチャはどれですか？`,
    options: [
      'GameLift + DynamoDB Global Tables + ElastiCache Global Datastore + Route 53 + Global Accelerator + Kinesis + Lambda + Step Functions + CloudWatch + Systems Managerを使用し、ゲーム特化災害復旧システムを構築する',
      'EC2 Auto Scaling + RDS Multi-AZ + ElastiCache + Route 53 + CloudWatchを使用し、従来型ゲーム災害復旧システムを構築する',
      'EKS + Kubernetes + Istio + Redis + PostgreSQL + Prometheusを使用し、コンテナベースゲーム災害復旧システムを構築する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFront + SQSを使用し、サーバーレスゲーム災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: `ゲーム会社のオンライン災害復旧には、GameLift + DynamoDB Global Tables + ElastiCache Global Datastore + Route 53 + Global Accelerator + Kinesis + Lambda + Step Functions + CloudWatch + Systems Managerの組み合わせが最適です。

理由：
1. **GameLift**: ゲームサーバーの自動フェイルオーバーと復旧
2. **DynamoDB Global Tables**: プレイヤーデータのグローバル同期
3. **ElastiCache Global Datastore**: セッションデータの高速復旧
4. **Route 53**: 1分以内のDNSフェイルオーバー
5. **Global Accelerator**: プレイヤー接続の最適経路維持
6. **Kinesis**: リアルタイムゲームイベント処理
7. **Lambda + Step Functions**: 自動復旧ワークフロー
8. **CloudWatch**: ゲームサーバー監視と自動対応
9. **Systems Manager**: ゲームインフラの統合管理

ゲーム災害復旧性能：
- RTO: 45秒-1分（プレイヤーセッション継続）
- RPO: 15-30秒（ゲームデータ保護）
- スケール: 100万人同時接続対応

他の選択肢の問題点：
- **EC2 Auto Scaling + RDS Multi-AZ + ElastiCache + Route 53 + CloudWatchを使用し、従来型ゲーム災害復旧システムを構築する**: Multi-AZは単一リージョン、グローバルゲームに不適切
- **ECS + Docker + Kubernetes + Istio + Prometheus + Grafanaを使用し、コンテナベースゲーム災害復旧システムを構築する**: コンテナベースはゲーム特有の低レイテンシ要件に課題
- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレスゲーム災害復旧システムを構築する**: サーバーレスは大規模リアルタイムゲームの継続性に限界`
  },
  {
    id: 'adv-dr-006',
    category: '災害復旧',
    question: `大手物流会社が、配送システムの災害復旧計画を策定しています。以下の要件があります：

1. 配送追跡システムの継続（RTO: 15分）
2. 配送データの保護（RPO: 10分）
3. 車両位置情報の継続取得
4. 配送ルート最適化の維持
5. 顧客通知システムの継続
6. 倉庫管理システムとの連携維持
7. 災害時の緊急配送対応

この要件を満たす最適な物流災害復旧アーキテクチャはどれですか？`,
    options: [
      'IoT Core + Kinesis + DynamoDB Global Tables + Lambda + Step Functions + Route 53 + S3 Cross-Region Replication + SNS + SQS + Systems Manager + CloudWatchを使用し、物流特化災害復旧システムを構築する',
      'EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型物流災害復旧システムを構築する',
      'ECS + Application Load Balancer + Aurora + ElastiCache + S3 + Lambda + API Gatewayを使用し、コンテナベース物流災害復旧システムを構築する',
      'Serverless + Lambda + DynamoDB + API Gateway + S3 + CloudFront + EventBridgeを使用し、サーバーレス物流災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: `物流会社の配送システム災害復旧には、IoT Core + Kinesis + DynamoDB Global Tables + Lambda + Step Functions + Route 53 + S3 Cross-Region Replication + SNS + SQS + Systems Manager + CloudWatchの組み合わせが最適です。

理由：
1. **IoT Core**: 車両IoTデバイスとの継続的接続
2. **Kinesis**: リアルタイム位置情報ストリーミング
3. **DynamoDB Global Tables**: 配送データのグローバル同期
4. **Lambda + Step Functions**: 配送ルート最適化の自動復旧
5. **Route 53**: 15分以内のDNSフェイルオーバー
6. **S3 Cross-Region Replication**: 配送履歴の地域間複製
7. **SNS + SQS**: 顧客通知システムの継続
8. **Systems Manager**: 倉庫システム統合管理
9. **CloudWatch**: 配送システム監視と自動対応

物流災害復旧性能：
- RTO: 10-15分（配送継続性優先）
- RPO: 5-10分（配送データ保護）
- IoT継続性: 車両追跡維持

他の選択肢の問題点：
- **EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型物流災害復旧システムを構築する**: Multi-AZは単一リージョン、物流の地理的分散に不適切
- **ECS + Application Load Balancer + Aurora + ElastiCache + S3 + Lambda + API Gatewayを使用し、コンテナベース物流災害復旧システムを構築する**: コンテナベースは物流IoTとの統合に課題
- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + EventBridgeを使用し、サーバーレス物流災害復旧システムを構築する**: サーバーレスのみでは大規模物流システムの継続性に限界`
  },
  {
    id: 'adv-dr-007',
    category: '災害復旧',
    question: `大手エネルギー会社が、スマートグリッドの災害復旧システムを構築しています。以下の要件があります：

1. 電力供給制御の継続（RTO: 5分）
2. 電力データの完全保護（RPO: 1分）
3. 発電所・変電所との通信維持
4. スマートメーターデータ収集継続
5. 電力需給バランス制御の維持
6. 停電復旧システムの自動化
7. 重要インフラとしての高信頼性

この要件を満たす最適なスマートグリッド災害復旧アーキテクチャはどれですか？`,
    options: [
      'IoT Core + Greengrass + Timestream + Kinesis + Lambda + Step Functions + Route 53 + Direct Connect + PrivateLink + Aurora Global Database + Systems Manager + GuardDutyを使用し、重要インフラ特化災害復旧システムを構築する',
      'EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型電力災害復旧システムを構築する',
      'EKS + Kubernetes + Prometheus + Grafana + InfluxDB + Redis + PostgreSQLを使用し、オープンソース電力災害復旧システムを構築する',
      'SCADA + HMI + Historian + OPC UA + Modbus + 冗長化PLCを使用し、産業制御災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: `エネルギー会社のスマートグリッド災害復旧には、IoT Core + Greengrass + Timestream + Kinesis + Lambda + Step Functions + Route 53 + Direct Connect + PrivateLink + Aurora Global Database + Systems Manager + GuardDutyの組み合わせが最適です。

理由：
1. **IoT Core + Greengrass**: 発電所・変電所との継続通信
2. **Timestream**: 電力時系列データの高速復旧
3. **Kinesis**: リアルタイム電力データストリーミング
4. **Lambda + Step Functions**: 停電復旧の自動オーケストレーション
5. **Route 53**: 5分以内の制御システムフェイルオーバー
6. **Direct Connect**: 重要インフラとの専用接続維持
7. **PrivateLink**: セキュアな電力システム通信
8. **Aurora Global Database**: 電力データのグローバル同期
9. **Systems Manager**: 電力インフラの統合管理
10. **GuardDuty**: 重要インフラのセキュリティ監視

スマートグリッド災害復旧性能：
- RTO: 3-5分（電力供給継続優先）
- RPO: 30秒-1分（電力データ保護）
- 信頼性: 99.999%（重要インフラ要件）

他の選択肢の問題点：
- **EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型電力災害復旧システムを構築する**: 従来型は電力業界の特殊要件に不適切
- **EKS + Kubernetes + Prometheus + Grafana + InfluxDB + Redis + PostgreSQLを使用し、オープンソース電力災害復旧システムを構築する**: オープンソースは重要インフラの信頼性要件に不適切
- **SCADA + HMI + Historian + OPC UA + Modbus + 冗長化PLCを使用し、産業制御災害復旧システムを構築する**: 産業制御のみではクラウド統合とスケーラビリティに限界`
  },
  {
    id: 'adv-dr-008',
    category: '災害復旧',
    question: `大手航空会社が、航空管制連携システムの災害復旧を強化しています。以下の要件があります：

1. 航空管制との通信継続（RTO: 2分）
2. フライトデータの完全保護（RPO: 30秒）
3. 航空機との通信維持
4. フライトスケジュール管理継続
5. 緊急着陸支援システム維持
6. 航空規制（ICAO、FAA）準拠
7. 人命に関わる最高レベルの信頼性

この要件を満たす最適な航空災害復旧アーキテクチャはどれですか？`,
    options: [
      'Direct Connect + PrivateLink + Aurora Global Database + Route 53 + Global Accelerator + Kinesis + Lambda + Step Functions + CloudTrail + Config + KMS + CloudHSM + Systems Managerを使用し、航空業界特化災害復旧システムを構築する',
      'EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型航空災害復旧システムを構築する',
      'EKS + Kubernetes + Istio + Prometheus + Grafana + PostgreSQL + Redisを使用し、コンテナベース航空災害復旧システムを構築する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレス航空災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: `航空会社の航空管制連携災害復旧には、Direct Connect + PrivateLink + Aurora Global Database + Route 53 + Global Accelerator + Kinesis + Lambda + Step Functions + CloudTrail + Config + KMS + CloudHSM + Systems Managerの組み合わせが最適です。

理由：
1. **Direct Connect**: 航空管制との専用高速接続
2. **PrivateLink**: セキュアな航空システム通信
3. **Aurora Global Database**: フライトデータのグローバル同期
4. **Route 53**: 2分以内の超高速フェイルオーバー
5. **Global Accelerator**: 航空機通信の最適経路維持
6. **Kinesis**: リアルタイムフライトデータ処理
7. **Lambda + Step Functions**: 緊急対応の自動オーケストレーション
8. **CloudTrail + Config**: 航空規制準拠の監査証跡
9. **KMS + CloudHSM**: 最高レベルの暗号化
10. **Systems Manager**: 航空インフラの統合管理

航空災害復旧性能：
- RTO: 1-2分（人命優先の超高速復旧）
- RPO: 15-30秒（フライトデータ完全保護）
- 信頼性: 99.999%以上（航空安全要件）

他の選択肢の問題点：
- **EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型航空災害復旧システムを構築する**: Multi-AZは航空業界の厳格な要件に不十分
- **EKS + Kubernetes + Istio + Prometheus + Grafana + PostgreSQL + Redisを使用し、コンテナベース航空災害復旧システムを構築する**: コンテナベースは航空管制の安定性要件に不適切
- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレス航空災害復旧システムを構築する**: サーバーレスは航空システムの継続性要件に不適切`
  },
  {
    id: 'adv-dr-009',
    category: '災害復旧',
    question: `大手政府機関が、国家重要システムの災害復旧計画を策定しています。以下の要件があります：

1. 国家安全保障システムの継続（RTO: 3分）
2. 機密データの完全保護（RPO: 0秒）
3. 複数省庁間の連携維持
4. 最高機密レベルのセキュリティ
5. 国家緊急事態対応システム維持
6. 完全な監査証跡と証拠保全
7. 外部攻撃からの完全防御

この要件を満たす最適な政府機関災害復旧アーキテクチャはどれですか？`,
    options: [
      'AWS GovCloud + CloudHSM + Aurora Global Database + Route 53 + Direct Connect + PrivateLink + GuardDuty + Macie + Config + CloudTrail + Security Hub + Systems Manager + Control Towerを使用し、政府特化災害復旧システムを構築する',
      'Multi-Account + IAM + KMS + VPC + RDS Multi-AZ + S3 + CloudWatchを使用し、標準政府災害復旧システムを構築する',
      'EKS + Kubernetes + Vault + Consul + Istio + Prometheus + Grafanaを使用し、オープンソース政府災害復旧システムを構築する',
      'オンプレミス + 物理的分離 + 手動フェイルオーバー + テープバックアップを使用し、従来型政府災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: `政府機関の国家重要システム災害復旧には、AWS GovCloud + CloudHSM + Aurora Global Database + Route 53 + Direct Connect + PrivateLink + GuardDuty + Macie + Config + CloudTrail + Security Hub + Systems Manager + Control Towerの組み合わせが最適です。

理由：
1. **AWS GovCloud**: 政府専用の分離されたクラウド環境
2. **CloudHSM**: 最高機密レベルの暗号化キー管理
3. **Aurora Global Database**: 機密データのゼロRPO同期
4. **Route 53**: 3分以内の超高速フェイルオーバー
5. **Direct Connect**: 政府専用の安全な接続
6. **PrivateLink**: 省庁間の完全プライベート通信
7. **GuardDuty + Macie**: 高度な脅威検知と機密データ保護
8. **Config + CloudTrail**: 完全な監査証跡と証拠保全
9. **Security Hub**: 統合セキュリティ管理
10. **Systems Manager**: 政府インフラの統合管理
11. **Control Tower**: 複数省庁の統合ガバナンス

政府災害復旧性能：
- RTO: 2-3分（国家安全保障優先）
- RPO: 0秒（機密データ完全保護）
- セキュリティ: 最高機密レベル対応

他の選択肢の問題点：
- **Multi-Account + IAM + KMS + VPC + RDS Multi-AZ + S3 + CloudWatchを使用し、標準政府災害復旧システムを構築する**: 標準環境は政府の最高機密要件に不十分
- **ECS + Docker + Kubernetes + Istio + Prometheus + Grafanaを使用し、オープンソース政府災害復旧システムを構築する**: オープンソースは政府の規制・セキュリティ要件に不適切
- **On-Premises + Physical Isolation + Manual Failover + Tape Backupを使用し、従来型政府災害復旧システムを構築する**: 従来型は復旧時間が長く、現代の脅威に対応困難`
  },
  {
    id: 'adv-dr-010',
    category: '災害復旧',
    question: `大手保険会社が、保険金支払いシステムの災害復旧を強化しています。以下の要件があります：

1. 保険金支払い処理の継続（RTO: 20分）
2. 契約データの完全保護（RPO: 5分）
3. 災害時の大量請求処理対応
4. 顧客サービスの継続提供
5. 規制当局への報告継続
6. 不正請求検知システム維持
7. 保険業界規制（Solvency II）準拠

この要件を満たす最適な保険業界災害復旧アーキテクチャはどれですか？`,
    options: [
      'Aurora Global Database + DynamoDB Global Tables + Route 53 + Auto Scaling + Lambda + Step Functions + Kinesis + SageMaker + S3 Cross-Region Replication + Macie + CloudTrail + Config + Systems Managerを使用し、保険業界特化災害復旧システムを構築する',
      'RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + Lambda + CloudWatchを使用し、従来型保険災害復旧システムを構築する',
      'DocumentDB + S3 + Route 53 + Lambda + API Gateway + CloudFrontを使用し、NoSQL保険災害復旧システムを構築する',
      'Oracle RAC + Data Guard + GoldenGate + Exadata + ASMを使用し、Oracle統合保険災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: `保険会社の保険金支払いシステム災害復旧には、Aurora Global Database + DynamoDB Global Tables + Route 53 + Auto Scaling + Lambda + Step Functions + Kinesis + SageMaker + S3 Cross-Region Replication + Macie + CloudTrail + Config + Systems Managerの組み合わせが最適です。

理由：
1. **Aurora Global Database**: 保険契約データのグローバル同期
2. **DynamoDB Global Tables**: 保険金請求データの高速レプリケーション
3. **Route 53**: 20分以内のシステムフェイルオーバー
4. **Auto Scaling**: 災害時大量請求の自動スケーリング
5. **Lambda + Step Functions**: 保険金支払いワークフローの自動復旧
6. **Kinesis**: リアルタイム請求データ処理
7. **SageMaker**: 不正請求検知システムの継続
8. **S3 Cross-Region Replication**: 保険書類の地域間複製
9. **Macie**: 顧客情報の自動保護
10. **CloudTrail + Config**: 保険規制準拠の監査証跡
11. **Systems Manager**: 保険インフラの統合管理

保険災害復旧性能：
- RTO: 15-20分（保険金支払い継続）
- RPO: 3-5分（契約データ保護）
- スケーラビリティ: 災害時大量請求対応

他の選択肢の問題点：
- **RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + Lambda + CloudWatchを使用し、従来型保険災害復旧システムを構築する**: Multi-AZは単一リージョン、保険業界のグローバル要件に不適切
- **DocumentDB + S3 + Route 53 + Lambda + API Gateway + CloudFrontを使用し、NoSQL保険災害復旧システムを構築する**: NoSQLは保険の複雑なデータ関係性管理に不適切
- **Oracle RAC + Data Guard + GoldenGate + Exadata + ASMを使用し、Oracle統合保険災害復旧システムを構築する**: Oracle統合は高コストで、クラウドネイティブな拡張性に限界`
  },

  // 複数選択問題
  {
    id: 'adv-dr-multi-001',
    category: '災害復旧',
    question: `大手銀行が、ミッションクリティカルな勘定系システムの災害復旧戦略を策定しています。以下の要件があります：

**要件：**
- RPO（目標復旧時点）：ゼロ（データ損失許容なし）
- RTO（目標復旧時間）：5分以内
- 金融庁規制への完全準拠
- 地理的に分散した複数拠点での運用
- 24時間365日の監視体制
- 年2回の災害復旧訓練実施

この厳格な災害復旧要件を満たすために必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'Amazon Aurora Global Database - ゼロデータ損失のグローバルレプリケーション',
      'AWS Backup - 統合バックアップ・復旧管理',
      'Amazon Route 53 Application Recovery Controller - 自動フェイルオーバー制御',
      'AWS Site-to-Site VPN - セキュアな拠点間接続',
      'Amazon CloudWatch - 監視・アラート機能',
      'AWS Systems Manager - 運用自動化'
    ],
    correct: [0, 2, 4],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon Aurora Global Database**
- RPOゼロを実現する同期レプリケーション
- 複数リージョンでの自動レプリケーション
- 1秒未満のフェイルオーバー時間
- 金融業界の厳格な要件に対応
- 99.99%の可用性保証

**2. Amazon Route 53 Application Recovery Controller**
- RTO 5分以内を実現する自動フェイルオーバー
- 複数拠点間の自動切り替え制御
- ヘルスチェックによる障害検知
- 災害復旧訓練の自動化支援
- 金融規制要件への準拠

**3. Amazon CloudWatch**
- 24時間365日の統合監視
- リアルタイム障害検知とアラート
- 災害復旧メトリクスの監視
- 自動復旧トリガーの設定
- 規制要件の監査ログ提供

**他の選択肢について：**
- **AWS Backup**: 重要だがRPOゼロ要件には不十分
- **Site-to-Site VPN**: 接続には重要だが災害復旧の主要機能ではない
- **Systems Manager**: 運用自動化には有用だが災害復旧の主要要件ではない`
  },

  {
    id: 'adv-dr-multi-002',
    category: '災害復旧',
    question: `グローバル展開するeコマース企業が、ブラックフライデーなどの繁忙期を考慮した災害復旧計画を策定しています。以下の要件があります：

**要件：**
- 通常時の100倍のトラフィック処理能力
- 複数リージョンでの同時障害対応
- 顧客データの完全性保証
- 売上機会損失の最小化
- 自動復旧による運用負荷軽減
- コスト効率的な平時運用

この大規模災害復旧システムに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'AWS Global Accelerator - グローバル負荷分散とフェイルオーバー',
      'Amazon DynamoDB Global Tables - グローバル分散NoSQLデータベース',
      'AWS CloudFormation - インフラ自動復旧',
      'Amazon S3 Cross-Region Replication - データ複製',
      'AWS Lambda - サーバーレス自動復旧処理',
      'Amazon ElastiCache Global Datastore - グローバルキャッシュ'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. AWS Global Accelerator**
- 複数リージョン間の自動負荷分散
- 障害時の即座なトラフィック切り替え
- 100倍トラフィックの分散処理
- AWSバックボーンネットワークの活用
- 売上機会損失の最小化

**2. Amazon DynamoDB Global Tables**
- 複数リージョンでの自動レプリケーション
- 顧客データの完全性保証
- 無制限スケーラビリティ
- 自動フェイルオーバー機能
- コスト効率的な従量課金

**他の選択肢について：**
- **CloudFormation**: インフラ管理には重要だが、リアルタイム災害復旧には不十分
- **S3 Cross-Region Replication**: データ複製には有用だが、動的データには不適切
- **Lambda**: 自動処理には有用だが、大規模トラフィック処理の主要機能ではない
- **ElastiCache Global Datastore**: キャッシュには有用だが、主要データストアではない`
  },

  {
    id: 'adv-dr-multi-003',
    category: '災害復旧',
    question: `製造業が、工場の制御システムとERPシステムの統合災害復旧計画を策定しています。以下の要件があります：

**要件：**
- 工場制御システムの即座復旧（RTO: 1分以内）
- ERPデータの完全性保証（RPO: 15分以内）
- 複数工場間での相互バックアップ
- 災害時の生産継続計画
- 規制要件への準拠
- 段階的復旧プロセス

この製造業災害復旧システムに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Outposts - オンプレミス統合クラウドインフラ',
      'Amazon FSx - 高性能ファイルシステム',
      'AWS DataSync - データ同期・レプリケーション',
      'AWS Storage Gateway - ハイブリッドストレージ統合',
      'Amazon EBS Snapshots - ブロックストレージバックアップ',
      'AWS Wavelength - エッジコンピューティング'
    ],
    correct: [0, 2, 3],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Outposts**
- 工場内でのAWSサービス提供
- 制御システムの低レイテンシ要件対応
- RTO 1分以内の即座復旧
- オンプレミスとクラウドの統合管理
- 製造業の特殊要件への対応

**2. AWS DataSync**
- 工場間でのデータ同期・レプリケーション
- ERPデータのRPO 15分以内実現
- 自動的なデータ整合性検証
- 段階的復旧プロセスの支援
- 複数工場間の相互バックアップ

**3. AWS Storage Gateway**
- オンプレミスとクラウドの統合ストレージ
- 工場制御システムとERPの統合管理
- 災害時の透明なフェイルオーバー
- 規制要件への準拠支援
- ハイブリッド環境の最適化

**他の選択肢について：**
- **FSx**: 高性能ファイルシステムには有用だが、災害復旧の主要機能ではない
- **EBS Snapshots**: バックアップには重要だが、リアルタイム復旧には不十分
- **Wavelength**: エッジコンピューティングには有用だが、製造業の主要要件ではない`
  }
]

module.exports = advancedDisasterRecoveryQuestions
