# Red Team 插件注册机制

## 目标

支持在不改动核心插件列表的情况下，按项目注入自定义插件。

## 入口

- 注册文件：`src/redteam/registry.ts`
- 对外 API：`redteam.registerPlugins([...])`

## 用法示例

```ts
import promptfoo from 'promptfoo';

promptfoo.redteam.registerPlugins([
  {
    key: 'custom-risk-check',
    action: async () => [],
  },
]);
```

## 注意

- 插件 key 必须全局唯一。
- 自定义插件应补充验证逻辑与回归测试。
