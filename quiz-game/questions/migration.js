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
  }
]

export default migrationQuestions
