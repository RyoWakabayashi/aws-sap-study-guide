# コスト最適化

## 目次

1. [コスト管理の基本](#コスト管理の基本)

2. [EC2 コスト最適化](#ec2-コスト最適化)

3. [ストレージコスト最適化](#ストレージコスト最適化)

4. [データ転送コスト最適化](#データ転送コスト最適化)

5. [監視・分析ツール](#監視分析ツール)

6. [コスト最適化戦略](#コスト最適化戦略)

---

## コスト管理の基本

### AWS 料金モデル

#### 従量課金制

```
原則:

- 使った分だけ支払い

- 初期費用なし

- 長期契約不要

メリット:

- 柔軟性

- 予測可能性

- スケーラビリティ

```

#### 料金要素

```
コンピューティング:

- インスタンス時間

- CPU/メモリ使用量

- リクエスト数

ストレージ:

- 保存容量

- アクセス頻度

- データ転送量

ネットワーク:

- データ転送量

- 帯域幅

- 地理的距離

```

### Cost and Usage Report

#### 設定

```json
{
  "ReportName": "detailed-billing-report",
  "TimeUnit": "HOURLY",
  "Format": "textORcsv",
  "Compression": "GZIP",
  "AdditionalSchemaElements": ["RESOURCES"],
  "S3Bucket": "my-billing-reports",
  "S3Prefix": "reports/",
  "S3Region": "us-east-1",
  "AdditionalArtifacts": ["REDSHIFT", "QUICKSIGHT"],
  "RefreshClosedReports": true,
  "ReportVersioning": "OVERWRITE_REPORT"
}
```

#### 分析クエリ例

```sql
-- 月別コスト推移
SELECT
    DATE_TRUNC('month', line_item_usage_start_date) as month,
    product_product_name,
    SUM(line_item_blended_cost) as total_cost
FROM cur_table
WHERE line_item_usage_start_date >= DATE('2023-01-01')
GROUP BY 1, 2
ORDER BY 1, 3 DESC;

-- サービス別コスト
SELECT
    product_product_name,
    SUM(line_item_blended_cost) as total_cost,
    COUNT(*) as line_items
FROM cur_table
WHERE line_item_usage_start_date >= DATE_TRUNC('month', CURRENT_DATE)
GROUP BY 1
ORDER BY 2 DESC;

```

### 公式リソース

- [AWS Pricing](https://aws.amazon.com/pricing/)

- [AWS Cost Management](https://aws.amazon.com/aws-cost-management/)

---

## EC2 コスト最適化

### 購入オプション比較

#### オンデマンドインスタンス

```
特徴:

- 時間単位課金

- 最小利用時間なし

- 予約不要

適用場面:

- 予測不可能なワークロード

- 短期間の使用

- 開発・テスト環境

- 新しいアプリケーション

コスト例 (m5.large):
$0.096/時間 × 24時間 × 30日 = $69.12/月

```

#### リザーブドインスタンス

```
標準RI:

- 1年/3年契約

- 最大75%割引

- インスタンスタイプ固定

- AZ固定

コンバーティブルRI:

- インスタンスタイプ変更可能

- 最大54%割引

- より柔軟性が高い

コスト例 (m5.large, 1年標準RI):
$0.058/時間 × 24時間 × 30日 = $41.76/月
節約: $27.36/月 (40%削減)

```

#### Savings Plans

```
Compute Savings Plans:

- EC2、Lambda、Fargate対応

- 最大66%割引

- インスタンスファミリー変更可能

EC2 Instance Savings Plans:

- EC2専用

- 最大72%割引

- より高い割引率

コスト例 (1年Compute Savings Plans):
$50/月のコミット → 最大66%割引
実質コスト: $34/月

```

#### スポットインスタンス

```
特徴:

- 最大90%割引

- 2分前通知で中断

- 需要と供給で価格変動

適用場面:

- バッチ処理

- CI/CD

- 障害耐性のあるワークロード

- 分析処理

コスト例 (m5.large):
平均 $0.025/時間 (オンデマンドの約25%)

```

### Right Sizing

#### 分析手法

```python
import boto3
import pandas as pd
from datetime import datetime, timedelta

def analyze_instance_utilization():
    cloudwatch = boto3.client('cloudwatch')
    ec2 = boto3.client('ec2')

    # インスタンス一覧取得
    instances = ec2.describe_instances()

    recommendations = []

    for reservation in instances['Reservations']:
        for instance in reservation['Instances']:
            instance_id = instance['InstanceId']
            instance_type = instance['InstanceType']

            # CPU使用率取得
            cpu_metrics = get_cpu_utilization(cloudwatch, instance_id)

            # メモリ使用率取得（CloudWatch Agentが必要）
            memory_metrics = get_memory_utilization(cloudwatch, instance_id)

            # 推奨事項生成
            recommendation = generate_recommendation(
                instance_id, instance_type, cpu_metrics, memory_metrics
            )
            recommendations.append(recommendation)

    return recommendations

def get_cpu_utilization(cloudwatch, instance_id):
    end_time = datetime.utcnow()
    start_time = end_time - timedelta(days=14)

    response = cloudwatch.get_metric_statistics(
        Namespace='AWS/EC2',
        MetricName='CPUUtilization',
        Dimensions=[
            {'Name': 'InstanceId', 'Value': instance_id}
        ],
        StartTime=start_time,
        EndTime=end_time,
        Period=3600,
        Statistics=['Average', 'Maximum']
    )

    return response['Datapoints']

def generate_recommendation(instance_id, current_type, cpu_metrics, memory_metrics):
    avg_cpu = sum(point['Average'] for point in cpu_metrics) / len(cpu_metrics)
    max_cpu = max(point['Maximum'] for point in cpu_metrics)

    if avg_cpu < 10 and max_cpu < 30:
        return {
            'instance_id': instance_id,
            'current_type': current_type,
            'recommendation': 'Downsize to smaller instance',
            'reason': f'Low CPU utilization: avg={avg_cpu:.1f}%, max={max_cpu:.1f}%'
        }
    elif avg_cpu > 80:
        return {
            'instance_id': instance_id,
            'current_type': current_type,
            'recommendation': 'Upsize to larger instance',
            'reason': f'High CPU utilization: avg={avg_cpu:.1f}%'
        }
    else:
        return {
            'instance_id': instance_id,
            'current_type': current_type,
            'recommendation': 'Current size appropriate',
            'reason': f'CPU utilization within normal range: avg={avg_cpu:.1f}%'
        }

```

#### インスタンスタイプ選択指針

```

CPU集約的ワークロード:

- C5, C6i インスタンス

- 高いCPU性能

- 低いメモリ/CPU比

メモリ集約的ワークロード:

- R5, R6i インスタンス

- 高いメモリ容量

- インメモリデータベース

バランス型ワークロード:

- M5, M6i インスタンス

- CPU/メモリのバランス

- 一般的なアプリケーション

ストレージ集約的ワークロード:

- I3, I4i インスタンス

- 高IOPS SSD

- データベース、分析

```

### Auto Scaling 最適化

#### スケーリングポリシー

```json
{
  "TargetGroupARNs": [
    "arn:aws:elasticloadbalancing:region:account:targetgroup/my-targets/1234567890123456"
  ],
  "HealthCheckType": "ELB",
  "HealthCheckGracePeriod": 300,
  "DefaultCooldown": 300,
  "DesiredCapacity": 2,
  "MinSize": 1,
  "MaxSize": 10,
  "Tags": [
    {
      "Key": "Environment",
      "Value": "Production",
      "PropagateAtLaunch": true
    }
  ]
}
```

#### 予測スケーリング

```json
{
  "AutoScalingGroupName": "my-asg",
  "PolicyName": "predictive-scaling-policy",
  "PolicyType": "PredictiveScaling",
  "PredictiveScalingConfiguration": {
    "MetricSpecifications": [
      {
        "TargetValue": 70.0,
        "PredefinedMetricSpecification": {
          "PredefinedMetricType": "ASGAverageCPUUtilization"
        }
      }
    ],
    "Mode": "ForecastAndScale",
    "SchedulingBufferTime": 300,
    "MaxCapacityBreachBehavior": "HonorMaxCapacity",
    "MaxCapacityBuffer": 10
  }
}
```

### スポットインスタンス活用

#### スポットフリート設定

```json
{
  "SpotFleetRequestConfig": {
    "IamFleetRole": "arn:aws:iam::account:role/aws-ec2-spot-fleet-tagging-role",
    "AllocationStrategy": "diversified",
    "TargetCapacity": 10,
    "SpotPrice": "0.05",
    "LaunchSpecifications": [
      {
        "ImageId": "ami-12345678",
        "InstanceType": "m5.large",
        "KeyName": "my-key",
        "SecurityGroups": [{ "GroupId": "sg-12345678" }],
        "SubnetId": "subnet-12345678",
        "WeightedCapacity": 1
      },
      {
        "ImageId": "ami-12345678",
        "InstanceType": "m5.xlarge",
        "KeyName": "my-key",
        "SecurityGroups": [{ "GroupId": "sg-12345678" }],
        "SubnetId": "subnet-87654321",
        "WeightedCapacity": 2
      }
    ],
    "TerminateInstancesWithExpiration": true,
    "Type": "maintain"
  }
}
```

#### 中断処理

```python
import requests
import signal
import sys
import time

def signal_handler(sig, frame):
    print('Graceful shutdown initiated...')
    # アプリケーションの正常終了処理
    cleanup_and_exit()
    sys.exit(0)

def check_spot_interruption():
    try:
        # インスタンスメタデータから中断通知確認
        response = requests.get(
            'http://169.254.169.254/latest/meta-data/spot/instance-action',
            timeout=2
        )
        if response.status_code == 200:
            print('Spot interruption notice received')
            return True
    except requests.RequestException:
        pass
    return False

def main():
    signal.signal(signal.SIGTERM, signal_handler)

    while True:
        # 定期的に中断通知をチェック
        if check_spot_interruption():
            print('Preparing for spot interruption...')
            cleanup_and_exit()
            break

        # 通常の処理
        time.sleep(30)

def cleanup_and_exit():
    # データ保存、接続クローズ等
    print('Cleanup completed')

```

### 公式リソース

- [EC2 Pricing](https://aws.amazon.com/ec2/pricing/)

- [EC2 Spot Instances](https://aws.amazon.com/ec2/spot/)

- [Savings Plans](https://aws.amazon.com/savingsplans/)

---

## ストレージコスト最適化

### S3 コスト最適化

#### ストレージクラス選択

```python
import boto3
from datetime import datetime, timedelta

def analyze_s3_usage():
    s3 = boto3.client('s3')
    cloudwatch = boto3.client('cloudwatch')

    buckets = s3.list_buckets()['Buckets']
    recommendations = []

    for bucket in buckets:
        bucket_name = bucket['Name']

        # オブジェクト分析
        objects = s3.list_objects_v2(Bucket=bucket_name)

        if 'Contents' not in objects:
            continue

        for obj in objects['Contents']:
            key = obj['Key']
            last_modified = obj['LastModified']
            size = obj['Size']
            storage_class = obj.get('StorageClass', 'STANDARD')

            # アクセス頻度分析
            access_frequency = get_access_frequency(cloudwatch, bucket_name, key)

            # 推奨ストレージクラス
            recommended_class = recommend_storage_class(
                last_modified, access_frequency, size
            )

            if recommended_class != storage_class:
                recommendations.append({
                    'bucket': bucket_name,
                    'key': key,
                    'current_class': storage_class,
                    'recommended_class': recommended_class,
                    'potential_savings': calculate_savings(size, storage_class, recommended_class)
                })

    return recommendations

def recommend_storage_class(last_modified, access_frequency, size):
    days_since_modified = (datetime.now(last_modified.tzinfo) - last_modified).days

    if access_frequency > 10:  # 頻繁アクセス
        return 'STANDARD'
    elif access_frequency > 1 and days_since_modified > 30:  # 低頻度アクセス
        return 'STANDARD_IA'
    elif access_frequency == 0 and days_since_modified > 90:  # アーカイブ
        if size > 128 * 1024:  # 128KB以上
            return 'GLACIER'
        else:
            return 'STANDARD_IA'  # 小さなファイルはGlacierが不経済
    elif days_since_modified > 365:  # 長期アーカイブ
        return 'DEEP_ARCHIVE'

    return 'STANDARD'

```

#### ライフサイクル管理

```json
{
  "Rules": [
    {
      "ID": "LogsLifecycle",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "logs/"
      },
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD_IA"
        },
        {
          "Days": 90,
          "StorageClass": "GLACIER"
        },
        {
          "Days": 365,
          "StorageClass": "DEEP_ARCHIVE"
        }
      ],
      "Expiration": {
        "Days": 2555
      }
    },
    {
      "ID": "BackupLifecycle",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "backups/"
      },
      "Transitions": [
        {
          "Days": 1,
          "StorageClass": "GLACIER"
        },
        {
          "Days": 90,
          "StorageClass": "DEEP_ARCHIVE"
        }
      ]
    },
    {
      "ID": "IncompleteMultipartUploads",
      "Status": "Enabled",
      "AbortIncompleteMultipartUpload": {
        "DaysAfterInitiation": 7
      }
    }
  ]
}
```

#### Intelligent-Tiering

```json
{
  "Rules": [
    {
      "ID": "IntelligentTieringRule",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "data/"
      },
      "Transitions": [
        {
          "Days": 0,
          "StorageClass": "INTELLIGENT_TIERING"
        }
      ]
    }
  ]
}
```

### EBS コスト最適化

#### ボリュームタイプ最適化

```python
import boto3

def optimize_ebs_volumes():
    ec2 = boto3.client('ec2')
    cloudwatch = boto3.client('cloudwatch')

    volumes = ec2.describe_volumes()['Volumes']
    recommendations = []

    for volume in volumes:
        volume_id = volume['VolumeId']
        volume_type = volume['VolumeType']
        size = volume['Size']
        iops = volume.get('Iops', 0)

        # 使用率分析
        utilization = analyze_volume_utilization(cloudwatch, volume_id)

        # 最適化推奨
        recommendation = recommend_volume_optimization(
            volume_id, volume_type, size, iops, utilization
        )

        if recommendation:
            recommendations.append(recommendation)

    return recommendations

def recommend_volume_optimization(volume_id, current_type, size, iops, utilization):
    avg_iops = utilization.get('avg_iops', 0)
    max_iops = utilization.get('max_iops', 0)

    # gp2 → gp3 移行推奨
    if current_type == 'gp2':
        return {
            'volume_id': volume_id,
            'current_type': current_type,
            'recommended_type': 'gp3',
            'reason': 'gp3 offers better price/performance',
            'estimated_savings': calculate_gp2_to_gp3_savings(size)
        }

    # 過剰なIOPS設定
    if current_type in ['io1', 'io2'] and max_iops < iops * 0.5:
        recommended_iops = max(100, int(max_iops * 1.2))
        return {
            'volume_id': volume_id,
            'current_type': current_type,
            'recommended_type': current_type,
            'current_iops': iops,
            'recommended_iops': recommended_iops,
            'reason': 'IOPS over-provisioned',
            'estimated_savings': calculate_iops_savings(iops, recommended_iops)
        }

    return None

def calculate_gp2_to_gp3_savings(size_gb):
    # gp2: $0.10/GB/month
    # gp3: $0.08/GB/month
    monthly_savings = size_gb * (0.10 - 0.08)
    annual_savings = monthly_savings * 12
    return {
        'monthly': monthly_savings,
        'annual': annual_savings
    }

```

#### 未使用ボリューム検出

```python
def find_unused_volumes():
    ec2 = boto3.client('ec2')

    volumes = ec2.describe_volumes()['Volumes']
    unused_volumes = []

    for volume in volumes:
        volume_id = volume['VolumeId']
        state = volume['State']
        attachments = volume['Attachments']

        # 未アタッチボリューム
        if state == 'available' and not attachments:
            unused_volumes.append({
                'volume_id': volume_id,
                'size': volume['Size'],
                'type': volume['VolumeType'],
                'created': volume['CreateTime'],
                'monthly_cost': calculate_volume_cost(volume)
            })

    return unused_volumes

def calculate_volume_cost(volume):
    size = volume['Size']
    volume_type = volume['VolumeType']
    iops = volume.get('Iops', 0)

    # 簡略化した料金計算
    if volume_type == 'gp3':
        return size * 0.08  # $0.08/GB/month
    elif volume_type == 'gp2':
        return size * 0.10  # $0.10/GB/month
    elif volume_type in ['io1', 'io2']:
        storage_cost = size * 0.125  # $0.125/GB/month
        iops_cost = iops * 0.065     # $0.065/IOPS/month
        return storage_cost + iops_cost

    return 0

```

### データ転送コスト最適化

#### CloudFront 活用

```python
def analyze_data_transfer_costs():
    cloudwatch = boto3.client('cloudwatch')

    # S3からの直接転送量
    s3_transfer = get_s3_data_transfer(cloudwatch)

    # CloudFrontからの転送量
    cloudfront_transfer = get_cloudfront_data_transfer(cloudwatch)

    # コスト比較
    s3_cost = calculate_s3_transfer_cost(s3_transfer)
    cloudfront_cost = calculate_cloudfront_cost(cloudfront_transfer)

    potential_savings = s3_cost - cloudfront_cost

    return {
        's3_transfer_gb': s3_transfer,
        's3_cost': s3_cost,
        'cloudfront_transfer_gb': cloudfront_transfer,
        'cloudfront_cost': cloudfront_cost,
        'potential_savings': potential_savings,
        'recommendation': 'Use CloudFront' if potential_savings > 0 else 'Current setup optimal'
    }

def calculate_s3_transfer_cost(transfer_gb):
    # S3 データ転送料金（簡略化）
    if transfer_gb <= 1:
        return 0  # 1GB/月まで無料
    elif transfer_gb <= 10240:  # 10TB
        return (transfer_gb - 1) * 0.09  # $0.09/GB
    else:
        return 10239 * 0.09 + (transfer_gb - 10240) * 0.085

def calculate_cloudfront_cost(transfer_gb):
    # CloudFront データ転送料金（簡略化）
    if transfer_gb <= 1:
        return 0  # 1GB/月まで無料
    elif transfer_gb <= 10240:  # 10TB
        return (transfer_gb - 1) * 0.085  # $0.085/GB
    else:
        return 10239 * 0.085 + (transfer_gb - 10240) * 0.080

```

#### VPC Endpoint 活用

```yaml
# VPC Endpoint for S3
Resources:
  S3VPCEndpoint:
    Type: AWS::EC2::VPCEndpoint
    Properties:
      VpcId: !Ref VPC
      ServiceName: !Sub "com.amazonaws.${AWS::Region}.s3"
      VpcEndpointType: Gateway
      RouteTableIds:
        - !Ref PrivateRouteTable

      PolicyDocument:
        Statement:
          - Effect: Allow

            Principal: "*"
            Action:
              - "s3:GetObject"
              - "s3:PutObject"

            Resource:
              - "arn:aws:s3:::my-bucket/*"

  DynamoDBVPCEndpoint:
    Type: AWS::EC2::VPCEndpoint
    Properties:
      VpcId: !Ref VPC
      ServiceName: !Sub "com.amazonaws.${AWS::Region}.dynamodb"
      VpcEndpointType: Gateway
      RouteTableIds:
        - !Ref PrivateRouteTable
```

### 公式リソース

- [S3 Pricing](https://aws.amazon.com/s3/pricing/)

- [EBS Pricing](https://aws.amazon.com/ebs/pricing/)

- [CloudFront Pricing](https://aws.amazon.com/cloudfront/pricing/)

---

## 監視・分析ツール

### AWS Cost Explorer

#### 基本機能

```text
コスト分析:
- 過去13ヶ月のコストデータ
- 将来12ヶ月の予測
- 日次・月次・時間別分析
- サービス・リージョン・アカウント別

フィルタリング:
- サービス別
- リンクアカウント別
- リージョン別
- 使用タイプ別
- タグ別
```

#### カスタムレポート作成

```python
import boto3
from datetime import datetime, timedelta

def create_cost_analysis_report():
    """コスト分析レポートの作成"""
    ce = boto3.client('ce', region_name='us-east-1')

    # 期間設定
    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=90)).strftime('%Y-%m-%d')

    # サービス別コスト取得
    response = ce.get_cost_and_usage(
        TimePeriod={
            'Start': start_date,
            'End': end_date
        },
        Granularity='MONTHLY',
        Metrics=['BlendedCost', 'UsageQuantity'],
        GroupBy=[
            {
                'Type': 'DIMENSION',
                'Key': 'SERVICE'
            }
        ]
    )

    # 結果分析
    service_costs = {}
    for result in response['ResultsByTime']:
        month = result['TimePeriod']['Start']
        for group in result['Groups']:
            service = group['Keys'][0]
            cost = float(group['Metrics']['BlendedCost']['Amount'])

            if service not in service_costs:
                service_costs[service] = []
            service_costs[service].append({
                'month': month,
                'cost': cost
            })

    return service_costs

def analyze_cost_trends(service_costs):
    """コストトレンド分析"""
    trends = {}

    for service, costs in service_costs.items():
        if len(costs) >= 2:
            # 前月比成長率計算
            latest_cost = costs[-1]['cost']
            previous_cost = costs[-2]['cost']

            if previous_cost > 0:
                growth_rate = ((latest_cost - previous_cost) / previous_cost) * 100
                trends[service] = {
                    'current_cost': latest_cost,
                    'previous_cost': previous_cost,
                    'growth_rate': growth_rate,
                    'trend': 'increasing' if growth_rate > 5 else 'stable' if growth_rate > -5 else 'decreasing'
                }

    return trends
```

### AWS Budgets

#### 予算設定

```json
{
  "BudgetName": "Monthly-Cost-Budget",
  "BudgetLimit": {
    "Amount": "1000",
    "Unit": "USD"
  },
  "TimeUnit": "MONTHLY",
  "BudgetType": "COST",
  "CostFilters": {
    "Service": ["Amazon Elastic Compute Cloud - Compute"]
  },
  "TimePeriod": {
    "Start": "2024-01-01",
    "End": "2024-12-31"
  }
}
```

#### アラート設定

```json
{
  "Notification": {
    "NotificationType": "ACTUAL",
    "ComparisonOperator": "GREATER_THAN",
    "Threshold": 80,
    "ThresholdType": "PERCENTAGE",
    "NotificationState": "ALARM"
  },
  "Subscribers": [
    {
      "SubscriptionType": "EMAIL",
      "Address": "admin@example.com"
    },
    {
      "SubscriptionType": "SNS",
      "Address": "arn:aws:sns:us-east-1:account:cost-alerts"
    }
  ]
}
```

#### 予算アクション

```python
import boto3

def setup_budget_actions():
    """予算超過時の自動アクション設定"""
    budgets = boto3.client('budgets')

    # 予算アクション作成
    response = budgets.create_budget_action(
        AccountId='123456789012',
        BudgetName='Monthly-Cost-Budget',
        NotificationType='ACTUAL',
        ActionType='APPLY_IAM_POLICY',
        ActionThreshold={
            'ActionThresholdValue': 90,
            'ActionThresholdType': 'PERCENTAGE'
        },
        Definition={
            'IamActionDefinition': {
                'PolicyArn': 'arn:aws:iam::123456789012:policy/DenyEC2Launch'
            }
        },
        ExecutionRoleArn='arn:aws:iam::123456789012:role/BudgetActionRole',
        ApprovalModel='AUTOMATIC',
        Subscribers=[
            {
                'SubscriptionType': 'EMAIL',
                'Address': 'admin@example.com'
            }
        ]
    )

    return response
```

### AWS Cost Anomaly Detection

#### 異常検知設定

```json
{
  "AnomalyDetectorName": "EC2-Cost-Anomaly-Detector",
  "MonitorType": "DIMENSIONAL",
  "MonitorSpecification": {
    "DimensionKey": "SERVICE",
    "DimensionValueList": ["Amazon Elastic Compute Cloud - Compute"],
    "MatchOptions": ["EQUALS"]
  }
}
```

#### 異常通知設定

```python
def setup_anomaly_detection():
    """コスト異常検知の設定"""
    ce = boto3.client('ce')

    # 異常検知器作成
    detector_response = ce.create_anomaly_detector(
        AnomalyDetector={
            'DetectorName': 'ComprehensiveCostAnomalyDetector',
            'MonitorType': 'DIMENSIONAL',
            'MonitorSpecification': {
                'DimensionKey': 'SERVICE',
                'MatchOptions': ['EQUALS'],
                'DimensionValueList': [
                    'Amazon Elastic Compute Cloud - Compute',
                    'Amazon Simple Storage Service',
                    'Amazon Relational Database Service'
                ]
            }
        }
    )

    # 異常サブスクリプション作成
    subscription_response = ce.create_anomaly_subscription(
        AnomalySubscription={
            'SubscriptionName': 'CostAnomalyAlerts',
            'MonitorArnList': [detector_response['AnomalyDetectorArn']],
            'Subscribers': [
                {
                    'Address': 'cost-team@example.com',
                    'Type': 'EMAIL'
                }
            ],
            'Threshold': 100.0,  # $100以上の異常を検知
            'Frequency': 'DAILY'
        }
    )

    return detector_response, subscription_response
```

### AWS Trusted Advisor

#### コスト最適化チェック

```text
利用可能なチェック項目:
- 低使用率のEC2インスタンス
- 未使用のEBSボリューム
- 未関連付けのElastic IP
- 低使用率のRDSインスタンス
- 未使用のロードバランサー
- Route 53レイテンシリソースレコード
```

#### API 経由でのチェック

```python
import boto3

def get_trusted_advisor_recommendations():
    """Trusted Advisorの推奨事項取得"""
    support = boto3.client('support', region_name='us-east-1')

    # チェック一覧取得
    checks = support.describe_trusted_advisor_checks(language='en')

    cost_optimization_checks = []
    for check in checks['checks']:
        if 'cost' in check['category'].lower():
            cost_optimization_checks.append(check)

    # 各チェックの結果取得
    recommendations = {}
    for check in cost_optimization_checks:
        check_id = check['id']
        result = support.describe_trusted_advisor_check_result(
            checkId=check_id,
            language='en'
        )

        if result['result']['status'] in ['warning', 'error']:
            recommendations[check['name']] = {
                'status': result['result']['status'],
                'resources_flagged': len(result['result']['flaggedResources']),
                'estimated_savings': result['result'].get('categorySpecificSummary', {}).get('costOptimizing', {}).get('estimatedMonthlySavings', 0)
            }

    return recommendations
```

### AWS Compute Optimizer

#### 推奨事項取得

```python
def get_compute_optimizer_recommendations():
    """Compute Optimizerの推奨事項取得"""
    compute_optimizer = boto3.client('compute-optimizer')

    # EC2推奨事項
    ec2_recommendations = compute_optimizer.get_ec2_instance_recommendations()

    # EBS推奨事項
    ebs_recommendations = compute_optimizer.get_ebs_volume_recommendations()

    # Lambda推奨事項
    lambda_recommendations = compute_optimizer.get_lambda_function_recommendations()

    # 推奨事項分析
    savings_opportunities = []

    for recommendation in ec2_recommendations['instanceRecommendations']:
        current_cost = recommendation.get('currentInstanceType', {}).get('onDemandPrice', 0)
        recommended_cost = recommendation.get('recommendationOptions', [{}])[0].get('onDemandPrice', 0)

        if current_cost > recommended_cost:
            savings_opportunities.append({
                'resource_type': 'EC2',
                'resource_id': recommendation['instanceArn'],
                'current_cost': current_cost,
                'recommended_cost': recommended_cost,
                'potential_savings': current_cost - recommended_cost,
                'recommendation': recommendation.get('recommendationOptions', [{}])[0].get('instanceType')
            })

    return savings_opportunities
```

---

## コスト最適化戦略

### 階層別最適化アプローチ

#### レベル 1: 基本最適化（即座に実行可能）

```text
未使用リソースの削除:
- 停止中のEC2インスタンス
- 未アタッチのEBSボリューム
- 未使用のElastic IP
- 空のロードバランサー

適切なサイジング:
- CPU使用率10%未満のインスタンス
- 過剰なストレージ容量
- 不要な高性能インスタンス
```

#### レベル 2: 中級最適化（計画・テストが必要）

```text
購入オプション最適化:
- リザーブドインスタンス購入
- Savings Plans適用
- スポットインスタンス活用

アーキテクチャ最適化:
- サーバーレス移行
- マネージドサービス活用
- Auto Scaling最適化
```

#### レベル 3: 高度最適化（長期戦略）

```text
アプリケーション最適化:
- コード効率化
- データベース最適化
- キャッシュ戦略

組織的最適化:
- FinOps文化の構築
- コスト意識の向上
- 継続的最適化プロセス
```

### FinOps 実装戦略

#### 組織構造

```python
class FinOpsTeam:
    def __init__(self):
        self.roles = {
            'FinOps_Practitioner': {
                'responsibilities': [
                    'コスト分析・レポート',
                    '最適化機会の特定',
                    'ツール・プロセス管理'
                ],
                'skills': ['AWS Cost Management', 'データ分析', 'ビジネス理解']
            },
            'Cloud_Architect': {
                'responsibilities': [
                    'アーキテクチャ最適化',
                    '技術的推奨事項',
                    'ベストプラクティス策定'
                ],
                'skills': ['AWS Services', 'アーキテクチャ設計', 'パフォーマンス最適化']
            },
            'Finance_Partner': {
                'responsibilities': [
                    '予算管理',
                    'ROI分析',
                    'ビジネス価値評価'
                ],
                'skills': ['財務分析', '予算策定', 'ビジネス戦略']
            }
        }

    def create_optimization_plan(self, cost_data):
        """最適化計画の作成"""
        plan = {
            'immediate_actions': [],
            'short_term_goals': [],
            'long_term_strategy': []
        }

        # 即座に実行可能なアクション
        if cost_data.get('unused_resources'):
            plan['immediate_actions'].append({
                'action': 'Delete unused resources',
                'estimated_savings': cost_data['unused_resources']['cost'],
                'timeline': '1 week'
            })

        # 短期目標
        if cost_data.get('rightsizing_opportunities'):
            plan['short_term_goals'].append({
                'action': 'Right-size instances',
                'estimated_savings': cost_data['rightsizing_opportunities']['savings'],
                'timeline': '1 month'
            })

        # 長期戦略
        plan['long_term_strategy'].append({
            'action': 'Implement Reserved Instance strategy',
            'estimated_savings': cost_data.get('ri_savings', 0),
            'timeline': '3-6 months'
        })

        return plan
```

#### コストガバナンス

```yaml
# コストガバナンスポリシー
CostGovernancePolicy:
  BudgetLimits:
    Development: $5000/month
    Staging: $10000/month
    Production: $50000/month

  ApprovalWorkflow:
    - threshold: $1000
      approver: "Team Lead"
    - threshold: $5000
      approver: "Department Manager"
    - threshold: $20000
      approver: "Finance Director"

  AutomatedActions:
    - trigger: "80% of budget"
      action: "Send warning notification"
    - trigger: "95% of budget"
      action: "Restrict new resource creation"
    - trigger: "100% of budget"
      action: "Stop non-critical resources"

  TaggingPolicy:
    Required:
      - Environment
      - Project
      - Owner
      - CostCenter
    Optional:
      - Application
      - Team
```

### 継続的最適化プロセス

#### 月次最適化サイクル

```python
def monthly_optimization_cycle():
    """月次コスト最適化サイクル"""

    # Week 1: データ収集・分析
    week1_tasks = [
        'Cost Explorer レポート生成',
        'Trusted Advisor チェック実行',
        'Compute Optimizer 推奨事項確認',
        '異常検知アラートレビュー'
    ]

    # Week 2: 機会特定・優先順位付け
    week2_tasks = [
        '最適化機会の特定',
        'ROI分析・優先順位付け',
        '実装計画策定',
        'リスク評価'
    ]

    # Week 3: 実装・テスト
    week3_tasks = [
        '高優先度項目の実装',
        'テスト環境での検証',
        'パフォーマンス影響評価',
        'ロールバック計画準備'
    ]

    # Week 4: 展開・監視
    week4_tasks = [
        '本番環境への展開',
        '効果測定・監視',
        '次月計画策定',
        'ステークホルダー報告'
    ]

    return {
        'week1': week1_tasks,
        'week2': week2_tasks,
        'week3': week3_tasks,
        'week4': week4_tasks
    }
```

#### 自動化ツール

```python
import boto3
import json
from datetime import datetime, timedelta

class CostOptimizationAutomation:
    def __init__(self):
        self.ec2 = boto3.client('ec2')
        self.ce = boto3.client('ce')
        self.sns = boto3.client('sns')

    def identify_unused_resources(self):
        """未使用リソースの特定"""
        unused_resources = {
            'stopped_instances': [],
            'unattached_volumes': [],
            'unused_elastic_ips': []
        }

        # 停止中のインスタンス
        instances = self.ec2.describe_instances(
            Filters=[{'Name': 'instance-state-name', 'Values': ['stopped']}]
        )

        for reservation in instances['Reservations']:
            for instance in reservation['Instances']:
                launch_time = instance['LaunchTime']
                if (datetime.now(launch_time.tzinfo) - launch_time).days > 7:
                    unused_resources['stopped_instances'].append({
                        'instance_id': instance['InstanceId'],
                        'instance_type': instance['InstanceType'],
                        'stopped_days': (datetime.now(launch_time.tzinfo) - launch_time).days
                    })

        # 未アタッチのEBSボリューム
        volumes = self.ec2.describe_volumes(
            Filters=[{'Name': 'status', 'Values': ['available']}]
        )

        for volume in volumes['Volumes']:
            unused_resources['unattached_volumes'].append({
                'volume_id': volume['VolumeId'],
                'size': volume['Size'],
                'volume_type': volume['VolumeType']
            })

        return unused_resources

    def generate_optimization_report(self):
        """最適化レポート生成"""
        unused = self.identify_unused_resources()

        # コスト計算
        estimated_savings = 0

        # 停止インスタンスのコスト
        for instance in unused['stopped_instances']:
            # 簡略化した計算（実際はより複雑）
            if instance['instance_type'].startswith('t3.micro'):
                estimated_savings += 8.76  # 月額
            elif instance['instance_type'].startswith('m5.large'):
                estimated_savings += 69.12  # 月額

        # 未使用ボリュームのコスト
        for volume in unused['unattached_volumes']:
            if volume['volume_type'] == 'gp3':
                estimated_savings += volume['size'] * 0.08  # 月額

        report = {
            'report_date': datetime.now().isoformat(),
            'unused_resources': unused,
            'estimated_monthly_savings': estimated_savings,
            'recommendations': self._generate_recommendations(unused)
        }

        return report

    def _generate_recommendations(self, unused_resources):
        """推奨アクション生成"""
        recommendations = []

        if unused_resources['stopped_instances']:
            recommendations.append({
                'priority': 'High',
                'action': 'Terminate long-stopped instances',
                'resources': len(unused_resources['stopped_instances']),
                'timeline': 'Immediate'
            })

        if unused_resources['unattached_volumes']:
            recommendations.append({
                'priority': 'Medium',
                'action': 'Delete unattached EBS volumes',
                'resources': len(unused_resources['unattached_volumes']),
                'timeline': '1 week'
            })

        return recommendations
```

### ROI 測定・効果検証

#### 効果測定フレームワーク

```python
def measure_optimization_roi():
    """最適化のROI測定"""

    # 最適化前後のコスト比較
    baseline_period = {
        'start': '2024-01-01',
        'end': '2024-01-31'
    }

    optimized_period = {
        'start': '2024-02-01',
        'end': '2024-02-28'
    }

    ce = boto3.client('ce')

    # ベースラインコスト
    baseline_cost = ce.get_cost_and_usage(
        TimePeriod=baseline_period,
        Granularity='MONTHLY',
        Metrics=['BlendedCost']
    )

    # 最適化後コスト
    optimized_cost = ce.get_cost_and_usage(
        TimePeriod=optimized_period,
        Granularity='MONTHLY',
        Metrics=['BlendedCost']
    )

    # ROI計算
    baseline_amount = float(baseline_cost['ResultsByTime'][0]['Total']['BlendedCost']['Amount'])
    optimized_amount = float(optimized_cost['ResultsByTime'][0]['Total']['BlendedCost']['Amount'])

    savings = baseline_amount - optimized_amount
    roi_percentage = (savings / baseline_amount) * 100 if baseline_amount > 0 else 0

    return {
        'baseline_cost': baseline_amount,
        'optimized_cost': optimized_amount,
        'absolute_savings': savings,
        'roi_percentage': roi_percentage,
        'annualized_savings': savings * 12
    }
```

---

_次のセクション: [09. 災害復旧](./09-disaster-recovery.md)_
