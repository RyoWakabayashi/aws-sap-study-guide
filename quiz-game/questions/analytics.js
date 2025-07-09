// 分析・機械学習関連の問題
const analyticsQuestions = [
  {
    id: 'analytics-1',
    category: '分析・機械学習',
    question: 'S3データに対してSQLクエリを実行できるサーバーレスサービスはどれですか？',
    options: ['Redshift', 'EMR', 'Athena', 'Glue'],
    correct: 2,
    explanation: 'Amazon Athenaは、S3のデータに対して標準SQLを使用してクエリを実行できるサーバーレス分析サービスです。'
  },
  {
    id: 'analytics-2',
    category: '分析・機械学習',
    question: 'ETL（Extract, Transform, Load）処理を行うサーバーレスサービスはどれですか？',
    options: ['Redshift', 'EMR', 'Athena', 'Glue'],
    correct: 3,
    explanation: 'AWS Glueは、データの検出、準備、結合を行うフルマネージドETLサービスです。'
  },
  {
    id: 'analytics-3',
    category: '分析・機械学習',
    question: 'リアルタイムデータストリーミングを処理するサービスはどれですか？',
    options: ['Kinesis', 'SQS', 'SNS', 'EventBridge'],
    correct: 0,
    explanation: 'Amazon Kinesisは、リアルタイムでストリーミングデータを収集、処理、分析するサービスです。'
  },
  {
    id: 'analytics-4',
    category: '分析・機械学習',
    question: '機械学習モデルの構築、訓練、デプロイを行うサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'SageMaker', 'Lex'],
    correct: 2,
    explanation: 'Amazon SageMakerは、機械学習モデルの構築、訓練、デプロイを行うフルマネージドサービスです。'
  },
  {
    id: 'analytics-5',
    category: '分析・機械学習',
    question: 'ビジネスインテリジェンス（BI）ダッシュボードを作成するサービスはどれですか？',
    options: ['CloudWatch', 'QuickSight', 'Grafana', 'Tableau'],
    correct: 1,
    explanation: 'Amazon QuickSightは、高速でクラウドベースのビジネス分析サービスです。'
  },
  {
    id: 'analytics-6',
    category: '分析・機械学習',
    question: '音声をテキストに変換するAWSサービスはどれですか？',
    options: ['Polly', 'Transcribe', 'Translate', 'Comprehend'],
    correct: 1,
    explanation: 'Amazon Transcribeは、音声をテキストに変換する自動音声認識サービスです。'
  },
  {
    id: 'analytics-7',
    category: '分析・機械学習',
    question: 'テキストを音声に変換するAWSサービスはどれですか？',
    options: ['Polly', 'Transcribe', 'Translate', 'Comprehend'],
    correct: 0,
    explanation: 'Amazon Pollyは、テキストを自然な音声に変換するテキスト読み上げサービスです。'
  },
  {
    id: 'analytics-8',
    category: '分析・機械学習',
    question: '画像・動画分析を行うAWSサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'Textract', 'Translate'],
    correct: 1,
    explanation: 'Amazon Rekognitionは、画像と動画の分析を行う機械学習サービスです。'
  },
  {
    id: 'analytics-9',
    category: '分析・機械学習',
    question: '文書からテキストを抽出するAWSサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'Textract', 'Translate'],
    correct: 2,
    explanation: 'Amazon Textractは、スキャンした文書からテキストとデータを自動的に抽出します。'
  },
  {
    id: 'analytics-10',
    category: '分析・機械学習',
    question: '自然言語処理を行うAWSサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'Textract', 'Polly'],
    correct: 0,
    explanation: 'Amazon Comprehendは、自然言語処理（NLP）を使用してテキストから洞察を抽出します。'
  },
  {
    id: 'analytics-11',
    category: '分析・機械学習',
    question: 'Kinesis Data Streamsのシャード数を決定する主な要因はどれですか？',
    options: ['データサイズ', 'スループット要件', 'レイテンシ要件', 'コスト'],
    correct: 1,
    explanation: 'Kinesisシャード数は、必要なスループット（1シャードあたり1MB/秒または1000レコード/秒）に基づいて決定されます。'
  },
  {
    id: 'analytics-12',
    category: '分析・機械学習',
    question: 'EMRクラスターで使用できないビッグデータフレームワークはどれですか？',
    options: ['Hadoop', 'Spark', 'Hive', 'MongoDB'],
    correct: 3,
    explanation: 'EMRは、Hadoop、Spark、Hive、Presto、HBaseなどをサポートしますが、MongoDBは含まれません。'
  },
  {
    id: 'analytics-13',
    category: '分析・機械学習',
    question: 'Glue Data Catalogの主な機能はどれですか？',
    options: ['データ変換', 'メタデータ管理', 'データ可視化', 'データ暗号化'],
    correct: 1,
    explanation: 'Glue Data Catalogは、データソースのメタデータを一元管理するサービスです。'
  },
  {
    id: 'analytics-14',
    category: '分析・機械学習',
    question: 'Athenaのクエリ結果が保存される場所はどこですか？',
    options: ['DynamoDB', 'RDS', 'S3', 'Redshift'],
    correct: 2,
    explanation: 'Athenaのクエリ結果は、指定されたS3バケットに自動的に保存されます。'
  },
  {
    id: 'analytics-15',
    category: '分析・機械学習',
    question: 'Kinesis Data Firehoseで対応していない配信先はどれですか？',
    options: ['S3', 'Redshift', 'Elasticsearch', 'DynamoDB'],
    correct: 3,
    explanation: 'Kinesis Data Firehoseは、S3、Redshift、Elasticsearch、Splunkに配信できますが、DynamoDBは対応していません。'
  },
  {
    id: 'analytics-16',
    category: '分析・機械学習',
    question: 'SageMakerのトレーニングジョブで使用できないインスタンスタイプはどれですか？',
    options: ['ml.m5.large', 'ml.c5.xlarge', 'ml.p3.2xlarge', 'ml.t2.micro'],
    correct: 3,
    explanation: 'SageMakerトレーニングでは、t2インスタンスは使用できません。m5、c5、p3などの専用インスタンスを使用します。'
  },
  {
    id: 'analytics-17',
    category: '分析・機械学習',
    question: 'QuickSightのデータソースとして使用できないサービスはどれですか？',
    options: ['S3', 'RDS', 'Redshift', 'Lambda'],
    correct: 3,
    explanation: 'QuickSightは、S3、RDS、Redshift、Athenaなどをデータソースとして使用できますが、Lambdaは直接データソースになりません。'
  },
  {
    id: 'analytics-18',
    category: '分析・機械学習',
    question: 'Comprehendで検出できない感情はどれですか？',
    options: ['POSITIVE', 'NEGATIVE', 'NEUTRAL', 'CONFUSED'],
    correct: 3,
    explanation: 'Comprehendの感情分析では、POSITIVE、NEGATIVE、NEUTRAL、MIXEDを検出しますが、CONFUSEDは含まれません。'
  },
  {
    id: 'analytics-19',
    category: '分析・機械学習',
    question: 'Rekognitionで検出できない項目はどれですか？',
    options: ['顔', 'オブジェクト', 'テキスト', '音声'],
    correct: 3,
    explanation: 'Rekognitionは、画像・動画の顔、オブジェクト、テキストを検出しますが、音声の検出はできません。'
  },
  {
    id: 'analytics-20',
    category: '分析・機械学習',
    question: 'Textractで抽出できない情報はどれですか？',
    options: ['テキスト', 'テーブル', 'フォーム', '音声'],
    correct: 3,
    explanation: 'Textractは、文書からテキスト、テーブル、フォームデータを抽出しますが、音声は対象外です。'
  },
  {
    id: 'analytics-21',
    category: '分析・機械学習',
    question: 'Pollyで対応していない音声形式はどれですか？',
    options: ['MP3', 'OGG', 'PCM', 'FLAC'],
    correct: 3,
    explanation: 'PollyはMP3、OGG、PCM形式をサポートしますが、FLAC形式は対応していません。'
  },
  {
    id: 'analytics-22',
    category: '分析・機械学習',
    question: 'Transcribeで対応していない機能はどれですか？',
    options: ['話者識別', '感情分析', 'カスタム語彙', 'リアルタイム転写'],
    correct: 1,
    explanation: 'Transcribeは、話者識別、カスタム語彙、リアルタイム転写をサポートしますが、感情分析はComprehendの機能です。'
  },
  {
    id: 'analytics-23',
    category: '分析・機械学習',
    question: 'Translateで対応していない翻訳方向はどれですか？',
    options: ['英語→日本語', '日本語→英語', '中国語→韓国語', '音声→テキスト'],
    correct: 3,
    explanation: 'Translateはテキスト間の翻訳サービスで、音声からテキストへの変換はTranscribeの機能です。'
  },
  {
    id: 'analytics-24',
    category: '分析・機械学習',
    question: 'Lexで構築できないアプリケーションタイプはどれですか？',
    options: ['チャットボット', '音声アシスタント', 'IVRシステム', '画像認識アプリ'],
    correct: 3,
    explanation: 'Lexは、チャットボット、音声アシスタント、IVRシステムを構築できますが、画像認識はRekognitionの領域です。'
  },
  {
    id: 'analytics-25',
    category: '分析・機械学習',
    question: 'Personalizeで使用されない機械学習アルゴリズムはどれですか？',
    options: ['協調フィルタリング', 'コンテンツベース', 'ディープラーニング', '線形回帰'],
    correct: 3,
    explanation: 'Personalizeは、協調フィルタリング、コンテンツベース、ディープラーニングを使用しますが、単純な線形回帰は使用されません。'
  },
  {
    id: 'analytics-26',
    category: '分析・機械学習',
    question: 'Forecastで予測できないデータタイプはどれですか？',
    options: ['売上予測', '需要予測', '在庫予測', '画像分類'],
    correct: 3,
    explanation: 'Forecastは時系列データの予測に特化しており、画像分類はRekognitionやSageMakerの領域です。'
  },
  {
    id: 'analytics-27',
    category: '分析・機械学習',
    question: 'Kendraで検索できないコンテンツタイプはどれですか？',
    options: ['PDF', 'Word', 'PowerPoint', '動画'],
    correct: 3,
    explanation: 'Kendraは、PDF、Word、PowerPointなどの文書を検索できますが、動画コンテンツの検索は対象外です。'
  },
  {
    id: 'analytics-28',
    category: '分析・機械学習',
    question: 'Fraud Detectorで検出できない不正タイプはどれですか？',
    options: ['オンライン決済詐欺', 'アカウント乗っ取り', '偽レビュー', 'ネットワーク侵入'],
    correct: 3,
    explanation: 'Fraud Detectorは、決済詐欺、アカウント乗っ取り、偽レビューを検出しますが、ネットワーク侵入はGuardDutyの領域です。'
  },
  {
    id: 'analytics-29',
    category: '分析・機械学習',
    question: 'CodeGuru Reviewerで分析できないコードの問題はどれですか？',
    options: ['パフォーマンス問題', 'セキュリティ脆弱性', 'コード品質', 'UI/UXデザイン'],
    correct: 3,
    explanation: 'CodeGuru Reviewerは、パフォーマンス、セキュリティ、コード品質を分析しますが、UI/UXデザインは対象外です。'
  },
  {
    id: 'analytics-30',
    category: '分析・機械学習',
    question: 'DevOps Guruで監視できないメトリクスはどれですか？',
    options: ['アプリケーションメトリクス', 'インフラメトリクス', 'ログデータ', 'ユーザー行動'],
    correct: 3,
    explanation: 'DevOps Guruは、アプリケーション、インフラ、ログを監視しますが、詳細なユーザー行動分析は対象外です。'
  },
  {
    id: 'analytics-31',
    category: '分析・機械学習',
    question: 'Kinesis Data Analyticsで使用できないクエリ言語はどれですか？',
    options: ['SQL', 'Apache Flink', 'Python', 'NoSQL'],
    correct: 3,
    explanation: 'Kinesis Data AnalyticsはSQL、Apache Flink、Pythonをサポートしますが、NoSQLはクエリ言語ではありません。'
  },
  {
    id: 'analytics-32',
    category: '分析・機械学習',
    question: 'EMRのマスターノードで実行されないサービスはどれですか？',
    options: ['ResourceManager', 'NameNode', 'Spark Driver', 'TaskTracker'],
    correct: 3,
    explanation: 'TaskTrackerはワーカーノードで実行されるサービスで、マスターノードでは実行されません。'
  },
  {
    id: 'analytics-33',
    category: '分析・機械学習',
    question: 'Glue Studioで作成できないジョブタイプはどれですか？',
    options: ['ETLジョブ', 'ストリーミングジョブ', 'Pythonシェルジョブ', 'バッチ推論ジョブ'],
    correct: 3,
    explanation: 'Glue Studioは、ETL、ストリーミング、Pythonシェルジョブを作成できますが、バッチ推論はSageMakerの機能です。'
  },
  {
    id: 'analytics-34',
    category: '分析・機械学習',
    question: 'Athenaのパーティション射影で対応していないパターンはどれですか？',
    options: ['日付', '時間', '数値', '画像'],
    correct: 3,
    explanation: 'Athenaのパーティション射影は、日付、時間、数値パターンをサポートしますが、画像は対象外です。'
  },
  {
    id: 'analytics-35',
    category: '分析・機械学習',
    question: 'QuickSightのSPICEエンジンで対応していないデータ操作はどれですか？',
    options: ['集計', 'フィルタリング', 'ソート', 'リアルタイム更新'],
    correct: 3,
    explanation: 'SPICEは高速な集計、フィルタリング、ソートを提供しますが、リアルタイム更新は制限があります。'
  },
  {
    id: 'analytics-36',
    category: '分析・機械学習',
    question: 'SageMaker Studioで利用できない機能はどれですか？',
    options: ['Jupyter Notebook', 'デバッガー', 'モデル監視', 'データベース管理'],
    correct: 3,
    explanation: 'SageMaker Studioは、Jupyter Notebook、デバッガー、モデル監視を提供しますが、データベース管理は含まれません。'
  },
  {
    id: 'analytics-37',
    category: '分析・機械学習',
    question: 'Comprehend Medicalで分析できない医療情報はどれですか？',
    options: ['薬物名', '医療状態', '解剖学的部位', '医療画像'],
    correct: 3,
    explanation: 'Comprehend Medicalは、テキストから薬物名、医療状態、解剖学的部位を抽出しますが、医療画像の分析は対象外です。'
  },
  {
    id: 'analytics-38',
    category: '分析・機械学習',
    question: 'Rekognition Custom Labelsで学習できないモデルタイプはどれですか？',
    options: ['画像分類', 'オブジェクト検出', '顔認識', '音声認識'],
    correct: 3,
    explanation: 'Rekognition Custom Labelsは、画像分類、オブジェクト検出、顔認識をサポートしますが、音声認識は対象外です。'
  },
  {
    id: 'analytics-39',
    category: '分析・機械学習',
    question: 'Textract Analyzeで抽出できない情報はどれですか？',
    options: ['キー・バリューペア', 'テーブル', 'チェックボックス', '音声データ'],
    correct: 3,
    explanation: 'Textract Analyzeは、キー・バリューペア、テーブル、チェックボックスを抽出しますが、音声データは対象外です。'
  },
  {
    id: 'analytics-40',
    category: '分析・機械学習',
    question: 'Polly Neural TTSで利用できない機能はどれですか？',
    options: ['SSML', '音声スタイル', '話速調整', '画像生成'],
    correct: 3,
    explanation: 'Polly Neural TTSは、SSML、音声スタイル、話速調整をサポートしますが、画像生成は対象外です。'
  },
  {
    id: 'analytics-41',
    category: '分析・機械学習',
    question: 'Transcribe Medicalで対応していない医療分野はどれですか？',
    options: ['一般診療', '心臓病学', '神経学', '獣医学'],
    correct: 3,
    explanation: 'Transcribe Medicalは、人間の医療分野（一般診療、心臓病学、神経学）をサポートしますが、獣医学は対象外です。'
  },
  {
    id: 'analytics-42',
    category: '分析・機械学習',
    question: 'Translate Realtime Translationで対応していない機能はどれですか？',
    options: ['リアルタイム翻訳', 'カスタム用語集', '自動言語検出', '音声翻訳'],
    correct: 3,
    explanation: 'Translate Realtimeは、リアルタイム翻訳、カスタム用語集、自動言語検出をサポートしますが、音声翻訳は別サービスです。'
  },
  {
    id: 'analytics-43',
    category: '分析・機械学習',
    question: 'Lex V2で新しく追加された機能はどれですか？',
    options: ['多言語サポート', 'ストリーミング', '感情分析', 'すべて正しい'],
    correct: 3,
    explanation: 'Lex V2では、多言語サポート、ストリーミング、感情分析などの新機能が追加されました。'
  },
  {
    id: 'analytics-44',
    category: '分析・機械学習',
    question: 'Personalize Realtime Recommendationsで使用されないデータタイプはどれですか？',
    options: ['ユーザー行動', 'アイテム属性', 'ユーザー属性', '画像データ'],
    correct: 3,
    explanation: 'Personalizeは、ユーザー行動、アイテム属性、ユーザー属性を使用しますが、画像データは直接使用されません。'
  },
  {
    id: 'analytics-45',
    category: '分析・機械学習',
    question: 'Forecast Quantum Forecastingで予測できない項目はどれですか？',
    options: ['需要予測', '在庫最適化', '価格予測', '画像分類'],
    correct: 3,
    explanation: 'Forecast Quantum Forecastingは、需要、在庫、価格の予測に特化しており、画像分類は対象外です。'
  },
  {
    id: 'analytics-46',
    category: '分析・機械学習',
    question: 'Kendra Intelligent Rankingで改善されない項目はどれですか？',
    options: ['検索精度', '関連性スコア', 'レスポンス時間', '画像検索'],
    correct: 3,
    explanation: 'Kendra Intelligent Rankingは、検索精度、関連性スコア、レスポンス時間を改善しますが、画像検索は対象外です。'
  },
  {
    id: 'analytics-47',
    category: '分析・機械学習',
    question: 'Fraud Detector Account Takeoverで検出できない不正行為はどれですか？',
    options: ['ログイン異常', 'デバイス変更', '位置情報異常', 'ネットワーク攻撃'],
    correct: 3,
    explanation: 'Fraud Detector Account Takeoverは、ログイン、デバイス、位置情報の異常を検出しますが、ネットワーク攻撃は対象外です。'
  },
  {
    id: 'analytics-48',
    category: '分析・機械学習',
    question: 'CodeGuru Profilerで分析できないパフォーマンス指標はどれですか？',
    options: ['CPU使用率', 'メモリ使用率', 'レイテンシ', 'ネットワーク帯域幅'],
    correct: 3,
    explanation: 'CodeGuru Profilerは、CPU、メモリ、レイテンシを分析しますが、ネットワーク帯域幅の詳細分析は対象外です。'
  },
  {
    id: 'analytics-49',
    category: '分析・機械学習',
    question: 'DevOps Guru Proactive Insightsで予測できない問題はどれですか？',
    options: ['パフォーマンス低下', 'リソース枯渇', 'エラー増加', 'セキュリティ侵害'],
    correct: 3,
    explanation: 'DevOps Guru Proactive Insightsは、パフォーマンス、リソース、エラーの問題を予測しますが、セキュリティ侵害の予測は対象外です。'
  },
  {
    id: 'analytics-50',
    category: '分析・機械学習',
    question: 'SageMaker Feature Storeで管理できないデータタイプはどれですか？',
    options: ['数値データ', '文字列データ', '時系列データ', '動画データ'],
    correct: 3,
    explanation: 'SageMaker Feature Storeは、数値、文字列、時系列データを管理しますが、動画データの直接管理は対象外です。'
  }
]

export default analyticsQuestions
