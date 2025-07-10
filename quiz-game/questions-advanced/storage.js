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
- **S3 Standard + S3 Intelligent-Tiering + CloudFront + S3 Transfer Acceleration + S3 Object Lock + Macie**: Intelligent-Tieringは予測可能なアクセスパターンには不要、Macieはコンテンツ分析用途で要件外
- **EFS + EC2 + CloudFront + AWS DataSync + AWS Backup + S3 Glacier for archival**: EFSは大容量動画ストレージには非効率、コストが高い
- **S3 Standard + S3 One Zone-IA + CloudFront + AWS Storage Gateway + S3 Batch Operations**: One Zone-IAは可用性が低く、Storage Gatewayは不要

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
- **Amazon EFS + S3 Glacier + AWS Storage Gateway + S3 Intelligent-Tiering + AWS Config + S3 Cross-Region Replication**: EFSは高性能計算には不十分、Storage Gatewayは不要
- **Amazon EBS + S3 + AWS Backup + S3 Standard-IA + AWS CloudFormation + S3 Transfer Acceleration**: EBSは共有ストレージとして不適切、単一インスタンス制限
- **Amazon S3 + AWS DataSync + Amazon WorkDocs + S3 One Zone-IA + AWS Systems Manager + S3 Batch Operations**: WorkDocsは研究データ管理には不適切、One Zone-IAは可用性不足

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
- **S3 Standard + S3 Intelligent-Tiering + S3 Transfer Acceleration + CloudFront + S3 Analytics + Macie**: Intelligent-Tieringは予測可能なアーカイブには不要、Macieはコンテンツ分析用途で要件外
- **AWS Storage Gateway + S3 Glacier + AWS Backup + DataSync + Systems Manager + CloudFormation**: Storage Gatewayは複雑性を増すだけで、要件に不適切
- **Amazon EFS + S3 Standard-IA + AWS DataSync + CloudWatch + S3 Batch Operations + Lambda**: EFSは長期アーカイブには不適切、コストが非常に高い

**規制対応の詳細：**
- **SOX法**: Object Lockによる改ざん防止
- **バーゼルIII**: 長期データ保存と監査ログ
- **GDPR**: 地域別データ保存とアクセス制御

**コスト最適化：**
- Deep Archive: $0.00099/GB/月（最低コスト）
- テープストレージ比50%以上削減
- 運用コストの大幅削減`
  },
  {
    id: 'adv-storage-004',
    category: 'ストレージ',
    question: `大手メディア企業が、4K/8K動画コンテンツのアーカイブシステムを構築しています。以下の要件があります：

1. 総データ量：100PB以上の動画ファイル
2. 新しいコンテンツの日次アップロード：10TB
3. アクセスパターン：90%は1年以内、9%は1-7年、1%は7年以上
4. 復旧時間要件：緊急時は1時間以内、通常は12時間以内
5. コスト最適化が最重要（現在のオンプレミス比50%削減目標）
6. 地理的分散によるデータ保護
7. メタデータ検索とコンテンツ管理

この要件を満たすために、最も適切なストレージ戦略はどれですか？`,
    options: [
      'S3 Intelligent-Tiering + S3 Glacier + S3 Glacier Deep Archive + Cross-Region Replication + S3 Inventoryを使用し、自動階層化アーカイブを構築する',
      'EFS + EBS gp3 + S3 Standard + AWS Backup + DataSyncを使用し、ハイブリッドストレージ環境を構築する',
      'FSx for Lustre + S3 Standard-IA + Glacier + AWS Storage Gateway + CloudFrontを使用し、高性能ファイルシステムを構築する',
      'EBS Provisioned IOPS + S3 One Zone-IA + Tape Gateway + Direct Connectを使用し、従来型ストレージ環境を構築する'
    ],
    correct: 0,
    explanation: `大規模動画アーカイブには、S3 Intelligent-Tiering + S3 Glacier + S3 Glacier Deep Archive + Cross-Region Replication + S3 Inventoryの組み合わせが最適です。

理由：
1. **S3 Intelligent-Tiering**: アクセスパターンに基づく自動階層化でコスト最適化
2. **S3 Glacier**: 1-7年のデータに適した中期アーカイブ（12時間復旧）
3. **S3 Glacier Deep Archive**: 7年以上のデータに最適な長期アーカイブ（最大50%コスト削減）
4. **Cross-Region Replication**: 地理的分散によるデータ保護
5. **S3 Inventory**: メタデータ管理とコンテンツ検索

他の選択肢の問題点：
- **EFS + EBS gp3 + S3 Standard + AWS Backup + DataSyncを使用し、ハイブリッドストレージ環境を構築する**: EFSとEBSは100PB規模には不適切でコスト高
- **FSx for Lustre + S3 Standard-IA + Glacier + AWS Storage Gateway + CloudFrontを使用し、高性能ファイルシステムを構築する**: FSx for Lustreは高性能だがアーカイブ用途には過剰
- **EBS Provisioned IOPS + S3 One Zone-IA + Tape Gateway + Direct Connectを使用し、従来型ストレージ環境を構築する**: One Zone-IAは地理的分散要件を満たさない`
  },
  {
    id: 'adv-storage-005',
    category: 'ストレージ',
    question: `大手製薬会社が、創薬研究データの管理システムを構築しています。以下の要件があります：

1. 研究データ：分子構造、実験結果、臨床試験データ（数十TB/日）
2. 規制要件：FDA 21 CFR Part 11、GxP準拠
3. データ整合性：改ざん検知と監査証跡
4. 研究者間でのセキュアなデータ共有
5. 機械学習による創薬支援（高速データアクセス）
6. 長期保存：25年間の保持義務
7. 災害復旧：RPO 1時間、RTO 4時間

この要件を満たすために、最も適切なストレージアーキテクチャはどれですか？`,
    options: [
      'S3 + S3 Object Lock + CloudTrail + Macie + DataSync + Glacier Deep Archiveを使用し、コンプライアンス対応ストレージを構築する',
      'EFS + AWS Backup + KMS + IAM + VPC Endpoints + S3 Standard-IAを使用し、ファイルベースストレージを構築する',
      'FSx for Windows + Active Directory + DLP + AWS Config + S3 Glacierを使用し、Windows統合ストレージを構築する',
      'EBS + Snapshot + Encryption + CloudWatch + S3 One Zone-IAを使用し、ブロックストレージベースを構築する'
    ],
    correct: 0,
    explanation: `製薬会社の規制要件には、S3 + S3 Object Lock + CloudTrail + Macie + DataSync + Glacier Deep Archiveの組み合わせが最適です。

理由：
1. **S3 Object Lock**: WORM（Write Once Read Many）でデータ改ざん防止
2. **CloudTrail**: 完全な監査証跡でGxP準拠
3. **Macie**: 機密データの自動分類と保護
4. **DataSync**: セキュアなデータ転送と同期
5. **Glacier Deep Archive**: 25年間の長期保存に最適なコスト

他の選択肢の問題点：
- **EFS + AWS Backup + KMS + IAM + VPC Endpoints + S3 Standard-IAを使用し、ファイルベースストレージを構築する**: EFSはオブジェクトロック機能がなく、改ざん検知が困難
- **FSx for Windows + Active Directory + DLP + AWS Config + S3 Glacierを使用し、Windows統合ストレージを構築する**: FSx for Windowsは製薬業界の標準的なLinux環境に不適切
- **EBS + Snapshot + Encryption + CloudWatch + S3 One Zone-IAを使用し、ブロックストレージベースを構築する**: EBSは大規模データ共有に不適切`
  },
  {
    id: 'adv-storage-006',
    category: 'ストレージ',
    question: `大手金融機関が、高頻度取引（HFT）システムのストレージ最適化を行っています。以下の要件があります：

1. 取引データの超低レイテンシアクセス（マイクロ秒レベル）
2. 1秒間に数百万件の取引記録
3. データの完全性と可用性（99.999%）
4. リアルタイムバックアップと災害復旧
5. 規制要件による7年間の完全なデータ保持
6. 取引データの暗号化（保存時・転送時）
7. 監査ログの改ざん防止

この要件を満たすために、最も適切なストレージアーキテクチャはどれですか？`,
    options: [
      'EBS Provisioned IOPS SSD (io2) + Multi-Attach + Instance Store + S3 + Glacier + KMSを使用し、超高性能ストレージを構築する',
      'EFS + General Purpose SSD + S3 Standard-IA + CloudTrail + AWS Configを使用し、ファイルベースストレージを構築する',
      'FSx for Lustre + S3 + DataSync + AWS Backup + Macieを使用し、高性能並列ファイルシステムを構築する',
      'S3 + DynamoDB + ElastiCache + Lambda + Step Functionsを使用し、サーバーレスストレージを構築する'
    ],
    correct: 0,
    explanation: `高頻度取引システムには、EBS Provisioned IOPS SSD (io2) + Multi-Attach + Instance Store + S3 + Glacier + KMSの組み合わせが最適です。

理由：
1. **EBS io2**: 最大64,000 IOPSでマイクロ秒レベルのレイテンシを実現
2. **Multi-Attach**: 複数インスタンスからの同時アクセスで高可用性
3. **Instance Store**: 最高性能のローカルストレージでリアルタイム処理
4. **S3**: 取引データの永続化と7年間保持
5. **Glacier**: 長期アーカイブでコスト最適化
6. **KMS**: 暗号化キー管理

他の選択肢の問題点：
- **EFS + General Purpose SSD + S3 Standard-IA + CloudTrail + AWS Configを使用し、ファイルベースストレージを構築する**: EFSはマイクロ秒レベルのレイテンシ要件を満たせない
- **FSx for Lustre + S3 + DataSync + AWS Backup + Macieを使用し、高性能並列ファイルシステムを構築する**: FSx for Lustreは並列処理用で、取引システムには過剰
- **S3 + DynamoDB + ElastiCache + Lambda + Step Functionsを使用し、サーバーレスストレージを構築する**: サーバーレスは超低レイテンシ要件に不適切`
  },
  {
    id: 'adv-storage-007',
    category: 'ストレージ',
    question: `大手自動車メーカーが、自動運転車のデータ収集・分析システムを構築しています。以下の要件があります：

1. 車両からのデータ：センサーデータ、映像、ログ（1台あたり4TB/日）
2. 車両台数：100万台（将来的に1000万台）
3. データ取り込み：リアルタイムと定期バッチ
4. 機械学習用の高速データアクセス
5. 地域別のデータ保存（プライバシー規制対応）
6. 長期保存：安全性分析のため10年間
7. 災害時のデータ保護

この要件を満たすために、最も適切なデータレイクアーキテクチャはどれですか？`,
    options: [
      'S3 + S3 Transfer Acceleration + Kinesis Data Firehose + Glue + Athena + Lake Formation + Cross-Region Replicationを使用し、スケーラブルデータレイクを構築する',
      'EFS + DataSync + EMR + Redshift + QuickSight + AWS Backupを使用し、ファイルベースデータレイクを構築する',
      'FSx for Lustre + Direct Connect + Batch + SageMaker + CloudWatch + S3 Glacierを使用し、高性能データレイクを構築する',
      'EBS + EC2 + Kafka + Spark + Elasticsearch + Kibanaを使用し、オープンソースデータレイクを構築する'
    ],
    correct: 0,
    explanation: `自動運転車のデータレイクには、S3 + S3 Transfer Acceleration + Kinesis Data Firehose + Glue + Athena + Lake Formation + Cross-Region Replicationの組み合わせが最適です。

理由：
1. **S3**: ペタバイト規模のデータに対応する無制限ストレージ
2. **Transfer Acceleration**: 世界中からの高速データアップロード
3. **Kinesis Data Firehose**: リアルタイムデータストリーミング
4. **Glue**: ETL処理とデータカタログ管理
5. **Athena**: サーバーレスでの高速クエリ実行
6. **Lake Formation**: データレイクのセキュリティとガバナンス
7. **Cross-Region Replication**: 地域別データ保存と災害復旧

他の選択肢の問題点：
- **EFS + DataSync + EMR + Redshift + QuickSight + AWS Backupを使用し、ファイルベースデータレイクを構築する**: EFSは大規模データレイクには不適切
- **FSx for Lustre + Direct Connect + Batch + SageMaker + CloudWatch + S3 Glacierを使用し、高性能データレイクを構築する**: FSx for Lustreは高コストで長期保存に不向き
- **EBS + EC2 + Kafka + Spark + Elasticsearch + Kibanaを使用し、オープンソースデータレイクを構築する**: 自前構築は運用負荷が高く、スケーラビリティに限界`
  },
  {
    id: 'adv-storage-008',
    category: 'ストレージ',
    question: `大手病院グループが、医療画像（DICOM）の統合管理システムを構築しています。以下の要件があります：

1. 医療画像データ：CT、MRI、X線画像（1日あたり50TB）
2. 高解像度画像の高速表示（放射線科医の診断用）
3. HIPAA、GDPR等の医療プライバシー規制準拠
4. 画像データの長期保存（法的要件：30年間）
5. 複数病院間でのセキュアな画像共有
6. 災害復旧とデータ保護
7. AI診断支援システムとの連携

この要件を満たすために、最も適切な医療画像ストレージアーキテクチャはどれですか？`,
    options: [
      'S3 + CloudFront + Lambda + Macie + KMS + VPC Endpoints + S3 Glacier Deep Archiveを使用し、HIPAA準拠画像ストレージを構築する',
      'EFS + FSx for Windows + Active Directory + AWS Certificate Manager + Direct Connectを使用し、ファイルベース画像ストレージを構築する',
      'EBS + EC2 + Application Load Balancer + RDS + ElastiCache + CloudWatchを使用し、従来型画像ストレージを構築する',
      'FSx for Lustre + ParallelCluster + SageMaker + Batch + S3 Standard-IAを使用し、高性能画像処理ストレージを構築する'
    ],
    correct: 0,
    explanation: `医療画像管理システムには、S3 + CloudFront + Lambda + Macie + KMS + VPC Endpoints + S3 Glacier Deep Archiveの組み合わせが最適です。

理由：
1. **S3**: 医療画像の大容量ストレージと高い耐久性（99.999999999%）
2. **CloudFront**: 高解像度画像の高速配信
3. **Lambda**: DICOM画像の変換とメタデータ処理
4. **Macie**: PHI（個人健康情報）の自動検出と保護
5. **KMS**: 医療データの暗号化管理
6. **VPC Endpoints**: セキュアな病院間通信
7. **Glacier Deep Archive**: 30年間の長期保存に最適

他の選択肢の問題点：
- **EFS + FSx for Windows + Active Directory + AWS Certificate Manager + Direct Connectを使用し、ファイルベース画像ストレージを構築する**: FSx for Windowsは医療業界の標準的なLinux環境に不適切
- **EBS + EC2 + Application Load Balancer + RDS + ElastiCache + CloudWatchを使用し、従来型画像ストレージを構築する**: 従来型アーキテクチャはスケーラビリティとコンプライアンスに課題
- **FSx for Lustre + ParallelCluster + SageMaker + Batch + S3 Standard-IAを使用し、高性能画像処理ストレージを構築する**: FSx for Lustreは医療画像管理には過剰で高コスト`
  },
  {
    id: 'adv-storage-009',
    category: 'ストレージ',
    question: `大手ゲーム会社が、オンラインゲームのセーブデータとアセット配信システムを構築しています。以下の要件があります：

1. 世界中のプレイヤーのセーブデータ（数億ユーザー）
2. ゲームアセット（テクスチャ、モデル）の高速配信
3. プレイヤーの地域に関係なく低レイテンシアクセス
4. ゲームアップデート時の大量ダウンロード対応
5. セーブデータの整合性保証と復旧機能
6. 地域別の法規制対応（データローカライゼーション）
7. コスト効率的な運用

この要件を満たすために、最も適切なゲーム向けストレージアーキテクチャはどれですか？`,
    options: [
      'S3 + CloudFront + Global Accelerator + DynamoDB Global Tables + Lambda@Edge + S3 Transfer Accelerationを使用し、グローバルゲームストレージを構築する',
      'EFS + Application Load Balancer + ElastiCache + RDS Multi-AZ + Route 53を使用し、ファイルベースゲームストレージを構築する',
      'FSx for Lustre + Direct Connect + EC2 + Auto Scaling + CloudWatchを使用し、高性能ゲームストレージを構築する',
      'EBS + Instance Store + Network Load Balancer + Redis + PostgreSQLを使用し、ブロックストレージベースを構築する'
    ],
    correct: 0,
    explanation: `オンラインゲームのストレージには、S3 + CloudFront + Global Accelerator + DynamoDB Global Tables + Lambda@Edge + S3 Transfer Accelerationの組み合わせが最適です。

理由：
1. **S3**: ゲームアセットの大容量ストレージと高い可用性
2. **CloudFront**: 世界中への高速コンテンツ配信
3. **Global Accelerator**: Anycastネットワークで低レイテンシを実現
4. **DynamoDB Global Tables**: セーブデータのグローバル同期と整合性
5. **Lambda@Edge**: エッジでのデータ処理と地域別制御
6. **Transfer Acceleration**: 大容量アップデートの高速配信

他の選択肢の問題点：
- **EFS + Application Load Balancer + ElastiCache + RDS Multi-AZ + Route 53を使用し、ファイルベースゲームストレージを構築する**: EFSは世界規模のゲーム配信には不適切
- **FSx for Lustre + Direct Connect + EC2 + Auto Scaling + CloudWatchを使用し、高性能ゲームストレージを構築する**: FSx for Lustreは高コストでゲーム用途には過剰
- **EBS + Instance Store + Network Load Balancer + Redis + PostgreSQLを使用し、ブロックストレージベースを構築する**: ブロックストレージはコンテンツ配信に不適切`
  },
  {
    id: 'adv-storage-010',
    category: 'ストレージ',
    question: `大手エネルギー会社が、石油・ガス探査データの管理システムを構築しています。以下の要件があります：

1. 地震探査データ：3D/4Dサイスミックデータ（1プロジェクトあたり数百TB）
2. 高性能計算（HPC）での地質解析処理
3. 研究者間でのセキュアなデータ共有
4. 長期保存：探査データの永続保管（50年以上）
5. 災害復旧：重要データの地理的分散
6. コンプライアンス：業界規制と環境規制への対応
7. 段階的なデータアクセス（頻繁→稀→アーカイブ）

この要件を満たすために、最も適切な探査データストレージアーキテクチャはどれですか？`,
    options: [
      'FSx for Lustre + S3 + S3 Intelligent-Tiering + Glacier Deep Archive + Cross-Region Replication + AWS ParallelClusterを使用し、HPC対応探査データストレージを構築する',
      'EFS + S3 Standard + Glacier + DataSync + Direct Connect + AWS Backupを使用し、ファイルベース探査データストレージを構築する',
      'EBS Provisioned IOPS + Instance Store + S3 One Zone-IA + Tape Gateway + CloudWatchを使用し、従来型探査データストレージを構築する',
      'S3 + DynamoDB + Lambda + Step Functions + Athena + QuickSightを使用し、サーバーレス探査データストレージを構築する'
    ],
    correct: 0,
    explanation: `石油・ガス探査データには、FSx for Lustre + S3 + S3 Intelligent-Tiering + Glacier Deep Archive + Cross-Region Replication + AWS ParallelClusterの組み合わせが最適です。

理由：
1. **FSx for Lustre**: 高性能並列ファイルシステムでHPC処理に最適
2. **S3**: 探査データの永続ストレージと高い耐久性
3. **S3 Intelligent-Tiering**: アクセスパターンに応じた自動階層化
4. **Glacier Deep Archive**: 50年以上の長期保存に最適なコスト
5. **Cross-Region Replication**: 地理的分散による災害復旧
6. **ParallelCluster**: 地質解析のHPC環境

他の選択肢の問題点：
- **EFS + S3 Standard + Glacier + DataSync + Direct Connect + AWS Backupを使用し、ファイルベース探査データストレージを構築する**: EFSはHPCワークロードの性能要件を満たせない
- **EBS Provisioned IOPS + Instance Store + S3 One Zone-IA + Tape Gateway + CloudWatchを使用し、従来型探査データストレージを構築する**: One Zone-IAは地理的分散要件を満たさない
- **S3 + DynamoDB + Lambda + Step Functions + Athena + QuickSightを使用し、サーバーレス探査データストレージを構築する**: サーバーレスはHPC処理に不適切`
  },

  // 複数選択問題
  {
    id: 'adv-storage-multi-001',
    category: 'ストレージ',
    question: `大手メディア企業が、4K/8K動画コンテンツの配信プラットフォームを構築しています。以下の要件があります：

**要件：**
- 動画ファイルサイズ：1本あたり50GB-500GB
- 月間アップロード：10,000本の新規動画
- 世界中への高速配信が必要
- 長期保存（10年以上）でコスト最適化
- 動画の自動トランスコーディング
- メタデータ検索機能

このアーキテクチャに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'Amazon S3 Intelligent-Tiering - 自動的なストレージクラス最適化',
      'Amazon CloudFront - グローバルコンテンツ配信ネットワーク',
      'AWS Elemental MediaConvert - 動画トランスコーディングサービス',
      'Amazon EFS - 共有ファイルシステム',
      'AWS Storage Gateway - ハイブリッドストレージ統合',
      'Amazon FSx for Lustre - 高性能ファイルシステム'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon S3 Intelligent-Tiering**
- アクセスパターンに基づく自動的なストレージクラス移行
- 長期保存でのコスト最適化
- 大容量動画ファイルの保存に最適
- 99.999999999%（11 9's）の耐久性

**2. Amazon CloudFront**
- 世界中のエッジロケーションからの高速配信
- 大容量動画ファイルの効率的な配信
- オリジンへの負荷軽減
- 視聴者に最も近い場所からの配信

**3. AWS Elemental MediaConvert**
- 動画専用のトランスコーディングサービス
- 複数の出力形式への自動変換
- スケーラブルな処理能力
- 品質とコストのバランス最適化

**他の選択肢について：**
- **Amazon EFS**: 動画配信には不適切、コストも高い
- **Storage Gateway**: オンプレミス統合が主目的で要件に不適合
- **FSx for Lustre**: HPC用途で動画配信には不適切`
  },

  {
    id: 'adv-storage-multi-002',
    category: 'ストレージ',
    question: `金融機関が、規制要件を満たすデータアーカイブシステムを構築しています。以下の要件があります：

**要件：**
- データ保存期間：30年間
- 年間データ増加量：100TB
- 規制要件：データの改ざん防止（WORM）
- 監査ログの完全性保証
- 災害復旧：地理的に分散した保存
- コスト最適化が重要
- 検索・取得は年数回程度

このアーキテクチャに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'Amazon S3 Glacier Deep Archive - 長期アーカイブ専用ストレージ',
      'Amazon S3 Object Lock - オブジェクトの改ざん防止機能',
      'AWS CloudTrail - API呼び出しの監査ログ',
      'Amazon EBS Snapshots - ブロックストレージのバックアップ',
      'AWS Backup - 統合バックアップサービス',
      'Amazon S3 Standard-IA - 低頻度アクセス用ストレージ'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. Amazon S3 Glacier Deep Archive**
- 最も低コストな長期アーカイブストレージ
- 30年間の保存に最適化
- 99.999999999%（11 9's）の耐久性
- 複数のアベイラビリティーゾーンに自動複製

**2. Amazon S3 Object Lock**
- WORM（Write Once Read Many）機能の提供
- 規制要件の改ざん防止を満たす
- リーガルホールド機能
- コンプライアンス要件への対応

**他の選択肢について：**
- **CloudTrail**: 監査ログは重要だが、データアーカイブの主要機能ではない
- **EBS Snapshots**: ブロックストレージ用で要件に不適合
- **AWS Backup**: 統合管理は便利だが、コスト最適化の観点で不適切
- **S3 Standard-IA**: 長期保存にはコストが高い`
  },

  {
    id: 'adv-storage-multi-003',
    category: 'ストレージ',
    question: `自動車メーカーが、自動運転車両のデータ収集・分析システムを構築しています。以下の要件があります：

**要件：**
- 車両1台あたり1日10GBのセンサーデータ
- 全世界10万台の車両からデータ収集
- リアルタイム異常検知が必要
- 機械学習モデルの学習用データセット作成
- データレイク構築による分析基盤
- 地域別データ主権要件への対応

このアーキテクチャに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'Amazon S3 - スケーラブルオブジェクトストレージ',
      'AWS Lake Formation - データレイク構築・管理サービス',
      'Amazon Kinesis Data Firehose - ストリーミングデータの配信',
      'Amazon Redshift - データウェアハウス',
      'Amazon DynamoDB - NoSQLデータベース',
      'Amazon OpenSearch Service - 検索・分析エンジン'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon S3**
- 無制限のスケーラビリティ
- 複数のストレージクラスによるコスト最適化
- データレイクの中核ストレージ
- 地域別バケット配置による主権要件対応

**2. AWS Lake Formation**
- データレイクの構築・管理を簡素化
- データカタログとメタデータ管理
- 機械学習用データセットの効率的な作成
- セキュリティとアクセス制御の統合管理

**3. Amazon Kinesis Data Firehose**
- ストリーミングデータの自動配信
- S3への効率的なデータ取り込み
- リアルタイム処理パイプラインの構築
- データ変換機能による前処理

**他の選択肢について：**
- **Redshift**: 構造化データ分析には適しているが、センサーデータには不適切
- **DynamoDB**: リアルタイム処理には適しているが、大容量データレイクには不適切
- **OpenSearch**: 検索機能は有用だが、主要なストレージ要件ではない`
  }
]

module.exports = advancedStorageQuestions
