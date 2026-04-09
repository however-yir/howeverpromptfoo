export interface SharedEvaluationSummary {
  evalId: string;
  passed: number;
  failed: number;
  errors: number;
  durationSeconds: number;
}

export interface SharedProviderUsage {
  providerId: string;
  totalTokens: number;
}
