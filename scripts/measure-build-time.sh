#!/usr/bin/env bash
set -euo pipefail

echo "== howeverpromptfoo build timing =="

measure() {
  local label="$1"
  shift
  local start end elapsed
  start=$(date +%s)
  "$@"
  end=$(date +%s)
  elapsed=$((end - start))
  echo "${label}: ${elapsed}s"
}

measure "CLI build" npm run build:clean
measure "TypeScript + server build" npm run build
measure "Web app build" npm run build:app
measure "Docs test build" npm run test:site
