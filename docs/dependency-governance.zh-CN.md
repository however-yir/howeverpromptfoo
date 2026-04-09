# 依赖治理与构建策略

## 1. 版本冻结原则

- 核心运行依赖使用明确版本区间，避免宽泛漂移。
- `overrides` 用于强制修复高风险传递依赖。
- 升级按“小步、可回滚”原则执行。

## 2. 可选依赖分组

### 云端能力

- `@openai/codex-sdk`
- `@aws-sdk/*`
- `@azure/*`

### 浏览器/自动化能力

- `playwright`
- `@playwright/browser-chromium`

### 语音与多模态能力

- `@elevenlabs/*`（通过 provider 侧按需加载）
- `sharp`（可选）

### 本地模型/扩展能力

- `@huggingface/transformers`
- `hono`

## 3. Node 版本矩阵

- 最低支持：Node 20
- 推荐：Node 22 LTS
- CI 应至少覆盖 `20.x` 与 `22.x`

## 4. 安装一致性

- CI 统一使用 `npm ci`
- 本地开发建议保留单一锁文件（`package-lock.json`）
- 禁止在同一分支混用不同包管理器提交锁文件变更

## 5. 发布前检查

1. `npm run deps:audit`
2. `npm run release:preflight`
3. `npm run test:however`
