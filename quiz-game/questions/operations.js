// 運用・デプロイ関連の問題
const operationsQuestions = [
  {
    id: 'operations-1',
    category: '運用・デプロイ',
    question: 'Blue/Greenデプロイメントを自動化するサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 2,
    explanation: 'AWS CodeDeployは、Blue/Greenデプロイメントを含む様々なデプロイメント戦略を自動化するサービスです。'
  },
  {
    id: 'operations-2',
    category: '運用・デプロイ',
    question: 'CI/CDパイプラインを構築するサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 3,
    explanation: 'AWS CodePipelineは、継続的インテグレーション・継続的デプロイメント（CI/CD）パイプラインを構築・管理するサービスです。'
  },
  {
    id: 'operations-3',
    category: '運用・デプロイ',
    question: 'ソースコードのビルドを行うサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 1,
    explanation: 'AWS CodeBuildは、ソースコードをコンパイル・テストし、デプロイ可能なアーティファクトを生成するフルマネージドビルドサービスです。'
  },
  {
    id: 'operations-4',
    category: '運用・デプロイ',
    question: 'Gitリポジトリをホストするサービスはどれですか？',
    options: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline'],
    correct: 0,
    explanation: 'AWS CodeCommitは、プライベートGitリポジトリをホストするフルマネージドソース管理サービスです。'
  },
  {
    id: 'operations-5',
    category: '運用・デプロイ',
    question: 'インフラストラクチャの設定ドリフトを検出するサービスはどれですか？',
    options: ['CloudFormation', 'Config', 'Systems Manager', 'OpsWorks'],
    correct: 1,
    explanation: 'AWS Configは、リソースの設定変更を追跡し、設定ドリフトを検出してコンプライアンスを確認します。'
  },
  {
    id: 'operations-6',
    category: '運用・デプロイ',
    question: 'CodeDeployでサポートされていないデプロイメント戦略はどれですか？',
    options: ['In-place', 'Blue/Green', 'Rolling', 'Canary'],
    correct: 2,
    explanation: 'CodeDeployは、In-place、Blue/Green、Canaryデプロイメントをサポートしますが、Rollingデプロイメントは直接サポートされていません。'
  },
  {
    id: 'operations-7',
    category: '運用・デプロイ',
    question: 'CodeBuildで使用できないビルド環境はどれですか？',
    options: ['Linux', 'Windows', 'macOS', 'すべて使用可能'],
    correct: 2,
    explanation: 'CodeBuildは、LinuxとWindowsのビルド環境を提供しますが、macOSは現在サポートされていません。'
  },
  {
    id: 'operations-8',
    category: '運用・デプロイ',
    question: 'CodePipelineのソースステージで使用できないソースはどれですか？',
    options: ['CodeCommit', 'GitHub', 'S3', 'FTP'],
    correct: 3,
    explanation: 'CodePipelineは、CodeCommit、GitHub、S3をソースとして使用できますが、FTPは直接サポートされていません。'
  },
  {
    id: 'operations-9',
    category: '運用・デプロイ',
    question: 'AWS OpsWorksで管理できないサービスはどれですか？',
    options: ['Chef', 'Puppet', 'Ansible', 'Kubernetes'],
    correct: 3,
    explanation: 'OpsWorksは、Chef、Puppet、Ansibleを使用した設定管理をサポートしますが、Kubernetesは別のサービス（EKS）で管理されます。'
  },
  {
    id: 'operations-10',
    category: '運用・デプロイ',
    question: 'Systems Manager Session Managerの主な利点はどれですか？',
    options: ['SSH不要', 'ポート開放不要', '監査ログ', 'すべて正しい'],
    correct: 3,
    explanation: 'Session Managerは、SSH不要、ポート開放不要、完全な監査ログを提供するセキュアなシェルアクセスを実現します。'
  },
  {
    id: 'operations-11',
    category: '運用・デプロイ',
    question: 'CodeStarの主な機能はどれですか？',
    options: ['プロジェクトテンプレート', 'チーム管理', 'CI/CD統合', 'すべて正しい'],
    correct: 3,
    explanation: 'CodeStarは、プロジェクトテンプレート、チーム管理、CI/CDパイプラインを統合したプロジェクト管理サービスです。'
  },
  {
    id: 'operations-12',
    category: '運用・デプロイ',
    question: 'AWS Protonの主な対象はどれですか？',
    options: ['モノリスアプリケーション', 'マイクロサービス', 'レガシーアプリケーション', 'デスクトップアプリケーション'],
    correct: 1,
    explanation: 'AWS Protonは、マイクロサービスとコンテナベースアプリケーションのインフラとデプロイメントを自動化します。'
  },
  {
    id: 'operations-13',
    category: '運用・デプロイ',
    question: 'CodeArtifactの主な用途はどれですか？',
    options: ['ソース管理', 'ビルド管理', 'パッケージ管理', 'デプロイ管理'],
    correct: 2,
    explanation: 'CodeArtifactは、ソフトウェアパッケージ（npm、Maven、PyPIなど）を安全に保存・共有するアーティファクトリポジトリです。'
  },
  {
    id: 'operations-14',
    category: '運用・デプロイ',
    question: 'CodeGuruで提供されない機能はどれですか？',
    options: ['コードレビュー', 'パフォーマンス分析', 'セキュリティ分析', 'UI/UXデザイン'],
    correct: 3,
    explanation: 'CodeGuruは、コードレビュー、パフォーマンス分析、セキュリティ分析を提供しますが、UI/UXデザインは対象外です。'
  },
  {
    id: 'operations-15',
    category: '運用・デプロイ',
    question: 'Systems Manager Patch Managerで管理できないOSはどれですか？',
    options: ['Amazon Linux', 'Ubuntu', 'Windows', 'macOS'],
    correct: 3,
    explanation: 'Patch Managerは、Linux系OS（Amazon Linux、Ubuntu等）とWindowsをサポートしますが、macOSは対象外です。'
  },
  {
    id: 'operations-16',
    category: '運用・デプロイ',
    question: 'AWS Copilotの主な用途はどれですか？',
    options: ['サーバーレスアプリ', 'コンテナアプリ', 'Webアプリ', 'モバイルアプリ'],
    correct: 1,
    explanation: 'AWS Copilotは、コンテナベースアプリケーションのビルド、デプロイ、運用を簡素化するCLIツールです。'
  },
  {
    id: 'operations-17',
    category: '運用・デプロイ',
    question: 'AWS App Runnerの主な特徴はどれですか？',
    options: ['フルマネージド', 'オートスケーリング', 'ソースコード直接デプロイ', 'すべて正しい'],
    correct: 3,
    explanation: 'App Runnerは、ソースコードやコンテナイメージから直接Webアプリケーションをデプロイ・実行するフルマネージドサービスです。'
  },
  {
    id: 'operations-18',
    category: '運用・デプロイ',
    question: 'AWS Amplifyで構築できないアプリケーションタイプはどれですか？',
    options: ['Webアプリ', 'モバイルアプリ', 'デスクトップアプリ', 'すべて構築可能'],
    correct: 2,
    explanation: 'Amplifyは、Webアプリとモバイルアプリのフルスタック開発をサポートしますが、デスクトップアプリは対象外です。'
  },
  {
    id: 'operations-19',
    category: '運用・デプロイ',
    question: 'Systems Manager Automation Documentsで実行できない操作はどれですか？',
    options: ['EC2インスタンス管理', 'RDS管理', 'S3管理', 'ユーザー管理'],
    correct: 3,
    explanation: 'Automation Documentsは、AWSリソースの管理を自動化しますが、IAMユーザー管理は別途IAMで行います。'
  },
  {
    id: 'operations-20',
    category: '運用・デプロイ',
    question: 'AWS Fault Injection Simulatorで実行できない障害タイプはどれですか？',
    options: ['EC2停止', 'ネットワーク遅延', 'CPU負荷', 'データ削除'],
    correct: 3,
    explanation: 'Fault Injection Simulatorは、制御された障害を注入しますが、データ削除のような破壊的操作は実行しません。'
  },
  {
    id: 'operations-21',
    category: '運用・デプロイ',
    question: 'AWS Cloud9の主な機能はどれですか？',
    options: ['クラウドIDE', 'コラボレーション', 'ターミナルアクセス', 'すべて正しい'],
    correct: 3,
    explanation: 'Cloud9は、クラウドベースのIDE、リアルタイムコラボレーション、ターミナルアクセスを提供します。'
  },
  {
    id: 'operations-22',
    category: '運用・デプロイ',
    question: 'AWS CloudShellで利用できない機能はどれですか？',
    options: ['AWS CLI', 'Python', 'Node.js', 'GUI アプリケーション'],
    correct: 3,
    explanation: 'CloudShellは、ブラウザベースのシェル環境で、CLI ツールやスクリプト言語を提供しますが、GUI アプリケーションは実行できません。'
  },
  {
    id: 'operations-23',
    category: '運用・デプロイ',
    question: 'AWS Systems Manager Fleet Managerの主な用途はどれですか？',
    options: ['インスタンス監視', 'リモートデスクトップ', 'ファイル管理', 'すべて正しい'],
    correct: 3,
    explanation: 'Fleet Managerは、EC2インスタンスの監視、リモートデスクトップ接続、ファイル管理を統合的に提供します。'
  },
  {
    id: 'operations-24',
    category: '運用・デプロイ',
    question: 'AWS CodeCatalystの主な機能はどれですか？',
    options: ['プロジェクト管理', 'CI/CD', 'コラボレーション', 'すべて正しい'],
    correct: 3,
    explanation: 'CodeCatalystは、プロジェクト管理、CI/CD、チームコラボレーションを統合した開発プラットフォームです。'
  },
  {
    id: 'operations-25',
    category: '運用・デプロイ',
    question: 'AWS Application Composerの主な用途はどれですか？',
    options: ['サーバーレスアプリ設計', 'コンテナアプリ設計', 'Webアプリ設計', 'モバイルアプリ設計'],
    correct: 0,
    explanation: 'Application Composerは、サーバーレスアプリケーションのアーキテクチャを視覚的に設計・構築するツールです。'
  }
]

export default operationsQuestions
