# 发布节奏与分支策略

## 分支约定

- `main`：稳定可发布主线
- `dev`：日常集成分支
- `release/*`：发布候选分支

## 发布节奏

- 常规：双周小版本发布
- 紧急：安全修复可走热修复分支

## 发布前流程

1. `npm run release:preflight`
2. `npm run test:however`
3. `npm run test:smoke`

## 发布后动作

- 输出变更说明与风险提示
- 更新路线图状态
- 记录依赖与安全扫描结果
