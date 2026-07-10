// SAP-C02 の公式試験ドメインと、問題カテゴリ（AWSサービス軸）の対応重み付けテーブル
//
// 本リポジトリの問題データは AWS サービス軸の15カテゴリで管理されているが、
// 実際の試験は「タスク軸」の4ドメインで採点される（26% / 29% / 25% / 20%）。
// このファイルは、各カテゴリの問題がどのドメインに出題されやすいかを
// 公式試験ガイドのタスクステートメントに基づいて重み付けしたものであり、
// 模擬試験モードでのドメイン別出題数の算出・結果画面のドメイン別正答率表示に使用する。
//
// 各カテゴリの重みの合計は 1.0 になるように設定している。
// これはあくまで「参考区分」であり、AWS公式の採点区分そのものではない点に注意。

const DOMAIN_INFO = {
  1: {
    name: 'Domain 1: 組織の複雑さに対応するソリューション設計',
    shortName: 'Domain 1（組織の複雑さ）',
    weight: 0.26
  },
  2: {
    name: 'Domain 2: 新しいソリューションの設計',
    shortName: 'Domain 2（新規設計）',
    weight: 0.29
  },
  3: {
    name: 'Domain 3: 既存ソリューションの継続的改善',
    shortName: 'Domain 3（継続的改善）',
    weight: 0.25
  },
  4: {
    name: 'Domain 4: ワークロードの移行とモダナイゼーションの加速',
    shortName: 'Domain 4（移行・モダナイゼーション）',
    weight: 0.20
  }
}

const CATEGORY_DOMAIN_WEIGHTS = {
  コンピューティング: { 1: 0.10, 2: 0.45, 3: 0.20, 4: 0.25 },
  ストレージ: { 1: 0.10, 2: 0.40, 3: 0.20, 4: 0.30 },
  データベース: { 1: 0.10, 2: 0.35, 3: 0.20, 4: 0.35 },
  ネットワーキング: { 1: 0.55, 2: 0.30, 3: 0.10, 4: 0.05 },
  セキュリティ: { 1: 0.30, 2: 0.35, 3: 0.30, 4: 0.05 },
  監視・ログ: { 1: 0.05, 2: 0.15, 3: 0.70, 4: 0.10 },
  移行・統合: { 1: 0.05, 2: 0.15, 3: 0.05, 4: 0.75 },
  分析・機械学習: { 1: 0.05, 2: 0.55, 3: 0.20, 4: 0.20 },
  アプリケーション統合: { 1: 0.05, 2: 0.35, 3: 0.15, 4: 0.45 },
  管理・ガバナンス: { 1: 0.60, 2: 0.15, 3: 0.20, 4: 0.05 },
  災害復旧: { 1: 0.35, 2: 0.35, 3: 0.25, 4: 0.05 },
  コスト最適化: { 1: 0.30, 2: 0.25, 3: 0.30, 4: 0.15 },
  アーキテクチャ: { 1: 0.15, 2: 0.40, 3: 0.30, 4: 0.15 },
  ユースケース: { 1: 0.20, 2: 0.30, 3: 0.25, 4: 0.25 },
  運用・デプロイ: { 1: 0.10, 2: 0.20, 3: 0.55, 4: 0.15 }
}

// ドメインごとに重点的に復習すべき分野別ガイド（弱点診断の結果表示で使用）
const DOMAIN_RECOMMENDED_DOCS = {
  1: [
    { file: '../04-networking.md', title: '04. ネットワーキング' },
    { file: '../05-security.md', title: '05. セキュリティ' },
    { file: '../07-architecture.md', title: '07. アーキテクチャパターン（マルチアカウント統治）' },
    { file: '../08-cost-optimization.md', title: '08. コスト最適化' }
  ],
  2: [
    { file: '../01-compute.md', title: '01. コンピューティングサービス' },
    { file: '../02-storage.md', title: '02. ストレージサービス' },
    { file: '../03-database.md', title: '03. データベースサービス' },
    { file: '../09-disaster-recovery.md', title: '09. 災害復旧' }
  ],
  3: [
    { file: '../06-monitoring.md', title: '06. 監視・ログ' },
    { file: '../05-security.md', title: '05. セキュリティ（継続的改善）' },
    { file: '../08-cost-optimization.md', title: '08. コスト最適化（継続的改善）' }
  ],
  4: [
    { file: '../10-migration.md', title: '10. 移行戦略' }
  ]
}

if (typeof window !== 'undefined') {
  window.DOMAIN_INFO = DOMAIN_INFO
  window.CATEGORY_DOMAIN_WEIGHTS = CATEGORY_DOMAIN_WEIGHTS
  window.DOMAIN_RECOMMENDED_DOCS = DOMAIN_RECOMMENDED_DOCS
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DOMAIN_INFO, CATEGORY_DOMAIN_WEIGHTS, DOMAIN_RECOMMENDED_DOCS }
}
