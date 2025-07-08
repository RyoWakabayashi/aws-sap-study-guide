# ネットワーキング

## 目次
1. [VPC (Virtual Private Cloud)](#vpc-virtual-private-cloud)
2. [ロードバランサー](#ロードバランサー)
3. [CloudFront](#cloudfront)
4. [Route 53](#route-53)
5. [Direct Connect](#direct-connect)
6. [VPN](#vpn)
7. [Transit Gateway](#transit-gateway)
8. [API Gateway](#api-gateway)

---

## VPC (Virtual Private Cloud)

### 概要
AWS内の仮想ネットワーク。完全に分離された環境を提供。

### 基本コンポーネント

#### CIDR設計
```
推奨CIDR範囲:
- 10.0.0.0/8 (10.0.0.0 - 10.255.255.255)
- 172.16.0.0/12 (172.16.0.0 - 172.31.255.255)
- 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)

例:
VPC: 10.0.0.0/16 (65,536 IP)
├─ Public Subnet: 10.0.1.0/24 (256 IP)
├─ Private Subnet: 10.0.2.0/24 (256 IP)
└─ Database Subnet: 10.0.3.0/24 (256 IP)
```

#### サブネット設計
```json
{
  "VpcId": "vpc-12345678",
  "Subnets": [
    {
      "SubnetId": "subnet-12345678",
      "CidrBlock": "10.0.1.0/24",
      "AvailabilityZone": "us-east-1a",
      "MapPublicIpOnLaunch": true
    },
    {
      "SubnetId": "subnet-87654321",
      "CidrBlock": "10.0.2.0/24",
      "AvailabilityZone": "us-east-1b",
      "MapPublicIpOnLaunch": false
    }
  ]
}
```

### ルーティング

#### ルートテーブル
```
パブリックルートテーブル:
- 0.0.0.0/0 → Internet Gateway
- 10.0.0.0/16 → Local

プライベートルートテーブル:
- 0.0.0.0/0 → NAT Gateway
- 10.0.0.0/16 → Local
```

#### NAT Gateway vs NAT Instance

| 項目 | NAT Gateway | NAT Instance |
|------|-------------|--------------|
| **可用性** | 高 (AZ内冗長) | 低 (単一障害点) |
| **帯域幅** | 最大45Gbps | インスタンス依存 |
| **管理** | マネージド | 自己管理 |
| **コスト** | 高 | 低 |
| **セキュリティ** | 自動更新 | 手動更新 |

### セキュリティ

#### セキュリティグループ
```json
{
  "GroupName": "web-server-sg",
  "Description": "Security group for web servers",
  "VpcId": "vpc-12345678",
  "SecurityGroupRules": [
    {
      "IpPermissions": [
        {
          "IpProtocol": "tcp",
          "FromPort": 80,
          "ToPort": 80,
          "IpRanges": [{"CidrIp": "0.0.0.0/0"}]
        },
        {
          "IpProtocol": "tcp",
          "FromPort": 443,
          "ToPort": 443,
          "IpRanges": [{"CidrIp": "0.0.0.0/0"}]
        }
      ]
    }
  ]
}
```

#### Network ACL
```json
{
  "NetworkAclId": "acl-12345678",
  "Entries": [
    {
      "RuleNumber": 100,
      "Protocol": "6",
      "RuleAction": "allow",
      "PortRange": {"From": 80, "To": 80},
      "CidrBlock": "0.0.0.0/0"
    },
    {
      "RuleNumber": 200,
      "Protocol": "6",
      "RuleAction": "allow",
      "PortRange": {"From": 443, "To": 443},
      "CidrBlock": "0.0.0.0/0"
    }
  ]
}
```

### VPC接続

#### VPC Peering
```
特徴:
- 1対1接続
- 同一リージョン/クロスリージョン
- 推移的ルーティング不可
- 帯域幅制限なし

制限:
- CIDR重複不可
- セキュリティグループ参照制限
- DNS解決設定必要
```

#### VPC Endpoints

##### Gateway Endpoint
```
対象サービス:
- S3
- DynamoDB

特徴:
- 無料
- ルートテーブル設定
- 同一リージョンのみ
```

##### Interface Endpoint
```
対象サービス:
- EC2、ECS、Lambda等
- 多数のAWSサービス

特徴:
- ENI作成
- 時間課金
- DNS名提供
```

### 公式リソース
- [VPC サービス紹介](https://aws.amazon.com/jp/vpc/)
- [VPC Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_VPC.pdf)

---

## ロードバランサー

### Application Load Balancer (ALB)

#### 特徴
```
レイヤー: 7 (HTTP/HTTPS)
ターゲット: EC2、IP、Lambda、ECS
機能: パスベース、ホストベースルーティング
SSL終端: 対応
WebSocket: 対応
```

#### ルーティング設定
```json
{
  "Rules": [
    {
      "Priority": 1,
      "Conditions": [
        {
          "Field": "path-pattern",
          "Values": ["/api/*"]
        }
      ],
      "Actions": [
        {
          "Type": "forward",
          "TargetGroupArn": "arn:aws:elasticloadbalancing:region:account:targetgroup/api-targets"
        }
      ]
    },
    {
      "Priority": 2,
      "Conditions": [
        {
          "Field": "host-header",
          "Values": ["admin.example.com"]
        }
      ],
      "Actions": [
        {
          "Type": "forward",
          "TargetGroupArn": "arn:aws:elasticloadbalancing:region:account:targetgroup/admin-targets"
        }
      ]
    }
  ]
}
```

### Network Load Balancer (NLB)

#### 特徴
```
レイヤー: 4 (TCP/UDP/TLS)
性能: 数百万リクエスト/秒
レイテンシ: 超低レイテンシ
IP: 静的IP対応
SSL: パススルー/終端両対応
```

#### 用途
```
高性能要件:
- ゲームサーバー
- IoTアプリケーション
- リアルタイム通信

静的IP要件:
- ホワイトリスト
- DNS設定
- ファイアウォール設定
```

### Gateway Load Balancer (GWLB)

#### 特徴
```
レイヤー: 3 (IP)
プロトコル: GENEVE
用途: サードパーティアプライアンス
機能: トラフィック分散・検査
```

#### アーキテクチャ
```
インターネット
    ↓
GWLB Endpoint
    ↓
Gateway Load Balancer
    ↓
セキュリティアプライアンス
(Firewall, IDS/IPS, DLP)
    ↓
アプリケーション
```

### ターゲットグループ

#### ヘルスチェック設定
```json
{
  "HealthCheckProtocol": "HTTP",
  "HealthCheckPath": "/health",
  "HealthCheckIntervalSeconds": 30,
  "HealthCheckTimeoutSeconds": 5,
  "HealthyThresholdCount": 2,
  "UnhealthyThresholdCount": 3,
  "Matcher": {
    "HttpCode": "200,202"
  }
}
```

### 公式リソース
- [ELB サービス紹介](https://aws.amazon.com/jp/elasticloadbalancing/)
- [ELB Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_ELB.pdf)

---

## CloudFront

### 概要
グローバルCDN (Content Delivery Network)。低レイテンシでコンテンツ配信。

### ディストリビューション設定

#### オリジン設定
```json
{
  "Origins": [
    {
      "Id": "S3-Origin",
      "DomainName": "my-bucket.s3.amazonaws.com",
      "S3OriginConfig": {
        "OriginAccessIdentity": "origin-access-identity/cloudfront/ABCDEFG1234567"
      }
    },
    {
      "Id": "ALB-Origin",
      "DomainName": "my-alb-1234567890.us-east-1.elb.amazonaws.com",
      "CustomOriginConfig": {
        "HTTPPort": 80,
        "HTTPSPort": 443,
        "OriginProtocolPolicy": "https-only"
      }
    }
  ]
}
```

#### キャッシュビヘイビア
```json
{
  "CacheBehaviors": [
    {
      "PathPattern": "/api/*",
      "TargetOriginId": "ALB-Origin",
      "ViewerProtocolPolicy": "redirect-to-https",
      "CachePolicyId": "4135ea2d-6df8-44a3-9df3-4b5a84be39ad",
      "TTL": {
        "DefaultTTL": 0,
        "MaxTTL": 0
      }
    },
    {
      "PathPattern": "/static/*",
      "TargetOriginId": "S3-Origin",
      "ViewerProtocolPolicy": "redirect-to-https",
      "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6",
      "TTL": {
        "DefaultTTL": 86400,
        "MaxTTL": 31536000
      }
    }
  ]
}
```

### セキュリティ

#### Origin Access Control (OAC)
```json
{
  "OriginAccessControlConfig": {
    "Name": "S3-OAC",
    "Description": "OAC for S3 bucket",
    "OriginAccessControlOriginType": "s3",
    "SigningBehavior": "always",
    "SigningProtocol": "sigv4"
  }
}
```

#### WAF統合
```json
{
  "WebACLId": "arn:aws:wafv2:us-east-1:account:global/webacl/MyWebACL/12345678-1234-1234-1234-123456789012"
}
```

### Lambda@Edge

#### 実行タイミング
```
Viewer Request: CloudFront → オリジン (リクエスト変更)
Origin Request: CloudFront → オリジン (オリジンリクエスト変更)
Origin Response: オリジン → CloudFront (レスポンス変更)
Viewer Response: CloudFront → ビューワー (最終レスポンス変更)
```

#### 使用例
```javascript
exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    
    // A/Bテスト
    const random = Math.random();
    if (random < 0.5) {
        request.uri = '/version-a' + request.uri;
    } else {
        request.uri = '/version-b' + request.uri;
    }
    
    callback(null, request);
};
```

### 公式リソース
- [CloudFront サービス紹介](https://aws.amazon.com/jp/cloudfront/)
- [CloudFront Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_CloudFront.pdf)

---

## Route 53

### 概要
スケーラブルなDNSサービス。ドメイン登録、ヘルスチェック、トラフィックルーティング。

### レコードタイプ

| タイプ | 用途 | 例 |
|--------|------|-----|
| **A** | IPv4アドレス | example.com → 192.0.2.1 |
| **AAAA** | IPv6アドレス | example.com → 2001:db8::1 |
| **CNAME** | 別名 | www.example.com → example.com |
| **MX** | メールサーバー | example.com → mail.example.com |
| **TXT** | テキスト | example.com → "v=spf1 include:_spf.google.com ~all" |
| **ALIAS** | AWS リソース | example.com → ALB |

### ルーティングポリシー

#### Simple Routing
```json
{
  "Name": "example.com",
  "Type": "A",
  "ResourceRecords": [
    {"Value": "192.0.2.1"},
    {"Value": "192.0.2.2"}
  ]
}
```

#### Weighted Routing
```json
{
  "Name": "example.com",
  "Type": "A",
  "SetIdentifier": "Primary",
  "Weight": 70,
  "ResourceRecords": [{"Value": "192.0.2.1"}]
},
{
  "Name": "example.com",
  "Type": "A",
  "SetIdentifier": "Secondary",
  "Weight": 30,
  "ResourceRecords": [{"Value": "192.0.2.2"}]
}
```

#### Latency-based Routing
```json
{
  "Name": "example.com",
  "Type": "A",
  "SetIdentifier": "US-East",
  "Region": "us-east-1",
  "ResourceRecords": [{"Value": "192.0.2.1"}]
},
{
  "Name": "example.com",
  "Type": "A",
  "SetIdentifier": "EU-West",
  "Region": "eu-west-1",
  "ResourceRecords": [{"Value": "192.0.2.2"}]
}
```

#### Failover Routing
```json
{
  "Name": "example.com",
  "Type": "A",
  "SetIdentifier": "Primary",
  "Failover": "PRIMARY",
  "HealthCheckId": "12345678-1234-1234-1234-123456789012",
  "ResourceRecords": [{"Value": "192.0.2.1"}]
},
{
  "Name": "example.com",
  "Type": "A",
  "SetIdentifier": "Secondary",
  "Failover": "SECONDARY",
  "ResourceRecords": [{"Value": "192.0.2.2"}]
}
```

### ヘルスチェック

#### HTTP/HTTPS チェック
```json
{
  "Type": "HTTP",
  "ResourcePath": "/health",
  "FullyQualifiedDomainName": "example.com",
  "Port": 80,
  "RequestInterval": 30,
  "FailureThreshold": 3,
  "Regions": ["us-east-1", "us-west-2", "eu-west-1"]
}
```

#### 計算ヘルスチェック
```json
{
  "Type": "CALCULATED",
  "ChildHealthChecks": [
    "12345678-1234-1234-1234-123456789012",
    "87654321-4321-4321-4321-210987654321"
  ],
  "HealthThreshold": 1,
  "InsufficientDataHealthStatus": "Failure"
}
```

### 公式リソース
- [Route 53 サービス紹介](https://aws.amazon.com/jp/route53/)
- [Route 53 Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_Route53.pdf)

---

## Direct Connect

### 概要
オンプレミスとAWSを専用線で接続するサービス。

### 接続タイプ

#### Dedicated Connection
```
帯域幅: 1Gbps、10Gbps、100Gbps
提供: AWS Direct Connect パートナー
用途: 大容量、安定した接続
コスト: 高
```

#### Hosted Connection
```
帯域幅: 50Mbps - 10Gbps
提供: AWS Direct Connect パートナー
用途: 中小規模、柔軟性
コスト: 中
```

### Virtual Interface (VIF)

#### Private VIF
```json
{
  "vifName": "private-vif",
  "vlan": 100,
  "bgpAsn": 65000,
  "customerAddress": "192.168.1.1/30",
  "amazonAddress": "192.168.1.2/30",
  "directConnectGatewayId": "dxgw-12345678"
}
```

#### Public VIF
```json
{
  "vifName": "public-vif",
  "vlan": 200,
  "bgpAsn": 65000,
  "customerAddress": "203.0.113.1/30",
  "amazonAddress": "203.0.113.2/30",
  "routeFilterPrefixes": [
    {"cidr": "203.0.113.0/24"}
  ]
}
```

#### Transit VIF
```json
{
  "vifName": "transit-vif",
  "vlan": 300,
  "bgpAsn": 65000,
  "customerAddress": "192.168.2.1/30",
  "amazonAddress": "192.168.2.2/30",
  "directConnectGatewayId": "dxgw-12345678"
}
```

### Direct Connect Gateway

#### 設定
```
機能:
- 複数VPCとの接続
- クロスリージョン接続
- Transit Gateway統合

制限:
- 最大10個のVPC
- 同一アカウント内
- BGPルーティング
```

### 冗長化

#### 冗長構成
```
推奨構成:
- 複数のDirect Connect ロケーション
- 複数の接続
- VPN バックアップ

例:
Primary: Direct Connect (東京)
Secondary: Direct Connect (大阪)
Backup: VPN over Internet
```

### 公式リソース
- [Direct Connect サービス紹介](https://aws.amazon.com/jp/directconnect/)
- [Direct Connect Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_DirectConnect.pdf)

---

## VPN

### Site-to-Site VPN

#### 設定
```json
{
  "CustomerGatewayId": "cgw-12345678",
  "Type": "ipsec.1",
  "VpnGatewayId": "vgw-12345678",
  "Options": {
    "StaticRoutesOnly": false,
    "TunnelOptions": [
      {
        "TunnelInsideCidr": "169.254.10.0/30",
        "PreSharedKey": "myPreSharedKey123"
      }
    ]
  }
}
```

#### BGP設定
```
Customer Gateway:
- BGP ASN: 65000
- IP Address: 203.0.113.12

VPN Gateway:
- BGP ASN: 64512 (Amazon側)
- Tunnel 1: 169.254.10.1/30
- Tunnel 2: 169.254.10.5/30
```

### Client VPN

#### 設定
```json
{
  "ClientCidrBlock": "10.0.0.0/16",
  "ServerCertificateArn": "arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012",
  "AuthenticationOptions": [
    {
      "Type": "certificate-authentication",
      "MutualAuthentication": {
        "ClientRootCertificateChainArn": "arn:aws:acm:region:account:certificate/87654321-4321-4321-4321-210987654321"
      }
    }
  ],
  "ConnectionLogOptions": {
    "Enabled": true,
    "CloudwatchLogGroup": "ClientVPN-Logs"
  }
}
```

### 公式リソース
- [VPN サービス紹介](https://aws.amazon.com/jp/vpn/)
- [VPN Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_VPN.pdf)

---

## Transit Gateway

### 概要
複数のVPC、オンプレミスネットワークを接続するハブ。

### 基本設定
```json
{
  "Description": "Main Transit Gateway",
  "DefaultRouteTableAssociation": "enable",
  "DefaultRouteTablePropagation": "enable",
  "DnsSupport": "enable",
  "VpnEcmpSupport": "enable",
  "AutoAcceptSharedAttachments": "disable",
  "DefaultRouteTableAssociation": "enable"
}
```

### アタッチメント

#### VPC Attachment
```json
{
  "TransitGatewayId": "tgw-12345678",
  "VpcId": "vpc-12345678",
  "SubnetIds": ["subnet-12345678", "subnet-87654321"],
  "Options": {
    "DnsSupport": "enable",
    "Ipv6Support": "disable"
  }
}
```

#### VPN Attachment
```json
{
  "TransitGatewayId": "tgw-12345678",
  "VpnConnectionId": "vpn-12345678",
  "Options": {
    "StaticRoutesOnly": false
  }
}
```

### ルートテーブル

#### カスタムルートテーブル
```json
{
  "TransitGatewayId": "tgw-12345678",
  "TagSpecifications": [
    {
      "ResourceType": "transit-gateway-route-table",
      "Tags": [
        {"Key": "Name", "Value": "Production-Routes"}
      ]
    }
  ]
}
```

#### ルート設定
```bash
# 静的ルート追加
aws ec2 create-route \
    --route-table-id tgw-rtb-12345678 \
    --destination-cidr-block 10.1.0.0/16 \
    --transit-gateway-attachment-id tgw-attach-12345678
```

### 公式リソース
- [Transit Gateway サービス紹介](https://aws.amazon.com/jp/transit-gateway/)
- [Transit Gateway Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_TransitGateway.pdf)

---

## API Gateway

### 概要
RESTful API、WebSocket APIのマネージドサービス。

### API タイプ

#### REST API
```
特徴:
- フル機能
- リクエスト/レスポンス変換
- 認証・認可
- キャッシュ
- SDK生成
```

#### HTTP API
```
特徴:
- 高性能、低コスト
- JWT認証
- CORS対応
- 基本機能のみ
```

#### WebSocket API
```
特徴:
- 双方向通信
- リアルタイム
- 接続管理
- ルーティング
```

### 統合タイプ

#### Lambda統合
```json
{
  "type": "AWS_PROXY",
  "httpMethod": "POST",
  "uri": "arn:aws:apigateway:region:lambda:path/2015-03-31/functions/arn:aws:lambda:region:account:function:myFunction/invocations",
  "passthroughBehavior": "when_no_match",
  "timeoutInMillis": 29000
}
```

#### HTTP統合
```json
{
  "type": "HTTP_PROXY",
  "httpMethod": "GET",
  "uri": "https://api.example.com/{proxy}",
  "connectionType": "INTERNET",
  "timeoutInMillis": 29000
}
```

### 認証・認可

#### Cognito User Pool
```json
{
  "type": "COGNITO_USER_POOLS",
  "providerARNs": [
    "arn:aws:cognito-idp:region:account:userpool/us-east-1_123456789"
  ],
  "authType": "cognito_user_pools"
}
```

#### Lambda Authorizer
```python
def lambda_handler(event, context):
    token = event['authorizationToken']
    
    # トークン検証ロジック
    if validate_token(token):
        return generate_policy('user', 'Allow', event['methodArn'])
    else:
        return generate_policy('user', 'Deny', event['methodArn'])

def generate_policy(principal_id, effect, resource):
    return {
        'principalId': principal_id,
        'policyDocument': {
            'Version': '2012-10-17',
            'Statement': [
                {
                    'Action': 'execute-api:Invoke',
                    'Effect': effect,
                    'Resource': resource
                }
            ]
        }
    }
```

### 公式リソース
- [API Gateway サービス紹介](https://aws.amazon.com/jp/api-gateway/)
- [API Gateway Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_APIGateway.pdf)

---

## ネットワーク設計パターン

### 3層アーキテクチャ
```
Internet Gateway
    ↓
Public Subnet (Web Tier)
- ALB
- NAT Gateway
    ↓
Private Subnet (App Tier)
- EC2 Instances
- Auto Scaling
    ↓
Private Subnet (DB Tier)
- RDS Multi-AZ
- ElastiCache
```

### ハイブリッドクラウド
```
オンプレミス
    ↓
Direct Connect / VPN
    ↓
Transit Gateway
    ↓
Multiple VPCs
- Production VPC
- Development VPC
- Shared Services VPC
```

### マルチリージョン
```
Primary Region (us-east-1)
├─ Production VPC
├─ CloudFront Distribution
└─ Route 53 (Primary)

Secondary Region (us-west-2)
├─ DR VPC
├─ RDS Read Replica
└─ Route 53 (Secondary)
```

---

*次のセクション: [05. セキュリティ](./05-security.md)*
