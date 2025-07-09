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
    options: ['SNS', 'SQS', 'EventBridge', 'Step Functions'],
    correct: 0,
    explanation: 'Amazon SNS（Simple Notification Service）は、フルマネージドPub/Subメッセージングサービスです。'
  },
  {
    id: 'integration-3',
    category: 'アプリケーション統合',
    question: 'サーバーレスワークフローを構築するサービスはどれですか？',
    options: ['SNS', 'SQS', 'EventBridge', 'Step Functions'],
    correct: 3,
    explanation: 'AWS Step Functionsは、サーバーレスワークフローを構築するためのサービスです。'
  },
  {
    id: 'integration-4',
    category: 'アプリケーション統合',
    question: 'イベント駆動アーキテクチャを構築するためのサービスはどれですか？',
    options: ['SNS', 'SQS', 'EventBridge', 'Step Functions'],
    correct: 2,
    explanation: 'Amazon EventBridge（旧CloudWatch Events）は、イベント駆動アプリケーションを構築するためのサーバーレスイベントバスです。'
  },
  {
    id: 'integration-5',
    category: 'アプリケーション統合',
    question: 'RESTful APIを作成・管理するサービスはどれですか？',
    options: ['API Gateway', 'CloudFront', 'Route 53', 'ALB'],
    correct: 0,
    explanation: 'Amazon API Gatewayは、RESTful APIとWebSocket APIを作成、公開、維持、監視、保護するためのサービスです。'
  }
]

export default integrationQuestions
