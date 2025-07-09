// アーキテクチャ関連の問題
const architectureQuestions = [
  {
    id: 'architecture-1',
    category: 'アーキテクチャ',
    question: 'Well-Architected Frameworkの6つの柱に含まれないものはどれですか？',
    options: ['運用上の優秀性', 'セキュリティ', 'コスト最適化', 'スケーラビリティ'],
    correct: 3,
    explanation: 'Well-Architected Frameworkの6つの柱は、運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化、持続可能性です。'
  },
  {
    id: 'architecture-2',
    category: 'アーキテクチャ',
    question: '「運用をコードとして実行」はどの柱の原則ですか？',
    options: ['運用上の優秀性', 'セキュリティ', '信頼性', 'パフォーマンス効率'],
    correct: 0,
    explanation: '「運用をコードとして実行」は、運用上の優秀性の柱の設計原則です。'
  },
  {
    id: 'architecture-3',
    category: 'アーキテクチャ',
    question: '「障害から自動復旧」はどの柱の原則ですか？',
    options: ['運用上の優秀性', 'セキュリティ', '信頼性', 'パフォーマンス効率'],
    correct: 2,
    explanation: '「障害から自動復旧」は、信頼性の柱の設計原則です。'
  },
  {
    id: 'architecture-4',
    category: 'アーキテクチャ',
    question: '「最新技術の民主化」はどの柱の原則ですか？',
    options: ['運用上の優秀性', 'セキュリティ', '信頼性', 'パフォーマンス効率'],
    correct: 3,
    explanation: '「最新技術の民主化」は、パフォーマンス効率の柱の設計原則です。'
  },
  {
    id: 'architecture-5',
    category: 'アーキテクチャ',
    question: 'マイクロサービスアーキテクチャの主な利点はどれですか？',
    options: ['単純性', '独立デプロイ', '低コスト', '高セキュリティ'],
    correct: 1,
    explanation: 'マイクロサービスアーキテクチャの主な利点は、各サービスを独立してデプロイ・スケールできることです。'
  },
  {
    id: 'architecture-6',
    category: 'アーキテクチャ',
    question: 'サーバーレスアーキテクチャの主な特徴はどれですか？',
    options: ['サーバー管理不要', '常時稼働', '固定コスト', '物理サーバー使用'],
    correct: 0,
    explanation: 'サーバーレスアーキテクチャでは、サーバーの管理やプロビジョニングが不要です。'
  },
  {
    id: 'architecture-7',
    category: 'アーキテクチャ',
    question: 'イベント駆動アーキテクチャの主な利点はどれですか？',
    options: ['強結合', '疎結合', '同期処理', '単一障害点'],
    correct: 1,
    explanation: 'イベント駆動アーキテクチャは、コンポーネント間の疎結合を実現し、スケーラビリティを向上させます。'
  },
  {
    id: 'architecture-8',
    category: 'アーキテクチャ',
    question: 'CQRS（Command Query Responsibility Segregation）パターンの主な目的はどれですか？',
    options: ['セキュリティ向上', '読み書き分離', 'コスト削減', 'デプロイ簡素化'],
    correct: 1,
    explanation: 'CQRSパターンは、読み取り（Query）と書き込み（Command）の責任を分離し、それぞれを最適化します。'
  },
  {
    id: 'architecture-9',
    category: 'アーキテクチャ',
    question: 'Circuit Breakerパターンの主な目的はどれですか？',
    options: ['パフォーマンス向上', '障害の連鎖防止', 'コスト削減', 'セキュリティ強化'],
    correct: 1,
    explanation: 'Circuit Breakerパターンは、障害のあるサービスへの呼び出しを停止し、障害の連鎖を防ぎます。'
  },
  {
    id: 'architecture-10',
    category: 'アーキテクチャ',
    question: 'Bulkheadパターンの主な目的はどれですか？',
    options: ['パフォーマンス向上', 'リソース分離', 'コスト削減', 'デプロイ簡素化'],
    correct: 1,
    explanation: 'Bulkheadパターンは、リソースを分離して、一部の障害が全体に影響しないようにします。'
  },
  {
    id: 'architecture-11',
    category: 'アーキテクチャ',
    question: 'Strangler Figパターンが最も適用される場面はどれですか？',
    options: ['新規開発', 'レガシー移行', 'パフォーマンス改善', 'セキュリティ強化'],
    correct: 1,
    explanation: 'Strangler Figパターンは、レガシーシステムを段階的に新システムに置き換える際に使用されます。'
  },
  {
    id: 'architecture-12',
    category: 'アーキテクチャ',
    question: 'Database per Serviceパターンの主な利点はどれですか？',
    options: ['データ整合性', 'サービス独立性', 'クエリ簡素化', 'コスト削減'],
    correct: 1,
    explanation: 'Database per Serviceパターンは、各サービスが独自のデータベースを持つことで、サービス間の独立性を保ちます。'
  },
  {
    id: 'architecture-13',
    category: 'アーキテクチャ',
    question: 'Saga パターンが解決する主な問題はどれですか？',
    options: ['パフォーマンス', '分散トランザクション', 'セキュリティ', 'スケーラビリティ'],
    correct: 1,
    explanation: 'Sagaパターンは、マイクロサービス間での分散トランザクションを管理するために使用されます。'
  },
  {
    id: 'architecture-14',
    category: 'アーキテクチャ',
    question: 'API Gatewayパターンの主な役割はどれですか？',
    options: ['データ保存', 'リクエスト集約', 'コンピューティング', 'ファイル管理'],
    correct: 1,
    explanation: 'API Gatewayパターンは、複数のマイクロサービスへのリクエストを集約し、統一されたAPIを提供します。'
  },
  {
    id: 'architecture-15',
    category: 'アーキテクチャ',
    question: 'Backend for Frontend（BFF）パターンの主な目的はどれですか？',
    options: ['セキュリティ強化', 'フロントエンド最適化', 'コスト削減', 'パフォーマンス向上'],
    correct: 1,
    explanation: 'BFFパターンは、特定のフロントエンド（Web、モバイル等）に最適化されたAPIを提供します。'
  },
  {
    id: 'architecture-16',
    category: 'アーキテクチャ',
    question: 'Event Sourcingパターンの主な特徴はどれですか？',
    options: ['現在状態のみ保存', 'イベント履歴保存', 'リアルタイム処理', 'バッチ処理'],
    correct: 1,
    explanation: 'Event Sourcingパターンは、状態の変更をイベントとして保存し、イベント履歴から現在の状態を再構築します。'
  },
  {
    id: 'architecture-17',
    category: 'アーキテクチャ',
    question: 'Polyglot Persistenceの主な利点はどれですか？',
    options: ['単一技術', '適材適所', 'コスト削減', '運用簡素化'],
    correct: 1,
    explanation: 'Polyglot Persistenceは、データの特性に応じて最適なデータストア技術を選択するアプローチです。'
  },
  {
    id: 'architecture-18',
    category: 'アーキテクチャ',
    question: 'Twelve-Factor Appの原則に含まれないものはどれですか？',
    options: ['コードベース', '設定', '依存関係', 'データベース設計'],
    correct: 3,
    explanation: 'Twelve-Factor Appは、クラウドネイティブアプリケーションの設計原則で、データベース設計は含まれません。'
  },
  {
    id: 'architecture-19',
    category: 'アーキテクチャ',
    question: 'Immutable Infrastructureの主な利点はどれですか？',
    options: ['設定変更可能', '一貫性保証', 'コスト削減', '手動管理'],
    correct: 1,
    explanation: 'Immutable Infrastructureは、インフラを変更不可能にすることで、一貫性と予測可能性を保証します。'
  },
  {
    id: 'architecture-20',
    category: 'アーキテクチャ',
    question: 'Blue-Green Deploymentの主な利点はどれですか？',
    options: ['コスト削減', 'ダウンタイム最小化', 'セキュリティ強化', 'パフォーマンス向上'],
    correct: 1,
    explanation: 'Blue-Green Deploymentは、新旧環境を並行稼働させることで、ダウンタイムを最小化します。'
  },
  {
    id: 'architecture-21',
    category: 'アーキテクチャ',
    question: 'Canary Deploymentの主な目的はどれですか？',
    options: ['全面展開', '段階的展開', 'ロールバック', 'バックアップ'],
    correct: 1,
    explanation: 'Canary Deploymentは、新バージョンを一部のユーザーに段階的に展開し、リスクを最小化します。'
  },
  {
    id: 'architecture-22',
    category: 'アーキテクチャ',
    question: 'Multi-Region Architectureの主な目的はどれですか？',
    options: ['コスト削減', '災害復旧', 'パフォーマンス向上', 'セキュリティ強化'],
    correct: 1,
    explanation: 'Multi-Region Architectureは、災害復旧とビジネス継続性を確保するために使用されます。'
  },
  {
    id: 'architecture-23',
    category: 'アーキテクチャ',
    question: 'Auto Scalingアーキテクチャの主な利点はどれですか？',
    options: ['固定容量', '需要対応', '手動管理', '単一インスタンス'],
    correct: 1,
    explanation: 'Auto Scalingは、需要の変化に応じて自動的にリソースをスケールし、コストとパフォーマンスを最適化します。'
  },
  {
    id: 'architecture-24',
    category: 'アーキテクチャ',
    question: 'Chaos Engineeringの主な目的はどれですか？',
    options: ['システム破壊', '障害耐性テスト', 'パフォーマンス向上', 'コスト削減'],
    correct: 1,
    explanation: 'Chaos Engineeringは、意図的に障害を発生させてシステムの障害耐性をテストし、改善します。'
  },
  {
    id: 'architecture-25',
    category: 'アーキテクチャ',
    question: 'Observabilityの3つの柱に含まれないものはどれですか？',
    options: ['メトリクス', 'ログ', 'トレース', 'アラート'],
    correct: 3,
    explanation: 'Observabilityの3つの柱は、メトリクス、ログ、トレースです。アラートは監視の手段ですが、柱ではありません。'
  }
]

export default architectureQuestions
