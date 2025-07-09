// コスト最適化関連の問題
const costOptimizationQuestions = [
  {
    id: 'cost-optimization-1',
    category: 'コスト最適化',
    question: 'EC2とFargateの両方に適用できる割引プランはどれですか？',
    options: ['Reserved Instances', 'Savings Plans', 'Spot Instances', 'Dedicated Hosts'],
    correct: 1,
    explanation: 'Savings Plansは、EC2、Fargate、Lambdaなど複数のコンピューティングサービスに適用できる柔軟な割引プランです。'
  },
  {
    id: 'cost-optimization-2',
    category: 'コスト最適化',
    question: 'S3のコストを自動的に最適化するストレージクラスはどれですか？',
    options: ['Standard', 'Standard-IA', 'Glacier', 'Intelligent-Tiering'],
    correct: 3,
    explanation: 'S3 Intelligent-Tieringは、アクセスパターンを監視して自動的に最適なストレージクラスに移動します。'
  },
  {
    id: 'cost-optimization-3',
    category: 'コスト最適化',
    question: 'AWSのコスト異常を自動検知するサービスはどれですか？',
    options: ['Cost Explorer', 'Budgets', 'Cost Anomaly Detection', 'Trusted Advisor'],
    correct: 2,
    explanation: 'Cost Anomaly Detectionは、機械学習を使用してコストの異常を自動的に検知し、アラートを送信します。'
  },
  {
    id: 'cost-optimization-4',
    category: 'コスト最適化',
    question: '未使用のEBSボリュームを特定するのに最適なサービスはどれですか？',
    options: ['CloudWatch', 'Config', 'Trusted Advisor', 'Cost Explorer'],
    correct: 2,
    explanation: 'Trusted Advisorは、未使用のEBSボリュームやその他のリソースの最適化推奨事項を提供します。'
  },
  {
    id: 'cost-optimization-5',
    category: 'コスト最適化',
    question: 'データ転送コストを削減するために使用すべきサービスはどれですか？',
    options: ['Direct Connect', 'VPN', 'NAT Gateway', 'Internet Gateway'],
    correct: 0,
    explanation: 'AWS Direct Connectは、オンプレミスとAWS間のデータ転送コストを削減できる専用線接続サービスです。'
  },
  {
    id: 'cost-optimization-6',
    category: 'コスト最適化',
    question: 'Reserved Instancesの最大割引率はどれですか？',
    options: ['50%', '60%', '72%', '90%'],
    correct: 2,
    explanation: 'Reserved Instancesは、3年間の全額前払いで最大72%の割引を提供します。'
  },
  {
    id: 'cost-optimization-7',
    category: 'コスト最適化',
    question: 'Spot Instancesが最も適している用途はどれですか？',
    options: ['本番Webサーバー', 'データベース', 'バッチ処理', 'ロードバランサー'],
    correct: 2,
    explanation: 'Spot Instancesは、中断に耐性があるバッチ処理やビッグデータ分析に最適です。'
  },
  {
    id: 'cost-optimization-8',
    category: 'コスト最適化',
    question: 'S3のライフサイクルポリシーで最も効果的なコスト削減戦略はどれですか？',
    options: ['すべてGlacierに移動', 'アクセス頻度に応じた段階的移行', 'すべてStandardで保持', '定期的な削除'],
    correct: 1,
    explanation: 'アクセス頻度に応じてStandard→IA→Glacier→Deep Archiveと段階的に移行するのが最も効果的です。'
  },
  {
    id: 'cost-optimization-9',
    category: 'コスト最適化',
    question: 'CloudFrontを使用することで削減できるコストはどれですか？',
    options: ['コンピューティングコスト', 'ストレージコスト', 'データ転送コスト', 'データベースコスト'],
    correct: 2,
    explanation: 'CloudFrontは、エッジキャッシングによりオリジンからのデータ転送量を削減し、データ転送コストを削減します。'
  },
  {
    id: 'cost-optimization-10',
    category: 'コスト最適化',
    question: 'Auto Scalingによるコスト最適化の主な効果はどれですか？',
    options: ['固定コスト', '需要連動コスト', '前払いコスト', '最低保証コスト'],
    correct: 1,
    explanation: 'Auto Scalingは、需要に応じてリソースを自動調整し、過剰プロビジョニングによるコストを削減します。'
  },
  {
    id: 'cost-optimization-11',
    category: 'コスト最適化',
    question: 'AWS Cost and Usage Reportの主な用途はどれですか？',
    options: ['リアルタイム監視', '詳細なコスト分析', 'アラート送信', '自動最適化'],
    correct: 1,
    explanation: 'Cost and Usage Reportは、最も詳細なコストと使用量データを提供し、詳細な分析に使用されます。'
  },
  {
    id: 'cost-optimization-12',
    category: 'コスト最適化',
    question: 'RDSのコスト最適化で最も効果的な方法はどれですか？',
    options: ['インスタンスサイズ最適化', 'Reserved Instances', 'Multi-AZ無効化', 'すべて正しい'],
    correct: 3,
    explanation: 'RDSでは、適切なインスタンスサイズ選択、Reserved Instances活用、不要なMulti-AZ無効化がコスト最適化に効果的です。'
  },
  {
    id: 'cost-optimization-13',
    category: 'コスト最適化',
    question: 'Lambda関数のコスト最適化で重要な要素はどれですか？',
    options: ['実行時間', 'メモリ割り当て', '同時実行数', 'すべて正しい'],
    correct: 3,
    explanation: 'Lambdaのコストは、実行時間、メモリ割り当て、リクエスト数に基づいて計算されるため、すべてが重要です。'
  },
  {
    id: 'cost-optimization-14',
    category: 'コスト最適化',
    question: 'EBS最適化インスタンスを使用する主な理由はどれですか？',
    options: ['コスト削減', 'パフォーマンス向上', 'セキュリティ強化', 'ストレージ容量増加'],
    correct: 1,
    explanation: 'EBS最適化インスタンスは、EBSへの専用帯域幅を提供し、I/Oパフォーマンスを向上させます。'
  },
  {
    id: 'cost-optimization-15',
    category: 'コスト最適化',
    question: 'CloudWatch Logsのコスト最適化で有効な方法はどれですか？',
    options: ['ログ保持期間設定', 'ログレベル調整', 'S3エクスポート', 'すべて正しい'],
    correct: 3,
    explanation: 'ログ保持期間の適切な設定、不要なログレベルの削減、長期保存用のS3エクスポートがコスト最適化に有効です。'
  },
  {
    id: 'cost-optimization-16',
    category: 'コスト最適化',
    question: 'NAT Gatewayのコスト削減で有効な方法はどれですか？',
    options: ['NAT Instance使用', 'VPC Endpoint使用', 'プライベートサブネット統合', 'すべて正しい'],
    correct: 3,
    explanation: 'NAT Instance、VPC Endpoint、プライベートサブネット統合により、NAT Gatewayのコストを削減できます。'
  },
  {
    id: 'cost-optimization-17',
    category: 'コスト最適化',
    question: 'ElastiCacheのコスト最適化で重要な要素はどれですか？',
    options: ['ノードタイプ選択', 'レプリケーション設定', 'バックアップ設定', 'すべて正しい'],
    correct: 3,
    explanation: 'ElastiCacheでは、適切なノードタイプ、必要最小限のレプリケーション、バックアップ設定の最適化が重要です。'
  },
  {
    id: 'cost-optimization-18',
    category: 'コスト最適化',
    question: 'AWS Organizationsのコスト管理機能はどれですか？',
    options: ['統合請求', 'コスト配分タグ', 'Service Control Policies', 'すべて正しい'],
    correct: 3,
    explanation: 'AWS Organizationsは、統合請求、コスト配分、SCPによるリソース制御を提供します。'
  },
  {
    id: 'cost-optimization-19',
    category: 'コスト最適化',
    question: 'Redshiftのコスト最適化で有効な方法はどれですか？',
    options: ['Reserved Instances', 'Pause/Resume', 'Concurrency Scaling', 'すべて正しい'],
    correct: 3,
    explanation: 'RedshiftではReserved Instances、Pause/Resume機能、Concurrency Scalingの適切な設定がコスト最適化に有効です。'
  },
  {
    id: 'cost-optimization-20',
    category: 'コスト最適化',
    question: 'DynamoDBのコスト最適化で重要な要素はどれですか？',
    options: ['キャパシティモード選択', 'インデックス設計', 'TTL設定', 'すべて正しい'],
    correct: 3,
    explanation: 'DynamoDBでは、適切なキャパシティモード、効率的なインデックス設計、TTLによる自動削除がコスト最適化に重要です。'
  },
  {
    id: 'cost-optimization-21',
    category: 'コスト最適化',
    question: 'AWS Compute Optimizerの主な機能はどれですか？',
    options: ['コスト計算', 'リソース推奨', 'アラート送信', '自動最適化'],
    correct: 1,
    explanation: 'Compute Optimizerは、機械学習を使用してEC2、Lambda、EBSの最適なリソース設定を推奨します。'
  },
  {
    id: 'cost-optimization-22',
    category: 'コスト最適化',
    question: 'AWS Cost Categoriesの主な用途はどれですか？',
    options: ['コスト削減', 'コスト分類', 'アラート設定', 'レポート生成'],
    correct: 1,
    explanation: 'Cost Categoriesは、コストを組織の構造やプロジェクトに応じて分類・整理するために使用されます。'
  },
  {
    id: 'cost-optimization-23',
    category: 'コスト最適化',
    question: 'Savings Plans Utilization Reportで確認できる情報はどれですか？',
    options: ['利用率', '節約額', '推奨事項', 'すべて正しい'],
    correct: 3,
    explanation: 'Savings Plans Utilization Reportでは、利用率、節約額、追加購入推奨事項を確認できます。'
  },
  {
    id: 'cost-optimization-24',
    category: 'コスト最適化',
    question: 'AWS Pricing Calculatorの主な用途はどれですか？',
    options: ['実際のコスト確認', 'コスト見積もり', 'コスト最適化', 'アラート設定'],
    correct: 1,
    explanation: 'AWS Pricing Calculatorは、AWSサービスの利用コストを事前に見積もるためのツールです。'
  },
  {
    id: 'cost-optimization-25',
    category: 'コスト最適化',
    question: 'タグベースのコスト配分で重要な要素はどれですか？',
    options: ['タグの一貫性', 'タグの階層化', 'タグの自動化', 'すべて正しい'],
    correct: 3,
    explanation: '効果的なタグベースコスト配分には、一貫したタグ付け、階層化された構造、自動化されたタグ付けが重要です。'
  },
  // 複数選択問題
  {
    id: 'cost-optimization-multi-1',
    category: 'コスト最適化',
    question: 'EC2のコスト最適化手法として正しいものを3つ選択してください。',
    options: [
      'リザーブドインスタンスの活用',
      'スポットインスタンスの活用',
      '適切なインスタンスサイズの選択',
      '常時最大スペックでの運用',
      'すべてのインスタンスをオンデマンドで運用',
      'セキュリティグループの最適化'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'EC2コスト最適化：リザーブドインスタンス（長期利用での割引）、スポットインスタンス（最大90%割引）、適切なサイズ選択（過剰スペック回避）。常時最大スペックやオンデマンドのみの運用はコスト効率が悪いです。'
  },
  {
    id: 'cost-optimization-multi-2',
    category: 'コスト最適化',
    question: 'S3のコスト最適化手法として正しいものを2つ選択してください。',
    options: [
      'ライフサイクルポリシーの設定',
      '適切なストレージクラスの選択',
      'すべてのデータをStandardクラスで保存',
      'バケット数の最大化',
      'アクセス頻度に関係なく同一クラス使用',
      'データの重複保存'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'S3コスト最適化：ライフサイクルポリシー（自動的なストレージクラス移行）、適切なストレージクラス選択（アクセス頻度に応じた選択）。すべてStandardクラスや重複保存はコスト効率が悪いです。'
  },
  {
    id: 'cost-optimization-multi-3',
    category: 'コスト最適化',
    question: 'AWS Cost Explorerで分析できる項目を3つ選択してください。',
    options: [
      'サービス別コスト',
      'リージョン別コスト',
      'タグ別コスト',
      'ユーザー別アクセス頻度',
      'ネットワークトラフィック詳細',
      'セキュリティ脆弱性'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Cost Explorerは、サービス別、リージョン別、タグ別などの様々な軸でコスト分析が可能です。アクセス頻度、ネットワーク詳細、セキュリティ脆弱性は他のサービスで分析します。'
  },
  {
    id: 'cost-optimization-multi-4',
    category: 'コスト最適化',
    question: 'AWS Savings Plansの種類として正しいものを2つ選択してください。',
    options: [
      'Compute Savings Plans',
      'EC2 Instance Savings Plans',
      'S3 Savings Plans',
      'RDS Savings Plans',
      'Lambda Savings Plans',
      'VPC Savings Plans'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Savings Plansの種類：Compute Savings Plans（EC2、Fargate、Lambda対象）、EC2 Instance Savings Plans（特定のEC2インスタンスファミリー対象）。S3、RDS、VPC専用のSavings Plansは存在しません。'
  },
  {
    id: 'cost-optimization-multi-5',
    category: 'コスト最適化',
    question: 'データ転送コストを削減する方法として正しいものを3つ選択してください。',
    options: [
      'CloudFrontの活用',
      'VPC Endpointの使用',
      'Direct Connectの活用',
      'すべてのデータをパブリックサブネットに配置',
      'リージョン間転送の最大化',
      'NAT Gatewayの多用'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'データ転送コスト削減：CloudFront（エッジキャッシュでオリジンアクセス削減）、VPC Endpoint（AWS内部ネットワーク使用）、Direct Connect（専用線で安価な転送）。パブリック配置やリージョン間転送の増加はコスト増加要因です。'
  },
  {
    id: 'cost-optimization-multi-6',
    category: 'コスト最適化',
    question: 'AWS Budgetsの機能として正しいものを2つ選択してください。',
    options: [
      'コスト予算の設定と監視',
      '使用量予算の設定と監視',
      'リソースの自動削除',
      'インスタンスの自動停止',
      'データの自動アーカイブ',
      'アカウントの自動作成'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Budgetsの機能：コスト予算の設定と監視（支出上限設定）、使用量予算の設定と監視（リソース使用量上限）、予算超過時のアラート送信。リソース削除、インスタンス停止、データアーカイブ、アカウント作成は行いません。'
  },
  {
    id: 'cost-optimization-multi-7',
    category: 'コスト最適化',
    question: 'RDS のコスト最適化手法として正しいものを3つ選択してください。',
    options: [
      'Reserved Instancesの活用',
      '適切なインスタンスサイズの選択',
      'Multi-AZ配置の見直し',
      'すべてのデータベースをMulti-AZ化',
      'バックアップ保持期間の最大化',
      'リードレプリカの無制限作成'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'RDSコスト最適化：Reserved Instances（長期利用割引）、適切なインスタンスサイズ選択（過剰スペック回避）、Multi-AZ配置の見直し（必要性に応じた選択）。すべてMulti-AZ化、バックアップ期間最大化、リードレプリカ無制限作成はコスト増加要因です。'
  },
  {
    id: 'cost-optimization-multi-8',
    category: 'コスト最適化',
    question: 'AWS Cost and Usage Reportの機能として正しいものを2つ選択してください。',
    options: [
      '詳細な使用量データの提供',
      'カスタムコスト分析の実現',
      'リソースの自動最適化',
      'コストの自動削減',
      'インスタンスの自動リサイズ',
      'データの自動削除'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Cost and Usage Reportの機能：詳細な使用量データの提供（時間単位、リソース単位）、カスタムコスト分析の実現（BIツールとの連携）。自動最適化、自動削減、自動リサイズ、自動削除は行わず、データ提供のみです。'
  },
  {
    id: 'cost-optimization-multi-9',
    category: 'コスト最適化',
    question: 'AWS Trusted Advisorのコスト最適化チェック項目として正しいものを3つ選択してください。',
    options: [
      '未使用のEBSボリューム',
      'アイドル状態のRDSインスタンス',
      '低使用率のEC2インスタンス',
      'セキュリティグループの設定',
      'IAMポリシーの複雑さ',
      'ネットワーク設定の最適化'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'Trusted Advisorのコスト最適化チェック：未使用EBSボリューム、アイドル状態のRDSインスタンス、低使用率のEC2インスタンス、未使用のElastic IP等。セキュリティグループ、IAMポリシー、ネットワーク設定は他のカテゴリーです。'
  },
  {
    id: 'cost-optimization-multi-10',
    category: 'コスト最適化',
    question: 'Lambda のコスト最適化手法として正しいものを2つ選択してください。',
    options: [
      'メモリ割り当ての最適化',
      '実行時間の短縮',
      'プロビジョンド同時実行の最大化',
      'タイムアウト値の最大化',
      'VPC設定の必須化',
      'デプロイパッケージサイズの最大化'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Lambdaコスト最適化：メモリ割り当ての最適化（必要最小限に設定）、実行時間の短縮（効率的なコード）。プロビジョンド同時実行の最大化、タイムアウト最大化、VPC必須化、パッケージサイズ最大化はコスト増加要因です。'
  }
]

export default costOptimizationQuestions
