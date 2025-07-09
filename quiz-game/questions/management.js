// 管理・ガバナンス関連の問題
const managementQuestions = [
  {
    id: 'management-1',
    category: '管理・ガバナンス',
    question: '複数のAWSアカウントを一元管理するサービスはどれですか？',
    options: ['IAM', 'Organizations', 'Control Tower', 'SSO'],
    correct: 1,
    explanation: 'AWS Organizationsは、複数のAWSアカウントを一元的に管理するサービスです。'
  },
  {
    id: 'management-2',
    category: '管理・ガバナンス',
    question: 'マルチアカウント環境のランディングゾーンを設定するサービスはどれですか？',
    options: ['Organizations', 'Control Tower', 'Config', 'CloudFormation'],
    correct: 1,
    explanation: 'AWS Control Towerは、安全でよく設計されたマルチアカウント環境を設定・管理するサービスです。'
  },
  {
    id: 'management-3',
    category: '管理・ガバナンス',
    question: 'インフラストラクチャをコードとして管理するサービスはどれですか？',
    options: ['CloudFormation', 'CDK', 'Terraform', 'すべて正しい'],
    correct: 3,
    explanation: 'CloudFormation、CDK、Terraformはすべて、インフラストラクチャをコードとして管理するためのツールです。'
  },
  {
    id: 'management-4',
    category: '管理・ガバナンス',
    question: 'AWSリソースのコストを分析・最適化するサービスはどれですか？',
    options: ['Cost Explorer', 'Budgets', 'Trusted Advisor', 'すべて正しい'],
    correct: 3,
    explanation: 'Cost Explorer、Budgets、Trusted Advisorはすべて、AWSコストの分析・最適化に役立つサービスです。'
  },
  {
    id: 'management-5',
    category: '管理・ガバナンス',
    question: 'システム管理タスクを自動化するサービスはどれですか？',
    options: ['Systems Manager', 'OpsWorks', 'CodeDeploy', 'すべて正しい'],
    correct: 3,
    explanation: 'Systems Manager、OpsWorks、CodeDeployはすべて、システム管理タスクの自動化に使用できます。'
  }
]

export default managementQuestions
