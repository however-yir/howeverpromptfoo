#!/usr/bin/env bash
set -euo pipefail

# Update GitHub repository profile fields for howeverpromptfoo.
# Usage:
#   ./scripts/set-github-metadata.sh [owner/repo]
# Example:
#   ./scripts/set-github-metadata.sh however-yir/howeverpromptfoo

REPO="${1:-however-yir/howeverpromptfoo}"
DESCRIPTION="HoweverPromptfoo：面向企业场景的 LLM 评测与红队测试框架，支持 Prompt 评估、模型对比、安全测试与 CI 集成。"
HOMEPAGE="https://github.com/however-yir/howeverpromptfoo"
TOPICS=(
  "llm-evaluation"
  "prompt-testing"
  "red-teaming"
  "ai-security"
  "devsecops"
  "ollama"
  "openai-compatible"
  "typescript"
  "cli-tools"
  "howeverpromptfoo"
)

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI not found. Please install GitHub CLI first."
  exit 1
fi

echo "Updating repository metadata for ${REPO}..."
gh repo edit "${REPO}" --description "${DESCRIPTION}" --homepage "${HOMEPAGE}" --enable-issues=true
for topic in "${TOPICS[@]}"; do
  gh repo edit "${REPO}" --add-topic "${topic}"
done

echo "Done. Please verify repository description/topics in GitHub UI."
