// AWS Solution Architect Professional 上級編 - 管理・ガバナンス問題

const advancedManagementQuestions = [
  {
    id: 'adv-mgmt-001',
    category: '管理・ガバナンス',
    question: `大手企業が、1000以上のAWSアカウントを持つマルチアカウント環境のガバナンス強化を実施しています。以下の要件があります：

1. 統一されたセキュリティポリシーの適用
2. コンプライアンス要件の自動監査
3. コスト管理と配賦の自動化
4. リソースの標準化とベストプラクティス適用
5. 組織変更に対応した柔軟なアカウント管理
6. 統合ログ管理と監視
7. 災害復旧とビジネス継続性

この要件を満たす最適なガバナンスアーキテクチャはどれですか？`,
    options: [
      'Control Tower + Organizations + Config + CloudTrail + Security Hub + GuardDuty + Macie + Systems Manager + Trusted Advisor + Cost Explorer + Budgetsを使用し、統合ガバナンス基盤を構築する',
      'IAM + CloudWatch + CloudFormation + S3 + Lambda + SNSを使用し、基本的ガバナンス環境を構築する',
      'Terraform + Ansible + Jenkins + GitLab + Prometheusを使用し、オープンソースガバナンス環境を構築する',
      '手動プロセス + Excel + PowerBI + メール通知を使用し、従来型ガバナンス環境を構築する'
    ],
    correct: 0,
    explanation: `大規模マルチアカウント環境には、Control Tower + Organizations + Config + CloudTrail + Security Hub + GuardDuty + Macie + Systems Manager + Trusted Advisor + Cost Explorer + Budgetsの統合ガバナンス基盤が最適です。

理由：
1. **Control Tower**: 1000アカウントの統一ガバナンス
2. **Organizations**: 組織構造に応じたアカウント管理
3. **Config**: コンプライアンス自動監査
4. **CloudTrail**: 統合ログ管理
5. **Security Hub**: セキュリティポリシー統一適用
6. **Systems Manager**: リソース標準化
7. **Cost Explorer + Budgets**: コスト管理自動化`
  },
  {
    id: 'adv-mgmt-002',
    category: '管理・ガバナンス',
    question:
      '大手金融機関が、厳格な規制要件下でのクラウドガバナンスを実装しています。SOX法、PCI DSS、Basel III等への準拠、完全な監査証跡、リスク管理の自動化が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Config + CloudTrail + Security Hub + Macie + GuardDuty + Inspector + Systems Manager + Trusted Advisor + Well-Architected Tool + Audit Managerを使用する',
      'CloudWatch + Lambda + SNS + S3 + IAMを使用する',
      'Terraform + Vault + Consul + Prometheusを使用する',
      '手動監査 + Excel + PowerPoint + メール報告を使用する'
    ],
    correct: 0,
    explanation:
      '金融機関の規制準拠ガバナンスには、Config + CloudTrail + Security Hub + Macie + GuardDuty + Inspector + Systems Manager + Trusted Advisor + Well-Architected Tool + Audit Managerが最適です。完全な監査証跡、自動コンプライアンスチェック、リスク管理を実現できます。'
  },
  {
    id: 'adv-mgmt-003',
    category: '管理・ガバナンス',
    question:
      '大手製造業が、グローバル工場のITガバナンスを統一しています。世界50拠点、異なる規制要件、セキュリティ標準の統一、運用効率化が課題です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Organizations + Control Tower + Config + Systems Manager + Resource Groups + Tag Editor + CloudFormation StackSets + Service Catalogを使用する',
      'CloudWatch + Lambda + S3 + IAM + VPCを使用する',
      'Kubernetes + Helm + Prometheus + Grafana + Fluentdを使用する',
      '各拠点独立管理 + 手動レポート + 四半期レビューを使用する'
    ],
    correct: 0,
    explanation:
      'グローバル製造業のガバナンスには、Organizations + Control Tower + Config + Systems Manager + Resource Groups + Tag Editor + CloudFormation StackSets + Service Catalogが最適です。統一ポリシー適用、標準化、効率的な運用管理を実現できます。'
  },
  {
    id: 'adv-mgmt-004',
    category: '管理・ガバナンス',
    question:
      '大手ヘルスケア企業が、HIPAA準拠のガバナンス体制を構築しています。患者データ保護、アクセス制御、監査要件、インシデント対応の自動化が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Macie + GuardDuty + Config + CloudTrail + Security Hub + IAM Access Analyzer + Systems Manager + Incident Managerを使用する',
      'IAM + CloudWatch + S3 + Lambda + SNSを使用する',
      'Active Directory + SIEM + DLP + Firewallを使用する',
      '手動監査 + アクセスログ確認 + 月次レポートを使用する'
    ],
    correct: 0,
    explanation:
      'HIPAA準拠ガバナンスには、Macie + GuardDuty + Config + CloudTrail + Security Hub + IAM Access Analyzer + Systems Manager + Incident Managerが最適です。PHI保護、自動監査、インシデント対応を統合的に管理できます。'
  },
  {
    id: 'adv-mgmt-005',
    category: '管理・ガバナンス',
    question:
      '大手小売チェーンが、オムニチャネル戦略のガバナンス体制を構築しています。店舗・EC・モバイルの統合管理、データガバナンス、セキュリティ統制が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Organizations + Config + CloudTrail + Security Hub + Resource Groups + Systems Manager + Service Catalog + Well-Architected Toolを使用する',
      'CloudWatch + Lambda + DynamoDB + S3 + API Gatewayを使用する',
      'Kubernetes + Istio + Prometheus + Jaeger + Fluentdを使用する',
      '各チャネル独立管理 + 手動統合 + 週次会議を使用する'
    ],
    correct: 0,
    explanation:
      'オムニチャネル小売ガバナンスには、Organizations + Config + CloudTrail + Security Hub + Resource Groups + Systems Manager + Service Catalog + Well-Architected Toolが最適です。チャネル横断の統合管理、標準化、ベストプラクティス適用を実現できます。'
  },
  {
    id: 'adv-mgmt-006',
    category: '管理・ガバナンス',
    question:
      '大手メディア企業が、コンテンツ管理のガバナンス体制を構築しています。著作権管理、コンテンツ品質、配信統制、収益管理の自動化が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Macie + Rekognition + Config + CloudTrail + Systems Manager + Resource Groups + Cost Explorer + Budgetsを使用する',
      'S3 + Lambda + CloudFront + API Gateway + DynamoDBを使用する',
      'Kubernetes + Docker + Prometheus + Grafana + ELKを使用する',
      '手動コンテンツ審査 + Excel管理 + 月次レポートを使用する'
    ],
    correct: 0,
    explanation:
      'メディアガバナンスには、Macie + Rekognition + Config + CloudTrail + Systems Manager + Resource Groups + Cost Explorer + Budgetsが最適です。コンテンツ自動分類、著作権保護、配信統制、収益管理を統合的に実現できます。'
  },
  {
    id: 'adv-mgmt-007',
    category: '管理・ガバナンス',
    question:
      '大手ゲーム会社が、グローバルゲームサービスのガバナンス体制を構築しています。プレイヤーデータ保護、ゲーム品質管理、収益最適化、コンプライアンス対応が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Macie + Config + CloudTrail + Security Hub + Systems Manager + Cost Explorer + Trusted Advisor + Well-Architected Toolを使用する',
      'GameLift + DynamoDB + Lambda + API Gateway + CloudWatchを使用する',
      'Kubernetes + Prometheus + Grafana + Jaeger + Fluentdを使用する',
      '手動プレイヤー管理 + ゲーム品質チェック + 月次分析を使用する'
    ],
    correct: 0,
    explanation:
      'ゲームサービスガバナンスには、Macie + Config + CloudTrail + Security Hub + Systems Manager + Cost Explorer + Trusted Advisor + Well-Architected Toolが最適です。プレイヤーデータ保護、品質管理、コスト最適化を統合的に管理できます。'
  },
  {
    id: 'adv-mgmt-008',
    category: '管理・ガバナンス',
    question:
      '大手物流会社が、配送ネットワークのガバナンス体制を構築しています。車両管理、ドライバー管理、配送品質、安全管理の統制が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'IoT Device Management + Config + CloudTrail + Systems Manager + Resource Groups + CloudWatch + Trusted Advisorを使用する',
      'EC2 + RDS + Lambda + API Gateway + S3を使用する',
      'Kubernetes + Prometheus + Grafana + Fluentd + Jaegerを使用する',
      '手動車両点検 + ドライバー管理台帳 + 紙ベース報告を使用する'
    ],
    correct: 0,
    explanation:
      '物流ガバナンスには、IoT Device Management + Config + CloudTrail + Systems Manager + Resource Groups + CloudWatch + Trusted Advisorが最適です。車両IoT管理、配送品質監視、安全管理を統合的に実現できます。'
  },
  {
    id: 'adv-mgmt-009',
    category: '管理・ガバナンス',
    question:
      '大手エネルギー会社が、スマートグリッドのガバナンス体制を構築しています。電力品質管理、設備管理、環境規制対応、安全管理の統制が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'IoT Device Management + Config + CloudTrail + Systems Manager + GuardDuty + Macie + Trusted Advisor + Well-Architected Toolを使用する',
      'EC2 + RDS + CloudWatch + Lambda + S3を使用する',
      'SCADA + HMI + Historian + OPC UAを使用する',
      '手動設備点検 + 紙ベース記録 + 四半期報告を使用する'
    ],
    correct: 0,
    explanation:
      'エネルギーガバナンスには、IoT Device Management + Config + CloudTrail + Systems Manager + GuardDuty + Macie + Trusted Advisor + Well-Architected Toolが最適です。電力設備管理、品質監視、規制対応を統合的に管理できます。'
  },
  {
    id: 'adv-mgmt-010',
    category: '管理・ガバナンス',
    question:
      '大手政府機関が、国家レベルのITガバナンス体制を構築しています。複数省庁の統合管理、セキュリティ統制、透明性確保、国民サービス品質管理が必要です。最適なガバナンスアーキテクチャはどれですか？',
    options: [
      'Control Tower + Organizations + Config + CloudTrail + Security Hub + GuardDuty + Macie + Systems Manager + Audit Manager + Well-Architected Toolを使用する',
      'IAM + CloudWatch + S3 + Lambda + API Gatewayを使用する',
      'Kubernetes + Prometheus + Grafana + Vault + Consulを使用する',
      '各省庁独立管理 + 手動統合 + 年次監査を使用する'
    ],
    correct: 0,
    explanation:
      '政府ITガバナンスには、Control Tower + Organizations + Config + CloudTrail + Security Hub + GuardDuty + Macie + Systems Manager + Audit Manager + Well-Architected Toolが最適です。省庁統合管理、セキュリティ統制、透明性確保を実現できます。'
  },

  // 複数選択問題
  {
    id: 'adv-mgmt-multi-001',
    category: '管理・ガバナンス',
    question: `多国籍企業が、グローバル展開する子会社のAWS環境を統合管理しています。以下の要件があります：

**要件：**
- 各国の規制要件への個別対応
- 統合請求と予算管理
- セキュリティポリシーの統一
- リソース使用量の可視化
- ガバナンス統制の自動化
- 監査証跡の一元管理

このグローバルガバナンスに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Organizations - マルチアカウント統合管理',
      'AWS Control Tower - ガバナンス自動化',
      'AWS Cost and Billing - 統合請求・予算管理',
      'AWS Resource Groups - リソース管理・タグ付け',
      'AWS Service Catalog - 承認済みサービス管理',
      'AWS CloudFormation - インフラ標準化'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Organizations**
- 複数アカウントの階層管理
- 各国子会社の個別アカウント管理
- 統合請求による一元管理
- サービス制御ポリシー（SCP）による統制
- 組織単位（OU）による柔軟な管理

**2. AWS Control Tower**
- ガバナンス統制の自動化
- セキュリティベースラインの強制
- コンプライアンス監視の自動化
- 設定ドリフトの検知と修正
- 統一されたセキュリティポリシー

**3. AWS Cost and Billing**
- 統合請求による一元管理
- 部門別・プロジェクト別コスト配分
- 予算アラートと使用量監視
- コスト最適化の推奨
- 詳細な使用量レポート

**他の選択肢について：**
- **Resource Groups**: リソース管理には有用だが、ガバナンスの主要機能ではない
- **Service Catalog**: サービス管理には重要だが、統合管理の主要機能ではない
- **CloudFormation**: 標準化には重要だが、ガバナンス統制の主要機能ではない`
  },

  {
    id: 'adv-mgmt-multi-002',
    category: '管理・ガバナンス',
    question: `金融機関が、厳格な規制要件を満たすクラウドガバナンス体制を構築しています。以下の要件があります：

**要件：**
- 金融庁規制への完全準拠
- 設定変更の完全な監査証跡
- セキュリティ統制の自動化
- リスク管理の可視化
- インシデント対応の標準化
- 継続的なコンプライアンス監視

この規制準拠ガバナンスに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'AWS Config - 設定管理・コンプライアンス監視',
      'AWS Audit Manager - 監査・コンプライアンス自動化',
      'AWS CloudTrail - 完全な監査ログ',
      'AWS Security Hub - セキュリティ統合管理',
      'AWS Well-Architected Tool - アーキテクチャ評価',
      'AWS Trusted Advisor - 最適化推奨'
    ],
    correct: [1, 2],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. AWS Audit Manager**
- 金融規制への自動準拠評価
- 監査証拠の自動収集
- コンプライアンスレポートの自動生成
- 継続的な監査プロセス
- 規制要件のフレームワーク提供

**2. AWS CloudTrail**
- 全API呼び出しの完全な監査証跡
- 設定変更の詳細記録
- 改ざん防止機能
- 金融規制の監査要件対応
- 長期保存と検索機能

**他の選択肢について：**
- **Config**: 設定監視には重要だが、監査自動化の主要機能ではない
- **Security Hub**: セキュリティ統合には有用だが、監査証跡の主要機能ではない
- **Well-Architected Tool**: アーキテクチャ評価には有用だが、規制準拠の主要機能ではない
- **Trusted Advisor**: 最適化推奨には有用だが、コンプライアンス監視の主要機能ではない`
  },

  {
    id: 'adv-mgmt-multi-003',
    category: '管理・ガバナンス',
    question: `大手製造業が、DevOpsチームとセキュリティチームの協業によるクラウドガバナンスを実装しています。以下の要件があります：

**要件：**
- 開発速度とセキュリティのバランス
- 承認されたサービスの自動提供
- セルフサービス型インフラ管理
- セキュリティ要件の自動適用
- リソース使用量の最適化
- 標準化されたデプロイメント

このDevSecOpsガバナンスに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Service Catalog - 承認済みサービス管理',
      'AWS CloudFormation - インフラ自動化・標準化',
      'AWS Systems Manager - パラメータ管理・自動化',
      'AWS CodePipeline - CI/CDパイプライン',
      'AWS Secrets Manager - 機密情報管理',
      'Amazon Inspector - セキュリティ評価'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Service Catalog**
- 承認されたサービスの自動提供
- セルフサービス型インフラ管理
- セキュリティ要件の事前組み込み
- 標準化されたサービステンプレート
- ガバナンス統制の自動化

**2. AWS CloudFormation**
- インフラの標準化とコード化
- 一貫性のあるデプロイメント
- セキュリティ設定の自動適用
- 変更管理の自動化
- リソース管理の効率化

**3. AWS Systems Manager**
- パラメータとシークレットの統合管理
- 運用タスクの自動化
- パッチ管理の標準化
- セキュリティ設定の一元管理
- インベントリ管理と監視

**他の選択肢について：**
- **CodePipeline**: CI/CDには重要だが、ガバナンス管理の主要機能ではない
- **Secrets Manager**: 機密管理には重要だが、統合ガバナンスの主要機能ではない
- **Inspector**: セキュリティ評価には有用だが、ガバナンス自動化の主要機能ではない`
  }
]

module.exports = advancedManagementQuestions
