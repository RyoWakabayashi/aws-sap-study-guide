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
    options: ['Comprehend', 'Rekognition', 'SageMaker', 'Textract'],
    correct: 2,
    explanation: 'Amazon SageMakerは、機械学習モデルを迅速に構築、訓練、デプロイするためのフルマネージドサービスです。'
  },
  {
    id: 'analytics-5',
    category: '分析・機械学習',
    question: 'ビジネスインテリジェンス（BI）ダッシュボードを作成するサービスはどれですか？',
    options: ['QuickSight', 'CloudWatch', 'Grafana', 'Tableau'],
    correct: 0,
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
    explanation: 'Amazon Pollyは、テキストを自然な音声に変換するサービスです。'
  },
  {
    id: 'analytics-8',
    category: '分析・機械学習',
    question: '画像・動画分析を行うAWSサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'Textract', 'Translate'],
    correct: 1,
    explanation: 'Amazon Rekognitionは、画像・動画の分析を行う機械学習サービスです。'
  },
  {
    id: 'analytics-9',
    category: '分析・機械学習',
    question: '文書からテキストを抽出するAWSサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'Textract', 'Translate'],
    correct: 2,
    explanation: 'Amazon Textractは、文書からテキストとデータを抽出するサービスです。'
  },
  {
    id: 'analytics-10',
    category: '分析・機械学習',
    question: '自然言語処理を行うAWSサービスはどれですか？',
    options: ['Comprehend', 'Rekognition', 'Textract', 'Translate'],
    correct: 0,
    explanation: 'Amazon Comprehendは、自然言語処理を使用してテキストから洞察を抽出するサービスです。'
  }
]

export default analyticsQuestions
