# コンピューティングサービス

## 目次

1. [EC2 (Elastic Compute Cloud)](#ec2-elastic-compute-cloud)
2. [ECS (Elastic Container Service)](#ecs-elastic-container-service)
3. [EKS (Elastic Kubernetes Service)](#eks-elastic-kubernetes-service)
4. [Lambda](#lambda)
5. [Fargate](#fargate)
6. [Batch](#batch)
7. [Auto Scaling](#auto-scaling)
8. [サービス比較](#サービス比較)

---

## EC2 (Elastic Compute Cloud)

### 概要

仮想サーバーインスタンスを提供するサービス。最も基本的なコンピューティングサービス。

### インスタンスタイプ

#### 汎用インスタンス

| タイプ     | 特徴                   | 用途                 | vCPU:メモリ比 |
| ---------- | ---------------------- | -------------------- | ------------- |
| **t3/t4g** | バーストパフォーマンス | 軽量ワークロード     | 1:2           |
| **m5/m6i** | バランス型             | 一般的なワークロード | 1:4           |
| **a1**     | ARM Graviton           | コスト効率重視       | 1:2           |

#### コンピューティング最適化

| タイプ     | 特徴             | 用途             | vCPU:メモリ比 |
| ---------- | ---------------- | ---------------- | ------------- |
| **c5/c6i** | 高性能プロセッサ | CPU 集約的処理   | 1:2           |
| **c6g**    | ARM Graviton2    | 高性能・低コスト | 1:2           |

#### メモリ最適化

| タイプ     | 特徴         | 用途             | vCPU:メモリ比 |
| ---------- | ------------ | ---------------- | ------------- |
| **r5/r6i** | 高メモリ     | インメモリ DB    | 1:8           |
| **x1e**    | 超高メモリ   | SAP HANA         | 1:16          |
| **z1d**    | 高周波数 CPU | 単一スレッド性能 | 1:8           |

#### ストレージ最適化

| タイプ     | 特徴     | 用途                 | ストレージ         |
| ---------- | -------- | -------------------- | ------------------ |
| **i3/i4i** | NVMe SSD | 高 IOPS              | インスタンスストア |
| **d2/d3**  | HDD      | 分散ファイルシステム | インスタンスストア |

### 購入オプション

#### オンデマンドインスタンス

```
特徴:
- 時間単位課金
- 最小利用時間なし
- 予約不要

用途:
- 予測不可能なワークロード
- 短期間の使用
- 開発・テスト環境
```

#### リザーブドインスタンス

```
標準リザーブドインスタンス:
- 1年/3年契約
- 最大75%割引
- インスタンスタイプ固定

コンバーティブルリザーブドインスタンス:
- インスタンスタイプ変更可能
- 最大54%割引
- より柔軟性が高い
```

#### スポットインスタンス

```
特徴:
- 最大90%割引
- 2分前通知で中断
- 需要と供給で価格変動

用途:
- バッチ処理
- CI/CD
- 障害耐性のあるワークロード

スポットフリート:
- 複数のインスタンスタイプ指定
- 自動的に最安値選択
- 中断リスクの分散
```

### プレイスメントグループ

#### クラスタープレイスメントグループ

```
特徴:
- 単一AZ内の物理的近接配置
- 10Gbps ネットワーク性能
- 低レイテンシ

用途:
- HPC (High Performance Computing)
- 分散データベース
```

#### パーティションプレイスメントグループ

```
特徴:
- 異なるハードウェアラックに分散
- 最大7パーティション/AZ
- 障害分離

用途:
- Hadoop
- Cassandra
- Kafka
```

#### スプレッドプレイスメントグループ

```
特徴:
- 異なる物理ハードウェアに配置
- 最大7インスタンス/AZ
- 最大の障害分離

用途:
- 重要なアプリケーション
- 高可用性要件
```

### 公式リソース

- [EC2 サービス紹介](https://aws.amazon.com/jp/ec2/)
- [EC2 Black Belt](https://aws.amazon.com/jp/blogs/news/aws-black-belt-seminar-amazon-ec2-introduction/)
- [EC2 インスタンスタイプ](https://aws.amazon.com/jp/ec2/instance-types/)

---

## ECS (Elastic Container Service)

### 概要

Docker コンテナのオーケストレーションサービス。AWS 独自のコンテナ管理サービス。

### 起動タイプ

#### EC2 起動タイプ

```
特徴:
- EC2インスタンス上でコンテナ実行
- インスタンス管理が必要
- より細かい制御が可能

用途:
- 既存のEC2環境との統合
- カスタムAMI使用
- GPU使用ワークロード
```

#### Fargate 起動タイプ

```
特徴:
- サーバーレスコンテナ実行
- インスタンス管理不要
- vCPU/メモリ単位課金

用途:
- 運用負荷軽減
- 短期間のタスク
- マイクロサービス
```

### タスク定義

#### 基本構成

```json
{
  "family": "web-app",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "web-container",
      "image": "nginx:latest",
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/web-app",
          "awslogs-region": "us-east-1"
        }
      }
    }
  ]
}
```

#### リソース制限

```json
{
  "containerDefinitions": [
    {
      "name": "app",
      "cpu": 256,
      "memory": 512,
      "memoryReservation": 256,
      "essential": true,
      "ulimits": [
        {
          "name": "nofile",
          "softLimit": 65536,
          "hardLimit": 65536
        }
      ]
    }
  ]
}
```

### サービス設定

#### Auto Scaling

```json
{
  "serviceName": "web-service",
  "desiredCount": 3,
  "deploymentConfiguration": {
    "maximumPercent": 200,
    "minimumHealthyPercent": 50
  },
  "placementStrategy": [
    {
      "type": "spread",
      "field": "attribute:ecs.availability-zone"
    }
  ]
}
```

### ネットワーキング

#### awsvpc ネットワークモード

```

特徴:
- 各タスクに専用 ENI
- セキュリティグループ適用可能
- VPC 内での通信

利点:
- ネットワーク分離
- 詳細な制御
- 監視の容易さ
```

### 公式リソース

- [ECS サービス紹介](https://aws.amazon.com/jp/ecs/)
- [ECS Black Belt](https://aws.amazon.com/jp/blogs/news/aws-black-belt-online-seminar-con201-ecs-overview/)
- [ECS ベストプラクティス](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/)

---

## EKS (Elastic Kubernetes Service)

### 概要

マネージド Kubernetes サービス。Kubernetes コントロールプレーンを自動管理。

### アーキテクチャ

#### コントロールプレーン

```
AWS 管理:
- Kubernetes API Server
- etcd
- Controller Manager
- Scheduler

特徴:
- 高可用性 (Multi-AZ)
- 自動パッチ適用
- バックアップ・復旧
```

#### ワーカーノード

```
管理オプション:

1. マネージドノードグループ
2. セルフマネージドノード
3. Fargate

選択基準:
- 運用負荷
- カスタマイズ要件
- コスト
```

### ノードグループ比較

| タイプ               | 管理レベル   | カスタマイズ | コスト | 用途         |
| -------------------- | ------------ | ------------ | ------ | ------------ |
| **マネージド**       | AWS 管理     | 制限あり     | 中     | 一般的用途   |
| **セルフマネージド** | ユーザー管理 | 自由         | 低     | 特殊要件     |
| **Fargate**          | AWS 管理     | 制限あり     | 高     | サーバーレス |

### ネットワーキング

#### VPC CNI

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: amazon-vpc-cni
  namespace: kube-system
data:
  enable-pod-eni: "true"
  enable-prefix-delegation: "true"
  warm-prefix-target: "1"
```

#### セキュリティグループ for Pods

```yaml
apiVersion: vpcresources.k8s.aws/v1beta1
kind: SecurityGroupPolicy
metadata:
  name: database-policy
spec:
  podSelector:
    matchLabels:
      app: database
  securityGroups:
    groupIds:
      - sg-1234567890abcdef0
```

### Add-ons

#### 重要な Add-ons

```
AWS Load Balancer Controller:
- ALB/NLB 統合
- Ingress/Service 対応

EBS CSI Driver:
- 永続ボリューム
- 動的プロビジョニング

EFS CSI Driver:
- 共有ファイルシステム
- ReadWriteMany 対応

Cluster Autoscaler:
- ノード自動スケーリング
- コスト最適化
```

### 公式リソース

- [EKS サービス紹介](https://aws.amazon.com/jp/eks/)
- [EKS Black Belt](https://aws.amazon.com/jp/blogs/news/aws-black-belt-online-seminar-con221-introduction-eks/)
- [EKS ベストプラクティス](https://aws.github.io/aws-eks-best-practices/)

---

## Lambda

### 概要

サーバーレスコンピューティングサービス。イベント駆動でコードを実行。

### 実行環境

#### ランタイム

```
サポート言語:
- Python 3.8, 3.9, 3.10, 3.11
- Node.js 16.x, 18.x
- Java 8, 11, 17
- .NET Core 3.1, 6
- Go 1.x
- Ruby 2.7, 3.2
- カスタムランタイム (Provided)
```

#### リソース制限

```
メモリ: 128MB - 10,240MB (1MB 単位)
CPU: メモリに比例 (1,769MB で 1vCPU)
実行時間: 最大 15 分
一時ディスク: 512MB - 10,240MB
環境変数: 4KB
ペイロード: 6MB (同期), 256KB (非同期)
```

### イベントソース

#### 同期実行

```
API Gateway:
- REST API
- HTTP API
- WebSocket API

Application Load Balancer:
- HTTP(S)リクエスト
- パスベースルーティング

直接呼び出し:
- AWS SDK
- AWS CLI
```

#### 非同期実行

```
S3:
- オブジェクト作成/削除
- バケット通知

SNS:
- メッセージ配信
- ファンアウトパターン

EventBridge:
- スケジュール実行
- カスタムイベント

SQS:
- メッセージ処理
- バッチ処理
```

### パフォーマンス最適化

#### コールドスタート対策

```python
import json
import boto3

# グローバル変数で初期化（コンテナ再利用時に効果）
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('MyTable')

def lambda_handler(event, context):
    # 処理ロジック
    response = table.get_item(Key={'id': event['id']})
    return {
        'statusCode': 200,
        'body': json.dumps(response['Item'])
    }
```

#### Provisioned Concurrency

```yaml
# SAM Template例
Resources:
  MyFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: src/
      Handler: app.lambda_handler
      Runtime: python3.9
      ProvisionedConcurrencyConfig:
        ProvisionedConcurrencyLevel: 10
```

### エラーハンドリング

#### リトライ設定

```json
{
  "maximumRetryAttempts": 2,
  "maximumEventAge": 3600,
  "destinationConfig": {
    "onFailure": {
      "destination": "arn:aws:sqs:region:account:dlq"
    },
    "onSuccess": {
      "destination": "arn:aws:sns:region:account:success-topic"
    }
  }
}
```

### 公式リソース

- [Lambda サービス紹介](https://aws.amazon.com/jp/lambda/)
- [Lambda Black Belt](https://aws.amazon.com/jp/modern-apps/recommendation-guide/serverless/aws-lambda/)
- [Lambda ベストプラクティス](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)

---

## Fargate

### 概要

サーバーレスコンテナ実行環境。ECS/EKS で利用可能。

### 特徴

#### サーバーレス

```
利点:
- インフラ管理不要
- 自動スケーリング
- セキュリティパッチ自動適用

制限:
- カスタマイズ制限
- 特定のインスタンスタイプ不可
- GPU未対応
```

#### リソース設定

```
CPU/メモリ組み合わせ:
- 0.25 vCPU: 0.5GB, 1GB, 2GB
- 0.5 vCPU: 1GB - 4GB
- 1 vCPU: 2GB - 8GB
- 2 vCPU: 4GB - 16GB
- 4 vCPU: 8GB - 30GB
- 8 vCPU: 16GB - 60GB
- 16 vCPU: 32GB - 120GB
```

### ECS on Fargate

#### タスク定義例

```json
{
  "family": "fargate-task",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "1024",
  "memory": "2048",
  "executionRoleArn": "arn:aws:iam::account:role/ecsTaskExecutionRole",
  "taskRoleArn": "arn:aws:iam::account:role/ecsTaskRole",
  "containerDefinitions": [
    {
      "name": "web-app",
      "image": "nginx:latest",
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp"
        }
      ]
    }
  ]
}
```

### EKS on Fargate

#### Fargate Profile

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
  name: my-cluster
  region: us-east-1

fargateProfiles:
  - name: default

    selectors:
      - namespace: default
      - namespace: kube-system

        labels:
          k8s-app: kube-dns
```

### 公式リソース

- [Fargate サービス紹介](https://aws.amazon.com/jp/fargate/)
- [Fargate Black Belt](https://aws.amazon.com/jp/blogs/news/webinar-bb-aws-fargate-2019/)

---

## Batch

### 概要

バッチ処理専用のマネージドサービス。大規模な並列処理に最適。

### コンポーネント

#### Job Definition

```json
{
  "jobDefinitionName": "batch-job",
  "type": "container",
  "containerProperties": {
    "image": "busybox",
    "vcpus": 2,
    "memory": 2048,
    "jobRoleArn": "arn:aws:iam::account:role/BatchJobRole"
  },
  "retryStrategy": {
    "attempts": 3
  },
  "timeout": {
    "attemptDurationSeconds": 3600
  }
}
```

#### Compute Environment

```json
{
  "computeEnvironmentName": "batch-compute-env",
  "type": "MANAGED",
  "state": "ENABLED",
  "computeResources": {
    "type": "EC2",
    "minvCpus": 0,
    "maxvCpus": 1000,
    "desiredvCpus": 10,
    "instanceTypes": ["m5.large", "m5.xlarge"],
    "spotIamFleetRequestRole": "arn:aws:iam::account:role/aws-ec2-spot-fleet-role",
    "bidPercentage": 50
  }
}
```

### 使用パターン

#### 科学計算

```
用途:
- 気象シミュレーション
- 金融リスク計算
- 機械学習トレーニング

特徴:
- 大量の並列処理
- 長時間実行
- 高性能インスタンス使用
```

#### データ処理

```
用途:
- ログ解析
- ETL処理
- 画像/動画変換

特徴:
- スケジュール実行
- 依存関係管理
- エラーハンドリング
```

### 公式リソース

- [Batch サービス紹介](https://aws.amazon.com/jp/batch/)
- [Batch Black Belt](https://aws.amazon.com/jp/blogs/news/webinar-bb-aws-batch-2019/)

---

## Auto Scaling

### EC2 Auto Scaling

#### 起動テンプレート

```json
{
  "LaunchTemplateName": "web-server-template",
  "LaunchTemplateData": {
    "ImageId": "ami-0abcdef1234567890",
    "InstanceType": "t3.micro",
    "KeyName": "my-key-pair",
    "SecurityGroupIds": ["sg-1234567890abcdef0"],
    "UserData": "IyEvYmluL2Jhc2gKZWNobyAiSGVsbG8gV29ybGQi",
    "IamInstanceProfile": {
      "Name": "EC2-SSM-Role"
    },
    "BlockDeviceMappings": [
      {
        "DeviceName": "/dev/xvda",
        "Ebs": {
          "VolumeSize": 20,
          "VolumeType": "gp3",
          "DeleteOnTermination": true
        }
      }
    ]
  }
}
```

#### スケーリングポリシー

##### ターゲット追跡スケーリング

```json
{
  "TargetValue": 70.0,
  "PredefinedMetricSpecification": {
    "PredefinedMetricType": "ASGAverageCPUUtilization"
  },
  "ScaleOutCooldown": 300,
  "ScaleInCooldown": 300
}
```

##### ステップスケーリング

```json
{
  "AdjustmentType": "ChangeInCapacity",
  "StepAdjustments": [
    {
      "MetricIntervalLowerBound": 0,
      "MetricIntervalUpperBound": 50,
      "ScalingAdjustment": 1
    },
    {
      "MetricIntervalLowerBound": 50,
      "ScalingAdjustment": 2
    }
  ],
  "Cooldown": 300
}
```

### Application Auto Scaling

#### 対応サービス

```
- DynamoDB (テーブル/GSI)
- ECS (サービス)
- EC2 Spot Fleet
- EMR (クラスター)
- AppStream 2.0 (フリート)
- Aurora (レプリカ)
- SageMaker (エンドポイント)
- Lambda (プロビジョンド同時実行数)
- Comprehend (ドキュメント分類)
- Keyspaces (テーブル)
```

#### DynamoDB Auto Scaling例

```json
{
  "ServiceNamespace": "dynamodb",
  "ResourceId": "table/my-table",
  "ScalableDimension": "dynamodb:table:ReadCapacityUnits",
  "MinCapacity": 5,
  "MaxCapacity": 1000,
  "TargetTrackingScalingPolicies": [
    {
      "TargetValue": 70.0,
      "PredefinedMetricSpecification": {
        "PredefinedMetricType": "DynamoDBReadCapacityUtilization"
      }
    }
  ]
}
```

### 公式リソース

- [Auto Scaling サービス紹介](https://aws.amazon.com/jp/autoscaling/)
- [Auto Scaling Black Belt](https://aws.amazon.com/jp/blogs/news/webinar-bb-amazon-ec2-auto-scaling-and-aws-auto-scaling-2019/())

---

## サービス比較

### 用途別比較

| 要件                   | 推奨サービス | 理由                       |
| ---------------------- | ------------ | -------------------------- |
| **長時間実行**         | EC2          | コスト効率、カスタマイズ性 |
| **短時間処理**         | Lambda       | サーバーレス、従量課金     |
| **コンテナ管理簡素化** | Fargate      | インフラ管理不要           |
| **Kubernetes 使用**    | EKS          | 標準的な K8s API           |
| **バッチ処理**         | Batch        | 並列処理最適化             |
| **イベント駆動**       | Lambda       | 自動スケーリング           |

### コスト比較

#### 24 時間稼働の場合

```
EC2 t3.micro (オンデマンド):
$0.0104/時間 × 24時間 × 30日 = $7.49/月

Lambda (1GB, 100ms実行, 100万回/月):
$0.0000166667 × 100万 = $16.67/月

Fargate (0.25vCPU, 0.5GB, 24時間):
($0.04048 + $0.004445) × 24 × 30 = $32.36/月
```

### パフォーマンス比較

| サービス    | 起動時間   | スケーリング速度 | 最大性能 |
| ----------- | ---------- | ---------------- | -------- |
| **EC2**     | 1-2 分     | 中               | 高       |
| **Lambda**  | 数秒-数分  | 高               | 中       |
| **Fargate** | 30 秒-2 分 | 高               | 中       |
| **EKS**     | 1-3 分     | 中               | 高       |

### 選択フローチャート

```
処理時間は15分以内？
├─ Yes → イベント駆動？
│   ├─ Yes → Lambda
│   └─ No → コンテナ使用？
│       ├─ Yes → Fargate
│       └─ No → EC2 (短時間)
└─ No → コンテナ使用？
    ├─ Yes → Kubernetes必要？
    │   ├─ Yes → EKS
    │   └─ No → ECS
    └─ No → バッチ処理？
        ├─ Yes → Batch
        └─ No → EC2
```

---

## 実践演習

### 演習 1: 3 層アーキテクチャ

```
要件:
- Web層: Auto Scaling対応
- App層: コンテナ化
- DB層: 高可用性

解答例:
- Web層: ALB + EC2 Auto Scaling
- App層: ECS Fargate
- DB層: RDS Multi-AZ
```

### 演習 2: サーバーレス処理

```
要件:
- S3アップロード時に画像リサイズ
- 処理結果をDynamoDBに保存
- エラー時は管理者に通知

解答例:
S3 → Lambda (画像処理) → DynamoDB
     ↓ (エラー時)
    SNS → Email
```

### 演習 3: バッチ処理基盤

```
要件:
- 大量データの並列処理
- スポットインスタンス活用
- 処理完了時に通知

解答例:
EventBridge → Batch → SNS
(スケジュール)  (並列処理) (通知)
```

---

## まとめ

### 重要ポイント

1. **適切なサービス選択**: 要件に応じた最適なサービス選択

2. **コスト最適化**: 購入オプション、リソース設定の最適化

3. **スケーラビリティ**: Auto Scaling の適切な設定

4. **可用性**: Multi-AZ、複数インスタンスタイプの活用

5. **セキュリティ**: IAM ロール、セキュリティグループの適切な設定

### 試験対策

- 各サービスの特徴と制限を理解
- コスト計算ができるようになる
- アーキテクチャ図から適切なサービスを選択
- パフォーマンス要件に応じた設定を理解

---

_次のセクション: [02. ストレージサービス](./02-storage.md)_
