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
  },
  // 複数選択問題
  {
    id: 'management-multi-1',
    category: '管理・ガバナンス',
    question: 'AWS Organizationsの機能として正しいものを3つ選択してください。',
    options: [
      '一括請求管理',
      'Service Control Policies (SCP)',
      'アカウントの一元管理',
      'データベース管理',
      'ネットワーク監視',
      'アプリケーション開発'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Organizationsの機能：一括請求管理（統合請求）、SCP（アカウント権限制御）、アカウント一元管理（組織単位での管理）。データベース管理、ネットワーク監視、アプリ開発は他のサービスの機能です。'
  },
  {
    id: 'management-multi-2',
    category: '管理・ガバナンス',
    question: 'AWS Control Towerの機能として正しいものを2つ選択してください。',
    options: [
      'ランディングゾーンの自動セットアップ',
      'ガードレールによるガバナンス',
      'データベースの自動バックアップ',
      'ネットワークトラフィック分析',
      'アプリケーションパフォーマンス監視',
      'ユーザーインターフェース設計'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Control Towerの機能：ランディングゾーンの自動セットアップ（マルチアカウント環境の構築）、ガードレール（予防・検出型の統制）。バックアップ、トラフィック分析、性能監視、UI設計は他のサービスの機能です。'
  },
  {
    id: 'management-multi-3',
    category: '管理・ガバナンス',
    question: 'AWS Resource Access Manager (RAM)で共有できるリソースを3つ選択してください。',
    options: [
      'VPCサブネット',
      'Route 53 Resolver Rules',
      'Transit Gateway',
      'EC2インスタンス',
      'S3バケット',
      'Lambda関数'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS RAMで共有可能なリソース：VPCサブネット、Route 53 Resolver Rules、Transit Gateway、License Manager設定等。EC2インスタンス、S3バケット、Lambda関数は直接共有できません。'
  },
  {
    id: 'management-multi-4',
    category: '管理・ガバナンス',
    question: 'AWS Trusted Advisorのチェックカテゴリーとして正しいものを2つ選択してください。',
    options: [
      'コスト最適化',
      'セキュリティ',
      'パフォーマンス',
      'データベース設計',
      'アプリケーション開発',
      'ユーザーエクスペリエンス'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Trusted Advisorのチェックカテゴリー：コスト最適化、セキュリティ、パフォーマンス、耐障害性、サービス制限。データベース設計、アプリ開発、UXは直接的なチェック項目ではありません。'
  },
  {
    id: 'management-multi-5',
    category: '管理・ガバナンス',
    question: 'AWS License Managerの機能として正しいものを3つ選択してください。',
    options: [
      'ライセンス使用量の追跡',
      'ライセンス違反の防止',
      'ライセンスコストの最適化',
      'データベースパフォーマンス監視',
      'ネットワークセキュリティ',
      'アプリケーション開発支援'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS License Managerの機能：ライセンス使用量追跡（利用状況監視）、ライセンス違反防止（ルール適用）、コスト最適化（適切な配分）。DB性能監視、ネットワークセキュリティ、アプリ開発は他のサービスの機能です。'
  },
  {
    id: 'management-multi-6',
    category: '管理・ガバナンス',
    question: 'AWS CloudTrail の機能として正しいものを2つ選択してください。',
    options: [
      'API呼び出しの記録',
      'ユーザーアクティビティの追跡',
      'パフォーマンス監視',
      'コスト分析',
      'セキュリティ脆弱性スキャン',
      'データバックアップ'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS CloudTrailの機能：API呼び出しの記録（管理イベント・データイベント）、ユーザーアクティビティの追跡（誰が何をいつ実行したか）。パフォーマンス監視、コスト分析、脆弱性スキャン、バックアップは他のサービスです。'
  },
  {
    id: 'management-multi-7',
    category: '管理・ガバナンス',
    question: 'AWS Compute Optimizer の機能として正しいものを3つ選択してください。',
    options: [
      'EC2インスタンスの最適化推奨',
      'EBSボリュームの最適化推奨',
      'Lambda関数の最適化推奨',
      'RDSインスタンスの最適化推奨',
      'S3ストレージクラスの最適化推奨',
      'CloudFront設定の最適化推奨'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Compute Optimizerの機能：EC2インスタンスの最適化推奨（サイズ・タイプ）、EBSボリュームの最適化推奨（サイズ・タイプ）、Lambda関数の最適化推奨（メモリ設定）。RDS、S3、CloudFrontは対象外です。'
  },
  {
    id: 'management-multi-8',
    category: '管理・ガバナンス',
    question: 'AWS Systems Manager Compliance の機能として正しいものを2つ選択してください。',
    options: [
      'パッチコンプライアンスの監視',
      '設定コンプライアンスの監視',
      'コストコンプライアンスの監視',
      'パフォーマンスコンプライアンスの監視',
      'ユーザーアクセスコンプライアンスの監視',
      'データバックアップコンプライアンスの監視'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Systems Manager Complianceの機能：パッチコンプライアンスの監視（パッチ適用状況）、設定コンプライアンスの監視（設定基準への準拠）。コスト、パフォーマンス、ユーザーアクセス、バックアップのコンプライアンスは他のサービスです。'
  },
  {
    id: 'management-multi-9',
    category: '管理・ガバナンス',
    question: 'AWS Health API の機能として正しいものを3つ選択してください。',
    options: [
      'サービス障害情報の取得',
      'メンテナンス予定の取得',
      'アカウント固有の健全性情報',
      'コスト異常の検出',
      'セキュリティ脆弱性の検出',
      'パフォーマンス問題の検出'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Health APIの機能：サービス障害情報の取得、メンテナンス予定の取得、アカウント固有の健全性情報（使用中サービスへの影響）。コスト異常、セキュリティ脆弱性、パフォーマンス問題の検出は他のサービスです。'
  },
  {
    id: 'management-multi-10',
    category: '管理・ガバナンス',
    question: 'AWS Application Auto Scaling の対象サービスとして正しいものを2つ選択してください。',
    options: [
      'Amazon ECS',
      'Amazon DynamoDB',
      'Amazon Aurora',
      'Amazon EC2',
      'Amazon S3',
      'Amazon CloudFront'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Application Auto Scalingの対象：Amazon ECS（タスク数のスケーリング）、Amazon DynamoDB（読み書き容量のスケーリング）、Lambda同時実行数、Aurora Serverless等。EC2は別のAuto Scaling、S3・CloudFrontは自動スケーリング対象外です。'
  }
]

export default managementQuestions
