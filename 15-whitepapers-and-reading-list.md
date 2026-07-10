# 公式ホワイトペーパー・リーディングリスト

<!--
Copyright (c) 2025 AWS SAP Study Guide
Licensed under the MIT License. See LICENSE file for details.
-->

SAP-C02は「AWS Well-Architected Frameworkに基づいた設計判断」を問う試験です。本ガイドのmdファイルは
実践的な要点整理に特化していますが、一次情報であるAWS公式ホワイトペーパーを読むことで、
「なぜその設計原則が存在するのか」という背景まで理解でき、初見のシナリオ問題への対応力が上がります。

> 💡 [README「🎥 動画で学ぶ」](./README.md#-動画で学ぶ)が「聞く・観る」教材のリストであるのに対し、
> 本ファイルは「読む」一次情報のリストです。両方を組み合わせて学習することを推奨します。

## 目次

1. [Well-Architected Framework 関連](#well-architected-framework-関連)
2. [マルチアカウント・ガバナンス関連](#マルチアカウントガバナンス関連)
3. [災害復旧・レジリエンス関連](#災害復旧レジリエンス関連)
4. [移行・モダナイゼーション関連](#移行モダナイゼーション関連)
5. [セキュリティ関連](#セキュリティ関連)
6. [読み進め方の提案](#読み進め方の提案)

---

## Well-Architected Framework 関連

試験全体を貫く評価軸そのもの。まず全体像（フレームワーク本体）を読んでから、
出題比率の高いドメインに関連する柱を優先的に読むとよい。

- [AWS Well-Architected Framework（フレームワーク本体）][waf-main] — 6つの柱の全体像。最初に読むべき一次情報
- [運用上の優秀性の柱（Operational Excellence Pillar）][waf-ops]
- [セキュリティの柱（Security Pillar）][waf-security]
- [信頼性の柱（Reliability Pillar）][waf-reliability]
- [パフォーマンス効率の柱（Performance Efficiency Pillar）][waf-performance]
- [コスト最適化の柱（Cost Optimization Pillar）][waf-cost]
- [持続可能性の柱（Sustainability Pillar）][waf-sustainability]

**試験での着眼点**: 各柱の「設計原則（Design Principles）」の項目は、選択肢の妥当性を判断する際の
根拠になることが多い。特にセキュリティ・信頼性・コスト最適化は出題頻度が高い。

---

## マルチアカウント・ガバナンス関連

Domain 1（組織の複雑さに対応するソリューション設計、26%）に直結する分野。

- [Organizing Your AWS Environment Using Multiple Accounts][multi-account] —
  マルチアカウント戦略のベストプラクティスをまとめた中心的なホワイトペーパー。
  OU設計、SCP、Control Towerとの関係を解説
- [AWS Security Reference Architecture (AWS SRA)][sra] —
  マルチアカウント環境でのセキュリティサービス配置の標準的な参照アーキテクチャ
- [An Overview of the AWS Cloud Adoption Framework (AWS CAF)][caf] —
  ビジネス・人材・ガバナンス・プラットフォーム・セキュリティ・運用の6つの視点で
  組織のクラウド成熟度を評価する枠組み

**試験での着眼点**: 「Organizing Your AWS Environment」内のControl Tower関連の付録（Appendix E）は、
Control Towerが自動生成するOU・アカウント構成を理解する上で有用。

---

## 災害復旧・レジリエンス関連

Domain 1 Task 3、Domain 2 Task 2/4、Domain 3 Task 4 に対応。

- [Disaster Recovery of Workloads on AWS: Recovery in the Cloud][dr-workloads] —
  Backup and Restore / Pilot Light / Warm Standby / Multi-Site Active-Activeの4戦略を
  体系的に解説した中心的な一次情報。[09. 災害復旧](./09-disaster-recovery.md)と
  [14. アーキテクチャ図集](./14-architecture-diagrams.md)の元ネタでもある
- [Disaster Recovery of On-Premises Applications to AWS][dr-onprem] —
  オンプレミスからAWSへのDR戦略に特化した内容

**試験での着眼点**: 「Testing disaster recovery」の章は、DR訓練・カオスエンジニアリングの考え方と
直結しており、Domain 3の「継続的改善」文脈で問われやすい。

---

## 移行・モダナイゼーション関連

Domain 4（ワークロードの移行とモダナイゼーションの加速、20%）に直結する分野。

- [An Overview of the AWS Cloud Adoption Framework][caf] — 7Rs（移行戦略評価フレームワーク）の考え方の出典
- [AWS Prescriptive Guidance: Mobilize your organization to accelerate large-scale migrations][migration-strategy] —
  大規模移行のAssess/Mobilize/Migrateの3フェーズと、Rehost/Relocate/Replatform/Refactorなど
  各戦略の実践的ガイダンス
- [Guide for AWS large migrations][large-migration] — 大規模移行プロジェクトの計画・実行に関する詳細ガイド

**試験での着眼点**: 「7Rs」という単語自体は公式ガイドのTask Statementにも明記されている重要キーワード。
[10. 移行戦略](./10-migration.md)と併せて、各Rの定義を正確に区別できるようにしておく。

---

## セキュリティ関連

Domain 1 Task 2、Domain 2 Task 3、Domain 3 Task 2 に対応。

- [セキュリティの柱（Security Pillar）][waf-security] —
  再掲。ゼロトラスト、多層防御、最小権限の原則などの設計原則がまとまっている
- [AWS Security Reference Architecture (AWS SRA)][sra] —
  再掲。マルチアカウント環境でのセキュリティサービス配置の参照アーキテクチャ

**試験での着眼点**: セキュリティは3つのドメインすべてに分散して出題されるため、
「新規設計時」「継続的改善時」の両方の文脈で同じサービス（GuardDuty、Security Hub等）が
どう問われるかを意識する。

---

## 読み進め方の提案

- **時間が限られる場合**: まず [Well-Architected Framework 本体][waf-main] と
  [Disaster Recovery of Workloads on AWS][dr-workloads] の2本を優先する
  （試験全体の評価軸とDomain 1/2で頻出のDR戦略を同時にカバーできるため）
- **Phase 2（応用・実践）の期間中**: 各柱のホワイトペーパーを、対応する分野別ガイド（`01`〜`10`）を
  読んだ直後に読むと定着しやすい
- **試験直前**: 全文を読み直す時間はないため、各ホワイトペーパーの「Introduction」と
  「Best Practices」の章だけを見直す

[waf-main]: https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html
[waf-ops]: https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html
[waf-security]: https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html
[waf-reliability]: https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html
[waf-performance]: https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html
[waf-cost]: https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html
[waf-sustainability]: https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html
[multi-account]: https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/organizing-your-aws-environment.html
[sra]: https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html
[caf]: https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/welcome.html
[dr-workloads]: https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html
[dr-onprem]: https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/abstract-and-introduction.html
[migration-strategy]: https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-migration/introduction.html
[large-migration]: https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/welcome.html

---

## ライセンス

このコンテンツは MIT License の下で公開されています。詳細は [LICENSE](./LICENSE) ファイルをご確認ください。
