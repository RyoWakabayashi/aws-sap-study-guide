// AWS Solution Architect Professional 上級編 - 統合問題ファイル
// このファイルは自動生成されます。直接編集しないでください。

const allAdvancedQuestions = [
  {
    id: 'adv-comp-001',
    category: 'コンピューティング',
    question: 'あなたの会社は、グローバルに展開するeコマースプラットフォームを運営しており、ピーク時には通常の10倍のトラフィックが発生します。現在のアーキテクチャでは、Application Load Balancer（ALB）の背後にAuto Scaling GroupでEC2インスタンスを配置していますが、以下の課題があります：\n\n1. 新しいインスタンスの起動に5-7分かかり、急激なトラフィック増加に対応できない\n2. インスタンスの起動コストが高く、短時間のピークに対してコスト効率が悪い\n3. 地域によってレスポンス時間にばらつきがある\n4. メンテナンス時のダウンタイムを最小化したい\n\nこれらの課題を解決するために、最も適切なアーキテクチャの組み合わせはどれですか？',
    options: [
      'AWS Lambda + API Gateway + CloudFront + DynamoDB Global Tablesを使用し、サーバーレスアーキテクチャに移行する',
      'EC2 Spot Fleet + Warm Pool + Application Load Balancer + ElastiCacheを使用し、予めウォームアップされたインスタンスを準備する',
      'AWS Fargate + ECS Service + Application Load Balancer + Aurora Global Databaseを使用し、コンテナベースのアーキテクチャに移行する',
      'EC2 Reserved Instances + Predictive Scaling + Network Load Balancer + RDS Read Replicasを使用し、予測ベースのスケーリングを実装する'
    ],
    correct: 0,
    explanation: '正解は「AWS Lambda + API Gateway + CloudFront + DynamoDB Global Tablesを使用し、サーバーレスアーキテクチャに移行する」です。\n\nこの選択肢が最適な理由：\n\n**課題解決の観点：**\n1. **起動時間の問題**: Lambdaは数ミリ秒で起動し、コールドスタートでも数秒以内\n2. **コスト効率**: 実際の実行時間のみ課金、アイドル時間のコストなし\n3. **地域対応**: CloudFrontによる世界規模のエッジロケーション活用\n4. **ダウンタイム**: サーバーレスによる自動的な高可用性\n\n**他の選択肢の問題点：**\n- **選択肢B**: Warm Poolは改善されるが、依然としてEC2の起動時間とコストの課題が残る\n- **選択肢C**: Fargateは改善されるが、コンテナ起動時間とコストの課題が完全には解決されない\n- **選択肢D**: Predictive Scalingは予測に依存し、予期しないトラフィック急増に対応できない\n\n**アーキテクチャの利点：**\n- 無限スケーラビリティ\n- 地理的分散による低レイテンシ\n- 運用オーバーヘッドの最小化\n- 従量課金によるコスト最適化'
  },
  {
    id: 'adv-comp-002',
    category: 'コンピューティング',
    question: '大手金融機関が、レガシーなメインフレームシステムからAWSへの移行を計画しています。このシステムは以下の特徴があります：\n\n- 24時間365日の稼働が必要（ダウンタイム許容度：年間5分以内）\n- 1秒間に10,000件のトランザクション処理が必要\n- データの整合性が極めて重要（ACID特性の完全な保証が必要）\n- 規制要件により、特定の地域内でのデータ保存が義務付けられている\n- 既存のCOBOLアプリケーションが数百本存在\n- ピーク時とオフピーク時で処理量が3倍異なる\n\nこの要件を満たすために、最も適切な移行戦略とアーキテクチャはどれですか？',
    options: [
      'AWS Mainframe Modernization + Amazon Aurora + Multi-AZ配置 + Auto Scalingを使用し、段階的にマイクロサービス化を進める',
      'Amazon EC2 Dedicated Hosts + Oracle RAC + EBS Multi-Attach + Placement Groupsを使用し、オンプレミス環境を忠実に再現する',
      'AWS Lambda + Amazon DynamoDB + API Gateway + Step Functionsを使用し、完全サーバーレスアーキテクチャに移行する',
      'Amazon EKS + Amazon RDS Proxy + ElastiCache + Application Load Balancerを使用し、コンテナベースのマイクロサービスアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: '正解は「AWS Mainframe Modernization + Amazon Aurora + Multi-AZ配置 + Auto Scalingを使用し、段階的にマイクロサービス化を進める」です。\n\nこの選択肢が最適な理由：\n\n**要件への対応：**\n1. **高可用性**: Multi-AZ配置により99.99%以上の可用性を実現\n2. **高性能**: Aurora Clusterにより10,000 TPSの処理能力を確保\n3. **ACID特性**: Auroraは完全なACID特性をサポート\n4. **規制対応**: 特定リージョン内でのデータ保存が可能\n5. **レガシー対応**: AWS Mainframe Modernizationによる段階的移行\n6. **スケーラビリティ**: Auto Scalingによる動的な処理能力調整\n\n**AWS Mainframe Modernizationの利点：**\n- COBOLアプリケーションの段階的移行支援\n- 既存ビジネスロジックの保持\n- リスクを最小化した移行戦略\n\n**他の選択肢の問題点：**\n- **選択肢B**: 高コストで運用複雑性が高い、クラウドの利点を活用できない\n- **選択肢C**: レガシーアプリケーションの移行が困難、ACID特性の保証が困難\n- **選択肢D**: COBOLアプリケーションのコンテナ化が現実的でない\n\n**段階的移行のメリット：**\n- ビジネス継続性の確保\n- リスクの分散\n- 段階的な技術習得\n- ROIの早期実現'
  },
  {
    id: 'adv-comp-003',
    category: 'コンピューティング',
    question: 'グローバル展開するゲーム会社が、リアルタイム対戦ゲームのバックエンドシステムをAWSで構築しています。このシステムには以下の要件があります：\n\n- 世界中のプレイヤー間でのリアルタイム通信（レイテンシ50ms以下）\n- 同時接続プレイヤー数：100万人以上\n- ゲームセッション中の接続断は許容されない\n- 地域間でのゲームデータ同期が必要\n- チート対策のためのサーバーサイド検証が必須\n- ゲームイベント時には通常の5倍のトラフィックが発生\n- コスト効率を重視（特にアイドル時間のコスト削減）\n\nこれらの要件を満たすために、最も適切なアーキテクチャ設計はどれですか？',
    options: [
      'Amazon GameLift + AWS Global Accelerator + ElastiCache Global Datastore + Lambda@Edgeを使用し、地理的に分散されたゲームサーバーアーキテクチャを構築する',
      'EC2 Spot Instances + Application Load Balancer + RDS Aurora Global Database + CloudFrontを使用し、コスト効率を重視したアーキテクチャを構築する',
      'AWS Fargate + API Gateway + DynamoDB Global Tables + CloudFormation StackSetsを使用し、サーバーレスベースのマルチリージョンアーキテクチャを構築する',
      'Amazon EKS + Istio Service Mesh + Amazon MQ + Route 53 Health Checksを使用し、マイクロサービスベースのアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: '正解は「Amazon GameLift + AWS Global Accelerator + ElastiCache Global Datastore + Lambda@Edgeを使用し、地理的に分散されたゲームサーバーアーキテクチャを構築する」です。\n\nこの選択肢が最適な理由：\n\n**要件への対応：**\n1. **低レイテンシ**: Global Acceleratorによる最適化されたネットワーク経路\n2. **大規模同時接続**: GameLiftの自動スケーリングによる100万人対応\n3. **接続安定性**: GameLiftの専用ゲームサーバー管理\n4. **データ同期**: ElastiCache Global Datastoreによる地域間同期\n5. **サーバーサイド検証**: GameLiftでの専用ゲームロジック実行\n6. **動的スケーリング**: イベント時の自動スケールアウト\n7. **コスト効率**: 使用量ベースの課金とSpot Instancesサポート\n\n**各コンポーネントの役割：**\n- **GameLift**: 専用ゲームサーバーの管理と自動スケーリング\n- **Global Accelerator**: 世界規模での低レイテンシ通信\n- **ElastiCache Global Datastore**: リアルタイムデータの地域間同期\n- **Lambda@Edge**: エッジでの軽量処理とチート検証\n\n**他の選択肢の問題点：**\n- **選択肢B**: Spot Instancesは接続断のリスクがあり、ゲーム用途に不適切\n- **選択肢C**: API Gatewayはリアルタイム通信に適さない、WebSocketサポートが限定的\n- **選択肢D**: 複雑すぎる構成で、ゲーム特有の要件に最適化されていない\n\n**GameLiftの特別な利点：**\n- ゲーム専用の最適化\n- プレイヤーマッチメイキング\n- フリート管理の自動化\n- チート対策機能の内蔵'
  },
  {
    id: 'adv-storage-001',
    category: 'ストレージ',
    question: '大手メディア企業が、4K/8K動画コンテンツの配信プラットフォームをAWSで構築しています。このシステムには以下の要件と課題があります：\n\n- 動画ファイルサイズ：1本あたり50GB-500GB\n- 月間新規アップロード：10,000本以上\n- 世界中への配信が必要（150カ国以上）\n- アップロード完了から配信開始まで30分以内\n- 過去3年分のコンテンツへの即座アクセスが必要\n- 3年以上前のコンテンツは年に数回程度のアクセス\n- 法的要件により、一部地域では特定期間のデータ保持が義務\n- コスト最適化が重要（現在のストレージコストを50%削減したい）\n- データの完全性保証が必須（ビット腐敗の検出・修復）\n\nこの要件を満たす最適なストレージアーキテクチャはどれですか？',
    options: [
      'S3 Standard + S3 Intelligent-Tiering + CloudFront + S3 Transfer Acceleration + S3 Object Lock + Macie',
      'S3 Standard + Lifecycle Policy (IA → Glacier → Deep Archive) + CloudFront + Multipart Upload + S3 Cross-Region Replication',
      'EFS + EC2 + CloudFront + AWS DataSync + AWS Backup + S3 Glacier for archival',
      'S3 Standard + S3 One Zone-IA + CloudFront + AWS Storage Gateway + S3 Batch Operations'
    ],
    correct: 1,
    explanation: '正解は「S3 Standard + Lifecycle Policy (IA → Glacier → Deep Archive) + CloudFront + Multipart Upload + S3 Cross-Region Replication」です。\n\nこの選択肢が最適な理由：\n\n**要件への対応：**\n1. **大容量ファイル**: Multipart Uploadにより効率的な大容量ファイルアップロード\n2. **グローバル配信**: CloudFrontによる世界規模のコンテンツ配信\n3. **アクセスパターン最適化**: Lifecycle Policyによる自動的なストレージクラス移行\n4. **コスト削減**: \n   - 3年以内: S3 Standard → S3 IA (30日後)\n   - 3年以上: S3 Glacier (90日後) → S3 Glacier Deep Archive (1年後)\n5. **データ保護**: Cross-Region Replicationによる地理的冗長性\n6. **法的要件**: 地域別のレプリケーション設定で対応\n\n**コスト最適化の詳細：**\n- S3 Standard: 新規コンテンツ（即座アクセス）\n- S3 IA: 3年以内のコンテンツ（アクセス頻度低下）\n- S3 Glacier: 3年以上のコンテンツ（稀なアクセス）\n- S3 Glacier Deep Archive: 長期保存（年数回アクセス）\n\n**他の選択肢の問題点：**\n- **選択肢A**: Intelligent-Tieringは予測可能なアクセスパターンには不要、Macieはコンテンツ分析用途で要件外\n- **選択肢C**: EFSは大容量動画ストレージには非効率、コストが高い\n- **選択肢D**: One Zone-IAは可用性が低く、Storage Gatewayは不要\n\n**アーキテクチャの利点：**\n- 50%以上のコスト削減達成\n- 自動的なデータライフサイクル管理\n- 高い可用性と耐久性（99.999999999%）\n- スケーラビリティの確保'
  },
  {
    id: 'adv-storage-002',
    category: 'ストレージ',
    question: 'グローバル製薬会社が、創薬研究のためのゲノム解析データ管理システムをAWSで構築しています。このシステムには以下の特殊な要件があります：\n\n- 単一ゲノムデータファイル：3TB-10TB\n- 研究プロジェクト期間：5-10年\n- 同時並行プロジェクト：50-100件\n- 研究者間でのデータ共有が頻繁（世界10拠点）\n- 計算処理時の高速I/O性能が必要（100GB/s以上）\n- データの版数管理が必要（研究過程での変更追跡）\n- 規制要件：21 CFR Part 11準拠（FDA規制）\n- セキュリティ：研究データの暗号化と監査ログ\n- 災害復旧：RPO 1時間、RTO 4時間以内\n- 長期保存：プロジェクト完了後20年間の保存義務\n\nこの複雑な要件を満たす最適なストレージアーキテクチャはどれですか？',
    options: [
      'Amazon FSx for Lustre + S3 + AWS DataSync + S3 Versioning + AWS CloudTrail + S3 Object Lock + Cross-Region Replication',
      'Amazon EFS + S3 Glacier + AWS Storage Gateway + S3 Intelligent-Tiering + AWS Config + S3 Cross-Region Replication',
      'Amazon EBS + S3 + AWS Backup + S3 Standard-IA + AWS CloudFormation + S3 Transfer Acceleration',
      'Amazon S3 + AWS DataSync + Amazon WorkDocs + S3 One Zone-IA + AWS Systems Manager + S3 Batch Operations'
    ],
    correct: 0,
    explanation: '正解は「Amazon FSx for Lustre + S3 + AWS DataSync + S3 Versioning + AWS CloudTrail + S3 Object Lock + Cross-Region Replication」です。\n\nこの選択肢が最適な理由：\n\n**高性能要件への対応：**\n1. **FSx for Lustre**: 100GB/s以上の高速I/O性能を実現\n2. **並列処理**: 複数の研究プロジェクトでの同時アクセス対応\n3. **S3統合**: Lustreファイルシステムと S3の seamless統合\n\n**規制・セキュリティ要件への対応：**\n1. **21 CFR Part 11準拠**: \n   - S3 Versioning: データの版数管理と変更追跡\n   - S3 Object Lock: データの改ざん防止\n   - CloudTrail: 完全な監査ログ\n2. **暗号化**: FSx、S3両方での暗号化サポート\n3. **アクセス制御**: IAMとの統合による細かい権限管理\n\n**災害復旧・長期保存への対応：**\n1. **Cross-Region Replication**: RPO 1時間の要件を満たす\n2. **S3の高可用性**: RTO 4時間以内の復旧\n3. **長期保存**: S3 Glacier/Deep Archiveへの自動移行\n\n**データ管理の最適化：**\n1. **DataSync**: オンプレミスとの効率的なデータ同期\n2. **版数管理**: S3 Versioningによる研究過程の追跡\n3. **世界10拠点**: Cross-Region Replicationによる地理的分散\n\n**他の選択肢の問題点：**\n- **選択肢B**: EFSは高性能計算には不十分、Storage Gatewayは不要\n- **選択肢C**: EBSは共有ストレージとして不適切、単一インスタンス制限\n- **選択肢D**: WorkDocsは研究データ管理には不適切、One Zone-IAは可用性不足\n\n**FSx for Lustreの特別な利点：**\n- HPC（高性能計算）に最適化\n- S3との native統合\n- POSIX準拠のファイルシステム\n- 研究・科学計算での実績'
  },
  {
    id: 'adv-storage-003',
    category: 'ストレージ',
    question: '大手金融機関が、取引データの長期保存とコンプライアンス要件を満たすためのアーカイブシステムをAWSで構築しています。このシステムには以下の厳格な要件があります：\n\n- 日次取引データ：1TB-5TB\n- 保存期間：法的要件により最低30年間\n- データの完全性：ビット単位での検証が必要\n- 取得時間：規制当局の要求に対して24時間以内\n- 暗号化：保存時・転送時の両方で最高レベル\n- 監査要件：すべてのアクセスログの永続保存\n- 地理的分散：異なる大陸での複製保存\n- コスト効率：現在のテープストレージより50%削減\n- 災害復旧：データセンター全体の損失にも対応\n- 規制対応：SOX法、バーゼルIII、GDPR準拠\n\nこの厳格な要件を満たす最適なアーカイブアーキテクチャはどれですか？',
    options: [
      'S3 Glacier Deep Archive + S3 Object Lock + S3 Cross-Region Replication + CloudTrail + S3 Inventory + AWS Config',
      'S3 Standard + S3 Intelligent-Tiering + S3 Transfer Acceleration + CloudFront + S3 Analytics + Macie',
      'AWS Storage Gateway + S3 Glacier + AWS Backup + DataSync + Systems Manager + CloudFormation',
      'Amazon EFS + S3 Standard-IA + AWS DataSync + CloudWatch + S3 Batch Operations + Lambda'
    ],
    correct: 0,
    explanation: '正解は「S3 Glacier Deep Archive + S3 Object Lock + S3 Cross-Region Replication + CloudTrail + S3 Inventory + AWS Config」です。\n\nこの選択肢が最適な理由：\n\n**長期保存・コスト要件への対応：**\n1. **S3 Glacier Deep Archive**: \n   - 最低コストのストレージクラス（テープより50%削減達成）\n   - 30年間の長期保存に最適\n   - 99.999999999%の耐久性\n2. **取得時間**: 12時間以内の標準取得（24時間要件を満たす）\n\n**規制・コンプライアンス要件への対応：**\n1. **S3 Object Lock**: \n   - WORM（Write Once, Read Many）機能\n   - データの改ざん防止（SOX法対応）\n   - 法的保持期間の強制\n2. **CloudTrail**: すべてのAPI呼び出しの永続ログ\n3. **AWS Config**: リソース設定の継続的監視\n\n**データ保護・災害復旧への対応：**\n1. **Cross-Region Replication**: \n   - 異なる大陸での自動複製\n   - 地理的災害への対応\n   - GDPR等の地域規制への対応\n2. **暗号化**: \n   - 保存時: S3 SSE-KMS/SSE-C\n   - 転送時: TLS 1.2以上\n\n**運用・監査への対応：**\n1. **S3 Inventory**: 定期的なデータ整合性チェック\n2. **ビット単位検証**: S3の自動チェックサム検証\n3. **監査ログ**: CloudTrailによる完全な操作履歴\n\n**他の選択肢の問題点：**\n- **選択肢B**: Intelligent-Tieringは予測可能なアーカイブには不要、コストが高い\n- **選択肢C**: Storage Gatewayは複雑性を増すだけで、要件に不適切\n- **選択肢D**: EFSは長期アーカイブには不適切、コストが非常に高い\n\n**規制対応の詳細：**\n- **SOX法**: Object Lockによる改ざん防止\n- **バーゼルIII**: 長期データ保存と監査ログ\n- **GDPR**: 地域別データ保存とアクセス制御\n\n**コスト最適化：**\n- Deep Archive: $0.00099/GB/月（最低コスト）\n- テープストレージ比50%以上削減\n- 運用コストの大幅削減'
  },
  {
    id: 'adv-db-001',
    category: 'データベース',
    question: 'グローバル展開するフィンテック企業が、リアルタイム決済処理システムをAWSで構築しています。このシステムには以下の厳格な要件があります：\n\n- 取引処理能力：1秒間に100,000件のトランザクション\n- レスポンス時間：平均50ms以下、99パーセンタイルで100ms以下\n- 可用性：99.99%以上（年間ダウンタイム52分以内）\n- データ整合性：ACID特性の完全保証、分散トランザクション対応\n- 地理的分散：5つの大陸でのデータ配置\n- 規制要件：各国の金融規制に準拠（データ主権）\n- 災害復旧：RPO 0秒、RTO 30秒以内\n- セキュリティ：暗号化、監査ログ、アクセス制御\n- スケーラビリティ：ピーク時の10倍トラフィックに対応\n- コスト効率：従来システムより30%削減\n\nこの複雑な要件を満たす最適なデータベースアーキテクチャはどれですか？',
    options: [
      'Amazon Aurora Global Database + Aurora Serverless v2 + RDS Proxy + ElastiCache Global Datastore + Database Activity Streams',
      'Amazon DynamoDB Global Tables + DynamoDB Accelerator (DAX) + DynamoDB Streams + Lambda + API Gateway',
      'Amazon RDS Multi-AZ + Read Replicas + ElastiCache + Application Load Balancer + CloudWatch',
      'Amazon DocumentDB + MongoDB Atlas + ElastiCache + API Gateway + Lambda'
    ],
    correct: 0,
    explanation: '正解は「Amazon Aurora Global Database + Aurora Serverless v2 + RDS Proxy + ElastiCache Global Datastore + Database Activity Streams」です。\n\nこの選択肢が最適な理由：\n\n**高性能・スケーラビリティ要件への対応：**\n1. **Aurora Global Database**: \n   - 地理的分散による低レイテンシ（50ms以下達成）\n   - 自動フェイルオーバー（RTO 30秒以内）\n   - クロスリージョンレプリケーション（RPO 1秒以内）\n2. **Aurora Serverless v2**: \n   - 自動スケーリング（10倍トラフィック対応）\n   - コスト最適化（使用量ベース課金）\n3. **RDS Proxy**: \n   - 接続プーリングによる高効率化\n   - 100,000 TPS対応\n\n**データ整合性・可用性への対応：**\n1. **ACID特性**: Auroraの完全なトランザクション保証\n2. **99.99%可用性**: Multi-AZ配置とGlobal Database\n3. **分散トランザクション**: Aurora分散アーキテクチャ\n\n**規制・セキュリティ要件への対応：**\n1. **データ主権**: リージョン別データ配置\n2. **Database Activity Streams**: リアルタイム監査ログ\n3. **暗号化**: 保存時・転送時の暗号化\n4. **ElastiCache Global Datastore**: セッション管理とキャッシュ\n\n**他の選択肢の問題点：**\n- **選択肢B**: DynamoDBは金融トランザクションのACID要件に制限あり\n- **選択肢C**: 従来のRDSでは100,000 TPSの要件を満たせない\n- **選択肢D**: DocumentDBは金融システムには不適切\n\n**アーキテクチャの利点：**\n- 地理的分散による低レイテンシ\n- 自動スケーリングによるコスト効率\n- 金融グレードのセキュリティ\n- 規制要件への完全対応\n- 運用負荷の最小化'
  },
  {
    id: 'adv-db-002',
    category: 'データベース',
    question: '大手eコマース企業が、商品カタログ、在庫管理、注文処理、顧客管理を統合したマルチテナント型プラットフォームをAWSで構築しています。このシステムには以下の複雑な要件があります：\n\n- テナント数：10,000社以上（B2B2Cモデル）\n- データ分離：テナント間の完全なデータ分離\n- 検索性能：商品検索で100ms以下のレスポンス\n- 在庫更新：リアルタイム在庫同期（複数チャネル）\n- 分析要件：リアルタイム売上分析とBI\n- 国際化：50カ国以上での展開\n- 季節変動：ピーク時は通常の20倍のトラフィック\n- データ保護：GDPR、CCPA等のプライバシー規制対応\n- 移行要件：既存の複数DBからの段階的移行\n- 運用効率：DBA不要の自動運用\n\nこの多様な要件を満たす最適なデータベース戦略はどれですか？',
    options: [
      'Amazon Aurora + Amazon OpenSearch + Amazon DynamoDB + Amazon Redshift + AWS Database Migration Service + AWS Glue',
      'Amazon RDS + ElastiCache + Amazon CloudSearch + Amazon EMR + AWS DataSync + Lambda',
      'MongoDB Atlas + Amazon ElastiCache + Amazon Kinesis + Amazon S3 + AWS Batch + Step Functions',
      'Amazon DynamoDB + Amazon Neptune + Amazon Timestream + Amazon QuickSight + AWS AppSync + API Gateway'
    ],
    correct: 0,
    explanation: '正解は「Amazon Aurora + Amazon OpenSearch + Amazon DynamoDB + Amazon Redshift + AWS Database Migration Service + AWS Glue」です。\n\nこの選択肢が最適な理由：\n\n**マルチテナント・データ分離への対応：**\n1. **Amazon Aurora**: \n   - テナント別データベース分離\n   - 高性能トランザクション処理\n   - 自動スケーリング（20倍トラフィック対応）\n2. **DynamoDB**: \n   - テナント別テーブル設計\n   - 無制限スケーラビリティ\n   - リアルタイム在庫更新\n\n**検索・分析要件への対応：**\n1. **Amazon OpenSearch**: \n   - 高速商品検索（100ms以下）\n   - 多言語対応（50カ国展開）\n   - リアルタイムインデックス更新\n2. **Amazon Redshift**: \n   - 大規模データ分析\n   - リアルタイム売上分析\n   - BI統合\n\n**移行・運用要件への対応：**\n1. **AWS Database Migration Service**: \n   - 既存DBからの段階的移行\n   - 最小ダウンタイム移行\n   - 異種DB間の移行サポート\n2. **AWS Glue**: \n   - ETL処理の自動化\n   - データカタログ管理\n   - スキーマ進化対応\n\n**規制・セキュリティ要件への対応：**\n1. **データ保護**: 各サービスでの暗号化とアクセス制御\n2. **GDPR対応**: データ削除とポータビリティ\n3. **監査ログ**: CloudTrailとの統合\n\n**他の選択肢の問題点：**\n- **選択肢B**: CloudSearchは廃止予定、EMRは運用負荷が高い\n- **選択肢C**: MongoDB Atlasは完全マネージドでない、運用負荷あり\n- **選択肢D**: Neptuneはグラフデータベースで要件に不適切\n\n**アーキテクチャの利点：**\n- 各用途に最適化されたデータベース選択\n- 完全マネージドサービスによる運用効率\n- 自動スケーリングによるコスト効率\n- 段階的移行による低リスク\n- 規制要件への完全対応'
  },
  {
    id: 'adv-db-003',
    category: 'データベース',
    question: '大手製造業が、IoTセンサーデータを活用した予知保全システムをAWSで構築しています。このシステムには以下の特殊な要件があります：\n\n- センサー数：100万台以上（工場、車両、機械）\n- データ頻度：1秒間に1,000万件のデータポイント\n- データ保存期間：リアルタイム（1日）、履歴（7年間）\n- 分析要件：リアルタイム異常検知、予測分析、トレンド分析\n- アラート：異常検知から1秒以内の通知\n- 地理的分散：世界50カ国の工場\n- データ形式：時系列データ、メタデータ、画像データ\n- 機械学習：故障予測モデルの継続学習\n- 可視化：リアルタイムダッシュボード\n- コスト効率：データ量に応じた段階的コスト構造\n- 災害復旧：重要データの地理的冗長化\n\nこの大規模IoTシステムに最適なデータベースアーキテクチャはどれですか？',
    options: [
      'Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + S3 + Lambda + SNS',
      'Amazon DynamoDB + Amazon Kinesis + Amazon EMR + Amazon Elasticsearch + S3 + Step Functions + SQS',
      'Amazon RDS + Amazon Kinesis + Amazon Redshift + Amazon CloudWatch + S3 + Lambda + CloudFormation',
      'Amazon Aurora + Amazon MSK + Amazon Athena + Amazon Grafana + S3 + Glue + EventBridge'
    ],
    correct: 0,
    explanation: '正解は「Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + S3 + Lambda + SNS」です。\n\nこの選択肢が最適な理由：\n\n**時系列データ処理への最適化：**\n1. **Amazon Timestream**: \n   - 時系列データ専用データベース\n   - 1,000万件/秒のインジェスト対応\n   - 自動データ階層化（リアルタイム→履歴）\n   - コスト効率的な長期保存（7年間）\n2. **Amazon Kinesis**: \n   - リアルタイムデータストリーミング\n   - 100万台のセンサーからの同時データ取得\n   - 自動スケーリング\n\n**リアルタイム分析・アラート：**\n1. **Lambda**: \n   - リアルタイム異常検知処理\n   - 1秒以内のアラート処理\n   - サーバーレスによる自動スケーリング\n2. **SNS**: \n   - 即座の通知配信\n   - 多チャネル通知（SMS、Email、アプリ）\n\n**機械学習・予測分析：**\n1. **Amazon SageMaker**: \n   - 故障予測モデルの構築・訓練\n   - 継続学習による精度向上\n   - リアルタイム推論\n2. **S3**: \n   - 機械学習用データレイク\n   - 画像データの効率的保存\n\n**可視化・ダッシュボード：**\n1. **Amazon QuickSight**: \n   - リアルタイムダッシュボード\n   - 地理的分散対応\n   - 自動スケーリング\n\n**他の選択肢の問題点：**\n- **選択肢B**: DynamoDBは時系列データに最適化されていない、EMRは運用負荷が高い\n- **選択肢C**: RDSは大規模時系列データには不適切、Redshiftはリアルタイム処理に不向き\n- **選択肢D**: Auroraは時系列データに特化していない、MSKは複雑性を増す\n\n**Timestreamの特別な利点：**\n- 時系列データに最適化されたクエリエンジン\n- 自動データ圧縮（90%削減）\n- 内蔵の時系列分析関数\n- サーバーレスによる運用効率\n- 段階的課金によるコスト効率\n\n**アーキテクチャの利点：**\n- IoT特化の最適化設計\n- リアルタイム処理能力\n- 自動スケーリング\n- コスト効率的な長期保存\n- 機械学習統合'
  },
  {
    id: 'adv-net-001',
    category: 'ネットワーキング',
    question: 'グローバル展開する大手銀行が、世界50カ国の支店を接続するプライベートネットワークをAWSで構築しています。このネットワークには以下の厳格な要件があります：\n\n- 接続拠点：本社1拠点、地域本部5拠点、支店500拠点、データセンター10拠点\n- セキュリティ：金融業界標準（PCI DSS、SOX法準拠）\n- 可用性：99.9%以上（各拠点間の通信）\n- 帯域幅：本社-地域本部間10Gbps、地域本部-支店間1Gbps\n- レイテンシ：本社-地域本部間50ms以下、リアルタイム取引処理\n- 災害復旧：主要拠点の冗長化、自動フェイルオーバー\n- 規制要件：各国の金融規制、データ主権\n- 運用効率：集中管理、自動化\n- コスト最適化：従来のMPLS回線より30%削減\n- 段階的移行：既存ネットワークからの無停止移行\n\nこの複雑な要件を満たす最適なネットワークアーキテクチャはどれですか？',
    options: [
      'AWS Transit Gateway + AWS Direct Connect Gateway + AWS Site-to-Site VPN + AWS Global Accelerator + Route 53 Resolver',
      'AWS VPC Peering + AWS Direct Connect + AWS Client VPN + CloudFront + Route 53',
      'AWS PrivateLink + AWS Direct Connect + AWS VPN CloudHub + AWS Global Accelerator + Network Load Balancer',
      'AWS Transit Gateway + AWS Cloud WAN + AWS Direct Connect + AWS Site-to-Site VPN + Route 53 Resolver'
    ],
    correct: 3,
    explanation: '正解は「AWS Transit Gateway + AWS Cloud WAN + AWS Direct Connect + AWS Site-to-Site VPN + Route 53 Resolver」です。\n\nこの選択肢が最適な理由：\n\n**大規模ネットワーク管理への対応：**\n1. **AWS Cloud WAN**: \n   - 500拠点の集中管理\n   - グローバルネットワークの統一管理\n   - 自動ルーティング最適化\n   - ポリシーベースの管理\n2. **AWS Transit Gateway**: \n   - 地域内のハブ&スポーク構成\n   - 高帯域幅対応（10Gbps）\n   - 自動スケーリング\n\n**接続性・パフォーマンス要件への対応：**\n1. **AWS Direct Connect**: \n   - 専用線による安定した接続\n   - 低レイテンシ（50ms以下達成）\n   - 高帯域幅保証\n   - 金融グレードのセキュリティ\n2. **Site-to-Site VPN**: \n   - Direct Connectのバックアップ\n   - 小規模拠点の接続\n   - 暗号化通信\n\n**可用性・災害復旧への対応：**\n1. **冗長化**: 複数のDirect Connect接続\n2. **自動フェイルオーバー**: Cloud WANの自動経路切り替え\n3. **99.9%可用性**: 冗長構成による高可用性\n\n**規制・セキュリティ要件への対応：**\n1. **データ主権**: リージョン別ネットワーク分離\n2. **PCI DSS準拠**: 暗号化とアクセス制御\n3. **Route 53 Resolver**: プライベートDNS解決\n\n**他の選択肢の問題点：**\n- **選択肢A**: Global Acceleratorは不要、500拠点管理には複雑\n- **選択肢B**: VPC Peeringは大規模には不適切、管理が複雑\n- **選択肢C**: PrivateLinkは用途が限定的、VPN CloudHubは廃止予定\n\n**Cloud WANの特別な利点：**\n- グローバルネットワークの統一管理\n- 自動最適化とトラフィック制御\n- ポリシーベースのセグメンテーション\n- 運用効率の大幅向上\n- コスト最適化（30%削減達成）\n\n**段階的移行の利点：**\n- 既存MPLSとの並行運用\n- 拠点別の段階的切り替え\n- 無停止での移行実現'
  },
  {
    id: 'adv-net-002',
    category: 'ネットワーキング',
    question: '大手製造業が、工場のIoTシステムとクラウドを接続するハイブリッドネットワークをAWSで構築しています。このシステムには以下の特殊な要件があります：\n\n- 工場数：世界30カ国、200工場\n- IoTデバイス：各工場1万台以上のセンサー・制御機器\n- データ量：1工場あたり1TB/日のセンサーデータ\n- リアルタイム制御：制御信号の遅延10ms以内\n- セキュリティ：OT（運用技術）とIT（情報技術）の分離\n- 可用性：製造ライン停止は1分あたり100万円の損失\n- 帯域幅：各工場-クラウド間1Gbps以上\n- エッジ処理：一部データの工場内処理が必要\n- 災害復旧：工場間での生産バックアップ\n- 規制要件：各国の製造業規制、データローカライゼーション\n- 段階的展開：既存システムとの共存\n\nこの産業IoT要件を満たす最適なハイブリッドネットワークアーキテクチャはどれですか？',
    options: [
      'AWS IoT Core + AWS Direct Connect + AWS Local Zones + AWS Wavelength + AWS IoT Greengrass + Transit Gateway',
      'AWS IoT Device Management + Site-to-Site VPN + AWS Outposts + CloudFront + AWS IoT Analytics + VPC Peering',
      'AWS IoT Core + AWS Direct Connect + AWS Outposts + AWS IoT Greengrass + AWS Local Zones + AWS Private 5G',
      'AWS IoT Device Defender + AWS Client VPN + AWS Snow Family + AWS IoT Events + Amazon Kinesis + Route 53'
    ],
    correct: 2,
    explanation: '正解は「AWS IoT Core + AWS Direct Connect + AWS Outposts + AWS IoT Greengrass + AWS Local Zones + AWS Private 5G」です。\n\nこの選択肢が最適な理由：\n\n**リアルタイム制御・低レイテンシ要件への対応：**\n1. **AWS Outposts**: \n   - 工場内でのAWSサービス実行\n   - 10ms以内の制御信号実現\n   - OT/IT分離のセキュリティ境界\n2. **AWS Local Zones**: \n   - 地域レベルでの低レイテンシ処理\n   - リアルタイムデータ分析\n3. **AWS Private 5G**: \n   - 工場内の無線IoT接続\n   - 低レイテンシ・高信頼性通信\n\n**大規模IoT管理への対応：**\n1. **AWS IoT Core**: \n   - 200万台以上のデバイス管理\n   - セキュアなデバイス認証\n   - メッセージルーティング\n2. **AWS IoT Greengrass**: \n   - エッジでのデータ処理\n   - オフライン動作対応\n   - 機械学習推論の実行\n\n**接続性・帯域幅要件への対応：**\n1. **AWS Direct Connect**: \n   - 1Gbps以上の専用帯域\n   - 安定した接続品質\n   - 200工場への拡張性\n\n**セキュリティ・分離要件への対応：**\n1. **OT/IT分離**: Outpostsによる物理的分離\n2. **デバイス認証**: IoT Coreの証明書ベース認証\n3. **ネットワーク分離**: VPCとサブネットによる論理分離\n\n**他の選択肢の問題点：**\n- **選択肢A**: Wavelengthは5G通信事業者依存、工場環境に不適切\n- **選択肢B**: VPNは帯域幅・レイテンシ要件を満たせない\n- **選択肢D**: Snow Familyは一時的なデータ移行用、常時接続に不適切\n\n**産業IoT特化の利点：**\n1. **エッジコンピューティング**: \n   - Outpostsでの工場内処理\n   - Greengrassでのデバイスレベル処理\n2. **高可用性**: \n   - 複数の接続経路\n   - 工場間バックアップ\n3. **スケーラビリティ**: \n   - 200工場への段階的展開\n   - デバイス数の柔軟な拡張\n\n**災害復旧・事業継続：**\n- 工場間での生産切り替え\n- データの地理的分散\n- 自動フェイルオーバー機能\n\n**規制・コンプライアンス：**\n- データローカライゼーション対応\n- 各国製造業規制への準拠\n- 監査ログの完全保存'
  },
  {
    id: 'adv-net-003',
    category: 'ネットワーキング',
    question: '大手メディア企業が、4K/8K動画配信のためのグローバルCDNネットワークをAWSで構築しています。このシステムには以下の高度な要件があります：\n\n- 視聴者数：同時1,000万人以上\n- 配信品質：4K（25Mbps）、8K（100Mbps）\n- 地理的カバレッジ：世界200カ国以上\n- レイテンシ：初回再生開始まで2秒以内\n- 可用性：99.99%以上（大規模イベント時も維持）\n- 帯域幅：ピーク時1Tbps以上\n- セキュリティ：DRM、地域制限、DDoS対策\n- コスト効率：従来CDNより40%削減\n- 分析要件：リアルタイム視聴分析\n- 災害復旧：主要データセンター障害時の自動切り替え\n- 品質制御：動的ビットレート調整、適応的ストリーミング\n\nこの大規模動画配信要件を満たす最適なCDNアーキテクチャはどれですか？',
    options: [
      'Amazon CloudFront + AWS Global Accelerator + Amazon S3 + AWS Elemental MediaStore + AWS WAF + Lambda@Edge',
      'Amazon CloudFront + AWS Direct Connect + Amazon EFS + AWS Elemental MediaConvert + CloudWatch + API Gateway',
      'AWS Global Accelerator + Application Load Balancer + Amazon S3 + AWS Elemental MediaLive + Route 53 + ElastiCache',
      'Amazon CloudFront + AWS PrivateLink + Amazon FSx + AWS Elemental MediaPackage + AWS Shield + Step Functions'
    ],
    correct: 0,
    explanation: "正解は「Amazon CloudFront + AWS Global Accelerator + Amazon S3 + AWS Elemental MediaStore + AWS WAF + Lambda@Edge」です。\n\nこの選択肢が最適な理由：\n\n**大規模配信・パフォーマンス要件への対応：**\n1. **Amazon CloudFront**: \n   - 世界400+エッジロケーション\n   - 1Tbps以上の配信能力\n   - 2秒以内の初回再生開始\n   - 99.99%の可用性SLA\n2. **AWS Global Accelerator**: \n   - AWSバックボーンネットワーク活用\n   - 動的ルーティング最適化\n   - 災害復旧時の自動切り替え\n\n**高品質動画配信への対応：**\n1. **AWS Elemental MediaStore**: \n   - 4K/8K動画に最適化されたストレージ\n   - 低レイテンシ配信\n   - 高スループット（100Mbps対応）\n2. **Amazon S3**: \n   - 大容量動画ファイルの保存\n   - 11 9's の耐久性\n   - CloudFrontとの統合\n\n**セキュリティ・制御要件への対応：**\n1. **AWS WAF**: \n   - DDoS攻撃対策\n   - 地域制限の実装\n   - リアルタイム脅威検知\n2. **Lambda@Edge**: \n   - エッジでのDRM処理\n   - 動的コンテンツ生成\n   - A/Bテスト実装\n\n**運用・分析要件への対応：**\n1. **リアルタイム分析**: CloudFrontのリアルタイムログ\n2. **適応的ストリーミング**: Lambda@Edgeでの動的調整\n3. **コスト最適化**: CloudFrontの従量課金モデル\n\n**他の選択肢の問題点：**\n- **選択肢B**: EFSは動画配信に不適切、MediaConvertは変換用途\n- **選択肢C**: ALBはCDNとして不適切、MediaLiveはライブ配信用途\n- **選択肢D**: PrivateLinkは内部通信用、FSxは動画配信に不適切\n\n**大規模動画配信の特別な利点：**\n1. **エッジ最適化**: \n   - 視聴者に最も近いエッジからの配信\n   - 動的キャッシュ戦略\n   - 帯域幅の効率的利用\n2. **品質制御**: \n   - 適応的ビットレート\n   - ネットワーク状況に応じた品質調整\n   - バッファリング最小化\n3. **スケーラビリティ**: \n   - 1,000万同時視聴者対応\n   - 自動スケーリング\n   - ピーク時の安定配信\n\n**災害復旧・高可用性：**\n- 複数オリジンでの冗長化\n- 自動フェイルオーバー\n- リアルタイム監視とアラート\n\n**コスト最適化：**\n- エッジキャッシュによる帯域幅削減\n- 従量課金による効率化\n- 40%コスト削減の実現"
  },
  {
    id: 'adv-sec-001',
    category: 'セキュリティ',
    question: '大手金融機関が、ゼロトラストセキュリティモデルを採用したクラウドファーストアーキテクチャをAWSで構築しています。このシステムには以下の厳格なセキュリティ要件があります：\n\n- ユーザー数：従業員50,000人、顧客500万人\n- アクセス制御：最小権限の原則、動的権限付与\n- 認証：多要素認証、生体認証、リスクベース認証\n- 監査要件：すべての操作の完全な監査ログ\n- 規制対応：SOX法、PCI DSS、GDPR、FFIEC準拠\n- データ分類：機密度レベル別の暗号化・アクセス制御\n- 脅威検知：リアルタイム異常検知、自動対応\n- インシデント対応：15分以内の初動対応\n- 地理的制限：国別データ主権、アクセス制限\n- 統合要件：既存のActive Directory、SIEM連携\n- 可用性：セキュリティ機能の99.99%可用性\n\nこの包括的なゼロトラストセキュリティ要件を満たす最適なアーキテクチャはどれですか？',
    options: [
      'AWS IAM Identity Center + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + AWS Config + AWS KMS + AWS Secrets Manager',
      'AWS Directory Service + AWS WAF + AWS CloudHSM + Amazon Inspector + AWS Systems Manager + AWS Certificate Manager + Amazon Macie',
      'AWS Single Sign-On + AWS Shield + AWS Firewall Manager + AWS Detective + AWS Audit Manager + AWS PrivateLink + AWS Resource Access Manager',
      'AWS Verified Access + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + Amazon Detective + AWS KMS + AWS Certificate Manager'
    ],
    correct: 3,
    explanation: '正解は「AWS Verified Access + Amazon Cognito + AWS CloudTrail + Amazon GuardDuty + AWS Security Hub + Amazon Detective + AWS KMS + AWS Certificate Manager」です。\n\nこの選択肢が最適な理由：\n\n**ゼロトラストアーキテクチャへの対応：**\n1. **AWS Verified Access**: \n   - VPNレスアクセス制御\n   - デバイス・ユーザー・アプリケーションの継続的検証\n   - 動的ポリシー適用\n   - 最小権限アクセスの実現\n2. **Amazon Cognito**: \n   - 500万顧客の認証管理\n   - MFA、生体認証サポート\n   - リスクベース認証\n   - SAML/OIDC統合\n\n**包括的セキュリティ監視：**\n1. **Amazon GuardDuty**: \n   - 機械学習ベースの脅威検知\n   - リアルタイム異常検知\n   - 自動インシデント対応\n2. **AWS Security Hub**: \n   - 統合セキュリティダッシュボード\n   - コンプライアンス状況の可視化\n   - 自動修復アクション\n3. **Amazon Detective**: \n   - セキュリティインシデントの詳細分析\n   - 根本原因分析\n   - 15分以内の初動対応支援\n\n**監査・コンプライアンス：**\n1. **AWS CloudTrail**: \n   - すべてのAPI呼び出しの記録\n   - 改ざん防止ログ\n   - リアルタイム監視\n2. **AWS KMS**: \n   - データ分類別の暗号化キー管理\n   - 細かい権限制御\n   - 監査ログ統合\n\n**他の選択肢の問題点：**\n- **選択肢A**: IAM Identity Centerは従来型、ゼロトラストに最適化されていない\n- **選択肢B**: Directory Serviceは従来のAD拡張、ゼロトラスト要件に不十分\n- **選択肢C**: Single Sign-Onは廃止予定、包括的セキュリティ機能不足\n\n**ゼロトラストの特別な利点：**\n1. **継続的検証**: \n   - すべてのアクセスを検証\n   - デバイス・ユーザー・アプリケーションの信頼性評価\n   - 動的リスク評価\n2. **最小権限**: \n   - Just-In-Time アクセス\n   - 動的権限付与\n   - セッションベース制御\n3. **統合セキュリティ**: \n   - 既存SIEM連携\n   - Active Directory統合\n   - 統一セキュリティポリシー\n\n**規制対応の詳細：**\n- **SOX法**: 完全な監査ログと内部統制\n- **PCI DSS**: カード情報の暗号化と分離\n- **GDPR**: データ主権とプライバシー保護\n- **FFIEC**: 金融機関向けセキュリティ要件\n\n**高可用性・災害復旧：**\n- マルチリージョン展開\n- 自動フェイルオーバー\n- 99.99%可用性の実現'
  },
  {
    id: 'adv-sec-002',
    category: 'セキュリティ',
    question: '大手ヘルスケア企業が、患者データを扱う医療情報システムをAWSで構築しています。このシステムには以下の厳格なセキュリティ・プライバシー要件があります：\n\n- 患者データ：1億人以上の医療記録\n- 規制要件：HIPAA、GDPR、各国医療データ保護法準拠\n- データ分類：PHI（個人健康情報）の厳格な管理\n- アクセス制御：医師、看護師、研究者の役割別制御\n- 暗号化：保存時・転送時・使用時の暗号化\n- 監査：すべてのPHIアクセスの完全な監査証跡\n- 匿名化：研究用データの自動匿名化\n- 地域制限：国境を越えないデータ保存\n- インシデント対応：データ漏洩時の72時間以内報告\n- 統合要件：既存の病院システム（HL7 FHIR）\n- 可用性：医療システムの24時間365日稼働\n- バックアップ：災害時の迅速なデータ復旧\n\nこの医療データの厳格な要件を満たす最適なセキュリティアーキテクチャはどれですか？',
    options: [
      'AWS HealthLake + Amazon Comprehend Medical + AWS KMS + AWS CloudHSM + Amazon Macie + AWS Config + AWS CloudTrail + AWS Backup',
      'Amazon RDS + AWS Secrets Manager + AWS Certificate Manager + Amazon Inspector + AWS Security Hub + AWS Systems Manager + AWS DataSync',
      'Amazon DynamoDB + AWS IAM + AWS WAF + Amazon GuardDuty + AWS Shield + AWS Firewall Manager + AWS Resource Access Manager',
      'Amazon S3 + AWS Glue + Amazon SageMaker + AWS Lambda + Amazon API Gateway + AWS Cognito + Amazon CloudWatch'
    ],
    correct: 0,
    explanation: '正解は「AWS HealthLake + Amazon Comprehend Medical + AWS KMS + AWS CloudHSM + Amazon Macie + AWS Config + AWS CloudTrail + AWS Backup」です。\n\nこの選択肢が最適な理由：\n\n**医療データ特化への対応：**\n1. **AWS HealthLake**: \n   - HIPAA準拠の医療データレイク\n   - HL7 FHIR標準サポート\n   - 1億人以上の医療記録管理\n   - 既存病院システムとの統合\n2. **Amazon Comprehend Medical**: \n   - 医療テキストの自動分析\n   - PHI（個人健康情報）の自動検出\n   - 医療用語の正確な理解\n\n**最高レベルの暗号化：**\n1. **AWS CloudHSM**: \n   - FIPS 140-2 Level 3準拠\n   - 専用ハードウェアセキュリティモジュール\n   - 使用時暗号化の実現\n   - 医療グレードの暗号化\n2. **AWS KMS**: \n   - データ分類別の暗号化キー管理\n   - 細かいアクセス制御\n   - 監査ログ統合\n\n**PHI保護・プライバシー対応：**\n1. **Amazon Macie**: \n   - PHIの自動検出・分類\n   - 機械学習による異常アクセス検知\n   - データ漏洩リスクの評価\n   - 自動匿名化支援\n2. **AWS Config**: \n   - コンプライアンス状況の継続監視\n   - HIPAA設定の自動チェック\n   - 設定変更の追跡\n\n**監査・コンプライアンス：**\n1. **AWS CloudTrail**: \n   - すべてのPHIアクセスの記録\n   - 改ざん防止ログ\n   - 72時間以内報告の支援\n2. **AWS Backup**: \n   - HIPAA準拠のバックアップ\n   - 暗号化バックアップ\n   - 迅速な災害復旧\n\n**他の選択肢の問題点：**\n- **選択肢B**: 医療データ特化機能なし、HIPAA最適化不十分\n- **選択肢C**: 医療業界要件に特化していない、PHI保護機能不足\n- **選択肢D**: セキュリティ機能が基本的、医療規制対応不十分\n\n**医療業界特化の利点：**\n1. **HIPAA準拠**: \n   - BAA（Business Associate Agreement）対応\n   - 医療データの適切な取り扱い\n   - 規制要件の自動チェック\n2. **HL7 FHIR統合**: \n   - 標準的な医療データ交換\n   - 既存システムとの互換性\n   - 相互運用性の確保\n3. **医療AI**: \n   - 医療用語の正確な理解\n   - 診断支援機能\n   - 研究データの自動匿名化\n\n**地域制限・データ主権：**\n- リージョン別データ保存\n- 国境を越えないデータ処理\n- GDPR等の地域規制対応\n\n**高可用性・災害復旧：**\n- 24時間365日稼働保証\n- 自動バックアップ\n- 迅速な災害復旧\n- 医療システムの継続性確保'
  },
  {
    id: 'adv-sec-003',
    category: 'セキュリティ',
    question: '大手政府機関が、機密情報を扱う国家安全保障システムをAWSで構築しています。このシステムには以下の最高レベルのセキュリティ要件があります：\n\n- 機密レベル：Top Secret、Secret、Confidential、Unclassified\n- 認証：多層認証、生体認証、スマートカード認証\n- アクセス制御：Need-to-Know原則、コンパートメント化\n- 暗号化：NSA Suite B暗号、量子耐性暗号の準備\n- 監査：すべての操作の完全な監査証跡、改ざん防止\n- 物理セキュリティ：専用ハードウェア、地理的分離\n- ネットワーク分離：機密レベル別の完全分離\n- インシデント対応：即座の脅威対応、自動隔離\n- 規制要件：FedRAMP High、FISMA、NIST準拠\n- 可用性：国家安全保障の24時間365日稼働\n- 災害復旧：地理的に分散した冗長化\n- サプライチェーン：信頼できるコンポーネントのみ使用\n\nこの国家安全保障レベルの要件を満たす最適なセキュリティアーキテクチャはどれですか？',
    options: [
      'AWS GovCloud + AWS CloudHSM + AWS Certificate Manager + Amazon Inspector + AWS Config + AWS CloudTrail + AWS KMS + AWS Secrets Manager',
      'AWS GovCloud + AWS CloudHSM + AWS Private CA + Amazon GuardDuty + AWS Security Hub + AWS CloudTrail + AWS Nitro Enclaves + AWS Key Management Service',
      'AWS Commercial + AWS WAF + AWS Shield + Amazon Macie + AWS Systems Manager + AWS Backup + AWS DataSync + Amazon S3',
      'AWS Outposts + AWS Direct Connect + AWS Site-to-Site VPN + AWS Client VPN + AWS PrivateLink + AWS Transit Gateway + Route 53 Resolver'
    ],
    correct: 1,
    explanation: '正解は「AWS GovCloud + AWS CloudHSM + AWS Private CA + Amazon GuardDuty + AWS Security Hub + AWS CloudTrail + AWS Nitro Enclaves + AWS Key Management Service」です。\n\nこの選択肢が最適な理由：\n\n**政府・国家安全保障要件への対応：**\n1. **AWS GovCloud**: \n   - FedRAMP High認証取得\n   - 米国政府専用クラウド環境\n   - 物理的・論理的分離\n   - セキュリティクリアランス保持者のみ運用\n2. **AWS Nitro Enclaves**: \n   - 機密データの完全分離実行環境\n   - ハードウェアレベルの分離\n   - 量子耐性暗号の実装準備\n\n**最高レベルの暗号化：**\n1. **AWS CloudHSM**: \n   - FIPS 140-2 Level 3準拠\n   - NSA Suite B暗号サポート\n   - 専用ハードウェアセキュリティモジュール\n   - 量子耐性暗号への移行準備\n2. **AWS Private CA**: \n   - 政府専用認証局\n   - 階層的PKI構造\n   - スマートカード認証統合\n\n**包括的脅威検知・対応：**\n1. **Amazon GuardDuty**: \n   - 機械学習ベースの脅威検知\n   - 国家レベルの脅威インテリジェンス\n   - 自動隔離・対応機能\n2. **AWS Security Hub**: \n   - 統合セキュリティ管理\n   - NIST準拠チェック\n   - 自動コンプライアンス監視\n\n**監査・コンプライアンス：**\n1. **AWS CloudTrail**: \n   - 改ざん防止監査ログ\n   - すべての操作の完全記録\n   - リアルタイム監視\n2. **機密レベル別管理**: \n   - コンパートメント化されたアクセス制御\n   - Need-to-Know原則の実装\n\n**他の選択肢の問題点：**\n- **選択肢A**: Certificate Managerは政府要件に不十分、Private CAが必要\n- **選択肢C**: Commercial環境は政府機密情報に不適切\n- **選択肢D**: ネットワーク機能のみ、包括的セキュリティ不足\n\n**国家安全保障特化の利点：**\n1. **物理セキュリティ**: \n   - 専用データセンター\n   - セキュリティクリアランス保持者のみアクセス\n   - 地理的分離による冗長化\n2. **コンプライアンス**: \n   - FedRAMP High自動準拠\n   - FISMA要件の継続的監視\n   - NIST フレームワーク実装\n3. **サプライチェーン**: \n   - 信頼できるコンポーネントのみ\n   - ハードウェア・ソフトウェアの検証\n   - 国産技術の優先使用\n\n**高度な分離・保護：**\n1. **ネットワーク分離**: \n   - 機密レベル別の完全分離\n   - エアギャップ環境の実現\n   - 横展開攻撃の防止\n2. **データ保護**: \n   - 機密レベル別の暗号化\n   - アクセス制御の階層化\n   - データ漏洩の完全防止\n\n**災害復旧・事業継続：**\n- 地理的に分散した冗長化\n- 国家安全保障の継続性確保\n- 自動フェイルオーバー機能'
  },
  {
    id: 'adv-mon-001',
    category: '監視・ログ',
    question: '大手金融機関が、リアルタイム取引監視システムをAWSで構築しています。このシステムには以下の厳格な要件があります：\n\n- 取引量：1秒間に100,000件のトランザクション\n- 監視対象：1,000台以上のEC2インスタンス、50のマイクロサービス\n- アラート要件：異常検知から30秒以内の通知\n- ログ保存：7年間の完全なログ保存（規制要件）\n- 分析要件：リアルタイム不正検知、パターン分析\n- 可視化：リアルタイムダッシュボード、経営層向けレポート\n- セキュリティ：ログの改ざん防止、アクセス制御\n- コンプライアンス：SOX法、PCI DSS準拠\n- 災害復旧：ログデータの地理的冗長化\n- 運用効率：自動化された監視・対応\n- コスト最適化：ログストレージコストの最適化\n\nこの包括的な監視・ログ要件を満たす最適なアーキテクチャはどれですか？',
    options: [
      'Amazon CloudWatch + AWS X-Ray + Amazon Kinesis + Amazon OpenSearch + AWS Lambda + Amazon SNS + S3 Glacier',
      'Amazon CloudWatch + AWS CloudTrail + Amazon ElastiCache + Amazon RDS + AWS Step Functions + Amazon SES + EBS',
      'AWS Systems Manager + Amazon Inspector + Amazon GuardDuty + Amazon Macie + AWS Config + AWS Security Hub + S3 Standard',
      'Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon QuickSight + AWS Glue + Amazon Athena + S3 Intelligent-Tiering'
    ],
    correct: 0,
    explanation: '正解は「Amazon CloudWatch + AWS X-Ray + Amazon Kinesis + Amazon OpenSearch + AWS Lambda + Amazon SNS + S3 Glacier」です。\n\nこの選択肢が最適な理由：\n\n**大規模監視・リアルタイム処理：**\n1. **Amazon CloudWatch**: \n   - 1,000台以上のインスタンス監視\n   - カスタムメトリクス（100,000 TPS対応）\n   - 30秒以内のアラート配信\n2. **AWS X-Ray**: \n   - マイクロサービス間のトレーシング\n   - パフォーマンス分析\n   - ボトルネック特定\n\n**ログ処理・分析：**\n1. **Amazon Kinesis**: \n   - リアルタイムログストリーミング\n   - 大量データの効率的処理\n   - 不正検知パイプライン\n2. **Amazon OpenSearch**: \n   - 高速ログ検索・分析\n   - リアルタイムダッシュボード\n   - 異常パターン検知\n\n**自動化・通知：**\n1. **AWS Lambda**: \n   - イベント駆動の自動対応\n   - カスタムアラート処理\n   - 自動修復アクション\n2. **Amazon SNS**: \n   - 多チャネル通知\n   - エスカレーション機能\n\n**長期保存・コンプライアンス：**\n1. **S3 Glacier**: \n   - 7年間の長期保存\n   - 改ざん防止（Object Lock）\n   - コスト効率的なアーカイブ\n\n**他の選択肢の問題点：**\n- **選択肢B**: ElastiCacheは監視用途に不適切、RDSは大量ログに不向き\n- **選択肢C**: セキュリティ監視に特化、包括的監視には不十分\n- **選択肢D**: バッチ処理中心、リアルタイム要件に不適切\n\n**金融業界特化の利点：**\n1. **コンプライアンス**: \n   - SOX法準拠の監査ログ\n   - PCI DSS要件の自動チェック\n   - 改ざん防止機能\n2. **リアルタイム不正検知**: \n   - 機械学習による異常検知\n   - パターンマッチング\n   - 即座のアラート\n3. **災害復旧**: \n   - 地理的分散ログ保存\n   - 自動バックアップ\n   - 高可用性アーキテクチャ'
  },
  {
    id: 'adv-mon-002',
    category: '監視・ログ',
    question: 'グローバル展開するeコマース企業が、ブラックフライデーなどの大規模セール時の監視システムをAWSで構築しています。このシステムには以下の特殊な要件があります：\n\n- トラフィック変動：通常時の50倍のトラフィック急増\n- 地理的分散：世界50カ国でのサービス提供\n- 監視対象：10,000台のサーバー、500のマイクロサービス\n- レスポンス時間：99パーセンタイルで500ms以下を維持\n- 可用性：99.99%以上（年間52分以内のダウンタイム）\n- 予測分析：トラフィック予測、容量計画\n- 自動スケーリング：予測ベースの事前スケーリング\n- ビジネス監視：売上、コンバージョン率のリアルタイム監視\n- 異常検知：機械学習による自動異常検知\n- 運用効率：最小限の人的介入\n- コスト最適化：監視コストの最適化\n\nこの大規模イベント対応の監視要件を満たす最適なアーキテクチャはどれですか？',
    options: [
      'Amazon CloudWatch + AWS Auto Scaling + Amazon Forecast + AWS Lambda + Amazon QuickSight + AWS Chatbot + CloudWatch Synthetics',
      'Amazon CloudWatch + AWS Systems Manager + Amazon Inspector + AWS Config + AWS Security Hub + Amazon GuardDuty + AWS Shield',
      'AWS X-Ray + Amazon Kinesis + Amazon EMR + Amazon SageMaker + Amazon Redshift + AWS Glue + Amazon Athena',
      'Amazon EventBridge + AWS Step Functions + Amazon DynamoDB + AWS AppSync + Amazon Cognito + AWS Amplify + API Gateway'
    ],
    correct: 0,
    explanation: '正解は「Amazon CloudWatch + AWS Auto Scaling + Amazon Forecast + AWS Lambda + Amazon QuickSight + AWS Chatbot + CloudWatch Synthetics」です。\n\nこの選択肢が最適な理由：\n\n**大規模トラフィック対応：**\n1. **Amazon CloudWatch**: \n   - 10,000台のサーバー監視\n   - カスタムメトリクス（売上、コンバージョン率）\n   - 地理的分散監視\n2. **AWS Auto Scaling**: \n   - 50倍トラフィック増加への対応\n   - 予測ベースのスケーリング\n   - 複数リージョン対応\n\n**予測・分析機能：**\n1. **Amazon Forecast**: \n   - 機械学習によるトラフィック予測\n   - 容量計画の自動化\n   - 季節性パターンの学習\n2. **Amazon QuickSight**: \n   - リアルタイムビジネスダッシュボード\n   - 売上・KPI監視\n   - 経営層向けレポート\n\n**自動化・運用効率：**\n1. **AWS Lambda**: \n   - イベント駆動の自動対応\n   - カスタムアラート処理\n   - 自動修復機能\n2. **AWS Chatbot**: \n   - Slack/Teams統合\n   - 自動通知・対応\n   - 運用効率化\n\n**可用性・品質監視：**\n1. **CloudWatch Synthetics**: \n   - 合成監視による可用性チェック\n   - エンドユーザー体験監視\n   - 99.99%可用性の確保\n\n**他の選択肢の問題点：**\n- **選択肢B**: セキュリティ監視中心、ビジネス監視・予測機能不足\n- **選択肢C**: 分析に特化、リアルタイム監視・自動対応不足\n- **選択肢D**: アプリケーション開発中心、インフラ監視に不適切\n\n**大規模イベント特化の利点：**\n1. **予測スケーリング**: \n   - 事前のリソース準備\n   - トラフィック急増への対応\n   - コスト最適化\n2. **ビジネス監視**: \n   - リアルタイム売上監視\n   - コンバージョン率追跡\n   - 異常検知・アラート\n3. **グローバル監視**: \n   - 50カ国での統一監視\n   - 地域別パフォーマンス分析\n   - 災害復旧対応\n\n**運用効率化：**\n- 自動化された監視・対応\n- 最小限の人的介入\n- ChatOpsによる効率的運用\n- 予測ベースの容量管理'
  },
  {
    id: 'adv-mon-003',
    category: '監視・ログ',
    question: '大手製造業が、工場のIoTシステムと予知保全のための統合監視システムをAWSで構築しています。このシステムには以下の複雑な要件があります：\n\n- IoTデバイス：100万台以上のセンサー・機械\n- データ頻度：1秒間に1,000万件のデータポイント\n- 監視項目：温度、振動、圧力、電流、画像、音声\n- 異常検知：機械学習による故障予測\n- アラート：重大異常は1秒以内、予兆は1分以内\n- 地理的分散：世界30カ国、200工場\n- データ保存：リアルタイム（1日）、履歴（10年間）\n- 分析要件：トレンド分析、相関分析、根本原因分析\n- 可視化：工場別、機械別、部品別ダッシュボード\n- 統合要件：既存のMES、ERPシステム連携\n- セキュリティ：OT/ITネットワーク分離\n- 災害復旧：工場間での生産バックアップ\n\nこの産業IoT監視要件を満たす最適なアーキテクチャはどれですか？',
    options: [
      'AWS IoT Core + Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + AWS Lambda + Amazon SNS + AWS IoT Analytics',
      'Amazon CloudWatch + AWS X-Ray + Amazon ElastiCache + Amazon RDS + AWS Step Functions + Amazon SES + Amazon Inspector',
      'AWS Systems Manager + Amazon GuardDuty + Amazon Macie + AWS Config + AWS Security Hub + Amazon Detective + AWS Shield',
      'Amazon EventBridge + AWS Batch + Amazon Redshift + Amazon EMR + AWS Glue + Amazon Athena + Amazon S3'
    ],
    correct: 0,
    explanation: '正解は「AWS IoT Core + Amazon Timestream + Amazon Kinesis + Amazon SageMaker + Amazon QuickSight + AWS Lambda + Amazon SNS + AWS IoT Analytics」です。\n\nこの選択肢が最適な理由：\n\n**大規模IoTデータ処理：**\n1. **AWS IoT Core**: \n   - 100万台デバイスの接続管理\n   - セキュアなデバイス認証\n   - メッセージルーティング\n   - OT/IT分離対応\n2. **Amazon Kinesis**: \n   - 1,000万件/秒のリアルタイム処理\n   - ストリーミングデータ分析\n   - 複数データ形式対応\n\n**時系列データ最適化：**\n1. **Amazon Timestream**: \n   - 時系列データ専用データベース\n   - 自動データ階層化（1日→10年）\n   - 高速クエリ性能\n   - コスト効率的な長期保存\n2. **AWS IoT Analytics**: \n   - IoTデータの前処理・変換\n   - データクレンジング\n   - 統計分析機能\n\n**機械学習・予知保全：**\n1. **Amazon SageMaker**: \n   - 故障予測モデル構築\n   - 異常検知アルゴリズム\n   - リアルタイム推論\n   - 継続学習機能\n2. **AWS Lambda**: \n   - リアルタイム異常検知\n   - 1秒以内のアラート処理\n   - 自動対応アクション\n\n**可視化・分析：**\n1. **Amazon QuickSight**: \n   - 工場別・機械別ダッシュボード\n   - リアルタイム監視画面\n   - トレンド分析\n   - 経営層向けレポート\n2. **Amazon SNS**: \n   - 多段階アラート配信\n   - 工場・部門別通知\n   - エスカレーション機能\n\n**他の選択肢の問題点：**\n- **選択肢B**: IoT特化機能なし、時系列データに不適切\n- **選択肢C**: セキュリティ監視中心、IoT監視に不十分\n- **選択肢D**: バッチ処理中心、リアルタイム要件に不適切\n\n**産業IoT特化の利点：**\n1. **予知保全**: \n   - 機械学習による故障予測\n   - 部品交換タイミング最適化\n   - ダウンタイム最小化\n2. **多様なデータ対応**: \n   - センサーデータ（数値）\n   - 画像・音声データ\n   - 振動・波形データ\n3. **工場運用最適化**: \n   - 生産効率監視\n   - エネルギー使用量最適化\n   - 品質管理強化\n\n**統合・セキュリティ：**\n- 既存MES/ERP連携\n- OT/ITネットワーク分離\n- デバイス認証・暗号化\n- 監査ログ完全保存\n\n**災害復旧・事業継続：**\n- 工場間データ同期\n- 生産バックアップ機能\n- 自動フェイルオーバー\n- 地理的分散アーキテクチャ'
  }
]

// 上級編問題をグローバル変数として設定
if (typeof window !== 'undefined') {
  window.allAdvancedQuestions = allAdvancedQuestions
} else if (typeof global !== 'undefined') {
  global.allAdvancedQuestions = allAdvancedQuestions
}

// Node.js環境での使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = allAdvancedQuestions
}
