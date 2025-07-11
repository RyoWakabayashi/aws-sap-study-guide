// ストレージサービス関連の問題
const storageQuestions = [
  {
    id: 'storage-1',
    category: 'ストレージ',
    question:
      '99.999999999%（11 9s）の耐久性を提供するAWSストレージサービスはどれですか？',
    options: ['EBS', 'EFS', 'S3', 'FSx'],
    correct: 2,
    explanation:
      'Amazon S3は99.999999999%（11 9s）の耐久性を提供するオブジェクトストレージサービスです。'
  },
  {
    id: 'storage-2',
    category: 'ストレージ',
    question:
      'アクセス頻度が不明なデータに最適なS3ストレージクラスはどれですか？',
    options: ['Standard', 'Standard-IA', 'Glacier', 'Intelligent-Tiering'],
    correct: 3,
    explanation:
      'S3 Intelligent-Tieringは、アクセスパターンに基づいて自動的にストレージクラスを移動し、コストを最適化します。'
  },
  {
    id: 'storage-3',
    category: 'ストレージ',
    question: '最も安価な長期アーカイブ用S3ストレージクラスはどれですか？',
    options: ['Glacier', 'Glacier Deep Archive', 'Standard-IA', 'One Zone-IA'],
    correct: 1,
    explanation:
      'S3 Glacier Deep Archiveは、長期アーカイブ用の最も安価なストレージクラスです。'
  },
  {
    id: 'storage-4',
    category: 'ストレージ',
    question:
      '複数のEC2インスタンスから同時にアクセス可能なファイルシステムはどれですか？',
    options: ['EBS', 'EFS', 'S3', 'Instance Store'],
    correct: 1,
    explanation:
      'Amazon EFS（Elastic File System）は、複数のEC2インスタンスから同時にアクセス可能なNFSファイルシステムです。'
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
    explanation:
      'gp3は、gp2と比較して20%低いコスト、独立したIOPS・スループット設定、より高いベースライン性能を提供します。'
  },
  {
    id: 'storage-6',
    category: 'ストレージ',
    question: '最大16TBまでサポートするEBSボリュームタイプはどれですか？',
    options: ['gp2', 'gp3', 'io1', 'io2'],
    correct: 3,
    explanation:
      'io2 Block Expressは最大64TBまでサポートしますが、一般的なio2は16TBまでです。'
  },
  {
    id: 'storage-7',
    category: 'ストレージ',
    question: 'S3バケットの暗号化で、AWS KMSを使用しない方式はどれですか？',
    options: ['SSE-S3', 'SSE-KMS', 'SSE-C', 'CSE'],
    correct: 0,
    explanation: 'SSE-S3は、S3が管理する暗号化キーを使用し、AWS KMSを使用しません。'
  },
  {
    id: 'storage-8',
    category: 'ストレージ',
    question: 'S3のマルチパートアップロードが推奨されるファイルサイズはどれですか？',
    options: ['5MB以上', '100MB以上', '1GB以上', '10GB以上'],
    correct: 1,
    explanation: 'S3では100MB以上のファイルに対してマルチパートアップロードの使用が推奨されています。'
  },
  {
    id: 'storage-9',
    category: 'ストレージ',
    question: 'EBSボリュームのスナップショットが保存される場所はどこですか？',
    options: ['同一AZ', '同一リージョン', 'S3', 'Glacier'],
    correct: 2,
    explanation: 'EBSスナップショットは、Amazon S3に自動的に保存され、リージョン内で複製されます。'
  },
  {
    id: 'storage-10',
    category: 'ストレージ',
    question: 'S3 Transfer Accelerationで使用される技術はどれですか？',
    options: ['CloudFront', 'Direct Connect', 'VPN', 'Global Accelerator'],
    correct: 0,
    explanation: 'S3 Transfer AccelerationはCloudFrontのエッジロケーションを使用してアップロードを高速化します。'
  },
  {
    id: 'storage-11',
    category: 'ストレージ',
    question: 'EFSのパフォーマンスモードで、最高のスループットを提供するのはどれですか？',
    options: ['General Purpose', 'Max I/O', 'Provisioned Throughput', 'Bursting'],
    correct: 2,
    explanation: 'Provisioned Throughputモードでは、ファイルシステムのサイズに関係なく一貫したスループットを提供します。'
  },
  {
    id: 'storage-12',
    category: 'ストレージ',
    question: 'S3のバージョニングが有効な場合、削除されたオブジェクトはどうなりますか？',
    options: ['完全削除', '削除マーカー追加', '別バケットに移動', 'Glacierに移動'],
    correct: 1,
    explanation: 'バージョニング有効時は、削除マーカーが追加され、以前のバージョンは保持されます。'
  },
  {
    id: 'storage-13',
    category: 'ストレージ',
    question: 'EBSボリュームの暗号化で、既存の非暗号化ボリュームを暗号化する方法はどれですか？',
    options: ['直接暗号化', 'スナップショット経由', '不可能', 'KMS設定変更'],
    correct: 1,
    explanation: '既存の非暗号化ボリュームは、暗号化されたスナップショットから新しいボリュームを作成することで暗号化できます。'
  },
  {
    id: 'storage-14',
    category: 'ストレージ',
    question: 'S3のCross-Region Replicationで必要な設定はどれですか？',
    options: ['バージョニング有効', 'MFA削除有効', 'ログ有効', 'メトリクス有効'],
    correct: 0,
    explanation: 'Cross-Region Replicationを使用するには、ソースとデスティネーションバケットでバージョニングを有効にする必要があります。'
  },
  {
    id: 'storage-15',
    category: 'ストレージ',
    question: 'FSx for Windowsファイルサーバーで使用されるプロトコルはどれですか？',
    options: ['NFS', 'SMB', 'iSCSI', 'FTP'],
    correct: 1,
    explanation: 'FSx for Windows File ServerはSMB（Server Message Block）プロトコルを使用します。'
  },
  {
    id: 'storage-16',
    category: 'ストレージ',
    question: 'S3のライフサイクルポリシーで設定できない遷移はどれですか？',
    options: ['Standard → IA', 'IA → Glacier', 'Glacier → Deep Archive', 'Deep Archive → Standard'],
    correct: 3,
    explanation: 'S3ライフサイクルポリシーでは、より安価なストレージクラスから高価なクラスへの自動遷移はできません。'
  },
  {
    id: 'storage-17',
    category: 'ストレージ',
    question: 'EBSのio2ボリュームで提供される最大IOPSはどれですか？',
    options: ['16,000', '32,000', '64,000', '256,000'],
    correct: 3,
    explanation: 'io2 Block Expressボリュームは最大256,000 IOPSを提供できます。'
  },
  {
    id: 'storage-18',
    category: 'ストレージ',
    question: 'S3のイベント通知で対応していないサービスはどれですか？',
    options: ['SNS', 'SQS', 'Lambda', 'CloudWatch'],
    correct: 3,
    explanation: 'S3イベント通知は、SNS、SQS、Lambdaに直接送信できますが、CloudWatchには直接送信できません。'
  },
  {
    id: 'storage-19',
    category: 'ストレージ',
    question: 'EFSのスループットモードで、ファイルシステムサイズに依存するのはどれですか？',
    options: ['Provisioned', 'Bursting', 'General Purpose', 'Max I/O'],
    correct: 1,
    explanation: 'Burstingモードでは、ファイルシステムのサイズに比例してスループットが決まります。'
  },
  {
    id: 'storage-20',
    category: 'ストレージ',
    question: 'S3のMFA削除機能を有効にするために必要な条件はどれですか？',
    options: ['バージョニング有効', 'ログ有効', '暗号化有効', 'レプリケーション有効'],
    correct: 0,
    explanation: 'MFA削除を有効にするには、まずバケットでバージョニングを有効にする必要があります。'
  },
  {
    id: 'storage-21',
    category: 'ストレージ',
    question: 'EBSボリュームのマルチアタッチ機能をサポートするボリュームタイプはどれですか？',
    options: ['gp2', 'gp3', 'io1', 'io2'],
    correct: 3,
    explanation: 'EBSマルチアタッチは、io1とio2ボリュームタイプでサポートされています。'
  },
  {
    id: 'storage-22',
    category: 'ストレージ',
    question: 'S3のアクセスログで記録されない情報はどれですか？',
    options: ['リクエスト時刻', 'IPアドレス', 'ユーザーエージェント', 'オブジェクト内容'],
    correct: 3,
    explanation: 'S3アクセスログには、リクエストの詳細は記録されますが、オブジェクトの実際の内容は記録されません。'
  },
  {
    id: 'storage-23',
    category: 'ストレージ',
    question: 'FSx for Lustreの主な用途はどれですか？',
    options: ['Webサーバー', 'データベース', 'HPC', 'バックアップ'],
    correct: 2,
    explanation: 'FSx for Lustreは、高性能コンピューティング（HPC）ワークロード向けに最適化されたファイルシステムです。'
  },
  {
    id: 'storage-24',
    category: 'ストレージ',
    question: 'S3のリクエスタ支払い機能で、料金を負担するのは誰ですか？',
    options: ['バケット所有者', 'リクエスト送信者', 'AWS', '設定による'],
    correct: 1,
    explanation: 'リクエスタ支払い機能では、データ転送とリクエスト料金をリクエスト送信者が負担します。'
  },
  {
    id: 'storage-25',
    category: 'ストレージ',
    question: 'EBSボリュームの暗号化で使用されるデフォルトのキーはどれですか？',
    options: ['AWS管理キー', 'カスタマー管理キー', 'カスタマー提供キー', 'ランダムキー'],
    correct: 0,
    explanation: 'EBS暗号化では、デフォルトでAWS管理のKMSキー（aws/ebs）が使用されます。'
  },
  {
    id: 'storage-26',
    category: 'ストレージ',
    question: 'S3のオブジェクトロック機能で設定できるモードに含まれないものはどれですか？',
    options: ['Governance', 'Compliance', 'Legal Hold', 'Permanent'],
    correct: 3,
    explanation: 'S3オブジェクトロックには、GovernanceモードとComplianceモード、およびLegal Holdがありますが、Permanentモードはありません。'
  },
  {
    id: 'storage-27',
    category: 'ストレージ',
    question: 'EFSのアクセスポイントで制御できる項目に含まれないものはどれですか？',
    options: ['POSIX権限', 'ユーザーID', 'グループID', 'ファイル暗号化'],
    correct: 3,
    explanation: 'EFSアクセスポイントでは、POSIX権限やユーザー/グループIDを制御できますが、ファイル暗号化は別途設定します。'
  },
  {
    id: 'storage-28',
    category: 'ストレージ',
    question: 'S3のInventory機能で出力できない形式はどれですか？',
    options: ['CSV', 'ORC', 'Parquet', 'JSON'],
    correct: 3,
    explanation: 'S3 InventoryはCSV、ORC、Parquet形式で出力できますが、JSON形式はサポートされていません。'
  },
  {
    id: 'storage-29',
    category: 'ストレージ',
    question: 'EBSのFast Snapshot Restore機能の主な利点はどれですか？',
    options: ['コスト削減', '初期化時間短縮', 'セキュリティ向上', 'サイズ削減'],
    correct: 1,
    explanation: 'Fast Snapshot Restoreにより、スナップショットからボリュームを作成する際の初期化時間を大幅に短縮できます。'
  },
  {
    id: 'storage-30',
    category: 'ストレージ',
    question: 'S3のSelect機能で使用できるクエリ言語はどれですか？',
    options: ['SQL', 'NoSQL', 'GraphQL', 'XPath'],
    correct: 0,
    explanation: 'S3 SelectはSQL式を使用してオブジェクトの内容から特定のデータを取得できます。'
  },
  // 複数選択問題
  {
    id: 'storage-multi-1',
    category: 'ストレージ',
    question: 'S3のストレージクラスで、データの取得に料金が発生するものを3つ選択してください。',
    options: [
      'S3 Standard',
      'S3 Standard-IA',
      'S3 Glacier Instant Retrieval',
      'S3 Glacier Flexible Retrieval',
      'S3 Glacier Deep Archive',
      'S3 One Zone-IA'
    ],
    correct: [1, 3, 4],
    multipleChoice: true,
    explanation: 'S3 Standard-IA、S3 Glacier Flexible Retrieval、S3 Glacier Deep Archiveは、データ取得時に料金が発生します。S3 StandardとS3 Glacier Instant Retrievalは取得料金なし、S3 One Zone-IAは取得料金が発生します。'
  },
  {
    id: 'storage-multi-2',
    category: 'ストレージ',
    question: 'EBSボリュームタイプで、プロビジョンドIOPSを提供するものを2つ選択してください。',
    options: [
      'gp2 (General Purpose SSD)',
      'gp3 (General Purpose SSD)',
      'io1 (Provisioned IOPS SSD)',
      'io2 (Provisioned IOPS SSD)',
      'st1 (Throughput Optimized HDD)',
      'sc1 (Cold HDD)'
    ],
    correct: [2, 3],
    multipleChoice: true,
    explanation: 'io1とio2は、プロビジョンドIOPSを提供するSSDボリュームタイプです。高いIOPSが必要なデータベースワークロードに適しています。'
  },
  {
    id: 'storage-multi-3',
    category: 'ストレージ',
    question: 'AWS Storage Gatewayの展開モードとして正しいものを3つ選択してください。',
    options: [
      'File Gateway',
      'Volume Gateway',
      'Tape Gateway',
      'Database Gateway',
      'Cache Gateway',
      'Sync Gateway'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Storage Gatewayの3つの展開モード：File Gateway（NFS/SMB）、Volume Gateway（iSCSI）、Tape Gateway（VTL）です。'
  },
  {
    id: 'storage-multi-4',
    category: 'ストレージ',
    question: 'S3のセキュリティ機能として正しいものを3つ選択してください。',
    options: [
      'バケットポリシー',
      'Access Control Lists (ACL)',
      'Server-Side Encryption',
      'VPC Endpoint',
      'CloudTrail統合',
      'Auto Scaling'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'S3の主要セキュリティ機能：バケットポリシー（アクセス制御）、ACL（オブジェクトレベルアクセス制御）、Server-Side Encryption（暗号化）。VPC EndpointとCloudTrailは関連機能ですが、直接的なセキュリティ機能ではありません。'
  },
  {
    id: 'storage-multi-5',
    category: 'ストレージ',
    question: 'EFSの特徴として正しいものを2つ選択してください。',
    options: [
      'ブロックストレージ',
      'NFSプロトコルをサポート',
      '単一AZでのみ利用可能',
      '複数のEC2インスタンスから同時アクセス可能',
      'Windows専用',
      'オブジェクトストレージ'
    ],
    correct: [1, 3],
    multipleChoice: true,
    explanation: 'EFS（Elastic File System）はNFSプロトコルをサポートし、複数のEC2インスタンスから同時にアクセス可能なファイルストレージサービスです。複数AZにまたがって利用でき、LinuxベースのシステムでPOSIX準拠のファイルシステムを提供します。'
  },
  {
    id: 'storage-multi-6',
    category: 'ストレージ',
    question: 'Amazon S3の暗号化オプションとして正しいものを3つ選択してください。',
    options: [
      'SSE-S3（S3管理キー）',
      'SSE-KMS（AWS KMS管理キー）',
      'SSE-C（カスタマー提供キー）',
      'SSE-IAM（IAM管理キー）',
      'SSE-VPC（VPC管理キー）',
      'SSE-EC2（EC2管理キー）'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'S3の暗号化オプション：SSE-S3（S3がキーを管理）、SSE-KMS（AWS KMSでキー管理）、SSE-C（顧客がキーを提供・管理）。SSE-IAM、SSE-VPC、SSE-EC2は存在しない暗号化方式です。'
  },
  {
    id: 'storage-multi-7',
    category: 'ストレージ',
    question: 'Amazon FSxでサポートされているファイルシステムを2つ選択してください。',
    options: [
      'Windows File Server',
      'Lustre',
      'NetApp ONTAP',
      'OpenZFS',
      'GlusterFS',
      'CephFS'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Amazon FSxでサポートされるファイルシステム：Windows File Server（Windows環境向け）、Lustre（高性能コンピューティング向け）。NetApp ONTAP、OpenZFS、GlusterFS、CephFSは他のソリューションです。'
  },
  {
    id: 'storage-multi-8',
    category: 'ストレージ',
    question: 'S3 Transfer Accelerationの利点として正しいものを2つ選択してください。',
    options: [
      'CloudFrontエッジロケーションを活用',
      'アップロード速度の向上',
      'ストレージコストの削減',
      'データの自動暗号化',
      'バージョニングの自動有効化',
      'アクセス権限の自動設定'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'S3 Transfer Accelerationの利点：CloudFrontのエッジロケーションを活用してAWSバックボーンネットワーク経由でデータ転送、特に遠距離からのアップロード速度向上。コスト削減や暗号化、バージョニング、権限設定は別機能です。'
  },
  {
    id: 'storage-multi-9',
    category: 'ストレージ',
    question: 'Amazon EBSのスナップショット機能として正しいものを3つ選択してください。',
    options: [
      'S3に自動保存',
      'インクリメンタルバックアップ',
      'クロスリージョンコピー',
      'リアルタイム同期',
      'データベーストランザクション保証',
      'ファイルレベル復元'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'EBSスナップショット機能：S3への自動保存（耐久性確保）、インクリメンタルバックアップ（変更分のみ保存）、クロスリージョンコピー（災害復旧）。リアルタイム同期ではなく、ファイルレベル復元は不可、DBトランザクション保証は別途対応が必要です。'
  },
  {
    id: 'storage-multi-10',
    category: 'ストレージ',
    question: 'AWS DataSyncの機能として正しいものを2つ選択してください。',
    options: [
      'オンプレミスとAWS間のデータ転送',
      'AWSサービス間のデータ転送',
      'リアルタイムデータレプリケーション',
      'データベーススキーマ変換',
      'アプリケーションコード移行',
      'ネットワーク設定の自動化'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS DataSyncの機能：オンプレミスとAWS間のデータ転送（NFS、SMB、HDFS等）、AWSサービス間のデータ転送（S3、EFS、FSx間）。リアルタイムレプリケーションではなく一回限りまたはスケジュール実行、スキーマ変換やコード移行は対象外です。'
  }
]

export default storageQuestions
