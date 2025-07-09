// ユースケース関連の問題
const useCasesQuestions = [
  {
    id: 'use-cases-1',
    category: 'ユースケース',
    question: 'リアルタイムチャットアプリケーションに最適なデータベースはどれですか？',
    options: ['RDS MySQL', 'DynamoDB', 'Redshift', 'Aurora'],
    correct: 1,
    explanation: 'DynamoDBは、低レイテンシと高スループットが要求されるリアルタイムアプリケーションに最適です。'
  },
  {
    id: 'use-cases-2',
    category: 'ユースケース',
    question: '大量の画像・動画ファイルを保存する最適なサービスはどれですか？',
    options: ['EBS', 'EFS', 'S3', 'FSx'],
    correct: 2,
    explanation: 'S3は、大量の非構造化データ（画像・動画）の保存に最適なオブジェクトストレージです。'
  },
  {
    id: 'use-cases-3',
    category: 'ユースケース',
    question: '機械学習の訓練データを保存するのに最適なサービスはどれですか？',
    options: ['EBS', 'EFS', 'S3', 'FSx for Lustre'],
    correct: 3,
    explanation: 'FSx for Lustreは、機械学習ワークロードに最適化された高性能ファイルシステムです。'
  },
  {
    id: 'use-cases-4',
    category: 'ユースケース',
    question: '金融取引システムに必要な一貫性レベルはどれですか？',
    options: ['結果整合性', '強一貫性', 'セッション一貫性', 'モノトニック読み取り'],
    correct: 1,
    explanation: '金融取引システムでは、データの正確性が重要なため強一貫性が必要です。'
  },
  {
    id: 'use-cases-5',
    category: 'ユースケース',
    question: 'IoTセンサーからの大量データストリームを処理するサービスはどれですか？',
    options: ['SQS', 'SNS', 'Kinesis', 'EventBridge'],
    correct: 2,
    explanation: 'Amazon Kinesisは、IoTデバイスからの大量のストリーミングデータをリアルタイムで処理できます。'
  },
  {
    id: 'use-cases-6',
    category: 'ユースケース',
    question: 'レガシーアプリケーションをクラウドに移行する最初のステップとして最適な戦略はどれですか？',
    options: ['Rehost', 'Replatform', 'Refactor', 'Repurchase'],
    correct: 0,
    explanation: 'Rehost（Lift and Shift）は、最小限の変更でレガシーアプリケーションをクラウドに移行する最初のステップとして最適です。'
  },
  {
    id: 'use-cases-7',
    category: 'ユースケース',
    question: 'グローバルなWebアプリケーションで最低レイテンシを実現するために使用すべきサービスはどれですか？',
    options: ['CloudFront', 'Global Accelerator', 'Route 53', 'すべて正しい'],
    correct: 3,
    explanation: 'CloudFront、Global Accelerator、Route 53はすべて、グローバルアプリケーションのレイテンシ削減に貢献します。'
  },
  {
    id: 'use-cases-8',
    category: 'ユースケース',
    question: 'コンプライアンス要件で暗号化キーの完全な制御が必要な場合に使用すべきサービスはどれですか？',
    options: ['KMS', 'CloudHSM', 'Secrets Manager', 'Certificate Manager'],
    correct: 1,
    explanation: 'AWS CloudHSMは、暗号化キーの完全な制御が必要なコンプライアンス要件に対応します。'
  },
  {
    id: 'use-cases-9',
    category: 'ユースケース',
    question: '数百万のIoTデバイスからのデータを収集・処理するのに最適なアーキテクチャはどれですか？',
    options: ['IoT Core + Kinesis + Lambda', 'IoT Core + SQS + EC2', 'IoT Core + SNS + RDS', 'IoT Core + EventBridge + Aurora'],
    correct: 0,
    explanation: 'IoT Core + Kinesis + Lambdaの組み合わせは、大量のIoTデータをリアルタイムで処理するのに最適です。'
  },
  {
    id: 'use-cases-10',
    category: 'ユースケース',
    question: 'マルチテナントSaaSアプリケーションでテナント間のデータ分離を実現する最適な方法はどれですか？',
    options: ['単一データベース・行レベルセキュリティ', 'テナント毎の専用データベース', 'テナント毎の専用スキーマ', '要件により異なる'],
    correct: 3,
    explanation: 'マルチテナントアーキテクチャでは、セキュリティ要件、コスト、管理複雑性を考慮して最適な分離方法を選択する必要があります。'
  }
]

export default useCasesQuestions
