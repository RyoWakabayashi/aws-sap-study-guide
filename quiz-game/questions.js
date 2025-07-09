// AWS Solution Architect Professional 試験対策クイズ問題データ
const quizQuestions = [
  // コンピューティングサービス関連
  {
    id: 1,
    category: 'コンピューティング',
    question: 'サーバーレスでコンテナを実行できるAWSサービスはどれですか？',
    options: ['ECS', 'EKS', 'Fargate', 'Lambda'],
    correct: 2,
    explanation:
      'AWS Fargateは、サーバーを管理することなくコンテナを実行できるサーバーレスコンピューティングエンジンです。'
  },
  {
    id: 2,
    category: 'コンピューティング',
    question: '最大90%のコスト削減が可能なEC2の購入オプションはどれですか？',
    options: [
      'オンデマンド',
      'リザーブドインスタンス',
      'スポットインスタンス',
      'Savings Plans'
    ],
    correct: 2,
    explanation:
      'スポットインスタンスは、未使用のEC2容量を利用することで最大90%のコスト削減が可能です。'
  },
  {
    id: 3,
    category: 'コンピューティング',
    question:
      'ARM Gravitonプロセッサを使用してコストを削減できるEC2インスタンスタイプはどれですか？',
    options: ['M5', 'C5', 'M6g', 'T3'],
    correct: 2,
    explanation:
      'M6gインスタンスはAWS Graviton2プロセッサを使用し、同等のx86ベースインスタンスと比較して最大40%優れた価格性能比を提供します。'
  },
  {
    id: 4,
    category: 'コンピューティング',
    question:
      'バーストパフォーマンスを提供するEC2インスタンスタイプはどれですか？',
    options: ['M5', 'C5', 'T3', 'R5'],
    correct: 2,
    explanation:
      'T3インスタンスは、ベースラインレベルのCPUパフォーマンスを提供し、必要に応じてバーストできる機能を持っています。'
  },
  {
    id: 5,
    category: 'コンピューティング',
    question:
      'Kubernetesクラスターをマネージドで実行できるAWSサービスはどれですか？',
    options: ['ECS', 'EKS', 'Fargate', 'Batch'],
    correct: 1,
    explanation:
      'Amazon EKS（Elastic Kubernetes Service）は、マネージドKubernetesサービスです。'
  },

  // ストレージサービス関連
  {
    id: 6,
    category: 'ストレージ',
    question:
      "99.999999999%（11 9's）の耐久性を提供するAWSストレージサービスはどれですか？",
    options: ['EBS', 'EFS', 'S3', 'FSx'],
    correct: 2,
    explanation:
      "Amazon S3は99.999999999%（11 9's）の耐久性を提供するオブジェクトストレージサービスです。"
  },
  {
    id: 7,
    category: 'ストレージ',
    question:
      'アクセス頻度が不明なデータに最適なS3ストレージクラスはどれですか？',
    options: ['Standard', 'Standard-IA', 'Glacier', 'Intelligent-Tiering'],
    correct: 3,
    explanation:
      'S3 Intelligent-Tieringは、アクセスパターンに基づいて自動的にストレージクラスを移動し、コストを最適化します。'
  },
  {
    id: 8,
    category: 'ストレージ',
    question: '最も安価な長期アーカイブ用S3ストレージクラスはどれですか？',
    options: ['Glacier', 'Glacier Deep Archive', 'Standard-IA', 'One Zone-IA'],
    correct: 1,
    explanation:
      'S3 Glacier Deep Archiveは、長期アーカイブ用の最も安価なストレージクラスです。'
  },
  {
    id: 9,
    category: 'ストレージ',
    question:
      '複数のEC2インスタンスから同時にアクセス可能なファイルシステムはどれですか？',
    options: ['EBS', 'EFS', 'S3', 'Instance Store'],
    correct: 1,
    explanation:
      'Amazon EFS（Elastic File System）は、複数のEC2インスタンスから同時にアクセス可能なNFSファイルシステムです。'
  },
  {
    id: 10,
    category: 'ストレージ',
    question: 'gp2と比較してgp3 EBSボリュームの利点は何ですか？',
    options: [
      'より高い耐久性',
      'より低いコスト',
      'より高いIOPS',
      'すべて正しい'
    ],
    correct: 3,
    explanation:
      'gp3は、gp2と比較して20%低いコスト、独立したIOPS・スループット設定、より高いベースライン性能を提供します。'
  },

  // データベースサービス関連
  {
    id: 11,
    category: 'データベース',
    question:
      'MySQLの5倍、PostgreSQLの3倍の性能を提供するAWSデータベースサービスはどれですか？',
    options: ['RDS', 'Aurora', 'DynamoDB', 'Redshift'],
    correct: 1,
    explanation:
      'Amazon Auroraは、標準的なMySQLの最大5倍、PostgreSQLの最大3倍の性能を提供します。'
  },
  {
    id: 12,
    category: 'データベース',
    question:
      '単一桁ミリ秒のレスポンス時間を提供するNoSQLデータベースはどれですか？',
    options: ['RDS', 'Aurora', 'DynamoDB', 'DocumentDB'],
    correct: 2,
    explanation:
      'Amazon DynamoDBは、単一桁ミリ秒のレスポンス時間を提供するフルマネージドNoSQLデータベースです。'
  },
  {
    id: 13,
    category: 'データベース',
    question: 'MongoDB互換のマネージドデータベースサービスはどれですか？',
    options: ['DynamoDB', 'DocumentDB', 'Neptune', 'Timestream'],
    correct: 1,
    explanation:
      'Amazon DocumentDBは、MongoDB互換のフルマネージドドキュメントデータベースサービスです。'
  },
  {
    id: 14,
    category: 'データベース',
    question: 'グラフデータベースに最適なAWSサービスはどれですか？',
    options: ['DynamoDB', 'DocumentDB', 'Neptune', 'RDS'],
    correct: 2,
    explanation:
      'Amazon Neptuneは、高速で信頼性の高いフルマネージドグラフデータベースサービスです。'
  },
  {
    id: 15,
    category: 'データベース',
    question:
      'ペタバイト規模のデータウェアハウスに最適なAWSサービスはどれですか？',
    options: ['RDS', 'Aurora', 'DynamoDB', 'Redshift'],
    correct: 3,
    explanation:
      'Amazon Redshiftは、ペタバイト規模のデータウェアハウス用に設計されたフルマネージドサービスです。'
  },

  // ネットワーキング関連
  {
    id: 16,
    category: 'ネットワーキング',
    question: 'Layer 7（HTTP/HTTPS）で動作するロードバランサーはどれですか？',
    options: [
      'Classic Load Balancer',
      'Application Load Balancer',
      'Network Load Balancer',
      'Gateway Load Balancer'
    ],
    correct: 1,
    explanation:
      'Application Load Balancer（ALB）は、Layer 7で動作し、HTTP/HTTPSトラフィックの高度なルーティングを提供します。'
  },
  {
    id: 17,
    category: 'ネットワーキング',
    question:
      '超高性能と極低レイテンシを提供するロードバランサーはどれですか？',
    options: ['ALB', 'NLB', 'CLB', 'GWLB'],
    correct: 1,
    explanation:
      'Network Load Balancer（NLB）は、Layer 4で動作し、超高性能と極低レイテンシを提供します。'
  },
  {
    id: 18,
    category: 'ネットワーキング',
    question: '複数のVPCとオンプレミスを統合接続できるサービスはどれですか？',
    options: ['VPC Peering', 'Transit Gateway', 'Direct Connect', 'VPN'],
    correct: 1,
    explanation:
      'AWS Transit Gatewayは、VPCとオンプレミスネットワークを単一のゲートウェイに接続できるサービスです。'
  },
  {
    id: 19,
    category: 'ネットワーキング',
    question: '専用線接続を提供するAWSサービスはどれですか？',
    options: ['VPN', 'Direct Connect', 'Transit Gateway', 'PrivateLink'],
    correct: 1,
    explanation:
      'AWS Direct Connectは、オンプレミスからAWSへの専用ネットワーク接続を提供します。'
  },
  {
    id: 20,
    category: 'ネットワーキング',
    question:
      'グローバルなコンテンツ配信ネットワーク（CDN）サービスはどれですか？',
    options: ['Route 53', 'CloudFront', 'Global Accelerator', 'API Gateway'],
    correct: 1,
    explanation:
      'Amazon CloudFrontは、グローバルなエッジロケーションを使用してコンテンツを配信するCDNサービスです。'
  },

  // セキュリティ関連
  {
    id: 21,
    category: 'セキュリティ',
    question: '暗号化キーを管理するAWSサービスはどれですか？',
    options: ['IAM', 'KMS', 'Secrets Manager', 'Certificate Manager'],
    correct: 1,
    explanation:
      'AWS KMS（Key Management Service）は、暗号化キーの作成と管理を行うマネージドサービスです。'
  },
  {
    id: 22,
    category: 'セキュリティ',
    question: '機械学習を使用して脅威を検知するサービスはどれですか？',
    options: ['CloudTrail', 'Config', 'GuardDuty', 'Inspector'],
    correct: 2,
    explanation:
      'Amazon GuardDutyは、機械学習を使用してAWSアカウントとワークロードの脅威を検知するサービスです。'
  },
  {
    id: 23,
    category: 'セキュリティ',
    question:
      'Webアプリケーションファイアウォール機能を提供するサービスはどれですか？',
    options: ['Shield', 'WAF', 'GuardDuty', 'Macie'],
    correct: 1,
    explanation:
      'AWS WAFは、Webアプリケーションを一般的なWeb攻撃から保護するWebアプリケーションファイアウォールです。'
  },
  {
    id: 24,
    category: 'セキュリティ',
    question: 'DDoS攻撃から保護するAWSサービスはどれですか？',
    options: ['WAF', 'Shield', 'GuardDuty', 'Inspector'],
    correct: 1,
    explanation:
      'AWS Shieldは、DDoS攻撃からAWSで実行されるアプリケーションを保護するマネージドサービスです。'
  },
  {
    id: 25,
    category: 'セキュリティ',
    question: 'S3バケット内の機密データを自動検出するサービスはどれですか？',
    options: ['GuardDuty', 'Inspector', 'Macie', 'Config'],
    correct: 2,
    explanation:
      'Amazon Macieは、機械学習を使用してS3内の機密データを自動的に検出・分類するサービスです。'
  },

  // 監視・ログ関連
  {
    id: 26,
    category: '監視・ログ',
    question: 'AWSリソースの監視とアラートを提供するサービスはどれですか？',
    options: ['CloudTrail', 'CloudWatch', 'Config', 'X-Ray'],
    correct: 1,
    explanation:
      'Amazon CloudWatchは、AWSリソースとアプリケーションの監視サービスです。'
  },
  {
    id: 27,
    category: '監視・ログ',
    question: '分散アプリケーションのトレーシングを行うサービスはどれですか？',
    options: ['CloudWatch', 'CloudTrail', 'X-Ray', 'Config'],
    correct: 2,
    explanation:
      'AWS X-Rayは、分散アプリケーションの分析とデバッグを支援するサービスです。'
  },
  {
    id: 28,
    category: '監視・ログ',
    question: 'AWS API呼び出しのログを記録するサービスはどれですか？',
    options: ['CloudWatch', 'CloudTrail', 'Config', 'VPC Flow Logs'],
    correct: 1,
    explanation:
      'AWS CloudTrailは、AWSアカウントのAPI呼び出しを記録・監視するサービスです。'
  },
  {
    id: 29,
    category: '監視・ログ',
    question: 'AWSリソースの設定変更を追跡するサービスはどれですか？',
    options: ['CloudWatch', 'CloudTrail', 'Config', 'Systems Manager'],
    correct: 2,
    explanation:
      'AWS Configは、AWSリソースの設定を評価、監査、評価するサービスです。'
  },
  {
    id: 30,
    category: '監視・ログ',
    question:
      '実際のユーザーのWebサイト体験を監視するCloudWatchの機能はどれですか？',
    options: ['Metrics', 'Logs', 'Alarms', 'RUM'],
    correct: 3,
    explanation:
      'CloudWatch RUM（Real User Monitoring）は、実際のユーザーのWebアプリケーション体験を監視します。'
  },

  // 移行・統合関連
  {
    id: 31,
    category: '移行・統合',
    question: 'データベース移行を支援するAWSサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Snow Family', 'Storage Gateway'],
    correct: 1,
    explanation:
      'AWS DMS（Database Migration Service）は、データベースの移行を支援するサービスです。'
  },
  {
    id: 32,
    category: '移行・統合',
    question: '大容量データをオフラインで転送するAWSサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Snow Family', 'Direct Connect'],
    correct: 2,
    explanation:
      'AWS Snow Familyは、大容量データをオフラインで安全にAWSに転送するサービスです。'
  },
  {
    id: 33,
    category: '移行・統合',
    question: 'オンプレミスとAWS間でデータを同期するサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Snow Family', 'Storage Gateway'],
    correct: 0,
    explanation:
      'AWS DataSyncは、オンプレミスストレージとAWSストレージサービス間でデータを転送するサービスです。'
  },
  {
    id: 34,
    category: '移行・統合',
    question: 'ハイブリッドクラウドストレージを実現するサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Snow Family', 'Storage Gateway'],
    correct: 3,
    explanation:
      'AWS Storage Gatewayは、オンプレミス環境をAWSクラウドストレージに接続するハイブリッドクラウドストレージサービスです。'
  },
  {
    id: 35,
    category: '移行・統合',
    question: 'アプリケーションを自動的にコンテナ化するサービスはどれですか？',
    options: [
      'App2Container',
      'Application Migration Service',
      'Server Migration Service',
      'DataSync'
    ],
    correct: 0,
    explanation:
      'AWS App2Containerは、既存のアプリケーションを自動的にコンテナ化するサービスです。'
  },

  // 分析・機械学習関連
  {
    id: 36,
    category: '分析・機械学習',
    question:
      'S3データに対してSQLクエリを実行できるサーバーレスサービスはどれですか？',
    options: ['Redshift', 'EMR', 'Athena', 'Glue'],
    correct: 2,
    explanation:
      'Amazon Athenaは、S3のデータに対して標準SQLを使用してクエリを実行できるサーバーレス分析サービスです。'
  },
  {
    id: 37,
    category: '分析・機械学習',
    question:
      'ETL（Extract, Transform, Load）処理を行うサーバーレスサービスはどれですか？',
    options: ['Redshift', 'EMR', 'Athena', 'Glue'],
    correct: 3,
    explanation:
      'AWS Glueは、データの検出、準備、結合を行うフルマネージドETLサービスです。'
  },
  {
    id: 38,
    category: '分析・機械学習',
    question:
      'リアルタイムデータストリーミングを処理するサービスはどれですか？',
    options: ['Kinesis', 'SQS', 'SNS', 'EventBridge'],
    correct: 0,
    explanation:
      'Amazon Kinesisは、リアルタイムでストリーミングデータを収集、処理、分析するサービスです。'
  },
  {
    id: 39,
    category: '分析・機械学習',
    question:
      '機械学習モデルの構築、訓練、デプロイを行うサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'SageMaker', 'Textract'],
    correct: 2,
    explanation:
      'Amazon SageMakerは、機械学習モデルを迅速に構築、訓練、デプロイするためのフルマネージドサービスです。'
  },
  {
    id: 40,
    category: '分析・機械学習',
    question:
      'ビジネスインテリジェンス（BI）ダッシュボードを作成するサービスはどれですか？',
    options: ['QuickSight', 'CloudWatch', 'Grafana', 'Tableau'],
    correct: 0,
    explanation:
      'Amazon QuickSightは、高速でクラウドベースのビジネス分析サービスです。'
  },

  // アプリケーション統合関連
  {
    id: 41,
    category: 'アプリケーション統合',
    question: 'メッセージキューサービスを提供するAWSサービスはどれですか？',
    options: ['SNS', 'SQS', 'EventBridge', 'Step Functions'],
    correct: 1,
    explanation:
      'Amazon SQS（Simple Queue Service）は、フルマネージドメッセージキューサービスです。'
  },
  {
    id: 42,
    category: 'アプリケーション統合',
    question:
      'Pub/Sub（発行/購読）メッセージングを提供するサービスはどれですか？',
    options: ['SNS', 'SQS', 'EventBridge', 'Step Functions'],
    correct: 0,
    explanation:
      'Amazon SNS（Simple Notification Service）は、フルマネージドPub/Subメッセージングサービスです。'
  },
  {
    id: 43,
    category: 'アプリケーション統合',
    question: 'サーバーレスワークフローを構築するサービスはどれですか？',
    options: ['SNS', 'SQS', 'EventBridge', 'Step Functions'],
    correct: 3,
    explanation:
      'AWS Step Functionsは、サーバーレスワークフローを構築するためのサービスです。'
  },
  {
    id: 44,
    category: 'アプリケーション統合',
    question:
      'イベント駆動アーキテクチャを構築するためのサービスはどれですか？',
    options: ['SNS', 'SQS', 'EventBridge', 'Step Functions'],
    correct: 2,
    explanation:
      'Amazon EventBridge（旧CloudWatch Events）は、イベント駆動アプリケーションを構築するためのサーバーレスイベントバスです。'
  },
  {
    id: 45,
    category: 'アプリケーション統合',
    question: 'RESTful APIを作成・管理するサービスはどれですか？',
    options: ['API Gateway', 'CloudFront', 'Route 53', 'ALB'],
    correct: 0,
    explanation:
      'Amazon API Gatewayは、RESTful APIとWebSocket APIを作成、公開、維持、監視、保護するためのサービスです。'
  },

  // 管理・ガバナンス関連
  {
    id: 46,
    category: '管理・ガバナンス',
    question: '複数のAWSアカウントを一元管理するサービスはどれですか？',
    options: ['IAM', 'Organizations', 'Control Tower', 'SSO'],
    correct: 1,
    explanation:
      'AWS Organizationsは、複数のAWSアカウントを一元的に管理するサービスです。'
  },
  {
    id: 47,
    category: '管理・ガバナンス',
    question:
      'マルチアカウント環境のランディングゾーンを設定するサービスはどれですか？',
    options: ['Organizations', 'Control Tower', 'Config', 'CloudFormation'],
    correct: 1,
    explanation:
      'AWS Control Towerは、安全でよく設計されたマルチアカウント環境を設定・管理するサービスです。'
  },
  {
    id: 48,
    category: '管理・ガバナンス',
    question:
      'インフラストラクチャをコードとして管理するサービスはどれですか？',
    options: ['CloudFormation', 'CDK', 'Terraform', 'すべて正しい'],
    correct: 3,
    explanation:
      'CloudFormation、CDK、Terraformはすべて、インフラストラクチャをコードとして管理するためのツールです。'
  },
  {
    id: 49,
    category: '管理・ガバナンス',
    question: 'AWSリソースのコストを分析・最適化するサービスはどれですか？',
    options: ['Cost Explorer', 'Budgets', 'Trusted Advisor', 'すべて正しい'],
    correct: 3,
    explanation:
      'Cost Explorer、Budgets、Trusted Advisorはすべて、AWSコストの分析・最適化に役立つサービスです。'
  },
  {
    id: 50,
    category: '管理・ガバナンス',
    question: 'システム管理タスクを自動化するサービスはどれですか？',
    options: ['Systems Manager', 'OpsWorks', 'CodeDeploy', 'すべて正しい'],
    correct: 3,
    explanation:
      'Systems Manager、OpsWorks、CodeDeployはすべて、システム管理タスクの自動化に使用できます。'
  },

  // 災害復旧・高可用性関連
  {
    id: 51,
    category: '災害復旧',
    question: 'RTO（Recovery Time Objective）とは何を表しますか？',
    options: [
      'データ損失許容時間',
      'システム復旧目標時間',
      'バックアップ頻度',
      '可用性目標'
    ],
    correct: 1,
    explanation: 'RTOは、システム障害から復旧するまでの目標時間を表します。'
  },
  {
    id: 52,
    category: '災害復旧',
    question: '最も低コストな災害復旧戦略はどれですか？',
    options: [
      'Backup and Restore',
      'Pilot Light',
      'Warm Standby',
      'Multi-Site Active/Active'
    ],
    correct: 0,
    explanation: 'Backup and Restoreは最も基本的で低コストな災害復旧戦略です。'
  },
  {
    id: 53,
    category: '災害復旧',
    question: 'ほぼゼロのRTO/RPOを実現する災害復旧戦略はどれですか？',
    options: [
      'Backup and Restore',
      'Pilot Light',
      'Warm Standby',
      'Multi-Site Active/Active'
    ],
    correct: 3,
    explanation:
      'Multi-Site Active/Activeは、複数サイトでの同時稼働により、ほぼゼロのRTO/RPOを実現します。'
  },
  {
    id: 54,
    category: '災害復旧',
    question: 'Aurora Global Databaseの典型的なRPOはどれくらいですか？',
    options: ['1分未満', '5分未満', '15分未満', '1時間未満'],
    correct: 0,
    explanation: 'Aurora Global Databaseは、通常1秒未満のRPOを提供します。'
  },
  {
    id: 55,
    category: '災害復旧',
    question: '3-2-1バックアップルールの「1」は何を表しますか？',
    options: ['1つのバックアップ', '1つの場所', '1つのオフサイト', '1つの媒体'],
    correct: 2,
    explanation:
      '3-2-1ルールの「1」は、1つのオフサイト（遠隔地）バックアップを表します。'
  },

  // コスト最適化関連
  {
    id: 56,
    category: 'コスト最適化',
    question: 'EC2とFargateの両方に適用できる割引プランはどれですか？',
    options: [
      'リザーブドインスタンス',
      'Savings Plans',
      'スポットインスタンス',
      'オンデマンド'
    ],
    correct: 1,
    explanation:
      'Savings Plansは、EC2、Fargate、Lambdaに適用できる柔軟な割引プランです。'
  },
  {
    id: 57,
    category: 'コスト最適化',
    question: 'S3のコストを自動的に最適化するストレージクラスはどれですか？',
    options: ['Standard', 'Standard-IA', 'Glacier', 'Intelligent-Tiering'],
    correct: 3,
    explanation:
      'S3 Intelligent-Tieringは、アクセスパターンに基づいて自動的にコストを最適化します。'
  },
  {
    id: 58,
    category: 'コスト最適化',
    question: 'AWSのコスト異常を自動検知するサービスはどれですか？',
    options: [
      'Cost Explorer',
      'Budgets',
      'Cost Anomaly Detection',
      'Trusted Advisor'
    ],
    correct: 2,
    explanation:
      'AWS Cost Anomaly Detectionは、機械学習を使用してコストの異常を自動検知します。'
  },
  {
    id: 59,
    category: 'コスト最適化',
    question: '未使用のEBSボリュームを特定するのに最適なサービスはどれですか？',
    options: ['CloudWatch', 'Config', 'Trusted Advisor', 'Cost Explorer'],
    correct: 2,
    explanation:
      'AWS Trusted Advisorは、未使用のEBSボリュームなどのコスト最適化の機会を特定します。'
  },
  {
    id: 60,
    category: 'コスト最適化',
    question:
      'データ転送コストを削減するために使用すべきサービスはどれですか？',
    options: ['CloudFront', 'Direct Connect', 'VPC Endpoint', 'すべて正しい'],
    correct: 3,
    explanation:
      'CloudFront、Direct Connect、VPC Endpointはすべてデータ転送コストの削減に役立ちます。'
  },

  // Well-Architected Framework関連
  {
    id: 61,
    category: 'アーキテクチャ',
    question:
      'Well-Architected Frameworkの6つの柱に含まれないものはどれですか？',
    options: [
      '運用上の優秀性',
      'セキュリティ',
      'スケーラビリティ',
      '持続可能性'
    ],
    correct: 2,
    explanation:
      'スケーラビリティは6つの柱には含まれません。6つの柱は：運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化、持続可能性です。'
  },
  {
    id: 62,
    category: 'アーキテクチャ',
    question: '「運用をコードとして実行」はどの柱の原則ですか？',
    options: ['運用上の優秀性', 'セキュリティ', '信頼性', 'パフォーマンス効率'],
    correct: 0,
    explanation:
      '「運用をコードとして実行」は、運用上の優秀性の柱の設計原則です。'
  },
  {
    id: 63,
    category: 'アーキテクチャ',
    question: '「障害から自動復旧」はどの柱の原則ですか？',
    options: ['運用上の優秀性', 'セキュリティ', '信頼性', 'パフォーマンス効率'],
    correct: 2,
    explanation: '「障害から自動復旧」は、信頼性の柱の設計原則です。'
  },
  {
    id: 64,
    category: 'アーキテクチャ',
    question: '「最新技術の民主化」はどの柱の原則ですか？',
    options: ['運用上の優秀性', 'セキュリティ', '信頼性', 'パフォーマンス効率'],
    correct: 3,
    explanation:
      '「最新技術の民主化」は、パフォーマンス効率の柱の設計原則です。'
  },
  {
    id: 65,
    category: 'アーキテクチャ',
    question: 'マイクロサービスアーキテクチャの主な利点はどれですか？',
    options: [
      'シンプルな運用',
      '独立したデプロイ',
      '低い複雑性',
      '統一された技術'
    ],
    correct: 1,
    explanation:
      'マイクロサービスアーキテクチャの主な利点は、各サービスを独立してデプロイできることです。'
  },

  // 特定のユースケース・要件ベースの問題
  {
    id: 66,
    category: 'ユースケース',
    question:
      'リアルタイムチャットアプリケーションに最適なデータベースはどれですか？',
    options: ['RDS MySQL', 'DynamoDB', 'Redshift', 'Aurora'],
    correct: 1,
    explanation:
      'DynamoDBは、低レイテンシと高スループットが要求されるリアルタイムアプリケーションに最適です。'
  },
  {
    id: 67,
    category: 'ユースケース',
    question: '大量の画像・動画ファイルを保存する最適なサービスはどれですか？',
    options: ['EBS', 'EFS', 'S3', 'FSx'],
    correct: 2,
    explanation:
      'S3は、大量の非構造化データ（画像・動画）の保存に最適なオブジェクトストレージです。'
  },
  {
    id: 68,
    category: 'ユースケース',
    question: '機械学習の訓練データを保存するのに最適なサービスはどれですか？',
    options: ['EBS', 'EFS', 'S3', 'FSx for Lustre'],
    correct: 3,
    explanation:
      'FSx for Lustreは、機械学習ワークロードに最適化された高性能ファイルシステムです。'
  },
  {
    id: 69,
    category: 'ユースケース',
    question: '金融取引システムに必要な一貫性レベルはどれですか？',
    options: [
      '結果整合性',
      '強一貫性',
      'セッション一貫性',
      'モノトニック読み取り'
    ],
    correct: 1,
    explanation:
      '金融取引システムでは、データの正確性が重要なため強一貫性が必要です。'
  },
  {
    id: 70,
    category: 'ユースケース',
    question:
      'IoTセンサーからの大量データストリームを処理するサービスはどれですか？',
    options: ['SQS', 'SNS', 'Kinesis', 'EventBridge'],
    correct: 2,
    explanation:
      'Amazon Kinesisは、IoTデバイスからの大量のストリーミングデータをリアルタイムで処理できます。'
  },

  // 追加のサービス特徴問題
  {
    id: 71,
    category: 'コンピューティング',
    question:
      '最大15分間実行できるサーバーレスコンピューティングサービスはどれですか？',
    options: ['Lambda', 'Fargate', 'Batch', 'Step Functions'],
    correct: 0,
    explanation: 'AWS Lambdaの最大実行時間は15分です。'
  },
  {
    id: 72,
    category: 'ストレージ',
    question: '最大16TBまでサポートするEBSボリュームタイプはどれですか？',
    options: ['gp2', 'gp3', 'io1', 'io2'],
    correct: 3,
    explanation:
      'io2 Block Expressは最大64TBまでサポートしますが、一般的なio2は16TBまでです。'
  },
  {
    id: 73,
    category: 'データベース',
    question: 'Apache Cassandra互換のマネージドサービスはどれですか？',
    options: ['DynamoDB', 'DocumentDB', 'Keyspaces', 'Neptune'],
    correct: 2,
    explanation:
      'Amazon Keyspacesは、Apache Cassandra互換のマネージドデータベースサービスです。'
  },
  {
    id: 74,
    category: 'ネットワーキング',
    question: '100% SLAを提供するDNSサービスはどれですか？',
    options: ['Route 53', 'CloudFront', 'Global Accelerator', 'Direct Connect'],
    correct: 0,
    explanation:
      'Amazon Route 53は、100%の可用性SLAを提供する唯一のAWSサービスです。'
  },
  {
    id: 75,
    category: 'セキュリティ',
    question:
      '専用のハードウェアセキュリティモジュールを提供するサービスはどれですか？',
    options: ['KMS', 'CloudHSM', 'Secrets Manager', 'Certificate Manager'],
    correct: 1,
    explanation:
      'AWS CloudHSMは、専用のハードウェアセキュリティモジュールを提供します。'
  },

  // さらに追加の問題（76-100）
  {
    id: 76,
    category: '分析・機械学習',
    question: '音声をテキストに変換するAWSサービスはどれですか？',
    options: ['Polly', 'Transcribe', 'Translate', 'Comprehend'],
    correct: 1,
    explanation:
      'Amazon Transcribeは、音声をテキストに変換する自動音声認識サービスです。'
  },
  {
    id: 77,
    category: '分析・機械学習',
    question: 'テキストを音声に変換するAWSサービスはどれですか？',
    options: ['Polly', 'Transcribe', 'Translate', 'Comprehend'],
    correct: 0,
    explanation: 'Amazon Pollyは、テキストを自然な音声に変換するサービスです。'
  },
  {
    id: 78,
    category: '分析・機械学習',
    question: '画像・動画分析を行うAWSサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'Textract', 'Translate'],
    correct: 1,
    explanation:
      'Amazon Rekognitionは、画像・動画の分析を行う機械学習サービスです。'
  },
  {
    id: 79,
    category: '分析・機械学習',
    question: '文書からテキストを抽出するAWSサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'Textract', 'Translate'],
    correct: 2,
    explanation:
      'Amazon Textractは、文書からテキストとデータを抽出するサービスです。'
  },
  {
    id: 80,
    category: '分析・機械学習',
    question: '自然言語処理を行うAWSサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'Textract', 'Translate'],
    correct: 0,
    explanation:
      'Amazon Comprehendは、自然言語処理を使用してテキストから洞察を抽出するサービスです。'
  },

  // 運用・デプロイメント関連
  {
    id: 81,
    category: '運用・デプロイ',
    question: 'Blue/Greenデプロイメントを自動化するサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 2,
    explanation:
      'AWS CodeDeployは、Blue/Greenデプロイメントを含む様々なデプロイメント戦略を自動化します。'
  },
  {
    id: 82,
    category: '運用・デプロイ',
    question: 'CI/CDパイプラインを構築するサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 3,
    explanation:
      'AWS CodePipelineは、継続的インテグレーション・継続的デプロイメントのパイプラインを構築するサービスです。'
  },
  {
    id: 83,
    category: '運用・デプロイ',
    question: 'ソースコードのビルドを行うサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 1,
    explanation:
      'AWS CodeBuildは、ソースコードのコンパイル、テスト実行、デプロイ可能なパッケージ作成を行うサービスです。'
  },
  {
    id: 84,
    category: '運用・デプロイ',
    question: 'Gitリポジトリをホストするサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 0,
    explanation:
      'AWS CodeCommitは、プライベートGitリポジトリをホストするマネージドサービスです。'
  },
  {
    id: 85,
    category: '運用・デプロイ',
    question:
      'インフラストラクチャの設定ドリフトを検出するサービスはどれですか？',
    options: ['CloudFormation', 'Config', 'Systems Manager', 'OpsWorks'],
    correct: 1,
    explanation:
      'AWS Configは、リソースの設定変更を追跡し、設定ドリフトを検出できます。'
  },

  // エッジコンピューティング・IoT関連
  {
    id: 86,
    category: 'エッジ・IoT',
    question: 'エッジロケーションでLambda関数を実行するサービスはどれですか？',
    options: ['Lambda', 'Lambda@Edge', 'CloudFront Functions', 'Greengrass'],
    correct: 1,
    explanation:
      'Lambda@Edgeは、CloudFrontのエッジロケーションでLambda関数を実行するサービスです。'
  },
  {
    id: 87,
    category: 'エッジ・IoT',
    question: 'IoTデバイス管理を行うAWSサービスはどれですか？',
    options: [
      'IoT Core',
      'IoT Device Management',
      'IoT Analytics',
      'すべて正しい'
    ],
    correct: 3,
    explanation:
      'AWS IoT Core、IoT Device Management、IoT Analyticsはすべて、IoTデバイスの管理・分析に使用されます。'
  },
  {
    id: 88,
    category: 'エッジ・IoT',
    question: 'エッジデバイスでAWSサービスを実行するサービスはどれですか？',
    options: ['IoT Core', 'Greengrass', 'Wavelength', 'Outposts'],
    correct: 1,
    explanation:
      'AWS IoT Greengrassは、エッジデバイスでAWSクラウドサービスを実行できるサービスです。'
  },
  {
    id: 89,
    category: 'エッジ・IoT',
    question:
      '5Gネットワークエッジでアプリケーションを実行するサービスはどれですか？',
    options: ['Local Zones', 'Wavelength', 'Outposts', 'Greengrass'],
    correct: 1,
    explanation:
      'AWS Wavelengthは、5Gネットワークのエッジでアプリケーションを実行するサービスです。'
  },
  {
    id: 90,
    category: 'エッジ・IoT',
    question: 'オンプレミスでAWSサービスを実行するサービスはどれですか？',
    options: ['Local Zones', 'Wavelength', 'Outposts', 'Direct Connect'],
    correct: 2,
    explanation:
      'AWS Outpostsは、オンプレミス環境でAWSのサービス、インフラ、運用モデルを利用できるサービスです。'
  },

  // 追加のセキュリティ・コンプライアンス問題
  {
    id: 91,
    category: 'セキュリティ',
    question: 'EC2インスタンスの脆弱性評価を行うサービスはどれですか？',
    options: ['GuardDuty', 'Inspector', 'Macie', 'Security Hub'],
    correct: 1,
    explanation:
      'Amazon Inspectorは、EC2インスタンスとコンテナイメージの脆弱性評価を行うサービスです。'
  },
  {
    id: 92,
    category: 'セキュリティ',
    question:
      '複数のセキュリティサービスの結果を統合管理するサービスはどれですか？',
    options: ['GuardDuty', 'Inspector', 'Macie', 'Security Hub'],
    correct: 3,
    explanation:
      'AWS Security Hubは、複数のセキュリティサービスからの結果を統合管理するサービスです。'
  },
  {
    id: 93,
    category: 'セキュリティ',
    question: 'データベースの暗号化に使用される透過的暗号化の利点は何ですか？',
    options: [
      '高速な暗号化',
      'アプリケーション変更不要',
      '低コスト',
      '高い互換性'
    ],
    correct: 1,
    explanation:
      '透過的暗号化の主な利点は、アプリケーションコードの変更が不要なことです。'
  },
  {
    id: 94,
    category: 'セキュリティ',
    question: 'APIキーやパスワードを安全に管理するサービスはどれですか？',
    options: [
      'KMS',
      'Secrets Manager',
      'Parameter Store',
      'Certificate Manager'
    ],
    correct: 1,
    explanation:
      'AWS Secrets Managerは、APIキー、パスワード、その他の機密情報を安全に管理するサービスです。'
  },
  {
    id: 95,
    category: 'セキュリティ',
    question: 'SSL/TLS証明書を無料で提供・管理するサービスはどれですか？',
    options: [
      'KMS',
      'Secrets Manager',
      'Parameter Store',
      'Certificate Manager'
    ],
    correct: 3,
    explanation:
      'AWS Certificate Managerは、SSL/TLS証明書を無料で提供・管理するサービスです。'
  },

  // 最後の5問（96-100）
  {
    id: 96,
    category: 'ユースケース',
    question:
      'レガシーアプリケーションをクラウドに移行する最初のステップとして最適な戦略はどれですか？',
    options: ['Rehost', 'Replatform', 'Refactor', 'Repurchase'],
    correct: 0,
    explanation:
      'Rehost（Lift and Shift）は、最小限の変更でレガシーアプリケーションをクラウドに移行する最初のステップとして最適です。'
  },
  {
    id: 97,
    category: 'ユースケース',
    question:
      'グローバルなWebアプリケーションで最低レイテンシを実現するために使用すべきサービスはどれですか？',
    options: ['CloudFront', 'Global Accelerator', 'Route 53', 'すべて正しい'],
    correct: 3,
    explanation:
      'CloudFront、Global Accelerator、Route 53はすべて、グローバルアプリケーションのレイテンシ削減に貢献します。'
  },
  {
    id: 98,
    category: 'ユースケース',
    question:
      'コンプライアンス要件で暗号化キーの完全な制御が必要な場合に使用すべきサービスはどれですか？',
    options: ['KMS', 'CloudHSM', 'Secrets Manager', 'Certificate Manager'],
    correct: 1,
    explanation:
      'AWS CloudHSMは、暗号化キーの完全な制御が必要なコンプライアンス要件に対応します。'
  },
  {
    id: 99,
    category: 'ユースケース',
    question:
      '数百万のIoTデバイスからのデータを収集・処理するのに最適なアーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Lambda',
      'IoT Core + SQS + EC2',
      'IoT Core + SNS + RDS',
      'IoT Core + EventBridge + Aurora'
    ],
    correct: 0,
    explanation:
      'IoT Core + Kinesis + Lambdaの組み合わせは、大量のIoTデータをリアルタイムで処理するのに最適です。'
  },
  {
    id: 100,
    category: 'ユースケース',
    question:
      'マルチテナントSaaSアプリケーションでテナント間のデータ分離を実現する最適な方法はどれですか？',
    options: [
      '単一データベース・行レベルセキュリティ',
      'テナント毎の専用データベース',
      'テナント毎の専用スキーマ',
      '要件により異なる'
    ],
    correct: 3,
    explanation:
      'マルチテナントアーキテクチャでは、セキュリティ要件、コスト、管理複雑性を考慮して最適な分離方法を選択する必要があります。'
  }
]

// allQuestions として使用するための定義
// eslint-disable-next-line no-unused-vars
const allQuestions = quizQuestions
