# セキュリティ

## 目次
1. [IAM (Identity and Access Management)](#iam-identity-and-access-management)
2. [AWS WAF](#aws-waf)
3. [AWS Shield](#aws-shield)
4. [GuardDuty](#guardduty)
5. [Security Hub](#security-hub)
6. [KMS (Key Management Service)](#kms-key-management-service)
7. [Secrets Manager](#secrets-manager)
8. [Certificate Manager](#certificate-manager)

---

## IAM (Identity and Access Management)

### 概要
AWS リソースへのアクセスを安全に制御するサービス。

### 基本コンポーネント

#### ユーザー
```json
{
  "UserName": "john-doe",
  "Path": "/developers/",
  "Tags": [
    {"Key": "Department", "Value": "Engineering"},
    {"Key": "Project", "Value": "WebApp"}
  ],
  "PermissionsBoundary": {
    "PermissionsBoundaryType": "PermissionsBoundaryPolicy",
    "PermissionsBoundaryArn": "arn:aws:iam::account:policy/DeveloperBoundary"
  }
}
```

#### グループ
```json
{
  "GroupName": "Developers",
  "Path": "/",
  "AttachedManagedPolicies": [
    {
      "PolicyName": "PowerUserAccess",
      "PolicyArn": "arn:aws:iam::aws:policy/PowerUserAccess"
    }
  ]
}
```

#### ロール
```json
{
  "RoleName": "EC2-S3-Access-Role",
  "AssumeRolePolicyDocument": {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "ec2.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  },
  "ManagedPolicyArns": [
    "arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess"
  ]
}
```

### ポリシー設計

#### 最小権限の原則
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/user-data/${aws:username}/*"
    },
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::my-bucket",
      "Condition": {
        "StringLike": {
          "s3:prefix": "user-data/${aws:username}/*"
        }
      }
    }
  ]
}
```

#### 条件付きアクセス
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": ["203.0.113.0/24", "198.51.100.0/24"]
        },
        "DateGreaterThan": {
          "aws:CurrentTime": "2023-01-01T00:00:00Z"
        },
        "Bool": {
          "aws:SecureTransport": "true"
        }
      }
    }
  ]
}
```

### クロスアカウントアクセス

#### 信頼関係
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::TRUSTED-ACCOUNT-ID:root"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "unique-external-id"
        }
      }
    }
  ]
}
```

#### 外部ID使用
```python
import boto3

# 外部IDを使用したロール引き受け
sts_client = boto3.client('sts')
response = sts_client.assume_role(
    RoleArn='arn:aws:iam::ACCOUNT-ID:role/CrossAccountRole',
    RoleSessionName='CrossAccountSession',
    ExternalId='unique-external-id'
)

credentials = response['Credentials']
```

### Permission Boundary

#### 設定例
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:*",
        "s3:*",
        "rds:*"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Deny",
      "Action": [
        "ec2:TerminateInstances",
        "rds:DeleteDBInstance"
      ],
      "Resource": "*"
    }
  ]
}
```

### 公式リソース
- [IAM サービス紹介](https://aws.amazon.com/jp/iam/)
- [IAM Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_IAM.pdf)

---

## AWS WAF

### 概要
Webアプリケーションファイアウォール。SQLインジェクション、XSS等から保護。

### Web ACL設定

#### 基本構成
```json
{
  "Name": "WebApplicationFirewall",
  "Scope": "CLOUDFRONT",
  "DefaultAction": {
    "Allow": {}
  },
  "Rules": [
    {
      "Name": "AWSManagedRulesCommonRuleSet",
      "Priority": 1,
      "OverrideAction": {
        "None": {}
      },
      "Statement": {
        "ManagedRuleGroupStatement": {
          "VendorName": "AWS",
          "Name": "AWSManagedRulesCommonRuleSet"
        }
      },
      "VisibilityConfig": {
        "SampledRequestsEnabled": true,
        "CloudWatchMetricsEnabled": true,
        "MetricName": "CommonRuleSetMetric"
      }
    }
  ]
}
```

#### カスタムルール
```json
{
  "Name": "BlockSQLInjection",
  "Priority": 2,
  "Action": {
    "Block": {}
  },
  "Statement": {
    "SqliMatchStatement": {
      "FieldToMatch": {
        "Body": {}
      },
      "TextTransformations": [
        {
          "Priority": 0,
          "Type": "URL_DECODE"
        },
        {
          "Priority": 1,
          "Type": "HTML_ENTITY_DECODE"
        }
      ]
    }
  }
}
```

### レート制限

#### IP ベースレート制限
```json
{
  "Name": "RateLimitRule",
  "Priority": 3,
  "Action": {
    "Block": {}
  },
  "Statement": {
    "RateBasedStatement": {
      "Limit": 2000,
      "AggregateKeyType": "IP"
    }
  }
}
```

#### 地理的制限
```json
{
  "Name": "GeoBlockRule",
  "Priority": 4,
  "Action": {
    "Block": {}
  },
  "Statement": {
    "GeoMatchStatement": {
      "CountryCodes": ["CN", "RU", "KP"]
    }
  }
}
```

### マネージドルールグループ

| ルールグループ | 用途 | 特徴 |
|---------------|------|------|
| **Core Rule Set** | 基本保護 | OWASP Top 10 |
| **Known Bad Inputs** | 悪意のある入力 | 既知の攻撃パターン |
| **SQL Database** | SQLインジェクション | データベース保護 |
| **Linux Operating System** | Linux固有攻撃 | OS レベル保護 |
| **POSIX Operating System** | POSIX攻撃 | Unix系OS保護 |

### ログ設定

#### Kinesis Data Firehose
```json
{
  "ResourceArn": "arn:aws:wafv2:region:account:global/webacl/WebACL/12345678-1234-1234-1234-123456789012",
  "LogDestinationConfigs": [
    "arn:aws:firehose:region:account:deliverystream/aws-waf-logs-firehose"
  ],
  "RedactedFields": [
    {
      "SingleHeader": {
        "Name": "authorization"
      }
    }
  ]
}
```

### 公式リソース
- [WAF サービス紹介](https://aws.amazon.com/jp/waf/)
- [WAF Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_WAF.pdf)

---

## AWS Shield

### 概要
DDoS攻撃からの保護サービス。Standard（無料）とAdvanced（有料）を提供。

### Shield Standard
```
保護対象:
- CloudFront
- Route 53
- ELB
- Global Accelerator

機能:
- Layer 3/4 DDoS保護
- 自動検知・軽減
- 追加料金なし
```

### Shield Advanced
```
追加保護:
- EC2
- ELB
- CloudFront
- Route 53
- Global Accelerator

追加機能:
- 24/7 DRTサポート
- 高度な攻撃診断
- コスト保護
- リアルタイム通知
```

### DDoS Response Team (DRT)

#### サポート内容
```
事前準備:
- アーキテクチャレビュー
- 最適化提案
- プレイブック作成

攻撃時対応:
- 攻撃分析
- 軽減策実装
- リアルタイムサポート
```

### 設定例
```json
{
  "ResourceArn": "arn:aws:elasticloadbalancing:region:account:loadbalancer/app/my-alb/1234567890123456",
  "Name": "MyALBProtection",
  "EmergencyContactList": [
    {
      "EmailAddress": "security@example.com",
      "PhoneNumber": "+1-555-0123",
      "ContactNotes": "Primary security contact"
    }
  ]
}
```

### 公式リソース
- [Shield サービス紹介](https://aws.amazon.com/jp/shield/)
- [Shield Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_Shield.pdf)

---

## GuardDuty

### 概要
機械学習を使用した脅威検知サービス。異常なアクティビティを自動検知。

### データソース
```
VPC Flow Logs:
- ネットワークトラフィック分析
- 異常な通信パターン検知

DNS Logs:
- 悪意のあるドメインアクセス
- DGAドメイン検知

CloudTrail Event Logs:
- API呼び出し分析
- 異常な管理操作検知

S3 Data Events:
- オブジェクトレベル操作
- データ漏洩検知
```

### 脅威タイプ

#### Reconnaissance
```
例:
- Recon:EC2/PortProbeUnprotectedPort
- Recon:EC2/Portscan

説明:
- ポートスキャン
- 偵察活動
- 脆弱性調査
```

#### Instance Compromise
```
例:
- Trojan:EC2/BlackholeTraffic
- Backdoor:EC2/C&CActivity.B

説明:
- マルウェア感染
- C&C通信
- データ窃取
```

#### Account Compromise
```
例:
- UnauthorizedAPICall:IAMUser/InstanceCredentialsExfiltration
- Stealth:IAMUser/CloudTrailLoggingDisabled

説明:
- 認証情報漏洩
- 権限昇格
- ログ無効化
```

### 設定

#### 基本設定
```json
{
  "DetectorId": "12345678901234567890123456789012",
  "Enable": true,
  "FindingPublishingFrequency": "FIFTEEN_MINUTES",
  "DataSources": {
    "S3Logs": {
      "Enable": true
    },
    "KubernetesAuditLogs": {
      "Enable": true
    },
    "MalwareProtection": {
      "ScanEc2InstanceWithFindings": {
        "EbsVolumes": true
      }
    }
  }
}
```

#### 抑制ルール
```json
{
  "Name": "SuppressTestEnvironment",
  "Description": "Suppress findings from test environment",
  "Action": "ARCHIVE",
  "Rank": 1,
  "FindingCriteria": {
    "Criterion": {
      "service.resourceRole": {
        "Eq": ["TARGET"]
      },
      "resource.instanceDetails.tags.Environment": {
        "Eq": ["test"]
      }
    }
  }
}
```

### EventBridge統合

#### 自動対応
```python
import boto3
import json

def lambda_handler(event, context):
    # GuardDuty finding詳細
    detail = event['detail']
    finding_type = detail['type']
    severity = detail['severity']
    
    if severity >= 7.0:  # High severity
        # セキュリティグループ更新
        if 'Recon:EC2' in finding_type:
            block_suspicious_ip(detail)
        
        # SNS通知
        send_alert_notification(detail)
    
    return {'statusCode': 200}

def block_suspicious_ip(detail):
    ec2 = boto3.client('ec2')
    
    # 攻撃元IPを取得
    remote_ip = detail['service']['remoteIpDetails']['ipAddressV4']
    
    # セキュリティグループルール追加
    ec2.authorize_security_group_ingress(
        GroupId='sg-emergency-block',
        IpPermissions=[
            {
                'IpProtocol': '-1',
                'IpRanges': [{'CidrIp': f'{remote_ip}/32', 'Description': 'GuardDuty Block'}]
            }
        ]
    )
```

### 公式リソース
- [GuardDuty サービス紹介](https://aws.amazon.com/jp/guardduty/)
- [GuardDuty Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_GuardDuty.pdf)

---

## Security Hub

### 概要
セキュリティ状況の統合管理サービス。複数のセキュリティサービスを統合。

### 統合サービス
```
AWS サービス:
- GuardDuty
- Inspector
- Macie
- IAM Access Analyzer
- Systems Manager Patch Manager

サードパーティ:
- Splunk
- IBM QRadar
- Rapid7
- Tenable
- Trend Micro
```

### セキュリティ標準

#### AWS Foundational Security Standard
```
カテゴリ:
- IAM
- EC2
- S3
- RDS
- Lambda
- CloudTrail
- Config
```

#### CIS AWS Foundations Benchmark
```
レベル:
- Level 1: 基本的なセキュリティ
- Level 2: 高度なセキュリティ

チェック項目:
- パスワードポリシー
- MFA設定
- ログ設定
- ネットワーク設定
```

#### PCI DSS
```
要件:
- カード会員データ保護
- 暗号化
- アクセス制御
- 監視・テスト
```

### カスタムインサイト

#### 設定例
```json
{
  "Name": "High Severity Findings by Resource",
  "Filters": {
    "SeverityLabel": [
      {
        "Value": "HIGH",
        "Comparison": "EQUALS"
      }
    ],
    "RecordState": [
      {
        "Value": "ACTIVE",
        "Comparison": "EQUALS"
      }
    ]
  },
  "GroupByAttribute": "ResourceId"
}
```

### 自動修復

#### Lambda統合
```python
import boto3

def lambda_handler(event, context):
    findings = event['detail']['findings']
    
    for finding in findings:
        finding_type = finding['Types'][0]
        
        if finding_type == 'Sensitive Data Identifications/PII/Financial':
            # S3バケットのパブリックアクセスをブロック
            remediate_s3_public_access(finding)
        elif finding_type == 'Software and Configuration Checks/AWS Security Best Practices':
            # セキュリティグループの修復
            remediate_security_group(finding)
    
    return {'statusCode': 200}
```

### 公式リソース
- [Security Hub サービス紹介](https://aws.amazon.com/jp/security-hub/)
- [Security Hub Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_SecurityHub.pdf)

---

## KMS (Key Management Service)

### 概要
暗号化キーの作成・管理サービス。FIPS 140-2 Level 2準拠。

### キータイプ

#### Customer Managed Keys
```json
{
  "Description": "Key for S3 bucket encryption",
  "KeyUsage": "ENCRYPT_DECRYPT",
  "KeySpec": "SYMMETRIC_DEFAULT",
  "Origin": "AWS_KMS",
  "MultiRegion": false,
  "Policy": {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "Enable IAM User Permissions",
        "Effect": "Allow",
        "Principal": {
          "AWS": "arn:aws:iam::account:root"
        },
        "Action": "kms:*",
        "Resource": "*"
      }
    ]
  }
}
```

#### AWS Managed Keys
```
特徴:
- AWS サービス専用
- 自動ローテーション
- 削除不可
- 無料

例:
- aws/s3
- aws/rds
- aws/lambda
```

### キーローテーション

#### 自動ローテーション
```json
{
  "KeyId": "arn:aws:kms:region:account:key/12345678-1234-1234-1234-123456789012",
  "KeyRotationEnabled": true
}
```

#### 手動ローテーション
```python
import boto3

kms = boto3.client('kms')

# 新しいキー作成
new_key = kms.create_key(
    Description='Rotated encryption key',
    KeyUsage='ENCRYPT_DECRYPT'
)

# エイリアス更新
kms.update_alias(
    AliasName='alias/my-app-key',
    TargetKeyId=new_key['KeyMetadata']['KeyId']
)
```

### 暗号化コンテキスト

#### 使用例
```python
import boto3

kms = boto3.client('kms')

# 暗号化
response = kms.encrypt(
    KeyId='alias/my-key',
    Plaintext=b'sensitive data',
    EncryptionContext={
        'Department': 'Finance',
        'Project': 'Budget2024'
    }
)

# 復号化（同じコンテキストが必要）
decrypted = kms.decrypt(
    CiphertextBlob=response['CiphertextBlob'],
    EncryptionContext={
        'Department': 'Finance',
        'Project': 'Budget2024'
    }
)
```

### CloudHSM

#### 比較

| 項目 | KMS | CloudHSM |
|------|-----|----------|
| **管理** | AWS管理 | ユーザー管理 |
| **専有性** | マルチテナント | 専有 |
| **コンプライアンス** | FIPS 140-2 L2 | FIPS 140-2 L3 |
| **統合** | AWS統合 | PKCS#11, JCE |
| **コスト** | 低 | 高 |

### 公式リソース
- [KMS サービス紹介](https://aws.amazon.com/jp/kms/)
- [KMS Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_KMS.pdf)

---

## Secrets Manager

### 概要
機密情報の安全な保存・管理サービス。自動ローテーション対応。

### シークレット作成

#### データベース認証情報
```json
{
  "Name": "prod/myapp/db",
  "Description": "Database credentials for production",
  "SecretString": {
    "username": "admin",
    "password": "mySecretPassword123",
    "engine": "mysql",
    "host": "mydb.cluster-xyz.rds.amazonaws.com",
    "port": 3306,
    "dbname": "myapp"
  },
  "KmsKeyId": "alias/secrets-manager-key"
}
```

#### API キー
```json
{
  "Name": "prod/myapp/apikey",
  "Description": "Third-party API key",
  "SecretString": {
    "api_key": "sk-1234567890abcdef",
    "api_secret": "abcdef1234567890"
  }
}
```

### 自動ローテーション

#### Lambda関数設定
```python
import boto3
import json
import mysql.connector

def lambda_handler(event, context):
    secret_arn = event['Step1']['SecretArn']
    token = event['Step1']['ClientRequestToken']
    step = event['Step1']['Step']
    
    if step == "createSecret":
        create_secret(secret_arn, token)
    elif step == "setSecret":
        set_secret(secret_arn, token)
    elif step == "testSecret":
        test_secret(secret_arn, token)
    elif step == "finishSecret":
        finish_secret(secret_arn, token)

def create_secret(secret_arn, token):
    # 新しいパスワード生成
    new_password = generate_password()
    
    # AWSPENDING バージョンに保存
    secrets_client = boto3.client('secretsmanager')
    secrets_client.put_secret_value(
        SecretId=secret_arn,
        VersionId=token,
        VersionStage='AWSPENDING',
        SecretString=json.dumps({
            'username': 'admin',
            'password': new_password
        })
    )
```

### アプリケーション統合

#### Python例
```python
import boto3
import json

def get_secret(secret_name, region_name="us-east-1"):
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )
    
    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
        secret = json.loads(get_secret_value_response['SecretString'])
        return secret
    except Exception as e:
        raise e

# 使用例
db_credentials = get_secret("prod/myapp/db")
connection = mysql.connector.connect(
    host=db_credentials['host'],
    user=db_credentials['username'],
    password=db_credentials['password'],
    database=db_credentials['dbname']
)
```

### 公式リソース
- [Secrets Manager サービス紹介](https://aws.amazon.com/jp/secrets-manager/)
- [Secrets Manager Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_SecretsManager.pdf)

---

## Certificate Manager

### 概要
SSL/TLS証明書の管理サービス。自動更新、AWS統合。

### 証明書タイプ

#### パブリック証明書
```
特徴:
- 無料
- 自動更新
- AWS統合のみ
- DV (Domain Validation)

対応サービス:
- CloudFront
- ALB/NLB
- API Gateway
- CloudFormation
```

#### プライベート証明書
```
特徴:
- 有料
- 内部使用
- カスタムCA
- 組織検証可能

用途:
- 内部API
- マイクロサービス
- VPN
- コード署名
```

### ドメイン検証

#### DNS検証
```json
{
  "DomainName": "example.com",
  "SubjectAlternativeNames": ["www.example.com", "api.example.com"],
  "ValidationMethod": "DNS",
  "DomainValidationOptions": [
    {
      "DomainName": "example.com",
      "ValidationDomain": "example.com"
    }
  ]
}
```

#### Email検証
```json
{
  "DomainName": "example.com",
  "ValidationMethod": "EMAIL",
  "DomainValidationOptions": [
    {
      "DomainName": "example.com",
      "ValidationDomain": "example.com"
    }
  ]
}
```

### 自動更新

#### CloudFormation統合
```yaml
Resources:
  Certificate:
    Type: AWS::CertificateManager::Certificate
    Properties:
      DomainName: example.com
      SubjectAlternativeNames:
        - www.example.com
        - api.example.com
      ValidationMethod: DNS
      DomainValidationOptions:
        - DomainName: example.com
          HostedZoneId: !Ref HostedZone
```

### 公式リソース
- [Certificate Manager サービス紹介](https://aws.amazon.com/jp/certificate-manager/)
- [Certificate Manager Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_CertificateManager.pdf)

---

## セキュリティベストプラクティス

### 多層防御
```
レイヤー1: ネットワーク
- VPC、セキュリティグループ
- WAF、Shield

レイヤー2: アプリケーション
- 入力検証
- 認証・認可

レイヤー3: データ
- 暗号化（保存時・転送時）
- アクセス制御

レイヤー4: 監視
- CloudTrail、GuardDuty
- Security Hub
```

### ゼロトラストアーキテクチャ
```
原則:
- 信頼しない、常に検証
- 最小権限アクセス
- 継続的監視

実装:
- IAM ロールベースアクセス
- MFA必須
- ネットワークセグメンテーション
- 暗号化通信
```

### インシデント対応
```
準備:
- プレイブック作成
- 連絡先リスト
- 自動化スクリプト

検知:
- GuardDuty、Security Hub
- CloudWatch アラーム
- サードパーティツール

対応:
- 影響範囲特定
- 封じ込め
- 根本原因分析
- 復旧・改善
```

---

*次のセクション: [06. 監視・ログ](./06-monitoring.md)*
