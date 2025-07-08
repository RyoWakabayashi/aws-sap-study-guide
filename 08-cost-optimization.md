# コスト最適化

## 目次
1. [コスト管理の基本](#コスト管理の基本)
2. [EC2コスト最適化](#ec2コスト最適化)
3. [ストレージコスト最適化](#ストレージコスト最適化)
4. [データ転送コスト最適化](#データ転送コスト最適化)
5. [監視・分析ツール](#監視分析ツール)
6. [コスト最適化戦略](#コスト最適化戦略)

---

## コスト管理の基本

### AWS料金モデル

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
  "AdditionalSchemaElements": [
    "RESOURCES"
  ],
  "S3Bucket": "my-billing-reports",
  "S3Prefix": "reports/",
  "S3Region": "us-east-1",
  "AdditionalArtifacts": [
    "REDSHIFT",
    "QUICKSIGHT"
  ],
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

## EC2コスト最適化

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

### Auto Scaling最適化

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
        "SecurityGroups": [
          {"GroupId": "sg-12345678"}
        ],
        "SubnetId": "subnet-12345678",
        "WeightedCapacity": 1
      },
      {
        "ImageId": "ami-12345678",
        "InstanceType": "m5.xlarge",
        "KeyName": "my-key",
        "SecurityGroups": [
          {"GroupId": "sg-12345678"}
        ],
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

### S3コスト最適化

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

### EBSコスト最適化

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

#### CloudFront活用
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

#### VPC Endpoint活用
```yaml
# VPC Endpoint for S3
Resources:
  S3VPCEndpoint:
    Type: AWS::EC2::VPCEndpoint
    Properties:
      VpcId: !Ref VPC
      ServiceName: !Sub 'com.amazonaws.${AWS::Region}.s3'
      VpcEndpointType: Gateway
      RouteTableIds:
        - !Ref PrivateRouteTable
      PolicyDocument:
        Statement:
          - Effect: Allow
            Principal: '*'
            Action:
              - 's3:GetObject'
              - 's3:PutObject'
            Resource:
              - 'arn:aws:s3:::my-bucket/*'

  DynamoDBVPCEndpoint:
    Type: AWS::EC2::VPCEndpoint
    Properties:
      VpcId: !Ref VPC
      ServiceName: !Sub 'com.amazonaws.${AWS::Region}.dynamodb'
      VpcEndpointType: Gateway
      RouteTableIds:
        - !Ref PrivateRouteTable
```

### 公式リソース
- [S3 Pricing](https://aws.amazon.com/s3/pricing/)
- [EBS Pricing](https://aws.amazon.com/ebs/pricing/)
- [CloudFront Pricing](https://aws.amazon.com/cloudfront/pricing/)

---

*次のセクション: [09. 災害復旧](./09-disaster-recovery.md)*
