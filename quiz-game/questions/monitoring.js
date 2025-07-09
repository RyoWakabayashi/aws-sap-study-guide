// 監視・ログ関連の問題
const monitoringQuestions = [
  {
    id: 'monitoring-1',
    category: '監視・ログ',
    question: 'AWSリソースの監視とアラートを提供するサービスはどれですか？',
    options: ['CloudTrail', 'CloudWatch', 'Config', 'X-Ray'],
    correct: 1,
    explanation: 'Amazon CloudWatchは、AWSリソースとアプリケーションの監視サービスです。'
  },
  {
    id: 'monitoring-2',
    category: '監視・ログ',
    question: '分散アプリケーションのトレーシングを行うサービスはどれですか？',
    options: ['CloudWatch', 'CloudTrail', 'X-Ray', 'Config'],
    correct: 2,
    explanation: 'AWS X-Rayは、分散アプリケーションの分析とデバッグを支援するサービスです。'
  },
  {
    id: 'monitoring-3',
    category: '監視・ログ',
    question: 'AWS API呼び出しのログを記録するサービスはどれですか？',
    options: ['CloudWatch', 'CloudTrail', 'Config', 'VPC Flow Logs'],
    correct: 1,
    explanation: 'AWS CloudTrailは、AWSアカウントのAPI呼び出しを記録・監視するサービスです。'
  },
  {
    id: 'monitoring-4',
    category: '監視・ログ',
    question: 'AWSリソースの設定変更を追跡するサービスはどれですか？',
    options: ['CloudWatch', 'CloudTrail', 'Config', 'Systems Manager'],
    correct: 2,
    explanation: 'AWS Configは、AWSリソースの設定を評価、監査、評価するサービスです。'
  },
  {
    id: 'monitoring-5',
    category: '監視・ログ',
    question: '実際のユーザーのWebサイト体験を監視するCloudWatchの機能はどれですか？',
    options: ['Metrics', 'Logs', 'Alarms', 'RUM'],
    correct: 3,
    explanation: 'CloudWatch RUM（Real User Monitoring）は、実際のユーザーのWebアプリケーション体験を監視します。'
  }
]

export default monitoringQuestions
