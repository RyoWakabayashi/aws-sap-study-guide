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
  }
]

export default databaseQuestions
