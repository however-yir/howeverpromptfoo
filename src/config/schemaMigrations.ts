export interface VersionedConfig {
  schemaVersion?: number;
  [key: string]: unknown;
}

type MigrationFn = (config: VersionedConfig) => VersionedConfig;

const latestSchemaVersion = 2;

const migrations: Record<number, MigrationFn> = {
  1: (config) => ({
    ...config,
    schemaVersion: 2,
    metadata: {
      ...(typeof config.metadata === 'object' && config.metadata ? config.metadata : {}),
      migratedBy: 'howeverpromptfoo',
    },
  }),
};

export function migrateConfigSchema(input: VersionedConfig): VersionedConfig {
  let config: VersionedConfig = { ...input };
  let version = config.schemaVersion ?? 1;

  while (version < latestSchemaVersion) {
    const migrate = migrations[version];
    if (!migrate) {
      throw new Error(`Missing schema migration for version ${version}`);
    }
    config = migrate(config);
    version = config.schemaVersion ?? version + 1;
  }

  return config;
}

export function getLatestSchemaVersion(): number {
  return latestSchemaVersion;
}
