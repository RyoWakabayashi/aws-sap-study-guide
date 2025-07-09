// データベースサービス関連の問題
const databaseQuestions = [
  {
    id: 'database-1',
    category: 'データベース',
    question: 'MySQLの5倍、PostgreSQLの3倍の性能を提供するAWSデータベースサービスはどれですか？',
    options: ['RDS', 'Aurora', 'DynamoDB', 'Redshift'],
    correct: 1,
    explanation: 'Amazon Auroraは、標準的なMySQLの最大5倍、PostgreSQLの最大3倍の性能を提供します。'
  },
  {
    id: 'database-2',
    category: 'データベース',
    question: '単一桁ミリ秒のレスポンス時間を提供するNoSQLデータベースはどれですか？',
    options: ['RDS', 'Aurora', 'DynamoDB', 'DocumentDB'],
    correct: 2,
    explanation: 'Amazon DynamoDBは、単一桁ミリ秒のレスポンス時間を提供するフルマネージドNoSQLデータベースです。'
  },
  {
    id: 'database-3',
    category: 'データベース',
    question: 'MongoDB互換のマネージドデータベースサービスはどれですか？',
    options: ['DynamoDB', 'DocumentDB', 'Neptune', 'Timestream'],
    correct: 1,
    explanation: 'Amazon DocumentDBは、MongoDB互換のフルマネージドドキュメントデータベースサービスです。'
  },
  {
    id: 'database-4',
    category: 'データベース',
    question: 'グラフデータベースに最適なAWSサービスはどれですか？',
    options: ['DynamoDB', 'DocumentDB', 'Neptune', 'RDS'],
    correct: 2,
    explanation: 'Amazon Neptuneは、高速で信頼性の高いフルマネージドグラフデータベースサービスです。'
  },
  {
    id: 'database-5',
    category: 'データベース',
    question: 'ペタバイト規模のデータウェアハウスに最適なAWSサービスはどれですか？',
    options: ['RDS', 'Aurora', 'DynamoDB', 'Redshift'],
    correct: 3,
    explanation: 'Amazon Redshiftは、ペタバイト規模のデータウェアハウス用に設計されたフルマネージドサービスです。'
  },
  {
    id: 'database-6',
    category: 'データベース',
    question: 'Apache Cassandra互換のマネージドサービスはどれですか？',
    options: ['DynamoDB', 'DocumentDB', 'Keyspaces', 'Neptune'],
    correct: 2,
    explanation: 'Amazon Keyspacesは、Apache Cassandra互換のマネージドデータベースサービスです。'
  },
  {
    id: 'database-7',
    category: 'データベース',
    question: 'RDSで自動バックアップの保持期間の最大値はどれですか？',
    options: ['7日', '30日', '35日', '90日'],
    correct: 2,
    explanation: 'RDSの自動バックアップは最大35日間保持できます。'
  },
  {
    id: 'database-8',
    category: 'データベース',
    question: 'DynamoDBのグローバルセカンダリインデックス（GSI）の最大数はどれですか？',
    options: ['5個', '10個', '20個', '無制限'],
    correct: 2,
    explanation: 'DynamoDBテーブルには最大20個のグローバルセカンダリインデックスを作成できます。'
  },
  {
    id: 'database-9',
    category: 'データベース',
    question: 'Aurora Serverlessの課金単位はどれですか？',
    options: ['時間', '分', '秒', 'ACU'],
    correct: 3,
    explanation: 'Aurora ServerlessはACU（Aurora Capacity Unit）単位で課金され、使用した分だけ支払います。'
  },
  {
    id: 'database-10',
    category: 'データベース',
    question: 'RDSのリードレプリカで対応していないエンジンはどれですか？',
    options: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server'],
    correct: 3,
    explanation: 'RDSのリードレプリカは、MySQL、PostgreSQL、MariaDB、Oracleで利用可能ですが、SQL Serverでは利用できません。'
  },
  {
    id: 'database-11',
    category: 'データベース',
    question: 'DynamoDBのPoint-in-Time Recovery（PITR）で復元可能な期間はどれですか？',
    options: ['24時間', '7日', '35日', '90日'],
    correct: 2,
    explanation: 'DynamoDBのPITRでは、過去35日以内の任意の時点にテーブルを復元できます。'
  },
  {
    id: 'database-12',
    category: 'データベース',
    question: 'Redshiftのデータ圧縮で使用されない圧縮方式はどれですか？',
    options: ['LZO', 'GZIP', 'RAW', 'BZIP2'],
    correct: 3,
    explanation: 'RedshiftではLZO、GZIP、RAW（非圧縮）がサポートされていますが、BZIP2はサポートされていません。'
  },
  {
    id: 'database-13',
    category: 'データベース',
    question: 'ElastiCacheでサポートされているエンジンはどれですか？',
    options: ['Redis', 'Memcached', '両方', 'どちらでもない'],
    correct: 2,
    explanation: 'Amazon ElastiCacheは、RedisとMemcachedの両方のエンジンをサポートしています。'
  },
  {
    id: 'database-14',
    category: 'データベース',
    question: 'DynamoDBのEventually Consistentリードの特徴はどれですか？',
    options: ['高コスト', '低レイテンシ', '強整合性', '高可用性'],
    correct: 1,
    explanation: 'Eventually Consistentリードは、Strongly Consistentリードよりも低レイテンシで実行されます。'
  },
  {
    id: 'database-15',
    category: 'データベース',
    question: 'RDSのMulti-AZ配置で、フェイルオーバー時間の目安はどれですか？',
    options: ['30秒', '1-2分', '5-10分', '30分'],
    correct: 1,
    explanation: 'RDS Multi-AZのフェイルオーバーは通常1-2分以内に完了します。'
  },
  {
    id: 'database-16',
    category: 'データベース',
    question: 'Aurora Global Databaseで対応していない機能はどれですか？',
    options: ['クロスリージョンレプリケーション', '災害復旧', 'リアルタイム分析', 'マルチマスター'],
    correct: 3,
    explanation: 'Aurora Global Databaseは単一マスター構成で、マルチマスター機能は別の機能です。'
  },
  {
    id: 'database-17',
    category: 'データベース',
    question: 'DynamoDB Accelerator（DAX）の主な用途はどれですか？',
    options: ['データ圧縮', 'キャッシング', 'バックアップ', 'レプリケーション'],
    correct: 1,
    explanation: 'DAXは、DynamoDBのマイクロ秒レベルのキャッシングサービスです。'
  },
  {
    id: 'database-18',
    category: 'データベース',
    question: 'Redshift Spectrumで直接クエリできるデータ形式に含まれないものはどれですか？',
    options: ['Parquet', 'ORC', 'CSV', 'XML'],
    correct: 3,
    explanation: 'Redshift SpectrumはParquet、ORC、CSV、JSONなどをサポートしますが、XMLは直接サポートされていません。'
  },
  {
    id: 'database-19',
    category: 'データベース',
    question: 'RDSのPerformance Insightsで監視できない項目はどれですか？',
    options: ['CPU使用率', 'メモリ使用率', 'ディスク使用率', 'ネットワーク帯域幅'],
    correct: 3,
    explanation: 'Performance Insightsは主にデータベースのパフォーマンスメトリクスを監視し、ネットワーク帯域幅は含まれません。'
  },
  {
    id: 'database-20',
    category: 'データベース',
    question: 'DynamoDBのオンデマンド課金モードの特徴はどれですか？',
    options: ['事前容量設定必要', '予測可能なコスト', '使用量ベース課金', '最低料金あり'],
    correct: 2,
    explanation: 'オンデマンドモードでは、実際に使用したリクエスト数に基づいて課金されます。'
  },
  {
    id: 'database-21',
    category: 'データベース',
    question: 'Neptuneでサポートされているグラフクエリ言語はどれですか？',
    options: ['Gremlin', 'SPARQL', '両方', 'どちらでもない'],
    correct: 2,
    explanation: 'Amazon NeptuneはGremlinとSPARQLの両方のクエリ言語をサポートしています。'
  },
  {
    id: 'database-22',
    category: 'データベース',
    question: 'RDSのProxy機能の主な利点はどれですか？',
    options: ['パフォーマンス向上', 'コネクション管理', 'セキュリティ強化', 'すべて正しい'],
    correct: 3,
    explanation: 'RDS Proxyは、コネクションプーリング、フェイルオーバー時間短縮、セキュリティ強化を提供します。'
  },
  {
    id: 'database-23',
    category: 'データベース',
    question: 'DynamoDBのTransactionsで一度に処理できる最大アイテム数はどれですか？',
    options: ['10個', '25個', '50個', '100個'],
    correct: 1,
    explanation: 'DynamoDBトランザクションでは、一度に最大25個のアイテムを処理できます。'
  },
  {
    id: 'database-24',
    category: 'データベース',
    question: 'Timestreamの主な用途はどれですか？',
    options: ['リレーショナルデータ', 'ドキュメントデータ', '時系列データ', 'グラフデータ'],
    correct: 2,
    explanation: 'Amazon Timestreamは、時系列データ専用のフルマネージドデータベースサービスです。'
  },
  {
    id: 'database-25',
    category: 'データベース',
    question: 'Aurora Serverless v2の最小ACU値はどれですか？',
    options: ['0.5', '1', '2', '4'],
    correct: 0,
    explanation: 'Aurora Serverless v2では、最小0.5 ACUから設定できます。'
  },
  {
    id: 'database-26',
    category: 'データベース',
    question: 'DynamoDBのGlobal Tablesで必要な設定はどれですか？',
    options: ['DynamoDB Streams', 'バックアップ有効', '暗号化有効', 'TTL有効'],
    correct: 0,
    explanation: 'Global TablesにはDynamoDB Streamsの有効化が必要です。'
  },
  {
    id: 'database-27',
    category: 'データベース',
    question: 'RDSのBlue/Greenデプロイメントで対応していないエンジンはどれですか？',
    options: ['MySQL', 'PostgreSQL', 'MariaDB', 'Oracle'],
    correct: 3,
    explanation: 'RDS Blue/Greenデプロイメントは、MySQL、PostgreSQL、MariaDBで利用可能ですが、Oracleでは利用できません。'
  },
  {
    id: 'database-28',
    category: 'データベース',
    question: 'Redshiftのワークロード管理（WLM）で設定できる最大キュー数はどれですか？',
    options: ['5個', '8個', '10個', '15個'],
    correct: 1,
    explanation: 'Redshiftでは最大8個のユーザー定義キューを設定できます。'
  },
  {
    id: 'database-29',
    category: 'データベース',
    question: 'ElastiCacheのRedisで利用できないデータ構造はどれですか？',
    options: ['String', 'Hash', 'List', 'Graph'],
    correct: 3,
    explanation: 'RedisはString、Hash、List、Set、Sorted Setなどをサポートしますが、Graphデータ構造は直接サポートされていません。'
  },
  {
    id: 'database-30',
    category: 'データベース',
    question: 'DynamoDBのConditional Writesで使用できない演算子はどれですか？',
    options: ['=', '<>', 'BETWEEN', 'REGEX'],
    correct: 3,
    explanation: 'DynamoDBの条件式では、等価、不等価、BETWEEN演算子は使用できますが、REGEX演算子は使用できません。'
  },
  // 複数選択問題
  {
    id: 'database-multi-1',
    category: 'データベース',
    question: 'Amazon RDSでサポートされているデータベースエンジンを3つ選択してください。',
    options: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Oracle',
      'Cassandra',
      'Redis'
    ],
    correct: [0, 1, 3],
    multipleChoice: true,
    explanation: 'Amazon RDSは、MySQL、PostgreSQL、Oracle、SQL Server、MariaDB、Amazon Auroraをサポートしています。MongoDB、Cassandra、RedisはRDSではサポートされていません。'
  },
  {
    id: 'database-multi-2',
    category: 'データベース',
    question: 'DynamoDBのパフォーマンス最適化手法として正しいものを2つ選択してください。',
    options: [
      'ホットパーティションの回避',
      '適切なパーティションキーの選択',
      'セカンダリインデックスの多用',
      '大きなアイテムサイズの使用',
      'スキャン操作の頻繁な実行',
      'バッチ操作の使用'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'DynamoDBのパフォーマンス最適化には、ホットパーティションの回避と適切なパーティションキーの選択が重要です。セカンダリインデックスの多用、大きなアイテムサイズ、頻繁なスキャン操作は性能低下の原因となります。'
  },
  {
    id: 'database-multi-3',
    category: 'データベース',
    question: 'Amazon Auroraの特徴として正しいものを3つ選択してください。',
    options: [
      'MySQL・PostgreSQL互換',
      '最大15個のリードレプリカ',
      'NoSQLデータベース',
      '自動バックアップ・ポイントインタイムリカバリ',
      'シングルAZ展開のみ',
      'サーバーレス機能'
    ],
    correct: [0, 1, 3],
    multipleChoice: true,
    explanation: 'Amazon Auroraは、MySQL・PostgreSQL互換のリレーショナルデータベース、最大15個のリードレプリカ、自動バックアップ・ポイントインタイムリカバリをサポートします。マルチAZ展開が可能で、サーバーレス機能も提供しています。'
  },
  {
    id: 'database-multi-4',
    category: 'データベース',
    question: 'AWS Database Migration Service (DMS)でサポートされているソースデータベースを3つ選択してください。',
    options: [
      'Oracle',
      'SQL Server',
      'MongoDB',
      'Cassandra',
      'S3',
      'Redshift'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'AWS DMSは、Oracle、SQL Server、MySQL、PostgreSQL、MongoDB、MariaDBなど多くのデータベースをソースとしてサポートしています。S3やRedshiftもサポートされていますが、主要なソースデータベースとしてはOracle、SQL Server、MongoDBが代表的です。'
  },
  {
    id: 'database-multi-5',
    category: 'データベース',
    question: 'Amazon ElastiCacheでサポートされているエンジンを2つ選択してください。',
    options: [
      'Redis',
      'Memcached',
      'MongoDB',
      'Cassandra',
      'DynamoDB',
      'Neptune'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Amazon ElastiCacheは、RedisとMemcachedの2つのインメモリキャッシュエンジンをサポートしています。Redisはより高機能で永続化やレプリケーションをサポートし、Memcachedはシンプルで高速なキャッシュを提供します。'
  },
  {
    id: 'database-multi-6',
    category: 'データベース',
    question: 'Amazon DocumentDBの特徴として正しいものを3つ選択してください。',
    options: [
      'MongoDB互換',
      'フルマネージドサービス',
      '自動バックアップ・復元',
      'SQL言語サポート',
      'リレーショナルデータベース',
      'ACID準拠のトランザクション'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'Amazon DocumentDBの特徴：MongoDB互換のドキュメントデータベース、フルマネージドサービス、自動バックアップ・ポイントインタイムリカバリ。SQL言語やリレーショナル機能はサポートせず、NoSQLデータベースです。'
  },
  {
    id: 'database-multi-7',
    category: 'データベース',
    question: 'Amazon Neptuneでサポートされているグラフクエリ言語を2つ選択してください。',
    options: [
      'Apache TinkerPop Gremlin',
      'W3C SPARQL',
      'Cypher',
      'SQL',
      'MongoDB Query Language',
      'GraphQL'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Amazon Neptuneでサポートされるクエリ言語：Apache TinkerPop Gremlin（プロパティグラフ用）、W3C SPARQL（RDFグラフ用）。Cypher、SQL、MongoDB QL、GraphQLは直接サポートされていません。'
  },
  {
    id: 'database-multi-8',
    category: 'データベース',
    question: 'DynamoDB Global Tablesの利点として正しいものを2つ選択してください。',
    options: [
      'マルチリージョンレプリケーション',
      '自動フェイルオーバー',
      'データの強整合性保証',
      'SQLクエリサポート',
      'スキーマ定義の必須化',
      'JOINクエリの最適化'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'DynamoDB Global Tablesの利点：マルチリージョンでの自動レプリケーション、リージョン障害時の自動フェイルオーバー。結果整合性モデルを採用し、SQLクエリやスキーマ定義、JOINクエリはサポートしていません。'
  },
  {
    id: 'database-multi-9',
    category: 'データベース',
    question: 'Amazon RDS Proxyの機能として正しいものを3つ選択してください。',
    options: [
      'コネクションプーリング',
      'フェイルオーバー時間の短縮',
      'IAM認証のサポート',
      'データの自動暗号化',
      'スキーマ変更の自動化',
      'クエリパフォーマンスの監視'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'Amazon RDS Proxyの機能：コネクションプーリング（接続効率化）、フェイルオーバー時間短縮（66%削減）、IAM認証サポート（セキュリティ強化）。データ暗号化、スキーマ変更、クエリ監視は他のサービス・機能です。'
  },
  {
    id: 'database-multi-10',
    category: 'データベース',
    question: 'Amazon Timestreamの特徴として正しいものを2つ選択してください。',
    options: [
      '時系列データ専用データベース',
      'サーバーレスアーキテクチャ',
      'リレーショナルデータベース',
      'グラフデータベース',
      'キー・バリューストア',
      'ドキュメントデータベース'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Amazon Timestreamの特徴：時系列データ専用に最適化されたデータベース、サーバーレスでフルマネージド。リレーショナル、グラフ、キー・バリュー、ドキュメントデータベースではなく、IoTやアプリケーション監視データに特化しています。'
  }
]

export default databaseQuestions
