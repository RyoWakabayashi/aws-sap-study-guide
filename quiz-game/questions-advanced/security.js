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
- **AWS IAM Identity Center + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + AWS Config + AWS KMS + AWS Secrets Manager**: IAM Identity Centerは従来型、ゼロトラストに最適化されていない
- **AWS Directory Service + AWS WAF + AWS CloudHSM + Amazon Inspector + AWS Systems Manager + AWS Certificate Manager + Amazon Macie**: Directory Serviceは従来のAD拡張、ゼロトラスト要件に不十分
- **AWS Single Sign-On + AWS Shield + AWS Firewall Manager + AWS Detective + AWS Audit Manager + AWS PrivateLink + AWS Resource Access Manager**: Single Sign-Onは廃止予定、包括的セキュリティ機能不足

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
- **Amazon RDS + AWS Secrets Manager + AWS Certificate Manager + Amazon Inspector + AWS Security Hub + AWS Systems Manager + AWS DataSync**: 医療データ特化機能なし、HIPAA最適化不十分
- **Amazon DynamoDB + AWS IAM + AWS WAF + Amazon GuardDuty + AWS Shield + AWS Firewall Manager + AWS Resource Access Manager**: 医療業界要件に特化していない、PHI保護機能不足
- **Amazon S3 + AWS Glue + Amazon SageMaker + AWS Lambda + Amazon API Gateway + AWS Cognito + Amazon CloudWatch**: セキュリティ機能が基本的、医療規制対応不十分

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
- **AWS GovCloud + AWS CloudHSM + AWS Certificate Manager + Amazon Inspector + AWS Config + AWS CloudTrail + AWS KMS + AWS Secrets Manager**: Certificate Managerは政府要件に不十分、Private CAが必要
- **AWS Commercial + AWS WAF + AWS Shield + Amazon Macie + AWS Systems Manager + AWS Backup + AWS DataSync + Amazon S3**: Commercial環境は政府機密情報に不適切
- **AWS Outposts + AWS Direct Connect + AWS Site-to-Site VPN + AWS Client VPN + AWS PrivateLink + AWS Transit Gateway + Route 53 Resolver**: ネットワーク機能のみ、包括的セキュリティ不足

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
  },
  {
    id: 'adv-sec-004',
    category: 'セキュリティ',
    question: `大手金融機関が、オンラインバンキングシステムのセキュリティ強化を行っています。以下の要件があります：

1. 多要素認証（MFA）の強制実装
2. 不正アクセスのリアルタイム検知
3. PCI DSS、SOX法への準拠
4. 顧客データの完全な暗号化
5. 内部脅威の検知と防止
6. 金融取引の改ざん防止
7. 規制当局への監査レポート自動生成

この要件を満たすために、最も適切な金融業界向けセキュリティアーキテクチャはどれですか？`,
    options: [
      'Cognito + MFA + GuardDuty + Macie + CloudTrail + Config + KMS + Certificate Manager + Security Hubを使用し、包括的金融セキュリティを構築する',
      'IAM + WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backupを使用し、従来型金融セキュリティを構築する',
      'Active Directory + ADFS + SAML + LDAP + Kerberos + PKI + HSM + SIEMを使用し、オンプレミス統合金融セキュリティを構築する',
      'API Gateway + Lambda Authorizer + DynamoDB + S3 + CloudFront + Route 53 + ACMを使用し、サーバーレス金融セキュリティを構築する'
    ],
    correct: 0,
    explanation: `金融機関のオンラインバンキングには、Cognito + MFA + GuardDuty + Macie + CloudTrail + Config + KMS + Certificate Manager + Security Hubの組み合わせが最適です。

理由：
1. **Cognito + MFA**: 強力な多要素認証とユーザー管理
2. **GuardDuty**: 機械学習による不正アクセスのリアルタイム検知
3. **Macie**: 顧客データの自動分類と保護
4. **CloudTrail**: PCI DSS要件の完全な監査証跡
5. **Config**: SOX法準拠のための設定変更監視
6. **KMS**: 金融データの暗号化キー管理
7. **Security Hub**: 統合セキュリティダッシュボードと自動レポート

他の選択肢の問題点：
- **IAM + WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backup**を使用し、従来型金融セキュリティを構築する: 従来型アプローチは金融業界の高度な脅威検知に不十分
- **Active Directory + ADFS + SAML + LDAP + Kerberos + PKI + HSM + SIEM**を使用し、オンプレミス統合金融セキュリティを構築する: オンプレミス統合は運用負荷が高く、スケーラビリティに限界
- **API Gateway + Lambda Authorizer + DynamoDB + S3 + CloudFront + Route 53 + ACM**を使用し、サーバーレス金融セキュリティを構築する: サーバーレスのみでは金融業界の包括的セキュリティ要件に不十分`
  },
  {
    id: 'adv-sec-005',
    category: 'セキュリティ',
    question: `大手製薬会社が、創薬研究データのセキュリティ強化を行っています。以下の要件があります：

1. FDA 21 CFR Part 11への準拠
2. 研究データの完全性保証
3. 知的財産の保護
4. 研究者間でのセキュアなデータ共有
5. データアクセスの詳細な監査証跡
6. 地域別のデータ保護規制対応
7. サイバー攻撃からの研究データ保護

この要件を満たすために、最も適切な製薬業界向けセキュリティアーキテクチャはどれですか？`,
    options: [
      'S3 Object Lock + Macie + CloudTrail + KMS + Certificate Manager + GuardDuty + Config + Security Hubを使用し、GxP準拠セキュリティを構築する',
      'EFS + AWS Backup + IAM + VPC + Security Groups + NACLs + CloudWatch + Inspector を使用し、ファイルベースセキュリティを構築する',
      'DocumentDB + Encryption + VPC Endpoints + PrivateLink + WAF + Shield + Route 53を使用し、データベースセキュリティを構築する',
      'Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACM + WAFを使用し、サーバーレスセキュリティを構築する'
    ],
    correct: 0,
    explanation: `製薬会社の研究データセキュリティには、S3 Object Lock + Macie + CloudTrail + KMS + Certificate Manager + GuardDuty + Config + Security Hubの組み合わせが最適です。

理由：
1. **S3 Object Lock**: WORM（Write Once Read Many）でデータ改ざん防止
2. **Macie**: 機密研究データの自動分類と知的財産保護
3. **CloudTrail**: FDA 21 CFR Part 11要件の完全な監査証跡
4. **KMS**: 研究データの暗号化と鍵管理
5. **GuardDuty**: サイバー攻撃の検知と防御
6. **Config**: GxP準拠のための設定変更監視
7. **Security Hub**: 統合セキュリティ管理

他の選択肢の問題点：
- **EFS + AWS Backup + IAM + VPC + Security Groups + NACLs + CloudWatch + Inspector**を使用し、ファイルベースセキュリティを構築する: EFSはオブジェクトロック機能がなく、データ改ざん防止が困難
- **DocumentDB + Encryption + VPC Endpoints + PrivateLink + WAF + Shield + Route 53**を使用し、データベースセキュリティを構築する: DocumentDBのみでは製薬業界の包括的セキュリティ要件に不十分
- **Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACM + WAF**を使用し、サーバーレスセキュリティを構築する: サーバーレスは製薬業界の厳格なデータ整合性要件に不適切`
  },
  {
    id: 'adv-sec-006',
    category: 'セキュリティ',
    question: `大手病院グループが、電子カルテシステムのセキュリティ強化を行っています。以下の要件があります：

1. HIPAA、GDPR等の医療プライバシー規制準拠
2. 患者データの完全な暗号化
3. 医療従事者の役割ベースアクセス制御
4. 医療機器との安全な接続
5. データ漏洩の即座検知
6. 医療データの改ざん防止
7. 監査当局への自動レポート生成

この要件を満たすために、最も適切な医療業界向けセキュリティアーキテクチャはどれですか？`,
    options: [
      'Macie + GuardDuty + CloudTrail + KMS + IAM + Cognito + Config + Security Hub + PrivateLinkを使用し、HIPAA準拠セキュリティを構築する',
      'WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backupを使用し、従来型医療セキュリティを構築する',
      'Active Directory + SAML + LDAP + Certificate Authority + VPN + Firewall + SIEMを使用し、オンプレミス医療セキュリティを構築する',
      'API Gateway + Lambda + DynamoDB + S3 + CloudFront + Route 53 + ACMを使用し、サーバーレス医療セキュリティを構築する'
    ],
    correct: 0,
    explanation: `病院の電子カルテシステムには、Macie + GuardDuty + CloudTrail + KMS + IAM + Cognito + Config + Security Hub + PrivateLinkの組み合わせが最適です。

理由：
1. **Macie**: PHI（個人健康情報）の自動検出と保護
2. **GuardDuty**: 医療データへの不正アクセス検知
3. **CloudTrail**: HIPAA要件の完全な監査証跡
4. **KMS**: 患者データの暗号化管理
5. **IAM + Cognito**: 医療従事者の役割ベースアクセス制御
6. **Config**: HIPAA準拠設定の継続的監視
7. **PrivateLink**: 医療機器との安全な接続

他の選択肢の問題点：
- **WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backup**を使用し、従来型医療セキュリティを構築する: 従来型アプローチは医療業界の高度なプライバシー要件に不十分
- **Active Directory + SAML + LDAP + Certificate Authority + VPN + Firewall + SIEM**を使用し、オンプレミス医療セキュリティを構築する: オンプレミスは医療機関の運用負荷とコスト面で課題
- **Lambda + API Gateway + DynamoDB + S3 + CloudFront + Route 53 + ACM**を使用し、サーバーレス医療セキュリティを構築する: サーバーレスのみでは医療業界の包括的セキュリティ要件に不十分`
  },
  {
    id: 'adv-sec-007',
    category: 'セキュリティ',
    question: `大手政府機関が、機密情報システムのセキュリティ強化を行っています。以下の要件があります：

1. 最高機密レベルのデータ保護
2. 多層防御によるサイバー攻撃対策
3. 内部脅威の検知と防止
4. ゼロトラストアーキテクチャの実装
5. 国家安全保障に関わるデータの分離
6. 完全な監査証跡と証拠保全
7. 災害時の事業継続性

この要件を満たすために、最も適切な政府機関向けセキュリティアーキテクチャはどれですか？`,
    options: [
      'AWS GovCloud + CloudHSM + GuardDuty + Macie + CloudTrail + Config + Security Hub + PrivateLink + Direct Connectを使用し、政府機関特化セキュリティを構築する',
      'IAM + MFA + WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logsを使用し、標準的政府セキュリティを構築する',
      'Dedicated Hosts + Nitro Enclaves + KMS + Certificate Manager + Secrets Manager + Parameter Storeを使用し、専用環境セキュリティを構築する',
      'Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACMを使用し、サーバーレス政府セキュリティを構築する'
    ],
    correct: 0,
    explanation: `政府機関の機密情報システムには、AWS GovCloud + CloudHSM + GuardDuty + Macie + CloudTrail + Config + Security Hub + PrivateLink + Direct Connectの組み合わせが最適です。

理由：
1. **AWS GovCloud**: 政府機関専用の分離されたクラウド環境
2. **CloudHSM**: 最高機密データの暗号化キー管理
3. **GuardDuty**: 高度な脅威検知と内部脅威対策
4. **Macie**: 機密情報の自動分類と保護
5. **CloudTrail**: 完全な監査証跡と証拠保全
6. **Config**: セキュリティ設定の継続的監視
7. **PrivateLink + Direct Connect**: ゼロトラストネットワーク

他の選択肢の問題点：
- **IAM + MFA + WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs**を使用し、標準的政府セキュリティを構築する: 標準環境は政府機関の最高機密要件に不十分
- **Dedicated Hosts + Nitro Enclaves + KMS + Certificate Manager + Secrets Manager + Parameter Store**を使用し、専用環境セキュリティを構築する: 専用環境のみでは包括的セキュリティ管理が困難
- **Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACM**を使用し、サーバーレス政府セキュリティを構築する: サーバーレスは政府機関の厳格なセキュリティ要件に不適切`
  },
  {
    id: 'adv-sec-008',
    category: 'セキュリティ',
    question: `大手エネルギー会社が、重要インフラのサイバーセキュリティ強化を行っています。以下の要件があります：

1. 発電所制御システムの保護
2. 産業制御システム（ICS/SCADA）のセキュリティ
3. サイバー攻撃による停電防止
4. 重要インフラ保護規制への準拠
5. 物理セキュリティとサイバーセキュリティの統合
6. リアルタイム脅威検知と対応
7. 事業継続性の確保

この要件を満たすために、最も適切な重要インフラ向けセキュリティアーキテクチャはどれですか？`,
    options: [
      'IoT Device Defender + GuardDuty + Macie + CloudTrail + Config + Security Hub + PrivateLink + Direct Connect + AWS Outpostsを使用し、重要インフラセキュリティを構築する',
      'WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backupを使用し、従来型インフラセキュリティを構築する',
      'Firewall + IDS/IPS + SIEM + PKI + VPN + Network Segmentation + Air Gapを使用し、オンプレミスインフラセキュリティを構築する',
      'Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACMを使用し、サーバーレスインフラセキュリティを構築する'
    ],
    correct: 0,
    explanation: `重要インフラのサイバーセキュリティには、IoT Device Defender + GuardDuty + Macie + CloudTrail + Config + Security Hub + PrivateLink + Direct Connect + AWS Outpostsの組み合わせが最適です。

理由：
1. **IoT Device Defender**: 産業制御システムのデバイスセキュリティ
2. **GuardDuty**: 重要インフラへの高度な脅威検知
3. **Macie**: 重要インフラ情報の分類と保護
4. **CloudTrail**: 重要インフラ保護規制の監査証跡
5. **Config**: セキュリティ設定の継続的監視
6. **PrivateLink + Direct Connect**: 完全プライベート通信
7. **AWS Outposts**: オンプレミス制御システムとの統合

他の選択肢の問題点：
- **WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backup**を使用し、従来型インフラセキュリティを構築する: 従来型アプローチは産業制御システムの特殊要件に不十分
- **Firewall + IDS/IPS + SIEM + PKI + VPN + Network Segmentation + Air Gap**を使用し、オンプレミスインフラセキュリティを構築する: オンプレミスのみでは最新の脅威対策に限界
- **Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACM**を使用し、サーバーレスインフラセキュリティを構築する: サーバーレスは重要インフラの制御システムに不適切`
  },
  {
    id: 'adv-sec-009',
    category: 'セキュリティ',
    question: `大手航空会社が、航空管制システムのセキュリティ強化を行っています。以下の要件があります：

1. 航空安全に関わるシステムの保護
2. 国際航空規制（ICAO、FAA）への準拠
3. 航空機との通信セキュリティ
4. 空港システムとの安全な連携
5. サイバーテロからの防御
6. フライト情報の機密性保護
7. 緊急時の通信継続性

この要件を満たすために、最も適切な航空業界向けセキュリティアーキテクチャはどれですか？`,
    options: [
      'GuardDuty + Macie + CloudTrail + KMS + Certificate Manager + Config + Security Hub + PrivateLink + Direct Connect + CloudHSMを使用し、航空業界特化セキュリティを構築する',
      'WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backupを使用し、従来型航空セキュリティを構築する',
      'Firewall + IDS/IPS + SIEM + PKI + VPN + Network Segmentation + HSMを使用し、オンプレミス航空セキュリティを構築する',
      'API Gateway + Lambda + Cognito + DynamoDB + S3 + CloudFront + ACMを使用し、サーバーレス航空セキュリティを構築する'
    ],
    correct: 0,
    explanation: `航空管制システムのセキュリティには、GuardDuty + Macie + CloudTrail + KMS + Certificate Manager + Config + Security Hub + PrivateLink + Direct Connect + CloudHSMの組み合わせが最適です。

理由：
1. **GuardDuty**: 航空システムへの高度な脅威検知
2. **Macie**: フライト情報の機密性保護
3. **CloudTrail**: 航空規制要件の完全な監査証跡
4. **KMS + CloudHSM**: 航空機通信の暗号化管理
5. **Certificate Manager**: 空港システム間の安全な認証
6. **Config**: 航空規制準拠の継続的監視
7. **PrivateLink + Direct Connect**: 航空管制との専用通信

他の選択肢の問題点：
- **WAF + Shield + Inspector + Systems Manager + CloudWatch + VPC Flow Logs + AWS Backup**を使用し、従来型航空セキュリティを構築する: 従来型アプローチは航空業界の厳格な安全要件に不十分
- **Firewall + IDS/IPS + SIEM + PKI + VPN + Network Segmentation + HSM**を使用し、オンプレミス航空セキュリティを構築する: オンプレミスのみでは最新のサイバー脅威対策に限界
- **Lambda + API Gateway + Cognito + DynamoDB + S3 + CloudFront + ACM**を使用し、サーバーレス航空セキュリティを構築する: サーバーレスは航空管制システムの信頼性要件に不適切`
  },
  {
    id: 'adv-sec-010',
    category: 'セキュリティ',
    question: `大手防衛関連企業が、軍事システムのセキュリティ強化を行っています。以下の要件があります：

1. 最高機密軍事情報の保護
2. 多国間での機密情報共有
3. サイバー戦争からの防御
4. 軍事規格（MIL-STD）への準拠
5. 物理的・論理的分離の実装
6. 完全な証拠保全と監査証跡
7. 戦時下での通信継続性

この要件を満たすために、最も適切な防衛産業向けセキュリティアーキテクチャはどれですか？`,
    options: [
      'AWS Secret Region + CloudHSM + Nitro Enclaves + GuardDuty + Macie + CloudTrail + Config + Security Hub + Dedicated Hosts + PrivateLinkを使用し、軍事特化セキュリティを構築する',
      'GovCloud + KMS + Certificate Manager + IAM + WAF + Shield + Inspector + Systems Managerを使用し、政府標準セキュリティを構築する',
      'Air-Gapped Network + Hardware Security Module + Multi-Level Security + Trusted Computing + PKI + SIEMを使用し、完全分離セキュリティを構築する',
      'Dedicated Hosts + VPC + Security Groups + NACLs + CloudWatch + VPC Flow Logs + AWS Backupを使用し、専用環境セキュリティを構築する'
    ],
    correct: 0,
    explanation: `防衛関連企業の軍事システムには、AWS Secret Region + CloudHSM + Nitro Enclaves + GuardDuty + Macie + CloudTrail + Config + Security Hub + Dedicated Hosts + PrivateLinkの組み合わせが最適です。

理由：
1. **AWS Secret Region**: 軍事専用の最高機密クラウド環境
2. **CloudHSM**: 軍事暗号化標準の鍵管理
3. **Nitro Enclaves**: 機密処理の完全分離実行環境
4. **GuardDuty**: 高度なサイバー攻撃検知
5. **Macie**: 軍事機密情報の自動分類と保護
6. **CloudTrail**: 軍事規格要件の完全な監査証跡
7. **Dedicated Hosts**: 物理的分離による最高レベルセキュリティ

他の選択肢の問題点：
- **GovCloud + KMS + Certificate Manager + IAM + WAF + Shield + Inspector + Systems Manager**を使用し、政府標準セキュリティを構築する: GovCloudは軍事最高機密レベルには不十分
- **Air-Gapped Network + Hardware Security Module + Multi-Level Security + Trusted Computing + PKI + SIEM**を使用し、完全分離セキュリティを構築する: 完全分離は運用性とコスト面で課題
- **Dedicated Hosts + VPC + Security Groups + NACLs + CloudWatch + VPC Flow Logs + AWS Backup**を使用し、専用環境セキュリティを構築する: 専用環境のみでは軍事特有の高度な脅威対策に不十分`
  },

  // 複数選択問題
  {
    id: 'adv-sec-multi-001',
    category: 'セキュリティ',
    question: `大手金融機関が、PCI DSS準拠のクレジットカード決済システムを構築しています。以下の要件があります：

**要件：**
- PCI DSS Level 1準拠
- カード情報の完全暗号化
- アクセスログの改ざん防止
- 定期的な脆弱性スキャン
- 侵入検知・防御システム
- 最小権限アクセス制御

このセキュリティアーキテクチャに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS KMS - 暗号化キー管理サービス',
      'AWS CloudTrail - API監査ログサービス',
      'Amazon GuardDuty - 脅威検知サービス',
      'AWS WAF - Webアプリケーションファイアウォール',
      'AWS Inspector - 脆弱性評価サービス',
      'AWS Secrets Manager - 機密情報管理サービス'
    ],
    correct: [0, 1, 4],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS KMS**
- PCI DSS要件のカード情報暗号化
- FIPS 140-2 Level 2認証済みHSM
- 暗号化キーの安全な管理と監査
- 自動キーローテーション機能
- 細かいアクセス制御とログ記録

**2. AWS CloudTrail**
- 全API呼び出しの完全な監査ログ
- ログの改ざん防止機能
- PCI DSS要件の監査証跡
- リアルタイム監視とアラート
- 長期保存と検索機能

**3. AWS Inspector**
- 定期的な自動脆弱性スキャン
- PCI DSS要件のセキュリティ評価
- アプリケーションとネットワークの評価
- 修復ガイダンスの提供
- コンプライアンス報告書の生成

**他の選択肢について：**
- **GuardDuty**: 脅威検知には有用だが、PCI DSS特有の要件には不十分
- **WAF**: Web攻撃防御には重要だが、暗号化や監査の主要要件ではない
- **Secrets Manager**: 機密管理には有用だが、PCI DSS特有の暗号化要件には不十分`
  },

  {
    id: 'adv-sec-multi-002',
    category: 'セキュリティ',
    question: `政府機関が、機密情報を扱うクラウドシステムを構築しています。以下の要件があります：

**要件：**
- 政府セキュリティ基準への準拠
- 多要素認証の強制
- 特権アクセス管理
- データ分類と保護
- インシデント対応の自動化
- ゼロトラスト原則の実装

このセキュリティフレームワークに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'AWS IAM Identity Center - 統合ID管理',
      'Amazon Macie - データ分類・保護サービス',
      'AWS Security Hub - セキュリティ統合管理',
      'AWS Config - 設定管理・コンプライアンス',
      'AWS Systems Manager - システム管理サービス',
      'Amazon Detective - セキュリティ調査サービス'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. AWS IAM Identity Center**
- 統合シングルサインオン（SSO）
- 多要素認証（MFA）の強制
- 特権アクセス管理（PAM）機能
- ゼロトラスト原則の実装
- 政府標準の認証プロトコル対応

**2. Amazon Macie**
- 機密データの自動分類
- 個人情報・機密情報の検出
- データ保護ポリシーの自動適用
- 政府セキュリティ基準への準拠
- 異常アクセスの検知とアラート

**他の選択肢について：**
- **Security Hub**: セキュリティ統合管理には有用だが、ID管理やデータ分類の主要機能ではない
- **Config**: コンプライアンス管理には重要だが、認証やデータ保護の主要要件ではない
- **Systems Manager**: システム管理には有用だが、セキュリティの主要機能ではない
- **Detective**: インシデント調査には有用だが、予防的セキュリティ対策ではない`
  },

  {
    id: 'adv-sec-multi-003',
    category: 'セキュリティ',
    question: `ヘルスケア企業が、HIPAA準拠の患者データ管理システムを構築しています。以下の要件があります：

**要件：**
- HIPAA規制への完全準拠
- 患者データの暗号化（保存時・転送時）
- アクセス制御と監査ログ
- データ漏洩の防止と検知
- 災害復旧とバックアップ
- 医療従事者の認証管理

このHIPAA準拠システムに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS KMS - 医療データ暗号化',
      'AWS CloudHSM - ハードウェアセキュリティモジュール',
      'Amazon Macie - 機密データ検知・保護',
      'AWS Certificate Manager - SSL/TLS証明書管理',
      'AWS Backup - 統合バックアップサービス',
      'AWS IAM - アクセス管理サービス'
    ],
    correct: [0, 2, 4],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS KMS**
- HIPAA準拠の暗号化キー管理
- 患者データの保存時暗号化
- 細かいアクセス制御とキー使用監査
- 自動キーローテーション
- 医療業界標準への対応

**2. Amazon Macie**
- 患者の個人健康情報（PHI）の自動検出
- HIPAA規制対象データの分類
- 異常アクセスパターンの検知
- データ漏洩リスクの評価
- コンプライアンス報告の自動生成

**3. AWS Backup**
- HIPAA要件のデータバックアップ
- 暗号化されたバックアップの保存
- ポイントインタイム復旧機能
- 災害復旧計画の実装
- バックアップの整合性検証

**他の選択肢について：**
- **CloudHSM**: 高度な暗号化には有用だが、HIPAA要件にはKMSで十分
- **Certificate Manager**: SSL/TLS管理には重要だが、データ保護の主要機能ではない
- **IAM**: アクセス管理には必要だが、HIPAA特有の暗号化・バックアップ要件には不十分`
  }
]

module.exports = advancedSecurityQuestions
