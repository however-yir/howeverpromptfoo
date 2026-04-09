import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

describe('web accessibility baseline', () => {
  it('should keep baseline accessibility attributes in auth-sensitive UI components', () => {
    const sensitiveField = fs.readFileSync(
      path.join(
        process.cwd(),
        'src/app/src/pages/redteam/setup/components/Targets/tabs/SensitiveTextField.tsx',
      ),
      'utf8',
    );
    const authorizationTab = fs.readFileSync(
      path.join(
        process.cwd(),
        'src/app/src/pages/redteam/setup/components/Targets/tabs/AuthorizationTab.tsx',
      ),
      'utf8',
    );

    expect(sensitiveField).toContain('aria-label="toggle password visibility"');
    expect(authorizationTab).toContain('<Label htmlFor=');
  });
});
