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
  }
]

export default networkingQuestions
