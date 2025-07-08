# 災害復旧

## 目次
1. [災害復旧の基本概念](#災害復旧の基本概念)
2. [RTO/RPO要件](#rtorpo要件)
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

## RTO/RPO要件

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

| システム | 重要度 | RTO | RPO | 推奨戦略 |
|---------|--------|-----|-----|----------|
| **決済システム** | Critical | < 30分 | < 5分 | Multi-Site Active |
| **顧客DB** | Critical | < 1時間 | < 15分 | Warm Standby |
| **Webサイト** | Important | < 2時間 | < 30分 | Pilot Light |
| **レポート** | Standard | < 8時間 | < 2時間 | Backup & Restore |
| **ログ** | Low | < 24時間 | < 4時間 | Backup & Restore |

---

## 災害復旧戦略

### 戦略比較

| 戦略 | RTO | RPO | コスト | 複雑性 | 用途 |
|------|-----|-----|--------|--------|------|
| **Backup & Restore** | 時間〜日 | 時間 | 低 | 低 | 非重要システム |
| **Pilot Light** | 分〜時間 | 分 | 中 | 中 | 重要システム |
| **Warm Standby** | 分 | 秒〜分 | 高 | 中 | 高重要システム |
| **Multi-Site Active** | 秒 | 秒 | 最高 | 高 | ミッションクリティカル |

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
      DBInstanceClass: db.t3.micro  # 最小サイズ
      PubliclyAccessible: false
      MultiAZ: false
      StorageEncrypted: true

  # 最小限のAuto Scaling Group
  PilotLightASG:
    Type: AWS::AutoScaling::AutoScalingGroup
    Properties:
      MinSize: 0
      MaxSize: 10
      DesiredCapacity: 0  # 通常時は0
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
      DesiredCount: 2  # 本番の1/3
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

### 3-2-1ルール

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

#### RDS自動バックアップ
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

*次のセクション: [10. 移行戦略](./10-migration.md)*
