# ストレージサービス

## 目次

1. [S3 (Simple Storage Service)](#s3-simple-storage-service)
2. [EBS (Elastic Block Store)](#ebs-elastic-block-store)
3. [EFS (Elastic File System)](#efs-elastic-file-system)
4. [FSx](#fsx)
5. [Storage Gateway](#storage-gateway)
6. [DataSync](#datasync)
7. [サービス比較](#サービス比較)

---

## S3 (Simple Storage Service)

### 概要

オブジェクトストレージサービス。無制限の容量、高い耐久性を提供。

### ストレージクラス詳細比較

| クラス                   | 可用性        | 最小保存期間 | 取得料金 | 用途                 | コスト/GB |
| ------------------------ | ------------- | ------------ | -------- | -------------------- | --------- |
| **Standard**             | 99.999999999% | なし         | なし     | 頻繁アクセス         | 高        |
| **Standard-IA**          | 99.9%         | 30 日        | あり     | 低頻度アクセス       | 中        |
| **One Zone-IA**          | 99.5%         | 30 日        | あり     | 低頻度、単一 AZ      | 低        |
| **Glacier Instant**      | 99.999999999% | 90 日        | あり     | アーカイブ、即座取得 | 低        |
| **Glacier Flexible**     | 99.999999999% | 90 日        | あり     | アーカイブ           | 最低      |
| **Glacier Deep Archive** | 99.999999999% | 180 日       | あり     | 長期アーカイブ       | 最低      |
| **Intelligent-Tiering**  | 99.999999999% | なし         | 監視料金 | 自動最適化           | 変動      |

### ライフサイクル管理

#### 基本設定例

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
    }
  ]
}
```

#### Intelligent-Tiering 設定

```json
{
  "Rules": [
    {
      "ID": "IntelligentTiering",
      "Status": "Enabled",
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

### レプリケーション

#### Cross-Region Replication (CRR)

```json
{
  "Role": "arn:aws:iam::account:role/replication-role",
  "Rules": [
    {
      "ID": "ReplicateToWest",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {
        "Prefix": "important/"
      },
      "Destination": {
        "Bucket": "arn:aws:s3:::backup-bucket-west",
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

### セキュリティ

#### バケットポリシー例

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyInsecureConnections",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": ["arn:aws:s3:::my-bucket", "arn:aws:s3:::my-bucket/*"],
      "Condition": {
        "Bool": {
          "aws:SecureTransport": "false"
        }
      }
    }
  ]
}
```

#### 暗号化設定

```json
{
  "Rules": [
    {
      "ApplyServerSideEncryptionByDefault": {
        "SSEAlgorithm": "aws:kms",
        "KMSMasterKeyID": "arn:aws:kms:region:account:key/key-id"
      },
      "BucketKeyEnabled": true
    }
  ]
}
```

### パフォーマンス最適化

#### マルチパートアップロード

```python
import boto3
from boto3.s3.transfer import TransferConfig

# 設定
config = TransferConfig(
    multipart_threshold=1024 * 25,  # 25MB
    max_concurrency=10,
    multipart_chunksize=1024 * 25,
    use_threads=True
)

s3_client = boto3.client('s3')
s3_client.upload_file(
    'large-file.zip',
    'my-bucket',
    'large-file.zip',
    Config=config
)
```

#### Transfer Acceleration

```
通常のエンドポイント:
https://my-bucket.s3.amazonaws.com

Transfer Acceleration:
https://my-bucket.s3-accelerate.amazonaws.com

利点:
- CloudFrontエッジロケーション活用
- 長距離転送の高速化
- 追加料金が発生
```

### 公式リソース

- [S3 サービス紹介](https://aws.amazon.com/jp/s3/)
- [Amazon S3 Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_S3.pdf)
- [S3 パフォーマンスガイド](https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html)

---

## EBS (Elastic Block Store)

### 概要

EC2 インスタンス用のブロックストレージ。高性能、高可用性を提供。

### ボリュームタイプ詳細

#### 汎用 SSD (gp3/gp2)

```
gp3 (推奨):
- 基準性能: 3,000 IOPS、125 MB/s
- 最大性能: 16,000 IOPS、1,000 MB/s
- IOPS/スループット独立調整
- コスト効率が良い

gp2 (従来):
- 性能: 3 IOPS/GB (最小100 IOPS)
- バーストクレジット制
- 小容量で性能不足の可能性
```

#### プロビジョンド IOPS SSD (io2/io1)

```
io2 (推奨):
- 最大: 64,000 IOPS、1,000 MB/s
- 耐久性: 99.999%
- Multi-Attach対応
- より高いIOPS/GB比

io1 (従来):
- 最大: 64,000 IOPS、1,000 MB/s
- 耐久性: 99.999%
- Multi-Attach対応
```

#### スループット最適化 HDD (st1)

```
特徴:
- 最大: 500 IOPS、500 MB/s
- 大容量データ処理向け
- 順次アクセス最適化

用途:
- ビッグデータ
- データウェアハウス
- ログ処理
```

#### コールド HDD (sc1)

```
特徴:
- 最大: 250 IOPS、250 MB/s
- 最低コスト
- アクセス頻度が低いデータ

用途:
- アーカイブ
- バックアップ
- 災害復旧
```

### スナップショット

#### 自動化設定

```json
{
  "PolicyDetails": {
    "PolicyType": "EBS_SNAPSHOT_MANAGEMENT",
    "ResourceTypes": ["VOLUME"],
    "TargetTags": [
      {
        "Key": "Environment",
        "Value": "Production"
      }
    ],
    "Schedules": [
      {
        "Name": "DailySnapshots",
        "CreateRule": {
          "Interval": 24,
          "IntervalUnit": "HOURS",
          "Times": ["03:00"]
        },
        "RetainRule": {
          "Count": 7
        },
        "CopyTags": true
      }
    ]
  }
}
```

#### 高速スナップショット復元 (FSR)

```
特徴:
- スナップショットから即座にフル性能
- 追加料金が発生
- AZ単位で有効化

用途:
- 本番環境の迅速復旧
- 開発環境の高速構築
- 災害復旧
```

### Multi-Attach

#### 設定例

```bash
# ボリューム作成
aws ec2 create-volume \
    --size 100 \
    --volume-type io2 \
    --iops 1000 \
    --multi-attach-enabled \
    --availability-zone us-east-1a

# 複数インスタンスにアタッチ
aws ec2 attach-volume \
    --volume-id vol-1234567890abcdef0 \
    --instance-id i-1234567890abcdef0 \
    --device /dev/sdf

aws ec2 attach-volume \
    --volume-id vol-1234567890abcdef0 \
    --instance-id i-0987654321fedcba0 \
    --device /dev/sdf
```

#### 注意点

```
制限:
- io1/io2のみ対応
- 同一AZ内のみ
- 最大16インスタンス

要件:
- クラスター対応ファイルシステム
- アプリケーションレベルの調整
- 適切な同期メカニズム
```

### 公式リソース

- [EBS サービス紹介](https://aws.amazon.com/jp/ebs/)
- [Amazon EBS Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_EBS.pdf)

---

## EFS (Elastic File System)

### 概要

フルマネージド NFS ファイルシステム。複数の EC2 インスタンスから同時アクセス可能。

### パフォーマンスモード

#### 汎用モード

```
特徴:
- 最大7,000ファイル操作/秒
- 低レイテンシ
- 小〜中規模ワークロード向け

用途:
- Webサーバー
- CMS
- 一般的なファイル共有
```

#### 最大 I/O モード

```
特徴:
- 7,000以上のファイル操作/秒
- 高レイテンシ
- 大規模並列ワークロード向け

用途:
- ビッグデータ分析
- メディア処理
- 科学計算
```

### スループットモード

#### プロビジョンドスループット

```
設定例:
- ファイルシステムサイズ: 100GB
- プロビジョンドスループット: 500 MB/s
- 料金: ストレージ + スループット

計算:
ベースライン = 100GB × 0.05 MB/s/GB = 5 MB/s
追加必要: 500 - 5 = 495 MB/s
```

#### バーストスループット

```
仕組み:
- ベースライン: 50 MB/s/TB
- バーストクレジット制
- 最大100 MB/s

適用:
- 断続的な高スループット
- 予測可能なワークロード
```

### 暗号化

#### 保存時暗号化

```json
{
  "FileSystemPolicy": {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Deny",
        "Principal": "*",
        "Action": "*",
        "Resource": "arn:aws:elasticfilesystem:*:*:file-system/*",
        "Condition": {
          "Bool": {
            "aws:SecureTransport": "false"
          }
        }
      }
    ]
  }
}
```

### マウント設定

#### EC2 からのマウント

```bash
# EFS Utilsインストール
sudo yum install -y amazon-efs-utils

# マウント
sudo mkdir /mnt/efs
sudo mount -t efs fs-12345678:/ /mnt/efs

# 永続化 (/etc/fstab)
fs-12345678.efs.region.amazonaws.com:/ /mnt/efs efs defaults,_netdev 0 0
```

#### ECS/Fargate での使用

```json
{
  "family": "efs-task",
  "volumes": [
    {
      "name": "efs-volume",
      "efsVolumeConfiguration": {
        "fileSystemId": "fs-12345678",
        "rootDirectory": "/app-data",
        "transitEncryption": "ENABLED",
        "authorizationConfig": {
          "accessPointId": "fsap-12345678",
          "iam": "ENABLED"
        }
      }
    }
  ],
  "containerDefinitions": [
    {
      "name": "app",
      "mountPoints": [
        {
          "sourceVolume": "efs-volume",
          "containerPath": "/data"
        }
      ]
    }
  ]
}
```

### 公式リソース

- [EFS サービス紹介](https://aws.amazon.com/jp/efs/)
- [Amazon EFS Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_EFS.pdf)

---

## FSx

### 概要

高性能ファイルシステムのマネージドサービス。複数のファイルシステムタイプを提供。

### FSx for Windows File Server

#### 特徴

```
プロトコル: SMB
認証: Active Directory統合
パフォーマンス: 最大2GB/s、数百万IOPS
容量: 32GB - 65TB

機能:
- DFS (Distributed File System)
- VSS (Volume Shadow Copy)
- データ重複排除
- 暗号化
```

#### 設定例

```json
{
  "FileSystemType": "WINDOWS",
  "StorageCapacity": 1024,
  "SubnetIds": ["subnet-12345678"],
  "SecurityGroupIds": ["sg-12345678"],
  "WindowsConfiguration": {
    "ActiveDirectoryId": "d-12345678",
    "ThroughputCapacity": 512,
    "WeeklyMaintenanceStartTime": "1:05:00",
    "DailyAutomaticBackupStartTime": "05:00",
    "AutomaticBackupRetentionDays": 7,
    "DeploymentType": "MULTI_AZ_1"
  }
}
```

### FSx for Lustre

#### 特徴

```
用途: HPC、機械学習
パフォーマンス: 最大数百GB/s
S3統合: 透明なデータアクセス

デプロイメントタイプ:
- Scratch: 一時的、高性能
- Persistent: 永続的、レプリケーション
```

#### S3 統合設定

```json
{
  "FileSystemType": "LUSTRE",
  "StorageCapacity": 1200,
  "SubnetIds": ["subnet-12345678"],
  "LustreConfiguration": {
    "ImportPath": "s3://my-bucket/data/",
    "ExportPath": "s3://my-bucket/results/",
    "ImportedFileChunkSize": 1024,
    "DeploymentType": "PERSISTENT_1",
    "PerUnitStorageThroughput": 200
  }
}
```

### FSx for NetApp ONTAP

#### 特徴

```
プロトコル: NFS、SMB、iSCSI
機能: スナップショット、クローン、重複排除
統合: SnapMirror、SnapCenter

利点:
- エンタープライズ機能
- 既存ONTAP環境との統合
- 高い効率性
```

### FSx for OpenZFS

#### 特徴

```
プロトコル: NFS
機能: スナップショット、圧縮、重複排除
パフォーマンス: 最大4GB/s、160万IOPS

利点:
- 高いデータ効率
- ポイントインタイム復旧
- 低レイテンシ
```

### 公式リソース

- [FSx サービス紹介](https://aws.amazon.com/jp/fsx/)
- [Amazon FSx Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_FSx.pdf)

---

## Storage Gateway

### 概要

オンプレミスと AWS クラウドストレージを接続するハイブリッドサービス。

### ゲートウェイタイプ

#### File Gateway

```
プロトコル: NFS、SMB
用途: ファイル共有
ストレージ: S3

特徴:
- ローカルキャッシュ
- S3への透明なアクセス
- メタデータ保持
```

#### Volume Gateway

##### Stored Volumes

```
容量: 1GB - 16TB (ボリューム単位)
最大: 32ボリューム/ゲートウェイ
プライマリデータ: オンプレミス
バックアップ: S3 (スナップショット)

用途:
- 既存ストレージの拡張
- 低レイテンシアクセス
- 災害復旧
```

##### Cached Volumes

```
容量: 1GB - 32TB (ボリューム単位)
最大: 32ボリューム/ゲートウェイ
プライマリデータ: S3
キャッシュ: オンプレミス

用途:
- 頻繁アクセスデータのキャッシュ
- ストレージコスト削減
- スケーラビリティ
```

#### Tape Gateway (VTL)

```
プロトコル: iSCSI
エミュレート: 物理テープライブラリ
ストレージ: S3、Glacier

特徴:
- 既存バックアップソフト対応
- 仮想テープ (100GB - 5TB)
- 自動アーカイブ
```

### デプロイメント

#### VM 形式

```
サポート:
- VMware vSphere
- Microsoft Hyper-V
- Linux KVM

要件:
- 4vCPU、16GB RAM (最小)
- ローカルディスク (キャッシュ用)
- ネットワーク帯域
```

#### ハードウェアアプライアンス

```
提供: Dell EMC
モデル: PowerEdge R640
用途: 高性能要件

利点:
- 事前設定済み
- サポート統合
- 予測可能な性能
```

### 公式リソース

- [Storage Gateway サービス紹介](https://aws.amazon.com/jp/storagegateway/)
- [AWS Storage Gateway Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_StorageGateway.pdf)

---

## DataSync

### 概要

オンプレミスと AWS 間、AWS 内でのデータ転送サービス。

### 転送パターン

#### オンプレミス → AWS

```
ソース:
- NFS
- SMB
- HDFS
- オブジェクトストレージ

デスティネーション:
- S3
- EFS
- FSx
```

#### AWS → AWS

```
パターン:
- S3 → EFS
- EFS → S3
- S3 → FSx
- FSx → S3

用途:
- データ移行
- バックアップ
- アーカイブ
```

### エージェント設定

#### デプロイメント

```bash
# VMware OVA
# EC2 AMI
# Hyper-V VHD

# エージェント作成
aws datasync create-agent \
    --agent-name "MyAgent" \
    --activation-key "ABCDE-12345-FGHIJ-67890"
```

#### ネットワーク要件

```
帯域幅: 最小100Mbps推奨
ポート: 80, 443 (HTTPS)
NTP: 時刻同期必須

最適化:
- 専用線使用
- 帯域幅制限設定
- 並列転送調整
```

### タスク設定

#### 基本設定

```json
{
  "SourceLocationArn": "arn:aws:datasync:region:account:location/loc-source",
  "DestinationLocationArn": "arn:aws:datasync:region:account:location/loc-dest",
  "Name": "MyTransferTask",
  "Options": {
    "VerifyMode": "POINT_IN_TIME_CONSISTENT",
    "OverwriteMode": "ALWAYS",
    "Atime": "BEST_EFFORT",
    "Mtime": "PRESERVE",
    "Uid": "INT_VALUE",
    "Gid": "INT_VALUE",
    "PreserveDeletedFiles": "PRESERVE",
    "PreserveDevices": "NONE",
    "PosixPermissions": "PRESERVE",
    "BytesPerSecond": 104857600
  }
}
```

### 公式リソース

- [DataSync サービス紹介](https://aws.amazon.com/jp/datasync/)
- [AWS DataSync Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_DataSync.pdf)

---

## サービス比較

### ストレージタイプ別比較

| 要件                       | 推奨サービス    | 理由                           |
| -------------------------- | --------------- | ------------------------------ |
| **オブジェクトストレージ** | S3              | 無制限容量、高耐久性           |
| **ブロックストレージ**     | EBS             | 高性能、EC2 統合               |
| **ファイル共有**           | EFS             | NFS プロトコル、マルチアクセス |
| **Windows 環境**           | FSx for Windows | SMB、AD 統合                   |
| **HPC**                    | FSx for Lustre  | 超高性能、S3 統合              |
| **ハイブリッド**           | Storage Gateway | オンプレミス統合               |

### パフォーマンス比較

| サービス        | 最大スループット | 最大 IOPS | レイテンシ |
| --------------- | ---------------- | --------- | ---------- |
| **EBS gp3**     | 1,000 MB/s       | 16,000    | 低         |
| **EBS io2**     | 1,000 MB/s       | 64,000    | 最低       |
| **EFS**         | 10+ GB/s         | 500,000+  | 中         |
| **FSx Lustre**  | 数百 GB/s        | 数百万    | 低         |
| **FSx Windows** | 2 GB/s           | 数百万    | 低         |

### コスト比較 (月額概算)

#### 1TB データの場合

```
S3 Standard: $23
S3 Standard-IA: $12.5
S3 Glacier: $4
EBS gp3: $80
EFS Standard: $300
FSx Windows: $130-390
```

### 選択フローチャート

```
データアクセスパターンは？
├─ 単一インスタンス → ブロックストレージ必要？
│   ├─ Yes → EBS
│   └─ No → S3
├─ 複数インスタンス → プロトコルは？
│   ├─ NFS → EFS
│   ├─ SMB → FSx for Windows
│   └─ 高性能 → FSx for Lustre
└─ ハイブリッド → Storage Gateway
```

---

_次のセクション: [03. データベースサービス](./03-database.md)_
