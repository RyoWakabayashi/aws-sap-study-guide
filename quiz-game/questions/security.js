// セキュリティ関連の問題
const securityQuestions = [
  {
    id: 'security-1',
    category: 'セキュリティ',
    question: '暗号化キーを管理するAWSサービスはどれですか？',
    options: ['IAM', 'KMS', 'Secrets Manager', 'Certificate Manager'],
    correct: 1,
    explanation: 'AWS KMS（Key Management Service）は、暗号化キーの作成と管理を行うマネージドサービスです。'
  },
  {
    id: 'security-2',
    category: 'セキュリティ',
    question: '機械学習を使用して脅威を検知するサービスはどれですか？',
    options: ['CloudTrail', 'Config', 'GuardDuty', 'Inspector'],
    correct: 2,
    explanation: 'Amazon GuardDutyは、機械学習を使用してAWSアカウントとワークロードの脅威を検知するサービスです。'
  },
  {
    id: 'security-3',
    category: 'セキュリティ',
    question: 'Webアプリケーションファイアウォール機能を提供するサービスはどれですか？',
    options: ['Shield', 'WAF', 'GuardDuty', 'Macie'],
    correct: 1,
    explanation: 'AWS WAFは、Webアプリケーションを一般的なWeb攻撃から保護するWebアプリケーションファイアウォールです。'
  },
  {
    id: 'security-4',
    category: 'セキュリティ',
    question: 'DDoS攻撃から保護するAWSサービスはどれですか？',
    options: ['WAF', 'Shield', 'GuardDuty', 'Inspector'],
    correct: 1,
    explanation: 'AWS Shieldは、DDoS攻撃からAWSで実行されるアプリケーションを保護するマネージドサービスです。'
  },
  {
    id: 'security-5',
    category: 'セキュリティ',
    question: 'S3バケット内の機密データを自動検出するサービスはどれですか？',
    options: ['GuardDuty', 'Inspector', 'Macie', 'Config'],
    correct: 2,
    explanation: 'Amazon Macieは、機械学習を使用してS3内の機密データを自動的に検出・分類するサービスです。'
  },
  {
    id: 'security-6',
    category: 'セキュリティ',
    question: '専用のハードウェアセキュリティモジュールを提供するサービスはどれですか？',
    options: ['KMS', 'CloudHSM', 'Secrets Manager', 'Certificate Manager'],
    correct: 1,
    explanation: 'AWS CloudHSMは、専用のハードウェアセキュリティモジュールを提供します。'
  },
  {
    id: 'security-7',
    category: 'セキュリティ',
    question: 'EC2インスタンスの脆弱性評価を行うサービスはどれですか？',
    options: ['GuardDuty', 'Inspector', 'Macie', 'Security Hub'],
    correct: 1,
    explanation: 'Amazon Inspectorは、EC2インスタンスとコンテナイメージの脆弱性評価を行うサービスです。'
  },
  {
    id: 'security-8',
    category: 'セキュリティ',
    question: '複数のセキュリティサービスの結果を統合管理するサービスはどれですか？',
    options: ['GuardDuty', 'Inspector', 'Macie', 'Security Hub'],
    correct: 3,
    explanation: 'AWS Security Hubは、複数のセキュリティサービスからの結果を統合管理するサービスです。'
  },
  {
    id: 'security-9',
    category: 'セキュリティ',
    question: 'APIキーやパスワードを安全に管理するサービスはどれですか？',
    options: ['KMS', 'Secrets Manager', 'Parameter Store', 'Certificate Manager'],
    correct: 1,
    explanation: 'AWS Secrets Managerは、APIキー、パスワード、その他の機密情報を安全に管理するサービスです。'
  },
  {
    id: 'security-10',
    category: 'セキュリティ',
    question: 'SSL/TLS証明書を無料で提供・管理するサービスはどれですか？',
    options: ['KMS', 'Secrets Manager', 'Parameter Store', 'Certificate Manager'],
    correct: 3,
    explanation: 'AWS Certificate Managerは、SSL/TLS証明書を無料で提供・管理するサービスです。'
  }
]

export default securityQuestions
