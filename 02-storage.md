# ストレージサービス

<!-- 
Copyright (c) 2025 AWS SAP Study Guide
Licensed under the MIT License. See LICENSE file for details.
-->

## 目次

1. [S3 (Simple Storage Service)](#s3-simple-storage-service)
2. [EBS (Elastic Block Store)](#ebs-elastic-block-store)
3. [EFS (Elastic File System)](#efs-elastic-file-system)
4. [FSx](#fsx)
5. [Storage Gateway](#storage-gateway)
6. [ストレージ選択の指針](#ストレージ選択の指針)

---

## S3 (Simple Storage Service)

### 基本概念と特徴

S3の位置づけ

- AWSの基盤となるオブジェクトストレージサービス
- 事実上無制限の容量、99.999999999%（11 9's）の耐久性
- インターネット経由でのアクセス、RESTful API

主要な特徴

- **高い耐久性**: 複数のAZに自動的にデータを複製
- **スケーラビリティ**: 容量制限なし、自動スケーリング
- **豊富な機能**: バージョニング、暗号化、アクセス制御
- **コスト効率**: 使用量に応じた従量課金

### ストレージクラスの選択指針

Standard（標準）

- **使用場面**: 頻繁にアクセスされるデータ
- **特徴**: 最高のパフォーマンス、即座のアクセス
- **コスト**: 最も高い保存料金、取得料金なし
- **適用例**: Webサイトコンテンツ、アプリケーションデータ

Standard-IA（低頻度アクセス）

- **使用場面**: 月に1回程度アクセスされるデータ
- **特徴**: 保存料金が安い、取得時に料金発生
- **最小保存期間**: 30日
- **適用例**: バックアップ、災害復旧データ

One Zone-IA

- **使用場面**: 重要度の低い低頻度アクセスデータ
- **特徴**: 単一AZ保存、Standard-IAより20%安い
- **リスク**: AZ障害時にデータ損失の可能性
- **適用例**: 再作成可能なデータ、セカンダリバックアップ

Glacier Instant Retrieval

- **使用場面**: 四半期に1回程度アクセス、即座の取得が必要
- **特徴**: アーカイブ料金、ミリ秒での取得
- **最小保存期間**: 90日
- **適用例**: 医療画像、メディアアセット

Glacier Flexible Retrieval

- **使用場面**: 年に1〜2回のアクセス、取得時間許容可能
- **特徴**: 非常に安い保存料金、取得に数分〜数時間
- **取得オプション**: 迅速（1-5分）、標準（3-5時間）、大容量（5-12時間）
- **適用例**: 長期バックアップ、コンプライアンス保管

Glacier Deep Archive

- **使用場面**: 7年以上の長期保管、稀なアクセス
- **特徴**: 最も安い保存料金、取得に12時間以上
- **最小保存期間**: 180日
- **適用例**: 法的要件による長期保管、デジタル保存

Intelligent-Tiering

- **使用場面**: アクセスパターンが不明または変動
- **特徴**: アクセス頻度に応じて自動的にクラス移動
- **監視料金**: オブジェクトあたりの月額料金
- **適用例**: データレイク、分析データ

### S3の高度な機能

バージョニング

- **目的**: データの誤削除・上書き保護
- **動作**: 同一キーで複数バージョンを保持
- **考慮事項**: ストレージ使用量の増加、ライフサイクル管理の必要性

Cross-Region Replication (CRR)

- **目的**: 災害復旧、コンプライアンス、レイテンシ削減
- **要件**: バージョニング有効、適切なIAMロール
- **選択的レプリケーション**: プレフィックス、タグベース

Transfer Acceleration

- **目的**: 世界中からの高速アップロード
- **仕組み**: CloudFrontエッジロケーション経由
- **適用場面**: 大容量ファイル、遠隔地からのアップロード

イベント通知

- **連携先**: Lambda、SQS、SNS
- **トリガー**: オブジェクト作成、削除、復元
- **用途**: 自動処理、ワークフロー開始

### セキュリティとアクセス制御

アクセス制御の階層

1. **IAMポリシー**: ユーザー・ロールベース
2. **バケットポリシー**: リソースベース
3. **ACL**: オブジェクトレベル（レガシー）
4. **Access Points**: 大規模データセット向け

暗号化オプション

- **SSE-S3**: S3管理キー（デフォルト）
- **SSE-KMS**: KMS管理キー、アクセスログ
- **SSE-C**: 顧客管理キー
- **クライアント側暗号化**: アプリケーションレベル

### 公式リソース

- [S3 サービス紹介](https://aws.amazon.com/jp/s3/)
- [Amazon S3 Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_S3.pdf)
- [S3 パフォーマンスガイド](https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html)

---

## EBS (Elastic Block Store)

### 基本概念と特徴

EBSの位置づけ

- EC2インスタンス用の永続ブロックストレージ
- 高い可用性と耐久性（単一AZ内で複製）
- スナップショット機能による柔軟なバックアップ

主要な特徴

- **永続性**: インスタンス停止後もデータ保持
- **高性能**: 一貫したIOPS性能
- **スケーラビリティ**: 動的なサイズ・性能変更
- **スナップショット**: S3への増分バックアップ

### ボリュームタイプの選択指針

gp3（汎用SSD - 最新世代）

- **使用場面**: 大部分のワークロード
- **特徴**: ベースライン性能、独立したIOPS・スループット設定
- **性能**: 3,000 IOPS、125 MB/s（ベースライン）
- **コスト効率**: gp2より20%安い
- **適用例**: 一般的なアプリケーション、開発環境

gp2（汎用SSD - 前世代）

- **使用場面**: 既存システム、シンプルな要件
- **特徴**: サイズに比例したIOPS（3 IOPS/GB）
- **バーストクレジット**: 小容量ボリュームの一時的高性能
- **移行推奨**: 新規作成時はgp3を推奨

io2/io2 Block Express（プロビジョンドIOPS SSD）

- **使用場面**: 高IOPS要件、ミッションクリティカル
- **特徴**: 指定したIOPS性能を保証
- **耐久性**: 99.999%（年間10分未満のダウンタイム）
- **適用例**: 大規模データベース、高頻度トランザクション

io1（プロビジョンドIOPS SSD - 前世代）

- **使用場面**: レガシーシステム
- **移行推奨**: 新規作成時はio2を推奨

st1（スループット最適化HDD）

- **使用場面**: 大容量、順次アクセス中心
- **特徴**: 高いスループット、低いIOPS
- **コスト**: SSDより大幅に安い
- **適用例**: ビッグデータ、データウェアハウス、ログ処理

sc1（コールドHDD）

- **使用場面**: 最も低頻度のアクセス
- **特徴**: 最も安いEBSオプション
- **性能**: 最低限のスループット
- **適用例**: アーカイブ、バックアップ

### EBSの設計考慮事項

パフォーマンス最適化

- **EBS最適化インスタンス**: 専用帯域幅の確保
- **マルチアタッチ**: 複数インスタンスからの同時アクセス（io1/io2のみ）
- **RAID構成**: 複数ボリュームによる性能・冗長性向上

可用性とバックアップ

- **スナップショット戦略**: 定期的な自動バックアップ
- **クロスリージョンコピー**: 災害復旧対応
- **高速スナップショット復元**: 大容量ボリュームの高速復元

暗号化

- **保存時暗号化**: KMS統合、透過的な暗号化
- **転送時暗号化**: インスタンス-EBS間の暗号化
- **スナップショット暗号化**: 自動的な暗号化継承

### 公式リソース

- [EBS サービス紹介](https://aws.amazon.com/jp/ebs/)
- [Amazon EBS Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_EBS.pdf)

---

## EFS (Elastic File System)

### 基本概念と特徴

EFSの位置づけ

- フルマネージドなNFSファイルシステム
- 複数のEC2インスタンスから同時アクセス可能
- POSIX準拠、既存アプリケーションとの互換性

主要な特徴

- **共有アクセス**: 数千のインスタンスから同時接続
- **自動スケーリング**: ペタバイト規模まで自動拡張
- **高可用性**: 複数AZでの自動レプリケーション
- **POSIX準拠**: 標準的なファイルシステムセマンティクス

### パフォーマンスモード

汎用モード

- **特徴**: 最も低いレイテンシ
- **制限**: 7,000ファイル操作/秒まで
- **適用場面**: 一般的なワークロード、レイテンシ重視

最大I/Oモード

- **特徴**: より高いスループットとIOPS
- **トレードオフ**: わずかに高いレイテンシ
- **適用場面**: 高並列性、大規模ワークロード

### スループットモード

バーストスループット

- **仕組み**: ファイルシステムサイズに比例
- **バーストクレジット**: 一時的な高性能
- **適用場面**: 変動するワークロード

プロビジョンドスループット

- **仕組み**: 指定したスループットを保証
- **コスト**: 追加料金が発生
- **適用場面**: 一貫した高性能が必要

### ストレージクラス

Standard

- **特徴**: 頻繁にアクセスされるデータ
- **可用性**: 複数AZでの冗長化
- **コスト**: 高い保存料金

Infrequent Access (IA)

- **特徴**: 低頻度アクセスデータ
- **コスト削減**: 最大92%の削減
- **自動移行**: ライフサイクル管理

### 使用場面と設計パターン

コンテンツ管理

- **Webサーバー**: 共有コンテンツの配信
- **メディア処理**: 複数インスタンスでの並列処理

アプリケーション共有

- **設定ファイル**: 複数インスタンス間での設定共有
- **ログ集約**: 中央集権的なログ管理

データ分析

- **ビッグデータ**: 複数の分析ツールからのアクセス
- **機械学習**: 訓練データの共有

### 公式リソース

- [EFS サービス紹介](https://aws.amazon.com/jp/efs/)
- [Amazon EFS Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_EFS.pdf)

---

## FSx

### 基本概念

FSxの位置づけ

- 高性能ファイルシステムのマネージドサービス
- 特定のワークロードに最適化された複数のオプション
- オンプレミスファイルシステムからの移行に適している

### FSx for Windows File Server

特徴

- **Windows環境**: Active Directory統合
- **SMBプロトコル**: Windows標準のファイル共有
- **高性能**: SSDベース、高いスループット
- **バックアップ**: 自動バックアップ、ポイントインタイム復旧

使用場面

- **Windowsワークロード**: .NETアプリケーション
- **ファイルサーバー移行**: オンプレミスからの移行
- **共有ストレージ**: Windows環境での共有

### FSx for Lustre

特徴

- **高性能コンピューティング**: HPC、機械学習向け
- **S3統合**: S3との透過的な統合
- **並列処理**: 数百GB/sのスループット
- **一時的利用**: 処理期間中のみの利用も可能

使用場面

- **科学計算**: シミュレーション、解析
- **機械学習**: 大規模データセットの処理
- **メディア処理**: 動画レンダリング、画像処理

### FSx for NetApp ONTAP

特徴

- **NetApp機能**: 重複排除、圧縮、スナップショット
- **マルチプロトコル**: NFS、SMB、iSCSI
- **ハイブリッド**: オンプレミスとの統合
- **データ管理**: 高度なデータ管理機能

使用場面

- **エンタープライズ**: 既存NetApp環境の拡張
- **データベース**: Oracle、SQL Serverなど
- **仮想化**: VMware環境のストレージ

### FSx for OpenZFS

特徴

- **ZFSファイルシステム**: 高い信頼性とパフォーマンス
- **スナップショット**: 瞬時のスナップショット作成
- **圧縮**: 透過的なデータ圧縮
- **NFS**: Linux/Unix環境での利用

使用場面

- **Linux/Unix**: オープンソース環境
- **データベース**: 高性能が要求されるDB
- **開発環境**: スナップショット機能の活用

---

## Storage Gateway

### 基本概念

Storage Gatewayの位置づけ

- オンプレミスとAWSクラウドを接続するハイブリッドストレージ
- 既存のオンプレミス環境を段階的にクラウド化
- 3つの異なるゲートウェイタイプを提供

### File Gateway

特徴

- **NFS/SMBインターフェース**: 既存アプリケーションとの互換性
- **S3統合**: ファイルをS3オブジェクトとして保存
- **ローカルキャッシュ**: 頻繁にアクセスされるデータをローカル保持

使用場面

- **ファイル共有**: オンプレミスからクラウドへの移行
- **バックアップ**: ファイルサーバーのクラウドバックアップ
- **アーカイブ**: 古いファイルのクラウド保管

### Volume Gateway

Stored Volumes

- **プライマリデータ**: オンプレミスに保存
- **非同期バックアップ**: S3への増分バックアップ
- **容量**: 1GB〜16TBのボリューム
- **使用場面**: 低レイテンシアクセスが必要、段階的移行

Cached Volumes

- **プライマリデータ**: S3に保存
- **ローカルキャッシュ**: 頻繁にアクセスされるデータ
- **容量**: 1GB〜32TBのボリューム
- **使用場面**: ストレージ容量の拡張、コスト削減

### Tape Gateway (VTL)

特徴

- **仮想テープライブラリ**: 既存のバックアップソフトウェアと互換
- **S3/Glacier統合**: 仮想テープをクラウドに保存
- **コスト削減**: 物理テープインフラの削減

使用場面

- **テープバックアップ移行**: 既存のテープ環境からの移行
- **長期保管**: コンプライアンス要件への対応
- **コスト最適化**: テープ管理コストの削減

### 公式リソース

- [Storage Gateway サービス紹介](https://aws.amazon.com/jp/storagegateway/)
- [AWS Storage Gateway Black Belt](https://d1.awsstatic.com/webinars/jp/pdf/services/20200826_BlackBelt_StorageGateway.pdf)

---

## ストレージ選択の指針

### アクセスパターンによる選択

頻繁なアクセス

- **S3 Standard**: Webアプリケーション、CDN
- **EBS gp3**: データベース、ファイルシステム
- **EFS Standard**: 共有ファイルシステム

低頻度アクセス

- **S3 Standard-IA**: バックアップ、災害復旧
- **EFS IA**: 共有ファイルの長期保管
- **Glacier**: アーカイブ、コンプライアンス

アーカイブ

- **Glacier Deep Archive**: 長期保管、法的要件
- **S3 Intelligent-Tiering**: 不明なアクセスパターン

### パフォーマンス要件による選択

高IOPS要件

- **EBS io2**: データベース、高頻度トランザクション
- **FSx for Lustre**: HPC、機械学習
- **EFS 最大I/Oモード**: 高並列ワークロード

高スループット要件

- **EBS st1**: ビッグデータ、ストリーミング
- **FSx for Lustre**: 大容量ファイル処理
- **S3 Transfer Acceleration**: 大容量アップロード

低レイテンシ要件

- **EBS gp3/io2**: リアルタイム処理
- **EFS 汎用モード**: 対話的ワークロード
- **インスタンスストア**: 一時的な高性能

### 可用性要件による選択

高可用性

- **S3**: 複数AZ自動レプリケーション
- **EFS**: 複数AZ冗長化
- **FSx**: 自動フェイルオーバー

単一AZ許容

- **EBS**: 単一AZ内での冗長化
- **S3 One Zone-IA**: コスト重視
- **インスタンスストア**: 一時的利用

### コスト最適化の観点

ストレージコスト

- **階層化**: アクセス頻度に応じたクラス選択
- **ライフサイクル管理**: 自動的なクラス移行
- **圧縮・重複排除**: FSx ONTAP、OpenZFS

データ転送コスト

- **CloudFront**: 配信コストの削減
- **VPC Endpoint**: AWS内部通信の利用
- **Direct Connect**: 大容量転送の最適化

運用コスト

- **マネージドサービス**: 運用負荷の削減
- **自動化**: ライフサイクル、バックアップの自動化
- **監視**: 使用量の可視化と最適化

---

## まとめ

### 試験でのポイント

ストレージ選択の判断基準

1. **アクセスパターン**: 頻度、予測可能性
2. **パフォーマンス要件**: IOPS、スループット、レイテンシ
3. **可用性要件**: SLA、災害復旧
4. **コスト要件**: 保存料金、転送料金、運用コスト
5. **統合要件**: 既存システム、AWSサービス連携

よくある設計パターン

- **階層化ストレージ**: アクセス頻度に応じた最適化
- **ハイブリッド**: オンプレミスとクラウドの組み合わせ
- **バックアップ戦略**: 複数の保存先、自動化
- **災害復旧**: クロスリージョン、RTO/RPO要件

コスト最適化戦略

- **ライフサイクル管理**: 自動的なクラス移行
- **適切なサイジング**: 過剰容量の回避
- **データ転送最適化**: 効率的な転送方法
- **監視と最適化**: 継続的な使用量分析

---

## ライセンス

このコンテンツは MIT License の下で公開されています。詳細は [LICENSE](./LICENSE) ファイルをご確認ください。
