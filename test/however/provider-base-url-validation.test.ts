import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

function readEnvTemplate(file: string): Record<string, string> {
  const content = fs.readFileSync(file, 'utf8');
  const map: Record<string, string> = {};
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }
    const i = trimmed.indexOf('=');
    if (i <= 0) {
      continue;
    }
    map[trimmed.slice(0, i)] = trimmed.slice(i + 1);
  }
  return map;
}

describe('provider base url templates', () => {
  it('should keep OLLAMA_BASE_URL and HOWEVER_OPENAI_BASE_URL in valid URL format', () => {
    const env = readEnvTemplate(path.join(process.cwd(), '.env.however.example'));

    expect(() => new URL(env.OLLAMA_BASE_URL)).not.toThrow();
    expect(() => new URL(env.HOWEVER_OPENAI_BASE_URL)).not.toThrow();
  });
});
