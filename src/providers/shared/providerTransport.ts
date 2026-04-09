import { getEnvString } from '../../envars';

import type { EnvVarKey } from '../../envars';

type HttpHeaders = Record<string, string>;

export function resolveProviderBaseUrl(preferredEnvKeys: EnvVarKey[], fallbackUrl: string): string {
  for (const key of preferredEnvKeys) {
    const val = getEnvString(key);
    if (val && val.length > 0) {
      return val;
    }
  }
  return fallbackUrl;
}

export function buildBearerAuthHeaders(
  apiKeyEnvName: EnvVarKey,
  baseHeaders: HttpHeaders = {},
): HttpHeaders {
  const token = getEnvString(apiKeyEnvName);
  if (!token) {
    return baseHeaders;
  }
  return {
    ...baseHeaders,
    Authorization: `Bearer ${token}`,
  };
}
