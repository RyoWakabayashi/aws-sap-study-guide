// 災害復旧関連の問題
const disasterRecoveryQuestions = [
  {
    id: 'disaster-recovery-1',
    category: '災害復旧',
    question: 'RTO（Recovery Time Objective）とは何を表しますか？',
    options: ['復旧にかかる時間', '許容される最大停止時間', 'データ損失許容時間', 'バックアップ頻度'],
    correct: 1,
    explanation: 'RTOは、災害発生後にシステムを復旧させるまでに許容される最大時間を表します。'
  },
  {
    id: 'disaster-recovery-2',
    category: '災害復旧',
    question: '最も低コストな災害復旧戦略はどれですか？',
    options: ['Backup and Restore', 'Pilot Light', 'Warm Standby', 'Multi-Site Active/Active'],
    correct: 0,
    explanation: 'Backup and Restoreは、データをバックアップし、災害時に復元する最も低コストな戦略です。'
  },
  {
    id: 'disaster-recovery-3',
    category: '災害復旧',
    question: 'ほぼゼロのRTO/RPOを実現する災害復旧戦略はどれですか？',
    options: ['Backup and Restore', 'Pilot Light', 'Warm Standby', 'Multi-Site Active/Active'],
    correct: 3,
    explanation: 'Multi-Site Active/Activeは、複数サイトで同時稼働することで、ほぼゼロのRTO/RPOを実現します。'
  },
  {
    id: 'disaster-recovery-4',
    category: '災害復旧',
    question: 'Aurora Global Databaseの典型的なRPOはどれくらいですか？',
    options: ['1秒未満', '5秒未満', '1分未満', '5分未満'],
    correct: 0,
    explanation: 'Aurora Global Databaseは、典型的に1秒未満のRPOを提供します。'
  },
  {
    id: 'disaster-recovery-5',
    category: '災害復旧',
    question: '3-2-1バックアップルールの「1」は何を表しますか？',
    options: ['1つのバックアップ', '1つの場所', '1つのオフサイト', '1つの形式'],
    correct: 2,
    explanation: '3-2-1ルールの「1」は、1つのバックアップコピーをオフサイト（異なる場所）に保管することを表します。'
  },
  {
    id: 'disaster-recovery-6',
    category: '災害復旧',
    question: 'RPO（Recovery Point Objective）とは何を表しますか？',
    options: ['復旧時間', '許容データ損失時間', '停止時間', 'バックアップ時間'],
    correct: 1,
    explanation: 'RPOは、災害発生時に許容できる最大データ損失時間を表します。'
  },
  {
    id: 'disaster-recovery-7',
    category: '災害復旧',
    question: 'Pilot Light戦略の特徴はどれですか？',
    options: ['完全稼働', '最小限の稼働', '完全停止', '部分稼働'],
    correct: 1,
    explanation: 'Pilot Light戦略では、重要なシステムコンポーネントを最小限の構成で常時稼働させます。'
  },
  {
    id: 'disaster-recovery-8',
    category: '災害復旧',
    question: 'Warm Standby戦略の特徴はどれですか？',
    options: ['フル稼働', '縮小稼働', '停止状態', '部分停止'],
    correct: 1,
    explanation: 'Warm Standby戦略では、本番環境の縮小版を常時稼働させ、災害時にスケールアップします。'
  },
  {
    id: 'disaster-recovery-9',
    category: '災害復旧',
    question: 'Cross-Region Replicationが最も重要な用途はどれですか？',
    options: ['パフォーマンス向上', '���害復旧', 'コスト削減', 'セキュリティ強化'],
    correct: 1,
    explanation: 'Cross-Region Replicationは、地理的に離れた場所にデータを複製し、災害復旧を実現します。'
  },
  {
    id: 'disaster-recovery-10',
    category: '災害復旧',
    question: 'RDSの自動バックアップの保持期間はどれですか？',
    options: ['1-7日', '1-35日', '1-90日', '1-365日'],
    correct: 1,
    explanation: 'RDSの自動バックアップは、1日から35日まで設定可能です。'
  },
  {
    id: 'disaster-recovery-11',
    category: '災害復旧',
    question: 'DynamoDBのPoint-in-Time Recoveryで復元可能な期間はどれですか？',
    options: ['7日', '35日', '90日', '365日'],
    correct: 1,
    explanation: 'DynamoDBのPoint-in-Time Recoveryでは、過去35日以内の任意の時点に復元できます。'
  },
  {
    id: 'disaster-recovery-12',
    category: '災害復旧',
    question: 'S3のCross-Region Replicationで必要な設定はどれですか？',
    options: ['バージョニング有効', 'MFA削除有効', 'ログ有効', 'メトリクス有効'],
    correct: 0,
    explanation: 'S3のCross-Region Replicationを使用するには、ソースとデスティネーションバケットでバージョニングを有効にする必要があります。'
  },
  {
    id: 'disaster-recovery-13',
    category: '災害復旧',
    question: 'EBSスナップショットの保存場所はどこですか？',
    options: ['同一AZ', '同一リージョン', 'S3', 'Glacier'],
    correct: 2,
    explanation: 'EBSスナップショットは、Amazon S3に保存され、リージョン内で自動的に複製されます。'
  },
  {
    id: 'disaster-recovery-14',
    category: '災害復旧',
    question: 'AWS Backupの主な利点はどれですか？',
    options: ['単一サービス', '統合バックアップ', '低コスト', '高速復元'],
    correct: 1,
    explanation: 'AWS Backupは、複数のAWSサービスのバックアップを統合的に管理できるサービスです。'
  },
  {
    id: 'disaster-recovery-15',
    category: '災害復旧',
    question: 'Route 53のHealth Checkの主な用途はどれですか？',
    options: ['パフォーマンス監視', 'フェイルオーバー', 'コスト最適化', 'セキュリティ強化'],
    correct: 1,
    explanation: 'Route 53のHealth Checkは、エンドポイントの健全性を監視し、障害時の自動フェイルオーバーを実現します。'
  },
  {
    id: 'disaster-recovery-16',
    category: '災害復旧',
    question: 'AWS Site Recovery（CloudEndure）の主な機能はどれですか？',
    options: ['バックアップ', 'レプリケーション', 'モニタリング', 'セキュリティ'],
    correct: 1,
    explanation: 'AWS Site Recoveryは、サーバーを継続的にレプリケーションし、災害復旧を自動化します。'
  },
  {
    id: 'disaster-recovery-17',
    category: '災害復旧',
    question: 'Multi-AZ配置の主な目的はどれですか？',
    options: ['パフォーマンス向上', '高可用性', 'コスト削減', 'セキュリティ強化'],
    correct: 1,
    explanation: 'Multi-AZ配置は、複数のアベイラビリティゾーンにリソースを配置し、高可用性を実現します。'
  },
  {
    id: 'disaster-recovery-18',
    category: '災害復旧',
    question: 'ElastiCacheのバックアップ機能で対応していないエンジンはどれですか？',
    options: ['Redis', 'Memcached', '両方対応', 'どちらも非対応'],
    correct: 1,
    explanation: 'ElastiCacheのバックアップ機能は、Redisでのみ利用可能で、Memcachedでは利用できません。'
  },
  {
    id: 'disaster-recovery-19',
    category: '災害復旧',
    question: 'AWS Storage Gatewayの災害復旧での役割はどれですか？',
    options: ['ローカルバックアップ', 'クラウドバックアップ', 'ハイブリッドバックアップ', 'リアルタイムレプリケーション'],
    correct: 2,
    explanation: 'Storage Gatewayは、オンプレミスとクラウド間のハイブリッドバックアップソリューションを提供します。'
  },
  {
    id: 'disaster-recovery-20',
    category: '災害復旧',
    question: 'Lambda関数の災害復旧で重要な要素はどれですか？',
    options: ['コードバックアップ', '設定バックアップ', 'デプロイ自動化', 'すべて正しい'],
    correct: 3,
    explanation: 'Lambda関数の災害復旧では、コード、設定、デプロイプロセスのすべてをバックアップ・自動化することが重要です。'
  },
  {
    id: 'disaster-recovery-21',
    category: '災害復旧',
    question: 'AWS Config Rulesの災害復旧での役割はどれですか？',
    options: ['設定監視', '自動復旧', 'コンプライアンス確認', 'すべて正しい'],
    correct: 3,
    explanation: 'AWS Config Rulesは、設定の監視、自動修復、コンプライアンス確認を通じて災害復旧をサポートします。'
  },
  {
    id: 'disaster-recovery-22',
    category: '災害復旧',
    question: 'CloudFormationの災害復旧での利点はどれですか？',
    options: ['インフラ再構築', '設定一貫性', '自動化', 'すべて正しい'],
    correct: 3,
    explanation: 'CloudFormationは、インフラをコードとして管理し、災害時の迅速で一貫した再構築を可能にします。'
  },
  {
    id: 'disaster-recovery-23',
    category: '災害復旧',
    question: 'AWS Systems Manager Patch Managerの災害復旧での役割はどれですか？',
    options: ['パッチ管理', 'セキュリティ維持', '設定統一', 'すべて正しい'],
    correct: 3,
    explanation: 'Patch Managerは、災害復旧後のシステムでも適切なパッチレベルとセキュリティを維持します。'
  },
  {
    id: 'disaster-recovery-24',
    category: '災害復旧',
    question: 'AWS Elastic Disaster Recovery（CloudEndure）の最小RPOはどれですか？',
    options: ['1秒', '数秒', '1分', '5分'],
    correct: 1,
    explanation: 'AWS Elastic Disaster Recoveryは、継続的なデータレプリケーションにより数秒のRPOを実現できます。'
  },
  {
    id: 'disaster-recovery-25',
    category: '災害復旧',
    question: '災害復旧テストで最も重要な要素はどれですか？',
    options: ['定期実行', '文書化', '自動化', 'すべて正しい'],
    correct: 3,
    explanation: '効果的な災害復旧テストには、定期的な実行、詳細な文書化、可能な限りの自動化がすべて重要です。'
  }
]

export default disasterRecoveryQuestions
