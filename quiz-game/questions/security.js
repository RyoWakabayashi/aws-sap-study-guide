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
    options: ['Shield', 'WAF', 'GuardDuty', 'Inspector'],
    correct: 1,
    explanation: 'AWS WAF（Web Application Firewall）は、Webアプリケーションを一般的な攻撃から保護します。'
  },
  {
    id: 'security-4',
    category: 'セキュリティ',
    question: 'DDoS攻撃から保護するAWSサービスはどれですか？',
    options: ['WAF', 'Shield', 'GuardDuty', 'Inspector'],
    correct: 1,
    explanation: 'AWS Shieldは、DDoS攻撃からAWSリソースを保護するマネージドサービスです。'
  },
  {
    id: 'security-5',
    category: 'セキュリティ',
    question: 'S3バケット内の機密データを自動検出するサービスはどれですか？',
    options: ['GuardDuty', 'Macie', 'Inspector', 'Config'],
    correct: 1,
    explanation: 'Amazon Macieは、機械学習を使用してS3内の機密データを自動的に検出・分類します。'
  },
  {
    id: 'security-6',
    category: 'セキュリティ',
    question: '専用のハードウェアセキュリティモジュールを提供するサービスはどれですか？',
    options: ['KMS', 'CloudHSM', 'Secrets Manager', 'Certificate Manager'],
    correct: 1,
    explanation: 'AWS CloudHSMは、専用のハードウェアセキュリティモジュール（HSM）を提供します。'
  },
  {
    id: 'security-7',
    category: 'セキュリティ',
    question: 'EC2インスタンスの脆弱性評価を行うサービスはどれですか？',
    options: ['GuardDuty', 'Inspector', 'Macie', 'Config'],
    correct: 1,
    explanation: 'Amazon Inspectorは、EC2インスタンスとコンテナイメージの脆弱性評価を自動的に行います。'
  },
  {
    id: 'security-8',
    category: 'セキュリティ',
    question: '複数のセキュリティサービスの結果を統合管理するサービスはどれですか？',
    options: ['CloudTrail', 'Config', 'Security Hub', 'Systems Manager'],
    correct: 2,
    explanation: 'AWS Security Hubは、複数のセキュリティサービスからの結果を統合し、一元的に管理できます。'
  },
  {
    id: 'security-9',
    category: 'セキュリティ',
    question: 'APIキーやパスワードを安全に管理するサービスはどれですか？',
    options: ['KMS', 'Secrets Manager', 'Parameter Store', 'Certificate Manager'],
    correct: 1,
    explanation: 'AWS Secrets Managerは、データベース認証情報、APIキー、その他の機密情報を安全に管理します。'
  },
  {
    id: 'security-10',
    category: 'セキュリティ',
    question: 'SSL/TLS証明書を無料で提供・管理するサービスはどれですか？',
    options: ['KMS', 'Certificate Manager', 'Secrets Manager', 'CloudHSM'],
    correct: 1,
    explanation: 'AWS Certificate Manager（ACM）は、SSL/TLS証明書を無料で提供し、自動更新も行います。'
  },
  {
    id: 'security-11',
    category: 'セキュリティ',
    question: 'IAMポリシーの評価で最も優先度が高いのはどれですか？',
    options: ['Allow', 'Deny', '条件による', '設定順序による'],
    correct: 1,
    explanation: 'IAMでは、明示的なDenyが常に最優先され、Allowより優先されます。'
  },
  {
    id: 'security-12',
    category: 'セキュリティ',
    question: 'AWS SSOで対応していない認証方式はどれですか？',
    options: ['SAML 2.0', 'OIDC', 'LDAP', 'Kerberos'],
    correct: 3,
    explanation: 'AWS SSOは、SAML 2.0、OIDC、LDAPをサポートしますが、Kerberosは直接サポートされていません。'
  },
  {
    id: 'security-13',
    category: 'セキュリティ',
    question: 'CloudTrailのログファイルの整合性を検証する機能はどれですか？',
    options: ['ログファイル検証', 'データイベント', 'インサイトイベント', 'マネジメントイベント'],
    correct: 0,
    explanation: 'CloudTrailのログファイル検証機能により、ログファイルが改ざんされていないことを確認できます。'
  },
  {
    id: 'security-14',
    category: 'セキュリティ',
    question: 'KMSのカスタマー管理キーで設定できない項目はどれですか？',
    options: ['キーローテーション', 'キーポリシー', 'エイリアス', 'キー長'],
    correct: 3,
    explanation: 'KMSのカスタマー管理キーでは、キー長は固定（256ビット）で変更できません。'
  },
  {
    id: 'security-15',
    category: 'セキュリティ',
    question: 'GuardDutyで検出されない脅威タイプはどれですか？',
    options: ['マルウェア', '異常なAPI呼び出し', 'ネットワーク異常', 'アプリケーション脆弱性'],
    correct: 3,
    explanation: 'GuardDutyは、マルウェア、異常なAPI呼び出し、ネットワーク異常を検出しますが、アプリケーション脆弱性の検出はInspectorの役割です。'
  },
  {
    id: 'security-16',
    category: 'セキュリティ',
    question: 'WAFで設定できないルールタイプはどれですか？',
    options: ['IP制限', '地理的制限', 'レート制限', 'データベースクエリ制限'],
    correct: 3,
    explanation: 'WAFは、IP制限、地理的制限、レート制限を設定できますが、データベースクエリの制限は対象外です。'
  },
  {
    id: 'security-17',
    category: 'セキュリティ',
    question: 'Shield Advancedで提供されない機能はどれですか？',
    options: ['24/7 DRTサポート', 'コスト保護', 'リアルタイム通知', 'アプリケーション監視'],
    correct: 3,
    explanation: 'Shield Advancedは、DRTサポート、コスト保護、リアルタイム通知を提供しますが、詳細なアプリケーション監視は含まれません。'
  },
  {
    id: 'security-18',
    category: 'セキュリティ',
    question: 'Macieで検出できないデータタイプはどれですか？',
    options: ['クレジットカード番号', 'SSN', 'パスポート番号', 'ログファイル'],
    correct: 3,
    explanation: 'Macieは、PII（個人識別情報）を検出しますが、一般的なログファイルの内容分析は対象外です。'
  },
  {
    id: 'security-19',
    category: 'セキュリティ',
    question: 'CloudHSMとKMSの主な違いはどれですか？',
    options: ['コスト', '専用ハードウェア', 'パフォーマンス', 'すべて正しい'],
    correct: 3,
    explanation: 'CloudHSMは専用ハードウェア、高パフォーマンス、高コストが特徴で、KMSはマルチテナント、標準パフォーマンス、低コストです。'
  },
  {
    id: 'security-20',
    category: 'セキュリティ',
    question: 'IAMロールの一時的な認証情報の最大有効期間はどれですか？',
    options: ['1時間', '12時間', '24時間', '36時間'],
    correct: 2,
    explanation: 'IAMロールの一時的な認証情報は、最大12時間（43,200秒）まで有効にできます。'
  },
  {
    id: 'security-21',
    category: 'セキュリティ',
    question: 'Secrets Managerの自動ローテーション機能で対応していないサービスはどれですか？',
    options: ['RDS', 'DocumentDB', 'Redshift', 'ElastiCache'],
    correct: 3,
    explanation: 'Secrets Managerは、RDS、DocumentDB、Redshiftの自動ローテーションをサポートしますが、ElastiCacheは対応していません。'
  },
  {
    id: 'security-22',
    category: 'セキュリティ',
    question: 'Certificate Managerで管理できない証明書タイプはどれですか？',
    options: ['ドメイン検証', '組織検証', '拡張検証', 'コード署名'],
    correct: 3,
    explanation: 'ACMは、ドメイン検証、組織検証、拡張検証証明書を管理できますが、コード署名証明書は対象外です。'
  },
  {
    id: 'security-23',
    category: 'セキュリティ',
    question: 'Security Hubで統合できないサービスはどれですか？',
    options: ['GuardDuty', 'Inspector', 'Macie', 'CloudFormation'],
    correct: 3,
    explanation: 'Security Hubは、セキュリティ関連サービス（GuardDuty、Inspector、Macie）を統合しますが、CloudFormationは対象外です。'
  },
  {
    id: 'security-24',
    category: 'セキュリティ',
    question: 'IAMのアクセスアナライザーで検出できない項目はどれですか？',
    options: ['外部アクセス', '未使用アクセス', 'パスワードポリシー', 'リソース共有'],
    correct: 2,
    explanation: 'IAMアクセスアナライザーは、外部アクセス、未使用アクセス、リソース共有を分析しますが、パスワードポリシーの分析は対象外です。'
  },
  {
    id: 'security-25',
    category: 'セキュリティ',
    question: 'CloudTrailのデータイベントで記録されない操作はどれですか？',
    options: ['S3オブジェクトアクセス', 'Lambda関数実行', 'DynamoDBアクセス', 'EC2インスタンス起動'],
    correct: 3,
    explanation: 'データイベントは、S3、Lambda、DynamoDBなどのデータレベルの操作を記録しますが、EC2インスタンス起動はマネジメントイベントです。'
  },
  {
    id: 'security-26',
    category: 'セキュリティ',
    question: 'KMSのキーローテーションの頻度はどれですか？',
    options: ['30日', '90日', '365日', '設定可能'],
    correct: 2,
    explanation: 'KMSの自動キーローテーションは、年1回（365日）の頻度で実行されます。'
  },
  {
    id: 'security-27',
    category: 'セキュリティ',
    question: 'GuardDutyの脅威インテリジェンスで使用されないソースはどれですか？',
    options: ['AWS Security', 'CrowdStrike', 'Proofpoint', 'Microsoft'],
    correct: 3,
    explanation: 'GuardDutyは、AWS Security、CrowdStrike、Proofpointなどの脅威インテリジェンスを使用しますが、Microsoftは含まれません。'
  },
  {
    id: 'security-28',
    category: 'セキュリティ',
    question: 'WAFのマネージドルールグループに含まれないカテゴリはどれですか？',
    options: ['Core Rule Set', 'Known Bad Inputs', 'SQL Injection', 'Email Protection'],
    correct: 3,
    explanation: 'WAFマネージドルールには、Core Rule Set、Known Bad Inputs、SQL Injectionなどがありますが、Email Protectionは含まれません。'
  },
  {
    id: 'security-29',
    category: 'セキュリティ',
    question: 'Inspectorの評価で使用されない基準はどれですか？',
    options: ['CVE', 'CIS Benchmarks', 'AWS Security Best Practices', 'GDPR Compliance'],
    correct: 3,
    explanation: 'InspectorはCVE、CIS Benchmarks、AWS Security Best Practicesを使用しますが、GDPR Complianceの評価は含まれません。'
  },
  {
    id: 'security-30',
    category: 'セキュリティ',
    question: 'Macieの機密データ検出で使用されない技術はどれですか？',
    options: ['機械学習', 'パターンマッチング', 'キーワード検索', 'ブロックチェーン'],
    correct: 3,
    explanation: 'Macieは、機械学習、パターンマッチング、キーワード検索を使用しますが、ブロックチェーン技術は使用されません。'
  },
  {
    id: 'security-31',
    category: 'セキュリティ',
    question: 'CloudHSMクラスターの最小ノード数はどれですか？',
    options: ['1個', '2個', '3個', '5個'],
    correct: 1,
    explanation: 'CloudHSMクラスターは、高可用性のために最低2個のHSMノードが必要です。'
  },
  {
    id: 'security-32',
    category: 'セキュリティ',
    question: 'IAMのサービスリンクロールで実行できない操作はどれですか？',
    options: ['作成', '削除', '編集', '複製'],
    correct: 2,
    explanation: 'サービスリンクロールは、AWSサービスによって管理されるため、ユーザーが直接編集することはできません。'
  },
  {
    id: 'security-33',
    category: 'セキュリティ',
    question: 'Secrets Managerの料金体系に含まれない要素はどれですか？',
    options: ['シークレット数', 'API呼び出し数', 'ストレージ容量', 'ローテーション回数'],
    correct: 2,
    explanation: 'Secrets Managerは、シークレット数とAPI呼び出し数で課金されますが、ストレージ容量やローテーション回数は課金対象外です。'
  },
  {
    id: 'security-34',
    category: 'セキュリティ',
    question: 'Certificate Managerの証明書で設定できない項目はどれですか？',
    options: ['ドメイン名', '有効期間', 'キーアルゴリズム', 'タグ'],
    correct: 1,
    explanation: 'ACMの証明書は、有効期間が自動的に設定され（通常13ヶ月）、ユーザーが変更することはできません。'
  },
  {
    id: 'security-35',
    category: 'セキュリティ',
    question: 'Security Hubのセキュリティ標準に含まれないものはどれですか？',
    options: ['AWS Foundational Security Standard', 'CIS AWS Foundations Benchmark', 'PCI DSS', 'ISO 27001'],
    correct: 3,
    explanation: 'Security HubはAWS Foundational、CIS、PCI DSSをサポートしますが、ISO 27001は含まれません。'
  },
  {
    id: 'security-36',
    category: 'セキュリティ',
    question: 'IAMのパスワードポリシーで設定できない項目はどれですか？',
    options: ['最小文字数', '文字種類要求', '有効期間', '生体認証'],
    correct: 3,
    explanation: 'IAMパスワードポリシーでは、文字数、文字種類、有効期間を設定できますが、生体認証は設定できません。'
  },
  {
    id: 'security-37',
    category: 'セキュリティ',
    question: 'CloudTrailのインサイトイベントで検出される異常に含まれないものはどれですか？',
    options: ['API呼び出し急増', '異常なエラー率', '新しいユーザー活動', 'データ転送量異常'],
    correct: 3,
    explanation: 'CloudTrailインサイトは、API呼び出しパターンの異常を検出しますが、データ転送量の異常は対象外です。'
  },
  {
    id: 'security-38',
    category: 'セキュリティ',
    question: 'KMSのキー使用許可で設定できない操作はどれですか？',
    options: ['Encrypt', 'Decrypt', 'GenerateDataKey', 'CreateUser'],
    correct: 3,
    explanation: 'KMSキー使用許可では、暗号化関連操作を設定できますが、IAMユーザー作成などの操作は含まれません。'
  },
  {
    id: 'security-39',
    category: 'セキュリティ',
    question: 'GuardDutyの検出結果の重要度レベルに含まれないものはどれですか？',
    options: ['Low', 'Medium', 'High', 'Critical'],
    correct: 3,
    explanation: 'GuardDutyの重要度レベルは、Low（1.0-3.9）、Medium（4.0-6.9）、High（7.0-8.9）の3段階です。'
  },
  {
    id: 'security-40',
    category: 'セキュリティ',
    question: 'WAFのWebACLで設定できないアクションはどれですか？',
    options: ['Allow', 'Block', 'Count', 'Redirect'],
    correct: 3,
    explanation: 'WAFのWebACLでは、Allow、Block、Countアクションを設定できますが、Redirectアクションは直接設定できません。'
  },
  {
    id: 'security-41',
    category: 'セキュリティ',
    question: 'Shield Standardで保護されないリソースはどれですか？',
    options: ['CloudFront', 'Route 53', 'ELB', 'EC2'],
    correct: 3,
    explanation: 'Shield Standardは、CloudFront、Route 53、ELBを自動的に保護しますが、EC2インスタンスの直接保護は含まれません。'
  },
  {
    id: 'security-42',
    category: 'セキュリティ',
    question: 'Macieのデータ識別子で検出できない情報タイプはどれですか？',
    options: ['クレジットカード番号', '銀行口座番号', 'パスポート番号', 'ソースコード'],
    correct: 3,
    explanation: 'Macieは、PII（個人識別情報）や金融情報を検出しますが、一般的なソースコードの検出は対象外です。'
  },
  {
    id: 'security-43',
    category: 'セキュリティ',
    question: 'CloudHSMで使用できない暗号化アルゴリズムはどれですか？',
    options: ['AES', 'RSA', 'ECC', 'MD5'],
    correct: 3,
    explanation: 'CloudHSMは、AES、RSA、ECCなどの強力な暗号化アルゴリズムをサポートしますが、MD5は安全でないため推奨されません。'
  },
  {
    id: 'security-44',
    category: 'セキュリティ',
    question: 'IAMのアクセスキーで設定できない項目はどれですか？',
    options: ['有効期限', 'アクセス許可', 'ローテーション', '自動削除'],
    correct: 0,
    explanation: 'IAMアクセスキーには有効期限を直接設定することはできません。定期的なローテーションが推奨されます。'
  },
  {
    id: 'security-45',
    category: 'セキュリティ',
    question: 'Secrets Managerで管理できないシークレットタイプはどれですか？',
    options: ['データベース認証情報', 'APIキー', 'OAuth トークン', 'SSH キー'],
    correct: 3,
    explanation: 'Secrets Managerは、データベース認証情報、APIキー、OAuthトークンを管理できますが、SSHキーの管理は対象外です。'
  },
  {
    id: 'security-46',
    category: 'セキュリティ',
    question: 'Certificate Managerの証明書検証で使用されない方法はどれですか？',
    options: ['DNS検証', 'Email検証', 'HTTP検証', 'SMS検証'],
    correct: 3,
    explanation: 'ACMは、DNS検証とEmail検証をサポートしますが、HTTP検証やSMS検証は使用されません。'
  },
  {
    id: 'security-47',
    category: 'セキュリティ',
    question: 'Security Hubのカスタムインサイトで使用できない集計方法はどれですか？',
    options: ['COUNT', 'AVERAGE', 'SUM', 'MEDIAN'],
    correct: 3,
    explanation: 'Security Hubのカスタムインサイトでは、COUNT、AVERAGE、SUMを使用できますが、MEDIANは使用できません。'
  },
  {
    id: 'security-48',
    category: 'セキュリティ',
    question: 'IAMのクロスアカウントアクセスで使用されない方法はどれですか？',
    options: ['IAMロール', 'リソースベースポリシー', 'フェデレーション', 'VPC Peering'],
    correct: 3,
    explanation: 'クロスアカウントアクセスには、IAMロール、リソースベースポリシー、フェデレーションを使用しますが、VPC Peeringは認証方法ではありません。'
  },
  {
    id: 'security-49',
    category: 'セキュリティ',
    question: 'CloudTrailのログ配信で使用できない宛先はどれですか？',
    options: ['S3', 'CloudWatch Logs', 'EventBridge', 'DynamoDB'],
    correct: 3,
    explanation: 'CloudTrailは、S3、CloudWatch Logs、EventBridgeにログを配信できますが、DynamoDBへの直接配信はできません。'
  },
  {
    id: 'security-50',
    category: 'セキュリティ',
    question: 'KMSのエンベロープ暗号化で使用されないキータイプはどれですか？',
    options: ['データキー', 'マスターキー', 'プレーンテキストキー', 'ルートキー'],
    correct: 3,
    explanation: 'エンベロープ暗号化では、データキー、マスターキー、プレーンテキストキーを使用しますが、ルートキーという概念は使用されません。'
  }
]

export default securityQuestions
