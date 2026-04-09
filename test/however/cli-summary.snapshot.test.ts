import { describe, expect, it } from 'vitest';
import { generateEvalSummary } from '../../src/commands/eval/summary';

describe('cli summary snapshot', () => {
  it('should keep stable summary structure for cli output', () => {
    const lines = generateEvalSummary({
      evalId: 'eval-however-001',
      isRedteam: false,
      writeToDatabase: true,
      shareableUrl: null,
      wantsToShare: false,
      hasExplicitDisable: false,
      cloudEnabled: false,
      tokenUsage: {
        total: 120,
        prompt: 50,
        completion: 70,
      },
      successes: 8,
      failures: 1,
      errors: 1,
      duration: 12,
      maxConcurrency: 4,
      tracker: {
        getProviderIds: () => ['openai:gpt-5-mini'],
        getProviderUsage: () => ({
          total: 120,
          prompt: 50,
          completion: 70,
          numRequests: 10,
        }),
      } as any,
    });

    expect(lines.join('\n')).toMatchInlineSnapshot(`
      "✓ Eval complete (ID: eval-however-001)

      » View results: promptfoo view
      » Share with your team: https://promptfoo.app
      » Feedback: https://promptfoo.dev/feedback

      Total Tokens: 120
        Eval: 120 (50 prompt, 70 completion)

      Results:
        ✓ 8 passed (80.00%)
        ✗ 1 failed (10.00%)
        ✗ 1 error (10.00%)
      Duration: 12s (concurrency: 4)
      "
    `);
  });
});
