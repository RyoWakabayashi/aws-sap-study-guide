// AWS Solution Architect Professional 上級編 - 運用・デプロイ問題

const advancedOperationsQuestions = [
  {
    id: 'adv-ops-001',
    category: '運用・デプロイ',
    question:
      '大手eコマース企業が、マイクロサービスのCI/CD基盤を構築しています。100以上のサービス、毎日1000回以上のデプロイ、ゼロダウンタイムデプロイ、自動テスト、ロールバック機能が要件です。最適なCI/CDアーキテクチャはどれですか？',
    options: [
      'CodePipeline + CodeBuild + CodeDeploy + CodeCommit + ECS/EKS + Lambda + Step Functions + X-Ray + CloudWatchを使用し、統合CI/CD基盤を構築する',
      'Jenkins + Docker + Kubernetes + GitLab + Prometheusを使用し、オープンソースCI/CD基盤を構築する',
      'GitHub Actions + Docker Hub + Kubernetes + Helm + Grafanaを使用し、サードパーティCI/CD基盤を構築する',
      '手動デプロイ + FTP + SSH + Cronを使用し、従来型デプロイ基盤を構築する'
    ],
    correct: 0,
    explanation:
      '大規模マイクロサービスCI/CDには、CodePipeline + CodeBuild + CodeDeploy + CodeCommit + ECS/EKS + Lambda + Step Functions + X-Ray + CloudWatchが最適です。統合管理、自動化、監視、トレーサビリティを実現できます。'
  },
  {
    id: 'adv-ops-002',
    category: '運用・デプロイ',
    question:
      '大手金融機関が、本番環境の運用自動化を実施しています。24時間365日稼働、自動復旧、パフォーマンス監視、セキュリティ監視、コンプライアンス対応が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'Systems Manager + CloudWatch + X-Ray + GuardDuty + Config + CloudTrail + Lambda + Step Functions + SNS + Incident Managerを使用する',
      'Nagios + Zabbix + ELK Stack + Grafana + Prometheusを使用する',
      'New Relic + Datadog + Splunk + PagerDuty + Slackを使用する',
      '手動監視 + Excel + メール + 電話連絡を使用する'
    ],
    correct: 0,
    explanation:
      '金融機関の運用自動化には、Systems Manager + CloudWatch + X-Ray + GuardDuty + Config + CloudTrail + Lambda + Step Functions + SNS + Incident Managerが最適です。統合監視、自動対応、コンプライアンス、インシデント管理を実現できます。'
  },
  {
    id: 'adv-ops-003',
    category: '運用・デプロイ',
    question:
      '大手製造業が、グローバル工場の運用統合を実施しています。50拠点の統合監視、IoTデバイス管理、予知保全、リモート運用が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'Systems Manager + IoT Device Management + CloudWatch + Timestream + SageMaker + Lambda + Step Functions + SNSを使用する',
      'Prometheus + Grafana + InfluxDB + Telegraf + Alertmanagerを使用する',
      'SCADA + HMI + Historian + OPC UA + Modbusを使用する',
      '各拠点独立運用 + 手動レポート + 月次会議を使用する'
    ],
    correct: 0,
    explanation:
      'グローバル製造業運用には、Systems Manager + IoT Device Management + CloudWatch + Timestream + SageMaker + Lambda + Step Functions + SNSが最適です。統合監視、IoT管理、予知保全、自動化を実現できます。'
  },
  {
    id: 'adv-ops-004',
    category: '運用・デプロイ',
    question:
      '大手ヘルスケア企業が、医療システムの運用基盤を構築しています。HIPAA準拠、患者安全、24時間監視、インシデント対応、災害復旧が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'Systems Manager + CloudWatch + GuardDuty + Macie + Config + CloudTrail + Incident Manager + AWS Backupを使用する',
      'Nagios + Zabbix + SIEM + Splunk + PagerDutyを使用する',
      'Prometheus + Grafana + ELK Stack + Jaeger + Fluentdを使用する',
      '手動監視 + 紙ベース記録 + 電話連絡を使用する'
    ],
    correct: 0,
    explanation:
      '医療システム運用には、Systems Manager + CloudWatch + GuardDuty + Macie + Config + CloudTrail + Incident Manager + AWS Backupが最適です。HIPAA準拠、患者データ保護、統合監視、インシデント管理を実現できます。'
  },
  {
    id: 'adv-ops-005',
    category: '運用・デプロイ',
    question:
      '大手メディア企業が、ライブ配信サービスの運用基盤を構築しています。リアルタイム監視、品質管理、視聴者体験監視、自動スケーリングが要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'CloudWatch + X-Ray + MediaLive Monitoring + Lambda + Step Functions + Auto Scaling + SNS + Incident Managerを使用する',
      'Prometheus + Grafana + ELK Stack + Jaeger + Alertmanagerを使用する',
      'New Relic + Datadog + Splunk + PagerDuty + Slackを使用する',
      '手動監視 + 視聴者フィードバック + 電話対応を使用する'
    ],
    correct: 0,
    explanation:
      'ライブ配信運用には、CloudWatch + X-Ray + MediaLive Monitoring + Lambda + Step Functions + Auto Scaling + SNS + Incident Managerが最適です。リアルタイム監視、品質管理、自動対応、インシデント管理を実現できます。'
  },
  {
    id: 'adv-ops-006',
    category: '運用・デプロイ',
    question:
      '大手ゲーム会社が、オンラインゲームの運用基盤を構築しています。プレイヤー体験監視、サーバー負荷管理、チート検知、リアルタイム対応が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'GameLift Monitoring + CloudWatch + X-Ray + Lambda + Kinesis + SageMaker + Step Functions + SNSを使用する',
      'Prometheus + Grafana + ELK Stack + Kafka + Spark + Alertmanagerを使用する',
      'New Relic + Datadog + Splunk + Machine Learning + PagerDutyを使用する',
      '手動監視 + プレイヤー報告 + GM対応を使用する'
    ],
    correct: 0,
    explanation:
      'ゲーム運用には、GameLift Monitoring + CloudWatch + X-Ray + Lambda + Kinesis + SageMaker + Step Functions + SNSが最適です。ゲーム特化監視、プレイヤー体験管理、チート検知、自動対応を実現できます。'
  },
  {
    id: 'adv-ops-007',
    category: '運用・デプロイ',
    question:
      '大手物流会社が、配送システムの運用基盤を構築しています。車両監視、配送品質管理、リアルタイム最適化、顧客サービス連携が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'IoT Device Management + CloudWatch + Kinesis + Lambda + Step Functions + Location Service + SNS + Connect + Incident Managerを使用する',
      'Prometheus + Grafana + InfluxDB + Telegraf + Kafka + Alertmanagerを使用する',
      'GPS追跡システム + コールセンター + 手動配車 + 紙ベース管理を使用する',
      'Telematics + Fleet Management + CRM + ERP統合を使用する'
    ],
    correct: 0,
    explanation:
      '物流運用には、IoT Device Management + CloudWatch + Kinesis + Lambda + Step Functions + Location Service + SNS + Connect + Incident Managerが最適です。車両IoT監視、リアルタイム最適化、顧客サービス統合を実現できます。'
  },
  {
    id: 'adv-ops-008',
    category: '運用・デプロイ',
    question:
      '大手エネルギー会社が、スマートグリッドの運用基盤を構築しています。電力品質監視、設備監視、需給バランス管理、緊急対応が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'IoT Core + CloudWatch + Timestream + Lambda + Step Functions + Kinesis + SageMaker + SNS + Incident Managerを使用する',
      'SCADA + HMI + Historian + OPC UA + Energy Management Systemを使用する',
      'Prometheus + Grafana + InfluxDB + Telegraf + Alertmanagerを使用する',
      '手動監視 + 電話連絡 + 現地派遣 + 紙ベース記録を使用する'
    ],
    correct: 0,
    explanation:
      'スマートグリッド運用には、IoT Core + CloudWatch + Timestream + Lambda + Step Functions + Kinesis + SageMaker + SNS + Incident Managerが最適です。電力監視、需給管理、予測分析、緊急対応を統合的に実現できます。'
  },
  {
    id: 'adv-ops-009',
    category: '運用・デプロイ',
    question:
      '大手航空会社が、航空システムの運用基盤を構築しています。フライト監視、安全管理、規制準拠、緊急対応、人命に関わる高信頼性が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'Systems Manager + CloudWatch + GuardDuty + Config + CloudTrail + Lambda + Step Functions + SNS + Incident Manager + AWS Supportを使用する',
      'Nagios + Zabbix + SIEM + Splunk + PagerDuty + 24x7 NOCを使用する',
      'Prometheus + Grafana + ELK Stack + Jaeger + Alertmanager + Oncallを使用する',
      '手動監視 + 無線連絡 + 管制官判断 + 紙ベース記録を使用する'
    ],
    correct: 0,
    explanation:
      '航空システム運用には、Systems Manager + CloudWatch + GuardDuty + Config + CloudTrail + Lambda + Step Functions + SNS + Incident Manager + AWS Supportが最適です。航空安全、規制準拠、高信頼性、緊急対応を実現できます。'
  },
  {
    id: 'adv-ops-010',
    category: '運用・デプロイ',
    question:
      '大手政府機関が、国家システムの運用基盤を構築しています。最高機密レベル、完全監査、セキュリティ監視、国家安全保障、透明性が要件です。最適な運用アーキテクチャはどれですか？',
    options: [
      'GovCloud + Systems Manager + CloudWatch + GuardDuty + Macie + Config + CloudTrail + Security Hub + Incident Manager + Professional Supportを使用する',
      'Classified Networks + SIEM + DLP + Endpoint Protection + SOC + 24x7 Monitoringを使用する',
      'Air-gapped Systems + Manual Monitoring + Physical Security + Paper Logs + Secure Communicationsを使用する',
      'Multi-vendor SIEM + Government CERT + Classified Cloud + Secure Enclavesを使用する'
    ],
    correct: 0,
    explanation:
      '政府システム運用には、GovCloud + Systems Manager + CloudWatch + GuardDuty + Macie + Config + CloudTrail + Security Hub + Incident Manager + Professional Supportが最適です。最高機密対応、完全監査、統合セキュリティ、国家レベル運用を実現できます。'
  },

  // 複数選択問題
  {
    id: 'adv-ops-multi-001',
    category: '運用・デプロイ',
    question: `大手金融機関が、24時間365日稼働するミッションクリティカルシステムの運用自動化を実装しています。以下の要件があります：

**要件：**
- 障害の自動検知と復旧
- パッチ適用の自動化（ゼロダウンタイム）
- 設定変更の自動追跡と承認ワークフロー
- インシデント対応の自動化
- コンプライアンス監査の自動化
- 運用コストの最適化

この高度な運用自動化に必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Systems Manager - 統合システム管理・自動化',
      'AWS Config - 設定管理・コンプライアンス監視',
      'AWS Service Catalog - 承認されたサービス管理',
      'Amazon EventBridge - イベント駆動自動化',
      'AWS CloudFormation - インフラ自動化',
      'AWS OpsWorks - アプリケーション管理'
    ],
    correct: [0, 1, 3],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Systems Manager**
- パッチ管理の完全自動化
- ゼロダウンタイムでの更新適用
- 運用タスクの自動化
- セッション管理とアクセス制御
- インベントリ管理と監視

**2. AWS Config**
- 設定変更の継続的監視
- コンプライアンスルールの自動評価
- 設定ドリフトの自動検知
- 変更履歴の完全な追跡
- 金融規制への準拠確認

**3. Amazon EventBridge**
- イベント駆動による自動化
- 障害検知時の自動対応
- システム間の疎結合統合
- カスタムイベントルールの設定
- インシデント対応の自動化

**他の選択肢について：**
- **Service Catalog**: サービス管理には有用だが、運用自動化の主要機能ではない
- **CloudFormation**: インフラ管理には重要だが、日常運用の主要機能ではない
- **OpsWorks**: アプリケーション管理には有用だが、統合運用管理には不十分`
  },

  {
    id: 'adv-ops-multi-002',
    category: '運用・デプロイ',
    question: `グローバル展開するeコマース企業が、多地域での統合運用管理システムを構築しています。以下の要件があります：

**要件：**
- 複数リージョンでの統合監視
- 地域別インシデント対応チーム
- 自動エスカレーション機能
- 運用メトリクスの統合ダッシュボード
- 障害時の自動通知と対応
- 運用効率の継続的改善

このグローバル運用管理に必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'AWS Systems Manager Incident Manager - インシデント管理・対応',
      'Amazon CloudWatch - 統合監視・メトリクス',
      'AWS Chatbot - 自動通知・チャット統合',
      'AWS Personal Health Dashboard - サービス状況監視',
      'AWS Trusted Advisor - 運用最適化推奨',
      'AWS Support - 技術サポート・エスカレーション'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. AWS Systems Manager Incident Manager**
- インシデントの自動検知と対応
- 地域別対応チームへの自動エスカレーション
- インシデント対応プロセスの標準化
- 対応時間の短縮と効率化
- ポストモーテム分析の自動化

**2. Amazon CloudWatch**
- 複数リージョンでの統合監視
- カスタムメトリクスとダッシュボード
- 自動アラートと通知機能
- 運用メトリクスの可視化
- 障害の早期検知と対応

**他の選択肢について：**
- **Chatbot**: 通知統合には有用だが、インシデント管理の主要機能ではない
- **Personal Health Dashboard**: サービス監視には重要だが、統合運用管理には不十分
- **Trusted Advisor**: 最適化推奨には有用だが、日常運用管理の主要機能ではない
- **Support**: 技術サポートには重要だが、自動化運用の主要機能ではない`
  },

  {
    id: 'adv-ops-multi-003',
    category: '運用・デプロイ',
    question: `製造業が、IoTデバイスを含む複雑なハイブリッド環境の運用管理を実装しています。以下の要件があります：

**要件：**
- オンプレミスとクラウドの統合管理
- IoTデバイスの大規模管理
- 予知保全による障害予防
- セキュリティパッチの自動配布
- エッジデバイスの遠隔管理
- 運用データの分析と最適化

このハイブリッド運用管理に必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Systems Manager - ハイブリッド環境統合管理',
      'AWS IoT Device Management - IoTデバイス管理',
      'AWS IoT Greengrass - エッジコンピューティング管理',
      'Amazon Lookout for Equipment - 機械学習による異常検知',
      'AWS Outposts - オンプレミス統合',
      'AWS DataSync - データ同期管理'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Systems Manager**
- オンプレミスとクラウドの統合管理
- ハイブリッド環境でのパッチ管理
- セキュリティ更新の自動配布
- 統合インベントリ管理
- 運用タスクの自動化

**2. AWS IoT Device Management**
- 大規模IoTデバイスの管理
- デバイス登録と認証
- ファームウェア更新の管理
- デバイス監視と診断
- セキュリティポリシーの適用

**3. AWS IoT Greengrass**
- エッジデバイスの遠隔管理
- ローカル処理とクラウド統合
- オフライン時の自律動作
- エッジでの機械学習実行
- デバイス間通信の管理

**他の選択肢について：**
- **Lookout for Equipment**: 異常検知には有用だが、デバイス管理の主要機能ではない
- **Outposts**: オンプレミス統合には有用だが、IoT管理の主要機能ではない
- **DataSync**: データ同期には重要だが、デバイス管理の主要機能ではない`
  }
]

module.exports = advancedOperationsQuestions
