# 贡献指南（中文）

## 1. 提交前准备

1. Fork 并创建功能分支。
2. 执行 `npm ci` 安装依赖。
3. 按需复制 `.env.however.example` 到本地环境文件。

## 2. 代码规范

- TypeScript 代码通过 Biome 检查。
- 文档与配置保持中文主说明 + 英文术语。
- 不提交本地密钥文件、数据库文件和临时产物。

## 3. 提交流程

1. `npm run lint:ci`
2. `npm run test:however`
3. `npm run deps:audit`
4. 提交 PR 并附“变更说明 + 风险评估 + 测试结果”。

## 4. 变更说明建议

- 变更目的
- 影响模块
- 回滚方式
- 是否涉及配置迁移
