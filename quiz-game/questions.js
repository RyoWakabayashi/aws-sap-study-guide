// AWS Solution Architect Professional 試験対策クイズ問題データ
// 自動生成ファイル - 手動編集しないでください
// 生成日時: 2025-07-09T09:00:13.028Z

// 全問題データ
const allQuestions = [
  {
    id: 'computing-1',
    category: 'コンピューティング',
    question: 'サーバーレスでコンテナを実行できるAWSサービスはどれですか？',
    options: [
      'ECS',
      'EKS',
      'Fargate',
      'Lambda'
    ],
    correct: 2,
    explanation: 'AWS Fargateは、サーバーを管理することなくコンテナを実行できるサーバーレスコンピューティングエンジンです。'
  },
  {
    id: 'computing-2',
    category: 'コンピューティング',
    question: '最大90%のコスト削減が可能なEC2の購入オプションはどれですか？',
    options: [
      'オンデマンド',
      'リザーブドインスタンス',
      'スポットインスタンス',
      'Savings Plans'
    ],
    correct: 2,
    explanation: 'スポットインスタンスは、未使用のEC2容量を利用することで最大90%のコスト削減が可能です。'
  },
  {
    id: 'computing-3',
    category: 'コンピューティング',
    question: 'ARM Gravitonプロセッサを使用してコストを削減できるEC2インスタンスタイプはどれですか？',
    options: [
      'M5',
      'C5',
      'M6g',
      'T3'
    ],
    correct: 2,
    explanation: 'M6gインスタンスはAWS Graviton2プロセッサを使用し、同等のx86ベースインスタンスと比較して最大40%優れた価格性能比を提供します。'
  },
  {
    id: 'computing-4',
    category: 'コンピューティング',
    question: 'バーストパフォーマンスを提供するEC2インスタンスタイプはどれですか？',
    options: [
      'M5',
      'C5',
      'T3',
      'R5'
    ],
    correct: 2,
    explanation: 'T3インスタンスは、ベースラインレベルのCPUパフォーマンスを提供し、必要に応じてバーストできる機能を持っています。'
  },
  {
    id: 'computing-5',
    category: 'コンピューティング',
    question: 'Kubernetesクラスターをマネージドで実行できるAWSサービスはどれですか？',
    options: [
      'ECS',
      'EKS',
      'Fargate',
      'Batch'
    ],
    correct: 1,
    explanation: 'Amazon EKS（Elastic Kubernetes Service）は、マネージドKubernetesサービスです。'
  },
  {
    id: 'computing-6',
    category: 'コンピューティング',
    question: '最大15分間実行できるサーバーレスコンピューティングサービスはどれですか？',
    options: [
      'Lambda',
      'Fargate',
      'Batch',
      'Step Functions'
    ],
    correct: 0,
    explanation: 'AWS Lambdaの最大実行時間は15分です。'
  },
  {
    id: 'computing-7',
    category: 'コンピューティング',
    question: 'EC2インスタンスの起動時間を最短にするために使用すべき機能はどれですか？',
    options: [
      'EBS最適化',
      'プレースメントグループ',
      'Hibernation',
      'Nitro System'
    ],
    correct: 3,
    explanation: 'AWS Nitro Systemは、EC2インスタンスの起動時間を大幅に短縮し、パフォーマンスを向上させます。'
  },
  {
    id: 'computing-8',
    category: 'コンピューティング',
    question: 'HPC（High Performance Computing）ワークロードに最適なEC2インスタンスタイプはどれですか？',
    options: [
      'T3',
      'M5',
      'C5n',
      'R5'
    ],
    correct: 2,
    explanation: 'C5nインスタンスは、高性能コンピューティングワークロードに最適化されており、100Gbpsネットワーキングを提供します。'
  },
  {
    id: 'computing-9',
    category: 'コンピューティング',
    question: 'EC2インスタンスを一時停止して後で再開できる機能はどれですか？',
    options: [
      'Stop/Start',
      'Hibernation',
      'Reboot',
      'Terminate'
    ],
    correct: 1,
    explanation: 'Hibernation機能により、インスタンスのメモリ内容をEBSに保存して一時停止し、後で同じ状態から再開できます。'
  },
  {
    id: 'computing-10',
    category: 'コンピューティング',
    question: 'GPU処理に特化したEC2インスタンスファミリーはどれですか？',
    options: [
      'C5',
      'M5',
      'P3',
      'R5'
    ],
    correct: 2,
    explanation: 'P3インスタンスは、機械学習やHPCワークロード向けのGPU処理に特化したインスタンスです。'
  },
  {
    id: 'computing-11',
    category: 'コンピューティング',
    question: 'コンテナオーケストレーションでタスク定義を使用するサービスはどれですか？',
    options: [
      'EKS',
      'ECS',
      'Lambda',
      'Batch'
    ],
    correct: 1,
    explanation: 'Amazon ECSでは、タスク定義を使用してコンテナの設定を定義します。'
  },
  {
    id: 'computing-12',
    category: 'コンピューティング',
    question: 'バッチ処理ジョブを効率的に実行するためのAWSサービスはどれですか？',
    options: [
      'Lambda',
      'ECS',
      'Batch',
      'SQS'
    ],
    correct: 2,
    explanation: 'AWS Batchは、バッチコンピューティングジョブを効率的に実行するためのフルマネージドサービスです。'
  },
  {
    id: 'computing-13',
    category: 'コンピューティング',
    question: 'EC2インスタンスの配置戦略で、同一ハードウェア上に配置するオプションはどれですか？',
    options: [
      'Cluster',
      'Partition',
      'Spread',
      'Dedicated'
    ],
    correct: 0,
    explanation: 'Clusterプレースメントグループは、インスタンスを同一ハードウェア上に密接に配置し、低レイテンシを実現します。'
  },
  {
    id: 'computing-14',
    category: 'コンピューティング',
    question: 'Lambdaの同時実行数制限のデフォルト値はどれですか？',
    options: [
      '100',
      '500',
      '1000',
      '制限なし'
    ],
    correct: 2,
    explanation: 'AWS Lambdaのデフォルトの同時実行数制限は1000です（リージョンごと）。'
  },
  {
    id: 'computing-15',
    category: 'コンピューティング',
    question: 'EC2インスタンスのメタデータを取得するためのIPアドレスはどれですか？',
    options: [
      '127.0.0.1',
      '169.254.169.254',
      '192.168.1.1',
      '10.0.0.1'
    ],
    correct: 1,
    explanation: 'EC2インスタンスメタデータサービスは169.254.169.254のIPアドレスでアクセスできます。'
  },
  {
    id: 'computing-16',
    category: 'コンピューティング',
    question: 'Auto Scalingで使用できるスケーリングポリシーの種類に含まれないものはどれですか？',
    options: [
      'ターゲット追跡',
      'ステップスケーリング',
      'シンプルスケーリング',
      'プリエンプティブスケーリング'
    ],
    correct: 3,
    explanation: 'プリエンプティブスケーリングは存在しません。Auto Scalingには、ターゲット追跡、ステップ、シンプルスケーリングがあります。'
  },
  {
    id: 'computing-17',
    category: 'コンピューティング',
    question: 'EC2インスタンスの起動テンプレートで設定できない項目はどれですか？',
    options: [
      'AMI ID',
      'インスタンスタイプ',
      'キーペア',
      'Auto Scalingグループ名'
    ],
    correct: 3,
    explanation: '起動テンプレートではAuto Scalingグループ名は設定できません。これはAuto Scalingグループ側で設定します。'
  },
  {
    id: 'computing-18',
    category: 'コンピューティング',
    question: 'Lambdaのプロビジョニング済み同時実行の主な利点はどれですか？',
    options: [
      'コスト削減',
      'コールドスタート回避',
      'メモリ使用量削減',
      'セキュリティ向上'
    ],
    correct: 1,
    explanation: 'プロビジョニング済み同時実行により、Lambdaのコールドスタートを回避し、一貫したパフォーマンスを実現できます。'
  },
  {
    id: 'computing-19',
    category: 'コンピューティング',
    question: 'ECSでサービスディスカバリを実現するために使用するサービスはどれですか？',
    options: [
      'Route 53',
      'Cloud Map',
      'ELB',
      'API Gateway'
    ],
    correct: 1,
    explanation: 'AWS Cloud Mapは、ECSでのサービスディスカバリを実現するためのサービスです。'
  },
  {
    id: 'computing-20',
    category: 'コンピューティング',
    question: 'EC2インスタンスの詳細監視を有効にした場合のメトリクス収集間隔はどれですか？',
    options: [
      '30秒',
      '1分',
      '5分',
      '15分'
    ],
    correct: 1,
    explanation: '詳細監視を有効にすると、CloudWatchメトリクスが1分間隔で収集されます。'
  },
  {
    id: 'computing-21',
    category: 'コンピューティング',
    question: 'Lambdaレイヤーの主な用途はどれですか？',
    options: [
      'セキュリティ強化',
      'コード共有',
      'パフォーマンス向上',
      'コスト削減'
    ],
    correct: 1,
    explanation: 'Lambdaレイヤーは、複数のLambda関数間でライブラリやコードを共有するために使用されます。'
  },
  {
    id: 'computing-22',
    category: 'コンピューティング',
    question: 'EKSクラスターのコントロールプレーンの可用性はどのように保証されますか？',
    options: [
      '単一AZ',
      '2つのAZ',
      '3つのAZ',
      'ユーザー設定による'
    ],
    correct: 2,
    explanation: 'EKSコントロールプレーンは、3つのアベイラビリティゾーンにまたがって自動的に配置され、高可用性が保証されます。'
  },
  {
    id: 'computing-23',
    category: 'コンピューティング',
    question: 'EC2インスタンスのユーザーデータスクリプトが実行されるタイミングはいつですか？',
    options: [
      'インスタンス起動時のみ',
      '毎回起動時',
      'ユーザーが手動実行',
      'スケジュール実行'
    ],
    correct: 0,
    explanation: 'ユーザーデータスクリプトは、EC2インスタンスの初回起動時にのみ実行されます。'
  },
  {
    id: 'computing-24',
    category: 'コンピューティング',
    question: 'Fargateでコンテナに割り当て可能な最大vCPU数はどれですか？',
    options: [
      '2 vCPU',
      '4 vCPU',
      '8 vCPU',
      '16 vCPU'
    ],
    correct: 2,
    explanation: 'AWS Fargateでは、単一のタスクに最大8 vCPUを割り当てることができます。'
  },
  {
    id: 'computing-25',
    category: 'コンピューティング',
    question: 'Lambda@Edgeで実行できない処理はどれですか？',
    options: [
      'リクエストの変更',
      'レスポンスの変更',
      'データベースアクセス',
      'ヘッダーの追加'
    ],
    correct: 2,
    explanation: 'Lambda@Edgeは、VPC内のリソース（RDSなど）にアクセスできないため、データベースアクセスはできません。'
  },
  {
    id: 'computing-26',
    category: 'コンピューティング',
    question: 'EC2インスタンスのスケジュールされたイベント情報を確認する方法はどれですか？',
    options: [
      'CloudWatch',
      'インスタンスメタデータ',
      'AWS Config',
      'CloudTrail'
    ],
    correct: 1,
    explanation: 'スケジュールされたイベント情報は、インスタンスメタデータサービスから取得できます。'
  },
  {
    id: 'computing-27',
    category: 'コンピューティング',
    question: 'ECSタスクでSecrets Managerから機密情報を取得する方法はどれですか？',
    options: [
      '環境変数',
      'secrets設定',
      'volumes設定',
      'command設定'
    ],
    correct: 1,
    explanation: 'ECSタスク定義のsecrets設定を使用して、Secrets Managerから機密情報を安全に取得できます。'
  },
  {
    id: 'computing-28',
    category: 'コンピューティング',
    question: 'Lambdaの実行環境で利用可能な一時ストレージ容量はどれですか？',
    options: [
      '512 MB',
      '1 GB',
      '10 GB',
      '制限なし'
    ],
    correct: 2,
    explanation: 'Lambda実行環境の/tmpディレクトリには、最大10GBの一時ストレージが利用可能です。'
  },
  {
    id: 'computing-29',
    category: 'コンピューティング',
    question: 'EC2インスタンスのCPUクレジットが不足した場合の動作はどれですか？',
    options: [
      'インスタンス停止',
      'パフォーマンス低下',
      'エラー発生',
      '追加課金'
    ],
    correct: 1,
    explanation: 'T系インスタンスでCPUクレジットが不足すると、ベースラインパフォーマンスに制限されます。'
  },
  {
    id: 'computing-30',
    category: 'コンピューティング',
    question: 'EKSでPodの自動スケーリングを実現するコンポーネントはどれですか？',
    options: [
      'Cluster Autoscaler',
      'Horizontal Pod Autoscaler',
      'Vertical Pod Autoscaler',
      'Karpenter'
    ],
    correct: 1,
    explanation: 'Horizontal Pod Autoscaler（HPA）は、メトリクスに基づいてPodの数を自動的にスケールします。'
  },
  {
    id: 'storage-1',
    category: 'ストレージ',
    question: '99.999999999%（11 9s）の耐久性を提供するAWSストレージサービスはどれですか？',
    options: [
      'EBS',
      'EFS',
      'S3',
      'FSx'
    ],
    correct: 2,
    explanation: 'Amazon S3は99.999999999%（11 9s）の耐久性を提供するオブジェクトストレージサービスです。'
  },
  {
    id: 'storage-2',
    category: 'ストレージ',
    question: 'アクセス頻度が不明なデータに最適なS3ストレージクラスはどれですか？',
    options: [
      'Standard',
      'Standard-IA',
      'Glacier',
      'Intelligent-Tiering'
    ],
    correct: 3,
    explanation: 'S3 Intelligent-Tieringは、アクセスパターンに基づいて自動的にストレージクラスを移動し、コストを最適化します。'
  },
  {
    id: 'storage-3',
    category: 'ストレージ',
    question: '最も安価な長期アーカイブ用S3ストレージクラスはどれですか？',
    options: [
      'Glacier',
      'Glacier Deep Archive',
      'Standard-IA',
      'One Zone-IA'
    ],
    correct: 1,
    explanation: 'S3 Glacier Deep Archiveは、長期アーカイブ用の最も安価なストレージクラスです。'
  },
  {
    id: 'storage-4',
    category: 'ストレージ',
    question: '複数のEC2インスタンスから同時にアクセス可能なファイルシステムはどれですか？',
    options: [
      'EBS',
      'EFS',
      'S3',
      'Instance Store'
    ],
    correct: 1,
    explanation: 'Amazon EFS（Elastic File System）は、複数のEC2インスタンスから同時にアクセス可能なNFSファイルシステムです。'
  },
  {
    id: 'storage-5',
    category: 'ストレージ',
    question: 'gp2と比較してgp3 EBSボリュームの利点は何ですか？',
    options: [
      'より高い耐久性',
      'より低いコスト',
      'より高いIOPS',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'gp3は、gp2と比較して20%低いコスト、独立したIOPS・スループット設定、より高いベースライン性能を提供します。'
  },
  {
    id: 'storage-6',
    category: 'ストレージ',
    question: '最大16TBまでサポートするEBSボリュームタイプはどれですか？',
    options: [
      'gp2',
      'gp3',
      'io1',
      'io2'
    ],
    correct: 3,
    explanation: 'io2 Block Expressは最大64TBまでサポートしますが、一般的なio2は16TBまでです。'
  },
  {
    id: 'storage-7',
    category: 'ストレージ',
    question: 'S3バケットの暗号化で、AWS KMSを使用しない方式はどれですか？',
    options: [
      'SSE-S3',
      'SSE-KMS',
      'SSE-C',
      'CSE'
    ],
    correct: 0,
    explanation: 'SSE-S3は、S3が管理する暗号化キーを使用し、AWS KMSを使用しません。'
  },
  {
    id: 'storage-8',
    category: 'ストレージ',
    question: 'S3のマルチパートアップロードが推奨されるファイルサイズはどれですか？',
    options: [
      '5MB以上',
      '100MB以上',
      '1GB以上',
      '10GB以上'
    ],
    correct: 1,
    explanation: 'S3では100MB以上のファイルに対してマルチパートアップロードの使用が推奨されています。'
  },
  {
    id: 'storage-9',
    category: 'ストレージ',
    question: 'EBSボリュームのスナップショットが保存される場所はどこですか？',
    options: [
      '同一AZ',
      '同一リージョン',
      'S3',
      'Glacier'
    ],
    correct: 2,
    explanation: 'EBSスナップショットは、Amazon S3に自動的に保存され、リージョン内で複製されます。'
  },
  {
    id: 'storage-10',
    category: 'ストレージ',
    question: 'S3 Transfer Accelerationで使用される技術はどれですか？',
    options: [
      'CloudFront',
      'Direct Connect',
      'VPN',
      'Global Accelerator'
    ],
    correct: 0,
    explanation: 'S3 Transfer AccelerationはCloudFrontのエッジロケーションを使用してアップロードを高速化します。'
  },
  {
    id: 'storage-11',
    category: 'ストレージ',
    question: 'EFSのパフォーマンスモードで、最高のスループットを提供するのはどれですか？',
    options: [
      'General Purpose',
      'Max I/O',
      'Provisioned Throughput',
      'Bursting'
    ],
    correct: 2,
    explanation: 'Provisioned Throughputモードでは、ファイルシステムのサイズに関係なく一貫したスループットを提供します。'
  },
  {
    id: 'storage-12',
    category: 'ストレージ',
    question: 'S3のバージョニングが有効な場合、削除されたオブジェクトはどうなりますか？',
    options: [
      '完全削除',
      '削除マーカー追加',
      '別バケットに移動',
      'Glacierに移動'
    ],
    correct: 1,
    explanation: 'バージョニング有効時は、削除マーカーが追加され、以前のバージョンは保持されます。'
  },
  {
    id: 'storage-13',
    category: 'ストレージ',
    question: 'EBSボリュームの暗号化で、既存の非暗号化ボリュームを暗号化する方法はどれですか？',
    options: [
      '直接暗号化',
      'スナップショット経由',
      '不可能',
      'KMS設定変更'
    ],
    correct: 1,
    explanation: '既存の非暗号化ボリュームは、暗号化されたスナップショットから新しいボリュームを作成することで暗号化できます。'
  },
  {
    id: 'storage-14',
    category: 'ストレージ',
    question: 'S3のCross-Region Replicationで必要な設定はどれですか？',
    options: [
      'バージョニング有効',
      'MFA削除有効',
      'ログ有効',
      'メトリクス有効'
    ],
    correct: 0,
    explanation: 'Cross-Region Replicationを使用するには、ソースとデスティネーションバケットでバージョニングを有効にする必要があります。'
  },
  {
    id: 'storage-15',
    category: 'ストレージ',
    question: 'FSx for Windowsファイルサーバーで使用されるプロトコルはどれですか？',
    options: [
      'NFS',
      'SMB',
      'iSCSI',
      'FTP'
    ],
    correct: 1,
    explanation: 'FSx for Windows File ServerはSMB（Server Message Block）プロトコルを使用します。'
  },
  {
    id: 'storage-16',
    category: 'ストレージ',
    question: 'S3のライフサイクルポリシーで設定できない遷移はどれですか？',
    options: [
      'Standard → IA',
      'IA → Glacier',
      'Glacier → Deep Archive',
      'Deep Archive → Standard'
    ],
    correct: 3,
    explanation: 'S3ライフサイクルポリシーでは、より安価なストレージクラスから高価なクラスへの自動遷移はできません。'
  },
  {
    id: 'storage-17',
    category: 'ストレージ',
    question: 'EBSのio2ボリュームで提供される最大IOPSはどれですか？',
    options: [
      '16,000',
      '32,000',
      '64,000',
      '256,000'
    ],
    correct: 3,
    explanation: 'io2 Block Expressボリュームは最大256,000 IOPSを提供できます。'
  },
  {
    id: 'storage-18',
    category: 'ストレージ',
    question: 'S3のイベント通知で対応していないサービスはどれですか？',
    options: [
      'SNS',
      'SQS',
      'Lambda',
      'CloudWatch'
    ],
    correct: 3,
    explanation: 'S3イベント通知は、SNS、SQS、Lambdaに直接送信できますが、CloudWatchには直接送信できません。'
  },
  {
    id: 'storage-19',
    category: 'ストレージ',
    question: 'EFSのスループットモードで、ファイルシステムサイズに依存するのはどれですか？',
    options: [
      'Provisioned',
      'Bursting',
      'General Purpose',
      'Max I/O'
    ],
    correct: 1,
    explanation: 'Burstingモードでは、ファイルシステムのサイズに比例してスループットが決まります。'
  },
  {
    id: 'storage-20',
    category: 'ストレージ',
    question: 'S3のMFA削除機能を有効にするために必要な条件はどれですか？',
    options: [
      'バージョニング有効',
      'ログ有効',
      '暗号化有効',
      'レプリケーション有効'
    ],
    correct: 0,
    explanation: 'MFA削除を有効にするには、まずバケットでバージョニングを有効にする必要があります。'
  },
  {
    id: 'storage-21',
    category: 'ストレージ',
    question: 'EBSボリュームのマルチアタッチ機能をサポートするボリュームタイプはどれですか？',
    options: [
      'gp2',
      'gp3',
      'io1',
      'io2'
    ],
    correct: 3,
    explanation: 'EBSマルチアタッチは、io1とio2ボリュームタイプでサポートされています。'
  },
  {
    id: 'storage-22',
    category: 'ストレージ',
    question: 'S3のアクセスログで記録されない情報はどれですか？',
    options: [
      'リクエスト時刻',
      'IPアドレス',
      'ユーザーエージェント',
      'オブジェクト内容'
    ],
    correct: 3,
    explanation: 'S3アクセスログには、リクエストの詳細は記録されますが、オブジェクトの実際の内容は記録されません。'
  },
  {
    id: 'storage-23',
    category: 'ストレージ',
    question: 'FSx for Lustreの主な用途はどれですか？',
    options: [
      'Webサーバー',
      'データベース',
      'HPC',
      'バックアップ'
    ],
    correct: 2,
    explanation: 'FSx for Lustreは、高性能コンピューティング（HPC）ワークロード向けに最適化されたファイルシステムです。'
  },
  {
    id: 'storage-24',
    category: 'ストレージ',
    question: 'S3のリクエスタ支払い機能で、料金を負担するのは誰ですか？',
    options: [
      'バケット所有者',
      'リクエスト送信者',
      'AWS',
      '設定による'
    ],
    correct: 1,
    explanation: 'リクエスタ支払い機能では、データ転送とリクエスト料金をリクエスト送信者が負担します。'
  },
  {
    id: 'storage-25',
    category: 'ストレージ',
    question: 'EBSボリュームの暗号化で使用されるデフォルトのキーはどれですか？',
    options: [
      'AWS管理キー',
      'カスタマー管理キー',
      'カスタマー提供キー',
      'ランダムキー'
    ],
    correct: 0,
    explanation: 'EBS暗号化では、デフォルトでAWS管理のKMSキー（aws/ebs）が使用されます。'
  },
  {
    id: 'storage-26',
    category: 'ストレージ',
    question: 'S3のオブジェクトロック機能で設定できるモードに含まれないものはどれですか？',
    options: [
      'Governance',
      'Compliance',
      'Legal Hold',
      'Permanent'
    ],
    correct: 3,
    explanation: 'S3オブジェクトロックには、GovernanceモードとComplianceモード、およびLegal Holdがありますが、Permanentモードはありません。'
  },
  {
    id: 'storage-27',
    category: 'ストレージ',
    question: 'EFSのアクセスポイントで制御できる項目に含まれないものはどれですか？',
    options: [
      'POSIX権限',
      'ユーザーID',
      'グループID',
      'ファイル暗号化'
    ],
    correct: 3,
    explanation: 'EFSアクセスポイントでは、POSIX権限やユーザー/グループIDを制御できますが、ファイル暗号化は別途設定します。'
  },
  {
    id: 'storage-28',
    category: 'ストレージ',
    question: 'S3のInventory機能で出力できない形式はどれですか？',
    options: [
      'CSV',
      'ORC',
      'Parquet',
      'JSON'
    ],
    correct: 3,
    explanation: 'S3 InventoryはCSV、ORC、Parquet形式で出力できますが、JSON形式はサポートされていません。'
  },
  {
    id: 'storage-29',
    category: 'ストレージ',
    question: 'EBSのFast Snapshot Restore機能の主な利点はどれですか？',
    options: [
      'コスト削減',
      '初期化時間短縮',
      'セキュリティ向上',
      'サイズ削減'
    ],
    correct: 1,
    explanation: 'Fast Snapshot Restoreにより、スナップショットからボリュームを作成する際の初期化時間を大幅に短縮できます。'
  },
  {
    id: 'storage-30',
    category: 'ストレージ',
    question: 'S3のSelect機能で使用できるクエリ言語はどれですか？',
    options: [
      'SQL',
      'NoSQL',
      'GraphQL',
      'XPath'
    ],
    correct: 0,
    explanation: 'S3 SelectはSQL式を使用してオブジェクトの内容から特定のデータを取得できます。'
  },
  {
    id: 'database-1',
    category: 'データベース',
    question: 'MySQLの5倍、PostgreSQLの3倍の性能を提供するAWSデータベースサービスはどれですか？',
    options: [
      'RDS',
      'Aurora',
      'DynamoDB',
      'Redshift'
    ],
    correct: 1,
    explanation: 'Amazon Auroraは、標準的なMySQLの最大5倍、PostgreSQLの最大3倍の性能を提供します。'
  },
  {
    id: 'database-2',
    category: 'データベース',
    question: '単一桁ミリ秒のレスポンス時間を提供するNoSQLデータベースはどれですか？',
    options: [
      'RDS',
      'Aurora',
      'DynamoDB',
      'DocumentDB'
    ],
    correct: 2,
    explanation: 'Amazon DynamoDBは、単一桁ミリ秒のレスポンス時間を提供するフルマネージドNoSQLデータベースです。'
  },
  {
    id: 'database-3',
    category: 'データベース',
    question: 'MongoDB互換のマネージドデータベースサービスはどれですか？',
    options: [
      'DynamoDB',
      'DocumentDB',
      'Neptune',
      'Timestream'
    ],
    correct: 1,
    explanation: 'Amazon DocumentDBは、MongoDB互換のフルマネージドドキュメントデータベースサービスです。'
  },
  {
    id: 'database-4',
    category: 'データベース',
    question: 'グラフデータベースに最適なAWSサービスはどれですか？',
    options: [
      'DynamoDB',
      'DocumentDB',
      'Neptune',
      'RDS'
    ],
    correct: 2,
    explanation: 'Amazon Neptuneは、高速で信頼性の高いフルマネージドグラフデータベースサービスです。'
  },
  {
    id: 'database-5',
    category: 'データベース',
    question: 'ペタバイト規模のデータウェアハウスに最適なAWSサービスはどれですか？',
    options: [
      'RDS',
      'Aurora',
      'DynamoDB',
      'Redshift'
    ],
    correct: 3,
    explanation: 'Amazon Redshiftは、ペタバイト規模のデータウェアハウス用に設計されたフルマネージドサービスです。'
  },
  {
    id: 'database-6',
    category: 'データベース',
    question: 'Apache Cassandra互換のマネージドサービスはどれですか？',
    options: [
      'DynamoDB',
      'DocumentDB',
      'Keyspaces',
      'Neptune'
    ],
    correct: 2,
    explanation: 'Amazon Keyspacesは、Apache Cassandra互換のマネージドデータベースサービスです。'
  },
  {
    id: 'database-7',
    category: 'データベース',
    question: 'RDSで自動バックアップの保持期間の最大値はどれですか？',
    options: [
      '7日',
      '30日',
      '35日',
      '90日'
    ],
    correct: 2,
    explanation: 'RDSの自動バックアップは最大35日間保持できます。'
  },
  {
    id: 'database-8',
    category: 'データベース',
    question: 'DynamoDBのグローバルセカンダリインデックス（GSI）の最大数はどれですか？',
    options: [
      '5個',
      '10個',
      '20個',
      '無制限'
    ],
    correct: 2,
    explanation: 'DynamoDBテーブルには最大20個のグローバルセカンダリインデックスを作成できます。'
  },
  {
    id: 'database-9',
    category: 'データベース',
    question: 'Aurora Serverlessの課金単位はどれですか？',
    options: [
      '時間',
      '分',
      '秒',
      'ACU'
    ],
    correct: 3,
    explanation: 'Aurora ServerlessはACU（Aurora Capacity Unit）単位で課金され、使用した分だけ支払います。'
  },
  {
    id: 'database-10',
    category: 'データベース',
    question: 'RDSのリードレプリカで対応していないエンジンはどれですか？',
    options: [
      'MySQL',
      'PostgreSQL',
      'Oracle',
      'SQL Server'
    ],
    correct: 3,
    explanation: 'RDSのリードレプリカは、MySQL、PostgreSQL、MariaDB、Oracleで利用可能ですが、SQL Serverでは利用できません。'
  },
  {
    id: 'database-11',
    category: 'データベース',
    question: 'DynamoDBのPoint-in-Time Recovery（PITR）で復元可能な期間はどれですか？',
    options: [
      '24時間',
      '7日',
      '35日',
      '90日'
    ],
    correct: 2,
    explanation: 'DynamoDBのPITRでは、過去35日以内の任意の時点にテーブルを復元できます。'
  },
  {
    id: 'database-12',
    category: 'データベース',
    question: 'Redshiftのデータ圧縮で使用されない圧縮方式はどれですか？',
    options: [
      'LZO',
      'GZIP',
      'RAW',
      'BZIP2'
    ],
    correct: 3,
    explanation: 'RedshiftではLZO、GZIP、RAW（非圧縮）がサポートされていますが、BZIP2はサポートされていません。'
  },
  {
    id: 'database-13',
    category: 'データベース',
    question: 'ElastiCacheでサポートされているエンジンはどれですか？',
    options: [
      'Redis',
      'Memcached',
      '両方',
      'どちらでもない'
    ],
    correct: 2,
    explanation: 'Amazon ElastiCacheは、RedisとMemcachedの両方のエンジンをサポートしています。'
  },
  {
    id: 'database-14',
    category: 'データベース',
    question: 'DynamoDBのEventually Consistentリードの特徴はどれですか？',
    options: [
      '高コスト',
      '低レイテンシ',
      '強整合性',
      '高可用性'
    ],
    correct: 1,
    explanation: 'Eventually Consistentリードは、Strongly Consistentリードよりも低レイテンシで実行されます。'
  },
  {
    id: 'database-15',
    category: 'データベース',
    question: 'RDSのMulti-AZ配置で、フェイルオーバー時間の目安はどれですか？',
    options: [
      '30秒',
      '1-2分',
      '5-10分',
      '30分'
    ],
    correct: 1,
    explanation: 'RDS Multi-AZのフェイルオーバーは通常1-2分以内に完了します。'
  },
  {
    id: 'database-16',
    category: 'データベース',
    question: 'Aurora Global Databaseで対応していない機能はどれですか？',
    options: [
      'クロスリージョンレプリケーション',
      '災害復旧',
      'リアルタイム分析',
      'マルチマスター'
    ],
    correct: 3,
    explanation: 'Aurora Global Databaseは単一マスター構成で、マルチマスター機能は別の機能です。'
  },
  {
    id: 'database-17',
    category: 'データベース',
    question: 'DynamoDB Accelerator（DAX）の主な用途はどれですか？',
    options: [
      'データ圧縮',
      'キャッシング',
      'バックアップ',
      'レプリケーション'
    ],
    correct: 1,
    explanation: 'DAXは、DynamoDBのマイクロ秒レベルのキャッシングサービスです。'
  },
  {
    id: 'database-18',
    category: 'データベース',
    question: 'Redshift Spectrumで直接クエリできるデータ形式に含まれないものはどれですか？',
    options: [
      'Parquet',
      'ORC',
      'CSV',
      'XML'
    ],
    correct: 3,
    explanation: 'Redshift SpectrumはParquet、ORC、CSV、JSONなどをサポートしますが、XMLは直接サポートされていません。'
  },
  {
    id: 'database-19',
    category: 'データベース',
    question: 'RDSのPerformance Insightsで監視できない項目はどれですか？',
    options: [
      'CPU使用率',
      'メモリ使用率',
      'ディスク使用率',
      'ネットワーク帯域幅'
    ],
    correct: 3,
    explanation: 'Performance Insightsは主にデータベースのパフォーマンスメトリクスを監視し、ネットワーク帯域幅は含まれません。'
  },
  {
    id: 'database-20',
    category: 'データベース',
    question: 'DynamoDBのオンデマンド課金モードの特徴はどれですか？',
    options: [
      '事前容量設定必要',
      '予測可能なコスト',
      '使用量ベース課金',
      '最低料金あり'
    ],
    correct: 2,
    explanation: 'オンデマンドモードでは、実際に使用したリクエスト数に基づいて課金されます。'
  },
  {
    id: 'database-21',
    category: 'データベース',
    question: 'Neptuneでサポートされているグラフクエリ言語はどれですか？',
    options: [
      'Gremlin',
      'SPARQL',
      '両方',
      'どちらでもない'
    ],
    correct: 2,
    explanation: 'Amazon NeptuneはGremlinとSPARQLの両方のクエリ言語をサポートしています。'
  },
  {
    id: 'database-22',
    category: 'データベース',
    question: 'RDSのProxy機能の主な利点はどれですか？',
    options: [
      'パフォーマンス向上',
      'コネクション管理',
      'セキュリティ強化',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'RDS Proxyは、コネクションプーリング、フェイルオーバー時間短縮、セキュリティ強化を提供します。'
  },
  {
    id: 'database-23',
    category: 'データベース',
    question: 'DynamoDBのTransactionsで一度に処理できる最大アイテム数はどれですか？',
    options: [
      '10個',
      '25個',
      '50個',
      '100個'
    ],
    correct: 1,
    explanation: 'DynamoDBトランザクションでは、一度に最大25個のアイテムを処理できます。'
  },
  {
    id: 'database-24',
    category: 'データベース',
    question: 'Timestreamの主な用途はどれですか？',
    options: [
      'リレーショナルデータ',
      'ドキュメントデータ',
      '時系列データ',
      'グラフデータ'
    ],
    correct: 2,
    explanation: 'Amazon Timestreamは、時系列データ専用のフルマネージドデータベースサービスです。'
  },
  {
    id: 'database-25',
    category: 'データベース',
    question: 'Aurora Serverless v2の最小ACU値はどれですか？',
    options: [
      '0.5',
      '1',
      '2',
      '4'
    ],
    correct: 0,
    explanation: 'Aurora Serverless v2では、最小0.5 ACUから設定できます。'
  },
  {
    id: 'database-26',
    category: 'データベース',
    question: 'DynamoDBのGlobal Tablesで必要な設定はどれですか？',
    options: [
      'DynamoDB Streams',
      'バックアップ有効',
      '暗号化有効',
      'TTL有効'
    ],
    correct: 0,
    explanation: 'Global TablesにはDynamoDB Streamsの有効化が必要です。'
  },
  {
    id: 'database-27',
    category: 'データベース',
    question: 'RDSのBlue/Greenデプロイメントで対応していないエンジンはどれですか？',
    options: [
      'MySQL',
      'PostgreSQL',
      'MariaDB',
      'Oracle'
    ],
    correct: 3,
    explanation: 'RDS Blue/Greenデプロイメントは、MySQL、PostgreSQL、MariaDBで利用可能ですが、Oracleでは利用できません。'
  },
  {
    id: 'database-28',
    category: 'データベース',
    question: 'Redshiftのワークロード管理（WLM）で設定できる最大キュー数はどれですか？',
    options: [
      '5個',
      '8個',
      '10個',
      '15個'
    ],
    correct: 1,
    explanation: 'Redshiftでは最大8個のユーザー定義キューを設定できます。'
  },
  {
    id: 'database-29',
    category: 'データベース',
    question: 'ElastiCacheのRedisで利用できないデータ構造はどれですか？',
    options: [
      'String',
      'Hash',
      'List',
      'Graph'
    ],
    correct: 3,
    explanation: 'RedisはString、Hash、List、Set、Sorted Setなどをサポートしますが、Graphデータ構造は直接サポートされていません。'
  },
  {
    id: 'database-30',
    category: 'データベース',
    question: 'DynamoDBのConditional Writesで使用できない演算子はどれですか？',
    options: [
      '=',
      '<>',
      'BETWEEN',
      'REGEX'
    ],
    correct: 3,
    explanation: 'DynamoDBの条件式では、等価、不等価、BETWEEN演算子は使用できますが、REGEX演算子は使用できません。'
  },
  {
    id: 'networking-1',
    category: 'ネットワーキング',
    question: 'Layer 7（HTTP/HTTPS）で動作するロードバランサーはどれですか？',
    options: [
      'Classic Load Balancer',
      'Application Load Balancer',
      'Network Load Balancer',
      'Gateway Load Balancer'
    ],
    correct: 1,
    explanation: 'Application Load Balancer（ALB）は、Layer 7で動作し、HTTP/HTTPSトラフィックの高度なルーティングを提供します。'
  },
  {
    id: 'networking-2',
    category: 'ネットワーキング',
    question: '超高性能と極低レイテンシを提供するロードバランサーはどれですか？',
    options: [
      'ALB',
      'NLB',
      'CLB',
      'GWLB'
    ],
    correct: 1,
    explanation: 'Network Load Balancer（NLB）は、Layer 4で動作し、超高性能と極低レイテンシを提供します。'
  },
  {
    id: 'networking-3',
    category: 'ネットワーキング',
    question: '複数のVPCとオンプレミスを統合接続できるサービスはどれですか？',
    options: [
      'VPC Peering',
      'Transit Gateway',
      'Direct Connect',
      'VPN'
    ],
    correct: 1,
    explanation: 'AWS Transit Gatewayは、VPCとオンプレミスネットワークを単一のゲートウェイに接続できるサービスです。'
  },
  {
    id: 'networking-4',
    category: 'ネットワーキング',
    question: '専用線接続を提供するAWSサービスはどれですか？',
    options: [
      'VPN',
      'Direct Connect',
      'Transit Gateway',
      'PrivateLink'
    ],
    correct: 1,
    explanation: 'AWS Direct Connectは、オンプレミスからAWSへの専用ネットワーク接続を提供します。'
  },
  {
    id: 'networking-5',
    category: 'ネットワーキング',
    question: 'グローバルなコンテンツ配信ネットワーク（CDN）サービスはどれですか？',
    options: [
      'Route 53',
      'CloudFront',
      'Global Accelerator',
      'API Gateway'
    ],
    correct: 1,
    explanation: 'Amazon CloudFrontは、グローバルなエッジロケーションを使用してコンテンツを配信するCDNサービスです。'
  },
  {
    id: 'networking-6',
    category: 'ネットワーキング',
    question: '100% SLAを提供するDNSサービスはどれですか？',
    options: [
      'Route 53',
      'CloudFront',
      'Global Accelerator',
      'Direct Connect'
    ],
    correct: 0,
    explanation: 'Amazon Route 53は、100%の可用性SLAを提供する唯一のAWSサービスです。'
  },
  {
    id: 'networking-7',
    category: 'ネットワーキング',
    question: 'VPCのデフォルトセキュリティグループの初期設定はどれですか？',
    options: [
      'すべて許可',
      'すべて拒否',
      'アウトバウンドのみ許可',
      'インバウンドのみ許可'
    ],
    correct: 2,
    explanation: 'デフォルトセキュリティグループは、すべてのアウトバウンドトラフィックを許可し、同じセキュリティグループ内からのインバウンドトラフィックのみを許可します。'
  },
  {
    id: 'networking-8',
    category: 'ネットワーキング',
    question: 'VPC Peeringで接続できないネットワーク構成はどれですか？',
    options: [
      '同一リージョン内VPC',
      '異なるリージョンのVPC',
      '異なるアカウントのVPC',
      '推移的ルーティング'
    ],
    correct: 3,
    explanation: 'VPC Peeringでは推移的ルーティングはサポートされておらず、直接接続されたVPC間でのみ通信可能です。'
  },
  {
    id: 'networking-9',
    category: 'ネットワーキング',
    question: 'NATゲートウェイの主な用途はどれですか？',
    options: [
      'インバウンド接続',
      'アウトバウンド接続',
      '双方向接続',
      'VPC間接続'
    ],
    correct: 1,
    explanation: 'NATゲートウェイは、プライベートサブネット内のインスタンスがインターネットへのアウトバウンド接続を行うために使用されます。'
  },
  {
    id: 'networking-10',
    category: 'ネットワーキング',
    question: 'Elastic IPアドレスの課金対象となる状況はどれですか？',
    options: [
      '使用中',
      '未使用',
      '停止中のインスタンスに関連付け',
      '削除時'
    ],
    correct: 1,
    explanation: 'Elastic IPアドレスは、使用していない（インスタンスに関連付けられていない）場合に課金されます。'
  },
  {
    id: 'networking-11',
    category: 'ネットワーキング',
    question: 'CloudFrontのオリジンとして使用できないサービスはどれですか？',
    options: [
      'S3',
      'ALB',
      'EC2',
      'Lambda'
    ],
    correct: 3,
    explanation: 'CloudFrontのオリジンとしてLambda関数を直接指定することはできません。Lambda@Edgeは別の機能です。'
  },
  {
    id: 'networking-12',
    category: 'ネットワーキング',
    question: 'Route 53のヘルスチェックで監視できない項目はどれですか？',
    options: [
      'HTTP/HTTPS',
      'TCP',
      '文字列マッチング',
      'データベース接続'
    ],
    correct: 3,
    explanation: 'Route 53ヘルスチェックは、HTTP/HTTPS、TCP、文字列マッチングをサポートしますが、データベース接続の直接監視はできません。'
  },
  {
    id: 'networking-13',
    category: 'ネットワーキング',
    question: 'VPC Endpointで利用できないタイプはどれですか？',
    options: [
      'Gateway Endpoint',
      'Interface Endpoint',
      'Network Endpoint',
      'すべて利用可能'
    ],
    correct: 2,
    explanation: 'VPC EndpointにはGateway EndpointとInterface Endpointの2種類があり、Network Endpointというタイプは存在しません。'
  },
  {
    id: 'networking-14',
    category: 'ネットワーキング',
    question: 'Direct Connect Gatewayの主な利点はどれですか？',
    options: [
      'コスト削減',
      '複数VPC接続',
      'セキュリティ向上',
      'パフォーマンス向上'
    ],
    correct: 1,
    explanation: 'Direct Connect Gatewayにより、単一のDirect Connect接続から複数のVPCに接続できます。'
  },
  {
    id: 'networking-15',
    category: 'ネットワーキング',
    question: 'Global Acceleratorで使用される技術はどれですか？',
    options: [
      'DNS',
      'Anycast IP',
      'BGP',
      'OSPF'
    ],
    correct: 1,
    explanation: 'Global AcceleratorはAnycast IPアドレスを使用して、ユーザーを最適なエンドポイントにルーティングします。'
  },
  {
    id: 'networking-16',
    category: 'ネットワーキング',
    question: 'VPCのCIDRブロックで使用できない範囲はどれですか？',
    options: [
      '10.0.0.0/8',
      '172.16.0.0/12',
      '192.168.0.0/16',
      '169.254.0.0/16'
    ],
    correct: 3,
    explanation: '169.254.0.0/16はリンクローカルアドレス範囲で、VPCのCIDRブロックとして使用できません。'
  },
  {
    id: 'networking-17',
    category: 'ネットワーキング',
    question: 'ALBのターゲットグループで使用できないターゲットタイプはどれですか？',
    options: [
      'instance',
      'ip',
      'lambda',
      'container'
    ],
    correct: 3,
    explanation: 'ALBのターゲットタイプには、instance、ip、lambdaがありますが、containerという直接的なタイプはありません。'
  },
  {
    id: 'networking-18',
    category: 'ネットワーキング',
    question: 'VPC Flow Logsで記録されない情報はどれですか？',
    options: [
      '送信元IP',
      '宛先IP',
      'ポート番号',
      'ペイロード内容'
    ],
    correct: 3,
    explanation: 'VPC Flow Logsは、ネットワークトラフィックのメタデータを記録しますが、実際のペイロード内容は記録されません。'
  },
  {
    id: 'networking-19',
    category: 'ネットワーキング',
    question: 'Site-to-Site VPNで使用される暗号化プロトコルはどれですか？',
    options: [
      'SSL/TLS',
      'IPSec',
      'SSH',
      'HTTPS'
    ],
    correct: 1,
    explanation: 'AWS Site-to-Site VPNは、IPSecプロトコルを使用してトンネルを暗号化します。'
  },
  {
    id: 'networking-20',
    category: 'ネットワーキング',
    question: 'PrivateLinkの主な用途はどれですか？',
    options: [
      'インターネット接続',
      'VPC間接続',
      'プライベートサービス接続',
      'DNS解決'
    ],
    correct: 2,
    explanation: 'AWS PrivateLinkは、VPCとAWSサービスまたはサードパーティサービス間のプライベート接続を提供します。'
  },
  {
    id: 'networking-21',
    category: 'ネットワーキング',
    question: 'CloudFrontのキャッシュ動作で設定できない項目はどれですか？',
    options: [
      'TTL',
      '圧縮',
      'HTTPS リダイレクト',
      'データベースクエリ'
    ],
    correct: 3,
    explanation: 'CloudFrontはコンテンツ配信に特化しており、データベースクエリの設定はできません。'
  },
  {
    id: 'networking-22',
    category: 'ネットワーキング',
    question: 'NLBで利用できない機能はどれですか？',
    options: [
      '静的IP',
      'クロスゾーン負荷分散',
      'パスベースルーティング',
      'ヘルスチェック'
    ],
    correct: 2,
    explanation: 'NLBはLayer 4で動作するため、HTTPパスベースルーティングはサポートされていません。これはALBの機能です。'
  },
  {
    id: 'networking-23',
    category: 'ネットワーキング',
    question: 'Route 53のルーティングポリシーに含まれないものはどれですか？',
    options: [
      'Simple',
      'Weighted',
      'Latency-based',
      'Cost-based'
    ],
    correct: 3,
    explanation: 'Route 53には、Simple、Weighted、Latency-based、Failover、Geolocation、Geoproximity、Multivalue answerがありますが、Cost-basedはありません。'
  },
  {
    id: 'networking-24',
    category: 'ネットワーキング',
    question: 'VPCのDHCPオプションセットで設定できない項目はどれですか？',
    options: [
      'domain-name',
      'domain-name-servers',
      'ntp-servers',
      'proxy-servers'
    ],
    correct: 3,
    explanation: 'VPCのDHCPオプションセットでは、proxy-serversの設定はサポートされていません。'
  },
  {
    id: 'networking-25',
    category: 'ネットワーキング',
    question: 'Transit Gatewayの最大アタッチメント数はどれですか？',
    options: [
      '50',
      '100',
      '5000',
      '10000'
    ],
    correct: 2,
    explanation: 'Transit Gatewayには最大5000のアタッチメントを接続できます。'
  },
  {
    id: 'networking-26',
    category: 'ネットワーキング',
    question: 'Client VPNで使用される認証方式に含まれないものはどれですか？',
    options: [
      '相互認証',
      'Active Directory',
      'SAML',
      'OAuth'
    ],
    correct: 3,
    explanation: 'Client VPNは、相互認証、Active Directory、SAMLをサポートしますが、OAuthは直接サポートされていません。'
  },
  {
    id: 'networking-27',
    category: 'ネットワーキング',
    question: 'VPC内のサブネットで予約されるIPアドレス数はどれですか？',
    options: [
      '3個',
      '4個',
      '5個',
      '6個'
    ],
    correct: 2,
    explanation: 'VPCサブネットでは、ネットワークアドレス、VPCルーター、DNS、将来の使用、ブロードキャストアドレスの5個のIPアドレスが予約されます。'
  },
  {
    id: 'networking-28',
    category: 'ネットワーキング',
    question: 'Gateway Load Balancerの主な用途はどれですか？',
    options: [
      'HTTP負荷分散',
      'TCP負荷分散',
      'セキュリティアプライアンス',
      'DNS負荷分散'
    ],
    correct: 2,
    explanation: 'Gateway Load Balancerは、ファイアウォールやIDS/IPSなどのセキュリティアプライアンスの負荷分散に使用されます。'
  },
  {
    id: 'networking-29',
    category: 'ネットワーキング',
    question: 'CloudFrontのオリジンアクセスアイデンティティ（OAI）の目的はどれですか？',
    options: [
      'パフォーマンス向上',
      'コスト削減',
      'セキュリティ強化',
      'キャッシュ最適化'
    ],
    correct: 2,
    explanation: 'OAIは、S3バケットへの直接アクセスを制限し、CloudFront経由でのみアクセスを許可するセキュリティ機能です。'
  },
  {
    id: 'networking-30',
    category: 'ネットワーキング',
    question: 'VPC Latticeの主な機能はどれですか？',
    options: [
      'VPC接続',
      'サービス間通信',
      'DNS解決',
      'ロードバランシング'
    ],
    correct: 1,
    explanation: 'VPC Latticeは、マイクロサービス間の安全で効率的な通信を実現するアプリケーションネットワーキングサービスです。'
  },
  {
    id: 'security-1',
    category: 'セキュリティ',
    question: '暗号化キーを管理するAWSサービスはどれですか？',
    options: [
      'IAM',
      'KMS',
      'Secrets Manager',
      'Certificate Manager'
    ],
    correct: 1,
    explanation: 'AWS KMS（Key Management Service）は、暗号化キーの作成と管理を行うマネージドサービスです。'
  },
  {
    id: 'security-2',
    category: 'セキュリティ',
    question: '機械学習を使用して脅威を検知するサービスはどれですか？',
    options: [
      'CloudTrail',
      'Config',
      'GuardDuty',
      'Inspector'
    ],
    correct: 2,
    explanation: 'Amazon GuardDutyは、機械学習を使用してAWSアカウントとワークロードの脅威を検知するサービスです。'
  },
  {
    id: 'security-3',
    category: 'セキュリティ',
    question: 'Webアプリケーションファイアウォール機能を提供するサービスはどれですか？',
    options: [
      'Shield',
      'WAF',
      'GuardDuty',
      'Inspector'
    ],
    correct: 1,
    explanation: 'AWS WAF（Web Application Firewall）は、Webアプリケーションを一般的な攻撃から保護します。'
  },
  {
    id: 'security-4',
    category: 'セキュリティ',
    question: 'DDoS攻撃から保護するAWSサービスはどれですか？',
    options: [
      'WAF',
      'Shield',
      'GuardDuty',
      'Inspector'
    ],
    correct: 1,
    explanation: 'AWS Shieldは、DDoS攻撃からAWSリソースを保護するマネージドサービスです。'
  },
  {
    id: 'security-5',
    category: 'セキュリティ',
    question: 'S3バケット内の機密データを自動検出するサービスはどれですか？',
    options: [
      'GuardDuty',
      'Macie',
      'Inspector',
      'Config'
    ],
    correct: 1,
    explanation: 'Amazon Macieは、機械学習を使用してS3内の機密データを自動的に検出・分類します。'
  },
  {
    id: 'security-6',
    category: 'セキュリティ',
    question: '専用のハードウェアセキュリティモジュールを提供するサービスはどれですか？',
    options: [
      'KMS',
      'CloudHSM',
      'Secrets Manager',
      'Certificate Manager'
    ],
    correct: 1,
    explanation: 'AWS CloudHSMは、専用のハードウェアセキュリティモジュール（HSM）を提供します。'
  },
  {
    id: 'security-7',
    category: 'セキュリティ',
    question: 'EC2インスタンスの脆弱性評価を行うサービスはどれですか？',
    options: [
      'GuardDuty',
      'Inspector',
      'Macie',
      'Config'
    ],
    correct: 1,
    explanation: 'Amazon Inspectorは、EC2インスタンスとコンテナイメージの脆弱性評価を自動的に行います。'
  },
  {
    id: 'security-8',
    category: 'セキュリティ',
    question: '複数のセキュリティサービスの結果を統合管理するサービスはどれですか？',
    options: [
      'CloudTrail',
      'Config',
      'Security Hub',
      'Systems Manager'
    ],
    correct: 2,
    explanation: 'AWS Security Hubは、複数のセキュリティサービスからの結果を統合し、一元的に管理できます。'
  },
  {
    id: 'security-9',
    category: 'セキュリティ',
    question: 'APIキーやパスワードを安全に管理するサービスはどれですか？',
    options: [
      'KMS',
      'Secrets Manager',
      'Parameter Store',
      'Certificate Manager'
    ],
    correct: 1,
    explanation: 'AWS Secrets Managerは、データベース認証情報、APIキー、その他の機密情報を安全に管理します。'
  },
  {
    id: 'security-10',
    category: 'セキュリティ',
    question: 'SSL/TLS証明書を無料で提供・管理するサービスはどれですか？',
    options: [
      'KMS',
      'Certificate Manager',
      'Secrets Manager',
      'CloudHSM'
    ],
    correct: 1,
    explanation: 'AWS Certificate Manager（ACM）は、SSL/TLS証明書を無料で提供し、自動更新も行います。'
  },
  {
    id: 'security-11',
    category: 'セキュリティ',
    question: 'IAMポリシーの評価で最も優先度が高いのはどれですか？',
    options: [
      'Allow',
      'Deny',
      '条件による',
      '設定順序による'
    ],
    correct: 1,
    explanation: 'IAMでは、明示的なDenyが常に最優先され、Allowより優先されます。'
  },
  {
    id: 'security-12',
    category: 'セキュリティ',
    question: 'AWS SSOで対応していない認証方式はどれですか？',
    options: [
      'SAML 2.0',
      'OIDC',
      'LDAP',
      'Kerberos'
    ],
    correct: 3,
    explanation: 'AWS SSOは、SAML 2.0、OIDC、LDAPをサポートしますが、Kerberosは直接サポートされていません。'
  },
  {
    id: 'security-13',
    category: 'セキュリティ',
    question: 'CloudTrailのログファイルの整合性を検証する機能はどれですか？',
    options: [
      'ログファイル検証',
      'データイベント',
      'インサイトイベント',
      'マネジメントイベント'
    ],
    correct: 0,
    explanation: 'CloudTrailのログファイル検証機能により、ログファイルが改ざんされていないことを確認できます。'
  },
  {
    id: 'security-14',
    category: 'セキュリティ',
    question: 'KMSのカスタマー管理キーで設定できない項目はどれですか？',
    options: [
      'キーローテーション',
      'キーポリシー',
      'エイリアス',
      'キー長'
    ],
    correct: 3,
    explanation: 'KMSのカスタマー管理キーでは、キー長は固定（256ビット）で変更できません。'
  },
  {
    id: 'security-15',
    category: 'セキュリティ',
    question: 'GuardDutyで検出されない脅威タイプはどれですか？',
    options: [
      'マルウェア',
      '異常なAPI呼び出し',
      'ネットワーク異常',
      'アプリケーション脆弱性'
    ],
    correct: 3,
    explanation: 'GuardDutyは、マルウェア、異常なAPI呼び出し、ネットワーク異常を検出しますが、アプリケーション脆弱性の検出はInspectorの役割です。'
  },
  {
    id: 'security-16',
    category: 'セキュリティ',
    question: 'WAFで設定できないルールタイプはどれですか？',
    options: [
      'IP制限',
      '地理的制限',
      'レート制限',
      'データベースクエリ制限'
    ],
    correct: 3,
    explanation: 'WAFは、IP制限、地理的制限、レート制限を設定できますが、データベースクエリの制限は対象外です。'
  },
  {
    id: 'security-17',
    category: 'セキュリティ',
    question: 'Shield Advancedで提供されない機能はどれですか？',
    options: [
      '24/7 DRTサポート',
      'コスト保護',
      'リアルタイム通知',
      'アプリケーション監視'
    ],
    correct: 3,
    explanation: 'Shield Advancedは、DRTサポート、コスト保護、リアルタイム通知を提供しますが、詳細なアプリケーション監視は含まれません。'
  },
  {
    id: 'security-18',
    category: 'セキュリティ',
    question: 'Macieで検出できないデータタイプはどれですか？',
    options: [
      'クレジットカード番号',
      'SSN',
      'パスポート番号',
      'ログファイル'
    ],
    correct: 3,
    explanation: 'Macieは、PII（個人識別情報）を検出しますが、一般的なログファイルの内容分析は対象外です。'
  },
  {
    id: 'security-19',
    category: 'セキュリティ',
    question: 'CloudHSMとKMSの主な違いはどれですか？',
    options: [
      'コスト',
      '専用ハードウェア',
      'パフォーマンス',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'CloudHSMは専用ハードウェア、高パフォーマンス、高コストが特徴で、KMSはマルチテナント、標準パフォーマンス、低コストです。'
  },
  {
    id: 'security-20',
    category: 'セキュリティ',
    question: 'IAMロールの一時的な認証情報の最大有効期間はどれですか？',
    options: [
      '1時間',
      '12時間',
      '24時間',
      '36時間'
    ],
    correct: 2,
    explanation: 'IAMロールの一時的な認証情報は、最大12時間（43,200秒）まで有効にできます。'
  },
  {
    id: 'security-21',
    category: 'セキュリティ',
    question: 'Secrets Managerの自動ローテーション機能で対応していないサービスはどれですか？',
    options: [
      'RDS',
      'DocumentDB',
      'Redshift',
      'ElastiCache'
    ],
    correct: 3,
    explanation: 'Secrets Managerは、RDS、DocumentDB、Redshiftの自動ローテーションをサポートしますが、ElastiCacheは対応していません。'
  },
  {
    id: 'security-22',
    category: 'セキュリティ',
    question: 'Certificate Managerで管理できない証明書タイプはどれですか？',
    options: [
      'ドメイン検証',
      '組織検証',
      '拡張検証',
      'コード署名'
    ],
    correct: 3,
    explanation: 'ACMは、ドメイン検証、組織検証、拡張検証証明書を管理できますが、コード署名証明書は対象外です。'
  },
  {
    id: 'security-23',
    category: 'セキュリティ',
    question: 'Security Hubで統合できないサービスはどれですか？',
    options: [
      'GuardDuty',
      'Inspector',
      'Macie',
      'CloudFormation'
    ],
    correct: 3,
    explanation: 'Security Hubは、セキュリティ関連サービス（GuardDuty、Inspector、Macie）を統合しますが、CloudFormationは対象外です。'
  },
  {
    id: 'security-24',
    category: 'セキュリティ',
    question: 'IAMのアクセスアナライザーで検出できない項目はどれですか？',
    options: [
      '外部アクセス',
      '未使用アクセス',
      'パスワードポリシー',
      'リソース共有'
    ],
    correct: 2,
    explanation: 'IAMアクセスアナライザーは、外部アクセス、未使用アクセス、リソース共有を分析しますが、パスワードポリシーの分析は対象外です。'
  },
  {
    id: 'security-25',
    category: 'セキュリティ',
    question: 'CloudTrailのデータイベントで記録されない操作はどれですか？',
    options: [
      'S3オブジェクトアクセス',
      'Lambda関数実行',
      'DynamoDBアクセス',
      'EC2インスタンス起動'
    ],
    correct: 3,
    explanation: 'データイベントは、S3、Lambda、DynamoDBなどのデータレベルの操作を記録しますが、EC2インスタンス起動はマネジメントイベントです。'
  },
  {
    id: 'security-26',
    category: 'セキュリティ',
    question: 'KMSのキーローテーションの頻度はどれですか？',
    options: [
      '30日',
      '90日',
      '365日',
      '設定可能'
    ],
    correct: 2,
    explanation: 'KMSの自動キーローテーションは、年1回（365日）の頻度で実行されます。'
  },
  {
    id: 'security-27',
    category: 'セキュリティ',
    question: 'GuardDutyの脅威インテリジェンスで使用されないソースはどれですか？',
    options: [
      'AWS Security',
      'CrowdStrike',
      'Proofpoint',
      'Microsoft'
    ],
    correct: 3,
    explanation: 'GuardDutyは、AWS Security、CrowdStrike、Proofpointなどの脅威インテリジェンスを使用しますが、Microsoftは含まれません。'
  },
  {
    id: 'security-28',
    category: 'セキュリティ',
    question: 'WAFのマネージドルールグループに含まれないカテゴリはどれですか？',
    options: [
      'Core Rule Set',
      'Known Bad Inputs',
      'SQL Injection',
      'Email Protection'
    ],
    correct: 3,
    explanation: 'WAFマネージドルールには、Core Rule Set、Known Bad Inputs、SQL Injectionなどがありますが、Email Protectionは含まれません。'
  },
  {
    id: 'security-29',
    category: 'セキュリティ',
    question: 'Inspectorの評価で使用されない基準はどれですか？',
    options: [
      'CVE',
      'CIS Benchmarks',
      'AWS Security Best Practices',
      'GDPR Compliance'
    ],
    correct: 3,
    explanation: 'InspectorはCVE、CIS Benchmarks、AWS Security Best Practicesを使用しますが、GDPR Complianceの評価は含まれません。'
  },
  {
    id: 'security-30',
    category: 'セキュリティ',
    question: 'Macieの機密データ検出で使用されない技術はどれですか？',
    options: [
      '機械学習',
      'パターンマッチング',
      'キーワード検索',
      'ブロックチェーン'
    ],
    correct: 3,
    explanation: 'Macieは、機械学習、パターンマッチング、キーワード検索を使用しますが、ブロックチェーン技術は使用されません。'
  },
  {
    id: 'security-31',
    category: 'セキュリティ',
    question: 'CloudHSMクラスターの最小ノード数はどれですか？',
    options: [
      '1個',
      '2個',
      '3個',
      '5個'
    ],
    correct: 1,
    explanation: 'CloudHSMクラスターは、高可用性のために最低2個のHSMノードが必要です。'
  },
  {
    id: 'security-32',
    category: 'セキュリティ',
    question: 'IAMのサービスリンクロールで実行できない操作はどれですか？',
    options: [
      '作成',
      '削除',
      '編集',
      '複製'
    ],
    correct: 2,
    explanation: 'サービスリンクロールは、AWSサービスによって管理されるため、ユーザーが直接編集することはできません。'
  },
  {
    id: 'security-33',
    category: 'セキュリティ',
    question: 'Secrets Managerの料金体系に含まれない要素はどれですか？',
    options: [
      'シークレット数',
      'API呼び出し数',
      'ストレージ容量',
      'ローテーション回数'
    ],
    correct: 2,
    explanation: 'Secrets Managerは、シークレット数とAPI呼び出し数で課金されますが、ストレージ容量やローテーション回数は課金対象外です。'
  },
  {
    id: 'security-34',
    category: 'セキュリティ',
    question: 'Certificate Managerの証明書で設定できない項目はどれですか？',
    options: [
      'ドメイン名',
      '有効期間',
      'キーアルゴリズム',
      'タグ'
    ],
    correct: 1,
    explanation: 'ACMの証明書は、有効期間が自動的に設定され（通常13ヶ月）、ユーザーが変更することはできません。'
  },
  {
    id: 'security-35',
    category: 'セキュリティ',
    question: 'Security Hubのセキュリティ標準に含まれないものはどれですか？',
    options: [
      'AWS Foundational Security Standard',
      'CIS AWS Foundations Benchmark',
      'PCI DSS',
      'ISO 27001'
    ],
    correct: 3,
    explanation: 'Security HubはAWS Foundational、CIS、PCI DSSをサポートしますが、ISO 27001は含まれません。'
  },
  {
    id: 'security-36',
    category: 'セキュリティ',
    question: 'IAMのパスワードポリシーで設定できない項目はどれですか？',
    options: [
      '最小文字数',
      '文字種類要求',
      '有効期間',
      '生体認証'
    ],
    correct: 3,
    explanation: 'IAMパスワードポリシーでは、文字数、文字種類、有効期間を設定できますが、生体認証は設定できません。'
  },
  {
    id: 'security-37',
    category: 'セキュリティ',
    question: 'CloudTrailのインサイトイベントで検出される異常に含まれないものはどれですか？',
    options: [
      'API呼び出し急増',
      '異常なエラー率',
      '新しいユーザー活動',
      'データ転送量異常'
    ],
    correct: 3,
    explanation: 'CloudTrailインサイトは、API呼び出しパターンの異常を検出しますが、データ転送量の異常は対象外です。'
  },
  {
    id: 'security-38',
    category: 'セキュリティ',
    question: 'KMSのキー使用許可で設定できない操作はどれですか？',
    options: [
      'Encrypt',
      'Decrypt',
      'GenerateDataKey',
      'CreateUser'
    ],
    correct: 3,
    explanation: 'KMSキー使用許可では、暗号化関連操作を設定できますが、IAMユーザー作成などの操作は含まれません。'
  },
  {
    id: 'security-39',
    category: 'セキュリティ',
    question: 'GuardDutyの検出結果の重要度レベルに含まれないものはどれですか？',
    options: [
      'Low',
      'Medium',
      'High',
      'Critical'
    ],
    correct: 3,
    explanation: 'GuardDutyの重要度レベルは、Low（1.0-3.9）、Medium（4.0-6.9）、High（7.0-8.9）の3段階です。'
  },
  {
    id: 'security-40',
    category: 'セキュリティ',
    question: 'WAFのWebACLで設定できないアクションはどれですか？',
    options: [
      'Allow',
      'Block',
      'Count',
      'Redirect'
    ],
    correct: 3,
    explanation: 'WAFのWebACLでは、Allow、Block、Countアクションを設定できますが、Redirectアクションは直接設定できません。'
  },
  {
    id: 'security-41',
    category: 'セキュリティ',
    question: 'Shield Standardで保護されないリソースはどれですか？',
    options: [
      'CloudFront',
      'Route 53',
      'ELB',
      'EC2'
    ],
    correct: 3,
    explanation: 'Shield Standardは、CloudFront、Route 53、ELBを自動的に保護しますが、EC2インスタンスの直接保護は含まれません。'
  },
  {
    id: 'security-42',
    category: 'セキュリティ',
    question: 'Macieのデータ識別子で検出できない情報タイプはどれですか？',
    options: [
      'クレジットカード番号',
      '銀行口座番号',
      'パスポート番号',
      'ソースコード'
    ],
    correct: 3,
    explanation: 'Macieは、PII（個人識別情報）や金融情報を検出しますが、一般的なソースコードの検出は対象外です。'
  },
  {
    id: 'security-43',
    category: 'セキュリティ',
    question: 'CloudHSMで使用できない暗号化アルゴリズムはどれですか？',
    options: [
      'AES',
      'RSA',
      'ECC',
      'MD5'
    ],
    correct: 3,
    explanation: 'CloudHSMは、AES、RSA、ECCなどの強力な暗号化アルゴリズムをサポートしますが、MD5は安全でないため推奨されません。'
  },
  {
    id: 'security-44',
    category: 'セキュリティ',
    question: 'IAMのアクセスキーで設定できない項目はどれですか？',
    options: [
      '有効期限',
      'アクセス許可',
      'ローテーション',
      '自動削除'
    ],
    correct: 0,
    explanation: 'IAMアクセスキーには有効期限を直接設定することはできません。定期的なローテーションが推奨されます。'
  },
  {
    id: 'security-45',
    category: 'セキュリティ',
    question: 'Secrets Managerで管理できないシークレットタイプはどれですか？',
    options: [
      'データベース認証情報',
      'APIキー',
      'OAuth トークン',
      'SSH キー'
    ],
    correct: 3,
    explanation: 'Secrets Managerは、データベース認証情報、APIキー、OAuthトークンを管理できますが、SSHキーの管理は対象外です。'
  },
  {
    id: 'security-46',
    category: 'セキュリティ',
    question: 'Certificate Managerの証明書検証で使用されない方法はどれですか？',
    options: [
      'DNS検証',
      'Email検証',
      'HTTP検証',
      'SMS検証'
    ],
    correct: 3,
    explanation: 'ACMは、DNS検証とEmail検証をサポートしますが、HTTP検証やSMS検証は使用されません。'
  },
  {
    id: 'security-47',
    category: 'セキュリティ',
    question: 'Security Hubのカスタムインサイトで使用できない集計方法はどれですか？',
    options: [
      'COUNT',
      'AVERAGE',
      'SUM',
      'MEDIAN'
    ],
    correct: 3,
    explanation: 'Security Hubのカスタムインサイトでは、COUNT、AVERAGE、SUMを使用できますが、MEDIANは使用できません。'
  },
  {
    id: 'security-48',
    category: 'セキュリティ',
    question: 'IAMのクロスアカウントアクセスで使用されない方法はどれですか？',
    options: [
      'IAMロール',
      'リソースベースポリシー',
      'フェデレーション',
      'VPC Peering'
    ],
    correct: 3,
    explanation: 'クロスアカウントアクセスには、IAMロール、リソースベースポリシー、フェデレーションを使用しますが、VPC Peeringは認証方法ではありません。'
  },
  {
    id: 'security-49',
    category: 'セキュリティ',
    question: 'CloudTrailのログ配信で使用できない宛先はどれですか？',
    options: [
      'S3',
      'CloudWatch Logs',
      'EventBridge',
      'DynamoDB'
    ],
    correct: 3,
    explanation: 'CloudTrailは、S3、CloudWatch Logs、EventBridgeにログを配信できますが、DynamoDBへの直接配信はできません。'
  },
  {
    id: 'security-50',
    category: 'セキュリティ',
    question: 'KMSのエンベロープ暗号化で使用されないキータイプはどれですか？',
    options: [
      'データキー',
      'マスターキー',
      'プレーンテキストキー',
      'ルートキー'
    ],
    correct: 3,
    explanation: 'エンベロープ暗号化では、データキー、マスターキー、プレーンテキストキーを使用しますが、ルートキーという概念は使用されません。'
  },
  {
    id: 'monitoring-1',
    category: '監視・ログ',
    question: 'AWSリソースの監視とアラートを提供するサービスはどれですか？',
    options: [
      'CloudTrail',
      'Config',
      'CloudWatch',
      'X-Ray'
    ],
    correct: 2,
    explanation: 'Amazon CloudWatchは、AWSリソースとアプリケーションの監視、メトリクス収集、アラート機能を提供します。'
  },
  {
    id: 'monitoring-2',
    category: '監視・ログ',
    question: '分散アプリケーションのトレーシングを行うサービスはどれですか？',
    options: [
      'CloudWatch',
      'CloudTrail',
      'X-Ray',
      'Config'
    ],
    correct: 2,
    explanation: 'AWS X-Rayは、分散アプリケーションのリクエストをトレースし、パフォーマンスの分析とデバッグを支援します。'
  },
  {
    id: 'monitoring-3',
    category: '監視・ログ',
    question: 'AWS API呼び出しのログを記録するサービスはどれですか？',
    options: [
      'CloudWatch',
      'CloudTrail',
      'X-Ray',
      'Config'
    ],
    correct: 1,
    explanation: 'AWS CloudTrailは、AWSアカウント内のAPI呼び出しを記録し、監査証跡を提供します。'
  },
  {
    id: 'monitoring-4',
    category: '監視・ログ',
    question: 'AWSリソースの設定変更を追跡するサービスはどれですか？',
    options: [
      'CloudWatch',
      'CloudTrail',
      'X-Ray',
      'Config'
    ],
    correct: 3,
    explanation: 'AWS Configは、AWSリソースの設定変更を継続的に記録・監視し、コンプライアンスを確認します。'
  },
  {
    id: 'monitoring-5',
    category: '監視・ログ',
    question: '実際のユーザーのWebサイト体験を監視するCloudWatchの機能はどれですか？',
    options: [
      'Metrics',
      'Logs',
      'RUM',
      'Alarms'
    ],
    correct: 2,
    explanation: 'CloudWatch RUM（Real User Monitoring）は、実際のユーザーのWebアプリケーション体験を監視します。'
  },
  {
    id: 'monitoring-6',
    category: '監視・ログ',
    question: 'CloudWatchの基本監視間隔はどれですか？',
    options: [
      '1分',
      '5分',
      '10分',
      '15分'
    ],
    correct: 1,
    explanation: 'CloudWatchの基本監視は5分間隔でメトリクスを収集します。詳細監視では1分間隔になります。'
  },
  {
    id: 'monitoring-7',
    category: '監視・ログ',
    question: 'CloudWatch Logsの保持期間で設定できない値はどれですか？',
    options: [
      '1日',
      '1週間',
      '1ヶ月',
      '永続'
    ],
    correct: 2,
    explanation: 'CloudWatch Logsでは1ヶ月（30日）の保持期間設定はできません。1日、1週間、永続などは設定可能です。'
  },
  {
    id: 'monitoring-8',
    category: '監視・ログ',
    question: 'X-Rayのサンプリングルールで制御できない項目はどれですか？',
    options: [
      'サンプリング率',
      'リクエスト数',
      'サービス名',
      'データベースクエリ'
    ],
    correct: 3,
    explanation: 'X-Rayサンプリングルールでは、サンプリング率、リクエスト数、サービス名を制御できますが、データベースクエリの詳細は制御できません。'
  },
  {
    id: 'monitoring-9',
    category: '監視・ログ',
    question: 'CloudTrailのデータイベントで記録されない操作はどれですか？',
    options: [
      'S3オブジェクトアクセス',
      'Lambda関数実行',
      'DynamoDBアクセス',
      'EC2インスタンス起動'
    ],
    correct: 3,
    explanation: 'EC2インスタンス起動はマネジメントイベントで記録され、データイベントではありません。'
  },
  {
    id: 'monitoring-10',
    category: '監視・ログ',
    question: 'CloudWatch Insightsで分析できないデータソースはどれですか？',
    options: [
      'CloudWatch Logs',
      'VPC Flow Logs',
      'CloudTrail Logs',
      'RDS Performance Insights'
    ],
    correct: 3,
    explanation: 'CloudWatch Insightsは、CloudWatch Logs、VPC Flow Logs、CloudTrail Logsを分析できますが、RDS Performance Insightsは別のサービスです。'
  },
  {
    id: 'monitoring-11',
    category: '監視・ログ',
    question: 'CloudWatch Dashboardで表示できないウィジェットタイプはどれですか？',
    options: [
      'メトリクス',
      'ログ',
      'アラーム状態',
      'データベーススキーマ'
    ],
    correct: 3,
    explanation: 'CloudWatch Dashboardでは、メトリクス、ログ、アラーム状態を表示できますが、データベーススキーマは表示できません。'
  },
  {
    id: 'monitoring-12',
    category: '監視・ログ',
    question: 'CloudWatch Eventsの後継サービスはどれですか？',
    options: [
      'EventBridge',
      'SNS',
      'SQS',
      'Step Functions'
    ],
    correct: 0,
    explanation: 'Amazon EventBridgeは、CloudWatch Eventsの後継サービスで、より多くの機能を提供します。'
  },
  {
    id: 'monitoring-13',
    category: '監視・ログ',
    question: 'X-Rayで分析できない項目はどれですか？',
    options: [
      'レスポンス時間',
      'エラー率',
      'スループット',
      'ディスク使用量'
    ],
    correct: 3,
    explanation: 'X-Rayは、アプリケーションのレスポンス時間、エラー率、スループットを分析しますが、システムレベルのディスク使用量は対象外です。'
  },
  {
    id: 'monitoring-14',
    category: '監視・ログ',
    question: 'CloudWatch Syntheticsの主な用途はどれですか？',
    options: [
      'リアルユーザー監視',
      '合成監視',
      'ログ分析',
      'メトリクス収集'
    ],
    correct: 1,
    explanation: 'CloudWatch Syntheticsは、スクリプトを使用してアプリケーションエンドポイントを定期的にテストする合成監視サービスです。'
  },
  {
    id: 'monitoring-15',
    category: '監視・ログ',
    question: 'CloudWatch Application Insightsで監視できないアプリケーションはどれですか？',
    options: [
      '.NET',
      'Java',
      'SQL Server',
      'MongoDB'
    ],
    correct: 3,
    explanation: 'Application Insightsは、.NET、Java、SQL Serverアプリケーションを監視しますが、MongoDBは直接サポートされていません。'
  },
  {
    id: 'monitoring-16',
    category: '監視・ログ',
    question: 'CloudWatch Container Insightsで監視できないメトリクスはどれですか？',
    options: [
      'CPU使用率',
      'メモリ使用率',
      'ネットワーク使用率',
      'アプリケーションログ'
    ],
    correct: 3,
    explanation: 'Container Insightsは、CPU、メモリ、ネットワークなどのインフラメトリクスを監視しますが、アプリケーションログは別途設定が必要です。'
  },
  {
    id: 'monitoring-17',
    category: '監視・ログ',
    question: 'CloudWatch Lambda Insightsで提供されない情報はどれですか？',
    options: [
      'コールドスタート',
      'メモリ使用量',
      '実行時間',
      'ソースコード'
    ],
    correct: 3,
    explanation: 'Lambda Insightsは、パフォーマンスメトリクスを提供しますが、ソースコードの内容は表示しません。'
  },
  {
    id: 'monitoring-18',
    category: '監視・ログ',
    question: 'VPC Flow Logsで記録されない情報はどれですか？',
    options: [
      '送信元IP',
      '宛先IP',
      'プロトコル',
      'HTTPヘッダー'
    ],
    correct: 3,
    explanation: 'VPC Flow Logsは、ネットワークレベルの情報を記録しますが、アプリケーションレベルのHTTPヘッダーは記録されません。'
  },
  {
    id: 'monitoring-19',
    category: '監視・ログ',
    question: 'CloudWatch Anomaly Detectionで使用される技術はどれですか？',
    options: [
      'ルールベース',
      '機械学習',
      '統計分析',
      'パターンマッチング'
    ],
    correct: 1,
    explanation: 'CloudWatch Anomaly Detectionは、機械学習を使用してメトリクスの異常を自動検出します。'
  },
  {
    id: 'monitoring-20',
    category: '監視・ログ',
    question: 'CloudWatch Composite Alarmsの主な用途はどれですか？',
    options: [
      '単一メトリクス監視',
      '複数アラーム組み合わせ',
      'ログ監視',
      'イベント監視'
    ],
    correct: 1,
    explanation: 'Composite Alarmsは、複数のアラームを論理演算子で組み合わせて、より複雑な監視条件を作成します。'
  },
  {
    id: 'monitoring-21',
    category: '監視・ログ',
    question: 'AWS Personal Health Dashboardで確認できない情報はどれですか？',
    options: [
      'サービス障害',
      'メンテナンス予定',
      'セキュリティ通知',
      'コスト情報'
    ],
    correct: 3,
    explanation: 'Personal Health Dashboardは、サービス状況やセキュリティ情報を提供しますが、コスト情報は含まれません。'
  },
  {
    id: 'monitoring-22',
    category: '監視・ログ',
    question: 'CloudWatch Evidently の主な機能はどれですか？',
    options: [
      'ログ分析',
      'A/Bテスト',
      'メトリクス収集',
      'アラート管理'
    ],
    correct: 1,
    explanation: 'CloudWatch Evidentlyは、機能フラグとA/Bテストを管理するサービスです。'
  },
  {
    id: 'monitoring-23',
    category: '監視・ログ',
    question: 'AWS Distro for OpenTelemetryの主な用途はどれですか？',
    options: [
      'ログ収集',
      'メトリクス収集',
      'トレース収集',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'AWS Distro for OpenTelemetryは、ログ、メトリクス、トレースを統合的に収集・送信するオープンソースツールです。'
  },
  {
    id: 'monitoring-24',
    category: '監視・ログ',
    question: 'Amazon Managed Grafanaで使用できないデータソースはどれですか？',
    options: [
      'CloudWatch',
      'Prometheus',
      'X-Ray',
      'DynamoDB'
    ],
    correct: 3,
    explanation: 'Managed Grafanaは、CloudWatch、Prometheus、X-Rayなどをサポートしますが、DynamoDBは直接データソースとして使用できません。'
  },
  {
    id: 'monitoring-25',
    category: '監視・ログ',
    question: 'Amazon Managed Service for Prometheusの主な利点はどれですか？',
    options: [
      'フルマネージド',
      'スケーラブル',
      'セキュア',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Managed Service for Prometheusは、フルマネージド、高可用性、セキュアなPrometheusサービスを提供します。'
  },
  {
    id: 'migration-1',
    category: '移行・統合',
    question: 'データベース移行を支援するAWSサービスはどれですか？',
    options: [
      'DataSync',
      'DMS',
      'Storage Gateway',
      'Transfer Family'
    ],
    correct: 1,
    explanation: 'AWS DMS（Database Migration Service）は、データベースの移行を支援するフルマネージドサービスです。'
  },
  {
    id: 'migration-2',
    category: '移行・統合',
    question: '大容量データをオフラインで転送するAWSサービスはどれですか？',
    options: [
      'DataSync',
      'DMS',
      'Snowball',
      'Transfer Family'
    ],
    correct: 2,
    explanation: 'AWS Snowballは、大容量データをオフラインで安全にAWSに転送するためのデータ転送デバイスです。'
  },
  {
    id: 'migration-3',
    category: '移行・統合',
    question: 'オンプレミスとAWS間でデータを同期するサービスはどれですか？',
    options: [
      'DataSync',
      'DMS',
      'Snowball',
      'Transfer Family'
    ],
    correct: 0,
    explanation: 'AWS DataSyncは、オンプレミスとAWS間、またはAWSサービス間でデータを同期するサービスです。'
  },
  {
    id: 'migration-4',
    category: '移行・統合',
    question: 'ハイブリッドクラウドストレージを実現するサービスはどれですか？',
    options: [
      'DataSync',
      'DMS',
      'Storage Gateway',
      'Transfer Family'
    ],
    correct: 2,
    explanation: 'AWS Storage Gatewayは、オンプレミス環境とAWSクラウドストレージを統合するハイブリッドサービスです。'
  },
  {
    id: 'migration-5',
    category: '移行・統合',
    question: 'アプリケーションを自動的にコンテナ化するサービスはどれですか？',
    options: [
      'App2Container',
      'Application Discovery Service',
      'Migration Hub',
      'Server Migration Service'
    ],
    correct: 0,
    explanation: 'AWS App2Containerは、既存のアプリケーションを自動的にコンテナ化し、AWSで実行できるようにします。'
  },
  {
    id: 'migration-6',
    category: '移行・統合',
    question: 'DMSでサポートされていない移行パターンはどれですか？',
    options: [
      '同種データベース間',
      '異種データベース間',
      'リアルタイムレプリケーション',
      'ファイルシステム移行'
    ],
    correct: 3,
    explanation: 'DMSはデータベース移行に特化しており、ファイルシステムの移行は対象外です。'
  },
  {
    id: 'migration-7',
    category: '移行・統合',
    question: 'Snowball Edgeの主な特徴はどれですか？',
    options: [
      'データ転送のみ',
      'コンピューティング機能付き',
      '小容量専用',
      'オンライン転送'
    ],
    correct: 1,
    explanation: 'Snowball Edgeは、データ転送に加えてエッジコンピューティング機能を提供します。'
  },
  {
    id: 'migration-8',
    category: '移行・統合',
    question: 'DataSyncで対応していない転送先はどれですか？',
    options: [
      'S3',
      'EFS',
      'FSx',
      'RDS'
    ],
    correct: 3,
    explanation: 'DataSyncは、S3、EFS、FSxをサポートしますが、RDSへの直接転送は対応していません。'
  },
  {
    id: 'migration-9',
    category: '移行・統合',
    question: 'Storage Gatewayのファイルゲートウェイで使用されるプロトコルはどれですか？',
    options: [
      'iSCSI',
      'NFS/SMB',
      'HTTP',
      'FTP'
    ],
    correct: 1,
    explanation: 'ファイルゲートウェイは、NFS（Linux）とSMB（Windows）プロトコルをサポートします。'
  },
  {
    id: 'migration-10',
    category: '移行・統合',
    question: 'Server Migration Service（SMS）の後継サービスはどれですか？',
    options: [
      'Application Migration Service',
      'Migration Hub',
      'DataSync',
      'DMS'
    ],
    correct: 0,
    explanation: 'AWS Application Migration Service（MGN）は、Server Migration Serviceの後継サービスです。'
  },
  {
    id: 'migration-11',
    category: '移行・統合',
    question: 'Transfer Familyでサポートされていないプロトコルはどれですか？',
    options: [
      'SFTP',
      'FTPS',
      'FTP',
      'HTTP'
    ],
    correct: 3,
    explanation: 'Transfer FamilyはSFTP、FTPS、FTPをサポートしますが、HTTPは対応していません。'
  },
  {
    id: 'migration-12',
    category: '移行・統合',
    question: 'Application Discovery Serviceの2つの発見タイプはどれですか？',
    options: [
      'エージェント型とエージェントレス型',
      '有料と無料',
      '自動と手動',
      'リアルタイムとバッチ'
    ],
    correct: 0,
    explanation: 'Application Discovery Serviceは、エージェント型（詳細）とエージェントレス型（基本）の発見を提供します。'
  },
  {
    id: 'migration-13',
    category: '移行・統合',
    question: 'Migration Hubで統合できないサービスはどれですか？',
    options: [
      'DMS',
      'Application Migration Service',
      'DataSync',
      'Lambda'
    ],
    correct: 3,
    explanation: 'Migration HubはDMS、MGN、DataSyncなどの移行サービスを統合しますが、Lambdaは対象外です。'
  },
  {
    id: 'migration-14',
    category: '移行・統合',
    question: 'Snowmobileの主な用途はどれですか？',
    options: [
      '小容量データ転送',
      '中容量データ転送',
      '大容量データ転送',
      'エクサバイト級データ転送'
    ],
    correct: 3,
    explanation: 'AWS Snowmobileは、エクサバイト級の大容量データをAWSに転送するためのトラック型デバイスです。'
  },
  {
    id: 'migration-15',
    category: '移行・統合',
    question: 'DMSのChange Data Capture（CDC）の主な用途はどれですか？',
    options: [
      '初期データ移行',
      '継続的レプリケーション',
      'データ変換',
      'データ検証'
    ],
    correct: 1,
    explanation: 'CDCは、初期移行後にソースデータベースの変更を継続的にターゲットに複製します。'
  },
  {
    id: 'migration-16',
    category: '移行・統合',
    question: 'Storage Gatewayのボリュームゲートウェイで提供される2つのモードはどれですか？',
    options: [
      '保存ボリュームとキャッシュボリューム',
      '暗号化と非暗号化',
      '高速と標準',
      'リアルタイムとバッチ'
    ],
    correct: 0,
    explanation: 'ボリュームゲートウェイは、保存ボリューム（主データオンプレミス）とキャッシュボリューム（主データS3）を提供します。'
  },
  {
    id: 'migration-17',
    category: '移行・統合',
    question: 'AWS Mainframe Modernizationの主な機能はどれですか？',
    options: [
      'メインフレーム移行',
      'メインフレーム最適化',
      'メインフレーム監視',
      'メインフレーム統合'
    ],
    correct: 0,
    explanation: 'Mainframe Modernizationは、メインフレームアプリケーションをAWSに移行・現代化するサービスです。'
  },
  {
    id: 'migration-18',
    category: '移行・統合',
    question: 'AWS Application Migration Service（MGN）の主な利点はどれですか？',
    options: [
      '最小限のダウンタイム',
      '自動テスト',
      'ロールバック機能',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'MGNは、最小限のダウンタイム、自動テスト、簡単なロールバック機能を提供します。'
  },
  {
    id: 'migration-19',
    category: '移行・統合',
    question: 'AWS Microservice Extractorの主な用途はどれですか？',
    options: [
      'モノリス分析',
      'マイクロサービス抽出',
      'コード変換',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Microservice Extractorは、モノリシックアプリケーションを分析し、マイクロサービスへの分割を支援します。'
  },
  {
    id: 'migration-20',
    category: '移行・統合',
    question: 'AWS Porting Assistantの主な機能はどれですか？',
    options: [
      '.NET移植支援',
      'Java移植支援',
      'Python移植支援',
      '.NET移植支援'
    ],
    correct: 0,
    explanation: 'Porting Assistant for .NETは、.NETアプリケーションのLinux移植を支援するツールです。'
  },
  {
    id: 'migration-21',
    category: '移行・統合',
    question: 'DataSyncの転送最適化機能に含まれないものはどれですか？',
    options: [
      '圧縮',
      '暗号化',
      '帯域幅制御',
      'データ変換'
    ],
    correct: 3,
    explanation: 'DataSyncは、圧縮、暗号化、帯域幅制御を提供しますが、データ変換機能は含まれません。'
  },
  {
    id: 'migration-22',
    category: '移行・統合',
    question: 'DMSのタスク評価レポートで確認できない項目はどれですか？',
    options: [
      'サポートされていないデータ型',
      '移行時間予測',
      'ライセンス使用状況',
      '変換の複雑さ'
    ],
    correct: 2,
    explanation: 'タスク評価レポートは、技術的な移行課題を評価しますが、ライセンス使用状況は含まれません。'
  },
  {
    id: 'migration-23',
    category: '移行・統合',
    question: 'Storage Gatewayのテープゲートウェイで対応していない機能はどれですか？',
    options: [
      '仮想テープライブラリ',
      '仮想テープシェルフ',
      'テープ暗号化',
      'リアルタイム復元'
    ],
    correct: 3,
    explanation: 'テープゲートウェイは、VTL、VTS、暗号化をサポートしますが、Glacierからの復元には時間がかかります。'
  },
  {
    id: 'migration-24',
    category: '移行・統合',
    question: 'AWS Migration Evaluatorの主な機能はどれですか？',
    options: [
      '移行計画',
      'コスト評価',
      'リスク評価',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Migration Evaluatorは、移行計画、コスト評価、リスク評価を包括的に提供します。'
  },
  {
    id: 'migration-25',
    category: '移行・統合',
    question: 'AWS Refactoring Toolkitの主な対象はどれですか？',
    options: [
      'レガシーアプリケーション',
      'モダンアプリケーション',
      'クラウドネイティブアプリ',
      'すべて正しい'
    ],
    correct: 0,
    explanation: 'Refactoring Toolkitは、レガシーアプリケーションの現代化とクラウド移行を支援します。'
  },
  {
    id: 'analytics-1',
    category: '分析・機械学習',
    question: 'S3データに対してSQLクエリを実行できるサーバーレスサービスはどれですか？',
    options: [
      'Redshift',
      'EMR',
      'Athena',
      'Glue'
    ],
    correct: 2,
    explanation: 'Amazon Athenaは、S3のデータに対して標準SQLを使用してクエリを実行できるサーバーレス分析サービスです。'
  },
  {
    id: 'analytics-2',
    category: '分析・機械学習',
    question: 'ETL（Extract, Transform, Load）処理を行うサーバーレスサービスはどれですか？',
    options: [
      'Redshift',
      'EMR',
      'Athena',
      'Glue'
    ],
    correct: 3,
    explanation: 'AWS Glueは、データの検出、準備、結合を行うフルマネージドETLサービスです。'
  },
  {
    id: 'analytics-3',
    category: '分析・機械学習',
    question: 'リアルタイムデータストリーミングを処理するサービスはどれですか？',
    options: [
      'Kinesis',
      'SQS',
      'SNS',
      'EventBridge'
    ],
    correct: 0,
    explanation: 'Amazon Kinesisは、リアルタイムでストリーミングデータを収集、処理、分析するサービスです。'
  },
  {
    id: 'analytics-4',
    category: '分析・機械学習',
    question: '機械学習モデルの構築、訓練、デプロイを行うサービスはどれですか？',
    options: [
      'Comprehend',
      'Rekognition',
      'SageMaker',
      'Lex'
    ],
    correct: 2,
    explanation: 'Amazon SageMakerは、機械学習モデルの構築、訓練、デプロイを行うフルマネージドサービスです。'
  },
  {
    id: 'analytics-5',
    category: '分析・機械学習',
    question: 'ビジネスインテリジェンス（BI）ダッシュボードを作成するサービスはどれですか？',
    options: [
      'CloudWatch',
      'QuickSight',
      'Grafana',
      'Tableau'
    ],
    correct: 1,
    explanation: 'Amazon QuickSightは、高速でクラウドベースのビジネス分析サービスです。'
  },
  {
    id: 'analytics-6',
    category: '分析・機械学習',
    question: '音声をテキストに変換するAWSサービスはどれですか？',
    options: [
      'Polly',
      'Transcribe',
      'Translate',
      'Comprehend'
    ],
    correct: 1,
    explanation: 'Amazon Transcribeは、音声をテキストに変換する自動音声認識サービスです。'
  },
  {
    id: 'analytics-7',
    category: '分析・機械学習',
    question: 'テキストを音声に変換するAWSサービスはどれですか？',
    options: [
      'Polly',
      'Transcribe',
      'Translate',
      'Comprehend'
    ],
    correct: 0,
    explanation: 'Amazon Pollyは、テキストを自然な音声に変換するテキスト読み上げサービスです。'
  },
  {
    id: 'analytics-8',
    category: '分析・機械学習',
    question: '画像・動画分析を行うAWSサービスはどれですか？',
    options: [
      'Comprehend',
      'Rekognition',
      'Textract',
      'Translate'
    ],
    correct: 1,
    explanation: 'Amazon Rekognitionは、画像と動画の分析を行う機械学習サービスです。'
  },
  {
    id: 'analytics-9',
    category: '分析・機械学習',
    question: '文書からテキストを抽出するAWSサービスはどれですか？',
    options: [
      'Comprehend',
      'Rekognition',
      'Textract',
      'Translate'
    ],
    correct: 2,
    explanation: 'Amazon Textractは、スキャンした文書からテキストとデータを自動的に抽出します。'
  },
  {
    id: 'analytics-10',
    category: '分析・機械学習',
    question: '自然言語処理を行うAWSサービスはどれですか？',
    options: [
      'Comprehend',
      'Rekognition',
      'Textract',
      'Polly'
    ],
    correct: 0,
    explanation: 'Amazon Comprehendは、自然言語処理（NLP）を使用してテキストから洞察を抽出します。'
  },
  {
    id: 'analytics-11',
    category: '分析・機械学習',
    question: 'Kinesis Data Streamsのシャード数を決定する主な要因はどれですか？',
    options: [
      'データサイズ',
      'スループット要件',
      'レイテンシ要件',
      'コスト'
    ],
    correct: 1,
    explanation: 'Kinesisシャード数は、必要なスループット（1シャードあたり1MB/秒または1000レコード/秒）に基づいて決定されます。'
  },
  {
    id: 'analytics-12',
    category: '分析・機械学習',
    question: 'EMRクラスターで使用できないビッグデータフレームワークはどれですか？',
    options: [
      'Hadoop',
      'Spark',
      'Hive',
      'MongoDB'
    ],
    correct: 3,
    explanation: 'EMRは、Hadoop、Spark、Hive、Presto、HBaseなどをサポートしますが、MongoDBは含まれません。'
  },
  {
    id: 'analytics-13',
    category: '分析・機械学習',
    question: 'Glue Data Catalogの主な機能はどれですか？',
    options: [
      'データ変換',
      'メタデータ管理',
      'データ可視化',
      'データ暗号化'
    ],
    correct: 1,
    explanation: 'Glue Data Catalogは、データソースのメタデータを一元管理するサービスです。'
  },
  {
    id: 'analytics-14',
    category: '分析・機械学習',
    question: 'Athenaのクエリ結果が保存される場所はどこですか？',
    options: [
      'DynamoDB',
      'RDS',
      'S3',
      'Redshift'
    ],
    correct: 2,
    explanation: 'Athenaのクエリ結果は、指定されたS3バケットに自動的に保存されます。'
  },
  {
    id: 'analytics-15',
    category: '分析・機械学習',
    question: 'Kinesis Data Firehoseで対応していない配信先はどれですか？',
    options: [
      'S3',
      'Redshift',
      'Elasticsearch',
      'DynamoDB'
    ],
    correct: 3,
    explanation: 'Kinesis Data Firehoseは、S3、Redshift、Elasticsearch、Splunkに配信できますが、DynamoDBは対応していません。'
  },
  {
    id: 'analytics-16',
    category: '分析・機械学習',
    question: 'SageMakerのトレーニングジョブで使用できないインスタンスタイプはどれですか？',
    options: [
      'ml.m5.large',
      'ml.c5.xlarge',
      'ml.p3.2xlarge',
      'ml.t2.micro'
    ],
    correct: 3,
    explanation: 'SageMakerトレーニングでは、t2インスタンスは使用できません。m5、c5、p3などの専用インスタンスを使用します。'
  },
  {
    id: 'analytics-17',
    category: '分析・機械学習',
    question: 'QuickSightのデータソースとして使用できないサービスはどれですか？',
    options: [
      'S3',
      'RDS',
      'Redshift',
      'Lambda'
    ],
    correct: 3,
    explanation: 'QuickSightは、S3、RDS、Redshift、Athenaなどをデータソースとして使用できますが、Lambdaは直接データソースになりません。'
  },
  {
    id: 'analytics-18',
    category: '分析・機械学習',
    question: 'Comprehendで検出できない感情はどれですか？',
    options: [
      'POSITIVE',
      'NEGATIVE',
      'NEUTRAL',
      'CONFUSED'
    ],
    correct: 3,
    explanation: 'Comprehendの感情分析では、POSITIVE、NEGATIVE、NEUTRAL、MIXEDを検出しますが、CONFUSEDは含まれません。'
  },
  {
    id: 'analytics-19',
    category: '分析・機械学習',
    question: 'Rekognitionで検出できない項目はどれですか？',
    options: [
      '顔',
      'オブジェクト',
      'テキスト',
      '音声'
    ],
    correct: 3,
    explanation: 'Rekognitionは、画像・動画の顔、オブジェクト、テキストを検出しますが、音声の検出はできません。'
  },
  {
    id: 'analytics-20',
    category: '分析・機械学習',
    question: 'Textractで抽出できない情報はどれですか？',
    options: [
      'テキスト',
      'テーブル',
      'フォーム',
      '音声'
    ],
    correct: 3,
    explanation: 'Textractは、文書からテキスト、テーブル、フォームデータを抽出しますが、音声は対象外です。'
  },
  {
    id: 'analytics-21',
    category: '分析・機械学習',
    question: 'Pollyで対応していない音声形式はどれですか？',
    options: [
      'MP3',
      'OGG',
      'PCM',
      'FLAC'
    ],
    correct: 3,
    explanation: 'PollyはMP3、OGG、PCM形式をサポートしますが、FLAC形式は対応していません。'
  },
  {
    id: 'analytics-22',
    category: '分析・機械学習',
    question: 'Transcribeで対応していない機能はどれですか？',
    options: [
      '話者識別',
      '感情分析',
      'カスタム語彙',
      'リアルタイム転写'
    ],
    correct: 1,
    explanation: 'Transcribeは、話者識別、カスタム語彙、リアルタイム転写をサポートしますが、感情分析はComprehendの機能です。'
  },
  {
    id: 'analytics-23',
    category: '分析・機械学習',
    question: 'Translateで対応していない翻訳方向はどれですか？',
    options: [
      '英語→日本語',
      '日本語→英語',
      '中国語→韓国語',
      '音声→テキスト'
    ],
    correct: 3,
    explanation: 'Translateはテキスト間の翻訳サービスで、音声からテキストへの変換はTranscribeの機能です。'
  },
  {
    id: 'analytics-24',
    category: '分析・機械学習',
    question: 'Lexで構築できないアプリケーションタイプはどれですか？',
    options: [
      'チャットボット',
      '音声アシスタント',
      'IVRシステム',
      '画像認識アプリ'
    ],
    correct: 3,
    explanation: 'Lexは、チャットボット、音声アシスタント、IVRシステムを構築できますが、画像認識はRekognitionの領域です。'
  },
  {
    id: 'analytics-25',
    category: '分析・機械学習',
    question: 'Personalizeで使用されない機械学習アルゴリズムはどれですか？',
    options: [
      '協調フィルタリング',
      'コンテンツベース',
      'ディープラーニング',
      '線形回帰'
    ],
    correct: 3,
    explanation: 'Personalizeは、協調フィルタリング、コンテンツベース、ディープラーニングを使用しますが、単純な線形回帰は使用されません。'
  },
  {
    id: 'analytics-26',
    category: '分析・機械学習',
    question: 'Forecastで予測できないデータタイプはどれですか？',
    options: [
      '売上予測',
      '需要予測',
      '在庫予測',
      '画像分類'
    ],
    correct: 3,
    explanation: 'Forecastは時系列データの予測に特化しており、画像分類はRekognitionやSageMakerの領域です。'
  },
  {
    id: 'analytics-27',
    category: '分析・機械学習',
    question: 'Kendraで検索できないコンテンツタイプはどれですか？',
    options: [
      'PDF',
      'Word',
      'PowerPoint',
      '動画'
    ],
    correct: 3,
    explanation: 'Kendraは、PDF、Word、PowerPointなどの文書を検索できますが、動画コンテンツの検索は対象外です。'
  },
  {
    id: 'analytics-28',
    category: '分析・機械学習',
    question: 'Fraud Detectorで検出できない不正タイプはどれですか？',
    options: [
      'オンライン決済詐欺',
      'アカウント乗っ取り',
      '偽レビュー',
      'ネットワーク侵入'
    ],
    correct: 3,
    explanation: 'Fraud Detectorは、決済詐欺、アカウント乗っ取り、偽レビューを検出しますが、ネットワーク侵入はGuardDutyの領域です。'
  },
  {
    id: 'analytics-29',
    category: '分析・機械学習',
    question: 'CodeGuru Reviewerで分析できないコードの問題はどれですか？',
    options: [
      'パフォーマンス問題',
      'セキュリティ脆弱性',
      'コード品質',
      'UI/UXデザイン'
    ],
    correct: 3,
    explanation: 'CodeGuru Reviewerは、パフォーマンス、セキュリティ、コード品質を分析しますが、UI/UXデザインは対象外です。'
  },
  {
    id: 'analytics-30',
    category: '分析・機械学習',
    question: 'DevOps Guruで監視できないメトリクスはどれですか？',
    options: [
      'アプリケーションメトリクス',
      'インフラメトリクス',
      'ログデータ',
      'ユーザー行動'
    ],
    correct: 3,
    explanation: 'DevOps Guruは、アプリケーション、インフラ、ログを監視しますが、詳細なユーザー行動分析は対象外です。'
  },
  {
    id: 'analytics-31',
    category: '分析・機械学習',
    question: 'Kinesis Data Analyticsで使用できないクエリ言語はどれですか？',
    options: [
      'SQL',
      'Apache Flink',
      'Python',
      'NoSQL'
    ],
    correct: 3,
    explanation: 'Kinesis Data AnalyticsはSQL、Apache Flink、Pythonをサポートしますが、NoSQLはクエリ言語ではありません。'
  },
  {
    id: 'analytics-32',
    category: '分析・機械学習',
    question: 'EMRのマスターノードで実行されないサービスはどれですか？',
    options: [
      'ResourceManager',
      'NameNode',
      'Spark Driver',
      'TaskTracker'
    ],
    correct: 3,
    explanation: 'TaskTrackerはワーカーノードで実行されるサービスで、マスターノードでは実行されません。'
  },
  {
    id: 'analytics-33',
    category: '分析・機械学習',
    question: 'Glue Studioで作成できないジョブタイプはどれですか？',
    options: [
      'ETLジョブ',
      'ストリーミングジョブ',
      'Pythonシェルジョブ',
      'バッチ推論ジョブ'
    ],
    correct: 3,
    explanation: 'Glue Studioは、ETL、ストリーミング、Pythonシェルジョブを作成できますが、バッチ推論はSageMakerの機能です。'
  },
  {
    id: 'analytics-34',
    category: '分析・機械学習',
    question: 'Athenaのパーティション射影で対応していないパターンはどれですか？',
    options: [
      '日付',
      '時間',
      '数値',
      '画像'
    ],
    correct: 3,
    explanation: 'Athenaのパーティション射影は、日付、時間、数値パターンをサポートしますが、画像は対象外です。'
  },
  {
    id: 'analytics-35',
    category: '分析・機械学習',
    question: 'QuickSightのSPICEエンジンで対応していないデータ操作はどれですか？',
    options: [
      '集計',
      'フィルタリング',
      'ソート',
      'リアルタイム更新'
    ],
    correct: 3,
    explanation: 'SPICEは高速な集計、フィルタリング、ソートを提供しますが、リアルタイム更新は制限があります。'
  },
  {
    id: 'analytics-36',
    category: '分析・機械学習',
    question: 'SageMaker Studioで利用できない機能はどれですか？',
    options: [
      'Jupyter Notebook',
      'デバッガー',
      'モデル監視',
      'データベース管理'
    ],
    correct: 3,
    explanation: 'SageMaker Studioは、Jupyter Notebook、デバッガー、モデル監視を提供しますが、データベース管理は含まれません。'
  },
  {
    id: 'analytics-37',
    category: '分析・機械学習',
    question: 'Comprehend Medicalで分析できない医療情報はどれですか？',
    options: [
      '薬物名',
      '医療状態',
      '解剖学的部位',
      '医療画像'
    ],
    correct: 3,
    explanation: 'Comprehend Medicalは、テキストから薬物名、医療状態、解剖学的部位を抽出しますが、医療画像の分析は対象外です。'
  },
  {
    id: 'analytics-38',
    category: '分析・機械学習',
    question: 'Rekognition Custom Labelsで学習できないモデルタイプはどれですか？',
    options: [
      '画像分類',
      'オブジェクト検出',
      '顔認識',
      '音声認識'
    ],
    correct: 3,
    explanation: 'Rekognition Custom Labelsは、画像分類、オブジェクト検出、顔認識をサポートしますが、音声認識は対象外です。'
  },
  {
    id: 'analytics-39',
    category: '分析・機械学習',
    question: 'Textract Analyzeで抽出できない情報はどれですか？',
    options: [
      'キー・バリューペア',
      'テーブル',
      'チェックボックス',
      '音声データ'
    ],
    correct: 3,
    explanation: 'Textract Analyzeは、キー・バリューペア、テーブル、チェックボックスを抽出しますが、音声データは対象外です。'
  },
  {
    id: 'analytics-40',
    category: '分析・機械学習',
    question: 'Polly Neural TTSで利用できない機能はどれですか？',
    options: [
      'SSML',
      '音声スタイル',
      '話速調整',
      '画像生成'
    ],
    correct: 3,
    explanation: 'Polly Neural TTSは、SSML、音声スタイル、話速調整をサポートしますが、画像生成は対象外です。'
  },
  {
    id: 'analytics-41',
    category: '分析・機械学習',
    question: 'Transcribe Medicalで対応していない医療分野はどれですか？',
    options: [
      '一般診療',
      '心臓病学',
      '神経学',
      '獣医学'
    ],
    correct: 3,
    explanation: 'Transcribe Medicalは、人間の医療分野（一般診療、心臓病学、神経学）をサポートしますが、獣医学は対象外です。'
  },
  {
    id: 'analytics-42',
    category: '分析・機械学習',
    question: 'Translate Realtime Translationで対応していない機能はどれですか？',
    options: [
      'リアルタイム翻訳',
      'カスタム用語集',
      '自動言語検出',
      '音声翻訳'
    ],
    correct: 3,
    explanation: 'Translate Realtimeは、リアルタイム翻訳、カスタム用語集、自動言語検出をサポートしますが、音声翻訳は別サービスです。'
  },
  {
    id: 'analytics-43',
    category: '分析・機械学習',
    question: 'Lex V2で新しく追加された機能はどれですか？',
    options: [
      '多言語サポート',
      'ストリーミング',
      '感情分析',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Lex V2では、多言語サポート、ストリーミング、感情分析などの新機能が追加されました。'
  },
  {
    id: 'analytics-44',
    category: '分析・機械学習',
    question: 'Personalize Realtime Recommendationsで使用されないデータタイプはどれですか？',
    options: [
      'ユーザー行動',
      'アイテム属性',
      'ユーザー属性',
      '画像データ'
    ],
    correct: 3,
    explanation: 'Personalizeは、ユーザー行動、アイテム属性、ユーザー属性を使用しますが、画像データは直接使用されません。'
  },
  {
    id: 'analytics-45',
    category: '分析・機械学習',
    question: 'Forecast Quantum Forecastingで予測できない項目はどれですか？',
    options: [
      '需要予測',
      '在庫最適化',
      '価格予測',
      '画像分類'
    ],
    correct: 3,
    explanation: 'Forecast Quantum Forecastingは、需要、在庫、価格の予測に特化しており、画像分類は対象外です。'
  },
  {
    id: 'analytics-46',
    category: '分析・機械学習',
    question: 'Kendra Intelligent Rankingで改善されない項目はどれですか？',
    options: [
      '検索精度',
      '関連性スコア',
      'レスポンス時間',
      '画像検索'
    ],
    correct: 3,
    explanation: 'Kendra Intelligent Rankingは、検索精度、関連性スコア、レスポンス時間を改善しますが、画像検索は対象外です。'
  },
  {
    id: 'analytics-47',
    category: '分析・機械学習',
    question: 'Fraud Detector Account Takeoverで検出できない不正行為はどれですか？',
    options: [
      'ログイン異常',
      'デバイス変更',
      '位置情報異常',
      'ネットワーク攻撃'
    ],
    correct: 3,
    explanation: 'Fraud Detector Account Takeoverは、ログイン、デバイス、位置情報の異常を検出しますが、ネットワーク攻撃は対象外です。'
  },
  {
    id: 'analytics-48',
    category: '分析・機械学習',
    question: 'CodeGuru Profilerで分析できないパフォーマンス指標はどれですか？',
    options: [
      'CPU使用率',
      'メモリ使用率',
      'レイテンシ',
      'ネットワーク帯域幅'
    ],
    correct: 3,
    explanation: 'CodeGuru Profilerは、CPU、メモリ、レイテンシを分析しますが、ネットワーク帯域幅の詳細分析は対象外です。'
  },
  {
    id: 'analytics-49',
    category: '分析・機械学習',
    question: 'DevOps Guru Proactive Insightsで予測できない問題はどれですか？',
    options: [
      'パフォーマンス低下',
      'リソース枯渇',
      'エラー増加',
      'セキュリティ侵害'
    ],
    correct: 3,
    explanation: 'DevOps Guru Proactive Insightsは、パフォーマンス、リソース、エラーの問題を予測しますが、セキュリティ侵害の予測は対象外です。'
  },
  {
    id: 'analytics-50',
    category: '分析・機械学習',
    question: 'SageMaker Feature Storeで管理できないデータタイプはどれですか？',
    options: [
      '数値データ',
      '文字列データ',
      '時系列データ',
      '動画データ'
    ],
    correct: 3,
    explanation: 'SageMaker Feature Storeは、数値、文字列、時系列データを管理しますが、動画データの直接管理は対象外です。'
  },
  {
    id: 'integration-1',
    category: 'アプリケーション統合',
    question: 'メッセージキューサービスを提供するAWSサービスはどれですか？',
    options: [
      'SNS',
      'SQS',
      'EventBridge',
      'Step Functions'
    ],
    correct: 1,
    explanation: 'Amazon SQS（Simple Queue Service）は、フルマネージドメッセージキューサービスです。'
  },
  {
    id: 'integration-2',
    category: 'アプリケーション統合',
    question: 'Pub/Sub（発行/購読）メッセージングを提供するサービスはどれですか？',
    options: [
      'SQS',
      'SNS',
      'EventBridge',
      'Step Functions'
    ],
    correct: 1,
    explanation: 'Amazon SNS（Simple Notification Service）は、Pub/Subメッセージングサービスです。'
  },
  {
    id: 'integration-3',
    category: 'アプリケーション統合',
    question: 'サーバーレスワークフローを構築するサービスはどれですか？',
    options: [
      'SQS',
      'SNS',
      'EventBridge',
      'Step Functions'
    ],
    correct: 3,
    explanation: 'AWS Step Functionsは、サーバーレスワークフローを構築・実行するサービスです。'
  },
  {
    id: 'integration-4',
    category: 'アプリケーション統合',
    question: 'イベント駆動アーキテクチャを構築するためのサービスはどれですか？',
    options: [
      'SQS',
      'SNS',
      'EventBridge',
      'Step Functions'
    ],
    correct: 2,
    explanation: 'Amazon EventBridge（旧CloudWatch Events）は、イベント駆動アーキテクチャを構築するためのサービスです。'
  },
  {
    id: 'integration-5',
    category: 'アプリケーション統合',
    question: 'RESTful APIを作成・管理するサービスはどれですか？',
    options: [
      'ELB',
      'CloudFront',
      'API Gateway',
      'Route 53'
    ],
    correct: 2,
    explanation: 'Amazon API Gatewayは、RESTful APIとWebSocket APIを作成・管理するフルマネージドサービスです。'
  },
  {
    id: 'integration-6',
    category: 'アプリケーション統合',
    question: 'SQSの標準キューとFIFOキューの主な違いはどれですか？',
    options: [
      'コスト',
      '順序保証',
      'スループット',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'FIFOキューは順序保証と重複排除を提供しますが、標準キューより高コストで低スループットです。'
  },
  {
    id: 'integration-7',
    category: 'アプリケーション統合',
    question: 'SNSで対応していない配信プロトコルはどれですか？',
    options: [
      'HTTP/HTTPS',
      'Email',
      'SMS',
      'FTP'
    ],
    correct: 3,
    explanation: 'SNSは、HTTP/HTTPS、Email、SMS、SQS、Lambdaをサポートしますが、FTPは対応していません。'
  },
  {
    id: 'integration-8',
    category: 'アプリケーション統合',
    question: 'EventBridgeのカスタムイベントバスの主な用途はどれですか？',
    options: [
      'コスト削減',
      'イベント分離',
      'パフォーマンス向上',
      'セキュリティ強化'
    ],
    correct: 1,
    explanation: 'カスタムイベントバスは、異なるアプリケーションやサービスのイベントを分離・整理するために使用されます。'
  },
  {
    id: 'integration-9',
    category: 'アプリケーション統合',
    question: 'Step Functionsの状態タイプに含まれないものはどれですか？',
    options: [
      'Task',
      'Choice',
      'Parallel',
      'Database'
    ],
    correct: 3,
    explanation: 'Step Functionsの状態タイプには、Task、Choice、Parallel、Wait、Pass、Fail、Succeedがありますが、Databaseはありません。'
  },
  {
    id: 'integration-10',
    category: 'アプリケーション統合',
    question: 'API Gatewayのスロットリング機能の主な目的はどれですか？',
    options: [
      'コスト削減',
      'レート制限',
      'セキュリティ強化',
      'パフォーマンス向上'
    ],
    correct: 1,
    explanation: 'API Gatewayのスロットリング機能は、APIへのリクエスト数を制限し、バックエンドサービスを保護します。'
  },
  {
    id: 'integration-11',
    category: 'アプリケーション統合',
    question: 'SQSのデッドレターキューの主な用途はどれですか？',
    options: [
      'パフォーマンス向上',
      '失敗メッセージ処理',
      'コスト削減',
      'セキュリティ強化'
    ],
    correct: 1,
    explanation: 'デッドレターキューは、処理に失敗したメッセージを分離し、後で分析・再処理するために使用されます。'
  },
  {
    id: 'integration-12',
    category: 'アプリケーション統合',
    question: 'SNSのメッセージフィルタリング機能で使用される形式はどれですか？',
    options: [
      'XML',
      'JSON',
      'YAML',
      'CSV'
    ],
    correct: 1,
    explanation: 'SNSのメッセージフィルタリングは、JSON形式のフィルターポリシーを使用します。'
  },
  {
    id: 'integration-13',
    category: 'アプリケーション統合',
    question: 'EventBridgeのスケジュール式で使用される形式はどれですか？',
    options: [
      'Cron',
      'Rate',
      '両方',
      'どちらでもない'
    ],
    correct: 2,
    explanation: 'EventBridgeは、Cron式とRate式の両方をサポートしてスケジュールイベントを作成できます。'
  },
  {
    id: 'integration-14',
    category: 'アプリケーション統合',
    question: 'Step Functionsの実行履歴の保持期間はどれですか？',
    options: [
      '7日',
      '30日',
      '90日',
      '1年'
    ],
    correct: 2,
    explanation: 'Step Functionsの実行履歴は、デフォルトで90日間保持されます。'
  },
  {
    id: 'integration-15',
    category: 'アプリケーション統合',
    question: 'API GatewayのWebSocket APIで対応していない機能はどれですか？',
    options: [
      '双方向通信',
      'リアルタイムメッセージング',
      'ファイル転送',
      'チャット機能'
    ],
    correct: 2,
    explanation: 'WebSocket APIは双方向通信をサポートしますが、大容量ファイル転送には適していません。'
  },
  {
    id: 'integration-16',
    category: 'アプリケーション統合',
    question: 'SQSの可視性タイムアウトの主な目的はどれですか？',
    options: [
      'セキュリティ',
      'メッセージ重複防止',
      'パフォーマンス向上',
      'コスト削減'
    ],
    correct: 1,
    explanation: '可視性タイムアウトは、メッセージが処理中に他のコンシューマーから見えなくなる時間を設定し、重複処理を防ぎます。'
  },
  {
    id: 'integration-17',
    category: 'アプリケーション統合',
    question: 'SNSのファンアウトパターンの主な利点はどれですか？',
    options: [
      'コスト削減',
      '疎結合',
      'パフォーマンス向上',
      'セキュリティ強化'
    ],
    correct: 1,
    explanation: 'ファンアウトパターンは、1つのメッセージを複数のサブスクライバーに配信し、システム間の疎結合を実現します。'
  },
  {
    id: 'integration-18',
    category: 'アプリケーション統合',
    question: 'EventBridgeのアーカイブ機能の主な用途はどれですか？',
    options: [
      'コスト削減',
      'イベント再生',
      'パフォーマンス向上',
      'セキュリティ強化'
    ],
    correct: 1,
    explanation: 'EventBridgeのアーカイブ機能は、過去のイベントを保存し、必要に応じて再生することができます。'
  },
  {
    id: 'integration-19',
    category: 'アプリケーション統合',
    question: 'Step Functionsの Express Workflowsの主な特徴はどれですか？',
    options: [
      '低コスト',
      '高スループット',
      '短時間実行',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Express Workflowsは、高スループット、短時間実行、低コストのワークフローに最適化されています。'
  },
  {
    id: 'integration-20',
    category: 'アプリケーション統合',
    question: 'API Gatewayのキャッシュ機能で設定できない項目はどれですか？',
    options: [
      'TTL',
      'キーパラメータ',
      'キャッシュサイズ',
      'データベース接続'
    ],
    correct: 3,
    explanation: 'API Gatewayのキャッシュでは、TTL、キーパラメータ、キャッシュサイズを設定できますが、データベース接続は関係ありません。'
  },
  {
    id: 'integration-21',
    category: 'アプリケーション統合',
    question: 'SQSのバッチ操作で一度に処理できる最大メッセージ数はどれですか？',
    options: [
      '5個',
      '10個',
      '25個',
      '100個'
    ],
    correct: 1,
    explanation: 'SQSのバッチ操作（SendMessage、ReceiveMessage、DeleteMessage）では、一度に最大10個のメッセージを処理できます。'
  },
  {
    id: 'integration-22',
    category: 'アプリケーション統合',
    question: 'SNSのメッセージ配信で保証されるのはどれですか？',
    options: [
      '順序保証',
      '重複排除',
      '最低1回配信',
      '正確に1回配信'
    ],
    correct: 2,
    explanation: 'SNSは最低1回の配信を保証しますが、重複配信の可能性があります。'
  },
  {
    id: 'integration-23',
    category: 'アプリケーション統合',
    question: 'EventBridgeのルールで設定できない条件はどれですか？',
    options: [
      'イベントパターン',
      'スケジュール',
      'ソース',
      'データベースクエリ'
    ],
    correct: 3,
    explanation: 'EventBridgeルールでは、イベントパターン、スケジュール、ソースを設定できますが、データベースクエリは設定できません。'
  },
  {
    id: 'integration-24',
    category: 'アプリケーション統合',
    question: 'Step Functionsの Map状態の主な用途はどれですか？',
    options: [
      '条件分岐',
      '並列処理',
      '繰り返し処理',
      '待機処理'
    ],
    correct: 2,
    explanation: 'Map状態は、配列の各要素に対して同じ処理を並列実行するために使用されます。'
  },
  {
    id: 'integration-25',
    category: 'アプリケーション統合',
    question: 'API Gatewayの使用量プランで制御できない項目はどれですか？',
    options: [
      'リクエスト数',
      'バースト制限',
      'クォータ',
      'レスポンス時間'
    ],
    correct: 3,
    explanation: '使用量プランでは、リクエスト数、バースト制限、クォータを制御できますが、レスポンス時間は制御できません。'
  },
  {
    id: 'management-1',
    category: '管理・ガバナンス',
    question: '複数のAWSアカウントを一元管理するサービスはどれですか？',
    options: [
      'IAM',
      'Organizations',
      'Control Tower',
      'Config'
    ],
    correct: 1,
    explanation: 'AWS Organizationsは、複数のAWSアカウントを一元的に管理するサービスです。'
  },
  {
    id: 'management-2',
    category: '管理・ガバナンス',
    question: 'マルチアカウント環境のランディングゾーンを設定するサービスはどれですか？',
    options: [
      'Organizations',
      'Control Tower',
      'Config',
      'CloudFormation'
    ],
    correct: 1,
    explanation: 'AWS Control Towerは、マルチアカウント環境のランディングゾーンを自動的に設定・管理します。'
  },
  {
    id: 'management-3',
    category: '管理・ガバナンス',
    question: 'インフラストラクチャをコードとして管理するサービスはどれですか？',
    options: [
      'CloudFormation',
      'Config',
      'Systems Manager',
      'OpsWorks'
    ],
    correct: 0,
    explanation: 'AWS CloudFormationは、インフラストラクチャをコード（テンプレート）として定義・管理するサービスです。'
  },
  {
    id: 'management-4',
    category: '管理・ガバナンス',
    question: 'AWSリソースのコストを分析・最適化するサービスはどれですか？',
    options: [
      'CloudWatch',
      'Cost Explorer',
      'Trusted Advisor',
      'Config'
    ],
    correct: 1,
    explanation: 'AWS Cost Explorerは、AWSの使用量とコストを分析し、最適化の推奨事項を提供します。'
  },
  {
    id: 'management-5',
    category: '管理・ガバナンス',
    question: 'システム管理タスクを自動化するサービスはどれですか？',
    options: [
      'CloudFormation',
      'Config',
      'Systems Manager',
      'OpsWorks'
    ],
    correct: 2,
    explanation: 'AWS Systems Managerは、パッチ管理、設定管理、運用タスクの自動化を提供します。'
  },
  {
    id: 'management-6',
    category: '管理・ガバナンス',
    question: 'AWS Configの主な機能はどれですか？',
    options: [
      'コスト管理',
      '設定管理',
      'パフォーマンス監視',
      'セキュリティ監査'
    ],
    correct: 1,
    explanation: 'AWS Configは、AWSリソースの設定を記録・監視し、コンプライアンスを確認するサービスです。'
  },
  {
    id: 'management-7',
    category: '管理・ガバナンス',
    question: 'CloudTrailで記録されるイベントタイプに含まれないものはどれですか？',
    options: [
      'マネジメントイベント',
      'データイベント',
      'インサイトイベント',
      'パフォーマンスイベント'
    ],
    correct: 3,
    explanation: 'CloudTrailは、マネジメント、データ、インサイトイベントを記録しますが、パフォーマンスイベントは記録しません。'
  },
  {
    id: 'management-8',
    category: '管理・ガバナンス',
    question: 'Trusted Advisorで提供されない推奨カテゴリはどれですか？',
    options: [
      'コスト最適化',
      'パフォーマンス',
      'セキュリティ',
      'データベース設計'
    ],
    correct: 3,
    explanation: 'Trusted Advisorは、コスト最適化、パフォーマンス、セキュリティ、フォルトトレラント、サービス制限の推奨事項を提供します。'
  },
  {
    id: 'management-9',
    category: '管理・ガバナンス',
    question: 'Service Control Policies（SCP）の主な用途はどれですか？',
    options: [
      'コスト制御',
      '権限制御',
      'パフォーマンス制御',
      'セキュリティ制御'
    ],
    correct: 1,
    explanation: 'SCPは、AWS Organizations内のアカウントで実行可能なアクションを制限する権限制御機能です。'
  },
  {
    id: 'management-10',
    category: '管理・ガバナンス',
    question: 'CloudFormation StackSetsの主な用途はどれですか？',
    options: [
      '単一アカウント展開',
      '複数アカウント展開',
      'ローカル展開',
      'テスト環境展開'
    ],
    correct: 1,
    explanation: 'CloudFormation StackSetsは、複数のアカウントやリージョンにスタックを一括展開するサービスです。'
  },
  {
    id: 'management-11',
    category: '管理・ガバナンス',
    question: 'Systems Manager Parameter Storeの主な用途はどれですか？',
    options: [
      'ファイル保存',
      '設定値管理',
      'ログ管理',
      'メトリクス管理'
    ],
    correct: 1,
    explanation: 'Parameter Storeは、設定データや機密情報を安全に保存・管理するサービスです。'
  },
  {
    id: 'management-12',
    category: '管理・ガバナンス',
    question: 'AWS Budgetsで設定できないアラートタイプはどれですか？',
    options: [
      '実際のコスト',
      '予測コスト',
      '使用量',
      'パフォーマンス'
    ],
    correct: 3,
    explanation: 'AWS Budgetsは、コストと使用量に基づくアラートを設定できますが、パフォーマンスアラートは設定できません。'
  },
  {
    id: 'management-13',
    category: '管理・ガバナンス',
    question: 'AWS Well-Architected Toolの主な機能はどれですか？',
    options: [
      'コスト計算',
      'アーキテクチャ評価',
      'パフォーマンス監視',
      'セキュリティ監査'
    ],
    correct: 1,
    explanation: 'Well-Architected Toolは、AWS Well-Architected Frameworkに基づいてアーキテクチャを評価するサービスです。'
  },
  {
    id: 'management-14',
    category: '管理・ガバナンス',
    question: 'AWS License Managerの主な用途はどれですか？',
    options: [
      'AWSライセンス管理',
      'サードパーティライセンス管理',
      '両方',
      'どちらでもない'
    ],
    correct: 1,
    explanation: 'License Managerは、Microsoft、Oracle、SAP等のサードパーティソフトウェアライセンスを管理します。'
  },
  {
    id: 'management-15',
    category: '管理・ガバナンス',
    question: 'AWS Resource Groupsの主な機能はどれですか？',
    options: [
      'リソース作成',
      'リソース分類',
      'リソース削除',
      'リソース監視'
    ],
    correct: 1,
    explanation: 'Resource Groupsは、タグやその他の条件に基づいてAWSリソースを論理的にグループ化します。'
  },
  {
    id: 'management-16',
    category: '管理・ガバナンス',
    question: 'AWS Tag Editorの主な用途はどれですか？',
    options: [
      'タグ作成',
      'タグ一括編集',
      'タグ削除',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Tag Editorは、複数のリソースのタグを一括で作成、編集、削除できるツールです。'
  },
  {
    id: 'management-17',
    category: '管理・ガバナンス',
    question: 'AWS Service Catalogの主な目的はどれですか？',
    options: [
      'サービス監視',
      'サービス標準化',
      'サービス最適化',
      'サービス統合'
    ],
    correct: 1,
    explanation: 'Service Catalogは、承認されたITサービスのカタログを作成し、標準化されたデプロイを実現します。'
  },
  {
    id: 'management-18',
    category: '管理・ガバナンス',
    question: 'AWS Personal Health Dashboardの主な機能はどれですか？',
    options: [
      '一般的なサービス状況',
      '個人化されたサービス状況',
      'パフォーマンス監視',
      'コスト監視'
    ],
    correct: 1,
    explanation: 'Personal Health Dashboardは、使用しているAWSサービスに影響する問題を個人化して通知します。'
  },
  {
    id: 'management-19',
    category: '管理・ガバナンス',
    question: 'AWS Compute Optimizerで最適化推奨を受けられないリソースはどれですか？',
    options: [
      'EC2',
      'Lambda',
      'EBS',
      'RDS'
    ],
    correct: 3,
    explanation: 'Compute OptimizerはEC2、Lambda、EBSの最適化推奨を提供しますが、RDSは対象外です。'
  },
  {
    id: 'management-20',
    category: '管理・ガバナンス',
    question: 'AWS Application Discovery Serviceの主な用途はどれですか？',
    options: [
      '新規アプリ開発',
      '既存アプリ分析',
      'アプリ監視',
      'アプリ最適化'
    ],
    correct: 1,
    explanation: 'Application Discovery Serviceは、オンプレミスのアプリケーションとインフラを分析し、移行計画を支援します。'
  },
  {
    id: 'management-21',
    category: '管理・ガバナンス',
    question: 'AWS Migration Hubの主な機能はどれですか？',
    options: [
      '移行実行',
      '移行追跡',
      '移行最適化',
      '移行監視'
    ],
    correct: 1,
    explanation: 'Migration Hubは、複数の移行ツールからの進捗を一元的に追跡・監視するサービスです。'
  },
  {
    id: 'management-22',
    category: '管理・ガバナンス',
    question: 'AWS Protonの主な用途はどれですか？',
    options: [
      'インフラ管理',
      'アプリケーション配信',
      'コンテナ管理',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'AWS Protonは、インフラとアプリケーションの配信を自動化し、開発者の生産性を向上させます。'
  },
  {
    id: 'management-23',
    category: '管理・ガバナンス',
    question: 'AWS Fault Injection Simulatorの主な目的はどれですか？',
    options: [
      '障害修復',
      '障害テスト',
      '障害監視',
      '障害予防'
    ],
    correct: 1,
    explanation: 'Fault Injection Simulatorは、制御された障害を注入してシステムの回復力をテストします。'
  },
  {
    id: 'management-24',
    category: '管理・ガバナンス',
    question: 'AWS Resilience Hubの主な機能はどれですか？',
    options: [
      '回復力評価',
      '回復力向上',
      '回復力監視',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Resilience Hubは、アプリケーションの回復力を評価、向上、監視する包括的なサービスです。'
  },
  {
    id: 'management-25',
    category: '管理・ガバナンス',
    question: 'AWS Launch Wizardの主な用途はどれですか？',
    options: [
      '新規サービス起動',
      '複雑なワークロード展開',
      'アプリケーション移行',
      'インフラ最適化'
    ],
    correct: 1,
    explanation: 'Launch Wizardは、SAP、Microsoft SQL Server等の複雑なワークロードの展開を簡素化します。'
  },
  {
    id: 'disaster-recovery-1',
    category: '災害復旧',
    question: 'RTO（Recovery Time Objective）とは何を表しますか？',
    options: [
      '復旧にかかる時間',
      '許容される最大停止時間',
      'データ損失許容時間',
      'バックアップ頻度'
    ],
    correct: 1,
    explanation: 'RTOは、災害発生後にシステムを復旧させるまでに許容される最大時間を表します。'
  },
  {
    id: 'disaster-recovery-2',
    category: '災害復旧',
    question: '最も低コストな災害復旧戦略はどれですか？',
    options: [
      'Backup and Restore',
      'Pilot Light',
      'Warm Standby',
      'Multi-Site Active/Active'
    ],
    correct: 0,
    explanation: 'Backup and Restoreは、データをバックアップし、災害時に復元する最も低コストな戦略です。'
  },
  {
    id: 'disaster-recovery-3',
    category: '災害復旧',
    question: 'ほぼゼロのRTO/RPOを実現する災害復旧戦略はどれですか？',
    options: [
      'Backup and Restore',
      'Pilot Light',
      'Warm Standby',
      'Multi-Site Active/Active'
    ],
    correct: 3,
    explanation: 'Multi-Site Active/Activeは、複数サイトで同時稼働することで、ほぼゼロのRTO/RPOを実現します。'
  },
  {
    id: 'disaster-recovery-4',
    category: '災害復旧',
    question: 'Aurora Global Databaseの典型的なRPOはどれくらいですか？',
    options: [
      '1秒未満',
      '5秒未満',
      '1分未満',
      '5分未満'
    ],
    correct: 0,
    explanation: 'Aurora Global Databaseは、典型的に1秒未満のRPOを提供します。'
  },
  {
    id: 'disaster-recovery-5',
    category: '災害復旧',
    question: '3-2-1バックアップルールの「1」は何を表しますか？',
    options: [
      '1つのバックアップ',
      '1つの場所',
      '1つのオフサイト',
      '1つの形式'
    ],
    correct: 2,
    explanation: '3-2-1ルールの「1」は、1つのバックアップコピーをオフサイト（異なる場所）に保管することを表します。'
  },
  {
    id: 'disaster-recovery-6',
    category: '災害復旧',
    question: 'RPO（Recovery Point Objective）とは何を表しますか？',
    options: [
      '復旧時間',
      '許容データ損失時間',
      '停止時間',
      'バックアップ時間'
    ],
    correct: 1,
    explanation: 'RPOは、災害発生時に許容できる最大データ損失時間を表します。'
  },
  {
    id: 'disaster-recovery-7',
    category: '災害復旧',
    question: 'Pilot Light戦略の特徴はどれですか？',
    options: [
      '完全稼働',
      '最小限の稼働',
      '完全停止',
      '部分稼働'
    ],
    correct: 1,
    explanation: 'Pilot Light戦略では、重要なシステムコンポーネントを最小限の構成で常時稼働させます。'
  },
  {
    id: 'disaster-recovery-8',
    category: '災害復旧',
    question: 'Warm Standby戦略の特徴はどれですか？',
    options: [
      'フル稼働',
      '縮小稼働',
      '停止状態',
      '部分停止'
    ],
    correct: 1,
    explanation: 'Warm Standby戦略では、本番環境の縮小版を常時稼働させ、災害時にスケールアップします。'
  },
  {
    id: 'disaster-recovery-9',
    category: '災害復旧',
    question: 'Cross-Region Replicationが最も重要な用途はどれですか？',
    options: [
      'パフォーマンス向上',
      '���害復旧',
      'コスト削減',
      'セキュリティ強化'
    ],
    correct: 1,
    explanation: 'Cross-Region Replicationは、地理的に離れた場所にデータを複製し、災害復旧を実現します。'
  },
  {
    id: 'disaster-recovery-10',
    category: '災害復旧',
    question: 'RDSの自動バックアップの保持期間はどれですか？',
    options: [
      '1-7日',
      '1-35日',
      '1-90日',
      '1-365日'
    ],
    correct: 1,
    explanation: 'RDSの自動バックアップは、1日から35日まで設定可能です。'
  },
  {
    id: 'disaster-recovery-11',
    category: '災害復旧',
    question: 'DynamoDBのPoint-in-Time Recoveryで復元可能な期間はどれですか？',
    options: [
      '7日',
      '35日',
      '90日',
      '365日'
    ],
    correct: 1,
    explanation: 'DynamoDBのPoint-in-Time Recoveryでは、過去35日以内の任意の時点に復元できます。'
  },
  {
    id: 'disaster-recovery-12',
    category: '災害復旧',
    question: 'S3のCross-Region Replicationで必要な設定はどれですか？',
    options: [
      'バージョニング有効',
      'MFA削除有効',
      'ログ有効',
      'メトリクス有効'
    ],
    correct: 0,
    explanation: 'S3のCross-Region Replicationを使用するには、ソースとデスティネーションバケットでバージョニングを有効にする必要があります。'
  },
  {
    id: 'disaster-recovery-13',
    category: '災害復旧',
    question: 'EBSスナップショットの保存場所はどこですか？',
    options: [
      '同一AZ',
      '同一リージョン',
      'S3',
      'Glacier'
    ],
    correct: 2,
    explanation: 'EBSスナップショットは、Amazon S3に保存され、リージョン内で自動的に複製されます。'
  },
  {
    id: 'disaster-recovery-14',
    category: '災害復旧',
    question: 'AWS Backupの主な利点はどれですか？',
    options: [
      '単一サービス',
      '統合バックアップ',
      '低コスト',
      '高速復元'
    ],
    correct: 1,
    explanation: 'AWS Backupは、複数のAWSサービスのバックアップを統合的に管理できるサービスです。'
  },
  {
    id: 'disaster-recovery-15',
    category: '災害復旧',
    question: 'Route 53のHealth Checkの主な用途はどれですか？',
    options: [
      'パフォーマンス監視',
      'フェイルオーバー',
      'コスト最適化',
      'セキュリティ強化'
    ],
    correct: 1,
    explanation: 'Route 53のHealth Checkは、エンドポイントの健全性を監視し、障害時の自動フェイルオーバーを実現します。'
  },
  {
    id: 'disaster-recovery-16',
    category: '災害復旧',
    question: 'AWS Site Recovery（CloudEndure）の主な機能はどれですか？',
    options: [
      'バックアップ',
      'レプリケーション',
      'モニタリング',
      'セキュリティ'
    ],
    correct: 1,
    explanation: 'AWS Site Recoveryは、サーバーを継続的にレプリケーションし、災害復旧を自動化します。'
  },
  {
    id: 'disaster-recovery-17',
    category: '災害復旧',
    question: 'Multi-AZ配置の主な目的はどれですか？',
    options: [
      'パフォーマンス向上',
      '高可用性',
      'コスト削減',
      'セキュリティ強化'
    ],
    correct: 1,
    explanation: 'Multi-AZ配置は、複数のアベイラビリティゾーンにリソースを配置し、高可用性を実現します。'
  },
  {
    id: 'disaster-recovery-18',
    category: '災害復旧',
    question: 'ElastiCacheのバックアップ機能で対応していないエンジンはどれですか？',
    options: [
      'Redis',
      'Memcached',
      '両方対応',
      'どちらも非対応'
    ],
    correct: 1,
    explanation: 'ElastiCacheのバックアップ機能は、Redisでのみ利用可能で、Memcachedでは利用できません。'
  },
  {
    id: 'disaster-recovery-19',
    category: '災害復旧',
    question: 'AWS Storage Gatewayの災害復旧での役割はどれですか？',
    options: [
      'ローカルバックアップ',
      'クラウドバックアップ',
      'ハイブリッドバックアップ',
      'リアルタイムレプリケーション'
    ],
    correct: 2,
    explanation: 'Storage Gatewayは、オンプレミスとクラウド間のハイブリッドバックアップソリューションを提供します。'
  },
  {
    id: 'disaster-recovery-20',
    category: '災害復旧',
    question: 'Lambda関数の災害復旧で重要な要素はどれですか？',
    options: [
      'コードバックアップ',
      '設定バックアップ',
      'デプロイ自動化',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Lambda関数の災害復旧では、コード、設定、デプロイプロセスのすべてをバックアップ・自動化することが重要です。'
  },
  {
    id: 'disaster-recovery-21',
    category: '災害復旧',
    question: 'AWS Config Rulesの災害復旧での役割はどれですか？',
    options: [
      '設定監視',
      '自動復旧',
      'コンプライアンス確認',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'AWS Config Rulesは、設定の監視、自動修復、コンプライアンス確認を通じて災害復旧をサポートします。'
  },
  {
    id: 'disaster-recovery-22',
    category: '災害復旧',
    question: 'CloudFormationの災害復旧での利点はどれですか？',
    options: [
      'インフラ再構築',
      '設定一貫性',
      '自動化',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'CloudFormationは、インフラをコードとして管理し、災害時の迅速で一貫した再構築を可能にします。'
  },
  {
    id: 'disaster-recovery-23',
    category: '災害復旧',
    question: 'AWS Systems Manager Patch Managerの災害復旧での役割はどれですか？',
    options: [
      'パッチ管理',
      'セキュリティ維持',
      '設定統一',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Patch Managerは、災害復旧後のシステムでも適切なパッチレベルとセキュリティを維持します。'
  },
  {
    id: 'disaster-recovery-24',
    category: '災害復旧',
    question: 'AWS Elastic Disaster Recovery（CloudEndure）の最小RPOはどれですか？',
    options: [
      '1秒',
      '数秒',
      '1分',
      '5分'
    ],
    correct: 1,
    explanation: 'AWS Elastic Disaster Recoveryは、継続的なデータレプリケーションにより数秒のRPOを実現できます。'
  },
  {
    id: 'disaster-recovery-25',
    category: '災害復旧',
    question: '災害復旧テストで最も重要な要素はどれですか？',
    options: [
      '定期実行',
      '文書化',
      '自動化',
      'すべて正しい'
    ],
    correct: 3,
    explanation: '効果的な災害復旧テストには、定期的な実行、詳細な文書化、可能な限りの自動化がすべて重要です。'
  },
  {
    id: 'cost-optimization-1',
    category: 'コスト最適化',
    question: 'EC2とFargateの両方に適用できる割引プランはどれですか？',
    options: [
      'Reserved Instances',
      'Savings Plans',
      'Spot Instances',
      'Dedicated Hosts'
    ],
    correct: 1,
    explanation: 'Savings Plansは、EC2、Fargate、Lambdaなど複数のコンピューティングサービスに適用できる柔軟な割引プランです。'
  },
  {
    id: 'cost-optimization-2',
    category: 'コスト最適化',
    question: 'S3のコストを自動的に最適化するストレージクラスはどれですか？',
    options: [
      'Standard',
      'Standard-IA',
      'Glacier',
      'Intelligent-Tiering'
    ],
    correct: 3,
    explanation: 'S3 Intelligent-Tieringは、アクセスパターンを監視して自動的に最適なストレージクラスに移動します。'
  },
  {
    id: 'cost-optimization-3',
    category: 'コスト最適化',
    question: 'AWSのコスト異常を自動検知するサービスはどれですか？',
    options: [
      'Cost Explorer',
      'Budgets',
      'Cost Anomaly Detection',
      'Trusted Advisor'
    ],
    correct: 2,
    explanation: 'Cost Anomaly Detectionは、機械学習を使用してコストの異常を自動的に検知し、アラートを送信します。'
  },
  {
    id: 'cost-optimization-4',
    category: 'コスト最適化',
    question: '未使用のEBSボリュームを特定するのに最適なサービスはどれですか？',
    options: [
      'CloudWatch',
      'Config',
      'Trusted Advisor',
      'Cost Explorer'
    ],
    correct: 2,
    explanation: 'Trusted Advisorは、未使用のEBSボリュームやその他のリソースの最適化推奨事項を提供します。'
  },
  {
    id: 'cost-optimization-5',
    category: 'コスト最適化',
    question: 'データ転送コストを削減するために使用すべきサービスはどれですか？',
    options: [
      'Direct Connect',
      'VPN',
      'NAT Gateway',
      'Internet Gateway'
    ],
    correct: 0,
    explanation: 'AWS Direct Connectは、オンプレミスとAWS間のデータ転送コストを削減できる専用線接続サービスです。'
  },
  {
    id: 'cost-optimization-6',
    category: 'コスト最適化',
    question: 'Reserved Instancesの最大割引率はどれですか？',
    options: [
      '50%',
      '60%',
      '72%',
      '90%'
    ],
    correct: 2,
    explanation: 'Reserved Instancesは、3年間の全額前払いで最大72%の割引を提供します。'
  },
  {
    id: 'cost-optimization-7',
    category: 'コスト最適化',
    question: 'Spot Instancesが最も適している用途はどれですか？',
    options: [
      '本番Webサーバー',
      'データベース',
      'バッチ処理',
      'ロードバランサー'
    ],
    correct: 2,
    explanation: 'Spot Instancesは、中断に耐性があるバッチ処理やビッグデータ分析に最適です。'
  },
  {
    id: 'cost-optimization-8',
    category: 'コスト最適化',
    question: 'S3のライフサイクルポリシーで最も効果的なコスト削減戦略はどれですか？',
    options: [
      'すべてGlacierに移動',
      'アクセス頻度に応じた段階的移行',
      'すべてStandardで保持',
      '定期的な削除'
    ],
    correct: 1,
    explanation: 'アクセス頻度に応じてStandard→IA→Glacier→Deep Archiveと段階的に移行するのが最も効果的です。'
  },
  {
    id: 'cost-optimization-9',
    category: 'コスト最適化',
    question: 'CloudFrontを使用することで削減できるコストはどれですか？',
    options: [
      'コンピューティングコスト',
      'ストレージコスト',
      'データ転送コスト',
      'データベースコスト'
    ],
    correct: 2,
    explanation: 'CloudFrontは、エッジキャッシングによりオリジンからのデータ転送量を削減し、データ転送コストを削減します。'
  },
  {
    id: 'cost-optimization-10',
    category: 'コスト最適化',
    question: 'Auto Scalingによるコスト最適化の主な効果はどれですか？',
    options: [
      '固定コスト',
      '需要連動コスト',
      '前払いコスト',
      '最低保証コスト'
    ],
    correct: 1,
    explanation: 'Auto Scalingは、需要に応じてリソースを自動調整し、過剰プロビジョニングによるコストを削減します。'
  },
  {
    id: 'cost-optimization-11',
    category: 'コスト最適化',
    question: 'AWS Cost and Usage Reportの主な用途はどれですか？',
    options: [
      'リアルタイム監視',
      '詳細なコスト分析',
      'アラート送信',
      '自動最適化'
    ],
    correct: 1,
    explanation: 'Cost and Usage Reportは、最も詳細なコストと使用量データを提供し、詳細な分析に使用されます。'
  },
  {
    id: 'cost-optimization-12',
    category: 'コスト最適化',
    question: 'RDSのコスト最適化で最も効果的な方法はどれですか？',
    options: [
      'インスタンスサイズ最適化',
      'Reserved Instances',
      'Multi-AZ無効化',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'RDSでは、適切なインスタンスサイズ選択、Reserved Instances活用、不要なMulti-AZ無効化がコスト最適化に効果的です。'
  },
  {
    id: 'cost-optimization-13',
    category: 'コスト最適化',
    question: 'Lambda関数のコスト最適化で重要な要素はどれですか？',
    options: [
      '実行時間',
      'メモリ割り当て',
      '同時実行数',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Lambdaのコストは、実行時間、メモリ割り当て、リクエスト数に基づいて計算されるため、すべてが重要です。'
  },
  {
    id: 'cost-optimization-14',
    category: 'コスト最適化',
    question: 'EBS最適化インスタンスを使用する主な理由はどれですか？',
    options: [
      'コスト削減',
      'パフォーマンス向上',
      'セキュリティ強化',
      'ストレージ容量増加'
    ],
    correct: 1,
    explanation: 'EBS最適化インスタンスは、EBSへの専用帯域幅を提供し、I/Oパフォーマンスを向上させます。'
  },
  {
    id: 'cost-optimization-15',
    category: 'コスト最適化',
    question: 'CloudWatch Logsのコスト最適化で有効な方法はどれですか？',
    options: [
      'ログ保持期間設定',
      'ログレベル調整',
      'S3エクスポート',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'ログ保持期間の適切な設定、不要なログレベルの削減、長期保存用のS3エクスポートがコスト最適化に有効です。'
  },
  {
    id: 'cost-optimization-16',
    category: 'コスト最適化',
    question: 'NAT Gatewayのコスト削減で有効な方法はどれですか？',
    options: [
      'NAT Instance使用',
      'VPC Endpoint使用',
      'プライベートサブネット統合',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'NAT Instance、VPC Endpoint、プライベートサブネット統合により、NAT Gatewayのコストを削減できます。'
  },
  {
    id: 'cost-optimization-17',
    category: 'コスト最適化',
    question: 'ElastiCacheのコスト最適化で重要な要素はどれですか？',
    options: [
      'ノードタイプ選択',
      'レプリケーション設定',
      'バックアップ設定',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'ElastiCacheでは、適切なノードタイプ、必要最小限のレプリケーション、バックアップ設定の最適化が重要です。'
  },
  {
    id: 'cost-optimization-18',
    category: 'コスト最適化',
    question: 'AWS Organizationsのコスト管理機能はどれですか？',
    options: [
      '統合請求',
      'コスト配分タグ',
      'Service Control Policies',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'AWS Organizationsは、統合請求、コスト配分、SCPによるリソース制御を提供します。'
  },
  {
    id: 'cost-optimization-19',
    category: 'コスト最適化',
    question: 'Redshiftのコスト最適化で有効な方法はどれですか？',
    options: [
      'Reserved Instances',
      'Pause/Resume',
      'Concurrency Scaling',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'RedshiftではReserved Instances、Pause/Resume機能、Concurrency Scalingの適切な設定がコスト最適化に有効です。'
  },
  {
    id: 'cost-optimization-20',
    category: 'コスト最適化',
    question: 'DynamoDBのコスト最適化で重要な要素はどれですか？',
    options: [
      'キャパシティモード選択',
      'インデックス設計',
      'TTL設定',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'DynamoDBでは、適切なキャパシティモード、効率的なインデックス設計、TTLによる自動削除がコスト最適化に重要です。'
  },
  {
    id: 'cost-optimization-21',
    category: 'コスト最適化',
    question: 'AWS Compute Optimizerの主な機能はどれですか？',
    options: [
      'コスト計算',
      'リソース推奨',
      'アラート送信',
      '自動最適化'
    ],
    correct: 1,
    explanation: 'Compute Optimizerは、機械学習を使用してEC2、Lambda、EBSの最適なリソース設定を推奨します。'
  },
  {
    id: 'cost-optimization-22',
    category: 'コスト最適化',
    question: 'AWS Cost Categoriesの主な用途はどれですか？',
    options: [
      'コスト削減',
      'コスト分類',
      'アラート設定',
      'レポート生成'
    ],
    correct: 1,
    explanation: 'Cost Categoriesは、コストを組織の構造やプロジェクトに応じて分類・整理するために使用されます。'
  },
  {
    id: 'cost-optimization-23',
    category: 'コスト最適化',
    question: 'Savings Plans Utilization Reportで確認できる情報はどれですか？',
    options: [
      '利用率',
      '節約額',
      '推奨事項',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Savings Plans Utilization Reportでは、利用率、節約額、追加購入推奨事項を確認できます。'
  },
  {
    id: 'cost-optimization-24',
    category: 'コスト最適化',
    question: 'AWS Pricing Calculatorの主な用途はどれですか？',
    options: [
      '実際のコスト確認',
      'コスト見積もり',
      'コスト最適化',
      'アラート設定'
    ],
    correct: 1,
    explanation: 'AWS Pricing Calculatorは、AWSサービスの利用コストを事前に見積もるためのツールです。'
  },
  {
    id: 'cost-optimization-25',
    category: 'コスト最適化',
    question: 'タグベースのコスト配分で重要な要素はどれですか？',
    options: [
      'タグの一貫性',
      'タグの階層化',
      'タグの自動化',
      'すべて正しい'
    ],
    correct: 3,
    explanation: '効果的なタグベースコスト配分には、一貫したタグ付け、階層化された構造、自動化されたタグ付けが重要です。'
  },
  {
    id: 'architecture-1',
    category: 'アーキテクチャ',
    question: 'Well-Architected Frameworkの6つの柱に含まれないものはどれですか？',
    options: [
      '運用上の優秀性',
      'セキュリティ',
      'コスト最適化',
      'スケーラビリティ'
    ],
    correct: 3,
    explanation: 'Well-Architected Frameworkの6つの柱は、運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化、持続可能性です。'
  },
  {
    id: 'architecture-2',
    category: 'アーキテクチャ',
    question: '「運用をコードとして実行」はどの柱の原則ですか？',
    options: [
      '運用上の優秀性',
      'セキュリティ',
      '信頼性',
      'パフォーマンス効率'
    ],
    correct: 0,
    explanation: '「運用をコードとして実行」は、運用上の優秀性の柱の設計原則です。'
  },
  {
    id: 'architecture-3',
    category: 'アーキテクチャ',
    question: '「障害から自動復旧」はどの柱の原則ですか？',
    options: [
      '運用上の優秀性',
      'セキュリティ',
      '信頼性',
      'パフォーマンス効率'
    ],
    correct: 2,
    explanation: '「障害から自動復旧」は、信頼性の柱の設計原則です。'
  },
  {
    id: 'architecture-4',
    category: 'アーキテクチャ',
    question: '「最新技術の民主化」はどの柱の原則ですか？',
    options: [
      '運用上の優秀性',
      'セキュリティ',
      '信頼性',
      'パフォーマンス効率'
    ],
    correct: 3,
    explanation: '「最新技術の民主化」は、パフォーマンス効率の柱の設計原則です。'
  },
  {
    id: 'architecture-5',
    category: 'アーキテクチャ',
    question: 'マイクロサービスアーキテクチャの主な利点はどれですか？',
    options: [
      '単純性',
      '独立デプロイ',
      '低コスト',
      '高セキュリティ'
    ],
    correct: 1,
    explanation: 'マイクロサービスアーキテクチャの主な利点は、各サービスを独立してデプロイ・スケールできることです。'
  },
  {
    id: 'architecture-6',
    category: 'アーキテクチャ',
    question: 'サーバーレスアーキテクチャの主な特徴はどれですか？',
    options: [
      'サーバー管理不要',
      '常時稼働',
      '固定コスト',
      '物理サーバー使用'
    ],
    correct: 0,
    explanation: 'サーバーレスアーキテクチャでは、サーバーの管理やプロビジョニングが不要です。'
  },
  {
    id: 'architecture-7',
    category: 'アーキテクチャ',
    question: 'イベント駆動アーキテクチャの主な利点はどれですか？',
    options: [
      '強結合',
      '疎結合',
      '同期処理',
      '単一障害点'
    ],
    correct: 1,
    explanation: 'イベント駆動アーキテクチャは、コンポーネント間の疎結合を実現し、スケーラビリティを向上させます。'
  },
  {
    id: 'architecture-8',
    category: 'アーキテクチャ',
    question: 'CQRS（Command Query Responsibility Segregation）パターンの主な目的はどれですか？',
    options: [
      'セキュリティ向上',
      '読み書き分離',
      'コスト削減',
      'デプロイ簡素化'
    ],
    correct: 1,
    explanation: 'CQRSパターンは、読み取り（Query）と書き込み（Command）の責任を分離し、それぞれを最適化します。'
  },
  {
    id: 'architecture-9',
    category: 'アーキテクチャ',
    question: 'Circuit Breakerパターンの主な目的はどれですか？',
    options: [
      'パフォーマンス向上',
      '障害の連鎖防止',
      'コスト削減',
      'セキュリティ強化'
    ],
    correct: 1,
    explanation: 'Circuit Breakerパターンは、障害のあるサービスへの呼び出しを停止し、障害の連鎖を防ぎます。'
  },
  {
    id: 'architecture-10',
    category: 'アーキテクチャ',
    question: 'Bulkheadパターンの主な目的はどれですか？',
    options: [
      'パフォーマンス向上',
      'リソース分離',
      'コスト削減',
      'デプロイ簡素化'
    ],
    correct: 1,
    explanation: 'Bulkheadパターンは、リソースを分離して、一部の障害が全体に影響しないようにします。'
  },
  {
    id: 'architecture-11',
    category: 'アーキテクチャ',
    question: 'Strangler Figパターンが最も適用される場面はどれですか？',
    options: [
      '新規開発',
      'レガシー移行',
      'パフォーマンス改善',
      'セキュリティ強化'
    ],
    correct: 1,
    explanation: 'Strangler Figパターンは、レガシーシステムを段階的に新システムに置き換える際に使用されます。'
  },
  {
    id: 'architecture-12',
    category: 'アーキテクチャ',
    question: 'Database per Serviceパターンの主な利点はどれですか？',
    options: [
      'データ整合性',
      'サービス独立性',
      'クエリ簡素化',
      'コスト削減'
    ],
    correct: 1,
    explanation: 'Database per Serviceパターンは、各サービスが独自のデータベースを持つことで、サービス間の独立性を保ちます。'
  },
  {
    id: 'architecture-13',
    category: 'アーキテクチャ',
    question: 'Saga パターンが解決する主な問題はどれですか？',
    options: [
      'パフォーマンス',
      '分散トランザクション',
      'セキュリティ',
      'スケーラビリティ'
    ],
    correct: 1,
    explanation: 'Sagaパターンは、マイクロサービス間での分散トランザクションを管理するために使用されます。'
  },
  {
    id: 'architecture-14',
    category: 'アーキテクチャ',
    question: 'API Gatewayパターンの主な役割はどれですか？',
    options: [
      'データ保存',
      'リクエスト集約',
      'コンピューティング',
      'ファイル管理'
    ],
    correct: 1,
    explanation: 'API Gatewayパターンは、複数のマイクロサービスへのリクエストを集約し、統一されたAPIを提供します。'
  },
  {
    id: 'architecture-15',
    category: 'アーキテクチャ',
    question: 'Backend for Frontend（BFF）パターンの主な目的はどれですか？',
    options: [
      'セキュリティ強化',
      'フロントエンド最適化',
      'コスト削減',
      'パフォーマンス向上'
    ],
    correct: 1,
    explanation: 'BFFパターンは、特定のフロントエンド（Web、モバイル等）に最適化されたAPIを提供します。'
  },
  {
    id: 'architecture-16',
    category: 'アーキテクチャ',
    question: 'Event Sourcingパターンの主な特徴はどれですか？',
    options: [
      '現在状態のみ保存',
      'イベント履歴保存',
      'リアルタイム処理',
      'バッチ処理'
    ],
    correct: 1,
    explanation: 'Event Sourcingパターンは、状態の変更をイベントとして保存し、イベント履歴から現在の状態を再構築します。'
  },
  {
    id: 'architecture-17',
    category: 'アーキテクチャ',
    question: 'Polyglot Persistenceの主な利点はどれですか？',
    options: [
      '単一技術',
      '適材適所',
      'コスト削減',
      '運用簡素化'
    ],
    correct: 1,
    explanation: 'Polyglot Persistenceは、データの特性に応じて最適なデータストア技術を選択するアプローチです。'
  },
  {
    id: 'architecture-18',
    category: 'アーキテクチャ',
    question: 'Twelve-Factor Appの原則に含まれないものはどれですか？',
    options: [
      'コードベース',
      '設定',
      '依存関係',
      'データベース設計'
    ],
    correct: 3,
    explanation: 'Twelve-Factor Appは、クラウドネイティブアプリケーションの設計原則で、データベース設計は含まれません。'
  },
  {
    id: 'architecture-19',
    category: 'アーキテクチャ',
    question: 'Immutable Infrastructureの主な利点はどれですか？',
    options: [
      '設定変更可能',
      '一貫性保証',
      'コスト削減',
      '手動管理'
    ],
    correct: 1,
    explanation: 'Immutable Infrastructureは、インフラを変更不可能にすることで、一貫性と予測可能性を保証します。'
  },
  {
    id: 'architecture-20',
    category: 'アーキテクチャ',
    question: 'Blue-Green Deploymentの主な利点はどれですか？',
    options: [
      'コスト削減',
      'ダウンタイム最小化',
      'セキュリティ強化',
      'パフォーマンス向上'
    ],
    correct: 1,
    explanation: 'Blue-Green Deploymentは、新旧環境を並行稼働させることで、ダウンタイムを最小化します。'
  },
  {
    id: 'architecture-21',
    category: 'アーキテクチャ',
    question: 'Canary Deploymentの主な目的はどれですか？',
    options: [
      '全面展開',
      '段階的展開',
      'ロールバック',
      'バックアップ'
    ],
    correct: 1,
    explanation: 'Canary Deploymentは、新バージョンを一部のユーザーに段階的に展開し、リスクを最小化します。'
  },
  {
    id: 'architecture-22',
    category: 'アーキテクチャ',
    question: 'Multi-Region Architectureの主な目的はどれですか？',
    options: [
      'コスト削減',
      '災害復旧',
      'パフォーマンス向上',
      'セキュリティ強化'
    ],
    correct: 1,
    explanation: 'Multi-Region Architectureは、災害復旧とビジネス継続性を確保するために使用されます。'
  },
  {
    id: 'architecture-23',
    category: 'アーキテクチャ',
    question: 'Auto Scalingアーキテクチャの主な利点はどれですか？',
    options: [
      '固定容量',
      '需要対応',
      '手動管理',
      '単一インスタンス'
    ],
    correct: 1,
    explanation: 'Auto Scalingは、需要の変化に応じて自動的にリソースをスケールし、コストとパフォーマンスを最適化します。'
  },
  {
    id: 'architecture-24',
    category: 'アーキテクチャ',
    question: 'Chaos Engineeringの主な目的はどれですか？',
    options: [
      'システム破壊',
      '障害耐性テスト',
      'パフォーマンス向上',
      'コスト削減'
    ],
    correct: 1,
    explanation: 'Chaos Engineeringは、意図的に障害を発生させてシステムの障害耐性をテストし、改善します。'
  },
  {
    id: 'architecture-25',
    category: 'アーキテクチャ',
    question: 'Observabilityの3つの柱に含まれないものはどれですか？',
    options: [
      'メトリクス',
      'ログ',
      'トレース',
      'アラート'
    ],
    correct: 3,
    explanation: 'Observabilityの3つの柱は、メトリクス、ログ、トレースです。アラートは監視の手段ですが、柱ではありません。'
  },
  {
    id: 'use-cases-1',
    category: 'ユースケース',
    question: 'リアルタイムチャットアプリケーションに最適なデータベースはどれですか？',
    options: [
      'RDS',
      'DynamoDB',
      'Redshift',
      'Neptune'
    ],
    correct: 1,
    explanation: 'DynamoDBは、低レイテンシと高スループットを提供するため、リアルタイムチャットアプリケーションに最適です。'
  },
  {
    id: 'use-cases-2',
    category: 'ユースケース',
    question: '大量の画像・動画ファイルを保存する最適なサービスはどれですか？',
    options: [
      'EBS',
      'EFS',
      'S3',
      'FSx'
    ],
    correct: 2,
    explanation: 'S3は、大量のメディアファイルを安価で耐久性高く保存できるオブジェクトストレージサービスです。'
  },
  {
    id: 'use-cases-3',
    category: 'ユースケース',
    question: '機械学習の訓練データを保存するのに最適なサービスはどれですか？',
    options: [
      'RDS',
      'DynamoDB',
      'S3',
      'Redshift'
    ],
    correct: 2,
    explanation: 'S3は、大量の訓練データを安価で保存でき、機械学習サービスとの統合も優れています。'
  },
  {
    id: 'use-cases-4',
    category: 'ユースケース',
    question: '金融取引システムに必要な一貫性レベルはどれですか？',
    options: [
      '結果整合性',
      '強整合性',
      'セッション整合性',
      '単調読み取り整合性'
    ],
    correct: 1,
    explanation: '金融取引では、データの正確性が重要なため、強整合性が必要です。'
  },
  {
    id: 'use-cases-5',
    category: 'ユースケース',
    question: 'IoTセンサーからの大量データストリームを処理するサービスはどれですか？',
    options: [
      'SQS',
      'SNS',
      'Kinesis',
      'EventBridge'
    ],
    correct: 2,
    explanation: 'Kinesisは、IoTデバイスからの大量のストリーミングデータをリアルタイムで処理できます。'
  },
  {
    id: 'use-cases-6',
    category: 'ユースケース',
    question: 'レガシーアプリケーションをクラウドに移行する最初のステップとして最適な戦略はどれですか？',
    options: [
      'Rehost',
      'Replatform',
      'Refactor',
      'Rebuild'
    ],
    correct: 0,
    explanation: 'Rehost（Lift and Shift）は、最小限の変更でクラウドに移行する最初のステップとして最適です。'
  },
  {
    id: 'use-cases-7',
    category: 'ユースケース',
    question: 'グローバルなWebアプリケーションで最低レイテンシを実現するために使用すべきサービスはどれですか？',
    options: [
      'ELB',
      'Route 53',
      'CloudFront',
      'Global Accelerator'
    ],
    correct: 2,
    explanation: 'CloudFrontは、グローバルなエッジロケーションを使用してコンテンツを配信し、レイテンシを最小化します。'
  },
  {
    id: 'use-cases-8',
    category: 'ユースケース',
    question: 'コンプライアンス要件で暗号化キーの完全な制御が必要な場合に使用すべきサービスはどれですか？',
    options: [
      'KMS',
      'CloudHSM',
      'Secrets Manager',
      'Certificate Manager'
    ],
    correct: 1,
    explanation: 'CloudHSMは、専用のハードウェアセキュリティモジュールで暗号化キーの完全な制御を提供します。'
  },
  {
    id: 'use-cases-9',
    category: 'ユースケース',
    question: '数百万のIoTデバイスからのデータを収集・処理するのに最適なアーキテクチャはどれですか？',
    options: [
      '同期処理',
      '非同期処理',
      'バッチ処理',
      'リアルタイム処理'
    ],
    correct: 3,
    explanation: 'IoTデバイスからの大量データは、Kinesisなどを使用したリアルタイム処理が最適です。'
  },
  {
    id: 'use-cases-10',
    category: 'ユースケース',
    question: 'マルチテナントSaaSアプリケーションでテナント間のデータ分離を実現する最適な方法はどれですか？',
    options: [
      '単一データベース',
      'テナント別データベース',
      'スキーマ分離',
      'すべて有効'
    ],
    correct: 3,
    explanation: 'マルチテナントSaaSでは、要件に応じて単一DB、テナント別DB、スキーマ分離のいずれも有効な選択肢です。'
  },
  {
    id: 'use-cases-11',
    category: 'ユースケース',
    question: 'Eコマースサイトの商品カタログ検索に最適なサービスはどれですか？',
    options: [
      'RDS',
      'DynamoDB',
      'Elasticsearch',
      'Redshift'
    ],
    correct: 2,
    explanation: 'Elasticsearchは、全文検索、ファセット検索、リアルタイム検索に優れており、商品カタログ検索に最適です。'
  },
  {
    id: 'use-cases-12',
    category: 'ユースケース',
    question: 'ゲームアプリケーションのリーダーボード機能に最適なデータベースはどれですか？',
    options: [
      'RDS',
      'DynamoDB',
      'ElastiCache',
      'Neptune'
    ],
    correct: 2,
    explanation: 'ElastiCacheのSorted Setデータ構造は、リーダーボードの実装に最適です。'
  },
  {
    id: 'use-cases-13',
    category: 'ユースケース',
    question: 'ログ分析システムで大量のログデータを効率的に保存・検索するサービス組み合わせはどれですか？',
    options: [
      'S3 + Athena',
      'RDS + Lambda',
      'DynamoDB + API Gateway',
      'Redshift + QuickSight'
    ],
    correct: 0,
    explanation: 'S3でログを安価に保存し、Athenaで必要時にクエリする組み合わせが効率的です。'
  },
  {
    id: 'use-cases-14',
    category: 'ユースケース',
    question: 'メディアストリーミングサービスで動画配信に最適なアーキテクチャはどれですか？',
    options: [
      'S3 + CloudFront',
      'EBS + EC2',
      'EFS + Lambda',
      'Redshift + QuickSight'
    ],
    correct: 0,
    explanation: 'S3で動画を保存し、CloudFrontで世界中に配信するアーキテクチャが最適です。'
  },
  {
    id: 'use-cases-15',
    category: 'ユースケース',
    question: 'バックアップとアーカイブに最適なS3ストレージクラスの組み合わせはどれですか？',
    options: [
      'Standard + IA',
      'IA + Glacier',
      'Glacier + Deep Archive',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'アクセス頻度に応じて、Standard→IA→Glacier→Deep Archiveの順で移行するのが最適です。'
  },
  {
    id: 'use-cases-16',
    category: 'ユースケース',
    question: 'マイクロサービスアーキテクチャでサービス間通信に最適なパターンはどれですか？',
    options: [
      '同期通信のみ',
      '非同期通信のみ',
      '混合アプローチ',
      'データベース共有'
    ],
    correct: 2,
    explanation: 'マイクロサービスでは、用途に応じて同期・非同期通信を使い分ける混合アプローチが最適です。'
  },
  {
    id: 'use-cases-17',
    category: 'ユースケース',
    question: 'データウェアハウスでリアルタイム分析を実現するサービス組み合わせはどれですか？',
    options: [
      'Redshift + Kinesis',
      'RDS + Lambda',
      'DynamoDB + API Gateway',
      'S3 + Glue'
    ],
    correct: 0,
    explanation: 'KinesisでリアルタイムデータをRedshiftに送信し、リアルタイム分析を実現できます。'
  },
  {
    id: 'use-cases-18',
    category: 'ユースケース',
    question: 'モバイルアプリのプッシュ通知システムに最適なサービスはどれですか？',
    options: [
      'SES',
      'SNS',
      'SQS',
      'EventBridge'
    ],
    correct: 1,
    explanation: 'SNSは、モバイルプッシュ通知、SMS、Emailなど複数のチャネルに対応しています。'
  },
  {
    id: 'use-cases-19',
    category: 'ユースケース',
    question: 'APIのレート制限とスロットリングを実装するサービスはどれですか？',
    options: [
      'ELB',
      'CloudFront',
      'API Gateway',
      'WAF'
    ],
    correct: 2,
    explanation: 'API Gatewayは、APIのレート制限、スロットリング、認証・認可を統合的に提供します。'
  },
  {
    id: 'use-cases-20',
    category: 'ユースケース',
    question: 'コンテンツ管理システム（CMS）で画像の自動リサイズを実装する最適な方法はどれですか？',
    options: [
      'EC2 + cron',
      'Lambda + S3イベント',
      'ECS + SQS',
      'Batch + CloudWatch'
    ],
    correct: 1,
    explanation: 'S3にアップロードされた画像をトリガーにLambdaで自動リサイズするのが効率的です。'
  },
  {
    id: 'use-cases-21',
    category: 'ユースケース',
    question: 'ソーシャルメディア分析で感情分析を実装するサービスはどれですか？',
    options: [
      'Rekognition',
      'Comprehend',
      'Textract',
      'Translate'
    ],
    correct: 1,
    explanation: 'Comprehendは、テキストの感情分析、エンティティ抽出、キーフレーズ検出を提供します。'
  },
  {
    id: 'use-cases-22',
    category: 'ユースケース',
    question: 'オンライン学習プラットフォームで動画の自動字幕生成に使用するサービスはどれですか？',
    options: [
      'Polly',
      'Transcribe',
      'Translate',
      'Comprehend'
    ],
    correct: 1,
    explanation: 'Transcribeは、音声を自動的にテキストに変換し、字幕生成に使用できます。'
  },
  {
    id: 'use-cases-23',
    category: 'ユースケース',
    question: '不動産検索アプリで地理的検索を実装するのに最適なデータベースはどれですか？',
    options: [
      'RDS',
      'DynamoDB',
      'Elasticsearch',
      'Neptune'
    ],
    correct: 2,
    explanation: 'Elasticsearchは、地理的検索（Geo Search）機能を提供し、位置ベースの検索に最適です。'
  },
  {
    id: 'use-cases-24',
    category: 'ユースケース',
    question: 'フィンテックアプリで取引の監査ログを実装する最適な方法はどれですか？',
    options: [
      'CloudTrail',
      'CloudWatch Logs',
      'DynamoDB',
      'すべて組み合わせ'
    ],
    correct: 3,
    explanation: 'CloudTrailでAPI監査、CloudWatch Logsでアプリログ、DynamoDBで取引ログを組み合わせるのが最適です。'
  },
  {
    id: 'use-cases-25',
    category: 'ユースケース',
    question: 'IoTデバイス管理プラットフォームでデバイス状態を管理するサービスはどれですか？',
    options: [
      'IoT Core',
      'IoT Device Management',
      'IoT Analytics',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'IoT Core、Device Management、Analyticsを組み合わせて包括的なIoTプラットフォームを構築できます。'
  },
  {
    id: 'use-cases-26',
    category: 'ユースケース',
    question: 'オンライン試験システムで不正行為検出を実装するサービスはどれですか？',
    options: [
      'Rekognition',
      'Fraud Detector',
      'GuardDuty',
      'すべて組み合わせ'
    ],
    correct: 3,
    explanation: 'Rekognitionで顔認証、Fraud Detectorで行動分析、GuardDutyでセキュリティ監視を組み合わせます。'
  },
  {
    id: 'use-cases-27',
    category: 'ユースケース',
    question: 'ヘルスケアアプリで医療データの暗号化を実装する最適な方法はどれですか？',
    options: [
      'KMS',
      'CloudHSM',
      'Secrets Manager',
      'すべて組み合わせ'
    ],
    correct: 3,
    explanation: 'KMSで暗号化、CloudHSMで高セキュリティ、Secrets Managerで認証情報管理を組み合わせます。'
  },
  {
    id: 'use-cases-28',
    category: 'ユースケース',
    question: 'Eラーニングプラットフォームで学習進捗の分析に使用するサービスはどれですか？',
    options: [
      'QuickSight',
      'Kinesis Analytics',
      'Personalize',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'QuickSightで可視化、Kinesis Analyticsでリアルタイム分析、Personalizeで推薦を組み合わせます。'
  },
  {
    id: 'use-cases-29',
    category: 'ユースケース',
    question: 'スマートシティプロジェクトでセンサーデータの収集・分析アーキテクチャはどれですか？',
    options: [
      'IoT Core + Kinesis + S3',
      'EC2 + RDS + Lambda',
      'ECS + DynamoDB + SQS',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'IoT Coreでデータ収集、Kinesisでストリーミング処理、S3で長期保存するアーキテクチャが最適です。'
  },
  {
    id: 'use-cases-30',
    category: 'ユースケース',
    question: 'オンライン広告プラットフォームでリアルタイム入札を実装するアーキテクチャはどれですか？',
    options: [
      'Lambda + DynamoDB',
      'EC2 + ElastiCache',
      'ECS + RDS',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'Lambdaで高速処理、DynamoDBで低レイテンシデータアクセスを実現するアーキテクチャが最適です。'
  },
  {
    id: 'use-cases-31',
    category: 'ユースケース',
    question: '製造業でIoTセンサーからの予知保全システムを構築するサービス組み合わせはどれですか？',
    options: [
      'IoT Core + Kinesis + SageMaker',
      'EC2 + RDS + Lambda',
      'ECS + DynamoDB + SNS',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'IoT Coreでデータ収集、Kinesisでストリーミング、SageMakerで機械学習による予測を行います。'
  },
  {
    id: 'use-cases-32',
    category: 'ユースケース',
    question: 'コンテンツ配信ネットワークで動的コンテンツの配信を最適化する方法はどれですか？',
    options: [
      'CloudFront + Lambda@Edge',
      'ELB + EC2',
      'API Gateway + Lambda',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'CloudFrontとLambda@Edgeを組み合わせて、エッジで動的コンテンツを生成・配信できます。'
  },
  {
    id: 'use-cases-33',
    category: 'ユースケース',
    question: 'リアルタイムチャットアプリでメッセージの配信を実装するサービスはどれですか？',
    options: [
      'WebSocket API + Lambda',
      'REST API + SQS',
      'GraphQL + DynamoDB',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'API GatewayのWebSocket APIとLambdaを組み合わせて、リアルタイムメッセージング機能を実装できます。'
  },
  {
    id: 'use-cases-34',
    category: 'ユースケース',
    question: 'ドキュメント管理システムで文書の自動分類を実装するサービスはどれですか？',
    options: [
      'Textract + Comprehend',
      'Rekognition + Translate',
      'Polly + Transcribe',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'Textractで文書からテキスト抽出、Comprehendで内容分析・分類を行います。'
  },
  {
    id: 'use-cases-35',
    category: 'ユースケース',
    question: 'オンライン投票システムで投票の整合性を保証する方法はどれですか？',
    options: [
      'DynamoDB Transactions',
      'RDS ACID',
      'Blockchain',
      'すべて有効'
    ],
    correct: 3,
    explanation: '用途に応じて、DynamoDB Transactions、RDS ACID、Blockchainのいずれも投票整合性の保証に有効です。'
  },
  {
    id: 'use-cases-36',
    category: 'ユースケース',
    question: 'ライブストリーミングプラットフォームで視聴者数の急増に対応するアーキテクチャはどれですか？',
    options: [
      'Auto Scaling + CloudFront',
      'Manual Scaling + ELB',
      'Reserved Instances',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'Auto Scalingで自動スケール、CloudFrontで配信負荷分散を行うアーキテクチャが最適です。'
  },
  {
    id: 'use-cases-37',
    category: 'ユースケース',
    question: 'フードデリバリーアプリで配達員の位置追跡を実装するサービスはどれですか？',
    options: [
      'Location Service',
      'DynamoDB + Lambda',
      'IoT Core + Kinesis',
      'すべて有効'
    ],
    correct: 3,
    explanation: 'Location Service、DynamoDB、IoT Coreなど、要件に応じて複数のサービスが位置追跡に使用できます。'
  },
  {
    id: 'use-cases-38',
    category: 'ユースケース',
    question: 'オンライン診療システムで患者データの暗号化を実装する最適な方法はどれですか？',
    options: [
      '転送時暗号化',
      '保存時暗号化',
      'エンドツーエンド暗号化',
      'すべて必要'
    ],
    correct: 3,
    explanation: '医療データでは、転送時、保存時、エンドツーエンドのすべての暗号化が必要です。'
  },
  {
    id: 'use-cases-39',
    category: 'ユースケース',
    question: 'スマート農業システムで作物の成長予測を実装するサービス組み合わせはどれですか？',
    options: [
      'IoT + SageMaker + Forecast',
      'EC2 + RDS + Lambda',
      'ECS + DynamoDB + SNS',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'IoTでセンサーデータ収集、SageMakerで機械学習、Forecastで時系列予測を組み合わせます。'
  },
  {
    id: 'use-cases-40',
    category: 'ユースケース',
    question: 'オンライン銀行システムで取引の監査証跡を実装する方法はどれですか？',
    options: [
      'CloudTrail + S3',
      'DynamoDB + Lambda',
      'RDS + CloudWatch',
      'すべて組み合わせ'
    ],
    correct: 3,
    explanation: 'CloudTrailでAPI監査、DynamoDBで取引ログ、RDSで詳細データ、CloudWatchで監視を組み合わせます。'
  },
  {
    id: 'use-cases-41',
    category: 'ユースケース',
    question: 'ゲーム開発でプレイヤーマッチングシステムを実装するサービスはどれですか？',
    options: [
      'GameLift',
      'Lambda + DynamoDB',
      'ECS + ElastiCache',
      'すべて有効'
    ],
    correct: 3,
    explanation: 'GameLift、Lambda+DynamoDB、ECS+ElastiCacheなど、ゲームの要件に応じて選択できます。'
  },
  {
    id: 'use-cases-42',
    category: 'ユースケース',
    question: 'デジタルマーケティングで顧客セグメンテーションを実装するサービスはどれですか？',
    options: [
      'Personalize',
      'SageMaker',
      'QuickSight',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Personalizeで推薦、SageMakerでML分析、QuickSightで可視化を組み合わせて顧客セグメンテーションを実現します。'
  },
  {
    id: 'use-cases-43',
    category: 'ユースケース',
    question: 'サプライチェーン管理で在庫最適化を実装するサービス組み合わせはどれですか？',
    options: [
      'Forecast + Optimization',
      'SageMaker + QuickSight',
      'Kinesis + Lambda',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'Forecastで需要予測、Optimizationで在庫最適化を行うサービス組み合わせが最適です。'
  },
  {
    id: 'use-cases-44',
    category: 'ユースケース',
    question: 'オンライン教育プラットフォームで学習コンテンツの推薦を実装するサービスはどれですか？',
    options: [
      'Personalize',
      'SageMaker',
      'Comprehend',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'Personalizeは、学習履歴に基づいて個人化されたコンテンツ推薦を提供するのに最適です。'
  },
  {
    id: 'use-cases-45',
    category: 'ユースケース',
    question: 'スマートホームシステムでデバイス制御を実装するアーキテクチャはどれですか？',
    options: [
      'IoT Core + Lambda + DynamoDB',
      'EC2 + RDS + SQS',
      'ECS + ElastiCache + SNS',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'IoT Coreでデバイス通信、Lambdaで制御ロジック、DynamoDBで状態管理を行うアーキテクチャが最適です。'
  },
  {
    id: 'use-cases-46',
    category: 'ユースケース',
    question: 'オンライン会議システムで録画の自動文字起こしを実装するサービスはどれですか？',
    options: [
      'Transcribe',
      'Comprehend',
      'Textract',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'Transcribeは、音声・動画ファイルから自動的にテキストを生成する文字起こしサービスです。'
  },
  {
    id: 'use-cases-47',
    category: 'ユースケース',
    question: 'Eコマースサイトで商品レビューの感情分析を実装するサービスはどれですか？',
    options: [
      'Comprehend',
      'Textract',
      'Rekognition',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'Comprehendは、テキストの感情分析（ポジティブ、ネガティブ、ニュートラル）を提供します。'
  },
  {
    id: 'use-cases-48',
    category: 'ユースケース',
    question: 'モバイルゲームでリアルタイムランキングを実装するデータベースはどれですか？',
    options: [
      'DynamoDB',
      'ElastiCache',
      'RDS',
      '2番目の選択肢'
    ],
    correct: 3,
    explanation: 'ElastiCacheのSorted Setデータ構造は、リアルタイムランキングの実装に最適です。'
  },
  {
    id: 'use-cases-49',
    category: 'ユースケース',
    question: 'コンテンツ管理システムで多言語サイトを実装するサービスはどれですか？',
    options: [
      'Translate',
      'Polly',
      'Comprehend',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'Translateは、Webサイトのコンテンツを複数の言語に自動翻訳するサービスです。'
  },
  {
    id: 'use-cases-50',
    category: 'ユースケース',
    question: 'ビデオ監視システムで異常検知を実装するサービス組み合わせはどれですか？',
    options: [
      'Rekognition + Lambda + SNS',
      'Textract + SQS + SES',
      'Comprehend + EventBridge + SMS',
      '最初の選択肢'
    ],
    correct: 3,
    explanation: 'Rekognitionで画像・動画分析、Lambdaで処理、SNSで通知を行う組み合わせが最適です。'
  },
  {
    id: 'operations-1',
    category: '運用・デプロイ',
    question: 'Blue/Greenデプロイメントを自動化するサービスはどれですか？',
    options: [
      'CodeCommit',
      'CodeBuild',
      'CodeDeploy',
      'CodePipeline'
    ],
    correct: 2,
    explanation: 'AWS CodeDeployは、Blue/Greenデプロイメントを含む様々なデプロイメント戦略を自動化するサービスです。'
  },
  {
    id: 'operations-2',
    category: '運用・デプロイ',
    question: 'CI/CDパイプラインを構築するサービスはどれですか？',
    options: [
      'CodeCommit',
      'CodeBuild',
      'CodeDeploy',
      'CodePipeline'
    ],
    correct: 3,
    explanation: 'AWS CodePipelineは、継続的インテグレーション・継続的デプロイメント（CI/CD）パイプラインを構築・管理するサービスです。'
  },
  {
    id: 'operations-3',
    category: '運用・デプロイ',
    question: 'ソースコードのビルドを行うサービスはどれですか？',
    options: [
      'CodeCommit',
      'CodeBuild',
      'CodeDeploy',
      'CodePipeline'
    ],
    correct: 1,
    explanation: 'AWS CodeBuildは、ソースコードをコンパイル・テストし、デプロイ可能なアーティファクトを生成するフルマネージドビルドサービスです。'
  },
  {
    id: 'operations-4',
    category: '運用・デプロイ',
    question: 'Gitリポジトリをホストするサービスはどれですか？',
    options: [
      'CodeCommit',
      'CodeBuild',
      'CodeDeploy',
      'CodePipeline'
    ],
    correct: 0,
    explanation: 'AWS CodeCommitは、プライベートGitリポジトリをホストするフルマネージドソース管理サービスです。'
  },
  {
    id: 'operations-5',
    category: '運用・デプロイ',
    question: 'インフラストラクチャの設定ドリフトを検出するサービスはどれですか？',
    options: [
      'CloudFormation',
      'Config',
      'Systems Manager',
      'OpsWorks'
    ],
    correct: 1,
    explanation: 'AWS Configは、リソースの設定変更を追跡し、設定ドリフトを検出してコンプライアンスを確認します。'
  },
  {
    id: 'operations-6',
    category: '運用・デプロイ',
    question: 'CodeDeployでサポートされていないデプロイメント戦略はどれですか？',
    options: [
      'In-place',
      'Blue/Green',
      'Rolling',
      'Canary'
    ],
    correct: 2,
    explanation: 'CodeDeployは、In-place、Blue/Green、Canaryデプロイメントをサポートしますが、Rollingデプロイメントは直接サポートされていません。'
  },
  {
    id: 'operations-7',
    category: '運用・デプロイ',
    question: 'CodeBuildで使用できないビルド環境はどれですか？',
    options: [
      'Linux',
      'Windows',
      'macOS',
      'すべて使用可能'
    ],
    correct: 2,
    explanation: 'CodeBuildは、LinuxとWindowsのビルド環境を提供しますが、macOSは現在サポートされていません。'
  },
  {
    id: 'operations-8',
    category: '運用・デプロイ',
    question: 'CodePipelineのソースステージで使用できないソースはどれですか？',
    options: [
      'CodeCommit',
      'GitHub',
      'S3',
      'FTP'
    ],
    correct: 3,
    explanation: 'CodePipelineは、CodeCommit、GitHub、S3をソースとして使用できますが、FTPは直接サポートされていません。'
  },
  {
    id: 'operations-9',
    category: '運用・デプロイ',
    question: 'AWS OpsWorksで管理できないサービスはどれですか？',
    options: [
      'Chef',
      'Puppet',
      'Ansible',
      'Kubernetes'
    ],
    correct: 3,
    explanation: 'OpsWorksは、Chef、Puppet、Ansibleを使用した設定管理をサポートしますが、Kubernetesは別のサービス（EKS）で管理されます。'
  },
  {
    id: 'operations-10',
    category: '運用・デプロイ',
    question: 'Systems Manager Session Managerの主な利点はどれですか？',
    options: [
      'SSH不要',
      'ポート開放不要',
      '監査ログ',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Session Managerは、SSH不要、ポート開放不要、完全な監査ログを提供するセキュアなシェルアクセスを実現します。'
  },
  {
    id: 'operations-11',
    category: '運用・デプロイ',
    question: 'CodeStarの主な機能はどれですか？',
    options: [
      'プロジェクトテンプレート',
      'チーム管理',
      'CI/CD統合',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'CodeStarは、プロジェクトテンプレート、チーム管理、CI/CDパイプラインを統合したプロジェクト管理サービスです。'
  },
  {
    id: 'operations-12',
    category: '運用・デプロイ',
    question: 'AWS Protonの主な対象はどれですか？',
    options: [
      'モノリスアプリケーション',
      'マイクロサービス',
      'レガシーアプリケーション',
      'デスクトップアプリケーション'
    ],
    correct: 1,
    explanation: 'AWS Protonは、マイクロサービスとコンテナベースアプリケーションのインフラとデプロイメントを自動化します。'
  },
  {
    id: 'operations-13',
    category: '運用・デプロイ',
    question: 'CodeArtifactの主な用途はどれですか？',
    options: [
      'ソース管理',
      'ビルド管理',
      'パッケージ管理',
      'デプロイ管理'
    ],
    correct: 2,
    explanation: 'CodeArtifactは、ソフトウェアパッケージ（npm、Maven、PyPIなど）を安全に保存・共有するアーティファクトリポジトリです。'
  },
  {
    id: 'operations-14',
    category: '運用・デプロイ',
    question: 'CodeGuruで提供されない機能はどれですか？',
    options: [
      'コードレビュー',
      'パフォーマンス分析',
      'セキュリティ分析',
      'UI/UXデザイン'
    ],
    correct: 3,
    explanation: 'CodeGuruは、コードレビュー、パフォーマンス分析、セキュリティ分析を提供しますが、UI/UXデザインは対象外です。'
  },
  {
    id: 'operations-15',
    category: '運用・デプロイ',
    question: 'Systems Manager Patch Managerで管理できないOSはどれですか？',
    options: [
      'Amazon Linux',
      'Ubuntu',
      'Windows',
      'macOS'
    ],
    correct: 3,
    explanation: 'Patch Managerは、Linux系OS（Amazon Linux、Ubuntu等）とWindowsをサポートしますが、macOSは対象外です。'
  },
  {
    id: 'operations-16',
    category: '運用・デプロイ',
    question: 'AWS Copilotの主な用途はどれですか？',
    options: [
      'サーバーレスアプリ',
      'コンテナアプリ',
      'Webアプリ',
      'モバイルアプリ'
    ],
    correct: 1,
    explanation: 'AWS Copilotは、コンテナベースアプリケーションのビルド、デプロイ、運用を簡素化するCLIツールです。'
  },
  {
    id: 'operations-17',
    category: '運用・デプロイ',
    question: 'AWS App Runnerの主な特徴はどれですか？',
    options: [
      'フルマネージド',
      'オートスケーリング',
      'ソースコード直接デプロイ',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'App Runnerは、ソースコードやコンテナイメージから直接Webアプリケーションをデプロイ・実行するフルマネージドサービスです。'
  },
  {
    id: 'operations-18',
    category: '運用・デプロイ',
    question: 'AWS Amplifyで構築できないアプリケーションタイプはどれですか？',
    options: [
      'Webアプリ',
      'モバイルアプリ',
      'デスクトップアプリ',
      'すべて構築可能'
    ],
    correct: 2,
    explanation: 'Amplifyは、Webアプリとモバイルアプリのフルスタック開発をサポートしますが、デスクトップアプリは対象外です。'
  },
  {
    id: 'operations-19',
    category: '運用・デプロイ',
    question: 'Systems Manager Automation Documentsで実行できない操作はどれですか？',
    options: [
      'EC2インスタンス管理',
      'RDS管理',
      'S3管理',
      'ユーザー管理'
    ],
    correct: 3,
    explanation: 'Automation Documentsは、AWSリソースの管理を自動化しますが、IAMユーザー管理は別途IAMで行います。'
  },
  {
    id: 'operations-20',
    category: '運用・デプロイ',
    question: 'AWS Fault Injection Simulatorで実行できない障害タイプはどれですか？',
    options: [
      'EC2停止',
      'ネットワーク遅延',
      'CPU負荷',
      'データ削除'
    ],
    correct: 3,
    explanation: 'Fault Injection Simulatorは、制御された障害を注入しますが、データ削除のような破壊的操作は実行しません。'
  },
  {
    id: 'operations-21',
    category: '運用・デプロイ',
    question: 'AWS Cloud9の主な機能はどれですか？',
    options: [
      'クラウドIDE',
      'コラボレーション',
      'ターミナルアクセス',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Cloud9は、クラウドベースのIDE、リアルタイムコラボレーション、ターミナルアクセスを提供します。'
  },
  {
    id: 'operations-22',
    category: '運用・デプロイ',
    question: 'AWS CloudShellで利用できない機能はどれですか？',
    options: [
      'AWS CLI',
      'Python',
      'Node.js',
      'GUI アプリケーション'
    ],
    correct: 3,
    explanation: 'CloudShellは、ブラウザベースのシェル環境で、CLI ツールやスクリプト言語を提供しますが、GUI アプリケーションは実行できません。'
  },
  {
    id: 'operations-23',
    category: '運用・デプロイ',
    question: 'AWS Systems Manager Fleet Managerの主な用途はどれですか？',
    options: [
      'インスタンス監視',
      'リモートデスクトップ',
      'ファイル管理',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'Fleet Managerは、EC2インスタンスの監視、リモートデスクトップ接続、ファイル管理を統合的に提供します。'
  },
  {
    id: 'operations-24',
    category: '運用・デプロイ',
    question: 'AWS CodeCatalystの主な機能はどれですか？',
    options: [
      'プロジェクト管理',
      'CI/CD',
      'コラボレーション',
      'すべて正しい'
    ],
    correct: 3,
    explanation: 'CodeCatalystは、プロジェクト管理、CI/CD、チームコラボレーションを統合した開発プラットフォームです。'
  },
  {
    id: 'operations-25',
    category: '運用・デプロイ',
    question: 'AWS Application Composerの主な用途はどれですか？',
    options: [
      'サーバーレスアプリ設計',
      'コンテナアプリ設計',
      'Webアプリ設計',
      'モバイルアプリ設計'
    ],
    correct: 0,
    explanation: 'Application Composerは、サーバーレスアプリケーションのアーキテクチャを視覚的に設計・構築するツールです。'
  }
]

// カテゴリ別統計
const questionStats = {
  コンピューティング: 30,
  ストレージ: 30,
  データベース: 30,
  ネットワーキング: 30,
  セキュリティ: 50,
  監視・ログ: 25,
  移行・統合: 25,
  分析・機械学習: 50,
  アプリケーション統合: 25,
  管理・ガバナンス: 25,
  災害復旧: 25,
  コスト最適化: 25,
  アーキテクチャ: 25,
  ユースケース: 50,
  運用・デプロイ: 25
}

// ユーティリティ関数
const getQuestionStats = () => questionStats

const getQuestionsByCategory = (category) => {
  return allQuestions.filter(q => q.category === category)
}

const getRandomQuestions = (count = 10) => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const getRandomQuestionsByCategory = (category, count = 5) => {
  const categoryQuestions = getQuestionsByCategory(category)
  const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const getAllCategories = () => {
  return Object.keys(questionStats)
}

const getQuestionById = (id) => {
  return allQuestions.find(q => q.id === id)
}

// デバッグ用関数
const validateQuestions = () => {
  const errors = []
  const usedIds = new Set()

  allQuestions.forEach((question, index) => {
    // ID重複チェック
    if (usedIds.has(question.id)) {
      errors.push(`Duplicate ID: ${question.id}`)
    } else {
      usedIds.add(question.id)
    }

    // 必須フィールドチェック
    const requiredFields = ['id', 'category', 'question', 'options', 'correct', 'explanation']
    requiredFields.forEach(field => {
      if (!(field in question)) {
        errors.push(`Question ${index + 1}: Missing field '${field}'`)
      }
    })

    // 選択肢数チェック
    if (!Array.isArray(question.options) || question.options.length !== 4) {
      errors.push(`Question ${index + 1}: Must have exactly 4 options`)
    }

    // 正解インデックスチェック
    if (typeof question.correct !== 'number' || question.correct < 0 || question.correct > 3) {
      errors.push(`Question ${index + 1}: Correct answer index must be 0-3`)
    }
  })

  return errors
}

// グローバルスコープで利用可能にする
if (typeof window !== 'undefined') {
  window.allQuestions = allQuestions
  window.questionStats = questionStats
  window.getQuestionStats = getQuestionStats
  window.getQuestionsByCategory = getQuestionsByCategory
  window.getRandomQuestions = getRandomQuestions
  window.getRandomQuestionsByCategory = getRandomQuestionsByCategory
  window.getAllCategories = getAllCategories
  window.getQuestionById = getQuestionById
  window.validateQuestions = validateQuestions
}
