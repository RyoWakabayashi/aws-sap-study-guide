// 災害復旧関連の問題
const disasterRecoveryQuestions = [
  {
    id: 'disaster-recovery-1',
    category: '災害復旧',
    question: 'RTO（Recovery Time Objective）とは何を表しますか？',
    options: ['データ損失許容時間', 'システム復旧目標時間', 'バックアップ頻度', '可用性目標'],
    correct: 1,
    explanation: 'RTOは、システム障害から復旧するまでの目標時間を表します。'
  },
  {
    id: 'disaster-recovery-2',
    category: '災害復旧',
    question: '最も低コストな災害復旧戦略はどれですか？',
    options: ['Backup and Restore', 'Pilot Light', 'Warm Standby', 'Multi-Site Active/Active'],
    correct: 0,
    explanation: 'Backup and Restoreは最も基本的で低コストな災害復旧戦略です。'
  },
  {
    id: 'disaster-recovery-3',
    category: '災害復旧',
    question: 'ほぼゼロのRTO/RPOを実現する災害復旧戦略はどれですか？',
    options: ['Backup and Restore', 'Pilot Light', 'Warm Standby', 'Multi-Site Active/Active'],
    correct: 3,
    explanation: 'Multi-Site Active/Activeは、複数サイトでの同時稼働により、ほぼゼロのRTO/RPOを実現します。'
  },
  {
    id: 'disaster-recovery-4',
    category: '災害復旧',
    question: 'Aurora Global Databaseの典型的なRPOはどれくらいですか？',
    options: ['1分未満', '5分未満', '15分未満', '1時間未満'],
    correct: 0,
    explanation: 'Aurora Global Databaseは、通常1秒未満のRPOを提供します。'
  },
  {
    id: 'disaster-recovery-5',
    category: '災害復旧',
    question: '3-2-1バックアップルールの「1」は何を表しますか？',
    options: ['1つのバックアップ', '1つの場所', '1つのオフサイト', '1つの媒体'],
    correct: 2,
    explanation: '3-2-1ルールの「1」は、1つのオフサイト（遠隔地）バックアップを表します。'
  }
]

export default disasterRecoveryQuestions
