// AWS Solution Architect Professional 上級編 - 移行・統合問題

const advancedMigrationQuestions = [
  {
    id: 'adv-mig-001',
    category: '移行・統合',
    question:
      '大手金融機関が、レガシーメインフレームシステムのクラウド移行を計画しています。COBOL/JCLアプリケーション、DB2データベース、24時間365日稼働、ゼロダウンタイム移行、金融規制準拠が要件です。最適な移行戦略はどれですか？',
    options: [
      'AWS Mainframe Modernization + Database Migration Service + Application Migration Service + DataSync + Server Migration Service + Migration Hub + Well-Architected Reviewを使用した段階的移行を実施する',
      'Lift and Shift + EC2 + RDS + S3 + CloudFormationを使用した一括移行を実施する',
      'Re-architect + Lambda + DynamoDB + API Gateway + Step Functionsを使用した全面刷新を実施する',
      'Hybrid + Direct Connect + Storage Gateway + DataSync + Outpostsを使用したハイブリッド移行を実施する'
    ],
    correct: 0,
    explanation:
      '金融機関のメインフレーム移行には、AWS Mainframe Modernization + Database Migration Service + Application Migration Service + DataSync + Server Migration Service + Migration Hub + Well-Architected Reviewの段階的移行が最適です。リスク最小化、業務継続性、規制準拠を実現できます。'
  },
  {
    id: 'adv-mig-002',
    category: '移行・統合',
    question:
      '大手製造業が、グローバル50拠点のERPシステムをクラウド移行しています。SAP ERP、Oracle Database、複雑なカスタマイゼーション、拠点間データ連携、段階的移行が要件です。最適な移行戦略はどれですか？',
    options: [
      'Migration Hub + Application Discovery Service + Database Migration Service + DataSync + CloudEndure + AWS Professional Services + Well-Architected Reviewを使用する',
      'EC2 + RDS + S3 + Direct Connect + VPNを使用する',
      'Lambda + DynamoDB + API Gateway + Step Functions + EventBridgeを使用する',
      'EKS + Kubernetes + Helm + Istio + Prometheusを使用する'
    ],
    correct: 0,
    explanation:
      'グローバルERP移行には、Migration Hub + Application Discovery Service + Database Migration Service + DataSync + CloudEndure + AWS Professional Services + Well-Architected Reviewが最適です。複雑なシステムの段階的移行、リスク管理、ベストプラクティス適用を実現できます。'
  },
  {
    id: 'adv-mig-003',
    category: '移行・統合',
    question:
      '大手小売チェーンが、オンプレミスデータセンターの完全クラウド移行を実施しています。1000台のサーバー、100TBのデータ、24時間稼働システム、最小ダウンタイムが要件です。最適な移行戦略はどれですか？',
    options: [
      'Application Migration Service + Database Migration Service + DataSync + Snow Family + Migration Hub + CloudEndure + Systems Managerを使用する',
      'EC2 + EBS + S3 + RDS + CloudFormationを使用する',
      'Lambda + DynamoDB + S3 + API Gateway + CloudFrontを使用する',
      'ECS + Fargate + Aurora + ElastiCache + Application Load Balancerを使用する'
    ],
    correct: 0,
    explanation:
      '大規模データセンター移行には、Application Migration Service + Database Migration Service + DataSync + Snow Family + Migration Hub + CloudEndure + Systems Managerが最適です。大量データ移行、最小ダウンタイム、統合管理を実現できます。'
  },
  {
    id: 'adv-mig-004',
    category: '移行・統合',
    question:
      '大手ヘルスケア企業が、医療システムのクラウド移行を実施しています。HIPAA準拠、患者データ保護、医療機器連携、ゼロダウンタイム、段階的移行が要件です。最適な移行戦略はどれですか？',
    options: [
      'HealthLake + Migration Hub + Database Migration Service + DataSync + Macie + CloudTrail + KMS + Professional Servicesを使用する',
      'EC2 + RDS + S3 + VPC + IAMを使用する',
      'Lambda + DynamoDB + API Gateway + Cognito + S3を使用する',
      'EKS + Kubernetes + Istio + Prometheus + Grafanaを使用する'
    ],
    correct: 0,
    explanation:
      '医療システム移行には、HealthLake + Migration Hub + Database Migration Service + DataSync + Macie + CloudTrail + KMS + Professional Servicesが最適です。HIPAA準拠、患者データ保護、医療特化機能を実現できます。'
  },
  {
    id: 'adv-mig-005',
    category: '移行・統合',
    question:
      '大手メディア企業が、動画配信システムのクラウド移行を実施しています。ペタバイト級動画ファイル、リアルタイム配信、グローバル展開、高可用性が要件です。最適な移行戦略はどれですか？',
    options: [
      'MediaServices + Snow Family + DataSync + CloudFront + S3 Transfer Acceleration + Migration Hub + Professional Servicesを使用する',
      'EC2 + EBS + S3 + CloudFront + Route 53を使用する',
      'Lambda + S3 + CloudFront + API Gateway + DynamoDBを使用する',
      'ECS + Fargate + ALB + Aurora + ElastiCacheを使用する'
    ],
    correct: 0,
    explanation:
      'メディア移行には、MediaServices + Snow Family + DataSync + CloudFront + S3 Transfer Acceleration + Migration Hub + Professional Servicesが最適です。大容量動画データ移行、配信最適化、メディア特化機能を実現できます。'
  },
  {
    id: 'adv-mig-006',
    category: '移行・統合',
    question:
      '大手ゲーム会社が、ゲームサーバーのクラウド移行を実施しています。リアルタイムマルチプレイヤー、グローバル展開、低レイテンシ、高可用性が要件です。最適な移行戦略はどれですか？',
    options: [
      'AWS Application Migration Service（AWS MGN）+ Global Accelerator + Migration Hub + EC2 Auto Scaling + ElastiCache Global Datastoreを使用する',
      'EC2 + Auto Scaling + Application Load Balancer + RDS + ElastiCacheを使用する',
      'Lambda + API Gateway + DynamoDB + S3 + CloudFrontを使用する',
      'EKS + Kubernetes + Istio + Prometheus + Grafanaを使用する'
    ],
    correct: 0,
    explanation:
      'ゲームサーバー移行には、AWS Application Migration Service（AWS MGN、2026年に AWS Transform MGN へ改称）でリホストしつつ、Global Acceleratorで低レイテンシ通信、Migration Hubで移行進捗を一元管理、移行後はEC2 Auto Scalingでゲームサーバーフリートを自動スケーリングし、ElastiCache Global Datastoreでグローバルなセッション同期を行う構成が最適です（実運用ではAmazon GameLiftも有力候補ですが、SAP-C02試験の範囲外です）。'
  },
  {
    id: 'adv-mig-007',
    category: '移行・統合',
    question:
      '大手物流会社が、配送管理システムのクラウド移行を実施しています。IoTデバイス連携、リアルタイム追跡、大量データ処理、高可用性が要件です。最適な移行戦略はどれですか？',
    options: [
      'IoT Core + Migration Hub + Database Migration Service + DataSync + Kinesis + Lambda + Professional Servicesを使用する',
      'EC2 + RDS + S3 + Lambda + API Gatewayを使用する',
      'ECS + Fargate + Aurora + ElastiCache + Application Load Balancerを使用する',
      'Lambda + DynamoDB + S3 + API Gateway + CloudFrontを使用する'
    ],
    correct: 0,
    explanation:
      '物流システム移行には、IoT Core + Migration Hub + Database Migration Service + DataSync + Kinesis + Lambda + Professional Servicesが最適です。IoT統合、リアルタイム処理、物流特化機能を実現できます。'
  },
  {
    id: 'adv-mig-008',
    category: '移行・統合',
    question:
      '大手エネルギー会社が、スマートグリッドシステムのクラウド移行を実施しています。重要インフラ、高信頼性、リアルタイム制御、セキュリティが要件です。最適な移行戦略はどれですか？',
    options: [
      'IoT Core + Migration Hub + Database Migration Service + Direct Connect + PrivateLink + GuardDuty + Professional Servicesを使用する',
      'EC2 + RDS + VPC + Direct Connect + CloudWatchを使用する',
      'Lambda + DynamoDB + IoT Core + Kinesis + S3を使用する',
      'EKS + Kubernetes + Prometheus + Grafana + Istioを使用する'
    ],
    correct: 0,
    explanation:
      'スマートグリッド移行には、IoT Core + Migration Hub + Database Migration Service + Direct Connect + PrivateLink + GuardDuty + Professional Servicesが最適です。重要インフラ対応、高セキュリティ、リアルタイム制御を実現できます。'
  },
  {
    id: 'adv-mig-009',
    category: '移行・統合',
    question:
      '大手航空会社が、航空管制連携システムのクラウド移行を実施しています。人命に関わる高信頼性、リアルタイム処理、航空規制準拠、ゼロダウンタイムが要件です。最適な移行戦略はどれですか？',
    options: [
      'Migration Hub + Database Migration Service + Direct Connect + PrivateLink + CloudTrail + Config + Professional Servicesを使用する',
      'EC2 + RDS + VPC + Direct Connect + Route 53を使用する',
      'Lambda + DynamoDB + API Gateway + Step Functions + CloudWatchを使用する',
      'EKS + Kubernetes + Istio + Prometheus + Grafanaを使用する'
    ],
    correct: 0,
    explanation:
      '航空システム移行には、Migration Hub + Database Migration Service + Direct Connect + PrivateLink + CloudTrail + Config + Professional Servicesが最適です。航空規制準拠、高信頼性、ゼロダウンタイム移行を実現できます。'
  },
  {
    id: 'adv-mig-010',
    category: '移行・統合',
    question:
      '大手政府機関が、国家システムのクラウド移行を実施しています。最高機密レベル、完全な監査証跡、段階的移行、国家安全保障が要件です。最適な移行戦略はどれですか？',
    options: [
      'GovCloud + Migration Hub + Database Migration Service + CloudHSM + CloudTrail + Config + GuardDuty + Professional Servicesを使用する',
      'EC2 + RDS + S3 + VPC + IAMを使用する',
      'Lambda + DynamoDB + API Gateway + KMS + CloudTrailを使用する',
      'EKS + Kubernetes + Vault + Consul + Istioを使用する'
    ],
    correct: 0,
    explanation:
      '政府システム移行には、GovCloud + Migration Hub + Database Migration Service + CloudHSM + CloudTrail + Config + GuardDuty + Professional Servicesが最適です。最高機密対応、完全監査、国家安全保障要件を実現できます。'
  },
  {
    id: 'adv-mig-011',
    category: '移行・統合',
    question: `中堅小売企業が、オンプレミスVMware環境で稼働する200台以上の仮想マシンをAWSへ移行する計画を立てています。以下の要件があります：

1. 移行期間中、アプリケーション改修やOS変更は一切行いたくない（最短でクラウドに移す）
2. 既存のVMwareライセンス・運用ツール・監視体制をそのまま引き継ぎたい
3. 移行後、段階的にクラウドネイティブサービスへの最適化（Replatform/Refactor）を検討したい
4. 移行対象・移行アプローチの評価には7Rs（7つのR）のフレームワークを使いたい

初期移行フェーズで採用すべき最も適切な戦略とサービスの組み合わせはどれですか？`,
    options: [
      'Relocate戦略を採用し、VMware Cloud on AWSでハイパーバイザーレベルのまま移行する',
      'Refactor戦略を採用し、全VMをコンテナ化してEKSに移行する',
      'Repurchase戦略を採用し、SaaS版のERPに切り替える',
      'Retire戦略を採用し、重要度の低いVMから順に廃止する'
    ],
    correct: 0,
    explanation: `最も適切なのは「Relocate戦略を採用し、VMware Cloud on AWSでハイパーバイザーレベルのまま移行する」です。

理由：
1. **Relocate**: 7Rsのうち、ハイパーバイザーレベルでインフラをそのままAWSへ移行し、OS・アプリケーションに一切手を加えない戦略。「アプリケーション改修やOS変更は一切行いたくない」という要件に完全に合致する
2. **VMware Cloud on AWS**: 既存のVMwareライセンス・運用ツール・監視体制をそのまま引き継げるため、要件2を満たす
3. **段階的な最適化との親和性**: Relocateで最短移行した後、必要なワークロードから順にReplatform/Refactorへ段階的に移行するという要件3の計画にも適合する

他の選択肢の問題点：
- **Refactor戦略で全VMをコンテナ化してEKSに移行する**: 「アプリケーション改修は一切行いたくない」という初期フェーズの要件に反し、200台以上を一度にコンテナ化するのは非現実的
- **Repurchase戦略でSaaS版ERPに切り替える**: 全VMがERPとは限らず、要件にない業務要件の変更を伴うため不適切
- **Retire戦略で重要度の低いVMから廃止する**: 移行そのものではなく廃止判断であり、初期移行フェーズの要件（最短でクラウドに移す）に合致しない`
  },

  // 複数選択問題
  {
    id: 'adv-mig-multi-001',
    category: '移行・統合',
    question: `大手製造業が、レガシーなメインフレームシステムからAWSへの移行を計画しています。以下の制約があります：

**制約：**
- 24時間365日稼働が必要（ダウンタイム許容：年間4時間以内）
- 30年分の履歴データ（500TB）の移行
- 既存システムとの並行運用期間：6ヶ月
- 段階的移行による業務影響最小化
- データ整合性の完全保証
- 移行後の性能向上要求

この大規模移行プロジェクトに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'AWS Database Migration Service - 継続的データレプリケーション',
      'AWS Application Migration Service - アプリケーション移行',
      'AWS DataSync - 大容量データ転送',
      'AWS Migration Hub - 移行プロジェクト統合管理',
      'AWS Schema Conversion Tool - データベーススキーマ変換',
      'AWS Snow Family - オフラインデータ転送'
    ],
    correct: [0, 3],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. AWS Database Migration Service (DMS)**
- 24時間365日稼働中のデータベース移行
- 継続的データレプリケーション機能
- ダウンタイム最小化（数分以内）
- データ整合性の完全保証
- 異種データベース間の移行対応

**2. AWS Migration Hub**
- 複雑な移行プロジェクトの統合管理
- 段階的移行の進捗追跡
- 複数AWSサービスの統合監視
- 移行計画の可視化と最適化
- 6ヶ月間の並行運用期間管理

**他の選択肢について：**
- **Application Migration Service**: サーバー移行には有用だがメインフレーム移行には不適切
- **DataSync**: データ転送には有用だが継続的レプリケーションには不適切
- **Schema Conversion Tool**: スキーマ変換には重要だが移行管理の主要機能ではない
- **Snow Family**: 大容量転送には有用だが継続的移行には不適切`
  },

  {
    id: 'adv-mig-multi-002',
    category: '移行・統合',
    question: `金融機関が、規制要件を満たしながらクラウド移行を実施しています。以下の要件があります：

**要件：**
- 金融庁規制への完全準拠
- 顧客データの暗号化と監査証跡
- 移行中のセキュリティ確保
- 業務継続性の保証
- 段階的移行による影響最小化
- 移行後のコンプライアンス維持

この規制準拠移行に必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Control Tower - ガバナンス・コンプライアンス管理',
      'AWS Config - 設定変更監視・コンプライアンス',
      'AWS CloudTrail - 完全な監査ログ',
      'AWS Security Hub - セキュリティ統合管理',
      'AWS Systems Manager - システム管理・自動化',
      'AWS Well-Architected Tool - アーキテクチャ評価'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Control Tower**
- 金融業界のガバナンス要件対応
- マルチアカウント環境の統制
- 規制準拠の自動化
- セキュリティベースラインの強制
- 段階的移行の統制管理

**2. AWS Config**
- 設定変更の継続的監視
- コンプライアンスルールの自動評価
- 金融規制要件への準拠確認
- 設定ドリフトの検知と修正
- 移行中の設定管理

**3. AWS CloudTrail**
- 全API呼び出しの完全な監査証跡
- 金融規制の監査要件対応
- データアクセスの完全な記録
- 改ざん防止機能
- 長期保存と検索機能

**他の選択肢について：**
- **Security Hub**: セキュリティ統合には有用だが、コンプライアンス管理の主要機能ではない
- **Systems Manager**: システム管理には重要だが、規制準拠の主要機能ではない
- **Well-Architected Tool**: アーキテクチャ評価には有用だが、移行管理の主要機能ではない`
  },

  {
    id: 'adv-mig-multi-003',
    category: '移行・統合',
    question: `グローバル企業が、複数の地域オフィスのシステムを統合クラウド移行しています。以下の課題があります：

**課題：**
- 各地域の異なる規制要件への対応
- 時差を考慮した段階的移行
- 地域間データ主権要件
- 移行中のネットワーク最適化
- 統合後の運用効率化
- 多言語・多通貨対応

このグローバル移行プロジェクトに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Organizations - マルチアカウント統合管理',
      'AWS Direct Connect - 専用線接続',
      'AWS Global Accelerator - グローバルネットワーク最適化',
      'Amazon CloudFront - グローバルコンテンツ配信',
      'AWS Transit Gateway - ネットワーク統合ハブ',
      'AWS Resource Access Manager - リソース共有管理'
    ],
    correct: [0, 1, 4],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Organizations**
- 地域別アカウントの統合管理
- 地域固有の規制要件対応
- 統合請求と予算管理
- セキュリティポリシーの統一
- ガバナンスの一元化

**2. AWS Direct Connect**
- 各地域オフィスからの専用線接続
- 安定した高帯域幅通信
- 移行中のネットワーク最適化
- データ主権要件への対応
- 予測可能な通信コスト

**3. AWS Transit Gateway**
- 複数地域のネットワーク統合
- VPC間の効率的な接続
- 地域間通信の最適化
- スケーラブルなネットワーク管理
- 統合後の運用効率化

**他の選択肢について：**
- **Global Accelerator**: ネットワーク最適化には有用だが、移行管理の主要機能ではない
- **CloudFront**: コンテンツ配信には有用だが、システム移行の主要機能ではない
- **Resource Access Manager**: リソース共有には有用だが、移行管理の主要機能ではない`
  }
]

module.exports = advancedMigrationQuestions
