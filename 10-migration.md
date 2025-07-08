# 移行戦略

## 目次
1. [移行の基本概念](#移行の基本概念)
2. [6つのR戦略](#6つのr戦略)
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

## 6つのR戦略

### 概要
AWSが提唱するクラウド移行の6つの戦略（6R）。

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
        ImageId: ami-12345678  # 既存アプリケーションAMI
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

#### DMS設定例
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

*この教材は AWS Solution Architect Professional 試験の包括的な学習ガイドです。各分野を深く理解し、実践的な経験を積むことで合格に近づけます。*
