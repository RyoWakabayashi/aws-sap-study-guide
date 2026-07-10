# アーキテクチャ図集

<!--
Copyright (c) 2025 AWS SAP Study Guide
Licensed under the MIT License. See LICENSE file for details.
-->

SAP-C02の設問は、文章だけでは構成イメージが掴みにくいアーキテクチャパターンを問うものが多くあります。
本ファイルは、頻出パターンを [Mermaid](https://mermaid.js.org/) 図で可視化したものです。GitHub上では自動的に図として描画されます。

## 目次

1. [3層アーキテクチャ（Multi-AZ）](#3層アーキテクチャmulti-az)
2. [災害復旧パターン: Backup and Restore](#災害復旧パターン-backup-and-restore)
3. [災害復旧パターン: Pilot Light](#災害復旧パターン-pilot-light)
4. [災害復旧パターン: Warm Standby](#災害復旧パターン-warm-standby)
5. [災害復旧パターン: Multi-Site Active/Active](#災害復旧パターン-multi-site-activeactive)
6. [Hub-and-Spoke ネットワーク（Transit Gateway）](#hub-and-spoke-ネットワークtransit-gateway)
7. [マイクロサービス間通信（VPC Lattice）](#マイクロサービス間通信vpc-lattice)
8. [サーバーレスイベント駆動アーキテクチャ](#サーバーレスイベント駆動アーキテクチャ)
9. [マルチアカウント・ランディングゾーン](#マルチアカウントランディングゾーン)
10. [データレイク／データウェアハウス統合基盤](#データレイクデータウェアハウス統合基盤)

---

## 3層アーキテクチャ（Multi-AZ）

最も基本的な高可用性パターン。各層をAZ間で冗長化する。

```mermaid
graph TB
    User[利用者] --> R53[Route 53]
    R53 --> CF[CloudFront]
    CF --> ALB[Application Load Balancer]

    subgraph "AZ-a"
        Web1[Webサーバー<br/>EC2 / ECS]
        App1[アプリサーバー<br/>EC2 / ECS]
    end

    subgraph "AZ-c"
        Web2[Webサーバー<br/>EC2 / ECS]
        App2[アプリサーバー<br/>EC2 / ECS]
    end

    ALB --> Web1
    ALB --> Web2
    Web1 --> App1
    Web2 --> App2

    App1 --> DBPrimary[(RDS/Aurora<br/>プライマリ - AZ-a)]
    App2 --> DBPrimary
    DBPrimary -. 同期レプリケーション .-> DBStandby[(RDS/Aurora<br/>スタンバイ - AZ-c)]

    App1 --> Cache[(ElastiCache)]
    App2 --> Cache
```

**試験での着眼点**: 各層が単一AZに依存していないか（SPOFの有無）を確認する。DBは同期レプリケーションのMulti-AZ配置が基本。

---

## 災害復旧パターン: Backup and Restore

最も低コスト・最も長いRTO/RPOのパターン。

```mermaid
graph LR
    subgraph "プライマリリージョン（本番稼働中）"
        App[アプリケーション]
        DB[(データベース)]
        App --> DB
    end

    DB -. 定期バックアップ .-> S3[S3 / AWS Backup<br/>クロスリージョンコピー]

    subgraph "DRリージョン（平常時は何も起動していない）"
        S3 -. 災害発生時に復元 .-> RestoreDB[(データベース復元)]
        RestoreDB -. 起動 .-> RestoreApp[アプリケーション起動]
    end
```

**RTO/RPO目安**: 数時間〜1日 / 数時間　**コスト**: 最小

---

## 災害復旧パターン: Pilot Light

コアとなるデータベースのみ常時稼働させ、アプリ層は災害時に起動する。

```mermaid
graph LR
    subgraph "プライマリリージョン"
        App1[アプリケーション<br/>フル稼働]
        DB1[(データベース<br/>プライマリ)]
        App1 --> DB1
    end

    DB1 -. 継続的レプリケーション .-> DB2

    subgraph "DRリージョン（最小構成で待機）"
        DB2[(データベース<br/>レプリカ・常時起動)]
        App2[アプリケーション<br/>停止中のインスタンス/AMI]
    end

    DB2 -.災害時に昇格・App起動.-> App2
```

**RTO/RPO目安**: 数十分 / 数分　**コスト**: 低

---

## 災害復旧パターン: Warm Standby

縮小版のフルスタックを常時稼働させ、災害時にスケールアップする。

```mermaid
graph LR
    subgraph "プライマリリージョン（フル規模）"
        ALB1[ALB]
        App1[アプリ x10台]
        DB1[(DB プライマリ)]
        ALB1 --> App1 --> DB1
    end

    DB1 -. 継続的レプリケーション .-> DB2

    subgraph "DRリージョン（縮小版・常時稼働）"
        ALB2[ALB]
        App2[アプリ x2台]
        DB2[(DB レプリカ)]
        ALB2 --> App2 --> DB2
    end

    R53[Route 53<br/>ヘルスチェック] -->|平常時| ALB1
    R53 -.災害時フェイルオーバー.-> ALB2
    App2 -.災害時にAuto Scalingで増強.-> App2
```

**RTO/RPO目安**: 数分 / 秒〜分　**コスト**: 中

---

## 災害復旧パターン: Multi-Site Active/Active

複数サイトで常時本番稼働させ、災害時はトラフィック制御のみで対応する。

```mermaid
graph TB
    R53[Route 53<br/>レイテンシ/加重ルーティング]

    subgraph "リージョンA（本番稼働）"
        ALB1[ALB]
        App1[アプリ]
        DB1[(DB)]
        ALB1 --> App1 --> DB1
    end

    subgraph "リージョンB（本番稼働）"
        ALB2[ALB]
        App2[アプリ]
        DB2[(DB)]
        ALB2 --> App2 --> DB2
    end

    R53 --> ALB1
    R53 --> ALB2
    DB1 <-. 双方向レプリケーション<br/>Aurora Global DB書込は単一/<br/>Aurora DSQLは双方向強整合 .-> DB2
```

**RTO/RPO目安**: ほぼゼロ / ほぼゼロ　**コスト**: 最大

---

## Hub-and-Spoke ネットワーク（Transit Gateway）

多数のVPC・オンプレミス拠点を集約管理するパターン。

```mermaid
graph TB
    OnPrem[オンプレミス拠点] -->|Direct Connect / VPN| TGW

    TGW[Transit Gateway]

    TGW --- VPC1[VPC: 本番環境]
    TGW --- VPC2[VPC: 開発環境]
    TGW --- VPC3[VPC: 共有サービス<br/>DNS, AD, ログ集約]
    TGW --- VPC4[VPC: セキュリティ検査<br/>GWLB + FW]
```

**試験での着眼点**: VPC Peeringのフルメッシュ（VPCが5つならペアリング10本）と比較し、Transit Gatewayなら5本の接続で済む管理性の違いを説明できるようにする。

---

## マイクロサービス間通信（VPC Lattice）

複数VPC・複数アカウントにまたがるサービスを、統一的な認証・可観測性で接続する。

```mermaid
graph TB
    Client[クライアント] --> LatticeService[VPC Lattice<br/>Service Network]

    subgraph "アカウントA / VPC-1"
        SvcA[注文サービス<br/>ECS]
    end

    subgraph "アカウントB / VPC-2"
        SvcB[在庫サービス<br/>Lambda]
    end

    subgraph "アカウントC / VPC-3"
        SvcC[決済サービス<br/>EC2]
    end

    LatticeService --> SvcA
    LatticeService --> SvcB
    LatticeService --> SvcC

    ResourceGW[VPC Lattice<br/>Resource Gateway] --> RDS[(オンプレミス互換DB<br/>RDS)]
    SvcA -. TCPリソースとして参照 .-> ResourceGW
```

**試験での着眼点**: PrivateLink/Transit Gatewayによる接続と比較し、VPC Latticeが「サービス単位」の認証・認可・可観測性を統一する点が差別化ポイント。

---

## サーバーレスイベント駆動アーキテクチャ

疎結合なコンポーネントをイベントでつなぐ設計パターン。

```mermaid
graph LR
    S3Upload[S3<br/>ファイルアップロード] -->|イベント通知| EventBridge[EventBridge]

    EventBridge -->|ルーティング| Lambda1[Lambda<br/>画像変換]
    EventBridge -->|ルーティング| SQS[SQS<br/>キュー]
    EventBridge -->|ルーティング| SNS[SNS<br/>ファンアウト通知]

    SQS --> Lambda2[Lambda<br/>データ処理]
    Lambda2 --> DynamoDB[(DynamoDB)]

    SNS --> Lambda3[Lambda<br/>通知処理]
    SNS --> SQS2[SQS<br/>監査ログキュー]

    Lambda1 --> S3Output[S3<br/>変換後ファイル]
```

**試験での着眼点**: 「疎結合」「サービス間の依存を減らしたい」というキーワードが出たら、直接呼び出しではなくEventBridge/SQS/SNSを挟む設計を検討する（[12. 頻出キーワード対応表](./12-keyword-cheatsheet.md)参照）。

---

## マルチアカウント・ランディングゾーン

Control Towerで構築する標準的なOU構成。

```mermaid
graph TB
    Root[Organizations<br/>管理アカウント Root]

    Root --> SecurityOU[Security OU]
    Root --> InfraOU[Infrastructure OU]
    Root --> WorkloadsOU[Workloads OU]
    Root --> SandboxOU[Sandbox OU]
    Root --> SuspendedOU[Suspended OU]

    SecurityOU --> LogArchive[Log Archive<br/>アカウント]
    SecurityOU --> Audit[Audit<br/>アカウント]

    WorkloadsOU --> Prod[Production<br/>アカウント]
    WorkloadsOU --> Staging[Staging<br/>アカウント]
    WorkloadsOU --> Dev[Development<br/>アカウント]

    SandboxOU --> Sandbox1[個人検証用<br/>アカウント]
```

**試験での着眼点**: `Log Archive`（CloudTrail/Configログの集約）と`Audit`（セキュリティ監査用の読み取り専用アクセス）はControl Tower導入時に自動生成される専用アカウントである点を押さえる。

---

## データレイク／データウェアハウス統合基盤

データレイクハウスパターン（構造化・非構造化データの統合分析基盤）。

```mermaid
graph LR
    subgraph "データソース"
        RDS[(RDS/Aurora)]
        App[アプリケーションログ]
        IoT[IoTデバイス]
    end

    RDS -->|DMS| RawS3[S3<br/>Raw Layer]
    App -->|Kinesis Firehose| RawS3
    IoT -->|Kinesis Data Streams| RawS3

    RawS3 -->|Glue ETL| ProcessedS3[S3<br/>Processed Layer]
    ProcessedS3 -->|Glue ETL| CuratedS3[S3 Tables<br/>Curated Layer<br/>Iceberg形式]

    Glue[Glue Data Catalog] -.メタデータ管理.- RawS3
    Glue -.メタデータ管理.- ProcessedS3
    Glue -.メタデータ管理.- CuratedS3

    CuratedS3 --> Athena[Athena<br/>アドホッククエリ]
    CuratedS3 --> Redshift[Redshift Spectrum<br/>大規模分析]
    Athena --> QuickSight[QuickSight<br/>BIダッシュボード]
    Redshift --> QuickSight
```

**試験での着眼点**: データレイク（スキーマオンリード、柔軟）とデータウェアハウス（スキーマオンライト、高速集計）の使い分け、および両者を統合するレイクハウスパターンの理解（[07. アーキテクチャパターン](./07-architecture.md)参照）。

---

## ライセンス

このコンテンツは MIT License の下で公開されています。詳細は [LICENSE](./LICENSE) ファイルをご確認ください。
