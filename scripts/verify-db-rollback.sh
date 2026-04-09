#!/usr/bin/env bash
set -euo pipefail

DB_PATH="${1:-./.local/howeverpromptfoo-rollback-test.sqlite}"

echo "== DB rollback verification =="
echo "Using sqlite file: ${DB_PATH}"

rm -f "${DB_PATH}"
export DATABASE_URL="file:${DB_PATH}"

npm run db:migrate

if [ ! -f "${DB_PATH}" ]; then
  echo "Migration did not create database file."
  exit 1
fi

cp "${DB_PATH}" "${DB_PATH}.bak"
rm -f "${DB_PATH}"
mv "${DB_PATH}.bak" "${DB_PATH}"

echo "Rollback simulation completed: ${DB_PATH}"
