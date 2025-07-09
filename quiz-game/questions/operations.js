// 運用・デプロイ関連の問題
const operationsQuestions = [
  {
    id: 'operations-1',
    category: '運用・デプロイ',
    question: 'Blue/Greenデプロイメントを自動化するサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 2,
    explanation: 'AWS CodeDeployは、Blue/Greenデプロイメントを含む様々なデプロイメント戦略を自動化します。'
  },
  {
    id: 'operations-2',
    category: '運用・デプロイ',
    question: 'CI/CDパイプラインを構築するサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 3,
    explanation: 'AWS CodePipelineは、継続的インテグレーション・継続的デプロイメントのパイプラインを構築するサービスです。'
  },
  {
    id: 'operations-3',
    category: '運用・デプロイ',
    question: 'ソースコードのビルドを行うサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 1,
    explanation: 'AWS CodeBuildは、ソースコードのコンパイル、テスト実行、デプロイ可能なパッケージ作成を行うサービスです。'
  },
  {
    id: 'operations-4',
    category: '運用・デプロイ',
    question: 'Gitリポジトリをホストするサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 0,
    explanation: 'AWS CodeCommitは、プライベートGitリポジトリをホストするマネージドサービスです。'
  },
  {
    id: 'operations-5',
    category: '運用・デプロイ',
    question: 'インフラストラクチャの設定ドリフトを検出するサービスはどれですか？',
    options: ['CloudFormation', 'Config', 'Systems Manager', 'OpsWorks'],
    correct: 1,
    explanation: 'AWS Configは、リソースの設定変更を追跡し、設定ドリフトを検出できます。'
  }
]

export default operationsQuestions
