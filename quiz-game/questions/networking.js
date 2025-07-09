// ネットワーキング関連の問題
const networkingQuestions = [
  {
    id: 'networking-1',
    category: 'ネットワーキング',
    question: 'Layer 7（HTTP/HTTPS）で動作するロードバランサーはどれですか？',
    options: ['Classic Load Balancer', 'Application Load Balancer', 'Network Load Balancer', 'Gateway Load Balancer'],
    correct: 1,
    explanation: 'Application Load Balancer（ALB）は、Layer 7で動作し、HTTP/HTTPSトラフィックの高度なルーティングを提供します。'
  },
  {
    id: 'networking-2',
    category: 'ネットワーキング',
    question: '超高性能と極低レイテンシを提供するロードバランサーはどれですか？',
    options: ['ALB', 'NLB', 'CLB', 'GWLB'],
    correct: 1,
    explanation: 'Network Load Balancer（NLB）は、Layer 4で動作し、超高性能と極低レイテンシを提供します。'
  },
  {
    id: 'networking-3',
    category: 'ネットワーキング',
    question: '複数のVPCとオンプレミスを統合接続できるサービスはどれですか？',
    options: ['VPC Peering', 'Transit Gateway', 'Direct Connect', 'VPN'],
    correct: 1,
    explanation: 'AWS Transit Gatewayは、VPCとオンプレミスネットワークを単一のゲートウェイに接続できるサービスです。'
  },
  {
    id: 'networking-4',
    category: 'ネットワーキング',
    question: '専用線接続を提供するAWSサービスはどれですか？',
    options: ['VPN', 'Direct Connect', 'Transit Gateway', 'PrivateLink'],
    correct: 1,
    explanation: 'AWS Direct Connectは、オンプレミスからAWSへの専用ネットワーク接続を提供します。'
  },
  {
    id: 'networking-5',
    category: 'ネットワーキング',
    question: 'グローバルなコンテンツ配信ネットワーク（CDN）サービスはどれですか？',
    options: ['Route 53', 'CloudFront', 'Global Accelerator', 'API Gateway'],
    correct: 1,
    explanation: 'Amazon CloudFrontは、グローバルなエッジロケーションを使用してコンテンツを配信するCDNサービスです。'
  },
  {
    id: 'networking-6',
    category: 'ネットワーキング',
    question: '100% SLAを提供するDNSサービスはどれですか？',
    options: ['Route 53', 'CloudFront', 'Global Accelerator', 'Direct Connect'],
    correct: 0,
    explanation: 'Amazon Route 53は、100%の可用性SLAを提供する唯一のAWSサービスです。'
  },
  {
    id: 'networking-7',
    category: 'ネットワーキング',
    question: 'VPCのデフォルトセキュリティグループの初期設定はどれですか？',
    options: ['すべて許可', 'すべて拒否', 'アウトバウンドのみ許可', 'インバウンドのみ許可'],
    correct: 2,
    explanation: 'デフォルトセキュリティグループは、すべてのアウトバウンドトラフィックを許可し、同じセキュリティグループ内からのインバウンドトラフィックのみを許可します。'
  },
  {
    id: 'networking-8',
    category: 'ネットワーキング',
    question: 'VPC Peeringで接続できないネットワーク構成はどれですか？',
    options: ['同一リージョン内VPC', '異なるリージョンのVPC', '異なるアカウントのVPC', '推移的ルーティング'],
    correct: 3,
    explanation: 'VPC Peeringでは推移的ルーティングはサポートされておらず、直接接続されたVPC間でのみ通信可能です。'
  },
  {
    id: 'networking-9',
    category: 'ネットワーキング',
    question: 'NATゲートウェイの主な用途はどれですか？',
    options: ['インバウンド接続', 'アウトバウンド接続', '双方向接続', 'VPC間接続'],
    correct: 1,
    explanation: 'NATゲートウェイは、プライベートサブネット内のインスタンスがインターネットへのアウトバウンド接続を行うために使用されます。'
  },
  {
    id: 'networking-10',
    category: 'ネットワーキング',
    question: 'Elastic IPアドレスの課金対象となる状況はどれですか？',
    options: ['使用中', '未使用', '停止中のインスタンスに関連付け', '削除時'],
    correct: 1,
    explanation: 'Elastic IPアドレスは、使用していない（インスタンスに関連付けられていない）場合に課金されます。'
  },
  {
    id: 'networking-11',
    category: 'ネットワーキング',
    question: 'CloudFrontのオリジンとして使用できないサービスはどれですか？',
    options: ['S3', 'ALB', 'EC2', 'Lambda'],
    correct: 3,
    explanation: 'CloudFrontのオリジンとしてLambda関数を直接指定することはできません。Lambda@Edgeは別の機能です。'
  },
  {
    id: 'networking-12',
    category: 'ネットワーキング',
    question: 'Route 53のヘルスチェックで監視できない項目はどれですか？',
    options: ['HTTP/HTTPS', 'TCP', '文字列マッチング', 'データベース接続'],
    correct: 3,
    explanation: 'Route 53ヘルスチェックは、HTTP/HTTPS、TCP、文字列マッチングをサポートしますが、データベース接続の直接監視はできません。'
  },
  {
    id: 'networking-13',
    category: 'ネットワーキング',
    question: 'VPC Endpointで利用できないタイプはどれですか？',
    options: ['Gateway Endpoint', 'Interface Endpoint', 'Network Endpoint', 'すべて利用可能'],
    correct: 2,
    explanation: 'VPC EndpointにはGateway EndpointとInterface Endpointの2種類があり、Network Endpointというタイプは存在しません。'
  },
  {
    id: 'networking-14',
    category: 'ネットワーキング',
    question: 'Direct Connect Gatewayの主な利点はどれですか？',
    options: ['コスト削減', '複数VPC接続', 'セキュリティ向上', 'パフォーマンス向上'],
    correct: 1,
    explanation: 'Direct Connect Gatewayにより、単一のDirect Connect接続から複数のVPCに接続できます。'
  },
  {
    id: 'networking-15',
    category: 'ネットワーキング',
    question: 'Global Acceleratorで使用される技術はどれですか？',
    options: ['DNS', 'Anycast IP', 'BGP', 'OSPF'],
    correct: 1,
    explanation: 'Global AcceleratorはAnycast IPアドレスを使用して、ユーザーを最適なエンドポイントにルーティングします。'
  },
  {
    id: 'networking-16',
    category: 'ネットワーキング',
    question: 'VPCのCIDRブロックで使用できない範囲はどれですか？',
    options: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', '169.254.0.0/16'],
    correct: 3,
    explanation: '169.254.0.0/16はリンクローカルアドレス範囲で、VPCのCIDRブロックとして使用できません。'
  },
  {
    id: 'networking-17',
    category: 'ネットワーキング',
    question: 'ALBのターゲットグループで使用できないターゲットタイプはどれですか？',
    options: ['instance', 'ip', 'lambda', 'container'],
    correct: 3,
    explanation: 'ALBのターゲットタイプには、instance、ip、lambdaがありますが、containerという直接的なタイプはありません。'
  },
  {
    id: 'networking-18',
    category: 'ネットワーキング',
    question: 'VPC Flow Logsで記録されない情報はどれですか？',
    options: ['送信元IP', '宛先IP', 'ポート番号', 'ペイロード内容'],
    correct: 3,
    explanation: 'VPC Flow Logsは、ネットワークトラフィックのメタデータを記録しますが、実際のペイロード内容は記録されません。'
  },
  {
    id: 'networking-19',
    category: 'ネットワーキング',
    question: 'Site-to-Site VPNで使用される暗号化プロトコルはどれですか？',
    options: ['SSL/TLS', 'IPSec', 'SSH', 'HTTPS'],
    correct: 1,
    explanation: 'AWS Site-to-Site VPNは、IPSecプロトコルを使用してトンネルを暗号化します。'
  },
  {
    id: 'networking-20',
    category: 'ネットワーキング',
    question: 'PrivateLinkの主な用途はどれですか？',
    options: ['インターネット接続', 'VPC間接続', 'プライベートサービス接続', 'DNS解決'],
    correct: 2,
    explanation: 'AWS PrivateLinkは、VPCとAWSサービスまたはサードパーティサービス間のプライベート接続を提供します。'
  },
  {
    id: 'networking-21',
    category: 'ネットワーキング',
    question: 'CloudFrontのキャッシュ動作で設定できない項目はどれですか？',
    options: ['TTL', '圧縮', 'HTTPS リダイレクト', 'データベースクエリ'],
    correct: 3,
    explanation: 'CloudFrontはコンテンツ配信に特化しており、データベースクエリの設定はできません。'
  },
  {
    id: 'networking-22',
    category: 'ネットワーキング',
    question: 'NLBで利用できない機能はどれですか？',
    options: ['静的IP', 'クロスゾーン負荷分散', 'パスベースルーティング', 'ヘルスチェック'],
    correct: 2,
    explanation: 'NLBはLayer 4で動作するため、HTTPパスベースルーティングはサポートされていません。これはALBの機能です。'
  },
  {
    id: 'networking-23',
    category: 'ネットワーキング',
    question: 'Route 53のルーティングポリシーに含まれないものはどれですか？',
    options: ['Simple', 'Weighted', 'Latency-based', 'Cost-based'],
    correct: 3,
    explanation: 'Route 53には、Simple、Weighted、Latency-based、Failover、Geolocation、Geoproximity、Multivalue answerがありますが、Cost-basedはありません。'
  },
  {
    id: 'networking-24',
    category: 'ネットワーキング',
    question: 'VPCのDHCPオプションセットで設定できない項目はどれですか？',
    options: ['domain-name', 'domain-name-servers', 'ntp-servers', 'proxy-servers'],
    correct: 3,
    explanation: 'VPCのDHCPオプションセットでは、proxy-serversの設定はサポートされていません。'
  },
  {
    id: 'networking-25',
    category: 'ネットワーキング',
    question: 'Transit Gatewayの最大アタッチメント数はどれですか？',
    options: ['50', '100', '5000', '10000'],
    correct: 2,
    explanation: 'Transit Gatewayには最大5000のアタッチメントを接続できます。'
  },
  {
    id: 'networking-26',
    category: 'ネットワーキング',
    question: 'Client VPNで使用される認証方式に含まれないものはどれですか？',
    options: ['相互認証', 'Active Directory', 'SAML', 'OAuth'],
    correct: 3,
    explanation: 'Client VPNは、相互認証、Active Directory、SAMLをサポートしますが、OAuthは直接サポートされていません。'
  },
  {
    id: 'networking-27',
    category: 'ネットワーキング',
    question: 'VPC内のサブネットで予約されるIPアドレス数はどれですか？',
    options: ['3個', '4個', '5個', '6個'],
    correct: 2,
    explanation: 'VPCサブネットでは、ネットワークアドレス、VPCルーター、DNS、将来の使用、ブロードキャストアドレスの5個のIPアドレスが予約されます。'
  },
  {
    id: 'networking-28',
    category: 'ネットワーキング',
    question: 'Gateway Load Balancerの主な用途はどれですか？',
    options: ['HTTP負荷分散', 'TCP負荷分散', 'セキュリティアプライアンス', 'DNS負荷分散'],
    correct: 2,
    explanation: 'Gateway Load Balancerは、ファイアウォールやIDS/IPSなどのセキュリティアプライアンスの負荷分散に使用されます。'
  },
  {
    id: 'networking-29',
    category: 'ネットワーキング',
    question: 'CloudFrontのオリジンアクセスアイデンティティ（OAI）の目的はどれですか？',
    options: ['パフォーマンス向上', 'コスト削減', 'セキュリティ強化', 'キャッシュ最適化'],
    correct: 2,
    explanation: 'OAIは、S3バケットへの直接アクセスを制限し、CloudFront経由でのみアクセスを許可するセキュリティ機能です。'
  },
  {
    id: 'networking-30',
    category: 'ネットワーキング',
    question: 'VPC Latticeの主な機能はどれですか？',
    options: ['VPC接続', 'サービス間通信', 'DNS解決', 'ロードバランシング'],
    correct: 1,
    explanation: 'VPC Latticeは、マイクロサービス間の安全で効率的な通信を実現するアプリケーションネットワーキングサービスです。'
  },
  // 複数選択問題
  {
    id: 'networking-multi-1',
    category: 'ネットワーキング',
    question: 'VPCピアリング接続の制限事項として正しいものを3つ選択してください。',
    options: [
      'CIDRブロックの重複は不可',
      '推移的ルーティングは不可',
      '異なるリージョン間では利用不可',
      'セキュリティグループの参照は不可',
      '同一アカウント内でのみ利用可能',
      'DNS解決はサポートされない'
    ],
    correct: [0, 1, 3],
    multipleChoice: true,
    explanation: 'VPCピアリングの制限：CIDRブロックの重複不可、推移的ルーティング不可、異なるVPC間でのセキュリティグループ参照不可。異なるリージョン・アカウント間でも利用可能で、DNS解決もサポートされます。'
  },
  {
    id: 'networking-multi-2',
    category: 'ネットワーキング',
    question: 'AWS Transit Gatewayの利点として正しいものを2つ選択してください。',
    options: [
      'VPC間の複雑な接続を簡素化',
      'オンプレミスとの接続を一元化',
      'データ転送料金が無料',
      'セキュリティグループ機能を提供',
      'NATゲートウェイ機能を内蔵',
      'ロードバランサー機能を提供'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Transit Gatewayは、複数のVPC間の接続を簡素化し、オンプレミスとの接続を一元化できます。データ転送料金は発生し、セキュリティグループやNATゲートウェイ、ロードバランサー機能は提供しません。'
  },
  {
    id: 'networking-multi-3',
    category: 'ネットワーキング',
    question: 'Application Load Balancer (ALB)の機能として正しいものを3つ選択してください。',
    options: [
      'パスベースルーティング',
      'ホストベースルーティング',
      'WebSocketサポート',
      'UDP負荷分散',
      'Layer 4負荷分散のみ',
      'SSL終端'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'ALBは、パスベースルーティング、ホストベースルーティング、WebSocketサポートを提供します。Layer 7（HTTP/HTTPS）で動作し、SSL終端も可能ですが、UDP負荷分散はNetwork Load Balancerの機能です。'
  },
  {
    id: 'networking-multi-4',
    category: 'ネットワーキング',
    question: 'AWS Direct Connectの利点として正しいものを2つ選択してください。',
    options: [
      '専用線による安定した帯域幅',
      'インターネット経由より低レイテンシ',
      '完全無料のデータ転送',
      '自動的な冗長化',
      'VPN設定が不要',
      'パブリックIPアドレスが不要'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'Direct Connectは、専用線による安定した帯域幅とインターネット経由より低いレイテンシを提供します。データ転送料金は発生し、冗長化は手動設定が必要で、VPN設定やパブリックIPアドレスの要否は用途によります。'
  },
  {
    id: 'networking-multi-5',
    category: 'ネットワーキング',
    question: 'Amazon CloudFrontのキャッシュ動作を制御する方法として正しいものを3つ選択してください。',
    options: [
      'Cache Behaviors',
      'TTL設定',
      'Origin Request Policy',
      'Security Groups',
      'Route Tables',
      'Cache Policy'
    ],
    correct: [0, 1, 5],
    multipleChoice: true,
    explanation: 'CloudFrontのキャッシュ制御：Cache Behaviors（パスパターンベースの動作設定）、TTL設定（キャッシュ保持時間）、Cache Policy（キャッシュキーとTTL設定）。Origin Request Policyはオリジンへのリクエスト制御、Security GroupsやRoute Tablesは関係ありません。'
  },
  {
    id: 'networking-multi-6',
    category: 'ネットワーキング',
    question: 'AWS Global Acceleratorの機能として正しいものを2つ選択してください。',
    options: [
      'Anycastアドレスの提供',
      'AWSグローバルネットワークの活用',
      'コンテンツキャッシュ機能',
      'SSL証明書の自動管理',
      'DDoS攻撃の完全防御',
      'データベース接続の最適化'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Global Acceleratorの機能：Anycastアドレス（単一IPで複数リージョンにルーティング）、AWSグローバルネットワーク活用（最適経路でトラフィック転送）。コンテンツキャッシュはCloudFront、SSL管理やDDoS防御、DB最適化は他のサービスです。'
  },
  {
    id: 'networking-multi-7',
    category: 'ネットワーキング',
    question: 'Amazon Route 53のルーティングポリシーとして正しいものを3つ選択してください。',
    options: [
      'Weighted Routing',
      'Latency-based Routing',
      'Geolocation Routing',
      'Cost-based Routing',
      'Performance-based Routing',
      'Security-based Routing'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'Route 53のルーティングポリシー：Weighted（重み付け）、Latency-based（レイテンシベース）、Geolocation（地理的位置ベース）、Failover、Multivalue Answer、Geoproximity。Cost-based、Performance-based、Security-basedは存在しないポリシーです。'
  },
  {
    id: 'networking-multi-8',
    category: 'ネットワーキング',
    question: 'AWS PrivateLinkの利点として正しいものを2つ選択してください。',
    options: [
      'VPC間のプライベート接続',
      'インターネットゲートウェイ不要',
      'データ転送料金の無料化',
      'セキュリティグループの自動設定',
      'DNS解決の自動化',
      'ロードバランシング機能'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS PrivateLinkの利点：VPC間またはVPCとAWSサービス間のプライベート接続、インターネットを経由せずAWSバックボーンネットワーク使用。データ転送料金は発生し、セキュリティグループ設定、DNS解決、ロードバランシングは別途設定が必要です。'
  },
  {
    id: 'networking-multi-9',
    category: 'ネットワーキング',
    question: 'Network Load Balancer (NLB)の特徴として正しいものを3つ選択してください。',
    options: [
      'Layer 4（TCP/UDP）で動作',
      '静的IPアドレスの提供',
      '超低レイテンシ',
      'HTTPヘッダーベースルーティング',
      'SSL終端機能',
      'WebSocketサポート'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: 'Network Load Balancer（NLB）の特徴：Layer 4（TCP/UDP）で動作、静的IPアドレス提供、超低レイテンシ（マイクロ秒単位）。HTTPヘッダールーティング、SSL終端、WebSocketサポートはApplication Load Balancer（ALB）の機能です。'
  },
  {
    id: 'networking-multi-10',
    category: 'ネットワーキング',
    question: 'AWS Client VPNの機能として正しいものを2つ選択してください。',
    options: [
      'リモートユーザーのVPCアクセス',
      'OpenVPNプロトコルサポート',
      'サイト間VPN接続',
      'Direct Connect代替',
      'NAT Gateway機能',
      'Internet Gateway機能'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: 'AWS Client VPNの機能：リモートユーザー（個人）のVPCへの安全なアクセス、OpenVPNプロトコルサポート。サイト間VPN接続はSite-to-Site VPN、Direct Connect代替やNAT/Internet Gateway機能は提供しません。'
  }
]

export default networkingQuestions
