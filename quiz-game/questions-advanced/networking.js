// AWS Solution Architect Professional 上級編 - ネットワーキング問題

const advancedNetworkingQuestions = [
  {
    id: 'adv-net-001',
    category: 'ネットワーキング',
    question: `グローバル展開する大手銀行が、世界50カ国の支店を接続するプライベートネットワークをAWSで構築しています。このネットワークには以下の厳格な要件があります：

- 接続拠点：本社1拠点、地域本部5拠点、支店500拠点、データセンター10拠点
- セキュリティ：金融業界標準（PCI DSS、SOX法準拠）
- 可用性：99.9%以上（各拠点間の通信）
- 帯域幅：本社-地域本部間10Gbps、地域本部-支店間1Gbps
- レイテンシ：本社-地域本部間50ms以下、リアルタイム取引処理
- 災害復旧：主要拠点の冗長化、自動フェイルオーバー
- 規制要件：各国の金融規制、データ主権
- 運用効率：集中管理、自動化
- コスト最適化：従来のMPLS回線より30%削減
- 段階的移行：既存ネットワークからの無停止移行

この複雑な要件を満たす最適なネットワークアーキテクチャはどれですか？`,
    options: [
      'AWS Transit Gateway + AWS Direct Connect Gateway + AWS Site-to-Site VPN + AWS Global Accelerator + Route 53 Resolver',
      'AWS VPC Peering + AWS Direct Connect + AWS Client VPN + CloudFront + Route 53',
      'AWS PrivateLink + AWS Direct Connect + AWS VPN CloudHub + AWS Global Accelerator + Network Load Balancer',
      'AWS Transit Gateway + AWS Cloud WAN + AWS Direct Connect + AWS Site-to-Site VPN + Route 53 Resolver'
    ],
    correct: 3,
    explanation: `正解は「AWS Transit Gateway + AWS Cloud WAN + AWS Direct Connect + AWS Site-to-Site VPN + Route 53 Resolver」です。

この選択肢が最適な理由：

**大規模ネットワーク管理への対応：**
1. **AWS Cloud WAN**: 
   - 500拠点の集中管理
   - グローバルネットワークの統一管理
   - 自動ルーティング最適化
   - ポリシーベースの管理
2. **AWS Transit Gateway**: 
   - 地域内のハブ&スポーク構成
   - 高帯域幅対応（10Gbps）
   - 自動スケーリング

**接続性・パフォーマンス要件への対応：**
1. **AWS Direct Connect**: 
   - 専用線による安定した接続
   - 低レイテンシ（50ms以下達成）
   - 高帯域幅保証
   - 金融グレードのセキュリティ
2. **Site-to-Site VPN**: 
   - Direct Connectのバックアップ
   - 小規模拠点の接続
   - 暗号化通信

**可用性・災害復旧への対応：**
1. **冗長化**: 複数のDirect Connect接続
2. **自動フェイルオーバー**: Cloud WANの自動経路切り替え
3. **99.9%可用性**: 冗長構成による高可用性

**規制・セキュリティ要件への対応：**
1. **データ主権**: リージョン別ネットワーク分離
2. **PCI DSS準拠**: 暗号化とアクセス制御
3. **Route 53 Resolver**: プライベートDNS解決

**他の選択肢の問題点：**
- **AWS Transit Gateway + AWS Direct Connect Gateway + AWS Site-to-Site VPN + AWS Global Accelerator + Route 53 Resolver**: Global Acceleratorは不要、500拠点管理には複雑
- **AWS VPC Peering + AWS Direct Connect + AWS Client VPN + CloudFront + Route 53**: VPC Peeringは大規模には不適切、管理が複雑
- **AWS PrivateLink + AWS Direct Connect + AWS VPN CloudHub + AWS Global Accelerator + Network Load Balancer**: PrivateLinkは用途が限定的、VPN CloudHubは廃止予定

**Cloud WANの特別な利点：**
- グローバルネットワークの統一管理
- 自動最適化とトラフィック制御
- ポリシーベースのセグメンテーション
- 運用効率の大幅向上
- コスト最適化（30%削減達成）

**段階的移行の利点：**
- 既存MPLSとの並行運用
- 拠点別の段階的切り替え
- 無停止での移行実現`
  },

  {
    id: 'adv-net-002',
    category: 'ネットワーキング',
    question: `大手製造業が、工場のIoTシステムとクラウドを接続するハイブリッドネットワークをAWSで構築しています。このシステムには以下の特殊な要件があります：

- 工場数：世界30カ国、200工場
- IoTデバイス：各工場1万台以上のセンサー・制御機器
- データ量：1工場あたり1TB/日のセンサーデータ
- リアルタイム制御：制御信号の遅延10ms以内
- セキュリティ：OT（運用技術）とIT（情報技術）の分離
- 可用性：製造ライン停止は1分あたり100万円の損失
- 帯域幅：各工場-クラウド間1Gbps以上
- エッジ処理：一部データの工場内処理が必要
- 災害復旧：工場間での生産バックアップ
- 規制要件：各国の製造業規制、データローカライゼーション
- 段階的展開：既存システムとの共存

この産業IoT要件を満たす最適なハイブリッドネットワークアーキテクチャはどれですか？`,
    options: [
      'AWS IoT Core + AWS Direct Connect + AWS Local Zones + AWS Wavelength + AWS IoT Greengrass + Transit Gateway',
      'AWS IoT Device Management + Site-to-Site VPN + AWS Outposts + CloudFront + AWS IoT Analytics + VPC Peering',
      'AWS IoT Core + AWS Direct Connect + AWS Outposts + AWS IoT Greengrass + AWS Local Zones + AWS Private 5G',
      'AWS IoT Device Defender + AWS Client VPN + AWS Snow Family + AWS IoT Events + Amazon Kinesis + Route 53'
    ],
    correct: 2,
    explanation: `正解は「AWS IoT Core + AWS Direct Connect + AWS Outposts + AWS IoT Greengrass + AWS Local Zones + AWS Private 5G」です。

この選択肢が最適な理由：

**リアルタイム制御・低レイテンシ要件への対応：**
1. **AWS Outposts**: 
   - 工場内でのAWSサービス実行
   - 10ms以内の制御信号実現
   - OT/IT分離のセキュリティ境界
2. **AWS Local Zones**: 
   - 地域レベルでの低レイテンシ処理
   - リアルタイムデータ分析
3. **AWS Private 5G**: 
   - 工場内の無線IoT接続
   - 低レイテンシ・高信頼性通信

**大規模IoT管理への対応：**
1. **AWS IoT Core**: 
   - 200万台以上のデバイス管理
   - セキュアなデバイス認証
   - メッセージルーティング
2. **AWS IoT Greengrass**: 
   - エッジでのデータ処理
   - オフライン動作対応
   - 機械学習推論の実行

**接続性・帯域幅要件への対応：**
1. **AWS Direct Connect**: 
   - 1Gbps以上の専用帯域
   - 安定した接続品質
   - 200工場への拡張性

**セキュリティ・分離要件への対応：**
1. **OT/IT分離**: Outpostsによる物理的分離
2. **デバイス認証**: IoT Coreの証明書ベース認証
3. **ネットワーク分離**: VPCとサブネットによる論理分離

**他の選択肢の問題点：**
- **AWS IoT Core + AWS Direct Connect + AWS Local Zones + AWS Wavelength + AWS IoT Greengrass + Transit Gateway**: Wavelengthは5G通信事業者依存、工場環境に不適切
- **AWS IoT Device Management + Site-to-Site VPN + AWS Outposts + CloudFront + AWS IoT Analytics + VPC Peering**: VPNは帯域幅・レイテンシ要件を満たせない
- **AWS IoT Device Defender + AWS Client VPN + AWS Snow Family + AWS IoT Events + Amazon Kinesis + Route 53**: Snow Familyは一時的なデータ移行用、常時接続に不適切

**産業IoT特化の利点：**
1. **エッジコンピューティング**: 
   - Outpostsでの工場内処理
   - Greengrassでのデバイスレベル処理
2. **高可用性**: 
   - 複数の接続経路
   - 工場間バックアップ
3. **スケーラビリティ**: 
   - 200工場への段階的展開
   - デバイス数の柔軟な拡張

**災害復旧・事業継続：**
- 工場間での生産切り替え
- データの地理的分散
- 自動フェイルオーバー機能

**規制・コンプライアンス：**
- データローカライゼーション対応
- 各国製造業規制への準拠
- 監査ログの完全保存`
  },

  {
    id: 'adv-net-003',
    category: 'ネットワーキング',
    question: `大手メディア企業が、4K/8K動画配信のためのグローバルCDNネットワークをAWSで構築しています。このシステムには以下の高度な要件があります：

- 視聴者数：同時1,000万人以上
- 配信品質：4K（25Mbps）、8K（100Mbps）
- 地理的カバレッジ：世界200カ国以上
- レイテンシ：初回再生開始まで2秒以内
- 可用性：99.99%以上（大規模イベント時も維持）
- 帯域幅：ピーク時1Tbps以上
- セキュリティ：DRM、地域制限、DDoS対策
- コスト効率：従来CDNより40%削減
- 分析要件：リアルタイム視聴分析
- 災害復旧：主要データセンター障害時の自動切り替え
- 品質制御：動的ビットレート調整、適応的ストリーミング

この大規模動画配信要件を満たす最適なCDNアーキテクチャはどれですか？`,
    options: [
      'Amazon CloudFront + AWS Global Accelerator + Amazon S3 + AWS Elemental MediaStore + AWS WAF + Lambda@Edge',
      'Amazon CloudFront + AWS Direct Connect + Amazon EFS + AWS Elemental MediaConvert + CloudWatch + API Gateway',
      'AWS Global Accelerator + Application Load Balancer + Amazon S3 + AWS Elemental MediaLive + Route 53 + ElastiCache',
      'Amazon CloudFront + AWS PrivateLink + Amazon FSx + AWS Elemental MediaPackage + AWS Shield + Step Functions'
    ],
    correct: 0,
    explanation: `正解は「Amazon CloudFront + AWS Global Accelerator + Amazon S3 + AWS Elemental MediaStore + AWS WAF + Lambda@Edge」です。

この選択肢が最適な理由：

**大規模配信・パフォーマンス要件への対応：**
1. **Amazon CloudFront**: 
   - 世界400+エッジロケーション
   - 1Tbps以上の配信能力
   - 2秒以内の初回再生開始
   - 99.99%の可用性SLA
2. **AWS Global Accelerator**: 
   - AWSバックボーンネットワーク活用
   - 動的ルーティング最適化
   - 災害復旧時の自動切り替え

**高品質動画配信への対応：**
1. **AWS Elemental MediaStore**: 
   - 4K/8K動画に最適化されたストレージ
   - 低レイテンシ配信
   - 高スループット（100Mbps対応）
2. **Amazon S3**: 
   - 大容量動画ファイルの保存
   - 11 9's の耐久性
   - CloudFrontとの統合

**セキュリティ・制御要件への対応：**
1. **AWS WAF**: 
   - DDoS攻撃対策
   - 地域制限の実装
   - リアルタイム脅威検知
2. **Lambda@Edge**: 
   - エッジでのDRM処理
   - 動的コンテンツ生成
   - A/Bテスト実装

**運用・分析要件への対応：**
1. **リアルタイム分析**: CloudFrontのリアルタイムログ
2. **適応的ストリーミング**: Lambda@Edgeでの動的調整
3. **コスト最適化**: CloudFrontの従量課金モデル

**他の選択肢の問題点：**
- **Amazon CloudFront + AWS Direct Connect + Amazon EFS + AWS Elemental MediaConvert + CloudWatch + API Gateway**: EFSは動画配信に不適切、MediaConvertは変換用途
- **AWS Global Accelerator + Application Load Balancer + Amazon S3 + AWS Elemental MediaLive + Route 53 + ElastiCache**: ALBはCDNとして不適切、MediaLiveはライブ配信用途
- **Amazon CloudFront + AWS PrivateLink + Amazon FSx + AWS Elemental MediaPackage + AWS Shield + Step Functions**: PrivateLinkは内部通信用、FSxは動画配信に不適切

**大規模動画配信の特別な利点：**
1. **エッジ最適化**: 
   - 視聴者に最も近いエッジからの配信
   - 動的キャッシュ戦略
   - 帯域幅の効率的利用
2. **品質制御**: 
   - 適応的ビットレート
   - ネットワーク状況に応じた品質調整
   - バッファリング最小化
3. **スケーラビリティ**: 
   - 1,000万同時視聴者対応
   - 自動スケーリング
   - ピーク時の安定配信

**災害復旧・高可用性：**
- 複数オリジンでの冗長化
- 自動フェイルオーバー
- リアルタイム監視とアラート

**コスト最適化：**
- エッジキャッシュによる帯域幅削減
- 従量課金による効率化
- 40%コスト削減の実現`
  },
  {
    id: 'adv-net-004',
    category: 'ネットワーキング',
    question: `大手金融機関が、高頻度取引（HFT）システムのネットワーク最適化を行っています。以下の要件があります：

1. 取引所との通信レイテンシ：マイクロ秒レベル
2. 99.999%の可用性要件
3. 複数の取引所への同時接続
4. ネットワーク障害時の瞬時フェイルオーバー
5. 厳格なセキュリティ要件（金融業界規制）
6. 帯域幅：10Gbps以上の専用線
7. ネットワーク監視とパフォーマンス分析

この要件を満たすために、最も適切なネットワークアーキテクチャはどれですか？`,
    options: [
      'AWS Direct Connect + Dedicated Connection + BGP + Enhanced Networking + Placement Groups + CloudWatch + VPC Flow Logsを使用し、超低レイテンシ金融ネットワークを構築する',
      'VPN Gateway + Customer Gateway + BGP + Route 53 + CloudFront + WAF + Shieldを使用し、セキュア金融ネットワークを構築する',
      'Transit Gateway + Direct Connect Gateway + PrivateLink + NAT Gateway + Internet Gateway + ELBを使用し、ハイブリッド金融ネットワークを構築する',
      'CloudFront + Global Accelerator + Route 53 + Application Load Balancer + Network Load Balancer + API Gatewayを使用し、グローバル金融ネットワークを構築する'
    ],
    correct: 0,
    explanation: `高頻度取引システムには、AWS Direct Connect + Dedicated Connection + BGP + Enhanced Networking + Placement Groups + CloudWatch + VPC Flow Logsの組み合わせが最適です。

理由：
1. **Direct Connect Dedicated**: 専用物理接続でマイクロ秒レベルのレイテンシを実現
2. **BGP**: 複数パスでの冗長性と瞬時フェイルオーバー
3. **Enhanced Networking**: SR-IOVによる高性能ネットワーキング
4. **Placement Groups**: 同一AZ内でのクラスター配置による低レイテンシ
5. **CloudWatch**: リアルタイムネットワーク監視
6. **VPC Flow Logs**: セキュリティ監査とトラフィック分析

他の選択肢の問題点：
- **VPN Gateway + Customer Gateway + BGP + Route 53 + CloudFront + WAF + Shield**を使用し、セキュア金融ネットワークを構築する: VPNはマイクロ秒レベルのレイテンシ要件を満たせない
- **Transit Gateway + Direct Connect Gateway + PrivateLink + NAT Gateway + Internet Gateway + ELB**を使用し、ハイブリッド金融ネットワークを構築する: Transit Gatewayは追加のホップによりレイテンシが増加
- **CloudFront + Global Accelerator + Route 53 + Application Load Balancer + Network Load Balancer + API Gateway**を使用し、グローバル金融ネットワークを構築する: インターネット経由は金融取引の安定性要件に不適切`
  },
  {
    id: 'adv-net-005',
    category: 'ネットワーキング',
    question: `大手製造業が、グローバル工場のIoTネットワークを構築しています。以下の要件があります：

1. 世界50拠点の工場ネットワーク統合
2. 数万台のIoTデバイスからのデータ収集
3. リアルタイム制御システムとの連携
4. 工場間でのセキュアなデータ共有
5. 災害時の自動フェイルオーバー
6. 帯域幅の動的調整
7. ネットワークセキュリティとコンプライアンス

この要件を満たすために、最も適切なグローバルIoTネットワークアーキテクチャはどれですか？`,
    options: [
      'AWS Global Network + Transit Gateway + Direct Connect + IoT Core + Greengrass + PrivateLink + AWS Configを使用し、グローバルIoTネットワークを構築する',
      'VPC Peering + VPN Gateway + Internet Gateway + NAT Gateway + Route 53 + CloudFrontを使用し、従来型グローバルネットワークを構築する',
      'CloudWAN + Site-to-Site VPN + Customer Gateway + Route 53 Resolver + CloudWatch + GuardDutyを使用し、SD-WANベースネットワークを構築する',
      'Direct Connect + Virtual Private Gateway + BGP + Elastic Load Balancer + Auto Scaling + CloudTrailを使用し、専用線ベースネットワークを構築する'
    ],
    correct: 2,
    explanation: `グローバル製造業のIoTネットワークには、CloudWAN + Site-to-Site VPN + Customer Gateway + Route 53 Resolver + CloudWatch + GuardDutyの組み合わせが最適です。

理由：
1. **CloudWAN**: グローバル拠点の統合ネットワーク管理
2. **Site-to-Site VPN**: 工場間のセキュアな接続
3. **Customer Gateway**: 既存工場システムとの統合
4. **Route 53 Resolver**: 工場間でのDNS解決
5. **CloudWatch**: IoTデバイスのネットワーク監視
6. **GuardDuty**: 製造業特有のセキュリティ脅威検知

他の選択肢の問題点：
- **AWS Global Network + Transit Gateway + Direct Connect + IoT Core + Greengrass + PrivateLink + AWS Config**を使用し、グローバルIoTネットワークを構築する: IoT Coreは良いが、50拠点の統合管理にはCloudWANが最適
- **VPC Peering + VPN Gateway + Internet Gateway + NAT Gateway + Route 53 + CloudFront**を使用し、従来型グローバルネットワークを構築する: VPC Peeringは大規模拠点間接続に複雑性が増加
- **Direct Connect + Virtual Private Gateway + BGP + Elastic Load Balancer + Auto Scaling + CloudTrail**を使用し、専用線ベースネットワークを構築する: Direct Connectは全拠点への導入コストが高い`
  },
  {
    id: 'adv-net-006',
    category: 'ネットワーキング',
    question: `大手メディア企業が、ライブストリーミング配信のネットワーク最適化を行っています。以下の要件があります：

1. 世界中への4K/8K動画配信
2. 同時視聴者数：1000万人以上
3. 配信遅延：2秒以下
4. 動的な品質調整（アダプティブビットレート）
5. DDoS攻撃からの保護
6. 地域別のコンテンツ配信制御
7. 帯域幅コストの最適化

この要件を満たすために、最も適切なライブストリーミングネットワークアーキテクチャはどれですか？`,
    options: [
      'CloudFront + Global Accelerator + Route 53 + WAF + Shield + Lambda@Edge + Origin Shieldを使用し、グローバル配信ネットワークを構築する',
      'Application Load Balancer + Auto Scaling + ElastiCache + S3 + Transfer Acceleration + CloudWatchを使用し、従来型配信ネットワークを構築する',
      'Direct Connect + Transit Gateway + PrivateLink + VPC Endpoints + NAT Gateway + Internet Gatewayを使用し、専用線配信ネットワークを構築する',
      'API Gateway + Lambda + DynamoDB + Kinesis + SQS + SNSを使用し、サーバーレス配信ネットワークを構築する'
    ],
    correct: 0,
    explanation: `ライブストリーミング配信には、CloudFront + Global Accelerator + Route 53 + WAF + Shield + Lambda@Edge + Origin Shieldの組み合わせが最適です。

理由：
1. **CloudFront**: 世界中のエッジロケーションでの高速コンテンツ配信
2. **Global Accelerator**: Anycastネットワークによる低レイテンシ実現
3. **Route 53**: 地理的ルーティングによる地域別配信制御
4. **WAF + Shield**: DDoS攻撃からの多層防御
5. **Lambda@Edge**: エッジでの動的品質調整
6. **Origin Shield**: オリジンサーバーの負荷軽減とコスト最適化

他の選択肢の問題点：
- **Application Load Balancer + Auto Scaling + ElastiCache + S3 + Transfer Acceleration + CloudWatch**を使用し、従来型配信ネットワークを構築する: ALBは1000万同時視聴者の要件を満たせない
- **Direct Connect + Transit Gateway + PrivateLink + VPC Endpoints + NAT Gateway + Internet Gateway**を使用し、専用線配信ネットワークを構築する: 専用線は配信ネットワークには不適切でコスト高
- **API Gateway + Lambda + DynamoDB + Kinesis + SQS + SNS**を使用し、サーバーレス配信ネットワークを構築する: サーバーレスは大規模ライブストリーミングに不適切`
  },
  {
    id: 'adv-net-007',
    category: 'ネットワーキング',
    question: `大手病院グループが、医療情報システムのネットワーク統合を行っています。以下の要件があります：

1. 複数病院間での患者情報共有
2. HIPAA、GDPR等の医療プライバシー規制準拠
3. 医療機器との安全な接続
4. 緊急時の優先通信確保
5. 医療画像の高速転送
6. ネットワーク障害時の自動復旧
7. 完全な通信ログと監査証跡

この要件を満たすために、最も適切な医療ネットワークアーキテクチャはどれですか？`,
    options: [
      'PrivateLink + VPC Endpoints + Direct Connect + Transit Gateway + Route 53 Resolver + CloudTrail + Macieを使用し、HIPAA準拠医療ネットワークを構築する',
      'Site-to-Site VPN + Customer Gateway + Internet Gateway + NAT Gateway + Route 53 + CloudFrontを使用し、VPNベース医療ネットワークを構築する',
      'VPC Peering + Application Load Balancer + Auto Scaling + ElastiCache + CloudWatch + GuardDutyを使用し、従来型医療ネットワークを構築する',
      'API Gateway + Lambda + DynamoDB + Kinesis + SQS + Step Functionsを使用し、サーバーレス医療ネットワークを構築する'
    ],
    correct: 0,
    explanation: `医療情報システムには、PrivateLink + VPC Endpoints + Direct Connect + Transit Gateway + Route 53 Resolver + CloudTrail + Macieの組み合わせが最適です。

理由：
1. **PrivateLink**: インターネットを経由しない完全プライベート通信
2. **VPC Endpoints**: AWSサービスへの安全なアクセス
3. **Direct Connect**: 医療画像の高速転送と安定した接続
4. **Transit Gateway**: 複数病院間の効率的なネットワーク統合
5. **Route 53 Resolver**: 病院間でのセキュアなDNS解決
6. **CloudTrail**: HIPAA要件の完全な監査証跡
7. **Macie**: PHI（個人健康情報）の自動検出と保護

他の選択肢の問題点：
- **Site-to-Site VPN + Customer Gateway + Internet Gateway + NAT Gateway + Route 53 + CloudFront**を使用し、VPNベース医療ネットワークを構築する: インターネットVPNは医療データの安全性要件に不十分
- **VPC Peering + Application Load Balancer + Auto Scaling + ElastiCache + CloudWatch + GuardDuty**を使用し、従来型医療ネットワークを構築する: VPC Peeringは大規模病院グループの管理に複雑
- **API Gateway + Lambda + DynamoDB + Kinesis + SQS + Step Functions**を使用し、サーバーレス医療ネットワークを構築する: サーバーレスは医療機器との直接接続に不適切`
  },
  {
    id: 'adv-net-008',
    category: 'ネットワーキング',
    question: `大手ゲーム会社が、リアルタイムマルチプレイヤーゲームのネットワーク最適化を行っています。以下の要件があります：

1. 世界中のプレイヤー間での低レイテンシ通信（50ms以下）
2. 同時接続プレイヤー数：100万人以上
3. ゲームセッション中の接続断防止
4. DDoS攻撃からのゲームサーバー保護
5. 地域別のゲームサーバー配置
6. 動的なトラフィック負荷分散
7. ネットワーク品質の監視と最適化

この要件を満たすために、最も適切なゲーミングネットワークアーキテクチャはどれですか？`,
    options: [
      'Global Accelerator + GameLift + Network Load Balancer + Route 53 + Shield + CloudWatch + VPC Flow Logsを使用し、ゲーミング特化ネットワークを構築する',
      'CloudFront + Application Load Balancer + Auto Scaling + ElastiCache + WAF + GuardDutyを使用し、Webベースゲームネットワークを構築する',
      'Direct Connect + Transit Gateway + PrivateLink + VPC Endpoints + NAT Gateway + Internet Gatewayを使用し、専用線ゲームネットワークを構築する',
      'API Gateway + Lambda + DynamoDB + Kinesis + SQS + Step Functionsを使用し、サーバーレスゲームネットワークを構築する'
    ],
    correct: 0,
    explanation: `リアルタイムマルチプレイヤーゲームには、Global Accelerator + GameLift + Network Load Balancer + Route 53 + Shield + CloudWatch + VPC Flow Logsの組み合わせが最適です。

理由：
1. **Global Accelerator**: Anycastネットワークで世界中から50ms以下のレイテンシ
2. **GameLift**: ゲーム専用のマネージドサービスで100万同時接続対応
3. **Network Load Balancer**: 低レイテンシでの高性能負荷分散
4. **Route 53**: 地理的ルーティングによる最適サーバー選択
5. **Shield**: DDoS攻撃からのゲームサーバー保護
6. **CloudWatch**: ネットワーク品質のリアルタイム監視
7. **VPC Flow Logs**: 接続品質の詳細分析

他の選択肢の問題点：
- **CloudFront + Application Load Balancer + Auto Scaling + ElastiCache + WAF + GuardDuty**を使用し、Webベースゲームネットワークを構築する: CloudFrontはリアルタイムゲーム通信に不適切
- **Direct Connect + Transit Gateway + PrivateLink + VPC Endpoints + NAT Gateway + Internet Gateway**を使用し、専用線ゲームネットワークを構築する: 専用線は世界中のプレイヤーアクセスに不適切
- **API Gateway + Lambda + DynamoDB + Kinesis + SQS + Step Functions**を使用し、サーバーレスゲームネットワークを構築する: サーバーレスは低レイテンシゲーム通信に不適切`
  },
  {
    id: 'adv-net-009',
    category: 'ネットワーキング',
    question: `大手航空会社が、航空管制システムとの連携ネットワークを構築しています。以下の要件があります：

1. 航空管制システムとのリアルタイム通信
2. 99.999%の可用性要件（人命に関わる）
3. 複数の空港システムとの同時接続
4. 航空業界規制（ICAO、FAA）への準拠
5. 機密フライト情報の完全な保護
6. 災害時の自動フェイルオーバー
7. 通信の完全な監査証跡

この要件を満たすために、最も適切な航空業界向けネットワークアーキテクチャはどれですか？`,
    options: [
      'Direct Connect + Dedicated Connection + BGP + PrivateLink + VPC Endpoints + CloudTrail + AWS Configを使用し、航空業界特化ネットワークを構築する',
      'Site-to-Site VPN + Customer Gateway + Internet Gateway + Route 53 + CloudFront + WAFを使用し、VPNベース航空ネットワークを構築する',
      'Transit Gateway + Direct Connect Gateway + Global Accelerator + Network Load Balancer + Auto Scaling + CloudWatchを使用し、ハイブリッド航空ネットワークを構築する',
      'CloudWAN + SD-WAN + Route 53 Resolver + GuardDuty + Macie + Shieldを使用し、SD-WAN航空ネットワークを構築する'
    ],
    correct: 0,
    explanation: `航空管制システム連携には、Direct Connect + Dedicated Connection + BGP + PrivateLink + VPC Endpoints + CloudTrail + AWS Configの組み合わせが最適です。

理由：
1. **Direct Connect Dedicated**: 航空管制との専用物理接続で最高の信頼性
2. **BGP**: 複数パスでの冗長性と瞬時フェイルオーバー
3. **PrivateLink**: インターネットを経由しない完全プライベート通信
4. **VPC Endpoints**: AWSサービスへの安全なアクセス
5. **CloudTrail**: 航空業界規制に必要な完全な監査証跡
6. **AWS Config**: コンプライアンス設定の継続的監視

他の選択肢の問題点：
- **Site-to-Site VPN + Customer Gateway + Internet Gateway + Route 53 + CloudFront + WAF**を使用し、VPNベース航空ネットワークを構築する: インターネットVPNは航空管制の信頼性要件に不十分
- **Transit Gateway + Direct Connect Gateway + Global Accelerator + Network Load Balancer + Auto Scaling + CloudWatch**を使用し、ハイブリッド航空ネットワークを構築する: Global Acceleratorは航空管制には不要で複雑性が増加
- **CloudWAN + SD-WAN + Route 53 Resolver + GuardDuty + Macie + Shield**を使用し、SD-WAN航空ネットワークを構築する: SD-WANは航空業界の厳格な要件には新しすぎる技術`
  },
  {
    id: 'adv-net-010',
    category: 'ネットワーキング',
    question: `大手エネルギー会社が、スマートグリッドシステムのネットワークを構築しています。以下の要件があります：

1. 発電所、変電所、配電網の統合監視
2. 数百万台のスマートメーターとの通信
3. リアルタイム電力需給調整
4. サイバー攻撃からの重要インフラ保護
5. 停電時の通信継続性
6. エネルギー業界規制への準拠
7. 地理的に分散した設備の効率的管理

この要件を満たすために、最も適切なスマートグリッドネットワークアーキテクチャはどれですか？`,
    options: [
      'AWS Wavelength + 5G + IoT Core + Greengrass + PrivateLink + Direct Connect + GuardDutyを使用し、エッジコンピューティングベーススマートグリッドを構築する',
      'CloudWAN + Site-to-Site VPN + Transit Gateway + Route 53 + CloudWatch + AWS Config + Macieを使用し、統合スマートグリッドネットワークを構築する',
      'Direct Connect + Virtual Private Gateway + BGP + VPC Peering + NAT Gateway + Internet Gatewayを使用し、専用線ベーススマートグリッドを構築する',
      'Global Accelerator + CloudFront + Application Load Balancer + Auto Scaling + ElastiCache + WAFを使用し、クラウドベーススマートグリッドを構築する'
    ],
    correct: 1,
    explanation: `スマートグリッドシステムには、CloudWAN + Site-to-Site VPN + Transit Gateway + Route 53 + CloudWatch + AWS Config + Macieの組み合わせが最適です。

理由：
1. **CloudWAN**: 地理的に分散した電力設備の統合ネットワーク管理
2. **Site-to-Site VPN**: 発電所・変電所間のセキュアな接続
3. **Transit Gateway**: 複雑な電力網の効率的なルーティング
4. **Route 53**: 電力設備間でのDNS解決と負荷分散
5. **CloudWatch**: リアルタイム電力需給監視
6. **AWS Config**: エネルギー業界規制への準拠監視
7. **Macie**: 重要インフラ情報の保護

他の選択肢の問題点：
- **AWS Wavelength + 5G + IoT Core + Greengrass + PrivateLink + Direct Connect + GuardDuty**を使用し、エッジコンピューティングベーススマートグリッドを構築する: Wavelengthは5G前提で、既存電力インフラには不適切
- **Direct Connect + Virtual Private Gateway + BGP + VPC Peering + NAT Gateway + Internet Gateway**を使用し、専用線ベーススマートグリッドを構築する: 専用線は大規模電力網の管理に複雑
- **Global Accelerator + CloudFront + Application Load Balancer + Auto Scaling + ElastiCache + WAF**を使用し、クラウドベーススマートグリッドを構築する: インターネットベースは重要インフラの安全性要件に不適切`
  },

  // 複数選択問題
  {
    id: 'adv-net-multi-001',
    category: 'ネットワーキング',
    question: `多国籍企業が、グローバル本社と各国支社を接続するハイブリッドクラウドネットワークを構築しています。以下の要件があります：

**要件：**
- 本社（東京）と支社（ニューヨーク、ロンドン、シンガポール）の接続
- 各拠点間の専用線接続による高セキュリティ通信
- AWS上のワークロードと各拠点の統合
- 帯域幅：各拠点10Gbps以上
- 冗長性とフェイルオーバー機能
- 遅延最小化（拠点間100ms以内）

このネットワークアーキテクチャに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Direct Connect - 専用線接続サービス',
      'AWS Transit Gateway - ネットワーク統合ハブ',
      'AWS Global Accelerator - グローバルネットワーク最適化',
      'AWS VPN - 暗号化VPN接続',
      'AWS PrivateLink - プライベートサービス接続',
      'Amazon CloudFront - コンテンツ配信ネットワーク'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Direct Connect**
- 各拠点からAWSへの専用線接続
- 10Gbps以上の高帯域幅対応
- インターネットを経由しない安全な通信
- 一貫した低レイテンシ通信
- 冗長接続による高可用性

**2. AWS Transit Gateway**
- 複数VPCと拠点間の統合接続ハブ
- スケーラブルなルーティング管理
- 複雑なネットワークトポロジーの簡素化
- 各拠点からの統一アクセスポイント
- 帯域幅の効率的な利用

**3. AWS Global Accelerator**
- AWSバックボーンネットワークの活用
- 拠点間通信の遅延最小化
- 自動フェイルオーバー機能
- トラフィックの最適ルーティング
- パフォーマンス監視と最適化

**他の選択肢について：**
- **AWS VPN**: 専用線要件を満たさず、帯域幅も不十分
- **PrivateLink**: サービス間接続には有用だが拠点接続の主要機能ではない
- **CloudFront**: コンテンツ配信には有用だが企業間通信の主要要件ではない`
  },

  {
    id: 'adv-net-multi-002',
    category: 'ネットワーキング',
    question: `大手銀行が、支店とデータセンター間のセキュアな金融取引ネットワークを構築しています。以下の要件があります：

**要件：**
- 全国500支店からの取引データ送信
- 金融庁規制への完全準拠
- エンドツーエンド暗号化
- ネットワーク分離とマイクロセグメンテーション
- 異常トラフィックの検知・遮断
- 99.99%の可用性保証

このセキュアネットワークに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'AWS Network Firewall - 高度なネットワークセキュリティ',
      'AWS PrivateLink - プライベートサービス接続',
      'AWS WAF - Webアプリケーションファイアウォール',
      'Amazon VPC - 仮想プライベートクラウド',
      'AWS Shield - DDoS攻撃防御',
      'Amazon Route 53 - DNS管理サービス'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. AWS Network Firewall**
- ステートフルなパケット検査
- 侵入検知・防御システム（IDS/IPS）機能
- カスタムルールによる金融取引の保護
- 異常トラフィックの自動検知・遮断
- 規制要件に対応したログ記録

**2. AWS PrivateLink**
- インターネットを経由しないプライベート接続
- エンドツーエンドの暗号化通信
- ネットワーク分離による高セキュリティ
- 金融サービス間の安全な通信
- 規制要件への準拠

**他の選択肢について：**
- **AWS WAF**: Webアプリケーション保護には有用だが、ネットワークレベルの要件には不十分
- **VPC**: 基本的なネットワーク分離には必要だが、高度なセキュリティ機能が不足
- **Shield**: DDoS防御には有用だが、金融取引の主要セキュリティ要件ではない
- **Route 53**: DNS管理には必要だが、セキュリティの主要機能ではない`
  },

  {
    id: 'adv-net-multi-003',
    category: 'ネットワーキング',
    question: `グローバル展開するゲーム会社が、リアルタイム対戦ゲームのネットワークインフラを構築しています。以下の要件があります：

**要件：**
- 世界中のプレイヤー間で50ms以下のレイテンシ
- 同時接続プレイヤー数：100万人以上
- DDoS攻撃からの保護
- 地域別負荷分散
- ゲームサーバーの動的スケーリング
- ネットワーク品質の監視・最適化

このゲームネットワークに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'AWS Global Accelerator - グローバルネットワーク最適化',
      'Amazon CloudFront - エッジキャッシング',
      'Elastic Load Balancing - 負荷分散',
      'AWS Shield Advanced - DDoS攻撃防御',
      'Amazon Route 53 - 地理的DNSルーティング',
      'AWS Direct Connect - 専用線接続'
    ],
    correct: [0, 3, 4],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. AWS Global Accelerator**
- AWSバックボーンネットワークによる最適ルーティング
- 50ms以下のレイテンシ要件を満たす
- 自動フェイルオーバーによる高可用性
- リアルタイム通信の最適化
- ネットワーク品質の継続的監視

**2. AWS Shield Advanced**
- 大規模DDoS攻撃からの保護
- ゲームサービスの可用性保証
- 24/7のDDoS対応チームサポート
- 攻撃時の自動スケーリング
- 詳細な攻撃分析とレポート

**3. Amazon Route 53**
- 地理的位置に基づく最適なサーバー選択
- ヘルスチェックによる自動フェイルオーバー
- 低レイテンシDNS解決
- 地域別負荷分散の実現
- ゲームサーバーの動的ルーティング

**他の選択肢について：**
- **CloudFront**: 静的コンテンツには有用だがリアルタイム通信には不適切
- **ELB**: 負荷分散には有用だが、グローバルレイテンシ要件には不十分
- **Direct Connect**: 専用線は企業向けで、一般ゲーマーには不適切`
  }
]

module.exports = advancedNetworkingQuestions
