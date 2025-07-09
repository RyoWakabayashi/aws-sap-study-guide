// 移行・統合関連の問題
const migrationQuestions = [
  {
    id: 'migration-1',
    category: '移行・統合',
    question: 'データベース移行を支援するAWSサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Storage Gateway', 'Transfer Family'],
    correct: 1,
    explanation: 'AWS DMS（Database Migration Service）は、データベースの移行を支援するフルマネージドサービスです。'
  },
  {
    id: 'migration-2',
    category: '移行・統合',
    question: '大容量データをオフラインで転送するAWSサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Snowball', 'Transfer Family'],
    correct: 2,
    explanation: 'AWS Snowballは、大容量データをオフラインで安全にAWSに転送するためのデータ転送デバイスです。'
  },
  {
    id: 'migration-3',
    category: '移行・統合',
    question: 'オンプレミスとAWS間でデータを同期するサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Snowball', 'Transfer Family'],
    correct: 0,
    explanation: 'AWS DataSyncは、オンプレミスとAWS間、またはAWSサービス間でデータを同期するサービスです。'
  },
  {
    id: 'migration-4',
    category: '移行・統合',
    question: 'ハイブリッドクラウドストレージを実現するサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Storage Gateway', 'Transfer Family'],
    correct: 2,
    explanation: 'AWS Storage Gatewayは、オンプレミス環境とAWSクラウドストレージを統合するハイブリッドサービスです。'
  },
  {
    id: 'migration-5',
    category: '移行・統合',
    question: 'アプリケーションを自動的にコンテナ化するサービスはどれですか？',
    options: ['App2Container', 'Application Discovery Service', 'Migration Hub', 'Server Migration Service'],
    correct: 0,
    explanation: 'AWS App2Containerは、既存のアプリケーションを自動的にコンテナ化し、AWSで実行できるようにします。'
  },
  {
    id: 'migration-6',
    category: '移行・統合',
    question: 'DMSでサポートされていない移行パターンはどれですか？',
    options: ['同種データベース間', '異種データベース間', 'リアルタイムレプリケーション', 'ファイルシステム移行'],
    correct: 3,
    explanation: 'DMSはデータベース移行に特化しており、ファイルシステムの移行は対象外です。'
  },
  {
    id: 'migration-7',
    category: '移行・統合',
    question: 'Snowball Edgeの主な特徴はどれですか？',
    options: ['データ転送のみ', 'コンピューティング機能付き', '小容量専用', 'オンライン転送'],
    correct: 1,
    explanation: 'Snowball Edgeは、データ転送に加えてエッジコンピューティング機能を提供します。'
  },
  {
    id: 'migration-8',
    category: '移行・統合',
    question: 'DataSyncで対応していない転送先はどれですか？',
    options: ['S3', 'EFS', 'FSx', 'RDS'],
    correct: 3,
    explanation: 'DataSyncは、S3、EFS、FSxをサポートしますが、RDSへの直接転送は対応していません。'
  },
  {
    id: 'migration-9',
    category: '移行・統合',
    question: 'Storage Gatewayのファイルゲートウェイで使用されるプロトコルはどれですか？',
    options: ['iSCSI', 'NFS/SMB', 'HTTP', 'FTP'],
    correct: 1,
    explanation: 'ファイルゲートウェイは、NFS（Linux）とSMB（Windows）プロトコルをサポートします。'
  },
  {
    id: 'migration-10',
    category: '移行・統合',
    question: 'Server Migration Service（SMS）の後継サービスはどれですか？',
    options: ['Application Migration Service', 'Migration Hub', 'DataSync', 'DMS'],
    correct: 0,
    explanation: 'AWS Application Migration Service（MGN）は、Server Migration Serviceの後継サービスです。'
  },
  {
    id: 'migration-11',
    category: '移行・統合',
    question: 'Transfer Familyでサポートされていないプロトコルはどれですか？',
    options: ['SFTP', 'FTPS', 'FTP', 'HTTP'],
    correct: 3,
    explanation: 'Transfer FamilyはSFTP、FTPS、FTPをサポートしますが、HTTPは対応していません。'
  },
  {
    id: 'migration-12',
    category: '移行・統合',
    question: 'Application Discovery Serviceの2つの発見タイプはどれですか？',
    options: ['エージェント型とエージェントレス型', '有料と無料', '自動と手動', 'リアルタイムとバッチ'],
    correct: 0,
    explanation: 'Application Discovery Serviceは、エージェント型（詳細）とエージェントレス型（基本）の発見を提供します。'
  },
  {
    id: 'migration-13',
    category: '移行・統合',
    question: 'Migration Hubで統合できないサービスはどれですか？',
    options: ['DMS', 'Application Migration Service', 'DataSync', 'Lambda'],
    correct: 3,
    explanation: 'Migration HubはDMS、MGN、DataSyncなどの移行サービスを統合しますが、Lambdaは対象外です。'
  },
  {
    id: 'migration-14',
    category: '移行・統合',
    question: 'Snowmobileの主な用途はどれですか？',
    options: ['小容量データ転送', '中容量データ転送', '大容量データ転送', 'エクサバイト級データ転送'],
    correct: 3,
    explanation: 'AWS Snowmobileは、エクサバイト級の大容量データをAWSに転送するためのトラック型デバイスです。'
  },
  {
    id: 'migration-15',
    category: '移行・統合',
    question: 'DMSのChange Data Capture（CDC）の主な用途はどれですか？',
    options: ['初期データ移行', '継続的レプリケーション', 'データ変換', 'データ検証'],
    correct: 1,
    explanation: 'CDCは、初期移行後にソースデータベースの変更を継続的にターゲットに複製します。'
  },
  {
    id: 'migration-16',
    category: '移行・統合',
    question: 'Storage Gatewayのボリュームゲートウェイで提供される2つのモードはどれですか？',
    options: ['保存ボリュームとキャッシュボリューム', '暗号化と非暗号化', '高速と標準', 'リアルタイムとバッチ'],
    correct: 0,
    explanation: 'ボリュームゲートウェイは、保存ボリューム（主データオンプレミス）とキャッシュボリューム（主データS3）を提供します。'
  },
  {
    id: 'migration-17',
    category: '移行・統合',
    question: 'AWS Mainframe Modernizationの主な機能はどれですか？',
    options: ['メインフレーム移行', 'メインフレーム最適化', 'メインフレーム監視', 'メインフレーム統合'],
    correct: 0,
    explanation: 'Mainframe Modernizationは、メインフレームアプリケーションをAWSに移行・現代化するサービスです。'
  },
  {
    id: 'migration-18',
    category: '移行・統合',
    question: 'AWS Application Migration Service（MGN）の主な利点はどれですか？',
    options: ['最小限のダウンタイム', '自動テスト', 'ロールバック機能', 'すべて正しい'],
    correct: 3,
    explanation: 'MGNは、最小限のダウンタイム、自動テスト、簡単なロールバック機能を提供します。'
  },
  {
    id: 'migration-19',
    category: '移行・統合',
    question: 'AWS Microservice Extractorの主な用途はどれですか？',
    options: ['モノリス分析', 'マイクロサービス抽出', 'コード変換', 'すべて正しい'],
    correct: 3,
    explanation: 'Microservice Extractorは、モノリシックアプリケーションを分析し、マイクロサービスへの分割を支援します。'
  },
  {
    id: 'migration-20',
    category: '移行・統合',
    question: 'AWS Porting Assistantの主な機能はどれですか？',
    options: ['.NET移植支援', 'Java移植支援', 'Python移植支援', '.NET移植支援'],
    correct: 0,
    explanation: 'Porting Assistant for .NETは、.NETアプリケーションのLinux移植を支援するツールです。'
  },
  {
    id: 'migration-21',
    category: '移行・統合',
    question: 'DataSyncの転送最適化機能に含まれないものはどれですか？',
    options: ['圧縮', '暗号化', '帯域幅制御', 'データ変換'],
    correct: 3,
    explanation: 'DataSyncは、圧縮、暗号化、帯域幅制御を提供しますが、データ変換機能は含まれません。'
  },
  {
    id: 'migration-22',
    category: '移行・統合',
    question: 'DMSのタスク評価レポートで確認できない項目はどれですか？',
    options: ['サポートされていないデータ型', '移行時間予測', 'ライセンス使用状況', '変換の複雑さ'],
    correct: 2,
    explanation: 'タスク評価レポートは、技術的な移行課題を評価しますが、ライセンス使用状況は含まれません。'
  },
  {
    id: 'migration-23',
    category: '移行・統合',
    question: 'Storage Gatewayのテープゲートウェイで対応していない機能はどれですか？',
    options: ['仮想テープライブラリ', '仮想テープシェルフ', 'テープ暗号化', 'リアルタイム復元'],
    correct: 3,
    explanation: 'テープゲートウェイは、VTL、VTS、暗号化をサポートしますが、Glacierからの復元には時間がかかります。'
  },
  {
    id: 'migration-24',
    category: '移行・統合',
    question: 'AWS Migration Evaluatorの主な機能はどれですか？',
    options: ['移行計画', 'コスト評価', 'リスク評価', 'すべて正しい'],
    correct: 3,
    explanation: 'Migration Evaluatorは、移行計画、コスト評価、リスク評価を包括的に提供します。'
  },
  {
    id: 'migration-25',
    category: '移行・統合',
    question: 'AWS Refactoring Toolkitの主な対象はどれですか？',
    options: ['レガシーアプリケーション', 'モダンアプリケーション', 'クラウドネイティブアプリ', 'すべて正しい'],
    correct: 0,
    explanation: 'Refactoring Toolkitは、レガシーアプリケーションの現代化とクラウド移行を支援します。'
  },
  // 複数選択問題
  {
    id: 'migration-multi-1',
    category: '移行戦略',
    question: 'AWS移行の6つのR戦略を3つ選択してください。',
    options: [
      'Rehost (Lift and Shift)',
      'Replatform (Lift, Tinker, and Shift)',
      'Refactor (Re-architect)',
      'Rebuild',
      'Replace',
      'Restore'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS移行の6R戦略：Rehost、Replatform、Refactor、Repurchase、Retain、Retire。RebuildやReplaceは一般的な用語ですが、6Rの正式な戦略ではありません。Restoreは移行戦略ではありません。'
  },
  {
    id: 'migration-multi-2',
    category: '移行戦略',
    question: 'AWS Application Migration Service (MGN)の機能として正しいものを2つ選択してください。',
    options: [
      'ブロックレベルレプリケーション',
      '最小限のダウンタイムでの移行',
      'データベーススキーマ変換',
      'アプリケーションコードの自動変換',
      'ネットワーク設定の自動化',
      'ユーザー認証の移行'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS MGNの機能：ブロックレベルレプリケーション（継続的なデータ同期）、最小限のダウンタイムでの移行（カットオーバー時間短縮）。スキーマ変換はDMS、コード変換は手動、ネットワーク・認証設定は別途対応が必要です。'
  },
  {
    id: 'migration-multi-3',
    category: '移行戦略',
    question: 'AWS Database Migration Service (DMS)でサポートされている移行パターンを3つ選択してください。',
    options: [
      '同種データベース間の移行',
      '異種データベース間の移行',
      '継続的なデータレプリケーション',
      'ファイルシステムの移行',
      'アプリケーションコードの移行',
      'ユーザーインターフェースの移行'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS DMSの移行パターン：同種DB間移行（Oracle→Oracle等）、異種DB間移行（Oracle→PostgreSQL等）、継続的レプリケーション（CDC）。ファイルシステム、アプリケーションコード、UIの移行は対象外です。'
  },
  {
    id: 'migration-multi-4',
    category: '移行戦略',
    question: 'AWS Snow Familyのデバイスとして正しいものを2つ選択してください。',
    options: [
      'AWS Snowball Edge',
      'AWS Snowmobile',
      'AWS Snowflake',
      'AWS Snowpipe',
      'AWS Snowball Classic',
      'AWS Snowstorm'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Snow Familyのデバイス：Snowball Edge（ストレージとコンピューティング）、Snowmobile（エクサバイト規模のデータ転送トラック）。Snowflake、Snowpipeは他社サービス、Snowball Classicは旧世代、Snowstormは存在しません。'
  },
  {
    id: 'migration-multi-5',
    category: '移行戦略',
    question: 'クラウド移行の成功要因として正しいものを3つ選択してください。',
    options: [
      '経営陣のサポート',
      '段階的な移行アプローチ',
      'スキルと知識の習得',
      '一度にすべてを移行',
      'コスト削減のみを重視',
      'セキュリティ要件の無視'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: '移行成功要因：経営陣のサポート（組織的なコミット）、段階的アプローチ（リスク軽減）、スキル習得（技術的準備）。一度にすべて移行、コストのみ重視、セキュリティ無視は失敗要因です。'
  },
  {
    id: 'migration-multi-6',
    category: '移行戦略',
    question: 'AWS Schema Conversion Tool (SCT) の機能として正しいものを2つ選択してください。',
    options: [
      'データベーススキーマの変換',
      'アプリケーションコードの変換',
      'データの実際の移行',
      'ネットワーク設定の変換',
      'ユーザーアカウントの移行',
      'ファイルシステムの変換'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS SCTの機能：データベーススキーマの変換（異種DB間のスキーマ変換）、アプリケーションコードの変換（SQL文等の変換）。データ移行はDMS、ネットワーク設定、ユーザーアカウント、ファイルシステム変換は対象外です。'
  },
  {
    id: 'migration-multi-7',
    category: '移行戦略',
    question: 'AWS Migration Hub の機能として正しいものを3つ選択してください。',
    options: [
      '移行プロジェクトの一元管理',
      '移行ツールの統合ダッシュボード',
      '移行進捗の可視化',
      'データの自動移行',
      'アプリケーションの自動変換',
      'インフラの自動構築'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS Migration Hubの機能：移行プロジェクトの一元管理、複数の移行ツール（DMS、MGN等）の統合ダッシュボード、移行進捗の可視化。データ移行、アプリ変換、インフラ構築は他のツールが実行します。'
  },
  {
    id: 'migration-multi-8',
    category: '移行戦略',
    question: 'AWS Application Discovery Service の機能として正しいものを2つ選択してください。',
    options: [
      'オンプレミス環境の自動検出',
      'アプリケーション依存関係の分析',
      'データの自動移行',
      'アプリケーションの自動変換',
      'クラウドコストの自動計算',
      'セキュリティ設定の自動化'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Application Discovery Serviceの機能：オンプレミス環境の自動検出（サーバー、アプリケーション）、アプリケーション依存関係の分析（移行計画策定支援）。データ移行、アプリ変換、コスト計算、セキュリティ設定は他のサービスです。'
  },
  {
    id: 'migration-multi-9',
    category: '移行戦略',
    question: 'Large-scale migration のベストプラクティスとして正しいものを3つ選択してください。',
    options: [
      'パイロットプロジェクトの実施',
      '段階的な移行アプローチ',
      '自動化ツールの活用',
      '一括での全システム移行',
      'マニュアル作業の最大化',
      'テスト工程の省略'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: '大規模移行のベストプラクティス：パイロットプロジェクト（小規模で検証）、段階的移行（リスク分散）、自動化ツール活用（効率化・品質向上）。一括移行、マニュアル作業最大化、テスト省略は失敗要因です。'
  },
  {
    id: 'migration-multi-10',
    category: '移行戦略',
    question: 'AWS Migration Acceleration Program (MAP) の特徴として正しいものを2つ選択してください。',
    options: [
      '移行プロジェクトの資金支援',
      '専門家によるガイダンス',
      'ハードウェアの無償提供',
      'ソフトウェアライセンスの無償提供',
      'データセンターの無償利用',
      'ネットワーク回線の無償提供'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS MAPの特徴：移行プロジェクトの資金支援（クレジット提供）、AWS専門家やパートナーによるガイダンス・サポート。ハードウェア、ソフトウェアライセンス、データセンター、ネットワーク回線の無償提供は含まれません。'
  }
]

export default migrationQuestions
