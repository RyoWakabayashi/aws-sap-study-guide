// AWS Solution Architect Professional 試験対策クイズ問題データ
// 自動生成ファイル - 手動編集しないでください
// 生成日時: 2025-07-09T07:23:18.788Z

// 全問題データ
const allQuestions = [
  {
    id: 'computing-1',
    category: 'コンピューティング',
    question: 'サーバーレスでコンテナを実行できるAWSサービスはどれですか？',
    options: [
      'ECS',
      'EKS',
      'Fargate',
      'Lambda'
    ],
    correct: 2,
    explanation: 'AWS Fargateは、サーバーを管理することなくコンテナを実行できるサーバーレスコンピューティングエンジンです。'
  },
  {
    id: 'computing-2',
    category: 'コンピューティング',
    question: '最大90%のコスト削減が可能なEC2の購入オプションはどれですか？',
    options: [
      'オンデマンド',
      'リザーブドインスタンス',
      'スポットインスタンス',
      'Savings Plans'
    ],
    correct: 2,
    explanation: 'スポットインスタンスは、未使用のEC2容量を利用することで最大90%のコスト削減が可能です。'
  },
  {
    id: 'computing-3',
    category: 'コンピューティング',
    question: 'ARM Gravitonプロセッサを使用してコストを削減できるEC2インスタンスタイプはどれですか？',
    options: [
      'M5',
      'C5',
      'M6g',
      'T3'
    ],
    correct: 2,
    explanation: 'M6gインスタンスはAWS Graviton2プロセッサを使用し、同等のx86ベースインスタンスと比較して最大40%優れた価格性能比を提供します。'
  },
  {
    id: 'computing-4',
    category: 'コンピューティング',
    question: 'バーストパフォーマンスを提供するEC2インスタンスタイプはどれですか？',
    options: [
      'M5',
      'C5',
      'T3',
      'R5'
    ],
    correct: 2,
    explanation: 'T3インスタンスは、ベースラインレベルのCPUパフォーマンスを提供し、必要に応じてバーストできる機能を持っています。'
  },
  {
    id: 'computing-5',
    category: 'コンピューティング',
    question: 'Kubernetesクラスターをマネージドで実行できるAWSサービスはどれですか？',
    options: [
      'ECS',
      'EKS',
      'Fargate',
      'Batch'
    ],
    correct: 1,
    explanation: 'Amazon EKS（Elastic Kubernetes Service）は、マネージドKubernetesサービスです。'
  },
  {
    id: 'computing-6',
    category: 'コンピューティング',
    question: '最大15分間実行できるサーバーレスコンピューティングサービスはどれですか？',
    options: [
      'Lambda',
      'Fargate',
      'Batch',
      'Step Functions'
    ],
    correct: 0,
    explanation: 'AWS Lambdaの最大実行時間は15分です。'
  },
  {
    id: 'storage-1',
    category: 'ストレージ',
    question: '99.999999999%（11 9s）の耐久性を提供するAWSストレージサービスはどれですか？',
    options: [
      'EBS',
      'EFS',
      'S3',
      'FSx'
    ],
    correct: 2,
    explanation: 'Amazon S3は99.999999999%（11 9s）の耐久性を提供するオブジェクトストレージサービスです。'
  },
  {
    id: 'storage-2',
    category: 'ストレージ',
    question: 'アクセス頻度が不明なデータに最適なS3ストレージクラスはどれですか？',
    options: [
      'Standard',
      'Standard-IA',
      'Glacier',
      'Intelligent-Tiering'
    ],
    correct: 3,
    explanation: 'S3 Intelligent-Tieringは、アクセスパターンに基づいて自動的にストレージクラスを移動し、コストを最適化します。'
  },
  {
    id: 'storage-3',
    category: 'ストレージ',
    question: '最も安価な長期アーカイブ用S3ストレージクラスはどれですか？',
    options: [
      'Glacier',
      'Glacier Deep Archive',
      'Standard-IA',
      'One Zone-IA'
    ],
    correct: 1,
    explanation: 'S3 Glacier Deep Archiveは、長期アーカイブ用の最も安価なストレージクラスです。'
  },
  {
    id: 'storage-4',
    category: 'ストレージ',
    question: '複数のEC2インスタンスから同時にアクセス可能なファイルシステムはどれですか？',
    options: [
      'EBS',
      'EFS',
      'S3',
      'Instance Store'
    ],
    correct: 1,
    explanation: 'Amazon EFS（Elastic File System）は、複数のEC2インスタンスから同時にアクセス可能なNFSファイルシステムです。'
  },
  {
    id: 'storage-5',
    category: 'ストレージ',
    question: 'gp2と比較してgp3 EBSボリュームの利点は何ですか？',
    options: [
      'より高い耐久性',
      'より低いコスト',
      'より高いIOPS',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'gp3は、gp2と比較して20%低いコスト、独立したIOPS・スループット設定、より高いベースライン性能を提供します。'
  },
  {
    id: 'storage-6',
    category: 'ストレージ',
    question: '最大16TBまでサポートするEBSボリュームタイプはどれですか？',
    options: [
      'gp2',
      'gp3',
      'io1',
      'io2'
    ],
    correct: 3,
    explanation: 'io2 Block Expressは最大64TBまでサポートしますが、一般的なio2は16TBまでです。'
  },
  {
    id: 'database-1',
    category: 'データベース',
    question: 'MySQLの5倍、PostgreSQLの3倍の性能を提供するAWSデータベースサービスはどれですか？',
    options: [
      'RDS',
      'Aurora',
      'DynamoDB',
      'Redshift'
    ],
    correct: 1,
    explanation: 'Amazon Auroraは、標準的なMySQLの最大5倍、PostgreSQLの最大3倍の性能を提供します。'
  },
  {
    id: 'database-2',
    category: 'データベース',
    question: '単一桁ミリ秒のレスポンス時間を提供するNoSQLデータベースはどれですか？',
    options: [
      'RDS',
      'Aurora',
      'DynamoDB',
      'DocumentDB'
    ],
    correct: 2,
    explanation: 'Amazon DynamoDBは、単一桁ミリ秒のレスポンス時間を提供するフルマネージドNoSQLデータベースです。'
  },
  {
    id: 'database-3',
    category: 'データベース',
    question: 'MongoDB互換のマネージドデータベースサービスはどれですか？',
    options: [
      'DynamoDB',
      'DocumentDB',
      'Neptune',
      'Timestream'
    ],
    correct: 1,
    explanation: 'Amazon DocumentDBは、MongoDB互換のフルマネージドドキュメントデータベースサービスです。'
  },
  {
    id: 'database-4',
    category: 'データベース',
    question: 'グラフデータベースに最適なAWSサービスはどれですか？',
    options: [
      'DynamoDB',
      'DocumentDB',
      'Neptune',
      'RDS'
    ],
    correct: 2,
    explanation: 'Amazon Neptuneは、高速で信頼性の高いフルマネージドグラフデータベースサービスです。'
  },
  {
    id: 'database-5',
    category: 'データベース',
    question: 'ペタバイト規模のデータウェアハウスに最適なAWSサービスはどれですか？',
    options: [
      'RDS',
      'Aurora',
      'DynamoDB',
      'Redshift'
    ],
    correct: 3,
    explanation: 'Amazon Redshiftは、ペタバイト規模のデータウェアハウス用に設計されたフルマネージドサービスです。'
  },
  {
    id: 'database-6',
    category: 'データベース',
    question: 'Apache Cassandra互換のマネージドサービスはどれですか？',
    options: [
      'DynamoDB',
      'DocumentDB',
      'Keyspaces',
      'Neptune'
    ],
    correct: 2,
    explanation: 'Amazon Keyspacesは、Apache Cassandra互換のマネージドデータベースサービスです。'
  },
  {
    id: 'networking-1',
    category: 'ネットワーキング',
    question: 'Layer 7（HTTP/HTTPS）で動作するロードバランサーはどれですか？',
    options: [
      'Classic Load Balancer',
      'Application Load Balancer',
      'Network Load Balancer',
      'Gateway Load Balancer'
    ],
    correct: 1,
    explanation: 'Application Load Balancer（ALB）は、Layer 7で動作し、HTTP/HTTPSトラフィックの高度なルーティングを提供します。'
  },
  {
    id: 'networking-2',
    category: 'ネットワーキング',
    question: '超高性能と極低レイテンシを提供するロードバランサーはどれですか？',
    options: [
      'ALB',
      'NLB',
      'CLB',
      'GWLB'
    ],
    correct: 1,
    explanation: 'Network Load Balancer（NLB）は、Layer 4で動作し、超高性能と極低レイテンシを提供します。'
  },
  {
    id: 'networking-3',
    category: 'ネットワーキング',
    question: '複数のVPCとオンプレミスを統合接続できるサービスはどれですか？',
    options: [
      'VPC Peering',
      'Transit Gateway',
      'Direct Connect',
      'VPN'
    ],
    correct: 1,
    explanation: 'AWS Transit Gatewayは、VPCとオンプレミスネットワークを単一のゲートウェイに接続できるサービスです。'
  },
  {
    id: 'networking-4',
    category: 'ネットワーキング',
    question: '専用線接続を提供するAWSサービスはどれですか？',
    options: [
      'VPN',
      'Direct Connect',
      'Transit Gateway',
      'PrivateLink'
    ],
    correct: 1,
    explanation: 'AWS Direct Connectは、オンプレミスからAWSへの専用ネットワーク接続を提供します。'
  },
  {
    id: 'networking-5',
    category: 'ネットワーキング',
    question: 'グローバルなコンテンツ配信ネットワーク（CDN）サービスはどれですか？',
    options: [
      'Route 53',
      'CloudFront',
      'Global Accelerator',
      'API Gateway'
    ],
    correct: 1,
    explanation: 'Amazon CloudFrontは、グローバルなエッジロケーションを使用してコンテンツを配信するCDNサービスです。'
  },
  {
    id: 'networking-6',
    category: 'ネットワーキング',
    question: '100% SLAを提供するDNSサービスはどれですか？',
    options: [
      'Route 53',
      'CloudFront',
      'Global Accelerator',
      'Direct Connect'
    ],
    correct: 0,
    explanation: 'Amazon Route 53は、100%の可用性SLAを提供する唯一のAWSサービスです。'
  },
  {
    id: 'security-1',
    category: 'セキュリティ',
    question: '暗号化キーを管理するAWSサービスはどれですか？',
    options: [
      'IAM',
      'KMS',
      'Secrets Manager',
      'Certificate Manager'
    ],
    correct: 1,
    explanation: 'AWS KMS（Key Management Service）は、暗号化キーの作成と管理を行うマネージドサービスです。'
  },
  {
    id: 'security-2',
    category: 'セキュリティ',
    question: '機械学習を使用して脅威を検知するサービスはどれですか？',
    options: [
      'CloudTrail',
      'Config',
      'GuardDuty',
      'Inspector'
    ],
    correct: 2,
    explanation: 'Amazon GuardDutyは、機械学習を使用してAWSアカウントとワークロードの脅威を検知するサービスです。'
  },
  {
    id: 'security-3',
    category: 'セキュリティ',
    question: 'Webアプリケーションファイアウォール機能を提供するサービスはどれですか？',
    options: [
      'Shield',
      'WAF',
      'GuardDuty',
      'Macie'
    ],
    correct: 1,
    explanation: 'AWS WAFは、Webアプリケーションを一般的なWeb攻撃から保護するWebアプリケーションファイアウォールです。'
  },
  {
    id: 'security-4',
    category: 'セキュリティ',
    question: 'DDoS攻撃から保護するAWSサービスはどれですか？',
    options: [
      'WAF',
      'Shield',
      'GuardDuty',
      'Inspector'
    ],
    correct: 1,
    explanation: 'AWS Shieldは、DDoS攻撃からAWSで実行されるアプリケーションを保護するマネージドサービスです。'
  },
  {
    id: 'security-5',
    category: 'セキュリティ',
    question: 'S3バケット内の機密データを自動検出するサービスはどれですか？',
    options: [
      'GuardDuty',
      'Inspector',
      'Macie',
      'Config'
    ],
    correct: 2,
    explanation: 'Amazon Macieは、機械学習を使用してS3内の機密データを自動的に検出・分類するサービスです。'
  },
  {
    id: 'security-6',
    category: 'セキュリティ',
    question: '専用のハードウェアセキュリティモジュールを提供するサービスはどれですか？',
    options: [
      'KMS',
      'CloudHSM',
      'Secrets Manager',
      'Certificate Manager'
    ],
    correct: 1,
    explanation: 'AWS CloudHSMは、専用のハードウェアセキュリティモジュールを提供します。'
  },
  {
    id: 'security-7',
    category: 'セキュリティ',
    question: 'EC2インスタンスの脆弱性評価を行うサービスはどれですか？',
    options: [
      'GuardDuty',
      'Inspector',
      'Macie',
      'Security Hub'
    ],
    correct: 1,
    explanation: 'Amazon Inspectorは、EC2インスタンスとコンテナイメージの脆弱性評価を行うサービスです。'
  },
  {
    id: 'security-8',
    category: 'セキュリティ',
    question: '複数のセキュリティサービスの結果を統合管理するサービスはどれですか？',
    options: [
      'GuardDuty',
      'Inspector',
      'Macie',
      'Security Hub'
    ],
    correct: 3,
    explanation: 'AWS Security Hubは、複数のセキュリティサービスからの結果を統合管理するサービスです。'
  },
  {
    id: 'security-9',
    category: 'セキュリティ',
    question: 'APIキーやパスワードを安全に管理するサービスはどれですか？',
    options: [
      'KMS',
      'Secrets Manager',
      'Parameter Store',
      'Certificate Manager'
    ],
    correct: 1,
    explanation: 'AWS Secrets Managerは、APIキー、パスワード、その他の機密情報を安全に管理するサービスです。'
  },
  {
    id: 'security-10',
    category: 'セキュリティ',
    question: 'SSL/TLS証明書を無料で提供・管理するサービスはどれですか？',
    options: [
      'KMS',
      'Secrets Manager',
      'Parameter Store',
      'Certificate Manager'
    ],
    correct: 3,
    explanation: 'AWS Certificate Managerは、SSL/TLS証明書を無料で提供・管理するサービスです。'
  },
  {
    id: 'monitoring-1',
    category: '監視・ログ',
    question: 'AWSリソースの監視とアラートを提供するサービスはどれですか？',
    options: [
      'CloudTrail',
      'CloudWatch',
      'Config',
      'X-Ray'
    ],
    correct: 1,
    explanation: 'Amazon CloudWatchは、AWSリソースとアプリケーションの監視サービスです。'
  },
  {
    id: 'monitoring-2',
    category: '監視・ログ',
    question: '分散アプリケーションのトレーシングを行うサービスはどれですか？',
    options: [
      'CloudWatch',
      'CloudTrail',
      'X-Ray',
      'Config'
    ],
    correct: 2,
    explanation: 'AWS X-Rayは、分散アプリケーションの分析とデバッグを支援するサービスです。'
  },
  {
    id: 'monitoring-3',
    category: '監視・ログ',
    question: 'AWS API呼び出しのログを記録するサービスはどれですか？',
    options: [
      'CloudWatch',
      'CloudTrail',
      'Config',
      'VPC Flow Logs'
    ],
    correct: 1,
    explanation: 'AWS CloudTrailは、AWSアカウントのAPI呼び出しを記録・監視するサービスです。'
  },
  {
    id: 'monitoring-4',
    category: '監視・ログ',
    question: 'AWSリソースの設定変更を追跡するサービスはどれですか？',
    options: [
      'CloudWatch',
      'CloudTrail',
      'Config',
      'Systems Manager'
    ],
    correct: 2,
    explanation: 'AWS Configは、AWSリソースの設定を評価、監査、評価するサービスです。'
  },
  {
    id: 'monitoring-5',
    category: '監視・ログ',
    question: '実際のユーザーのWebサイト体験を監視するCloudWatchの機能はどれですか？',
    options: [
      'Metrics',
      'Logs',
      'Alarms',
      'RUM'
    ],
    correct: 3,
    explanation: 'CloudWatch RUM（Real User Monitoring）は、実際のユーザーのWebアプリケーション体験を監視します。'
  },
  {
    id: 'migration-1',
    category: '移行・統合',
    question: 'データベース移行を支援するAWSサービスはどれですか？',
    options: [
      'DataSync',
      'DMS',
      'Snow Family',
      'Storage Gateway'
    ],
    correct: 1,
    explanation: 'AWS DMS（Database Migration Service）は、データベースの移行を支援するサービスです。'
  },
  {
    id: 'migration-2',
    category: '移行・統合',
    question: '大容量データをオフラインで転送するAWSサービスはどれですか？',
    options: [
      'DataSync',
      'DMS',
      'Snow Family',
      'Direct Connect'
    ],
    correct: 2,
    explanation: 'AWS Snow Familyは、大容量データをオフラインで安全にAWSに転送するサービスです。'
  },
  {
    id: 'migration-3',
    category: '移行・統合',
    question: 'オンプレミスとAWS間でデータを同期するサービスはどれですか？',
    options: [
      'DataSync',
      'DMS',
      'Snow Family',
      'Storage Gateway'
    ],
    correct: 0,
    explanation: 'AWS DataSyncは、オンプレミスストレージとAWSストレージサービス間でデータを転送するサービスです。'
  },
  {
    id: 'migration-4',
    category: '移行・統合',
    question: 'ハイブリッドクラウドストレージを実現するサービスはどれですか？',
    options: [
      'DataSync',
      'DMS',
      'Snow Family',
      'Storage Gateway'
    ],
    correct: 3,
    explanation: 'AWS Storage Gatewayは、オンプレミス環境をAWSクラウドストレージに接続するハイブリッドクラウドストレージサービスです。'
  },
  {
    id: 'migration-5',
    category: '移行・統合',
    question: 'アプリケーションを自動的にコンテナ化するサービスはどれですか？',
    options: [
      'App2Container',
      'Application Migration Service',
      'Server Migration Service',
      'DataSync'
    ],
    correct: 0,
    explanation: 'AWS App2Containerは、既存のアプリケーションを自動的にコンテナ化するサービスです。'
  },
  {
    id: 'analytics-1',
    category: '分析・機械学習',
    question: 'S3データに対してSQLクエリを実行できるサーバーレスサービスはどれですか？',
    options: [
      'Redshift',
      'EMR',
      'Athena',
      'Glue'
    ],
    correct: 2,
    explanation: 'Amazon Athenaは、S3のデータに対して標準SQLを使用してクエリを実行できるサーバーレス分析サービスです。'
  },
  {
    id: 'analytics-2',
    category: '分析・機械学習',
    question: 'ETL（Extract, Transform, Load）処理を行うサーバーレスサービスはどれですか？',
    options: [
      'Redshift',
      'EMR',
      'Athena',
      'Glue'
    ],
    correct: 3,
    explanation: 'AWS Glueは、データの検出、準備、結合を行うフルマネージドETLサービスです。'
  },
  {
    id: 'analytics-3',
    category: '分析・機械学習',
    question: 'リアルタイムデータストリーミングを処理するサービスはどれですか？',
    options: [
      'Kinesis',
      'SQS',
      'SNS',
      'EventBridge'
    ],
    correct: 0,
    explanation: 'Amazon Kinesisは、リアルタイムでストリーミングデータを収集、処理、分析するサービスです。'
  },
  {
    id: 'analytics-4',
    category: '分析・機械学習',
    question: '機械学習モデルの構築、訓練、デプロイを行うサービスはどれですか？',
    options: [
      'Comprehend',
      'Rekognition',
      'SageMaker',
      'Textract'
    ],
    correct: 2,
    explanation: 'Amazon SageMakerは、機械学習モデルを迅速に構築、訓練、デプロイするためのフルマネージドサービスです。'
  },
  {
    id: 'analytics-5',
    category: '分析・機械学習',
    question: 'ビジネスインテリジェンス（BI）ダッシュボードを作成するサービスはどれですか？',
    options: [
      'QuickSight',
      'CloudWatch',
      'Grafana',
      'Tableau'
    ],
    correct: 0,
    explanation: 'Amazon QuickSightは、高速でクラウドベースのビジネス分析サービスです。'
  },
  {
    id: 'analytics-6',
    category: '分析・機械学習',
    question: '音声をテキストに変換するAWSサービスはどれですか？',
    options: [
      'Polly',
      'Transcribe',
      'Translate',
      'Comprehend'
    ],
    correct: 1,
    explanation: 'Amazon Transcribeは、音声をテキストに変換する自動音声認識サービスです。'
  },
  {
    id: 'analytics-7',
    category: '分析・機械学習',
    question: 'テキストを音声に変換するAWSサービスはどれですか？',
    options: [
      'Polly',
      'Transcribe',
      'Translate',
      'Comprehend'
    ],
    correct: 0,
    explanation: 'Amazon Pollyは、テキストを自然な音声に変換するサービスです。'
  },
  {
    id: 'analytics-8',
    category: '分析・機械学習',
    question: '画像・動画分析を行うAWSサービスはどれですか？',
    options: [
      'Comprehend',
      'Rekognition',
      'Textract',
      'Translate'
    ],
    correct: 1,
    explanation: 'Amazon Rekognitionは、画像・動画の分析を行う機械学習サービスです。'
  },
  {
    id: 'analytics-9',
    category: '分析・機械学習',
    question: '文書からテキストを抽出するAWSサービスはどれですか？',
    options: [
      'Comprehend',
      'Rekognition',
      'Textract',
      'Translate'
    ],
    correct: 2,
    explanation: 'Amazon Textractは、文書からテキストとデータを抽出するサービスです。'
  },
  {
    id: 'analytics-10',
    category: '分析・機械学習',
    question: '自然言語処理を行うAWSサービスはどれですか？',
    options: [
      'Comprehend',
      'Rekognition',
      'Textract',
      'Translate'
    ],
    correct: 0,
    explanation: 'Amazon Comprehendは、自然言語処理を使用してテキストから洞察を抽出するサービスです。'
  },
  {
    id: 'integration-1',
    category: 'アプリケーション統合',
    question: 'メッセージキューサービスを提供するAWSサービスはどれですか？',
    options: [
      'SNS',
      'SQS',
      'EventBridge',
      'Step Functions'
    ],
    correct: 1,
    explanation: 'Amazon SQS（Simple Queue Service）は、フルマネージドメッセージキューサービスです。'
  },
  {
    id: 'integration-2',
    category: 'アプリケーション統合',
    question: 'Pub/Sub（発行/購読）メッセージングを提供するサービスはどれですか？',
    options: [
      'SNS',
      'SQS',
      'EventBridge',
      'Step Functions'
    ],
    correct: 0,
    explanation: 'Amazon SNS（Simple Notification Service）は、フルマネージドPub/Subメッセージングサービスです。'
  },
  {
    id: 'integration-3',
    category: 'アプリケーション統合',
    question: 'サーバーレスワークフローを構築するサービスはどれですか？',
    options: [
      'SNS',
      'SQS',
      'EventBridge',
      'Step Functions'
    ],
    correct: 3,
    explanation: 'AWS Step Functionsは、サーバーレスワークフローを構築するためのサービスです。'
  },
  {
    id: 'integration-4',
    category: 'アプリケーション統合',
    question: 'イベント駆動アーキテクチャを構築するためのサービスはどれですか？',
    options: [
      'SNS',
      'SQS',
      'EventBridge',
      'Step Functions'
    ],
    correct: 2,
    explanation: 'Amazon EventBridge（旧CloudWatch Events）は、イベント駆動アプリケーションを構築するためのサーバーレスイベントバスです。'
  },
  {
    id: 'integration-5',
    category: 'アプリケーション統合',
    question: 'RESTful APIを作成・管理するサービスはどれですか？',
    options: [
      'API Gateway',
      'CloudFront',
      'Route 53',
      'ALB'
    ],
    correct: 0,
    explanation: 'Amazon API Gatewayは、RESTful APIとWebSocket APIを作成、公開、維持、監視、保護するためのサービスです。'
  },
  {
    id: 'management-1',
    category: '管理・ガバナンス',
    question: '複数のAWSアカウントを一元管理するサービスはどれですか？',
    options: [
      'IAM',
      'Organizations',
      'Control Tower',
      'SSO'
    ],
    correct: 1,
    explanation: 'AWS Organizationsは、複数のAWSアカウントを一元的に管理するサービスです。'
  },
  {
    id: 'management-2',
    category: '管理・ガバナンス',
    question: 'マルチアカウント環境のランディングゾーンを設定するサービスはどれですか？',
    options: [
      'Organizations',
      'Control Tower',
      'Config',
      'CloudFormation'
    ],
    correct: 1,
    explanation: 'AWS Control Towerは、安全でよく設計されたマルチアカウント環境を設定・管理するサービスです。'
  },
  {
    id: 'management-3',
    category: '管理・ガバナンス',
    question: 'インフラストラクチャをコードとして管理するサービスはどれですか？',
    options: [
      'CloudFormation',
      'CDK',
      'Terraform',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'CloudFormation、CDK、Terraformはすべて、インフラストラクチャをコードとして管理するためのツールです。'
  },
  {
    id: 'management-4',
    category: '管理・ガバナンス',
    question: 'AWSリソースのコストを分析・最適化するサービスはどれですか？',
    options: [
      'Cost Explorer',
      'Budgets',
      'Trusted Advisor',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Cost Explorer、Budgets、Trusted Advisorはすべて、AWSコストの分析・最適化に役立つサービスです。'
  },
  {
    id: 'management-5',
    category: '管理・ガバナンス',
    question: 'システム管理タスクを自動化するサービスはどれですか？',
    options: [
      'Systems Manager',
      'OpsWorks',
      'CodeDeploy',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Systems Manager、OpsWorks、CodeDeployはすべて、システム管理タスクの自動化に使用できます。'
  },
  {
    id: 'disaster-recovery-1',
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
    id: 'disaster-recovery-2',
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
    id: 'disaster-recovery-3',
    category: '災害復旧',
    question: 'ほぼゼロのRTO/RPOを実現する災害復旧戦略はどれですか？',
    options: [
      'Backup and Restore',
      'Pilot Light',
      'Warm Standby',
      'Multi-Site Active/Active'
    ],
    correct: 3,
    explanation: 'Multi-Site Active/Activeは、複数サイトでの同時稼働により、ほぼゼロのRTO/RPOを実現します。'
  },
  {
    id: 'disaster-recovery-4',
    category: '災害復旧',
    question: 'Aurora Global Databaseの典型的なRPOはどれくらいですか？',
    options: [
      '1分未満',
      '5分未満',
      '15分未満',
      '1時間未満'
    ],
    correct: 0,
    explanation: 'Aurora Global Databaseは、通常1秒未満のRPOを提供します。'
  },
  {
    id: 'disaster-recovery-5',
    category: '災害復旧',
    question: '3-2-1バックアップルールの「1」は何を表しますか？',
    options: [
      '1つのバックアップ',
      '1つの場所',
      '1つのオフサイト',
      '1つの媒体'
    ],
    correct: 2,
    explanation: '3-2-1ルールの「1」は、1つのオフサイト（遠隔地）バックアップを表します。'
  },
  {
    id: 'cost-optimization-1',
    category: 'コスト最適化',
    question: 'EC2とFargateの両方に適用できる割引プランはどれですか？',
    options: [
      'リザーブドインスタンス',
      'Savings Plans',
      'スポットインスタンス',
      'オンデマンド'
    ],
    correct: 1,
    explanation: 'Savings Plansは、EC2、Fargate、Lambdaに適用できる柔軟な割引プランです。'
  },
  {
    id: 'cost-optimization-2',
    category: 'コスト最適化',
    question: 'S3のコストを自動的に最適化するストレージクラスはどれですか？',
    options: [
      'Standard',
      'Standard-IA',
      'Glacier',
      'Intelligent-Tiering'
    ],
    correct: 3,
    explanation: 'S3 Intelligent-Tieringは、アクセスパターンに基づいて自動的にコストを最適化します。'
  },
  {
    id: 'cost-optimization-3',
    category: 'コスト最適化',
    question: 'AWSのコスト異常を自動検知するサービスはどれですか？',
    options: [
      'Cost Explorer',
      'Budgets',
      'Cost Anomaly Detection',
      'Trusted Advisor'
    ],
    correct: 2,
    explanation: 'AWS Cost Anomaly Detectionは、機械学習を使用してコストの異常を自動検知します。'
  },
  {
    id: 'cost-optimization-4',
    category: 'コスト最適化',
    question: '未使用のEBSボリュームを特定するのに最適なサービスはどれですか？',
    options: [
      'CloudWatch',
      'Config',
      'Trusted Advisor',
      'Cost Explorer'
    ],
    correct: 2,
    explanation: 'AWS Trusted Advisorは、未使用のEBSボリュームなどのコスト最適化の機会を特定します。'
  },
  {
    id: 'cost-optimization-5',
    category: 'コスト最適化',
    question: 'データ転送コストを削減するために使用すべきサービスはどれですか？',
    options: [
      'CloudFront',
      'Direct Connect',
      'VPC Endpoint',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'CloudFront、Direct Connect、VPC Endpointはすべてデータ転送コストの削減に役立ちます。'
  },
  {
    id: 'architecture-1',
    category: 'アーキテクチャ',
    question: 'Well-Architected Frameworkの6つの柱に含まれないものはどれですか？',
    options: [
      '運用上の優秀性',
      'セキュリティ',
      'スケーラビリティ',
      '持続可能性'
    ],
    correct: 2,
    explanation: 'スケーラビリティは6つの柱には含まれません。6つの柱は：運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化、持続可能性です。'
  },
  {
    id: 'architecture-2',
    category: 'アーキテクチャ',
    question: '「運用をコードとして実行」はどの柱の原則ですか？',
    options: [
      '運用上の優秀性',
      'セキュリティ',
      '信頼性',
      'パフォーマンス効率'
    ],
    correct: 0,
    explanation: '「運用をコードとして実行」は、運用上の優秀性の柱の設計原則です。'
  },
  {
    id: 'architecture-3',
    category: 'アーキテクチャ',
    question: '「障害から自動復旧」はどの柱の原則ですか？',
    options: [
      '運用上の優秀性',
      'セキュリティ',
      '信頼性',
      'パフォーマンス効率'
    ],
    correct: 2,
    explanation: '「障害から自動復旧」は、信頼性の柱の設計原則です。'
  },
  {
    id: 'architecture-4',
    category: 'アーキテクチャ',
    question: '「最新技術の民主化」はどの柱の原則ですか？',
    options: [
      '運用上の優秀性',
      'セキュリティ',
      '信頼性',
      'パフォーマンス効率'
    ],
    correct: 3,
    explanation: '「最新技術の民主化」は、パフォーマンス効率の柱の設計原則です。'
  },
  {
    id: 'architecture-5',
    category: 'アーキテクチャ',
    question: 'マイクロサービスアーキテクチャの主な利点はどれですか？',
    options: [
      'シンプルな運用',
      '独立したデプロイ',
      '低い複雑性',
      '統一された技術'
    ],
    correct: 1,
    explanation: 'マイクロサービスアーキテクチャの主な利点は、各サービスを独立してデプロイできることです。'
  },
  {
    id: 'use-cases-1',
    category: 'ユースケース',
    question: 'リアルタイムチャットアプリケーションに最適なデータベースはどれですか？',
    options: [
      'RDS MySQL',
      'DynamoDB',
      'Redshift',
      'Aurora'
    ],
    correct: 1,
    explanation: 'DynamoDBは、低レイテンシと高スループットが要求されるリアルタイムアプリケーションに最適です。'
  },
  {
    id: 'use-cases-2',
    category: 'ユースケース',
    question: '大量の画像・動画ファイルを保存する最適なサービスはどれですか？',
    options: [
      'EBS',
      'EFS',
      'S3',
      'FSx'
    ],
    correct: 2,
    explanation: 'S3は、大量の非構造化データ（画像・動画）の保存に最適なオブジェクトストレージです。'
  },
  {
    id: 'use-cases-3',
    category: 'ユースケース',
    question: '機械学習の訓練データを保存するのに最適なサービスはどれですか？',
    options: [
      'EBS',
      'EFS',
      'S3',
      'FSx for Lustre'
    ],
    correct: 3,
    explanation: 'FSx for Lustreは、機械学習ワークロードに最適化された高性能ファイルシステムです。'
  },
  {
    id: 'use-cases-4',
    category: 'ユースケース',
    question: '金融取引システムに必要な一貫性レベルはどれですか？',
    options: [
      '結果整合性',
      '強一貫性',
      'セッション一貫性',
      'モノトニック読み取り'
    ],
    correct: 1,
    explanation: '金融取引システムでは、データの正確性が重要なため強一貫性が必要です。'
  },
  {
    id: 'use-cases-5',
    category: 'ユースケース',
    question: 'IoTセンサーからの大量データストリームを処理するサービスはどれですか？',
    options: [
      'SQS',
      'SNS',
      'Kinesis',
      'EventBridge'
    ],
    correct: 2,
    explanation: 'Amazon Kinesisは、IoTデバイスからの大量のストリーミングデータをリアルタイムで処理できます。'
  },
  {
    id: 'use-cases-6',
    category: 'ユースケース',
    question: 'レガシーアプリケーションをクラウドに移行する最初のステップとして最適な戦略はどれですか？',
    options: [
      'Rehost',
      'Replatform',
      'Refactor',
      'Repurchase'
    ],
    correct: 0,
    explanation: 'Rehost（Lift and Shift）は、最小限の変更でレガシーアプリケーションをクラウドに移行する最初のステップとして最適です。'
  },
  {
    id: 'use-cases-7',
    category: 'ユースケース',
    question: 'グローバルなWebアプリケーションで最低レイテンシを実現するために使用すべきサービスはどれですか？',
    options: [
      'CloudFront',
      'Global Accelerator',
      'Route 53',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'CloudFront、Global Accelerator、Route 53はすべて、グローバルアプリケーションのレイテンシ削減に貢献します。'
  },
  {
    id: 'use-cases-8',
    category: 'ユースケース',
    question: 'コンプライアンス要件で暗号化キーの完全な制御が必要な場合に使用すべきサービスはどれですか？',
    options: [
      'KMS',
      'CloudHSM',
      'Secrets Manager',
      'Certificate Manager'
    ],
    correct: 1,
    explanation: 'AWS CloudHSMは、暗号化キーの完全な制御が必要なコンプライアンス要件に対応します。'
  },
  {
    id: 'use-cases-9',
    category: 'ユースケース',
    question: '数百万のIoTデバイスからのデータを収集・処理するのに最適なアーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + Lambda',
      'IoT Core + SQS + EC2',
      'IoT Core + SNS + RDS',
      'IoT Core + EventBridge + Aurora'
    ],
    correct: 0,
    explanation: 'IoT Core + Kinesis + Lambdaの組み合わせは、大量のIoTデータをリアルタイムで処理するのに最適です。'
  },
  {
    id: 'use-cases-10',
    category: 'ユースケース',
    question: 'マルチテナントSaaSアプリケーションでテナント間のデータ分離を実現する最適な方法はどれですか？',
    options: [
      '単一データベース・行レベルセキュリティ',
      'テナント毎の専用データベース',
      'テナント毎の専用スキーマ',
      '要件により異なる'
    ],
    correct: 3,
    explanation: 'マルチテナントアーキテクチャでは、セキュリティ要件、コスト、管理複雑性を考慮して最適な分離方法を選択する必要があります。'
  },
  {
    id: 'operations-1',
    category: '運用・デプロイ',
    question: 'Blue/Greenデプロイメントを自動化するサービスはどれですか？',
    options: [
      'CodeCommit',
      'CodeBuild',
      'CodeDeploy',
      'CodePipeline'
    ],
    correct: 2,
    explanation: 'AWS CodeDeployは、Blue/Greenデプロイメントを含む様々なデプロイメント戦略を自動化します。'
  },
  {
    id: 'operations-2',
    category: '運用・デプロイ',
    question: 'CI/CDパイプラインを構築するサービスはどれですか？',
    options: [
      'CodeCommit',
      'CodeBuild',
      'CodeDeploy',
      'CodePipeline'
    ],
    correct: 3,
    explanation: 'AWS CodePipelineは、継続的インテグレーション・継続的デプロイメントのパイプラインを構築するサービスです。'
  },
  {
    id: 'operations-3',
    category: '運用・デプロイ',
    question: 'ソースコードのビルドを行うサービスはどれですか？',
    options: [
      'CodeCommit',
      'CodeBuild',
      'CodeDeploy',
      'CodePipeline'
    ],
    correct: 1,
    explanation: 'AWS CodeBuildは、ソースコードのコンパイル、テスト実行、デプロイ可能なパッケージ作成を行うサービスです。'
  },
  {
    id: 'operations-4',
    category: '運用・デプロイ',
    question: 'Gitリポジトリをホストするサービスはどれですか？',
    options: [
      'CodeCommit',
      'CodeBuild',
      'CodeDeploy',
      'CodePipeline'
    ],
    correct: 0,
    explanation: 'AWS CodeCommitは、プライベートGitリポジトリをホストするマネージドサービスです。'
  },
  {
    id: 'operations-5',
    category: '運用・デプロイ',
    question: 'インフラストラクチャの設定ドリフトを検出するサービスはどれですか？',
    options: [
      'CloudFormation',
      'Config',
      'Systems Manager',
      'OpsWorks'
    ],
    correct: 1,
    explanation: 'AWS Configは、リソースの設定変更を追跡し、設定ドリフトを検出できます。'
  }
]

// カテゴリ別統計
const questionStats = {
  コンピューティング: 6,
  ストレージ: 6,
  データベース: 6,
  ネットワーキング: 6,
  セキュリティ: 10,
  監視・ログ: 5,
  移行・統合: 5,
  分析・機械学習: 10,
  アプリケーション統合: 5,
  管理・ガバナンス: 5,
  災害復旧: 5,
  コスト最適化: 5,
  アーキテクチャ: 5,
  ユースケース: 10,
  運用・デプロイ: 5
}

// ユーティリティ関数
const getQuestionStats = () => questionStats

const getQuestionsByCategory = (category) => {
  return allQuestions.filter(q => q.category === category)
}

const getRandomQuestions = (count = 10) => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const getRandomQuestionsByCategory = (category, count = 5) => {
  const categoryQuestions = getQuestionsByCategory(category)
  const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const getAllCategories = () => {
  return Object.keys(questionStats)
}

const getQuestionById = (id) => {
  return allQuestions.find(q => q.id === id)
}

// デバッグ用関数
const validateQuestions = () => {
  const errors = []
  const usedIds = new Set()

  allQuestions.forEach((question, index) => {
    // ID重複チェック
    if (usedIds.has(question.id)) {
      errors.push(`Duplicate ID: ${question.id}`)
    } else {
      usedIds.add(question.id)
    }

    // 必須フィールドチェック
    const requiredFields = ['id', 'category', 'question', 'options', 'correct', 'explanation']
    requiredFields.forEach(field => {
      if (!(field in question)) {
        errors.push(`Question ${index + 1}: Missing field '${field}'`)
      }
    })

    // 選択肢数チェック
    if (!Array.isArray(question.options) || question.options.length !== 4) {
      errors.push(`Question ${index + 1}: Must have exactly 4 options`)
    }

    // 正解インデックスチェック
    if (typeof question.correct !== 'number' || question.correct < 0 || question.correct > 3) {
      errors.push(`Question ${index + 1}: Correct answer index must be 0-3`)
    }
  })

  return errors
}

// グローバルスコープで利用可能にする
if (typeof window !== 'undefined') {
  window.allQuestions = allQuestions
  window.questionStats = questionStats
  window.getQuestionStats = getQuestionStats
  window.getQuestionsByCategory = getQuestionsByCategory
  window.getRandomQuestions = getRandomQuestions
  window.getRandomQuestionsByCategory = getRandomQuestionsByCategory
  window.getAllCategories = getAllCategories
  window.getQuestionById = getQuestionById
  window.validateQuestions = validateQuestions
}
