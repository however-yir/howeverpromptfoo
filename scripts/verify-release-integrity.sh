#!/usr/bin/env bash
set -euo pipefail

echo "== verify release integrity =="
echo "Git commit: $(git rev-parse --short HEAD)"
echo "Node version: $(node -v)"

if [ ! -f package-lock.json ]; then
  echo "Missing package-lock.json"
  exit 1
fi

npm ls >/dev/null
echo "Dependency tree resolved successfully."
echo "Release integrity checks passed."
