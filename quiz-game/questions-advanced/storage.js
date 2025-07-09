// AWS Solution Architect Professional 上級編 - ストレージ問題

const advancedStorageQuestions = [
  {
    id: 'adv-storage-001',
    category: 'ストレージ',
    question: `大手メディア企業が、4K/8K動画コンテンツの配信プラットフォームをAWSで構築しています。このシステムには以下の要件と課題があります：

- 動画ファイルサイズ：1本あたり50GB-500GB
- 月間新規アップロード：10,000本以上
- 世界中への配信が必要（150カ国以上）
- アップロード完了から配信開始まで30分以内
- 過去3年分のコンテンツへの即座アクセスが必要
- 3年以上前のコンテンツは年に数回程度のアクセス
- 法的要件により、一部地域では特定期間のデータ保持が義務
- コスト最適化が重要（現在のストレージコストを50%削減したい）
- データの完全性保証が必須（ビット腐敗の検出・修復）

この要件を満たす最適なストレージアーキテクチャはどれですか？`,
    options: [
      'S3 Standard + S3 Intelligent-Tiering + CloudFront + S3 Transfer Acceleration + S3 Object Lock + Macie',
      'S3 Standard + Lifecycle Policy (IA → Glacier → Deep Archive) + CloudFront + Multipart Upload + S3 Cross-Region Replication',
      'EFS + EC2 + CloudFront + AWS DataSync + AWS Backup + S3 Glacier for archival',
      'S3 Standard + S3 One Zone-IA + CloudFront + AWS Storage Gateway + S3 Batch Operations'
    ],
    correct: 1,
    explanation: `正解は「S3 Standard + Lifecycle Policy (IA → Glacier → Deep Archive) + CloudFront + Multipart Upload + S3 Cross-Region Replication」です。

この選択肢が最適な理由：

**要件への対応：**
1. **大容量ファイル**: Multipart Uploadにより効率的な大容量ファイルアップロード
2. **グローバル配信**: CloudFrontによる世界規模のコンテンツ配信
3. **アクセスパターン最適化**: Lifecycle Policyによる自動的なストレージクラス移行
4. **コスト削減**: 
   - 3年以内: S3 Standard → S3 IA (30日後)
   - 3年以上: S3 Glacier (90日後) → S3 Glacier Deep Archive (1年後)
5. **データ保護**: Cross-Region Replicationによる地理的冗長性
6. **法的要件**: 地域別のレプリケーション設定で対応

**コスト最適化の詳細：**
- S3 Standard: 新規コンテンツ（即座アクセス）
- S3 IA: 3年以内のコンテンツ（アクセス頻度低下）
- S3 Glacier: 3年以上のコンテンツ（稀なアクセス）
- S3 Glacier Deep Archive: 長期保存（年数回アクセス）

**他の選択肢の問題点：**
- **選択肢A**: Intelligent-Tieringは予測可能なアクセスパターンには不要、Macieはコンテンツ分析用途で要件外
- **選択肢C**: EFSは大容量動画ストレージには非効率、コストが高い
- **選択肢D**: One Zone-IAは可用性が低く、Storage Gatewayは不要

**アーキテクチャの利点：**
- 50%以上のコスト削減達成
- 自動的なデータライフサイクル管理
- 高い可用性と耐久性（99.999999999%）
- スケーラビリティの確保`
  },

  {
    id: 'adv-storage-002',
    category: 'ストレージ',
    question: `グローバル製薬会社が、創薬研究のためのゲノム解析データ管理システムをAWSで構築しています。このシステムには以下の特殊な要件があります：

- 単一ゲノムデータファイル：3TB-10TB
- 研究プロジェクト期間：5-10年
- 同時並行プロジェクト：50-100件
- 研究者間でのデータ共有が頻繁（世界10拠点）
- 計算処理時の高速I/O性能が必要（100GB/s以上）
- データの版数管理が必要（研究過程での変更追跡）
- 規制要件：21 CFR Part 11準拠（FDA規制）
- セキュリティ：研究データの暗号化と監査ログ
- 災害復旧：RPO 1時間、RTO 4時間以内
- 長期保存：プロジェクト完了後20年間の保存義務

この複雑な要件を満たす最適なストレージアーキテクチャはどれですか？`,
    options: [
      'Amazon FSx for Lustre + S3 + AWS DataSync + S3 Versioning + AWS CloudTrail + S3 Object Lock + Cross-Region Replication',
      'Amazon EFS + S3 Glacier + AWS Storage Gateway + S3 Intelligent-Tiering + AWS Config + S3 Cross-Region Replication',
      'Amazon EBS + S3 + AWS Backup + S3 Standard-IA + AWS CloudFormation + S3 Transfer Acceleration',
      'Amazon S3 + AWS DataSync + Amazon WorkDocs + S3 One Zone-IA + AWS Systems Manager + S3 Batch Operations'
    ],
    correct: 0,
    explanation: `正解は「Amazon FSx for Lustre + S3 + AWS DataSync + S3 Versioning + AWS CloudTrail + S3 Object Lock + Cross-Region Replication」です。

この選択肢が最適な理由：

**高性能要件への対応：**
1. **FSx for Lustre**: 100GB/s以上の高速I/O性能を実現
2. **並列処理**: 複数の研究プロジェクトでの同時アクセス対応
3. **S3統合**: Lustreファイルシステムと S3の seamless統合

**規制・セキュリティ要件への対応：**
1. **21 CFR Part 11準拠**: 
   - S3 Versioning: データの版数管理と変更追跡
   - S3 Object Lock: データの改ざん防止
   - CloudTrail: 完全な監査ログ
2. **暗号化**: FSx、S3両方での暗号化サポート
3. **アクセス制御**: IAMとの統合による細かい権限管理

**災害復旧・長期保存への対応：**
1. **Cross-Region Replication**: RPO 1時間の要件を満たす
2. **S3の高可用性**: RTO 4時間以内の復旧
3. **長期保存**: S3 Glacier/Deep Archiveへの自動移行

**データ管理の最適化：**
1. **DataSync**: オンプレミスとの効率的なデータ同期
2. **版数管理**: S3 Versioningによる研究過程の追跡
3. **世界10拠点**: Cross-Region Replicationによる地理的分散

**他の選択肢の問題点：**
- **選択肢B**: EFSは高性能計算には不十分、Storage Gatewayは不要
- **選択肢C**: EBSは共有ストレージとして不適切、単一インスタンス制限
- **選択肢D**: WorkDocsは研究データ管理には不適切、One Zone-IAは可用性不足

**FSx for Lustreの特別な利点：**
- HPC（高性能計算）に最適化
- S3との native統合
- POSIX準拠のファイルシステム
- 研究・科学計算での実績`
  },

  {
    id: 'adv-storage-003',
    category: 'ストレージ',
    question: `大手金融機関が、取引データの長期保存とコンプライアンス要件を満たすためのアーカイブシステムをAWSで構築しています。このシステムには以下の厳格な要件があります：

- 日次取引データ：1TB-5TB
- 保存期間：法的要件により最低30年間
- データの完全性：ビット単位での検証が必要
- 取得時間：規制当局の要求に対して24時間以内
- 暗号化：保存時・転送時の両方で最高レベル
- 監査要件：すべてのアクセスログの永続保存
- 地理的分散：異なる大陸での複製保存
- コスト効率：現在のテープストレージより50%削減
- 災害復旧：データセンター全体の損失にも対応
- 規制対応：SOX法、バーゼルIII、GDPR準拠

この厳格な要件を満たす最適なアーカイブアーキテクチャはどれですか？`,
    options: [
      'S3 Glacier Deep Archive + S3 Object Lock + S3 Cross-Region Replication + CloudTrail + S3 Inventory + AWS Config',
      'S3 Standard + S3 Intelligent-Tiering + S3 Transfer Acceleration + CloudFront + S3 Analytics + Macie',
      'AWS Storage Gateway + S3 Glacier + AWS Backup + DataSync + Systems Manager + CloudFormation',
      'Amazon EFS + S3 Standard-IA + AWS DataSync + CloudWatch + S3 Batch Operations + Lambda'
    ],
    correct: 0,
    explanation: `正解は「S3 Glacier Deep Archive + S3 Object Lock + S3 Cross-Region Replication + CloudTrail + S3 Inventory + AWS Config」です。

この選択肢が最適な理由：

**長期保存・コスト要件への対応：**
1. **S3 Glacier Deep Archive**: 
   - 最低コストのストレージクラス（テープより50%削減達成）
   - 30年間の長期保存に最適
   - 99.999999999%の耐久性
2. **取得時間**: 12時間以内の標準取得（24時間要件を満たす）

**規制・コンプライアンス要件への対応：**
1. **S3 Object Lock**: 
   - WORM（Write Once, Read Many）機能
   - データの改ざん防止（SOX法対応）
   - 法的保持期間の強制
2. **CloudTrail**: すべてのAPI呼び出しの永続ログ
3. **AWS Config**: リソース設定の継続的監視

**データ保護・災害復旧への対応：**
1. **Cross-Region Replication**: 
   - 異なる大陸での自動複製
   - 地理的災害への対応
   - GDPR等の地域規制への対応
2. **暗号化**: 
   - 保存時: S3 SSE-KMS/SSE-C
   - 転送時: TLS 1.2以上

**運用・監査への対応：**
1. **S3 Inventory**: 定期的なデータ整合性チェック
2. **ビット単位検証**: S3の自動チェックサム検証
3. **監査ログ**: CloudTrailによる完全な操作履歴

**他の選択肢の問題点：**
- **選択肢B**: Intelligent-Tieringは予測可能なアーカイブには不要、コストが高い
- **選択肢C**: Storage Gatewayは複雑性を増すだけで、要件に不適切
- **選択肢D**: EFSは長期アーカイブには不適切、コストが非常に高い

**規制対応の詳細：**
- **SOX法**: Object Lockによる改ざん防止
- **バーゼルIII**: 長期データ保存と監査ログ
- **GDPR**: 地域別データ保存とアクセス制御

**コスト最適化：**
- Deep Archive: $0.00099/GB/月（最低コスト）
- テープストレージ比50%以上削減
- 運用コストの大幅削減`
  }
]

module.exports = advancedStorageQuestions
