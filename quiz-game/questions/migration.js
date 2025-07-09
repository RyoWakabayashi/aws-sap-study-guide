// 移行・統合関連の問題
const migrationQuestions = [
  {
    id: 'migration-1',
    category: '移行・統合',
    question: 'データベース移行を支援するAWSサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Snow Family', 'Storage Gateway'],
    correct: 1,
    explanation: 'AWS DMS（Database Migration Service）は、データベースの移行を支援するサービスです。'
  },
  {
    id: 'migration-2',
    category: '移行・統合',
    question: '大容量データをオフラインで転送するAWSサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Snow Family', 'Direct Connect'],
    correct: 2,
    explanation: 'AWS Snow Familyは、大容量データをオフラインで安全にAWSに転送するサービスです。'
  },
  {
    id: 'migration-3',
    category: '移行・統合',
    question: 'オンプレミスとAWS間でデータを同期するサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Snow Family', 'Storage Gateway'],
    correct: 0,
    explanation: 'AWS DataSyncは、オンプレミスストレージとAWSストレージサービス間でデータを転送するサービスです。'
  },
  {
    id: 'migration-4',
    category: '移行・統合',
    question: 'ハイブリッドクラウドストレージを実現するサービスはどれですか？',
    options: ['DataSync', 'DMS', 'Snow Family', 'Storage Gateway'],
    correct: 3,
    explanation: 'AWS Storage Gatewayは、オンプレミス環境をAWSクラウドストレージに接続するハイブリッドクラウドストレージサービスです。'
  },
  {
    id: 'migration-5',
    category: '移行・統合',
    question: 'アプリケーションを自動的にコンテナ化するサービスはどれですか？',
    options: ['App2Container', 'Application Migration Service', 'Server Migration Service', 'DataSync'],
    correct: 0,
    explanation: 'AWS App2Containerは、既存のアプリケーションを自動的にコンテナ化するサービスです。'
  }
]

export default migrationQuestions
