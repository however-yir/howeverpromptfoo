import { describe, expect, it } from 'vitest';
import { getLatestSchemaVersion, migrateConfigSchema } from '../../src/config/schemaMigrations';

describe('schema migration', () => {
  it('should migrate config to latest schema version', () => {
    const migrated = migrateConfigSchema({
      schemaVersion: 1,
      name: 'demo',
    });

    expect(migrated.schemaVersion).toBe(getLatestSchemaVersion());
    expect(migrated.metadata).toBeDefined();
  });
});
