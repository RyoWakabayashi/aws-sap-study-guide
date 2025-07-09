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
  },
  // 複数選択問題
  {
    id: 'operations-multi-1',
    category: '運用管理',
    question: 'AWS Systems Managerの機能として正しいものを3つ選択してください。',
    options: [
      'Parameter Store',
      'Session Manager',
      'Patch Manager',
      'Database Manager',
      'Network Manager',
      'User Manager'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Systems Managerの機能：Parameter Store（設定管理）、Session Manager（セキュアなシェルアクセス）、Patch Manager（パッチ管理）。Database、Network、User Managerは存在しない機能名です。'
  },
  {
    id: 'operations-multi-2',
    category: '運用管理',
    question: 'AWS CloudFormationの機能として正しいものを2つ選択してください。',
    options: [
      'Infrastructure as Code',
      'スタックの作成・更新・削除',
      'リアルタイムモニタリング',
      'データベースクエリ最適化',
      'ネットワークトラフィック分析',
      'ユーザー行動分析'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS CloudFormationの機能：Infrastructure as Code（テンプレートベースのインフラ管理）、スタック管理（リソースの一括作成・更新・削除）。モニタリング、DB最適化、トラフィック分析、行動分析は他のサービスの機能です。'
  },
  {
    id: 'operations-multi-3',
    category: '運用管理',
    question: 'AWS Configの機能として正しいものを3つ選択してください。',
    options: [
      'リソース設定の記録',
      'コンプライアンス監視',
      '設定変更の追跡',
      'パフォーマンス最適化',
      'コスト分析',
      'ユーザー管理'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Configの機能：リソース設定の記録（構成履歴）、コンプライアンス監視（ルール評価）、設定変更の追跡（変更検出）。パフォーマンス最適化、コスト分析、ユーザー管理は他のサービスの機能です。'
  },
  {
    id: 'operations-multi-4',
    category: '運用管理',
    question: 'AWS OpsWorksでサポートされているスタックタイプを2つ選択してください。',
    options: [
      'Chef Automate',
      'Puppet Enterprise',
      'Ansible Tower',
      'Terraform Enterprise',
      'Jenkins',
      'GitLab'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS OpsWorksでサポートされるスタック：Chef Automate（Chef管理）、Puppet Enterprise（Puppet管理）。Ansible、Terraform、Jenkins、GitLabは他のツールで、OpsWorksの直接サポート対象ではありません。'
  },
  {
    id: 'operations-multi-5',
    category: '運用管理',
    question: 'AWS Service Catalogの利点として正しいものを3つ選択してください。',
    options: [
      'IT管理の標準化',
      'セルフサービスプロビジョニング',
      'ガバナンスの強化',
      'パフォーマンス向上',
      'データ暗号化',
      'ネットワーク最適化'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Service Catalogの利点：IT管理の標準化（承認済み製品の提供）、セルフサービスプロビジョニング（ユーザー自身でのリソース作成）、ガバナンス強化（統制された環境）。パフォーマンス向上、暗号化、ネットワーク最適化は直接的な利点ではありません。'
  },
  {
    id: 'operations-multi-6',
    category: '運用管理',
    question: 'AWS CodePipeline の機能として正しいものを2つ選択してください。',
    options: [
      '継続的インテグレーション',
      '継続的デプロイメント',
      'ソースコード管理',
      'バグ追跡管理',
      'プロジェクト管理',
      'ドキュメント管理'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS CodePipelineの機能：継続的インテグレーション（CI）、継続的デプロイメント（CD）。ソースコード管理はCodeCommit、バグ追跡・プロジェクト・ドキュメント管理は他のツールの機能です。'
  },
  {
    id: 'operations-multi-7',
    category: '運用管理',
    question: 'AWS Systems Manager Automation の機能として正しいものを3つ選択してください。',
    options: [
      'EC2インスタンスの自動化タスク',
      'パッチ適用の自動化',
      'AMI作成の自動化',
      'データベースのバックアップ',
      'ネットワーク設定の変更',
      'ユーザーアカウントの作成'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'Systems Manager Automationの機能：EC2インスタンスの自動化タスク（起動・停止等）、パッチ適用の自動化、AMI作成の自動化。データベースバックアップ、ネットワーク設定変更、ユーザーアカウント作成は対象外です。'
  },
  {
    id: 'operations-multi-8',
    category: '運用管理',
    question: 'AWS CodeDeploy の配信戦略として正しいものを2つ選択してください。',
    options: [
      'Blue/Green デプロイメント',
      'Rolling デプロイメント',
      'Canary デプロイメント',
      'A/B テストデプロイメント',
      'Shadow デプロイメント',
      'Feature Flag デプロイメント'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS CodeDeployの配信戦略：Blue/Greenデプロイメント（新旧環境の切り替え）、Rollingデプロイメント（段階的更新）。Canary、A/B、Shadow、Feature Flagは他のツールや手法です。'
  },
  {
    id: 'operations-multi-9',
    category: '運用管理',
    question: 'AWS Well-Architected Tool の機能として正しいものを3つ選択してください。',
    options: [
      'アーキテクチャレビューの実施',
      'ベストプラクティスとの比較',
      '改善提案の提供',
      'コストの自動最適化',
      'セキュリティ設定の自動化',
      'パフォーマンスの自動調整'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Well-Architected Toolの機能：アーキテクチャレビューの実施、Well-Architected Frameworkのベストプラクティスとの比較、改善提案の提供。自動最適化、自動化、自動調整は行わず、レビューと提案のみです。'
  },
  {
    id: 'operations-multi-10',
    category: '運用管理',
    question: 'AWS Resource Groups の機能として正しいものを2つ選択してください。',
    options: [
      'リソースの論理的なグループ化',
      'タグベースのリソース管理',
      'リソースの自動作成',
      'コストの自動最適化',
      'セキュリティ設定の統一',
      'パフォーマンス監視の自動化'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Resource Groupsの機能：リソースの論理的なグループ化（プロジェクト・環境別等）、タグベースのリソース管理（タグによる自動グループ化）。リソース作成、コスト最適化、セキュリティ統一、性能監視は他のサービスです。'
  }
]

export default operationsQuestions
