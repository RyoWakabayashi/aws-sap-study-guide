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
  }
]

export default integrationQuestions
