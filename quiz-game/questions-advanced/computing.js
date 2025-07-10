// AWS Solution Architect Professional 上級編 - コンピューティング問題

const advancedComputingQuestions = [
  {
    id: 'adv-comp-001',
    category: 'コンピューティング',
    question: `あなたの会社は、グローバルに展開するeコマースプラットフォームを運営しており、ピーク時には通常の10倍のトラフィックが発生します。現在のアーキテクチャでは、Application Load Balancer（ALB）の背後にAuto Scaling GroupでEC2インスタンスを配置していますが、以下の課題があります：

1. 新しいインスタンスの起動に5-7分かかり、急激なトラフィック増加に対応できない
2. インスタンスの起動コストが高く、短時間のピークに対してコスト効率が悪い
3. 地域によってレスポンス時間にばらつきがある
4. メンテナンス時のダウンタイムを最小化したい

これらの課題を解決するために、最も適切なアーキテクチャの組み合わせはどれですか？`,
    options: [
      'AWS Lambda + API Gateway + CloudFront + DynamoDB Global Tablesを使用し、サーバーレスアーキテクチャに移行する',
      'EC2 Spot Fleet + Warm Pool + Application Load Balancer + ElastiCacheを使用し、予めウォームアップされたインスタンスを準備する',
      'AWS Fargate + ECS Service + Application Load Balancer + Aurora Global Databaseを使用し、コンテナベースのアーキテクチャに移行する',
      'EC2 Reserved Instances + Predictive Scaling + Network Load Balancer + RDS Read Replicasを使用し、予測ベースのスケーリングを実装する'
    ],
    correct: 0,
    explanation: `正解は「AWS Lambda + API Gateway + CloudFront + DynamoDB Global Tablesを使用し、サーバーレスアーキテクチャに移行する」です。

この選択肢が最適な理由：

**課題解決の観点：**
1. **起動時間の問題**: Lambdaは数ミリ秒で起動し、コールドスタートでも数秒以内
2. **コスト効率**: 実際の実行時間のみ課金、アイドル時間のコストなし
3. **地域対応**: CloudFrontによる世界規模のエッジロケーション活用
4. **ダウンタイム**: サーバーレスによる自動的な高可用性

**他の選択肢の問題点：**
- **EC2 Spot Fleet + Warm Pool + Application Load Balancer + ElastiCacheを使用し、予めウォームアップされたインスタンスを準備する**: Warm Poolは改善されるが、依然としてEC2の起動時間とコストの課題が残る
- **AWS Fargate + ECS Service + Application Load Balancer + Aurora Global Databaseを使用し、コンテナベースのアーキテクチャに移行する**: Fargateは改善されるが、コンテナ起動時間とコストの課題が完全には解決されない
- **EC2 Reserved Instances + Predictive Scaling + Network Load Balancer + RDS Read Replicasを使用し、予測ベースのスケーリングを実装する**: Predictive Scalingは予測に依存し、予期しないトラフィック急増に対応できない

**アーキテクチャの利点：**
- 無限スケーラビリティ
- 地理的分散による低レイテンシ
- 運用オーバーヘッドの最小化
- 従量課金によるコスト最適化`
  },

  {
    id: 'adv-comp-002',
    category: 'コンピューティング',
    question: `大手金融機関が、レガシーなメインフレームシステムからAWSへの移行を計画しています。このシステムは以下の特徴があります：

- 24時間365日の稼働が必要（ダウンタイム許容度：年間5分以内）
- 1秒間に10,000件のトランザクション処理が必要
- データの整合性が極めて重要（ACID特性の完全な保証が必要）
- 規制要件により、特定の地域内でのデータ保存が義務付けられている
- 既存のCOBOLアプリケーションが数百本存在
- ピーク時とオフピーク時で処理量が3倍異なる

この要件を満たすために、最も適切な移行戦略とアーキテクチャはどれですか？`,
    options: [
      'AWS Mainframe Modernization + Amazon Aurora + Multi-AZ配置 + Auto Scalingを使用し、段階的にマイクロサービス化を進める',
      'Amazon EC2 Dedicated Hosts + Oracle RAC + EBS Multi-Attach + Placement Groupsを使用し、オンプレミス環境を忠実に再現する',
      'AWS Lambda + Amazon DynamoDB + API Gateway + Step Functionsを使用し、完全サーバーレスアーキテクチャに移行する',
      'Amazon EKS + Amazon RDS Proxy + ElastiCache + Application Load Balancerを使用し、コンテナベースのマイクロサービスアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `正解は「AWS Mainframe Modernization + Amazon Aurora + Multi-AZ配置 + Auto Scalingを使用し、段階的にマイクロサービス化を進める」です。

この選択肢が最適な理由：

**要件への対応：**
1. **高可用性**: Multi-AZ配置により99.99%以上の可用性を実現
2. **高性能**: Aurora Clusterにより10,000 TPSの処理能力を確保
3. **ACID特性**: Auroraは完全なACID特性をサポート
4. **規制対応**: 特定リージョン内でのデータ保存が可能
5. **レガシー対応**: AWS Mainframe Modernizationによる段階的移行
6. **スケーラビリティ**: Auto Scalingによる動的な処理能力調整

**AWS Mainframe Modernizationの利点：**
- COBOLアプリケーションの段階的移行支援
- 既存ビジネスロジックの保持
- リスクを最小化した移行戦略

**他の選択肢の問題点：**
- **Amazon EC2 Dedicated Hosts + Oracle RAC + EBS Multi-Attach + Placement Groupsを使用し、オンプレミス環境を忠実に再現する**: 高コストで運用複雑性が高い、クラウドの利点を活用できない
- **AWS Lambda + Amazon DynamoDB + API Gateway + Step Functionsを使用し、完全サーバーレスアーキテクチャに移行する**: レガシーアプリケーションの移行が困難、ACID特性の保証が困難
- **Amazon EKS + Amazon RDS Proxy + ElastiCache + Application Load Balancerを使用し、コンテナベースのマイクロサービスアーキテクチャを構築する**: COBOLアプリケーションのコンテナ化が現実的でない

**段階的移行のメリット：**
- ビジネス継続性の確保
- リスクの分散
- 段階的な技術習得
- ROIの早期実現`
  },

  {
    id: 'adv-comp-003',
    category: 'コンピューティング',
    question: `グローバル展開するゲーム会社が、リアルタイム対戦ゲームのバックエンドシステムをAWSで構築しています。このシステムには以下の要件があります：

- 世界中のプレイヤー間でのリアルタイム通信（レイテンシ50ms以下）
- 同時接続プレイヤー数：100万人以上
- ゲームセッション中の接続断は許容されない
- 地域間でのゲームデータ同期が必要
- チート対策のためのサーバーサイド検証が必須
- ゲームイベント時には通常の5倍のトラフィックが発生
- コスト効率を重視（特にアイドル時間のコスト削減）

これらの要件を満たすために、最も適切なアーキテクチャ設計はどれですか？`,
    options: [
      'Amazon GameLift + AWS Global Accelerator + ElastiCache Global Datastore + Lambda@Edgeを使用し、地理的に分散されたゲームサーバーアーキテクチャを構築する',
      'EC2 Spot Instances + Application Load Balancer + RDS Aurora Global Database + CloudFrontを使用し、コスト効率を重視したアーキテクチャを構築する',
      'AWS Fargate + API Gateway + DynamoDB Global Tables + CloudFormation StackSetsを使用し、サーバーレスベースのマルチリージョンアーキテクチャを構築する',
      'Amazon EKS + Istio Service Mesh + Amazon MQ + Route 53 Health Checksを使用し、マイクロサービスベースのアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `正解は「Amazon GameLift + AWS Global Accelerator + ElastiCache Global Datastore + Lambda@Edgeを使用し、地理的に分散されたゲームサーバーアーキテクチャを構築する」です。

この選択肢が最適な理由：

**要件への対応：**
1. **低レイテンシ**: Global Acceleratorによる最適化されたネットワーク経路
2. **大規模同時接続**: GameLiftの自動スケーリングによる100万人対応
3. **接続安定性**: GameLiftの専用ゲームサーバー管理
4. **データ同期**: ElastiCache Global Datastoreによる地域間同期
5. **サーバーサイド検証**: GameLiftでの専用ゲームロジック実行
6. **動的スケーリング**: イベント時の自動スケールアウト
7. **コスト効率**: 使用量ベースの課金とSpot Instancesサポート

**各コンポーネントの役割：**
- **GameLift**: 専用ゲームサーバーの管理と自動スケーリング
- **Global Accelerator**: 世界規模での低レイテンシ通信
- **ElastiCache Global Datastore**: リアルタイムデータの地域間同期
- **Lambda@Edge**: エッジでの軽量処理とチート検証

**他の選択肢の問題点：**
- **EC2 Spot Instances + Application Load Balancer + RDS Aurora Global Database + CloudFrontを使用し、コスト効率を重視したアーキテクチャを構築する**: Spot Instancesは接続断のリスクがあり、ゲーム用途に不適切
- **AWS Fargate + API Gateway + DynamoDB Global Tables + CloudFormation StackSetsを使用し、サーバーレスベースのマルチリージョンアーキテクチャを構築する**: API Gatewayはリアルタイム通信に適さない、WebSocketサポートが限定的
- **Amazon EKS + Istio Service Mesh + Amazon MQ + Route 53 Health Checksを使用し、マイクロサービスベースのアーキテクチャを構築する**: 複雑すぎる構成で、ゲーム特有の要件に最適化されていない

**GameLiftの特別な利点：**
- ゲーム専用の最適化
- プレイヤーマッチメイキング
- フリート管理の自動化
- チート対策機能の内蔵`
  },
  {
    id: 'adv-comp-004',
    category: 'コンピューティング',
    question: `大手金融機関が、レガシーなメインフレームシステムから AWS への移行を計画しています。現在のシステムは以下の特徴があります：

1. 24時間365日の高可用性が必要（ダウンタイム許容度：年間5分以内）
2. 厳格なコンプライアンス要件（SOX、PCI DSS、GDPR）
3. バッチ処理が夜間に大量実行される（CPU使用率が通常の20倍）
4. リアルタイム取引処理（レイテンシ要件：1ms以下）
5. データの暗号化と監査ログが必須

この要件を満たすために、最も適切なコンピューティング戦略はどれですか？`,
    options: [
      'EC2 Dedicated Hosts + Placement Groups + Enhanced Networking + AWS Nitro Systemを使用し、物理的分離とパフォーマンス最適化を実現する',
      'AWS Batch + Spot Instances + Lambda + Step Functionsを使用し、コスト効率的なサーバーレス処理を実現する',
      'ECS Fargate + Application Load Balancer + Auto Scaling + CloudWatchを使用し、コンテナベースの自動スケーリングを実現する',
      'EC2 On-Demand + Reserved Instances + Scheduled Scaling + CloudFormationを使用し、予測可能なワークロード管理を実現する'
    ],
    correct: 0,
    explanation: `金融機関の厳格な要件を満たすには、EC2 Dedicated Hosts + Placement Groups + Enhanced Networking + AWS Nitro Systemの組み合わせが最適です。

理由：
1. **Dedicated Hosts**: 物理的分離によりコンプライアンス要件を満たし、ライセンス管理も可能
2. **Placement Groups**: 低レイテンシ通信（1ms以下）を実現するクラスター配置
3. **Enhanced Networking**: SR-IOVによる高性能ネットワーキング
4. **Nitro System**: ハードウェアレベルの暗号化と高いセキュリティ

他の選択肢の問題点：
- **AWS Batch + Spot Instances + Lambda + Step Functionsを使用し、コスト効率的なサーバーレス処理を実現する**: Spot Instancesは金融取引には不適切（中断リスク）
- **ECS Fargate + Application Load Balancer + Auto Scaling + CloudWatchを使用し、コンテナベースの自動スケーリングを実現する**: Fargateは1ms以下のレイテンシ要件を満たすのが困難
- **EC2 On-Demand + Reserved Instances + Scheduled Scaling + CloudFormationを使用し、予測可能なワークロード管理を実現する**: 高可用性とレイテンシ要件を満たすには不十分`
  },
  {
    id: 'adv-comp-005',
    category: 'コンピューティング',
    question: `グローバル展開するゲーム会社が、リアルタイムマルチプレイヤーゲームのインフラを構築しています。以下の要件があります：

1. 世界中のプレイヤー間でのレイテンシを最小化（50ms以下）
2. 同時接続プレイヤー数：100万人以上
3. ゲームセッション中の接続断は許容されない
4. 地域ごとの法規制に対応（データローカライゼーション）
5. DDoS攻撃からの保護が必要
6. ゲームデータの整合性保証

この要件を満たすために、最も適切なアーキテクチャはどれですか？`,
    options: [
      'Amazon GameLift + Global Accelerator + Route 53 + CloudFront + WAFを使用し、専用ゲームインフラを構築する',
      'EC2 Auto Scaling + Application Load Balancer + ElastiCache + RDS Multi-AZを使用し、従来のWebアプリケーション構成を採用する',
      'AWS Lambda + API Gateway + DynamoDB Global Tables + CloudFrontを使用し、サーバーレス構成を採用する',
      'ECS Fargate + Network Load Balancer + Redis Cluster + Aurora Global Databaseを使用し、コンテナベース構成を採用する'
    ],
    correct: 0,
    explanation: `リアルタイムマルチプレイヤーゲームには、Amazon GameLift + Global Accelerator + Route 53 + CloudFront + WAFの組み合わせが最適です。

理由：
1. **GameLift**: ゲーム専用のマネージドサービスで、セッション管理と自動スケーリングを提供
2. **Global Accelerator**: Anycastネットワークにより世界中で低レイテンシを実現
3. **Route 53**: 地理的ルーティングでデータローカライゼーションに対応
4. **CloudFront**: 静的コンテンツの配信とDDoS保護
5. **WAF**: アプリケーションレイヤーでの攻撃防御

他の選択肢の問題点：
- **EC2 Auto Scaling + Application Load Balancer + ElastiCache + RDS Multi-AZを使用し、従来のWebアプリケーション構成を採用する**: ゲーム特有の要件（セッション管理、リアルタイム通信）に最適化されていない
- **AWS Lambda + API Gateway + DynamoDB Global Tables + CloudFrontを使用し、サーバーレス構成を採用する**: Lambdaの実行時間制限により長時間セッションに不適切
- **ECS Fargate + Network Load Balancer + Redis Cluster + Aurora Global Databaseを使用し、コンテナベース構成を採用する**: ゲーム専用機能が不足し、レイテンシ最適化が困難`
  },
  {
    id: 'adv-comp-006',
    category: 'コンピューティング',
    question: `大規模な科学研究機関が、気候変動シミュレーションのためのHPC（High Performance Computing）環境をAWSに構築しています。以下の要件があります：

1. 数千コアでの並列計算が必要
2. 計算ジョブの実行時間：数時間から数週間
3. 大容量データ（ペタバイト級）の高速I/O
4. コスト最適化が重要（研究予算の制約）
5. 計算結果の長期保存が必要
6. 研究者間でのリソース共有とスケジューリング

この要件を満たすために、最も適切なHPCアーキテクチャはどれですか？`,
    options: [
      'AWS ParallelCluster + EC2 Spot Instances + FSx for Lustre + S3 Glacier Deep Archiveを使用し、コスト効率的なHPC環境を構築する',
      'EC2 Dedicated Hosts + EBS Provisioned IOPS + EFS + S3 Standard-IAを使用し、専用リソースでの高性能環境を構築する',
      'AWS Batch + Fargate + EFS + S3 Intelligent-Tieringを使用し、サーバーレスHPC環境を構築する',
      'ECS + EC2 On-Demand + Amazon EBS gp3 + S3 Standard + CloudWatchを使用し、コンテナベースHPC環境を構築する'
    ],
    correct: 0,
    explanation: `科学研究機関のHPC要件には、AWS ParallelCluster + EC2 Spot Instances + FSx for Lustre + S3 Glacier Deep Archiveの組み合わせが最適です。

理由：
1. **ParallelCluster**: HPC専用のクラスター管理サービスで、ジョブスケジューラー（Slurm）を内蔵
2. **Spot Instances**: 最大90%のコスト削減、長時間ジョブでも中断リスクを管理可能
3. **FSx for Lustre**: 高性能並列ファイルシステムで、ペタバイト級データの高速I/O
4. **S3 Glacier Deep Archive**: 長期保存に最適な低コストストレージ

他の選択肢の問題点：
- **EC2 Dedicated Hosts + EBS Provisioned IOPS + EFS + S3 Standard-IAを使用し、専用リソースでの高性能環境を構築する**: Dedicated Hostsは高コストで、研究予算制約に不適切
- **AWS Batch + Fargate + EFS + S3 Intelligent-Tieringを使用し、サーバーレスHPC環境を構築する**: Fargateは15分の実行時間制限があり、長時間計算に不適切
- **ECS + EC2 On-Demand + Amazon EBS gp3 + S3 Standard + CloudWatchを使用し、コンテナベースHPC環境を構築する**: HPC特有の並列処理最適化が不足`
  },
  {
    id: 'adv-comp-007',
    category: 'コンピューティング',
    question: `大手メディア企業が、4K/8K動画のリアルタイム配信プラットフォームを構築しています。以下の要件があります：

1. 同時視聴者数：1000万人以上
2. 動画エンコーディング：リアルタイムで複数解像度対応
3. 世界中での低レイテンシ配信（2秒以下）
4. 動的な品質調整（アダプティブビットレート）
5. ライブイベント時の急激なトラフィック増加対応
6. コンテンツ保護（DRM）が必要

この要件を満たすために、最も適切なアーキテクチャはどれですか？`,
    options: [
      'AWS Elemental MediaLive + MediaPackage + CloudFront + Lambda@Edge + AWS Elemental MediaConvertを使用し、専用メディアサービスで構築する',
      'EC2 GPU Instances + Auto Scaling + Application Load Balancer + S3 + CloudFrontを使用し、カスタムエンコーディング環境を構築する',
      'AWS Batch + EC2 Spot Instances + EFS + CloudFront + API Gatewayを使用し、バッチ処理ベースの動画配信を構築する',
      'ECS Fargate + Application Load Balancer + ElastiCache + S3 + CloudWatchを使用し、コンテナベースの動画配信を構築する'
    ],
    correct: 0,
    explanation: `大規模動画配信プラットフォームには、AWS Elemental MediaLive + MediaPackage + CloudFront + Lambda@Edge + MediaConvertの組み合わせが最適です。

理由：
1. **MediaLive**: リアルタイム動画エンコーディングとアダプティブビットレート対応
2. **MediaPackage**: 動画パッケージングとDRM保護機能
3. **CloudFront**: グローバルCDNで低レイテンシ配信と大規模トラフィック対応
4. **Lambda@Edge**: エッジでの動的コンテンツ処理と品質調整
5. **MediaConvert**: オンデマンド動画処理

他の選択肢の問題点：
- **EC2 GPU Instances + Auto Scaling + Application Load Balancer + S3 + CloudFrontを使用し、カスタムエンコーディング環境を構築する**: カスタム実装は複雑で、メディア特有の最適化が困難
- **AWS Batch + EC2 Spot Instances + EFS + CloudFront + API Gatewayを使用し、バッチ処理ベースの動画配信を構築する**: バッチ処理はリアルタイム配信に不適切
- **ECS Fargate + Application Load Balancer + ElastiCache + S3 + CloudWatchを使用し、コンテナベースの動画配信を構築する**: 動画処理に特化した機能が不足`
  },
  {
    id: 'adv-comp-008',
    category: 'コンピューティング',
    question: `大手製造業が、IoTデバイスからのデータを処理するエッジコンピューティング環境を構築しています。以下の要件があります：

1. 工場内の数万台のIoTデバイスからのデータ処理
2. リアルタイム異常検知（100ms以内の応答）
3. ネットワーク接続が不安定な環境での動作
4. 機械学習モデルのエッジでの実行
5. セキュリティとデータプライバシーの確保
6. 中央クラウドとの同期とデータ分析

この要件を満たすために、最も適切なエッジコンピューティングアーキテクチャはどれですか？`,
    options: [
      'AWS IoT Greengrass + Lambda Functions + SageMaker Neo + AWS IoT Device Defender + AWS IoT Analyticsを使用し、統合IoTエッジ環境を構築する',
      'EC2 Outposts + Local Zones + Direct Connect + CloudWatch + AWS Configを使用し、オンプレミス拡張環境を構築する',
      'AWS Wavelength + 5G + Lambda + API Gateway + DynamoDBを使用し、モバイルエッジコンピューティング環境を構築する',
      'AWS Snow Family + DataSync + S3 + Glue + Athenaを使用し、データ転送ベースの処理環境を構築する'
    ],
    correct: 0,
    explanation: `製造業のIoTエッジコンピューティングには、AWS IoT Greengrass + Lambda Functions + SageMaker Neo + IoT Device Defender + IoT Analyticsの組み合わせが最適です。

理由：
1. **IoT Greengrass**: エッジでのローカル処理とオフライン動作をサポート
2. **Lambda Functions**: リアルタイム異常検知ロジックをエッジで実行
3. **SageMaker Neo**: 機械学習モデルをエッジデバイス用に最適化
4. **IoT Device Defender**: IoTデバイスのセキュリティ監視
5. **IoT Analytics**: 中央での大規模データ分析

他の選択肢の問題点：
- **EC2 Outposts + Local Zones + Direct Connect + CloudWatch + AWS Configを使用し、オンプレミス拡張環境を構築する**: Outpostsは大規模インフラで、工場のエッジ環境には過剰
- **AWS Wavelength + 5G + Lambda + API Gateway + DynamoDBを使用し、モバイルエッジコンピューティング環境を構築する**: Wavelengthは5G環境前提で、工場内IoTには不適切
- **AWS Snow Family + DataSync + S3 + Glue + Athenaを使用し、データ転送ベースの処理環境を構築する**: Snow Familyはデータ移行用で、リアルタイム処理に不適切`
  },
  {
    id: 'adv-comp-009',
    category: 'コンピューティング',
    question: `大手銀行が、リアルタイム不正検知システムを構築しています。以下の要件があります：

1. 取引データの即座の分析（10ms以内）
2. 機械学習モデルによる不正パターン検知
3. 1日あたり数億件の取引処理
4. 99.99%の可用性要件
5. 規制要件によるデータの地理的制限
6. 監査ログの完全性保証
7. 段階的なモデル更新とA/Bテスト

この要件を満たすために、最も適切なリアルタイム処理アーキテクチャはどれですか？`,
    options: [
      'Amazon Kinesis Data Streams + Kinesis Analytics + Lambda + SageMaker + DynamoDB + CloudTrailを使用し、ストリーミング処理環境を構築する',
      'AWS Batch + SQS + EC2 + RDS + S3 + CloudWatchを使用し、バッチ処理ベースの分析環境を構築する',
      'API Gateway + Lambda + ElastiCache + Aurora + Step Functionsを使用し、サーバーレス分析環境を構築する',
      'ECS + Application Load Balancer + Redis + PostgreSQL + CloudFormationを使用し、コンテナベース分析環境を構築する'
    ],
    correct: 0,
    explanation: `銀行のリアルタイム不正検知システムには、Amazon Kinesis Data Streams + Kinesis Analytics + Lambda + SageMaker + DynamoDB + CloudTrailの組み合わせが最適です。

理由：
1. **Kinesis Data Streams**: 数億件の取引データをリアルタイムで処理
2. **Kinesis Analytics**: SQLベースのリアルタイム分析（10ms以内の応答）
3. **Lambda**: 不正検知ロジックの実行とスケーラブルな処理
4. **SageMaker**: 機械学習モデルの管理とA/Bテスト
5. **DynamoDB**: 高速な結果保存と検索
6. **CloudTrail**: 完全な監査ログ

他の選択肢の問題点：
- **AWS Batch + SQS + EC2 + RDS + S3 + CloudWatchを使用し、バッチ処理ベースの分析環境を構築する**: バッチ処理は10ms以内の要件を満たせない
- **API Gateway + Lambda + ElastiCache + Aurora + Step Functionsを使用し、サーバーレス分析環境を構築する**: API Gatewayは数億件の処理には不適切
- **ECS + Application Load Balancer + Redis + PostgreSQL + CloudFormationを使用し、コンテナベース分析環境を構築する**: リアルタイムストリーミング処理に最適化されていない`
  },
  {
    id: 'adv-comp-010',
    category: 'コンピューティング',
    question: `大手航空会社が、フライト予約システムの現代化を行っています。以下の要件があります：

1. 世界中からの同時アクセス（ピーク時100万リクエスト/秒）
2. 座席在庫の厳密な整合性管理
3. 複数の予約チャネル（Web、モバイル、代理店）
4. 災害時の自動フェイルオーバー（RTO: 5分、RPO: 0）
5. 規制要件による7年間のデータ保持
6. 動的価格設定とパーソナライゼーション
7. 第三者システムとのリアルタイム連携

この要件を満たすために、最も適切なマイクロサービスアーキテクチャはどれですか？`,
    options: [
      'ECS Fargate + Application Load Balancer + Aurora Global Database + ElastiCache + API Gateway + Step Functionsを使用し、コンテナベースマイクロサービスを構築する',
      'Lambda + API Gateway + DynamoDB Global Tables + SQS + EventBridge + S3を使用し、サーバーレスマイクロサービスを構築する',
      'EC2 Auto Scaling + Network Load Balancer + RDS Multi-AZ + Redis Cluster + CloudFrontを使用し、従来型の3層アーキテクチャを構築する',
      'EKS + Istio + Aurora Serverless + Kafka + GraphQL + CloudWatchを使用し、Kubernetesベースマイクロサービスを構築する'
    ],
    correct: 0,
    explanation: `航空会社の予約システムには、ECS Fargate + Application Load Balancer + Aurora Global Database + ElastiCache + API Gateway + Step Functionsの組み合わせが最適です。

理由：
1. **ECS Fargate**: サーバーレスコンテナで高いスケーラビリティと運用効率
2. **Aurora Global Database**: グローバル展開とRTO/RPO要件を満たす高可用性
3. **ElastiCache**: 座席在庫の高速アクセスと整合性管理
4. **API Gateway**: 複数チャネルの統一インターフェース
5. **Step Functions**: 複雑な予約フローのオーケストレーション

他の選択肢の問題点：
- **Lambda + API Gateway + DynamoDB Global Tables + SQS + EventBridge + S3を使用し、サーバーレスマイクロサービスを構築する**: Lambdaの実行時間制限により複雑な予約処理に不適切
- **EC2 Auto Scaling + Network Load Balancer + RDS Multi-AZ + Redis Cluster + CloudFrontを使用し、従来型の3層アーキテクチャを構築する**: 3層アーキテクチャはマイクロサービス要件を満たさない
- **EKS + Istio + Aurora Serverless + Kafka + GraphQL + CloudWatchを使用し、Kubernetesベースマイクロサービスを構築する**: EKSは運用複雑性が高く、航空業界の安定性要件に不適切`
  },

  // 複数選択問題
  {
    id: 'adv-comp-multi-001',
    category: 'コンピューティング',
    question: `グローバル展開するゲーミング会社が、リアルタイム対戦ゲームのバックエンドシステムを構築しています。以下の要件があります：

**要件：**
- 世界中のプレイヤー間で50ms以下のレイテンシを実現
- 同時接続数：100万人以上
- リアルタイムデータ同期が必要
- 地域間でのゲームマッチング機能
- 高可用性（99.99%以上）
- コスト効率的な運用

このアーキテクチャを実現するために必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Global Accelerator - 世界規模でのネットワーク最適化とレイテンシ削減',
      'Amazon GameLift - リアルタイムマルチプレイヤーゲームセッション管理',
      'AWS Lambda@Edge - エッジロケーションでのゲームロジック処理',
      'Amazon ElastiCache for Redis Global Datastore - グローバルなリアルタイムデータ同期',
      'Amazon EC2 Dedicated Hosts - 専用ハードウェアでの高性能処理',
      'AWS Wavelength - 5Gネットワークエッジでの超低レイテンシ処理'
    ],
    correct: [0, 1, 3],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Global Accelerator**
- Anycastネットワークにより最適なエンドポイントへのルーティング
- AWSバックボーンネットワークを活用した低レイテンシ通信
- 自動フェイルオーバーによる高可用性

**2. Amazon GameLift**
- リアルタイムマルチプレイヤーゲーム専用のマネージドサービス
- 自動スケーリングとマッチメイキング機能
- 世界中のリージョンでのゲームセッション管理

**3. Amazon ElastiCache for Redis Global Datastore**
- 複数リージョン間でのリアルタイムデータレプリケーション
- 1秒未満のレプリケーション遅延
- プレイヤー状態やゲーム状態の同期に最適

**他の選択肢について：**
- **Lambda@Edge**: ゲームロジックには実行時間制限があり不適切
- **EC2 Dedicated Hosts**: コスト効率が悪く、要件に対してオーバースペック
- **AWS Wavelength**: 5G環境に限定され、グローバル展開には不適切`
  },

  {
    id: 'adv-comp-multi-002',
    category: 'コンピューティング',
    question: `大手製造業が、IoTデバイスからのデータを処理するシステムを構築しています。以下の要件があります：

**要件：**
- 工場内の10,000台のIoTデバイスからのデータ収集
- 1秒間に50,000件のメッセージ処理
- リアルタイム異常検知とアラート
- 機械学習による予測保全
- バッチ処理による日次レポート生成
- 99.9%の可用性とデータ損失ゼロ

このシステムアーキテクチャに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'Amazon Kinesis Data Streams - 大量のストリーミングデータの収集と処理',
      'AWS IoT Core - IoTデバイスとの安全な通信とデバイス管理',
      'Amazon SQS FIFO - メッセージの順序保証と重複排除',
      'AWS Batch - 大規模バッチ処理ジョブの実行',
      'Amazon EMR - ビッグデータ処理とSparkクラスター管理',
      'AWS Step Functions - 複雑なワークフローのオーケストレーション'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. Amazon Kinesis Data Streams**
- 1秒間に数百万件のレコードを処理可能
- リアルタイムストリーミングデータ処理に最適
- 複数のコンシューマーによる並列処理
- データの永続化と再処理が可能

**2. AWS IoT Core**
- IoTデバイス専用のマネージドサービス
- MQTT/HTTPSプロトコルでの安全な通信
- デバイス認証と認可の管理
- ルールエンジンによるデータルーティング

**他の選択肢について：**
- **SQS FIFO**: IoTデータ処理には順序保証よりもスループットが重要
- **AWS Batch**: バッチ処理には適しているが、リアルタイム処理要件を満たさない
- **Amazon EMR**: 大規模データ分析には適しているが、リアルタイム処理には不適切
- **Step Functions**: ワークフロー管理には適しているが、高スループット処理には不適切`
  },

  {
    id: 'adv-comp-multi-003',
    category: 'コンピューティング',
    question: `スタートアップ企業が、急成長するSaaSアプリケーションのインフラを構築しています。以下の要件があります：

**要件：**
- 開発チームが小規模（5名）で運用負荷を最小化したい
- トラフィックが予測困難で急激な増減がある
- マイクロサービスアーキテクチャを採用予定
- CI/CDパイプラインの自動化
- コスト最適化が重要
- 開発速度を重視

この要件を満たすために最適なAWSサービスの組み合わせを**3つ**選択してください。`,
    options: [
      'AWS Fargate - サーバーレスコンテナ実行環境',
      'Amazon ECS - コンテナオーケストレーション',
      'AWS Lambda - サーバーレス関数実行',
      'Amazon EKS - マネージドKubernetesサービス',
      'AWS CodePipeline - CI/CDパイプライン自動化',
      'Amazon EC2 Auto Scaling - 従来型インスタンス管理'
    ],
    correct: [0, 2, 4],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Fargate**
- サーバー管理不要のコンテナ実行環境
- 自動スケーリングと従量課金
- 運用負荷の大幅削減
- マイクロサービスに最適

**2. AWS Lambda**
- 完全サーバーレスで運用負荷ゼロ
- 自動スケーリングと高可用性
- 実行時間のみの課金でコスト効率が高い
- 急激なトラフィック変動に対応

**3. AWS CodePipeline**
- フルマネージドCI/CDサービス
- 他のAWSサービスとの統合が容易
- 自動化によるデプロイ効率向上
- 小規模チームでも運用可能

**他の選択肢について：**
- **Amazon ECS**: Fargateと組み合わせて使用するが、単体では運用負荷が発生
- **Amazon EKS**: Kubernetesの運用知識が必要で小規模チームには負荷が大きい
- **EC2 Auto Scaling**: サーバー管理が必要で運用負荷が高い`
  }
]

module.exports = advancedComputingQuestions
