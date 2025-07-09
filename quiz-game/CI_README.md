# CI/CD パイプライン

このプロジェクトでは、GitHub ActionsとStandardを使用した包括的なCI/CDパイプラインを実装しています。

## 🔧 CI/CD 構成

### GitHub Actions ワークフロー

- **ファイル**: `.github/workflows/ci.yml`
- **トリガー**: `main`、`develop` ブランチへのプッシュ、プルリクエスト
- **対象パス**: `quiz-game/**`、`.github/workflows/**`

### ジョブ構成

#### 1. `lint-and-test`

- **Standard linter**: JavaScriptコードの品質チェック
- **テスト実行**: 機能テスト、データ検証
- **問題データ検証**: 問題の構造・内容チェック
- **ビルドチェック**: ファイルサイズ、構造検証

#### 2. `deploy-preview` (プルリクエスト時)

- **プレビューデプロイ**: GitHub Pagesでのプレビュー環境
- **URL**: `https://[username].github.io/[repo]/preview/[PR番号]/`

#### 3. `deploy-production` (mainブランチ)

- **本番デプロイ**: GitHub Pagesでの本番環境
- **URL**: `https://[username].github.io/[repo]/quiz-game/`

## 🛠 ローカル開発

### 依存関係のインストール

```bash
cd quiz-game
npm install
```

### 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# コードリント
npm run lint

# リント自動修正
npm run lint:fix

# テスト実行
npm test

# 問題データ検証
npm run validate-questions

# ビルドチェック
npm run build-check

# 本番ビルド
npm run build

# プリコミットチェック
npm run precommit
```

## 📋 コード品質基準

### Standard JavaScript Style

- **設定**: `package.json` の `standard` セクション
- **ルール**: [JavaScript Standard Style](https://standardjs.com/)
- **グローバル変数**: `allQuestions`, `QuizGame`, DOM API等を許可

### テストカバレッジ

- **ファイル存在チェック**: 必須ファイルの存在確認
- **HTML構造**: 必要な要素の存在確認
- **問題データ**: 構造・内容の妥当性検証
- **JavaScript構文**: 構文エラーの検出
- **CSS構文**: 基本的な構文チェック
- **PWA要件**: マニフェスト、Service Worker検証

## 🔍 品質チェック項目

### 1. Standard Linter

- コードスタイルの統一
- 潜在的なバグの検出
- ベストプラクティスの強制

### 2. 問題データ検証

- 必須フィールドの存在確認
- ID重複チェック
- 選択肢数の確認（4つ）
- 正解インデックスの妥当性（0-3）
- カテゴリ別統計の表示

### 3. ビルドチェック

- ファイルサイズ制限
- HTML/CSS/JS構文チェック
- PWA要件の確認
- アクセシビリティ基本チェック
- パフォーマンス考慮事項

## 🚀 デプロイメント

### 自動デプロイ

1. **プルリクエスト**: プレビュー環境に自動デプロイ
2. **mainブランチマージ**: 本番環境に自動デプロイ

### 手動デプロイ

```bash
# ビルド実行
npm run build

# GitHub Pagesに手動デプロイ
# (通常は自動デプロイを使用)
```

## 🔒 セキュリティ

### GitHub Secrets

- `GITHUB_TOKEN`: 自動的に提供される（設定不要）
- カスタムドメイン使用時は `CNAME` 設定を調整

### 権限

- **読み取り**: リポジトリコンテンツ
- **書き込み**: GitHub Pages、プルリクエストコメント

## 📊 監視・メトリクス

### ビルド統計

- ファイルサイズ
- テスト結果
- リント結果
- 問題データ統計

### 品質メトリクス

- テスト成功率
- リントエラー数
- 問題データ品質スコア
- ビルド成功率

## 🐛 トラブルシューティング

### よくある問題

1. **Standard lintエラー**

   ```bash
   npm run lint:fix  # 自動修正
   ```

2. **テスト失敗**

   ```bash
   npm test  # 詳細なエラー情報を確認
   ```

3. **問題データエラー**

   ```bash
   npm run validate-questions  # 詳細な検証結果を確認
   ```

4. **ビルドエラー**

   ```bash
   npm run build-check  # ビルド前チェック
   ```

### デバッグ

```bash
# デバッグモードでテスト実行
DEBUG=true npm test

# 詳細なリント結果
npm run lint -- --verbose

# 問題データの詳細分析
npm run validate-questions
```

## 🔄 継続的改善

### 定期的なタスク

- [ ] 依存関係の更新
- [ ] 新しい問題の追加
- [ ] テストカバレッジの向上
- [ ] パフォーマンスの最適化

### 品質向上

- [ ] より厳密なリントルール
- [ ] E2Eテストの追加
- [ ] アクセシビリティテストの強化
- [ ] パフォーマンステストの追加

## 📚 参考資料

- [JavaScript Standard Style](https://standardjs.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [PWA Best Practices](https://web.dev/pwa-checklist/)
