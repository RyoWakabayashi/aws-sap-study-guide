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
  }
]

export default databaseQuestions
