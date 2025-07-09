// アプリケーション統合関連の問題
const integrationQuestions = [
  {
    id: 'integration-1',
    category: 'アプリケーション統合',
    question: 'メッセージキューサービスを提供するAWSサービスはどれですか？',
    options: ['SNS', 'SQS', 'EventBridge', 'Step Functions'],
    correct: 1,
    explanation: 'Amazon SQS（Simple Queue Service）は、フルマネージドメッセージキューサービスです。'
  },
  {
    id: 'integration-2',
    category: 'アプリケーション統合',
    question: 'Pub/Sub（発行/購読）メッセージングを提供するサービスはどれですか？',
    options: ['SQS', 'SNS', 'EventBridge', 'Step Functions'],
    correct: 1,
    explanation: 'Amazon SNS（Simple Notification Service）は、Pub/Subメッセージングサービスです。'
  },
  {
    id: 'integration-3',
    category: 'アプリケーション統合',
    question: 'サーバーレスワークフローを構築するサービスはどれですか？',
    options: ['SQS', 'SNS', 'EventBridge', 'Step Functions'],
    correct: 3,
    explanation: 'AWS Step Functionsは、サーバーレスワークフローを構築・実行するサービスです。'
  },
  {
    id: 'integration-4',
    category: 'アプリケーション統合',
    question: 'イベント駆動アーキテクチャを構築するためのサービスはどれですか？',
    options: ['SQS', 'SNS', 'EventBridge', 'Step Functions'],
    correct: 2,
    explanation: 'Amazon EventBridge（旧CloudWatch Events）は、イベント駆動アーキテクチャを構築するためのサービスです。'
  },
  {
    id: 'integration-5',
    category: 'アプリケーション統合',
    question: 'RESTful APIを作成・管理するサービスはどれですか？',
    options: ['ELB', 'CloudFront', 'API Gateway', 'Route 53'],
    correct: 2,
    explanation: 'Amazon API Gatewayは、RESTful APIとWebSocket APIを作成・管理するフルマネージドサービスです。'
  },
  {
    id: 'integration-6',
    category: 'アプリケーション統合',
    question: 'SQSの標準キューとFIFOキューの主な違いはどれですか？',
    options: ['コスト', '順序保証', 'スループット', 'すべて正しい'],
    correct: 3,
    explanation: 'FIFOキューは順序保証と重複排除を提供しますが、標準キューより高コストで低スループットです。'
  },
  {
    id: 'integration-7',
    category: 'アプリケーション統合',
    question: 'SNSで対応していない配信プロトコルはどれですか？',
    options: ['HTTP/HTTPS', 'Email', 'SMS', 'FTP'],
    correct: 3,
    explanation: 'SNSは、HTTP/HTTPS、Email、SMS、SQS、Lambdaをサポートしますが、FTPは対応していません。'
  },
  {
    id: 'integration-8',
    category: 'アプリケーション統合',
    question: 'EventBridgeのカスタムイベントバスの主な用途はどれですか？',
    options: ['コスト削減', 'イベント分離', 'パフォーマンス向上', 'セキュリティ強化'],
    correct: 1,
    explanation: 'カスタムイベントバスは、異なるアプリケーションやサービスのイベントを分離・整理するために使用されます。'
  },
  {
    id: 'integration-9',
    category: 'アプリケーション統合',
    question: 'Step Functionsの状態タイプに含まれないものはどれですか？',
    options: ['Task', 'Choice', 'Parallel', 'Database'],
    correct: 3,
    explanation: 'Step Functionsの状態タイプには、Task、Choice、Parallel、Wait、Pass、Fail、Succeedがありますが、Databaseはありません。'
  },
  {
    id: 'integration-10',
    category: 'アプリケーション統合',
    question: 'API Gatewayのスロットリング機能の主な目的はどれですか？',
    options: ['コスト削減', 'レート制限', 'セキュリティ強化', 'パフォーマンス向上'],
    correct: 1,
    explanation: 'API Gatewayのスロットリング機能は、APIへのリクエスト数を制限し、バックエンドサービスを保護します。'
  },
  {
    id: 'integration-11',
    category: 'アプリケーション統合',
    question: 'SQSのデッドレターキューの主な用途はどれですか？',
    options: ['パフォーマンス向上', '失敗メッセージ処理', 'コスト削減', 'セキュリティ強化'],
    correct: 1,
    explanation: 'デッドレターキューは、処理に失敗したメッセージを分離し、後で分析・再処理するために使用されます。'
  },
  {
    id: 'integration-12',
    category: 'アプリケーション統合',
    question: 'SNSのメッセージフィルタリング機能で使用される形式はどれですか？',
    options: ['XML', 'JSON', 'YAML', 'CSV'],
    correct: 1,
    explanation: 'SNSのメッセージフィルタリングは、JSON形式のフィルターポリシーを使用します。'
  },
  {
    id: 'integration-13',
    category: 'アプリケーション統合',
    question: 'EventBridgeのスケジュール式で使用される形式はどれですか？',
    options: ['Cron', 'Rate', '両方', 'どちらでもない'],
    correct: 2,
    explanation: 'EventBridgeは、Cron式とRate式の両方をサポートしてスケジュールイベントを作成できます。'
  },
  {
    id: 'integration-14',
    category: 'アプリケーション統合',
    question: 'Step Functionsの実行履歴の保持期間はどれですか？',
    options: ['7日', '30日', '90日', '1年'],
    correct: 2,
    explanation: 'Step Functionsの実行履歴は、デフォルトで90日間保持されます。'
  },
  {
    id: 'integration-15',
    category: 'アプリケーション統合',
    question: 'API GatewayのWebSocket APIで対応していない機能はどれですか？',
    options: ['双方向通信', 'リアルタイムメッセージング', 'ファイル転送', 'チャット機能'],
    correct: 2,
    explanation: 'WebSocket APIは双方向通信をサポートしますが、大容量ファイル転送には適していません。'
  },
  {
    id: 'integration-16',
    category: 'アプリケーション統合',
    question: 'SQSの可視性タイムアウトの主な目的はどれですか？',
    options: ['セキュリティ', 'メッセージ重複防止', 'パフォーマンス向上', 'コスト削減'],
    correct: 1,
    explanation: '可視性タイムアウトは、メッセージが処理中に他のコンシューマーから見えなくなる時間を設定し、重複処理を防ぎます。'
  },
  {
    id: 'integration-17',
    category: 'アプリケーション統合',
    question: 'SNSのファンアウトパターンの主な利点はどれですか？',
    options: ['コスト削減', '疎結合', 'パフォーマンス向上', 'セキュリティ強化'],
    correct: 1,
    explanation: 'ファンアウトパターンは、1つのメッセージを複数のサブスクライバーに配信し、システム間の疎結合を実現します。'
  },
  {
    id: 'integration-18',
    category: 'アプリケーション統合',
    question: 'EventBridgeのアーカイブ機能の主な用途はどれですか？',
    options: ['コスト削減', 'イベント再生', 'パフォーマンス向上', 'セキュリティ強化'],
    correct: 1,
    explanation: 'EventBridgeのアーカイブ機能は、過去のイベントを保存し、必要に応じて再生することができます。'
  },
  {
    id: 'integration-19',
    category: 'アプリケーション統合',
    question: 'Step Functionsの Express Workflowsの主な特徴はどれですか？',
    options: ['低コスト', '高スループット', '短時間実行', 'すべて正しい'],
    correct: 3,
    explanation: 'Express Workflowsは、高スループット、短時間実行、低コストのワークフローに最適化されています。'
  },
  {
    id: 'integration-20',
    category: 'アプリケーション統合',
    question: 'API Gatewayのキャッシュ機能で設定できない項目はどれですか？',
    options: ['TTL', 'キーパラメータ', 'キャッシュサイズ', 'データベース接続'],
    correct: 3,
    explanation: 'API Gatewayのキャッシュでは、TTL、キーパラメータ、キャッシュサイズを設定できますが、データベース接続は関係ありません。'
  },
  {
    id: 'integration-21',
    category: 'アプリケーション統合',
    question: 'SQSのバッチ操作で一度に処理できる最大メッセージ数はどれですか？',
    options: ['5個', '10個', '25個', '100個'],
    correct: 1,
    explanation: 'SQSのバッチ操作（SendMessage、ReceiveMessage、DeleteMessage）では、一度に最大10個のメッセージを処理できます。'
  },
  {
    id: 'integration-22',
    category: 'アプリケーション統合',
    question: 'SNSのメッセージ配信で保証されるのはどれですか？',
    options: ['順序保証', '重複排除', '最低1回配信', '正確に1回配信'],
    correct: 2,
    explanation: 'SNSは最低1回の配信を保証しますが、重複配信の可能性があります。'
  },
  {
    id: 'integration-23',
    category: 'アプリケーション統合',
    question: 'EventBridgeのルールで設定できない条件はどれですか？',
    options: ['イベントパターン', 'スケジュール', 'ソース', 'データベースクエリ'],
    correct: 3,
    explanation: 'EventBridgeルールでは、イベントパターン、スケジュール、ソースを設定できますが、データベースクエリは設定できません。'
  },
  {
    id: 'integration-24',
    category: 'アプリケーション統合',
    question: 'Step Functionsの Map状態の主な用途はどれですか？',
    options: ['条件分岐', '並列処理', '繰り返し処理', '待機処理'],
    correct: 2,
    explanation: 'Map状態は、配列の各要素に対して同じ処理を並列実行するために使用されます。'
  },
  {
    id: 'integration-25',
    category: 'アプリケーション統合',
    question: 'API Gatewayの使用量プランで制御できない項目はどれですか？',
    options: ['リクエスト数', 'バースト制限', 'クォータ', 'レスポンス時間'],
    correct: 3,
    explanation: '使用量プランでは、リクエスト数、バースト制限、クォータを制御できますが、レスポンス時間は制御できません。'
  },
  // 複数選択問題
  {
    id: 'integration-multi-1',
    category: '統合サービス',
    question: 'Amazon SQSの特徴として正しいものを2つ選択してください。',
    options: [
      'メッセージの順序保証（FIFO）',
      'デッドレターキュー機能',
      'リアルタイムメッセージング',
      'プッシュ通知機能',
      'ファイル転送機能',
      'データベース機能'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Amazon SQSの特徴：FIFO キューでの順序保証、デッドレターキュー（処理失敗メッセージの隔離）。SQSはプル型のメッセージキューで、リアルタイムメッセージング、プッシュ通知、ファイル転送、DB機能は提供しません。'
  },
  {
    id: 'integration-multi-2',
    category: '統合サービス',
    question: 'Amazon SNSでサポートされている配信プロトコルを3つ選択してください。',
    options: [
      'HTTP/HTTPS',
      'Email',
      'SMS',
      'FTP',
      'Telnet',
      'SSH'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'Amazon SNSの配信プロトコル：HTTP/HTTPS（Webhook）、Email（電子メール）、SMS（テキストメッセージ）、SQS、Lambda等。FTP、Telnet、SSHは配信プロトコルとしてサポートされていません。'
  },
  {
    id: 'integration-multi-3',
    category: '統合サービス',
    question: 'AWS Step Functionsの機能として正しいものを3つ選択してください。',
    options: [
      'ワークフローの可視化',
      'エラーハンドリング',
      '並列実行制御',
      'データベース管理',
      'ファイルストレージ',
      'ユーザー認証'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Step Functionsの機能：ワークフローの可視化（状態遷移図）、エラーハンドリング（リトライ・キャッチ）、並列実行制御（並行処理）。データベース管理、ファイルストレージ、ユーザー認証は他のサービスの機能です。'
  },
  {
    id: 'integration-multi-4',
    category: '統合サービス',
    question: 'Amazon API Gatewayの認証方式として正しいものを2つ選択してください。',
    options: [
      'IAM認証',
      'Cognito User Pools',
      'Lambda Authorizer',
      'Active Directory',
      'LDAP',
      'Kerberos'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'API Gatewayの認証方式：IAM認証（AWS認証情報）、Cognito User Pools（ユーザープール）、Lambda Authorizer（カスタム認証）。Active Directory、LDAP、KerberosはAPI Gatewayの直接サポート対象ではありません。'
  },
  {
    id: 'integration-multi-5',
    category: '統合サービス',
    question: 'Amazon EventBridgeのイベントソースとして正しいものを3つ選択してください。',
    options: [
      'AWSサービス',
      'カスタムアプリケーション',
      'SaaSパートナー',
      'オンプレミスデータベース',
      'ファイルシステム',
      'プリンター'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'EventBridgeのイベントソース：AWSサービス（EC2、S3等）、カスタムアプリケーション（独自イベント）、SaaSパートナー（Salesforce等）。オンプレミスDB、ファイルシステム、プリンターは直接的なイベントソースではありません。'
  },
  {
    id: 'integration-multi-6',
    category: '統合サービス',
    question: 'Amazon MQ の特徴として正しいものを2つ選択してください。',
    options: [
      'Apache ActiveMQ サポート',
      'RabbitMQ サポート',
      'フルマネージドサービス',
      'サーバーレスアーキテクチャ',
      'NoSQL データベース',
      'ファイルストレージ'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Amazon MQの特徴：Apache ActiveMQサポート（JMSメッセージング）、RabbitMQサポート（AMQPメッセージング）。フルマネージドですがサーバーレスではなく、NoSQLやファイルストレージ機能は提供しません。'
  },
  {
    id: 'integration-multi-7',
    category: '統合サービス',
    question: 'AWS AppSync の機能として正しいものを3つ選択してください。',
    options: [
      'GraphQL API の提供',
      'リアルタイムデータ同期',
      'オフライン機能のサポート',
      'REST API の提供',
      'ファイル転送機能',
      'バッチ処理機能'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS AppSyncの機能：GraphQL APIの提供（効率的なデータクエリ）、リアルタイムデータ同期（サブスクリプション）、オフライン機能サポート（ローカルキャッシュ）。REST API、ファイル転送、バッチ処理は他のサービスです。'
  },
  {
    id: 'integration-multi-8',
    category: '統合サービス',
    question: 'Amazon Simple Workflow Service (SWF) の特徴として正しいものを2つ選択してください。',
    options: [
      '長時間実行ワークフローのサポート',
      '人間の介入を含むワークフロー',
      'サーバーレス実行',
      '自動スケーリング',
      'リアルタイムストリーミング',
      'データベース機能'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Amazon SWFの特徴：長時間実行ワークフロー（数日〜数ヶ月）のサポート、人間の介入を含むワークフロー（承認プロセス等）。サーバーレスではなく、自動スケーリング、ストリーミング、DB機能は提供しません。'
  },
  {
    id: 'integration-multi-9',
    category: '統合サービス',
    question: 'AWS X-Ray の統合機能として正しいものを3つ選択してください。',
    options: [
      'Lambda関数のトレーシング',
      'API Gatewayのトレーシング',
      'ECS/EKSのトレーシング',
      'RDSのトレーシング',
      'S3のトレーシング',
      'CloudFrontのトレーシング'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS X-Rayの統合機能：Lambda関数のトレーシング（自動統合）、API Gatewayのトレーシング（リクエスト追跡）、ECS/EKSのトレーシング（コンテナアプリ）。RDS、S3、CloudFrontは直接的なトレーシング対象ではありません。'
  },
  {
    id: 'integration-multi-10',
    category: '統合サービス',
    question: 'Amazon Kinesis Data Firehose の配信先として正しいものを2つ選択してください。',
    options: [
      'Amazon S3',
      'Amazon Redshift',
      'Amazon ElastiCache',
      'Amazon RDS',
      'Amazon DynamoDB',
      'Amazon Neptune'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Kinesis Data Firehoseの配信先：Amazon S3（データレイク）、Amazon Redshift（データウェアハウス）、Amazon OpenSearch Service、Splunk等。ElastiCache、RDS、DynamoDB、Neptuneは直接的な配信先ではありません。'
  }
]

export default integrationQuestions
