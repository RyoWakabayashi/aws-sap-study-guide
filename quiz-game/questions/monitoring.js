// 監視・ログ関連の問題
const monitoringQuestions = [
  {
    id: 'monitoring-1',
    category: '監視・ログ',
    question: 'AWSリソースの監視とアラートを提供するサービスはどれですか？',
    options: ['CloudTrail', 'Config', 'CloudWatch', 'X-Ray'],
    correct: 2,
    explanation: 'Amazon CloudWatchは、AWSリソースとアプリケーションの監視、メトリクス収集、アラート機能を提供します。'
  },
  {
    id: 'monitoring-2',
    category: '監視・ログ',
    question: '分散アプリケーションのトレーシングを行うサービスはどれですか？',
    options: ['CloudWatch', 'CloudTrail', 'X-Ray', 'Config'],
    correct: 2,
    explanation: 'AWS X-Rayは、分散アプリケーションのリクエストをトレースし、パフォーマンスの分析とデバッグを支援します。'
  },
  {
    id: 'monitoring-3',
    category: '監視・ログ',
    question: 'AWS API呼び出しのログを記録するサービスはどれですか？',
    options: ['CloudWatch', 'CloudTrail', 'X-Ray', 'Config'],
    correct: 1,
    explanation: 'AWS CloudTrailは、AWSアカウント内のAPI呼び出しを記録し、監査証跡を提供します。'
  },
  {
    id: 'monitoring-4',
    category: '監視・ログ',
    question: 'AWSリソースの設定変更を追跡するサービスはどれですか？',
    options: ['CloudWatch', 'CloudTrail', 'X-Ray', 'Config'],
    correct: 3,
    explanation: 'AWS Configは、AWSリソースの設定変更を継続的に記録・監視し、コンプライアンスを確認します。'
  },
  {
    id: 'monitoring-5',
    category: '監視・ログ',
    question: '実際のユーザーのWebサイト体験を監視するCloudWatchの機能はどれですか？',
    options: ['Metrics', 'Logs', 'RUM', 'Alarms'],
    correct: 2,
    explanation: 'CloudWatch RUM（Real User Monitoring）は、実際のユーザーのWebアプリケーション体験を監視します。'
  },
  {
    id: 'monitoring-6',
    category: '監視・ログ',
    question: 'CloudWatchの基本監視間隔はどれですか？',
    options: ['1分', '5分', '10分', '15分'],
    correct: 1,
    explanation: 'CloudWatchの基本監視は5分間隔でメトリクスを収集します。詳細監視では1分間隔になります。'
  },
  {
    id: 'monitoring-7',
    category: '監視・ログ',
    question: 'CloudWatch Logsの保持期間で設定できない値はどれですか？',
    options: ['1日', '1週間', '1ヶ月', '永続'],
    correct: 2,
    explanation: 'CloudWatch Logsでは1ヶ月（30日）の保持期間設定はできません。1日、1週間、永続などは設定可能です。'
  },
  {
    id: 'monitoring-8',
    category: '監視・ログ',
    question: 'X-Rayのサンプリングルールで制御できない項目はどれですか？',
    options: ['サンプリング率', 'リクエスト数', 'サービス名', 'データベースクエリ'],
    correct: 3,
    explanation: 'X-Rayサンプリングルールでは、サンプリング率、リクエスト数、サービス名を制御できますが、データベースクエリの詳細は制御できません。'
  },
  {
    id: 'monitoring-9',
    category: '監視・ログ',
    question: 'CloudTrailのデータイベントで記録されない操作はどれですか？',
    options: ['S3オブジェクトアクセス', 'Lambda関数実行', 'DynamoDBアクセス', 'EC2インスタンス起動'],
    correct: 3,
    explanation: 'EC2インスタンス起動はマネジメントイベントで記録され、データイベントではありません。'
  },
  {
    id: 'monitoring-10',
    category: '監視・ログ',
    question: 'CloudWatch Insightsで分析できないデータソースはどれですか？',
    options: ['CloudWatch Logs', 'VPC Flow Logs', 'CloudTrail Logs', 'RDS Performance Insights'],
    correct: 3,
    explanation: 'CloudWatch Insightsは、CloudWatch Logs、VPC Flow Logs、CloudTrail Logsを分析できますが、RDS Performance Insightsは別のサービスです。'
  },
  {
    id: 'monitoring-11',
    category: '監視・ログ',
    question: 'CloudWatch Dashboardで表示できないウィジェットタイプはどれですか？',
    options: ['メトリクス', 'ログ', 'アラーム状態', 'データベーススキーマ'],
    correct: 3,
    explanation: 'CloudWatch Dashboardでは、メトリクス、ログ、アラーム状態を表示できますが、データベーススキーマは表示できません。'
  },
  {
    id: 'monitoring-12',
    category: '監視・ログ',
    question: 'CloudWatch Eventsの後継サービスはどれですか？',
    options: ['EventBridge', 'SNS', 'SQS', 'Step Functions'],
    correct: 0,
    explanation: 'Amazon EventBridgeは、CloudWatch Eventsの後継サービスで、より多くの機能を提供します。'
  },
  {
    id: 'monitoring-13',
    category: '監視・ログ',
    question: 'X-Rayで分析できない項目はどれですか？',
    options: ['レスポンス時間', 'エラー率', 'スループット', 'ディスク使用量'],
    correct: 3,
    explanation: 'X-Rayは、アプリケーションのレスポンス時間、エラー率、スループットを分析しますが、システムレベルのディスク使用量は対象外です。'
  },
  {
    id: 'monitoring-14',
    category: '監視・ログ',
    question: 'CloudWatch Syntheticsの主な用途はどれですか？',
    options: ['リアルユーザー監視', '合成監視', 'ログ分析', 'メトリクス収集'],
    correct: 1,
    explanation: 'CloudWatch Syntheticsは、スクリプトを使用してアプリケーションエンドポイントを定期的にテストする合成監視サービスです。'
  },
  {
    id: 'monitoring-15',
    category: '監視・ログ',
    question: 'CloudWatch Application Insightsで監視できないアプリケーションはどれですか？',
    options: ['.NET', 'Java', 'SQL Server', 'MongoDB'],
    correct: 3,
    explanation: 'Application Insightsは、.NET、Java、SQL Serverアプリケーションを監視しますが、MongoDBは直接サポートされていません。'
  },
  {
    id: 'monitoring-16',
    category: '監視・ログ',
    question: 'CloudWatch Container Insightsで監視できないメトリクスはどれですか？',
    options: ['CPU使用率', 'メモリ使用率', 'ネットワーク使用率', 'アプリケーションログ'],
    correct: 3,
    explanation: 'Container Insightsは、CPU、メモリ、ネットワークなどのインフラメトリクスを監視しますが、アプリケーションログは別途設定が必要です。'
  },
  {
    id: 'monitoring-17',
    category: '監視・ログ',
    question: 'CloudWatch Lambda Insightsで提供されない情報はどれですか？',
    options: ['コールドスタート', 'メモリ使用量', '実行時間', 'ソースコード'],
    correct: 3,
    explanation: 'Lambda Insightsは、パフォーマンスメトリクスを提供しますが、ソースコードの内容は表示しません。'
  },
  {
    id: 'monitoring-18',
    category: '監視・ログ',
    question: 'VPC Flow Logsで記録されない情報はどれですか？',
    options: ['送信元IP', '宛先IP', 'プロトコル', 'HTTPヘッダー'],
    correct: 3,
    explanation: 'VPC Flow Logsは、ネットワークレベルの情報を記録しますが、アプリケーションレベルのHTTPヘッダーは記録されません。'
  },
  {
    id: 'monitoring-19',
    category: '監視・ログ',
    question: 'CloudWatch Anomaly Detectionで使用される技術はどれですか？',
    options: ['ルールベース', '機械学習', '統計分析', 'パターンマッチング'],
    correct: 1,
    explanation: 'CloudWatch Anomaly Detectionは、機械学習を使用してメトリクスの異常を自動検出します。'
  },
  {
    id: 'monitoring-20',
    category: '監視・ログ',
    question: 'CloudWatch Composite Alarmsの主な用途はどれですか？',
    options: ['単一メトリクス監視', '複数アラーム組み合わせ', 'ログ監視', 'イベント監視'],
    correct: 1,
    explanation: 'Composite Alarmsは、複数のアラームを論理演算子で組み合わせて、より複雑な監視条件を作成します。'
  },
  {
    id: 'monitoring-21',
    category: '監視・ログ',
    question: 'AWS Personal Health Dashboardで確認できない情報はどれですか？',
    options: ['サービス障害', 'メンテナンス予定', 'セキュリティ通知', 'コスト情報'],
    correct: 3,
    explanation: 'Personal Health Dashboardは、サービス状況やセキュリティ情報を提供しますが、コスト情報は含まれません。'
  },
  {
    id: 'monitoring-22',
    category: '監視・ログ',
    question: 'CloudWatch Evidently の主な機能はどれですか？',
    options: ['ログ分析', 'A/Bテスト', 'メトリクス収集', 'アラート管理'],
    correct: 1,
    explanation: 'CloudWatch Evidentlyは、機能フラグとA/Bテストを管理するサービスです。'
  },
  {
    id: 'monitoring-23',
    category: '監視・ログ',
    question: 'AWS Distro for OpenTelemetryの主な用途はどれですか？',
    options: ['ログ収集', 'メトリクス収集', 'トレース収集', 'すべて正しい'],
    correct: 3,
    explanation: 'AWS Distro for OpenTelemetryは、ログ、メトリクス、トレースを統合的に収集・送信するオープンソースツールです。'
  },
  {
    id: 'monitoring-24',
    category: '監視・ログ',
    question: 'Amazon Managed Grafanaで使用できないデータソースはどれですか？',
    options: ['CloudWatch', 'Prometheus', 'X-Ray', 'DynamoDB'],
    correct: 3,
    explanation: 'Managed Grafanaは、CloudWatch、Prometheus、X-Rayなどをサポートしますが、DynamoDBは直接データソースとして使用できません。'
  },
  {
    id: 'monitoring-25',
    category: '監視・ログ',
    question: 'Amazon Managed Service for Prometheusの主な利点はどれですか？',
    options: ['フルマネージド', 'スケーラブル', 'セキュア', 'すべて正しい'],
    correct: 3,
    explanation: 'Managed Service for Prometheusは、フルマネージド、高可用性、セキュアなPrometheusサービスを提供します。'
  }
]

export default monitoringQuestions
