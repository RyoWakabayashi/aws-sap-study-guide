# AWS Solution Architect Professional 試験対策クイズ

[![CI](https://github.com/[username]/[repository]/actions/workflows/ci.yml/badge.svg)](https://github.com/[username]/[repository]/actions/workflows/ci.yml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

AWS Solution Architect Professional (SAP-C02) 試験に向けたインタラクティブなクイズゲームです。

## 🎯 特徴

- **850問以上の問題**: 基礎編650問+上級編205問。AWSサービスの特徴、使い分け、ユースケースから、2025〜2026年の最新サービス（Aurora DSQL、S3 Tables、VPC Lattice等）まで幅広くカバー
- **4択クイズ形式**: 試験形式に近い選択問題
- **模擬試験モード**: 公式試験ガイドの4ドメイン比率（26/29/25/20%）で75問を自動選出し、180分の全体タイマーで本番同様に演習。結果画面でドメイン別正答率と弱点分野を確認できる
- **弱点診断モード**: 4ドメインを均等網羅する20問の短時間診断テスト。結果に応じて重点的に復習すべき分野別ガイドを提示
- **ランダム出題**: 毎回異なる問題をランダムに出題（10/30/50問から選択可能）
- **詳細な解説**: 各問題に詳しい解説付き
- **レスポンシブデザイン**: PC・スマートフォン対応
- **PWA対応**: オフラインでも利用可能
- **フラッシュカードエクスポート**: 全問題をCSV / Anki用TSV形式でエクスポートし、スキマ時間の間隔反復学習に活用できる

## 📚 問題カテゴリ

- **コンピューティング**: EC2、Lambda、ECS、EKS、Fargate
- **ストレージ**: S3、EBS、EFS、FSx
- **データベース**: RDS、Aurora、DynamoDB、Redshift
- **ネットワーキング**: VPC、ELB、CloudFront、Route 53
- **セキュリティ**: IAM、KMS、GuardDuty、WAF
- **監視・ログ**: CloudWatch、X-Ray、CloudTrail
- **移行・統合**: DMS、DataSync、Snow Family
- **分析・機械学習**: Athena、Glue、SageMaker、Kinesis
- **災害復旧**: バックアップ戦略、高可用性設計
- **コスト最適化**: 購入オプション、コスト管理
- **アーキテクチャ**: Well-Architected Framework
- **ユースケース**: 実際の要件に基づく設計判断

## 🚀 使い方

1. **難易度・モード選択**: 初級編／上級編／模擬試験／弱点診断から選択
2. **問題回答**: 選択肢から正解を選択（模擬試験・弱点診断はカテゴリ・問題数の選択が自動化されます）
3. **結果確認**: 結果とスコアを表示（模擬試験・弱点診断ではドメイン別正答率と復習推奨分野も表示）
4. **解答確認**: 間違えた問題の詳細解説を確認
5. **再挑戦**: 「もう一度挑戦」で新しい問題セットに挑戦

### 模擬試験モードについて

- 出題数・タイマーは公式試験ガイド（75問・180分）に準拠していますが、
  **ドメイン別の出題比率はカテゴリ単位の重み付けによる参考区分**であり、AWS公式の採点区分そのものでは
  ありません（詳細は `domain-weights.js` のコメントを参照）。
- 「合格ラインの目安」は正答率75%を基準にした簡易表示です。実際のSAP-C02は1000点満点中750点の
  スケールドスコアで採点されるため、あくまで目安としてご利用ください。

## 🎓 学習のコツ

- **定期的な実施**: 毎日少しずつでも継続して実施
- **解説の確認**: 正解・不正解に関わらず解説を読む
- **弱点の把握**: 間違えやすいカテゴリを特定
- **実践的理解**: サービスの特徴だけでなく使い分けを理解

## 🛠 開発・CI/CD

### ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# コードリント
npm run lint

# テスト実行
npm test

# 問題データ検証
npm run validate-questions

# フラッシュカードをCSV/Anki用TSVにエクスポート（quiz-game/export/ に出力）
npm run export-flashcards
```

### コード品質

- **JavaScript Standard Style**: 一貫したコードスタイル
- **自動テスト**: 機能テスト、データ検証
- **継続的インテグレーション**: GitHub Actions
- **自動デプロイ**: GitHub Pages

### CI/CD パイプライン

- ✅ **コードリント**: Standard JavaScript Style
- ✅ **テスト実行**: 機能・データ検証テスト
- ✅ **問題データ検証**: 構造・内容チェック
- ✅ **ビルドチェック**: ファイルサイズ・構造検証
- ✅ **自動デプロイ**: GitHub Pages (本番・プレビュー)

詳細は [CI_README.md](./CI_README.md) を参照してください。

## 📱 PWA機能

このクイズゲームはPWA（Progressive Web App）として動作します：

- **オフライン対応**: インターネット接続なしでも利用可能
- **ホーム画面追加**: スマートフォンのホーム画面に追加可能
- **高速読み込み**: キャッシュによる高速表示

## 🔧 カスタマイズ

### 問題の追加・修正

問題データはカテゴリ別に分割されています：

```
questions/
├── computing.js          # コンピューティング関連
├── storage.js           # ストレージ関連
├── database.js          # データベース関連
├── networking.js        # ネットワーキング関連
├── security.js          # セキュリティ関連
├── monitoring.js        # 監視・ログ関連
├── migration.js         # 移行・統合関連
├── analytics.js         # 分析・機械学習関連
├── integration.js       # アプリケーション統合関連
├── management.js        # 管理・ガバナンス関連
├── disaster-recovery.js # 災害復旧関連
├── cost-optimization.js # コスト最適化関連
├── architecture.js      # アーキテクチャ関連
├── use-cases.js         # ユースケース関連
└── operations.js        # 運用・デプロイ関連
```

#### 新しい問題の追加

1. 適切なカテゴリファイルを編集
2. 問題を追加（ID形式: `category-number`）
3. 問題データを統合

```javascript
// 例: computing.js に問題を追加
{
    id: "computing-7",  // カテゴリ-連番形式
    category: "コンピューティング",
    question: "新しい問題文",
    options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
    correct: 0, // 正解のインデックス（0-3）
    explanation: "詳細な解説文"
}
```

#### 問題データの統合

```bash
# 問題データを統合してquestions.jsを生成
npm run load-questions

# 検証実行
npm run validate-questions

# テスト実行
npm test
```

## 📄 ライセンス

このプロジェクトは MIT License の下で公開されています。

## 🤝 貢献

問題の追加、バグ修正、機能改善などの貢献を歓迎します。プルリクエストをお送りください。

## 📞 サポート

問題や質問がある場合は、GitHubのIssuesでお知らせください。

---

Good luck with your AWS Solution Architect Professional exam! 🎉
