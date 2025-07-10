// AWS Solution Architect Professional 上級編 - 統合問題ファイル
// このファイルは自動生成されます。直接編集しないでください。

const allAdvancedQuestions = [
  {
    id: 'adv-comp-001',
    category: 'コンピューティング',
    question: 'あなたの会社は、グローバルに展開するeコマースプラットフォームを運営しており、ピーク時には通常の10倍のトラフィックが発生します。現在のアーキテクチャでは、Application Load Balancer（ALB）の背後にAuto Scaling GroupでEC2インスタンスを配置していますが、以下の課題があります：\n\n1. 新しいインスタンスの起動に5-7分かかり、急激なトラフィック増加に対応できない\n2. インスタンスの起動コストが高く、短時間のピークに対してコスト効率が悪い\n3. 地域によってレスポンス時間にばらつきがある\n4. メンテナンス時のダウンタイムを最小化したい\n\nこれらの課題を解決するために、最も適切なアーキテクチャの組み合わせはどれですか？',
    options: [
      'AWS Lambda + API Gateway + CloudFront + DynamoDB Global Tablesを使用し、サーバーレスアーキテクチャに移行する',
      'EC2 Spot Fleet + Warm Pool + Application Load Balancer + ElastiCacheを使用し、予めウォームアップされたインスタンスを準備する',
      'AWS Fargate + ECS Service + Application Load Balancer + Aurora Global Databaseを使用し、コンテナベースのアーキテクチャに移行する',
      'EC2 Reserved Instances + Predictive Scaling + Network Load Balancer + RDS Read Replicasを使用し、予測ベースのスケーリングを実装する'
    ],
    correct: 0,
    explanation: '正解は「AWS Lambda + API Gateway + CloudFront + DynamoDB Global Tablesを使用し、サーバーレスアーキテクチャに移行する」です。\n\nこの選択肢が最適な理由：\n\n**課題解決の観点：**\n1. **起動時間の問題**: Lambdaは数ミリ秒で起動し、コールドスタートでも数秒以内\n2. **コスト効率**: 実際の実行時間のみ課金、アイドル時間のコストなし\n3. **地域対応**: CloudFrontによる世界規模のエッジロケーション活用\n4. **ダウンタイム**: サーバーレスによる自動的な高可用性\n\n**他の選択肢の問題点：**\n- **EC2 Spot Fleet + Warm Pool + Application Load Balancer + ElastiCacheを使用し、予めウォームアップされたインスタンスを準備する**: Warm Poolは改善されるが、依然としてEC2の起動時間とコストの課題が残る\n- **AWS Fargate + ECS Service + Application Load Balancer + Aurora Global Databaseを使用し、コンテナベースのアーキテクチャに移行する**: Fargateは改善されるが、コンテナ起動時間とコストの課題が完全には解決されない\n- **EC2 Reserved Instances + Predictive Scaling + Network Load Balancer + RDS Read Replicasを使用し、予測ベースのスケーリングを実装する**: Predictive Scalingは予測に依存し、予期しないトラフィック急増に対応できない\n\n**アーキテクチャの利点：**\n- 無限スケーラビリティ\n- 地理的分散による低レイテンシ\n- 運用オーバーヘッドの最小化\n- 従量課金によるコスト最適化'
  },
  {
    id: 'adv-comp-002',
    category: 'コンピューティング',
    question: '大手金融機関が、レガシーなメインフレームシステムからAWSへの移行を計画しています。このシステムは以下の特徴があります：\n\n- 24時間365日の稼働が必要（ダウンタイム許容度：年間5分以内）\n- 1秒間に10,000件のトランザクション処理が必要\n- データの整合性が極めて重要（ACID特性の完全な保証が必要）\n- 規制要件により、特定の地域内でのデータ保存が義務付けられている\n- 既存のCOBOLアプリケーションが数百本存在\n- ピーク時とオフピーク時で処理量が3倍異なる\n\nこの要件を満たすために、最も適切な移行戦略とアーキテクチャはどれですか？',
    options: [
      'AWS Mainframe Modernization + Amazon Aurora + Multi-AZ配置 + Auto Scalingを使用し、段階的にマイクロサービス化を進める',
      'Amazon EC2 Dedicated Hosts + Oracle RAC + EBS Multi-Attach + Placement Groupsを使用し、オンプレミス環境を忠実に再現する',
      'AWS Lambda + Amazon DynamoDB + API Gateway + Step Functionsを使用し、完全サーバーレスアーキテクチャに移行する',
      'Amazon EKS + Amazon RDS Proxy + ElastiCache + Application Load Balancerを使用し、コンテナベースのマイクロサービスアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: '正解は「AWS Mainframe Modernization + Amazon Aurora + Multi-AZ配置 + Auto Scalingを使用し、段階的にマイクロサービス化を進める」です。\n\nこの選択肢が最適な理由：\n\n**要件への対応：**\n1. **高可用性**: Multi-AZ配置により99.99%以上の可用性を実現\n2. **高性能**: Aurora Clusterにより10,000 TPSの処理能力を確保\n3. **ACID特性**: Auroraは完全なACID特性をサポート\n4. **規制対応**: 特定リージョン内でのデータ保存が可能\n5. **レガシー対応**: AWS Mainframe Modernizationによる段階的移行\n6. **スケーラビリティ**: Auto Scalingによる動的な処理能力調整\n\n**AWS Mainframe Modernizationの利点：**\n- COBOLアプリケーションの段階的移行支援\n- 既存ビジネスロジックの保持\n- リスクを最小化した移行戦略\n\n**他の選択肢の問題点：**\n- **Amazon EC2 Dedicated Hosts + Oracle RAC + EBS Multi-Attach + Placement Groupsを使用し、オンプレミス環境を忠実に再現する**: 高コストで運用複雑性が高い、クラウドの利点を活用できない\n- **AWS Lambda + Amazon DynamoDB + API Gateway + Step Functionsを使用し、完全サーバーレスアーキテクチャに移行する**: レガシーアプリケーションの移行が困難、ACID特性の保証が困難\n- **Amazon EKS + Amazon RDS Proxy + ElastiCache + Application Load Balancerを使用し、コンテナベースのマイクロサービスアーキテクチャを構築する**: COBOLアプリケーションのコンテナ化が現実的でない\n\n**段階的移行のメリット：**\n- ビジネス継続性の確保\n- リスクの分散\n- 段階的な技術習得\n- ROIの早期実現'
  },
  {
    id: 'adv-comp-003',
    category: 'コンピューティング',
    question: 'グローバル展開するゲーム会社が、リアルタイム対戦ゲームのバックエンドシステムをAWSで構築しています。このシステムには以下の要件があります：\n\n- 世界中のプレイヤー間でのリアルタイム通信（レイテンシ50ms以下）\n- 同時接続プレイヤー数：100万人以上\n- ゲームセッション中の接続断は許容されない\n- 地域間でのゲームデータ同期が必要\n- チート対策のためのサーバーサイド検証が必須\n- ゲームイベント時には通常の5倍のトラフィックが発生\n- コスト効率を重視（特にアイドル時間のコスト削減）\n\nこれらの要件を満たすために、最も適切なアーキテクチャ設計はどれですか？',
    options: [
      'Amazon GameLift + AWS Global Accelerator + ElastiCache Global Datastore + Lambda@Edgeを使用し、地理的に分散されたゲームサーバーアーキテクチャを構築する',
      'EC2 Spot Instances + Application Load Balancer + RDS Aurora Global Database + CloudFrontを使用し、コスト効率を重視したアーキテクチャを構築する',
      'AWS Fargate + API Gateway + DynamoDB Global Tables + CloudFormation StackSetsを使用し、サーバーレスベースのマルチリージョンアーキテクチャを構築する',
      'Amazon EKS + Istio Service Mesh + Amazon MQ + Route 53 Health Checksを使用し、マイクロサービスベースのアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: '正解は「Amazon GameLift + AWS Global Accelerator + ElastiCache Global Datastore + Lambda@Edgeを使用し、地理的に分散されたゲームサーバーアーキテクチャを構築する」です。\n\nこの選択肢が最適な理由：\n\n**要件への対応：**\n1. **低レイテンシ**: Global Acceleratorによる最適化されたネットワーク経路\n2. **大規模同時接続**: GameLiftの自動スケーリングによる100万人対応\n3. **接続安定性**: GameLiftの専用ゲームサーバー管理\n4. **データ同期**: ElastiCache Global Datastoreによる地域間同期\n5. **サーバーサイド検証**: GameLiftでの専用ゲームロジック実行\n6. **動的スケーリング**: イベント時の自動スケールアウト\n7. **コスト効率**: 使用量ベースの課金とSpot Instancesサポート\n\n**各コンポーネントの役割：**\n- **GameLift**: 専用ゲームサーバーの管理と自動スケーリング\n- **Global Accelerator**: 世界規模での低レイテンシ通信\n- **ElastiCache Global Datastore**: リアルタイムデータの地域間同期\n- **Lambda@Edge**: エッジでの軽量処理とチート検証\n\n**他の選択肢の問題点：**\n- **EC2 Spot Instances + Application Load Balancer + RDS Aurora Global Database + CloudFrontを使用し、コスト効率を重視したアーキテクチャを構築する**: Spot Instancesは接続断のリスクがあり、ゲーム用途に不適切\n- **AWS Fargate + API Gateway + DynamoDB Global Tables + CloudFormation StackSetsを使用し、サーバーレスベースのマルチリージョンアーキテクチャを構築する**: API Gatewayはリアルタイム通信に適さない、WebSocketサポートが限定的\n- **Amazon EKS + Istio Service Mesh + Amazon MQ + Route 53 Health Checksを使用し、マイクロサービスベースのアーキテクチャを構築する**: 複雑すぎる構成で、ゲーム特有の要件に最適化されていない\n\n**GameLiftの特別な利点：**\n- ゲーム専用の最適化\n- プレイヤーマッチメイキング\n- フリート管理の自動化\n- チート対策機能の内蔵'
  },
  {
    id: 'adv-comp-004',
    category: 'コンピューティング',
    question: '大手金融機関が、レガシーなメインフレームシステムから AWS への移行を計画しています。現在のシステムは以下の特徴があります：\n\n1. 24時間365日の高可用性が必要（ダウンタイム許容度：年間5分以内）\n2. 厳格なコンプライアンス要件（SOX、PCI DSS、GDPR）\n3. バッチ処理が夜間に大量実行される（CPU使用率が通常の20倍）\n4. リアルタイム取引処理（レイテンシ要件：1ms以下）\n5. データの暗号化と監査ログが必須\n\nこの要件を満たすために、最も適切なコンピューティング戦略はどれですか？',
    options: [
      'EC2 Dedicated Hosts + Placement Groups + Enhanced Networking + AWS Nitro Systemを使用し、物理的分離とパフォーマンス最適化を実現する',
      'AWS Batch + Spot Instances + Lambda + Step Functionsを使用し、コスト効率的なサーバーレス処理を実現する',
      'ECS Fargate + Application Load Balancer + Auto Scaling + CloudWatchを使用し、コンテナベースの自動スケーリングを実現する',
      'EC2 On-Demand + Reserved Instances + Scheduled Scaling + CloudFormationを使用し、予測可能なワークロード管理を実現する'
    ],
    correct: 0,
    explanation: '金融機関の厳格な要件を満たすには、EC2 Dedicated Hosts + Placement Groups + Enhanced Networking + AWS Nitro Systemの組み合わせが最適です。\n\n理由：\n1. **Dedicated Hosts**: 物理的分離によりコンプライアンス要件を満たし、ライセンス管理も可能\n2. **Placement Groups**: 低レイテンシ通信（1ms以下）を実現するクラスター配置\n3. **Enhanced Networking**: SR-IOVによる高性能ネットワーキング\n4. **Nitro System**: ハードウェアレベルの暗号化と高いセキュリティ\n\n他の選択肢の問題点：\n- **AWS Batch + Spot Instances + Lambda + Step Functionsを使用し、コスト効率的なサーバーレス処理を実現する**: Spot Instancesは金融取引には不適切（中断リスク）\n- **ECS Fargate + Application Load Balancer + Auto Scaling + CloudWatchを使用し、コンテナベースの自動スケーリングを実現する**: Fargateは1ms以下のレイテンシ要件を満たすのが困難\n- **EC2 On-Demand + Reserved Instances + Scheduled Scaling + CloudFormationを使用し、予測可能なワークロード管理を実現する**: 高可用性とレイテンシ要件を満たすには不十分'
  },
  {
    id: 'adv-comp-005',
    category: 'コンピューティング',
    question: 'グローバル展開するゲーム会社が、リアルタイムマルチプレイヤーゲームのインフラを構築しています。以下の要件があります：\n\n1. 世界中のプレイヤー間でのレイテンシを最小化（50ms以下）\n2. 同時接続プレイヤー数：100万人以上\n3. ゲームセッション中の接続断は許容されない\n4. 地域ごとの法規制に対応（データローカライゼーション）\n5. DDoS攻撃からの保護が必要\n6. ゲームデータの整合性保証\n\nこの要件を満たすために、最も適切なアーキテクチャはどれですか？',
    options: [
      'Amazon GameLift + Global Accelerator + Route 53 + CloudFront + WAFを使用し、専用ゲームインフラを構築する',
      'EC2 Auto Scaling + Application Load Balancer + ElastiCache + RDS Multi-AZを使用し、従来のWebアプリケーション構成を採用する',
      'AWS Lambda + API Gateway + DynamoDB Global Tables + CloudFrontを使用し、サーバーレス構成を採用する',
      'ECS Fargate + Network Load Balancer + Redis Cluster + Aurora Global Databaseを使用し、コンテナベース構成を採用する'
    ],
    correct: 0,
    explanation: 'リアルタイムマルチプレイヤーゲームには、Amazon GameLift + Global Accelerator + Route 53 + CloudFront + WAFの組み合わせが最適です。\n\n理由：\n1. **GameLift**: ゲーム専用のマネージドサービスで、セッション管理と自動スケーリングを提供\n2. **Global Accelerator**: Anycastネットワークにより世界中で低レイテンシを実現\n3. **Route 53**: 地理的ルーティングでデータローカライゼーションに対応\n4. **CloudFront**: 静的コンテンツの配信とDDoS保護\n5. **WAF**: アプリケーションレイヤーでの攻撃防御\n\n他の選択肢の問題点：\n- **EC2 Auto Scaling + Application Load Balancer + ElastiCache + RDS Multi-AZを使用し、従来のWebアプリケーション構成を採用する**: ゲーム特有の要件（セッション管理、リアルタイム通信）に最適化されていない\n- **AWS Lambda + API Gateway + DynamoDB Global Tables + CloudFrontを使用し、サーバーレス構成を採用する**: Lambdaの実行時間制限により長時間セッションに不適切\n- **ECS Fargate + Network Load Balancer + Redis Cluster + Aurora Global Databaseを使用し、コンテナベース構成を採用する**: ゲーム専用機能が不足し、レイテンシ最適化が困難'
  },
  {
    id: 'adv-comp-006',
    category: 'コンピューティング',
    question: '大規模な科学研究機関が、気候変動シミュレーションのためのHPC（High Performance Computing）環境をAWSに構築しています。以下の要件があります：\n\n1. 数千コアでの並列計算が必要\n2. 計算ジョブの実行時間：数時間から数週間\n3. 大容量データ（ペタバイト級）の高速I/O\n4. コスト最適化が重要（研究予算の制約）\n5. 計算結果の長期保存が必要\n6. 研究者間でのリソース共有とスケジューリング\n\nこの要件を満たすために、最も適切なHPCアーキテクチャはどれですか？',
    options: [
      'AWS ParallelCluster + EC2 Spot Instances + FSx for Lustre + S3 Glacier Deep Archiveを使用し、コスト効率的なHPC環境を構築する',
      'EC2 Dedicated Hosts + EBS Provisioned IOPS + EFS + S3 Standard-IAを使用し、専用リソースでの高性能環境を構築する',
      'AWS Batch + Fargate + EFS + S3 Intelligent-Tieringを使用し、サーバーレスHPC環境を構築する',
      'ECS + EC2 On-Demand + Amazon EBS gp3 + S3 Standard + CloudWatchを使用し、コンテナベースHPC環境を構築する'
    ],
    correct: 0,
    explanation: '科学研究機関のHPC要件には、AWS ParallelCluster + EC2 Spot Instances + FSx for Lustre + S3 Glacier Deep Archiveの組み合わせが最適です。\n\n理由：\n1. **ParallelCluster**: HPC専用のクラスター管理サービスで、ジョブスケジューラー（Slurm）を内蔵\n2. **Spot Instances**: 最大90%のコスト削減、長時間ジョブでも中断リスクを管理可能\n3. **FSx for Lustre**: 高性能並列ファイルシステムで、ペタバイト級データの高速I/O\n4. **S3 Glacier Deep Archive**: 長期保存に最適な低コストストレージ\n\n他の選択肢の問題点：\n- **EC2 Dedicated Hosts + EBS Provisioned IOPS + EFS + S3 Standard-IAを使用し、専用リソースでの高性能環境を構築する**: Dedicated Hostsは高コストで、研究予算制約に不適切\n- **AWS Batch + Fargate + EFS + S3 Intelligent-Tieringを使用し、サーバーレスHPC環境を構築する**: Fargateは15分の実行時間制限があり、長時間計算に不適切\n- **ECS + EC2 On-Demand + Amazon EBS gp3 + S3 Standard + CloudWatchを使用し、コンテナベースHPC環境を構築する**: HPC特有の並列処理最適化が不足'
  },
  {
    id: 'adv-comp-007',
    category: 'コンピューティング',
    question: '大手メディア企業が、4K/8K動画のリアルタイム配信プラットフォームを構築しています。以下の要件があります：\n\n1. 同時視聴者数：1000万人以上\n2. 動画エンコーディング：リアルタイムで複数解像度対応\n3. 世界中での低レイテンシ配信（2秒以下）\n4. 動的な品質調整（アダプティブビットレート）\n5. ライブイベント時の急激なトラフィック増加対応\n6. コンテンツ保護（DRM）が必要\n\nこの要件を満たすために、最も適切なアーキテクチャはどれですか？',
    options: [
      'AWS Elemental MediaLive + MediaPackage + CloudFront + Lambda@Edge + AWS Elemental MediaConvertを使用し、専用メディアサービスで構築する',
      'EC2 GPU Instances + Auto Scaling + Application Load Balancer + S3 + CloudFrontを使用し、カスタムエンコーディング環境を構築する',
      'AWS Batch + EC2 Spot Instances + EFS + CloudFront + API Gatewayを使用し、バッチ処理ベースの動画配信を構築する',
      'ECS Fargate + Application Load Balancer + ElastiCache + S3 + CloudWatchを使用し、コンテナベースの動画配信を構築する'
    ],
    correct: 0,
    explanation: '大規模動画配信プラットフォームには、AWS Elemental MediaLive + MediaPackage + CloudFront + Lambda@Edge + MediaConvertの組み合わせが最適です。\n\n理由：\n1. **MediaLive**: リアルタイム動画エンコーディングとアダプティブビットレート対応\n2. **MediaPackage**: 動画パッケージングとDRM保護機能\n3. **CloudFront**: グローバルCDNで低レイテンシ配信と大規模トラフィック対応\n4. **Lambda@Edge**: エッジでの動的コンテンツ処理と品質調整\n5. **MediaConvert**: オンデマンド動画処理\n\n他の選択肢の問題点：\n- **EC2 GPU Instances + Auto Scaling + Application Load Balancer + S3 + CloudFrontを使用し、カスタムエンコーディング環境を構築する**: カスタム実装は複雑で、メディア特有の最適化が困難\n- **AWS Batch + EC2 Spot Instances + EFS + CloudFront + API Gatewayを使用し、バッチ処理ベースの動画配信を構築する**: バッチ処理はリアルタイム配信に不適切\n- **ECS Fargate + Application Load Balancer + ElastiCache + S3 + CloudWatchを使用し、コンテナベースの動画配信を構築する**: 動画処理に特化した機能が不足'
  },
  {
    id: 'adv-comp-008',
    category: 'コンピューティング',
    question: '大手製造業が、IoTデバイスからのデータを処理するエッジコンピューティング環境を構築しています。以下の要件があります：\n\n1. 工場内の数万台のIoTデバイスからのデータ処理\n2. リアルタイム異常検知（100ms以内の応答）\n3. ネットワーク接続が不安定な環境での動作\n4. 機械学習モデルのエッジでの実行\n5. セキュリティとデータプライバシーの確保\n6. 中央クラウドとの同期とデータ分析\n\nこの要件を満たすために、最も適切なエッジコンピューティングアーキテクチャはどれですか？',
    options: [
      'AWS IoT Greengrass + Lambda Functions + SageMaker Neo + AWS IoT Device Defender + AWS IoT Analyticsを使用し、統合IoTエッジ環境を構築する',
      'EC2 Outposts + Local Zones + Direct Connect + CloudWatch + AWS Configを使用し、オンプレミス拡張環境を構築する',
      'AWS Wavelength + 5G + Lambda + API Gateway + DynamoDBを使用し、モバイルエッジコンピューティング環境を構築する',
      'AWS Snow Family + DataSync + S3 + Glue + Athenaを使用し、データ転送ベースの処理環境を構築する'
    ],
    correct: 0,
    explanation: '製造業のIoTエッジコンピューティングには、AWS IoT Greengrass + Lambda Functions + SageMaker Neo + IoT Device Defender + IoT Analyticsの組み合わせが最適です。\n\n理由：\n1. **IoT Greengrass**: エッジでのローカル処理とオフライン動作をサポート\n2. **Lambda Functions**: リアルタイム異常検知ロジックをエッジで実行\n3. **SageMaker Neo**: 機械学習モデルをエッジデバイス用に最適化\n4. **IoT Device Defender**: IoTデバイスのセキュリティ監視\n5. **IoT Analytics**: 中央での大規模データ分析\n\n他の選択肢の問題点：\n- **EC2 Outposts + Local Zones + Direct Connect + CloudWatch + AWS Configを使用し、オンプレミス拡張環境を構築する**: Outpostsは大規模インフラで、工場のエッジ環境には過剰\n- **AWS Wavelength + 5G + Lambda + API Gateway + DynamoDBを使用し、モバイルエッジコンピューティング環境を構築する**: Wavelengthは5G環境前提で、工場内IoTには不適切\n- **AWS Snow Family + DataSync + S3 + Glue + Athenaを使用し、データ転送ベースの処理環境を構築する**: Snow Familyはデータ移行用で、リアルタイム処理に不適切'
  },
  {
    id: 'adv-comp-009',
    category: 'コンピューティング',
    question: '大手銀行が、リアルタイム不正検知システムを構築しています。以下の要件があります：\n\n1. 取引データの即座の分析（10ms以内）\n2. 機械学習モデルによる不正パターン検知\n3. 1日あたり数億件の取引処理\n4. 99.99%の可用性要件\n5. 規制要件によるデータの地理的制限\n6. 監査ログの完全性保証\n7. 段階的なモデル更新とA/Bテスト\n\nこの要件を満たすために、最も適切なリアルタイム処理アーキテクチャはどれですか？',
    options: [
      'Amazon Kinesis Data Streams + Kinesis Analytics + Lambda + SageMaker + DynamoDB + CloudTrailを使用し、ストリーミング処理環境を構築する',
      'AWS Batch + SQS + EC2 + RDS + S3 + CloudWatchを使用し、バッチ処理ベースの分析環境を構築する',
      'API Gateway + Lambda + ElastiCache + Aurora + Step Functionsを使用し、サーバーレス分析環境を構築する',
      'ECS + Application Load Balancer + Redis + PostgreSQL + CloudFormationを使用し、コンテナベース分析環境を構築する'
    ],
    correct: 0,
    explanation: '銀行のリアルタイム不正検知システムには、Amazon Kinesis Data Streams + Kinesis Analytics + Lambda + SageMaker + DynamoDB + CloudTrailの組み合わせが最適です。\n\n理由：\n1. **Kinesis Data Streams**: 数億件の取引データをリアルタイムで処理\n2. **Kinesis Analytics**: SQLベースのリアルタイム分析（10ms以内の応答）\n3. **Lambda**: 不正検知ロジックの実行とスケーラブルな処理\n4. **SageMaker**: 機械学習モデルの管理とA/Bテスト\n5. **DynamoDB**: 高速な結果保存と検索\n6. **CloudTrail**: 完全な監査ログ\n\n他の選択肢の問題点：\n- **AWS Batch + SQS + EC2 + RDS + S3 + CloudWatchを使用し、バッチ処理ベースの分析環境を構築する**: バッチ処理は10ms以内の要件を満たせない\n- **API Gateway + Lambda + ElastiCache + Aurora + Step Functionsを使用し、サーバーレス分析環境を構築する**: API Gatewayは数億件の処理には不適切\n- **ECS + Application Load Balancer + Redis + PostgreSQL + CloudFormationを使用し、コンテナベース分析環境を構築する**: リアルタイムストリーミング処理に最適化されていない'
  },
  {
    id: 'adv-comp-010',
    category: 'コンピューティング',
    question: '大手航空会社が、フライト予約システムの現代化を行っています。以下の要件があります：\n\n1. 世界中からの同時アクセス（ピーク時100万リクエスト/秒）\n2. 座席在庫の厳密な整合性管理\n3. 複数の予約チャネル（Web、モバイル、代理店）\n4. 災害時の自動フェイルオーバー（RTO: 5分、RPO: 0）\n5. 規制要件による7年間のデータ保持\n6. 動的価格設定とパーソナライゼーション\n7. 第三者システムとのリアルタイム連携\n\nこの要件を満たすために、最も適切なマイクロサービスアーキテクチャはどれですか？',
    options: [
      'ECS Fargate + Application Load Balancer + Aurora Global Database + ElastiCache + API Gateway + Step Functionsを使用し、コンテナベースマイクロサービスを構築する',
      'Lambda + API Gateway + DynamoDB Global Tables + SQS + EventBridge + S3を使用し、サーバーレスマイクロサービスを構築する',
      'EC2 Auto Scaling + Network Load Balancer + RDS Multi-AZ + Redis Cluster + CloudFrontを使用し、従来型の3層アーキテクチャを構築する',
      'EKS + Istio + Aurora Serverless + Kafka + GraphQL + CloudWatchを使用し、Kubernetesベースマイクロサービスを構築する'
    ],
    correct: 0,
    explanation: '航空会社の予約システムには、ECS Fargate + Application Load Balancer + Aurora Global Database + ElastiCache + API Gateway + Step Functionsの組み合わせが最適です。\n\n理由：\n1. **ECS Fargate**: サーバーレスコンテナで高いスケーラビリティと運用効率\n2. **Aurora Global Database**: グローバル展開とRTO/RPO要件を満たす高可用性\n3. **ElastiCache**: 座席在庫の高速アクセスと整合性管理\n4. **API Gateway**: 複数チャネルの統一インターフェース\n5. **Step Functions**: 複雑な予約フローのオーケストレーション\n\n他の選択肢の問題点：\n- **Lambda + API Gateway + DynamoDB Global Tables + SQS + EventBridge + S3を使用し、サーバーレスマイクロサービスを構築する**: Lambdaの実行時間制限により複雑な予約処理に不適切\n- **EC2 Auto Scaling + Network Load Balancer + RDS Multi-AZ + Redis Cluster + CloudFrontを使用し、従来型の3層アーキテクチャを構築する**: 3層アーキテクチャはマイクロサービス要件を満たさない\n- **EKS + Istio + Aurora Serverless + Kafka + GraphQL + CloudWatchを使用し、Kubernetesベースマイクロサービスを構築する**: EKSは運用複雑性が高く、航空業界の安定性要件に不適切'
  },
  {
    id: 'adv-comp-multi-001',
    category: 'コンピューティング',
    question: 'グローバル展開するゲーミング会社が、リアルタイム対戦ゲームのバックエンドシステムを構築しています。以下の要件があります：\n\n**要件：**\n- 世界中のプレイヤー間で50ms以下のレイテンシを実現\n- 同時接続数：100万人以上\n- リアルタイムデータ同期が必要\n- 地域間でのゲームマッチング機能\n- 高可用性（99.99%以上）\n- コスト効率的な運用\n\nこのアーキテクチャを実現するために必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Global Accelerator - 世界規模でのネットワーク最適化とレイテンシ削減',
      'Amazon GameLift - リアルタイムマルチプレイヤーゲームセッション管理',
      'AWS Lambda@Edge - エッジロケーションでのゲームロジック処理',
      'Amazon ElastiCache for Redis Global Datastore - グローバルなリアルタイムデータ同期',
      'Amazon EC2 Dedicated Hosts - 専用ハードウェアでの高性能処理',
      'AWS Wavelength - 5Gネットワークエッジでの超低レイテンシ処理'
    ],
    correct: [
      0,
      1,
      3
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Global Accelerator**\n- Anycastネットワークにより最適なエンドポイントへのルーティング\n- AWSバックボーンネットワークを活用した低レイテンシ通信\n- 自動フェイルオーバーによる高可用性\n\n**2. Amazon GameLift**\n- リアルタイムマルチプレイヤーゲーム専用のマネージドサービス\n- 自動スケーリングとマッチメイキング機能\n- 世界中のリージョンでのゲームセッション管理\n\n**3. Amazon ElastiCache for Redis Global Datastore**\n- 複数リージョン間でのリアルタイムデータレプリケーション\n- 1秒未満のレプリケーション遅延\n- プレイヤー状態やゲーム状態の同期に最適\n\n**他の選択肢について：**\n- **Lambda@Edge**: ゲームロジックには実行時間制限があり不適切\n- **EC2 Dedicated Hosts**: コスト効率が悪く、要件に対してオーバースペック\n- **AWS Wavelength**: 5G環境に限定され、グローバル展開には不適切'
  },
  {
    id: 'adv-comp-multi-002',
    category: 'コンピューティング',
    question: '大手製造業が、IoTデバイスからのデータを処理するシステムを構築しています。以下の要件があります：\n\n**要件：**\n- 工場内の10,000台のIoTデバイスからのデータ収集\n- 1秒間に50,000件のメッセージ処理\n- リアルタイム異常検知とアラート\n- 機械学習による予測保全\n- バッチ処理による日次レポート生成\n- 99.9%の可用性とデータ損失ゼロ\n\nこのシステムアーキテクチャに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'Amazon Kinesis Data Streams - 大量のストリーミングデータの収集と処理',
      'AWS IoT Core - IoTデバイスとの安全な通信とデバイス管理',
      'Amazon SQS FIFO - メッセージの順序保証と重複排除',
      'AWS Batch - 大規模バッチ処理ジョブの実行',
      'Amazon EMR - ビッグデータ処理とSparkクラスター管理',
      'AWS Step Functions - 複雑なワークフローのオーケストレーション'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. Amazon Kinesis Data Streams**\n- 1秒間に数百万件のレコードを処理可能\n- リアルタイムストリーミングデータ処理に最適\n- 複数のコンシューマーによる並列処理\n- データの永続化と再処理が可能\n\n**2. AWS IoT Core**\n- IoTデバイス専用のマネージドサービス\n- MQTT/HTTPSプロトコルでの安全な通信\n- デバイス認証と認可の管理\n- ルールエンジンによるデータルーティング\n\n**他の選択肢について：**\n- **SQS FIFO**: IoTデータ処理には順序保証よりもスループットが重要\n- **AWS Batch**: バッチ処理には適しているが、リアルタイム処理要件を満たさない\n- **Amazon EMR**: 大規模データ分析には適しているが、リアルタイム処理には不適切\n- **Step Functions**: ワークフロー管理には適しているが、高スループット処理には不適切'
  },
  {
    id: 'adv-comp-multi-003',
    category: 'コンピューティング',
    question: 'スタートアップ企業が、急成長するSaaSアプリケーションのインフラを構築しています。以下の要件があります：\n\n**要件：**\n- 開発チームが小規模（5名）で運用負荷を最小化したい\n- トラフィックが予測困難で急激な増減がある\n- マイクロサービスアーキテクチャを採用予定\n- CI/CDパイプラインの自動化\n- コスト最適化が重要\n- 開発速度を重視\n\nこの要件を満たすために最適なAWSサービスの組み合わせを**3つ**選択してください。',
    options: [
      'AWS Fargate - サーバーレスコンテナ実行環境',
      'Amazon ECS - コンテナオーケストレーション',
      'AWS Lambda - サーバーレス関数実行',
      'Amazon EKS - マネージドKubernetesサービス',
      'AWS CodePipeline - CI/CDパイプライン自動化',
      'Amazon EC2 Auto Scaling - 従来型インスタンス管理'
    ],
    correct: [
      0,
      2,
      4
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Fargate**\n- サーバー管理不要のコンテナ実行環境\n- 自動スケーリングと従量課金\n- 運用負荷の大幅削減\n- マイクロサービスに最適\n\n**2. AWS Lambda**\n- 完全サーバーレスで運用負荷ゼロ\n- 自動スケーリングと高可用性\n- 実行時間のみの課金でコスト効率が高い\n- 急激なトラフィック変動に対応\n\n**3. AWS CodePipeline**\n- フルマネージドCI/CDサービス\n- 他のAWSサービスとの統合が容易\n- 自動化によるデプロイ効率向上\n- 小規模チームでも運用可能\n\n**他の選択肢について：**\n- **Amazon ECS**: Fargateと組み合わせて使用するが、単体では運用負荷が発生\n- **Amazon EKS**: Kubernetesの運用知識が必要で小規模チームには負荷が大きい\n- **EC2 Auto Scaling**: サーバー管理が必要で運用負荷が高い'
  },
  {
    id: 'adv-storage-001',
    category: 'ストレージ',
    question: '大手メディア企業が、4K/8K動画コンテンツの配信プラットフォームをAWSで構築しています。このシステムには以下の要件と課題があります：\n\n- 動画ファイルサイズ：1本あたり50GB-500GB\n- 月間新規アップロード：10,000本以上\n- 世界中への配信が必要（150カ国以上）\n- アップロード完了から配信開始まで30分以内\n- 過去3年分のコンテンツへの即座アクセスが必要\n- 3年以上前のコンテンツは年に数回程度のアクセス\n- 法的要件により、一部地域では特定期間のデータ保持が義務\n- コスト最適化が重要（現在のストレージコストを50%削減したい）\n- データの完全性保証が必須（ビット腐敗の検出・修復）\n\nこの要件を満たす最適なストレージアーキテクチャはどれですか？',
    options: [
      'S3 Standard + S3 Intelligent-Tiering + CloudFront + S3 Transfer Acceleration + S3 Object Lock + Macie',
      'S3 Standard + Lifecycle Policy (IA → Glacier → Deep Archive) + CloudFront + Multipart Upload + S3 Cross-Region Replication',
      'EFS + EC2 + CloudFront + AWS DataSync + AWS Backup + S3 Glacier for archival',
      'S3 Standard + S3 One Zone-IA + CloudFront + AWS Storage Gateway + S3 Batch Operations'
    ],
    correct: 1,
    explanation: '正解は「S3 Standard + Lifecycle Policy (IA → Glacier → Deep Archive) + CloudFront + Multipart Upload + S3 Cross-Region Replication」です。\n\nこの選択肢が最適な理由：\n\n**要件への対応：**\n1. **大容量ファイル**: Multipart Uploadにより効率的な大容量ファイルアップロード\n2. **グローバル配信**: CloudFrontによる世界規模のコンテンツ配信\n3. **アクセスパターン最適化**: Lifecycle Policyによる自動的なストレージクラス移行\n4. **コスト削減**: \n   - 3年以内: S3 Standard → S3 IA (30日後)\n   - 3年以上: S3 Glacier (90日後) → S3 Glacier Deep Archive (1年後)\n5. **データ保護**: Cross-Region Replicationによる地理的冗長性\n6. **法的要件**: 地域別のレプリケーション設定で対応\n\n**コスト最適化の詳細：**\n- S3 Standard: 新規コンテンツ（即座アクセス）\n- S3 IA: 3年以内のコンテンツ（アクセス頻度低下）\n- S3 Glacier: 3年以上のコンテンツ（稀なアクセス）\n- S3 Glacier Deep Archive: 長期保存（年数回アクセス）\n\n**他の選択肢の問題点：**\n- **S3 Standard + S3 Intelligent-Tiering + CloudFront + S3 Transfer Acceleration + S3 Object Lock + Macie**: Intelligent-Tieringは予測可能なアクセスパターンには不要、Macieはコンテンツ分析用途で要件外\n- **EFS + EC2 + CloudFront + AWS DataSync + AWS Backup + S3 Glacier for archival**: EFSは大容量動画ストレージには非効率、コストが高い\n- **S3 Standard + S3 One Zone-IA + CloudFront + AWS Storage Gateway + S3 Batch Operations**: One Zone-IAは可用性が低く、Storage Gatewayは不要\n\n**アーキテクチャの利点：**\n- 50%以上のコスト削減達成\n- 自動的なデータライフサイクル管理\n- 高い可用性と耐久性（99.999999999%）\n- スケーラビリティの確保'
  },
  {
    id: 'adv-storage-002',
    category: 'ストレージ',
    question: 'グローバル製薬会社が、創薬研究のためのゲノム解析データ管理システムをAWSで構築しています。このシステムには以下の特殊な要件があります：\n\n- 単一ゲノムデータファイル：3TB-10TB\n- 研究プロジェクト期間：5-10年\n- 同時並行プロジェクト：50-100件\n- 研究者間でのデータ共有が頻繁（世界10拠点）\n- 計算処理時の高速I/O性能が必要（100GB/s以上）\n- データの版数管理が必要（研究過程での変更追跡）\n- 規制要件：21 CFR Part 11準拠（FDA規制）\n- セキュリティ：研究データの暗号化と監査ログ\n- 災害復旧：RPO 1時間、RTO 4時間以内\n- 長期保存：プロジェクト完了後20年間の保存義務\n\nこの複雑な要件を満たす最適なストレージアーキテクチャはどれですか？',
    options: [
      'Amazon FSx for Lustre + S3 + AWS DataSync + S3 Versioning + AWS CloudTrail + S3 Object Lock + Cross-Region Replication',
      'Amazon EFS + S3 Glacier + AWS Storage Gateway + S3 Intelligent-Tiering + AWS Config + S3 Cross-Region Replication',
      'Amazon EBS + S3 + AWS Backup + S3 Standard-IA + AWS CloudFormation + S3 Transfer Acceleration',
      'Amazon S3 + AWS DataSync + Amazon WorkDocs + S3 One Zone-IA + AWS Systems Manager + S3 Batch Operations'
    ],
    correct: 0,
    explanation: '正解は「Amazon FSx for Lustre + S3 + AWS DataSync + S3 Versioning + AWS CloudTrail + S3 Object Lock + Cross-Region Replication」です。\n\nこの選択肢が最適な理由：\n\n**高性能要件への対応：**\n1. **FSx for Lustre**: 100GB/s以上の高速I/O性能を実現\n2. **並列処理**: 複数の研究プロジェクトでの同時アクセス対応\n3. **S3統合**: Lustreファイルシステムと S3の seamless統合\n\n**規制・セキュリティ要件への対応：**\n1. **21 CFR Part 11準拠**: \n   - S3 Versioning: データの版数管理と変更追跡\n   - S3 Object Lock: データの改ざん防止\n   - CloudTrail: 完全な監査ログ\n2. **暗号化**: FSx、S3両方での暗号化サポート\n3. **アクセス制御**: IAMとの統合による細かい権限管理\n\n**災害復旧・長期保存への対応：**\n1. **Cross-Region Replication**: RPO 1時間の要件を満たす\n2. **S3の高可用性**: RTO 4時間以内の復旧\n3. **長期保存**: S3 Glacier/Deep Archiveへの自動移行\n\n**データ管理の最適化：**\n1. **DataSync**: オンプレミスとの効率的なデータ同期\n2. **版数管理**: S3 Versioningによる研究過程の追跡\n3. **世界10拠点**: Cross-Region Replicationによる地理的分散\n\n**他の選択肢の問題点：**\n- **Amazon EFS + S3 Glacier + AWS Storage Gateway + S3 Intelligent-Tiering + AWS Config + S3 Cross-Region Replication**: EFSは高性能計算には不十分、Storage Gatewayは不要\n- **Amazon EBS + S3 + AWS Backup + S3 Standard-IA + AWS CloudFormation + S3 Transfer Acceleration**: EBSは共有ストレージとして不適切、単一インスタンス制限\n- **Amazon S3 + AWS DataSync + Amazon WorkDocs + S3 One Zone-IA + AWS Systems Manager + S3 Batch Operations**: WorkDocsは研究データ管理には不適切、One Zone-IAは可用性不足\n\n**FSx for Lustreの特別な利点：**\n- HPC（高性能計算）に最適化\n- S3との native統合\n- POSIX準拠のファイルシステム\n- 研究・科学計算での実績'
  },
  {
    id: 'adv-storage-003',
    category: 'ストレージ',
    question: '大手金融機関が、取引データの長期保存とコンプライアンス要件を満たすためのアーカイブシステムをAWSで構築しています。このシステムには以下の厳格な要件があります：\n\n- 日次取引データ：1TB-5TB\n- 保存期間：法的要件により最低30年間\n- データの完全性：ビット単位での検証が必要\n- 取得時間：規制当局の要求に対して24時間以内\n- 暗号化：保存時・転送時の両方で最高レベル\n- 監査要件：すべてのアクセスログの永続保存\n- 地理的分散：異なる大陸での複製保存\n- コスト効率：現在のテープストレージより50%削減\n- 災害復旧：データセンター全体の損失にも対応\n- 規制対応：SOX法、バーゼルIII、GDPR準拠\n\nこの厳格な要件を満たす最適なアーカイブアーキテクチャはどれですか？',
    options: [
      'S3 Glacier Deep Archive + S3 Object Lock + S3 Cross-Region Replication + CloudTrail + S3 Inventory + AWS Config',
      'S3 Standard + S3 Intelligent-Tiering + S3 Transfer Acceleration + CloudFront + S3 Analytics + Macie',
      'AWS Storage Gateway + S3 Glacier + AWS Backup + DataSync + Systems Manager + CloudFormation',
      'Amazon EFS + S3 Standard-IA + AWS DataSync + CloudWatch + S3 Batch Operations + Lambda'
    ],
    correct: 0,
    explanation: '正解は「S3 Glacier Deep Archive + S3 Object Lock + S3 Cross-Region Replication + CloudTrail + S3 Inventory + AWS Config」です。\n\nこの選択肢が最適な理由：\n\n**長期保存・コスト要件への対応：**\n1. **S3 Glacier Deep Archive**: \n   - 最低コストのストレージクラス（テープより50%削減達成）\n   - 30年間の長期保存に最適\n   - 99.999999999%の耐久性\n2. **取得時間**: 12時間以内の標準取得（24時間要件を満たす）\n\n**規制・コンプライアンス要件への対応：**\n1. **S3 Object Lock**: \n   - WORM（Write Once, Read Many）機能\n   - データの改ざん防止（SOX法対応）\n   - 法的保持期間の強制\n2. **CloudTrail**: すべてのAPI呼び出しの永続ログ\n3. **AWS Config**: リソース設定の継続的監視\n\n**データ保護・災害復旧への対応：**\n1. **Cross-Region Replication**: \n   - 異なる大陸での自動複製\n   - 地理的災害への対応\n   - GDPR等の地域規制への対応\n2. **暗号化**: \n   - 保存時: S3 SSE-KMS/SSE-C\n   - 転送時: TLS 1.2以上\n\n**運用・監査への対応：**\n1. **S3 Inventory**: 定期的なデータ整合性チェック\n2. **ビット単位検証**: S3の自動チェックサム検証\n3. **監査ログ**: CloudTrailによる完全な操作履歴\n\n**他の選択肢の問題点：**\n- **S3 Standard + S3 Intelligent-Tiering + S3 Transfer Acceleration + CloudFront + S3 Analytics + Macie**: Intelligent-Tieringは予測可能なアーカイブには不要、Macieはコンテンツ分析用途で要件外\n- **AWS Storage Gateway + S3 Glacier + AWS Backup + DataSync + Systems Manager + CloudFormation**: Storage Gatewayは複雑性を増すだけで、要件に不適切\n- **Amazon EFS + S3 Standard-IA + AWS DataSync + CloudWatch + S3 Batch Operations + Lambda**: EFSは長期アーカイブには不適切、コストが非常に高い\n\n**規制対応の詳細：**\n- **SOX法**: Object Lockによる改ざん防止\n- **バーゼルIII**: 長期データ保存と監査ログ\n- **GDPR**: 地域別データ保存とアクセス制御\n\n**コスト最適化：**\n- Deep Archive: $0.00099/GB/月（最低コスト）\n- テープストレージ比50%以上削減\n- 運用コストの大幅削減'
  },
  {
    id: 'adv-storage-004',
    category: 'ストレージ',
    question: '大手メディア企業が、4K/8K動画コンテンツのアーカイブシステムを構築しています。以下の要件があります：\n\n1. 総データ量：100PB以上の動画ファイル\n2. 新しいコンテンツの日次アップロード：10TB\n3. アクセスパターン：90%は1年以内、9%は1-7年、1%は7年以上\n4. 復旧時間要件：緊急時は1時間以内、通常は12時間以内\n5. コスト最適化が最重要（現在のオンプレミス比50%削減目標）\n6. 地理的分散によるデータ保護\n7. メタデータ検索とコンテンツ管理\n\nこの要件を満たすために、最も適切なストレージ戦略はどれですか？',
    options: [
      'S3 Intelligent-Tiering + S3 Glacier + S3 Glacier Deep Archive + Cross-Region Replication + S3 Inventoryを使用し、自動階層化アーカイブを構築する',
      'EFS + EBS gp3 + S3 Standard + AWS Backup + DataSyncを使用し、ハイブリッドストレージ環境を構築する',
      'FSx for Lustre + S3 Standard-IA + Glacier + AWS Storage Gateway + CloudFrontを使用し、高性能ファイルシステムを構築する',
      'EBS Provisioned IOPS + S3 One Zone-IA + Tape Gateway + Direct Connectを使用し、従来型ストレージ環境を構築する'
    ],
    correct: 0,
    explanation: '大規模動画アーカイブには、S3 Intelligent-Tiering + S3 Glacier + S3 Glacier Deep Archive + Cross-Region Replication + S3 Inventoryの組み合わせが最適です。\n\n理由：\n1. **S3 Intelligent-Tiering**: アクセスパターンに基づく自動階層化でコスト最適化\n2. **S3 Glacier**: 1-7年のデータに適した中期アーカイブ（12時間復旧）\n3. **S3 Glacier Deep Archive**: 7年以上のデータに最適な長期アーカイブ（最大50%コスト削減）\n4. **Cross-Region Replication**: 地理的分散によるデータ保護\n5. **S3 Inventory**: メタデータ管理とコンテンツ検索\n\n他の選択肢の問題点：\n- **EFS + EBS gp3 + S3 Standard + AWS Backup + DataSyncを使用し、ハイブリッドストレージ環境を構築する**: EFSとEBSは100PB規模には不適切でコスト高\n- **FSx for Lustre + S3 Standard-IA + Glacier + AWS Storage Gateway + CloudFrontを使用し、高性能ファイルシステムを構築する**: FSx for Lustreは高性能だがアーカイブ用途には過剰\n- **EBS Provisioned IOPS + S3 One Zone-IA + Tape Gateway + Direct Connectを使用し、従来型ストレージ環境を構築する**: One Zone-IAは地理的分散要件を満たさない'
  },
  {
    id: 'adv-storage-005',
    category: 'ストレージ',
    question: '大手製薬会社が、創薬研究データの管理システムを構築しています。以下の要件があります：\n\n1. 研究データ：分子構造、実験結果、臨床試験データ（数十TB/日）\n2. 規制要件：FDA 21 CFR Part 11、GxP準拠\n3. データ整合性：改ざん検知と監査証跡\n4. 研究者間でのセキュアなデータ共有\n5. 機械学習による創薬支援（高速データアクセス）\n6. 長期保存：25年間の保持義務\n7. 災害復旧：RPO 1時間、RTO 4時間\n\nこの要件を満たすために、最も適切なストレージアーキテクチャはどれですか？',
    options: [
      'S3 + S3 Object Lock + CloudTrail + Macie + DataSync + Glacier Deep Archiveを使用し、コンプライアンス対応ストレージを構築する',
      'EFS + AWS Backup + KMS + IAM + VPC Endpoints + S3 Standard-IAを使用し、ファイルベースストレージを構築する',
      'FSx for Windows + Active Directory + DLP + AWS Config + S3 Glacierを使用し、Windows統合ストレージを構築する',
      'EBS + Snapshot + Encryption + CloudWatch + S3 One Zone-IAを使用し、ブロックストレージベースを構築する'
    ],
    correct: 0,
    explanation: '製薬会社の規制要件には、S3 + S3 Object Lock + CloudTrail + Macie + DataSync + Glacier Deep Archiveの組み合わせが最適です。\n\n理由：\n1. **S3 Object Lock**: WORM（Write Once Read Many）でデータ改ざん防止\n2. **CloudTrail**: 完全な監査証跡でGxP準拠\n3. **Macie**: 機密データの自動分類と保護\n4. **DataSync**: セキュアなデータ転送と同期\n5. **Glacier Deep Archive**: 25年間の長期保存に最適なコスト\n\n他の選択肢の問題点：\n- **EFS + AWS Backup + KMS + IAM + VPC Endpoints + S3 Standard-IAを使用し、ファイルベースストレージを構築する**: EFSはオブジェクトロック機能がなく、改ざん検知が困難\n- **FSx for Windows + Active Directory + DLP + AWS Config + S3 Glacierを使用し、Windows統合ストレージを構築する**: FSx for Windowsは製薬業界の標準的なLinux環境に不適切\n- **EBS + Snapshot + Encryption + CloudWatch + S3 One Zone-IAを使用し、ブロックストレージベースを構築する**: EBSは大規模データ共有に不適切'
  },
  {
    id: 'adv-storage-006',
    category: 'ストレージ',
    question: '大手金融機関が、高頻度取引（HFT）システムのストレージ最適化を行っています。以下の要件があります：\n\n1. 取引データの超低レイテンシアクセス（マイクロ秒レベル）\n2. 1秒間に数百万件の取引記録\n3. データの完全性と可用性（99.999%）\n4. リアルタイムバックアップと災害復旧\n5. 規制要件による7年間の完全なデータ保持\n6. 取引データの暗号化（保存時・転送時）\n7. 監査ログの改ざん防止\n\nこの要件を満たすために、最も適切なストレージアーキテクチャはどれですか？',
    options: [
      'EBS Provisioned IOPS SSD (io2) + Multi-Attach + Instance Store + S3 + Glacier + KMSを使用し、超高性能ストレージを構築する',
      'EFS + General Purpose SSD + S3 Standard-IA + CloudTrail + AWS Configを使用し、ファイルベースストレージを構築する',
      'FSx for Lustre + S3 + DataSync + AWS Backup + Macieを使用し、高性能並列ファイルシステムを構築する',
      'S3 + DynamoDB + ElastiCache + Lambda + Step Functionsを使用し、サーバーレスストレージを構築する'
    ],
    correct: 0,
    explanation: '高頻度取引システムには、EBS Provisioned IOPS SSD (io2) + Multi-Attach + Instance Store + S3 + Glacier + KMSの組み合わせが最適です。\n\n理由：\n1. **EBS io2**: 最大64,000 IOPSでマイクロ秒レベルのレイテンシを実現\n2. **Multi-Attach**: 複数インスタンスからの同時アクセスで高可用性\n3. **Instance Store**: 最高性能のローカルストレージでリアルタイム処理\n4. **S3**: 取引データの永続化と7年間保持\n5. **Glacier**: 長期アーカイブでコスト最適化\n6. **KMS**: 暗号化キー管理\n\n他の選択肢の問題点：\n- **EFS + General Purpose SSD + S3 Standard-IA + CloudTrail + AWS Configを使用し、ファイルベースストレージを構築する**: EFSはマイクロ秒レベルのレイテンシ要件を満たせない\n- **FSx for Lustre + S3 + DataSync + AWS Backup + Macieを使用し、高性能並列ファイルシステムを構築する**: FSx for Lustreは並列処理用で、取引システムには過剰\n- **S3 + DynamoDB + ElastiCache + Lambda + Step Functionsを使用し、サーバーレスストレージを構築する**: サーバーレスは超低レイテンシ要件に不適切'
  },
  {
    id: 'adv-storage-007',
    category: 'ストレージ',
    question: '大手自動車メーカーが、自動運転車のデータ収集・分析システムを構築しています。以下の要件があります：\n\n1. 車両からのデータ：センサーデータ、映像、ログ（1台あたり4TB/日）\n2. 車両台数：100万台（将来的に1000万台）\n3. データ取り込み：リアルタイムと定期バッチ\n4. 機械学習用の高速データアクセス\n5. 地域別のデータ保存（プライバシー規制対応）\n6. 長期保存：安全性分析のため10年間\n7. 災害時のデータ保護\n\nこの要件を満たすために、最も適切なデータレイクアーキテクチャはどれですか？',
    options: [
      'S3 + S3 Transfer Acceleration + Kinesis Data Firehose + Glue + Athena + Lake Formation + Cross-Region Replicationを使用し、スケーラブルデータレイクを構築する',
      'EFS + DataSync + EMR + Redshift + QuickSight + AWS Backupを使用し、ファイルベースデータレイクを構築する',
      'FSx for Lustre + Direct Connect + Batch + SageMaker + CloudWatch + S3 Glacierを使用し、高性能データレイクを構築する',
      'EBS + EC2 + Kafka + Spark + Elasticsearch + Kibanaを使用し、オープンソースデータレイクを構築する'
    ],
    correct: 0,
    explanation: '自動運転車のデータレイクには、S3 + S3 Transfer Acceleration + Kinesis Data Firehose + Glue + Athena + Lake Formation + Cross-Region Replicationの組み合わせが最適です。\n\n理由：\n1. **S3**: ペタバイト規模のデータに対応する無制限ストレージ\n2. **Transfer Acceleration**: 世界中からの高速データアップロード\n3. **Kinesis Data Firehose**: リアルタイムデータストリーミング\n4. **Glue**: ETL処理とデータカタログ管理\n5. **Athena**: サーバーレスでの高速クエリ実行\n6. **Lake Formation**: データレイクのセキュリティとガバナンス\n7. **Cross-Region Replication**: 地域別データ保存と災害復旧\n\n他の選択肢の問題点：\n- **EFS + DataSync + EMR + Redshift + QuickSight + AWS Backupを使用し、ファイルベースデータレイクを構築する**: EFSは大規模データレイクには不適切\n- **FSx for Lustre + Direct Connect + Batch + SageMaker + CloudWatch + S3 Glacierを使用し、高性能データレイクを構築する**: FSx for Lustreは高コストで長期保存に不向き\n- **EBS + EC2 + Kafka + Spark + Elasticsearch + Kibanaを使用し、オープンソースデータレイクを構築する**: 自前構築は運用負荷が高く、スケーラビリティに限界'
  },
  {
    id: 'adv-storage-008',
    category: 'ストレージ',
    question: '大手病院グループが、医療画像（DICOM）の統合管理システムを構築しています。以下の要件があります：\n\n1. 医療画像データ：CT、MRI、X線画像（1日あたり50TB）\n2. 高解像度画像の高速表示（放射線科医の診断用）\n3. HIPAA、GDPR等の医療プライバシー規制準拠\n4. 画像データの長期保存（法的要件：30年間）\n5. 複数病院間でのセキュアな画像共有\n6. 災害復旧とデータ保護\n7. AI診断支援システムとの連携\n\nこの要件を満たすために、最も適切な医療画像ストレージアーキテクチャはどれですか？',
    options: [
      'S3 + CloudFront + Lambda + Macie + KMS + VPC Endpoints + S3 Glacier Deep Archiveを使用し、HIPAA準拠画像ストレージを構築する',
      'EFS + FSx for Windows + Active Directory + AWS Certificate Manager + Direct Connectを使用し、ファイルベース画像ストレージを構築する',
      'EBS + EC2 + Application Load Balancer + RDS + ElastiCache + CloudWatchを使用し、従来型画像ストレージを構築する',
      'FSx for Lustre + ParallelCluster + SageMaker + Batch + S3 Standard-IAを使用し、高性能画像処理ストレージを構築する'
    ],
    correct: 0,
    explanation: '医療画像管理システムには、S3 + CloudFront + Lambda + Macie + KMS + VPC Endpoints + S3 Glacier Deep Archiveの組み合わせが最適です。\n\n理由：\n1. **S3**: 医療画像の大容量ストレージと高い耐久性（99.999999999%）\n2. **CloudFront**: 高解像度画像の高速配信\n3. **Lambda**: DICOM画像の変換とメタデータ処理\n4. **Macie**: PHI（個人健康情報）の自動検出と保護\n5. **KMS**: 医療データの暗号化管理\n6. **VPC Endpoints**: セキュアな病院間通信\n7. **Glacier Deep Archive**: 30年間の長期保存に最適\n\n他の選択肢の問題点：\n- **EFS + FSx for Windows + Active Directory + AWS Certificate Manager + Direct Connectを使用し、ファイルベース画像ストレージを構築する**: FSx for Windowsは医療業界の標準的なLinux環境に不適切\n- **EBS + EC2 + Application Load Balancer + RDS + ElastiCache + CloudWatchを使用し、従来型画像ストレージを構築する**: 従来型アーキテクチャはスケーラビリティとコンプライアンスに課題\n- **FSx for Lustre + ParallelCluster + SageMaker + Batch + S3 Standard-IAを使用し、高性能画像処理ストレージを構築する**: FSx for Lustreは医療画像管理には過剰で高コスト'
  },
  {
    id: 'adv-storage-009',
    category: 'ストレージ',
    question: '大手ゲーム会社が、オンラインゲームのセーブデータとアセット配信システムを構築しています。以下の要件があります：\n\n1. 世界中のプレイヤーのセーブデータ（数億ユーザー）\n2. ゲームアセット（テクスチャ、モデル）の高速配信\n3. プレイヤーの地域に関係なく低レイテンシアクセス\n4. ゲームアップデート時の大量ダウンロード対応\n5. セーブデータの整合性保証と復旧機能\n6. 地域別の法規制対応（データローカライゼーション）\n7. コスト効率的な運用\n\nこの要件を満たすために、最も適切なゲーム向けストレージアーキテクチャはどれですか？',
    options: [
      'S3 + CloudFront + Global Accelerator + DynamoDB Global Tables + Lambda@Edge + S3 Transfer Accelerationを使用し、グローバルゲームストレージを構築する',
      'EFS + Application Load Balancer + ElastiCache + RDS Multi-AZ + Route 53を使用し、ファイルベースゲームストレージを構築する',
      'FSx for Lustre + Direct Connect + EC2 + Auto Scaling + CloudWatchを使用し、高性能ゲームストレージを構築する',
      'EBS + Instance Store + Network Load Balancer + Redis + PostgreSQLを使用し、ブロックストレージベースを構築する'
    ],
    correct: 0,
    explanation: 'オンラインゲームのストレージには、S3 + CloudFront + Global Accelerator + DynamoDB Global Tables + Lambda@Edge + S3 Transfer Accelerationの組み合わせが最適です。\n\n理由：\n1. **S3**: ゲームアセットの大容量ストレージと高い可用性\n2. **CloudFront**: 世界中への高速コンテンツ配信\n3. **Global Accelerator**: Anycastネットワークで低レイテンシを実現\n4. **DynamoDB Global Tables**: セーブデータのグローバル同期と整合性\n5. **Lambda@Edge**: エッジでのデータ処理と地域別制御\n6. **Transfer Acceleration**: 大容量アップデートの高速配信\n\n他の選択肢の問題点：\n- **EFS + Application Load Balancer + ElastiCache + RDS Multi-AZ + Route 53を使用し、ファイルベースゲームストレージを構築する**: EFSは世界規模のゲーム配信には不適切\n- **FSx for Lustre + Direct Connect + EC2 + Auto Scaling + CloudWatchを使用し、高性能ゲームストレージを構築する**: FSx for Lustreは高コストでゲーム用途には過剰\n- **EBS + Instance Store + Network Load Balancer + Redis + PostgreSQLを使用し、ブロックストレージベースを構築する**: ブロックストレージはコンテンツ配信に不適切'
  },
  {
    id: 'adv-storage-010',
    category: 'ストレージ',
    question: '大手エネルギー会社が、石油・ガス探査データの管理システムを構築しています。以下の要件があります：\n\n1. 地震探査データ：3D/4Dサイスミックデータ（1プロジェクトあたり数百TB）\n2. 高性能計算（HPC）での地質解析処理\n3. 研究者間でのセキュアなデータ共有\n4. 長期保存：探査データの永続保管（50年以上）\n5. 災害復旧：重要データの地理的分散\n6. コンプライアンス：業界規制と環境規制への対応\n7. 段階的なデータアクセス（頻繁→稀→アーカイブ）\n\nこの要件を満たすために、最も適切な探査データストレージアーキテクチャはどれですか？',
    options: [
      'FSx for Lustre + S3 + S3 Intelligent-Tiering + Glacier Deep Archive + Cross-Region Replication + AWS ParallelClusterを使用し、HPC対応探査データストレージを構築する',
      'EFS + S3 Standard + Glacier + DataSync + Direct Connect + AWS Backupを使用し、ファイルベース探査データストレージを構築する',
      'EBS Provisioned IOPS + Instance Store + S3 One Zone-IA + Tape Gateway + CloudWatchを使用し、従来型探査データストレージを構築する',
      'S3 + DynamoDB + Lambda + Step Functions + Athena + QuickSightを使用し、サーバーレス探査データストレージを構築する'
    ],
    correct: 0,
    explanation: '石油・ガス探査データには、FSx for Lustre + S3 + S3 Intelligent-Tiering + Glacier Deep Archive + Cross-Region Replication + AWS ParallelClusterの組み合わせが最適です。\n\n理由：\n1. **FSx for Lustre**: 高性能並列ファイルシステムでHPC処理に最適\n2. **S3**: 探査データの永続ストレージと高い耐久性\n3. **S3 Intelligent-Tiering**: アクセスパターンに応じた自動階層化\n4. **Glacier Deep Archive**: 50年以上の長期保存に最適なコスト\n5. **Cross-Region Replication**: 地理的分散による災害復旧\n6. **ParallelCluster**: 地質解析のHPC環境\n\n他の選択肢の問題点：\n- **EFS + S3 Standard + Glacier + DataSync + Direct Connect + AWS Backupを使用し、ファイルベース探査データストレージを構築する**: EFSはHPCワークロードの性能要件を満たせない\n- **EBS Provisioned IOPS + Instance Store + S3 One Zone-IA + Tape Gateway + CloudWatchを使用し、従来型探査データストレージを構築する**: One Zone-IAは地理的分散要件を満たさない\n- **S3 + DynamoDB + Lambda + Step Functions + Athena + QuickSightを使用し、サーバーレス探査データストレージを構築する**: サーバーレスはHPC処理に不適切'
  },
  {
    id: 'adv-storage-multi-001',
    category: 'ストレージ',
    question: '大手メディア企業が、4K/8K動画コンテンツの配信プラットフォームを構築しています。以下の要件があります：\n\n**要件：**\n- 動画ファイルサイズ：1本あたり50GB-500GB\n- 月間アップロード：10,000本の新規動画\n- 世界中への高速配信が必要\n- 長期保存（10年以上）でコスト最適化\n- 動画の自動トランスコーディング\n- メタデータ検索機能\n\nこのアーキテクチャに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'Amazon S3 Intelligent-Tiering - 自動的なストレージクラス最適化',
      'Amazon CloudFront - グローバルコンテンツ配信ネットワーク',
      'AWS Elemental MediaConvert - 動画トランスコーディングサービス',
      'Amazon EFS - 共有ファイルシステム',
      'AWS Storage Gateway - ハイブリッドストレージ統合',
      'Amazon FSx for Lustre - 高性能ファイルシステム'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: "正解は以下の3つです：\n\n**1. Amazon S3 Intelligent-Tiering**\n- アクセスパターンに基づく自動的なストレージクラス移行\n- 長期保存でのコスト最適化\n- 大容量動画ファイルの保存に最適\n- 99.999999999%（11 9's）の耐久性\n\n**2. Amazon CloudFront**\n- 世界中のエッジロケーションからの高速配信\n- 大容量動画ファイルの効率的な配信\n- オリジンへの負荷軽減\n- 視聴者に最も近い場所からの配信\n\n**3. AWS Elemental MediaConvert**\n- 動画専用のトランスコーディングサービス\n- 複数の出力形式への自動変換\n- スケーラブルな処理能力\n- 品質とコストのバランス最適化\n\n**他の選択肢について：**\n- **Amazon EFS**: 動画配信には不適切、コストも高い\n- **Storage Gateway**: オンプレミス統合が主目的で要件に不適合\n- **FSx for Lustre**: HPC用途で動画配信には不適切"
  },
  {
    id: 'adv-storage-multi-002',
    category: 'ストレージ',
    question: '金融機関が、規制要件を満たすデータアーカイブシステムを構築しています。以下の要件があります：\n\n**要件：**\n- データ保存期間：30年間\n- 年間データ増加量：100TB\n- 規制要件：データの改ざん防止（WORM）\n- 監査ログの完全性保証\n- 災害復旧：地理的に分散した保存\n- コスト最適化が重要\n- 検索・取得は年数回程度\n\nこのアーキテクチャに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'Amazon S3 Glacier Deep Archive - 長期アーカイブ専用ストレージ',
      'Amazon S3 Object Lock - オブジェクトの改ざん防止機能',
      'AWS CloudTrail - API呼び出しの監査ログ',
      'Amazon EBS Snapshots - ブロックストレージのバックアップ',
      'AWS Backup - 統合バックアップサービス',
      'Amazon S3 Standard-IA - 低頻度アクセス用ストレージ'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: "正解は以下の2つです：\n\n**1. Amazon S3 Glacier Deep Archive**\n- 最も低コストな長期アーカイブストレージ\n- 30年間の保存に最適化\n- 99.999999999%（11 9's）の耐久性\n- 複数のアベイラビリティーゾーンに自動複製\n\n**2. Amazon S3 Object Lock**\n- WORM（Write Once Read Many）機能の提供\n- 規制要件の改ざん防止を満たす\n- リーガルホールド機能\n- コンプライアンス要件への対応\n\n**他の選択肢について：**\n- **CloudTrail**: 監査ログは重要だが、データアーカイブの主要機能ではない\n- **EBS Snapshots**: ブロックストレージ用で要件に不適合\n- **AWS Backup**: 統合管理は便利だが、コスト最適化の観点で不適切\n- **S3 Standard-IA**: 長期保存にはコストが高い"
  },
  {
    id: 'adv-storage-multi-003',
    category: 'ストレージ',
    question: '自動車メーカーが、自動運転車両のデータ収集・分析システムを構築しています。以下の要件があります：\n\n**要件：**\n- 車両1台あたり1日10GBのセンサーデータ\n- 全世界10万台の車両からデータ収集\n- リアルタイム異常検知が必要\n- 機械学習モデルの学習用データセット作成\n- データレイク構築による分析基盤\n- 地域別データ主権要件への対応\n\nこのアーキテクチャに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'Amazon S3 - スケーラブルオブジェクトストレージ',
      'AWS Lake Formation - データレイク構築・管理サービス',
      'Amazon Kinesis Data Firehose - ストリーミングデータの配信',
      'Amazon Redshift - データウェアハウス',
      'Amazon DynamoDB - NoSQLデータベース',
      'Amazon OpenSearch Service - 検索・分析エンジン'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Amazon S3**\n- 無制限のスケーラビリティ\n- 複数のストレージクラスによるコスト最適化\n- データレイクの中核ストレージ\n- 地域別バケット配置による主権要件対応\n\n**2. AWS Lake Formation**\n- データレイクの構築・管理を簡素化\n- データカタログとメタデータ管理\n- 機械学習用データセットの効率的な作成\n- セキュリティとアクセス制御の統合管理\n\n**3. Amazon Kinesis Data Firehose**\n- ストリーミングデータの自動配信\n- S3への効率的なデータ取り込み\n- リアルタイム処理パイプラインの構築\n- データ変換機能による前処理\n\n**他の選択肢について：**\n- **Redshift**: 構造化データ分析には適しているが、センサーデータには不適切\n- **DynamoDB**: リアルタイム処理には適しているが、大容量データレイクには不適切\n- **OpenSearch**: 検索機能は有用だが、主要なストレージ要件ではない'
  },
  {
    id: 'adv-db-001',
    category: 'データベース',
    question: 'グローバル展開するフィンテック企業が、リアルタイム決済処理システムをAWSで構築しています。このシステムには以下の厳格な要件があります：\n\n- 取引処理能力：1秒間に100,000件のトランザクション\n- レスポンス時間：平均50ms以下、99パーセンタイルで100ms以下\n- 可用性：99.99%以上（年間ダウンタイム52分以内）\n- データ整合性：ACID特性の完全保証、分散トランザクション対応\n- 地理的分散：5つの大陸でのデータ配置\n- 規制要件：各国の金融規制に準拠（データ主権）\n- 災害復旧：RPO 0秒、RTO 30秒以内\n- セキュリティ：暗号化、監査ログ、アクセス制御\n- スケーラビリティ：ピーク時の10倍トラフィックに対応\n- コスト効率：従来システムより30%削減\n\nこの複雑な要件を満たす最適なデータベースアーキテクチャはどれですか？',
    options: [
      'Amazon Aurora Global Database + Aurora Serverless v2 + RDS Proxy + ElastiCache Global Datastore + Database Activity Streams',
      'Amazon DynamoDB Global Tables + DynamoDB Accelerator (DAX) + DynamoDB Streams + Lambda + API Gateway',
      'Amazon RDS Multi-AZ + Read Replicas + ElastiCache + Application Load Balancer + CloudWatch',
      'Amazon DocumentDB + MongoDB Atlas + ElastiCache + API Gateway + Lambda'
    ],
    correct: 0,
    explanation: '正解は「Amazon Aurora Global Database + Aurora Serverless v2 + RDS Proxy + ElastiCache Global Datastore + Database Activity Streams」です。\n\nこの選択肢が最適な理由：\n\n**高性能・スケーラビリティ要件への対応：**\n1. **Aurora Global Database**: \n   - 地理的分散による低レイテンシ（50ms以下達成）\n   - 自動フェイルオーバー（RTO 30秒以内）\n   - クロスリージョンレプリケーション（RPO 1秒以内）\n2. **Aurora Serverless v2**: \n   - 自動スケーリング（10倍トラフィック対応）\n   - コスト最適化（使用量ベース課金）\n3. **RDS Proxy**: \n   - 接続プーリングによる高効率化\n   - 100,000 TPS対応\n\n**データ整合性・可用性への対応：**\n1. **ACID特性**: Auroraの完全なトランザクション保証\n2. **99.99%可用性**: Multi-AZ配置とGlobal Database\n3. **分散トランザクション**: Aurora分散アーキテクチャ\n\n**規制・セキュリティ要件への対応：**\n1. **データ主権**: リージョン別データ配置\n2. **Database Activity Streams**: リアルタイム監査ログ\n3. **暗号化**: 保存時・転送時の暗号化\n4. **ElastiCache Global Datastore**: セッション管理とキャッシュ\n\n**他の選択肢の問題点：**\n- **Amazon DynamoDB Global Tables + DynamoDB Accelerator (DAX) + DynamoDB Streams + Lambda + API Gateway**: DynamoDBは金融トランザクションのACID要件に制限あり\n- **Amazon RDS Multi-AZ + Read Replicas + ElastiCache + Application Load Balancer + CloudWatch**: 従来のRDSでは100,000 TPSの要件を満たせない\n- **Amazon DocumentDB + MongoDB Atlas + ElastiCache + API Gateway + Lambda**: DocumentDBは金融システムには不適切\n\n**アーキテクチャの利点：**\n- 地理的分散による低レイテンシ\n- 自動スケーリングによるコスト効率\n- 金融グレードのセキュリティ\n- 規制要件への完全対応\n- 運用負荷の最小化'
  },
  {
    id: 'adv-db-002',
    category: 'データベース',
    question: '大手eコマース企業が、商品カタログ、在庫管理、注文処理、顧客管理を統合したマルチテナント型プラットフォームをAWSで構築しています。このシステムには以下の複雑な要件があります：\n\n- テナント数：10,000社以上（B2B2Cモデル）\n- データ分離：テナント間の完全なデータ分離\n- 検索性能：商品検索で100ms以下のレスポンス\n- 在庫更新：リアルタイム在庫同期（複数チャネル）\n- 分析要件：リアルタイム売上分析とBI\n- 国際化：50カ国以上での展開\n- 季節変動：ピーク時は通常の20倍のトラフィック\n- データ保護：GDPR、CCPA等のプライバシー規制対応\n- 移行要件：既存の複数DBからの段階的移行\n- 運用効率：DBA不要の自動運用\n\nこの多様な要件を満たす最適なデータベース戦略はどれですか？',
    options: [
      'Amazon Aurora + Amazon OpenSearch + Amazon DynamoDB + Amazon Redshift + AWS Database Migration Service + AWS Glue',
      'Amazon RDS + ElastiCache + Amazon CloudSearch + Amazon EMR + AWS DataSync + Lambda',
      'MongoDB Atlas + Amazon ElastiCache + Amazon Kinesis + Amazon S3 + AWS Batch + Step Functions',
      'Amazon DynamoDB + Amazon Neptune + Amazon Timestream + Amazon QuickSight + AWS AppSync + API Gateway'
    ],
    correct: 0,
    explanation: '正解は「Amazon Aurora + Amazon OpenSearch + Amazon DynamoDB + Amazon Redshift + AWS Database Migration Service + AWS Glue」です。\n\nこの選択肢が最適な理由：\n\n**マルチテナント・データ分離への対応：**\n1. **Amazon Aurora**: \n   - テナント別データベース分離\n   - 高性能トランザクション処理\n   - 自動スケーリング（20倍トラフィック対応）\n2. **DynamoDB**: \n   - テナント別テーブル設計\n   - 無制限スケーラビリティ\n   - リアルタイム在庫更新\n\n**検索・分析要件への対応：**\n1. **Amazon OpenSearch**: \n   - 高速商品検索（100ms以下）\n   - 多言語対応（50カ国展開）\n   - リアルタイムインデックス更新\n2. **Amazon Redshift**: \n   - 大規模データ分析\n   - リアルタイム売上分析\n   - BI統合\n\n**移行・運用要件への対応：**\n1. **AWS Database Migration Service**: \n   - 既存DBからの段階的移行\n   - 最小ダウンタイム移行\n   - 異種DB間の移行サポート\n2. **AWS Glue**: \n   - ETL処理の自動化\n   - データカタログ管理\n   - スキーマ進化対応\n\n**規制・セキュリティ要件への対応：**\n1. **データ保護**: 各サービスでの暗号化とアクセス制御\n2. **GDPR対応**: データ削除とポータビリティ\n3. **監査ログ**: CloudTrailとの統合\n\n**他の選択肢の問題点：**\n- **Amazon RDS + ElastiCache + Amazon CloudSearch + Amazon EMR + AWS DataSync + Lambda**: CloudSearchは廃止予定、EMRは運用負荷が高い\n- **MongoDB Atlas + Amazon ElastiCache + Amazon Kinesis + Amazon S3 + AWS Batch + Step Functions**: MongoDB Atlasは完全マネージドでない、運用負荷あり\n- **Amazon DynamoDB + Amazon Neptune + Amazon Timestream + Amazon QuickSight + AWS AppSync + API Gateway**: Neptuneはグラフデータベースで要件に不適切\n\n**アーキテクチャの利点：**\n- 各用途に最適化されたデータベース選択\n- 完全マネージドサービスによる運用効率\n- 自動スケーリングによるコスト効率\n- 段階的移行による低リスク\n- 規制要件への完全対応'
  },
  {
    id: 'adv-db-003',
    category: 'データベース',
    question: '大手製造業が、IoTセンサーデータを活用した予知保全システムをAWSで構築しています。このシステムには以下の特殊な要件があります：\n\n- センサー数：100万台以上（工場、車両、機械）\n- データ頻度：1秒間に1,000万件のデータポイント\n- データ保存期間：リアルタイム（1日）、履歴（7年間）\n- 分析要件：リアルタイム異常検知、予測分析、トレンド分析\n- アラート：異常検知から1秒以内の通知\n- 地理的分散：世界50カ国の工場\n- データ形式：時系列データ、メタデータ、画像データ\n- 機械学習：故障予測モデルの継続学習\n- 可視化：リアルタイムダッシュボード\n- コスト効率：データ量に応じた段階的コスト構造\n- 災害復旧：重要データの地理的冗長化\n\nこの大規模IoTシステムに最適なデータベースアーキテクチャはどれですか？',
    options: [
      'Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + S3 + Lambda + SNS',
      'Amazon DynamoDB + Amazon Kinesis + Amazon EMR + Amazon Elasticsearch + S3 + Step Functions + SQS',
      'Amazon RDS + Amazon Kinesis + Amazon Redshift + Amazon CloudWatch + S3 + Lambda + CloudFormation',
      'Amazon Aurora + Amazon MSK + Amazon Athena + Amazon Grafana + S3 + Glue + EventBridge'
    ],
    correct: 0,
    explanation: '正解は「Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + S3 + Lambda + SNS」です。\n\nこの選択肢が最適な理由：\n\n**時系列データ処理への最適化：**\n1. **Amazon Timestream**: \n   - 時系列データ専用データベース\n   - 1,000万件/秒のインジェスト対応\n   - 自動データ階層化（リアルタイム→履歴）\n   - コスト効率的な長期保存（7年間）\n2. **Amazon Kinesis**: \n   - リアルタイムデータストリーミング\n   - 100万台のセンサーからの同時データ取得\n   - 自動スケーリング\n\n**リアルタイム分析・アラート：**\n1. **Lambda**: \n   - リアルタイム異常検知処理\n   - 1秒以内のアラート処理\n   - サーバーレスによる自動スケーリング\n2. **SNS**: \n   - 即座の通知配信\n   - 多チャネル通知（SMS、Email、アプリ）\n\n**機械学習・予測分析：**\n1. **Amazon SageMaker**: \n   - 故障予測モデルの構築・訓練\n   - 継続学習による精度向上\n   - リアルタイム推論\n2. **S3**: \n   - 機械学習用データレイク\n   - 画像データの効率的保存\n\n**可視化・ダッシュボード：**\n1. **Amazon QuickSight**: \n   - リアルタイムダッシュボード\n   - 地理的分散対応\n   - 自動スケーリング\n\n**他の選択肢の問題点：**\n- **Amazon DynamoDB + Amazon Kinesis + Amazon EMR + Amazon Elasticsearch + S3 + Step Functions + SQS**: DynamoDBは時系列データに最適化されていない、EMRは運用負荷が高い\n- **Amazon RDS + Amazon Kinesis + Amazon Redshift + Amazon CloudWatch + S3 + Lambda + CloudFormation**: RDSは大規模時系列データには不適切、Redshiftはリアルタイム処理に不向き\n- **Amazon Aurora + Amazon MSK + Amazon Athena + Amazon Grafana + S3 + Glue + EventBridge**: Auroraは時系列データに特化していない、MSKは複雑性を増す\n\n**Timestreamの特別な利点：**\n- 時系列データに最適化されたクエリエンジン\n- 自動データ圧縮（90%削減）\n- 内蔵の時系列分析関数\n- サーバーレスによる運用効率\n- 段階的課金によるコスト効率\n\n**アーキテクチャの利点：**\n- IoT特化の最適化設計\n- リアルタイム処理能力\n- 自動スケーリング\n- コスト効率的な長期保存\n- 機械学習統合'
  },
  {
    id: 'adv-db-004',
    category: 'データベース',
    question: '大手金融機関が、リアルタイム不正検知システムのデータベース設計を行っています。以下の要件があります：\n\n1. 取引データの即座の書き込み（1秒間に100万件）\n2. 複雑な不正パターン検索（グラフ分析、時系列分析）\n3. 機械学習モデルへのリアルタイムデータ供給\n4. 99.99%の可用性要件\n5. 規制要件による完全な監査証跡\n6. 地理的分散による災害復旧\n7. 過去10年分のデータでの分析\n\nこの要件を満たすために、最も適切なデータベースアーキテクチャはどれですか？',
    options: [
      'DynamoDB + DynamoDB Streams + Kinesis Analytics + Neptune + Timestream + Aurora Global Databaseを使用し、マルチモーダルデータベース環境を構築する',
      'RDS PostgreSQL + Read Replicas + ElastiCache + Redshift + CloudWatch + AWS Backupを使用し、従来型RDBMS環境を構築する',
      'DocumentDB + Atlas Search + EMR + S3 + Glue + Athenaを使用し、NoSQL分析環境を構築する',
      'Aurora Serverless + Lambda + API Gateway + S3 + QuickSightを使用し、サーバーレスデータベース環境を構築する'
    ],
    correct: 0,
    explanation: '金融機関の不正検知システムには、DynamoDB + DynamoDB Streams + Kinesis Analytics + Neptune + Timestream + Aurora Global Databaseの組み合わせが最適です。\n\n理由：\n1. **DynamoDB**: 100万件/秒の高速書き込みに対応\n2. **DynamoDB Streams**: リアルタイムデータ変更の検知\n3. **Kinesis Analytics**: ストリーミングデータの即座分析\n4. **Neptune**: グラフデータベースで不正パターンの関係分析\n5. **Timestream**: 時系列データの効率的な保存と分析\n6. **Aurora Global Database**: 地理的分散と高可用性\n\n他の選択肢の問題点：\n- **RDS PostgreSQL + Read Replicas + ElastiCache + Redshift + CloudWatch + AWS Backupを使用し、従来型RDBMS環境を構築する**: PostgreSQLは100万件/秒の書き込み性能に限界\n- **DocumentDB + Atlas Search + EMR + S3 + Glue + Athenaを使用し、NoSQL分析環境を構築する**: DocumentDBは金融業界の厳格な整合性要件に不適切\n- **Aurora Serverless + Lambda + API Gateway + S3 + QuickSightを使用し、サーバーレスデータベース環境を構築する**: Aurora Serverlessは高頻度アクセスには不適切'
  },
  {
    id: 'adv-db-005',
    category: 'データベース',
    question: '大手製薬会社が、創薬研究データの統合データベースを構築しています。以下の要件があります：\n\n1. 分子構造データ、実験結果、臨床試験データの統合管理\n2. 複雑な化学構造検索とパターンマッチング\n3. 機械学習による創薬候補の予測分析\n4. 研究者間でのセキュアなデータ共有\n5. FDA規制（21 CFR Part 11）への準拠\n6. データの完全性と監査証跡\n7. 25年間の長期データ保持\n\nこの要件を満たすために、最も適切なデータベースアーキテクチャはどれですか？',
    options: [
      'Aurora PostgreSQL + RDS Proxy + ElastiCache + Neptune + S3 + Macie + CloudTrailを使用し、コンプライアンス対応研究データベースを構築する',
      'DynamoDB + Lambda + API Gateway + SageMaker + S3 + Athenaを使用し、サーバーレス研究データベースを構築する',
      'DocumentDB + Atlas Search + EMR + Redshift + QuickSight + AWS Configを使用し、NoSQL研究データベースを構築する',
      'RDS MySQL + Multi-AZ + Read Replicas + Backup + CloudWatch + IAMを使用し、従来型研究データベースを構築する'
    ],
    correct: 0,
    explanation: '製薬会社の研究データベースには、Aurora PostgreSQL + RDS Proxy + ElastiCache + Neptune + S3 + Macie + CloudTrailの組み合わせが最適です。\n\n理由：\n1. **Aurora PostgreSQL**: 化学構造データの複雑クエリに対応\n2. **RDS Proxy**: 接続プールによる高可用性とセキュリティ\n3. **ElastiCache**: 頻繁な検索クエリの高速化\n4. **Neptune**: 分子間の関係性分析\n5. **S3**: 大容量実験データの長期保存\n6. **Macie**: 機密研究データの自動分類と保護\n7. **CloudTrail**: FDA規制に必要な完全な監査証跡\n\n他の選択肢の問題点：\n- **DynamoDB + Lambda + API Gateway + SageMaker + S3 + Athenaを使用し、サーバーレス研究データベースを構築する**: DynamoDBは複雑な化学構造検索に不適切\n- **DocumentDB + Atlas Search + EMR + Redshift + QuickSight + AWS Configを使用し、NoSQL研究データベースを構築する**: DocumentDBは製薬業界の厳格なデータ整合性要件に不十分\n- **RDS MySQL + Multi-AZ + Read Replicas + Backup + CloudWatch + IAMを使用し、従来型研究データベースを構築する**: MySQLは高度な化学構造検索機能が不足'
  },
  {
    id: 'adv-db-006',
    category: 'データベース',
    question: '大手小売チェーンが、オムニチャネル在庫管理システムを構築しています。以下の要件があります：\n\n1. 全国1000店舗 + ECサイトの在庫リアルタイム同期\n2. 商品マスタ：1億SKU以上の商品情報管理\n3. 在庫移動の厳密な整合性管理\n4. ピーク時（セール期間）の10倍トラフィック対応\n5. 店舗システムとの双方向データ同期\n6. 在庫予測とレコメンデーション機能\n7. 災害時の事業継続性\n\nこの要件を満たすために、最も適切なデータベースアーキテクチャはどれですか？',
    options: [
      'Aurora Global Database + DynamoDB + ElastiCache + Kinesis + Lambda + SageMakerを使用し、ハイブリッド在庫管理データベースを構築する',
      'RDS PostgreSQL + Multi-AZ + Read Replicas + Application Load Balancer + CloudWatchを使用し、従来型在庫管理データベースを構築する',
      'DynamoDB Global Tables + DynamoDB Accelerator + API Gateway + Step Functions + S3を使用し、NoSQL在庫管理データベースを構築する',
      'DocumentDB + Atlas Search + EMR + Redshift + QuickSight + DataSyncを使用し、ドキュメント型在庫管理データベースを構築する'
    ],
    correct: 0,
    explanation: 'オムニチャネル在庫管理には、Aurora Global Database + DynamoDB + ElastiCache + Kinesis + Lambda + SageMakerの組み合わせが最適です。\n\n理由：\n1. **Aurora Global Database**: 商品マスタの一貫性とグローバル同期\n2. **DynamoDB**: 高頻度在庫更新の高性能処理\n3. **ElastiCache**: 在庫照会の高速レスポンス\n4. **Kinesis**: リアルタイム在庫変更の配信\n5. **Lambda**: 在庫整合性チェックと自動調整\n6. **SageMaker**: 在庫予測とレコメンデーション\n\n他の選択肢の問題点：\n- **RDS PostgreSQL + Multi-AZ + Read Replicas + Application Load Balancer + CloudWatchを使用し、従来型在庫管理データベースを構築する**: PostgreSQLは1000店舗同時アクセスの性能要件に限界\n- **DynamoDB Global Tables + DynamoDB Accelerator + API Gateway + Step Functions + S3を使用し、NoSQL在庫管理データベースを構築する**: DynamoDBのみでは複雑な在庫整合性管理が困難\n- **DocumentDB + Atlas Search + EMR + Redshift + QuickSight + DataSyncを使用し、ドキュメント型在庫管理データベースを構築する**: DocumentDBは在庫の厳密な整合性管理に不適切'
  },
  {
    id: 'adv-db-007',
    category: 'データベース',
    question: '大手ゲーム会社が、MMORPGのプレイヤーデータ管理システムを構築しています。以下の要件があります：\n\n1. 同時接続プレイヤー：100万人以上\n2. プレイヤーデータ：キャラクター、アイテム、ギルド情報\n3. リアルタイムランキングとリーダーボード\n4. ゲーム内経済システム（アイテム取引）\n5. チート検知とデータ整合性チェック\n6. 地域別サーバーでのデータ分離\n7. プレイヤー行動分析とゲームバランス調整\n\nこの要件を満たすために、最も適切なゲーム向けデータベースアーキテクチャはどれですか？',
    options: [
      'DynamoDB + DynamoDB Global Tables + ElastiCache + Kinesis + Lambda + Neptune + Timestreamを使用し、ゲーム特化データベースを構築する',
      'Aurora MySQL + Read Replicas + RDS Proxy + ElastiCache + CloudWatch + AWS Backupを使用し、RDBMS基盤ゲームデータベースを構築する',
      'DocumentDB + Atlas Search + EMR + S3 + Glue + Athenaを使用し、ドキュメント型ゲームデータベースを構築する',
      'Redshift + Spectrum + S3 + QuickSight + SageMaker + DataPipelineを使用し、分析特化ゲームデータベースを構築する'
    ],
    correct: 0,
    explanation: 'MMORPGのデータ管理には、DynamoDB + DynamoDB Global Tables + ElastiCache + Kinesis + Lambda + Neptune + Timestreamの組み合わせが最適です。\n\n理由：\n1. **DynamoDB**: 100万同時接続の高性能プレイヤーデータ管理\n2. **Global Tables**: 地域別サーバーでのデータ同期\n3. **ElastiCache**: リアルタイムランキングの高速処理\n4. **Kinesis**: プレイヤー行動のリアルタイム収集\n5. **Lambda**: チート検知とデータ整合性チェック\n6. **Neptune**: ギルドやフレンド関係のグラフ分析\n7. **Timestream**: プレイヤー行動の時系列分析\n\n他の選択肢の問題点：\n- **Aurora MySQL + Read Replicas + RDS Proxy + ElastiCache + CloudWatch + AWS Backupを使用し、RDBMS基盤ゲームデータベースを構築する**: Aurora MySQLは100万同時接続の性能要件に限界\n- **DocumentDB + Atlas Search + EMR + S3 + Glue + Athenaを使用し、ドキュメント型ゲームデータベースを構築する**: DocumentDBはリアルタイムゲーム処理に不適切\n- **Redshift + Spectrum + S3 + QuickSight + SageMaker + DataPipelineを使用し、分析特化ゲームデータベースを構築する**: Redshiftは分析用途でリアルタイムゲーム処理に不適切'
  },
  {
    id: 'adv-db-008',
    category: 'データベース',
    question: '大手物流会社が、グローバル配送追跡システムを構築しています。以下の要件があります：\n\n1. 世界中の荷物追跡（1日あたり1億個の荷物）\n2. リアルタイム位置情報更新\n3. 配送ルート最適化\n4. 顧客への配送状況通知\n5. 配送予測と遅延アラート\n6. 地域別の配送データ管理\n7. 配送履歴の長期保存（7年間）\n\nこの要件を満たすために、最も適切な物流データベースアーキテクチャはどれですか？',
    options: [
      'DynamoDB + DynamoDB Streams + Kinesis + Lambda + Neptune + Timestream + S3を使用し、物流特化データベースを構築する',
      'Aurora PostgreSQL + PostGIS + Read Replicas + ElastiCache + CloudWatch + AWS Backupを使用し、地理空間データベースを構築する',
      'DocumentDB + Atlas Search + EMR + Redshift + QuickSight + DataSyncを使用し、ドキュメント型物流データベースを構築する',
      'RDS MySQL + Multi-AZ + Application Load Balancer + S3 + Glue + Athenaを使用し、従来型物流データベースを構築する'
    ],
    correct: 0,
    explanation: 'グローバル物流追跡システムには、DynamoDB + DynamoDB Streams + Kinesis + Lambda + Neptune + Timestream + S3の組み合わせが最適です。\n\n理由：\n1. **DynamoDB**: 1億個/日の荷物データの高性能処理\n2. **DynamoDB Streams**: リアルタイム位置情報更新の検知\n3. **Kinesis**: 配送状況の即座通知\n4. **Lambda**: 配送予測と遅延アラート処理\n5. **Neptune**: 配送ルート最適化のグラフ分析\n6. **Timestream**: 配送履歴の効率的な時系列管理\n7. **S3**: 7年間の長期履歴保存\n\n他の選択肢の問題点：\n- **Aurora PostgreSQL + PostGIS + Read Replicas + ElastiCache + CloudWatch + AWS Backupを使用し、地理空間データベースを構築する**: PostGISは地理空間機能は優秀だが、1億個/日の処理性能に限界\n- **DocumentDB + Atlas Search + EMR + Redshift + QuickSight + AWS Configを使用し、ドキュメント型物流データベースを構築する**: DocumentDBは物流の複雑なクエリ処理に不適切\n- **RDS MySQL + Multi-AZ + Application Load Balancer + S3 + Glue + Athenaを使用し、従来型物流データベースを構築する**: MySQLは大規模物流データの性能要件を満たせない'
  },
  {
    id: 'adv-db-009',
    category: 'データベース',
    question: '大手メディア企業が、コンテンツ管理システム（CMS）を構築しています。以下の要件があります：\n\n1. 記事、動画、画像など多様なコンテンツタイプ\n2. 多言語対応（50言語以上）\n3. 全文検索とコンテンツ推薦\n4. 編集者間でのリアルタイム協調編集\n5. コンテンツのバージョン管理と承認ワークフロー\n6. 高トラフィック時の読み取り性能\n7. コンテンツの自動分類とタグ付け\n\nこの要件を満たすために、最も適切なCMSデータベースアーキテクチャはどれですか？',
    options: [
      'DocumentDB + Amazon OpenSearch + ElastiCache + S3 + Lambda + Comprehend + Translateを使用し、コンテンツ特化データベースを構築する',
      'Aurora PostgreSQL + Read Replicas + RDS Proxy + ElastiCache + CloudSearch + AWS Backupを使用し、RDBMS基盤CMSデータベースを構築する',
      'DynamoDB + DynamoDB Accelerator + Kinesis + Lambda + SageMaker + S3を使用し、NoSQL CMSデータベースを構築する',
      'RDS MySQL + Multi-AZ + Application Load Balancer + CloudFront + CloudWatch + IAMを使用し、従来型CMSデータベースを構築する'
    ],
    correct: 0,
    explanation: 'メディア企業のCMSには、DocumentDB + Amazon OpenSearch + ElastiCache + S3 + Lambda + Comprehend + Translateの組み合わせが最適です。\n\n理由：\n1. **DocumentDB**: 多様なコンテンツタイプの柔軟なスキーマ管理\n2. **OpenSearch**: 多言語全文検索とコンテンツ推薦\n3. **ElastiCache**: 高トラフィック時の読み取り性能向上\n4. **S3**: 画像・動画ファイルの大容量ストレージ\n5. **Lambda**: リアルタイム協調編集の処理\n6. **Comprehend**: コンテンツの自動分類と感情分析\n7. **Translate**: 50言語対応の自動翻訳\n\n他の選択肢の問題点：\n- **Aurora PostgreSQL + Read Replicas + RDS Proxy + ElastiCache + CloudSearch + AWS Backupを使用し、RDBMS基盤CMSデータベースを構築する**: PostgreSQLは多様なコンテンツタイプの管理に制限\n- **DynamoDB + DynamoDB Accelerator + Kinesis + Lambda + SageMaker + S3を使用し、NoSQL CMSデータベースを構築する**: DynamoDBは複雑なコンテンツクエリに不適切\n- **RDS MySQL + Multi-AZ + Application Load Balancer + CloudFront + CloudWatch + IAMを使用し、従来型CMSデータベースを構築する**: MySQLは多言語全文検索機能が不十分'
  },
  {
    id: 'adv-db-010',
    category: 'データベース',
    question: '大手保険会社が、保険金請求処理システムを現代化しています。以下の要件があります：\n\n1. 保険契約、請求、支払履歴の統合管理\n2. 不正請求の自動検知\n3. 規制要件（Solvency II、IFRS 17）への準拠\n4. 顧客情報の厳格なプライバシー保護\n5. 災害時の大量請求処理（通常の100倍）\n6. 保険数理計算とリスク分析\n7. 監査証跡の完全性保証\n\nこの要件を満たすために、最も適切な保険業界向けデータベースアーキテクチャはどれですか？',
    options: [
      'Aurora Global Database + DynamoDB + Neptune + Timestream + Macie + CloudTrail + SageMakerを使用し、保険業界特化データベースを構築する',
      'RDS Oracle + Data Guard + GoldenGate + Exadata + APEX + OEMを使用し、Oracle統合保険データベースを構築する',
      'DocumentDB + Atlas Search + EMR + Redshift + QuickSight + AWS Configを使用し、NoSQL保険データベースを構築する',
      'PostgreSQL + PostGIS + pgpool + Patroni + Barman + Zabbixを使用し、オープンソース保険データベースを構築する'
    ],
    correct: 0,
    explanation: '保険会社の請求処理システムには、Aurora Global Database + DynamoDB + Neptune + Timestream + Macie + CloudTrail + SageMakerの組み合わせが最適です。\n\n理由：\n1. **Aurora Global Database**: 保険契約データの高可用性とグローバル同期\n2. **DynamoDB**: 災害時の大量請求処理（100倍スケール）\n3. **Neptune**: 不正請求検知のための関係分析\n4. **Timestream**: 保険数理計算の時系列データ管理\n5. **Macie**: 顧客情報の自動分類と保護\n6. **CloudTrail**: 規制要件に必要な完全な監査証跡\n7. **SageMaker**: 不正検知とリスク分析の機械学習\n\n他の選択肢の問題点：\n- **RDS Oracle + Data Guard + GoldenGate + Exadata + APEX + OEMを使用し、Oracle統合保険データベースを構築する**: Oracleは高コストで、クラウドネイティブな拡張性に限界\n- **DocumentDB + Atlas Search + EMR + Redshift + QuickSight + AWS Configを使用し、NoSQL保険データベースを構築する**: DocumentDBは保険業界の厳格なデータ整合性要件に不十分\n- **PostgreSQL + PostGIS + pgpool + Patroni + Barman + Zabbixを使用し、オープンソース保険データベースを構築する**: オープンソースは保険業界の規制要件対応が困難'
  },
  {
    id: 'adv-db-multi-001',
    category: 'データベース',
    question: 'グローバル展開するソーシャルメディア企業が、ユーザー行動分析システムを構築しています。以下の要件があります：\n\n**要件：**\n- 全世界10億人のユーザーデータ管理\n- リアルタイムレコメンデーション機能\n- ユーザー行動ログの高速書き込み（1秒間に100万件）\n- 複雑なグラフクエリによる関係性分析\n- 地域別データ主権要件への対応\n- 99.99%の可用性\n\nこのシステムに必要なAWSデータベースサービスを**3つ**選択してください。',
    options: [
      'Amazon DynamoDB Global Tables - グローバル分散NoSQLデータベース',
      'Amazon Neptune - グラフデータベース',
      'Amazon ElastiCache for Redis - インメモリキャッシュ',
      'Amazon RDS Multi-AZ - リレーショナルデータベース',
      'Amazon Redshift - データウェアハウス',
      'Amazon DocumentDB - ドキュメントデータベース'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Amazon DynamoDB Global Tables**\n- 10億人規模のユーザーデータに対応する無制限スケーラビリティ\n- 1秒間に数百万件の書き込み処理が可能\n- 複数リージョンでの自動レプリケーション\n- 地域別データ主権要件への対応\n\n**2. Amazon Neptune**\n- ソーシャルグラフの関係性分析に最適化\n- 複雑なグラフクエリの高速実行\n- ユーザー間の関係性やコミュニティ検出\n- レコメンデーションアルゴリズムの基盤\n\n**3. Amazon ElastiCache for Redis**\n- リアルタイムレコメンデーションの高速応答\n- セッション管理とキャッシュ機能\n- ミリ秒レベルのレスポンス時間\n- 高可用性とフェイルオーバー機能\n\n**他の選択肢について：**\n- **RDS Multi-AZ**: スケーラビリティが不十分で10億人規模に対応困難\n- **Redshift**: バッチ分析には適しているがリアルタイム処理に不適切\n- **DocumentDB**: MongoDBワークロードには適しているが要件に最適化されていない'
  },
  {
    id: 'adv-db-multi-002',
    category: 'データベース',
    question: '大手小売チェーンが、オムニチャネル在庫管理システムを構築しています。以下の要件があります：\n\n**要件：**\n- 全国1,000店舗の在庫データリアルタイム同期\n- ECサイトと実店舗の在庫統合管理\n- 在庫予測と自動発注機能\n- トランザクション整合性の保証\n- 災害時の事業継続性（RPO: 1分、RTO: 5分）\n- 分析レポートとBI機能\n\nこのシステムに必要なAWSデータベースサービスを**2つ**選択してください。',
    options: [
      'Amazon Aurora Global Database - グローバル分散リレーショナルデータベース',
      'Amazon DynamoDB - NoSQLデータベース',
      'Amazon Redshift - データウェアハウス',
      'Amazon RDS Proxy - データベース接続プール',
      'Amazon ElastiCache - インメモリキャッシュ',
      'Amazon Timestream - 時系列データベース'
    ],
    correct: [
      0,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. Amazon Aurora Global Database**\n- ACID特性によるトランザクション整合性保証\n- 複数リージョンでの自動レプリケーション\n- RPO: 1秒、RTO: 1分未満の災害復旧性能\n- 在庫データの厳密な整合性管理\n- 高可用性とフェイルオーバー機能\n\n**2. Amazon Redshift**\n- 大量の在庫・売上データの分析処理\n- 在庫予測モデルの学習データ基盤\n- BIツールとの統合によるレポート生成\n- 列指向ストレージによる高速分析\n- 自動発注アルゴリズムのデータソース\n\n**他の選択肢について：**\n- **DynamoDB**: 在庫管理に必要なトランザクション整合性が不十分\n- **RDS Proxy**: 接続管理には有用だが主要機能ではない\n- **ElastiCache**: キャッシュ機能は有用だが主要データストアではない\n- **Timestream**: 時系列データには適しているが在庫管理の主要要件ではない'
  },
  {
    id: 'adv-db-multi-003',
    category: 'データベース',
    question: 'ヘルスケア企業が、患者データ管理システムを構築しています。以下の要件があります：\n\n**要件：**\n- 患者の医療記録（構造化・非構造化データ）\n- HIPAA規制への完全準拠\n- 医療画像データ（DICOM）の管理\n- 研究用データの匿名化処理\n- 高度な検索・分析機能\n- 99.999%の可用性とデータ保護\n\nこのシステムに必要なAWSデータベースサービスを**3つ**選択してください。',
    options: [
      'Amazon RDS for PostgreSQL - HIPAA準拠リレーショナルデータベース',
      'Amazon DocumentDB - 医療記録ドキュメント管理',
      'Amazon OpenSearch Service - 医療データ検索・分析',
      'Amazon DynamoDB - 高可用性NoSQLデータベース',
      'Amazon Neptune - 医療知識グラフ',
      'Amazon Redshift - 医療データウェアハウス'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Amazon RDS for PostgreSQL**\n- HIPAA規制に完全準拠\n- 構造化された患者データの厳密な管理\n- 暗号化とアクセス制御の強化\n- バックアップと監査ログの完全性\n- 医療業界標準への対応\n\n**2. Amazon DocumentDB**\n- 非構造化医療記録の柔軟な管理\n- JSON形式の医療データ保存\n- スキーマレス設計による拡張性\n- MongoDB互換性による既存システム統合\n- 自動バックアップとポイントインタイム復旧\n\n**3. Amazon OpenSearch Service**\n- 医療記録の高度な全文検索\n- 症状・診断・治療法の横断検索\n- 研究用データの分析とビジュアライゼーション\n- 機械学習による医療データ分析\n- リアルタイム検索とアラート機能\n\n**他の選択肢について：**\n- **DynamoDB**: 医療データの複雑な関係性管理には不適切\n- **Neptune**: 医療知識グラフには有用だが主要要件ではない\n- **Redshift**: 研究分析には有用だが日常的な患者データ管理には不適切'
  },
  {
    id: 'adv-net-001',
    category: 'ネットワーキング',
    question: 'グローバル展開する大手銀行が、世界50カ国の支店を接続するプライベートネットワークをAWSで構築しています。このネットワークには以下の厳格な要件があります：\n\n- 接続拠点：本社1拠点、地域本部5拠点、支店500拠点、データセンター10拠点\n- セキュリティ：金融業界標準（PCI DSS、SOX法準拠）\n- 可用性：99.9%以上（各拠点間の通信）\n- 帯域幅：本社-地域本部間10Gbps、地域本部-支店間1Gbps\n- レイテンシ：本社-地域本部間50ms以下、リアルタイム取引処理\n- 災害復旧：主要拠点の冗長化、自動フェイルオーバー\n- 規制要件：各国の金融規制、データ主権\n- 運用効率：集中管理、自動化\n- コスト最適化：従来のMPLS回線より30%削減\n- 段階的移行：既存ネットワークからの無停止移行\n\nこの複雑な要件を満たす最適なネットワークアーキテクチャはどれですか？',
    options: [
      'AWS Transit Gateway + AWS Direct Connect Gateway + AWS Site-to-Site VPN + AWS Global Accelerator + Route 53 Resolver',
      'AWS VPC Peering + AWS Direct Connect + AWS Client VPN + CloudFront + Route 53',
      'AWS PrivateLink + AWS Direct Connect + AWS VPN CloudHub + AWS Global Accelerator + Network Load Balancer',
      'AWS Transit Gateway + AWS Cloud WAN + AWS Direct Connect + AWS Site-to-Site VPN + Route 53 Resolver'
    ],
    correct: 3,
    explanation: '正解は「AWS Transit Gateway + AWS Cloud WAN + AWS Direct Connect + AWS Site-to-Site VPN + Route 53 Resolver」です。\n\nこの選択肢が最適な理由：\n\n**大規模ネットワーク管理への対応：**\n1. **AWS Cloud WAN**: \n   - 500拠点の集中管理\n   - グローバルネットワークの統一管理\n   - 自動ルーティング最適化\n   - ポリシーベースの管理\n2. **AWS Transit Gateway**: \n   - 地域内のハブ&スポーク構成\n   - 高帯域幅対応（10Gbps）\n   - 自動スケーリング\n\n**接続性・パフォーマンス要件への対応：**\n1. **AWS Direct Connect**: \n   - 専用線による安定した接続\n   - 低レイテンシ（50ms以下達成）\n   - 高帯域幅保証\n   - 金融グレードのセキュリティ\n2. **Site-to-Site VPN**: \n   - Direct Connectのバックアップ\n   - 小規模拠点の接続\n   - 暗号化通信\n\n**可用性・災害復旧への対応：**\n1. **冗長化**: 複数のDirect Connect接続\n2. **自動フェイルオーバー**: Cloud WANの自動経路切り替え\n3. **99.9%可用性**: 冗長構成による高可用性\n\n**規制・セキュリティ要件への対応：**\n1. **データ主権**: リージョン別ネットワーク分離\n2. **PCI DSS準拠**: 暗号化とアクセス制御\n3. **Route 53 Resolver**: プライベートDNS解決\n\n**他の選択肢の問題点：**\n- **AWS Transit Gateway + AWS Direct Connect Gateway + AWS Site-to-Site VPN + AWS Global Accelerator + Route 53 Resolver**: Global Acceleratorは不要、500拠点管理には複雑\n- **AWS VPC Peering + AWS Direct Connect + AWS Client VPN + CloudFront + Route 53**: VPC Peeringは大規模には不適切、管理が複雑\n- **AWS PrivateLink + AWS Direct Connect + AWS VPN CloudHub + AWS Global Accelerator + Network Load Balancer**: PrivateLinkは用途が限定的、VPN CloudHubは廃止予定\n\n**Cloud WANの特別な利点：**\n- グローバルネットワークの統一管理\n- 自動最適化とトラフィック制御\n- ポリシーベースのセグメンテーション\n- 運用効率の大幅向上\n- コスト最適化（30%削減達成）\n\n**段階的移行の利点：**\n- 既存MPLSとの並行運用\n- 拠点別の段階的切り替え\n- 無停止での移行実現'
  },
  {
    id: 'adv-net-002',
    category: 'ネットワーキング',
    question: '大手製造業が、工場のIoTシステムとクラウドを接続するハイブリッドネットワークをAWSで構築しています。このシステムには以下の特殊な要件があります：\n\n- 工場数：世界30カ国、200工場\n- IoTデバイス：各工場1万台以上のセンサー・制御機器\n- データ量：1工場あたり1TB/日のセンサーデータ\n- リアルタイム制御：制御信号の遅延10ms以内\n- セキュリティ：OT（運用技術）とIT（情報技術）の分離\n- 可用性：製造ライン停止は1分あたり100万円の損失\n- 帯域幅：各工場-クラウド間1Gbps以上\n- エッジ処理：一部データの工場内処理が必要\n- 災害復旧：工場間での生産バックアップ\n- 規制要件：各国の製造業規制、データローカライゼーション\n- 段階的展開：既存システムとの共存\n\nこの産業IoT要件を満たす最適なハイブリッドネットワークアーキテクチャはどれですか？',
    options: [
      'AWS IoT Core + AWS Direct Connect + AWS Local Zones + AWS Wavelength + AWS IoT Greengrass + Transit Gateway',
      'AWS IoT Device Management + Site-to-Site VPN + AWS Outposts + CloudFront + AWS IoT Analytics + VPC Peering',
      'AWS IoT Core + AWS Direct Connect + AWS Outposts + AWS IoT Greengrass + AWS Local Zones + AWS Private 5G',
      'AWS IoT Device Defender + AWS Client VPN + AWS Snow Family + AWS IoT Events + Amazon Kinesis + Route 53'
    ],
    correct: 2,
    explanation: '正解は「AWS IoT Core + AWS Direct Connect + AWS Outposts + AWS IoT Greengrass + AWS Local Zones + AWS Private 5G」です。\n\nこの選択肢が最適な理由：\n\n**リアルタイム制御・低レイテンシ要件への対応：**\n1. **AWS Outposts**: \n   - 工場内でのAWSサービス実行\n   - 10ms以内の制御信号実現\n   - OT/IT分離のセキュリティ境界\n2. **AWS Local Zones**: \n   - 地域レベルでの低レイテンシ処理\n   - リアルタイムデータ分析\n3. **AWS Private 5G**: \n   - 工場内の無線IoT接続\n   - 低レイテンシ・高信頼性通信\n\n**大規模IoT管理への対応：**\n1. **AWS IoT Core**: \n   - 200万台以上のデバイス管理\n   - セキュアなデバイス認証\n   - メッセージルーティング\n2. **AWS IoT Greengrass**: \n   - エッジでのデータ処理\n   - オフライン動作対応\n   - 機械学習推論の実行\n\n**接続性・帯域幅要件への対応：**\n1. **AWS Direct Connect**: \n   - 1Gbps以上の専用帯域\n   - 安定した接続品質\n   - 200工場への拡張性\n\n**セキュリティ・分離要件への対応：**\n1. **OT/IT分離**: Outpostsによる物理的分離\n2. **デバイス認証**: IoT Coreの証明書ベース認証\n3. **ネットワーク分離**: VPCとサブネットによる論理分離\n\n**他の選択肢の問題点：**\n- **AWS IoT Core + AWS Direct Connect + AWS Local Zones + AWS Wavelength + AWS IoT Greengrass + Transit Gateway**: Wavelengthは5G通信事業者依存、工場環境に不適切\n- **AWS IoT Device Management + Site-to-Site VPN + AWS Outposts + CloudFront + AWS IoT Analytics + VPC Peering**: VPNは帯域幅・レイテンシ要件を満たせない\n- **AWS IoT Device Defender + AWS Client VPN + AWS Snow Family + AWS IoT Events + Amazon Kinesis + Route 53**: Snow Familyは一時的なデータ移行用、常時接続に不適切\n\n**産業IoT特化の利点：**\n1. **エッジコンピューティング**: \n   - Outpostsでの工場内処理\n   - Greengrassでのデバイスレベル処理\n2. **高可用性**: \n   - 複数の接続経路\n   - 工場間バックアップ\n3. **スケーラビリティ**: \n   - 200工場への段階的展開\n   - デバイス数の柔軟な拡張\n\n**災害復旧・事業継続：**\n- 工場間での生産切り替え\n- データの地理的分散\n- 自動フェイルオーバー機能\n\n**規制・コンプライアンス：**\n- データローカライゼーション対応\n- 各国製造業規制への準拠\n- 監査ログの完全保存'
  },
  {
    id: 'adv-net-003',
    category: 'ネットワーキング',
    question: '大手メディア企業が、4K/8K動画配信のためのグローバルCDNネットワークをAWSで構築しています。このシステムには以下の高度な要件があります：\n\n- 視聴者数：同時1,000万人以上\n- 配信品質：4K（25Mbps）、8K（100Mbps）\n- 地理的カバレッジ：世界200カ国以上\n- レイテンシ：初回再生開始まで2秒以内\n- 可用性：99.99%以上（大規模イベント時も維持）\n- 帯域幅：ピーク時1Tbps以上\n- セキュリティ：DRM、地域制限、DDoS対策\n- コスト効率：従来CDNより40%削減\n- 分析要件：リアルタイム視聴分析\n- 災害復旧：主要データセンター障害時の自動切り替え\n- 品質制御：動的ビットレート調整、適応的ストリーミング\n\nこの大規模動画配信要件を満たす最適なCDNアーキテクチャはどれですか？',
    options: [
      'Amazon CloudFront + AWS Global Accelerator + Amazon S3 + AWS Elemental MediaStore + AWS WAF + Lambda@Edge',
      'Amazon CloudFront + AWS Direct Connect + Amazon EFS + AWS Elemental MediaConvert + CloudWatch + API Gateway',
      'AWS Global Accelerator + Application Load Balancer + Amazon S3 + AWS Elemental MediaLive + Route 53 + ElastiCache',
      'Amazon CloudFront + AWS PrivateLink + Amazon FSx + AWS Elemental MediaPackage + AWS Shield + Step Functions'
    ],
    correct: 0,
    explanation: "正解は「Amazon CloudFront + AWS Global Accelerator + Amazon S3 + AWS Elemental MediaStore + AWS WAF + Lambda@Edge」です。\n\nこの選択肢が最適な理由：\n\n**大規模配信・パフォーマンス要件への対応：**\n1. **Amazon CloudFront**: \n   - 世界400+エッジロケーション\n   - 1Tbps以上の配信能力\n   - 2秒以内の初回再生開始\n   - 99.99%の可用性SLA\n2. **AWS Global Accelerator**: \n   - AWSバックボーンネットワーク活用\n   - 動的ルーティング最適化\n   - 災害復旧時の自動切り替え\n\n**高品質動画配信への対応：**\n1. **AWS Elemental MediaStore**: \n   - 4K/8K動画に最適化されたストレージ\n   - 低レイテンシ配信\n   - 高スループット（100Mbps対応）\n2. **Amazon S3**: \n   - 大容量動画ファイルの保存\n   - 11 9's の耐久性\n   - CloudFrontとの統合\n\n**セキュリティ・制御要件への対応：**\n1. **AWS WAF**: \n   - DDoS攻撃対策\n   - 地域制限の実装\n   - リアルタイム脅威検知\n2. **Lambda@Edge**: \n   - エッジでのDRM処理\n   - 動的コンテンツ生成\n   - A/Bテスト実装\n\n**運用・分析要件への対応：**\n1. **リアルタイム分析**: CloudFrontのリアルタイムログ\n2. **適応的ストリーミング**: Lambda@Edgeでの動的調整\n3. **コスト最適化**: CloudFrontの従量課金モデル\n\n**他の選択肢の問題点：**\n- **Amazon CloudFront + AWS Direct Connect + Amazon EFS + AWS Elemental MediaConvert + CloudWatch + API Gateway**: EFSは動画配信に不適切、MediaConvertは変換用途\n- **AWS Global Accelerator + Application Load Balancer + Amazon S3 + AWS Elemental MediaLive + Route 53 + ElastiCache**: ALBはCDNとして不適切、MediaLiveはライブ配信用途\n- **Amazon CloudFront + AWS PrivateLink + Amazon FSx + AWS Elemental MediaPackage + AWS Shield + Step Functions**: PrivateLinkは内部通信用、FSxは動画配信に不適切\n\n**大規模動画配信の特別な利点：**\n1. **エッジ最適化**: \n   - 視聴者に最も近いエッジからの配信\n   - 動的キャッシュ戦略\n   - 帯域幅の効率的利用\n2. **品質制御**: \n   - 適応的ビットレート\n   - ネットワーク状況に応じた品質調整\n   - バッファリング最小化\n3. **スケーラビリティ**: \n   - 1,000万同時視聴者対応\n   - 自動スケーリング\n   - ピーク時の安定配信\n\n**災害復旧・高可用性：**\n- 複数オリジンでの冗長化\n- 自動フェイルオーバー\n- リアルタイム監視とアラート\n\n**コスト最適化：**\n- エッジキャッシュによる帯域幅削減\n- 従量課金による効率化\n- 40%コスト削減の実現"
  },
  {
    id: 'adv-net-004',
    category: 'ネットワーキング',
    question: '大手金融機関が、高頻度取引（HFT）システムのネットワーク最適化を行っています。以下の要件があります：\n\n1. 取引所との通信レイテンシ：マイクロ秒レベル\n2. 99.999%の可用性要件\n3. 複数の取引所への同時接続\n4. ネットワーク障害時の瞬時フェイルオーバー\n5. 厳格なセキュリティ要件（金融業界規制）\n6. 帯域幅：10Gbps以上の専用線\n7. ネットワーク監視とパフォーマンス分析\n\nこの要件を満たすために、最も適切なネットワークアーキテクチャはどれですか？',
    options: [
      'AWS Direct Connect + Dedicated Connection + BGP + Enhanced Networking + Placement Groups + CloudWatch + VPC Flow Logsを使用し、超低レイテンシ金融ネットワークを構築する',
      'VPN Gateway + Customer Gateway + BGP + Route 53 + CloudFront + WAF + Shieldを使用し、セキュア金融ネットワークを構築する',
      'Transit Gateway + Direct Connect Gateway + PrivateLink + NAT Gateway + Internet Gateway + ELBを使用し、ハイブリッド金融ネットワークを構築する',
      'CloudFront + Global Accelerator + Route 53 + Application Load Balancer + Network Load Balancer + API Gatewayを使用し、グローバル金融ネットワークを構築する'
    ],
    correct: 0,
    explanation: '高頻度取引システムには、AWS Direct Connect + Dedicated Connection + BGP + Enhanced Networking + Placement Groups + CloudWatch + VPC Flow Logsの組み合わせが最適です。\n\n理由：\n1. **Direct Connect Dedicated**: 専用物理接続でマイクロ秒レベルのレイテンシを実現\n2. **BGP**: 複数パスでの冗長性と瞬時フェイルオーバー\n3. **Enhanced Networking**: SR-IOVによる高性能ネットワーキング\n4. **Placement Groups**: 同一AZ内でのクラスター配置による低レイテンシ\n5. **CloudWatch**: リアルタイムネットワーク監視\n6. **VPC Flow Logs**: セキュリティ監査とトラフィック分析\n\n他の選択肢の問題点：\n- **VPN Gateway + Customer Gateway + BGP + Route 53 + CloudFront + WAF + Shield**を使用し、セキュア金融ネットワークを構築する: VPNはマイクロ秒レベルのレイテンシ要件を満たせない\n- **Transit Gateway + Direct Connect Gateway + PrivateLink + NAT Gateway + Internet Gateway + ELB**を使用し、ハイブリッド金融ネットワークを構築する: Transit Gatewayは追加のホップによりレイテンシが増加\n- **CloudFront + Global Accelerator + Route 53 + Application Load Balancer + Network Load Balancer + API Gateway**を使用し、グローバル金融ネットワークを構築する: インターネット経由は金融取引の安定性要件に不適切'
  },
  {
    id: 'adv-net-005',
    category: 'ネットワーキング',
    question: '大手製造業が、グローバル工場のIoTネットワークを構築しています。以下の要件があります：\n\n1. 世界50拠点の工場ネットワーク統合\n2. 数万台のIoTデバイスからのデータ収集\n3. リアルタイム制御システムとの連携\n4. 工場間でのセキュアなデータ共有\n5. 災害時の自動フェイルオーバー\n6. 帯域幅の動的調整\n7. ネットワークセキュリティとコンプライアンス\n\nこの要件を満たすために、最も適切なグローバルIoTネットワークアーキテクチャはどれですか？',
    options: [
      'AWS Global Network + Transit Gateway + Direct Connect + IoT Core + Greengrass + PrivateLink + AWS Configを使用し、グローバルIoTネットワークを構築する',
      'VPC Peering + VPN Gateway + Internet Gateway + NAT Gateway + Route 53 + CloudFrontを使用し、従来型グローバルネットワークを構築する',
      'CloudWAN + Site-to-Site VPN + Customer Gateway + Route 53 Resolver + CloudWatch + GuardDutyを使用し、SD-WANベースネットワークを構築する',
      'Direct Connect + Virtual Private Gateway + BGP + Elastic Load Balancer + Auto Scaling + CloudTrailを使用し、専用線ベースネットワークを構築する'
    ],
    correct: 2,
    explanation: 'グローバル製造業のIoTネットワークには、CloudWAN + Site-to-Site VPN + Customer Gateway + Route 53 Resolver + CloudWatch + GuardDutyの組み合わせが最適です。\n\n理由：\n1. **CloudWAN**: グローバル拠点の統合ネットワーク管理\n2. **Site-to-Site VPN**: 工場間のセキュアな接続\n3. **Customer Gateway**: 既存工場システムとの統合\n4. **Route 53 Resolver**: 工場間でのDNS解決\n5. **CloudWatch**: IoTデバイスのネットワーク監視\n6. **GuardDuty**: 製造業特有のセキュリティ脅威検知\n\n他の選択肢の問題点：\n- **AWS Global Network + Transit Gateway + Direct Connect + IoT Core + Greengrass + PrivateLink + AWS Config**を使用し、グローバルIoTネットワークを構築する: IoT Coreは良いが、50拠点の統合管理にはCloudWANが最適\n- **VPC Peering + VPN Gateway + Internet Gateway + NAT Gateway + Route 53 + CloudFront**を使用し、従来型グローバルネットワークを構築する: VPC Peeringは大規模拠点間接続に複雑性が増加\n- **Direct Connect + Virtual Private Gateway + BGP + Elastic Load Balancer + Auto Scaling + CloudTrail**を使用し、専用線ベースネットワークを構築する: Direct Connectは全拠点への導入コストが高い'
  },
  {
    id: 'adv-net-006',
    category: 'ネットワーキング',
    question: '大手メディア企業が、ライブストリーミング配信のネットワーク最適化を行っています。以下の要件があります：\n\n1. 世界中への4K/8K動画配信\n2. 同時視聴者数：1000万人以上\n3. 配信遅延：2秒以下\n4. 動的な品質調整（アダプティブビットレート）\n5. DDoS攻撃からの保護\n6. 地域別のコンテンツ配信制御\n7. 帯域幅コストの最適化\n\nこの要件を満たすために、最も適切なライブストリーミングネットワークアーキテクチャはどれですか？',
    options: [
      'CloudFront + Global Accelerator + Route 53 + WAF + Shield + Lambda@Edge + Origin Shieldを使用し、グローバル配信ネットワークを構築する',
      'Application Load Balancer + Auto Scaling + ElastiCache + S3 + Transfer Acceleration + CloudWatchを使用し、従来型配信ネットワークを構築する',
      'Direct Connect + Transit Gateway + PrivateLink + VPC Endpoints + NAT Gateway + Internet Gatewayを使用し、専用線配信ネットワークを構築する',
      'API Gateway + Lambda + DynamoDB + Kinesis + SQS + SNSを使用し、サーバーレス配信ネットワークを構築する'
    ],
    correct: 0,
    explanation: 'ライブストリーミング配信には、CloudFront + Global Accelerator + Route 53 + WAF + Shield + Lambda@Edge + Origin Shieldの組み合わせが最適です。\n\n理由：\n1. **CloudFront**: 世界中のエッジロケーションでの高速コンテンツ配信\n2. **Global Accelerator**: Anycastネットワークによる低レイテンシ実現\n3. **Route 53**: 地理的ルーティングによる地域別配信制御\n4. **WAF + Shield**: DDoS攻撃からの多層防御\n5. **Lambda@Edge**: エッジでの動的品質調整\n6. **Origin Shield**: オリジンサーバーの負荷軽減とコスト最適化\n\n他の選択肢の問題点：\n- **Application Load Balancer + Auto Scaling + ElastiCache + S3 + Transfer Acceleration + CloudWatch**を使用し、従来型配信ネットワークを構築する: ALBは1000万同時視聴者の要件を満たせない\n- **Direct Connect + Transit Gateway + PrivateLink + VPC Endpoints + NAT Gateway + Internet Gateway**を使用し、専用線配信ネットワークを構築する: 専用線は配信ネットワークには不適切でコスト高\n- **API Gateway + Lambda + DynamoDB + Kinesis + SQS + SNS**を使用し、サーバーレス配信ネットワークを構築する: サーバーレスは大規模ライブストリーミングに不適切'
  },
  {
    id: 'adv-net-007',
    category: 'ネットワーキング',
    question: '大手病院グループが、医療情報システムのネットワーク統合を行っています。以下の要件があります：\n\n1. 複数病院間での患者情報共有\n2. HIPAA、GDPR等の医療プライバシー規制準拠\n3. 医療機器との安全な接続\n4. 緊急時の優先通信確保\n5. 医療画像の高速転送\n6. ネットワーク障害時の自動復旧\n7. 完全な通信ログと監査証跡\n\nこの要件を満たすために、最も適切な医療ネットワークアーキテクチャはどれですか？',
    options: [
      'PrivateLink + VPC Endpoints + Direct Connect + Transit Gateway + Route 53 Resolver + CloudTrail + Macieを使用し、HIPAA準拠医療ネットワークを構築する',
      'Site-to-Site VPN + Customer Gateway + Internet Gateway + NAT Gateway + Route 53 + CloudFrontを使用し、VPNベース医療ネットワークを構築する',
      'VPC Peering + Application Load Balancer + Auto Scaling + ElastiCache + CloudWatch + GuardDutyを使用し、従来型医療ネットワークを構築する',
      'API Gateway + Lambda + DynamoDB + Kinesis + SQS + Step Functionsを使用し、サーバーレス医療ネットワークを構築する'
    ],
    correct: 0,
    explanation: '医療情報システムには、PrivateLink + VPC Endpoints + Direct Connect + Transit Gateway + Route 53 Resolver + CloudTrail + Macieの組み合わせが最適です。\n\n理由：\n1. **PrivateLink**: インターネットを経由しない完全プライベート通信\n2. **VPC Endpoints**: AWSサービスへの安全なアクセス\n3. **Direct Connect**: 医療画像の高速転送と安定した接続\n4. **Transit Gateway**: 複数病院間の効率的なネットワーク統合\n5. **Route 53 Resolver**: 病院間でのセキュアなDNS解決\n6. **CloudTrail**: HIPAA要件の完全な監査証跡\n7. **Macie**: PHI（個人健康情報）の自動検出と保護\n\n他の選択肢の問題点：\n- **Site-to-Site VPN + Customer Gateway + Internet Gateway + NAT Gateway + Route 53 + CloudFront**を使用し、VPNベース医療ネットワークを構築する: インターネットVPNは医療データの安全性要件に不十分\n- **VPC Peering + Application Load Balancer + Auto Scaling + ElastiCache + CloudWatch + GuardDuty**を使用し、従来型医療ネットワークを構築する: VPC Peeringは大規模病院グループの管理に複雑\n- **API Gateway + Lambda + DynamoDB + Kinesis + SQS + Step Functions**を使用し、サーバーレス医療ネットワークを構築する: サーバーレスは医療機器との直接接続に不適切'
  },
  {
    id: 'adv-net-008',
    category: 'ネットワーキング',
    question: '大手ゲーム会社が、リアルタイムマルチプレイヤーゲームのネットワーク最適化を行っています。以下の要件があります：\n\n1. 世界中のプレイヤー間での低レイテンシ通信（50ms以下）\n2. 同時接続プレイヤー数：100万人以上\n3. ゲームセッション中の接続断防止\n4. DDoS攻撃からのゲームサーバー保護\n5. 地域別のゲームサーバー配置\n6. 動的なトラフィック負荷分散\n7. ネットワーク品質の監視と最適化\n\nこの要件を満たすために、最も適切なゲーミングネットワークアーキテクチャはどれですか？',
    options: [
      'Global Accelerator + GameLift + Network Load Balancer + Route 53 + Shield + CloudWatch + VPC Flow Logsを使用し、ゲーミング特化ネットワークを構築する',
      'CloudFront + Application Load Balancer + Auto Scaling + ElastiCache + WAF + GuardDutyを使用し、Webベースゲームネットワークを構築する',
      'Direct Connect + Transit Gateway + PrivateLink + VPC Endpoints + NAT Gateway + Internet Gatewayを使用し、専用線ゲームネットワークを構築する',
      'API Gateway + Lambda + DynamoDB + Kinesis + SQS + Step Functionsを使用し、サーバーレスゲームネットワークを構築する'
    ],
    correct: 0,
    explanation: 'リアルタイムマルチプレイヤーゲームには、Global Accelerator + GameLift + Network Load Balancer + Route 53 + Shield + CloudWatch + VPC Flow Logsの組み合わせが最適です。\n\n理由：\n1. **Global Accelerator**: Anycastネットワークで世界中から50ms以下のレイテンシ\n2. **GameLift**: ゲーム専用のマネージドサービスで100万同時接続対応\n3. **Network Load Balancer**: 低レイテンシでの高性能負荷分散\n4. **Route 53**: 地理的ルーティングによる最適サーバー選択\n5. **Shield**: DDoS攻撃からのゲームサーバー保護\n6. **CloudWatch**: ネットワーク品質のリアルタイム監視\n7. **VPC Flow Logs**: 接続品質の詳細分析\n\n他の選択肢の問題点：\n- **CloudFront + Application Load Balancer + Auto Scaling + ElastiCache + WAF + GuardDuty**を使用し、Webベースゲームネットワークを構築する: CloudFrontはリアルタイムゲーム通信に不適切\n- **Direct Connect + Transit Gateway + PrivateLink + VPC Endpoints + NAT Gateway + Internet Gateway**を使用し、専用線ゲームネットワークを構築する: 専用線は世界中のプレイヤーアクセスに不適切\n- **API Gateway + Lambda + DynamoDB + Kinesis + SQS + Step Functions**を使用し、サーバーレスゲームネットワークを構築する: サーバーレスは低レイテンシゲーム通信に不適切'
  },
  {
    id: 'adv-net-009',
    category: 'ネットワーキング',
    question: '大手航空会社が、航空管制システムとの連携ネットワークを構築しています。以下の要件があります：\n\n1. 航空管制システムとのリアルタイム通信\n2. 99.999%の可用性要件（人命に関わる）\n3. 複数の空港システムとの同時接続\n4. 航空業界規制（ICAO、FAA）への準拠\n5. 機密フライト情報の完全な保護\n6. 災害時の自動フェイルオーバー\n7. 通信の完全な監査証跡\n\nこの要件を満たすために、最も適切な航空業界向けネットワークアーキテクチャはどれですか？',
    options: [
      'Direct Connect + Dedicated Connection + BGP + PrivateLink + VPC Endpoints + CloudTrail + AWS Configを使用し、航空業界特化ネットワークを構築する',
      'Site-to-Site VPN + Customer Gateway + Internet Gateway + Route 53 + CloudFront + WAFを使用し、VPNベース航空ネットワークを構築する',
      'Transit Gateway + Direct Connect Gateway + Global Accelerator + Network Load Balancer + Auto Scaling + CloudWatchを使用し、ハイブリッド航空ネットワークを構築する',
      'CloudWAN + SD-WAN + Route 53 Resolver + GuardDuty + Macie + Shieldを使用し、SD-WAN航空ネットワークを構築する'
    ],
    correct: 0,
    explanation: '航空管制システム連携には、Direct Connect + Dedicated Connection + BGP + PrivateLink + VPC Endpoints + CloudTrail + AWS Configの組み合わせが最適です。\n\n理由：\n1. **Direct Connect Dedicated**: 航空管制との専用物理接続で最高の信頼性\n2. **BGP**: 複数パスでの冗長性と瞬時フェイルオーバー\n3. **PrivateLink**: インターネットを経由しない完全プライベート通信\n4. **VPC Endpoints**: AWSサービスへの安全なアクセス\n5. **CloudTrail**: 航空業界規制に必要な完全な監査証跡\n6. **AWS Config**: コンプライアンス設定の継続的監視\n\n他の選択肢の問題点：\n- **Site-to-Site VPN + Customer Gateway + Internet Gateway + Route 53 + CloudFront + WAF**を使用し、VPNベース航空ネットワークを構築する: インターネットVPNは航空管制の信頼性要件に不十分\n- **Transit Gateway + Direct Connect Gateway + Global Accelerator + Network Load Balancer + Auto Scaling + CloudWatch**を使用し、ハイブリッド航空ネットワークを構築する: Global Acceleratorは航空管制には不要で複雑性が増加\n- **CloudWAN + SD-WAN + Route 53 Resolver + GuardDuty + Macie + Shield**を使用し、SD-WAN航空ネットワークを構築する: SD-WANは航空業界の厳格な要件には新しすぎる技術'
  },
  {
    id: 'adv-net-010',
    category: 'ネットワーキング',
    question: '大手エネルギー会社が、スマートグリッドシステムのネットワークを構築しています。以下の要件があります：\n\n1. 発電所、変電所、配電網の統合監視\n2. 数百万台のスマートメーターとの通信\n3. リアルタイム電力需給調整\n4. サイバー攻撃からの重要インフラ保護\n5. 停電時の通信継続性\n6. エネルギー業界規制への準拠\n7. 地理的に分散した設備の効率的管理\n\nこの要件を満たすために、最も適切なスマートグリッドネットワークアーキテクチャはどれですか？',
    options: [
      'AWS Wavelength + 5G + IoT Core + Greengrass + PrivateLink + Direct Connect + GuardDutyを使用し、エッジコンピューティングベーススマートグリッドを構築する',
      'CloudWAN + Site-to-Site VPN + Transit Gateway + Route 53 + CloudWatch + AWS Config + Macieを使用し、統合スマートグリッドネットワークを構築する',
      'Direct Connect + Virtual Private Gateway + BGP + VPC Peering + NAT Gateway + Internet Gatewayを使用し、専用線ベーススマートグリッドを構築する',
      'Global Accelerator + CloudFront + Application Load Balancer + Auto Scaling + ElastiCache + WAFを使用し、クラウドベーススマートグリッドを構築する'
    ],
    correct: 1,
    explanation: 'スマートグリッドシステムには、CloudWAN + Site-to-Site VPN + Transit Gateway + Route 53 + CloudWatch + AWS Config + Macieの組み合わせが最適です。\n\n理由：\n1. **CloudWAN**: 地理的に分散した電力設備の統合ネットワーク管理\n2. **Site-to-Site VPN**: 発電所・変電所間のセキュアな接続\n3. **Transit Gateway**: 複雑な電力網の効率的なルーティング\n4. **Route 53**: 電力設備間でのDNS解決と負荷分散\n5. **CloudWatch**: リアルタイム電力需給監視\n6. **AWS Config**: エネルギー業界規制への準拠監視\n7. **Macie**: 重要インフラ情報の保護\n\n他の選択肢の問題点：\n- **AWS Wavelength + 5G + IoT Core + Greengrass + PrivateLink + Direct Connect + GuardDuty**を使用し、エッジコンピューティングベーススマートグリッドを構築する: Wavelengthは5G前提で、既存電力インフラには不適切\n- **Direct Connect + Virtual Private Gateway + BGP + VPC Peering + NAT Gateway + Internet Gateway**を使用し、専用線ベーススマートグリッドを構築する: 専用線は大規模電力網の管理に複雑\n- **Global Accelerator + CloudFront + Application Load Balancer + Auto Scaling + ElastiCache + WAF**を使用し、クラウドベーススマートグリッドを構築する: インターネットベースは重要インフラの安全性要件に不適切'
  },
  {
    id: 'adv-net-multi-001',
    category: 'ネットワーキング',
    question: '多国籍企業が、グローバル本社と各国支社を接続するハイブリッドクラウドネットワークを構築しています。以下の要件があります：\n\n**要件：**\n- 本社（東京）と支社（ニューヨーク、ロンドン、シンガポール）の接続\n- 各拠点間の専用線接続による高セキュリティ通信\n- AWS上のワークロードと各拠点の統合\n- 帯域幅：各拠点10Gbps以上\n- 冗長性とフェイルオーバー機能\n- 遅延最小化（拠点間100ms以内）\n\nこのネットワークアーキテクチャに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Direct Connect - 専用線接続サービス',
      'AWS Transit Gateway - ネットワーク統合ハブ',
      'AWS Global Accelerator - グローバルネットワーク最適化',
      'AWS VPN - 暗号化VPN接続',
      'AWS PrivateLink - プライベートサービス接続',
      'Amazon CloudFront - コンテンツ配信ネットワーク'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Direct Connect**\n- 各拠点からAWSへの専用線接続\n- 10Gbps以上の高帯域幅対応\n- インターネットを経由しない安全な通信\n- 一貫した低レイテンシ通信\n- 冗長接続による高可用性\n\n**2. AWS Transit Gateway**\n- 複数VPCと拠点間の統合接続ハブ\n- スケーラブルなルーティング管理\n- 複雑なネットワークトポロジーの簡素化\n- 各拠点からの統一アクセスポイント\n- 帯域幅の効率的な利用\n\n**3. AWS Global Accelerator**\n- AWSバックボーンネットワークの活用\n- 拠点間通信の遅延最小化\n- 自動フェイルオーバー機能\n- トラフィックの最適ルーティング\n- パフォーマンス監視と最適化\n\n**他の選択肢について：**\n- **AWS VPN**: 専用線要件を満たさず、帯域幅も不十分\n- **PrivateLink**: サービス間接続には有用だが拠点接続の主要機能ではない\n- **CloudFront**: コンテンツ配信には有用だが企業間通信の主要要件ではない'
  },
  {
    id: 'adv-net-multi-002',
    category: 'ネットワーキング',
    question: '大手銀行が、支店とデータセンター間のセキュアな金融取引ネットワークを構築しています。以下の要件があります：\n\n**要件：**\n- 全国500支店からの取引データ送信\n- 金融庁規制への完全準拠\n- エンドツーエンド暗号化\n- ネットワーク分離とマイクロセグメンテーション\n- 異常トラフィックの検知・遮断\n- 99.99%の可用性保証\n\nこのセキュアネットワークに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'AWS Network Firewall - 高度なネットワークセキュリティ',
      'AWS PrivateLink - プライベートサービス接続',
      'AWS WAF - Webアプリケーションファイアウォール',
      'Amazon VPC - 仮想プライベートクラウド',
      'AWS Shield - DDoS攻撃防御',
      'Amazon Route 53 - DNS管理サービス'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. AWS Network Firewall**\n- ステートフルなパケット検査\n- 侵入検知・防御システム（IDS/IPS）機能\n- カスタムルールによる金融取引の保護\n- 異常トラフィックの自動検知・遮断\n- 規制要件に対応したログ記録\n\n**2. AWS PrivateLink**\n- インターネットを経由しないプライベート接続\n- エンドツーエンドの暗号化通信\n- ネットワーク分離による高セキュリティ\n- 金融サービス間の安全な通信\n- 規制要件への準拠\n\n**他の選択肢について：**\n- **AWS WAF**: Webアプリケーション保護には有用だが、ネットワークレベルの要件には不十分\n- **VPC**: 基本的なネットワーク分離には必要だが、高度なセキュリティ機能が不足\n- **Shield**: DDoS防御には有用だが、金融取引の主要セキュリティ要件ではない\n- **Route 53**: DNS管理には必要だが、セキュリティの主要機能ではない'
  },
  {
    id: 'adv-net-multi-003',
    category: 'ネットワーキング',
    question: 'グローバル展開するゲーム会社が、リアルタイム対戦ゲームのネットワークインフラを構築しています。以下の要件があります：\n\n**要件：**\n- 世界中のプレイヤー間で50ms以下のレイテンシ\n- 同時接続プレイヤー数：100万人以上\n- DDoS攻撃からの保護\n- 地域別負荷分散\n- ゲームサーバーの動的スケーリング\n- ネットワーク品質の監視・最適化\n\nこのゲームネットワークに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Global Accelerator - グローバルネットワーク最適化',
      'Amazon CloudFront - エッジキャッシング',
      'Elastic Load Balancing - 負荷分散',
      'AWS Shield Advanced - DDoS攻撃防御',
      'Amazon Route 53 - 地理的DNSルーティング',
      'AWS Direct Connect - 専用線接続'
    ],
    correct: [
      0,
      3,
      4
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Global Accelerator**\n- AWSバックボーンネットワークによる最適ルーティング\n- 50ms以下のレイテンシ要件を満たす\n- 自動フェイルオーバーによる高可用性\n- リアルタイム通信の最適化\n- ネットワーク品質の継続的監視\n\n**2. AWS Shield Advanced**\n- 大規模DDoS攻撃からの保護\n- ゲームサービスの可用性保証\n- 24/7のDDoS対応チームサポート\n- 攻撃時の自動スケーリング\n- 詳細な攻撃分析とレポート\n\n**3. Amazon Route 53**\n- 地理的位置に基づく最適なサーバー選択\n- ヘルスチェックによる自動フェイルオーバー\n- 低レイテンシDNS解決\n- 地域別負荷分散の実現\n- ゲームサーバーの動的ルーティング\n\n**他の選択肢について：**\n- **CloudFront**: 静的コンテンツには有用だがリアルタイム通信には不適切\n- **ELB**: 負荷分散には有用だが、グローバルレイテンシ要件には不十分\n- **Direct Connect**: 専用線は企業向けで、一般ゲーマーには不適切'
  },
  {
    id: 'adv-sec-001',
    category: 'セキュリティ',
    question: '大手金融機関が、ゼロトラストセキュリティモデルを採用したクラウドファーストアーキテクチャをAWSで構築しています。このシステムには以下の厳格なセキュリティ要件があります：\n\n- ユーザー数：従業員50,000人、顧客500万人\n- アクセス制御：最小権限の原則、動的権限付与\n- 認証：多要素認証、生体認証、リスクベース認証\n- 監査要件：すべての操作の完全な監査ログ\n- 規制対応：SOX法、PCI DSS、GDPR、FFIEC準拠\n- データ分類：機密度レベル別の暗号化・アクセス制御\n- 脅威検知：リアルタイム異常検知、自動対応\n- インシデント対応：15分以内の初動対応\n- 地理的制限：国別データ主権、アクセス制限\n- 統合要件：既存のActive Directory、SIEM連携\n- 可用性：セキュリティ機能の99.99%可用性\n\nこの包括的なゼロトラストセキュリティ要件を満たす最適なアーキテクチャはどれですか？',
    options: [
      'AWS IAM Identity Center + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + AWS Config + AWS KMS + AWS Secrets Manager',
      'AWS Directory Service + AWS WAF + AWS CloudHSM + Amazon Inspector + AWS Systems Manager + AWS Certificate Manager + Amazon Macie',
      'AWS Single Sign-On + AWS Shield + AWS Firewall Manager + AWS Detective + AWS Audit Manager + AWS PrivateLink + AWS Resource Access Manager',
      'AWS Verified Access + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + Amazon Detective + AWS KMS + AWS Certificate Manager'
    ],
    correct: 3,
    explanation: '正解は「AWS Verified Access + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + Amazon Detective + AWS KMS + AWS Certificate Manager」です。\n\nこの選択肢が最適な理由：\n\n**ゼロトラストアーキテクチャへの対応：**\n1. **AWS Verified Access**: \n   - VPNレスアクセス制御\n   - デバイス・ユーザー・アプリケーションの継続的検証\n   - 動的ポリシー適用\n   - 最小権限アクセスの実現\n2. **Amazon Cognito**: \n   - 500万顧客の認証管理\n   - MFA、生体認証サポート\n   - リスクベース認証\n   - SAML/OIDC統合\n\n**包括的セキュリティ監視：**\n1. **Amazon GuardDuty**: \n   - 機械学習ベースの脅威検知\n   - リアルタイム異常検知\n   - 自動インシデント対応\n2. **AWS Security Hub**: \n   - 統合セキュリティダッシュボード\n   - コンプライアンス状況の可視化\n   - 自動修復アクション\n3. **Amazon Detective**: \n   - セキュリティインシデントの詳細分析\n   - 根本原因分析\n   - 15分以内の初動対応支援\n\n**監査・コンプライアンス：**\n1. **AWS CloudTrail**: \n   - すべてのAPI呼び出しの記録\n   - 改ざん防止ログ\n   - リアルタイム監視\n2. **AWS KMS**: \n   - データ分類別の暗号化キー管理\n   - 細かい権限制御\n   - 監査ログ統合\n\n**他の選択肢の問題点：**\n- **AWS IAM Identity Center + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + AWS Config + AWS KMS + AWS Secrets Manager**: IAM Identity Centerは従来型、ゼロトラストに最適化されていない\n- **AWS Directory Service + AWS WAF + AWS CloudHSM + Amazon Inspector + AWS Systems Manager + AWS Certificate Manager + Amazon Macie**: Directory Serviceは従来のAD拡張、ゼロトラスト要件に不十分\n- **AWS Single Sign-On + AWS Shield + AWS Firewall Manager + AWS Detective + AWS Audit Manager + AWS PrivateLink + AWS Resource Access Manager**: Single Sign-Onは廃止予定、包括的セキュリティ機能不足\n\n**ゼロトラストの特別な利点：**\n1. **継続的検証**: \n   - すべてのアクセスを検証\n   - デバイス・ユーザー・アプリケーションの信頼性評価\n   - 動的リスク評価\n2. **最小権限**: \n   - Just-In-Time アクセス\n   - 動的権限付与\n   - セッションベース制御\n3. **統合セキュリティ**: \n   - 既存SIEM連携\n   - Active Directory統合\n   - 統一セキュリティポリシー\n\n**規制対応の詳細：**\n- **SOX法**: 完全な監査ログと内部統制\n- **PCI DSS**: カード情報の暗号化と分離\n- **GDPR**: データ主権とプライバシー保護\n- **FFIEC**: 金融機関向けセキュリティ要件\n\n**高可用性・災害復旧：**\n- マルチリージョン展開\n- 自動フェイルオーバー\n- 99.99%可用性の実現'
  },
  {
    id: 'adv-sec-002',
    category: 'セキュリティ',
    question: '大手ヘルスケア企業が、患者データを扱う医療情報システムをAWSで構築しています。このシステムには以下の厳格なセキュリティ・プライバシー要件があります：\n\n- 患者データ：1億人以上の医療記録\n- 規制要件：HIPAA、GDPR、各国医療データ保護法準拠\n- データ分類：PHI（個人健康情報）の厳格な管理\n- アクセス制御：医師、看護師、研究者の役割別制御\n- 暗号化：保存時・転送時・使用時の暗号化\n- 監査：すべてのPHIアクセスの完全な監査証跡\n- 匿名化：研究用データの自動匿名化\n- 地域制限：国境を越えないデータ保存\n- インシデント対応：データ漏洩時の72時間以内報告\n- 統合要件：既存の病院システム（HL7 FHIR）\n- 可用性：医療システムの24時間365日稼働\n- バックアップ：災害時の迅速なデータ復旧\n\nこの医療データの厳格な要件を満たす最適なセキュリティアーキテクチャはどれですか？',
    options: [
      'AWS HealthLake + Amazon Comprehend Medical + AWS KMS + AWS CloudHSM + Amazon Macie + AWS Config + AWS CloudTrail + AWS Backup',
      'Amazon RDS + AWS Secrets Manager + AWS Certificate Manager + Amazon Inspector + AWS Security Hub + AWS Systems Manager + AWS DataSync',
      'Amazon DynamoDB + AWS IAM + AWS WAF + Amazon GuardDuty + AWS Shield + AWS Firewall Manager + AWS Resource Access Manager',
      'Amazon S3 + AWS Glue + Amazon SageMaker + AWS Lambda + Amazon API Gateway + AWS Cognito + Amazon CloudWatch'
    ],
    correct: 0,
    explanation: '正解は「AWS HealthLake + Amazon Comprehend Medical + AWS KMS + AWS CloudHSM + Amazon Macie + AWS Config + AWS CloudTrail + AWS Backup」です。\n\nこの選択肢が最適な理由：\n\n**医療データ特化への対応：**\n1. **AWS HealthLake**: \n   - HIPAA準拠の医療データレイク\n   - HL7 FHIR標準サポート\n   - 1億人以上の医療記録管理\n   - 既存病院システムとの統合\n2. **Amazon Comprehend Medical**: \n   - 医療テキストの自動分析\n   - PHI（個人健康情報）の自動検出\n   - 医療用語の正確な理解\n\n**最高レベルの暗号化：**\n1. **AWS CloudHSM**: \n   - FIPS 140-2 Level 3準拠\n   - 専用ハードウェアセキュリティモジュール\n   - 使用時暗号化の実現\n   - 医療グレードの暗号化\n2. **AWS KMS**: \n   - データ分類別の暗号化キー管理\n   - 細かいアクセス制御\n   - 監査ログ統合\n\n**PHI保護・プライバシー対応：**\n1. **Amazon Macie**: \n   - PHIの自動検出・分類\n   - 機械学習による異常アクセス検知\n   - データ漏洩リスクの評価\n   - 自動匿名化支援\n2. **AWS Config**: \n   - コンプライアンス状況の継続監視\n   - HIPAA設定の自動チェック\n   - 設定変更の追跡\n\n**監査・コンプライアンス：**\n1. **AWS CloudTrail**: \n   - すべてのPHIアクセスの記録\n   - 改ざん防止ログ\n   - 72時間以内報告の支援\n2. **AWS Backup**: \n   - HIPAA準拠のバックアップ\n   - 暗号化バックアップ\n   - 迅速な災害復旧\n\n**他の選択肢の問題点：**\n- **Amazon RDS + AWS Secrets Manager + AWS Certificate Manager + Amazon Inspector + AWS Security Hub + AWS Systems Manager + AWS DataSync**: 医療データ特化機能なし、HIPAA最適化不十分\n- **Amazon DynamoDB + AWS IAM + AWS WAF + Amazon GuardDuty + AWS Shield + AWS Firewall Manager + AWS Resource Access Manager**: 医療業界要件に特化していない、PHI保護機能不足\n- **Amazon S3 + AWS Glue + Amazon SageMaker + AWS Lambda + Amazon API Gateway + AWS Cognito + Amazon CloudWatch**: セキュリティ機能が基本的、医療規制対応不十分\n\n**医療業界特化の利点：**\n1. **HIPAA準拠**: \n   - BAA（Business Associate Agreement）対応\n   - 医療データの適切な取り扱い\n   - 規制要件の自動チェック\n2. **HL7 FHIR統合**: \n   - 標準的な医療データ交換\n   - 既存システムとの互換性\n   - 相互運用性の確保\n3. **医療AI**: \n   - 医療用語の正確な理解\n   - 診断支援機能\n   - 研究データの自動匿名化\n\n**地域制限・データ主権：**\n- リージョン別データ保存\n- 国境を越えないデータ処理\n- GDPR等の地域規制対応\n\n**高可用性・災害復旧：**\n- 24時間365日稼働保証\n- 自動バックアップ\n- 迅速な災害復旧\n- 医療システムの継続性確保'
  },
  {
    id: 'adv-sec-003',
    category: 'セキュリティ',
    question: '大手政府機関が、機密情報を扱う国家安全保障システムをAWSで構築しています。このシステムには以下の最高レベルのセキュリティ要件があります：\n\n- 機密レベル：Top Secret、Secret、Confidential、Unclassified\n- 認証：多層認証、生体認証、スマートカード認証\n- アクセス制御：Need-to-Know原則、コンパートメント化\n- 暗号化：NSA Suite B暗号、量子耐性暗号の準備\n- 監査：すべての操作の完全な監査証跡、改ざん防止\n- 物理セキュリティ：専用ハードウェア、地理的分離\n- ネットワーク分離：機密レベル別の完全分離\n- インシデント対応：即座の脅威対応、自動隔離\n- 規制要件：FedRAMP High、FISMA、NIST準拠\n- 可用性：国家安全保障の24時間365日稼働\n- 災害復旧：地理的に分散した冗長化\n- サプライチェーン：信頼できるコンポーネントのみ使用\n\nこの国家安全保障レベルの要件を満たす最適なセキュリティアーキテクチャはどれですか？',
    options: [
      'AWS GovCloud + AWS CloudHSM + AWS Certificate Manager + Amazon Inspector + AWS Config + AWS CloudTrail + AWS KMS + AWS Secrets Manager',
      'AWS GovCloud + AWS CloudHSM + AWS Private CA + Amazon GuardDuty + AWS Security Hub + AWS CloudTrail + AWS Nitro Enclaves + AWS Key Management Service',
      'AWS Commercial + AWS WAF + AWS Shield + Amazon Macie + AWS Systems Manager + AWS Backup + AWS DataSync + Amazon S3',
      'AWS Outposts + AWS Direct Connect + AWS Site-to-Site VPN + AWS Client VPN + AWS PrivateLink + AWS Transit Gateway + Route 53 Resolver'
    ],
    correct: 1,
    explanation: '正解は「AWS GovCloud + AWS CloudHSM + AWS Private CA + Amazon GuardDuty + AWS Security Hub + AWS CloudTrail + AWS Nitro Enclaves + AWS Key Management Service」です。\n\nこの選択肢が最適な理由：\n\n**政府・国家安全保障要件への対応：**\n1. **AWS GovCloud**: \n   - FedRAMP High認証取得\n   - 米国政府専用クラウド環境\n   - 物理的・論理的分離\n   - セキュリティクリアランス保持者のみ運用\n2. **AWS Nitro Enclaves**: \n   - 機密データの完全分離実行環境\n   - ハードウェアレベルの分離\n   - 量子耐性暗号の実装準備\n\n**最高レベルの暗号化：**\n1. **AWS CloudHSM**: \n   - FIPS 140-2 Level 3準拠\n   - NSA Suite B暗号サポート\n   - 専用ハードウェアセキュリティモジュール\n   - 量子耐性暗号への移行準備\n2. **AWS Private CA**: \n   - 政府専用認証局\n   - 階層的PKI構造\n   - スマートカード認証統合\n\n**包括的脅威検知・対応：**\n1. **Amazon GuardDuty**: \n   - 機械学習ベースの脅威検知\n   - 国家レベルの脅威インテリジェンス\n   - 自動隔離・対応機能\n2. **AWS Security Hub**: \n   - 統合セキュリティ管理\n   - NIST準拠チェック\n   - 自動コンプライアンス監視\n\n**監査・コンプライアンス：**\n1. **AWS CloudTrail**: \n   - 改ざん防止監査ログ\n   - すべての操作の完全記録\n   - リアルタイム監視\n2. **機密レベル別管理**: \n   - コンパートメント化されたアクセス制御\n   - Need-to-Know原則の実装\n\n**他の選択肢の問題点：**\n- **AWS GovCloud + AWS CloudHSM + AWS Certificate Manager + Amazon Inspector + AWS Config + AWS CloudTrail + AWS KMS + AWS Secrets Manager**: Certificate Managerは政府要件に不十分、Private CAが必要\n- **AWS Commercial + AWS WAF + AWS Shield + Amazon Macie + AWS Systems Manager + AWS Backup + AWS DataSync + Amazon S3**: Commercial環境は政府機密情報に不適切\n- **AWS Outposts + AWS Direct Connect + AWS Site-to-Site VPN + AWS Client VPN + AWS PrivateLink + AWS Transit Gateway + Route 53 Resolver**: ネットワーク機能のみ、包括的セキュリティ不足\n\n**国家安全保障特化の利点：**\n1. **物理セキュリティ**: \n   - 専用データセンター\n   - セキュリティクリアランス保持者のみアクセス\n   - 地理的分離による冗長化\n2. **コンプライアンス**: \n   - FedRAMP High自動準拠\n   - FISMA要件の継続的監視\n   - NIST フレームワーク実装\n3. **サプライチェーン**: \n   - 信頼できるコンポーネントのみ\n   - ハードウェア・ソフトウェアの検証\n   - 国産技術の優先使用\n\n**高度な分離・保護：**\n1. **ネットワーク分離**: \n   - 機密レベル別の完全分離\n   - エアギャップ環境の実現\n   - 横展開攻撃の防止\n2. **データ保護**: \n   - 機密レベル別の暗号化\n   - アクセス制御の階層化\n   - データ漏洩の完全防止\n\n**災害復旧・事業継続：**\n- 地理的に分散した冗長化\n- 国家安全保障の継続性確保\n- 自動フェイルオーバー機能'
  },
  {
    id: 'adv-sec-004',
    category: 'セキュリティ',
    question: '大手金融機関が、オンラインバンキングシステムのセキュリティ強化を行っています。以下の要件があります：\n\n1. 多要素認証（MFA）の強制実装\n2. 不正アクセスのリアルタイム検知\n3. PCI DSS、SOX法への準拠\n4. 顧客データの完全な暗号化\n5. 内部脅威の検知と防止\n6. 金融取引の改ざん防止\n7. 規制当局への監査レポート自動生成\n\nこの要件を満たすために、最も適切な金融業界向けセキュリティアーキテクチャはどれですか？',
    options: [
      'Cognito + MFA + GuardDuty + Macie + CloudTrail + Config + KMS + Certificate Manager + Security Hubを使用し、包括的金融セキュリティを構築する',
      'IAM + WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backupを使用し、従来型金融セキュリティを構築する',
      'Active Directory + ADFS + SAML + LDAP + Kerberos + PKI + HSM + SIEMを使用し、オンプレミス統合金融セキュリティを構築する',
      'API Gateway + Lambda Authorizer + DynamoDB + S3 + CloudFront + Route 53 + ACMを使用し、サーバーレス金融セキュリティを構築する'
    ],
    correct: 0,
    explanation: '金融機関のオンラインバンキングには、Cognito + MFA + GuardDuty + Macie + CloudTrail + Config + KMS + Certificate Manager + Security Hubの組み合わせが最適です。\n\n理由：\n1. **Cognito + MFA**: 強力な多要素認証とユーザー管理\n2. **GuardDuty**: 機械学習による不正アクセスのリアルタイム検知\n3. **Macie**: 顧客データの自動分類と保護\n4. **CloudTrail**: PCI DSS要件の完全な監査証跡\n5. **Config**: SOX法準拠のための設定変更監視\n6. **KMS**: 金融データの暗号化キー管理\n7. **Security Hub**: 統合セキュリティダッシュボードと自動レポート\n\n他の選択肢の問題点：\n- **IAM + WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backup**を使用し、従来型金融セキュリティを構築する: 従来型アプローチは金融業界の高度な脅威検知に不十分\n- **Active Directory + ADFS + SAML + LDAP + Kerberos + PKI + HSM + SIEM**を使用し、オンプレミス統合金融セキュリティを構築する: オンプレミス統合は運用負荷が高く、スケーラビリティに限界\n- **API Gateway + Lambda Authorizer + DynamoDB + S3 + CloudFront + Route 53 + ACM**を使用し、サーバーレス金融セキュリティを構築する: サーバーレスのみでは金融業界の包括的セキュリティ要件に不十分'
  },
  {
    id: 'adv-sec-005',
    category: 'セキュリティ',
    question: '大手製薬会社が、創薬研究データのセキュリティ強化を行っています。以下の要件があります：\n\n1. FDA 21 CFR Part 11への準拠\n2. 研究データの完全性保証\n3. 知的財産の保護\n4. 研究者間でのセキュアなデータ共有\n5. データアクセスの詳細な監査証跡\n6. 地域別のデータ保護規制対応\n7. サイバー攻撃からの研究データ保護\n\nこの要件を満たすために、最も適切な製薬業界向けセキュリティアーキテクチャはどれですか？',
    options: [
      'S3 Object Lock + Macie + CloudTrail + KMS + Certificate Manager + GuardDuty + Config + Security Hubを使用し、GxP準拠セキュリティを構築する',
      'EFS + AWS Backup + IAM + VPC + Security Groups + NACLs + CloudWatch + Inspector を使用し、ファイルベースセキュリティを構築する',
      'DocumentDB + Encryption + VPC Endpoints + PrivateLink + WAF + Shield + Route 53を使用し、データベースセキュリティを構築する',
      'Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACM + WAFを使用し、サーバーレスセキュリティを構築する'
    ],
    correct: 0,
    explanation: '製薬会社の研究データセキュリティには、S3 Object Lock + Macie + CloudTrail + KMS + Certificate Manager + GuardDuty + Config + Security Hubの組み合わせが最適です。\n\n理由：\n1. **S3 Object Lock**: WORM（Write Once Read Many）でデータ改ざん防止\n2. **Macie**: 機密研究データの自動分類と知的財産保護\n3. **CloudTrail**: FDA 21 CFR Part 11要件の完全な監査証跡\n4. **KMS**: 研究データの暗号化と鍵管理\n5. **GuardDuty**: サイバー攻撃の検知と防御\n6. **Config**: GxP準拠のための設定変更監視\n7. **Security Hub**: 統合セキュリティ管理\n\n他の選択肢の問題点：\n- **EFS + AWS Backup + IAM + VPC + Security Groups + NACLs + CloudWatch + Inspector**を使用し、ファイルベースセキュリティを構築する: EFSはオブジェクトロック機能がなく、データ改ざん防止が困難\n- **DocumentDB + Encryption + VPC Endpoints + PrivateLink + WAF + Shield + Route 53**を使用し、データベースセキュリティを構築する: DocumentDBのみでは製薬業界の包括的セキュリティ要件に不十分\n- **Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACM + WAF**を使用し、サーバーレスセキュリティを構築する: サーバーレスは製薬業界の厳格なデータ整合性要件に不適切'
  },
  {
    id: 'adv-sec-006',
    category: 'セキュリティ',
    question: '大手病院グループが、電子カルテシステムのセキュリティ強化を行っています。以下の要件があります：\n\n1. HIPAA、GDPR等の医療プライバシー規制準拠\n2. 患者データの完全な暗号化\n3. 医療従事者の役割ベースアクセス制御\n4. 医療機器との安全な接続\n5. データ漏洩の即座検知\n6. 医療データの改ざん防止\n7. 監査当局への自動レポート生成\n\nこの要件を満たすために、最も適切な医療業界向けセキュリティアーキテクチャはどれですか？',
    options: [
      'Macie + GuardDuty + CloudTrail + KMS + IAM + Cognito + Config + Security Hub + PrivateLinkを使用し、HIPAA準拠セキュリティを構築する',
      'WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backupを使用し、従来型医療セキュリティを構築する',
      'Active Directory + SAML + LDAP + Certificate Authority + VPN + Firewall + SIEMを使用し、オンプレミス医療セキュリティを構築する',
      'API Gateway + Lambda + DynamoDB + S3 + CloudFront + Route 53 + ACMを使用し、サーバーレス医療セキュリティを構築する'
    ],
    correct: 0,
    explanation: '病院の電子カルテシステムには、Macie + GuardDuty + CloudTrail + KMS + IAM + Cognito + Config + Security Hub + PrivateLinkの組み合わせが最適です。\n\n理由：\n1. **Macie**: PHI（個人健康情報）の自動検出と保護\n2. **GuardDuty**: 医療データへの不正アクセス検知\n3. **CloudTrail**: HIPAA要件の完全な監査証跡\n4. **KMS**: 患者データの暗号化管理\n5. **IAM + Cognito**: 医療従事者の役割ベースアクセス制御\n6. **Config**: HIPAA準拠設定の継続的監視\n7. **PrivateLink**: 医療機器との安全な接続\n\n他の選択肢の問題点：\n- **WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backup**を使用し、従来型医療セキュリティを構築する: 従来型アプローチは医療業界の高度なプライバシー要件に不十分\n- **Active Directory + SAML + LDAP + Certificate Authority + VPN + Firewall + SIEM**を使用し、オンプレミス医療セキュリティを構築する: オンプレミスは医療機関の運用負荷とコスト面で課題\n- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + Route 53 + ACM**を使用し、サーバーレス医療セキュリティを構築する: サーバーレスのみでは医療業界の包括的セキュリティ要件に不十分'
  },
  {
    id: 'adv-sec-007',
    category: 'セキュリティ',
    question: '大手政府機関が、機密情報システムのセキュリティ強化を行っています。以下の要件があります：\n\n1. 最高機密レベルのデータ保護\n2. 多層防御によるサイバー攻撃対策\n3. 内部脅威の検知と防止\n4. ゼロトラストアーキテクチャの実装\n5. 国家安全保障に関わるデータの分離\n6. 完全な監査証跡と証拠保全\n7. 災害時の事業継続性\n\nこの要件を満たすために、最も適切な政府機関向けセキュリティアーキテクチャはどれですか？',
    options: [
      'AWS GovCloud + CloudHSM + GuardDuty + Macie + CloudTrail + Config + Security Hub + PrivateLink + Direct Connectを使用し、政府機関特化セキュリティを構築する',
      'IAM + MFA + WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logsを使用し、標準的政府セキュリティを構築する',
      'Dedicated Hosts + Nitro Enclaves + KMS + Certificate Manager + Secrets Manager + Parameter Storeを使用し、専用環境セキュリティを構築する',
      'Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACMを使用し、サーバーレス政府セキュリティを構築する'
    ],
    correct: 0,
    explanation: '政府機関の機密情報システムには、AWS GovCloud + CloudHSM + GuardDuty + Macie + CloudTrail + Config + Security Hub + PrivateLink + Direct Connectの組み合わせが最適です。\n\n理由：\n1. **AWS GovCloud**: 政府機関専用の分離されたクラウド環境\n2. **CloudHSM**: 最高機密データの暗号化キー管理\n3. **GuardDuty**: 高度な脅威検知と内部脅威対策\n4. **Macie**: 機密情報の自動分類と保護\n5. **CloudTrail**: 完全な監査証跡と証拠保全\n6. **Config**: セキュリティ設定の継続的監視\n7. **PrivateLink + Direct Connect**: ゼロトラストネットワーク\n\n他の選択肢の問題点：\n- **IAM + MFA + WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs**を使用し、標準的政府セキュリティを構築する: 標準環境は政府機関の最高機密要件に不十分\n- **Dedicated Hosts + Nitro Enclaves + KMS + Certificate Manager + Secrets Manager + Parameter Store**を使用し、専用環境セキュリティを構築する: 専用環境のみでは包括的セキュリティ管理が困難\n- **Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACM**を使用し、サーバーレス政府セキュリティを構築する: サーバーレスは政府機関の厳格なセキュリティ要件に不適切'
  },
  {
    id: 'adv-sec-008',
    category: 'セキュリティ',
    question: '大手エネルギー会社が、重要インフラのサイバーセキュリティ強化を行っています。以下の要件があります：\n\n1. 発電所制御システムの保護\n2. 産業制御システム（ICS/SCADA）のセキュリティ\n3. サイバー攻撃による停電防止\n4. 重要インフラ保護規制への準拠\n5. 物理セキュリティとサイバーセキュリティの統合\n6. リアルタイム脅威検知と対応\n7. 事業継続性の確保\n\nこの要件を満たすために、最も適切な重要インフラ向けセキュリティアーキテクチャはどれですか？',
    options: [
      'IoT Device Defender + GuardDuty + Macie + CloudTrail + Config + Security Hub + PrivateLink + Direct Connect + AWS Outpostsを使用し、重要インフラセキュリティを構築する',
      'WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backupを使用し、従来型インフラセキュリティを構築する',
      'Firewall + IDS/IPS + SIEM + PKI + VPN + Network Segmentation + Air Gapを使用し、オンプレミスインフラセキュリティを構築する',
      'Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACMを使用し、サーバーレスインフラセキュリティを構築する'
    ],
    correct: 0,
    explanation: '重要インフラのサイバーセキュリティには、IoT Device Defender + GuardDuty + Macie + CloudTrail + Config + Security Hub + PrivateLink + Direct Connect + AWS Outpostsの組み合わせが最適です。\n\n理由：\n1. **IoT Device Defender**: 産業制御システムのデバイスセキュリティ\n2. **GuardDuty**: 重要インフラへの高度な脅威検知\n3. **Macie**: 重要インフラ情報の分類と保護\n4. **CloudTrail**: 重要インフラ保護規制の監査証跡\n5. **Config**: セキュリティ設定の継続的監視\n6. **PrivateLink + Direct Connect**: 完全プライベート通信\n7. **AWS Outposts**: オンプレミス制御システムとの統合\n\n他の選択肢の問題点：\n- **WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backup**を使用し、従来型インフラセキュリティを構築する: 従来型アプローチは産業制御システムの特殊要件に不十分\n- **Firewall + IDS/IPS + SIEM + PKI + VPN + Network Segmentation + Air Gap**を使用し、オンプレミスインフラセキュリティを構築する: オンプレミスのみでは最新の脅威対策に限界\n- **Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACM**を使用し、サーバーレスインフラセキュリティを構築する: サーバーレスは重要インフラの制御システムに不適切'
  },
  {
    id: 'adv-sec-009',
    category: 'セキュリティ',
    question: '大手航空会社が、航空管制システムのセキュリティ強化を行っています。以下の要件があります：\n\n1. 航空安全に関わるシステムの保護\n2. 国際航空規制（ICAO、FAA）への準拠\n3. 航空機との通信セキュリティ\n4. 空港システムとの安全な連携\n5. サイバーテロからの防御\n6. フライト情報の機密性保護\n7. 緊急時の通信継続性\n\nこの要件を満たすために、最も適切な航空業界向けセキュリティアーキテクチャはどれですか？',
    options: [
      'GuardDuty + Macie + CloudTrail + KMS + Certificate Manager + Config + Security Hub + PrivateLink + Direct Connect + CloudHSMを使用し、航空業界特化セキュリティを構築する',
      'WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backupを使用し、従来型航空セキュリティを構築する',
      'Firewall + IDS/IPS + SIEM + PKI + VPN + Network Segmentation + HSMを使用し、オンプレミス航空セキュリティを構築する',
      'API Gateway + Lambda + Cognito + DynamoDB + S3 + CloudFront + ACMを使用し、サーバーレス航空セキュリティを構築する'
    ],
    correct: 0,
    explanation: '航空管制システムのセキュリティには、GuardDuty + Macie + CloudTrail + KMS + Certificate Manager + Config + Security Hub + PrivateLink + Direct Connect + CloudHSMの組み合わせが最適です。\n\n理由：\n1. **GuardDuty**: 航空システムへの高度な脅威検知\n2. **Macie**: フライト情報の機密性保護\n3. **CloudTrail**: 航空規制要件の完全な監査証跡\n4. **KMS + CloudHSM**: 航空機通信の暗号化管理\n5. **Certificate Manager**: 空港システム間の安全な認証\n6. **Config**: 航空規制準拠の継続的監視\n7. **PrivateLink + Direct Connect**: 航空管制との専用通信\n\n他の選択肢の問題点：\n- **WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backup**を使用し、従来型航空セキュリティを構築する: 従来型アプローチは航空業界の厳格な安全要件に不十分\n- **Firewall + IDS/IPS + SIEM + PKI + VPN + Network Segmentation + HSM**を使用し、オンプレミス航空セキュリティを構築する: オンプレミスのみでは最新のサイバー脅威対策に限界\n- **Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACM**を使用し、サーバーレス航空セキュリティを構築する: サーバーレスは航空管制システムの信頼性要件に不適切'
  },
  {
    id: 'adv-sec-010',
    category: 'セキュリティ',
    question: '大手防衛関連企業が、軍事システムのセキュリティ強化を行っています。以下の要件があります：\n\n1. 最高機密軍事情報の保護\n2. 多国間での機密情報共有\n3. サイバー戦争からの防御\n4. 軍事規格（MIL-STD）への準拠\n5. 物理的・論理的分離の実装\n6. 完全な証拠保全と監査証跡\n7. 戦時下での通信継続性\n\nこの要件を満たすために、最も適切な防衛産業向けセキュリティアーキテクチャはどれですか？',
    options: [
      'AWS Secret Region + CloudHSM + Nitro Enclaves + GuardDuty + Macie + CloudTrail + Config + Security Hub + Dedicated Hosts + PrivateLinkを使用し、軍事特化セキュリティを構築する',
      'GovCloud + KMS + Certificate Manager + IAM + WAF + Shield + Inspector + Systems Managerを使用し、政府標準セキュリティを構築する',
      'Air-Gapped Network + Hardware Security Module + Multi-Level Security + Trusted Computing + PKI + SIEMを使用し、完全分離セキュリティを構築する',
      'Dedicated Hosts + VPC + Security Groups + NACLs + CloudWatch + VPC Flow Logs + AWS Backupを使用し、専用環境セキュリティを構築する'
    ],
    correct: 0,
    explanation: '防衛関連企業の軍事システムには、AWS Secret Region + CloudHSM + Nitro Enclaves + GuardDuty + Macie + CloudTrail + Config + Security Hub + Dedicated Hosts + PrivateLinkの組み合わせが最適です。\n\n理由：\n1. **AWS Secret Region**: 軍事専用の最高機密クラウド環境\n2. **CloudHSM**: 軍事暗号化標準の鍵管理\n3. **Nitro Enclaves**: 機密処理の完全分離実行環境\n4. **GuardDuty**: 高度なサイバー攻撃検知\n5. **Macie**: 軍事機密情報の自動分類と保護\n6. **CloudTrail**: 軍事規格要件の完全な監査証跡\n7. **Dedicated Hosts**: 物理的分離による最高レベルセキュリティ\n\n他の選択肢の問題点：\n- **GovCloud + KMS + Certificate Manager + IAM + WAF + Shield + Inspector + Systems Manager**を使用し、政府標準セキュリティを構築する: GovCloudは軍事最高機密レベルには不十分\n- **Air-Gapped Network + Hardware Security Module + Multi-Level Security + Trusted Computing + PKI + SIEM**を使用し、完全分離セキュリティを構築する: 完全分離は運用性とコスト面で課題\n- **Dedicated Hosts + VPC + Security Groups + NACLs + CloudWatch + VPC Flow Logs + AWS Backup**を使用し、専用環境セキュリティを構築する: 専用環境のみでは軍事特有の高度な脅威対策に不十分'
  },
  {
    id: 'adv-sec-multi-001',
    category: 'セキュリティ',
    question: '大手金融機関が、PCI DSS準拠のクレジットカード決済システムを構築しています。以下の要件があります：\n\n**要件：**\n- PCI DSS Level 1準拠\n- カード情報の完全暗号化\n- アクセスログの改ざん防止\n- 定期的な脆弱性スキャン\n- 侵入検知・防御システム\n- 最小権限アクセス制御\n\nこのセキュリティアーキテクチャに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS KMS - 暗号化キー管理サービス',
      'AWS CloudTrail - API監査ログサービス',
      'Amazon GuardDuty - 脅威検知サービス',
      'AWS WAF - Webアプリケーションファイアウォール',
      'AWS Inspector - 脆弱性評価サービス',
      'AWS Secrets Manager - 機密情報管理サービス'
    ],
    correct: [
      0,
      1,
      4
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS KMS**\n- PCI DSS要件のカード情報暗号化\n- FIPS 140-2 Level 2認証済みHSM\n- 暗号化キーの安全な管理と監査\n- 自動キーローテーション機能\n- 細かいアクセス制御とログ記録\n\n**2. AWS CloudTrail**\n- 全API呼び出しの完全な監査ログ\n- ログの改ざん防止機能\n- PCI DSS要件の監査証跡\n- リアルタイム監視とアラート\n- 長期保存と検索機能\n\n**3. AWS Inspector**\n- 定期的な自動脆弱性スキャン\n- PCI DSS要件のセキュリティ評価\n- アプリケーションとネットワークの評価\n- 修復ガイダンスの提供\n- コンプライアンス報告書の生成\n\n**他の選択肢について：**\n- **GuardDuty**: 脅威検知には有用だが、PCI DSS特有の要件には不十分\n- **WAF**: Web攻撃防御には重要だが、暗号化や監査の主要要件ではない\n- **Secrets Manager**: 機密管理には有用だが、PCI DSS特有の暗号化要件には不十分'
  },
  {
    id: 'adv-sec-multi-002',
    category: 'セキュリティ',
    question: '政府機関が、機密情報を扱うクラウドシステムを構築しています。以下の要件があります：\n\n**要件：**\n- 政府セキュリティ基準への準拠\n- 多要素認証の強制\n- 特権アクセス管理\n- データ分類と保護\n- インシデント対応の自動化\n- ゼロトラスト原則の実装\n\nこのセキュリティフレームワークに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'AWS IAM Identity Center - 統合ID管理',
      'Amazon Macie - データ分類・保護サービス',
      'AWS Security Hub - セキュリティ統合管理',
      'AWS Config - 設定管理・コンプライアンス',
      'AWS Systems Manager - システム管理サービス',
      'Amazon Detective - セキュリティ調査サービス'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. AWS IAM Identity Center**\n- 統合シングルサインオン（SSO）\n- 多要素認証（MFA）の強制\n- 特権アクセス管理（PAM）機能\n- ゼロトラスト原則の実装\n- 政府標準の認証プロトコル対応\n\n**2. Amazon Macie**\n- 機密データの自動分類\n- 個人情報・機密情報の検出\n- データ保護ポリシーの自動適用\n- 政府セキュリティ基準への準拠\n- 異常アクセスの検知とアラート\n\n**他の選択肢について：**\n- **Security Hub**: セキュリティ統合管理には有用だが、ID管理やデータ分類の主要機能ではない\n- **Config**: コンプライアンス管理には重要だが、認証やデータ保護の主要要件ではない\n- **Systems Manager**: システム管理には有用だが、セキュリティの主要機能ではない\n- **Detective**: インシデント調査には有用だが、予防的セキュリティ対策ではない'
  },
  {
    id: 'adv-sec-multi-003',
    category: 'セキュリティ',
    question: 'ヘルスケア企業が、HIPAA準拠の患者データ管理システムを構築しています。以下の要件があります：\n\n**要件：**\n- HIPAA規制への完全準拠\n- 患者データの暗号化（保存時・転送時）\n- アクセス制御と監査ログ\n- データ漏洩の防止と検知\n- 災害復旧とバックアップ\n- 医療従事者の認証管理\n\nこのHIPAA準拠システムに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS KMS - 医療データ暗号化',
      'AWS CloudHSM - ハードウェアセキュリティモジュール',
      'Amazon Macie - 機密データ検知・保護',
      'AWS Certificate Manager - SSL/TLS証明書管理',
      'AWS Backup - 統合バックアップサービス',
      'AWS IAM - アクセス管理サービス'
    ],
    correct: [
      0,
      2,
      4
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS KMS**\n- HIPAA準拠の暗号化キー管理\n- 患者データの保存時暗号化\n- 細かいアクセス制御とキー使用監査\n- 自動キーローテーション\n- 医療業界標準への対応\n\n**2. Amazon Macie**\n- 患者の個人健康情報（PHI）の自動検出\n- HIPAA規制対象データの分類\n- 異常アクセスパターンの検知\n- データ漏洩リスクの評価\n- コンプライアンス報告の自動生成\n\n**3. AWS Backup**\n- HIPAA要件のデータバックアップ\n- 暗号化されたバックアップの保存\n- ポイントインタイム復旧機能\n- 災害復旧計画の実装\n- バックアップの整合性検証\n\n**他の選択肢について：**\n- **CloudHSM**: 高度な暗号化には有用だが、HIPAA要件にはKMSで十分\n- **Certificate Manager**: SSL/TLS管理には重要だが、データ保護の主要機能ではない\n- **IAM**: アクセス管理には必要だが、HIPAA特有の暗号化・バックアップ要件には不十分'
  },
  {
    id: 'adv-mon-001',
    category: '監視・ログ',
    question: '大手金融機関が、リアルタイム取引監視システムをAWSで構築しています。このシステムには以下の厳格な要件があります：\n\n- 取引量：1秒間に100,000件のトランザクション\n- 監視対象：1,000台以上のEC2インスタンス、50のマイクロサービス\n- アラート要件：異常検知から30秒以内の通知\n- ログ保存：7年間の完全なログ保存（規制要件）\n- 分析要件：リアルタイム不正検知、パターン分析\n- 可視化：リアルタイムダッシュボード、経営層向けレポート\n- セキュリティ：ログの改ざん防止、アクセス制御\n- コンプライアンス：SOX法、PCI DSS準拠\n- 災害復旧：ログデータの地理的冗長化\n- 運用効率：自動化された監視・対応\n- コスト最適化：ログストレージコストの最適化\n\nこの包括的な監視・ログ要件を満たす最適なアーキテクチャはどれですか？',
    options: [
      'Amazon CloudWatch + AWS X-Ray + Amazon Kinesis + Amazon OpenSearch + AWS Lambda + Amazon SNS + S3 Glacier',
      'Amazon CloudWatch + AWS CloudTrail + Amazon ElastiCache + Amazon RDS + AWS Step Functions + Amazon SES + EBS',
      'AWS Systems Manager + Amazon Inspector + Amazon GuardDuty + Amazon Macie + AWS Config + AWS Security Hub + S3 Standard',
      'Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon QuickSight + AWS Glue + Amazon Athena + S3 Intelligent-Tiering'
    ],
    correct: 0,
    explanation: '正解は「Amazon CloudWatch + AWS X-Ray + Amazon Kinesis + Amazon OpenSearch + AWS Lambda + Amazon SNS + S3 Glacier」です。\n\nこの選択肢が最適な理由：\n\n**大規模監視・リアルタイム処理：**\n1. **Amazon CloudWatch**: \n   - 1,000台以上のインスタンス監視\n   - カスタムメトリクス（100,000 TPS対応）\n   - 30秒以内のアラート配信\n2. **AWS X-Ray**: \n   - マイクロサービス間のトレーシング\n   - パフォーマンス分析\n   - ボトルネック特定\n\n**ログ処理・分析：**\n1. **Amazon Kinesis**: \n   - リアルタイムログストリーミング\n   - 大量データの効率的処理\n   - 不正検知パイプライン\n2. **Amazon OpenSearch**: \n   - 高速ログ検索・分析\n   - リアルタイムダッシュボード\n   - 異常パターン検知\n\n**自動化・通知：**\n1. **AWS Lambda**: \n   - イベント駆動の自動対応\n   - カスタムアラート処理\n   - 自動修復アクション\n2. **Amazon SNS**: \n   - 多チャネル通知\n   - エスカレーション機能\n\n**長期保存・コンプライアンス：**\n1. **S3 Glacier**: \n   - 7年間の長期保存\n   - 改ざん防止（Object Lock）\n   - コスト効率的なアーカイブ\n\n**他の選択肢の問題点：**\n- **Amazon CloudWatch + AWS CloudTrail + Amazon ElastiCache + Amazon RDS + AWS Step Functions + Amazon SES + EBS**: ElastiCacheは監視用途に不適切、RDSは大量ログに不向き\n- **AWS Systems Manager + Amazon Inspector + Amazon GuardDuty + Amazon Macie + AWS Config + AWS Security Hub + S3 Standard**: セキュリティ監視に特化、包括的監視には不十分\n- **Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon QuickSight + AWS Glue + Amazon Athena + S3 Intelligent-Tiering**: バッチ処理中心、リアルタイム要件に不適切\n\n**金融業界特化の利点：**\n1. **コンプライアンス**: \n   - SOX法準拠の監査ログ\n   - PCI DSS要件の自動チェック\n   - 改ざん防止機能\n2. **リアルタイム不正検知**: \n   - 機械学習による異常検知\n   - パターンマッチング\n   - 即座のアラート\n3. **災害復旧**: \n   - 地理的分散ログ保存\n   - 自動バックアップ\n   - 高可用性アーキテクチャ'
  },
  {
    id: 'adv-mon-002',
    category: '監視・ログ',
    question: 'グローバル展開するeコマース企業が、ブラックフライデーなどの大規模セール時の監視システムをAWSで構築しています。このシステムには以下の特殊な要件があります：\n\n- トラフィック変動：通常時の50倍のトラフィック急増\n- 地理的分散：世界50カ国でのサービス提供\n- 監視対象：10,000台のサーバー、500のマイクロサービス\n- レスポンス時間：99パーセンタイルで500ms以下を維持\n- 可用性：99.99%以上（年間52分以内のダウンタイム）\n- 予測分析：トラフィック予測、容量計画\n- 自動スケーリング：予測ベースの事前スケーリング\n- ビジネス監視：売上、コンバージョン率のリアルタイム監視\n- 異常検知：機械学習による自動異常検知\n- 運用効率：最小限の人的介入\n- コスト最適化：監視コストの最適化\n\nこの大規模イベント対応の監視要件を満たす最適なアーキテクチャはどれですか？',
    options: [
      'Amazon CloudWatch + AWS Auto Scaling + Amazon Forecast + AWS Lambda + Amazon QuickSight + AWS Chatbot + CloudWatch Synthetics',
      'Amazon CloudWatch + AWS Systems Manager + Amazon Inspector + AWS Config + AWS Security Hub + Amazon GuardDuty + AWS Shield',
      'AWS X-Ray + Amazon Kinesis + Amazon EMR + Amazon SageMaker + Amazon Redshift + AWS Glue + Amazon Athena',
      'Amazon EventBridge + AWS Step Functions + Amazon DynamoDB + AWS AppSync + Amazon Cognito + AWS Amplify + API Gateway'
    ],
    correct: 0,
    explanation: '正解は「Amazon CloudWatch + AWS Auto Scaling + Amazon Forecast + AWS Lambda + Amazon QuickSight + AWS Chatbot + CloudWatch Synthetics」です。\n\nこの選択肢が最適な理由：\n\n**大規模トラフィック対応：**\n1. **Amazon CloudWatch**: \n   - 10,000台のサーバー監視\n   - カスタムメトリクス（売上、コンバージョン率）\n   - 地理的分散監視\n2. **AWS Auto Scaling**: \n   - 50倍トラフィック増加への対応\n   - 予測ベースのスケーリング\n   - 複数リージョン対応\n\n**予測・分析機能：**\n1. **Amazon Forecast**: \n   - 機械学習によるトラフィック予測\n   - 容量計画の自動化\n   - 季節性パターンの学習\n2. **Amazon QuickSight**: \n   - リアルタイムビジネスダッシュボード\n   - 売上・KPI監視\n   - 経営層向けレポート\n\n**自動化・運用効率：**\n1. **AWS Lambda**: \n   - イベント駆動の自動対応\n   - カスタムアラート処理\n   - 自動修復機能\n2. **AWS Chatbot**: \n   - Slack/Teams統合\n   - 自動通知・対応\n   - 運用効率化\n\n**可用性・品質監視：**\n1. **CloudWatch Synthetics**: \n   - 合成監視による可用性チェック\n   - エンドユーザー体験監視\n   - 99.99%可用性の確保\n\n**他の選択肢の問題点：**\n- **Amazon CloudWatch + AWS Systems Manager + Amazon Inspector + AWS Config + AWS Security Hub + Amazon GuardDuty + AWS Shield**: セキュリティ監視中心、ビジネス監視・予測機能不足\n- **AWS X-Ray + Amazon Kinesis + Amazon EMR + Amazon SageMaker + Amazon Redshift + AWS Glue + Amazon Athena**: 分析に特化、リアルタイム監視・自動対応不足\n- **Amazon EventBridge + AWS Step Functions + Amazon DynamoDB + AWS AppSync + Amazon Cognito + AWS Amplify + API Gateway**: アプリケーション開発中心、インフラ監視に不適切\n\n**大規模イベント特化の利点：**\n1. **予測スケーリング**: \n   - 事前のリソース準備\n   - トラフィック急増への対応\n   - コスト最適化\n2. **ビジネス監視**: \n   - リアルタイム売上監視\n   - コンバージョン率追跡\n   - 異常検知・アラート\n3. **グローバル監視**: \n   - 50カ国での統一監視\n   - 地域別パフォーマンス分析\n   - 災害復旧対応\n\n**運用効率化：**\n- 自動化された監視・対応\n- 最小限の人的介入\n- ChatOpsによる効率的運用\n- 予測ベースの容量管理'
  },
  {
    id: 'adv-mon-003',
    category: '監視・ログ',
    question: '大手製造業が、工場のIoTシステムと予知保全のための統合監視システムをAWSで構築しています。このシステムには以下の複雑な要件があります：\n\n- IoTデバイス：100万台以上のセンサー・機械\n- データ頻度：1秒間に1,000万件のデータポイント\n- 監視項目：温度、振動、圧力、電流、画像、音声\n- 異常検知：機械学習による故障予測\n- アラート：重大異常は1秒以内、予兆は1分以内\n- 地理的分散：世界30カ国、200工場\n- データ保存：リアルタイム（1日）、履歴（10年間）\n- 分析要件：トレンド分析、相関分析、根本原因分析\n- 可視化：工場別、機械別、部品別ダッシュボード\n- 統合要件：既存のMES、ERPシステム連携\n- セキュリティ：OT/ITネットワーク分離\n- 災害復旧：工場間での生産バックアップ\n\nこの産業IoT監視要件を満たす最適なアーキテクチャはどれですか？',
    options: [
      'AWS IoT Core + Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + AWS Lambda + Amazon SNS + AWS IoT Analytics',
      'Amazon CloudWatch + AWS X-Ray + Amazon ElastiCache + Amazon RDS + AWS Step Functions + Amazon SES + Amazon Inspector',
      'AWS Systems Manager + Amazon GuardDuty + Amazon Macie + AWS Config + AWS Security Hub + Amazon Detective + AWS Shield',
      'Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon EMR + AWS Glue + Amazon Athena + Amazon S3'
    ],
    correct: 0,
    explanation: '正解は「AWS IoT Core + Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + AWS Lambda + Amazon SNS + AWS IoT Analytics」です。\n\nこの選択肢が最適な理由：\n\n**大規模IoTデータ処理：**\n1. **AWS IoT Core**: \n   - 100万台デバイスの接続管理\n   - セキュアなデバイス認証\n   - メッセージルーティング\n   - OT/IT分離対応\n2. **Amazon Kinesis**: \n   - 1,000万件/秒のリアルタイム処理\n   - ストリーミングデータ分析\n   - 複数データ形式対応\n\n**時系列データ最適化：**\n1. **Amazon Timestream**: \n   - 時系列データ専用データベース\n   - 自動データ階層化（1日→10年）\n   - 高速クエリ性能\n   - コスト効率的な長期保存\n2. **AWS IoT Analytics**: \n   - IoTデータの前処理・変換\n   - データクレンジング\n   - 統計分析機能\n\n**機械学習・予知保全：**\n1. **Amazon SageMaker**: \n   - 故障予測モデル構築\n   - 異常検知アルゴリズム\n   - リアルタイム推論\n   - 継続学習機能\n2. **AWS Lambda**: \n   - リアルタイム異常検知\n   - 1秒以内のアラート処理\n   - 自動対応アクション\n\n**可視化・分析：**\n1. **Amazon QuickSight**: \n   - 工場別・機械別ダッシュボード\n   - リアルタイム監視画面\n   - トレンド分析\n   - 経営層向けレポート\n2. **Amazon SNS**: \n   - 多段階アラート配信\n   - 工場・部門別通知\n   - エスカレーション機能\n\n**他の選択肢の問題点：**\n- **Amazon CloudWatch + AWS X-Ray + Amazon ElastiCache + Amazon RDS + AWS Step Functions + Amazon SES + Amazon Inspector**: IoT特化機能なし、時系列データに不適切\n- **AWS Systems Manager + Amazon GuardDuty + Amazon Macie + AWS Config + AWS Security Hub + Amazon Detective + AWS Shield**: セキュリティ監視中心、IoT監視に不十分\n- **Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon EMR + AWS Glue + Amazon Athena + Amazon S3**: バッチ処理中心、リアルタイム要件に不適切\n\n**産業IoT特化の利点：**\n1. **予知保全**: \n   - 機械学習による故障予測\n   - 部品交換タイミング最適化\n   - ダウンタイム最小化\n2. **多様なデータ対応**: \n   - センサーデータ（数値）\n   - 画像・音声データ\n   - 振動・波形データ\n3. **工場運用最適化**: \n   - 生産効率監視\n   - エネルギー使用量最適化\n   - 品質管理強化\n\n**統合・セキュリティ：**\n- 既存MES/ERP連携\n- OT/ITネットワーク分離\n- デバイス認証・暗号化\n- 監査ログ完全保存\n\n**災害復旧・事業継続：**\n- 工場間データ同期\n- 生産バックアップ機能\n- 自動フェイルオーバー\n- 地理的分散アーキテクチャ'
  },
  {
    id: 'adv-mon-004',
    category: '監視・ログ',
    question: '大手金融機関が、リアルタイム不正検知システムの監視基盤を構築しています。以下の要件があります：\n\n1. 1秒間に100万件の取引ログ処理\n2. 異常パターンの即座検知（100ms以内）\n3. 複数データソースからのログ統合\n4. 機械学習による異常検知\n5. 規制当局への自動レポート生成\n6. 99.99%の監視システム可用性\n7. 完全な監査証跡の保持\n\nこの要件を満たすために、最も適切な金融業界向け監視アーキテクチャはどれですか？',
    options: [
      'Kinesis Data Streams + Kinesis Analytics + CloudWatch + X-Ray + OpenSearch + QuickSight + SageMaker + CloudTrailを使用し、リアルタイム金融監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + SNS + Lambda + S3 + Athenaを使用し、従来型金融監視を構築する',
      'ELK Stack + Kafka + Spark + Grafana + Prometheus + InfluxDB + Telegrafを使用し、オープンソース金融監視を構築する',
      'API Gateway + Lambda + DynamoDB + S3 + CloudFront + Route 53 + ACMを使用し、サーバーレス金融監視を構築する'
    ],
    correct: 0,
    explanation: '金融機関のリアルタイム不正検知監視には、Kinesis Data Streams + Kinesis Analytics + CloudWatch + X-Ray + OpenSearch + QuickSight + SageMaker + CloudTrailの組み合わせが最適です。\n\n理由：\n1. **Kinesis Data Streams**: 100万件/秒の高速ログストリーミング\n2. **Kinesis Analytics**: リアルタイム異常検知（100ms以内）\n3. **CloudWatch**: 統合監視とアラート管理\n4. **X-Ray**: 分散システムのトレーシング\n5. **OpenSearch**: 複数データソースのログ統合と検索\n6. **QuickSight**: 規制当局向け自動レポート生成\n7. **SageMaker**: 機械学習による高度な異常検知\n\n他の選択肢の問題点：\n- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + SNS + Lambda + S3 + Athenaを使用し、従来型金融監視を構築する**: 従来型CloudWatchは100万件/秒の処理性能に限界\n- **ELK Stack + Kafka + Spark + Grafana + Prometheus + InfluxDB + Telegrafを使用し、オープンソース金融監視を構築する**: オープンソースは金融業界の可用性要件（99.99%）達成が困難\n- **Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon QuickSight + AWS Glue + Amazon Athena + S3 Intelligent-Tieringを使用し、サーバーレス金融監視を構築する**: サーバーレスのみでは大規模ログ処理に不適切'
  },
  {
    id: 'adv-mon-005',
    category: '監視・ログ',
    question: '大手製造業が、グローバル工場のIoT監視システムを構築しています。以下の要件があります：\n\n1. 世界50拠点の工場からのセンサーデータ監視\n2. 設備故障の予兆検知\n3. 生産ラインの効率最適化\n4. 品質管理データの統合分析\n5. 環境規制への準拠監視\n6. 災害時の緊急アラート\n7. 経営層向けダッシュボード\n\nこの要件を満たすために、最も適切な製造業向けIoT監視アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + SNS + Lambda + OpenSearchを使用し、グローバルIoT監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glue + EMRを使用し、従来型IoT監視を構築する',
      'InfluxDB + Grafana + Telegraf + Kapacitor + Chronograf + Prometheus + Alertmanagerを使用し、時系列特化IoT監視を構築する',
      'DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53 + CloudWatchを使用し、サーバーレスIoT監視を構築する'
    ],
    correct: 0,
    explanation: '製造業のグローバルIoT監視には、IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + SNS + Lambda + OpenSearchの組み合わせが最適です。\n\n理由：\n1. **IoT Core**: 世界50拠点のIoTデバイス統合管理\n2. **Kinesis**: 大量センサーデータのリアルタイム処理\n3. **Timestream**: 時系列データの効率的保存と分析\n4. **CloudWatch**: 統合監視とアラート管理\n5. **QuickSight**: 経営層向けダッシュボードと分析\n6. **SageMaker**: 設備故障予兆検知の機械学習\n7. **SNS + Lambda**: 災害時の緊急アラート配信\n\n他の選択肢の問題点：\n- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glue + EMRを使用し、従来型IoT監視を構築する**: 従来型CloudWatchはIoT特有の時系列データ処理に不適切\n- **ELK Stack + Kafka + Spark + Grafana + Prometheus + InfluxDB + Telegrafを使用し、オープンソースIoT監視を構築する**: オープンソースは50拠点の統合管理とスケーラビリティに限界\n- **DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53 + CloudWatchを使用し、サーバーレスIoT監視を構築する**: サーバーレスのみでは大規模IoTデータ処理に不適切'
  },
  {
    id: 'adv-mon-006',
    category: '監視・ログ',
    question: '大手メディア企業が、ライブストリーミング配信の監視システムを構築しています。以下の要件があります：\n\n1. 世界中の視聴者体験の監視\n2. 配信品質のリアルタイム監視\n3. CDNパフォーマンスの最適化\n4. 視聴者数の急激な変動対応\n5. 配信障害の即座検知と復旧\n6. 広告配信の効果測定\n7. コンテンツ人気度の分析\n\nこの要件を満たすために、最も適切なメディア配信監視アーキテクチャはどれですか？',
    options: [
      'CloudWatch + X-Ray + CloudFront Real-time Logs + Kinesis + OpenSearch + QuickSight + Lambda + SNSを使用し、メディア配信特化監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型メディア監視を構築する',
      'ELK Stack + Beats + Logstash + Kibana + Grafana + Prometheusを使用し、オープンソースメディア監視を構築する',
      'API Gateway + Lambda + DynamoDB + S3 + CloudFront + Route 53を使用し、サーバーレスメディア監視を構築する'
    ],
    correct: 0,
    explanation: 'メディア企業のライブストリーミング監視には、CloudWatch + X-Ray + CloudFront Real-time Logs + Kinesis + OpenSearch + QuickSight + Lambda + SNSの組み合わせが最適です。\n\n理由：\n1. **CloudWatch**: 配信インフラの統合監視\n2. **X-Ray**: 配信パイプラインの分散トレーシング\n3. **CloudFront Real-time Logs**: 視聴者体験のリアルタイム監視\n4. **Kinesis**: 大量視聴ログのストリーミング処理\n5. **OpenSearch**: 配信ログの高速検索と分析\n6. **QuickSight**: 視聴者分析と広告効果測定\n7. **Lambda + SNS**: 配信障害の即座検知と通知\n\n他の選択肢の問題点：\n- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型メディア監視を構築する**: 従来型アプローチはリアルタイム配信監視に不十分\n- **ELK Stack + Kafka + Spark + Grafana + Prometheus + InfluxDB + Telegrafを使用し、オープンソースメディア監視を構築する**: オープンソースは世界規模の配信監視に運用負荷が高い\n- **API Gateway + Lambda + DynamoDB + S3 + CloudFront + Route 53を使用し、サーバーレスメディア監視を構築する**: サーバーレスのみでは大規模配信監視に不適切'
  },
  {
    id: 'adv-mon-007',
    category: '監視・ログ',
    question: '大手病院グループが、医療システムの統合監視基盤を構築しています。以下の要件があります：\n\n1. 電子カルテシステムの可用性監視\n2. 医療機器の稼働状況監視\n3. 患者データアクセスの監査ログ\n4. HIPAA準拠の監視証跡\n5. 緊急時の医療システム優先制御\n6. 医療データの異常アクセス検知\n7. 病院運営効率の分析\n\nこの要件を満たすために、最も適切な医療業界向け監視アーキテクチャはどれですか？',
    options: [
      'CloudWatch + CloudTrail + GuardDuty + Config + Security Hub + Macie + QuickSight + SNS + Lambda + OpenSearchを使用し、HIPAA準拠医療監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型医療監視を構築する',
      'Splunk + Phantom + QRadar + ArcSight + LogRhythm + RSA NetWitnessを使用し、SIEM特化医療監視を構築する',
      'Prometheus + Grafana + AlertManager + ELK Stack + Jaeger + Zipkinを使用し、オープンソース医療監視を構築する'
    ],
    correct: 0,
    explanation: '病院グループの医療システム監視には、CloudWatch + CloudTrail + GuardDuty + Config + Security Hub + Macie + QuickSight + SNS + Lambda + OpenSearchの組み合わせが最適です。\n\n理由：\n1. **CloudWatch**: 医療システムの統合監視\n2. **CloudTrail**: HIPAA要件の完全な監査証跡\n3. **GuardDuty**: 医療データの異常アクセス検知\n4. **Config**: 医療システム設定の準拠監視\n5. **Security Hub**: 統合セキュリティ監視\n6. **Macie**: 患者データの分類と保護監視\n7. **QuickSight**: 病院運営効率の分析ダッシュボード\n\n他の選択肢の問題点：\n- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型医療監視を構築する**: 従来型アプローチは医療業界の包括的監視要件に不十分\n- **Splunk + Phantom + QRadar + ArcSight + LogRhythm + RSA NetWitnessを使用し、SIEM特化医療監視を構築する**: SIEM特化は高コストで、医療機関の予算制約に不適切\n- **Prometheus + Grafana + AlertManager + ELK Stack + Jaeger + Zipkinを使用し、オープンソース医療監視を構築する**: オープンソースはHIPAA準拠の証明が困難'
  },
  {
    id: 'adv-mon-008',
    category: '監視・ログ',
    question: '大手ゲーム会社が、オンラインゲームの監視システムを構築しています。以下の要件があります：\n\n1. プレイヤー体験の監視\n2. ゲームサーバーの負荷監視\n3. チート行為の検知\n4. ゲーム内経済の監視\n5. プレイヤー行動分析\n6. サーバー障害の即座復旧\n7. ゲームバランス調整のデータ分析\n\nこの要件を満たすために、最も適切なゲーム業界向け監視アーキテクチャはどれですか？',
    options: [
      'CloudWatch + X-Ray + Kinesis + OpenSearch + QuickSight + SageMaker + Lambda + SNS + GameLift Metricsを使用し、ゲーム特化監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + EMRを使用し、従来型ゲーム監視を構築する',
      'DataDog + New Relic + Splunk + Grafana + Prometheus + InfluxDBを使用し、サードパーティゲーム監視を構築する',
      'DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53を使用し、サーバーレスゲーム監視を構築する'
    ],
    correct: 0,
    explanation: 'ゲーム会社のオンライン監視には、CloudWatch + X-Ray + Kinesis + OpenSearch + QuickSight + SageMaker + Lambda + SNS + GameLift Metricsの組み合わせが最適です。\n\n理由：\n1. **CloudWatch**: ゲームインフラの統合監視\n2. **X-Ray**: ゲームサービスの分散トレーシング\n3. **Kinesis**: プレイヤー行動ログのリアルタイム処理\n4. **OpenSearch**: ゲームログの高速検索と分析\n5. **QuickSight**: ゲームバランス分析ダッシュボード\n6. **SageMaker**: チート検知の機械学習\n7. **GameLift Metrics**: ゲーム専用の監視メトリクス\n\n他の選択肢の問題点：\n- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + EMRを使用し、従来型ゲーム監視を構築する**: 従来型アプローチはゲーム特有の監視要件に不十分\n- **DataDog + New Relic + Splunk + Grafana + Prometheus + InfluxDBを使用し、サードパーティゲーム監視を構築する**: サードパーティ組み合わせは統合管理が複雑\n- **DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53を使用し、サーバーレスゲーム監視を構築する**: サーバーレスのみでは大規模ゲーム監視に不適切'
  },
  {
    id: 'adv-mon-009',
    category: '監視・ログ',
    question: '大手物流会社が、グローバル配送追跡の監視システムを構築しています。以下の要件があります：\n\n1. 世界中の荷物位置のリアルタイム追跡\n2. 配送遅延の予測と通知\n3. 配送ルートの最適化監視\n4. 倉庫オペレーションの効率監視\n5. 顧客満足度の監視\n6. 配送コストの分析\n7. 災害時の配送影響監視\n\nこの要件を満たすために、最も適切な物流業界向け監視アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + Lambda + SNS + Location Serviceを使用し、物流特化監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型物流監視を構築する',
      'Kafka + Spark + Cassandra + Grafana + Prometheus + InfluxDB + Telegrafを使用し、ビッグデータ物流監視を構築する',
      'DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53を使用し、サーバーレス物流監視を構築する'
    ],
    correct: 0,
    explanation: '物流会社のグローバル配送監視には、IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + Lambda + SNS + Location Serviceの組み合わせが最適です。\n\n理由：\n1. **IoT Core**: 配送車両・荷物のIoTデバイス管理\n2. **Kinesis**: 位置情報のリアルタイムストリーミング\n3. **Timestream**: 配送履歴の時系列データ管理\n4. **CloudWatch**: 物流システムの統合監視\n5. **QuickSight**: 配送効率と顧客満足度分析\n6. **SageMaker**: 配送遅延予測の機械学習\n7. **Location Service**: 地理空間データの処理と分析\n\n他の選択肢の問題点：\n- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型物流監視を構築する**: 従来型アプローチは物流特有の地理空間監視に不十分\n- **Kafka + Spark + Cassandra + Grafana + Prometheus + InfluxDB + Telegrafを使用し、ビッグデータ物流監視を構築する**: ビッグデータ特化は物流業界の運用負荷が高い\n- **DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53を使用し、サーバーレス物流監視を構築する**: サーバーレスのみでは大規模物流監視に不適切'
  },
  {
    id: 'adv-mon-010',
    category: '監視・ログ',
    question: '大手エネルギー会社が、スマートグリッドの監視システムを構築しています。以下の要件があります：\n\n1. 発電所・変電所・配電網の統合監視\n2. 電力需給バランスのリアルタイム監視\n3. 停電予兆の早期検知\n4. 再生可能エネルギーの出力予測\n5. 電力品質の監視\n6. サイバー攻撃の検知\n7. 規制当局への報告自動化\n\nこの要件を満たすために、最も適切なエネルギー業界向け監視アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + GuardDuty + Lambda + SNS + OpenSearchを使用し、スマートグリッド特化監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型エネルギー監視を構築する',
      'OSIsoft PI + Wonderware + GE Predix + Schneider EcoStruxure + Siemens MindSphereを使用し、産業用エネルギー監視を構築する',
      'InfluxDB + Grafana + Telegraf + Kapacitor + Chronograf + Prometheusを使用し、時系列特化エネルギー監視を構築する'
    ],
    correct: 0,
    explanation: 'エネルギー会社のスマートグリッド監視には、IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + GuardDuty + Lambda + SNS + OpenSearchの組み合わせが最適です。\n\n理由：\n1. **IoT Core**: 電力設備のIoTデバイス統合管理\n2. **Kinesis**: 電力データのリアルタイムストリーミング\n3. **Timestream**: 電力需給データの時系列管理\n4. **CloudWatch**: 電力インフラの統合監視\n5. **QuickSight**: 電力品質と効率分析\n6. **SageMaker**: 停電予兆検知と需要予測\n7. **GuardDuty**: 重要インフラへのサイバー攻撃検知\n\n他の選択肢の問題点：\n- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型エネルギー監視を構築する**: 従来型アプローチはスマートグリッドの複雑な監視要件に不十分\n- **OSIsoft PI + Wonderware + GE Predix + Schneider EcoStruxure + Siemens MindSphereを使用し、産業用エネルギー監視を構築する**: 産業用システムは高コストでクラウド統合が困難\n- **InfluxDB + Grafana + Telegraf + Kapacitor + Chronograf + Prometheusを使用し、時系列特化エネルギー監視を構築する**: 時系列特化のみではエネルギー業界の包括的監視に不十分'
  },
  {
    id: 'adv-mon-multi-001',
    category: '監視・ログ',
    question: '大手eコマース企業が、ブラックフライデーなどの大規模セール時の監視システムを構築しています。以下の要件があります：\n\n**要件：**\n- 通常の100倍のトラフィック監視\n- リアルタイム異常検知とアラート\n- ユーザー体験の品質監視\n- インフラとアプリケーションの統合監視\n- 自動スケーリングトリガー\n- 事後分析用の詳細ログ保存\n\nこの大規模監視システムに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'Amazon CloudWatch - 統合監視・メトリクスサービス',
      'AWS X-Ray - 分散トレーシングサービス',
      'Amazon OpenSearch Service - ログ分析・検索サービス',
      'AWS CloudTrail - API監査ログサービス',
      'Amazon Kinesis Data Analytics - リアルタイムストリーム分析',
      'AWS Config - 設定変更監視サービス'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Amazon CloudWatch**\n- 大規模トラフィックのリアルタイム監視\n- カスタムメトリクスによる詳細監視\n- 自動スケーリングトリガーの設定\n- アラームによる即座の通知\n- ダッシュボードでの統合監視\n\n**2. AWS X-Ray**\n- 分散システムのエンドツーエンドトレーシング\n- ユーザー体験の品質監視\n- ボトルネック箇所の特定\n- レスポンス時間の詳細分析\n- マイクロサービス間の依存関係可視化\n\n**3. Amazon OpenSearch Service**\n- 大量ログデータの高速検索・分析\n- リアルタイム異常検知\n- 事後分析用の詳細ログ保存\n- 可視化ダッシュボード（Kibana）\n- 機械学習による異常検知\n\n**他の選択肢について：**\n- **CloudTrail**: API監査には重要だが、パフォーマンス監視の主要機能ではない\n- **Kinesis Data Analytics**: ストリーム分析には有用だが、統合監視には不十分\n- **Config**: 設定監視には重要だが、パフォーマンス監視の主要要件ではない'
  },
  {
    id: 'adv-mon-multi-002',
    category: '監視・ログ',
    question: '金融機関が、取引システムの監視・コンプライアンス管理システムを構築しています。以下の要件があります：\n\n**要件：**\n- 金融取引の完全な監査証跡\n- 不正取引のリアルタイム検知\n- 規制報告書の自動生成\n- システム可用性99.99%の監視\n- セキュリティインシデントの即座検知\n- 長期保存（7年間）とデータ整合性保証\n\nこの金融監視システムに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'AWS CloudTrail - 完全な監査ログサービス',
      'Amazon GuardDuty - 脅威検知サービス',
      'AWS Security Hub - セキュリティ統合管理',
      'Amazon CloudWatch - システム監視サービス',
      'AWS Config - コンプライアンス監視',
      'Amazon Detective - セキュリティ調査サービス'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. AWS CloudTrail**\n- 全API呼び出しの完全な監査証跡\n- 金融取引の詳細ログ記録\n- ログの改ざん防止機能\n- 長期保存とデータ整合性保証\n- 規制要件への準拠\n\n**2. Amazon GuardDuty**\n- 機械学習による不正取引検知\n- リアルタイム脅威検知\n- 異常な取引パターンの自動識別\n- セキュリティインシデントの即座検知\n- 金融業界特有の脅威対応\n\n**他の選択肢について：**\n- **Security Hub**: セキュリティ統合管理には有用だが、監査証跡の主要機能ではない\n- **CloudWatch**: システム監視には重要だが、金融特有の不正検知には不十分\n- **Config**: コンプライアンス監視には重要だが、取引監視の主要機能ではない\n- **Detective**: 事後調査には有用だが、リアルタイム検知の主要機能ではない'
  },
  {
    id: 'adv-mon-multi-003',
    category: '監視・ログ',
    question: '製造業が、IoTデバイスを活用したスマートファクトリーの監視システムを構築しています。以下の要件があります：\n\n**要件：**\n- 工場内10,000台のIoTセンサー監視\n- 機械の予知保全システム\n- 生産ライン効率の最適化\n- 品質管理データの分析\n- 異常検知による自動停止機能\n- エネルギー消費量の最適化\n\nこのスマートファクトリー監視システムに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'Amazon Timestream - 時系列データベース',
      'Amazon Kinesis Data Streams - IoTデータストリーミング',
      'Amazon SageMaker - 機械学習・予測分析',
      'AWS IoT Analytics - IoTデータ分析サービス',
      'Amazon QuickSight - ビジネスインテリジェンス',
      'AWS Lambda - サーバーレス処理'
    ],
    correct: [
      0,
      2,
      3
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Amazon Timestream**\n- IoTセンサーデータの効率的な時系列保存\n- 高速な時系列クエリ処理\n- 自動的なデータ圧縮とライフサイクル管理\n- 大量の時系列データに最適化\n- コスト効率的な長期保存\n\n**2. Amazon SageMaker**\n- 機械学習による予知保全モデル\n- 異常検知アルゴリズムの開発\n- 生産効率最適化の予測分析\n- 品質管理の機械学習モデル\n- エネルギー消費最適化の分析\n\n**3. AWS IoT Analytics**\n- IoTデータの前処理と変換\n- 製造業特有のデータ分析機能\n- デバイスデータの統計分析\n- 生産ラインの効率分析\n- 品質管理データの可視化\n\n**他の選択肢について：**\n- **Kinesis Data Streams**: データストリーミングには重要だが、分析機能が不十分\n- **QuickSight**: ビジュアライゼーションには有用だが、IoT特有の分析機能が不足\n- **Lambda**: リアルタイム処理には有用だが、時系列データ管理の主要機能ではない'
  },
  {
    id: 'adv-analytics-001',
    category: '分析・機械学習',
    question: '大手小売チェーンが、顧客行動分析とリアルタイムレコメンデーションシステムを構築しています。以下の要件があります：\n\n1. 全国1000店舗 + ECサイトの購買データ統合（1日10TB）\n2. リアルタイム商品レコメンデーション（100ms以内）\n3. 顧客セグメンテーションと行動予測\n4. 在庫最適化とダイナミックプライシング\n5. A/Bテストによる施策効果測定\n6. プライバシー規制（GDPR、CCPA）への準拠\n7. 季節性やトレンドを考慮した需要予測\n\nこの要件を満たすために、最も適切な分析・機械学習アーキテクチャはどれですか？',
    options: [
      'Kinesis + SageMaker + Personalize + QuickSight + Lake Formation + Glue + Athenaを使用し、リアルタイム分析基盤を構築する',
      'EMR + Spark + Redshift + Tableau + S3 + DataPipelineを使用し、バッチ処理分析基盤を構築する',
      'Lambda + DynamoDB + ElastiCache + API Gateway + CloudWatch + S3を使用し、サーバーレス分析基盤を構築する',
      'EC2 + Hadoop + Kafka + Elasticsearch + Kibana + PostgreSQLを使用し、オープンソース分析基盤を構築する'
    ],
    correct: 0,
    explanation: '小売チェーンのリアルタイム分析には、Kinesis + SageMaker + Personalize + QuickSight + Lake Formation + Glue + Athenaの組み合わせが最適です。\n\n理由：\n1. **Kinesis**: 1日10TBのリアルタイムデータストリーミング\n2. **SageMaker**: 顧客行動予測と需要予測の機械学習モデル\n3. **Personalize**: リアルタイム商品レコメンデーション（100ms以内）\n4. **QuickSight**: ビジネスダッシュボードとA/Bテスト分析\n5. **Lake Formation**: データレイクのセキュリティとガバナンス\n6. **Glue**: ETL処理とデータカタログ管理\n7. **Athena**: アドホック分析とクエリ処理\n\n他の選択肢の問題点：\n- **EMR + Spark + Redshift + Tableau + S3 + DataPipelineを使用し、バッチ処理分析基盤を構築する**: バッチ処理はリアルタイムレコメンデーション要件を満たせない\n- **Lambda + DynamoDB + ElastiCache + API Gateway + CloudWatch + S3を使用し、サーバーレス分析基盤を構築する**: サーバーレスのみでは大規模データ処理に限界\n- **EC2 + Hadoop + Kafka + Elasticsearch + Kibana + PostgreSQLを使用し、オープンソース分析基盤を構築する**: オープンソースは運用負荷が高く、マネージドサービスの利点を活用できない'
  },
  {
    id: 'adv-analytics-002',
    category: '分析・機械学習',
    question: '大手製薬会社が、創薬研究のためのAI/ML基盤を構築しています。以下の要件があります：\n\n1. 分子構造データ、実験結果、文献データの統合分析\n2. 深層学習による創薬候補化合物の予測\n3. 大規模並列計算（数千GPU）での分子シミュレーション\n4. 研究者間でのモデル共有とバージョン管理\n5. FDA規制（21 CFR Part 11）への準拠\n6. 知的財産の保護とセキュリティ\n7. 研究成果の可視化と報告書自動生成\n\nこの要件を満たすために、最も適切な創薬AI/MLアーキテクチャはどれですか？',
    options: [
      'SageMaker + ParallelCluster + FSx for Lustre + Neptune + Comprehend + Macie + QuickSightを使用し、創薬特化AI/ML基盤を構築する',
      'EMR + Spark + Hadoop + Hive + Zeppelin + S3 + Redshiftを使用し、ビッグデータ創薬基盤を構築する',
      'Lambda + Step Functions + DynamoDB + API Gateway + CloudWatch + S3を使用し、サーバーレス創薬基盤を構築する',
      'EC2 + TensorFlow + PyTorch + Jupyter + MLflow + PostgreSQL + Grafanaを使用し、オープンソース創薬基盤を構築する'
    ],
    correct: 0,
    explanation: '製薬会社の創薬AI/ML基盤には、SageMaker + ParallelCluster + FSx for Lustre + Neptune + Comprehend + Macie + QuickSightの組み合わせが最適です。\n\n理由：\n1. **SageMaker**: 深層学習モデルの開発・訓練・デプロイ\n2. **ParallelCluster**: 数千GPU並列計算環境\n3. **FSx for Lustre**: 高性能並列ファイルシステム\n4. **Neptune**: 分子構造のグラフデータベース\n5. **Comprehend**: 文献データの自然言語処理\n6. **Macie**: 知的財産の自動分類と保護\n7. **QuickSight**: 研究成果の可視化\n\n他の選択肢の問題点：\n- **EMR + Spark + Hadoop + Hive + Zeppelin + S3 + Redshiftを使用し、ビッグデータ創薬基盤を構築する**: EMRは創薬特有の深層学習ワークロードに最適化されていない\n- **Lambda + Step Functions + DynamoDB + API Gateway + CloudWatch + S3を使用し、サーバーレス創薬基盤を構築する**: サーバーレスは大規模GPU計算に不適切\n- **EC2 + TensorFlow + PyTorch + Jupyter + MLflow + PostgreSQL + Grafanaを使用し、オープンソース創薬基盤を構築する**: オープンソースはFDA規制準拠の証明が困難'
  },
  {
    id: 'adv-analytics-003',
    category: '分析・機械学習',
    question: '大手金融機関が、リアルタイム不正検知とリスク管理システムを構築しています。以下の要件があります：\n\n1. 取引データのリアルタイム分析（1秒間に100万件）\n2. 機械学習による不正パターン検知（10ms以内）\n3. 複雑な金融リスク計算（VaR、ストレステスト）\n4. 規制レポート（バーゼルIII、CCAR）の自動生成\n5. 説明可能AI（XAI）による判定根拠の提示\n6. モデルドリフト検知と自動再学習\n7. 金融規制への完全準拠\n\nこの要件を満たすために、最も適切な金融AI/MLアーキテクチャはどれですか？',
    options: [
      'Kinesis Analytics + SageMaker + Clarify + Model Monitor + Timestream + QuickSight + CloudTrailを使用し、金融特化AI/ML基盤を構築する',
      'Spark Streaming + MLlib + Kafka + Cassandra + Grafana + Airflowを使用し、オープンソース金融基盤を構築する',
      'Lambda + DynamoDB + ElastiCache + API Gateway + Step Functions + CloudWatchを使用し、サーバーレス金融基盤を構築する',
      'EMR + Hadoop + Hive + Presto + Zeppelin + S3 + Redshiftを使用し、バッチ処理金融基盤を構築する'
    ],
    correct: 0,
    explanation: '金融機関のリアルタイム不正検知には、Kinesis Analytics + SageMaker + Clarify + Model Monitor + Timestream + QuickSight + CloudTrailの組み合わせが最適です。\n\n理由：\n1. **Kinesis Analytics**: 100万件/秒のリアルタイム分析\n2. **SageMaker**: 不正検知モデルの開発・デプロイ\n3. **Clarify**: 説明可能AIによる判定根拠提示\n4. **Model Monitor**: モデルドリフト検知と品質監視\n5. **Timestream**: 金融時系列データの効率的管理\n6. **QuickSight**: 規制レポートの自動生成\n7. **CloudTrail**: 金融規制準拠の監査証跡\n\n他の選択肢の問題点：\n- **Spark Streaming + MLlib + Kafka + Cassandra + Grafana + Airflowを使用し、オープンソース金融基盤を構築する**: オープンソースは金融規制準拠の証明が困難\n- **Lambda + DynamoDB + ElastiCache + API Gateway + Step Functions + CloudWatchを使用し、サーバーレス金融基盤を構築する**: サーバーレスは10ms以内の要件と大規模処理に限界\n- **EMR + Hadoop + Hive + Presto + Zeppelin + S3 + Redshiftを使用し、バッチ処理金融基盤を構築する**: バッチ処理はリアルタイム要件を満たせない'
  },
  {
    id: 'adv-analytics-004',
    category: '分析・機械学習',
    question: '大手自動車メーカーが、自動運転車のデータ分析基盤を構築しています。以下の要件があります：\n\n1. 車両からのセンサーデータ（1台4TB/日、100万台）\n2. 深層学習による物体検知・経路予測モデル\n3. エッジでのリアルタイム推論（1ms以内）\n4. 大規模分散学習（数万GPU）\n5. シミュレーション環境での仮想テスト\n6. 安全性検証とモデル認証\n7. 地域別データ保護規制への対応\n\nこの要件を満たすために、最も適切な自動運転AI/MLアーキテクチャはどれですか？',
    options: [
      'SageMaker + Greengrass + ParallelCluster + RoboMaker + Ground Truth + FSx for Lustre + Lake Formationを使用し、自動運転特化AI/ML基盤を構築する',
      'EMR + Spark + Hadoop + TensorFlow + Jupyter + S3 + Redshiftを使用し、ビッグデータ自動運転基盤を構築する',
      'Lambda + Step Functions + DynamoDB + Kinesis + API Gateway + CloudWatchを使用し、サーバーレス自動運転基盤を構築する',
      'EC2 + Kubernetes + Kubeflow + MLflow + Prometheus + Grafana + MinIOを使用し、コンテナベース自動運転基盤を構築する'
    ],
    correct: 0,
    explanation: '自動車メーカーの自動運転AI/ML基盤には、SageMaker + Greengrass + ParallelCluster + RoboMaker + Ground Truth + FSx for Lustre + Lake Formationの組み合わせが最適です。\n\n理由：\n1. **SageMaker**: 深層学習モデルの大規模分散学習\n2. **Greengrass**: エッジでのリアルタイム推論（1ms以内）\n3. **ParallelCluster**: 数万GPU並列計算環境\n4. **RoboMaker**: 自動運転シミュレーション環境\n5. **Ground Truth**: センサーデータのラベリング\n6. **FSx for Lustre**: 高性能並列ファイルシステム\n7. **Lake Formation**: データレイクのセキュリティとガバナンス\n\n他の選択肢の問題点：\n- **EMR + Spark + Hadoop + TensorFlow + Jupyter + S3 + Redshiftを使用し、ビッグデータ自動運転基盤を構築する**: EMRはエッジ推論とシミュレーション要件を満たせない\n- **Lambda + Step Functions + DynamoDB + Kinesis + API Gateway + CloudWatchを使用し、サーバーレス自動運転基盤を構築する**: サーバーレスは大規模GPU学習に不適切\n- **EC2 + Kubernetes + Kubeflow + MLflow + Prometheus + Grafana + MinIOを使用し、コンテナベース自動運転基盤を構築する**: 自前構築は自動運転特有の要件対応が困難'
  },
  {
    id: 'adv-analytics-005',
    category: '分析・機械学習',
    question: '大手メディア企業が、コンテンツ分析とパーソナライゼーションシステムを構築しています。以下の要件があります：\n\n1. 動画・音声・テキストのマルチモーダル分析\n2. リアルタイムコンテンツレコメンデーション\n3. 視聴者行動予測と離脱防止\n4. コンテンツの自動分類・タグ付け\n5. 多言語対応（50言語以上）\n6. 著作権侵害検知\n7. 広告効果測定と最適化\n\nこの要件を満たすために、最も適切なメディアAI/MLアーキテクチャはどれですか？',
    options: [
      'Rekognition + Transcribe + Comprehend + Translate + Personalize + SageMaker + Kinesis + QuickSightを使用し、メディア特化AI/ML基盤を構築する',
      'OpenCV + FFmpeg + spaCy + TensorFlow + Kafka + Elasticsearch + Kibanaを使用し、オープンソースメディア基盤を構築する',
      'Lambda + Step Functions + DynamoDB + S3 + CloudFront + API Gatewayを使用し、サーバーレスメディア基盤を構築する',
      'EMR + Spark + Hadoop + Hive + Zeppelin + Redshift + Tableauを使用し、ビッグデータメディア基盤を構築する'
    ],
    correct: 0,
    explanation: 'メディア企業のコンテンツ分析には、Rekognition + Transcribe + Comprehend + Translate + Personalize + SageMaker + Kinesis + QuickSightの組み合わせが最適です。\n\n理由：\n1. **Rekognition**: 動画・画像の物体検知と顔認識\n2. **Transcribe**: 音声の自動文字起こし\n3. **Comprehend**: テキストの感情分析と分類\n4. **Translate**: 50言語対応の自動翻訳\n5. **Personalize**: リアルタイムコンテンツレコメンデーション\n6. **SageMaker**: 視聴者行動予測モデル\n7. **Kinesis**: リアルタイムデータストリーミング\n\n他の選択肢の問題点：\n- **OpenCV + FFmpeg + spaCy + TensorFlow + Kafka + Elasticsearch + Kibanaを使用し、オープンソースメディア基盤を構築する**: オープンソースは多言語対応とスケーラビリティに限界\n- **Lambda + Step Functions + DynamoDB + S3 + CloudFront + API Gatewayを使用し、サーバーレスメディア基盤を構築する**: サーバーレスのみでは大規模メディア処理に不適切\n- **EMR + Spark + Hadoop + Hive + Zeppelin + Redshiftを使用し、バッチ処理メディア基盤を構築する**: バッチ処理はリアルタイムレコメンデーションに不適切'
  },
  {
    id: 'adv-analytics-006',
    category: '分析・機械学習',
    question: '大手製造業が、予知保全とスマートファクトリーシステムを構築しています。以下の要件があります：\n\n1. 工場設備からのIoTセンサーデータ（数万台）\n2. 機械学習による設備故障予測\n3. 生産効率最適化とボトルネック分析\n4. 品質管理と異常検知\n5. サプライチェーン最適化\n6. エネルギー消費最適化\n7. 安全性監視とリスク評価\n\nこの要件を満たすために、最も適切な製造業AI/MLアーキテクチャはどれですか？',
    options: [
      'IoT Analytics + SageMaker + Lookout for Equipment + Timestream + QuickSight + Kinesis + Greengrass + Twinmakerを使用し、製造業特化AI/ML基盤を構築する',
      'InfluxDB + Grafana + TensorFlow + Jupyter + Kafka + Spark + Cassandraを使用し、時系列特化製造基盤を構築する',
      'Lambda + DynamoDB + CloudWatch + SNS + Step Functions + API Gatewayを使用し、サーバーレス製造基盤を構築する',
      'EMR + Hadoop + Spark + Hive + Zeppelin + S3 + Redshiftを使用し、ビッグデータ製造基盤を構築する'
    ],
    correct: 0,
    explanation: '製造業の予知保全システムには、IoT Analytics + SageMaker + Lookout for Equipment + Timestream + QuickSight + Kinesis + Greengrass + Twinmakerの組み合わせが最適です。\n\n理由：\n1. **IoT Analytics**: 製造IoTデータの前処理と分析\n2. **SageMaker**: 設備故障予測と生産最適化モデル\n3. **Lookout for Equipment**: 異常検知専用サービス\n4. **Timestream**: 時系列データの効率的管理\n5. **QuickSight**: 製造ダッシュボードと分析\n6. **Kinesis**: リアルタイムデータストリーミング\n7. **Greengrass**: エッジでのローカル処理\n8. **Twinmaker**: デジタルツイン構築\n\n他の選択肢の問題点：\n- **InfluxDB + Grafana + TensorFlow + Jupyter + Kafka + Spark + Cassandraを使用し、時系列特化製造基盤を構築する**: 時系列特化だが製造業特有の要件に最適化されていない\n- **Lambda + DynamoDB + CloudWatch + SNS + Step Functions + API Gatewayを使用し、サーバーレス製造基盤を構築する**: サーバーレスは大規模IoTデータ処理に限界\n- **EMR + Hadoop + Spark + Hive + Zeppelin + S3 + Redshiftを使用し、バッチ処理製造基盤を構築する**: バッチ処理はリアルタイム予知保全に不適切'
  },
  {
    id: 'adv-analytics-007',
    category: '分析・機械学習',
    question: '大手ヘルスケア企業が、医療画像診断AIシステムを構築しています。以下の要件があります：\n\n1. 医療画像（CT、MRI、X線）の深層学習分析\n2. 診断支援AIの高精度推論\n3. 医師との協調診断ワークフロー\n4. FDA承認のための臨床試験データ管理\n5. HIPAA準拠のセキュリティ\n6. 医療機関間でのモデル共有\n7. 継続学習による精度向上\n\nこの要件を満たすために、最も適切な医療AI/MLアーキテクチャはどれですか？',
    options: [
      'SageMaker + HealthLake + Comprehend Medical + Macie + CloudTrail + Ground Truth + QuickSightを使用し、医療特化AI/ML基盤を構築する',
      'TensorFlow + PyTorch + DICOM + HL7 + PostgreSQL + Docker + Kubernetesを使用し、オープンソース医療基盤を構築する',
      'Lambda + Step Functions + DynamoDB + S3 + API Gateway + CloudWatchを使用し、サーバーレス医療基盤を構築する',
      'EMR + Spark + Hadoop + Hive + Jupyter + Redshift + Tableauを使用し、ビッグデータ医療基盤を構築する'
    ],
    correct: 0,
    explanation: 'ヘルスケア企業の医療画像診断AIには、SageMaker + HealthLake + Comprehend Medical + Macie + CloudTrail + Ground Truth + QuickSightの組み合わせが最適です。\n\n理由：\n1. **SageMaker**: 医療画像深層学習モデルの開発・デプロイ\n2. **HealthLake**: FHIR準拠の医療データ管理\n3. **Comprehend Medical**: 医療テキストの自然言語処理\n4. **Macie**: PHI（個人健康情報）の自動検出と保護\n5. **CloudTrail**: HIPAA準拠の監査証跡\n6. **Ground Truth**: 医療画像のラベリング\n7. **QuickSight**: 臨床試験データの可視化\n\n他の選択肢の問題点：\n- **TensorFlow + PyTorch + DICOM + HL7 + PostgreSQL + Docker + Kubernetesを使用し、オープンソース医療基盤を構築する**: オープンソースはHIPAA準拠の証明が困難\n- **Lambda + Step Functions + DynamoDB + S3 + API Gateway + CloudWatchを使用し、サーバーレス医療基盤を構築する**: サーバーレスは大規模医療画像処理に不適切\n- **EMR + Spark + Hadoop + Hive + Jupyter + Redshiftを使用し、バッチ処理医療基盤を構築する**: バッチ処理は診断支援のリアルタイム要件に不適切'
  },
  {
    id: 'adv-analytics-008',
    category: '分析・機械学習',
    question: '大手物流会社が、配送最適化とサプライチェーン分析システムを構築しています。以下の要件があります：\n\n1. 配送ルート最適化（数百万の組み合わせ）\n2. 需要予測と在庫最適化\n3. リアルタイム配送追跡と遅延予測\n4. 燃料消費最適化とCO2削減\n5. 倉庫オペレーション最適化\n6. 顧客満足度予測\n7. 災害時の配送影響分析\n\nこの要件を満たすために、最も適切な物流AI/MLアーキテクチャはどれですか？',
    options: [
      'SageMaker + Location Service + Forecast + Optimization + Kinesis + Timestream + QuickSight + Batch + ParallelClusterを使用し、物流特化AI/ML基盤を構築する',
      'OR-Tools + NetworkX + Pandas + Scikit-learn + PostgreSQL + Redis + Grafanaを使用し、オープンソース物流基盤を構築する',
      'Lambda + Step Functions + DynamoDB + API Gateway + CloudWatch + SNSを使用し、サーバーレス物流基盤を構築する',
      'EMR + Spark + Hadoop + Hive + Zeppelin + S3 + Redshiftを使用し、ビッグデータ物流基盤を構築する'
    ],
    correct: 0,
    explanation: '物流会社の配送最適化システムには、SageMaker + Location Service + Forecast + Optimization + Kinesis + Timestream + QuickSight + Batch + ParallelClusterの組み合わせが最適です。\n\n理由：\n1. **SageMaker**: 需要予測と顧客満足度予測モデル\n2. **Location Service**: 地理空間データ処理と配送ルート最適化\n3. **Forecast**: 時系列需要予測\n4. **Optimization**: 大規模組み合わせ最適化問題\n5. **Kinesis**: リアルタイム配送データストリーミング\n6. **Timestream**: 配送履歴の時系列管理\n7. **Batch**: 大規模最適化計算\n8. **ParallelCluster**: 並列最適化処理\n\n他の選択肢の問題点：\n- **OR-Tools + NetworkX + Pandas + Scikit-learn + PostgreSQL + Redis + Grafanaを使用し、オープンソース物流基盤を構築する**: オープンソースは大規模最適化問題のスケーラビリティに限界\n- **Lambda + Step Functions + DynamoDB + API Gateway + CloudWatch + SNSを使用し、サーバーレス物流基盤を構築する**: サーバーレスは大規模最適化計算に不適切\n- **EMR + Spark + Hadoop + Hive + Zeppelin + S3 + Redshiftを使用し、バッチ処理物流基盤を構築する**: バッチ処理のみではリアルタイム追跡要件を満たせない'
  },
  {
    id: 'adv-analytics-009',
    category: '分析・機械学習',
    question: '大手エネルギー会社が、スマートグリッド分析とエネルギー最適化システムを構築しています。以下の要件があります：\n\n1. 電力需給予測（気象データ連携）\n2. 再生可能エネルギー出力予測\n3. 電力品質監視と異常検知\n4. エネルギー取引最適化\n5. 停電予兆検知と予防保全\n6. 顧客の電力使用パターン分析\n7. カーボンニュートラル達成支援\n\nこの要件を満たすために、最も適切なエネルギーAI/MLアーキテクチャはどれですか？',
    options: [
      'SageMaker + Forecast + Lookout for Metrics + IoT Analytics + Timestream + Kinesis + QuickSight + Ground Stationを使用し、エネルギー特化AI/ML基盤を構築する',
      'Prophet + LSTM + InfluxDB + Grafana + Kafka + Spark + Cassandraを使用し、時系列特化エネルギー基盤を構築する',
      'Lambda + Step Functions + DynamoDB + CloudWatch + SNS + API Gatewayを使用し、サーバーレスエネルギー基盤を構築する',
      'EMR + Spark + Hadoop + Hive + Jupyter + S3 + Redshiftを使用し、ビッグデータエネルギー基盤を構築する'
    ],
    correct: 0,
    explanation: 'エネルギー会社のスマートグリッド分析には、SageMaker + Forecast + Lookout for Metrics + IoT Analytics + Timestream + Kinesis + QuickSight + Ground Stationの組み合わせが最適です。\n\n理由：\n1. **SageMaker**: 電力需給予測と使用パターン分析モデル\n2. **Forecast**: 時系列電力需要予測\n3. **Lookout for Metrics**: 電力品質異常検知\n4. **IoT Analytics**: スマートメーターデータ分析\n5. **Timestream**: 電力時系列データの効率的管理\n6. **Kinesis**: リアルタイム電力データストリーミング\n7. **QuickSight**: エネルギーダッシュボード\n8. **Ground Station**: 気象衛星データ取得\n\n他の選択肢の問題点：\n- **Prophet + LSTM + InfluxDB + Grafana + Kafka + Spark + Cassandraを使用し、時系列特化エネルギー基盤を構築する**: 時系列特化だがエネルギー業界特有の要件に最適化されていない\n- **Lambda + Step Functions + DynamoDB + CloudWatch + SNS + API Gatewayを使用し、サーバーレスエネルギー基盤を構築する**: サーバーレスは大規模電力データ処理に限界\n- **EMR + Spark + Hadoop + Hive + Jupyter + S3 + Redshiftを使用し、バッチ処理エネルギー基盤を構築する**: バッチ処理はリアルタイム電力監視に不適切'
  },
  {
    id: 'adv-analytics-010',
    category: '分析・機械学習',
    question: '大手保険会社が、保険リスク評価とクレーム処理自動化システムを構築しています。以下の要件があります：\n\n1. 保険リスクの動的評価とプライシング\n2. クレーム画像の自動分析\n3. 不正クレーム検知\n4. 顧客行動分析とチャーン予測\n5. 自然災害リスクモデリング\n6. 規制レポート（Solvency II）の自動生成\n7. 説明可能AIによる判定根拠提示\n\nこの要件を満たすために、最も適切な保険AI/MLアーキテクチャはどれですか？',
    options: [
      'SageMaker + Rekognition + Textract + Comprehend + Forecast + Clarify + QuickSight + Kinesis + Timestreamを使用し、保険特化AI/ML基盤を構築する',
      'Scikit-learn + OpenCV + NLTK + Pandas + PostgreSQL + Redis + Celeryを使用し、オープンソース保険基盤を構築する',
      'Lambda + Step Functions + DynamoDB + S3 + API Gateway + CloudWatchを使用し、サーバーレス保険基盤を構築する',
      'EMR + Spark + MLlib + Hadoop + Hive + Zeppelin + Redshiftを使用し、ビッグデータ保険基盤を構築する'
    ],
    correct: 0,
    explanation: '保険会社のリスク評価システムには、SageMaker + Rekognition + Textract + Comprehend + Forecast + Clarify + QuickSight + Kinesis + Timestreamの組み合わせが最適です。\n\n理由：\n1. **SageMaker**: 保険リスク評価とチャーン予測モデル\n2. **Rekognition**: クレーム画像の自動分析\n3. **Textract**: 保険書類のOCR処理\n4. **Comprehend**: クレーム文書の自然言語処理\n5. **Forecast**: 自然災害リスク予測\n6. **Clarify**: 説明可能AIによる判定根拠提示\n7. **QuickSight**: 規制レポート自動生成\n8. **Kinesis**: リアルタイムクレームデータ処理\n\n他の選択肢の問題点：\n- **Scikit-learn + OpenCV + NLTK + Pandas + PostgreSQL + Redis + Celeryを使用し、オープンソース保険基盤を構築する**: オープンソースは保険業界の規制要件対応が困難\n- **Lambda + Step Functions + DynamoDB + S3 + API Gateway + CloudWatchを使用し、サーバーレス保険基盤を構築する**: サーバーレスは大規模保険データ処理に限界\n- **EMR + Spark + MLlib + Hadoop + Hive + Zeppelin + Redshiftを使用し、バッチ処理保険基盤を構築する**: バッチ処理はリアルタイムリスク評価に不適切'
  },
  {
    id: 'adv-analytics-multi-001',
    category: '分析・機械学習',
    question: '大手小売チェーンが、リアルタイム在庫最適化とパーソナライゼーションシステムを構築しています。以下の要件があります：\n\n**要件：**\n- 全国1,000店舗のリアルタイム在庫データ分析\n- 顧客行動データによるパーソナライゼーション\n- 需要予測による自動発注システム\n- 1秒間に10万件のトランザクション処理\n- 機械学習による価格最適化\n- リアルタイムレコメンデーション\n\nこのリアルタイム分析システムに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'Amazon Kinesis Data Analytics - リアルタイムストリーム分析',
      'Amazon Personalize - 機械学習パーソナライゼーション',
      'Amazon Forecast - 需要予測サービス',
      'Amazon Redshift - データウェアハウス',
      'AWS Glue - データ統合・ETL',
      'Amazon EMR - ビッグデータ処理'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Amazon Kinesis Data Analytics**\n- 1秒間10万件のリアルタイム処理\n- ストリーミングデータの即座分析\n- 在庫データのリアルタイム集計\n- SQLベースの分析クエリ実行\n- 低レイテンシでの意思決定支援\n\n**2. Amazon Personalize**\n- 顧客行動データによる個別化\n- リアルタイムレコメンデーション\n- 機械学習による自動最適化\n- A/Bテスト機能による効果測定\n- 小売業界特化の推奨アルゴリズム\n\n**3. Amazon Forecast**\n- 需要予測による自動発注\n- 機械学習による高精度予測\n- 季節性・トレンド分析\n- 外部要因（天気・イベント）考慮\n- 在庫最適化による収益向上\n\n**他の選択肢について：**\n- **Redshift**: バッチ分析には適しているがリアルタイム処理に不適切\n- **Glue**: データ統合には重要だがリアルタイム分析の主要機能ではない\n- **EMR**: 大規模バッチ処理には適しているがリアルタイム要件に不適切'
  },
  {
    id: 'adv-analytics-multi-002',
    category: '分析・機械学習',
    question: '金融機関が、不正取引検知とリスク管理のための高度分析システムを構築しています。以下の要件があります：\n\n**要件：**\n- 取引データのリアルタイム異常検知\n- 複雑な金融商品のリスク分析\n- 規制報告書の自動生成\n- 顧客セグメンテーション分析\n- 大量の履歴データからのパターン発見\n- 機械学習による不正検知精度向上\n\nこの金融分析システムに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'Amazon SageMaker - 機械学習プラットフォーム',
      'Amazon Fraud Detector - 不正検知専用サービス',
      'Amazon Athena - サーバーレスクエリサービス',
      'Amazon QuickSight - ビジネスインテリジェンス',
      'AWS Lake Formation - データレイク管理',
      'Amazon Comprehend - 自然言語処理'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. Amazon SageMaker**\n- 金融業界特化の機械学習モデル開発\n- リスク分析の高度なアルゴリズム実装\n- 大量履歴データからのパターン発見\n- 自動モデル調整による精度向上\n- 規制要件に対応したモデル説明性\n\n**2. Amazon Fraud Detector**\n- リアルタイム不正取引検知\n- 金融業界特化の不正検知モデル\n- 機械学習による検知精度向上\n- 低レイテンシでの即座判定\n- 金融規制への準拠機能\n\n**他の選択肢について：**\n- **Athena**: データクエリには有用だが、機械学習機能が不足\n- **QuickSight**: 可視化には重要だが、高度分析の主要機能ではない\n- **Lake Formation**: データ管理には重要だが、分析処理の主要機能ではない\n- **Comprehend**: 自然言語処理には有用だが、金融分析の主要要件ではない'
  },
  {
    id: 'adv-analytics-multi-003',
    category: '分析・機械学習',
    question: '製造業が、IoTデータを活用した予知保全と品質管理システムを構築しています。以下の要件があります：\n\n**要件：**\n- 工場内10,000台のセンサーからのデータ収集\n- 機械故障の予知保全システム\n- 製品品質の異常検知\n- 生産効率の最適化分析\n- エネルギー消費量の分析・最適化\n- 大規模データの長期保存と分析\n\nこの製造業分析システムに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'Amazon Timestream - 時系列データベース',
      'Amazon Lookout for Equipment - 機械学習による異常検知',
      'AWS IoT Analytics - IoTデータ分析専用サービス',
      'Amazon Redshift - データウェアハウス',
      'Amazon EMR - ビッグデータ処理クラスター',
      'Amazon OpenSearch Service - 検索・分析エンジン'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Amazon Timestream**\n- IoTセンサーデータの効率的な時系列保存\n- 高速な時系列クエリ処理\n- 自動的なデータ圧縮とライフサイクル管理\n- 大規模時系列データに最適化\n- コスト効率的な長期保存\n\n**2. Amazon Lookout for Equipment**\n- 機械学習による予知保全\n- 機械故障の事前検知\n- 製造業特化の異常検知アルゴリズム\n- センサーデータからの自動学習\n- メンテナンス最適化による効率向上\n\n**3. AWS IoT Analytics**\n- IoTデータの前処理と変換\n- 製造業特有のデータ分析機能\n- 品質管理データの統計分析\n- 生産効率の可視化と最適化\n- エネルギー消費分析\n\n**他の選択肢について：**\n- **Redshift**: 構造化データ分析には適しているがIoT時系列データには不適切\n- **EMR**: 大規模バッチ処理には適しているがリアルタイムIoT分析には不適切\n- **OpenSearch**: 検索機能は有用だが、IoT特化分析の主要機能ではない'
  },
  {
    id: 'adv-arch-001',
    category: 'アーキテクチャ',
    question: '大手金融機関が、次世代デジタルバンキングプラットフォームを構築しています。以下の要件があります：\n\n1. マイクロサービスアーキテクチャによる疎結合設計\n2. 世界中からの同時アクセス（ピーク時500万ユーザー）\n3. 99.99%の可用性とゼロダウンタイムデプロイ\n4. 金融規制（PCI DSS、SOX、GDPR）への準拠\n5. リアルタイム取引処理（レイテンシ10ms以下）\n6. 災害復旧（RTO: 5分、RPO: 0）\n7. セキュリティとコンプライアンスの自動監査\n\nこの要件を満たすために、最も適切なマイクロサービスアーキテクチャはどれですか？',
    options: [
      'EKS + Istio + Fargate + Aurora Global Database + ElastiCache + API Gateway + CloudTrail + Config + Security Hubを使用し、クラウドネイティブ金融アーキテクチャを構築する',
      'ECS + Application Load Balancer + RDS Multi-AZ + ElastiCache + Lambda + Step Functions + CloudWatchを使用し、コンテナベース金融アーキテクチャを構築する',
      'Lambda + API Gateway + DynamoDB Global Tables + Step Functions + EventBridge + SQS + SNSを使用し、サーバーレス金融アーキテクチャを構築する',
      'EC2 Auto Scaling + Application Load Balancer + RDS + ElastiCache + CloudFront + Route 53を使用し、従来型金融アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: '金融機関のデジタルバンキングには、EKS + Istio + Fargate + Aurora Global Database + ElastiCache + API Gateway + CloudTrail + Config + Security Hubの組み合わせが最適です。\n\n理由：\n1. **EKS + Istio**: マイクロサービス間の通信制御とセキュリティ\n2. **Fargate**: サーバーレスコンテナで運用負荷軽減\n3. **Aurora Global Database**: グローバル展開とゼロRPO災害復旧\n4. **ElastiCache**: 10ms以下の低レイテンシ実現\n5. **API Gateway**: 統一されたAPI管理とセキュリティ\n6. **CloudTrail + Config**: 金融規制の自動監査\n7. **Security Hub**: 統合セキュリティ管理\n\n他の選択肢の問題点：\n- **ECS + Application Load Balancer + RDS Multi-AZ + ElastiCache + Lambda + Step Functions + CloudWatchを使用し、コンテナベース金融アーキテクチャを構築する**: ECSはKubernetesエコシステムの豊富な機能を活用できない\n- **Lambda + API Gateway + DynamoDB Global Tables + Step Functions + EventBridge + SQS + SNSを使用し、サーバーレス金融アーキテクチャを構築する**: Lambdaの実行時間制限により複雑な金融処理に不適切\n- **EC2 Auto Scaling + Application Load Balancer + RDS + ElastiCache + CloudFront + Route 53を使用し、従来型金融アーキテクチャを構築する**: 従来型アーキテクチャはマイクロサービス要件を満たさない'
  },
  {
    id: 'adv-arch-002',
    category: 'アーキテクチャ',
    question: '大手eコマース企業が、グローバル展開のためのマルチリージョンアーキテクチャを設計しています。以下の要件があります：\n\n1. 世界5地域での同時運用（アクティブ-アクティブ）\n2. 地域間でのデータ整合性保証\n3. 地域別の法規制対応（データローカライゼーション）\n4. 災害時の自動フェイルオーバー（RTO: 1分）\n5. グローバル負荷分散と最適化\n6. 地域間でのコンテンツ同期\n7. 統一された監視とガバナンス\n\nこの要件を満たすために、最も適切なマルチリージョンアーキテクチャはどれですか？',
    options: [
      'Route 53 + Global Accelerator + Aurora Global Database + DynamoDB Global Tables + S3 Cross-Region Replication + CloudFront + Transit Gateway + Control Towerを使用し、グローバルアクティブ-アクティブアーキテクチャを構築する',
      'Application Load Balancer + RDS Read Replicas + ElastiCache + S3 + CloudFront + VPC Peeringを使用し、マスター-スレーブアーキテクチャを構築する',
      'API Gateway + Lambda + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレスマルチリージョンアーキテクチャを構築する',
      'EC2 Auto Scaling + Network Load Balancer + Aurora + ElastiCache + Direct Connect + Site-to-Site VPNを使用し、ハイブリッドマルチリージョンアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: 'eコマース企業のマルチリージョンアーキテクチャには、Route 53 + Global Accelerator + Aurora Global Database + DynamoDB Global Tables + S3 Cross-Region Replication + CloudFront + Transit Gateway + Control Towerの組み合わせが最適です。\n\n理由：\n1. **Route 53**: 地理的ルーティングとヘルスチェック\n2. **Global Accelerator**: グローバル負荷分散と最適化\n3. **Aurora Global Database**: 地域間でのデータ整合性とRTO 1分\n4. **DynamoDB Global Tables**: グローバルデータ同期\n5. **S3 Cross-Region Replication**: コンテンツの地域間同期\n6. **CloudFront**: グローバルCDN\n7. **Transit Gateway**: 地域間ネットワーク接続\n8. **Control Tower**: 統一ガバナンス\n\n他の選択肢の問題点：\n- **Application Load Balancer + RDS Read Replicas + ElastiCache + S3 + CloudFront + VPC Peeringを使用し、マスター-スレーブアーキテクチャを構築する**: マスター-スレーブはアクティブ-アクティブ要件を満たさない\n- **API Gateway + Lambda + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレスマルチリージョンアーキテクチャを構築する**: サーバーレスのみでは複雑なeコマース処理に限界\n- **EC2 Auto Scaling + Network Load Balancer + Aurora + ElastiCache + Direct Connect + Site-to-Site VPNを使用し、ハイブリッドマルチリージョンアーキテクチャを構築する**: ハイブリッドは地域別法規制対応が複雑'
  },
  {
    id: 'adv-arch-003',
    category: 'アーキテクチャ',
    question: '大手製造業が、Industry 4.0対応のスマートファクトリーアーキテクチャを構築しています。以下の要件があります：\n\n1. 工場内IoTデバイス（数万台）との統合\n2. エッジコンピューティングによるリアルタイム制御\n3. クラウドとオンプレミスのハイブリッド環境\n4. 生産データの機械学習分析\n5. サプライチェーン全体の可視化\n6. セキュリティとコンプライアンス\n7. 段階的なデジタル変革\n\nこの要件を満たすために、最も適切なスマートファクトリーアーキテクチャはどれですか？',
    options: [
      'AWS Outposts + IoT Greengrass + IoT Core + SageMaker + Timestream + QuickSight + Direct Connect + Systems Manager + Config + GuardDutyを使用し、ハイブリッドスマートファクトリーアーキテクチャを構築する',
      'EC2 + Lambda + IoT Core + Kinesis + S3 + Athena + QuickSight + VPC + CloudWatchを使用し、クラウドファーストスマートファクトリーアーキテクチャを構築する',
      'EKS + Kubernetes + Prometheus + Grafana + InfluxDB + MQTT + Node-REDを使用し、オープンソーススマートファクトリーアーキテクチャを構築する',
      'VMware Cloud on AWS + vSphere + NSX + vSAN + vRealize + Tanzu + Pivotal Cloud Foundryを使用し、VMwareベーススマートファクトリーアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: '製造業のスマートファクトリーには、AWS Outposts + IoT Greengrass + IoT Core + SageMaker + Timestream + QuickSight + Direct Connect + Systems Manager + Config + GuardDutyの組み合わせが最適です。\n\n理由：\n1. **AWS Outposts**: オンプレミスでのAWSサービス利用\n2. **IoT Greengrass**: エッジでのリアルタイム制御\n3. **IoT Core**: 数万台IoTデバイスの統合管理\n4. **SageMaker**: 生産データの機械学習分析\n5. **Timestream**: 製造時系列データの効率的管理\n6. **QuickSight**: サプライチェーン可視化\n7. **Direct Connect**: 安定したクラウド接続\n8. **Systems Manager**: ハイブリッド環境の統合管理\n\n他の選択肢の問題点：\n- **EC2 + Lambda + IoT Core + Kinesis + S3 + Athena + QuickSight + VPC + CloudWatchを使用し、クラウドファーストスマートファクトリーアーキテクチャを構築する**: クラウドファーストは製造業の既存システム統合に課題\n- **EKS + Kubernetes + Prometheus + Grafana + InfluxDB + MQTT + Node-REDを使用し、オープンソーススマートファクトリーアーキテクチャを構築する**: オープンソースは製造業の安定性要件に不適切\n- **VMware Cloud on AWS + vSphere + NSX + vSAN + vRealize + Tanzu + Pivotal Cloud Foundryを使用し、VMwareベーススマートファクトリーアーキテクチャを構築する**: VMwareベースはAWSサービスとの統合に制限'
  },
  {
    id: 'adv-arch-004',
    category: 'アーキテクチャ',
    question: '大手メディア企業が、次世代ストリーミングプラットフォームを構築しています。以下の要件があります：\n\n1. 世界中への4K/8K動画配信\n2. 同時視聴者数：1億人以上\n3. 動的な品質調整とパーソナライゼーション\n4. ライブ配信とVODの統合\n5. マルチデバイス対応（TV、スマホ、PC）\n6. コンテンツ保護とDRM\n7. 視聴分析とレコメンデーション\n\nこの要件を満たすために、最も適切なストリーミングアーキテクチャはどれですか？',
    options: [
      'MediaLive + MediaPackage + MediaStore + CloudFront + Lambda@Edge + Personalize + Kinesis + OpenSearch + QuickSight + WAF + Shieldを使用し、エンドツーエンドストリーミングアーキテクチャを構築する',
      'EC2 + FFmpeg + Nginx + S3 + CloudFront + ElastiCache + RDS + Lambda + API Gatewayを使用し、カスタムストリーミングアーキテクチャを構築する',
      'ECS + Docker + Kubernetes + Istio + Prometheus + Grafana + ELK Stack + Redisを使用し、コンテナベースストリーミングアーキテクチャを構築する',
      'Lambda + Step Functions + DynamoDB + S3 + CloudFront + API Gateway + Kinesis + SNSを使用し、サーバーレスストリーミングアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: 'メディア企業のストリーミングプラットフォームには、MediaLive + MediaPackage + MediaStore + CloudFront + Lambda@Edge + Personalize + Kinesis + OpenSearch + QuickSight + WAF + Shieldの組み合わせが最適です。\n\n理由：\n1. **MediaLive**: ライブ動画エンコーディング\n2. **MediaPackage**: 動画パッケージングとDRM\n3. **MediaStore**: 高性能動画ストレージ\n4. **CloudFront**: 1億人同時配信対応CDN\n5. **Lambda@Edge**: エッジでの動的品質調整\n6. **Personalize**: 視聴者別レコメンデーション\n7. **Kinesis**: リアルタイム視聴分析\n8. **OpenSearch**: 視聴ログ検索・分析\n9. **WAF + Shield**: DDoS攻撃からの保護\n\n他の選択肢の問題点：\n- **EC2 + FFmpeg + Nginx + S3 + CloudFront + ElastiCache + RDS + Lambda + API Gatewayを使用し、カスタムストリーミングアーキテクチャを構築する**: カスタム実装は1億人規模のスケーラビリティに限界\n- **ECS + Docker + Kubernetes + Istio + Prometheus + Grafana + ELK Stack + Redisを使用し、コンテナベースストリーミングアーキテクチャを構築する**: コンテナベースはメディア特化機能が不足\n- **Lambda + Step Functions + DynamoDB + S3 + CloudFront + API Gateway + Kinesis + SNSを使用し、サーバーレスストリーミングアーキテクチャを構築する**: サーバーレスは大規模動画処理に不適切'
  },
  {
    id: 'adv-arch-005',
    category: 'アーキテクチャ',
    question: '大手ヘルスケア企業が、統合医療プラットフォームを構築しています。以下の要件があります：\n\n1. 病院・クリニック・薬局の統合\n2. 電子カルテとPHRの連携\n3. 医療画像の高速共有\n4. テレヘルス・遠隔診療対応\n5. HIPAA・GDPR準拠\n6. 医療機器との安全な接続\n7. 医療研究データの匿名化\n\nこの要件を満たすために、最も適切な統合医療アーキテクチャはどれですか？',
    options: [
      'HealthLake + Comprehend Medical + Transcribe Medical + Connect + Chime + Macie + PrivateLink + VPC Endpoints + CloudTrail + Config + KMSを使用し、HIPAA準拠統合医療アーキテクチャを構築する',
      'RDS + Lambda + API Gateway + S3 + CloudFront + Cognito + IAM + CloudWatch + VPCを使用し、従来型医療アーキテクチャを構築する',
      'EHR + HL7 FHIR + DICOM + OAuth + SAML + PostgreSQL + Redis + Nginx + Dockerを使用し、標準準拠医療アーキテクチャを構築する',
      'Blockchain + Smart Contracts + IPFS + Ethereum + Hyperledger + Kubernetes + Microservicesを使用し、分散型医療アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: 'ヘルスケア企業の統合医療プラットフォームには、HealthLake + Comprehend Medical + Transcribe Medical + Connect + Chime + Macie + PrivateLink + VPC Endpoints + CloudTrail + Config + KMSの組み合わせが最適です。\n\n理由：\n1. **HealthLake**: FHIR準拠の医療データ統合\n2. **Comprehend Medical**: 医療テキストの自然言語処理\n3. **Transcribe Medical**: 診療音声の文字起こし\n4. **Connect + Chime**: テレヘルス・遠隔診療基盤\n5. **Macie**: PHI（個人健康情報）の自動検出\n6. **PrivateLink**: 医療機器との安全な接続\n7. **CloudTrail + Config**: HIPAA準拠監査\n8. **KMS**: 医療データの暗号化管理\n\n他の選択肢の問題点：\n- **RDS + Lambda + API Gateway + S3 + CloudFront + Cognito + IAM + CloudWatch + VPCを使用し、従来型医療アーキテクチャを構築する**: 従来型アーキテクチャは医療特化機能が不足\n- **EHR + HL7 FHIR + DICOM + OAuth + SAML + PostgreSQL + Redis + Nginx + Dockerを使用し、標準準拠医療アーキテクチャを構築する**: 標準準拠だがクラウドスケーラビリティに限界\n- **Blockchain + Smart Contracts + IPFS + Ethereum + Hyperledger + Kubernetes + Microservicesを使用し、分散型医療アーキテクチャを構築する**: 分散型は医療業界の規制要件に不適切'
  },
  {
    id: 'adv-arch-006',
    category: 'アーキテクチャ',
    question: '大手ゲーム会社が、次世代クラウドゲーミングプラットフォームを構築しています。以下の要件があります：\n\n1. 世界中からの低レイテンシアクセス（20ms以下）\n2. 同時プレイヤー数：1000万人以上\n3. ゲームストリーミングとクラウドレンダリング\n4. プレイヤーデータの同期と整合性\n5. チート対策とセキュリティ\n6. 動的スケーリングとコスト最適化\n7. ゲーム分析とプレイヤー行動予測\n\nこの要件を満たすために、最も適切なクラウドゲーミングアーキテクチャはどれですか？',
    options: [
      'GameLift + Global Accelerator + EC2 GPU Instances + ElastiCache + DynamoDB Global Tables + Kinesis + SageMaker + CloudFront + Lambda@Edgeを使用し、クラウドゲーミング特化アーキテクチャを構築する',
      'ECS + Application Load Balancer + RDS + ElastiCache + S3 + CloudFront + Lambda + API Gatewayを使用し、コンテナベースゲーミングアーキテクチャを構築する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functions + SQS + SNSを使用し、サーバーレスゲーミングアーキテクチャを構築する',
      'Kubernetes + Docker + NVIDIA GPU + Redis + PostgreSQL + Kafka + Prometheus + Grafanaを使用し、オープンソースゲーミングアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: 'ゲーム会社のクラウドゲーミングプラットフォームには、GameLift + Global Accelerator + EC2 GPU Instances + ElastiCache + DynamoDB Global Tables + Kinesis + SageMaker + CloudFront + Lambda@Edgeの組み合わせが最適です。\n\n理由：\n1. **GameLift**: ゲーム専用のマネージドサービス\n2. **Global Accelerator**: 20ms以下の低レイテンシ実現\n3. **EC2 GPU Instances**: クラウドレンダリング処理\n4. **ElastiCache**: 高速データアクセス\n5. **DynamoDB Global Tables**: プレイヤーデータの同期\n6. **Kinesis**: リアルタイムゲーム分析\n7. **SageMaker**: プレイヤー行動予測\n8. **CloudFront + Lambda@Edge**: エッジでの最適化\n\n他の選択肢の問題点：\n- **ECS + Application Load Balancer + RDS + ElastiCache + S3 + CloudFront + Lambda + API Gatewayを使用し、コンテナベースゲーミングアーキテクチャを構築する**: ECSはゲーム特化機能が不足\n- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functions + SQS + SNSを使用し、サーバーレスゲーミングアーキテクチャを構築する**: サーバーレスは低レイテンシゲーミングに不適切\n- **Kubernetes + Docker + NVIDIA GPU + Redis + PostgreSQL + Kafka + Prometheus + Grafanaを使用し、オープンソースゲーミングアーキテクチャを構築する**: オープンソースは1000万人規模のスケーラビリティに限界'
  },
  {
    id: 'adv-arch-007',
    category: 'アーキテクチャ',
    question: '大手物流会社が、自動運転配送システムのアーキテクチャを構築しています。以下の要件があります：\n\n1. 自動運転車両との双方向通信\n2. リアルタイム配送ルート最適化\n3. 車両状態監視と予知保全\n4. 配送センターとの統合\n5. 交通情報・気象データ連携\n6. 安全性とセキュリティ\n7. 段階的な自動化導入\n\nこの要件を満たすために、最も適切な自動運転配送アーキテクチャはどれですか？',
    options: [
      'IoT Core + Greengrass + RoboMaker + Location Service + Forecast + SageMaker + Kinesis + Timestream + Lambda + Step Functions + Direct Connectを使用し、自動運転配送特化アーキテクチャを構築する',
      'EC2 + Lambda + API Gateway + DynamoDB + S3 + CloudWatch + VPC + NAT Gatewayを使用し、従来型配送アーキテクチャを構築する',
      'EKS + Kubernetes + Istio + Prometheus + Grafana + Kafka + Redis + PostgreSQLを使用し、コンテナベース配送アーキテクチャを構築する',
      'Blockchain + Smart Contracts + IPFS + Ethereum + IoT + Edge Computing + 5Gを使用し、分散型配送アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: '物流会社の自動運転配送システムには、IoT Core + Greengrass + RoboMaker + Location Service + Forecast + SageMaker + Kinesis + Timestream + Lambda + Step Functions + Direct Connectの組み合わせが最適です。\n\n理由：\n1. **IoT Core**: 自動運転車両との双方向通信\n2. **Greengrass**: エッジでのリアルタイム処理\n3. **RoboMaker**: 自動運転シミュレーション\n4. **Location Service**: 配送ルート最適化\n5. **Forecast**: 交通・気象予測\n6. **SageMaker**: 予知保全モデル\n7. **Kinesis**: リアルタイムデータストリーミング\n8. **Timestream**: 車両データの時系列管理\n9. **Direct Connect**: 配送センターとの安定接続\n\n他の選択肢の問題点：\n- **EC2 + Lambda + API Gateway + DynamoDB + S3 + CloudWatch + VPC + NAT Gatewayを使用し、従来型配送アーキテクチャを構築する**: 従来型は自動運転特化機能が不足\n- **EKS + Kubernetes + Istio + Prometheus + Grafana + Kafka + Redis + PostgreSQLを使用し、コンテナベース配送アーキテクチャを構築する**: コンテナベースは自動運転の特殊要件に不適切\n- **Blockchain + Smart Contracts + IPFS + Ethereum + IoT + Edge Computing + 5Gを使用し、分散型配送アーキテクチャを構築する**: 分散型は物流業界の安全性要件に不適切'
  },
  {
    id: 'adv-arch-008',
    category: 'アーキテクチャ',
    question: '大手エネルギー会社が、次世代スマートグリッドアーキテクチャを構築しています。以下の要件があります：\n\n1. 発電所・変電所・配電網の統合制御\n2. 再生可能エネルギーの変動対応\n3. 電力需給のリアルタイム最適化\n4. 停電予防と自動復旧\n5. 電力取引とマーケット連携\n6. サイバーセキュリティ対策\n7. カーボンニュートラル支援\n\nこの要件を満たすために、最も適切なスマートグリッドアーキテクチャはどれですか？',
    options: [
      'IoT Core + Greengrass + Timestream + Forecast + SageMaker + Kinesis + Lambda + Step Functions + Direct Connect + PrivateLink + GuardDuty + Configを使用し、スマートグリッド特化アーキテクチャを構築する',
      'EC2 + RDS + ElastiCache + Lambda + API Gateway + CloudWatch + VPC + Security Groupsを使用し、従来型電力アーキテクチャを構築する',
      'EKS + Kubernetes + Prometheus + Grafana + InfluxDB + MQTT + Node-RED + Redisを使用し、オープンソース電力アーキテクチャを構築する',
      'SCADA + HMI + PLC + DCS + Historian + OPC UA + Modbus + DNP3を使用し、産業制御電力アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: 'エネルギー会社のスマートグリッドには、IoT Core + Greengrass + Timestream + Forecast + SageMaker + Kinesis + Lambda + Step Functions + Direct Connect + PrivateLink + GuardDuty + Configの組み合わせが最適です。\n\n理由：\n1. **IoT Core**: 電力設備の統合IoT管理\n2. **Greengrass**: エッジでのリアルタイム制御\n3. **Timestream**: 電力時系列データの効率的管理\n4. **Forecast**: 電力需給予測\n5. **SageMaker**: 停電予防と最適化モデル\n6. **Kinesis**: リアルタイム電力データ処理\n7. **Lambda + Step Functions**: 自動復旧ワークフロー\n8. **Direct Connect**: 電力設備との安定接続\n9. **GuardDuty**: サイバーセキュリティ対策\n\n他の選択肢の問題点：\n- **EC2 + RDS + ElastiCache + Lambda + API Gateway + CloudWatch + VPC + Security Groupsを使用し、従来型電力アーキテクチャを構築する**: 従来型は電力業界の特殊要件に不適切\n- **EKS + Kubernetes + Prometheus + Grafana + InfluxDB + MQTT + Node-RED + Redisを使用し、オープンソース電力アーキテクチャを構築する**: オープンソースは電力インフラの安定性要件に不適切\n- **SCADA + HMI + PLC + DCS + Historian + OPC UA + Modbus + DNP3を使用し、産業制御電力アーキテクチャを構築する**: 産業制御のみではクラウド統合に限界'
  },
  {
    id: 'adv-arch-009',
    category: 'アーキテクチャ',
    question: '大手航空会社が、次世代航空管制支援システムを構築しています。以下の要件があります：\n\n1. 航空管制システムとのリアルタイム連携\n2. フライト最適化と遅延最小化\n3. 気象データ・空域情報の統合\n4. 緊急時の自動対応\n5. 航空規制（ICAO、FAA）への準拠\n6. 99.999%の可用性要件\n7. 完全な監査証跡\n\nこの要件を満たすために、最も適切な航空管制支援アーキテクチャはどれですか？',
    options: [
      'Direct Connect + PrivateLink + Aurora Global Database + ElastiCache + Lambda + Step Functions + Kinesis + Timestream + CloudTrail + Config + KMS + CloudHSMを使用し、航空業界特化アーキテクチャを構築する',
      'EC2 + RDS Multi-AZ + ElastiCache + Lambda + API Gateway + CloudWatch + VPC + NACLsを使用し、従来型航空アーキテクチャを構築する',
      'EKS + Kubernetes + Istio + Prometheus + Grafana + PostgreSQL + Redis + Kafkaを使用し、コンテナベース航空アーキテクチャを構築する',
      'Serverless + Lambda + DynamoDB + API Gateway + Step Functions + EventBridge + SQS + SNSを使用し、サーバーレス航空アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: '航空会社の航空管制支援システムには、Direct Connect + PrivateLink + Aurora Global Database + ElastiCache + Lambda + Step Functions + Kinesis + Timestream + CloudTrail + Config + KMS + CloudHSMの組み合わせが最適です。\n\n理由：\n1. **Direct Connect**: 航空管制との専用高速接続\n2. **PrivateLink**: セキュアなプライベート通信\n3. **Aurora Global Database**: 99.999%可用性とグローバル同期\n4. **ElastiCache**: 高速データアクセス\n5. **Lambda + Step Functions**: 緊急時自動対応\n6. **Kinesis**: リアルタイムフライトデータ処理\n7. **Timestream**: 航空データの時系列管理\n8. **CloudTrail + Config**: 航空規制準拠監査\n9. **KMS + CloudHSM**: 最高レベルの暗号化\n\n他の選択肢の問題点：\n- **EC2 + RDS Multi-AZ + ElastiCache + Lambda + API Gateway + CloudWatch + VPC + NACLsを使用し、従来型航空アーキテクチャを構築する**: 従来型は航空業界の厳格な要件に不適切\n- **EKS + Kubernetes + Istio + Prometheus + Grafana + PostgreSQL + Redis + Kafkaを使用し、コンテナベース航空アーキテクチャを構築する**: コンテナベースは航空管制の安定性要件に不適切\n- **Serverless + Lambda + DynamoDB + API Gateway + Step Functions + EventBridge + SQS + SNSを使用し、サーバーレス航空アーキテクチャを構築する**: サーバーレスは航空管制の継続性要件に不適切'
  },
  {
    id: 'adv-arch-010',
    category: 'アーキテクチャ',
    question: '大手政府機関が、国家レベルのデジタル政府プラットフォームを構築しています。以下の要件があります：\n\n1. 複数省庁・機関の統合\n2. 国民サービスのデジタル化\n3. 最高機密レベルのセキュリティ\n4. 災害時の事業継続性\n5. 大規模トラフィック対応\n6. 多言語・多文化対応\n7. 透明性と説明責任\n\nこの要件を満たすために、最も適切なデジタル政府アーキテクチャはどれですか？',
    options: [
      'AWS GovCloud + Control Tower + Organizations + SSO + CloudHSM + GuardDuty + Macie + Config + CloudTrail + Security Hub + Transit Gateway + Direct Connectを使用し、政府特化アーキテクチャを構築する',
      'Multi-Account + IAM + KMS + VPC + CloudFront + Route 53 + RDS + Lambda + API Gatewayを使用し、標準政府アーキテクチャを構築する',
      'Kubernetes + Docker + Istio + Vault + Consul + Prometheus + Grafana + ELK Stackを使用し、オープンソース政府アーキテクチャを構築する',
      'Hybrid Cloud + VMware + OpenStack + Kubernetes + Red Hat + SUSE + Ubuntuを使用し、マルチベンダー政府アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: '政府機関のデジタル政府プラットフォームには、AWS GovCloud + Control Tower + Organizations + SSO + CloudHSM + GuardDuty + Macie + Config + CloudTrail + Security Hub + Transit Gateway + Direct Connectの組み合わせが最適です。\n\n理由：\n1. **AWS GovCloud**: 政府専用の分離されたクラウド環境\n2. **Control Tower**: 複数省庁の統合ガバナンス\n3. **Organizations**: アカウント管理と統制\n4. **SSO**: 統一認証基盤\n5. **CloudHSM**: 最高機密レベルの暗号化\n6. **GuardDuty + Macie**: 高度な脅威検知\n7. **Config + CloudTrail**: 完全な監査証跡\n8. **Security Hub**: 統合セキュリティ管理\n9. **Transit Gateway**: 省庁間ネットワーク統合\n\n他の選択肢の問題点：\n- **Multi-Account + IAM + KMS + VPC + CloudFront + Route 53 + RDS + Lambda + API Gatewayを使用し、標準政府アーキテクチャを構築する**: 標準環境は政府の最高機密要件に不十分\n- **Kubernetes + Docker + Istio + Vault + Consul + Prometheus + Grafana + ELK Stackを使用し、オープンソース政府アーキテクチャを構築する**: オープンソースは政府の規制要件対応が困難\n- **Hybrid Cloud + VMware + OpenStack + Kubernetes + Red Hat + SUSE + Ubuntuを使用し、マルチベンダー政府アーキテクチャを構築する**: マルチベンダーは統合管理とセキュリティに課題'
  },
  {
    id: 'adv-arch-multi-001',
    category: 'アーキテクチャ',
    question: 'グローバル展開するフィンテック企業が、マイクロサービスベースの決済プラットフォームを構築しています。以下の要件があります：\n\n**要件：**\n- 99.99%の可用性とゼロダウンタイムデプロイ\n- 地域別規制要件への対応\n- 1秒間に100万件の取引処理\n- イベント駆動アーキテクチャの実装\n- 障害の局所化と自動復旧\n- 開発チーム間の独立性確保\n\nこのマイクロサービスアーキテクチャに必要な設計パターンを**3つ**選択してください。',
    options: [
      'Circuit Breaker Pattern - 障害の連鎖防止と自動復旧',
      'Event Sourcing Pattern - イベント駆動による状態管理',
      'Saga Pattern - 分散トランザクション管理',
      'CQRS Pattern - 読み書き分離による性能最適化',
      'Bulkhead Pattern - リソース分離による障害局所化',
      'Strangler Fig Pattern - レガシーシステムの段階的移行'
    ],
    correct: [
      0,
      1,
      4
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Circuit Breaker Pattern**\n- サービス間の障害連鎖を防止\n- 自動的な障害検知と復旧\n- 99.99%可用性要件への対応\n- レスポンス時間の安定化\n- 障害時のグレースフルデグラデーション\n\n**2. Event Sourcing Pattern**\n- イベント駆動アーキテクチャの実装\n- 取引履歴の完全な監査証跡\n- 状態の再構築と時点復旧\n- 金融規制要件への対応\n- 高いデータ整合性保証\n\n**3. Bulkhead Pattern**\n- リソースの物理的・論理的分離\n- 障害の局所化による影響範囲限定\n- 地域別規制要件への対応\n- 独立したスケーリング\n- 開発チーム間の独立性確保\n\n**他の選択肢について：**\n- **Saga Pattern**: 分散トランザクションには有用だが、高可用性の主要パターンではない\n- **CQRS Pattern**: 性能最適化には有用だが、可用性の主要パターンではない\n- **Strangler Fig Pattern**: レガシー移行には有用だが、新規構築には不適切'
  },
  {
    id: 'adv-arch-multi-002',
    category: 'アーキテクチャ',
    question: '大手メディア企業が、動画ストリーミングプラットフォームのアーキテクチャを設計しています。以下の要件があります：\n\n**要件：**\n- 全世界1億人の同時視聴者対応\n- 4K/8K動画の低レイテンシ配信\n- 個人化されたコンテンツレコメンデーション\n- 動的な品質調整（アダプティブストリーミング）\n- コンテンツ保護とDRM\n- コスト効率的な運用\n\nこのストリーミングアーキテクチャに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'Amazon CloudFront - グローバルコンテンツ配信ネットワーク',
      'AWS Elemental MediaPackage - 動画パッケージング・配信',
      'Amazon Kinesis Video Streams - リアルタイム動画ストリーミング',
      'AWS Lambda@Edge - エッジコンピューティング',
      'Amazon ElastiCache - 高速キャッシング',
      'AWS Batch - バッチ処理サービス'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. Amazon CloudFront**\n- 全世界のエッジロケーションからの高速配信\n- 1億人規模の同時視聴者対応\n- 低レイテンシ動画配信の実現\n- 自動スケーリングと負荷分散\n- コスト効率的なグローバル配信\n\n**2. AWS Elemental MediaPackage**\n- アダプティブストリーミングの実装\n- 複数の動画品質の動的配信\n- DRMによるコンテンツ保護\n- HLS/DASH形式での配信最適化\n- 視聴デバイスに応じた最適化\n\n**他の選択肢について：**\n- **Kinesis Video Streams**: リアルタイムストリーミングには適しているが、大規模配信には不適切\n- **Lambda@Edge**: エッジ処理には有用だが、動画配信の主要機能ではない\n- **ElastiCache**: キャッシングには重要だが、動画配信の主要サービスではない\n- **Batch**: バッチ処理には適しているが、リアルタイム配信には不適切'
  },
  {
    id: 'adv-arch-multi-003',
    category: 'アーキテクチャ',
    question: 'スタートアップ企業が、急成長に対応できるサーバーレスアーキテクチャを設計しています。以下の要件があります：\n\n**要件：**\n- 予測困難なトラフィック変動への対応\n- 開発・運用コストの最小化\n- 高い開発速度とデプロイ頻度\n- 自動スケーリングと高可用性\n- 従量課金によるコスト最適化\n- マイクロサービス間の疎結合\n\nこのサーバーレスアーキテクチャに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Lambda - サーバーレス関数実行',
      'Amazon API Gateway - APIマネジメント',
      'Amazon EventBridge - イベント駆動統合',
      'AWS Step Functions - ワークフローオーケストレーション',
      'Amazon SQS - メッセージキューイング',
      'AWS Fargate - サーバーレスコンテナ'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Lambda**\n- 完全サーバーレスで運用負荷ゼロ\n- 自動スケーリングと高可用性\n- 実行時間のみの従量課金\n- 予測困難なトラフィックに最適\n- 高い開発速度の実現\n\n**2. Amazon API Gateway**\n- RESTful APIの統合管理\n- 自動スケーリングと負荷分散\n- 認証・認可の統合機能\n- APIバージョニングとデプロイ管理\n- マイクロサービス間の統一インターフェース\n\n**3. Amazon EventBridge**\n- イベント駆動アーキテクチャの実装\n- サービス間の疎結合実現\n- 自動的なイベントルーティング\n- 第三者サービスとの統合\n- スケーラブルなイベント処理\n\n**他の選択肢について：**\n- **Step Functions**: ワークフロー管理には有用だが、基本的なサーバーレス要件ではない\n- **SQS**: メッセージキューには重要だが、EventBridgeがより包括的\n- **Fargate**: サーバーレスコンテナには有用だが、Lambdaがより軽量'
  },
  {
    id: 'adv-cost-001',
    category: 'コスト最適化',
    question: '大手eコマース企業が、年間AWS費用1億円の最適化を検討しています。現在の構成と課題は以下の通りです：\n\n1. EC2費用が全体の60%（常時稼働のオンデマンドインスタンス）\n2. RDS費用が20%（本番・開発・テスト環境が24時間稼働）\n3. S3費用が15%（アクセス頻度の異なるデータが混在）\n4. データ転送費用が5%（リージョン間・インターネット転送）\n5. 開発・テスト環境が夜間・週末も稼働\n6. 季節性による負荷変動（ピーク時は通常の5倍）\n7. 複数部門での重複リソース\n\n50%のコスト削減を目標とした場合、最も効果的な最適化戦略はどれですか？',
    options: [
      'Reserved Instances + Savings Plans + Spot Instances + Auto Scaling + S3 Intelligent-Tiering + CloudFront + Organizations + Cost Anomaly Detection + Budgets + Trusted Advisorを組み合わせた包括的コスト最適化を実施する',
      'EC2インスタンスサイズの縮小 + RDS Multi-AZ無効化 + S3 Standard-IA移行 + CloudWatch監視削減を実施する',
      'すべてのワークロードをLambda + DynamoDB + S3のサーバーレス構成に移行する',
      'オンプレミス回帰により固定費化してコスト予測可能性を向上させる'
    ],
    correct: 0,
    explanation: '50%のコスト削減には、Reserved Instances + Savings Plans + Spot Instances + Auto Scaling + S3 Intelligent-Tiering + CloudFront + Organizations + Cost Anomaly Detection + Budgets + Trusted Advisorの包括的アプローチが最適です。\n\n具体的な削減効果：\n1. **Reserved Instances（1年・3年）**: EC2費用を最大72%削減\n2. **Savings Plans**: 柔軟な割引適用で追加10-20%削減\n3. **Spot Instances**: 開発・テスト環境で最大90%削減\n4. **Auto Scaling**: 季節性負荷に応じた動的スケーリング\n5. **S3 Intelligent-Tiering**: アクセスパターンに応じた自動階層化\n6. **CloudFront**: データ転送費用削減\n7. **Organizations**: 一括請求による割引適用\n8. **Cost Anomaly Detection**: 異常コスト早期発見\n\n期待削減効果：\n- EC2: 60% → 25%（58%削減）\n- RDS: 20% → 8%（60%削減）\n- S3: 15% → 8%（47%削減）\n- データ転送: 5% → 3%（40%削減）\n- 総削減率: 約52%\n\n他の選択肢の問題点：\n- **EC2インスタンスサイズの縮小 + RDS Multi-AZ無効化 + S3 Standard-IA移行 + CloudWatch監視削減を実施する**: 部分的最適化では50%削減は困難\n- **すべてのワークロードをLambda + DynamoDB + S3のサーバーレス構成に移行する**: 全面サーバーレス移行は現実的でなく、移行コストが高い\n- **オンプレミス回帰により固定費化してコスト予測可能性を向上させる**: オンプレミス回帰はスケーラビリティを失い、長期的にコスト増'
  },
  {
    id: 'adv-cost-002',
    category: 'コスト最適化',
    question: '大手製造業が、グローバル展開に伴うAWSコスト管理を強化しています。以下の状況があります：\n\n1. 世界5リージョンでの運用（米国、欧州、アジア太平洋）\n2. 各リージョンで独立したAWSアカウント運用\n3. 工場IoTデータの大量転送（月間100TB）\n4. 開発・テスト・本番環境の混在\n5. 部門別コスト配賦の必要性\n6. 予算超過の早期検知要求\n7. FinOps文化の浸透\n\nこの要件を満たす最適なコスト管理アーキテクチャはどれですか？',
    options: [
      'AWS Organizations + Control Tower + Cost and Usage Reports + Cost Explorer + Budgets + Cost Anomaly Detection + Resource Groups + Tagging Strategy + Billing Conductor + Cost Allocation Tagsを使用した統合コスト管理を構築する',
      '各リージョンで独立したCost Explorer + CloudWatch + SNSアラートを設定する',
      'サードパーティツール（CloudHealth、Cloudability）による統合コスト管理を実装する',
      'Excel + PowerBIによる手動コスト分析・レポーティングを実施する'
    ],
    correct: 0,
    explanation: '製造業のグローバルコスト管理には、AWS Organizations + Control Tower + Cost and Usage Reports + Cost Explorer + Budgets + Cost Anomaly Detection + Resource Groups + Tagging Strategy + Billing Conductor + Cost Allocation Tagsの統合アプローチが最適です。\n\n理由：\n1. **AWS Organizations**: 複数アカウントの一元管理\n2. **Control Tower**: ガバナンスとコンプライアンス\n3. **Cost and Usage Reports**: 詳細なコスト分析データ\n4. **Cost Explorer**: 視覚的なコスト分析\n5. **Budgets**: 予算設定と超過アラート\n6. **Cost Anomaly Detection**: 異常コストの自動検知\n7. **Resource Groups + Tagging**: 部門別・プロジェクト別コスト配賦\n8. **Billing Conductor**: カスタム請求とチャージバック\n9. **Cost Allocation Tags**: 詳細なコスト配分\n\n具体的な効果：\n- グローバル統合ビュー: 全リージョンのコスト可視化\n- 部門別配賦: 正確なコスト配分とチャージバック\n- 予算管理: リアルタイム予算監視と早期アラート\n- 異常検知: 機械学習による異常コスト検知\n- FinOps支援: データドリブンなコスト最適化\n\n他の選択肢の問題点：\n- **各リージョンで独立したCost Explorer + CloudWatch + SNSアラートを設定する**: 独立管理では統合ビューと効率的な最適化が困難\n- **サードパーティツール（CloudHealth、Cloudability）による統合コスト管理を実装する**: サードパーティツールは追加コストと統合複雑性\n- **Excel + PowerBIによる手動コスト分析・レポーティングを実施する**: 手動分析は非効率で、リアルタイム性に欠ける'
  },
  {
    id: 'adv-cost-003',
    category: 'コスト最適化',
    question: '大手メディア企業が、動画配信サービスのコスト最適化を実施しています。以下の課題があります：\n\n1. CloudFrontのデータ転送費用が月間5000万円\n2. S3ストレージ費用が月間2000万円（動画ファイル保存）\n3. EC2費用が月間3000万円（エンコーディング処理）\n4. 視聴パターンの地域差・時間差\n5. コンテンツの人気度による大きなアクセス差\n6. 4K/8K動画の増加によるストレージ・転送費用増\n7. 競合他社との価格競争圧力\n\n40%のコスト削減を実現する最適な戦略はどれですか？',
    options: [
      'S3 Intelligent-Tiering + Glacier + Deep Archive + CloudFront Price Class + Origin Shield + Spot Instances + MediaConvert + Elemental MediaStore + Reserved Capacity + Savings Plansを組み合わせたメディア特化コスト最適化を実施する',
      'CDNをCloudFlareに変更 + ストレージをGoogle Cloud Storageに移行する',
      'すべての動画をより高い圧縮率でエンコードしてファイルサイズを削減する',
      '視聴者数の少ないコンテンツを削除してストレージ費用を削減する'
    ],
    correct: 0,
    explanation: 'メディア企業の動画配信コスト最適化には、S3 Intelligent-Tiering + Glacier + Deep Archive + CloudFront Price Class + Origin Shield + Spot Instances + MediaConvert + Elemental MediaStore + Reserved Capacity + Savings Plansの組み合わせが最適です。\n\n具体的な削減効果：\n\n**ストレージ最適化（2000万円 → 1000万円、50%削減）:**\n- S3 Intelligent-Tiering: アクセス頻度による自動階層化\n- Glacier: 中期アーカイブで80%削減\n- Deep Archive: 長期アーカイブで95%削減\n\n**データ転送最適化（5000万円 → 3000万円、40%削減）:**\n- CloudFront Price Class: 地域別価格クラス選択\n- Origin Shield: オリジン負荷軽減とキャッシュ効率向上\n- 地域別配信最適化\n\n**コンピューティング最適化（3000万円 → 1500万円、50%削減）:**\n- Spot Instances: エンコーディング処理で最大90%削減\n- MediaConvert: 従量課金による効率化\n- Elemental MediaStore: 高性能・低コストストレージ\n- Reserved Capacity: 予測可能ワークロード割引\n\n**総削減効果:**\n- 月間総費用: 10,000万円 → 5,500万円（45%削減）\n\n他の選択肢の問題点：\n- **CDNをCloudFlareに変更 + ストレージをGoogle Cloud Storageに移行する**: マルチクラウドは管理複雑性とデータ転送費用増加\n- **すべての動画をより高い圧縮率でエンコードしてファイルサイズを削減する**: 品質劣化により顧客満足度低下のリスク\n- **視聴者数の少ないコンテンツを削除してストレージ費用を削減する**: コンテンツ削除は収益機会の損失'
  },
  {
    id: 'adv-cost-004',
    category: 'コスト最適化',
    question: '大手金融機関が、規制要件を満たしながらのコスト最適化を検討しています。以下の制約があります：\n\n1. 金融規制による高可用性要件（99.99%）\n2. データ保持義務（7年間の完全保存）\n3. 災害復旧要件（RTO: 4時間、RPO: 1時間）\n4. セキュリティ要件（暗号化、監査ログ）\n5. 本番環境の24時間365日稼働必須\n6. 開発・テスト環境の効率化余地\n7. コンプライアンス監査対応\n\n規制要件を満たしながら30%のコスト削減を実現する戦略はどれですか？',
    options: [
      'Reserved Instances（本番） + Spot Instances（開発・テスト） + S3 Intelligent-Tiering + Glacier + Aurora Serverless v2（開発） + Scheduled Scaling（テスト環境） + Cost Allocation Tags + Compliance監視を組み合わせた規制準拠コスト最適化を実施する',
      '本番環境のインスタンスサイズを縮小して基本的なコスト削減を実施する',
      'すべての環境をオンプレミスに戻して固定費化する',
      '開発・テスト環境をパブリッククラウドから削除してローカル環境に移行する'
    ],
    correct: 0,
    explanation: '金融機関の規制準拠コスト最適化には、Reserved Instances（本番） + Spot Instances（開発・テスト） + S3 Intelligent-Tiering + Glacier + Aurora Serverless v2（開発） + Scheduled Scaling（テスト環境） + Cost Allocation Tags + Compliance監視の組み合わせが最適です。\n\n規制要件を満たしながらの最適化：\n\n**本番環境（規制要件厳守）:**\n- Reserved Instances: 24時間365日稼働で最大72%割引\n- Multi-AZ構成維持: 高可用性要件対応\n- 暗号化・監査ログ継続: セキュリティ要件維持\n- 削減効果: 30%（可用性・セキュリティ維持）\n\n**開発・テスト環境（効率化重点）:**\n- Spot Instances: 最大90%削減（中断許容）\n- Aurora Serverless v2: 使用量ベース課金\n- Scheduled Scaling: 営業時間のみ稼働\n- 削減効果: 70%\n\n**データ保存最適化:**\n- S3 Intelligent-Tiering: アクセス頻度による自動階層化\n- Glacier: 7年保持データの長期アーカイブ\n- 削減効果: 60%（保持義務維持）\n\n**ガバナンス強化:**\n- Cost Allocation Tags: 部門別コスト配賦\n- Compliance監視: 規制要件の継続確認\n\n**総削減効果: 32%（規制要件完全準拠）**\n\n他の選択肢の問題点：\n- **本番環境のインスタンスサイズを縮小して基本的なコスト削減を実施する**: インスタンス縮小は性能・可用性リスク\n- **すべての環境をオンプレミスに戻して固定費化する**: オンプレミス回帰は災害復旧・スケーラビリティ課題\n- **開発・テスト環境をパブリッククラウドから削除してローカル環境に移行する**: 開発効率低下とセキュリティリスク'
  },
  {
    id: 'adv-cost-005',
    category: 'コスト最適化',
    question: '大手ヘルスケア企業が、医療データ分析基盤のコスト最適化を実施しています。以下の状況があります：\n\n1. 医療画像データ（月間50TB増加）\n2. 機械学習モデル訓練（GPU集約的）\n3. HIPAA準拠要件\n4. 研究データの長期保存（25年）\n5. 季節性のある研究プロジェクト\n6. 複数の研究機関との連携\n7. 予算制約の厳格化\n\n医療規制を満たしながら40%のコスト削減を実現する戦略はどれですか？',
    options: [
      'S3 Intelligent-Tiering + Glacier Deep Archive + Spot Instances（ML訓練） + SageMaker Savings Plans + Scheduled Scaling + HIPAA準拠設定維持 + Cost Allocation Tags（研究プロジェクト別）を組み合わせた医療特化コスト最適化を実施する',
      'すべてのデータをオンプレミスストレージに移行してクラウド費用を削減する',
      '医療画像の解像度を下げてストレージ費用を削減する',
      '研究プロジェクトの数を削減してリソース使用量を減らす'
    ],
    correct: 0,
    explanation: 'ヘルスケア企業の医療データ分析コスト最適化には、S3 Intelligent-Tiering + Glacier Deep Archive + Spot Instances（ML訓練） + SageMaker Savings Plans + Scheduled Scaling + HIPAA準拠設定維持 + Cost Allocation Tags（研究プロジェクト別）の組み合わせが最適です。\n\nHIPAA準拠を維持した最適化：\n\n**ストレージ最適化（医療画像データ）:**\n- S3 Intelligent-Tiering: アクセス頻度による自動階層化\n- Glacier Deep Archive: 25年保存データで95%削減\n- HIPAA準拠暗号化維持\n- 削減効果: 70%\n\n**機械学習最適化:**\n- Spot Instances: GPU訓練で最大90%削減\n- SageMaker Savings Plans: 予測可能ワークロード割引\n- Scheduled Scaling: 研究時間に応じた動的スケーリング\n- 削減効果: 60%\n\n**プロジェクト管理最適化:**\n- Cost Allocation Tags: 研究プロジェクト別コスト配賦\n- 季節性対応: 研究サイクルに応じたリソース調整\n- 連携機関との効率的リソース共有\n\n**コンプライアンス維持:**\n- HIPAA準拠設定継続\n- 監査証跡保持\n- セキュリティ要件維持\n\n**総削減効果: 42%（医療規制完全準拠）**\n\n他の選択肢の問題点：\n- **すべてのデータをオンプレミスストレージに移行してクラウド費用を削減する**: オンプレミス移行は初期投資大、スケーラビリティ課題\n- **医療画像の解像度を下げてストレージ費用を削減する**: 画像品質劣化は診断精度に影響、医療安全性リスク\n- **研究プロジェクトの数を削減してリソース使用量を減らす**: 研究機会損失は長期的な競争力低下'
  },
  {
    id: 'adv-cost-006',
    category: 'コスト最適化',
    question: '大手小売チェーンが、オムニチャネル戦略に伴うAWSコスト急増に対応しています。以下の状況があります：\n\n1. 1000店舗 + ECサイトの統合システム\n2. ピーク時（セール期間）は通常の10倍負荷\n3. 在庫管理システムの24時間稼働\n4. 顧客データ分析基盤の高コスト\n5. 店舗システムとの大量データ同期\n6. 季節性による大きな負荷変動\n7. 競合との価格競争による利益圧迫\n\n年間コスト3億円を40%削減する最適戦略はどれですか？',
    options: [
      'Auto Scaling + Spot Fleet + Reserved Instances + S3 Intelligent-Tiering + CloudFront + Savings Plans + Scheduled Actions + Cost Anomaly Detection + Resource Rightsizing + Data Lifecycle Managementを組み合わせた小売特化コスト最適化を実施する',
      'すべてのシステムを最小構成に縮小して基本コストを削減する',
      'ピーク時対応を諦めて固定リソースで運用する',
      'オンプレミスとクラウドのハイブリッド構成に変更する'
    ],
    correct: 0,
    explanation: '小売チェーンのオムニチャネルコスト最適化には、Auto Scaling + Spot Fleet + Reserved Instances + S3 Intelligent-Tiering + CloudFront + Savings Plans + Scheduled Actions + Cost Anomaly Detection + Resource Rightsizing + Data Lifecycle Managementの組み合わせが最適です。\n\n小売業特有の最適化：\n\n**負荷変動対応（コンピューティング）:**\n- Auto Scaling: 10倍負荷変動に自動対応\n- Spot Fleet: セール期間の一時的負荷で90%削減\n- Reserved Instances: 基本負荷部分で72%削減\n- 削減効果: 60%\n\n**データ処理最適化:**\n- S3 Intelligent-Tiering: 顧客データの自動階層化\n- Data Lifecycle Management: 古い取引データの自動アーカイブ\n- CloudFront: 店舗間データ同期の転送費削減\n- 削減効果: 50%\n\n**分析基盤最適化:**\n- Savings Plans: 予測可能な分析ワークロード割引\n- Scheduled Actions: 営業時間外の分析処理スケジューリング\n- Resource Rightsizing: 過剰リソースの適正化\n- 削減効果: 45%\n\n**運用最適化:**\n- Cost Anomaly Detection: セール期間の異常コスト早期発見\n- 部門別コスト配賦: 店舗・EC・本部の適切なコスト分担\n\n**年間削減効果:**\n- 3億円 → 1.7億円（43%削減）\n- セール期間の効率的スケーリング\n- 平常時の最適リソース配置\n\n他の選択肢の問題点：\n- **すべてのシステムを最小構成に縮小して基本コストを削減する**: 最小構成はピーク時の機会損失大\n- **ピーク時対応を諦めて固定リソースで運用する**: セール対応放棄は売上機会の重大な損失\n- **オンプレミスとクラウドのハイブリッド構成に変更する**: ハイブリッド構成は管理複雑性とコスト増'
  },
  {
    id: 'adv-cost-007',
    category: 'コスト最適化',
    question: '大手ゲーム会社が、グローバル展開するオンラインゲームのコスト最適化を実施しています。以下の課題があります：\n\n1. 世界5リージョンでの同時運用\n2. プレイヤー数の地域差・時間差\n3. ゲームアップデート時の大量配信\n4. プレイヤーデータの高速アクセス要求\n5. 新ゲームリリース時の負荷急増\n6. 開発・テスト環境の非効率利用\n7. 競合他社との開発スピード競争\n\n月間コスト5000万円を35%削減する戦略はどれですか？',
    options: [
      'GameLift Fleet Scaling + Spot Instances + CloudFront + S3 Transfer Acceleration + Reserved Instances + Auto Scaling + Scheduled Scaling + Multi-Region Optimization + Cost Allocation Tags + Savings Plansを組み合わせたゲーム特化コスト最適化を実施する',
      'すべてのリージョンを1つに統合してインフラを簡素化する',
      'プレイヤー数の少ない地域のサービスを停止する',
      'ゲーム品質を下げてリソース使用量を削減する'
    ],
    correct: 0,
    explanation: 'ゲーム会社のグローバル展開コスト最適化には、GameLift Fleet Scaling + Spot Instances + CloudFront + S3 Transfer Acceleration + Reserved Instances + Auto Scaling + Scheduled Scaling + Multi-Region Optimization + Cost Allocation Tags + Savings Plansの組み合わせが最適です。\n\nゲーム業界特化の最適化：\n\n**ゲームサーバー最適化:**\n- GameLift Fleet Scaling: プレイヤー数に応じた動的スケーリング\n- Spot Instances: 開発・テスト環境で90%削減\n- Auto Scaling: 地域別・時間別の負荷変動対応\n- 削減効果: 50%\n\n**コンテンツ配信最適化:**\n- CloudFront: ゲームアップデートの効率的配信\n- S3 Transfer Acceleration: グローバル高速アップロード\n- Multi-Region Optimization: 地域別配信最適化\n- 削減効果: 40%\n\n**データアクセス最適化:**\n- ElastiCache Reserved Nodes: プレイヤーデータ高速アクセス\n- DynamoDB On-Demand: 負荷変動に応じた課金\n- 削減効果: 30%\n\n**開発効率化:**\n- Scheduled Scaling: 開発時間外の自動停止\n- Reserved Instances: 本番環境の基本負荷\n- Savings Plans: 予測可能ワークロード割引\n- 削減効果: 60%\n\n**運用最適化:**\n- Cost Allocation Tags: ゲームタイトル別コスト管理\n- 地域別収益性分析とリソース配分最適化\n\n**月間削減効果:**\n- 5000万円 → 3200万円（36%削減）\n- グローバル展開維持\n- 開発スピード向上\n\n他の選択肢の問題点：\n- **すべてのリージョンを1つに統合してインフラを簡素化する**: リージョン統合はレイテンシ悪化でプレイヤー体験低下\n- **プレイヤー数の少ない地域のサービスを停止する**: 地域サービス停止は成長機会の損失\n- **ゲーム品質を下げてリソース使用量を削減する**: 品質低下は競合他社に対する競争力低下'
  },
  {
    id: 'adv-cost-008',
    category: 'コスト最適化',
    question: '大手物流会社が、配送最適化システムのコスト効率化を図っています。以下の状況があります：\n\n1. 配送ルート最適化の大量計算処理\n2. 車両位置情報のリアルタイム処理\n3. 倉庫管理システムとの連携\n4. 配送予測分析の機械学習処理\n5. 災害時の緊急配送対応\n6. 繁忙期（年末年始）の負荷急増\n7. 燃料費高騰による利益圧迫\n\n月間AWS費用2000万円を45%削減する最適戦略はどれですか？',
    options: [
      'Batch + Spot Instances + SageMaker Savings Plans + Kinesis Scaling + S3 Intelligent-Tiering + Lambda + Step Functions + Scheduled Scaling + Cost Optimization Hub + Resource Taggingを組み合わせた物流特化コスト最適化を実施する',
      'すべての処理をリアルタイムからバッチ処理に変更する',
      '機械学習処理を外部サービスに委託する',
      '配送エリアを縮小してシステム負荷を削減する'
    ],
    correct: 0,
    explanation: '物流会社の配送システムコスト最適化には、Batch + Spot Instances + SageMaker Savings Plans + Kinesis Scaling + S3 Intelligent-Tiering + Lambda + Step Functions + Scheduled Scaling + Cost Optimization Hub + Resource Taggingの組み合わせが最適です。\n\n物流業界特化の最適化：\n\n**大量計算処理最適化:**\n- AWS Batch + Spot Instances: ルート最適化で90%削減\n- Scheduled Scaling: 夜間バッチ処理の効率化\n- Step Functions: 複雑ワークフローの最適化\n- 削減効果: 70%\n\n**リアルタイム処理最適化:**\n- Kinesis Auto Scaling: 車両数に応じた動的スケーリング\n- Lambda: イベント駆動による効率的処理\n- 削減効果: 40%\n\n**機械学習最適化:**\n- SageMaker Savings Plans: 予測分析ワークロード割引\n- Spot Training: モデル訓練で90%削減\n- 削減効果: 60%\n\n**データ管理最適化:**\n- S3 Intelligent-Tiering: 配送履歴データの自動階層化\n- 古い配送データのGlacier移行\n- 削減効果: 50%\n\n**繁忙期対応:**\n- Auto Scaling: 年末年始の負荷急増対応\n- Reserved Capacity: 基本負荷部分の割引\n- 削減効果: 35%\n\n**運用最適化:**\n- Cost Optimization Hub: 継続的な最適化提案\n- Resource Tagging: 配送エリア別コスト管理\n\n**月間削減効果:**\n- 2000万円 → 1100万円（45%削減）\n- サービス品質維持\n- 災害対応能力保持\n\n他の選択肢の問題点：\n- **すべての処理をリアルタイムからバッチ処理に変更する**: リアルタイム性失失は配送効率低下\n- **機械学習処理を外部サービスに委託する**: 外部委託は機密性とコスト面でリスク\n- **配送エリアを縮小してシステム負荷を削減する**: 配送エリア縮小は売上機会の損失'
  },
  {
    id: 'adv-cost-009',
    category: 'コスト最適化',
    question: '大手エネルギー会社が、スマートグリッドシステムのコスト最適化を実施しています。以下の状況があります：\n\n1. 数百万台のスマートメーターデータ処理\n2. 電力需給予測の機械学習処理\n3. 停電監視システムの24時間稼働\n4. 再生可能エネルギー出力予測\n5. 電力取引システムとの連携\n6. 規制当局への報告システム\n7. カーボンニュートラル投資による予算圧迫\n\n年間コスト8億円を30%削減する戦略はどれですか？',
    options: [
      'IoT Analytics + Timestream + Forecast + SageMaker + Kinesis + Lambda + S3 Intelligent-Tiering + Reserved Instances + Savings Plans + Spot Instances + Scheduled Scaling + Cost Anomaly Detectionを組み合わせたエネルギー特化コスト最適化を実施する',
      'スマートメーターのデータ収集頻度を削減してデータ処理量を減らす',
      '機械学習処理を簡素化して計算リソースを削減する',
      '一部の監視システムを手動運用に変更する'
    ],
    correct: 0,
    explanation: 'エネルギー会社のスマートグリッドコスト最適化には、IoT Analytics + Timestream + Forecast + SageMaker + Kinesis + Lambda + S3 Intelligent-Tiering + Reserved Instances + Savings Plans + Spot Instances + Scheduled Scaling + Cost Anomaly Detectionの組み合わせが最適です。\n\nエネルギー業界特化の最適化：\n\n**IoTデータ処理最適化:**\n- IoT Analytics: スマートメーターデータの効率的前処理\n- Timestream: 時系列データの最適化ストレージ\n- Kinesis Auto Scaling: データ量に応じた動的スケーリング\n- 削減効果: 40%\n\n**機械学習最適化:**\n- SageMaker Savings Plans: 需給予測モデル訓練割引\n- Spot Instances: 再生可能エネルギー予測で90%削減\n- Forecast: 専用サービスによる効率化\n- 削減効果: 60%\n\n**監視システム最適化:**\n- Reserved Instances: 24時間稼働システムで72%割引\n- Lambda: イベント駆動による効率的アラート処理\n- 削減効果: 35%\n\n**データ管理最適化:**\n- S3 Intelligent-Tiering: 電力データの自動階層化\n- 規制報告データのGlacier長期保存\n- 削減効果: 50%\n\n**取引システム最適化:**\n- Scheduled Scaling: 取引時間に応じたスケーリング\n- ElastiCache Reserved Nodes: 高速取引データアクセス\n- 削減効果: 30%\n\n**運用最適化:**\n- Cost Anomaly Detection: 異常コスト早期発見\n- 電力需要パターンに応じたリソース最適化\n\n**年間削減効果:**\n- 8億円 → 5.5億円（31%削減）\n- 電力安定供給維持\n- 規制要件完全準拠\n\n他の選択肢の問題点：\n- **スマートメーターのデータ収集頻度を削減してデータ処理量を減らす**: データ収集頻度削減は電力品質監視に影響\n- **機械学習処理を簡素化して計算リソースを削減する**: 機械学習簡素化は予測精度低下で電力安定供給リスク\n- **一部の監視システムを手動運用に変更する**: 手動運用は人的コスト増加と信頼性低下'
  },
  {
    id: 'adv-cost-010',
    category: 'コスト最適化',
    question: '大手航空会社が、デジタル変革に伴うAWSコスト急増への対応を検討しています。以下の状況があります：\n\n1. フライト予約システムの高可用性要件\n2. 航空管制システムとの連携\n3. 乗客データ分析とパーソナライゼーション\n4. 機体メンテナンス予測システム\n5. 燃料効率最適化システム\n6. 災害時の緊急対応システム\n7. 航空業界の厳格な規制要件\n\n年間コスト12億円を25%削減しつつ、安全性と規制準拠を維持する戦略はどれですか？',
    options: [
      'Reserved Instances + Savings Plans + Multi-AZ維持 + Aurora Global Database + S3 Intelligent-Tiering + SageMaker Savings Plans + Spot Instances（非本番） + Scheduled Scaling + Cost Allocation Tags + Compliance監視を組み合わせた航空業界特化コスト最適化を実施する',
      '予約システムの冗長性を削減してコストを下げる',
      '機体メンテナンス予測の精度を下げて計算コストを削減する',
      '一部の路線データ分析を停止してリソースを削減する'
    ],
    correct: 0,
    explanation: '航空会社のコスト最適化には、Reserved Instances + Savings Plans + Multi-AZ維持 + Aurora Global Database + S3 Intelligent-Tiering + SageMaker Savings Plans + Spot Instances（非本番） + Scheduled Scaling + Cost Allocation Tags + Compliance監視の組み合わせが最適です。\n\n航空業界の安全性・規制準拠を維持した最適化：\n\n**予約システム最適化（安全性維持）:**\n- Reserved Instances: 24時間稼働で72%割引\n- Multi-AZ維持: 高可用性要件完全準拠\n- Aurora Global Database: 災害復旧とコスト効率の両立\n- 削減効果: 30%（安全性100%維持）\n\n**データ分析最適化:**\n- SageMaker Savings Plans: 乗客分析ワークロード割引\n- S3 Intelligent-Tiering: 乗客データの自動階層化\n- 削減効果: 40%\n\n**メンテナンス予測最適化:**\n- Spot Instances: 非本番環境での機械学習訓練\n- Scheduled Scaling: メンテナンス時間に応じた処理\n- 削減効果: 50%（予測精度維持）\n\n**燃料効率システム最適化:**\n- Lambda: イベント駆動による効率的処理\n- Kinesis Auto Scaling: フライトデータ量に応じた調整\n- 削減効果: 35%\n\n**規制準拠維持:**\n- Cost Allocation Tags: 路線別・部門別コスト管理\n- Compliance監視: 航空規制要件の継続確認\n- 監査証跡完全保持\n\n**緊急対応システム:**\n- Reserved Capacity: 災害時対応リソース確保\n- 高可用性構成維持\n\n**年間削減効果:**\n- 12億円 → 9億円（25%削減）\n- 航空安全性100%維持\n- 規制要件完全準拠\n- 災害対応能力保持\n\n他の選択肢の問題点：\n- **予約システムの冗長性を削減してコストを下げる**: 冗長性削減は航空安全に直結する重大リスク\n- **メンテナンス予測の精度を下げて計算コストを削減する**: メンテナンス予測精度低下は機体安全性に影響\n- **一部の路線データ分析を停止してリソースを削減する**: 路線分析停止は収益最適化機会の損失'
  },
  {
    id: 'adv-cost-multi-001',
    category: 'コスト最適化',
    question: '大手製造業が、グローバル展開するERPシステムのコスト最適化を検討しています。以下の現状があります：\n\n**現状：**\n- 月額AWS利用料：500万円\n- 24時間稼働のEC2インスタンス：200台\n- 開発・テスト環境：平日のみ利用\n- データ転送量：月間100TB\n- ストレージ使用量：1PB（アクセス頻度は低い）\n- 予測可能なワークロード\n\nコストを30%以上削減するために実装すべき最適化手法を**3つ**選択してください。',
    options: [
      'Reserved Instances - 1年または3年の予約による大幅割引',
      'Spot Instances - 開発・テスト環境での最大90%割引',
      'S3 Intelligent-Tiering - アクセスパターンに応じた自動最適化',
      'CloudFront - データ転送コスト削減',
      'Savings Plans - 柔軟な使用量コミットによる割引',
      'AWS Compute Optimizer - リソース最適化推奨'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Reserved Instances**\n- 24時間稼働の200台のEC2に最適\n- 1年予約で約30-40%、3年予約で約50-60%の割引\n- 予測可能なワークロードに最適\n- 月額150-250万円の削減効果\n\n**2. Spot Instances**\n- 開発・テスト環境で最大90%の割引\n- 平日のみ利用で中断許容可能\n- 月額数十万円の削減効果\n- 本番環境への影響なし\n\n**3. S3 Intelligent-Tiering**\n- 1PBの低頻度アクセスデータに最適\n- 自動的な最適ストレージクラス選択\n- 30-70%のストレージコスト削減\n- 月額数十万円の削減効果\n\n**他の選択肢について：**\n- **CloudFront**: データ転送削減には有用だが、ERPシステムには不適切\n- **Savings Plans**: Reserved Instancesと重複し、より複雑\n- **Compute Optimizer**: 推奨機能は有用だが、直接的なコスト削減効果は限定的'
  },
  {
    id: 'adv-cost-multi-002',
    category: 'コスト最適化',
    question: 'スタートアップ企業が、急成長に伴うAWSコスト急増に対応する必要があります。以下の状況があります：\n\n**状況：**\n- 月額AWS利用料：50万円→200万円（3ヶ月で4倍増）\n- トラフィック変動が激しい（日中と夜間で10倍差）\n- 開発チームが小規模（5名）で運用負荷を抑えたい\n- 機能開発を優先し、インフラ管理は最小化\n- 予算制約が厳しい\n\nこの状況でコスト効率を改善するために採用すべき戦略を**2つ**選択してください。',
    options: [
      'サーバーレスアーキテクチャ - Lambda/API Gateway/DynamoDBへの移行',
      'Auto Scaling - トラフィック変動に応じた自動スケーリング',
      'Reserved Instances - 長期契約による割引',
      'Multi-AZ配置 - 高可用性による安定運用',
      'CloudWatch詳細監視 - リソース使用量の最適化',
      'Dedicated Hosts - 専用ハードウェアによる性能向上'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. サーバーレスアーキテクチャ**\n- 実行時間のみの従量課金でコスト効率最大化\n- 運用負荷ゼロで小規模チームに最適\n- 自動スケーリングによるトラフィック変動対応\n- アイドル時間のコストが発生しない\n- 急成長スタートアップに最適な選択\n\n**2. Auto Scaling**\n- トラフィック変動（10倍差）に自動対応\n- 夜間の不要なリソースを自動削減\n- 運用負荷を最小化\n- コスト効率と性能のバランス最適化\n- 予算制約下での効果的な解決策\n\n**他の選択肢について：**\n- **Reserved Instances**: 急成長期には予測困難で不適切\n- **Multi-AZ**: 高可用性は重要だがコスト増加要因\n- **CloudWatch詳細監視**: 監視強化はコスト増加要因\n- **Dedicated Hosts**: 高コストでスタートアップには不適切'
  },
  {
    id: 'adv-cost-multi-003',
    category: 'コスト最適化',
    question: '大手メディア企業が、動画配信プラットフォームのコスト最適化を実施しています。以下の課題があります：\n\n**課題：**\n- 動画ストレージコスト：月額300万円\n- データ転送コスト：月額200万円\n- 動画の90%は配信開始から1ヶ月後にアクセス激減\n- 古い動画も法的要件で10年保存必要\n- 地域別視聴パターンの違い\n- ピーク時の帯域幅コスト\n\nこのメディア配信システムのコスト最適化に効果的な手法を**3つ**選択してください。',
    options: [
      'S3 Lifecycle Policy - 自動的なストレージクラス移行',
      'CloudFront - エッジキャッシングによる転送コスト削減',
      'S3 Glacier Deep Archive - 長期アーカイブの超低コスト保存',
      'Elastic Transcoder - 動画圧縮による容量削減',
      'Direct Connect - 専用線による転送コスト削減',
      'Reserved Capacity - 予約による割引'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. S3 Lifecycle Policy**\n- 1ヶ月後の自動的なストレージクラス移行\n- Standard → IA → Glacier → Deep Archiveの段階的移行\n- 90%のコンテンツで70-90%のストレージコスト削減\n- 月額200-250万円の削減効果\n\n**2. CloudFront**\n- エッジロケーションでのキャッシング\n- オリジンへのデータ転送量削減\n- 地域別視聴パターンに最適化\n- 月額100-150万円の転送コスト削減\n\n**3. S3 Glacier Deep Archive**\n- 10年保存要件を最低コストで実現\n- 標準ストレージの約1/23のコスト\n- 法的要件を満たしながら大幅コスト削減\n- 長期保存で月額数十万円の削減\n\n**他の選択肢について：**\n- **Elastic Transcoder**: 動画圧縮は有用だが、主要なコスト削減手法ではない\n- **Direct Connect**: 企業向けで一般視聴者には不適切\n- **Reserved Capacity**: 予測困難な動画配信には不適切'
  },
  {
    id: 'adv-dr-001',
    category: '災害復旧',
    question: '大手金融機関が、次世代災害復旧システムを構築しています。以下の厳格な要件があります：\n\n1. RTO（目標復旧時間）：5分以内\n2. RPO（目標復旧時点）：0秒（データ損失ゼロ）\n3. 金融取引の継続性確保\n4. 複数リージョン間での同期レプリケーション\n5. 金融規制（SOX、PCI DSS）への準拠\n6. 自動フェイルオーバーと手動制御の両立\n7. 災害復旧テストの定期実行\n\nこの要件を満たす最適な災害復旧アーキテクチャはどれですか？',
    options: [
      'Aurora Global Database + DynamoDB Global Tables + Route 53 Health Checks + Application Recovery Controller + AWS Backup + CloudFormation StackSets + Config Rules + CloudTrailを使用し、ゼロRPO金融災害復旧システムを構築する',
      'RDS Multi-AZ + S3 Cross-Region Replication + ELB Health Checks + Lambda + CloudWatch Alarmsを使用し、従来型災害復旧システムを構築する',
      'Aurora Read Replicas + DynamoDB Point-in-Time Recovery + Route 53 Failover + EC2 Auto Scalingを使用し、基本的災害復旧システムを構築する',
      'オンプレミス + AWS Site-to-Site VPN + Direct Connect + AWS Storage Gatewayを使用し、ハイブリッド災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: '金融機関のゼロRPO災害復旧には、Aurora Global Database + DynamoDB Global Tables + Route 53 Health Checks + Application Recovery Controller + AWS Backup + CloudFormation StackSets + Config Rules + CloudTrailの組み合わせが最適です。\n\n理由：\n1. **Aurora Global Database**: 1秒未満のRPOでグローバル同期レプリケーション\n2. **DynamoDB Global Tables**: マルチマスター構成でゼロRPO実現\n3. **Route 53 Health Checks**: 5分以内の自動フェイルオーバー\n4. **Application Recovery Controller**: 金融取引の継続性制御\n5. **AWS Backup**: 規制準拠のバックアップ管理\n6. **CloudFormation StackSets**: 複数リージョンでの一貫したインフラ\n7. **Config Rules**: 金融規制準拠の継続監視\n8. **CloudTrail**: 完全な監査証跡\n\n災害復旧性能：\n- RTO: 3-5分（自動フェイルオーバー）\n- RPO: 0秒（同期レプリケーション）\n- 可用性: 99.99%以上\n\n他の選択肢の問題点：\n- **RDS Multi-AZ + S3 Cross-Region Replication + ELB Health Checks + Lambda + CloudWatch Alarmsを使用し、従来型災害復旧システムを構築する**: Multi-AZは単一リージョン内のみ、RPO要件を満たせない\n- **Aurora Read Replicas + DynamoDB Point-in-Time Recovery + Route 53 Failover + EC2 Auto Scalingを使用し、基本的災害復旧システムを構築する**: Read Replicasは非同期でRPO 0秒を実現できない\n- **オンプレミス + AWS Site-to-Site VPN + Direct Connect + AWS Storage Gatewayを使用し、ハイブリッド災害復旧システムを構築する**: ハイブリッドは複雑性が高く、RTO要件達成困難'
  },
  {
    id: 'adv-dr-002',
    category: '災害復旧',
    question: '大手製造業が、グローバル工場の災害復旧戦略を策定しています。以下の要件があります：\n\n1. 世界5拠点の工場システム統合\n2. 生産ライン停止時間の最小化（RTO: 30分）\n3. 生産データの保護（RPO: 15分）\n4. IoTデバイス（数万台）の災害時復旧\n5. サプライチェーンシステムとの連携維持\n6. 地域災害（地震、台風等）への対応\n7. 段階的復旧とビジネス継続性\n\nこの要件を満たす最適な製造業災害復旧アーキテクチャはどれですか？',
    options: [
      'AWS Outposts + Local Zones + Aurora Global Database + S3 Cross-Region Replication + IoT Device Management + Systems Manager + Backup + Site Recovery + Direct Connect + Transit Gatewayを使用し、製造業特化災害復旧システムを構築する',
      'EC2 Auto Scaling + RDS Multi-AZ + S3 + CloudWatch + Lambda + SNSを使用し、クラウドファースト災害復旧システムを構築する',
      'VMware Cloud on AWS + vSphere Replication + NSX + vSAN + Site Recovery Managerを使用し、VMware統合災害復旧システムを構築する',
      'オンプレミス冗長化 + テープバックアップ + 手動復旧プロセスを使用し、従来型災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: '製造業のグローバル災害復旧には、AWS Outposts + Local Zones + Aurora Global Database + S3 Cross-Region Replication + IoT Device Management + Systems Manager + Backup + Site Recovery + Direct Connect + Transit Gatewayの組み合わせが最適です。\n\n理由：\n1. **AWS Outposts**: 工場内でのローカル処理継続\n2. **Local Zones**: 低レイテンシでの生産システム復旧\n3. **Aurora Global Database**: 生産データのグローバル同期\n4. **S3 Cross-Region Replication**: 設計図・仕様書の地域間複製\n5. **IoT Device Management**: 数万台デバイスの一括復旧管理\n6. **Systems Manager**: 工場システムの統合管理\n7. **AWS Backup**: 生産データの定期バックアップ\n8. **Site Recovery**: 段階的復旧オーケストレーション\n9. **Direct Connect + Transit Gateway**: 安定した拠点間接続\n\n災害復旧性能：\n- RTO: 20-30分（段階的復旧）\n- RPO: 10-15分（定期同期）\n- IoT復旧: 自動デバイス再接続\n\n他の選択肢の問題点：\n- **EC2 Auto Scaling + RDS Multi-AZ + S3 + CloudWatch + Lambda + SNSを使用し、クラウドファースト災害復旧システムを構築する**: クラウドファーストは工場の既存システム統合に課題\n- **VMware Cloud on AWS + vSphere Replication + NSX + vSAN + Site Recovery Managerを使用し、VMware統合災害復旧システムを構築する**: VMware統合は高コストで、IoT統合に限界\n- **オンプレミス冗長化 + VPN + Direct Connect + Storage Gatewayを使用し、従来型災害復旧システムを構築する**: 従来型は復旧時間が長く、現代の製造要件に不適切'
  },
  {
    id: 'adv-dr-003',
    category: '災害復旧',
    question: '大手病院グループが、医療システムの災害復旧計画を強化しています。以下の要件があります：\n\n1. 患者の生命に関わるシステムの継続性\n2. 電子カルテシステムの即座復旧（RTO: 10分）\n3. 患者データの完全保護（RPO: 5分）\n4. 医療機器との接続維持\n5. HIPAA準拠の災害復旧\n6. 複数病院間でのデータ共有継続\n7. 緊急時の医療スタッフアクセス確保\n\nこの要件を満たす最適な医療災害復旧アーキテクチャはどれですか？',
    options: [
      'Aurora Global Database + HealthLake + S3 Cross-Region Replication + Route 53 Health Checks + PrivateLink + VPC Endpoints + Macie + CloudTrail + KMS + AWS Backupを使用し、HIPAA準拠医療災害復旧システムを構築する',
      'RDS Multi-AZ + S3 + CloudFront + Lambda + API Gateway + Cognitoを使用し、標準的医療災害復旧システムを構築する',
      'DocumentDB + Atlas Search + S3 + Route 53 + CloudWatch + SNSを使用し、NoSQL医療災害復旧システムを構築する',
      'オンプレミス冗長化 + VPN + Direct Connect + Storage Gatewayを使用し、ハイブリッド医療災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: '病院グループの医療災害復旧には、Aurora Global Database + HealthLake + S3 Cross-Region Replication + Route 53 Health Checks + PrivateLink + VPC Endpoints + Macie + CloudTrail + KMS + AWS Backupの組み合わせが最適です。\n\n理由：\n1. **Aurora Global Database**: 電子カルテの高速復旧とデータ保護\n2. **HealthLake**: FHIR準拠の医療データ統合管理\n3. **S3 Cross-Region Replication**: 医療画像の地域間複製\n4. **Route 53 Health Checks**: 10分以内の自動フェイルオーバー\n5. **PrivateLink + VPC Endpoints**: 医療機器との安全な接続維持\n6. **Macie**: PHI（個人健康情報）の自動保護\n7. **CloudTrail**: HIPAA準拠の完全監査証跡\n8. **KMS**: 医療データの暗号化管理\n9. **AWS Backup**: 規制準拠のバックアップ\n\n医療災害復旧性能：\n- RTO: 8-10分（生命維持システム優先）\n- RPO: 3-5分（患者データ保護）\n- HIPAA準拠: 100%維持\n\n他の選択肢の問題点：\n- **RDS Multi-AZ + S3 + CloudFront + Lambda + API Gateway + Cognitoを使用し、標準的医療災害復旧システムを構築する**: Multi-AZは単一リージョン、医療継続性に限界\n- **DocumentDB + Atlas Search + S3 + Route 53 + CloudWatch + SNSを使用し、NoSQL医療災害復旧システムを構築する**: NoSQLは医療データの複雑な関係性管理に不適切\n- **オンプレミス冗長化 + VPN + Direct Connect + Storage Gatewayを使用し、ハイブリッド医療災害復旧システムを構築する**: ハイブリッドは復旧時間が長く、緊急医療に不適切'
  },
  {
    id: 'adv-dr-004',
    category: '災害復旧',
    question: '大手メディア企業が、ライブ配信サービスの災害復旧システムを構築しています。以下の要件があります：\n\n1. ライブ配信の無停止継続（RTO: 30秒）\n2. 配信コンテンツの損失防止（RPO: 0秒）\n3. 世界中の視聴者への影響最小化\n4. 配信品質の維持\n5. CDNの自動切り替え\n6. 配信データの即座バックアップ\n7. 視聴者数1億人規模での災害対応\n\nこの要件を満たす最適なライブ配信災害復旧アーキテクチャはどれですか？',
    options: [
      'MediaLive + MediaPackage + CloudFront + Global Accelerator + Route 53 + S3 Cross-Region Replication + Kinesis + Lambda + EventBridge + Systems Managerを使用し、ライブ配信特化災害復旧システムを構築する',
      'EC2 + FFmpeg + Nginx + S3 + CloudFront + Route 53 + Auto Scalingを使用し、カスタムライブ配信災害復旧システムを構築する',
      'ECS + Docker + Kubernetes + Istio + Prometheus + Grafanaを使用し、コンテナベースライブ配信災害復旧システムを構築する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレスライブ配信災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: 'メディア企業のライブ配信災害復旧には、MediaLive + MediaPackage + CloudFront + Global Accelerator + Route 53 + S3 Cross-Region Replication + Kinesis + Lambda + EventBridge + Systems Managerの組み合わせが最適です。\n\n理由：\n1. **MediaLive**: 冗長エンコーディングによる無停止配信\n2. **MediaPackage**: 配信パッケージングの自動フェイルオーバー\n3. **CloudFront**: グローバルCDNでの自動切り替え\n4. **Global Accelerator**: Anycastによる最適経路維持\n5. **Route 53**: 30秒以内のDNSフェイルオーバー\n6. **S3 Cross-Region Replication**: 配信コンテンツの即座複製\n7. **Kinesis**: リアルタイム配信データストリーミング\n8. **Lambda + EventBridge**: 自動復旧オーケストレーション\n9. **Systems Manager**: 配信インフラの統合管理\n\nライブ配信災害復旧性能：\n- RTO: 20-30秒（視聴者への影響最小）\n- RPO: 0秒（ライブ配信継続）\n- スケール: 1億人同時視聴対応\n\n他の選択肢の問題点：\n- **EC2 + FFmpeg + Nginx + S3 + CloudFront + Route 53 + Auto Scalingを使用し、カスタムライブ配信災害復旧システムを構築する**: カスタム実装は1億人規模の災害復旧に限界\n- **ECS + Docker + Kubernetes + Istio + Prometheus + Grafanaを使用し、コンテナベースライブ配信災害復旧システムを構築する**: コンテナベースはライブ配信の特殊要件に不適切\n- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレスライブ配信災害復旧システムを構築する**: サーバーレスは大規模ライブ配信の継続性に限界'
  },
  {
    id: 'adv-dr-005',
    category: '災害復旧',
    question: '大手ゲーム会社が、オンラインゲームの災害復旧戦略を策定しています。以下の要件があります：\n\n1. プレイヤーセッションの継続（RTO: 1分）\n2. ゲームデータの完全保護（RPO: 30秒）\n3. 世界中のプレイヤーへの影響最小化\n4. ゲームサーバーの自動復旧\n5. プレイヤーデータの整合性保証\n6. リアルタイムマッチメイキング継続\n7. 同時接続100万人での災害対応\n\nこの要件を満たす最適なゲーム災害復旧アーキテクチャはどれですか？',
    options: [
      'GameLift + DynamoDB Global Tables + ElastiCache Global Datastore + Route 53 + Global Accelerator + Kinesis + Lambda + Step Functions + CloudWatch + Systems Managerを使用し、ゲーム特化災害復旧システムを構築する',
      'EC2 Auto Scaling + RDS Multi-AZ + ElastiCache + Route 53 + CloudWatchを使用し、従来型ゲーム災害復旧システムを構築する',
      'EKS + Kubernetes + Istio + Redis + PostgreSQL + Prometheusを使用し、コンテナベースゲーム災害復旧システムを構築する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFront + SQSを使用し、サーバーレスゲーム災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: 'ゲーム会社のオンライン災害復旧には、GameLift + DynamoDB Global Tables + ElastiCache Global Datastore + Route 53 + Global Accelerator + Kinesis + Lambda + Step Functions + CloudWatch + Systems Managerの組み合わせが最適です。\n\n理由：\n1. **GameLift**: ゲームサーバーの自動フェイルオーバーと復旧\n2. **DynamoDB Global Tables**: プレイヤーデータのグローバル同期\n3. **ElastiCache Global Datastore**: セッションデータの高速復旧\n4. **Route 53**: 1分以内のDNSフェイルオーバー\n5. **Global Accelerator**: プレイヤー接続の最適経路維持\n6. **Kinesis**: リアルタイムゲームイベント処理\n7. **Lambda + Step Functions**: 自動復旧ワークフロー\n8. **CloudWatch**: ゲームサーバー監視と自動対応\n9. **Systems Manager**: ゲームインフラの統合管理\n\nゲーム災害復旧性能：\n- RTO: 45秒-1分（プレイヤーセッション継続）\n- RPO: 15-30秒（ゲームデータ保護）\n- スケール: 100万人同時接続対応\n\n他の選択肢の問題点：\n- **EC2 Auto Scaling + RDS Multi-AZ + ElastiCache + Route 53 + CloudWatchを使用し、従来型ゲーム災害復旧システムを構築する**: Multi-AZは単一リージョン、グローバルゲームに不適切\n- **ECS + Docker + Kubernetes + Istio + Prometheus + Grafanaを使用し、コンテナベースゲーム災害復旧システムを構築する**: コンテナベースはゲーム特有の低レイテンシ要件に課題\n- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレスゲーム災害復旧システムを構築する**: サーバーレスは大規模リアルタイムゲームの継続性に限界'
  },
  {
    id: 'adv-dr-006',
    category: '災害復旧',
    question: '大手物流会社が、配送システムの災害復旧計画を策定しています。以下の要件があります：\n\n1. 配送追跡システムの継続（RTO: 15分）\n2. 配送データの保護（RPO: 10分）\n3. 車両位置情報の継続取得\n4. 配送ルート最適化の維持\n5. 顧客通知システムの継続\n6. 倉庫管理システムとの連携維持\n7. 災害時の緊急配送対応\n\nこの要件を満たす最適な物流災害復旧アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + DynamoDB Global Tables + Lambda + Step Functions + Route 53 + S3 Cross-Region Replication + SNS + SQS + Systems Manager + CloudWatchを使用し、物流特化災害復旧システムを構築する',
      'EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型物流災害復旧システムを構築する',
      'ECS + Application Load Balancer + Aurora + ElastiCache + S3 + Lambda + API Gatewayを使用し、コンテナベース物流災害復旧システムを構築する',
      'Serverless + Lambda + DynamoDB + API Gateway + S3 + CloudFront + EventBridgeを使用し、サーバーレス物流災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: '物流会社の配送システム災害復旧には、IoT Core + Kinesis + DynamoDB Global Tables + Lambda + Step Functions + Route 53 + S3 Cross-Region Replication + SNS + SQS + Systems Manager + CloudWatchの組み合わせが最適です。\n\n理由：\n1. **IoT Core**: 車両IoTデバイスとの継続的接続\n2. **Kinesis**: リアルタイム位置情報ストリーミング\n3. **DynamoDB Global Tables**: 配送データのグローバル同期\n4. **Lambda + Step Functions**: 配送ルート最適化の自動復旧\n5. **Route 53**: 15分以内のDNSフェイルオーバー\n6. **S3 Cross-Region Replication**: 配送履歴の地域間複製\n7. **SNS + SQS**: 顧客通知システムの継続\n8. **Systems Manager**: 倉庫システム統合管理\n9. **CloudWatch**: 配送システム監視と自動対応\n\n物流災害復旧性能：\n- RTO: 10-15分（配送継続性優先）\n- RPO: 5-10分（配送データ保護）\n- IoT継続性: 車両追跡維持\n\n他の選択肢の問題点：\n- **EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型物流災害復旧システムを構築する**: Multi-AZは単一リージョン、物流の地理的分散に不適切\n- **ECS + Application Load Balancer + Aurora + ElastiCache + S3 + Lambda + API Gatewayを使用し、コンテナベース物流災害復旧システムを構築する**: コンテナベースは物流IoTとの統合に課題\n- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + EventBridgeを使用し、サーバーレス物流災害復旧システムを構築する**: サーバーレスのみでは大規模物流システムの継続性に限界'
  },
  {
    id: 'adv-dr-007',
    category: '災害復旧',
    question: '大手エネルギー会社が、スマートグリッドの災害復旧システムを構築しています。以下の要件があります：\n\n1. 電力供給制御の継続（RTO: 5分）\n2. 電力データの完全保護（RPO: 1分）\n3. 発電所・変電所との通信維持\n4. スマートメーターデータ収集継続\n5. 電力需給バランス制御の維持\n6. 停電復旧システムの自動化\n7. 重要インフラとしての高信頼性\n\nこの要件を満たす最適なスマートグリッド災害復旧アーキテクチャはどれですか？',
    options: [
      'IoT Core + Greengrass + Timestream + Kinesis + Lambda + Step Functions + Route 53 + Direct Connect + PrivateLink + Aurora Global Database + Systems Manager + GuardDutyを使用し、重要インフラ特化災害復旧システムを構築する',
      'EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型電力災害復旧システムを構築する',
      'EKS + Kubernetes + Prometheus + Grafana + InfluxDB + Redis + PostgreSQLを使用し、オープンソース電力災害復旧システムを構築する',
      'SCADA + HMI + Historian + OPC UA + Modbus + 冗長化PLCを使用し、産業制御災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: 'エネルギー会社のスマートグリッド災害復旧には、IoT Core + Greengrass + Timestream + Kinesis + Lambda + Step Functions + Route 53 + Direct Connect + PrivateLink + Aurora Global Database + Systems Manager + GuardDutyの組み合わせが最適です。\n\n理由：\n1. **IoT Core + Greengrass**: 発電所・変電所との継続通信\n2. **Timestream**: 電力時系列データの高速復旧\n3. **Kinesis**: リアルタイム電力データストリーミング\n4. **Lambda + Step Functions**: 停電復旧の自動オーケストレーション\n5. **Route 53**: 5分以内の制御システムフェイルオーバー\n6. **Direct Connect**: 重要インフラとの専用接続維持\n7. **PrivateLink**: セキュアな電力システム通信\n8. **Aurora Global Database**: 電力データのグローバル同期\n9. **Systems Manager**: 電力インフラの統合管理\n10. **GuardDuty**: 重要インフラのセキュリティ監視\n\nスマートグリッド災害復旧性能：\n- RTO: 3-5分（電力供給継続優先）\n- RPO: 30秒-1分（電力データ保護）\n- 信頼性: 99.999%（重要インフラ要件）\n\n他の選択肢の問題点：\n- **EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型電力災害復旧システムを構築する**: 従来型は電力業界の特殊要件に不適切\n- **EKS + Kubernetes + Prometheus + Grafana + InfluxDB + Redis + PostgreSQLを使用し、オープンソース電力災害復旧システムを構築する**: オープンソースは重要インフラの信頼性要件に不適切\n- **SCADA + HMI + Historian + OPC UA + Modbus + 冗長化PLCを使用し、産業制御災害復旧システムを構築する**: 産業制御のみではクラウド統合とスケーラビリティに限界'
  },
  {
    id: 'adv-dr-008',
    category: '災害復旧',
    question: '大手航空会社が、航空管制連携システムの災害復旧を強化しています。以下の要件があります：\n\n1. 航空管制との通信継続（RTO: 2分）\n2. フライトデータの完全保護（RPO: 30秒）\n3. 航空機との通信維持\n4. フライトスケジュール管理継続\n5. 緊急着陸支援システム維持\n6. 航空規制（ICAO、FAA）準拠\n7. 人命に関わる最高レベルの信頼性\n\nこの要件を満たす最適な航空災害復旧アーキテクチャはどれですか？',
    options: [
      'Direct Connect + PrivateLink + Aurora Global Database + Route 53 + Global Accelerator + Kinesis + Lambda + Step Functions + CloudTrail + Config + KMS + CloudHSM + Systems Managerを使用し、航空業界特化災害復旧システムを構築する',
      'EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型航空災害復旧システムを構築する',
      'EKS + Kubernetes + Istio + Prometheus + Grafana + PostgreSQL + Redisを使用し、コンテナベース航空災害復旧システムを構築する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレス航空災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: '航空会社の航空管制連携災害復旧には、Direct Connect + PrivateLink + Aurora Global Database + Route 53 + Global Accelerator + Kinesis + Lambda + Step Functions + CloudTrail + Config + KMS + CloudHSM + Systems Managerの組み合わせが最適です。\n\n理由：\n1. **Direct Connect**: 航空管制との専用高速接続\n2. **PrivateLink**: セキュアな航空システム通信\n3. **Aurora Global Database**: フライトデータのグローバル同期\n4. **Route 53**: 2分以内の超高速フェイルオーバー\n5. **Global Accelerator**: 航空機通信の最適経路維持\n6. **Kinesis**: リアルタイムフライトデータ処理\n7. **Lambda + Step Functions**: 緊急対応の自動オーケストレーション\n8. **CloudTrail + Config**: 航空規制準拠の監査証跡\n9. **KMS + CloudHSM**: 最高レベルの暗号化\n10. **Systems Manager**: 航空インフラの統合管理\n\n航空災害復旧性能：\n- RTO: 1-2分（人命優先の超高速復旧）\n- RPO: 15-30秒（フライトデータ完全保護）\n- 信頼性: 99.999%以上（航空安全要件）\n\n他の選択肢の問題点：\n- **EC2 + RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + CloudWatchを使用し、従来型航空災害復旧システムを構築する**: Multi-AZは航空業界の厳格な要件に不十分\n- **EKS + Kubernetes + Istio + Prometheus + Grafana + PostgreSQL + Redisを使用し、コンテナベース航空災害復旧システムを構築する**: コンテナベースは航空管制の安定性要件に不適切\n- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + Step Functionsを使用し、サーバーレス航空災害復旧システムを構築する**: サーバーレスは航空システムの継続性要件に不適切'
  },
  {
    id: 'adv-dr-009',
    category: '災害復旧',
    question: '大手政府機関が、国家重要システムの災害復旧計画を策定しています。以下の要件があります：\n\n1. 国家安全保障システムの継続（RTO: 3分）\n2. 機密データの完全保護（RPO: 0秒）\n3. 複数省庁間の連携維持\n4. 最高機密レベルのセキュリティ\n5. 国家緊急事態対応システム維持\n6. 完全な監査証跡と証拠保全\n7. 外部攻撃からの完全防御\n\nこの要件を満たす最適な政府機関災害復旧アーキテクチャはどれですか？',
    options: [
      'AWS GovCloud + CloudHSM + Aurora Global Database + Route 53 + Direct Connect + PrivateLink + GuardDuty + Macie + Config + CloudTrail + Security Hub + Systems Manager + Control Towerを使用し、政府特化災害復旧システムを構築する',
      'Multi-Account + IAM + KMS + VPC + RDS Multi-AZ + S3 + CloudWatchを使用し、標準政府災害復旧システムを構築する',
      'EKS + Kubernetes + Vault + Consul + Istio + Prometheus + Grafanaを使用し、オープンソース政府災害復旧システムを構築する',
      'オンプレミス + 物理的分離 + 手動フェイルオーバー + テープバックアップを使用し、従来型政府災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: '政府機関の国家重要システム災害復旧には、AWS GovCloud + CloudHSM + Aurora Global Database + Route 53 + Direct Connect + PrivateLink + GuardDuty + Macie + Config + CloudTrail + Security Hub + Systems Manager + Control Towerの組み合わせが最適です。\n\n理由：\n1. **AWS GovCloud**: 政府専用の分離されたクラウド環境\n2. **CloudHSM**: 最高機密レベルの暗号化キー管理\n3. **Aurora Global Database**: 機密データのゼロRPO同期\n4. **Route 53**: 3分以内の超高速フェイルオーバー\n5. **Direct Connect**: 政府専用の安全な接続\n6. **PrivateLink**: 省庁間の完全プライベート通信\n7. **GuardDuty + Macie**: 高度な脅威検知と機密データ保護\n8. **Config + CloudTrail**: 完全な監査証跡と証拠保全\n9. **Security Hub**: 統合セキュリティ管理\n10. **Systems Manager**: 政府インフラの統合管理\n11. **Control Tower**: 複数省庁の統合ガバナンス\n\n政府災害復旧性能：\n- RTO: 2-3分（国家安全保障優先）\n- RPO: 0秒（機密データ完全保護）\n- セキュリティ: 最高機密レベル対応\n\n他の選択肢の問題点：\n- **Multi-Account + IAM + KMS + VPC + RDS Multi-AZ + S3 + CloudWatchを使用し、標準政府災害復旧システムを構築する**: 標準環境は政府の最高機密要件に不十分\n- **ECS + Docker + Kubernetes + Istio + Prometheus + Grafanaを使用し、オープンソース政府災害復旧システムを構築する**: オープンソースは政府の規制・セキュリティ要件に不適切\n- **On-Premises + Physical Isolation + Manual Failover + Tape Backupを使用し、従来型政府災害復旧システムを構築する**: 従来型は復旧時間が長く、現代の脅威に対応困難'
  },
  {
    id: 'adv-dr-010',
    category: '災害復旧',
    question: '大手保険会社が、保険金支払いシステムの災害復旧を強化しています。以下の要件があります：\n\n1. 保険金支払い処理の継続（RTO: 20分）\n2. 契約データの完全保護（RPO: 5分）\n3. 災害時の大量請求処理対応\n4. 顧客サービスの継続提供\n5. 規制当局への報告継続\n6. 不正請求検知システム維持\n7. 保険業界規制（Solvency II）準拠\n\nこの要件を満たす最適な保険業界災害復旧アーキテクチャはどれですか？',
    options: [
      'Aurora Global Database + DynamoDB Global Tables + Route 53 + Auto Scaling + Lambda + Step Functions + Kinesis + SageMaker + S3 Cross-Region Replication + Macie + CloudTrail + Config + Systems Managerを使用し、保険業界特化災害復旧システムを構築する',
      'RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + Lambda + CloudWatchを使用し、従来型保険災害復旧システムを構築する',
      'DocumentDB + S3 + Route 53 + Lambda + API Gateway + CloudFrontを使用し、NoSQL保険災害復旧システムを構築する',
      'Oracle RAC + Data Guard + GoldenGate + Exadata + ASMを使用し、Oracle統合保険災害復旧システムを構築する'
    ],
    correct: 0,
    explanation: '保険会社の保険金支払いシステム災害復旧には、Aurora Global Database + DynamoDB Global Tables + Route 53 + Auto Scaling + Lambda + Step Functions + Kinesis + SageMaker + S3 Cross-Region Replication + Macie + CloudTrail + Config + Systems Managerの組み合わせが最適です。\n\n理由：\n1. **Aurora Global Database**: 保険契約データのグローバル同期\n2. **DynamoDB Global Tables**: 保険金請求データの高速レプリケーション\n3. **Route 53**: 20分以内のシステムフェイルオーバー\n4. **Auto Scaling**: 災害時大量請求の自動スケーリング\n5. **Lambda + Step Functions**: 保険金支払いワークフローの自動復旧\n6. **Kinesis**: リアルタイム請求データ処理\n7. **SageMaker**: 不正請求検知システムの継続\n8. **S3 Cross-Region Replication**: 保険書類の地域間複製\n9. **Macie**: 顧客情報の自動保護\n10. **CloudTrail + Config**: 保険規制準拠の監査証跡\n11. **Systems Manager**: 保険インフラの統合管理\n\n保険災害復旧性能：\n- RTO: 15-20分（保険金支払い継続）\n- RPO: 3-5分（契約データ保護）\n- スケーラビリティ: 災害時大量請求対応\n\n他の選択肢の問題点：\n- **RDS Multi-AZ + ElastiCache + Route 53 + Auto Scaling + Lambda + CloudWatchを使用し、従来型保険災害復旧システムを構築する**: Multi-AZは単一リージョン、保険業界のグローバル要件に不適切\n- **DocumentDB + S3 + Route 53 + Lambda + API Gateway + CloudFrontを使用し、NoSQL保険災害復旧システムを構築する**: NoSQLは保険の複雑なデータ関係性管理に不適切\n- **Oracle RAC + Data Guard + GoldenGate + Exadata + ASMを使用し、Oracle統合保険災害復旧システムを構築する**: Oracle統合は高コストで、クラウドネイティブな拡張性に限界'
  },
  {
    id: 'adv-dr-multi-001',
    category: '災害復旧',
    question: '大手銀行が、ミッションクリティカルな勘定系システムの災害復旧戦略を策定しています。以下の要件があります：\n\n**要件：**\n- RPO（目標復旧時点）：ゼロ（データ損失許容なし）\n- RTO（目標復旧時間）：5分以内\n- 金融庁規制への完全準拠\n- 地理的に分散した複数拠点での運用\n- 24時間365日の監視体制\n- 年2回の災害復旧訓練実施\n\nこの厳格な災害復旧要件を満たすために必要なAWSサービスを**3つ**選択してください。',
    options: [
      'Amazon Aurora Global Database - ゼロデータ損失のグローバルレプリケーション',
      'AWS Backup - 統合バックアップ・復旧管理',
      'Amazon Route 53 Application Recovery Controller - 自動フェイルオーバー制御',
      'AWS Site-to-Site VPN - セキュアな拠点間接続',
      'Amazon CloudWatch - 監視・アラート機能',
      'AWS Systems Manager - 運用自動化'
    ],
    correct: [
      0,
      2,
      4
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Amazon Aurora Global Database**\n- RPOゼロを実現する同期レプリケーション\n- 複数リージョンでの自動レプリケーション\n- 1秒未満のフェイルオーバー時間\n- 金融業界の厳格な要件に対応\n- 99.99%の可用性保証\n\n**2. Amazon Route 53 Application Recovery Controller**\n- RTO 5分以内を実現する自動フェイルオーバー\n- 複数拠点間の自動切り替え制御\n- ヘルスチェックによる障害検知\n- 災害復旧訓練の自動化支援\n- 金融規制要件への準拠\n\n**3. Amazon CloudWatch**\n- 24時間365日の統合監視\n- リアルタイム障害検知とアラート\n- 災害復旧メトリクスの監視\n- 自動復旧トリガーの設定\n- 規制要件の監査ログ提供\n\n**他の選択肢について：**\n- **AWS Backup**: 重要だがRPOゼロ要件には不十分\n- **Site-to-Site VPN**: 接続には重要だが災害復旧の主要機能ではない\n- **Systems Manager**: 運用自動化には有用だが災害復旧の主要要件ではない'
  },
  {
    id: 'adv-dr-multi-002',
    category: '災害復旧',
    question: 'グローバル展開するeコマース企業が、ブラックフライデーなどの繁忙期を考慮した災害復旧計画を策定しています。以下の要件があります：\n\n**要件：**\n- 通常時の100倍のトラフィック処理能力\n- 複数リージョンでの同時障害対応\n- 顧客データの完全性保証\n- 売上機会損失の最小化\n- 自動復旧による運用負荷軽減\n- コスト効率的な平時運用\n\nこの大規模災害復旧システムに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'AWS Global Accelerator - グローバル負荷分散とフェイルオーバー',
      'Amazon DynamoDB Global Tables - グローバル分散NoSQLデータベース',
      'AWS CloudFormation - インフラ自動復旧',
      'Amazon S3 Cross-Region Replication - データ複製',
      'AWS Lambda - サーバーレス自動復旧処理',
      'Amazon ElastiCache Global Datastore - グローバルキャッシュ'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. AWS Global Accelerator**\n- 複数リージョン間の自動負荷分散\n- 障害時の即座なトラフィック切り替え\n- 100倍トラフィックの分散処理\n- AWSバックボーンネットワークの活用\n- 売上機会損失の最小化\n\n**2. Amazon DynamoDB Global Tables**\n- 複数リージョンでの自動レプリケーション\n- 顧客データの完全性保証\n- 無制限スケーラビリティ\n- 自動フェイルオーバー機能\n- コスト効率的な従量課金\n\n**他の選択肢について：**\n- **CloudFormation**: インフラ管理には重要だが、リアルタイム災害復旧には不十分\n- **S3 Cross-Region Replication**: データ複製には有用だが、動的データには不適切\n- **Lambda**: 自動処理には有用だが、大規模トラフィック処理の主要機能ではない\n- **ElastiCache Global Datastore**: キャッシュには有用だが、主要データストアではない'
  },
  {
    id: 'adv-dr-multi-003',
    category: '災害復旧',
    question: '製造業が、工場の制御システムとERPシステムの統合災害復旧計画を策定しています。以下の要件があります：\n\n**要件：**\n- 工場制御システムの即座復旧（RTO: 1分以内）\n- ERPデータの完全性保証（RPO: 15分以内）\n- 複数工場間での相互バックアップ\n- 災害時の生産継続計画\n- 規制要件への準拠\n- 段階的復旧プロセス\n\nこの製造業災害復旧システムに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Outposts - オンプレミス統合クラウドインフラ',
      'Amazon FSx - 高性能ファイルシステム',
      'AWS DataSync - データ同期・レプリケーション',
      'AWS Storage Gateway - ハイブリッドストレージ統合',
      'Amazon EBS Snapshots - ブロックストレージバックアップ',
      'AWS Wavelength - エッジコンピューティング'
    ],
    correct: [
      0,
      2,
      3
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Outposts**\n- 工場内でのAWSサービス提供\n- 制御システムの低レイテンシ要件対応\n- RTO 1分以内の即座復旧\n- オンプレミスとクラウドの統合管理\n- 製造業の特殊要件への対応\n\n**2. AWS DataSync**\n- 工場間でのデータ同期・レプリケーション\n- ERPデータのRPO 15分以内実現\n- 自動的なデータ整合性検証\n- 段階的復旧プロセスの支援\n- 複数工場間の相互バックアップ\n\n**3. AWS Storage Gateway**\n- オンプレミスとクラウドの統合ストレージ\n- 工場制御システムとERPの統合管理\n- 災害時の透明なフェイルオーバー\n- 規制要件への準拠支援\n- ハイブリッド環境の最適化\n\n**他の選択肢について：**\n- **FSx**: 高性能ファイルシステムには有用だが、災害復旧の主要機能ではない\n- **EBS Snapshots**: バックアップには重要だが、リアルタイム復旧には不十分\n- **Wavelength**: エッジコンピューティングには有用だが、製造業の主要要件ではない'
  },
  {
    id: 'adv-int-001',
    category: 'アプリケーション統合',
    question: '大手eコマース企業が、マイクロサービス間の統合アーキテクチャを構築しています。以下の要件があります：\n\n1. 100以上のマイクロサービス間の疎結合通信\n2. イベント駆動アーキテクチャの実装\n3. 非同期処理とリアルタイム処理の混在\n4. 障害時の自動リトライと回復\n5. メッセージの順序保証と重複排除\n6. 高スループット（1秒間に100万メッセージ）\n7. 統合監視とトレーサビリティ\n\nこの要件を満たす最適な統合アーキテクチャはどれですか？',
    options: [
      'EventBridge + SQS + SNS + Kinesis + Step Functions + Lambda + X-Ray + CloudWatchを使用し、イベント駆動統合アーキテクチャを構築する',
      'API Gateway + Lambda + DynamoDB + S3 + CloudFrontを使用し、RESTful統合アーキテクチャを構築する',
      'ECS + Application Load Balancer + RDS + ElastiCacheを使用し、同期型統合アーキテクチャを構築する',
      'Apache Kafka + Zookeeper + Kafka Connect + Schema Registryを使用し、オープンソース統合アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: 'eコマース企業のマイクロサービス統合には、EventBridge + SQS + SNS + Kinesis + Step Functions + Lambda + X-Ray + CloudWatchの組み合わせが最適です。\n\n理由：\n1. **EventBridge**: 100以上のサービス間のイベントルーティング\n2. **SQS**: 非同期処理と障害時の自動リトライ\n3. **SNS**: ファンアウト型の通知配信\n4. **Kinesis**: 高スループットリアルタイム処理\n5. **Step Functions**: 複雑なワークフローオーケストレーション\n6. **Lambda**: イベント駆動処理\n7. **X-Ray**: 分散トレーシング\n8. **CloudWatch**: 統合監視'
  },
  {
    id: 'adv-int-002',
    category: 'アプリケーション統合',
    question: '大手金融機関が、レガシーシステムとクラウドサービスの統合を実施しています。以下の課題があります：\n\n1. メインフレーム（COBOL）との連携\n2. リアルタイム取引処理の要件\n3. 金融規制への準拠\n4. データ形式の変換（EBCDIC、固定長等）\n5. 高可用性とセキュリティ\n6. 段階的移行の必要性\n7. 監査証跡の完全性\n\nこの統合要件を満たす最適なアーキテクチャはどれですか？',
    options: [
      'MQ + Connect + Lambda + Step Functions + API Gateway + KMS + CloudTrail + Configを使用し、レガシー統合アーキテクチャを構築する',
      'Direct Connect + VPN + EC2 + RDS + S3を使用し、ハイブリッド統合アーキテクチャを構築する',
      'EventBridge + SQS + Lambda + DynamoDBを使用し、モダン統合アーキテクチャを構築する',
      'API Gateway + Lambda + Aurora + ElastiCacheを使用し、サーバーレス統合アーキテクチャを構築する'
    ],
    correct: 0,
    explanation: '金融機関のレガシー統合には、MQ + Connect + Lambda + Step Functions + API Gateway + KMS + CloudTrail + Configの組み合わせが最適です。\n\n理由：\n1. **MQ**: メインフレームとの信頼性の高いメッセージング\n2. **Connect**: データ形式変換とプロトコル変換\n3. **Lambda**: リアルタイム処理とビジネスロジック\n4. **Step Functions**: 複雑な金融ワークフロー\n5. **API Gateway**: セキュアなAPI管理\n6. **KMS**: 金融データの暗号化\n7. **CloudTrail**: 監査証跡の完全性'
  },
  {
    id: 'adv-int-003',
    category: 'アプリケーション統合',
    question: '大手製造業が、IoTデバイスとエンタープライズシステムの統合を実施しています。工場の数万台のセンサーからのデータを既存のERP、MES、WMSシステムと統合する必要があります。リアルタイム監視、予知保全、品質管理の要件があります。最適な統合アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Lambda + Step Functions + API Gateway + SQS + EventBridge + Systems Managerを使用する',
      'MQTT Broker + Kafka + Spark + Hadoop + Hiveを使用する',
      'Direct Connect + VPN + EC2 + RDS + S3を使用する',
      'EventBridge + SNS + SQS + DynamoDB + Lambdaを使用する'
    ],
    correct: 0,
    explanation: '製造業のIoT統合には、IoT Core + Kinesis + Lambda + Step Functions + API Gateway + SQS + EventBridge + Systems Managerが最適です。IoT Coreで大量デバイス管理、Kinesisでリアルタイム処理、EventBridgeでエンタープライズシステム統合を実現できます。'
  },
  {
    id: 'adv-int-004',
    category: 'アプリケーション統合',
    question: '大手小売チェーンが、オムニチャネル戦略のためのシステム統合を実施しています。店舗POS、ECサイト、モバイルアプリ、在庫管理、顧客管理システムの統合が必要です。リアルタイム在庫同期、顧客体験の一貫性、ピーク時の負荷対応が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'API Gateway + Lambda + EventBridge + SQS + SNS + DynamoDB + Kinesis + Step Functionsを使用する',
      'Application Load Balancer + EC2 + RDS + ElastiCache + S3を使用する',
      'Direct Connect + VPN + VMware + vSphere + NSXを使用する',
      'Kafka + Zookeeper + Spark + Cassandra + Elasticsearchを使用する'
    ],
    correct: 0,
    explanation: '小売チェーンのオムニチャネル統合には、API Gateway + Lambda + EventBridge + SQS + SNS + DynamoDB + Kinesis + Step Functionsが最適です。API Gatewayで統一インターフェース、EventBridgeでシステム間連携、Kinesisでリアルタイム処理を実現できます。'
  },
  {
    id: 'adv-int-005',
    category: 'アプリケーション統合',
    question: '大手ヘルスケア企業が、病院システム、薬局システム、保険システムの統合を実施しています。HL7 FHIR準拠、HIPAA準拠、リアルタイム患者情報共有、医療機器との統合が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'HealthLake + API Gateway + Lambda + EventBridge + SQS + PrivateLink + Macie + CloudTrailを使用する',
      'RDS + Lambda + API Gateway + S3 + CloudFrontを使用する',
      'DocumentDB + Atlas Search + Lambda + API Gatewayを使用する',
      'DynamoDB + Lambda + API Gateway + Kinesis + SNSを使用する'
    ],
    correct: 0,
    explanation: 'ヘルスケア統合には、HealthLake + API Gateway + Lambda + EventBridge + SQS + PrivateLink + Macie + CloudTrailが最適です。HealthLakeでFHIR準拠、PrivateLinkでセキュア通信、MacieでPHI保護を実現できます。'
  },
  {
    id: 'adv-int-006',
    category: 'アプリケーション統合',
    question: '大手物流会社が、配送管理システムの統合を実施しています。車両追跡、ルート最適化、倉庫管理、顧客通知システムの統合が必要です。リアルタイム位置情報、動的ルート変更、大量通知処理が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Lambda + Step Functions + SNS + SQS + Location Service + EventBridgeを使用する',
      'EC2 + RDS + ElastiCache + Lambda + API Gatewayを使用する',
      'ECS + Application Load Balancer + Aurora + S3を使用する',
      'Kafka + Spark + Cassandra + Redis + Elasticsearchを使用する'
    ],
    correct: 0,
    explanation: '物流システム統合には、IoT Core + Kinesis + Lambda + Step Functions + SNS + SQS + Location Service + EventBridgeが最適です。IoT Coreで車両IoT管理、Location Serviceで位置情報処理、EventBridgeでシステム統合を実現できます。'
  },
  {
    id: 'adv-int-007',
    category: 'アプリケーション統合',
    question: '大手メディア企業が、コンテンツ管理システムの統合を実施しています。動画編集、エンコーディング、配信、分析システムの統合が必要です。大容量ファイル処理、ワークフロー管理、リアルタイム分析が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'MediaConvert + Step Functions + S3 + Lambda + EventBridge + Kinesis + SQS + SNSを使用する',
      'EC2 + EFS + RDS + ElastiCache + CloudFrontを使用する',
      'ECS + Application Load Balancer + Aurora + S3を使用する',
      'EMR + Spark + Hadoop + Hive + Redshiftを使用する'
    ],
    correct: 0,
    explanation: 'メディア統合には、MediaConvert + Step Functions + S3 + Lambda + EventBridge + Kinesis + SQS + SNSが最適です。MediaConvertで動画処理、Step Functionsでワークフロー、EventBridgeでシステム統合を実現できます。'
  },
  {
    id: 'adv-int-008',
    category: 'アプリケーション統合',
    question: '大手ゲーム会社が、ゲームサービスの統合を実施しています。ゲームサーバー、プレイヤー管理、課金システム、分析システムの統合が必要です。リアルタイム通信、高可用性、グローバル展開が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'GameLift + API Gateway + Lambda + EventBridge + DynamoDB + Kinesis + SQS + SNSを使用する',
      'EC2 + Application Load Balancer + RDS + ElastiCacheを使用する',
      'EKS + Kubernetes + Istio + Prometheus + Grafanaを使用する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFrontを使用する'
    ],
    correct: 0,
    explanation: 'ゲームサービス統合には、GameLift + API Gateway + Lambda + EventBridge + DynamoDB + Kinesis + SQS + SNSが最適です。GameLiftでゲームサーバー管理、EventBridgeでサービス統合、Kinesisでリアルタイム分析を実現できます。'
  },
  {
    id: 'adv-int-009',
    category: 'アプリケーション統合',
    question: '大手エネルギー会社が、スマートグリッドシステムの統合を実施しています。発電所、変電所、配電網、スマートメーターの統合が必要です。リアルタイム制御、大量データ処理、高信頼性が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Lambda + Step Functions + EventBridge + Timestream + SQS + SNSを使用する',
      'EC2 + RDS + ElastiCache + Lambda + API Gatewayを使用する',
      'EMR + Spark + Hadoop + Kafka + Cassandraを使用する',
      'ECS + Application Load Balancer + Aurora + S3を使用する'
    ],
    correct: 0,
    explanation: 'スマートグリッド統合には、IoT Core + Kinesis + Lambda + Step Functions + EventBridge + Timestream + SQS + SNSが最適です。IoT Coreで大量デバイス管理、Timestreamで時系列データ、EventBridgeでシステム統合を実現できます。'
  },
  {
    id: 'adv-int-010',
    category: 'アプリケーション統合',
    question: '大手航空会社が、航空システムの統合を実施しています。予約システム、チェックインシステム、手荷物追跡、航空管制連携の統合が必要です。高可用性、リアルタイム処理、規制準拠が要件です。最適な統合アーキテクチャはどれですか？',
    options: [
      'API Gateway + Lambda + Step Functions + EventBridge + SQS + SNS + Aurora + KMS + CloudTrailを使用する',
      'EC2 + Application Load Balancer + RDS + ElastiCacheを使用する',
      'EKS + Kubernetes + Istio + Prometheus + Grafanaを使用する',
      'Lambda + DynamoDB + S3 + CloudFront + Route 53を使用する'
    ],
    correct: 0,
    explanation: '航空システム統合には、API Gateway + Lambda + Step Functions + EventBridge + SQS + SNS + Aurora + KMS + CloudTrailが最適です。API Gatewayで統一インターフェース、Step Functionsで複雑ワークフロー、EventBridgeでシステム統合を実現できます。'
  },
  {
    id: 'adv-int-multi-001',
    category: 'アプリケーション統合',
    question: '大手小売チェーンが、オムニチャネル戦略のためにECサイト、実店舗POS、在庫管理、CRMシステムを統合しています。以下の要件があります：\n\n**要件：**\n- リアルタイム在庫同期\n- 顧客データの統合管理\n- 注文処理の自動化\n- 複数システム間のデータ整合性保証\n- 障害時の自動復旧\n- スケーラブルなメッセージ処理\n\nこのオムニチャネル統合に必要なAWSサービスを**3つ**選択してください。',
    options: [
      'Amazon EventBridge - イベント駆動統合',
      'AWS Step Functions - ワークフロー自動化',
      'Amazon SQS - 信頼性の高いメッセージキューイング',
      'Amazon SNS - プッシュ通知サービス',
      'AWS AppSync - GraphQL API統合',
      'Amazon MQ - マネージドメッセージブローカー'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Amazon EventBridge**\n- 複数システム間のイベント駆動統合\n- リアルタイム在庫同期の実現\n- カスタムイベントルールによる柔軟な統合\n- 第三者システムとの統合対応\n- 疎結合アーキテクチャの実現\n\n**2. AWS Step Functions**\n- 複雑な注文処理ワークフローの自動化\n- 複数システム間の処理順序制御\n- エラーハンドリングと自動復旧\n- 視覚的なワークフロー管理\n- 状態管理と監視機能\n\n**3. Amazon SQS**\n- システム間の信頼性の高いメッセージ配信\n- 障害時のメッセージ保護\n- スケーラブルなメッセージ処理\n- デッドレターキューによるエラー処理\n- 順序保証（FIFO）オプション\n\n**他の選択肢について：**\n- **SNS**: 通知には有用だが、システム統合の主要機能ではない\n- **AppSync**: GraphQL統合には有用だが、オムニチャネル統合の主要機能ではない\n- **MQ**: メッセージブローカーには有用だが、クラウドネイティブ統合には不適切'
  },
  {
    id: 'adv-int-multi-002',
    category: 'アプリケーション統合',
    question: '金融機関が、レガシーシステムと新しいデジタルバンキングプラットフォームを統合しています。以下の要件があります：\n\n**要件：**\n- レガシーシステムとの安全な統合\n- リアルタイム取引処理\n- 金融規制への準拠\n- API管理とセキュリティ\n- 取引データの完全性保証\n- 段階的移行サポート\n\nこの金融システム統合に必要なAWSサービスを**2つ**選択してください。',
    options: [
      'Amazon API Gateway - API管理・セキュリティ',
      'AWS PrivateLink - プライベート接続',
      'Amazon Kinesis - リアルタイムデータストリーミング',
      'AWS Direct Connect - 専用線接続',
      'Amazon MQ - エンタープライズメッセージング',
      'AWS Transit Gateway - ネットワーク統合'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. Amazon API Gateway**\n- レガシーシステムとの統一API管理\n- 認証・認可による強固なセキュリティ\n- API使用量の監視と制御\n- 金融規制要件への準拠機能\n- 段階的移行のサポート\n\n**2. AWS PrivateLink**\n- レガシーシステムとの安全なプライベート接続\n- インターネットを経由しない通信\n- 金融データの高度なセキュリティ確保\n- ネットワーク分離による規制準拠\n- 取引データの完全性保証\n\n**他の選択肢について：**\n- **Kinesis**: リアルタイム処理には有用だが、システム統合の主要機能ではない\n- **Direct Connect**: 専用線接続には重要だが、アプリケーション統合の主要機能ではない\n- **MQ**: メッセージングには有用だが、API統合の主要機能ではない\n- **Transit Gateway**: ネットワーク統合には重要だが、アプリケーション統合の主要機能ではない'
  },
  {
    id: 'adv-int-multi-003',
    category: 'アプリケーション統合',
    question: '製造業が、IoTデバイス、ERP、MES（製造実行システム）、品質管理システムを統合したスマートファクトリーを構築しています。以下の要件があります：\n\n**要件：**\n- 大量IoTデータのリアルタイム処理\n- 製造プロセスの自動化\n- 品質データの統合分析\n- 予知保全システムとの連携\n- エッジとクラウドの統合\n- 製造データの可視化\n\nこのスマートファクトリー統合に必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS IoT Core - IoTデバイス統合管理',
      'Amazon Kinesis Data Streams - 大量データストリーミング',
      'AWS IoT Analytics - IoTデータ分析・統合',
      'Amazon Timestream - 時系列データベース',
      'AWS Lambda - サーバーレス処理',
      'Amazon QuickSight - データ可視化'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS IoT Core**\n- 大量IoTデバイスの統合管理\n- デバイス認証とセキュア通信\n- ルールエンジンによるデータルーティング\n- 他のAWSサービスとの統合\n- エッジとクラウドの統合基盤\n\n**2. Amazon Kinesis Data Streams**\n- 大量IoTデータのリアルタイム処理\n- 高スループットデータストリーミング\n- 複数のコンシューマーによる並列処理\n- 製造プロセスのリアルタイム監視\n- スケーラブルなデータ取り込み\n\n**3. AWS IoT Analytics**\n- IoTデータの前処理と変換\n- 製造業特化のデータ分析機能\n- 品質データの統合分析\n- 予知保全データの準備\n- 製造データの可視化支援\n\n**他の選択肢について：**\n- **Timestream**: 時系列データには適しているが、IoT統合の主要機能ではない\n- **Lambda**: リアルタイム処理には有用だが、大量データ処理の主要機能ではない\n- **QuickSight**: 可視化には重要だが、データ統合の主要機能ではない'
  },
  {
    id: 'adv-mgmt-001',
    category: '管理・ガバナンス',
    question: '大手企業が、1000以上のAWSアカウントを持つマルチアカウント環境のガバナンス強化を実施しています。以下の要件があります：\n\n1. 統一されたセキュリティポリシーの適用\n2. コンプライアンス要件の自動監査\n3. コスト管理と配賦の自動化\n4. リソースの標準化とベストプラクティス適用\n5. 組織変更に対応した柔軟なアカウント管理\n6. 統合ログ管理と監視\n7. 災害復旧とビジネス継続性\n\nこの要件を満たす最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Control Tower + Organizations + Config + CloudTrail + Security Hub + GuardDuty + Macie + Systems Manager + Trusted Advisor + Cost Explorer + Budgetsを使用し、統合ガバナンス基盤を構築する',
      'IAM + CloudWatch + CloudFormation + S3 + Lambda + SNSを使用し、基本的ガバナンス環境を構築する',
      'Terraform + Ansible + Jenkins + GitLab + Prometheusを使用し、オープンソースガバナンス環境を構築する',
      '手動プロセス + Excel + PowerBI + メール通知を使用し、従来型ガバナンス環境を構築する'
    ],
    correct: 0,
    explanation: '大規模マルチアカウント環境には、Control Tower + Organizations + Config + CloudTrail + Security Hub + GuardDuty + Macie + Systems Manager + Trusted Advisor + Cost Explorer + Budgetsの統合ガバナンス基盤が最適です。\n\n理由：\n1. **Control Tower**: 1000アカウントの統一ガバナンス\n2. **Organizations**: 組織構造に応じたアカウント管理\n3. **Config**: コンプライアンス自動監査\n4. **CloudTrail**: 統合ログ管理\n5. **Security Hub**: セキュリティポリシー統一適用\n6. **Systems Manager**: リソース標準化\n7. **Cost Explorer + Budgets**: コスト管理自動化'
  },
  {
    id: 'adv-mgmt-002',
    category: '管理・ガバナンス',
    question: '大手金融機関が、厳格な規制要件下でのクラウドガバナンスを実装しています。SOX法、PCI DSS、Basel III等への準拠、完全な監査証跡、リスク管理の自動化が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Config + CloudTrail + Security Hub + Macie + GuardDuty + Inspector + Systems Manager + Trusted Advisor + Well-Architected Tool + Audit Managerを使用する',
      'CloudWatch + Lambda + SNS + S3 + IAMを使用する',
      'Terraform + Vault + Consul + Prometheusを使用する',
      '手動監査 + Excel + PowerPoint + メール報告を使用する'
    ],
    correct: 0,
    explanation: '金融機関の規制準拠ガバナンスには、Config + CloudTrail + Security Hub + Macie + GuardDuty + Inspector + Systems Manager + Trusted Advisor + Well-Architected Tool + Audit Managerが最適です。完全な監査証跡、自動コンプライアンスチェック、リスク管理を実現できます。'
  },
  {
    id: 'adv-mgmt-003',
    category: '管理・ガバナンス',
    question: '大手製造業が、グローバル工場のITガバナンスを統一しています。世界50拠点、異なる規制要件、セキュリティ標準の統一、運用効率化が課題です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Organizations + Control Tower + Config + Systems Manager + Resource Groups + Tag Editor + CloudFormation StackSets + Service Catalogを使用する',
      'CloudWatch + Lambda + S3 + IAM + VPCを使用する',
      'Kubernetes + Helm + Prometheus + Grafana + Fluentdを使用する',
      '各拠点独立管理 + 手動レポート + 四半期レビューを使用する'
    ],
    correct: 0,
    explanation: 'グローバル製造業のガバナンスには、Organizations + Control Tower + Config + Systems Manager + Resource Groups + Tag Editor + CloudFormation StackSets + Service Catalogが最適です。統一ポリシー適用、標準化、効率的な運用管理を実現できます。'
  },
  {
    id: 'adv-mgmt-004',
    category: '管理・ガバナンス',
    question: '大手ヘルスケア企業が、HIPAA準拠のガバナンス体制を構築しています。患者データ保護、アクセス制御、監査要件、インシデント対応の自動化が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Macie + GuardDuty + Config + CloudTrail + Security Hub + IAM Access Analyzer + Systems Manager + Incident Managerを使用する',
      'IAM + CloudWatch + S3 + Lambda + SNSを使用する',
      'Active Directory + SIEM + DLP + Firewallを使用する',
      '手動監査 + アクセスログ確認 + 月次レポートを使用する'
    ],
    correct: 0,
    explanation: 'HIPAA準拠ガバナンスには、Macie + GuardDuty + Config + CloudTrail + Security Hub + IAM Access Analyzer + Systems Manager + Incident Managerが最適です。PHI保護、自動監査、インシデント対応を統合的に管理できます。'
  },
  {
    id: 'adv-mgmt-005',
    category: '管理・ガバナンス',
    question: '大手小売チェーンが、オムニチャネル戦略のガバナンス体制を構築しています。店舗・EC・モバイルの統合管理、データガバナンス、セキュリティ統制が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Organizations + Config + CloudTrail + Security Hub + Resource Groups + Systems Manager + Service Catalog + Well-Architected Toolを使用する',
      'CloudWatch + Lambda + DynamoDB + S3 + API Gatewayを使用する',
      'Kubernetes + Istio + Prometheus + Jaeger + Fluentdを使用する',
      '各チャネル独立管理 + 手動統合 + 週次会議を使用する'
    ],
    correct: 0,
    explanation: 'オムニチャネル小売ガバナンスには、Organizations + Config + CloudTrail + Security Hub + Resource Groups + Systems Manager + Service Catalog + Well-Architected Toolが最適です。チャネル横断の統合管理、標準化、ベストプラクティス適用を実現できます。'
  },
  {
    id: 'adv-mgmt-006',
    category: '管理・ガバナンス',
    question: '大手メディア企業が、コンテンツ管理のガバナンス体制を構築しています。著作権管理、コンテンツ品質、配信統制、収益管理の自動化が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Macie + Rekognition + Config + CloudTrail + Systems Manager + Resource Groups + Cost Explorer + Budgetsを使用する',
      'S3 + Lambda + CloudFront + API Gateway + DynamoDBを使用する',
      'Kubernetes + Docker + Prometheus + Grafana + ELKを使用する',
      '手動コンテンツ審査 + Excel管理 + 月次レポートを使用する'
    ],
    correct: 0,
    explanation: 'メディアガバナンスには、Macie + Rekognition + Config + CloudTrail + Systems Manager + Resource Groups + Cost Explorer + Budgetsが最適です。コンテンツ自動分類、著作権保護、配信統制、収益管理を統合的に実現できます。'
  },
  {
    id: 'adv-mgmt-007',
    category: '管理・ガバナンス',
    question: '大手ゲーム会社が、グローバルゲームサービスのガバナンス体制を構築しています。プレイヤーデータ保護、ゲーム品質管理、収益最適化、コンプライアンス対応が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Macie + Config + CloudTrail + Security Hub + Systems Manager + Cost Explorer + Trusted Advisor + Well-Architected Toolを使用する',
      'GameLift + DynamoDB + Lambda + API Gateway + CloudWatchを使用する',
      'Kubernetes + Prometheus + Grafana + Jaeger + Fluentdを使用する',
      '手動プレイヤー管理 + ゲーム品質チェック + 月次分析を使用する'
    ],
    correct: 0,
    explanation: 'ゲームサービスガバナンスには、Macie + Config + CloudTrail + Security Hub + Systems Manager + Cost Explorer + Trusted Advisor + Well-Architected Toolが最適です。プレイヤーデータ保護、品質管理、コスト最適化を統合的に管理できます。'
  },
  {
    id: 'adv-mgmt-008',
    category: '管理・ガバナンス',
    question: '大手物流会社が、配送ネットワークのガバナンス体制を構築しています。車両管理、ドライバー管理、配送品質、安全管理の統制が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'IoT Device Management + Config + CloudTrail + Systems Manager + Resource Groups + CloudWatch + Trusted Advisorを使用する',
      'EC2 + RDS + Lambda + API Gateway + S3を使用する',
      'Kubernetes + Prometheus + Grafana + Fluentd + Jaegerを使用する',
      '手動車両点検 + ドライバー管理台帳 + 紙ベース報告を使用する'
    ],
    correct: 0,
    explanation: '物流ガバナンスには、IoT Device Management + Config + CloudTrail + Systems Manager + Resource Groups + CloudWatch + Trusted Advisorが最適です。車両IoT管理、配送品質監視、安全管理を統合的に実現できます。'
  },
  {
    id: 'adv-mgmt-009',
    category: '管理・ガバナンス',
    question: '大手エネルギー会社が、スマートグリッドのガバナンス体制を構築しています。電力品質管理、設備管理、環境規制対応、安全管理の統制が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'IoT Device Management + Config + CloudTrail + Systems Manager + GuardDuty + Macie + Trusted Advisor + Well-Architected Toolを使用する',
      'EC2 + RDS + CloudWatch + Lambda + S3を使用する',
      'SCADA + HMI + Historian + OPC UAを使用する',
      '手動設備点検 + 紙ベース記録 + 四半期報告を使用する'
    ],
    correct: 0,
    explanation: 'エネルギーガバナンスには、IoT Device Management + Config + CloudTrail + Systems Manager + GuardDuty + Macie + Trusted Advisor + Well-Architected Toolが最適です。電力設備管理、品質監視、規制対応を統合的に管理できます。'
  },
  {
    id: 'adv-mgmt-010',
    category: '管理・ガバナンス',
    question: '大手政府機関が、国家レベルのITガバナンス体制を構築しています。複数省庁の統合管理、セキュリティ統制、透明性確保、国民サービス品質管理が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Control Tower + Organizations + Config + CloudTrail + Security Hub + GuardDuty + Macie + Systems Manager + Audit Manager + Well-Architected Toolを使用する',
      'IAM + CloudWatch + S3 + Lambda + API Gatewayを使用する',
      'Kubernetes + Prometheus + Grafana + Vault + Consulを使用する',
      '各省庁独立管理 + 手動統合 + 年次監査を使用する'
    ],
    correct: 0,
    explanation: '政府ITガバナンスには、Control Tower + Organizations + Config + CloudTrail + Security Hub + GuardDuty + Macie + Systems Manager + Audit Manager + Well-Architected Toolが最適です。省庁統合管理、セキュリティ統制、透明性確保を実現できます。'
  },
  {
    id: 'adv-mgmt-multi-001',
    category: '管理・ガバナンス',
    question: '多国籍企業が、グローバル展開する子会社のAWS環境を統合管理しています。以下の要件があります：\n\n**要件：**\n- 各国の規制要件への個別対応\n- 統合請求と予算管理\n- セキュリティポリシーの統一\n- リソース使用量の可視化\n- ガバナンス統制の自動化\n- 監査証跡の一元管理\n\nこのグローバルガバナンスに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Organizations - マルチアカウント統合管理',
      'AWS Control Tower - ガバナンス自動化',
      'AWS Cost and Billing - 統合請求・予算管理',
      'AWS Resource Groups - リソース管理・タグ付け',
      'AWS Service Catalog - 承認済みサービス管理',
      'AWS CloudFormation - インフラ標準化'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Organizations**\n- 複数アカウントの階層管理\n- 各国子会社の個別アカウント管理\n- 統合請求による一元管理\n- サービス制御ポリシー（SCP）による統制\n- 組織単位（OU）による柔軟な管理\n\n**2. AWS Control Tower**\n- ガバナンス統制の自動化\n- セキュリティベースラインの強制\n- コンプライアンス監視の自動化\n- 設定ドリフトの検知と修正\n- 統一されたセキュリティポリシー\n\n**3. AWS Cost and Billing**\n- 統合請求による一元管理\n- 部門別・プロジェクト別コスト配分\n- 予算アラートと使用量監視\n- コスト最適化の推奨\n- 詳細な使用量レポート\n\n**他の選択肢について：**\n- **Resource Groups**: リソース管理には有用だが、ガバナンスの主要機能ではない\n- **Service Catalog**: サービス管理には重要だが、統合管理の主要機能ではない\n- **CloudFormation**: 標準化には重要だが、ガバナンス統制の主要機能ではない'
  },
  {
    id: 'adv-mgmt-multi-002',
    category: '管理・ガバナンス',
    question: '金融機関が、厳格な規制要件を満たすクラウドガバナンス体制を構築しています。以下の要件があります：\n\n**要件：**\n- 金融庁規制への完全準拠\n- 設定変更の完全な監査証跡\n- セキュリティ統制の自動化\n- リスク管理の可視化\n- インシデント対応の標準化\n- 継続的なコンプライアンス監視\n\nこの規制準拠ガバナンスに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'AWS Config - 設定管理・コンプライアンス監視',
      'AWS Audit Manager - 監査・コンプライアンス自動化',
      'AWS CloudTrail - 完全な監査ログ',
      'AWS Security Hub - セキュリティ統合管理',
      'AWS Well-Architected Tool - アーキテクチャ評価',
      'AWS Trusted Advisor - 最適化推奨'
    ],
    correct: [
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. AWS Audit Manager**\n- 金融規制への自動準拠評価\n- 監査証拠の自動収集\n- コンプライアンスレポートの自動生成\n- 継続的な監査プロセス\n- 規制要件のフレームワーク提供\n\n**2. AWS CloudTrail**\n- 全API呼び出しの完全な監査証跡\n- 設定変更の詳細記録\n- 改ざん防止機能\n- 金融規制の監査要件対応\n- 長期保存と検索機能\n\n**他の選択肢について：**\n- **Config**: 設定監視には重要だが、監査自動化の主要機能ではない\n- **Security Hub**: セキュリティ統合には有用だが、監査証跡の主要機能ではない\n- **Well-Architected Tool**: アーキテクチャ評価には有用だが、規制準拠の主要機能ではない\n- **Trusted Advisor**: 最適化推奨には有用だが、コンプライアンス監視の主要機能ではない'
  },
  {
    id: 'adv-mgmt-multi-003',
    category: '管理・ガバナンス',
    question: '大手製造業が、DevOpsチームとセキュリティチームの協業によるクラウドガバナンスを実装しています。以下の要件があります：\n\n**要件：**\n- 開発速度とセキュリティのバランス\n- 承認されたサービスの自動提供\n- セルフサービス型インフラ管理\n- セキュリティ要件の自動適用\n- リソース使用量の最適化\n- 標準化されたデプロイメント\n\nこのDevSecOpsガバナンスに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Service Catalog - 承認済みサービス管理',
      'AWS CloudFormation - インフラ自動化・標準化',
      'AWS Systems Manager - パラメータ管理・自動化',
      'AWS CodePipeline - CI/CDパイプライン',
      'AWS Secrets Manager - 機密情報管理',
      'Amazon Inspector - セキュリティ評価'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Service Catalog**\n- 承認されたサービスの自動提供\n- セルフサービス型インフラ管理\n- セキュリティ要件の事前組み込み\n- 標準化されたサービステンプレート\n- ガバナンス統制の自動化\n\n**2. AWS CloudFormation**\n- インフラの標準化とコード化\n- 一貫性のあるデプロイメント\n- セキュリティ設定の自動適用\n- 変更管理の自動化\n- リソース管理の効率化\n\n**3. AWS Systems Manager**\n- パラメータとシークレットの統合管理\n- 運用タスクの自動化\n- パッチ管理の標準化\n- セキュリティ設定の一元管理\n- インベントリ管理と監視\n\n**他の選択肢について：**\n- **CodePipeline**: CI/CDには重要だが、ガバナンス管理の主要機能ではない\n- **Secrets Manager**: 機密管理には重要だが、統合ガバナンスの主要機能ではない\n- **Inspector**: セキュリティ評価には有用だが、ガバナンス自動化の主要機能ではない'
  },
  {
    id: 'adv-mig-001',
    category: '移行・統合',
    question: '大手金融機関が、レガシーメインフレームシステムのクラウド移行を計画しています。COBOL/JCLアプリケーション、DB2データベース、24時間365日稼働、ゼロダウンタイム移行、金融規制準拠が要件です。最適な移行戦略はどれですか？',
    options: [
      'AWS Mainframe Modernization + Database Migration Service + Application Migration Service + DataSync + Server Migration Service + Migration Hub + Well-Architected Reviewを使用した段階的移行を実施する',
      'Lift and Shift + EC2 + RDS + S3 + CloudFormationを使用した一括移行を実施する',
      'Re-architect + Lambda + DynamoDB + API Gateway + Step Functionsを使用した全面刷新を実施する',
      'Hybrid + Direct Connect + Storage Gateway + DataSync + Outpostsを使用したハイブリッド移行を実施する'
    ],
    correct: 0,
    explanation: '金融機関のメインフレーム移行には、AWS Mainframe Modernization + Database Migration Service + Application Migration Service + DataSync + Server Migration Service + Migration Hub + Well-Architected Reviewの段階的移行が最適です。リスク最小化、業務継続性、規制準拠を実現できます。'
  },
  {
    id: 'adv-mig-002',
    category: '移行・統合',
    question: '大手製造業が、グローバル50拠点のERPシステムをクラウド移行しています。SAP ERP、Oracle Database、複雑なカスタマイゼーション、拠点間データ連携、段階的移行が要件です。最適な移行戦略はどれですか？',
    options: [
      'Migration Hub + Application Discovery Service + Database Migration Service + DataSync + CloudEndure + AWS Professional Services + Well-Architected Reviewを使用する',
      'EC2 + RDS + S3 + Direct Connect + VPNを使用する',
      'Lambda + DynamoDB + API Gateway + Step Functions + EventBridgeを使用する',
      'EKS + Kubernetes + Helm + Istio + Prometheusを使用する'
    ],
    correct: 0,
    explanation: 'グローバルERP移行には、Migration Hub + Application Discovery Service + Database Migration Service + DataSync + CloudEndure + AWS Professional Services + Well-Architected Reviewが最適です。複雑なシステムの段階的移行、リスク管理、ベストプラクティス適用を実現できます。'
  },
  {
    id: 'adv-mig-003',
    category: '移行・統合',
    question: '大手小売チェーンが、オンプレミスデータセンターの完全クラウド移行を実施しています。1000台のサーバー、100TBのデータ、24時間稼働システム、最小ダウンタイムが要件です。最適な移行戦略はどれですか？',
    options: [
      'Application Migration Service + Database Migration Service + DataSync + Snow Family + Migration Hub + CloudEndure + Systems Managerを使用する',
      'EC2 + EBS + S3 + RDS + CloudFormationを使用する',
      'Lambda + DynamoDB + S3 + API Gateway + CloudFrontを使用する',
      'ECS + Fargate + Aurora + ElastiCache + Application Load Balancerを使用する'
    ],
    correct: 0,
    explanation: '大規模データセンター移行には、Application Migration Service + Database Migration Service + DataSync + Snow Family + Migration Hub + CloudEndure + Systems Managerが最適です。大量データ移行、最小ダウンタイム、統合管理を実現できます。'
  },
  {
    id: 'adv-mig-004',
    category: '移行・統合',
    question: '大手ヘルスケア企業が、医療システムのクラウド移行を実施しています。HIPAA準拠、患者データ保護、医療機器連携、ゼロダウンタイム、段階的移行が要件です。最適な移行戦略はどれですか？',
    options: [
      'HealthLake + Migration Hub + Database Migration Service + DataSync + Macie + CloudTrail + KMS + Professional Servicesを使用する',
      'EC2 + RDS + S3 + VPC + IAMを使用する',
      'Lambda + DynamoDB + API Gateway + Cognito + S3を使用する',
      'EKS + Kubernetes + Istio + Prometheus + Grafanaを使用する'
    ],
    correct: 0,
    explanation: '医療システム移行には、HealthLake + Migration Hub + Database Migration Service + DataSync + Macie + CloudTrail + KMS + Professional Servicesが最適です。HIPAA準拠、患者データ保護、医療特化機能を実現できます。'
  },
  {
    id: 'adv-mig-005',
    category: '移行・統合',
    question: '大手メディア企業が、動画配信システムのクラウド移行を実施しています。ペタバイト級動画ファイル、リアルタイム配信、グローバル展開、高可用性が要件です。最適な移行戦略はどれですか？',
    options: [
      'MediaServices + Snow Family + DataSync + CloudFront + S3 Transfer Acceleration + Migration Hub + Professional Servicesを使用する',
      'EC2 + EBS + S3 + CloudFront + Route 53を使用する',
      'Lambda + S3 + CloudFront + API Gateway + DynamoDBを使用する',
      'ECS + Fargate + ALB + Aurora + ElastiCacheを使用する'
    ],
    correct: 0,
    explanation: 'メディア移行には、MediaServices + Snow Family + DataSync + CloudFront + S3 Transfer Acceleration + Migration Hub + Professional Servicesが最適です。大容量動画データ移行、配信最適化、メディア特化機能を実現できます。'
  },
  {
    id: 'adv-mig-006',
    category: '移行・統合',
    question: '大手ゲーム会社が、ゲームサーバーのクラウド移行を実施しています。リアルタイムマルチプレイヤー、グローバル展開、低レイテンシ、高可用性が要件です。最適な移行戦略はどれですか？',
    options: [
      'GameLift + Global Accelerator + Migration Hub + Application Migration Service + CloudEndure + Professional Servicesを使用する',
      'EC2 + Auto Scaling + Application Load Balancer + RDS + ElastiCacheを使用する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFrontを使用する',
      'EKS + Kubernetes + Istio + Prometheus + Grafanaを使用する'
    ],
    correct: 0,
    explanation: 'ゲームサーバー移行には、GameLift + Global Accelerator + Migration Hub + Application Migration Service + CloudEndure + Professional Servicesが最適です。ゲーム特化機能、低レイテンシ、グローバル展開を実現できます。'
  },
  {
    id: 'adv-mig-007',
    category: '移行・統合',
    question: '大手物流会社が、配送管理システムのクラウド移行を実施しています。IoTデバイス連携、リアルタイム追跡、大量データ処理、高可用性が要件です。最適な移行戦略はどれですか？',
    options: [
      'IoT Core + Migration Hub + Database Migration Service + DataSync + Kinesis + Lambda + Professional Servicesを使用する',
      'EC2 + RDS + S3 + Lambda + API Gatewayを使用する',
      'ECS + Fargate + Aurora + ElastiCache + Application Load Balancerを使用する',
      'Lambda + DynamoDB + S3 + API Gateway + CloudFrontを使用する'
    ],
    correct: 0,
    explanation: '物流システム移行には、IoT Core + Migration Hub + Database Migration Service + DataSync + Kinesis + Lambda + Professional Servicesが最適です。IoT統合、リアルタイム処理、物流特化機能を実現できます。'
  },
  {
    id: 'adv-mig-008',
    category: '移行・統合',
    question: '大手エネルギー会社が、スマートグリッドシステムのクラウド移行を実施しています。重要インフラ、高信頼性、リアルタイム制御、セキュリティが要件です。最適な移行戦略はどれですか？',
    options: [
      'IoT Core + Migration Hub + Database Migration Service + Direct Connect + PrivateLink + GuardDuty + Professional Servicesを使用する',
      'EC2 + RDS + VPC + Direct Connect + CloudWatchを使用する',
      'Lambda + DynamoDB + IoT Core + Kinesis + S3を使用する',
      'EKS + Kubernetes + Prometheus + Grafana + Istioを使用する'
    ],
    correct: 0,
    explanation: 'スマートグリッド移行には、IoT Core + Migration Hub + Database Migration Service + Direct Connect + PrivateLink + GuardDuty + Professional Servicesが最適です。重要インフラ対応、高セキュリティ、リアルタイム制御を実現できます。'
  },
  {
    id: 'adv-mig-009',
    category: '移行・統合',
    question: '大手航空会社が、航空管制連携システムのクラウド移行を実施しています。人命に関わる高信頼性、リアルタイム処理、航空規制準拠、ゼロダウンタイムが要件です。最適な移行戦略はどれですか？',
    options: [
      'Migration Hub + Database Migration Service + Direct Connect + PrivateLink + CloudTrail + Config + Professional Servicesを使用する',
      'EC2 + RDS + VPC + Direct Connect + Route 53を使用する',
      'Lambda + DynamoDB + API Gateway + Step Functions + CloudWatchを使用する',
      'EKS + Kubernetes + Istio + Prometheus + Grafanaを使用する'
    ],
    correct: 0,
    explanation: '航空システム移行には、Migration Hub + Database Migration Service + Direct Connect + PrivateLink + CloudTrail + Config + Professional Servicesが最適です。航空規制準拠、高信頼性、ゼロダウンタイム移行を実現できます。'
  },
  {
    id: 'adv-mig-010',
    category: '移行・統合',
    question: '大手政府機関が、国家システムのクラウド移行を実施しています。最高機密レベル、完全な監査証跡、段階的移行、国家安全保障が要件です。最適な移行戦略はどれですか？',
    options: [
      'GovCloud + Migration Hub + Database Migration Service + CloudHSM + CloudTrail + Config + GuardDuty + Professional Servicesを使用する',
      'EC2 + RDS + S3 + VPC + IAMを使用する',
      'Lambda + DynamoDB + API Gateway + KMS + CloudTrailを使用する',
      'EKS + Kubernetes + Vault + Consul + Istioを使用する'
    ],
    correct: 0,
    explanation: '政府システム移行には、GovCloud + Migration Hub + Database Migration Service + CloudHSM + CloudTrail + Config + GuardDuty + Professional Servicesが最適です。最高機密対応、完全監査、国家安全保障要件を実現できます。'
  },
  {
    id: 'adv-mig-multi-001',
    category: '移行・統合',
    question: '大手製造業が、レガシーなメインフレームシステムからAWSへの移行を計画しています。以下の制約があります：\n\n**制約：**\n- 24時間365日稼働が必要（ダウンタイム許容：年間4時間以内）\n- 30年分の履歴データ（500TB）の移行\n- 既存システムとの並行運用期間：6ヶ月\n- 段階的移行による業務影響最小化\n- データ整合性の完全保証\n- 移行後の性能向上要求\n\nこの大規模移行プロジェクトに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'AWS Database Migration Service - 継続的データレプリケーション',
      'AWS Application Migration Service - アプリケーション移行',
      'AWS DataSync - 大容量データ転送',
      'AWS Migration Hub - 移行プロジェクト統合管理',
      'AWS Schema Conversion Tool - データベーススキーマ変換',
      'AWS Snow Family - オフラインデータ転送'
    ],
    correct: [
      0,
      3
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. AWS Database Migration Service (DMS)**\n- 24時間365日稼働中のデータベース移行\n- 継続的データレプリケーション機能\n- ダウンタイム最小化（数分以内）\n- データ整合性の完全保証\n- 異種データベース間の移行対応\n\n**2. AWS Migration Hub**\n- 複雑な移行プロジェクトの統合管理\n- 段階的移行の進捗追跡\n- 複数AWSサービスの統合監視\n- 移行計画の可視化と最適化\n- 6ヶ月間の並行運用期間管理\n\n**他の選択肢について：**\n- **Application Migration Service**: サーバー移行には有用だがメインフレーム移行には不適切\n- **DataSync**: データ転送には有用だが継続的レプリケーションには不適切\n- **Schema Conversion Tool**: スキーマ変換には重要だが移行管理の主要機能ではない\n- **Snow Family**: 大容量転送には有用だが継続的移行には不適切'
  },
  {
    id: 'adv-mig-multi-002',
    category: '移行・統合',
    question: '金融機関が、規制要件を満たしながらクラウド移行を実施しています。以下の要件があります：\n\n**要件：**\n- 金融庁規制への完全準拠\n- 顧客データの暗号化と監査証跡\n- 移行中のセキュリティ確保\n- 業務継続性の保証\n- 段階的移行による影響最小化\n- 移行後のコンプライアンス維持\n\nこの規制準拠移行に必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Control Tower - ガバナンス・コンプライアンス管理',
      'AWS Config - 設定変更監視・コンプライアンス',
      'AWS CloudTrail - 完全な監査ログ',
      'AWS Security Hub - セキュリティ統合管理',
      'AWS Systems Manager - システム管理・自動化',
      'AWS Well-Architected Tool - アーキテクチャ評価'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Control Tower**\n- 金融業界のガバナンス要件対応\n- マルチアカウント環境の統制\n- 規制準拠の自動化\n- セキュリティベースラインの強制\n- 段階的移行の統制管理\n\n**2. AWS Config**\n- 設定変更の継続的監視\n- コンプライアンスルールの自動評価\n- 金融規制要件への準拠確認\n- 設定ドリフトの検知と修正\n- 移行中の設定管理\n\n**3. AWS CloudTrail**\n- 全API呼び出しの完全な監査証跡\n- 金融規制の監査要件対応\n- データアクセスの完全な記録\n- 改ざん防止機能\n- 長期保存と検索機能\n\n**他の選択肢について：**\n- **Security Hub**: セキュリティ統合には有用だが、コンプライアンス管理の主要機能ではない\n- **Systems Manager**: システム管理には重要だが、規制準拠の主要機能ではない\n- **Well-Architected Tool**: アーキテクチャ評価には有用だが、移行管理の主要機能ではない'
  },
  {
    id: 'adv-mig-multi-003',
    category: '移行・統合',
    question: 'グローバル企業が、複数の地域オフィスのシステムを統合クラウド移行しています。以下の課題があります：\n\n**課題：**\n- 各地域の異なる規制要件への対応\n- 時差を考慮した段階的移行\n- 地域間データ主権要件\n- 移行中のネットワーク最適化\n- 統合後の運用効率化\n- 多言語・多通貨対応\n\nこのグローバル移行プロジェクトに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Organizations - マルチアカウント統合管理',
      'AWS Direct Connect - 専用線接続',
      'AWS Global Accelerator - グローバルネットワーク最適化',
      'Amazon CloudFront - グローバルコンテンツ配信',
      'AWS Transit Gateway - ネットワーク統合ハブ',
      'AWS Resource Access Manager - リソース共有管理'
    ],
    correct: [
      0,
      1,
      4
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Organizations**\n- 地域別アカウントの統合管理\n- 地域固有の規制要件対応\n- 統合請求と予算管理\n- セキュリティポリシーの統一\n- ガバナンスの一元化\n\n**2. AWS Direct Connect**\n- 各地域オフィスからの専用線接続\n- 安定した高帯域幅通信\n- 移行中のネットワーク最適化\n- データ主権要件への対応\n- 予測可能な通信コスト\n\n**3. AWS Transit Gateway**\n- 複数地域のネットワーク統合\n- VPC間の効率的な接続\n- 地域間通信の最適化\n- スケーラブルなネットワーク管理\n- 統合後の運用効率化\n\n**他の選択肢について：**\n- **Global Accelerator**: ネットワーク最適化には有用だが、移行管理の主要機能ではない\n- **CloudFront**: コンテンツ配信には有用だが、システム移行の主要機能ではない\n- **Resource Access Manager**: リソース共有には有用だが、移行管理の主要機能ではない'
  },
  {
    id: 'adv-ops-001',
    category: '運用・デプロイ',
    question: '大手eコマース企業が、マイクロサービスのCI/CD基盤を構築しています。100以上のサービス、毎日1000回以上のデプロイ、ゼロダウンタイムデプロイ、自動テスト、ロールバック機能が要件です。最適なCI/CDアーキテクチャはどれですか？',
    options: [
      'CodePipeline + CodeBuild + CodeDeploy + CodeCommit + ECS/EKS + Lambda + Step Functions + X-Ray + CloudWatchを使用し、統合CI/CD基盤を構築する',
      'Jenkins + Docker + Kubernetes + GitLab + Prometheusを使用し、オープンソースCI/CD基盤を構築する',
      'GitHub Actions + Docker Hub + Kubernetes + Helm + Grafanaを使用し、サードパーティCI/CD基盤を構築する',
      '手動デプロイ + FTP + SSH + Cronを使用し、従来型デプロイ基盤を構築する'
    ],
    correct: 0,
    explanation: '大規模マイクロサービスCI/CDには、CodePipeline + CodeBuild + CodeDeploy + CodeCommit + ECS/EKS + Lambda + Step Functions + X-Ray + CloudWatchが最適です。統合管理、自動化、監視、トレーサビリティを実現できます。'
  },
  {
    id: 'adv-ops-002',
    category: '運用・デプロイ',
    question: '大手金融機関が、本番環境の運用自動化を実施しています。24時間365日稼働、自動復旧、パフォーマンス監視、セキュリティ監視、コンプライアンス対応が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'Systems Manager + CloudWatch + X-Ray + GuardDuty + Config + CloudTrail + Lambda + Step Functions + SNS + Incident Managerを使用する',
      'Nagios + Zabbix + ELK Stack + Grafana + Prometheusを使用する',
      'New Relic + Datadog + Splunk + PagerDuty + Slackを使用する',
      '手動監視 + Excel + メール + 電話連絡を使用する'
    ],
    correct: 0,
    explanation: '金融機関の運用自動化には、Systems Manager + CloudWatch + X-Ray + GuardDuty + Config + CloudTrail + Lambda + Step Functions + SNS + Incident Managerが最適です。統合監視、自動対応、コンプライアンス、インシデント管理を実現できます。'
  },
  {
    id: 'adv-ops-003',
    category: '運用・デプロイ',
    question: '大手製造業が、グローバル工場の運用統合を実施しています。50拠点の統合監視、IoTデバイス管理、予知保全、リモート運用が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'Systems Manager + IoT Device Management + CloudWatch + Timestream + SageMaker + Lambda + Step Functions + SNSを使用する',
      'Prometheus + Grafana + InfluxDB + Telegraf + Alertmanagerを使用する',
      'SCADA + HMI + Historian + OPC UA + Modbusを使用する',
      '各拠点独立運用 + 手動レポート + 月次会議を使用する'
    ],
    correct: 0,
    explanation: 'グローバル製造業運用には、Systems Manager + IoT Device Management + CloudWatch + Timestream + SageMaker + Lambda + Step Functions + SNSが最適です。統合監視、IoT管理、予知保全、自動化を実現できます。'
  },
  {
    id: 'adv-ops-004',
    category: '運用・デプロイ',
    question: '大手ヘルスケア企業が、医療システムの運用基盤を構築しています。HIPAA準拠、患者安全、24時間監視、インシデント対応、災害復旧が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'Systems Manager + CloudWatch + GuardDuty + Macie + Config + CloudTrail + Incident Manager + AWS Backupを使用する',
      'Nagios + Zabbix + SIEM + Splunk + PagerDutyを使用する',
      'Prometheus + Grafana + ELK Stack + Jaeger + Fluentdを使用する',
      '手動監視 + 紙ベース記録 + 電話連絡を使用する'
    ],
    correct: 0,
    explanation: '医療システム運用には、Systems Manager + CloudWatch + GuardDuty + Macie + Config + CloudTrail + Incident Manager + AWS Backupが最適です。HIPAA準拠、患者データ保護、統合監視、インシデント管理を実現できます。'
  },
  {
    id: 'adv-ops-005',
    category: '運用・デプロイ',
    question: '大手メディア企業が、ライブ配信サービスの運用基盤を構築しています。リアルタイム監視、品質管理、視聴者体験監視、自動スケーリングが要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'CloudWatch + X-Ray + MediaLive Monitoring + Lambda + Step Functions + Auto Scaling + SNS + Incident Managerを使用する',
      'Prometheus + Grafana + ELK Stack + Jaeger + Alertmanagerを使用する',
      'New Relic + Datadog + Splunk + PagerDuty + Slackを使用する',
      '手動監視 + 視聴者フィードバック + 電話対応を使用する'
    ],
    correct: 0,
    explanation: 'ライブ配信運用には、CloudWatch + X-Ray + MediaLive Monitoring + Lambda + Step Functions + Auto Scaling + SNS + Incident Managerが最適です。リアルタイム監視、品質管理、自動対応、インシデント管理を実現できます。'
  },
  {
    id: 'adv-ops-006',
    category: '運用・デプロイ',
    question: '大手ゲーム会社が、オンラインゲームの運用基盤を構築しています。プレイヤー体験監視、サーバー負荷管理、チート検知、リアルタイム対応が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'GameLift Monitoring + CloudWatch + X-Ray + Lambda + Kinesis + SageMaker + Step Functions + SNSを使用する',
      'Prometheus + Grafana + ELK Stack + Kafka + Spark + Alertmanagerを使用する',
      'New Relic + Datadog + Splunk + Machine Learning + PagerDutyを使用する',
      '手動監視 + プレイヤー報告 + GM対応を使用する'
    ],
    correct: 0,
    explanation: 'ゲーム運用には、GameLift Monitoring + CloudWatch + X-Ray + Lambda + Kinesis + SageMaker + Step Functions + SNSが最適です。ゲーム特化監視、プレイヤー体験管理、チート検知、自動対応を実現できます。'
  },
  {
    id: 'adv-ops-007',
    category: '運用・デプロイ',
    question: '大手物流会社が、配送システムの運用基盤を構築しています。車両監視、配送品質管理、リアルタイム最適化、顧客サービス連携が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'IoT Device Management + CloudWatch + Kinesis + Lambda + Step Functions + Location Service + SNS + Connect + Incident Managerを使用する',
      'Prometheus + Grafana + InfluxDB + Telegraf + Kafka + Alertmanagerを使用する',
      'GPS追跡システム + コールセンター + 手動配車 + 紙ベース管理を使用する',
      'Telematics + Fleet Management + CRM + ERP統合を使用する'
    ],
    correct: 0,
    explanation: '物流運用には、IoT Device Management + CloudWatch + Kinesis + Lambda + Step Functions + Location Service + SNS + Connect + Incident Managerが最適です。車両IoT監視、リアルタイム最適化、顧客サービス統合を実現できます。'
  },
  {
    id: 'adv-ops-008',
    category: '運用・デプロイ',
    question: '大手エネルギー会社が、スマートグリッドの運用基盤を構築しています。電力品質監視、設備監視、需給バランス管理、緊急対応が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'IoT Core + CloudWatch + Timestream + Lambda + Step Functions + Kinesis + SageMaker + SNS + Incident Managerを使用する',
      'SCADA + HMI + Historian + OPC UA + Energy Management Systemを使用する',
      'Prometheus + Grafana + InfluxDB + Telegraf + Alertmanagerを使用する',
      '手動監視 + 電話連絡 + 現地派遣 + 紙ベース記録を使用する'
    ],
    correct: 0,
    explanation: 'スマートグリッド運用には、IoT Core + CloudWatch + Timestream + Lambda + Step Functions + Kinesis + SageMaker + SNS + Incident Managerが最適です。電力監視、需給管理、予測分析、緊急対応を統合的に実現できます。'
  },
  {
    id: 'adv-ops-009',
    category: '運用・デプロイ',
    question: '大手航空会社が、航空システムの運用基盤を構築しています。フライト監視、安全管理、規制準拠、緊急対応、人命に関わる高信頼性が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'Systems Manager + CloudWatch + GuardDuty + Config + CloudTrail + Lambda + Step Functions + SNS + Incident Manager + AWS Supportを使用する',
      'Nagios + Zabbix + SIEM + Splunk + PagerDuty + 24x7 NOCを使用する',
      'Prometheus + Grafana + ELK Stack + Jaeger + Alertmanager + Oncallを使用する',
      '手動監視 + 無線連絡 + 管制官判断 + 紙ベース記録を使用する'
    ],
    correct: 0,
    explanation: '航空システム運用には、Systems Manager + CloudWatch + GuardDuty + Config + CloudTrail + Lambda + Step Functions + SNS + Incident Manager + AWS Supportが最適です。航空安全、規制準拠、高信頼性、緊急対応を実現できます。'
  },
  {
    id: 'adv-ops-010',
    category: '運用・デプロイ',
    question: '大手政府機関が、国家システムの運用基盤を構築しています。最高機密レベル、完全監査、セキュリティ監視、国家安全保障、透明性が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'GovCloud + Systems Manager + CloudWatch + GuardDuty + Macie + Config + CloudTrail + Security Hub + Incident Manager + Professional Supportを使用する',
      'Classified Networks + SIEM + DLP + Endpoint Protection + SOC + 24x7 Monitoringを使用する',
      'Air-gapped Systems + Manual Monitoring + Physical Security + Paper Logs + Secure Communicationsを使用する',
      'Multi-vendor SIEM + Government CERT + Classified Cloud + Secure Enclavesを使用する'
    ],
    correct: 0,
    explanation: '政府システム運用には、GovCloud + Systems Manager + CloudWatch + GuardDuty + Macie + Config + CloudTrail + Security Hub + Incident Manager + Professional Supportが最適です。最高機密対応、完全監査、統合セキュリティ、国家レベル運用を実現できます。'
  },
  {
    id: 'adv-ops-multi-001',
    category: '運用・デプロイ',
    question: '大手金融機関が、24時間365日稼働するミッションクリティカルシステムの運用自動化を実装しています。以下の要件があります：\n\n**要件：**\n- 障害の自動検知と復旧\n- パッチ適用の自動化（ゼロダウンタイム）\n- 設定変更の自動追跡と承認ワークフロー\n- インシデント対応の自動化\n- コンプライアンス監査の自動化\n- 運用コストの最適化\n\nこの高度な運用自動化に必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Systems Manager - 統合システム管理・自動化',
      'AWS Config - 設定管理・コンプライアンス監視',
      'AWS Service Catalog - 承認されたサービス管理',
      'Amazon EventBridge - イベント駆動自動化',
      'AWS CloudFormation - インフラ自動化',
      'AWS OpsWorks - アプリケーション管理'
    ],
    correct: [
      0,
      1,
      3
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Systems Manager**\n- パッチ管理の完全自動化\n- ゼロダウンタイムでの更新適用\n- 運用タスクの自動化\n- セッション管理とアクセス制御\n- インベントリ管理と監視\n\n**2. AWS Config**\n- 設定変更の継続的監視\n- コンプライアンスルールの自動評価\n- 設定ドリフトの自動検知\n- 変更履歴の完全な追跡\n- 金融規制への準拠確認\n\n**3. Amazon EventBridge**\n- イベント駆動による自動化\n- 障害検知時の自動対応\n- システム間の疎結合統合\n- カスタムイベントルールの設定\n- インシデント対応の自動化\n\n**他の選択肢について：**\n- **Service Catalog**: サービス管理には有用だが、運用自動化の主要機能ではない\n- **CloudFormation**: インフラ管理には重要だが、日常運用の主要機能ではない\n- **OpsWorks**: アプリケーション管理には有用だが、統合運用管理には不十分'
  },
  {
    id: 'adv-ops-multi-002',
    category: '運用・デプロイ',
    question: 'グローバル展開するeコマース企業が、多地域での統合運用管理システムを構築しています。以下の要件があります：\n\n**要件：**\n- 複数リージョンでの統合監視\n- 地域別インシデント対応チーム\n- 自動エスカレーション機能\n- 運用メトリクスの統合ダッシュボード\n- 障害時の自動通知と対応\n- 運用効率の継続的改善\n\nこのグローバル運用管理に必要なAWSサービスを**2つ**選択してください。',
    options: [
      'AWS Systems Manager Incident Manager - インシデント管理・対応',
      'Amazon CloudWatch - 統合監視・メトリクス',
      'AWS Chatbot - 自動通知・チャット統合',
      'AWS Personal Health Dashboard - サービス状況監視',
      'AWS Trusted Advisor - 運用最適化推奨',
      'AWS Support - 技術サポート・エスカレーション'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. AWS Systems Manager Incident Manager**\n- インシデントの自動検知と対応\n- 地域別対応チームへの自動エスカレーション\n- インシデント対応プロセスの標準化\n- 対応時間の短縮と効率化\n- ポストモーテム分析の自動化\n\n**2. Amazon CloudWatch**\n- 複数リージョンでの統合監視\n- カスタムメトリクスとダッシュボード\n- 自動アラートと通知機能\n- 運用メトリクスの可視化\n- 障害の早期検知と対応\n\n**他の選択肢について：**\n- **Chatbot**: 通知統合には有用だが、インシデント管理の主要機能ではない\n- **Personal Health Dashboard**: サービス監視には重要だが、統合運用管理には不十分\n- **Trusted Advisor**: 最適化推奨には有用だが、日常運用管理の主要機能ではない\n- **Support**: 技術サポートには重要だが、自動化運用の主要機能ではない'
  },
  {
    id: 'adv-ops-multi-003',
    category: '運用・デプロイ',
    question: '製造業が、IoTデバイスを含む複雑なハイブリッド環境の運用管理を実装しています。以下の要件があります：\n\n**要件：**\n- オンプレミスとクラウドの統合管理\n- IoTデバイスの大規模管理\n- 予知保全による障害予防\n- セキュリティパッチの自動配布\n- エッジデバイスの遠隔管理\n- 運用データの分析と最適化\n\nこのハイブリッド運用管理に必要なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Systems Manager - ハイブリッド環境統合管理',
      'AWS IoT Device Management - IoTデバイス管理',
      'AWS IoT Greengrass - エッジコンピューティング管理',
      'Amazon Lookout for Equipment - 機械学習による異常検知',
      'AWS Outposts - オンプレミス統合',
      'AWS DataSync - データ同期管理'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Systems Manager**\n- オンプレミスとクラウドの統合管理\n- ハイブリッド環境でのパッチ管理\n- セキュリティ更新の自動配布\n- 統合インベントリ管理\n- 運用タスクの自動化\n\n**2. AWS IoT Device Management**\n- 大規模IoTデバイスの管理\n- デバイス登録と認証\n- ファームウェア更新の管理\n- デバイス監視と診断\n- セキュリティポリシーの適用\n\n**3. AWS IoT Greengrass**\n- エッジデバイスの遠隔管理\n- ローカル処理とクラウド統合\n- オフライン時の自律動作\n- エッジでの機械学習実行\n- デバイス間通信の管理\n\n**他の選択肢について：**\n- **Lookout for Equipment**: 異常検知には有用だが、デバイス管理の主要機能ではない\n- **Outposts**: オンプレミス統合には有用だが、IoT管理の主要機能ではない\n- **DataSync**: データ同期には重要だが、デバイス管理の主要機能ではない'
  },
  {
    id: 'adv-uc-001',
    category: 'ユースケース',
    question: '大手自動車メーカーが、コネクテッドカープラットフォームを構築しています。以下の要件があります：\n\n1. 世界中の1000万台の車両からのリアルタイムデータ収集\n2. 車両診断、予知保全、交通最適化\n3. 自動運転支援とV2X通信\n4. プライバシー規制（GDPR、CCPA）への準拠\n5. 地域別データローカライゼーション\n6. 99.99%の可用性とセキュリティ\n7. 機械学習による高度な分析\n\nこの包括的なコネクテッドカーソリューションに最適なアーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + SageMaker + Timestream + Lambda + RoboMaker + Location Service + Macie + GuardDuty + Global Infrastructure + Edge Locationsを使用し、統合コネクテッドカープラットフォームを構築する',
      'EC2 + RDS + S3 + Lambda + API Gateway + CloudWatch + VPCを使用し、従来型車両管理システムを構築する',
      'Kubernetes + Kafka + Spark + Cassandra + TensorFlow + Prometheus + Grafanaを使用し、オープンソース車両プラットフォームを構築する',
      'Azure IoT + Google Cloud AI + AWS Storage + Multi-cloud + Hybrid Architectureを使用し、マルチクラウド車両プラットフォームを構築する'
    ],
    correct: 0,
    explanation: 'コネクテッドカープラットフォームには、IoT Core + Kinesis + SageMaker + Timestream + Lambda + RoboMaker + Location Service + Macie + GuardDuty + Global Infrastructure + Edge Locationsの統合ソリューションが最適です。\n\n理由：\n1. **IoT Core**: 1000万台車両の大規模IoT管理\n2. **Kinesis**: リアルタイムデータストリーミング\n3. **SageMaker**: 予知保全・交通最適化AI\n4. **Timestream**: 車両時系列データ管理\n5. **RoboMaker**: 自動運転シミュレーション\n6. **Location Service**: V2X通信・位置情報処理\n7. **Macie + GuardDuty**: プライバシー保護・セキュリティ\n8. **Global Infrastructure**: 地域別データローカライゼーション'
  },
  {
    id: 'adv-uc-002',
    category: 'ユースケース',
    question: '大手銀行が、次世代デジタルバンキングエコシステムを構築しています。オープンバンキング、リアルタイム決済、AI投資アドバイス、不正検知、規制準拠が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'API Gateway + Lambda + SageMaker + Kinesis + Aurora + DynamoDB + Cognito + KMS + CloudTrail + Macie + GuardDuty + Personalizeを使用する',
      'EC2 + RDS + ElastiCache + Application Load Balancer + CloudWatch + IAMを使用する',
      'Microservices + Kubernetes + Istio + Kafka + Redis + PostgreSQL + Prometheusを使用する',
      'Blockchain + Smart Contracts + DeFi + Cryptocurrency + Distributed Ledgerを使用する'
    ],
    correct: 0,
    explanation: '次世代デジタルバンキングには、API Gateway + Lambda + SageMaker + Kinesis + Aurora + DynamoDB + Cognito + KMS + CloudTrail + Macie + GuardDuty + Personalizeが最適です。オープンAPI、AI分析、セキュリティ、規制準拠を統合的に実現できます。'
  },
  {
    id: 'adv-uc-003',
    category: 'ユースケース',
    question: '大手病院グループが、統合医療プラットフォームを構築しています。電子カルテ統合、テレヘルス、AI診断支援、医療研究、患者ポータルが要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'HealthLake + Comprehend Medical + Transcribe Medical + Rekognition + Connect + Chime + SageMaker + Macie + PrivateLink + KMSを使用する',
      'RDS + Lambda + API Gateway + S3 + CloudFront + Cognito + IAMを使用する',
      'FHIR + HL7 + DICOM + OAuth + SAML + PostgreSQL + Redis + Dockerを使用する',
      'Blockchain + Smart Contracts + Patient Records + Decentralized Identity + Cryptographyを使用する'
    ],
    correct: 0,
    explanation: '統合医療プラットフォームには、HealthLake + Comprehend Medical + Transcribe Medical + Rekognition + Connect + Chime + SageMaker + Macie + PrivateLink + KMSが最適です。医療特化サービス、AI診断、テレヘルス、HIPAA準拠を実現できます。'
  },
  {
    id: 'adv-uc-004',
    category: 'ユースケース',
    question: '大手小売チェーンが、次世代オムニチャネルプラットフォームを構築しています。統合在庫管理、パーソナライゼーション、リアルタイム分析、サプライチェーン最適化が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'EventBridge + Lambda + Personalize + Kinesis + DynamoDB + SageMaker + QuickSight + Supply Chain + Location Service + Forecastを使用する',
      'EC2 + RDS + ElastiCache + Application Load Balancer + S3 + CloudFrontを使用する',
      'Microservices + API Gateway + Kubernetes + Kafka + Redis + Elasticsearch + Grafanaを使用する',
      'ERP + CRM + WMS + POS + BI + ETL + Data Warehouseを使用する'
    ],
    correct: 0,
    explanation: 'オムニチャネル小売には、EventBridge + Lambda + Personalize + Kinesis + DynamoDB + SageMaker + QuickSight + Supply Chain + Location Service + Forecastが最適です。統合イベント処理、AI分析、サプライチェーン最適化を実現できます。'
  },
  {
    id: 'adv-uc-005',
    category: 'ユースケース',
    question: '大手メディア企業が、次世代ストリーミングプラットフォームを構築しています。4K/8K配信、AI推薦、インタラクティブコンテンツ、グローバル展開が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'MediaLive + MediaPackage + CloudFront + Personalize + Rekognition + Transcribe + Translate + Kinesis + Lambda@Edge + IVSを使用する',
      'EC2 + S3 + CloudFront + RDS + ElastiCache + Lambda + API Gatewayを使用する',
      'Kubernetes + Docker + FFmpeg + Nginx + Redis + PostgreSQL + Prometheusを使用する',
      'CDN + Video Encoding + Recommendation Engine + Analytics + Payment Gateway + CMSを使用する'
    ],
    correct: 0,
    explanation: '次世代ストリーミングには、MediaLive + MediaPackage + CloudFront + Personalize + Rekognition + Transcribe + Translate + Kinesis + Lambda@Edge + IVSが最適です。メディア特化サービス、AI機能、グローバル配信、インタラクティブ機能を実現できます。'
  },
  {
    id: 'adv-uc-006',
    category: 'ユースケース',
    question: '大手ゲーム会社が、次世代クラウドゲーミングプラットフォームを構築しています。ストリーミングゲーム、マルチプレイヤー、AI NPC、ブロックチェーン統合が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'GameLift + Global Accelerator + EC2 GPU + Kinesis + DynamoDB + SageMaker + Managed Blockchain + Lambda + API Gatewayを使用する',
      'EC2 + Auto Scaling + Application Load Balancer + RDS + ElastiCache + S3を使用する',
      'Kubernetes + Docker + Unity + Unreal Engine + Redis + PostgreSQL + Prometheusを使用する',
      'Game Engines + Multiplayer Servers + CDN + Analytics + Payment + Social Featuresを使用する'
    ],
    correct: 0,
    explanation: 'クラウドゲーミングには、GameLift + Global Accelerator + EC2 GPU + Kinesis + DynamoDB + SageMaker + Managed Blockchain + Lambda + API Gatewayが最適です。ゲーム特化機能、GPU処理、AI、ブロックチェーン統合を実現できます。'
  },
  {
    id: 'adv-uc-007',
    category: 'ユースケース',
    question: '大手物流会社が、次世代スマート物流プラットフォームを構築しています。自動運転配送、ドローン配送、AI最適化、IoT統合が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'IoT Core + RoboMaker + SageMaker + Location Service + Kinesis + Lambda + Ground Station + Timestream + Forecast + Supply Chainを使用する',
      'EC2 + RDS + S3 + Lambda + API Gateway + CloudWatch + VPCを使用する',
      'Kubernetes + Kafka + Spark + Cassandra + TensorFlow + Prometheus + Grafanaを使用する',
      'WMS + TMS + GPS + Telematics + Route Optimization + Fleet Managementを使用する'
    ],
    correct: 0,
    explanation: 'スマート物流には、IoT Core + RoboMaker + SageMaker + Location Service + Kinesis + Lambda + Ground Station + Timestream + Forecast + Supply Chainが最適です。IoT統合、ロボティクス、AI最適化、衛星通信を実現できます。'
  },
  {
    id: 'adv-uc-008',
    category: 'ユースケース',
    question: '大手エネルギー会社が、次世代スマートグリッドプラットフォームを構築しています。再生可能エネルギー統合、AI需給予測、ブロックチェーン取引、カーボンニュートラルが要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'IoT Core + SageMaker + Forecast + Timestream + Managed Blockchain + Lambda + Kinesis + Ground Station + Sustainability + Carbon Footprintを使用する',
      'EC2 + RDS + S3 + Lambda + API Gateway + CloudWatch + Kinesisを使用する',
      'SCADA + HMI + Historian + Energy Management + Demand Response + Grid Optimizationを使用する',
      'Kubernetes + Kafka + Spark + InfluxDB + TensorFlow + Prometheus + Grafanaを使用する'
    ],
    correct: 0,
    explanation: '次世代スマートグリッドには、IoT Core + SageMaker + Forecast + Timestream + Managed Blockchain + Lambda + Kinesis + Ground Station + Sustainability + Carbon Footprintが最適です。IoT統合、AI予測、ブロックチェーン、持続可能性を実現できます。'
  },
  {
    id: 'adv-uc-009',
    category: 'ユースケース',
    question: '大手航空会社が、次世代航空プラットフォームを構築しています。予測メンテナンス、燃料最適化、乗客体験向上、持続可能性が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'IoT Core + SageMaker + Lookout for Equipment + Personalize + Location Service + Forecast + Sustainability + Carbon Footprint + Connect + Chimeを使用する',
      'EC2 + RDS + S3 + Lambda + API Gateway + CloudWatch + Kinesisを使用する',
      'Aviation MRO + Flight Operations + Passenger Services + Fuel Management + Route Optimizationを使用する',
      'Kubernetes + Kafka + Spark + Cassandra + TensorFlow + Prometheus + Grafanaを使用する'
    ],
    correct: 0,
    explanation: '次世代航空プラットフォームには、IoT Core + SageMaker + Lookout for Equipment + Personalize + Location Service + Forecast + Sustainability + Carbon Footprint + Connect + Chimeが最適です。予知保全、AI最適化、乗客体験、持続可能性を統合的に実現できます。'
  },
  {
    id: 'adv-uc-010',
    category: 'ユースケース',
    question: '大手政府機関が、次世代デジタル政府プラットフォームを構築しています。市民サービス統合、AI行政、ブロックチェーン投票、透明性確保が要件です。最適なソリューションアーキテクチャはどれですか？',
    options: [
      'GovCloud + Cognito + Lambda + SageMaker + Managed Blockchain + Comprehend + Textract + Connect + Chime + Audit Manager + Transparency Reportsを使用する',
      'EC2 + RDS + S3 + Lambda + API Gateway + IAM + CloudTrailを使用する',
      'Digital Identity + e-Government + Citizen Portal + Online Services + Document Management + Workflow Automationを使用する',
      'Kubernetes + Microservices + API Gateway + Database + Analytics + Security + Complianceを使用する'
    ],
    correct: 0,
    explanation: 'デジタル政府プラットフォームには、GovCloud + Cognito + Lambda + SageMaker + Managed Blockchain + Comprehend + Textract + Connect + Chime + Audit Manager + Transparency Reportsが最適です。政府特化環境、AI行政、ブロックチェーン、透明性を実現できます。'
  },
  {
    id: 'adv-usecase-multi-001',
    category: 'ユースケース',
    question: 'スタートアップ企業が、急成長に対応できるスケーラブルなSaaSプラットフォームを構築しています。以下の要件があります：\n\n**要件：**\n- 予測困難なユーザー増加への対応\n- 開発・運用コストの最小化\n- 高い開発速度とデプロイ頻度\n- グローバル展開への対応\n- セキュリティとコンプライアンス\n- データ分析による事業改善\n\nこのSaaSプラットフォームに最適なAWSサービスを**3つ**選択してください。',
    options: [
      'AWS Lambda - サーバーレス実行環境',
      'Amazon CloudFront - グローバルコンテンツ配信',
      'Amazon Cognito - ユーザー認証・管理',
      'Amazon RDS - リレーショナルデータベース',
      'AWS Fargate - サーバーレスコンテナ',
      'Amazon Redshift - データウェアハウス'
    ],
    correct: [
      0,
      1,
      2
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. AWS Lambda**\n- 完全サーバーレスで運用負荷ゼロ\n- 自動スケーリングによる急成長対応\n- 実行時間のみの従量課金\n- 高い開発速度の実現\n- スタートアップに最適なコスト構造\n\n**2. Amazon CloudFront**\n- グローバル展開への即座対応\n- エッジロケーションでの高速配信\n- 自動スケーリングと負荷分散\n- セキュリティ機能の統合\n- コスト効率的な配信\n\n**3. Amazon Cognito**\n- ユーザー認証・管理の完全マネージド\n- ソーシャルログイン統合\n- セキュリティとコンプライアンス対応\n- スケーラブルなユーザー管理\n- 開発工数の大幅削減\n\n**他の選択肢について：**\n- **RDS**: データベースには重要だが、スケーラビリティに限界\n- **Fargate**: コンテナには適しているが、Lambdaがより軽量\n- **Redshift**: データ分析には重要だが、初期段階には不要'
  },
  {
    id: 'adv-usecase-multi-002',
    category: 'ユースケース',
    question: '大手メディア企業が、次世代の動画配信プラットフォームを構築しています。以下の要件があります：\n\n**要件：**\n- 4K/8K動画の世界規模配信\n- リアルタイムライブストリーミング\n- 個人化されたコンテンツレコメンデーション\n- 動画の自動トランスコーディング\n- 視聴分析とビジネスインテリジェンス\n- コンテンツ保護とDRM\n\nこの次世代動画プラットフォームに必要なAWSサービスを**2つ**選択してください。',
    options: [
      'AWS Elemental MediaLive - ライブ動画処理',
      'Amazon Personalize - 機械学習レコメンデーション',
      'Amazon Kinesis Video Streams - 動画ストリーミング',
      'AWS Elemental MediaConvert - 動画トランスコーディング',
      'Amazon QuickSight - ビジネスインテリジェンス',
      'AWS WAF - Webアプリケーション保護'
    ],
    correct: [
      0,
      1
    ],
    multipleChoice: true,
    explanation: '正解は以下の2つです：\n\n**1. AWS Elemental MediaLive**\n- リアルタイムライブストリーミング処理\n- 4K/8K高画質動画の配信対応\n- 自動スケーリングによる視聴者数対応\n- 複数出力形式への同時配信\n- 放送品質の信頼性\n\n**2. Amazon Personalize**\n- 機械学習による個人化レコメンデーション\n- 視聴履歴に基づく自動最適化\n- リアルタイム推奨システム\n- A/Bテスト機能による効果測定\n- メディア業界特化のアルゴリズム\n\n**他の選択肢について：**\n- **Kinesis Video Streams**: 動画取り込みには適しているが、配信には不適切\n- **MediaConvert**: トランスコーディングには重要だが、ライブ配信の主要機能ではない\n- **QuickSight**: 分析には有用だが、動画配信の主要機能ではない\n- **WAF**: セキュリティには重要だが、動画処理の主要機能ではない'
  },
  {
    id: 'adv-usecase-multi-003',
    category: 'ユースケース',
    question: 'ヘルスケア企業が、AI駆動の遠隔医療プラットフォームを構築しています。以下の要件があります：\n\n**要件：**\n- HIPAA規制への完全準拠\n- 医療画像の高速処理・分析\n- リアルタイム診断支援\n- 患者データの安全な管理\n- 医師間のセキュアな情報共有\n- 機械学習による診断精度向上\n\nこのAI遠隔医療プラットフォームに必要なAWSサービスを**3つ**選択してください。',
    options: [
      'Amazon SageMaker - 機械学習プラットフォーム',
      'Amazon Comprehend Medical - 医療テキスト分析',
      'AWS HealthLake - 医療データ統合管理',
      'Amazon Rekognition - 画像・動画分析',
      'Amazon Connect - コンタクトセンター',
      'AWS PrivateLink - プライベート接続'
    ],
    correct: [
      0,
      2,
      5
    ],
    multipleChoice: true,
    explanation: '正解は以下の3つです：\n\n**1. Amazon SageMaker**\n- 医療AI・機械学習モデルの開発\n- 診断支援アルゴリズムの構築\n- 医療画像の高度な分析処理\n- HIPAA準拠の機械学習環境\n- 診断精度向上の継続的改善\n\n**2. AWS HealthLake**\n- 医療データの統合管理\n- FHIR標準による相互運用性\n- 患者データの安全な保存・検索\n- 医療記録の構造化と分析\n- HIPAA規制への完全準拠\n\n**3. AWS PrivateLink**\n- 医療システム間のセキュア接続\n- インターネットを経由しない通信\n- 患者データの高度なプライバシー保護\n- 医師間の安全な情報共有\n- 規制要件への準拠\n\n**他の選択肢について：**\n- **Comprehend Medical**: 医療テキスト分析には有用だが、画像処理の主要機能ではない\n- **Rekognition**: 一般的な画像分析には有用だが、医療特化機能が不足\n- **Connect**: コンタクトセンターには有用だが、診断支援の主要機能ではない'
  }
]

// 上級編問題をグローバル変数として設定
if (typeof window !== 'undefined') {
  window.allAdvancedQuestions = allAdvancedQuestions
} else if (typeof global !== 'undefined') {
  global.allAdvancedQuestions = allAdvancedQuestions
}

// Node.js環境での使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = allAdvancedQuestions
}
