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
- **選択肢B**: ElastiCacheは監視用途に不適切、RDSは大量ログに不向き
- **選択肢C**: セキュリティ監視に特化、包括的監視には不十分
- **選択肢D**: バッチ処理中心、リアルタイム要件に不適切

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
- **選択肢B**: セキュリティ監視中心、ビジネス監視・予測機能不足
- **選択肢C**: 分析に特化、リアルタイム監視・自動対応不足
- **選択肢D**: アプリケーション開発中心、インフラ監視に不適切

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
- **選択肢B**: IoT特化機能なし、時系列データに不適切
- **選択肢C**: セキュリティ監視中心、IoT監視に不十分
- **選択肢D**: バッチ処理中心、リアルタイム要件に不適切

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
  }
]

module.exports = advancedMonitoringQuestions
