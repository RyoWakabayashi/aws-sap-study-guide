// AWS Solution Architect Professional 上級編 - コンピューティング問題

const advancedComputingQuestions = [
  {
    id: 'adv-comp-001',
    category: 'コンピューティング',
    question: `あなたの会社は、グローバルに展開するeコマースプラットフォームを運営しており、ピーク時には通常の10倍のトラフィックが発生します。現在のアーキテクチャでは、Application Load Balancer（ALB）の背後にAuto Scaling GroupでEC2インスタンスを配置していますが、以下の課題があります：

1. 新しいインスタンスの起動に5-7分かかり、急激なトラフィック増加に対応できない
2. インスタンスの起動コストが高く、短時間のピークに対してコスト効率が悪い
3. 地域によってレスポンス時間にばらつきがある
4. メンテナンス時のダウンタイムを最小化したい

これらの課題を解決するために、最も適切なアーキテクチャの組み合わせはどれですか？`,
    options: [
      'AWS Lambda + API Gateway + CloudFront + DynamoDB Global Tablesを使用し、サーバーレスアーキテクチャに移行する',
      'EC2 Spot Fleet + Warm Pool + Application Load Balancer + ElastiCacheを使用し、予めウォームアップされたインスタンスを準備する',
      'AWS Fargate + ECS Service + Application Load Balancer + Aurora Global Databaseを使用し、コンテナベースのアーキテクチャに移行する',
      'EC2 Reserved Instances + Predictive Scaling + Network Load Balancer + RDS Read Replicasを使用し、予測ベースのスケーリングを実装する'
    ],
    correct: 0,
    explanation: `正解は「AWS Lambda + API Gateway + CloudFront + DynamoDB Global Tablesを使用し、サーバーレスアーキテクチャに移行する」です。

この選択肢が最適な理由：

**課題解決の観点：**
1. **起動時間の問題**: Lambdaは数ミリ秒で起動し、コールドスタートでも数秒以内
2. **コスト効率**: 実際の実行時間のみ課金、アイドル時間のコストなし
3. **地域対応**: CloudFrontによる世界規模のエッジロケーション活用
4. **ダウンタイム**: サーバーレスによる自動的な高可用性

**他の選択肢の問題点：**
- **選択肢B**: Warm Poolは改善されるが、依然としてEC2の起動時間とコストの課題が残る
- **選択肢C**: Fargateは改善されるが、コンテナ起動時間とコストの課題が完全には解決されない
- **選択肢D**: Predictive Scalingは予測に依存し、予期しないトラフィック急増に対応できない

**アーキテクチャの利点：**
- 無限スケーラビリティ
- 地理的分散による低レイテンシ
- 運用オーバーヘッドの最小化
- 従量課金によるコスト最適化`
  },

  {
    id: 'adv-comp-002',
    category: 'コンピューティング',
    question: `大手金融機関が、レガシーなメインフレームシステムからAWSへの移行を計画しています。このシステムは以下の特徴があります：

- 24時間365日の稼働が必要（ダウンタイム許容度：年間5分以内）
- 1秒間に10,000件のトランザクション処理が必要
- データの整合性が極めて重要（ACID特性の完全な保証が必要）
- 規制要件により、特定の地域内でのデータ保存が義務付けられている
- 既存のCOBOLアプリケーションが数百本存在
- ピーク時とオフピーク時で処理量が3倍異なる

この要件を満たすために、最も適切な移行戦略とアーキテクチャはどれですか？`,
    options: [
      'AWS Mainframe Modernization + Amazon Aurora + Multi-AZ配置 + Auto Scalingを使用し、段階的にマイクロサービス化を進める',
      'Amazon EC2 Dedicated Hosts + Oracle RAC + EBS Multi-Attach + Placement Groupsを使用し、オンプレミス環境を忠実に再現する',
      'AWS Lambda + Amazon DynamoDB + API Gateway + Step Functionsを使用し、完全サーバーレスアーキテクチャに移行する',
      'Amazon EKS + Amazon RDS Proxy + ElastiCache + Application Load Balancerを使用し、コンテナベースのマイクロサービスアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `正解は「AWS Mainframe Modernization + Amazon Aurora + Multi-AZ配置 + Auto Scalingを使用し、段階的にマイクロサービス化を進める」です。

この選択肢が最適な理由：

**要件への対応：**
1. **高可用性**: Multi-AZ配置により99.99%以上の可用性を実現
2. **高性能**: Aurora Clusterにより10,000 TPSの処理能力を確保
3. **ACID特性**: Auroraは完全なACID特性をサポート
4. **規制対応**: 特定リージョン内でのデータ保存が可能
5. **レガシー対応**: AWS Mainframe Modernizationによる段階的移行
6. **スケーラビリティ**: Auto Scalingによる動的な処理能力調整

**AWS Mainframe Modernizationの利点：**
- COBOLアプリケーションの段階的移行支援
- 既存ビジネスロジックの保持
- リスクを最小化した移行戦略

**他の選択肢の問題点：**
- **選択肢B**: 高コストで運用複雑性が高い、クラウドの利点を活用できない
- **選択肢C**: レガシーアプリケーションの移行が困難、ACID特性の保証が困難
- **選択肢D**: COBOLアプリケーションのコンテナ化が現実的でない

**段階的移行のメリット：**
- ビジネス継続性の確保
- リスクの分散
- 段階的な技術習得
- ROIの早期実現`
  },

  {
    id: 'adv-comp-003',
    category: 'コンピューティング',
    question: `グローバル展開するゲーム会社が、リアルタイム対戦ゲームのバックエンドシステムをAWSで構築しています。このシステムには以下の要件があります：

- 世界中のプレイヤー間でのリアルタイム通信（レイテンシ50ms以下）
- 同時接続プレイヤー数：100万人以上
- ゲームセッション中の接続断は許容されない
- 地域間でのゲームデータ同期が必要
- チート対策のためのサーバーサイド検証が必須
- ゲームイベント時には通常の5倍のトラフィックが発生
- コスト効率を重視（特にアイドル時間のコスト削減）

これらの要件を満たすために、最も適切なアーキテクチャ設計はどれですか？`,
    options: [
      'Amazon GameLift + AWS Global Accelerator + ElastiCache Global Datastore + Lambda@Edgeを使用し、地理的に分散されたゲームサーバーアーキテクチャを構築する',
      'EC2 Spot Instances + Application Load Balancer + RDS Aurora Global Database + CloudFrontを使用し、コスト効率を重視したアーキテクチャを構築する',
      'AWS Fargate + API Gateway + DynamoDB Global Tables + CloudFormation StackSetsを使用し、サーバーレスベースのマルチリージョンアーキテクチャを構築する',
      'Amazon EKS + Istio Service Mesh + Amazon MQ + Route 53 Health Checksを使用し、マイクロサービスベースのアーキテクチャを構築する'
    ],
    correct: 0,
    explanation: `正解は「Amazon GameLift + AWS Global Accelerator + ElastiCache Global Datastore + Lambda@Edgeを使用し、地理的に分散されたゲームサーバーアーキテクチャを構築する」です。

この選択肢が最適な理由：

**要件への対応：**
1. **低レイテンシ**: Global Acceleratorによる最適化されたネットワーク経路
2. **大規模同時接続**: GameLiftの自動スケーリングによる100万人対応
3. **接続安定性**: GameLiftの専用ゲームサーバー管理
4. **データ同期**: ElastiCache Global Datastoreによる地域間同期
5. **サーバーサイド検証**: GameLiftでの専用ゲームロジック実行
6. **動的スケーリング**: イベント時の自動スケールアウト
7. **コスト効率**: 使用量ベースの課金とSpot Instancesサポート

**各コンポーネントの役割：**
- **GameLift**: 専用ゲームサーバーの管理と自動スケーリング
- **Global Accelerator**: 世界規模での低レイテンシ通信
- **ElastiCache Global Datastore**: リアルタイムデータの地域間同期
- **Lambda@Edge**: エッジでの軽量処理とチート検証

**他の選択肢の問題点：**
- **選択肢B**: Spot Instancesは接続断のリスクがあり、ゲーム用途に不適切
- **選択肢C**: API Gatewayはリアルタイム通信に適さない、WebSocketサポートが限定的
- **選択肢D**: 複雑すぎる構成で、ゲーム特有の要件に最適化されていない

**GameLiftの特別な利点：**
- ゲーム専用の最適化
- プレイヤーマッチメイキング
- フリート管理の自動化
- チート対策機能の内蔵`
  }
]

module.exports = advancedComputingQuestions
