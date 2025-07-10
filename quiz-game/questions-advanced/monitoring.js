// AWS Solution Architect Professional 上級編 - 監視・ログ問題

const advancedMonitoringQuestions = [
  {
    id: 'adv-mon-001',
    category: '監視・ログ',
    question: `大手金融機関が、リアルタイム取引監視システムをAWSで構築しています。このシステムには以下の厳格な要件があります：

- 取引量：1秒間に100,000件のトランザクション
- 監視対象：1,000台以上のEC2インスタンス、50のマイクロサービス
- アラート要件：異常検知から30秒以内の通知
- ログ保存：7年間の完全なログ保存（規制要件）
- 分析要件：リアルタイム不正検知、パターン分析
- 可視化：リアルタイムダッシュボード、経営層向けレポート
- セキュリティ：ログの改ざん防止、アクセス制御
- コンプライアンス：SOX法、PCI DSS準拠
- 災害復旧：ログデータの地理的冗長化
- 運用効率：自動化された監視・対応
- コスト最適化：ログストレージコストの最適化

この包括的な監視・ログ要件を満たす最適なアーキテクチャはどれですか？`,
    options: [
      'Amazon CloudWatch + AWS X-Ray + Amazon Kinesis + Amazon OpenSearch + AWS Lambda + Amazon SNS + S3 Glacier',
      'Amazon CloudWatch + AWS CloudTrail + Amazon ElastiCache + Amazon RDS + AWS Step Functions + Amazon SES + EBS',
      'AWS Systems Manager + Amazon Inspector + Amazon GuardDuty + Amazon Macie + AWS Config + AWS Security Hub + S3 Standard',
      'Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon QuickSight + AWS Glue + Amazon Athena + S3 Intelligent-Tiering'
    ],
    correct: 0,
    explanation: `正解は「Amazon CloudWatch + AWS X-Ray + Amazon Kinesis + Amazon OpenSearch + AWS Lambda + Amazon SNS + S3 Glacier」です。

この選択肢が最適な理由：

**大規模監視・リアルタイム処理：**
1. **Amazon CloudWatch**: 
   - 1,000台以上のインスタンス監視
   - カスタムメトリクス（100,000 TPS対応）
   - 30秒以内のアラート配信
2. **AWS X-Ray**: 
   - マイクロサービス間のトレーシング
   - パフォーマンス分析
   - ボトルネック特定

**ログ処理・分析：**
1. **Amazon Kinesis**: 
   - リアルタイムログストリーミング
   - 大量データの効率的処理
   - 不正検知パイプライン
2. **Amazon OpenSearch**: 
   - 高速ログ検索・分析
   - リアルタイムダッシュボード
   - 異常パターン検知

**自動化・通知：**
1. **AWS Lambda**: 
   - イベント駆動の自動対応
   - カスタムアラート処理
   - 自動修復アクション
2. **Amazon SNS**: 
   - 多チャネル通知
   - エスカレーション機能

**長期保存・コンプライアンス：**
1. **S3 Glacier**: 
   - 7年間の長期保存
   - 改ざん防止（Object Lock）
   - コスト効率的なアーカイブ

**他の選択肢の問題点：**
- **Amazon CloudWatch + AWS CloudTrail + Amazon ElastiCache + Amazon RDS + AWS Step Functions + Amazon SES + EBS**: ElastiCacheは監視用途に不適切、RDSは大量ログに不向き
- **AWS Systems Manager + Amazon Inspector + Amazon GuardDuty + Amazon Macie + AWS Config + AWS Security Hub + S3 Standard**: セキュリティ監視に特化、包括的監視には不十分
- **Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon QuickSight + AWS Glue + Amazon Athena + S3 Intelligent-Tiering**: バッチ処理中心、リアルタイム要件に不適切

**金融業界特化の利点：**
1. **コンプライアンス**: 
   - SOX法準拠の監査ログ
   - PCI DSS要件の自動チェック
   - 改ざん防止機能
2. **リアルタイム不正検知**: 
   - 機械学習による異常検知
   - パターンマッチング
   - 即座のアラート
3. **災害復旧**: 
   - 地理的分散ログ保存
   - 自動バックアップ
   - 高可用性アーキテクチャ`
  },

  {
    id: 'adv-mon-002',
    category: '監視・ログ',
    question: `グローバル展開するeコマース企業が、ブラックフライデーなどの大規模セール時の監視システムをAWSで構築しています。このシステムには以下の特殊な要件があります：

- トラフィック変動：通常時の50倍のトラフィック急増
- 地理的分散：世界50カ国でのサービス提供
- 監視対象：10,000台のサーバー、500のマイクロサービス
- レスポンス時間：99パーセンタイルで500ms以下を維持
- 可用性：99.99%以上（年間52分以内のダウンタイム）
- 予測分析：トラフィック予測、容量計画
- 自動スケーリング：予測ベースの事前スケーリング
- ビジネス監視：売上、コンバージョン率のリアルタイム監視
- 異常検知：機械学習による自動異常検知
- 運用効率：最小限の人的介入
- コスト最適化：監視コストの最適化

この大規模イベント対応の監視要件を満たす最適なアーキテクチャはどれですか？`,
    options: [
      'Amazon CloudWatch + AWS Auto Scaling + Amazon Forecast + AWS Lambda + Amazon QuickSight + AWS Chatbot + CloudWatch Synthetics',
      'Amazon CloudWatch + AWS Systems Manager + Amazon Inspector + AWS Config + AWS Security Hub + Amazon GuardDuty + AWS Shield',
      'AWS X-Ray + Amazon Kinesis + Amazon EMR + Amazon SageMaker + Amazon Redshift + AWS Glue + Amazon Athena',
      'Amazon EventBridge + AWS Step Functions + Amazon DynamoDB + AWS AppSync + Amazon Cognito + AWS Amplify + API Gateway'
    ],
    correct: 0,
    explanation: `正解は「Amazon CloudWatch + AWS Auto Scaling + Amazon Forecast + AWS Lambda + Amazon QuickSight + AWS Chatbot + CloudWatch Synthetics」です。

この選択肢が最適な理由：

**大規模トラフィック対応：**
1. **Amazon CloudWatch**: 
   - 10,000台のサーバー監視
   - カスタムメトリクス（売上、コンバージョン率）
   - 地理的分散監視
2. **AWS Auto Scaling**: 
   - 50倍トラフィック増加への対応
   - 予測ベースのスケーリング
   - 複数リージョン対応

**予測・分析機能：**
1. **Amazon Forecast**: 
   - 機械学習によるトラフィック予測
   - 容量計画の自動化
   - 季節性パターンの学習
2. **Amazon QuickSight**: 
   - リアルタイムビジネスダッシュボード
   - 売上・KPI監視
   - 経営層向けレポート

**自動化・運用効率：**
1. **AWS Lambda**: 
   - イベント駆動の自動対応
   - カスタムアラート処理
   - 自動修復機能
2. **AWS Chatbot**: 
   - Slack/Teams統合
   - 自動通知・対応
   - 運用効率化

**可用性・品質監視：**
1. **CloudWatch Synthetics**: 
   - 合成監視による可用性チェック
   - エンドユーザー体験監視
   - 99.99%可用性の確保

**他の選択肢の問題点：**
- **Amazon CloudWatch + AWS Systems Manager + Amazon Inspector + AWS Config + AWS Security Hub + Amazon GuardDuty + AWS Shield**: セキュリティ監視中心、ビジネス監視・予測機能不足
- **AWS X-Ray + Amazon Kinesis + Amazon EMR + Amazon SageMaker + Amazon Redshift + AWS Glue + Amazon Athena**: 分析に特化、リアルタイム監視・自動対応不足
- **Amazon EventBridge + AWS Step Functions + Amazon DynamoDB + AWS AppSync + Amazon Cognito + AWS Amplify + API Gateway**: アプリケーション開発中心、インフラ監視に不適切

**大規模イベント特化の利点：**
1. **予測スケーリング**: 
   - 事前のリソース準備
   - トラフィック急増への対応
   - コスト最適化
2. **ビジネス監視**: 
   - リアルタイム売上監視
   - コンバージョン率追跡
   - 異常検知・アラート
3. **グローバル監視**: 
   - 50カ国での統一監視
   - 地域別パフォーマンス分析
   - 災害復旧対応

**運用効率化：**
- 自動化された監視・対応
- 最小限の人的介入
- ChatOpsによる効率的運用
- 予測ベースの容量管理`
  },

  {
    id: 'adv-mon-003',
    category: '監視・ログ',
    question: `大手製造業が、工場のIoTシステムと予知保全のための統合監視システムをAWSで構築しています。このシステムには以下の複雑な要件があります：

- IoTデバイス：100万台以上のセンサー・機械
- データ頻度：1秒間に1,000万件のデータポイント
- 監視項目：温度、振動、圧力、電流、画像、音声
- 異常検知：機械学習による故障予測
- アラート：重大異常は1秒以内、予兆は1分以内
- 地理的分散：世界30カ国、200工場
- データ保存：リアルタイム（1日）、履歴（10年間）
- 分析要件：トレンド分析、相関分析、根本原因分析
- 可視化：工場別、機械別、部品別ダッシュボード
- 統合要件：既存のMES、ERPシステム連携
- セキュリティ：OT/ITネットワーク分離
- 災害復旧：工場間での生産バックアップ

この産業IoT監視要件を満たす最適なアーキテクチャはどれですか？`,
    options: [
      'AWS IoT Core + Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + AWS Lambda + Amazon SNS + AWS IoT Analytics',
      'Amazon CloudWatch + AWS X-Ray + Amazon ElastiCache + Amazon RDS + AWS Step Functions + Amazon SES + Amazon Inspector',
      'AWS Systems Manager + Amazon GuardDuty + Amazon Macie + AWS Config + AWS Security Hub + Amazon Detective + AWS Shield',
      'Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon EMR + AWS Glue + Amazon Athena + Amazon S3'
    ],
    correct: 0,
    explanation: `正解は「AWS IoT Core + Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + AWS Lambda + Amazon SNS + AWS IoT Analytics」です。

この選択肢が最適な理由：

**大規模IoTデータ処理：**
1. **AWS IoT Core**: 
   - 100万台デバイスの接続管理
   - セキュアなデバイス認証
   - メッセージルーティング
   - OT/IT分離対応
2. **Amazon Kinesis**: 
   - 1,000万件/秒のリアルタイム処理
   - ストリーミングデータ分析
   - 複数データ形式対応

**時系列データ最適化：**
1. **Amazon Timestream**: 
   - 時系列データ専用データベース
   - 自動データ階層化（1日→10年）
   - 高速クエリ性能
   - コスト効率的な長期保存
2. **AWS IoT Analytics**: 
   - IoTデータの前処理・変換
   - データクレンジング
   - 統計分析機能

**機械学習・予知保全：**
1. **Amazon SageMaker**: 
   - 故障予測モデル構築
   - 異常検知アルゴリズム
   - リアルタイム推論
   - 継続学習機能
2. **AWS Lambda**: 
   - リアルタイム異常検知
   - 1秒以内のアラート処理
   - 自動対応アクション

**可視化・分析：**
1. **Amazon QuickSight**: 
   - 工場別・機械別ダッシュボード
   - リアルタイム監視画面
   - トレンド分析
   - 経営層向けレポート
2. **Amazon SNS**: 
   - 多段階アラート配信
   - 工場・部門別通知
   - エスカレーション機能

**他の選択肢の問題点：**
- **Amazon CloudWatch + AWS X-Ray + Amazon ElastiCache + Amazon RDS + AWS Step Functions + Amazon SES + Amazon Inspector**: IoT特化機能なし、時系列データに不適切
- **AWS Systems Manager + Amazon GuardDuty + Amazon Macie + AWS Config + AWS Security Hub + Amazon Detective + AWS Shield**: セキュリティ監視中心、IoT監視に不十分
- **Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon EMR + AWS Glue + Amazon Athena + Amazon S3**: バッチ処理中心、リアルタイム要件に不適切

**産業IoT特化の利点：**
1. **予知保全**: 
   - 機械学習による故障予測
   - 部品交換タイミング最適化
   - ダウンタイム最小化
2. **多様なデータ対応**: 
   - センサーデータ（数値）
   - 画像・音声データ
   - 振動・波形データ
3. **工場運用最適化**: 
   - 生産効率監視
   - エネルギー使用量最適化
   - 品質管理強化

**統合・セキュリティ：**
- 既存MES/ERP連携
- OT/ITネットワーク分離
- デバイス認証・暗号化
- 監査ログ完全保存

**災害復旧・事業継続：**
- 工場間データ同期
- 生産バックアップ機能
- 自動フェイルオーバー
- 地理的分散アーキテクチャ`
  },
  {
    id: 'adv-mon-004',
    category: '監視・ログ',
    question: `大手金融機関が、リアルタイム不正検知システムの監視基盤を構築しています。以下の要件があります：

1. 1秒間に100万件の取引ログ処理
2. 異常パターンの即座検知（100ms以内）
3. 複数データソースからのログ統合
4. 機械学習による異常検知
5. 規制当局への自動レポート生成
6. 99.99%の監視システム可用性
7. 完全な監査証跡の保持

この要件を満たすために、最も適切な金融業界向け監視アーキテクチャはどれですか？`,
    options: [
      'Kinesis Data Streams + Kinesis Analytics + CloudWatch + X-Ray + OpenSearch + QuickSight + SageMaker + CloudTrailを使用し、リアルタイム金融監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + SNS + Lambda + S3 + Athenaを使用し、従来型金融監視を構築する',
      'ELK Stack + Kafka + Spark + Grafana + Prometheus + InfluxDB + Telegrafを使用し、オープンソース金融監視を構築する',
      'API Gateway + Lambda + DynamoDB + S3 + CloudFront + Route 53 + ACMを使用し、サーバーレス金融監視を構築する'
    ],
    correct: 0,
    explanation: `金融機関のリアルタイム不正検知監視には、Kinesis Data Streams + Kinesis Analytics + CloudWatch + X-Ray + OpenSearch + QuickSight + SageMaker + CloudTrailの組み合わせが最適です。

理由：
1. **Kinesis Data Streams**: 100万件/秒の高速ログストリーミング
2. **Kinesis Analytics**: リアルタイム異常検知（100ms以内）
3. **CloudWatch**: 統合監視とアラート管理
4. **X-Ray**: 分散システムのトレーシング
5. **OpenSearch**: 複数データソースのログ統合と検索
6. **QuickSight**: 規制当局向け自動レポート生成
7. **SageMaker**: 機械学習による高度な異常検知

他の選択肢の問題点：
- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + SNS + Lambda + S3 + Athenaを使用し、従来型金融監視を構築する**: 従来型CloudWatchは100万件/秒の処理性能に限界
- **ELK Stack + Kafka + Spark + Grafana + Prometheus + InfluxDB + Telegrafを使用し、オープンソース金融監視を構築する**: オープンソースは金融業界の可用性要件（99.99%）達成が困難
- **Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon QuickSight + AWS Glue + Amazon Athena + S3 Intelligent-Tieringを使用し、サーバーレス金融監視を構築する**: サーバーレスのみでは大規模ログ処理に不適切`
  },
  {
    id: 'adv-mon-005',
    category: '監視・ログ',
    question: `大手製造業が、グローバル工場のIoT監視システムを構築しています。以下の要件があります：

1. 世界50拠点の工場からのセンサーデータ監視
2. 設備故障の予兆検知
3. 生産ラインの効率最適化
4. 品質管理データの統合分析
5. 環境規制への準拠監視
6. 災害時の緊急アラート
7. 経営層向けダッシュボード

この要件を満たすために、最も適切な製造業向けIoT監視アーキテクチャはどれですか？`,
    options: [
      'IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + SNS + Lambda + OpenSearchを使用し、グローバルIoT監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glue + EMRを使用し、従来型IoT監視を構築する',
      'InfluxDB + Grafana + Telegraf + Kapacitor + Chronograf + Prometheus + Alertmanagerを使用し、時系列特化IoT監視を構築する',
      'DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53 + CloudWatchを使用し、サーバーレスIoT監視を構築する'
    ],
    correct: 0,
    explanation: `製造業のグローバルIoT監視には、IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + SNS + Lambda + OpenSearchの組み合わせが最適です。

理由：
1. **IoT Core**: 世界50拠点のIoTデバイス統合管理
2. **Kinesis**: 大量センサーデータのリアルタイム処理
3. **Timestream**: 時系列データの効率的保存と分析
4. **CloudWatch**: 統合監視とアラート管理
5. **QuickSight**: 経営層向けダッシュボードと分析
6. **SageMaker**: 設備故障予兆検知の機械学習
7. **SNS + Lambda**: 災害時の緊急アラート配信

他の選択肢の問題点：
- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glue + EMRを使用し、従来型IoT監視を構築する**: 従来型CloudWatchはIoT特有の時系列データ処理に不適切
- **ELK Stack + Kafka + Spark + Grafana + Prometheus + InfluxDB + Telegrafを使用し、オープンソースIoT監視を構築する**: オープンソースは50拠点の統合管理とスケーラビリティに限界
- **DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53 + CloudWatchを使用し、サーバーレスIoT監視を構築する**: サーバーレスのみでは大規模IoTデータ処理に不適切`
  },
  {
    id: 'adv-mon-006',
    category: '監視・ログ',
    question: `大手メディア企業が、ライブストリーミング配信の監視システムを構築しています。以下の要件があります：

1. 世界中の視聴者体験の監視
2. 配信品質のリアルタイム監視
3. CDNパフォーマンスの最適化
4. 視聴者数の急激な変動対応
5. 配信障害の即座検知と復旧
6. 広告配信の効果測定
7. コンテンツ人気度の分析

この要件を満たすために、最も適切なメディア配信監視アーキテクチャはどれですか？`,
    options: [
      'CloudWatch + X-Ray + CloudFront Real-time Logs + Kinesis + OpenSearch + QuickSight + Lambda + SNSを使用し、メディア配信特化監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型メディア監視を構築する',
      'ELK Stack + Beats + Logstash + Kibana + Grafana + Prometheusを使用し、オープンソースメディア監視を構築する',
      'API Gateway + Lambda + DynamoDB + S3 + CloudFront + Route 53を使用し、サーバーレスメディア監視を構築する'
    ],
    correct: 0,
    explanation: `メディア企業のライブストリーミング監視には、CloudWatch + X-Ray + CloudFront Real-time Logs + Kinesis + OpenSearch + QuickSight + Lambda + SNSの組み合わせが最適です。

理由：
1. **CloudWatch**: 配信インフラの統合監視
2. **X-Ray**: 配信パイプラインの分散トレーシング
3. **CloudFront Real-time Logs**: 視聴者体験のリアルタイム監視
4. **Kinesis**: 大量視聴ログのストリーミング処理
5. **OpenSearch**: 配信ログの高速検索と分析
6. **QuickSight**: 視聴者分析と広告効果測定
7. **Lambda + SNS**: 配信障害の即座検知と通知

他の選択肢の問題点：
- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型メディア監視を構築する**: 従来型アプローチはリアルタイム配信監視に不十分
- **ELK Stack + Kafka + Spark + Grafana + Prometheus + InfluxDB + Telegrafを使用し、オープンソースメディア監視を構築する**: オープンソースは世界規模の配信監視に運用負荷が高い
- **API Gateway + Lambda + DynamoDB + S3 + CloudFront + Route 53を使用し、サーバーレスメディア監視を構築する**: サーバーレスのみでは大規模配信監視に不適切`
  },
  {
    id: 'adv-mon-007',
    category: '監視・ログ',
    question: `大手病院グループが、医療システムの統合監視基盤を構築しています。以下の要件があります：

1. 電子カルテシステムの可用性監視
2. 医療機器の稼働状況監視
3. 患者データアクセスの監査ログ
4. HIPAA準拠の監視証跡
5. 緊急時の医療システム優先制御
6. 医療データの異常アクセス検知
7. 病院運営効率の分析

この要件を満たすために、最も適切な医療業界向け監視アーキテクチャはどれですか？`,
    options: [
      'CloudWatch + CloudTrail + GuardDuty + Config + Security Hub + Macie + QuickSight + SNS + Lambda + OpenSearchを使用し、HIPAA準拠医療監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型医療監視を構築する',
      'Splunk + Phantom + QRadar + ArcSight + LogRhythm + RSA NetWitnessを使用し、SIEM特化医療監視を構築する',
      'Prometheus + Grafana + AlertManager + ELK Stack + Jaeger + Zipkinを使用し、オープンソース医療監視を構築する'
    ],
    correct: 0,
    explanation: `病院グループの医療システム監視には、CloudWatch + CloudTrail + GuardDuty + Config + Security Hub + Macie + QuickSight + SNS + Lambda + OpenSearchの組み合わせが最適です。

理由：
1. **CloudWatch**: 医療システムの統合監視
2. **CloudTrail**: HIPAA要件の完全な監査証跡
3. **GuardDuty**: 医療データの異常アクセス検知
4. **Config**: 医療システム設定の準拠監視
5. **Security Hub**: 統合セキュリティ監視
6. **Macie**: 患者データの分類と保護監視
7. **QuickSight**: 病院運営効率の分析ダッシュボード

他の選択肢の問題点：
- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型医療監視を構築する**: 従来型アプローチは医療業界の包括的監視要件に不十分
- **Splunk + Phantom + QRadar + ArcSight + LogRhythm + RSA NetWitnessを使用し、SIEM特化医療監視を構築する**: SIEM特化は高コストで、医療機関の予算制約に不適切
- **Prometheus + Grafana + AlertManager + ELK Stack + Jaeger + Zipkinを使用し、オープンソース医療監視を構築する**: オープンソースはHIPAA準拠の証明が困難`
  },
  {
    id: 'adv-mon-008',
    category: '監視・ログ',
    question: `大手ゲーム会社が、オンラインゲームの監視システムを構築しています。以下の要件があります：

1. プレイヤー体験の監視
2. ゲームサーバーの負荷監視
3. チート行為の検知
4. ゲーム内経済の監視
5. プレイヤー行動分析
6. サーバー障害の即座復旧
7. ゲームバランス調整のデータ分析

この要件を満たすために、最も適切なゲーム業界向け監視アーキテクチャはどれですか？`,
    options: [
      'CloudWatch + X-Ray + Kinesis + OpenSearch + QuickSight + SageMaker + Lambda + SNS + GameLift Metricsを使用し、ゲーム特化監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + EMRを使用し、従来型ゲーム監視を構築する',
      'DataDog + New Relic + Splunk + Grafana + Prometheus + InfluxDBを使用し、サードパーティゲーム監視を構築する',
      'DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53を使用し、サーバーレスゲーム監視を構築する'
    ],
    correct: 0,
    explanation: `ゲーム会社のオンライン監視には、CloudWatch + X-Ray + Kinesis + OpenSearch + QuickSight + SageMaker + Lambda + SNS + GameLift Metricsの組み合わせが最適です。

理由：
1. **CloudWatch**: ゲームインフラの統合監視
2. **X-Ray**: ゲームサービスの分散トレーシング
3. **Kinesis**: プレイヤー行動ログのリアルタイム処理
4. **OpenSearch**: ゲームログの高速検索と分析
5. **QuickSight**: ゲームバランス分析ダッシュボード
6. **SageMaker**: チート検知の機械学習
7. **GameLift Metrics**: ゲーム専用の監視メトリクス

他の選択肢の問題点：
- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + EMRを使用し、従来型ゲーム監視を構築する**: 従来型アプローチはゲーム特有の監視要件に不十分
- **DataDog + New Relic + Splunk + Grafana + Prometheus + InfluxDBを使用し、サードパーティゲーム監視を構築する**: サードパーティ組み合わせは統合管理が複雑
- **DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53を使用し、サーバーレスゲーム監視を構築する**: サーバーレスのみでは大規模ゲーム監視に不適切`
  },
  {
    id: 'adv-mon-009',
    category: '監視・ログ',
    question: `大手物流会社が、グローバル配送追跡の監視システムを構築しています。以下の要件があります：

1. 世界中の荷物位置のリアルタイム追跡
2. 配送遅延の予測と通知
3. 配送ルートの最適化監視
4. 倉庫オペレーションの効率監視
5. 顧客満足度の監視
6. 配送コストの分析
7. 災害時の配送影響監視

この要件を満たすために、最も適切な物流業界向け監視アーキテクチャはどれですか？`,
    options: [
      'IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + Lambda + SNS + Location Serviceを使用し、物流特化監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型物流監視を構築する',
      'Kafka + Spark + Cassandra + Grafana + Prometheus + InfluxDB + Telegrafを使用し、ビッグデータ物流監視を構築する',
      'DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53を使用し、サーバーレス物流監視を構築する'
    ],
    correct: 0,
    explanation: `物流会社のグローバル配送監視には、IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + Lambda + SNS + Location Serviceの組み合わせが最適です。

理由：
1. **IoT Core**: 配送車両・荷物のIoTデバイス管理
2. **Kinesis**: 位置情報のリアルタイムストリーミング
3. **Timestream**: 配送履歴の時系列データ管理
4. **CloudWatch**: 物流システムの統合監視
5. **QuickSight**: 配送効率と顧客満足度分析
6. **SageMaker**: 配送遅延予測の機械学習
7. **Location Service**: 地理空間データの処理と分析

他の選択肢の問題点：
- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型物流監視を構築する**: 従来型アプローチは物流特有の地理空間監視に不十分
- **Kafka + Spark + Cassandra + Grafana + Prometheus + InfluxDB + Telegrafを使用し、ビッグデータ物流監視を構築する**: ビッグデータ特化は物流業界の運用負荷が高い
- **DynamoDB + Lambda + API Gateway + S3 + CloudFront + Route 53を使用し、サーバーレス物流監視を構築する**: サーバーレスのみでは大規模物流監視に不適切`
  },
  {
    id: 'adv-mon-010',
    category: '監視・ログ',
    question: `大手エネルギー会社が、スマートグリッドの監視システムを構築しています。以下の要件があります：

1. 発電所・変電所・配電網の統合監視
2. 電力需給バランスのリアルタイム監視
3. 停電予兆の早期検知
4. 再生可能エネルギーの出力予測
5. 電力品質の監視
6. サイバー攻撃の検知
7. 規制当局への報告自動化

この要件を満たすために、最も適切なエネルギー業界向け監視アーキテクチャはどれですか？`,
    options: [
      'IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + GuardDuty + Lambda + SNS + OpenSearchを使用し、スマートグリッド特化監視を構築する',
      'CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型エネルギー監視を構築する',
      'OSIsoft PI + Wonderware + GE Predix + Schneider EcoStruxure + Siemens MindSphereを使用し、産業用エネルギー監視を構築する',
      'InfluxDB + Grafana + Telegraf + Kapacitor + Chronograf + Prometheusを使用し、時系列特化エネルギー監視を構築する'
    ],
    correct: 0,
    explanation: `エネルギー会社のスマートグリッド監視には、IoT Core + Kinesis + Timestream + CloudWatch + QuickSight + SageMaker + GuardDuty + Lambda + SNS + OpenSearchの組み合わせが最適です。

理由：
1. **IoT Core**: 電力設備のIoTデバイス統合管理
2. **Kinesis**: 電力データのリアルタイムストリーミング
3. **Timestream**: 電力需給データの時系列管理
4. **CloudWatch**: 電力インフラの統合監視
5. **QuickSight**: 電力品質と効率分析
6. **SageMaker**: 停電予兆検知と需要予測
7. **GuardDuty**: 重要インフラへのサイバー攻撃検知

他の選択肢の問題点：
- **CloudWatch Logs + CloudWatch Metrics + CloudWatch Alarms + S3 + Athena + Glueを使用し、従来型エネルギー監視を構築する**: 従来型アプローチはスマートグリッドの複雑な監視要件に不十分
- **OSIsoft PI + Wonderware + GE Predix + Schneider EcoStruxure + Siemens MindSphereを使用し、産業用エネルギー監視を構築する**: 産業用システムは高コストでクラウド統合が困難
- **InfluxDB + Grafana + Telegraf + Kapacitor + Chronograf + Prometheusを使用し、時系列特化エネルギー監視を構築する**: 時系列特化のみではエネルギー業界の包括的監視に不十分`
  },

  // 複数選択問題
  {
    id: 'adv-mon-multi-001',
    category: '監視・ログ',
    question: `大手eコマース企業が、ブラックフライデーなどの大規模セール時の監視システムを構築しています。以下の要件があります：

**要件：**
- 通常の100倍のトラフィック監視
- リアルタイム異常検知とアラート
- ユーザー体験の品質監視
- インフラとアプリケーションの統合監視
- 自動スケーリングトリガー
- 事後分析用の詳細ログ保存

この大規模監視システムに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'Amazon CloudWatch - 統合監視・メトリクスサービス',
      'AWS X-Ray - 分散トレーシングサービス',
      'Amazon OpenSearch Service - ログ分析・検索サービス',
      'AWS CloudTrail - API監査ログサービス',
      'Amazon Kinesis Data Analytics - リアルタイムストリーム分析',
      'AWS Config - 設定変更監視サービス'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon CloudWatch**
- 大規模トラフィックのリアルタイム監視
- カスタムメトリクスによる詳細監視
- 自動スケーリングトリガーの設定
- アラームによる即座の通知
- ダッシュボードでの統合監視

**2. AWS X-Ray**
- 分散システムのエンドツーエンドトレーシング
- ユーザー体験の品質監視
- ボトルネック箇所の特定
- レスポンス時間の詳細分析
- マイクロサービス間の依存関係可視化

**3. Amazon OpenSearch Service**
- 大量ログデータの高速検索・分析
- リアルタイム異常検知
- 事後分析用の詳細ログ保存
- 可視化ダッシュボード（Kibana）
- 機械学習による異常検知

**他の選択肢について：**
- **CloudTrail**: API監査には重要だが、パフォーマンス監視の主要機能ではない
- **Kinesis Data Analytics**: ストリーム分析には有用だが、統合監視には不十分
- **Config**: 設定監視には重要だが、パフォーマンス監視の主要要件ではない`
  },

  {
    id: 'adv-mon-multi-002',
    category: '監視・ログ',
    question: `金融機関が、取引システムの監視・コンプライアンス管理システムを構築しています。以下の要件があります：

**要件：**
- 金融取引の完全な監査証跡
- 不正取引のリアルタイム検知
- 規制報告書の自動生成
- システム可用性99.99%の監視
- セキュリティインシデントの即座検知
- 長期保存（7年間）とデータ整合性保証

この金融監視システムに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'AWS CloudTrail - 完全な監査ログサービス',
      'Amazon GuardDuty - 脅威検知サービス',
      'AWS Security Hub - セキュリティ統合管理',
      'Amazon CloudWatch - システム監視サービス',
      'AWS Config - コンプライアンス監視',
      'Amazon Detective - セキュリティ調査サービス'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. AWS CloudTrail**
- 全API呼び出しの完全な監査証跡
- 金融取引の詳細ログ記録
- ログの改ざん防止機能
- 長期保存とデータ整合性保証
- 規制要件への準拠

**2. Amazon GuardDuty**
- 機械学習による不正取引検知
- リアルタイム脅威検知
- 異常な取引パターンの自動識別
- セキュリティインシデントの即座検知
- 金融業界特有の脅威対応

**他の選択肢について：**
- **Security Hub**: セキュリティ統合管理には有用だが、監査証跡の主要機能ではない
- **CloudWatch**: システム監視には重要だが、金融特有の不正検知には不十分
- **Config**: コンプライアンス監視には重要だが、取引監視の主要機能ではない
- **Detective**: 事後調査には有用だが、リアルタイム検知の主要機能ではない`
  },

  {
    id: 'adv-mon-multi-003',
    category: '監視・ログ',
    question: `製造業が、IoTデバイスを活用したスマートファクトリーの監視システムを構築しています。以下の要件があります：

**要件：**
- 工場内10,000台のIoTセンサー監視
- 機械の予知保全システム
- 生産ライン効率の最適化
- 品質管理データの分析
- 異常検知による自動停止機能
- エネルギー消費量の最適化

このスマートファクトリー監視システムに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'Amazon Timestream - 時系列データベース',
      'Amazon Kinesis Data Streams - IoTデータストリーミング',
      'Amazon SageMaker - 機械学習・予測分析',
      'AWS IoT Analytics - IoTデータ分析サービス',
      'Amazon QuickSight - ビジネスインテリジェンス',
      'AWS Lambda - サーバーレス処理'
    ],
    correct: [0, 2, 3],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon Timestream**
- IoTセンサーデータの効率的な時系列保存
- 高速な時系列クエリ処理
- 自動的なデータ圧縮とライフサイクル管理
- 大量の時系列データに最適化
- コスト効率的な長期保存

**2. Amazon SageMaker**
- 機械学習による予知保全モデル
- 異常検知アルゴリズムの開発
- 生産効率最適化の予測分析
- 品質管理の機械学習モデル
- エネルギー消費最適化の分析

**3. AWS IoT Analytics**
- IoTデータの前処理と変換
- 製造業特有のデータ分析機能
- デバイスデータの統計分析
- 生産ラインの効率分析
- 品質管理データの可視化

**他の選択肢について：**
- **Kinesis Data Streams**: データストリーミングには重要だが、分析機能が不十分
- **QuickSight**: ビジュアライゼーションには有用だが、IoT特有の分析機能が不足
- **Lambda**: リアルタイム処理には有用だが、時系列データ管理の主要機能ではない`
  }
]

module.exports = advancedMonitoringQuestions
