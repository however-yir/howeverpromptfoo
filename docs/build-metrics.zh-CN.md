# 构建耗时拆分说明

使用以下命令采集构建耗时：

```bash
npm run measure:build
```

输出维度：

- CLI build（核心引擎）
- TypeScript + server build
- Web app build
- Docs test build

建议：

- 将该结果作为 PR 附件，持续观察构建时间趋势。
- 当某一阶段耗时增长超过 20% 时，触发专项分析。
