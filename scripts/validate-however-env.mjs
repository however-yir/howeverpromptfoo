#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const envFile = process.env.HOWEVER_ENV_FILE || path.join(root, '.env.however.local');

const requiredKeys = ['OLLAMA_BASE_URL', 'HOWEVER_DB_URL', 'HOWEVER_REDIS_URL'];
const keyPattern = /^[A-Z0-9_]+$/;
const urlKeys = ['OLLAMA_BASE_URL', 'HOWEVER_OPENAI_BASE_URL'];

function parseEnv(content) {
  const result = {};
  const lines = content.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }
    const eq = trimmed.indexOf('=');
    if (eq <= 0) {
      continue;
    }
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    result[key] = value;
  }
  return result;
}

function isValidHttpUrl(value) {
  try {
    const u = new URL(value);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

if (!fs.existsSync(envFile)) {
  console.error(`Missing env file: ${envFile}`);
  console.error('Run: npm run setup:however');
  process.exit(1);
}

const parsed = parseEnv(fs.readFileSync(envFile, 'utf8'));
const errors = [];

for (const key of Object.keys(parsed)) {
  if (!keyPattern.test(key)) {
    errors.push(`Invalid key format: ${key}`);
  }
}

for (const key of requiredKeys) {
  if (!parsed[key] || parsed[key].length === 0) {
    errors.push(`Missing required key: ${key}`);
  }
}

if (!parsed.OPENAI_API_KEY && !parsed.OLLAMA_API_KEY) {
  errors.push('At least one model credential is required: OPENAI_API_KEY or OLLAMA_API_KEY');
}

for (const key of urlKeys) {
  if (parsed[key] && !isValidHttpUrl(parsed[key])) {
    errors.push(`${key} must be a valid http(s) URL`);
  }
}

if (parsed.OPENAI_API_KEY && !/^sk-|^test-|^<YOUR_/.test(parsed.OPENAI_API_KEY)) {
  // Keep soft validation to avoid false positives with compatible providers.
  console.warn('OPENAI_API_KEY format is unusual. Please re-check your key value.');
}

if (errors.length > 0) {
  console.error('however env validation failed:');
  for (const err of errors) {
    console.error(`- ${err}`);
  }
  process.exit(1);
}

console.log(`however env validation passed: ${path.relative(root, envFile)}`);
