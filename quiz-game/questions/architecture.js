// アーキテクチャ関連の問題
const architectureQuestions = [
  {
    id: 'architecture-1',
    category: 'アーキテクチャ',
    question: 'Well-Architected Frameworkの6つの柱に含まれないものはどれですか？',
    options: ['運用上の優秀性', 'セキュリティ', 'スケーラビリティ', '持続可能性'],
    correct: 2,
    explanation: 'スケーラビリティは6つの柱には含まれません。6つの柱は：運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化、持続可能性です。'
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
    options: ['シンプルな運用', '独立したデプロイ', '低い複雑性', '統一された技術'],
    correct: 1,
    explanation: 'マイクロサービスアーキテクチャの主な利点は、各サービスを独立してデプロイできることです。'
  }
]

export default architectureQuestions
