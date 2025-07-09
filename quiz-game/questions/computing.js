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
  },
  {
    id: 'computing-7',
    category: 'コンピューティング',
    question: 'EC2インスタンスの起動時間を最短にするために使用すべき機能はどれですか？',
    options: ['EBS最適化', 'プレースメントグループ', 'Hibernation', 'Nitro System'],
    correct: 3,
    explanation: 'AWS Nitro Systemは、EC2インスタンスの起動時間を大幅に短縮し、パフォーマンスを向上させます。'
  },
  {
    id: 'computing-8',
    category: 'コンピューティング',
    question: 'HPC（High Performance Computing）ワークロードに最適なEC2インスタンスタイプはどれですか？',
    options: ['T3', 'M5', 'C5n', 'R5'],
    correct: 2,
    explanation: 'C5nインスタンスは、高性能コンピューティングワークロードに最適化されており、100Gbpsネットワーキングを提供します。'
  },
  {
    id: 'computing-9',
    category: 'コンピューティング',
    question: 'EC2インスタンスを一時停止して後で再開できる機能はどれですか？',
    options: ['Stop/Start', 'Hibernation', 'Reboot', 'Terminate'],
    correct: 1,
    explanation: 'Hibernation機能により、インスタンスのメモリ内容をEBSに保存して一時停止し、後で同じ状態から再開できます。'
  },
  {
    id: 'computing-10',
    category: 'コンピューティング',
    question: 'GPU処理に特化したEC2インスタンスファミリーはどれですか？',
    options: ['C5', 'M5', 'P3', 'R5'],
    correct: 2,
    explanation: 'P3インスタンスは、機械学習やHPCワークロード向けのGPU処理に特化したインスタンスです。'
  },
  {
    id: 'computing-11',
    category: 'コンピューティング',
    question: 'コンテナオーケストレーションでタスク定義を使用するサービスはどれですか？',
    options: ['EKS', 'ECS', 'Lambda', 'Batch'],
    correct: 1,
    explanation: 'Amazon ECSでは、タスク定義を使用してコンテナの設定を定義します。'
  },
  {
    id: 'computing-12',
    category: 'コンピューティング',
    question: 'バッチ処理ジョブを効率的に実行するためのAWSサービスはどれですか？',
    options: ['Lambda', 'ECS', 'Batch', 'SQS'],
    correct: 2,
    explanation: 'AWS Batchは、バッチコンピューティングジョブを効率的に実行するためのフルマネージドサービスです。'
  },
  {
    id: 'computing-13',
    category: 'コンピューティング',
    question: 'EC2インスタンスの配置戦略で、同一ハードウェア上に配置するオプションはどれですか？',
    options: ['Cluster', 'Partition', 'Spread', 'Dedicated'],
    correct: 0,
    explanation: 'Clusterプレースメントグループは、インスタンスを同一ハードウェア上に密接に配置し、低レイテンシを実現します。'
  },
  {
    id: 'computing-14',
    category: 'コンピューティング',
    question: 'Lambdaの同時実行数制限のデフォルト値はどれですか？',
    options: ['100', '500', '1000', '制限なし'],
    correct: 2,
    explanation: 'AWS Lambdaのデフォルトの同時実行数制限は1000です（リージョンごと）。'
  },
  {
    id: 'computing-15',
    category: 'コンピューティング',
    question: 'EC2インスタンスのメタデータを取得するためのIPアドレスはどれですか？',
    options: ['127.0.0.1', '169.254.169.254', '192.168.1.1', '10.0.0.1'],
    correct: 1,
    explanation: 'EC2インスタンスメタデータサービスは169.254.169.254のIPアドレスでアクセスできます。'
  },
  {
    id: 'computing-16',
    category: 'コンピューティング',
    question: 'Auto Scalingで使用できるスケーリングポリシーの種類に含まれないものはどれですか？',
    options: ['ターゲット追跡', 'ステップスケーリング', 'シンプルスケーリング', 'プリエンプティブスケーリング'],
    correct: 3,
    explanation: 'プリエンプティブスケーリングは存在しません。Auto Scalingには、ターゲット追跡、ステップ、シンプルスケーリングがあります。'
  },
  {
    id: 'computing-17',
    category: 'コンピューティング',
    question: 'EC2インスタンスの起動テンプレートで設定できない項目はどれですか？',
    options: ['AMI ID', 'インスタンスタイプ', 'キーペア', 'Auto Scalingグループ名'],
    correct: 3,
    explanation: '起動テンプレートではAuto Scalingグループ名は設定できません。これはAuto Scalingグループ側で設定します。'
  },
  {
    id: 'computing-18',
    category: 'コンピューティング',
    question: 'Lambdaのプロビジョニング済み同時実行の主な利点はどれですか？',
    options: ['コスト削減', 'コールドスタート回避', 'メモリ使用量削減', 'セキュリティ向上'],
    correct: 1,
    explanation: 'プロビジョニング済み同時実行により、Lambdaのコールドスタートを回避し、一貫したパフォーマンスを実現できます。'
  },
  {
    id: 'computing-19',
    category: 'コンピューティング',
    question: 'ECSでサービスディスカバリを実現するために使用するサービスはどれですか？',
    options: ['Route 53', 'Cloud Map', 'ELB', 'API Gateway'],
    correct: 1,
    explanation: 'AWS Cloud Mapは、ECSでのサービスディスカバリを実現するためのサービスです。'
  },
  {
    id: 'computing-20',
    category: 'コンピューティング',
    question: 'EC2インスタンスの詳細監視を有効にした場合のメトリクス収集間隔はどれですか？',
    options: ['30秒', '1分', '5分', '15分'],
    correct: 1,
    explanation: '詳細監視を有効にすると、CloudWatchメトリクスが1分間隔で収集されます。'
  },
  {
    id: 'computing-21',
    category: 'コンピューティング',
    question: 'Lambdaレイヤーの主な用途はどれですか？',
    options: ['セキュリティ強化', 'コード共有', 'パフォーマンス向上', 'コスト削減'],
    correct: 1,
    explanation: 'Lambdaレイヤーは、複数のLambda関数間でライブラリやコードを共有するために使用されます。'
  },
  {
    id: 'computing-22',
    category: 'コンピューティング',
    question: 'EKSクラスターのコントロールプレーンの可用性はどのように保証されますか？',
    options: ['単一AZ', '2つのAZ', '3つのAZ', 'ユーザー設定による'],
    correct: 2,
    explanation: 'EKSコントロールプレーンは、3つのアベイラビリティゾーンにまたがって自動的に配置され、高可用性が保証されます。'
  },
  {
    id: 'computing-23',
    category: 'コンピューティング',
    question: 'EC2インスタンスのユーザーデータスクリプトが実行されるタイミングはいつですか？',
    options: ['インスタンス起動時のみ', '毎回起動時', 'ユーザーが手動実行', 'スケジュール実行'],
    correct: 0,
    explanation: 'ユーザーデータスクリプトは、EC2インスタンスの初回起動時にのみ実行されます。'
  },
  {
    id: 'computing-24',
    category: 'コンピューティング',
    question: 'Fargateでコンテナに割り当て可能な最大vCPU数はどれですか？',
    options: ['2 vCPU', '4 vCPU', '8 vCPU', '16 vCPU'],
    correct: 2,
    explanation: 'AWS Fargateでは、単一のタスクに最大8 vCPUを割り当てることができます。'
  },
  {
    id: 'computing-25',
    category: 'コンピューティング',
    question: 'Lambda@Edgeで実行できない処理はどれですか？',
    options: ['リクエストの変更', 'レスポンスの変更', 'データベースアクセス', 'ヘッダーの追加'],
    correct: 2,
    explanation: 'Lambda@Edgeは、VPC内のリソース（RDSなど）にアクセスできないため、データベースアクセスはできません。'
  },
  {
    id: 'computing-26',
    category: 'コンピューティング',
    question: 'EC2インスタンスのスケジュールされたイベント情報を確認する方法はどれですか？',
    options: ['CloudWatch', 'インスタンスメタデータ', 'AWS Config', 'CloudTrail'],
    correct: 1,
    explanation: 'スケジュールされたイベント情報は、インスタンスメタデータサービスから取得できます。'
  },
  {
    id: 'computing-27',
    category: 'コンピューティング',
    question: 'ECSタスクでSecrets Managerから機密情報を取得する方法はどれですか？',
    options: ['環境変数', 'secrets設定', 'volumes設定', 'command設定'],
    correct: 1,
    explanation: 'ECSタスク定義のsecrets設定を使用して、Secrets Managerから機密情報を安全に取得できます。'
  },
  {
    id: 'computing-28',
    category: 'コンピューティング',
    question: 'Lambdaの実行環境で利用可能な一時ストレージ容量はどれですか？',
    options: ['512 MB', '1 GB', '10 GB', '制限なし'],
    correct: 2,
    explanation: 'Lambda実行環境の/tmpディレクトリには、最大10GBの一時ストレージが利用可能です。'
  },
  {
    id: 'computing-29',
    category: 'コンピューティング',
    question: 'EC2インスタンスのCPUクレジットが不足した場合の動作はどれですか？',
    options: ['インスタンス停止', 'パフォーマンス低下', 'エラー発生', '追加課金'],
    correct: 1,
    explanation: 'T系インスタンスでCPUクレジットが不足すると、ベースラインパフォーマンスに制限されます。'
  },
  {
    id: 'computing-30',
    category: 'コンピューティング',
    question: 'EKSでPodの自動スケーリングを実現するコンポーネントはどれですか？',
    options: ['Cluster Autoscaler', 'Horizontal Pod Autoscaler', 'Vertical Pod Autoscaler', 'Karpenter'],
    correct: 1,
    explanation: 'Horizontal Pod Autoscaler（HPA）は、メトリクスに基づいてPodの数を自動的にスケールします。'
  }
]

export default computingQuestions
