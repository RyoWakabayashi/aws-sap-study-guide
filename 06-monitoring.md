# 監視・ログ

## 目次

1. [CloudWatch](#cloudwatch)
2. [X-Ray](#x-ray)
3. [CloudTrail](#cloudtrail)
4. [Config](#config)
5. [Systems Manager](#systems-manager)
6. [監視戦略](#監視戦略)

---

## CloudWatch

### 概要

AWS リソースとアプリケーションの監視サービス。メトリクス、ログ、アラームを統合管理。

### メトリクス

#### 標準メトリクス

```
EC2:
- CPUUtilization
- NetworkIn/Out
- DiskReadOps/WriteOps
- StatusCheckFailed

RDS:
- DatabaseConnections
- ReadLatency/WriteLatency
- FreeableMemory
- CPUUtilization

S3:
- BucketSizeBytes
- NumberOfObjects
- AllRequests
- 4xxErrors/5xxErrors
```

#### カスタムメトリクス

```python
import boto3
import time

cloudwatch = boto3.client('cloudwatch')

# カスタムメトリクス送信
cloudwatch.put_metric_data(
    Namespace='MyApp/Performance',
    MetricData=[
        {
            'MetricName': 'ProcessingTime',
            'Value': 123.45,
            'Unit': 'Seconds',
            'Dimensions': [
                {
                    'Name': 'Environment',
                    'Value': 'Production'
                },
                {
                    'Name': 'Service',
                    'Value': 'OrderProcessor'
                }
            ],
            'Timestamp': time.time()
        }
    ]
)
```

### CloudWatch Logs

#### ロググループ・ストリーム

```json
{
  "logGroupName": "/aws/lambda/my-function",
  "retentionInDays": 14,
  "kmsKeyId": "arn:aws:kms:region:account:key/12345678-1234-1234-1234-123456789012",
  "tags": {
    "Environment": "Production",
    "Application": "MyApp"
  }
}
```

#### ログ収集設定

```json
{
  "agent": {
    "metrics_collection_interval": 60,
    "run_as_user": "cwagent"
  },
  "logs": {
    "logs_collected": {
      "files": {
        "collect_list": [
          {
            "file_path": "/var/log/messages",
            "log_group_name": "/aws/ec2/system",
            "log_stream_name": "{instance_id}",
            "timezone": "UTC"
          },
          {
            "file_path": "/var/log/httpd/access_log",
            "log_group_name": "/aws/ec2/httpd",
            "log_stream_name": "{instance_id}",
            "timestamp_format": "%b %d %H:%M:%S"
          }
        ]
      }
    }
  }
}
```

### CloudWatch Insights

#### クエリ例

```sql
-- エラーログの分析
fields @timestamp, @message
| filter @message like /ERROR/
| stats count() by bin(5m)
| sort @timestamp desc
-- レスポンス時間の分析
fields @timestamp, @duration
| filter @type = "REPORT"
| stats avg(@duration), max(@duration), min(@duration) by bin(5m)
-- 特定IPからのアクセス
fields @timestamp, @message
| filter @message like /192.168.1.100/
| sort @timestamp desc
| limit 100
```

### アラーム設定

#### メトリクスアラーム

```json
{
  "AlarmName": "HighCPUUtilization",
  "AlarmDescription": "Alarm when CPU exceeds 80%",
  "MetricName": "CPUUtilization",
  "Namespace": "AWS/EC2",
  "Statistic": "Average",
  "Period": 300,
  "EvaluationPeriods": 2,
  "Threshold": 80.0,
  "ComparisonOperator": "GreaterThanThreshold",
  "Dimensions": [
    {
      "Name": "InstanceId",
      "Value": "i-1234567890abcdef0"
    }
  ],
  "AlarmActions": [
    "arn:aws:sns:region:account:high-cpu-topic",
    "arn:aws:autoScaling:region:account:scalingPolicy:policy-id"
  ]
}
```

#### 複合アラーム

```json
{
  "AlarmName": "ApplicationHealthAlarm",
  "AlarmRule": "(ALARM(HighCPUAlarm) OR ALARM(HighMemoryAlarm)) AND ALARM(HighErrorRateAlarm)",
  "ActionsEnabled": true,
  "AlarmActions": ["arn:aws:sns:region:account:critical-alert-topic"]
}
```

### ダッシュボード

#### 設定例

```json
{
  "widgets": [
    {
      "type": "metric",
      "properties": {
        "metrics": [
          ["AWS/EC2", "CPUUtilization", "InstanceId", "i-1234567890abcdef0"],
          [
            "AWS/ApplicationELB",
            "TargetResponseTime",
            "LoadBalancer",
            "app/my-alb/50dc6c495c0c9188"
          ]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "EC2 Instance CPU and ALB Response Time"
      }
    },
    {
      "type": "log",
      "properties": {
        "query": "SOURCE '/aws/lambda/my-function' | fields @timestamp, @message\n| filter @message like /ERROR/\n| sort @timestamp desc\n| limit 20",
        "region": "us-east-1",
        "title": "Recent Errors"
      }
    }
  ]
}
```

### 公式リソース

- [CloudWatch サービス紹介](https://aws.amazon.com/jp/cloudwatch/)
- [CloudWatch Black Belt](https://pages.awscloud.com/rs/112-TZM-766/images/AWS-Black-Belt_2023_AmazonCloudWatch_0330_v1.pdf)

---

## X-Ray

### 概要

分散アプリケーションのトレーシングサービス。リクエストの流れを可視化。

### トレーシング設定

#### Lambda 統合

```python
from aws_xray_sdk.core import xray_recorder
from aws_xray_sdk.core import patch_all

# AWS SDK自動トレーシング
patch_all()

@xray_recorder.capture('lambda_handler')
def lambda_handler(event, context):
    # サブセグメント作成
    subsegment = xray_recorder.begin_subsegment('database_query')
    try:
        result = query_database()
        subsegment.put_metadata('query_result', result)
        return result
    except Exception as e:
        subsegment.add_exception(e)
        raise
    finally:
        xray_recorder.end_subsegment()

@xray_recorder.capture('query_database')
def query_database():
    # データベースクエリ処理
    pass
```

#### ECS 統合

```json
{
  "family": "xray-app",
  "containerDefinitions": [
    {
      "name": "xray-daemon",
      "image": "amazon/aws-xray-daemon:latest",
      "cpu": 32,
      "memory": 256,
      "portMappings": [
        {
          "containerPort": 2000,
          "protocol": "udp"
        }
      ]
    },
    {
      "name": "app",
      "image": "my-app:latest",
      "environment": [
        {
          "name": "_X_AMZN_TRACE_ID",
          "value": "Root=1-5e1b4151-5ac6c58f5b5daa6532e4f1c2"
        },
        {
          "name": "AWS_XRAY_DAEMON_ADDRESS",
          "value": "xray-daemon:2000"
        }
      ],
      "links": ["xray-daemon"]
    }
  ]
}
```

### サービスマップ

#### 分析項目

```
レスポンス時間:
- 平均、P50、P90、P99
- 時系列変化
- サービス間比較

エラー率:
- HTTP 4xx/5xx
- 例外発生率
- タイムアウト

スループット:
- リクエスト数/秒
- 同時実行数
- キューイング時間
```

### アノテーション・メタデータ

#### 使い分け

```python
# アノテーション（検索・フィルタ可能）
xray_recorder.put_annotation('user_id', '12345')
xray_recorder.put_annotation('payment_method', 'credit_card')

# メタデータ（詳細情報）
xray_recorder.put_metadata('request_details', {
    'headers': request.headers,
    'body': request.body,
    'user_agent': request.user_agent
})
```

### サンプリング

#### サンプリングルール

```json
{
  "version": 2,
  "default": {
    "fixed_target": 1,
    "rate": 0.1
  },
  "rules": [
    {
      "description": "High priority endpoints",
      "service_name": "payment-service",
      "http_method": "POST",
      "url_path": "/api/payment/*",
      "fixed_target": 2,
      "rate": 0.5
    },
    {
      "description": "Health checks",
      "service_name": "*",
      "http_method": "GET",
      "url_path": "/health",
      "fixed_target": 0,
      "rate": 0.0
    }
  ]
}
```

### 公式リソース

- [X-Ray サービス紹介](https://aws.amazon.com/jp/xray/)
- [X-Ray Black Belt](https://pages.awscloud.com/rs/112-TZM-766/images/AWS-Black-Belt_2023_AWS-X-Ray_0228_v1.pdf)

---

## CloudTrail

### 概要

AWS API 呼び出しの記録・監査サービス。ガバナンス、コンプライアンス対応。

### 証跡設定

#### 基本設定

```json
{
  "Name": "management-events-trail",
  "S3BucketName": "my-cloudtrail-logs",
  "S3KeyPrefix": "management-events/",
  "IncludeGlobalServiceEvents": true,
  "IsMultiRegionTrail": true,
  "EnableLogFileValidation": true,
  "KMSKeyId": "arn:aws:kms:region:account:key/12345678-1234-1234-1234-123456789012",
  "EventSelectors": [
    {
      "ReadWriteType": "All",
      "IncludeManagementEvents": true,
      "DataResources": []
    }
  ]
}
```

#### データイベント設定

```json
{
  "EventSelectors": [
    {
      "ReadWriteType": "All",
      "IncludeManagementEvents": false,
      "DataResources": [
        {
          "Type": "AWS::S3::Object",
          "Values": ["arn:aws:s3:::sensitive-bucket/*"]
        },
        {
          "Type": "AWS::Lambda::Function",
          "Values": ["arn:aws:lambda:*:*:function:critical-function"]
        }
      ]
    }
  ]
}
```

### CloudTrail Insights

#### 異常検知

```
検知対象:
- API呼び出し頻度の異常
- エラー率の急増
- 新しいユーザーアクティビティ
- 地理的異常

通知:
- CloudWatch Events
- SNS
- Lambda
```

### ログ分析

#### CloudWatch Logs Insights

```sql
-- 失敗したAPI呼び出し
fields @timestamp, sourceIPAddress, userIdentity.type, eventName, errorCode
| filter errorCode exists
| stats count() by errorCode
| sort count desc
-- 特定ユーザーのアクティビティ
fields @timestamp, eventName, sourceIPAddress
| filter userIdentity.userName = "suspicious-user"
| sort @timestamp desc
-- 管理者権限の使用
fields @timestamp, userIdentity.userName, eventName
| filter eventName like /Create|Delete|Put/
| filter userIdentity.type = "IAMUser"
| sort @timestamp desc
```

### セキュリティ分析

#### 異常検知パターン

```python
import boto3
import json

def analyze_cloudtrail_logs(event, context):
    # 異常なAPI呼び出しパターンを検知

    # 1. 短時間での大量API呼び出し
    detect_api_burst()

    # 2. 通常と異なる地域からのアクセス
    detect_geographic_anomaly()

    # 3. 権限昇格の試行
    detect_privilege_escalation()

    # 4. データ漏洩の兆候
    detect_data_exfiltration()

def detect_api_burst():
    # 5分間で100回以上のAPI呼び出し
    query = """
    fields @timestamp, sourceIPAddress, userIdentity.userName
    | stats count() by sourceIPAddress, userIdentity.userName, bin(5m)
    | sort count desc
    | limit 10
    """
    # CloudWatch Logs Insightsで実行
```

### 公式リソース

- [CloudTrail サービス紹介](https://aws.amazon.com/jp/cloudtrail/)
- [CloudTrail Black Belt](https://pages.awscloud.com/rs/112-TZM-766/images/AWS-Black-Belt_2023_AWS-CloudTrail_0228_v1.pdf)

---

## Config

### 概要

AWS リソースの設定変更を記録・評価するサービス。コンプライアンス監視。

### 設定記録

#### Configuration Recorder

```json
{
  "name": "default",
  "roleARN": "arn:aws:iam::account:role/aws-config-role",
  "recordingGroup": {
    "allSupported": true,
    "includeGlobalResourceTypes": true,
    "resourceTypes": []
  }
}
```

#### Delivery Channel

```json
{
  "name": "default",
  "s3BucketName": "my-config-bucket",
  "s3KeyPrefix": "config-history/",
  "snsTopicARN": "arn:aws:sns:region:account:config-topic",
  "configSnapshotDeliveryProperties": {
    "deliveryFrequency": "TwentyFour_Hours"
  }
}
```

### Config Rules

#### AWS 管理ルール

```json
{
  "ConfigRuleName": "s3-bucket-public-access-prohibited",
  "Source": {
    "Owner": "AWS",
    "SourceIdentifier": "S3_BUCKET_PUBLIC_ACCESS_PROHIBITED"
  },
  "Scope": {
    "ComplianceResourceTypes": ["AWS::S3::Bucket"]
  }
}
```

#### カスタムルール

```python
import boto3
import json

def lambda_handler(event, context):
    # Config評価イベント
    config_item = event['configurationItem']
    resource_type = config_item['resourceType']

    if resource_type == 'AWS::EC2::Instance':
        return evaluate_ec2_instance(config_item)
    elif resource_type == 'AWS::S3::Bucket':
        return evaluate_s3_bucket(config_item)

    return {
        'compliance_type': 'NOT_APPLICABLE',
        'annotation': 'Resource type not supported'
    }

def evaluate_ec2_instance(config_item):
    # EC2インスタンスの評価ロジック
    configuration = config_item['configuration']

    # 必須タグの確認
    tags = configuration.get('tags', {})
    required_tags = ['Environment', 'Owner', 'Project']

    missing_tags = [tag for tag in required_tags if tag not in tags]

    if missing_tags:
        return {
            'compliance_type': 'NON_COMPLIANT',
            'annotation': f'Missing required tags: {", ".join(missing_tags)}'
        }

    return {
        'compliance_type': 'COMPLIANT',
        'annotation': 'All required tags present'
    }
```

### 修復アクション

#### Systems Manager 統合

```json
{
  "ConfigRuleName": "s3-bucket-ssl-requests-only",
  "RemediationConfigurations": [
    {
      "ConfigRuleName": "s3-bucket-ssl-requests-only",
      "TargetType": "SSM_DOCUMENT",
      "TargetId": "AWSConfigRemediation-RemoveS3BucketPublicAccess",
      "TargetVersion": "1",
      "Parameters": {
        "AutomationAssumeRole": {
          "StaticValue": {
            "Values": ["arn:aws:iam::account:role/ConfigRemediationRole"]
          }
        },
        "BucketName": {
          "ResourceValue": {
            "Value": "RESOURCE_ID"
          }
        }
      },
      "Automatic": true,
      "ExecutionControls": {
        "SsmControls": {
          "ConcurrentExecutionRatePercentage": 10,
          "ErrorPercentage": 10
        }
      }
    }
  ]
}
```

### 公式リソース

- [Config サービス紹介](https://aws.amazon.com/jp/config/)
- [Config Black Belt](https://pages.awscloud.com/rs/112-TZM-766/images/AWS-Black-Belt_2023_AWS-Config_0228_v1.pdf)

---

## Systems Manager

### 概要

AWS リソースの運用管理を統合するサービス。パッチ管理、設定管理、運用自動化。

### Parameter Store

#### パラメータ管理

```python
import boto3

ssm = boto3.client('ssm')

# パラメータ作成
ssm.put_parameter(
    Name='/myapp/database/host',
    Value='db.example.com',
    Type='String',
    Description='Database host endpoint',
    Tags=[
        {'Key': 'Environment', 'Value': 'Production'},
        {'Key': 'Application', 'Value': 'MyApp'}
    ]
)

# 暗号化パラメータ
ssm.put_parameter(
    Name='/myapp/database/password',
    Value='mySecretPassword',
    Type='SecureString',
    KeyId='alias/parameter-store-key',
    Description='Database password'
)

# パラメータ取得
response = ssm.get_parameter(
    Name='/myapp/database/host',
    WithDecryption=True
)
```

#### 階層構造

```
/myapp/
├── database/
│   ├── host
│   ├── port
│   ├── username
│   └── password
├── api/
│   ├── endpoint
│   └── key
└── cache/
    ├── host
    └── port
```

### Session Manager

#### 設定

```json
{
  "schemaVersion": "1.0",
  "description": "Session Manager preferences",
  "sessionType": "Standard_Stream",
  "inputs": {
    "s3BucketName": "session-manager-logs",
    "s3KeyPrefix": "session-logs/",
    "s3EncryptionEnabled": true,
    "cloudWatchLogGroupName": "/aws/sessionmanager/sessions",
    "cloudWatchEncryptionEnabled": true,
    "kmsKeyId": "alias/session-manager-key",
    "runAsEnabled": false,
    "runAsDefaultUser": "ec2-user",
    "idleSessionTimeout": "20",
    "maxSessionDuration": "60",
    "shellProfile": {
      "windows": "date",
      "linux": "pwd; ls -la"
    }
  }
}
```

### Patch Manager

#### パッチベースライン

```json
{
  "Name": "ProductionBaseline",
  "OperatingSystem": "AMAZON_LINUX_2",
  "ApprovalRules": {
    "PatchRules": [
      {
        "PatchFilterGroup": {
          "PatchFilters": [
            {
              "Key": "CLASSIFICATION",
              "Values": ["Security", "Bugfix", "Critical"]
            },
            {
              "Key": "SEVERITY",
              "Values": ["Critical", "Important"]
            }
          ]
        },
        "ComplianceLevel": "CRITICAL",
        "ApproveAfterDays": 7,
        "EnableNonSecurity": false
      }
    ]
  },
  "ApprovedPatches": [],
  "RejectedPatches": ["KB2999226"],
  "Sources": []
}
```

### Automation

#### ドキュメント例

```yaml
schemaVersion: "0.3"
description: "Restart EC2 instance with approval"
assumeRole: "{{ AutomationAssumeRole }}"
parameters:
  InstanceId:
    type: String
    description: "EC2 Instance ID to restart"
  AutomationAssumeRole:
    type: String
    description: "IAM role for automation"
    default: ""

mainSteps:
  - name: ApprovalStep

    action: "aws:approve"
    inputs:
      NotificationArn: "arn:aws:sns:region:account:approval-topic"
      Message: "Please approve restart of instance {{ InstanceId }}"
      MinRequiredApprovals: 1
      Approvers:
        - "arn:aws:iam::account:user/admin"

  - name: StopInstance

    action: "aws:changeInstanceState"
    inputs:
      InstanceIds:
        - "{{ InstanceId }}"

      DesiredState: "stopped"

  - name: StartInstance

    action: "aws:changeInstanceState"
    inputs:
      InstanceIds:
        - "{{ InstanceId }}"

      DesiredState: "running"
```

### 公式リソース

- [Systems Manager サービス紹介](https://aws.amazon.com/jp/systems-manager/)
- [Systems Manager Black Belt](https://pages.awscloud.com/rs/112-TZM-766/images/AWS-Black-Belt_2023_AWS-SystemsManager-Hybrid-Activations_0602_v1.pdf)

---

## 監視戦略

### 監視レベル

#### インフラストラクチャ監視

```
メトリクス:
- CPU、メモリ、ディスク使用率
- ネットワークトラフィック
- システム負荷

ツール:
- CloudWatch標準メトリクス
- CloudWatch Agent
- カスタムメトリクス
```

#### アプリケーション監視

```
メトリクス:
- レスポンス時間
- エラー率
- スループット
- ビジネスメトリクス

ツール:
- X-Ray
- カスタムメトリクス
- APMツール
```

#### ログ監視

```
対象:
- アプリケーションログ
- システムログ
- セキュリティログ
- 監査ログ

ツール:
- CloudWatch Logs
- CloudWatch Insights
- 外部ログ分析ツール
```

### アラート戦略

#### 重要度分類

```
Critical (P1):
- サービス停止
- セキュリティ侵害
- データ損失

High (P2):
- 性能劣化
- 部分的障害
- 容量不足

Medium (P3):
- 警告レベル
- 予防的アラート
- 設定変更

Low (P4):
- 情報提供
- 定期レポート
- 統計情報
```

#### 通知チャネル

```
即座通知:
- SMS
- 電話
- Slack/Teams

遅延許容:
- Email
- チケットシステム
- ダッシュボード
```

### ダッシュボード設計

#### 階層構造

```
Level 1: 概要ダッシュボード
- 全体的な健全性
- 主要KPI
- 重要アラート

Level 2: サービス別ダッシュボード
- サービス固有メトリクス
- 依存関係
- パフォーマンス詳細

Level 3: 詳細ダッシュボード
- トラブルシューティング
- 詳細分析
- 履歴データ
```

---

_次のセクション: [07. アーキテクチャパターン](./07-architecture.md)_
