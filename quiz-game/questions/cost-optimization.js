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
  }
]

export default costOptimizationQuestions
