// ユースケース関連の問題
const useCasesQuestions = [
  {
    id: 'use-cases-1',
    category: 'ユースケース',
    question: 'リアルタイムチャットアプリケーションに最適なデータベースはどれですか？',
    options: ['RDS', 'DynamoDB', 'Redshift', 'Neptune'],
    correct: 1,
    explanation: 'DynamoDBは、低レイテンシと高スループットを提供するため、リアルタイムチャットアプリケーションに最適です。'
  },
  {
    id: 'use-cases-2',
    category: 'ユースケース',
    question: '大量の画像・動画ファイルを保存する最適なサービスはどれですか？',
    options: ['EBS', 'EFS', 'S3', 'FSx'],
    correct: 2,
    explanation: 'S3は、大量のメディアファイルを安価で耐久性高く保存できるオブジェクトストレージサービスです。'
  },
  {
    id: 'use-cases-3',
    category: 'ユースケース',
    question: '機械学習の訓練データを保存するのに最適なサービスはどれですか？',
    options: ['RDS', 'DynamoDB', 'S3', 'Redshift'],
    correct: 2,
    explanation: 'S3は、大量の訓練データを安価で保存でき、機械学習サービスとの統合も優れています。'
  },
  {
    id: 'use-cases-4',
    category: 'ユースケース',
    question: '金融取引システムに必要な一貫性レベルはどれですか？',
    options: ['結果整合性', '強整合性', 'セッション整合性', '単調読み取り整合性'],
    correct: 1,
    explanation: '金融取引では、データの正確性が重要なため、強整合性が必要です。'
  },
  {
    id: 'use-cases-5',
    category: 'ユースケース',
    question: 'IoTセンサーからの大量データストリームを処理するサービスはどれですか？',
    options: ['SQS', 'SNS', 'Kinesis', 'EventBridge'],
    correct: 2,
    explanation: 'Kinesisは、IoTデバイスからの大量のストリーミングデータをリアルタイムで処理できます。'
  },
  {
    id: 'use-cases-6',
    category: 'ユースケース',
    question: 'レガシーアプリケーションをクラウドに移行する最初のステップとして最適な戦略はどれですか？',
    options: ['Rehost', 'Replatform', 'Refactor', 'Rebuild'],
    correct: 0,
    explanation: 'Rehost（Lift and Shift）は、最小限の変更でクラウドに移行する最初のステップとして最適です。'
  },
  {
    id: 'use-cases-7',
    category: 'ユースケース',
    question: 'グローバルなWebアプリケーションで最低レイテンシを実現するために使用すべきサービスはどれですか？',
    options: ['ELB', 'Route 53', 'CloudFront', 'Global Accelerator'],
    correct: 2,
    explanation: 'CloudFrontは、グローバルなエッジロケーションを使用してコンテンツを配信し、レイテンシを最小化します。'
  },
  {
    id: 'use-cases-8',
    category: 'ユースケース',
    question: 'コンプライアンス要件で暗号化キーの完全な制御が必要な場合に使用すべきサービスはどれですか？',
    options: ['KMS', 'CloudHSM', 'Secrets Manager', 'Certificate Manager'],
    correct: 1,
    explanation: 'CloudHSMは、専用のハードウェアセキュリティモジュールで暗号化キーの完全な制御を提供します。'
  },
  {
    id: 'use-cases-9',
    category: 'ユースケース',
    question: '数百万のIoTデバイスからのデータを収集・処理するのに最適なアーキテクチャはどれですか？',
    options: ['同期処理', '非同期処理', 'バッチ処理', 'リアルタイム処理'],
    correct: 3,
    explanation: 'IoTデバイスからの大量データは、Kinesisなどを使用したリアルタイム処理が最適です。'
  },
  {
    id: 'use-cases-10',
    category: 'ユースケース',
    question: 'マルチテナントSaaSアプリケーションでテナント間のデータ分離を実現する最適な方法はどれですか？',
    options: ['単一データベース', 'テナント別データベース', 'スキーマ分離', 'すべて有効'],
    correct: 3,
    explanation: 'マルチテナントSaaSでは、要件に応じて単一DB、テナント別DB、スキーマ分離のいずれも有効な選択肢です。'
  },
  {
    id: 'use-cases-11',
    category: 'ユースケース',
    question: 'Eコマースサイトの商品カタログ検索に最適なサービスはどれですか？',
    options: ['RDS', 'DynamoDB', 'Elasticsearch', 'Redshift'],
    correct: 2,
    explanation: 'Elasticsearchは、全文検索、ファセット検索、リアルタイム検索に優れており、商品カタログ検索に最適です。'
  },
  {
    id: 'use-cases-12',
    category: 'ユースケース',
    question: 'ゲームアプリケーションのリーダーボード機能に最適なデータベースはどれですか？',
    options: ['RDS', 'DynamoDB', 'ElastiCache', 'Neptune'],
    correct: 2,
    explanation: 'ElastiCacheのSorted Setデータ構造は、リーダーボードの実装に最適です。'
  },
  {
    id: 'use-cases-13',
    category: 'ユースケース',
    question: 'ログ分析システムで大量のログデータを効率的に保存・検索するサービス組み合わせはどれですか？',
    options: ['S3 + Athena', 'RDS + Lambda', 'DynamoDB + API Gateway', 'Redshift + QuickSight'],
    correct: 0,
    explanation: 'S3でログを安価に保存し、Athenaで必要時にクエリする組み合わせが効率的です。'
  },
  {
    id: 'use-cases-14',
    category: 'ユースケース',
    question: 'メディアストリーミングサービスで動画配信に最適なアーキテクチャはどれですか？',
    options: ['S3 + CloudFront', 'EBS + EC2', 'EFS + Lambda', 'Redshift + QuickSight'],
    correct: 0,
    explanation: 'S3で動画を保存し、CloudFrontで世界中に配信するアーキテクチャが最適です。'
  },
  {
    id: 'use-cases-15',
    category: 'ユースケース',
    question: 'バックアップとアーカイブに最適なS3ストレージクラスの組み合わせはどれですか？',
    options: ['Standard + IA', 'IA + Glacier', 'Glacier + Deep Archive', 'すべて正しい'],
    correct: 3,
    explanation: 'アクセス頻度に応じて、Standard→IA→Glacier→Deep Archiveの順で移行するのが最適です。'
  },
  {
    id: 'use-cases-16',
    category: 'ユースケース',
    question: 'マイクロサービスアーキテクチャでサービス間通信に最適なパターンはどれですか？',
    options: ['同期通信のみ', '非同期通信のみ', '混合アプローチ', 'データベース共有'],
    correct: 2,
    explanation: 'マイクロサービスでは、用途に応じて同期・非同期通信を使い分ける混合アプローチが最適です。'
  },
  {
    id: 'use-cases-17',
    category: 'ユースケース',
    question: 'データウェアハウスでリアルタイム分析を実現するサービス組み合わせはどれですか？',
    options: ['Redshift + Kinesis', 'RDS + Lambda', 'DynamoDB + API Gateway', 'S3 + Glue'],
    correct: 0,
    explanation: 'KinesisでリアルタイムデータをRedshiftに送信し、リアルタイム分析を実現できます。'
  },
  {
    id: 'use-cases-18',
    category: 'ユースケース',
    question: 'モバイルアプリのプッシュ通知システムに最適なサービスはどれですか？',
    options: ['SES', 'SNS', 'SQS', 'EventBridge'],
    correct: 1,
    explanation: 'SNSは、モバイルプッシュ通知、SMS、Emailなど複数のチャネルに対応しています。'
  },
  {
    id: 'use-cases-19',
    category: 'ユースケース',
    question: 'APIのレート制限とスロットリングを実装するサービスはどれですか？',
    options: ['ELB', 'CloudFront', 'API Gateway', 'WAF'],
    correct: 2,
    explanation: 'API Gatewayは、APIのレート制限、スロットリング、認証・認可を統合的に提供します。'
  },
  {
    id: 'use-cases-20',
    category: 'ユースケース',
    question: 'コンテンツ管理システム（CMS）で画像の自動リサイズを実装する最適な方法はどれですか？',
    options: ['EC2 + cron', 'Lambda + S3イベント', 'ECS + SQS', 'Batch + CloudWatch'],
    correct: 1,
    explanation: 'S3にアップロードされた画像をトリガーにLambdaで自動リサイズするのが効率的です。'
  },
  {
    id: 'use-cases-21',
    category: 'ユースケース',
    question: 'ソーシャルメディア分析で感情分析を実装するサービスはどれですか？',
    options: ['Rekognition', 'Comprehend', 'Textract', 'Translate'],
    correct: 1,
    explanation: 'Comprehendは、テキストの感情分析、エンティティ抽出、キーフレーズ検出を提供します。'
  },
  {
    id: 'use-cases-22',
    category: 'ユースケース',
    question: 'オンライン学習プラットフォームで動画の自動字幕生成に使用するサービスはどれですか？',
    options: ['Polly', 'Transcribe', 'Translate', 'Comprehend'],
    correct: 1,
    explanation: 'Transcribeは、音声を自動的にテキストに変換し、字幕生成に使用できます。'
  },
  {
    id: 'use-cases-23',
    category: 'ユースケース',
    question: '不動産検索アプリで地理的検索を実装するのに最適なデータベースはどれですか？',
    options: ['RDS', 'DynamoDB', 'Elasticsearch', 'Neptune'],
    correct: 2,
    explanation: 'Elasticsearchは、地理的検索（Geo Search）機能を提供し、位置ベースの検索に最適です。'
  },
  {
    id: 'use-cases-24',
    category: 'ユースケース',
    question: 'フィンテックアプリで取引の監査ログを実装する最適な方法はどれですか？',
    options: ['CloudTrail', 'CloudWatch Logs', 'DynamoDB', 'すべて組み合わせ'],
    correct: 3,
    explanation: 'CloudTrailでAPI監査、CloudWatch Logsでアプリログ、DynamoDBで取引ログを組み合わせるのが最適です。'
  },
  {
    id: 'use-cases-25',
    category: 'ユースケース',
    question: 'IoTデバイス管理プラットフォームでデバイス状態を管理するサービスはどれですか？',
    options: ['IoT Core', 'IoT Device Management', 'IoT Analytics', 'すべて正しい'],
    correct: 3,
    explanation: 'IoT Core、Device Management、Analyticsを組み合わせて包括的なIoTプラットフォームを構築できます。'
  },
  {
    id: 'use-cases-26',
    category: 'ユースケース',
    question: 'オンライン試験システムで不正行為検出を実装するサービスはどれですか？',
    options: ['Rekognition', 'Fraud Detector', 'GuardDuty', 'すべて組み合わせ'],
    correct: 3,
    explanation: 'Rekognitionで顔認証、Fraud Detectorで行動分析、GuardDutyでセキュリティ監視を組み合わせます。'
  },
  {
    id: 'use-cases-27',
    category: 'ユースケース',
    question: 'ヘルスケアアプリで医療データの暗号化を実装する最適な方法はどれですか？',
    options: ['KMS', 'CloudHSM', 'Secrets Manager', 'すべて組み合わせ'],
    correct: 3,
    explanation: 'KMSで暗号化、CloudHSMで高セキュリティ、Secrets Managerで認証情報管理を組み合わせます。'
  },
  {
    id: 'use-cases-28',
    category: 'ユースケース',
    question: 'Eラーニングプラットフォームで学習進捗の分析に使用するサービスはどれですか？',
    options: ['QuickSight', 'Kinesis Analytics', 'Personalize', 'すべて正しい'],
    correct: 3,
    explanation: 'QuickSightで可視化、Kinesis Analyticsでリアルタイム分析、Personalizeで推薦を組み合わせます。'
  },
  {
    id: 'use-cases-29',
    category: 'ユースケース',
    question: 'スマートシティプロジェクトでセンサーデータの収集・分析アーキテクチャはどれですか？',
    options: ['IoT Core + Kinesis + S3', 'EC2 + RDS + Lambda', 'ECS + DynamoDB + SQS', '最初の選択肢'],
    correct: 3,
    explanation: 'IoT Coreでデータ収集、Kinesisでストリーミング処理、S3で長期保存するアーキテクチャが最適です。'
  },
  {
    id: 'use-cases-30',
    category: 'ユースケース',
    question: 'オンライン広告プラットフォームでリアルタイム入札を実装するアーキテクチャはどれですか？',
    options: ['Lambda + DynamoDB', 'EC2 + ElastiCache', 'ECS + RDS', '最初の選択肢'],
    correct: 3,
    explanation: 'Lambdaで高速処理、DynamoDBで低レイテンシデータアクセスを実現するアーキテクチャが最適です。'
  },
  {
    id: 'use-cases-31',
    category: 'ユースケース',
    question: '製造業でIoTセンサーからの予知保全システムを構築するサービス組み合わせはどれですか？',
    options: ['IoT Core + Kinesis + SageMaker', 'EC2 + RDS + Lambda', 'ECS + DynamoDB + SNS', '最初の選択肢'],
    correct: 3,
    explanation: 'IoT Coreでデータ収集、Kinesisでストリーミング、SageMakerで機械学習による予測を行います。'
  },
  {
    id: 'use-cases-32',
    category: 'ユースケース',
    question: 'コンテンツ配信ネットワークで動的コンテンツの配信を最適化する方法はどれですか？',
    options: ['CloudFront + Lambda@Edge', 'ELB + EC2', 'API Gateway + Lambda', '最初の選択肢'],
    correct: 3,
    explanation: 'CloudFrontとLambda@Edgeを組み合わせて、エッジで動的コンテンツを生成・配信できます。'
  },
  {
    id: 'use-cases-33',
    category: 'ユースケース',
    question: 'リアルタイムチャットアプリでメッセージの配信を実装するサービスはどれですか？',
    options: ['WebSocket API + Lambda', 'REST API + SQS', 'GraphQL + DynamoDB', '最初の選択肢'],
    correct: 3,
    explanation: 'API GatewayのWebSocket APIとLambdaを組み合わせて、リアルタイムメッセージング機能を実装できます。'
  },
  {
    id: 'use-cases-34',
    category: 'ユースケース',
    question: 'ドキュメント管理システムで文書の自動分類を実装するサービスはどれですか？',
    options: ['Textract + Comprehend', 'Rekognition + Translate', 'Polly + Transcribe', '最初の選択肢'],
    correct: 3,
    explanation: 'Textractで文書からテキスト抽出、Comprehendで内容分析・分類を行います。'
  },
  {
    id: 'use-cases-35',
    category: 'ユースケース',
    question: 'オンライン投票システムで投票の整合性を保証する方法はどれですか？',
    options: ['DynamoDB Transactions', 'RDS ACID', 'Blockchain', 'すべて有効'],
    correct: 3,
    explanation: '用途に応じて、DynamoDB Transactions、RDS ACID、Blockchainのいずれも投票整合性の保証に有効です。'
  },
  {
    id: 'use-cases-36',
    category: 'ユースケース',
    question: 'ライブストリーミングプラットフォームで視聴者数の急増に対応するアーキテクチャはどれですか？',
    options: ['Auto Scaling + CloudFront', 'Manual Scaling + ELB', 'Reserved Instances', '最初の選択肢'],
    correct: 3,
    explanation: 'Auto Scalingで自動スケール、CloudFrontで配信負荷分散を行うアーキテクチャが最適です。'
  },
  {
    id: 'use-cases-37',
    category: 'ユースケース',
    question: 'フードデリバリーアプリで配達員の位置追跡を実装するサービスはどれですか？',
    options: ['Location Service', 'DynamoDB + Lambda', 'IoT Core + Kinesis', 'すべて有効'],
    correct: 3,
    explanation: 'Location Service、DynamoDB、IoT Coreなど、要件に応じて複数のサービスが位置追跡に使用できます。'
  },
  {
    id: 'use-cases-38',
    category: 'ユースケース',
    question: 'オンライン診療システムで患者データの暗号化を実装する最適な方法はどれですか？',
    options: ['転送時暗号化', '保存時暗号化', 'エンドツーエンド暗号化', 'すべて必要'],
    correct: 3,
    explanation: '医療データでは、転送時、保存時、エンドツーエンドのすべての暗号化が必要です。'
  },
  {
    id: 'use-cases-39',
    category: 'ユースケース',
    question: 'スマート農業システムで作物の成長予測を実装するサービス組み合わせはどれですか？',
    options: ['IoT + SageMaker + Forecast', 'EC2 + RDS + Lambda', 'ECS + DynamoDB + SNS', '最初の選択肢'],
    correct: 3,
    explanation: 'IoTでセンサーデータ収集、SageMakerで機械学習、Forecastで時系列予測を組み合わせます。'
  },
  {
    id: 'use-cases-40',
    category: 'ユースケース',
    question: 'オンライン銀行システムで取引の監査証跡を実装する方法はどれですか？',
    options: ['CloudTrail + S3', 'DynamoDB + Lambda', 'RDS + CloudWatch', 'すべて組み合わせ'],
    correct: 3,
    explanation: 'CloudTrailでAPI監査、DynamoDBで取引ログ、RDSで詳細データ、CloudWatchで監視を組み合わせます。'
  },
  {
    id: 'use-cases-41',
    category: 'ユースケース',
    question: 'ゲーム開発でプレイヤーマッチングシステムを実装するサービスはどれですか？',
    options: ['GameLift', 'Lambda + DynamoDB', 'ECS + ElastiCache', 'すべて有効'],
    correct: 3,
    explanation: 'GameLift、Lambda+DynamoDB、ECS+ElastiCacheなど、ゲームの要件に応じて選択できます。'
  },
  {
    id: 'use-cases-42',
    category: 'ユースケース',
    question: 'デジタルマーケティングで顧客セグメンテーションを実装するサービスはどれですか？',
    options: ['Personalize', 'SageMaker', 'QuickSight', 'すべて正しい'],
    correct: 3,
    explanation: 'Personalizeで推薦、SageMakerでML分析、QuickSightで可視化を組み合わせて顧客セグメンテーションを実現します。'
  },
  {
    id: 'use-cases-43',
    category: 'ユースケース',
    question: 'サプライチェーン管理で在庫最適化を実装するサービス組み合わせはどれですか？',
    options: ['Forecast + Optimization', 'SageMaker + QuickSight', 'Kinesis + Lambda', '最初の選択肢'],
    correct: 3,
    explanation: 'Forecastで需要予測、Optimizationで在庫最適化を行うサービス組み合わせが最適です。'
  },
  {
    id: 'use-cases-44',
    category: 'ユースケース',
    question: 'オンライン教育プラットフォームで学習コンテンツの推薦を実装するサービスはどれですか？',
    options: ['Personalize', 'SageMaker', 'Comprehend', '最初の選択肢'],
    correct: 3,
    explanation: 'Personalizeは、学習履歴に基づいて個人化されたコンテンツ推薦を提供するのに最適です。'
  },
  {
    id: 'use-cases-45',
    category: 'ユースケース',
    question: 'スマートホームシステムでデバイス制御を実装するアーキテクチャはどれですか？',
    options: ['IoT Core + Lambda + DynamoDB', 'EC2 + RDS + SQS', 'ECS + ElastiCache + SNS', '最初の選択肢'],
    correct: 3,
    explanation: 'IoT Coreでデバイス通信、Lambdaで制御ロジック、DynamoDBで状態管理を行うアーキテクチャが最適です。'
  },
  {
    id: 'use-cases-46',
    category: 'ユースケース',
    question: 'オンライン会議システムで録画の自動文字起こしを実装するサービスはどれですか？',
    options: ['Transcribe', 'Comprehend', 'Textract', '最初の選択肢'],
    correct: 3,
    explanation: 'Transcribeは、音声・動画ファイルから自動的にテキストを生成する文字起こしサービスです。'
  },
  {
    id: 'use-cases-47',
    category: 'ユースケース',
    question: 'Eコマースサイトで商品レビューの感情分析を実装するサービスはどれですか？',
    options: ['Comprehend', 'Textract', 'Rekognition', '最初の選択肢'],
    correct: 3,
    explanation: 'Comprehendは、テキストの感情分析（ポジティブ、ネガティブ、ニュートラル）を提供します。'
  },
  {
    id: 'use-cases-48',
    category: 'ユースケース',
    question: 'モバイルゲームでリアルタイムランキングを実装するデータベースはどれですか？',
    options: ['DynamoDB', 'ElastiCache', 'RDS', '2番目の選択肢'],
    correct: 3,
    explanation: 'ElastiCacheのSorted Setデータ構造は、リアルタイムランキングの実装に最適です。'
  },
  {
    id: 'use-cases-49',
    category: 'ユースケース',
    question: 'コンテンツ管理システムで多言語サイトを実装するサービスはどれですか？',
    options: ['Translate', 'Polly', 'Comprehend', '最初の選択肢'],
    correct: 3,
    explanation: 'Translateは、Webサイトのコンテンツを複数の言語に自動翻訳するサービスです。'
  },
  {
    id: 'use-cases-50',
    category: 'ユースケース',
    question: 'ビデオ監視システムで異常検知を実装するサービス組み合わせはどれですか？',
    options: ['Rekognition + Lambda + SNS', 'Textract + SQS + SES', 'Comprehend + EventBridge + SMS', '最初の選択肢'],
    correct: 3,
    explanation: 'Rekognitionで画像・動画分析、Lambdaで処理、SNSで通知を行う組み合わせが最適です。'
  }
]

export default useCasesQuestions
