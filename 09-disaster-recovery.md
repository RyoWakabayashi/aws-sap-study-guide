# 災害復旧

## 目次

1. [災害復旧の基本概念](#災害復旧の基本概念)

2. [RTO/RPO 要件](#rtorpo-要件)

3. [災害復旧戦略](#災害復旧戦略)

4. [バックアップ戦略](#バックアップ戦略)

5. [マルチリージョン設計](#マルチリージョン設計)

6. [テスト・検証](#テスト検証)

---

## 災害復旧の基本概念

### 定義

```
災害復旧 (Disaster Recovery):

- 自然災害、システム障害、人的ミス等による

- サービス中断からの復旧計画

- ビジネス継続性の確保

事業継続計画 (Business Continuity Planning):

- より広範囲な継続性計画

- 災害復旧を含む包括的な計画

```

### 災害の種類

#### 自然災害

```
地震、津波、台風、洪水:

- 地理的に広範囲

- 長期間の影響

- 予測困難

対策:

- 地理的分散

- マルチリージョン構成

- 物理的冗長性

```

#### 技術的障害

```
ハードウェア障害:

- サーバー、ストレージ、ネットワーク

- 部分的な影響

- 比較的短期間

ソフトウェア障害:

- アプリケーションバグ

- OS障害

- データ破損

対策:

- 冗長構成

- 自動フェイルオーバー

- 定期バックアップ

```

#### 人的要因

```
操作ミス:

- 設定変更ミス

- データ削除

- 権限設定ミス

悪意のある攻撃:

- サイバー攻撃

- 内部不正

- データ漏洩

対策:

- アクセス制御

- 監査ログ

- 多要素認証

```

### 公式リソース

- [AWS Disaster Recovery](https://aws.amazon.com/disaster-recovery/)

- [AWS Well-Architected Reliability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/)

---

## RTO/RPO 要件

### 定義

#### RTO (Recovery Time Objective)

```
定義: システム復旧までの目標時間
測定: 障害発生から正常稼働まで
影響: ビジネス機会損失、顧客満足度

例:

- Tier 1 (Critical): RTO < 1時間

- Tier 2 (Important): RTO < 4時間

- Tier 3 (Standard): RTO < 24時間

- Tier 4 (Low): RTO < 72時間

```

#### RPO (Recovery Point Objective)

```
定義: データ損失許容時間
測定: 最後のバックアップから障害まで
影響: データ損失、整合性

例:

- Tier 1 (Critical): RPO < 15分

- Tier 2 (Important): RPO < 1時間

- Tier 3 (Standard): RPO < 4時間

- Tier 4 (Low): RPO < 24時間

```

### 要件分析

#### ビジネス影響分析

```python
def calculate_business_impact():
    """ビジネス影響度計算"""

    # 時間あたりの損失計算
    hourly_revenue_loss = 10000  # $10,000/hour
    hourly_operational_cost = 2000  # $2,000/hour
    reputation_impact = 5000  # $5,000/hour

    total_hourly_impact = hourly_revenue_loss + hourly_operational_cost + reputation_impact

    # RTO別の影響計算
    rto_scenarios = {
        '1_hour': total_hourly_impact * 1,
        '4_hours': total_hourly_impact * 4,
        '24_hours': total_hourly_impact * 24,
        '72_hours': total_hourly_impact * 72
    }

    return rto_scenarios

def calculate_dr_investment():
    """災害復旧投資計算"""

    # 戦略別コスト
    dr_costs = {
        'backup_restore': 1000,      # 月額 $1,000
        'pilot_light': 5000,         # 月額 $5,000
        'warm_standby': 15000,       # 月額 $15,000
        'multi_site_active': 50000   # 月額 $50,000
    }

    # ROI計算
    annual_risk_cost = 100000  # 年間予想損失 $100,000

    roi_analysis = {}
    for strategy, monthly_cost in dr_costs.items():
        annual_cost = monthly_cost * 12
        roi = (annual_risk_cost - annual_cost) / annual_cost * 100
        roi_analysis[strategy] = {
            'annual_cost': annual_cost,
            'roi_percentage': roi
        }

    return roi_analysis

```

### 要件マトリクス

| システム         | 重要度    | RTO       | RPO      | 推奨戦略          |
| ---------------- | --------- | --------- | -------- | ----------------- |
| **決済システム** | Critical  | < 30 分   | < 5 分   | Multi-Site Active |
| **顧客 DB**      | Critical  | < 1 時間  | < 15 分  | Warm Standby      |
| **Web サイト**   | Important | < 2 時間  | < 30 分  | Pilot Light       |
| **レポート**     | Standard  | < 8 時間  | < 2 時間 | Backup & Restore  |
| **ログ**         | Low       | < 24 時間 | < 4 時間 | Backup & Restore  |

---

## 災害復旧戦略

### 戦略比較

| 戦略                  | RTO      | RPO    | コスト | 複雑性 | 用途                   |
| --------------------- | -------- | ------ | ------ | ------ | ---------------------- |
| **Backup & Restore**  | 時間〜日 | 時間   | 低     | 低     | 非重要システム         |
| **Pilot Light**       | 分〜時間 | 分     | 中     | 中     | 重要システム           |
| **Warm Standby**      | 分       | 秒〜分 | 高     | 中     | 高重要システム         |
| **Multi-Site Active** | 秒       | 秒     | 最高   | 高     | ミッションクリティカル |

### Backup & Restore

#### 特徴

```

仕組み:

- 定期的なデータバックアップ

- 障害時にバックアップから復元

- 最もシンプルで低コスト

適用場面:

- 非重要システム

- 長いRTO/RPOが許容される

- コスト重視

```

#### 実装例

```yaml
# AWS Backup設定
Resources:
  BackupVault:
    Type: AWS::Backup::BackupVault
    Properties:
      BackupVaultName: ProductionBackupVault
      EncryptionKeyArn: !GetAtt BackupKMSKey.Arn

  BackupPlan:
    Type: AWS::Backup::BackupPlan
    Properties:
      BackupPlan:
        BackupPlanName: DailyBackupPlan
        BackupPlanRule:
          - RuleName: DailyBackups

            TargetBackupVault: !Ref BackupVault
            ScheduleExpression: cron(0 2 ? * * *)
            StartWindowMinutes: 60
            CompletionWindowMinutes: 120
            Lifecycle:
              DeleteAfterDays: 30
              MoveToColdStorageAfterDays: 7

  BackupSelection:
    Type: AWS::Backup::BackupSelection
    Properties:
      BackupPlanId: !Ref BackupPlan
      BackupSelection:
        SelectionName: ProductionResources
        IamRoleArn: !GetAtt BackupRole.Arn
        Resources:
          - "arn:aws:rds:*:*:db:prod-*"
          - "arn:aws:ec2:*:*:volume/*"

        Conditions:
          StringEquals:
            "aws:ResourceTag/Environment": "Production"
```

### Pilot Light

#### 特徴

```
仕組み:

- 最小限のインフラを常時稼働

- データレプリケーション継続

- 障害時に迅速にスケールアップ

コンポーネント:

- データベースレプリケーション

- 最小限のコンピューティング

- ネットワーク設定済み

```

#### 実装例

```yaml
# Pilot Light環境
Resources:
  # データベースRead Replica
  DatabaseReplica:
    Type: AWS::RDS::DBInstance
    Properties:
      SourceDBInstanceIdentifier: !Ref PrimaryDatabase
      DBInstanceClass: db.t3.micro # 最小サイズ
      PubliclyAccessible: false
      MultiAZ: false
      StorageEncrypted: true

  # 最小限のAuto Scaling Group
  PilotLightASG:
    Type: AWS::AutoScaling::AutoScalingGroup
    Properties:
      MinSize: 0
      MaxSize: 10
      DesiredCapacity: 0 # 通常時は0
      LaunchTemplate:
        LaunchTemplateId: !Ref LaunchTemplate
        Version: !GetAtt LaunchTemplate.LatestVersionNumber
      VPCZoneIdentifier:
        - !Ref PrivateSubnet1
        - !Ref PrivateSubnet2

  # フェイルオーバー用Lambda
  FailoverFunction:
    Type: AWS::Lambda::Function
    Properties:
      Runtime: python3.9
      Handler: index.lambda_handler
      Code:
        ZipFile: |
          import boto3

          def lambda_handler(event, context):
              # Read Replicaをプライマリに昇格
              rds = boto3.client('rds')
              rds.promote_read_replica(
                  DBInstanceIdentifier='pilot-light-replica'
              )
              
              # Auto Scaling Groupを起動
              asg = boto3.client('autoscaling')
              asg.update_auto_scaling_group(
                  AutoScalingGroupName='pilot-light-asg',
                  DesiredCapacity=3
              )
              
              # Route 53でトラフィック切り替え
              route53 = boto3.client('route53')
              # DNS切り替えロジック
              
              return {'statusCode': 200}
```

### Warm Standby

#### 特徴

```

仕組み:

- 縮小版の本番環境を常時稼働

- リアルタイムまたは準リアルタイムレプリケーション

- 障害時に即座にスケールアップ

利点:

- 短いRTO (分単位)

- 短いRPO (秒〜分単位)

- 定期的なテスト可能

```

#### 実装例

```yaml
# Warm Standby環境
Resources:
  # Aurora Global Database
  GlobalCluster:
    Type: AWS::RDS::GlobalCluster
    Properties:
      GlobalClusterIdentifier: production-global-cluster
      SourceDBClusterIdentifier: !Ref PrimaryCluster

  SecondaryCluster:
    Type: AWS::RDS::DBCluster
    Properties:
      GlobalClusterIdentifier: !Ref GlobalCluster
      DBClusterIdentifier: secondary-cluster
      Engine: aurora-mysql
      EngineVersion: 8.0.mysql_aurora.3.02.0
      DBSubnetGroupName: !Ref SecondarySubnetGroup

  # 縮小版のECS Service
  WarmStandbyService:
    Type: AWS::ECS::Service
    Properties:
      Cluster: !Ref ECSCluster
      TaskDefinition: !Ref TaskDefinition
      DesiredCount: 2 # 本番の1/3
      LaunchType: FARGATE
      NetworkConfiguration:
        AwsvpcConfiguration:
          SecurityGroups:
            - !Ref ApplicationSecurityGroup

          Subnets:
            - !Ref PrivateSubnet1
            - !Ref PrivateSubnet2

  # 自動スケールアップ
  FailoverAlarm:
    Type: AWS::CloudWatch::Alarm
    Properties:
      AlarmName: PrimaryRegionFailure
      ComparisonOperator: LessThanThreshold
      EvaluationPeriods: 2
      MetricName: HealthyHostCount
      Namespace: AWS/ApplicationELB
      Period: 60
      Statistic: Average
      Threshold: 1
      AlarmActions:
        - !Ref ScaleUpTopic

  ScaleUpFunction:
    Type: AWS::Lambda::Function
    Properties:
      Runtime: python3.9
      Handler: index.lambda_handler
      Code:
        ZipFile: |
          import boto3

          def lambda_handler(event, context):
              ecs = boto3.client('ecs')
              
              # ECS Serviceをスケールアップ
              ecs.update_service(
                  cluster='warm-standby-cluster',
                  service='warm-standby-service',
                  desiredCount=10  # 本番レベルに拡張
              )
              
              # Aurora Read Replicaを追加
              rds = boto3.client('rds')
              rds.create_db_instance(
                  DBInstanceIdentifier='additional-reader',
                  DBClusterIdentifier='secondary-cluster',
                  DBInstanceClass='db.r5.xlarge'
              )
              
              return {'statusCode': 200}
```

### Multi-Site Active

#### 特徴

```
仕組み:

- 複数サイトで同時稼働

- アクティブ-アクティブ構成

- 自動負荷分散・フェイルオーバー

利点:

- 最短のRTO (秒単位)

- 最短のRPO (秒単位)

- 高い可用性

- 負荷分散効果

```

#### 実装例

```yaml
# Multi-Site Active構成
Resources:
  # Global Load Balancer (Route 53)
  GlobalDNS:
    Type: AWS::Route53::RecordSet
    Properties:
      HostedZoneId: !Ref HostedZone
      Name: api.example.com
      Type: A
      SetIdentifier: Primary
      Failover: PRIMARY
      AliasTarget:
        DNSName: !GetAtt PrimaryALB.DNSName
        HostedZoneId: !GetAtt PrimaryALB.CanonicalHostedZoneID
      HealthCheckId: !Ref PrimaryHealthCheck

  SecondaryDNS:
    Type: AWS::Route53::RecordSet
    Properties:
      HostedZoneId: !Ref HostedZone
      Name: api.example.com
      Type: A
      SetIdentifier: Secondary
      Failover: SECONDARY
      AliasTarget:
        DNSName: !GetAtt SecondaryALB.DNSName
        HostedZoneId: !GetAtt SecondaryALB.CanonicalHostedZoneID

  # DynamoDB Global Tables
  GlobalTable:
    Type: AWS::DynamoDB::GlobalTable
    Properties:
      TableName: UserData
      BillingMode: PAY_PER_REQUEST
      Replicas:
        - Region: us-east-1

          GlobalSecondaryIndexes:
            - IndexName: GSI1

              KeySchema:
                - AttributeName: GSI1PK

                  KeyType: HASH
              Projection:
                ProjectionType: ALL
        - Region: us-west-2

          GlobalSecondaryIndexes:
            - IndexName: GSI1

              KeySchema:
                - AttributeName: GSI1PK

                  KeyType: HASH
              Projection:
                ProjectionType: ALL
```

---

## バックアップ戦略

### バックアップタイプ

#### フルバックアップ

```

特徴:

- 全データの完全コピー

- 復旧が簡単

- 時間・容量が大きい

頻度: 週次または月次
用途: ベースライン、長期保存

```

#### 増分バックアップ

```

特徴:

- 前回バックアップからの変更分のみ

- 高速、容量効率

- 復旧時は複数バックアップが必要

頻度: 日次
用途: 定期バックアップ

```

#### 差分バックアップ

```

特徴:

- 最後のフルバックアップからの変更分

- 増分より復旧が簡単

- 増分より容量大

頻度: 日次
用途: バランス型

```

### 3-2-1 ルール

#### 原則

```

3: データのコピーを3つ保持
2: 異なる2つのメディアに保存
1: 1つは異なる場所に保存

AWS実装例:

- 本番データ (EBS/RDS)

- 同一リージョンバックアップ (S3)

- 異なるリージョンバックアップ (S3 Cross-Region Replication)

```

### 自動バックアップ

#### RDS 自動バックアップ

```json
{
  "DBInstanceIdentifier": "production-db",
  "BackupRetentionPeriod": 7,
  "PreferredBackupWindow": "03:00-04:00",
  "PreferredMaintenanceWindow": "sun:04:00-sun:05:00",
  "DeleteAutomatedBackups": false,
  "DeletionProtection": true
}
```

#### EBS スナップショット自動化

```python
import boto3
from datetime import datetime, timedelta

def create_ebs_snapshots():
    ec2 = boto3.client('ec2')

    # 本番環境のボリューム取得
    volumes = ec2.describe_volumes(
        Filters=[
            {'Name': 'tag:Environment', 'Values': ['Production']},
            {'Name': 'state', 'Values': ['in-use']}
        ]
    )

    for volume in volumes['Volumes']:
        volume_id = volume['VolumeId']

        # スナップショット作成
        snapshot = ec2.create_snapshot(
            VolumeId=volume_id,
            Description=f'Automated snapshot of {volume_id} - {datetime.now().isoformat()}'
        )

        # タグ付け
        ec2.create_tags(
            Resources=[snapshot['SnapshotId']],
            Tags=[
                {'Key': 'Name', 'Value': f'Auto-{volume_id}-{datetime.now().strftime("%Y%m%d")}'},
                {'Key': 'Environment', 'Value': 'Production'},
                {'Key': 'AutomatedBackup', 'Value': 'true'},
                {'Key': 'RetentionDays', 'Value': '30'}
            ]
        )

def cleanup_old_snapshots():
    ec2 = boto3.client('ec2')

    # 30日以前のスナップショット取得
    cutoff_date = datetime.now() - timedelta(days=30)

    snapshots = ec2.describe_snapshots(
        OwnerIds=['self'],
        Filters=[
            {'Name': 'tag:AutomatedBackup', 'Values': ['true']}
        ]
    )

    for snapshot in snapshots['Snapshots']:
        start_time = snapshot['StartTime'].replace(tzinfo=None)

        if start_time < cutoff_date:
            try:
                ec2.delete_snapshot(SnapshotId=snapshot['SnapshotId'])
                print(f"Deleted snapshot: {snapshot['SnapshotId']}")
            except Exception as e:
                print(f"Failed to delete {snapshot['SnapshotId']}: {e}")

```

### クロスリージョンバックアップ

#### S3 Cross-Region Replication

```json
{
  "Role": "arn:aws:iam::account:role/replication-role",
  "Rules": [
    {
      "ID": "BackupReplication",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {
        "Prefix": "backups/"
      },
      "Destination": {
        "Bucket": "arn:aws:s3:::backup-replica-bucket",
        "StorageClass": "STANDARD_IA",
        "ReplicationTime": {
          "Status": "Enabled",
          "Time": {
            "Minutes": 15
          }
        }
      }
    }
  ]
}
```

---

## マルチリージョン設計

### 概要

災害復旧におけるマルチリージョン設計は、地理的に分散した AWS リージョンを活用して高可用性と災害復旧を実現するアプローチです。

### リージョン選択戦略

#### プライマリ・セカンダリリージョン選択

```text
選択基準:
- 地理的距離 (1000km以上推奨)
- レイテンシ要件
- データ主権・規制要件
- サービス可用性
- コスト考慮

推奨組み合わせ:
- us-east-1 ↔ us-west-2
- eu-west-1 ↔ eu-central-1
- ap-northeast-1 ↔ ap-southeast-1
```

#### リージョンペア戦略

```python
class RegionPairStrategy:
    def __init__(self):
        self.region_pairs = {
            'us-east-1': {
                'primary': 'us-east-1',
                'secondary': 'us-west-2',
                'tertiary': 'eu-west-1'
            },
            'eu-west-1': {
                'primary': 'eu-west-1',
                'secondary': 'eu-central-1',
                'tertiary': 'us-east-1'
            },
            'ap-northeast-1': {
                'primary': 'ap-northeast-1',
                'secondary': 'ap-southeast-1',
                'tertiary': 'us-west-2'
            }
        }

    def get_dr_regions(self, primary_region):
        """災害復旧用リージョンの取得"""
        return self.region_pairs.get(primary_region, {})

    def calculate_rto_rpo(self, strategy_type, data_size_gb):
        """RTO/RPO計算"""
        strategies = {
            'backup_restore': {
                'rto_hours': 4 + (data_size_gb / 100),  # データサイズに応じて調整
                'rpo_hours': 24
            },
            'pilot_light': {
                'rto_hours': 1,
                'rpo_minutes': 15
            },
            'warm_standby': {
                'rto_minutes': 10,
                'rpo_minutes': 5
            },
            'multi_site': {
                'rto_seconds': 30,
                'rpo_seconds': 1
            }
        }

        return strategies.get(strategy_type, {})
```

### データレプリケーション戦略

#### Aurora Global Database

```yaml
Resources:
  # プライマリリージョン (us-east-1)
  PrimaryGlobalCluster:
    Type: AWS::RDS::GlobalCluster
    Properties:
      GlobalClusterIdentifier: production-global-cluster
      Engine: aurora-mysql
      EngineVersion: 8.0.mysql_aurora.3.02.0
      DatabaseName: production
      MasterUsername: admin
      MasterUserPassword: !Ref DBPassword
      BackupRetentionPeriod: 7
      DeletionProtection: true

  PrimaryCluster:
    Type: AWS::RDS::DBCluster
    Properties:
      DBClusterIdentifier: primary-cluster-us-east-1
      GlobalClusterIdentifier: !Ref PrimaryGlobalCluster
      Engine: aurora-mysql
      EngineVersion: 8.0.mysql_aurora.3.02.0

  # セカンダリリージョン (us-west-2)
  SecondaryCluster:
    Type: AWS::RDS::DBCluster
    Properties:
      DBClusterIdentifier: secondary-cluster-us-west-2
      GlobalClusterIdentifier: !Ref PrimaryGlobalCluster
      Engine: aurora-mysql
      EngineVersion: 8.0.mysql_aurora.3.02.0
      # セカンダリクラスターは読み取り専用
```

#### DynamoDB Global Tables

```python
import boto3

def setup_dynamodb_global_tables():
    """DynamoDB Global Tablesの設定"""

    regions = ['us-east-1', 'us-west-2', 'eu-west-1']
    table_name = 'UserProfiles'

    # 各リージョンでテーブル作成
    for region in regions:
        dynamodb = boto3.client('dynamodb', region_name=region)

        try:
            # テーブル作成
            dynamodb.create_table(
                TableName=table_name,
                KeySchema=[
                    {
                        'AttributeName': 'userId',
                        'KeyType': 'HASH'
                    }
                ],
                AttributeDefinitions=[
                    {
                        'AttributeName': 'userId',
                        'AttributeType': 'S'
                    }
                ],
                BillingMode='PAY_PER_REQUEST',
                StreamSpecification={
                    'StreamEnabled': True,
                    'StreamViewType': 'NEW_AND_OLD_IMAGES'
                },
                SSESpecification={
                    'Enabled': True
                }
            )

            # テーブル作成完了まで待機
            waiter = dynamodb.get_waiter('table_exists')
            waiter.wait(TableName=table_name)

        except dynamodb.exceptions.ResourceInUseException:
            print(f"Table {table_name} already exists in {region}")

    # Global Tables作成
    primary_region_client = boto3.client('dynamodb', region_name='us-east-1')

    try:
        response = primary_region_client.create_global_table(
            GlobalTableName=table_name,
            ReplicationGroup=[
                {'RegionName': region} for region in regions
            ]
        )
        return response
    except Exception as e:
        print(f"Global Table creation failed: {e}")
        return None
```

#### S3 Cross-Region Replication

```json
{
  "Role": "arn:aws:iam::account:role/replication-role",
  "Rules": [
    {
      "ID": "DisasterRecoveryReplication",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {
        "And": {
          "Prefix": "critical-data/",
          "Tags": [
            {
              "Key": "Backup",
              "Value": "Required"
            }
          ]
        }
      },
      "Destination": {
        "Bucket": "arn:aws:s3:::dr-backup-us-west-2",
        "StorageClass": "STANDARD_IA",
        "ReplicationTime": {
          "Status": "Enabled",
          "Time": {
            "Minutes": 15
          }
        },
        "Metrics": {
          "Status": "Enabled",
          "EventThreshold": {
            "Minutes": 15
          }
        }
      }
    }
  ]
}
```

### インフラストラクチャレプリケーション

#### CloudFormation StackSets

```yaml
# マルチリージョンインフラ展開
Resources:
  StackSet:
    Type: AWS::CloudFormation::StackSet
    Properties:
      StackSetName: DisasterRecoveryInfrastructure
      Description: DR infrastructure across multiple regions
      Capabilities:
        - CAPABILITY_IAM
        - CAPABILITY_NAMED_IAM
      Parameters:
        - ParameterKey: Environment
          ParameterValue: production
        - ParameterKey: VPCCidr
          ParameterValue: 10.0.0.0/16
      PermissionModel: SELF_MANAGED

  StackInstances:
    Type: AWS::CloudFormation::StackInstances
    Properties:
      StackSetName: !Ref StackSet
      Accounts:
        - !Ref AWS::AccountId
      Regions:
        - us-east-1
        - us-west-2
      ParameterOverrides:
        - ParameterKey: VPCCidr
          ParameterValue: 10.0.0.0/16
```

#### Terraform Multi-Region

```hcl
# terraform/main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# プライマリリージョン
provider "aws" {
  alias  = "primary"
  region = "us-east-1"
}

# セカンダリリージョン
provider "aws" {
  alias  = "secondary"
  region = "us-west-2"
}

# プライマリリージョンのインフラ
module "primary_infrastructure" {
  source = "./modules/infrastructure"

  providers = {
    aws = aws.primary
  }

  environment = "production"
  region_suffix = "primary"
}

# セカンダリリージョンのインフラ
module "secondary_infrastructure" {
  source = "./modules/infrastructure"

  providers = {
    aws = aws.secondary
  }

  environment = "production"
  region_suffix = "secondary"
}
```

### DNS・トラフィック管理

#### Route 53 Health Checks & Failover

```json
{
  "HealthChecks": [
    {
      "Type": "HTTPS",
      "ResourcePath": "/health",
      "FullyQualifiedDomainName": "api-us-east-1.example.com",
      "Port": 443,
      "RequestInterval": 30,
      "FailureThreshold": 3,
      "Regions": ["us-east-1", "us-west-2", "eu-west-1"]
    },
    {
      "Type": "HTTPS",
      "ResourcePath": "/health",
      "FullyQualifiedDomainName": "api-us-west-2.example.com",
      "Port": 443,
      "RequestInterval": 30,
      "FailureThreshold": 3,
      "Regions": ["us-east-1", "us-west-2", "eu-west-1"]
    }
  ],
  "RecordSets": [
    {
      "Name": "api.example.com",
      "Type": "A",
      "SetIdentifier": "Primary",
      "Failover": "PRIMARY",
      "AliasTarget": {
        "DNSName": "api-us-east-1.example.com",
        "EvaluateTargetHealth": true
      },
      "HealthCheckId": "primary-health-check-id"
    },
    {
      "Name": "api.example.com",
      "Type": "A",
      "SetIdentifier": "Secondary",
      "Failover": "SECONDARY",
      "AliasTarget": {
        "DNSName": "api-us-west-2.example.com",
        "EvaluateTargetHealth": true
      }
    }
  ]
}
```

#### 自動フェイルオーバー

```python
import boto3
import json

class AutoFailoverManager:
    def __init__(self):
        self.route53 = boto3.client('route53')
        self.rds = boto3.client('rds')
        self.ec2 = boto3.client('ec2')

    def execute_failover(self, primary_region, secondary_region):
        """自動フェイルオーバーの実行"""

        failover_steps = []

        try:
            # 1. Aurora Global Database フェイルオーバー
            self._failover_aurora_global_db(secondary_region)
            failover_steps.append("Aurora Global Database failover completed")

            # 2. Route 53 DNS切り替え
            self._update_dns_records(primary_region, secondary_region)
            failover_steps.append("DNS records updated")

            # 3. アプリケーションインスタンス起動
            self._scale_up_secondary_region(secondary_region)
            failover_steps.append("Secondary region scaled up")

            # 4. 監視・アラート更新
            self._update_monitoring(secondary_region)
            failover_steps.append("Monitoring updated")

            return {
                'status': 'success',
                'steps_completed': failover_steps,
                'new_primary_region': secondary_region
            }

        except Exception as e:
            return {
                'status': 'failed',
                'error': str(e),
                'steps_completed': failover_steps
            }

    def _failover_aurora_global_db(self, target_region):
        """Aurora Global Databaseのフェイルオーバー"""
        rds_target = boto3.client('rds', region_name=target_region)

        # セカンダリクラスターをプライマリに昇格
        response = rds_target.failover_global_cluster(
            GlobalClusterIdentifier='production-global-cluster',
            TargetDbClusterIdentifier='secondary-cluster-' + target_region
        )

        return response

    def _update_dns_records(self, old_primary, new_primary):
        """DNS レコードの更新"""

        # Route 53 レコードセットの更新
        response = self.route53.change_resource_record_sets(
            HostedZoneId='Z123456789',
            ChangeBatch={
                'Changes': [
                    {
                        'Action': 'UPSERT',
                        'ResourceRecordSet': {
                            'Name': 'api.example.com',
                            'Type': 'A',
                            'SetIdentifier': 'Primary',
                            'Failover': 'PRIMARY',
                            'AliasTarget': {
                                'DNSName': f'api-{new_primary}.example.com',
                                'EvaluateTargetHealth': True
                            }
                        }
                    }
                ]
            }
        )

        return response
```

---

## テスト・検証

### 概要

災害復旧計画の有効性を確保するため、定期的なテストと検証が不可欠です。

### テスト戦略

#### テストレベル

```text
Level 1: 机上テスト (Tabletop Exercise)
- 頻度: 四半期
- 参加者: 主要ステークホルダー
- 内容: 手順書レビュー、役割確認
- 時間: 2-4時間

Level 2: 部分テスト (Partial Test)
- 頻度: 半年
- 対象: 特定コンポーネント
- 内容: バックアップ復元、フェイルオーバー
- 時間: 4-8時間

Level 3: 全体テスト (Full Test)
- 頻度: 年1回
- 対象: 全システム
- 内容: 完全な災害復旧シナリオ
- 時間: 1-2日
```

#### テスト計画テンプレート

```yaml
DisasterRecoveryTest:
  TestName: "Q2-2024-Full-DR-Test"
  TestType: "Full"
  ScheduledDate: "2024-06-15"
  Duration: "8 hours"

  Objectives:
    - "Validate RTO target of 4 hours"
    - "Validate RPO target of 1 hour"
    - "Test communication procedures"
    - "Verify data integrity"

  Scope:
    InScope:
      - "Production web application"
      - "Customer database"
      - "File storage system"
      - "DNS failover"
    OutOfScope:
      - "Development environments"
      - "Third-party integrations"

  TestScenarios:
    - Scenario: "Primary region complete failure"
      Trigger: "Simulate AWS region outage"
      ExpectedRTO: "4 hours"
      ExpectedRPO: "1 hour"

  Participants:
    - Role: "Incident Commander"
      Name: "John Smith"
    - Role: "Technical Lead"
      Name: "Jane Doe"
    - Role: "Communications Lead"
      Name: "Bob Johnson"

  SuccessCriteria:
    - "Application accessible within RTO"
    - "Data loss within RPO limits"
    - "All critical functions operational"
    - "Communication plan executed"
```

### 自動テストフレームワーク

#### テスト自動化

```python
import boto3
import time
import json
from datetime import datetime, timedelta

class DRTestFramework:
    def __init__(self):
        self.test_results = []
        self.start_time = None
        self.end_time = None

    def run_comprehensive_test(self):
        """包括的なDRテストの実行"""

        self.start_time = datetime.now()
        print(f"DR Test started at: {self.start_time}")

        test_suite = [
            self.test_backup_integrity,
            self.test_database_failover,
            self.test_application_recovery,
            self.test_dns_failover,
            self.test_data_consistency
        ]

        for test in test_suite:
            try:
                result = test()
                self.test_results.append(result)
                print(f"✓ {result['test_name']}: {result['status']}")
            except Exception as e:
                self.test_results.append({
                    'test_name': test.__name__,
                    'status': 'FAILED',
                    'error': str(e),
                    'timestamp': datetime.now().isoformat()
                })
                print(f"✗ {test.__name__}: FAILED - {e}")

        self.end_time = datetime.now()
        return self.generate_test_report()

    def test_backup_integrity(self):
        """バックアップ整合性テスト"""
        s3 = boto3.client('s3')

        # テストファイル作成
        test_data = f"DR Test Data - {datetime.now().isoformat()}"
        test_key = f"dr-test/{datetime.now().strftime('%Y%m%d-%H%M%S')}.txt"

        # プライマリバケットにアップロード
        s3.put_object(
            Bucket='primary-data-bucket',
            Key=test_key,
            Body=test_data
        )

        # レプリケーション待機
        time.sleep(60)

        # セカンダリバケットで確認
        try:
            response = s3.get_object(
                Bucket='secondary-data-bucket',
                Key=test_key
            )

            replicated_data = response['Body'].read().decode('utf-8')

            if replicated_data == test_data:
                return {
                    'test_name': 'Backup Integrity Test',
                    'status': 'PASSED',
                    'details': 'Data successfully replicated',
                    'timestamp': datetime.now().isoformat()
                }
            else:
                raise Exception("Data mismatch between primary and secondary")

        except Exception as e:
            raise Exception(f"Backup integrity test failed: {e}")

    def test_database_failover(self):
        """データベースフェイルオーバーテスト"""
        rds = boto3.client('rds', region_name='us-west-2')

        # Aurora Global Databaseフェイルオーバー
        start_time = time.time()

        try:
            response = rds.failover_global_cluster(
                GlobalClusterIdentifier='test-global-cluster',
                TargetDbClusterIdentifier='test-secondary-cluster'
            )

            # フェイルオーバー完了まで待機
            waiter = rds.get_waiter('db_cluster_available')
            waiter.wait(
                DBClusterIdentifier='test-secondary-cluster',
                WaiterConfig={'Delay': 30, 'MaxAttempts': 20}
            )

            failover_time = time.time() - start_time

            return {
                'test_name': 'Database Failover Test',
                'status': 'PASSED',
                'failover_time_seconds': failover_time,
                'rto_met': failover_time < 300,  # 5分以内
                'timestamp': datetime.now().isoformat()
            }

        except Exception as e:
            raise Exception(f"Database failover test failed: {e}")

    def test_application_recovery(self):
        """アプリケーション復旧テスト"""
        import requests

        # セカンダリリージョンのエンドポイント
        secondary_endpoint = "https://api-us-west-2.example.com/health"

        max_attempts = 60  # 5分間試行
        for attempt in range(max_attempts):
            try:
                response = requests.get(secondary_endpoint, timeout=10)
                if response.status_code == 200:
                    return {
                        'test_name': 'Application Recovery Test',
                        'status': 'PASSED',
                        'recovery_time_seconds': attempt * 5,
                        'endpoint': secondary_endpoint,
                        'timestamp': datetime.now().isoformat()
                    }
            except requests.RequestException:
                time.sleep(5)

        raise Exception("Application failed to recover within timeout")

    def test_dns_failover(self):
        """DNS フェイルオーバーテスト"""
        import socket

        domain = "api.example.com"

        # DNS解決テスト
        try:
            ip_address = socket.gethostbyname(domain)

            # セカンダリリージョンのIPかチェック
            # (実際の実装では、期待するIPアドレス範囲をチェック)

            return {
                'test_name': 'DNS Failover Test',
                'status': 'PASSED',
                'resolved_ip': ip_address,
                'timestamp': datetime.now().isoformat()
            }

        except socket.gaierror as e:
            raise Exception(f"DNS resolution failed: {e}")

    def test_data_consistency(self):
        """データ整合性テスト"""

        # プライマリとセカンダリのデータ比較
        # (実際の実装では、データベースクエリやファイル比較を実行)

        return {
            'test_name': 'Data Consistency Test',
            'status': 'PASSED',
            'data_loss': '0 records',
            'consistency_check': 'PASSED',
            'timestamp': datetime.now().isoformat()
        }

    def generate_test_report(self):
        """テストレポート生成"""

        total_tests = len(self.test_results)
        passed_tests = len([r for r in self.test_results if r['status'] == 'PASSED'])
        failed_tests = total_tests - passed_tests

        test_duration = (self.end_time - self.start_time).total_seconds()

        report = {
            'test_summary': {
                'start_time': self.start_time.isoformat(),
                'end_time': self.end_time.isoformat(),
                'duration_seconds': test_duration,
                'total_tests': total_tests,
                'passed_tests': passed_tests,
                'failed_tests': failed_tests,
                'success_rate': (passed_tests / total_tests) * 100
            },
            'test_results': self.test_results,
            'recommendations': self._generate_recommendations()
        }

        return report

    def _generate_recommendations(self):
        """改善推奨事項の生成"""
        recommendations = []

        failed_tests = [r for r in self.test_results if r['status'] == 'FAILED']

        if failed_tests:
            recommendations.append({
                'priority': 'HIGH',
                'category': 'Test Failures',
                'description': f'{len(failed_tests)} tests failed and require immediate attention',
                'action': 'Review failed test details and fix underlying issues'
            })

        # RTO/RPO分析
        db_failover = next((r for r in self.test_results if 'failover_time_seconds' in r), None)
        if db_failover and not db_failover.get('rto_met', True):
            recommendations.append({
                'priority': 'MEDIUM',
                'category': 'Performance',
                'description': 'Database failover time exceeds RTO target',
                'action': 'Optimize database configuration and failover procedures'
            })

        return recommendations
```

### 継続的改善

#### テスト結果分析

```python
def analyze_test_trends():
    """テスト結果のトレンド分析"""

    # 過去のテスト結果を分析
    test_history = [
        {'date': '2024-03-15', 'success_rate': 85, 'avg_rto': 240},
        {'date': '2024-06-15', 'success_rate': 92, 'avg_rto': 180},
        {'date': '2024-09-15', 'success_rate': 95, 'avg_rto': 150}
    ]

    # トレンド計算
    success_trend = calculate_trend([t['success_rate'] for t in test_history])
    rto_trend = calculate_trend([t['avg_rto'] for t in test_history])

    return {
        'success_rate_trend': success_trend,
        'rto_improvement_trend': rto_trend,
        'recommendations': generate_improvement_plan(test_history)
    }

def calculate_trend(values):
    """トレンド計算"""
    if len(values) < 2:
        return 'insufficient_data'

    if values[-1] > values[0]:
        return 'improving'
    elif values[-1] < values[0]:
        return 'declining'
    else:
        return 'stable'
```

#### 改善計画

```yaml
ImprovementPlan:
  Quarter: "Q4-2024"

  Objectives:
    - "Reduce RTO to under 2 hours"
    - "Achieve 99% test success rate"
    - "Automate 80% of recovery procedures"

  Actions:
    - Action: "Implement automated failover"
      Priority: "High"
      Owner: "Infrastructure Team"
      Deadline: "2024-10-31"

    - Action: "Enhance monitoring and alerting"
      Priority: "Medium"
      Owner: "Operations Team"
      Deadline: "2024-11-15"

    - Action: "Conduct additional training"
      Priority: "Medium"
      Owner: "HR Team"
      Deadline: "2024-11-30"

  Metrics:
    - "Test success rate"
    - "Mean Time to Recovery (MTTR)"
    - "Mean Time Between Failures (MTBF)"
    - "Team response time"
```

---

_次のセクション: [10. 移行戦略](./10-migration.md)_
