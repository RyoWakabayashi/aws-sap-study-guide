# 移行戦略

## 目次

1. [移行の基本概念](#移行の基本概念)

2. [6 つの R 戦略](#6-つの-r-戦略)

3. [アプリケーション移行](#アプリケーション移行)

4. [データベース移行](#データベース移行)

5. [データ移行](#データ移行)

6. [移行計画・実行](#移行計画実行)

---

## 移行の基本概念

### 移行の動機

#### ビジネス要因

```
コスト削減:

- CapEx から OpEx への転換

- インフラ運用コスト削減

- ライセンス費用最適化

俊敏性向上:

- 迅速なリソース調達

- 自動スケーリング

- グローバル展開

イノベーション促進:

- 最新技術へのアクセス

- AI/ML サービス活用

- サーバーレス技術

```

#### 技術要因

```
レガシーシステム:

- 老朽化したハードウェア

- サポート終了OS/ミドルウェア

- 保守性の低下

可用性・信頼性:

- 単一障害点の排除

- 災害復旧能力向上

- SLA改善

セキュリティ:

- 最新セキュリティ機能

- コンプライアンス対応

- 脅威対策強化

```

### 移行の課題

#### 技術的課題

```
アプリケーション依存関係:

- 複雑な相互依存

- レガシー技術

- カスタマイズ部分

データ移行:

- 大容量データ

- ダウンタイム制約

- データ整合性

パフォーマンス:

- ネットワークレイテンシ

- 処理能力差異

- 最適化不足

```

#### 組織的課題

```
スキル不足:

- クラウド技術知識

- 運用ノウハウ

- セキュリティ理解

変更管理:

- 組織文化

- プロセス変更

- 抵抗勢力

ガバナンス:

- 責任分界

- 承認プロセス

- コンプライアンス

```

### 公式リソース

- [AWS Migration Hub](https://aws.amazon.com/migration-hub/)

- [AWS Cloud Adoption Framework](https://aws.amazon.com/professional-services/CAF/)

---

## 6 つの R 戦略

### 概要

AWS が提唱するクラウド移行の 6 つの戦略（6R）。

### 1. Rehost (Lift and Shift)

#### 特徴

```
アプローチ:

- 既存システムをそのままクラウドに移行

- 最小限の変更

- 迅速な移行

利点:

- 短期間での移行

- 低リスク

- 即座にクラウドメリット享受

欠点:

- クラウドネイティブ機能未活用

- 最適化不足

- 長期的コスト効率低下

```

#### 実装例

```bash
# AWS Application Migration Service (MGN)
# 1. レプリケーションエージェントインストール
sudo ./aws-replication-installer-init.py --region us-east-1 --aws-access-key-id AKIA... --aws-secret-access-key ...

# 2. 継続的レプリケーション開始
# MGNコンソールで設定

# 3. テストインスタンス起動
aws mgn start-test --source-server-id s-1234567890abcdef0

# 4. カットオーバー実行
aws mgn start-cutover --source-server-id s-1234567890abcdef0

```

### 2. Replatform (Lift, Tinker, and Shift)

#### 特徴

```

アプローチ:

- 基本アーキテクチャは維持

- クラウドサービスを部分活用

- 段階的最適化

例:

- オンプレミスDB → RDS

- 自前ロードバランサー → ELB

- 物理サーバー → EC2

```

#### 実装例

```yaml
# データベースをRDSに移行
Resources:
  Database:
    Type: AWS::RDS::DBInstance
    Properties:
      DBInstanceIdentifier: migrated-database
      DBInstanceClass: db.r5.xlarge
      Engine: mysql
      EngineVersion: 8.0.35
      AllocatedStorage: 100
      StorageType: gp3
      MultiAZ: true
      BackupRetentionPeriod: 7
      VPCSecurityGroups:
        - !Ref DatabaseSecurityGroup

  # アプリケーションサーバーはEC2のまま
  LaunchTemplate:
    Type: AWS::EC2::LaunchTemplate
    Properties:
      LaunchTemplateName: app-server-template
      LaunchTemplateData:
        ImageId: ami-12345678 # 既存アプリケーションAMI
        InstanceType: m5.large
        SecurityGroupIds:
          - !Ref ApplicationSecurityGroup

        UserData:
          Fn::Base64: !Sub |
            #!/bin/bash
            # 既存アプリケーション設定
            # データベース接続先をRDSに変更
            sed -i 's/old-db-host/${Database.Endpoint.Address}/g' /etc/app/config.ini
            systemctl restart application
```

### 3. Repurchase (Drop and Shop)

#### 特徴

```
アプローチ:

- 既存ソフトウェアを廃止

- SaaSソリューションに移行

- ライセンス体系変更

例:

- オンプレミスCRM → Salesforce

- 自社メールサーバー → Office 365

- オンプレミスERP → SAP on AWS

```

#### 移行計画例

```python
def create_repurchase_plan():
    """Repurchase移行計画"""

    migration_plan = {
        'current_system': {
            'email_server': {
                'type': 'On-premises Exchange',
                'users': 500,
                'storage': '2TB',
                'annual_cost': 50000
            },
            'crm_system': {
                'type': 'Custom CRM',
                'users': 100,
                'maintenance_cost': 30000
            }
        },
        'target_system': {
            'email_service': {
                'type': 'Microsoft 365',
                'users': 500,
                'annual_cost': 30000,
                'migration_effort': '2 months'
            },
            'crm_service': {
                'type': 'Salesforce',
                'users': 100,
                'annual_cost': 24000,
                'migration_effort': '4 months'
            }
        },
        'benefits': {
            'cost_savings': 26000,  # 年間
            'reduced_maintenance': True,
            'improved_features': True,
            'automatic_updates': True
        }
    }

    return migration_plan

```

### 4. Refactor (Re-architect)

#### 特徴

```

アプローチ:

- アーキテクチャを根本的に変更

- クラウドネイティブ設計

- 最大限のクラウドメリット活用

例:

- モノリス → マイクロサービス

- 従来型 → サーバーレス

- RDBMS → NoSQL

```

#### 実装例

```yaml
# モノリスからマイクロサービスへ
Resources:
  # API Gateway
  ApiGateway:
    Type: AWS::ApiGateway::RestApi
    Properties:
      Name: MicroservicesAPI
      EndpointConfiguration:
        Types:
          - REGIONAL

  # User Service (Lambda)
  UserService:
    Type: AWS::Lambda::Function
    Properties:
      FunctionName: user-service
      Runtime: python3.9
      Handler: user_service.lambda_handler
      Code:
        ZipFile: |
          import json
          import boto3

          def lambda_handler(event, context):
              # ユーザー管理ロジック
              return {
                  'statusCode': 200,
                  'body': json.dumps({'message': 'User service'})
              }

  # Order Service (Lambda)
  OrderService:
    Type: AWS::Lambda::Function
    Properties:
      FunctionName: order-service
      Runtime: python3.9
      Handler: order_service.lambda_handler

  # DynamoDB Tables
  UserTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: Users
      BillingMode: PAY_PER_REQUEST
      AttributeDefinitions:
        - AttributeName: userId

          AttributeType: S
      KeySchema:
        - AttributeName: userId

          KeyType: HASH

  OrderTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: Orders
      BillingMode: PAY_PER_REQUEST
      AttributeDefinitions:
        - AttributeName: orderId

          AttributeType: S
      KeySchema:
        - AttributeName: orderId

          KeyType: HASH
```

### 5. Retire

#### 特徴

```
アプローチ:

- 不要なシステムを廃止

- 重複機能の統合

- コスト削減

判断基準:

- 利用率が低い

- 代替手段がある

- 保守コストが高い

- ビジネス価値が低い

```

#### 廃止計画例

```python
def create_retirement_plan():
    """システム廃止計画"""

    systems_analysis = {
        'legacy_reporting_system': {
            'usage': '月1回のみ',
            'users': 3,
            'maintenance_cost': 10000,
            'decision': 'RETIRE',
            'alternative': 'QuickSight dashboard',
            'timeline': '3 months'
        },
        'old_backup_system': {
            'usage': '重複機能',
            'maintenance_cost': 15000,
            'decision': 'RETIRE',
            'alternative': 'AWS Backup',
            'timeline': '2 months'
        },
        'test_environment_1': {
            'usage': '未使用',
            'cost': 5000,
            'decision': 'RETIRE',
            'timeline': '1 month'
        }
    }

    total_savings = sum(
        system['maintenance_cost'] if 'maintenance_cost' in system
        else system.get('cost', 0)
        for system in systems_analysis.values()
    )

    return {
        'systems': systems_analysis,
        'total_annual_savings': total_savings,
        'timeline': '6 months'
    }

```

### 6. Retain

#### 特徴

```

アプローチ:

- 現状維持

- 移行を延期

- 段階的移行の一部

理由:

- 技術的制約

- コンプライアンス要件

- ビジネス継続性

- ROI不足

```

#### 保持判断例

```python
def retention_analysis():
    """保持判断分析"""

    systems = {
        'mainframe_system': {
            'reason': 'Critical business system',
            'migration_cost': 5000000,
            'migration_risk': 'HIGH',
            'decision': 'RETAIN',
            'review_date': '2025-12-31'
        },
        'compliance_system': {
            'reason': 'Regulatory requirements',
            'compliance_period': '7 years',
            'decision': 'RETAIN',
            'review_date': '2026-06-30'
        },
        'legacy_integration': {
            'reason': 'Complex dependencies',
            'refactor_effort': '18 months',
            'decision': 'RETAIN',
            'migration_plan': 'Phase 2'
        }
    }

    return systems

```

---

## アプリケーション移行

### 移行パターン

#### Strangler Fig Pattern

```
概念:

- 新システムで既存機能を段階的に置換

- 古いシステムを徐々に「絞め殺す」

- リスク分散、段階的移行

実装:

1. プロキシレイヤー導入

2. 機能単位で新システムに移行

3. 古いシステムの機能を段階的に停止

```

#### Database-per-Service Pattern

```
概念:

- マイクロサービス毎に専用データベース

- データの独立性確保

- 技術選択の自由度

課題:

- データ整合性

- トランザクション管理

- データ結合の複雑化

```

### AWS Application Migration Service

#### 設定手順

```bash
# 1. IAMロール作成
aws iam create-role --role-name MGNRole --assume-role-policy-document file://trust-policy.json

# 2. ポリシーアタッチ
aws iam attach-role-policy --role-name MGNRole --policy-arn arn:aws:iam::aws:policy/MGNAgentPolicy

# 3. レプリケーション設定テンプレート作成
aws mgn create-replication-configuration-template \
    --associate-default-security-group \
    --bandwidth-throttling 0 \
    --create-public-ip false \
    --data-plane-routing PRIVATE_IP \
    --default-large-staging-disk-type GP3 \
    --ebs-encryption DEFAULT \
    --replication-server-instance-type m5.large \
    --replication-servers-security-groups-i-ds sg-12345678 \
    --subnet-id subnet-12345678 \
    --use-dedicated-replication-server false

# 4. 起動設定テンプレート作成
aws mgn create-launch-configuration-template \
    --launch-template-name "Migration-Template" \
    --launch-template-data file://launch-template.json

```

### コンテナ化移行

#### App2Container

```bash
# 1. App2Container インストール
curl -o AWSApp2Container-installer-linux.tar.gz https://app2container-release-us-east-1.s3.us-east-1.amazonaws.com/latest/linux/AWSApp2Container-installer-linux.tar.gz
tar xvf AWSApp2Container-installer-linux.tar.gz
sudo ./install.sh

# 2. 初期化
sudo app2container init

# 3. アプリケーション検出
sudo app2container inventory

# 4. アプリケーション分析
sudo app2container analyze --application-id java-app-12345

# 5. コンテナ化
sudo app2container containerize --application-id java-app-12345

# 6. デプロイメント生成
sudo app2container generate app-deployment --application-id java-app-12345

# 7. デプロイ
sudo app2container deploy --application-id java-app-12345

```

---

## データベース移行

### AWS Database Migration Service (DMS)

#### 移行タイプ

##### 同種データベース移行

```
Oracle → Oracle on RDS:

- 構造・データ型互換

- 最小限の変更

- 高い成功率

MySQL → Aurora MySQL:

- MySQL互換性活用

- 性能向上

- 管理負荷軽減

```

##### 異種データベース移行

```
Oracle → PostgreSQL:

- Schema Conversion Tool使用

- データ型変換

- ストアドプロシージャ変換

SQL Server → Aurora MySQL:

- アプリケーション変更必要

- パフォーマンステスト重要

- 段階的移行推奨

```

#### DMS 設定例

```json
{
  "ReplicationInstanceIdentifier": "dms-migration-instance",
  "ReplicationInstanceClass": "dms.r5.xlarge",
  "AllocatedStorage": 100,
  "VpcSecurityGroupIds": ["sg-12345678"],
  "ReplicationSubnetGroupIdentifier": "dms-subnet-group",
  "MultiAZ": true,
  "PubliclyAccessible": false,
  "EngineVersion": "3.4.7"
}
```

#### エンドポイント設定

```json
{
  "EndpointIdentifier": "source-oracle-endpoint",
  "EndpointType": "source",
  "EngineName": "oracle",
  "Username": "dms_user",
  "Password": "password123",
  "ServerName": "oracle.example.com",
  "Port": 1521,
  "DatabaseName": "ORCL",
  "OracleSettings": {
    "AsmPassword": "password123",
    "AsmServer": "oracle-asm.example.com",
    "AsmUser": "asm_user"
  }
}
```

### Schema Conversion Tool (SCT)

#### 使用手順

```bash
# 1. SCTダウンロード・インストール
# AWS SCTをダウンロードしてインストール

# 2. プロジェクト作成
# GUI でプロジェクト作成

# 3. ソースデータベース接続
# Oracle接続情報入力

# 4. ターゲットデータベース選択
# PostgreSQL選択

# 5. スキーマ変換実行
# 自動変換 + 手動調整

# 6. 変換レポート確認
# 変換不可項目の確認・対応

# 7. スクリプト生成・実行
# DDLスクリプト生成・実行

```

#### 変換例

```sql
-- Oracle (変換前)
CREATE TABLE employees (
    emp_id NUMBER(10) PRIMARY KEY,
    emp_name VARCHAR2(100) NOT NULL,
    hire_date DATE DEFAULT SYSDATE,
    salary NUMBER(10,2),
    dept_id NUMBER(10),
    CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- PostgreSQL (変換後)
CREATE TABLE employees (
    emp_id INTEGER PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    hire_date DATE DEFAULT CURRENT_DATE,
    salary DECIMAL(10,2),
    dept_id INTEGER,
    CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

```

### データベース移行戦略

#### 最小ダウンタイム移行

```python
def minimal_downtime_migration():
    """最小ダウンタイム移行手順"""

    steps = [
        {
            'phase': 'Phase 1: 準備',
            'tasks': [
                'DMSレプリケーションインスタンス作成',
                'ソース・ターゲットエンドポイント設定',
                'セキュリティグループ設定',
                'IAMロール設定'
            ],
            'duration': '1-2 days',
            'downtime': '0 minutes'
        },
        {
            'phase': 'Phase 2: フルロード',
            'tasks': [
                'DMSタスク作成（フルロード）',
                '初期データ移行実行',
                'データ整合性確認',
                'パフォーマンステスト'
            ],
            'duration': '1-3 days',
            'downtime': '0 minutes'
        },
        {
            'phase': 'Phase 3: CDC開始',
            'tasks': [
                'Change Data Capture有効化',
                '継続的レプリケーション開始',
                'レプリケーション遅延監視',
                'アプリケーションテスト'
            ],
            'duration': '1-2 weeks',
            'downtime': '0 minutes'
        },
        {
            'phase': 'Phase 4: カットオーバー',
            'tasks': [
                'アプリケーション停止',
                '最終データ同期確認',
                'DNS/接続文字列変更',
                'アプリケーション再開'
            ],
            'duration': '2-4 hours',
            'downtime': '30-60 minutes'
        }
    ]

    return steps

```

---

## データ移行

### データ移行の種類

#### オンライン移行

```
特徴:
- システム稼働中に実行
- 最小ダウンタイム
- 継続的データ同期

適用場面:
- ミッションクリティカルシステム
- 24/7稼働要件
- 大容量データベース

技術:
- AWS DMS
- Change Data Capture (CDC)
- レプリケーション技術
```

#### オフライン移行

```
特徴:
- システム停止中に実行
- 完全データ整合性
- シンプルな手順

適用場面:
- メンテナンス窓口利用可能
- 小〜中規模データ
- 複雑な依存関係

技術:
- データベースダンプ/リストア
- ファイル転送
- スナップショット移行
```

### 大容量データ移行

#### AWS DataSync

```bash
# DataSyncエージェント設定
aws datasync create-agent \
    --agent-name "OnPremiseAgent" \
    --activation-key "ABCDEF123456"

# ソースロケーション作成（オンプレミス）
aws datasync create-location-nfs \
    --server-hostname "nfs.example.com" \
    --subdirectory "/data" \
    --on-prem-config AgentArns=["arn:aws:datasync:us-east-1:123456789012:agent/agent-12345"]

# ターゲットロケーション作成（S3）
aws datasync create-location-s3 \
    --s3-bucket-arn "arn:aws:s3:::migration-bucket" \
    --s3-config BucketAccessRoleArn="arn:aws:iam::123456789012:role/DataSyncS3Role"

# タスク作成
aws datasync create-task \
    --source-location-arn "arn:aws:datasync:us-east-1:123456789012:location/loc-source123" \
    --destination-location-arn "arn:aws:datasync:us-east-1:123456789012:location/loc-dest456" \
    --name "DataMigrationTask"

# タスク実行
aws datasync start-task-execution \
    --task-arn "arn:aws:datasync:us-east-1:123456789012:task/task-789"
```

#### AWS Snow Family

##### Snowball Edge

```python
def snowball_migration_plan():
    """Snowball Edge移行計画"""
    
    migration_scenarios = {
        'large_dataset': {
            'data_size': '80TB',
            'device': 'Snowball Edge Storage Optimized',
            'capacity': '80TB usable',
            'transfer_time': '10 days',
            'shipping_time': '4-6 days',
            'total_time': '2-3 weeks'
        },
        'compute_migration': {
            'data_size': '40TB',
            'device': 'Snowball Edge Compute Optimized',
            'capacity': '42TB usable',
            'compute': 'EC2 instances',
            'use_case': 'データ処理 + 移行'
        },
        'continuous_migration': {
            'device': 'Snowcone',
            'capacity': '8TB',
            'connectivity': 'Online/Offline',
            'use_case': '継続的データ同期'
        }
    }
    
    return migration_scenarios

# Snowball Edge使用手順
def snowball_workflow():
    """Snowball Edge ワークフロー"""
    
    workflow = [
        {
            'step': '1. デバイス注文',
            'tasks': [
                'AWS コンソールでジョブ作成',
                'データ転送先S3バケット指定',
                'IAMロール設定',
                '配送先住所指定'
            ]
        },
        {
            'step': '2. デバイス受領・設定',
            'tasks': [
                'デバイス開梱・接続',
                'Snowball Clientインストール',
                'デバイスのアンロック',
                'ネットワーク設定'
            ]
        },
        {
            'step': '3. データ転送',
            'tasks': [
                'Snowball Clientでデータコピー',
                '転送進捗監視',
                'データ整合性確認',
                'ログ確認'
            ]
        },
        {
            'step': '4. デバイス返送',
            'tasks': [
                'データ転送完了確認',
                'デバイスシャットダウン',
                '返送ラベル貼付',
                '配送業者に引き渡し'
            ]
        },
        {
            'step': '5. データインポート',
            'tasks': [
                'AWS でのデータ処理',
                'S3へのインポート完了',
                'データ検証',
                'デバイスデータ消去確認'
            ]
        }
    ]
    
    return workflow
```

### ストレージ移行

#### AWS Storage Gateway

```yaml
# Storage Gateway設定例
Resources:
  StorageGateway:
    Type: AWS::StorageGateway::Gateway
    Properties:
      GatewayName: HybridStorageGateway
      GatewayType: FILE_S3
      GatewayTimezone: GMT+9:00
      
  FileShare:
    Type: AWS::StorageGateway::NFSFileShare
    Properties:
      GatewayARN: !Ref StorageGateway
      LocationARN: !Sub "arn:aws:s3:::${MigrationBucket}"
      Role: !GetAtt StorageGatewayRole.Arn
      ClientList:
        - "10.0.0.0/8"
      DefaultStorageClass: S3_STANDARD_IA
      GuessMIMETypeEnabled: true
      
  MigrationBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: storage-migration-bucket
      VersioningConfiguration:
        Status: Enabled
      LifecycleConfiguration:
        Rules:
          - Id: TransitionToIA
            Status: Enabled
            Transition:
              StorageClass: STANDARD_IA
              TransitionInDays: 30
          - Id: TransitionToGlacier
            Status: Enabled
            Transition:
              StorageClass: GLACIER
              TransitionInDays: 90
```

#### EFS移行

```bash
# EFS Utilsインストール
sudo yum install -y amazon-efs-utils

# 既存データをEFSにマウント
sudo mkdir /mnt/efs
sudo mount -t efs fs-12345678:/ /mnt/efs

# データ同期（rsync使用）
rsync -avz --progress /source/data/ /mnt/efs/

# パフォーマンス監視
aws efs describe-file-systems --file-system-id fs-12345678
aws cloudwatch get-metric-statistics \
    --namespace AWS/EFS \
    --metric-name TotalIOBytes \
    --dimensions Name=FileSystemId,Value=fs-12345678 \
    --start-time 2024-01-01T00:00:00Z \
    --end-time 2024-01-02T00:00:00Z \
    --period 3600 \
    --statistics Sum
```

### データ整合性確保

#### チェックサム検証

```python
import hashlib
import boto3

def verify_data_integrity():
    """データ整合性検証"""
    
    def calculate_file_checksum(file_path):
        """ファイルのチェックサム計算"""
        hash_md5 = hashlib.md5()
        with open(file_path, "rb") as f:
            for chunk in iter(lambda: f.read(4096), b""):
                hash_md5.update(chunk)
        return hash_md5.hexdigest()
    
    def verify_s3_object(bucket, key, expected_checksum):
        """S3オブジェクトの整合性確認"""
        s3 = boto3.client('s3')
        
        # オブジェクトのETagを取得
        response = s3.head_object(Bucket=bucket, Key=key)
        etag = response['ETag'].strip('"')
        
        # マルチパートアップロードでない場合、ETagはMD5ハッシュ
        if '-' not in etag:
            return etag == expected_checksum
        else:
            # マルチパートの場合は別途検証が必要
            return verify_multipart_checksum(bucket, key, expected_checksum)
    
    def verify_multipart_checksum(bucket, key, expected_checksum):
        """マルチパートアップロードの検証"""
        s3 = boto3.client('s3')
        
        # オブジェクトをダウンロードしてチェックサム計算
        response = s3.get_object(Bucket=bucket, Key=key)
        content = response['Body'].read()
        
        actual_checksum = hashlib.md5(content).hexdigest()
        return actual_checksum == expected_checksum
    
    return {
        'calculate_checksum': calculate_file_checksum,
        'verify_s3': verify_s3_object,
        'verify_multipart': verify_multipart_checksum
    }
```

---

## 移行計画・実行

### 移行プロジェクト管理

#### 移行フェーズ

```python
def migration_phases():
    """移行プロジェクトフェーズ"""
    
    phases = {
        'phase_1_assessment': {
            'name': '現状評価・計画',
            'duration': '4-8 weeks',
            'deliverables': [
                'アプリケーション棚卸し',
                '依存関係マップ',
                'リスク評価',
                '移行戦略決定',
                'ROI分析'
            ],
            'key_activities': [
                'Discovery & Assessment',
                'Application Portfolio Analysis',
                'Migration Strategy Selection',
                'Business Case Development'
            ]
        },
        'phase_2_design': {
            'name': '設計・準備',
            'duration': '6-12 weeks',
            'deliverables': [
                'ターゲットアーキテクチャ',
                '移行計画書',
                'テスト計画',
                'ロールバック計画',
                'セキュリティ設計'
            ],
            'key_activities': [
                'Target Architecture Design',
                'Migration Runbook Creation',
                'Security & Compliance Review',
                'Testing Strategy Development'
            ]
        },
        'phase_3_pilot': {
            'name': 'パイロット移行',
            'duration': '2-4 weeks',
            'deliverables': [
                'パイロット結果レポート',
                '課題・対策リスト',
                '手順書改善版',
                'パフォーマンス評価'
            ],
            'key_activities': [
                'Pilot Application Migration',
                'Process Validation',
                'Performance Testing',
                'Issue Resolution'
            ]
        },
        'phase_4_migration': {
            'name': '本格移行',
            'duration': '12-24 weeks',
            'deliverables': [
                '移行完了レポート',
                '運用手順書',
                'ナレッジ移転',
                'コスト最適化提案'
            ],
            'key_activities': [
                'Wave-based Migration',
                'Continuous Monitoring',
                'Issue Management',
                'Optimization Implementation'
            ]
        },
        'phase_5_optimization': {
            'name': '最適化・運用移管',
            'duration': '4-8 weeks',
            'deliverables': [
                '最適化レポート',
                '運用移管完了',
                'ベストプラクティス',
                'プロジェクト完了報告'
            ],
            'key_activities': [
                'Performance Optimization',
                'Cost Optimization',
                'Operations Handover',
                'Knowledge Transfer'
            ]
        }
    }
    
    return phases
```

#### Wave計画

```python
def create_migration_waves():
    """移行Wave計画作成"""
    
    wave_criteria = {
        'complexity': ['Low', 'Medium', 'High'],
        'business_criticality': ['Low', 'Medium', 'High', 'Critical'],
        'dependencies': ['None', 'Few', 'Many', 'Complex'],
        'data_size': ['Small', 'Medium', 'Large', 'Very Large'],
        'downtime_tolerance': ['High', 'Medium', 'Low', 'None']
    }
    
    wave_strategy = {
        'wave_1': {
            'name': 'Quick Wins',
            'criteria': {
                'complexity': 'Low',
                'business_criticality': 'Low',
                'dependencies': 'None',
                'data_size': 'Small'
            },
            'applications': [
                'Static websites',
                'Development environments',
                'Non-critical batch jobs'
            ],
            'duration': '2-4 weeks',
            'risk': 'Low'
        },
        'wave_2': {
            'name': 'Standard Applications',
            'criteria': {
                'complexity': 'Medium',
                'business_criticality': 'Medium',
                'dependencies': 'Few',
                'data_size': 'Medium'
            },
            'applications': [
                'Internal tools',
                'Reporting systems',
                'Secondary databases'
            ],
            'duration': '4-8 weeks',
            'risk': 'Medium'
        },
        'wave_3': {
            'name': 'Complex Systems',
            'criteria': {
                'complexity': 'High',
                'business_criticality': 'High',
                'dependencies': 'Many',
                'data_size': 'Large'
            },
            'applications': [
                'ERP systems',
                'Customer-facing applications',
                'Core databases'
            ],
            'duration': '8-16 weeks',
            'risk': 'High'
        },
        'wave_4': {
            'name': 'Mission Critical',
            'criteria': {
                'complexity': 'High',
                'business_criticality': 'Critical',
                'dependencies': 'Complex',
                'downtime_tolerance': 'None'
            },
            'applications': [
                'Core banking systems',
                'Trading platforms',
                'Real-time systems'
            ],
            'duration': '12-24 weeks',
            'risk': 'Very High'
        }
    }
    
    return wave_strategy
```

### リスク管理

#### リスク評価マトリックス

```python
def risk_assessment_matrix():
    """リスク評価マトリックス"""
    
    risk_categories = {
        'technical_risks': {
            'application_compatibility': {
                'probability': 'Medium',
                'impact': 'High',
                'mitigation': [
                    'Thorough compatibility testing',
                    'Pilot migration',
                    'Fallback procedures'
                ]
            },
            'data_loss': {
                'probability': 'Low',
                'impact': 'Very High',
                'mitigation': [
                    'Multiple backup strategies',
                    'Data validation procedures',
                    'Rollback capabilities'
                ]
            },
            'performance_degradation': {
                'probability': 'Medium',
                'impact': 'Medium',
                'mitigation': [
                    'Performance testing',
                    'Capacity planning',
                    'Auto-scaling configuration'
                ]
            }
        },
        'business_risks': {
            'service_disruption': {
                'probability': 'Medium',
                'impact': 'High',
                'mitigation': [
                    'Maintenance windows',
                    'Blue-green deployment',
                    'Communication plan'
                ]
            },
            'cost_overrun': {
                'probability': 'High',
                'impact': 'Medium',
                'mitigation': [
                    'Detailed cost estimation',
                    'Regular cost monitoring',
                    'Budget controls'
                ]
            },
            'timeline_delay': {
                'probability': 'High',
                'impact': 'Medium',
                'mitigation': [
                    'Buffer time allocation',
                    'Parallel execution',
                    'Resource scaling'
                ]
            }
        },
        'operational_risks': {
            'skill_gap': {
                'probability': 'High',
                'impact': 'Medium',
                'mitigation': [
                    'Training programs',
                    'External consultants',
                    'Knowledge transfer'
                ]
            },
            'security_vulnerabilities': {
                'probability': 'Medium',
                'impact': 'Very High',
                'mitigation': [
                    'Security assessments',
                    'Compliance validation',
                    'Security monitoring'
                ]
            }
        }
    }
    
    return risk_categories
```

### テスト戦略

#### テストフェーズ

```python
def testing_strategy():
    """移行テスト戦略"""
    
    test_phases = {
        'unit_testing': {
            'scope': 'Individual components',
            'timing': 'During development',
            'tools': ['JUnit', 'pytest', 'Mocha'],
            'criteria': [
                'Code coverage > 80%',
                'All unit tests pass',
                'No critical bugs'
            ]
        },
        'integration_testing': {
            'scope': 'Component interactions',
            'timing': 'After unit testing',
            'tools': ['Postman', 'SoapUI', 'REST Assured'],
            'criteria': [
                'API contracts validated',
                'Data flow verified',
                'Error handling tested'
            ]
        },
        'system_testing': {
            'scope': 'End-to-end functionality',
            'timing': 'Pre-migration',
            'tools': ['Selenium', 'Cypress', 'LoadRunner'],
            'criteria': [
                'All business scenarios work',
                'Performance requirements met',
                'Security controls validated'
            ]
        },
        'user_acceptance_testing': {
            'scope': 'Business validation',
            'timing': 'Pre-production',
            'participants': ['Business users', 'Stakeholders'],
            'criteria': [
                'Business requirements satisfied',
                'User experience acceptable',
                'Sign-off obtained'
            ]
        },
        'production_validation': {
            'scope': 'Live environment',
            'timing': 'Post-migration',
            'tools': ['CloudWatch', 'New Relic', 'Datadog'],
            'criteria': [
                'System stability confirmed',
                'Performance baselines met',
                'No critical issues'
            ]
        }
    }
    
    return test_phases
```

### 移行実行

#### カットオーバー計画

```python
def cutover_plan():
    """カットオーバー実行計画"""
    
    cutover_steps = {
        'pre_cutover': {
            'timeline': 'T-24 hours',
            'activities': [
                'Final data synchronization',
                'Application freeze',
                'Backup verification',
                'Team readiness check',
                'Communication to stakeholders'
            ],
            'checkpoints': [
                'Data sync lag < 5 minutes',
                'All backups completed',
                'Team members available',
                'Rollback procedures tested'
            ]
        },
        'cutover_execution': {
            'timeline': 'T-0 to T+4 hours',
            'activities': [
                'Application shutdown',
                'Final data sync',
                'DNS/Load balancer switch',
                'Application startup',
                'Smoke testing'
            ],
            'checkpoints': [
                'Clean application shutdown',
                'Data consistency verified',
                'Traffic routing confirmed',
                'Core functions working',
                'No critical errors'
            ]
        },
        'post_cutover': {
            'timeline': 'T+4 to T+24 hours',
            'activities': [
                'Full system validation',
                'Performance monitoring',
                'User acceptance confirmation',
                'Issue resolution',
                'Success communication'
            ],
            'checkpoints': [
                'All systems operational',
                'Performance within SLA',
                'Users can access system',
                'No P1/P2 issues',
                'Stakeholder approval'
            ]
        }
    }
    
    rollback_triggers = [
        'Data corruption detected',
        'Critical functionality failure',
        'Performance degradation > 50%',
        'Security breach identified',
        'Business process disruption'
    ]
    
    return {
        'cutover_steps': cutover_steps,
        'rollback_triggers': rollback_triggers
    }
```

### 移行後最適化

#### パフォーマンス最適化

```python
def post_migration_optimization():
    """移行後最適化計画"""
    
    optimization_areas = {
        'compute_optimization': {
            'activities': [
                'Right-sizing instances',
                'Reserved Instance planning',
                'Spot Instance utilization',
                'Auto Scaling configuration'
            ],
            'tools': [
                'AWS Compute Optimizer',
                'CloudWatch metrics',
                'Cost Explorer'
            ],
            'expected_savings': '20-40%'
        },
        'storage_optimization': {
            'activities': [
                'Storage class optimization',
                'Lifecycle policies',
                'Data archiving',
                'Compression implementation'
            ],
            'tools': [
                'S3 Storage Class Analysis',
                'EBS Volume optimization',
                'Storage Gateway'
            ],
            'expected_savings': '30-50%'
        },
        'network_optimization': {
            'activities': [
                'CloudFront implementation',
                'VPC endpoint usage',
                'Direct Connect evaluation',
                'Traffic pattern analysis'
            ],
            'tools': [
                'VPC Flow Logs',
                'CloudFront analytics',
                'Network monitoring'
            ],
            'expected_savings': '10-30%'
        },
        'database_optimization': {
            'activities': [
                'Query optimization',
                'Index tuning',
                'Read replica implementation',
                'Caching strategies'
            ],
            'tools': [
                'RDS Performance Insights',
                'ElastiCache',
                'Database monitoring'
            ],
            'expected_improvement': '2-5x performance'
        }
    }
    
    return optimization_areas
```

### 移行成功指標

#### KPI定義

```python
def migration_kpis():
    """移行成功指標"""
    
    kpis = {
        'technical_kpis': {
            'availability': {
                'target': '99.9%',
                'measurement': 'Uptime monitoring',
                'frequency': 'Real-time'
            },
            'performance': {
                'target': 'Within 10% of baseline',
                'measurement': 'Response time metrics',
                'frequency': 'Continuous'
            },
            'data_integrity': {
                'target': '100%',
                'measurement': 'Checksum validation',
                'frequency': 'Daily'
            }
        },
        'business_kpis': {
            'cost_reduction': {
                'target': '20-30%',
                'measurement': 'Monthly cost comparison',
                'frequency': 'Monthly'
            },
            'time_to_market': {
                'target': '50% improvement',
                'measurement': 'Deployment frequency',
                'frequency': 'Weekly'
            },
            'user_satisfaction': {
                'target': '> 4.0/5.0',
                'measurement': 'User surveys',
                'frequency': 'Quarterly'
            }
        },
        'operational_kpis': {
            'incident_reduction': {
                'target': '40% reduction',
                'measurement': 'Incident count',
                'frequency': 'Monthly'
            },
            'deployment_success': {
                'target': '95%',
                'measurement': 'Successful deployments',
                'frequency': 'Per deployment'
            },
            'recovery_time': {
                'target': '< 4 hours',
                'measurement': 'MTTR tracking',
                'frequency': 'Per incident'
            }
        }
    }
    
    return kpis
```

---

_この教材は AWS Solution Architect Professional 試験の包括的な学習ガイドです。各分野を深く理解し、実践的な経験を積むことで合格に近づけます。_
