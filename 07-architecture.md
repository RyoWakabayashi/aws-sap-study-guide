# アーキテクチャパターン

## 目次

1. [Well-Architected Framework](#well-architected-framework)

2. [マイクロサービスアーキテクチャ](#マイクロサービスアーキテクチャ)

3. [サーバーレスアーキテクチャ](#サーバーレスアーキテクチャ)

4. [データレイクアーキテクチャ](#データレイクアーキテクチャ)

5. [ハイブリッドクラウド](#ハイブリッドクラウド)

6. [マルチリージョン設計](#マルチリージョン設計)

---

## Well-Architected Framework

### 概要

AWS が提唱するクラウドアーキテクチャの設計原則。6 つの柱で構成。

### 6 つの柱

#### 1. 運用上の優秀性 (Operational Excellence)

```
原則:

- 運用をコードとして実行

- 頻繁で小さく可逆的な変更

- 運用手順の定期的な改良

- 障害を予測し、対応手順を準備

- 運用イベントと障害から学習

実装:

- Infrastructure as Code (CloudFormation, CDK)

- CI/CD パイプライン

- 自動化された監視・アラート

- ランブック・プレイブック

- ポストモーテム分析

```

#### 2. セキュリティ (Security)

```
原則:

- 強固なアイデンティティ基盤の実装

- 全レイヤーでのセキュリティ適用

- セキュリティベストプラクティスの自動化

- 転送中・保存中データの保護

- セキュリティイベントへの準備

実装:

- IAM ロールベースアクセス制御

- 多要素認証 (MFA)

- 暗号化 (KMS, SSL/TLS)

- ネットワークセグメンテーション

- セキュリティ監視 (GuardDuty, Security Hub)

```

#### 3. 信頼性 (Reliability)

```
原則:

- 障害からの自動復旧

- 復旧手順のテスト

- 水平スケーリング

- キャパシティの推測停止

- 自動化による変更管理

実装:

- Multi-AZ 配置

- Auto Scaling

- ヘルスチェック・自動復旧

- バックアップ・復旧戦略

- カオスエンジニアリング

```

#### 4. パフォーマンス効率 (Performance Efficiency)

```
原則:

- 最新技術の民主化

- グローバル展開の迅速化

- サーバーレスアーキテクチャの使用

- 実験頻度の向上

- メカニカルシンパシーの考慮

実装:

- 適切なインスタンスタイプ選択

- CDN (CloudFront) 活用

- キャッシュ戦略

- データベース最適化

- パフォーマンス監視・分析

```

#### 5. コスト最適化 (Cost Optimization)

```
原則:

- クラウド財務管理の実装

- 消費モデルの採用

- 全体的な効率の測定

- 差別化につながらない重労働の停止

- 支出の分析と帰属

実装:

- リザーブドインスタンス・Savings Plans

- スポットインスタンス活用

- 適切なサイジング

- ライフサイクル管理

- コスト監視・アラート

```

#### 6. 持続可能性 (Sustainability)

```
原則:

- 影響の理解

- 持続可能性目標の確立

- 使用率の最大化

- より効率的なハードウェア・ソフトウェア

- マネージドサービスの使用

- クラウドワークロードの環境影響削減

実装:

- リソース使用率最適化

- 効率的なアーキテクチャ選択

- データ管理の最適化

- 開発・テスト環境の効率化

```

### 公式リソース

- [Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

- [Well-Architected Tool](https://aws.amazon.com/well-architected-tool/)

---

## マイクロサービスアーキテクチャ

### 概要

アプリケーションを小さな独立したサービスに分割するアーキテクチャパターン。

### 設計原則

#### サービス分割戦略

```
ドメイン駆動設計 (DDD):

- 境界付けられたコンテキスト

- ドメインモデル

- ユビキタス言語

例:
├── User Service
│   ├── ユーザー登録・認証
│   ├── プロフィール管理
│   └── 権限管理
├── Order Service
│   ├── 注文作成・更新
│   ├── 注文履歴
│   └── 注文状態管理
├── Payment Service
│   ├── 決済処理
│   ├── 請求管理
│   └── 返金処理
└── Inventory Service
    ├── 在庫管理
    ├── 商品カタログ
    └── 価格管理

```

#### データ管理

```
Database per Service:

- 各サービスが専用データベース

- データの独立性

- 技術選択の自由度

例:
User Service → RDS (PostgreSQL)
Order Service → DynamoDB
Payment Service → RDS (MySQL)
Inventory Service → DocumentDB

```

### 通信パターン

#### 同期通信

```
REST API:
API Gateway → Lambda → RDS

- HTTP/HTTPS

- リクエスト/レスポンス

- 直接的な依存関係

GraphQL:
AppSync → Lambda → Multiple Data Sources

- 単一エンドポイント

- クライアント主導のデータ取得

- リアルタイム更新

```

#### 非同期通信

```
イベント駆動:
Service A → SNS → Service B
Service A → SQS → Service B
Service A → EventBridge → Service B

利点:

- 疎結合

- 障害分離

- スケーラビリティ

パターン:

- Publish/Subscribe

- Event Sourcing

- CQRS (Command Query Responsibility Segregation)

```

### 実装例

#### API Gateway + Lambda

```yaml
# SAM Template
Resources:
  UserAPI:
    Type: AWS::Serverless::Api
    Properties:
      StageName: prod
      Cors:
        AllowMethods: "'*'"
        AllowHeaders: "'*'"
        AllowOrigin: "'*'"

  UserFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: user-service/
      Handler: app.lambda_handler
      Runtime: python3.9
      Environment:
        Variables:
          USER_TABLE: !Ref UserTable
      Events:
        GetUser:
          Type: Api
          Properties:
            RestApiId: !Ref UserAPI
            Path: /users/{id}
            Method: get
        CreateUser:
          Type: Api
          Properties:
            RestApiId: !Ref UserAPI
            Path: /users
            Method: post

  UserTable:
    Type: AWS::DynamoDB::Table
    Properties:
      BillingMode: PAY_PER_REQUEST
      AttributeDefinitions:
        - AttributeName: userId

          AttributeType: S
      KeySchema:
        - AttributeName: userId

          KeyType: HASH
```

#### ECS + Fargate

```json
{
  "family": "microservice-task",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "executionRoleArn": "arn:aws:iam::account:role/ecsTaskExecutionRole",
  "taskRoleArn": "arn:aws:iam::account:role/ecsTaskRole",
  "containerDefinitions": [
    {
      "name": "user-service",
      "image": "user-service:latest",
      "portMappings": [
        {
          "containerPort": 8080,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "DATABASE_URL",
          "value": "postgresql://user:pass@db.example.com:5432/userdb"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/user-service",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

### サービスメッシュ

#### AWS App Mesh

```yaml
apiVersion: appmesh.k8s.aws/v1beta2
kind: VirtualService
metadata:
  name: user-service
spec:
  awsName: user-service
  provider:
    virtualRouter:
      virtualRouterRef:
        name: user-service-router

---
apiVersion: appmesh.k8s.aws/v1beta2
kind: VirtualRouter
metadata:
  name: user-service-router
spec:
  awsName: user-service-router
  listeners:
    - portMapping:
        port: 8080
        protocol: http
  routes:
    - name: user-service-route

      httpRoute:
        match:
          prefix: /
        action:
          weightedTargets:
            - virtualNodeRef:
                name: user-service-v1
              weight: 90
            - virtualNodeRef:
                name: user-service-v2
              weight: 10
```

### 監視・観測性

#### 分散トレーシング

```python
from aws_xray_sdk.core import xray_recorder
from aws_xray_sdk.core import patch_all
import requests

# AWS SDK自動トレーシング
patch_all()

@xray_recorder.capture('user_service.get_user')
def get_user(user_id):
    # ユーザー情報取得
    user = get_user_from_db(user_id)

    # 他のサービス呼び出し
    orders = call_order_service(user_id)
    payments = call_payment_service(user_id)

    return {
        'user': user,
        'orders': orders,
        'payments': payments
    }

@xray_recorder.capture('user_service.call_order_service')
def call_order_service(user_id):
    response = requests.get(f'https://order-service/users/{user_id}/orders')
    return response.json()

```

#### メトリクス収集

```python
import boto3

cloudwatch = boto3.client('cloudwatch')

def put_custom_metric(metric_name, value, unit='Count'):
    cloudwatch.put_metric_data(
        Namespace='MyApp/UserService',
        MetricData=[
            {
                'MetricName': metric_name,
                'Value': value,
                'Unit': unit,
                'Dimensions': [
                    {
                        'Name': 'Service',
                        'Value': 'UserService'
                    },
                    {
                        'Name': 'Environment',
                        'Value': 'Production'
                    }
                ]
            }
        ]
    )

# 使用例
put_custom_metric('UserRegistrations', 1)
put_custom_metric('ResponseTime', 150, 'Milliseconds')

```

---

## サーバーレスアーキテクチャ

### 概要

サーバー管理が不要なアーキテクチャ。イベント駆動、従量課金。

### 基本パターン

#### Web アプリケーション

```

CloudFront → S3 (静的コンテンツ)
CloudFront → API Gateway → Lambda → DynamoDB

利点:

- 自動スケーリング

- 高可用性

- 低運用コスト

- グローバル配信

```

#### データ処理パイプライン

```

S3 → Lambda → DynamoDB
S3 → Lambda → SQS → Lambda → RDS
Kinesis → Lambda → S3 → Athena

利点:

- リアルタイム処理

- 並列処理

- 障害分離

- コスト効率

```

### 実装例

#### REST API

```python
import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Users')

def lambda_handler(event, context):
    http_method = event['httpMethod']
    path = event['path']

    try:
        if http_method == 'GET' and path.startswith('/users/'):
            user_id = path.split('/')[-1]
            return get_user(user_id)
        elif http_method == 'POST' and path == '/users':
            user_data = json.loads(event['body'])
            return create_user(user_data)
        elif http_method == 'PUT' and path.startswith('/users/'):
            user_id = path.split('/')[-1]
            user_data = json.loads(event['body'])
            return update_user(user_id, user_data)
        elif http_method == 'DELETE' and path.startswith('/users/'):
            user_id = path.split('/')[-1]
            return delete_user(user_id)
        else:
            return {
                'statusCode': 404,
                'body': json.dumps({'error': 'Not Found'})
            }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }

def get_user(user_id):
    response = table.get_item(Key={'userId': user_id})
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'], default=decimal_default)
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps({'error': 'User not found'})
        }

def decimal_default(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError

```

#### イベント処理

```python
import json
import boto3

sns = boto3.client('sns')
ses = boto3.client('ses')

def lambda_handler(event, context):
    for record in event['Records']:
        # DynamoDB Streams イベント
        if record['eventSource'] == 'aws:dynamodb':
            process_dynamodb_event(record)
        # S3 イベント
        elif record['eventSource'] == 'aws:s3':
            process_s3_event(record)
        # SQS イベント
        elif record['eventSource'] == 'aws:sqs':
            process_sqs_event(record)

def process_dynamodb_event(record):
    event_name = record['eventName']

    if event_name == 'INSERT':
        # 新規ユーザー登録時の処理
        new_image = record['dynamodb']['NewImage']
        user_email = new_image['email']['S']

        # ウェルカムメール送信
        send_welcome_email(user_email)

        # 通知送信
        send_notification('New user registered', user_email)

def send_welcome_email(email):
    ses.send_email(
        Source='noreply@example.com',
        Destination={'ToAddresses': [email]},
        Message={
            'Subject': {'Data': 'Welcome to our service!'},
            'Body': {'Text': {'Data': 'Thank you for registering.'}}
        }
    )

def send_notification(subject, message):
    sns.publish(
        TopicArn='arn:aws:sns:region:account:notifications',
        Subject=subject,
        Message=message
    )

```

### Step Functions

#### ワークフロー定義

```json
{
  "Comment": "User registration workflow",
  "StartAt": "ValidateInput",
  "States": {
    "ValidateInput": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:region:account:function:ValidateUser",
      "Next": "CheckDuplicateUser",
      "Catch": [
        {
          "ErrorEquals": ["ValidationError"],
          "Next": "ValidationFailed"
        }
      ]
    },
    "CheckDuplicateUser": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:region:account:function:CheckDuplicate",
      "Next": "CreateUser",
      "Catch": [
        {
          "ErrorEquals": ["DuplicateUserError"],
          "Next": "DuplicateUserFound"
        }
      ]
    },
    "CreateUser": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:region:account:function:CreateUser",
      "Next": "SendWelcomeEmail"
    },
    "SendWelcomeEmail": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:region:account:function:SendEmail",
      "Next": "RegistrationComplete"
    },
    "RegistrationComplete": {
      "Type": "Succeed"
    },
    "ValidationFailed": {
      "Type": "Fail",
      "Cause": "Input validation failed"
    },
    "DuplicateUserFound": {
      "Type": "Fail",
      "Cause": "User already exists"
    }
  }
}
```

### パフォーマンス最適化

#### コールドスタート対策

```python
import json
import boto3

# グローバル変数（コンテナ再利用時に効果）
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Users')

def lambda_handler(event, context):
    # 処理ロジック
    pass

# Provisioned Concurrency設定
# aws lambda put-provisioned-concurrency-config \
#     --function-name MyFunction \
#     --qualifier $LATEST \
#     --provisioned-concurrency-level 10

```

#### 接続プーリング

```python
import pymysql
import os

# 接続プール（グローバル変数）
connection = None

def get_connection():
    global connection
    if connection is None or not connection.open:
        connection = pymysql.connect(
            host=os.environ['DB_HOST'],
            user=os.environ['DB_USER'],
            password=os.environ['DB_PASSWORD'],
            database=os.environ['DB_NAME'],
            charset='utf8mb4'
        )
    return connection

def lambda_handler(event, context):
    conn = get_connection()
    # データベース処理

```

---

## データレイクアーキテクチャ

### 概要

構造化・非構造化データを統合的に保存・分析するアーキテクチャ。

### レイヤー構造

#### Raw Layer (Bronze)

```
目的: 生データの保存
形式: 元の形式のまま
保存先: S3
パーティション: 日付、ソース別

例:
s3://datalake-raw/
├── web-logs/year=2023/month=12/day=01/
├── database-exports/year=2023/month=12/day=01/
├── iot-data/year=2023/month=12/day=01/
└── social-media/year=2023/month=12/day=01/

```

#### Processed Layer (Silver)

```
目的: クリーニング・変換済みデータ
形式: Parquet、ORC
保存先: S3
最適化: 圧縮、列指向

例:
s3://datalake-processed/
├── web-analytics/year=2023/month=12/day=01/
├── customer-data/year=2023/month=12/day=01/
├── transaction-data/year=2023/month=12/day=01/
└── sensor-data/year=2023/month=12/day=01/

```

#### Curated Layer (Gold)

```
目的: ビジネス用データマート
形式: 高度に最適化
保存先: S3、Redshift
用途: BI、レポート、ML

例:
s3://datalake-curated/
├── sales-dashboard/
├── customer-360/
├── financial-reports/
└── ml-features/

```

### データ取り込み

#### バッチ取り込み

```python
import boto3
import pandas as pd
from datetime import datetime

def lambda_handler(event, context):
    s3 = boto3.client('s3')
    glue = boto3.client('glue')

    # データソースから取得
    data = extract_from_database()

    # S3に保存
    current_date = datetime.now()
    s3_key = f"raw-data/year={current_date.year}/month={current_date.month:02d}/day={current_date.day:02d}/data.parquet"

    # Parquet形式で保存
    df = pd.DataFrame(data)
    df.to_parquet(f's3://my-datalake/{s3_key}')

    # Glue Crawler実行
    glue.start_crawler(Name='raw-data-crawler')

    return {'statusCode': 200}

def extract_from_database():
    # データベースからデータ抽出
    pass

```

#### ストリーミング取り込み

```yaml
# Kinesis Data Firehose設定
Resources:
  DeliveryStream:
    Type: AWS::KinesisFirehose::DeliveryStream
    Properties:
      DeliveryStreamName: web-logs-stream
      DeliveryStreamType: DirectPut
      S3DestinationConfiguration:
        BucketARN: !Sub "${DataLakeBucket}"
        Prefix: "web-logs/year=!{timestamp:yyyy}/month=!{timestamp:MM}/day=!{timestamp:dd}/"
        ErrorOutputPrefix: "errors/"
        BufferingHints:
          SizeInMBs: 128
          IntervalInSeconds: 60
        CompressionFormat: GZIP
        DataFormatConversionConfiguration:
          Enabled: true
          OutputFormatConfiguration:
            Serializer:
              ParquetSerDe: {}
        ProcessingConfiguration:
          Enabled: true
          Processors:
            - Type: Lambda

              Parameters:
                - ParameterName: LambdaArn

                  ParameterValue: !GetAtt DataTransformFunction.Arn
```

### ETL 処理

#### AWS Glue

```python
import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job

args = getResolvedOptions(sys.argv, ['JOB_NAME'])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args['JOB_NAME'], args)

# データソース読み込み
datasource = glueContext.create_dynamic_frame.from_catalog(
    database="datalake_raw",
    table_name="web_logs"
)

# データ変換
# 不要な列を削除
transformed = DropFields.apply(
    frame=datasource,
    paths=["internal_field", "debug_info"]
)

# データ型変換
transformed = ResolveChoice.apply(
    frame=transformed,
    choice="make_cols",
    transformation_ctx="resolve_choice"
)

# 重複除去
transformed = transformed.toDF().dropDuplicates()
transformed = DynamicFrame.fromDF(transformed, glueContext, "deduplicated")

# 結果保存
glueContext.write_dynamic_frame.from_options(
    frame=transformed,
    connection_type="s3",
    connection_options={
        "path": "s3://my-datalake/processed/web-analytics/"
    },
    format="parquet",
    transformation_ctx="write_processed_data"
)

job.commit()

```

### データカタログ

#### Glue Data Catalog

```yaml
Resources:
  Database:
    Type: AWS::Glue::Database
    Properties:
      CatalogId: !Ref AWS::AccountId
      DatabaseInput:
        Name: datalake_catalog
        Description: Data Lake catalog database

  WebLogsTable:
    Type: AWS::Glue::Table
    Properties:
      CatalogId: !Ref AWS::AccountId
      DatabaseName: !Ref Database
      TableInput:
        Name: web_logs
        StorageDescriptor:
          Columns:
            - Name: timestamp

              Type: timestamp
            - Name: ip_address

              Type: string
            - Name: user_agent

              Type: string
            - Name: request_path

              Type: string
            - Name: status_code

              Type: int
            - Name: response_size

              Type: bigint
          Location: s3://my-datalake/raw/web-logs/
          InputFormat: org.apache.hadoop.mapred.TextInputFormat
          OutputFormat: org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat
          SerdeInfo:
            SerializationLibrary: org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe
        PartitionKeys:
          - Name: year

            Type: string
          - Name: month

            Type: string
          - Name: day

            Type: string
```

### クエリ・分析

#### Amazon Athena

```sql
-- パフォーマンス分析
SELECT
    DATE(timestamp) as date,
    COUNT(*) as total_requests,
    COUNT(CASE WHEN status_code >= 400 THEN 1 END) as error_requests,
    AVG(response_size) as avg_response_size,
    PERCENTILE_APPROX(response_size, 0.95) as p95_response_size
FROM web_logs
WHERE year = '2023' AND month = '12'
GROUP BY DATE(timestamp)
ORDER BY date;

-- ユーザー行動分析
WITH user_sessions AS (
    SELECT
        ip_address,
        DATE(timestamp) as date,
        COUNT(*) as page_views,
        COUNT(DISTINCT request_path) as unique_pages,
        MIN(timestamp) as session_start,
        MAX(timestamp) as session_end
    FROM web_logs
    WHERE year = '2023' AND month = '12'
    GROUP BY ip_address, DATE(timestamp)
)
SELECT
    date,
    COUNT(*) as unique_users,
    AVG(page_views) as avg_page_views,
    AVG(EXTRACT(EPOCH FROM (session_end - session_start))/60) as avg_session_duration_minutes
FROM user_sessions
GROUP BY date
ORDER BY date;

```

#### Amazon QuickSight

```json
{
  "DataSetId": "web-analytics-dataset",
  "Name": "Web Analytics Dashboard",
  "PhysicalTableMap": {
    "web-logs": {
      "S3Source": {
        "DataSourceArn": "arn:aws:quicksight:region:account:datasource/athena-datasource",
        "InputColumns": [
          { "Name": "timestamp", "Type": "DATETIME" },
          { "Name": "ip_address", "Type": "STRING" },
          { "Name": "request_path", "Type": "STRING" },
          { "Name": "status_code", "Type": "INTEGER" },
          { "Name": "response_size", "Type": "INTEGER" }
        ]
      }
    }
  },
  "LogicalTableMap": {
    "processed-logs": {
      "Alias": "ProcessedLogs",
      "Source": {
        "PhysicalTableId": "web-logs"
      },
      "DataTransforms": [
        {
          "CreateColumnsOperation": {
            "Columns": [
              {
                "ColumnName": "date",
                "ColumnId": "date",
                "Expression": "truncDate('DD', {timestamp})"
              },
              {
                "ColumnName": "hour",
                "ColumnId": "hour",
                "Expression": "extract('HH', {timestamp})"
              }
            ]
          }
        }
      ]
    }
  }
}
```

---

## ハイブリッドクラウド

### 概要

オンプレミスとクラウドを統合したアーキテクチャ。段階的移行、規制要件、既存投資活用に適用。

### 接続パターン

#### AWS Direct Connect

```text
専用線接続:
- 1Gbps〜100Gbps
- 安定した帯域幅
- 低レイテンシ
- 予測可能なコスト

用途:
- 大容量データ転送
- ミッションクリティカル
- 継続的な接続
```

#### Site-to-Site VPN

```text
インターネット経由:
- 最大1.25Gbps
- 暗号化通信
- 冗長化対応
- 低コスト

用途:
- バックアップ接続
- 小〜中規模データ
- 一時的な接続
```

#### AWS Transit Gateway

```text
ハブ&スポーク構成:
- 複数VPC統合
- オンプレミス統合
- ルーティング制御
- スケーラブル

利点:
- 管理の簡素化
- 接続の標準化
- セキュリティ統制
```

### データ統合パターン

#### AWS Storage Gateway

```yaml
# File Gateway設定例
Resources:
  FileGateway:
    Type: AWS::StorageGateway::Gateway
    Properties:
      GatewayName: HybridFileGateway
      GatewayType: FILE_S3
      GatewayTimezone: GMT+9:00
      
  NFSFileShare:
    Type: AWS::StorageGateway::NFSFileShare
    Properties:
      GatewayARN: !Ref FileGateway
      LocationARN: !Sub "arn:aws:s3:::${S3Bucket}"
      Role: !GetAtt FileGatewayRole.Arn
      ClientList:
        - "10.0.0.0/8"
      DefaultStorageClass: S3_STANDARD_IA
```

#### AWS DataSync

```text
データ転送サービス:
- オンプレミス ↔ AWS
- 一回限り/継続的転送
- 帯域幅制御
- 暗号化対応

転送パターン:
- NFS → S3
- SMB → EFS
- HDFS → S3
- オブジェクトストレージ → S3
```

### アプリケーション統合

#### AWS Outposts

```text
オンプレミスAWSサービス:
- EC2、EBS、S3
- RDS、EKS
- 同一API/ツール
- ローカル処理

用途:
- 低レイテンシ要件
- データ主権
- 段階的移行
```

#### AWS Local Zones

```text
エッジコンピューティング:
- 主要都市に配置
- 1桁ミリ秒レイテンシ
- EC2、EBS対応

用途:
- リアルタイム処理
- メディア配信
- ゲーミング
```

### セキュリティ統合

#### AWS IAM Identity Center

```text
統合認証:
- Active Directory統合
- SAML 2.0対応
- 多要素認証
- 一元管理

利点:
- シングルサインオン
- 権限の統一管理
- 監査証跡
```

#### AWS Systems Manager

```python
# ハイブリッド環境の管理
import boto3

ssm = boto3.client('ssm')

# オンプレミスサーバーの管理
def manage_hybrid_instances():
    # パッチ管理
    response = ssm.send_command(
        InstanceIds=['mi-1234567890abcdef0'],  # Managed Instance
        DocumentName='AWS-RunPatchBaseline',
        Parameters={
            'Operation': ['Install']
        }
    )
    
    # 設定管理
    ssm.put_parameter(
        Name='/hybrid/database/connection',
        Value='server=onprem-db;database=prod',
        Type='SecureString',
        Description='Hybrid database connection'
    )
    
    return response
```

### 監視・運用統合

#### Amazon CloudWatch

```text
統合監視:
- オンプレミスメトリクス
- カスタムメトリクス
- 統一ダッシュボード
- アラート統合

実装:
- CloudWatch Agent
- カスタムメトリクス
- ログ統合
```

#### AWS Config

```text
設定管理:
- ハイブリッド環境の設定追跡
- コンプライアンス監視
- 変更管理
- 統一ポリシー
```

---

## マルチリージョン設計

### 概要

複数のAWSリージョンを活用した高可用性・災害復旧・グローバル展開アーキテクチャ。

### 設計パターン

#### アクティブ-パッシブ

```text
構成:
- プライマリリージョン: 全トラフィック処理
- セカンダリリージョン: 災害復旧用

特徴:
- シンプルな構成
- 低コスト
- 手動フェイルオーバー

RTO: 分〜時間
RPO: 分〜時間
```

#### アクティブ-アクティブ

```text
構成:
- 複数リージョンで同時稼働
- 負荷分散
- 自動フェイルオーバー

特徴:
- 高可用性
- 高コスト
- 複雑な構成

RTO: 秒〜分
RPO: 秒〜分
```

#### 地理的分散

```text
構成:
- 地域別リージョン配置
- ユーザー近接性重視
- 地域別データ保存

特徴:
- 低レイテンシ
- データ主権対応
- 規制要件対応
```

### データレプリケーション

#### Amazon Aurora Global Database

```yaml
Resources:
  GlobalCluster:
    Type: AWS::RDS::GlobalCluster
    Properties:
      GlobalClusterIdentifier: global-aurora-cluster
      SourceDBClusterIdentifier: !Ref PrimaryCluster
      
  PrimaryCluster:
    Type: AWS::RDS::DBCluster
    Properties:
      DBClusterIdentifier: primary-cluster
      Engine: aurora-mysql
      EngineVersion: 8.0.mysql_aurora.3.02.0
      MasterUsername: admin
      MasterUserPassword: !Ref DBPassword
      
  SecondaryCluster:
    Type: AWS::RDS::DBCluster
    Properties:
      DBClusterIdentifier: secondary-cluster
      Engine: aurora-mysql
      EngineVersion: 8.0.mysql_aurora.3.02.0
      GlobalClusterIdentifier: !Ref GlobalCluster
      SourceRegion: us-east-1
```

#### DynamoDB Global Tables

```python
import boto3

def setup_global_tables():
    dynamodb = boto3.client('dynamodb')
    
    # Global Tablesの作成
    response = dynamodb.create_global_table(
        GlobalTableName='UserProfiles',
        ReplicationGroup=[
            {'RegionName': 'us-east-1'},
            {'RegionName': 'eu-west-1'},
            {'RegionName': 'ap-northeast-1'}
        ]
    )
    
    return response

def configure_table_settings():
    # 各リージョンでの設定
    regions = ['us-east-1', 'eu-west-1', 'ap-northeast-1']
    
    for region in regions:
        dynamodb = boto3.client('dynamodb', region_name=region)
        
        # Auto Scaling設定
        dynamodb.put_scaling_policy(
            PolicyName=f'UserProfiles-ReadCapacity-{region}',
            ServiceNamespace='dynamodb',
            ResourceId='table/UserProfiles',
            ScalableDimension='dynamodb:table:ReadCapacityUnits',
            PolicyType='TargetTrackingScaling',
            TargetTrackingScalingPolicyConfiguration={
                'TargetValue': 70.0,
                'PredefinedMetricSpecification': {
                    'PredefinedMetricType': 'DynamoDBReadCapacityUtilization'
                }
            }
        )
```

#### S3 Cross-Region Replication

```json
{
  "Role": "arn:aws:iam::account:role/replication-role",
  "Rules": [
    {
      "ID": "GlobalReplication",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {
        "Prefix": "global-data/"
      },
      "Destination": {
        "Bucket": "arn:aws:s3:::backup-bucket-eu",
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

### DNS・トラフィック管理

#### Route 53 Health Checks

```json
{
  "Type": "HTTPS",
  "ResourcePath": "/health",
  "FullyQualifiedDomainName": "api-us-east-1.example.com",
  "Port": 443,
  "RequestInterval": 30,
  "FailureThreshold": 3,
  "Regions": [
    "us-east-1",
    "us-west-2",
    "eu-west-1"
  ],
  "AlarmIdentifier": {
    "Region": "us-east-1",
    "Name": "api-health-alarm"
  }
}
```

#### Geolocation Routing

```json
{
  "Name": "api.example.com",
  "Type": "A",
  "SetIdentifier": "US-Users",
  "GeoLocation": {
    "CountryCode": "US"
  },
  "AliasTarget": {
    "DNSName": "api-us-east-1.example.com",
    "EvaluateTargetHealth": true
  }
},
{
  "Name": "api.example.com",
  "Type": "A",
  "SetIdentifier": "EU-Users",
  "GeoLocation": {
    "CountryCode": "DE"
  },
  "AliasTarget": {
    "DNSName": "api-eu-west-1.example.com",
    "EvaluateTargetHealth": true
  }
}
```

### アプリケーション設計

#### 地域別デプロイメント

```yaml
# CodePipeline for Multi-Region Deployment
Resources:
  Pipeline:
    Type: AWS::CodePipeline::Pipeline
    Properties:
      RoleArn: !GetAtt CodePipelineRole.Arn
      Stages:
        - Name: Source
          Actions:
            - Name: SourceAction
              ActionTypeId:
                Category: Source
                Owner: AWS
                Provider: S3
                Version: 1
              Configuration:
                S3Bucket: !Ref SourceBucket
                S3ObjectKey: source.zip
                
        - Name: DeployToPrimary
          Actions:
            - Name: DeployUSEast1
              ActionTypeId:
                Category: Deploy
                Owner: AWS
                Provider: CloudFormation
                Version: 1
              Configuration:
                ActionMode: CREATE_UPDATE
                StackName: app-stack-us-east-1
                TemplatePath: SourceOutput::template.yaml
                Capabilities: CAPABILITY_IAM
              Region: us-east-1
              
        - Name: DeployToSecondary
          Actions:
            - Name: DeployEUWest1
              ActionTypeId:
                Category: Deploy
                Owner: AWS
                Provider: CloudFormation
                Version: 1
              Configuration:
                ActionMode: CREATE_UPDATE
                StackName: app-stack-eu-west-1
                TemplatePath: SourceOutput::template.yaml
                Capabilities: CAPABILITY_IAM
              Region: eu-west-1
```

#### 設定管理

```python
import boto3
import json

class MultiRegionConfig:
    def __init__(self):
        self.regions = ['us-east-1', 'eu-west-1', 'ap-northeast-1']
        
    def deploy_config(self, config_data):
        """全リージョンに設定をデプロイ"""
        for region in self.regions:
            ssm = boto3.client('ssm', region_name=region)
            
            # リージョン固有の設定
            region_config = self.customize_config(config_data, region)
            
            # Parameter Storeに保存
            ssm.put_parameter(
                Name='/app/config/database',
                Value=json.dumps(region_config['database']),
                Type='SecureString',
                Overwrite=True
            )
            
    def customize_config(self, base_config, region):
        """リージョン固有の設定をカスタマイズ"""
        config = base_config.copy()
        
        # リージョン固有のエンドポイント
        config['database']['endpoint'] = f"db-{region}.example.com"
        config['cache']['endpoint'] = f"cache-{region}.example.com"
        
        return config
```

### 監視・運用

#### CloudWatch Cross-Region Dashboard

```json
{
  "widgets": [
    {
      "type": "metric",
      "properties": {
        "metrics": [
          ["AWS/ApplicationELB", "RequestCount", "LoadBalancer", "app-alb-us-east-1", {"region": "us-east-1"}],
          ["AWS/ApplicationELB", "RequestCount", "LoadBalancer", "app-alb-eu-west-1", {"region": "eu-west-1"}],
          ["AWS/ApplicationELB", "RequestCount", "LoadBalancer", "app-alb-ap-northeast-1", {"region": "ap-northeast-1"}]
        ],
        "period": 300,
        "stat": "Sum",
        "region": "us-east-1",
        "title": "Global Request Count"
      }
    },
    {
      "type": "metric",
      "properties": {
        "metrics": [
          ["AWS/Route53", "HealthCheckStatus", "HealthCheckId", "health-check-us", {"region": "us-east-1"}],
          ["AWS/Route53", "HealthCheckStatus", "HealthCheckId", "health-check-eu", {"region": "us-east-1"}],
          ["AWS/Route53", "HealthCheckStatus", "HealthCheckId", "health-check-ap", {"region": "us-east-1"}]
        ],
        "period": 60,
        "stat": "Average",
        "region": "us-east-1",
        "title": "Global Health Status"
      }
    }
  ]
}
```

#### 統合ログ管理

```python
import boto3

def setup_centralized_logging():
    """中央集権的ログ管理の設定"""
    
    # 各リージョンのログをS3に集約
    regions = ['us-east-1', 'eu-west-1', 'ap-northeast-1']
    
    for region in regions:
        logs_client = boto3.client('logs', region_name=region)
        
        # Kinesis Data Firehoseにログをストリーミング
        logs_client.put_destination(
            destinationName=f'CentralLogDestination-{region}',
            targetArn=f'arn:aws:firehose:{region}:account:deliverystream/central-logs',
            roleArn='arn:aws:iam::account:role/LogsRole'
        )
        
        # ログストリームの設定
        logs_client.put_subscription_filter(
            logGroupName='/aws/lambda/app-function',
            filterName='CentralLogsFilter',
            filterPattern='',
            destinationArn=f'arn:aws:logs:{region}:account:destination:CentralLogDestination-{region}'
        )
```

### コスト最適化

#### リージョン別コスト分析

```python
import boto3
from datetime import datetime, timedelta

def analyze_multi_region_costs():
    """マルチリージョンのコスト分析"""
    ce = boto3.client('ce', region_name='us-east-1')  # Cost Explorerは us-east-1 のみ
    
    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')
    
    # リージョン別コスト取得
    response = ce.get_cost_and_usage(
        TimePeriod={
            'Start': start_date,
            'End': end_date
        },
        Granularity='MONTHLY',
        Metrics=['BlendedCost'],
        GroupBy=[
            {
                'Type': 'DIMENSION',
                'Key': 'REGION'
            }
        ]
    )
    
    # コスト分析
    region_costs = {}
    for result in response['ResultsByTime']:
        for group in result['Groups']:
            region = group['Keys'][0]
            cost = float(group['Metrics']['BlendedCost']['Amount'])
            region_costs[region] = region_costs.get(region, 0) + cost
    
    return region_costs

def optimize_region_usage(cost_data):
    """リージョン使用量の最適化提案"""
    recommendations = []
    
    # 使用量の少ないリージョンを特定
    sorted_regions = sorted(cost_data.items(), key=lambda x: x[1])
    
    for region, cost in sorted_regions:
        if cost < 100:  # 月額$100未満
            recommendations.append({
                'region': region,
                'action': 'Consider consolidating resources',
                'potential_savings': cost * 0.3  # 30%の節約見込み
            })
    
    return recommendations
```

### セキュリティ考慮事項

#### データ主権・コンプライアンス

```text
GDPR対応:
- EU内データの EU リージョン保存
- データ処理の透明性
- 削除権への対応

HIPAA対応:
- BAA対応リージョン選択
- 暗号化の徹底
- アクセスログの保持

金融規制:
- 地域別規制要件
- データ保存期間
- 監査証跡
```

#### 暗号化・キー管理

```yaml
Resources:
  # リージョン別KMSキー
  PrimaryKMSKey:
    Type: AWS::KMS::Key
    Properties:
      Description: Primary region encryption key
      KeyPolicy:
        Statement:
          - Effect: Allow
            Principal:
              AWS: !Sub "arn:aws:iam::${AWS::AccountId}:root"
            Action: "kms:*"
            Resource: "*"
            
  SecondaryKMSKey:
    Type: AWS::KMS::Key
    Properties:
      Description: Secondary region encryption key
      KeyPolicy:
        Statement:
          - Effect: Allow
            Principal:
              AWS: !Sub "arn:aws:iam::${AWS::AccountId}:root"
            Action: "kms:*"
            Resource: "*"
```

---

_次のセクション: [08. コスト最適化](./08-cost-optimization.md)_
