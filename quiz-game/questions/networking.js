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
  }
]

export default networkingQuestions
