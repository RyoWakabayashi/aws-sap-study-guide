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
  }
]

export default storageQuestions
