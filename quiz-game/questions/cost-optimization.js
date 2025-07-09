// コスト最適化関連の問題
const costOptimizationQuestions = [
  {
    id: 'cost-optimization-1',
    category: 'コスト最適化',
    question: 'EC2とFargateの両方に適用できる割引プランはどれですか？',
    options: ['リザーブドインスタンス', 'Savings Plans', 'スポットインスタンス', 'オンデマンド'],
    correct: 1,
    explanation: 'Savings Plansは、EC2、Fargate、Lambdaに適用できる柔軟な割引プランです。'
  },
  {
    id: 'cost-optimization-2',
    category: 'コスト最適化',
    question: 'S3のコストを自動的に最適化するストレージクラスはどれですか？',
    options: ['Standard', 'Standard-IA', 'Glacier', 'Intelligent-Tiering'],
    correct: 3,
    explanation: 'S3 Intelligent-Tieringは、アクセスパターンに基づいて自動的にコストを最適化します。'
  },
  {
    id: 'cost-optimization-3',
    category: 'コスト最適化',
    question: 'AWSのコスト異常を自動検知するサービスはどれですか？',
    options: ['Cost Explorer', 'Budgets', 'Cost Anomaly Detection', 'Trusted Advisor'],
    correct: 2,
    explanation: 'AWS Cost Anomaly Detectionは、機械学習を使用してコストの異常を自動検知します。'
  },
  {
    id: 'cost-optimization-4',
    category: 'コスト最適化',
    question: '未使用のEBSボリュームを特定するのに最適なサービスはどれですか？',
    options: ['CloudWatch', 'Config', 'Trusted Advisor', 'Cost Explorer'],
    correct: 2,
    explanation: 'AWS Trusted Advisorは、未使用のEBSボリュームなどのコスト最適化の機会を特定します。'
  },
  {
    id: 'cost-optimization-5',
    category: 'コスト最適化',
    question: 'データ転送コストを削減するために使用すべきサービスはどれですか？',
    options: ['CloudFront', 'Direct Connect', 'VPC Endpoint', 'すべて正しい'],
    correct: 3,
    explanation: 'CloudFront、Direct Connect、VPC Endpointはすべてデータ転送コストの削減に役立ちます。'
  }
]

export default costOptimizationQuestions
