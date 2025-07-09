// 管理・ガバナンス関連の問題
const managementQuestions = [
  {
    id: 'management-1',
    category: '管理・ガバナンス',
    question: '複数のAWSアカウントを一元管理するサービスはどれですか？',
    options: ['IAM', 'Organizations', 'Control Tower', 'Config'],
    correct: 1,
    explanation: 'AWS Organizationsは、複数のAWSアカウントを一元的に管理するサービスです。'
  },
  {
    id: 'management-2',
    category: '管理・ガバナンス',
    question: 'マルチアカウント環境のランディングゾーンを設定するサービスはどれですか？',
    options: ['Organizations', 'Control Tower', 'Config', 'CloudFormation'],
    correct: 1,
    explanation: 'AWS Control Towerは、マルチアカウント環境のランディングゾーンを自動的に設定・管理します。'
  },
  {
    id: 'management-3',
    category: '管理・ガバナンス',
    question: 'インフラストラクチャをコードとして管理するサービスはどれですか？',
    options: ['CloudFormation', 'Config', 'Systems Manager', 'OpsWorks'],
    correct: 0,
    explanation: 'AWS CloudFormationは、インフラストラクチャをコード（テンプレート）として定義・管理するサービスです。'
  },
  {
    id: 'management-4',
    category: '管理・ガバナンス',
    question: 'AWSリソースのコストを分析・最適化するサービスはどれですか？',
    options: ['CloudWatch', 'Cost Explorer', 'Trusted Advisor', 'Config'],
    correct: 1,
    explanation: 'AWS Cost Explorerは、AWSの使用量とコストを分析し、最適化の推奨事項を提供します。'
  },
  {
    id: 'management-5',
    category: '管理・ガバナンス',
    question: 'システム管理タスクを自動化するサービスはどれですか？',
    options: ['CloudFormation', 'Config', 'Systems Manager', 'OpsWorks'],
    correct: 2,
    explanation: 'AWS Systems Managerは、パッチ管理、設定管理、運用タスクの自動化を提供します。'
  },
  {
    id: 'management-6',
    category: '管理・ガバナンス',
    question: 'AWS Configの主な機能はどれですか？',
    options: ['コスト管理', '設定管理', 'パフォーマンス監視', 'セキュリティ監査'],
    correct: 1,
    explanation: 'AWS Configは、AWSリソースの設定を記録・監視し、コンプライアンスを確認するサービスです。'
  },
  {
    id: 'management-7',
    category: '管理・ガバナンス',
    question: 'CloudTrailで記録されるイベントタイプに含まれないものはどれですか？',
    options: ['マネジメントイベント', 'データイベント', 'インサイトイベント', 'パフォーマンスイベント'],
    correct: 3,
    explanation: 'CloudTrailは、マネジメント、データ、インサイトイベントを記録しますが、パフォーマンスイベントは記録しません。'
  },
  {
    id: 'management-8',
    category: '管理・ガバナンス',
    question: 'Trusted Advisorで提供されない推奨カテゴリはどれですか？',
    options: ['コスト最適化', 'パフォーマンス', 'セキュリティ', 'データベース設計'],
    correct: 3,
    explanation: 'Trusted Advisorは、コスト最適化、パフォーマンス、セキュリティ、フォルトトレラント、サービス制限の推奨事項を提供します。'
  },
  {
    id: 'management-9',
    category: '管理・ガバナンス',
    question: 'Service Control Policies（SCP）の主な用途はどれですか？',
    options: ['コスト制御', '権限制御', 'パフォーマンス制御', 'セキュリティ制御'],
    correct: 1,
    explanation: 'SCPは、AWS Organizations内のアカウントで実行可能なアクションを制限する権限制御機能です。'
  },
  {
    id: 'management-10',
    category: '管理・ガバナンス',
    question: 'CloudFormation StackSetsの主な用途はどれですか？',
    options: ['単一アカウント展開', '複数アカウント展開', 'ローカル展開', 'テスト環境展開'],
    correct: 1,
    explanation: 'CloudFormation StackSetsは、複数のアカウントやリージョンにスタックを一括展開するサービスです。'
  },
  {
    id: 'management-11',
    category: '管理・ガバナンス',
    question: 'Systems Manager Parameter Storeの主な用途はどれですか？',
    options: ['ファイル保存', '設定値管理', 'ログ管理', 'メトリクス管理'],
    correct: 1,
    explanation: 'Parameter Storeは、設定データや機密情報を安全に保存・管理するサービスです。'
  },
  {
    id: 'management-12',
    category: '管理・ガバナンス',
    question: 'AWS Budgetsで設定できないアラートタイプはどれですか？',
    options: ['実際のコスト', '予測コスト', '使用量', 'パフォーマンス'],
    correct: 3,
    explanation: 'AWS Budgetsは、コストと使用量に基づくアラートを設定できますが、パフォーマンスアラートは設定できません。'
  },
  {
    id: 'management-13',
    category: '管理・ガバナンス',
    question: 'AWS Well-Architected Toolの主な機能はどれですか？',
    options: ['コスト計算', 'アーキテクチャ評価', 'パフォーマンス監視', 'セキュリティ監査'],
    correct: 1,
    explanation: 'Well-Architected Toolは、AWS Well-Architected Frameworkに基づいてアーキテクチャを評価するサービスです。'
  },
  {
    id: 'management-14',
    category: '管理・ガバナンス',
    question: 'AWS License Managerの主な用途はどれですか？',
    options: ['AWSライセンス管理', 'サードパーティライセンス管理', '両方', 'どちらでもない'],
    correct: 1,
    explanation: 'License Managerは、Microsoft、Oracle、SAP等のサードパーティソフトウェアライセンスを管理します。'
  },
  {
    id: 'management-15',
    category: '管理・ガバナンス',
    question: 'AWS Resource Groupsの主な機能はどれですか？',
    options: ['リソース作成', 'リソース分類', 'リソース削除', 'リソース監視'],
    correct: 1,
    explanation: 'Resource Groupsは、タグやその他の条件に基づいてAWSリソースを論理的にグループ化します。'
  },
  {
    id: 'management-16',
    category: '管理・ガバナンス',
    question: 'AWS Tag Editorの主な用途はどれですか？',
    options: ['タグ作成', 'タグ一括編集', 'タグ削除', 'すべて正しい'],
    correct: 3,
    explanation: 'Tag Editorは、複数のリソースのタグを一括で作成、編集、削除できるツールです。'
  },
  {
    id: 'management-17',
    category: '管理・ガバナンス',
    question: 'AWS Service Catalogの主な目的はどれですか？',
    options: ['サービス監視', 'サービス標準化', 'サービス最適化', 'サービス統合'],
    correct: 1,
    explanation: 'Service Catalogは、承認されたITサービスのカタログを作成し、標準化されたデプロイを実現します。'
  },
  {
    id: 'management-18',
    category: '管理・ガバナンス',
    question: 'AWS Personal Health Dashboardの主な機能はどれですか？',
    options: ['一般的なサービス状況', '個人化されたサービス状況', 'パフォーマンス監視', 'コスト監視'],
    correct: 1,
    explanation: 'Personal Health Dashboardは、使用しているAWSサービスに影響する問題を個人化して通知します。'
  },
  {
    id: 'management-19',
    category: '管理・ガバナンス',
    question: 'AWS Compute Optimizerで最適化推奨を受けられないリソースはどれですか？',
    options: ['EC2', 'Lambda', 'EBS', 'RDS'],
    correct: 3,
    explanation: 'Compute OptimizerはEC2、Lambda、EBSの最適化推奨を提供しますが、RDSは対象外です。'
  },
  {
    id: 'management-20',
    category: '管理・ガバナンス',
    question: 'AWS Application Discovery Serviceの主な用途はどれですか？',
    options: ['新規アプリ開発', '既存アプリ分析', 'アプリ監視', 'アプリ最適化'],
    correct: 1,
    explanation: 'Application Discovery Serviceは、オンプレミスのアプリケーションとインフラを分析し、移行計画を支援します。'
  },
  {
    id: 'management-21',
    category: '管理・ガバナンス',
    question: 'AWS Migration Hubの主な機能はどれですか？',
    options: ['移行実行', '移行追跡', '移行最適化', '移行監視'],
    correct: 1,
    explanation: 'Migration Hubは、複数の移行ツールからの進捗を一元的に追跡・監視するサービスです。'
  },
  {
    id: 'management-22',
    category: '管理・ガバナンス',
    question: 'AWS Protonの主な用途はどれですか？',
    options: ['インフラ管理', 'アプリケーション配信', 'コンテナ管理', 'すべて正しい'],
    correct: 3,
    explanation: 'AWS Protonは、インフラとアプリケーションの配信を自動化し、開発者の生産性を向上させます。'
  },
  {
    id: 'management-23',
    category: '管理・ガバナンス',
    question: 'AWS Fault Injection Simulatorの主な目的はどれですか？',
    options: ['障害修復', '障害テスト', '障害監視', '障害予防'],
    correct: 1,
    explanation: 'Fault Injection Simulatorは、制御された障害を注入してシステムの回復力をテストします。'
  },
  {
    id: 'management-24',
    category: '管理・ガバナンス',
    question: 'AWS Resilience Hubの主な機能はどれですか？',
    options: ['回復力評価', '回復力向上', '回復力監視', 'すべて正しい'],
    correct: 3,
    explanation: 'Resilience Hubは、アプリケーションの回復力を評価、向上、監視する包括的なサービスです。'
  },
  {
    id: 'management-25',
    category: '管理・ガバナンス',
    question: 'AWS Launch Wizardの主な用途はどれですか？',
    options: ['新規サービス起動', '複雑なワークロード展開', 'アプリケーション移行', 'インフラ最適化'],
    correct: 1,
    explanation: 'Launch Wizardは、SAP、Microsoft SQL Server等の複雑なワークロードの展開を簡素化します。'
  }
]

export default managementQuestions
