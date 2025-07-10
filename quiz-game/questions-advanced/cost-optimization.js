// AWS Solution Architect Professional 上級編 - コスト最適化問題

const advancedCostOptimizationQuestions = [
  {
    id: 'adv-cost-001',
    category: 'コスト最適化',
    question: `大手eコマース企業が、年間AWS費用1億円の最適化を検討しています。現在の構成と課題は以下の通りです：

1. EC2費用が全体の60%（常時稼働のオンデマンドインスタンス）
2. RDS費用が20%（本番・開発・テスト環境が24時間稼働）
3. S3費用が15%（アクセス頻度の異なるデータが混在）
4. データ転送費用が5%（リージョン間・インターネット転送）
5. 開発・テスト環境が夜間・週末も稼働
6. 季節性による負荷変動（ピーク時は通常の5倍）
7. 複数部門での重複リソース

50%のコスト削減を目標とした場合、最も効果的な最適化戦略はどれですか？`,
    options: [
      'Reserved Instances + Savings Plans + Spot Instances + Auto Scaling + S3 Intelligent-Tiering + CloudFront + Organizations + Cost Anomaly Detection + Budgets + Trusted Advisorを組み合わせた包括的コスト最適化を実施する',
      'EC2インスタンスサイズの縮小 + RDS Multi-AZ無効化 + S3 Standard-IA移行 + CloudWatch監視削減を実施する',
      'すべてのワークロードをLambda + DynamoDB + S3のサーバーレス構成に移行する',
      'オンプレミス回帰により固定費化してコスト予測可能性を向上させる'
    ],
    correct: 0,
    explanation: `50%のコスト削減には、Reserved Instances + Savings Plans + Spot Instances + Auto Scaling + S3 Intelligent-Tiering + CloudFront + Organizations + Cost Anomaly Detection + Budgets + Trusted Advisorの包括的アプローチが最適です。

具体的な削減効果：
1. **Reserved Instances（1年・3年）**: EC2費用を最大72%削減
2. **Savings Plans**: 柔軟な割引適用で追加10-20%削減
3. **Spot Instances**: 開発・テスト環境で最大90%削減
4. **Auto Scaling**: 季節性負荷に応じた動的スケーリング
5. **S3 Intelligent-Tiering**: アクセスパターンに応じた自動階層化
6. **CloudFront**: データ転送費用削減
7. **Organizations**: 一括請求による割引適用
8. **Cost Anomaly Detection**: 異常コスト早期発見

期待削減効果：
- EC2: 60% → 25%（58%削減）
- RDS: 20% → 8%（60%削減）
- S3: 15% → 8%（47%削減）
- データ転送: 5% → 3%（40%削減）
- 総削減率: 約52%

他の選択肢の問題点：
- **EC2インスタンスサイズの縮小 + RDS Multi-AZ無効化 + S3 Standard-IA移行 + CloudWatch監視削減を実施する**: 部分的最適化では50%削減は困難
- **すべてのワークロードをLambda + DynamoDB + S3のサーバーレス構成に移行する**: 全面サーバーレス移行は現実的でなく、移行コストが高い
- **オンプレミス回帰により固定費化してコスト予測可能性を向上させる**: オンプレミス回帰はスケーラビリティを失い、長期的にコスト増`
  },
  {
    id: 'adv-cost-002',
    category: 'コスト最適化',
    question: `大手製造業が、グローバル展開に伴うAWSコスト管理を強化しています。以下の状況があります：

1. 世界5リージョンでの運用（米国、欧州、アジア太平洋）
2. 各リージョンで独立したAWSアカウント運用
3. 工場IoTデータの大量転送（月間100TB）
4. 開発・テスト・本番環境の混在
5. 部門別コスト配賦の必要性
6. 予算超過の早期検知要求
7. FinOps文化の浸透

この要件を満たす最適なコスト管理アーキテクチャはどれですか？`,
    options: [
      'AWS Organizations + Control Tower + Cost and Usage Reports + Cost Explorer + Budgets + Cost Anomaly Detection + Resource Groups + Tagging Strategy + Billing Conductor + Cost Allocation Tagsを使用した統合コスト管理を構築する',
      '各リージョンで独立したCost Explorer + CloudWatch + SNSアラートを設定する',
      'サードパーティツール（CloudHealth、Cloudability）による統合コスト管理を実装する',
      'Excel + PowerBIによる手動コスト分析・レポーティングを実施する'
    ],
    correct: 0,
    explanation: `製造業のグローバルコスト管理には、AWS Organizations + Control Tower + Cost and Usage Reports + Cost Explorer + Budgets + Cost Anomaly Detection + Resource Groups + Tagging Strategy + Billing Conductor + Cost Allocation Tagsの統合アプローチが最適です。

理由：
1. **AWS Organizations**: 複数アカウントの一元管理
2. **Control Tower**: ガバナンスとコンプライアンス
3. **Cost and Usage Reports**: 詳細なコスト分析データ
4. **Cost Explorer**: 視覚的なコスト分析
5. **Budgets**: 予算設定と超過アラート
6. **Cost Anomaly Detection**: 異常コストの自動検知
7. **Resource Groups + Tagging**: 部門別・プロジェクト別コスト配賦
8. **Billing Conductor**: カスタム請求とチャージバック
9. **Cost Allocation Tags**: 詳細なコスト配分

具体的な効果：
- グローバル統合ビュー: 全リージョンのコスト可視化
- 部門別配賦: 正確なコスト配分とチャージバック
- 予算管理: リアルタイム予算監視と早期アラート
- 異常検知: 機械学習による異常コスト検知
- FinOps支援: データドリブンなコスト最適化

他の選択肢の問題点：
- **各リージョンで独立したCost Explorer + CloudWatch + SNSアラートを設定する**: 独立管理では統合ビューと効率的な最適化が困難
- **サードパーティツール（CloudHealth、Cloudability）による統合コスト管理を実装する**: サードパーティツールは追加コストと統合複雑性
- **Excel + PowerBIによる手動コスト分析・レポーティングを実施する**: 手動分析は非効率で、リアルタイム性に欠ける`
  },
  {
    id: 'adv-cost-003',
    category: 'コスト最適化',
    question: `大手メディア企業が、動画配信サービスのコスト最適化を実施しています。以下の課題があります：

1. CloudFrontのデータ転送費用が月間5000万円
2. S3ストレージ費用が月間2000万円（動画ファイル保存）
3. EC2費用が月間3000万円（エンコーディング処理）
4. 視聴パターンの地域差・時間差
5. コンテンツの人気度による大きなアクセス差
6. 4K/8K動画の増加によるストレージ・転送費用増
7. 競合他社との価格競争圧力

40%のコスト削減を実現する最適な戦略はどれですか？`,
    options: [
      'S3 Intelligent-Tiering + Glacier + Deep Archive + CloudFront Price Class + Origin Shield + Spot Instances + MediaConvert + Elemental MediaStore + Reserved Capacity + Savings Plansを組み合わせたメディア特化コスト最適化を実施する',
      'CDNをCloudFlareに変更 + ストレージをGoogle Cloud Storageに移行する',
      'すべての動画をより高い圧縮率でエンコードしてファイルサイズを削減する',
      '視聴者数の少ないコンテンツを削除してストレージ費用を削減する'
    ],
    correct: 0,
    explanation: `メディア企業の動画配信コスト最適化には、S3 Intelligent-Tiering + Glacier + Deep Archive + CloudFront Price Class + Origin Shield + Spot Instances + MediaConvert + Elemental MediaStore + Reserved Capacity + Savings Plansの組み合わせが最適です。

具体的な削減効果：

**ストレージ最適化（2000万円 → 1000万円、50%削減）:**
- S3 Intelligent-Tiering: アクセス頻度による自動階層化
- Glacier: 中期アーカイブで80%削減
- Deep Archive: 長期アーカイブで95%削減

**データ転送最適化（5000万円 → 3000万円、40%削減）:**
- CloudFront Price Class: 地域別価格クラス選択
- Origin Shield: オリジン負荷軽減とキャッシュ効率向上
- 地域別配信最適化

**コンピューティング最適化（3000万円 → 1500万円、50%削減）:**
- Spot Instances: エンコーディング処理で最大90%削減
- MediaConvert: 従量課金による効率化
- Elemental MediaStore: 高性能・低コストストレージ
- Reserved Capacity: 予測可能ワークロード割引

**総削減効果:**
- 月間総費用: 10,000万円 → 5,500万円（45%削減）

他の選択肢の問題点：
- **CDNをCloudFlareに変更 + ストレージをGoogle Cloud Storageに移行する**: マルチクラウドは管理複雑性とデータ転送費用増加
- **すべての動画をより高い圧縮率でエンコードしてファイルサイズを削減する**: 品質劣化により顧客満足度低下のリスク
- **視聴者数の少ないコンテンツを削除してストレージ費用を削減する**: コンテンツ削除は収益機会の損失`
  },
  {
    id: 'adv-cost-004',
    category: 'コスト最適化',
    question: `大手金融機関が、規制要件を満たしながらのコスト最適化を検討しています。以下の制約があります：

1. 金融規制による高可用性要件（99.99%）
2. データ保持義務（7年間の完全保存）
3. 災害復旧要件（RTO: 4時間、RPO: 1時間）
4. セキュリティ要件（暗号化、監査ログ）
5. 本番環境の24時間365日稼働必須
6. 開発・テスト環境の効率化余地
7. コンプライアンス監査対応

規制要件を満たしながら30%のコスト削減を実現する戦略はどれですか？`,
    options: [
      'Reserved Instances（本番） + Spot Instances（開発・テスト） + S3 Intelligent-Tiering + Glacier + Aurora Serverless v2（開発） + Scheduled Scaling（テスト環境） + Cost Allocation Tags + Compliance監視を組み合わせた規制準拠コスト最適化を実施する',
      '本番環境のインスタンスサイズを縮小して基本的なコスト削減を実施する',
      'すべての環境をオンプレミスに戻して固定費化する',
      '開発・テスト環境をパブリッククラウドから削除してローカル環境に移行する'
    ],
    correct: 0,
    explanation: `金融機関の規制準拠コスト最適化には、Reserved Instances（本番） + Spot Instances（開発・テスト） + S3 Intelligent-Tiering + Glacier + Aurora Serverless v2（開発） + Scheduled Scaling（テスト環境） + Cost Allocation Tags + Compliance監視の組み合わせが最適です。

規制要件を満たしながらの最適化：

**本番環境（規制要件厳守）:**
- Reserved Instances: 24時間365日稼働で最大72%割引
- Multi-AZ構成維持: 高可用性要件対応
- 暗号化・監査ログ継続: セキュリティ要件維持
- 削減効果: 30%（可用性・セキュリティ維持）

**開発・テスト環境（効率化重点）:**
- Spot Instances: 最大90%削減（中断許容）
- Aurora Serverless v2: 使用量ベース課金
- Scheduled Scaling: 営業時間のみ稼働
- 削減効果: 70%

**データ保存最適化:**
- S3 Intelligent-Tiering: アクセス頻度による自動階層化
- Glacier: 7年保持データの長期アーカイブ
- 削減効果: 60%（保持義務維持）

**ガバナンス強化:**
- Cost Allocation Tags: 部門別コスト配賦
- Compliance監視: 規制要件の継続確認

**総削減効果: 32%（規制要件完全準拠）**

他の選択肢の問題点：
- **本番環境のインスタンスサイズを縮小して基本的なコスト削減を実施する**: インスタンス縮小は性能・可用性リスク
- **すべての環境をオンプレミスに戻して固定費化する**: オンプレミス回帰は災害復旧・スケーラビリティ課題
- **開発・テスト環境をパブリッククラウドから削除してローカル環境に移行する**: 開発効率低下とセキュリティリスク`
  },
  {
    id: 'adv-cost-005',
    category: 'コスト最適化',
    question: `大手ヘルスケア企業が、医療データ分析基盤のコスト最適化を実施しています。以下の状況があります：

1. 医療画像データ（月間50TB増加）
2. 機械学習モデル訓練（GPU集約的）
3. HIPAA準拠要件
4. 研究データの長期保存（25年）
5. 季節性のある研究プロジェクト
6. 複数の研究機関との連携
7. 予算制約の厳格化

医療規制を満たしながら40%のコスト削減を実現する戦略はどれですか？`,
    options: [
      'S3 Intelligent-Tiering + Glacier Deep Archive + Spot Instances（ML訓練） + SageMaker Savings Plans + Scheduled Scaling + HIPAA準拠設定維持 + Cost Allocation Tags（研究プロジェクト別）を組み合わせた医療特化コスト最適化を実施する',
      'すべてのデータをオンプレミスストレージに移行してクラウド費用を削減する',
      '医療画像の解像度を下げてストレージ費用を削減する',
      '研究プロジェクトの数を削減してリソース使用量を減らす'
    ],
    correct: 0,
    explanation: `ヘルスケア企業の医療データ分析コスト最適化には、S3 Intelligent-Tiering + Glacier Deep Archive + Spot Instances（ML訓練） + SageMaker Savings Plans + Scheduled Scaling + HIPAA準拠設定維持 + Cost Allocation Tags（研究プロジェクト別）の組み合わせが最適です。

HIPAA準拠を維持した最適化：

**ストレージ最適化（医療画像データ）:**
- S3 Intelligent-Tiering: アクセス頻度による自動階層化
- Glacier Deep Archive: 25年保存データで95%削減
- HIPAA準拠暗号化維持
- 削減効果: 70%

**機械学習最適化:**
- Spot Instances: GPU訓練で最大90%削減
- SageMaker Savings Plans: 予測可能ワークロード割引
- Scheduled Scaling: 研究時間に応じた動的スケーリング
- 削減効果: 60%

**プロジェクト管理最適化:**
- Cost Allocation Tags: 研究プロジェクト別コスト配賦
- 季節性対応: 研究サイクルに応じたリソース調整
- 連携機関との効率的リソース共有

**コンプライアンス維持:**
- HIPAA準拠設定継続
- 監査証跡保持
- セキュリティ要件維持

**総削減効果: 42%（医療規制完全準拠）**

他の選択肢の問題点：
- **すべてのデータをオンプレミスストレージに移行してクラウド費用を削減する**: オンプレミス移行は初期投資大、スケーラビリティ課題
- **医療画像の解像度を下げてストレージ費用を削減する**: 画像品質劣化は診断精度に影響、医療安全性リスク
- **研究プロジェクトの数を削減してリソース使用量を減らす**: 研究機会損失は長期的な競争力低下`
  },
  {
    id: 'adv-cost-006',
    category: 'コスト最適化',
    question: `大手小売チェーンが、オムニチャネル戦略に伴うAWSコスト急増に対応しています。以下の状況があります：

1. 1000店舗 + ECサイトの統合システム
2. ピーク時（セール期間）は通常の10倍負荷
3. 在庫管理システムの24時間稼働
4. 顧客データ分析基盤の高コスト
5. 店舗システムとの大量データ同期
6. 季節性による大きな負荷変動
7. 競合との価格競争による利益圧迫

年間コスト3億円を40%削減する最適戦略はどれですか？`,
    options: [
      'Auto Scaling + Spot Fleet + Reserved Instances + S3 Intelligent-Tiering + CloudFront + Savings Plans + Scheduled Actions + Cost Anomaly Detection + Resource Rightsizing + Data Lifecycle Managementを組み合わせた小売特化コスト最適化を実施する',
      'すべてのシステムを最小構成に縮小して基本コストを削減する',
      'ピーク時対応を諦めて固定リソースで運用する',
      'オンプレミスとクラウドのハイブリッド構成に変更する'
    ],
    correct: 0,
    explanation: `小売チェーンのオムニチャネルコスト最適化には、Auto Scaling + Spot Fleet + Reserved Instances + S3 Intelligent-Tiering + CloudFront + Savings Plans + Scheduled Actions + Cost Anomaly Detection + Resource Rightsizing + Data Lifecycle Managementの組み合わせが最適です。

小売業特有の最適化：

**負荷変動対応（コンピューティング）:**
- Auto Scaling: 10倍負荷変動に自動対応
- Spot Fleet: セール期間の一時的負荷で90%削減
- Reserved Instances: 基本負荷部分で72%削減
- 削減効果: 60%

**データ処理最適化:**
- S3 Intelligent-Tiering: 顧客データの自動階層化
- Data Lifecycle Management: 古い取引データの自動アーカイブ
- CloudFront: 店舗間データ同期の転送費削減
- 削減効果: 50%

**分析基盤最適化:**
- Savings Plans: 予測可能な分析ワークロード割引
- Scheduled Actions: 営業時間外の分析処理スケジューリング
- Resource Rightsizing: 過剰リソースの適正化
- 削減効果: 45%

**運用最適化:**
- Cost Anomaly Detection: セール期間の異常コスト早期発見
- 部門別コスト配賦: 店舗・EC・本部の適切なコスト分担

**年間削減効果:**
- 3億円 → 1.7億円（43%削減）
- セール期間の効率的スケーリング
- 平常時の最適リソース配置

他の選択肢の問題点：
- **すべてのシステムを最小構成に縮小して基本コストを削減する**: 最小構成はピーク時の機会損失大
- **ピーク時対応を諦めて固定リソースで運用する**: セール対応放棄は売上機会の重大な損失
- **オンプレミスとクラウドのハイブリッド構成に変更する**: ハイブリッド構成は管理複雑性とコスト増`
  },
  {
    id: 'adv-cost-007',
    category: 'コスト最適化',
    question: `大手ゲーム会社が、グローバル展開するオンラインゲームのコスト最適化を実施しています。以下の課題があります：

1. 世界5リージョンでの同時運用
2. プレイヤー数の地域差・時間差
3. ゲームアップデート時の大量配信
4. プレイヤーデータの高速アクセス要求
5. 新ゲームリリース時の負荷急増
6. 開発・テスト環境の非効率利用
7. 競合他社との開発スピード競争

月間コスト5000万円を35%削減する戦略はどれですか？`,
    options: [
      'GameLift Fleet Scaling + Spot Instances + CloudFront + S3 Transfer Acceleration + Reserved Instances + Auto Scaling + Scheduled Scaling + Multi-Region Optimization + Cost Allocation Tags + Savings Plansを組み合わせたゲーム特化コスト最適化を実施する',
      'すべてのリージョンを1つに統合してインフラを簡素化する',
      'プレイヤー数の少ない地域のサービスを停止する',
      'ゲーム品質を下げてリソース使用量を削減する'
    ],
    correct: 0,
    explanation: `ゲーム会社のグローバル展開コスト最適化には、GameLift Fleet Scaling + Spot Instances + CloudFront + S3 Transfer Acceleration + Reserved Instances + Auto Scaling + Scheduled Scaling + Multi-Region Optimization + Cost Allocation Tags + Savings Plansの組み合わせが最適です。

ゲーム業界特化の最適化：

**ゲームサーバー最適化:**
- GameLift Fleet Scaling: プレイヤー数に応じた動的スケーリング
- Spot Instances: 開発・テスト環境で90%削減
- Auto Scaling: 地域別・時間別の負荷変動対応
- 削減効果: 50%

**コンテンツ配信最適化:**
- CloudFront: ゲームアップデートの効率的配信
- S3 Transfer Acceleration: グローバル高速アップロード
- Multi-Region Optimization: 地域別配信最適化
- 削減効果: 40%

**データアクセス最適化:**
- ElastiCache Reserved Nodes: プレイヤーデータ高速アクセス
- DynamoDB On-Demand: 負荷変動に応じた課金
- 削減効果: 30%

**開発効率化:**
- Scheduled Scaling: 開発時間外の自動停止
- Reserved Instances: 本番環境の基本負荷
- Savings Plans: 予測可能ワークロード割引
- 削減効果: 60%

**運用最適化:**
- Cost Allocation Tags: ゲームタイトル別コスト管理
- 地域別収益性分析とリソース配分最適化

**月間削減効果:**
- 5000万円 → 3200万円（36%削減）
- グローバル展開維持
- 開発スピード向上

他の選択肢の問題点：
- **すべてのリージョンを1つに統合してインフラを簡素化する**: リージョン統合はレイテンシ悪化でプレイヤー体験低下
- **プレイヤー数の少ない地域のサービスを停止する**: 地域サービス停止は成長機会の損失
- **ゲーム品質を下げてリソース使用量を削減する**: 品質低下は競合他社に対する競争力低下`
  },
  {
    id: 'adv-cost-008',
    category: 'コスト最適化',
    question: `大手物流会社が、配送最適化システムのコスト効率化を図っています。以下の状況があります：

1. 配送ルート最適化の大量計算処理
2. 車両位置情報のリアルタイム処理
3. 倉庫管理システムとの連携
4. 配送予測分析の機械学習処理
5. 災害時の緊急配送対応
6. 繁忙期（年末年始）の負荷急増
7. 燃料費高騰による利益圧迫

月間AWS費用2000万円を45%削減する最適戦略はどれですか？`,
    options: [
      'Batch + Spot Instances + SageMaker Savings Plans + Kinesis Scaling + S3 Intelligent-Tiering + Lambda + Step Functions + Scheduled Scaling + Cost Optimization Hub + Resource Taggingを組み合わせた物流特化コスト最適化を実施する',
      'すべての処理をリアルタイムからバッチ処理に変更する',
      '機械学習処理を外部サービスに委託する',
      '配送エリアを縮小してシステム負荷を削減する'
    ],
    correct: 0,
    explanation: `物流会社の配送システムコスト最適化には、Batch + Spot Instances + SageMaker Savings Plans + Kinesis Scaling + S3 Intelligent-Tiering + Lambda + Step Functions + Scheduled Scaling + Cost Optimization Hub + Resource Taggingの組み合わせが最適です。

物流業界特化の最適化：

**大量計算処理最適化:**
- AWS Batch + Spot Instances: ルート最適化で90%削減
- Scheduled Scaling: 夜間バッチ処理の効率化
- Step Functions: 複雑ワークフローの最適化
- 削減効果: 70%

**リアルタイム処理最適化:**
- Kinesis Auto Scaling: 車両数に応じた動的スケーリング
- Lambda: イベント駆動による効率的処理
- 削減効果: 40%

**機械学習最適化:**
- SageMaker Savings Plans: 予測分析ワークロード割引
- Spot Training: モデル訓練で90%削減
- 削減効果: 60%

**データ管理最適化:**
- S3 Intelligent-Tiering: 配送履歴データの自動階層化
- 古い配送データのGlacier移行
- 削減効果: 50%

**繁忙期対応:**
- Auto Scaling: 年末年始の負荷急増対応
- Reserved Capacity: 基本負荷部分の割引
- 削減効果: 35%

**運用最適化:**
- Cost Optimization Hub: 継続的な最適化提案
- Resource Tagging: 配送エリア別コスト管理

**月間削減効果:**
- 2000万円 → 1100万円（45%削減）
- サービス品質維持
- 災害対応能力保持

他の選択肢の問題点：
- **すべての処理をリアルタイムからバッチ処理に変更する**: リアルタイム性失失は配送効率低下
- **機械学習処理を外部サービスに委託する**: 外部委託は機密性とコスト面でリスク
- **配送エリアを縮小してシステム負荷を削減する**: 配送エリア縮小は売上機会の損失`
  },
  {
    id: 'adv-cost-009',
    category: 'コスト最適化',
    question: `大手エネルギー会社が、スマートグリッドシステムのコスト最適化を実施しています。以下の状況があります：

1. 数百万台のスマートメーターデータ処理
2. 電力需給予測の機械学習処理
3. 停電監視システムの24時間稼働
4. 再生可能エネルギー出力予測
5. 電力取引システムとの連携
6. 規制当局への報告システム
7. カーボンニュートラル投資による予算圧迫

年間コスト8億円を30%削減する戦略はどれですか？`,
    options: [
      'IoT Analytics + Timestream + Forecast + SageMaker + Kinesis + Lambda + S3 Intelligent-Tiering + Reserved Instances + Savings Plans + Spot Instances + Scheduled Scaling + Cost Anomaly Detectionを組み合わせたエネルギー特化コスト最適化を実施する',
      'スマートメーターのデータ収集頻度を削減してデータ処理量を減らす',
      '機械学習処理を簡素化して計算リソースを削減する',
      '一部の監視システムを手動運用に変更する'
    ],
    correct: 0,
    explanation: `エネルギー会社のスマートグリッドコスト最適化には、IoT Analytics + Timestream + Forecast + SageMaker + Kinesis + Lambda + S3 Intelligent-Tiering + Reserved Instances + Savings Plans + Spot Instances + Scheduled Scaling + Cost Anomaly Detectionの組み合わせが最適です。

エネルギー業界特化の最適化：

**IoTデータ処理最適化:**
- IoT Analytics: スマートメーターデータの効率的前処理
- Timestream: 時系列データの最適化ストレージ
- Kinesis Auto Scaling: データ量に応じた動的スケーリング
- 削減効果: 40%

**機械学習最適化:**
- SageMaker Savings Plans: 需給予測モデル訓練割引
- Spot Instances: 再生可能エネルギー予測で90%削減
- Forecast: 専用サービスによる効率化
- 削減効果: 60%

**監視システム最適化:**
- Reserved Instances: 24時間稼働システムで72%割引
- Lambda: イベント駆動による効率的アラート処理
- 削減効果: 35%

**データ管理最適化:**
- S3 Intelligent-Tiering: 電力データの自動階層化
- 規制報告データのGlacier長期保存
- 削減効果: 50%

**取引システム最適化:**
- Scheduled Scaling: 取引時間に応じたスケーリング
- ElastiCache Reserved Nodes: 高速取引データアクセス
- 削減効果: 30%

**運用最適化:**
- Cost Anomaly Detection: 異常コスト早期発見
- 電力需要パターンに応じたリソース最適化

**年間削減効果:**
- 8億円 → 5.5億円（31%削減）
- 電力安定供給維持
- 規制要件完全準拠

他の選択肢の問題点：
- **スマートメーターのデータ収集頻度を削減してデータ処理量を減らす**: データ収集頻度削減は電力品質監視に影響
- **機械学習処理を簡素化して計算リソースを削減する**: 機械学習簡素化は予測精度低下で電力安定供給リスク
- **一部の監視システムを手動運用に変更する**: 手動運用は人的コスト増加と信頼性低下`
  },
  {
    id: 'adv-cost-010',
    category: 'コスト最適化',
    question: `大手航空会社が、デジタル変革に伴うAWSコスト急増への対応を検討しています。以下の状況があります：

1. フライト予約システムの高可用性要件
2. 航空管制システムとの連携
3. 乗客データ分析とパーソナライゼーション
4. 機体メンテナンス予測システム
5. 燃料効率最適化システム
6. 災害時の緊急対応システム
7. 航空業界の厳格な規制要件

年間コスト12億円を25%削減しつつ、安全性と規制準拠を維持する戦略はどれですか？`,
    options: [
      'Reserved Instances + Savings Plans + Multi-AZ維持 + Aurora Global Database + S3 Intelligent-Tiering + SageMaker Savings Plans + Spot Instances（非本番） + Scheduled Scaling + Cost Allocation Tags + Compliance監視を組み合わせた航空業界特化コスト最適化を実施する',
      '予約システムの冗長性を削減してコストを下げる',
      '機体メンテナンス予測の精度を下げて計算コストを削減する',
      '一部の路線データ分析を停止してリソースを削減する'
    ],
    correct: 0,
    explanation: `航空会社のコスト最適化には、Reserved Instances + Savings Plans + Multi-AZ維持 + Aurora Global Database + S3 Intelligent-Tiering + SageMaker Savings Plans + Spot Instances（非本番） + Scheduled Scaling + Cost Allocation Tags + Compliance監視の組み合わせが最適です。

航空業界の安全性・規制準拠を維持した最適化：

**予約システム最適化（安全性維持）:**
- Reserved Instances: 24時間稼働で72%割引
- Multi-AZ維持: 高可用性要件完全準拠
- Aurora Global Database: 災害復旧とコスト効率の両立
- 削減効果: 30%（安全性100%維持）

**データ分析最適化:**
- SageMaker Savings Plans: 乗客分析ワークロード割引
- S3 Intelligent-Tiering: 乗客データの自動階層化
- 削減効果: 40%

**メンテナンス予測最適化:**
- Spot Instances: 非本番環境での機械学習訓練
- Scheduled Scaling: メンテナンス時間に応じた処理
- 削減効果: 50%（予測精度維持）

**燃料効率システム最適化:**
- Lambda: イベント駆動による効率的処理
- Kinesis Auto Scaling: フライトデータ量に応じた調整
- 削減効果: 35%

**規制準拠維持:**
- Cost Allocation Tags: 路線別・部門別コスト管理
- Compliance監視: 航空規制要件の継続確認
- 監査証跡完全保持

**緊急対応システム:**
- Reserved Capacity: 災害時対応リソース確保
- 高可用性構成維持

**年間削減効果:**
- 12億円 → 9億円（25%削減）
- 航空安全性100%維持
- 規制要件完全準拠
- 災害対応能力保持

他の選択肢の問題点：
- **予約システムの冗長性を削減してコストを下げる**: 冗長性削減は航空安全に直結する重大リスク
- **メンテナンス予測の精度を下げて計算コストを削減する**: メンテナンス予測精度低下は機体安全性に影響
- **一部の路線データ分析を停止してリソースを削減する**: 路線分析停止は収益最適化機会の損失`
  },

  // 複数選択問題
  {
    id: 'adv-cost-multi-001',
    category: 'コスト最適化',
    question: `大手製造業が、グローバル展開するERPシステムのコスト最適化を検討しています。以下の現状があります：

**現状：**
- 月額AWS利用料：500万円
- 24時間稼働のEC2インスタンス：200台
- 開発・テスト環境：平日のみ利用
- データ転送量：月間100TB
- ストレージ使用量：1PB（アクセス頻度は低い）
- 予測可能なワークロード

コストを30%以上削減するために実装すべき最適化手法を**3つ**選択してください。`,
    options: [
      'Reserved Instances - 1年または3年の予約による大幅割引',
      'Spot Instances - 開発・テスト環境での最大90%割引',
      'S3 Intelligent-Tiering - アクセスパターンに応じた自動最適化',
      'CloudFront - データ転送コスト削減',
      'Savings Plans - 柔軟な使用量コミットによる割引',
      'AWS Compute Optimizer - リソース最適化推奨'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Reserved Instances**
- 24時間稼働の200台のEC2に最適
- 1年予約で約30-40%、3年予約で約50-60%の割引
- 予測可能なワークロードに最適
- 月額150-250万円の削減効果

**2. Spot Instances**
- 開発・テスト環境で最大90%の割引
- 平日のみ利用で中断許容可能
- 月額数十万円の削減効果
- 本番環境への影響なし

**3. S3 Intelligent-Tiering**
- 1PBの低頻度アクセスデータに最適
- 自動的な最適ストレージクラス選択
- 30-70%のストレージコスト削減
- 月額数十万円の削減効果

**他の選択肢について：**
- **CloudFront**: データ転送削減には有用だが、ERPシステムには不適切
- **Savings Plans**: Reserved Instancesと重複し、より複雑
- **Compute Optimizer**: 推奨機能は有用だが、直接的なコスト削減効果は限定的`
  },

  {
    id: 'adv-cost-multi-002',
    category: 'コスト最適化',
    question: `スタートアップ企業が、急成長に伴うAWSコスト急増に対応する必要があります。以下の状況があります：

**状況：**
- 月額AWS利用料：50万円→200万円（3ヶ月で4倍増）
- トラフィック変動が激しい（日中と夜間で10倍差）
- 開発チームが小規模（5名）で運用負荷を抑えたい
- 機能開発を優先し、インフラ管理は最小化
- 予算制約が厳しい

この状況でコスト効率を改善するために採用すべき戦略を**2つ**選択してください。`,
    options: [
      'サーバーレスアーキテクチャ - Lambda/API Gateway/DynamoDBへの移行',
      'Auto Scaling - トラフィック変動に応じた自動スケーリング',
      'Reserved Instances - 長期契約による割引',
      'Multi-AZ配置 - 高可用性による安定運用',
      'CloudWatch詳細監視 - リソース使用量の最適化',
      'Dedicated Hosts - 専用ハードウェアによる性能向上'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. サーバーレスアーキテクチャ**
- 実行時間のみの従量課金でコスト効率最大化
- 運用負荷ゼロで小規模チームに最適
- 自動スケーリングによるトラフィック変動対応
- アイドル時間のコストが発生しない
- 急成長スタートアップに最適な選択

**2. Auto Scaling**
- トラフィック変動（10倍差）に自動対応
- 夜間の不要なリソースを自動削減
- 運用負荷を最小化
- コスト効率と性能のバランス最適化
- 予算制約下での効果的な解決策

**他の選択肢について：**
- **Reserved Instances**: 急成長期には予測困難で不適切
- **Multi-AZ**: 高可用性は重要だがコスト増加要因
- **CloudWatch詳細監視**: 監視強化はコスト増加要因
- **Dedicated Hosts**: 高コストでスタートアップには不適切`
  },

  {
    id: 'adv-cost-multi-003',
    category: 'コスト最適化',
    question: `大手メディア企業が、動画配信プラットフォームのコスト最適化を実施しています。以下の課題があります：

**課題：**
- 動画ストレージコスト：月額300万円
- データ転送コスト：月額200万円
- 動画の90%は配信開始から1ヶ月後にアクセス激減
- 古い動画も法的要件で10年保存必要
- 地域別視聴パターンの違い
- ピーク時の帯域幅コスト

このメディア配信システムのコスト最適化に効果的な手法を**3つ**選択してください。`,
    options: [
      'S3 Lifecycle Policy - 自動的なストレージクラス移行',
      'CloudFront - エッジキャッシングによる転送コスト削減',
      'S3 Glacier Deep Archive - 長期アーカイブの超低コスト保存',
      'Elastic Transcoder - 動画圧縮による容量削減',
      'Direct Connect - 専用線による転送コスト削減',
      'Reserved Capacity - 予約による割引'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. S3 Lifecycle Policy**
- 1ヶ月後の自動的なストレージクラス移行
- Standard → IA → Glacier → Deep Archiveの段階的移行
- 90%のコンテンツで70-90%のストレージコスト削減
- 月額200-250万円の削減効果

**2. CloudFront**
- エッジロケーションでのキャッシング
- オリジンへのデータ転送量削減
- 地域別視聴パターンに最適化
- 月額100-150万円の転送コスト削減

**3. S3 Glacier Deep Archive**
- 10年保存要件を最低コストで実現
- 標準ストレージの約1/23のコスト
- 法的要件を満たしながら大幅コスト削減
- 長期保存で月額数十万円の削減

**他の選択肢について：**
- **Elastic Transcoder**: 動画圧縮は有用だが、主要なコスト削減手法ではない
- **Direct Connect**: 企業向けで一般視聴者には不適切
- **Reserved Capacity**: 予測困難な動画配信には不適切`
  }
]

module.exports = advancedCostOptimizationQuestions
