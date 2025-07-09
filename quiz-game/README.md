# AWS Solution Architect Professional 試験対策クイズ

AWS Solution Architect Professional (SAP-C02) 試験に向けたインタラクティブなクイズゲームです。

## 🎯 特徴

- **100問以上の問題**: AWSサービスの特徴、使い分け、ユースケースに関する問題
- **4択クイズ形式**: 試験形式に近い選択問題
- **ランダム出題**: 毎回異なる10問をランダムに出題
- **詳細な解説**: 各問題に詳しい解説付き
- **レスポンシブデザイン**: PC・スマートフォン対応
- **PWA対応**: オフラインでも利用可能

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

1. **クイズ開始**: 「クイズ開始」ボタンをクリック
2. **問題回答**: 4つの選択肢から正解を選択
3. **結果確認**: 10問終了後に結果とスコアを表示
4. **解答確認**: 間違えた問題の詳細解説を確認
5. **再挑戦**: 「もう一度挑戦」で新しい問題セットに挑戦

## 🎓 学習のコツ

- **定期的な実施**: 毎日少しずつでも継続して実施
- **解説の確認**: 正解・不正解に関わらず解説を読む
- **弱点の把握**: 間違えやすいカテゴリを特定
- **実践的理解**: サービスの特徴だけでなく使い分けを理解

## 🛠 技術仕様

- **フロントエンド**: HTML5、CSS3、JavaScript (ES6+)
- **フレームワーク**: Vanilla JavaScript（ライブラリ不使用）
- **PWA**: Service Worker対応
- **レスポンシブ**: CSS Grid、Flexbox使用
- **ホスティング**: GitHub Pages対応

## 📱 PWA機能

このクイズゲームはPWA（Progressive Web App）として動作します：

- **オフライン対応**: インターネット接続なしでも利用可能
- **ホーム画面追加**: スマートフォンのホーム画面に追加可能
- **高速読み込み**: キャッシュによる高速表示

## 🔧 カスタマイズ

問題を追加・修正する場合は `questions.js` ファイルを編集してください：

```javascript
{
    id: 101,
    category: "カテゴリ名",
    question: "問題文",
    options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
    correct: 0, // 正解のインデックス（0-3）
    explanation: "解説文"
}
```

## 📄 ライセンス

このプロジェクトは MIT License の下で公開されています。

## 🤝 貢献

問題の追加、バグ修正、機能改善などの貢献を歓迎します。プルリクエストをお送りください。

## 📞 サポート

問題や質問がある場合は、GitHubのIssuesでお知らせください。

---

Good luck with your AWS Solution Architect Professional exam! 🎉
