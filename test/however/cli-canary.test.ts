import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

describe('CLI canary command coverage', () => {
  it('should keep init/eval/view/redteam commands registered in main entry', () => {
    const content = fs.readFileSync(path.join(process.cwd(), 'src/main.ts'), 'utf8');

    expect(content).toContain('initCommand(program)');
    expect(content).toContain('const evalCmd = evalCommand(program');
    expect(content).toContain('viewCommand(program)');
    expect(content).toContain("program.command('redteam')");
  });
});
