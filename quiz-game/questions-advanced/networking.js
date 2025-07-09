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
- **選択肢A**: Global Acceleratorは不要、500拠点管理には複雑
- **選択肢B**: VPC Peeringは大規模には不適切、管理が複雑
- **選択肢C**: PrivateLinkは用途が限定的、VPN CloudHubは廃止予定

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
- **選択肢A**: Wavelengthは5G通信事業者依存、工場環境に不適切
- **選択肢B**: VPNは帯域幅・レイテンシ要件を満たせない
- **選択肢D**: Snow Familyは一時的なデータ移行用、常時接続に不適切

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
- **選択肢B**: EFSは動画配信に不適切、MediaConvertは変換用途
- **選択肢C**: ALBはCDNとして不適切、MediaLiveはライブ配信用途
- **選択肢D**: PrivateLinkは内部通信用、FSxは動画配信に不適切

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
  }
]

module.exports = advancedNetworkingQuestions
