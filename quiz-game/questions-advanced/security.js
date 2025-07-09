// AWS Solution Architect Professional 上級編 - セキュリティ問題

const advancedSecurityQuestions = [
  {
    id: 'adv-sec-001',
    category: 'セキュリティ',
    question: `大手金融機関が、ゼロトラストセキュリティモデルを採用したクラウドファーストアーキテクチャをAWSで構築しています。このシステムには以下の厳格なセキュリティ要件があります：

- ユーザー数：従業員50,000人、顧客500万人
- アクセス制御：最小権限の原則、動的権限付与
- 認証：多要素認証、生体認証、リスクベース認証
- 監査要件：すべての操作の完全な監査ログ
- 規制対応：SOX法、PCI DSS、GDPR、FFIEC準拠
- データ分類：機密度レベル別の暗号化・アクセス制御
- 脅威検知：リアルタイム異常検知、自動対応
- インシデント対応：15分以内の初動対応
- 地理的制限：国別データ主権、アクセス制限
- 統合要件：既存のActive Directory、SIEM連携
- 可用性：セキュリティ機能の99.99%可用性

この包括的なゼロトラストセキュリティ要件を満たす最適なアーキテクチャはどれですか？`,
    options: [
      'AWS IAM Identity Center + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + AWS Config + AWS KMS + AWS Secrets Manager',
      'AWS Directory Service + AWS WAF + AWS CloudHSM + Amazon Inspector + AWS Systems Manager + AWS Certificate Manager + Amazon Macie',
      'AWS Single Sign-On + AWS Shield + AWS Firewall Manager + AWS Detective + AWS Audit Manager + AWS PrivateLink + AWS Resource Access Manager',
      'AWS Verified Access + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + Amazon Detective + AWS KMS + AWS Certificate Manager'
    ],
    correct: 3,
    explanation: `正解は「AWS Verified Access + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + Amazon Detective + AWS KMS + AWS Certificate Manager」です。

この選択肢が最適な理由：

**ゼロトラストアーキテクチャへの対応：**
1. **AWS Verified Access**: 
   - VPNレスアクセス制御
   - デバイス・ユーザー・アプリケーションの継続的検証
   - 動的ポリシー適用
   - 最小権限アクセスの実現
2. **Amazon Cognito**: 
   - 500万顧客の認証管理
   - MFA、生体認証サポート
   - リスクベース認証
   - SAML/OIDC統合

**包括的セキュリティ監視：**
1. **Amazon GuardDuty**: 
   - 機械学習ベースの脅威検知
   - リアルタイム異常検知
   - 自動インシデント対応
2. **AWS Security Hub**: 
   - 統合セキュリティダッシュボード
   - コンプライアンス状況の可視化
   - 自動修復アクション
3. **Amazon Detective**: 
   - セキュリティインシデントの詳細分析
   - 根本原因分析
   - 15分以内の初動対応支援

**監査・コンプライアンス：**
1. **AWS CloudTrail**: 
   - すべてのAPI呼び出しの記録
   - 改ざん防止ログ
   - リアルタイム監視
2. **AWS KMS**: 
   - データ分類別の暗号化キー管理
   - 細かい権限制御
   - 監査ログ統合

**他の選択肢の問題点：**
- **選択肢A**: IAM Identity Centerは従来型、ゼロトラストに最適化されていない
- **選択肢B**: Directory Serviceは従来のAD拡張、ゼロトラスト要件に不十分
- **選択肢C**: Single Sign-Onは廃止予定、包括的セキュリティ機能不足

**ゼロトラストの特別な利点：**
1. **継続的検証**: 
   - すべてのアクセスを検証
   - デバイス・ユーザー・アプリケーションの信頼性評価
   - 動的リスク評価
2. **最小権限**: 
   - Just-In-Time アクセス
   - 動的権限付与
   - セッションベース制御
3. **統合セキュリティ**: 
   - 既存SIEM連携
   - Active Directory統合
   - 統一セキュリティポリシー

**規制対応の詳細：**
- **SOX法**: 完全な監査ログと内部統制
- **PCI DSS**: カード情報の暗号化と分離
- **GDPR**: データ主権とプライバシー保護
- **FFIEC**: 金融機関向けセキュリティ要件

**高可用性・災害復旧：**
- マルチリージョン展開
- 自動フェイルオーバー
- 99.99%可用性の実現`
  },

  {
    id: 'adv-sec-002',
    category: 'セキュリティ',
    question: `大手ヘルスケア企業が、患者データを扱う医療情報システムをAWSで構築しています。このシステムには以下の厳格なセキュリティ・プライバシー要件があります：

- 患者データ：1億人以上の医療記録
- 規制要件：HIPAA、GDPR、各国医療データ保護法準拠
- データ分類：PHI（個人健康情報）の厳格な管理
- アクセス制御：医師、看護師、研究者の役割別制御
- 暗号化：保存時・転送時・使用時の暗号化
- 監査：すべてのPHIアクセスの完全な監査証跡
- 匿名化：研究用データの自動匿名化
- 地域制限：国境を越えないデータ保存
- インシデント対応：データ漏洩時の72時間以内報告
- 統合要件：既存の病院システム（HL7 FHIR）
- 可用性：医療システムの24時間365日稼働
- バックアップ：災害時の迅速なデータ復旧

この医療データの厳格な要件を満たす最適なセキュリティアーキテクチャはどれですか？`,
    options: [
      'AWS HealthLake + Amazon Comprehend Medical + AWS KMS + AWS CloudHSM + Amazon Macie + AWS Config + AWS CloudTrail + AWS Backup',
      'Amazon RDS + AWS Secrets Manager + AWS Certificate Manager + Amazon Inspector + AWS Security Hub + AWS Systems Manager + AWS DataSync',
      'Amazon DynamoDB + AWS IAM + AWS WAF + Amazon GuardDuty + AWS Shield + AWS Firewall Manager + AWS Resource Access Manager',
      'Amazon S3 + AWS Glue + Amazon SageMaker + AWS Lambda + Amazon API Gateway + AWS Cognito + Amazon CloudWatch'
    ],
    correct: 0,
    explanation: `正解は「AWS HealthLake + Amazon Comprehend Medical + AWS KMS + AWS CloudHSM + Amazon Macie + AWS Config + AWS CloudTrail + AWS Backup」です。

この選択肢が最適な理由：

**医療データ特化への対応：**
1. **AWS HealthLake**: 
   - HIPAA準拠の医療データレイク
   - HL7 FHIR標準サポート
   - 1億人以上の医療記録管理
   - 既存病院システムとの統合
2. **Amazon Comprehend Medical**: 
   - 医療テキストの自動分析
   - PHI（個人健康情報）の自動検出
   - 医療用語の正確な理解

**最高レベルの暗号化：**
1. **AWS CloudHSM**: 
   - FIPS 140-2 Level 3準拠
   - 専用ハードウェアセキュリティモジュール
   - 使用時暗号化の実現
   - 医療グレードの暗号化
2. **AWS KMS**: 
   - データ分類別の暗号化キー管理
   - 細かいアクセス制御
   - 監査ログ統合

**PHI保護・プライバシー対応：**
1. **Amazon Macie**: 
   - PHIの自動検出・分類
   - 機械学習による異常アクセス検知
   - データ漏洩リスクの評価
   - 自動匿名化支援
2. **AWS Config**: 
   - コンプライアンス状況の継続監視
   - HIPAA設定の自動チェック
   - 設定変更の追跡

**監査・コンプライアンス：**
1. **AWS CloudTrail**: 
   - すべてのPHIアクセスの記録
   - 改ざん防止ログ
   - 72時間以内報告の支援
2. **AWS Backup**: 
   - HIPAA準拠のバックアップ
   - 暗号化バックアップ
   - 迅速な災害復旧

**他の選択肢の問題点：**
- **選択肢B**: 医療データ特化機能なし、HIPAA最適化不十分
- **選択肢C**: 医療業界要件に特化していない、PHI保護機能不足
- **選択肢D**: セキュリティ機能が基本的、医療規制対応不十分

**医療業界特化の利点：**
1. **HIPAA準拠**: 
   - BAA（Business Associate Agreement）対応
   - 医療データの適切な取り扱い
   - 規制要件の自動チェック
2. **HL7 FHIR統合**: 
   - 標準的な医療データ交換
   - 既存システムとの互換性
   - 相互運用性の確保
3. **医療AI**: 
   - 医療用語の正確な理解
   - 診断支援機能
   - 研究データの自動匿名化

**地域制限・データ主権：**
- リージョン別データ保存
- 国境を越えないデータ処理
- GDPR等の地域規制対応

**高可用性・災害復旧：**
- 24時間365日稼働保証
- 自動バックアップ
- 迅速な災害復旧
- 医療システムの継続性確保`
  },

  {
    id: 'adv-sec-003',
    category: 'セキュリティ',
    question: `大手政府機関が、機密情報を扱う国家安全保障システムをAWSで構築しています。このシステムには以下の最高レベルのセキュリティ要件があります：

- 機密レベル：Top Secret、Secret、Confidential、Unclassified
- 認証：多層認証、生体認証、スマートカード認証
- アクセス制御：Need-to-Know原則、コンパートメント化
- 暗号化：NSA Suite B暗号、量子耐性暗号の準備
- 監査：すべての操作の完全な監査証跡、改ざん防止
- 物理セキュリティ：専用ハードウェア、地理的分離
- ネットワーク分離：機密レベル別の完全分離
- インシデント対応：即座の脅威対応、自動隔離
- 規制要件：FedRAMP High、FISMA、NIST準拠
- 可用性：国家安全保障の24時間365日稼働
- 災害復旧：地理的に分散した冗長化
- サプライチェーン：信頼できるコンポーネントのみ使用

この国家安全保障レベルの要件を満たす最適なセキュリティアーキテクチャはどれですか？`,
    options: [
      'AWS GovCloud + AWS CloudHSM + AWS Certificate Manager + Amazon Inspector + AWS Config + AWS CloudTrail + AWS KMS + AWS Secrets Manager',
      'AWS GovCloud + AWS CloudHSM + AWS Private CA + Amazon GuardDuty + AWS Security Hub + AWS CloudTrail + AWS Nitro Enclaves + AWS Key Management Service',
      'AWS Commercial + AWS WAF + AWS Shield + Amazon Macie + AWS Systems Manager + AWS Backup + AWS DataSync + Amazon S3',
      'AWS Outposts + AWS Direct Connect + AWS Site-to-Site VPN + AWS Client VPN + AWS PrivateLink + AWS Transit Gateway + Route 53 Resolver'
    ],
    correct: 1,
    explanation: `正解は「AWS GovCloud + AWS CloudHSM + AWS Private CA + Amazon GuardDuty + AWS Security Hub + AWS CloudTrail + AWS Nitro Enclaves + AWS Key Management Service」です。

この選択肢が最適な理由：

**政府・国家安全保障要件への対応：**
1. **AWS GovCloud**: 
   - FedRAMP High認証取得
   - 米国政府専用クラウド環境
   - 物理的・論理的分離
   - セキュリティクリアランス保持者のみ運用
2. **AWS Nitro Enclaves**: 
   - 機密データの完全分離実行環境
   - ハードウェアレベルの分離
   - 量子耐性暗号の実装準備

**最高レベルの暗号化：**
1. **AWS CloudHSM**: 
   - FIPS 140-2 Level 3準拠
   - NSA Suite B暗号サポート
   - 専用ハードウェアセキュリティモジュール
   - 量子耐性暗号への移行準備
2. **AWS Private CA**: 
   - 政府専用認証局
   - 階層的PKI構造
   - スマートカード認証統合

**包括的脅威検知・対応：**
1. **Amazon GuardDuty**: 
   - 機械学習ベースの脅威検知
   - 国家レベルの脅威インテリジェンス
   - 自動隔離・対応機能
2. **AWS Security Hub**: 
   - 統合セキュリティ管理
   - NIST準拠チェック
   - 自動コンプライアンス監視

**監査・コンプライアンス：**
1. **AWS CloudTrail**: 
   - 改ざん防止監査ログ
   - すべての操作の完全記録
   - リアルタイム監視
2. **機密レベル別管理**: 
   - コンパートメント化されたアクセス制御
   - Need-to-Know原則の実装

**他の選択肢の問題点：**
- **選択肢A**: Certificate Managerは政府要件に不十分、Private CAが必要
- **選択肢C**: Commercial環境は政府機密情報に不適切
- **選択肢D**: ネットワーク機能のみ、包括的セキュリティ不足

**国家安全保障特化の利点：**
1. **物理セキュリティ**: 
   - 専用データセンター
   - セキュリティクリアランス保持者のみアクセス
   - 地理的分離による冗長化
2. **コンプライアンス**: 
   - FedRAMP High自動準拠
   - FISMA要件の継続的監視
   - NIST フレームワーク実装
3. **サプライチェーン**: 
   - 信頼できるコンポーネントのみ
   - ハードウェア・ソフトウェアの検証
   - 国産技術の優先使用

**高度な分離・保護：**
1. **ネットワーク分離**: 
   - 機密レベル別の完全分離
   - エアギャップ環境の実現
   - 横展開攻撃の防止
2. **データ保護**: 
   - 機密レベル別の暗号化
   - アクセス制御の階層化
   - データ漏洩の完全防止

**災害復旧・事業継続：**
- 地理的に分散した冗長化
- 国家安全保障の継続性確保
- 自動フェイルオーバー機能`
  }
]

module.exports = advancedSecurityQuestions
