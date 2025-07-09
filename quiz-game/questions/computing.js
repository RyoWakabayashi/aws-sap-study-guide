// コンピューティングサービス関連の問題
const computingQuestions = [
  {
    id: 'computing-1',
    category: 'コンピューティング',
    question: 'サーバーレスでコンテナを実行できるAWSサービスはどれですか？',
    options: ['ECS', 'EKS', 'Fargate', 'Lambda'],
    correct: 2,
    explanation: 'AWS Fargateは、サーバーを管理することなくコンテナを実行できるサーバーレスコンピューティングエンジンです。'
  },
  {
    id: 'computing-2',
    category: 'コンピューティング',
    question: '最大90%のコスト削減が可能なEC2の購入オプションはどれですか？',
    options: ['オンデマンド', 'リザーブドインスタンス', 'スポットインスタンス', 'Savings Plans'],
    correct: 2,
    explanation: 'スポットインスタンスは、未使用のEC2容量を利用することで最大90%のコスト削減が可能です。'
  },
  {
    id: 'computing-3',
    category: 'コンピューティング',
    question: 'ARM Gravitonプロセッサを使用してコストを削減できるEC2インスタンスタイプはどれですか？',
    options: ['M5', 'C5', 'M6g', 'T3'],
    correct: 2,
    explanation: 'M6gインスタンスはAWS Graviton2プロセッサを使用し、同等のx86ベースインスタンスと比較して最大40%優れた価格性能比を提供します。'
  },
  {
    id: 'computing-4',
    category: 'コンピューティング',
    question: 'バーストパフォーマンスを提供するEC2インスタンスタイプはどれですか？',
    options: ['M5', 'C5', 'T3', 'R5'],
    correct: 2,
    explanation: 'T3インスタンスは、ベースラインレベルのCPUパフォーマンスを提供し、必要に応じてバーストできる機能を持っています。'
  },
  {
    id: 'computing-5',
    category: 'コンピューティング',
    question: 'Kubernetesクラスターをマネージドで実行できるAWSサービスはどれですか？',
    options: ['ECS', 'EKS', 'Fargate', 'Batch'],
    correct: 1,
    explanation: 'Amazon EKS（Elastic Kubernetes Service）は、マネージドKubernetesサービスです。'
  },
  {
    id: 'computing-6',
    category: 'コンピューティング',
    question: '最大15分間実行できるサーバーレスコンピューティングサービスはどれですか？',
    options: ['Lambda', 'Fargate', 'Batch', 'Step Functions'],
    correct: 0,
    explanation: 'AWS Lambdaの最大実行時間は15分です。'
  }
]

export default computingQuestions
