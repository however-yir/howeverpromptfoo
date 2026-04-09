# 60 条建议实施状态

> 状态说明：`[x]` 已落地；每条均给出主落地文件。

## A. 品牌与命名（1-10）

- [x] 1 包名改造：[package.json](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/package.json)
- [x] 2 CLI 别名 `howeverpf`：[package.json](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/package.json)
- [x] 3 作者信息：[package.json](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/package.json)
- [x] 4 仓库地址：[package.json](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/package.json)
- [x] 5 homepage/bugs：[package.json](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/package.json)
- [x] 6 Logo 与徽章：[README.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/README.md)
- [x] 7 品牌文案规范：[docs/brand/BRAND_GUIDELINES.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/brand/BRAND_GUIDELINES.zh-CN.md)
- [x] 8 仓库定位模板：[docs/repository-positioning.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/repository-positioning.zh-CN.md)
- [x] 9 Topics：[.github/repository-metadata.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/.github/repository-metadata.md)
- [x] 10 视觉资源目录：[docs/assets/howeverpromptfoo-logo.svg](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/assets/howeverpromptfoo-logo.svg)

## B. 配置与敏感信息治理（11-20）

- [x] 11 `.env` 模板：[.env.however.example](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/.env.however.example)
- [x] 12 OLLAMA_BASE_URL 可配置：[src/providers/ollama.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/src/providers/ollama.ts)
- [x] 13 HOWEVER_OPENAI_BASE_URL：[src/providers/openai/index.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/src/providers/openai/index.ts)
- [x] 14 HOWEVER_REDIS_URL：[.env.however.example](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/.env.however.example)
- [x] 15 HOWEVER_DB_URL：[.env.however.example](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/.env.however.example)
- [x] 16 OTLP 环境变量优先：[.env.however.example](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/.env.however.example)
- [x] 17 密钥命名规则：[docs/security-compliance.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/security-compliance.zh-CN.md)
- [x] 18 本地配置校验脚本：[scripts/validate-however-env.mjs](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/scripts/validate-however-env.mjs)
- [x] 19 `.env` 防误提交：[.husky/pre-commit](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/.husky/pre-commit)
- [x] 20 dev/test/prod 示例：[.env.however.dev.example](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/.env.however.dev.example)

## C. 依赖与构建治理（21-30）

- [x] 21 核心依赖区间治理：[package.json](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/package.json)
- [x] 22 高风险 overrides：[package.json](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/package.json)
- [x] 23 依赖审计/更新脚本：[package.json](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/package.json)
- [x] 24 可选依赖分组：[docs/dependency-governance.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/dependency-governance.zh-CN.md)
- [x] 25 Node 兼容矩阵：[docs/dependency-governance.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/dependency-governance.zh-CN.md)
- [x] 26 安装一致性策略：[docs/dependency-governance.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/dependency-governance.zh-CN.md)
- [x] 27 构建耗时拆分：[scripts/measure-build-time.sh](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/scripts/measure-build-time.sh)
- [x] 28 Docker 缓存策略：[docs/build-metrics.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/build-metrics.zh-CN.md)
- [x] 29 依赖变更清单：[docs/dependency-change-checklist.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/dependency-change-checklist.zh-CN.md)
- [x] 30 changelog 校验流程：[package.json](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/package.json)

## D. 代码结构与架构演进（31-40）

- [x] 31 分层边界说明：[src/ARCHITECTURE.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/src/ARCHITECTURE.md)
- [x] 32 provider 公共传输逻辑：[src/providers/shared/providerTransport.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/src/providers/shared/providerTransport.ts)
- [x] 33 redteam 插件化装配：[src/redteam/registry.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/src/redteam/registry.ts)
- [x] 34 内置/扩展断言双轨：[src/assertions/extensions/index.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/src/assertions/extensions/index.ts)
- [x] 35 配置 schema 迁移器：[src/config/schemaMigrations.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/src/config/schemaMigrations.ts)
- [x] 36 命令链路状态机：[docs/command-execution-state-machine.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/command-execution-state-machine.md)
- [x] 37 共享类型定义：[src/shared/types/index.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/src/shared/types/index.ts)
- [x] 38 外部集成边界文档：[docs/integration-boundaries.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/integration-boundaries.zh-CN.md)
- [x] 39 experimental 命名空间：[src/experimental/README.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/src/experimental/README.md)
- [x] 40 上游同步流程：[docs/upstream-sync-playbook.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/upstream-sync-playbook.zh-CN.md)

## E. 质量保障与安全（41-50）

- [x] 41 CLI 金丝雀测试：[test/however/cli-canary.test.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/test/however/cli-canary.test.ts)
- [x] 42 URL 校验测试：[test/however/provider-base-url-validation.test.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/test/however/provider-base-url-validation.test.ts)
- [x] 43 脱敏单测补充：[test/however/redaction-safety.test.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/test/however/redaction-safety.test.ts)
- [x] 44 e2e 三场景模板：[configs/e2e/hybrid-model.yaml](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/configs/e2e/hybrid-model.yaml)
- [x] 45 回滚验证脚本：[scripts/verify-db-rollback.sh](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/scripts/verify-db-rollback.sh)
- [x] 46 三重扫描流水线：[.github/workflows/however-security-gates.yml](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/.github/workflows/however-security-gates.yml)
- [x] 47 Web 可访问性基线测试：[test/however/web-a11y-baseline.test.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/test/however/web-a11y-baseline.test.ts)
- [x] 48 CLI 快照测试：[test/however/cli-summary.snapshot.test.ts](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/test/however/cli-summary.snapshot.test.ts)
- [x] 49 性能基线脚本：[scripts/perf-baseline.mjs](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/scripts/perf-baseline.mjs)
- [x] 50 供应链签名说明：[docs/release-signing.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/release-signing.zh-CN.md)

## F. 文档、发布与运营（51-60）

- [x] 51 中文 README 重写：[README.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/README.md)
- [x] 52 与上游差异章节：[README.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/README.md)
- [x] 53 部署章节：[README.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/README.md)
- [x] 54 配置速查章节：[README.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/README.md)
- [x] 55 10+ FAQ：[README.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/README.md)
- [x] 56 安全与合规章节：[README.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/README.md)
- [x] 57 附加协议文件：[LICENSE-HOWEVER.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/LICENSE-HOWEVER.md)
- [x] 58 发布节奏说明：[docs/release-strategy.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/docs/release-strategy.zh-CN.md)
- [x] 59 中文贡献指南：[CONTRIBUTING.zh-CN.md](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/CONTRIBUTING.zh-CN.md)
- [x] 60 路线图与 issue 模板：[.github/ISSUE_TEMPLATE/however-roadmap-item.yml](/Users/liuzhuoran/Documents/Playground/github-learning-top4/promptfoo/.github/ISSUE_TEMPLATE/however-roadmap-item.yml)
