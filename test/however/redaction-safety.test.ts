import { describe, expect, it } from 'vitest';
import { REDACTED, sanitizeObject } from '../../src/util/sanitizer';

describe('redaction safety', () => {
  it('should redact common secret fields in nested config objects', () => {
    const input = {
      provider: {
        api_key: 'sk-test-12345678901234567890',
        password: 'super-secret',
        nested: {
          token: 'Bearer abcdefghijklmnopqrstuvwxyz0123456789',
        },
      },
      safe: 'value',
    };

    const output = sanitizeObject(input);

    expect(output.provider.api_key).toBe(REDACTED);
    expect(output.provider.password).toBe(REDACTED);
    expect(output.provider.nested.token).toBe(REDACTED);
    expect(output.safe).toBe('value');
  });
});
