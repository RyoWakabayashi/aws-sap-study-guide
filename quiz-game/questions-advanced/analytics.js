// AWS Solution Architect Professional 上級編 - 分析・機械学習問題

const advancedAnalyticsQuestions = [
  {
    id: 'adv-analytics-001',
    category: '分析・機械学習',
    question: `大手小売チェーンが、顧客行動分析とリアルタイムレコメンデーションシステムを構築しています。以下の要件があります：

1. 全国1000店舗 + ECサイトの購買データ統合（1日10TB）
2. リアルタイム商品レコメンデーション（100ms以内）
3. 顧客セグメンテーションと行動予測
4. 在庫最適化とダイナミックプライシング
5. A/Bテストによる施策効果測定
6. プライバシー規制（GDPR、CCPA）への準拠
7. 季節性やトレンドを考慮した需要予測

この要件を満たすために、最も適切な分析・機械学習アーキテクチャはどれですか？`,
    options: [
      'Kinesis + SageMaker + Personalize + QuickSight + Lake Formation + Glue + Athenaを使用し、リアルタイム分析基盤を構築する',
      'EMR + Spark + Redshift + Tableau + S3 + DataPipelineを使用し、バッチ処理分析基盤を構築する',
      'Lambda + DynamoDB + ElastiCache + API Gateway + CloudWatch + S3を使用し、サーバーレス分析基盤を構築する',
      'EC2 + Hadoop + Kafka + Elasticsearch + Kibana + PostgreSQLを使用し、オープンソース分析基盤を構築する'
    ],
    correct: 0,
    explanation: `小売チェーンのリアルタイム分析には、Kinesis + SageMaker + Personalize + QuickSight + Lake Formation + Glue + Athenaの組み合わせが最適です。

理由：
1. **Kinesis**: 1日10TBのリアルタイムデータストリーミング
2. **SageMaker**: 顧客行動予測と需要予測の機械学習モデル
3. **Personalize**: リアルタイム商品レコメンデーション（100ms以内）
4. **QuickSight**: ビジネスダッシュボードとA/Bテスト分析
5. **Lake Formation**: データレイクのセキュリティとガバナンス
6. **Glue**: ETL処理とデータカタログ管理
7. **Athena**: アドホック分析とクエリ処理

他の選択肢の問題点：
- **EMR + Spark + Redshift + Tableau + S3 + DataPipelineを使用し、バッチ処理分析基盤を構築する**: バッチ処理はリアルタイムレコメンデーション要件を満たせない
- **Lambda + DynamoDB + ElastiCache + API Gateway + CloudWatch + S3を使用し、サーバーレス分析基盤を構築する**: サーバーレスのみでは大規模データ処理に限界
- **EC2 + Hadoop + Kafka + Elasticsearch + Kibana + PostgreSQLを使用し、オープンソース分析基盤を構築する**: オープンソースは運用負荷が高く、マネージドサービスの利点を活用できない`
  },
  {
    id: 'adv-analytics-002',
    category: '分析・機械学習',
    question: `大手製薬会社が、創薬研究のためのAI/ML基盤を構築しています。以下の要件があります：

1. 分子構造データ、実験結果、文献データの統合分析
2. 深層学習による創薬候補化合物の予測
3. 大規模並列計算（数千GPU）での分子シミュレーション
4. 研究者間でのモデル共有とバージョン管理
5. FDA規制（21 CFR Part 11）への準拠
6. 知的財産の保護とセキュリティ
7. 研究成果の可視化と報告書自動生成

この要件を満たすために、最も適切な創薬AI/MLアーキテクチャはどれですか？`,
    options: [
      'SageMaker + ParallelCluster + FSx for Lustre + Neptune + Comprehend + Macie + QuickSightを使用し、創薬特化AI/ML基盤を構築する',
      'EMR + Spark + Hadoop + Hive + Zeppelin + S3 + Redshiftを使用し、ビッグデータ創薬基盤を構築する',
      'Lambda + Step Functions + DynamoDB + API Gateway + CloudWatch + S3を使用し、サーバーレス創薬基盤を構築する',
      'EC2 + TensorFlow + PyTorch + Jupyter + MLflow + PostgreSQL + Grafanaを使用し、オープンソース創薬基盤を構築する'
    ],
    correct: 0,
    explanation: `製薬会社の創薬AI/ML基盤には、SageMaker + ParallelCluster + FSx for Lustre + Neptune + Comprehend + Macie + QuickSightの組み合わせが最適です。

理由：
1. **SageMaker**: 深層学習モデルの開発・訓練・デプロイ
2. **ParallelCluster**: 数千GPU並列計算環境
3. **FSx for Lustre**: 高性能並列ファイルシステム
4. **Neptune**: 分子構造のグラフデータベース
5. **Comprehend**: 文献データの自然言語処理
6. **Macie**: 知的財産の自動分類と保護
7. **QuickSight**: 研究成果の可視化

他の選択肢の問題点：
- **EMR + Spark + Hadoop + Hive + Zeppelin + S3 + Redshiftを使用し、ビッグデータ創薬基盤を構築する**: EMRは創薬特有の深層学習ワークロードに最適化されていない
- **Lambda + Step Functions + DynamoDB + API Gateway + CloudWatch + S3を使用し、サーバーレス創薬基盤を構築する**: サーバーレスは大規模GPU計算に不適切
- **EC2 + TensorFlow + PyTorch + Jupyter + MLflow + PostgreSQL + Grafanaを使用し、オープンソース創薬基盤を構築する**: オープンソースはFDA規制準拠の証明が困難`
  },
  {
    id: 'adv-analytics-003',
    category: '分析・機械学習',
    question: `大手金融機関が、リアルタイム不正検知とリスク管理システムを構築しています。以下の要件があります：

1. 取引データのリアルタイム分析（1秒間に100万件）
2. 機械学習による不正パターン検知（10ms以内）
3. 複雑な金融リスク計算（VaR、ストレステスト）
4. 規制レポート（バーゼルIII、CCAR）の自動生成
5. 説明可能AI（XAI）による判定根拠の提示
6. モデルドリフト検知と自動再学習
7. 金融規制への完全準拠

この要件を満たすために、最も適切な金融AI/MLアーキテクチャはどれですか？`,
    options: [
      'Kinesis Analytics + SageMaker + Clarify + Model Monitor + Timestream + QuickSight + CloudTrailを使用し、金融特化AI/ML基盤を構築する',
      'Spark Streaming + MLlib + Kafka + Cassandra + Grafana + Airflowを使用し、オープンソース金融基盤を構築する',
      'Lambda + DynamoDB + ElastiCache + API Gateway + Step Functions + CloudWatchを使用し、サーバーレス金融基盤を構築する',
      'EMR + Hadoop + Hive + Presto + Zeppelin + S3 + Redshiftを使用し、バッチ処理金融基盤を構築する'
    ],
    correct: 0,
    explanation: `金融機関のリアルタイム不正検知には、Kinesis Analytics + SageMaker + Clarify + Model Monitor + Timestream + QuickSight + CloudTrailの組み合わせが最適です。

理由：
1. **Kinesis Analytics**: 100万件/秒のリアルタイム分析
2. **SageMaker**: 不正検知モデルの開発・デプロイ
3. **Clarify**: 説明可能AIによる判定根拠提示
4. **Model Monitor**: モデルドリフト検知と品質監視
5. **Timestream**: 金融時系列データの効率的管理
6. **QuickSight**: 規制レポートの自動生成
7. **CloudTrail**: 金融規制準拠の監査証跡

他の選択肢の問題点：
- **Spark Streaming + MLlib + Kafka + Cassandra + Grafana + Airflowを使用し、オープンソース金融基盤を構築する**: オープンソースは金融規制準拠の証明が困難
- **Lambda + DynamoDB + ElastiCache + API Gateway + Step Functions + CloudWatchを使用し、サーバーレス金融基盤を構築する**: サーバーレスは10ms以内の要件と大規模処理に限界
- **EMR + Hadoop + Hive + Presto + Zeppelin + S3 + Redshiftを使用し、バッチ処理金融基盤を構築する**: バッチ処理はリアルタイム要件を満たせない`
  },
  {
    id: 'adv-analytics-004',
    category: '分析・機械学習',
    question: `大手自動車メーカーが、自動運転車のデータ分析基盤を構築しています。以下の要件があります：

1. 車両からのセンサーデータ（1台4TB/日、100万台）
2. 深層学習による物体検知・経路予測モデル
3. エッジでのリアルタイム推論（1ms以内）
4. 大規模分散学習（数万GPU）
5. シミュレーション環境での仮想テスト
6. 安全性検証とモデル認証
7. 地域別データ保護規制への対応

この要件を満たすために、最も適切な自動運転AI/MLアーキテクチャはどれですか？`,
    options: [
      'SageMaker + Greengrass + ParallelCluster + RoboMaker + Ground Truth + FSx for Lustre + Lake Formationを使用し、自動運転特化AI/ML基盤を構築する',
      'EMR + Spark + Hadoop + TensorFlow + Jupyter + S3 + Redshiftを使用し、ビッグデータ自動運転基盤を構築する',
      'Lambda + Step Functions + DynamoDB + Kinesis + API Gateway + CloudWatchを使用し、サーバーレス自動運転基盤を構築する',
      'EC2 + Kubernetes + Kubeflow + MLflow + Prometheus + Grafana + MinIOを使用し、コンテナベース自動運転基盤を構築する'
    ],
    correct: 0,
    explanation: `自動車メーカーの自動運転AI/ML基盤には、SageMaker + Greengrass + ParallelCluster + RoboMaker + Ground Truth + FSx for Lustre + Lake Formationの組み合わせが最適です。

理由：
1. **SageMaker**: 深層学習モデルの大規模分散学習
2. **Greengrass**: エッジでのリアルタイム推論（1ms以内）
3. **ParallelCluster**: 数万GPU並列計算環境
4. **RoboMaker**: 自動運転シミュレーション環境
5. **Ground Truth**: センサーデータのラベリング
6. **FSx for Lustre**: 高性能並列ファイルシステム
7. **Lake Formation**: データレイクのセキュリティとガバナンス

他の選択肢の問題点：
- **EMR + Spark + Hadoop + TensorFlow + Jupyter + S3 + Redshiftを使用し、ビッグデータ自動運転基盤を構築する**: EMRはエッジ推論とシミュレーション要件を満たせない
- **Lambda + Step Functions + DynamoDB + Kinesis + API Gateway + CloudWatchを使用し、サーバーレス自動運転基盤を構築する**: サーバーレスは大規模GPU学習に不適切
- **EC2 + Kubernetes + Kubeflow + MLflow + Prometheus + Grafana + MinIOを使用し、コンテナベース自動運転基盤を構築する**: 自前構築は自動運転特有の要件対応が困難`
  },
  {
    id: 'adv-analytics-005',
    category: '分析・機械学習',
    question: `大手メディア企業が、コンテンツ分析とパーソナライゼーションシステムを構築しています。以下の要件があります：

1. 動画・音声・テキストのマルチモーダル分析
2. リアルタイムコンテンツレコメンデーション
3. 視聴者行動予測と離脱防止
4. コンテンツの自動分類・タグ付け
5. 多言語対応（50言語以上）
6. 著作権侵害検知
7. 広告効果測定と最適化

この要件を満たすために、最も適切なメディアAI/MLアーキテクチャはどれですか？`,
    options: [
      'Rekognition + Transcribe + Comprehend + Translate + Personalize + SageMaker + Kinesis + QuickSightを使用し、メディア特化AI/ML基盤を構築する',
      'OpenCV + FFmpeg + spaCy + TensorFlow + Kafka + Elasticsearch + Kibanaを使用し、オープンソースメディア基盤を構築する',
      'Lambda + Step Functions + DynamoDB + S3 + CloudFront + API Gatewayを使用し、サーバーレスメディア基盤を構築する',
      'EMR + Spark + Hadoop + Hive + Zeppelin + Redshift + Tableauを使用し、ビッグデータメディア基盤を構築する'
    ],
    correct: 0,
    explanation: `メディア企業のコンテンツ分析には、Rekognition + Transcribe + Comprehend + Translate + Personalize + SageMaker + Kinesis + QuickSightの組み合わせが最適です。

理由：
1. **Rekognition**: 動画・画像の物体検知と顔認識
2. **Transcribe**: 音声の自動文字起こし
3. **Comprehend**: テキストの感情分析と分類
4. **Translate**: 50言語対応の自動翻訳
5. **Personalize**: リアルタイムコンテンツレコメンデーション
6. **SageMaker**: 視聴者行動予測モデル
7. **Kinesis**: リアルタイムデータストリーミング

他の選択肢の問題点：
- **OpenCV + FFmpeg + spaCy + TensorFlow + Kafka + Elasticsearch + Kibanaを使用し、オープンソースメディア基盤を構築する**: オープンソースは多言語対応とスケーラビリティに限界
- **Lambda + Step Functions + DynamoDB + S3 + CloudFront + API Gatewayを使用し、サーバーレスメディア基盤を構築する**: サーバーレスのみでは大規模メディア処理に不適切
- **EMR + Spark + Hadoop + Hive + Zeppelin + Redshiftを使用し、バッチ処理メディア基盤を構築する**: バッチ処理はリアルタイムレコメンデーションに不適切`
  },
  {
    id: 'adv-analytics-006',
    category: '分析・機械学習',
    question: `大手製造業が、予知保全とスマートファクトリーシステムを構築しています。以下の要件があります：

1. 工場設備からのIoTセンサーデータ（数万台）
2. 機械学習による設備故障予測
3. 生産効率最適化とボトルネック分析
4. 品質管理と異常検知
5. サプライチェーン最適化
6. エネルギー消費最適化
7. 安全性監視とリスク評価

この要件を満たすために、最も適切な製造業AI/MLアーキテクチャはどれですか？`,
    options: [
      'IoT Analytics + SageMaker + Lookout for Equipment + Timestream + QuickSight + Kinesis + Greengrass + Twinmakerを使用し、製造業特化AI/ML基盤を構築する',
      'InfluxDB + Grafana + TensorFlow + Jupyter + Kafka + Spark + Cassandraを使用し、時系列特化製造基盤を構築する',
      'Lambda + DynamoDB + CloudWatch + SNS + Step Functions + API Gatewayを使用し、サーバーレス製造基盤を構築する',
      'EMR + Hadoop + Spark + Hive + Zeppelin + S3 + Redshiftを使用し、ビッグデータ製造基盤を構築する'
    ],
    correct: 0,
    explanation: `製造業の予知保全システムには、IoT Analytics + SageMaker + Lookout for Equipment + Timestream + QuickSight + Kinesis + Greengrass + Twinmakerの組み合わせが最適です。

理由：
1. **IoT Analytics**: 製造IoTデータの前処理と分析
2. **SageMaker**: 設備故障予測と生産最適化モデル
3. **Lookout for Equipment**: 異常検知専用サービス
4. **Timestream**: 時系列データの効率的管理
5. **QuickSight**: 製造ダッシュボードと分析
6. **Kinesis**: リアルタイムデータストリーミング
7. **Greengrass**: エッジでのローカル処理
8. **Twinmaker**: デジタルツイン構築

他の選択肢の問題点：
- **InfluxDB + Grafana + TensorFlow + Jupyter + Kafka + Spark + Cassandraを使用し、時系列特化製造基盤を構築する**: 時系列特化だが製造業特有の要件に最適化されていない
- **Lambda + DynamoDB + CloudWatch + SNS + Step Functions + API Gatewayを使用し、サーバーレス製造基盤を構築する**: サーバーレスは大規模IoTデータ処理に限界
- **EMR + Hadoop + Spark + Hive + Zeppelin + S3 + Redshiftを使用し、バッチ処理製造基盤を構築する**: バッチ処理はリアルタイム予知保全に不適切`
  },
  {
    id: 'adv-analytics-007',
    category: '分析・機械学習',
    question: `大手ヘルスケア企業が、医療画像診断AIシステムを構築しています。以下の要件があります：

1. 医療画像（CT、MRI、X線）の深層学習分析
2. 診断支援AIの高精度推論
3. 医師との協調診断ワークフロー
4. FDA承認のための臨床試験データ管理
5. HIPAA準拠のセキュリティ
6. 医療機関間でのモデル共有
7. 継続学習による精度向上

この要件を満たすために、最も適切な医療AI/MLアーキテクチャはどれですか？`,
    options: [
      'SageMaker + HealthLake + Comprehend Medical + Macie + CloudTrail + Ground Truth + QuickSightを使用し、医療特化AI/ML基盤を構築する',
      'TensorFlow + PyTorch + DICOM + HL7 + PostgreSQL + Docker + Kubernetesを使用し、オープンソース医療基盤を構築する',
      'Lambda + Step Functions + DynamoDB + S3 + API Gateway + CloudWatchを使用し、サーバーレス医療基盤を構築する',
      'EMR + Spark + Hadoop + Hive + Jupyter + Redshift + Tableauを使用し、ビッグデータ医療基盤を構築する'
    ],
    correct: 0,
    explanation: `ヘルスケア企業の医療画像診断AIには、SageMaker + HealthLake + Comprehend Medical + Macie + CloudTrail + Ground Truth + QuickSightの組み合わせが最適です。

理由：
1. **SageMaker**: 医療画像深層学習モデルの開発・デプロイ
2. **HealthLake**: FHIR準拠の医療データ管理
3. **Comprehend Medical**: 医療テキストの自然言語処理
4. **Macie**: PHI（個人健康情報）の自動検出と保護
5. **CloudTrail**: HIPAA準拠の監査証跡
6. **Ground Truth**: 医療画像のラベリング
7. **QuickSight**: 臨床試験データの可視化

他の選択肢の問題点：
- **TensorFlow + PyTorch + DICOM + HL7 + PostgreSQL + Docker + Kubernetesを使用し、オープンソース医療基盤を構築する**: オープンソースはHIPAA準拠の証明が困難
- **Lambda + Step Functions + DynamoDB + S3 + API Gateway + CloudWatchを使用し、サーバーレス医療基盤を構築する**: サーバーレスは大規模医療画像処理に不適切
- **EMR + Spark + Hadoop + Hive + Jupyter + Redshiftを使用し、バッチ処理医療基盤を構築する**: バッチ処理は診断支援のリアルタイム要件に不適切`
  },
  {
    id: 'adv-analytics-008',
    category: '分析・機械学習',
    question: `大手物流会社が、配送最適化とサプライチェーン分析システムを構築しています。以下の要件があります：

1. 配送ルート最適化（数百万の組み合わせ）
2. 需要予測と在庫最適化
3. リアルタイム配送追跡と遅延予測
4. 燃料消費最適化とCO2削減
5. 倉庫オペレーション最適化
6. 顧客満足度予測
7. 災害時の配送影響分析

この要件を満たすために、最も適切な物流AI/MLアーキテクチャはどれですか？`,
    options: [
      'SageMaker + Location Service + Forecast + Optimization + Kinesis + Timestream + QuickSight + Batch + ParallelClusterを使用し、物流特化AI/ML基盤を構築する',
      'OR-Tools + NetworkX + Pandas + Scikit-learn + PostgreSQL + Redis + Grafanaを使用し、オープンソース物流基盤を構築する',
      'Lambda + Step Functions + DynamoDB + API Gateway + CloudWatch + SNSを使用し、サーバーレス物流基盤を構築する',
      'EMR + Spark + Hadoop + Hive + Zeppelin + S3 + Redshiftを使用し、ビッグデータ物流基盤を構築する'
    ],
    correct: 0,
    explanation: `物流会社の配送最適化システムには、SageMaker + Location Service + Forecast + Optimization + Kinesis + Timestream + QuickSight + Batch + ParallelClusterの組み合わせが最適です。

理由：
1. **SageMaker**: 需要予測と顧客満足度予測モデル
2. **Location Service**: 地理空間データ処理と配送ルート最適化
3. **Forecast**: 時系列需要予測
4. **Optimization**: 大規模組み合わせ最適化問題
5. **Kinesis**: リアルタイム配送データストリーミング
6. **Timestream**: 配送履歴の時系列管理
7. **Batch**: 大規模最適化計算
8. **ParallelCluster**: 並列最適化処理

他の選択肢の問題点：
- **OR-Tools + NetworkX + Pandas + Scikit-learn + PostgreSQL + Redis + Grafanaを使用し、オープンソース物流基盤を構築する**: オープンソースは大規模最適化問題のスケーラビリティに限界
- **Lambda + Step Functions + DynamoDB + API Gateway + CloudWatch + SNSを使用し、サーバーレス物流基盤を構築する**: サーバーレスは大規模最適化計算に不適切
- **EMR + Spark + Hadoop + Hive + Zeppelin + S3 + Redshiftを使用し、バッチ処理物流基盤を構築する**: バッチ処理のみではリアルタイム追跡要件を満たせない`
  },
  {
    id: 'adv-analytics-009',
    category: '分析・機械学習',
    question: `大手エネルギー会社が、スマートグリッド分析とエネルギー最適化システムを構築しています。以下の要件があります：

1. 電力需給予測（気象データ連携）
2. 再生可能エネルギー出力予測
3. 電力品質監視と異常検知
4. エネルギー取引最適化
5. 停電予兆検知と予防保全
6. 顧客の電力使用パターン分析
7. カーボンニュートラル達成支援

この要件を満たすために、最も適切なエネルギーAI/MLアーキテクチャはどれですか？`,
    options: [
      'SageMaker + Forecast + Lookout for Metrics + IoT Analytics + Timestream + Kinesis + QuickSight + Ground Stationを使用し、エネルギー特化AI/ML基盤を構築する',
      'Prophet + LSTM + InfluxDB + Grafana + Kafka + Spark + Cassandraを使用し、時系列特化エネルギー基盤を構築する',
      'Lambda + Step Functions + DynamoDB + CloudWatch + SNS + API Gatewayを使用し、サーバーレスエネルギー基盤を構築する',
      'EMR + Spark + Hadoop + Hive + Jupyter + S3 + Redshiftを使用し、ビッグデータエネルギー基盤を構築する'
    ],
    correct: 0,
    explanation: `エネルギー会社のスマートグリッド分析には、SageMaker + Forecast + Lookout for Metrics + IoT Analytics + Timestream + Kinesis + QuickSight + Ground Stationの組み合わせが最適です。

理由：
1. **SageMaker**: 電力需給予測と使用パターン分析モデル
2. **Forecast**: 時系列電力需要予測
3. **Lookout for Metrics**: 電力品質異常検知
4. **IoT Analytics**: スマートメーターデータ分析
5. **Timestream**: 電力時系列データの効率的管理
6. **Kinesis**: リアルタイム電力データストリーミング
7. **QuickSight**: エネルギーダッシュボード
8. **Ground Station**: 気象衛星データ取得

他の選択肢の問題点：
- **Prophet + LSTM + InfluxDB + Grafana + Kafka + Spark + Cassandraを使用し、時系列特化エネルギー基盤を構築する**: 時系列特化だがエネルギー業界特有の要件に最適化されていない
- **Lambda + Step Functions + DynamoDB + CloudWatch + SNS + API Gatewayを使用し、サーバーレスエネルギー基盤を構築する**: サーバーレスは大規模電力データ処理に限界
- **EMR + Spark + Hadoop + Hive + Jupyter + S3 + Redshiftを使用し、バッチ処理エネルギー基盤を構築する**: バッチ処理はリアルタイム電力監視に不適切`
  },
  {
    id: 'adv-analytics-010',
    category: '分析・機械学習',
    question: `大手保険会社が、保険リスク評価とクレーム処理自動化システムを構築しています。以下の要件があります：

1. 保険リスクの動的評価とプライシング
2. クレーム画像の自動分析
3. 不正クレーム検知
4. 顧客行動分析とチャーン予測
5. 自然災害リスクモデリング
6. 規制レポート（Solvency II）の自動生成
7. 説明可能AIによる判定根拠提示

この要件を満たすために、最も適切な保険AI/MLアーキテクチャはどれですか？`,
    options: [
      'SageMaker + Rekognition + Textract + Comprehend + Forecast + Clarify + QuickSight + Kinesis + Timestreamを使用し、保険特化AI/ML基盤を構築する',
      'Scikit-learn + OpenCV + NLTK + Pandas + PostgreSQL + Redis + Celeryを使用し、オープンソース保険基盤を構築する',
      'Lambda + Step Functions + DynamoDB + S3 + API Gateway + CloudWatchを使用し、サーバーレス保険基盤を構築する',
      'EMR + Spark + MLlib + Hadoop + Hive + Zeppelin + Redshiftを使用し、ビッグデータ保険基盤を構築する'
    ],
    correct: 0,
    explanation: `保険会社のリスク評価システムには、SageMaker + Rekognition + Textract + Comprehend + Forecast + Clarify + QuickSight + Kinesis + Timestreamの組み合わせが最適です。

理由：
1. **SageMaker**: 保険リスク評価とチャーン予測モデル
2. **Rekognition**: クレーム画像の自動分析
3. **Textract**: 保険書類のOCR処理
4. **Comprehend**: クレーム文書の自然言語処理
5. **Forecast**: 自然災害リスク予測
6. **Clarify**: 説明可能AIによる判定根拠提示
7. **QuickSight**: 規制レポート自動生成
8. **Kinesis**: リアルタイムクレームデータ処理

他の選択肢の問題点：
- **Scikit-learn + OpenCV + NLTK + Pandas + PostgreSQL + Redis + Celeryを使用し、オープンソース保険基盤を構築する**: オープンソースは保険業界の規制要件対応が困難
- **Lambda + Step Functions + DynamoDB + S3 + API Gateway + CloudWatchを使用し、サーバーレス保険基盤を構築する**: サーバーレスは大規模保険データ処理に限界
- **EMR + Spark + MLlib + Hadoop + Hive + Zeppelin + Redshiftを使用し、バッチ処理保険基盤を構築する**: バッチ処理はリアルタイムリスク評価に不適切`
  },

  // 複数選択問題
  {
    id: 'adv-analytics-multi-001',
    category: '分析・機械学習',
    question: `大手小売チェーンが、リアルタイム在庫最適化とパーソナライゼーションシステムを構築しています。以下の要件があります：

**要件：**
- 全国1,000店舗のリアルタイム在庫データ分析
- 顧客行動データによるパーソナライゼーション
- 需要予測による自動発注システム
- 1秒間に10万件のトランザクション処理
- 機械学習による価格最適化
- リアルタイムレコメンデーション

このリアルタイム分析システムに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'Amazon Kinesis Data Analytics - リアルタイムストリーム分析',
      'Amazon Personalize - 機械学習パーソナライゼーション',
      'Amazon Forecast - 需要予測サービス',
      'Amazon Redshift - データウェアハウス',
      'AWS Glue - データ統合・ETL',
      'Amazon EMR - ビッグデータ処理'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon Kinesis Data Analytics**
- 1秒間10万件のリアルタイム処理
- ストリーミングデータの即座分析
- 在庫データのリアルタイム集計
- SQLベースの分析クエリ実行
- 低レイテンシでの意思決定支援

**2. Amazon Personalize**
- 顧客行動データによる個別化
- リアルタイムレコメンデーション
- 機械学習による自動最適化
- A/Bテスト機能による効果測定
- 小売業界特化の推奨アルゴリズム

**3. Amazon Forecast**
- 需要予測による自動発注
- 機械学習による高精度予測
- 季節性・トレンド分析
- 外部要因（天気・イベント）考慮
- 在庫最適化による収益向上

**他の選択肢について：**
- **Redshift**: バッチ分析には適しているがリアルタイム処理に不適切
- **Glue**: データ統合には重要だがリアルタイム分析の主要機能ではない
- **EMR**: 大規模バッチ処理には適しているがリアルタイム要件に不適切`
  },

  {
    id: 'adv-analytics-multi-002',
    category: '分析・機械学習',
    question: `金融機関が、不正取引検知とリスク管理のための高度分析システムを構築しています。以下の要件があります：

**要件：**
- 取引データのリアルタイム異常検知
- 複雑な金融商品のリスク分析
- 規制報告書の自動生成
- 顧客セグメンテーション分析
- 大量の履歴データからのパターン発見
- 機械学習による不正検知精度向上

この金融分析システムに必要なAWSサービスを**2つ**選択してください。`,
    options: [
      'Amazon SageMaker - 機械学習プラットフォーム',
      'Amazon Fraud Detector - 不正検知専用サービス',
      'Amazon Athena - サーバーレスクエリサービス',
      'Amazon QuickSight - ビジネスインテリジェンス',
      'AWS Lake Formation - データレイク管理',
      'Amazon Comprehend - 自然言語処理'
    ],
    correct: [0, 1],
    multipleChoice: true,
    explanation: `正解は以下の2つです：

**1. Amazon SageMaker**
- 金融業界特化の機械学習モデル開発
- リスク分析の高度なアルゴリズム実装
- 大量履歴データからのパターン発見
- 自動モデル調整による精度向上
- 規制要件に対応したモデル説明性

**2. Amazon Fraud Detector**
- リアルタイム不正取引検知
- 金融業界特化の不正検知モデル
- 機械学習による検知精度向上
- 低レイテンシでの即座判定
- 金融規制への準拠機能

**他の選択肢について：**
- **Athena**: データクエリには有用だが、機械学習機能が不足
- **QuickSight**: 可視化には重要だが、高度分析の主要機能ではない
- **Lake Formation**: データ管理には重要だが、分析処理の主要機能ではない
- **Comprehend**: 自然言語処理には有用だが、金融分析の主要要件ではない`
  },

  {
    id: 'adv-analytics-multi-003',
    category: '分析・機械学習',
    question: `製造業が、IoTデータを活用した予知保全と品質管理システムを構築しています。以下の要件があります：

**要件：**
- 工場内10,000台のセンサーからのデータ収集
- 機械故障の予知保全システム
- 製品品質の異常検知
- 生産効率の最適化分析
- エネルギー消費量の分析・最適化
- 大規模データの長期保存と分析

この製造業分析システムに必要なAWSサービスを**3つ**選択してください。`,
    options: [
      'Amazon Timestream - 時系列データベース',
      'Amazon Lookout for Equipment - 機械学習による異常検知',
      'AWS IoT Analytics - IoTデータ分析専用サービス',
      'Amazon Redshift - データウェアハウス',
      'Amazon EMR - ビッグデータ処理クラスター',
      'Amazon OpenSearch Service - 検索・分析エンジン'
    ],
    correct: [0, 1, 2],
    multipleChoice: true,
    explanation: `正解は以下の3つです：

**1. Amazon Timestream**
- IoTセンサーデータの効率的な時系列保存
- 高速な時系列クエリ処理
- 自動的なデータ圧縮とライフサイクル管理
- 大規模時系列データに最適化
- コスト効率的な長期保存

**2. Amazon Lookout for Equipment**
- 機械学習による予知保全
- 機械故障の事前検知
- 製造業特化の異常検知アルゴリズム
- センサーデータからの自動学習
- メンテナンス最適化による効率向上

**3. AWS IoT Analytics**
- IoTデータの前処理と変換
- 製造業特有のデータ分析機能
- 品質管理データの統計分析
- 生産効率の可視化と最適化
- エネルギー消費分析

**他の選択肢について：**
- **Redshift**: 構造化データ分析には適しているがIoT時系列データには不適切
- **EMR**: 大規模バッチ処理には適しているがリアルタイムIoT分析には不適切
- **OpenSearch**: 検索機能は有用だが、IoT特化分析の主要機能ではない`
  }
]

module.exports = advancedAnalyticsQuestions
