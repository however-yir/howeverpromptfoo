#!/usr/bin/env node

import { performance } from 'node:perf_hooks';

function runSyntheticEvalBenchmark() {
  const start = performance.now();
  let acc = 0;
  for (let i = 0; i < 200000; i += 1) {
    acc += Math.sqrt(i + 1);
  }
  const end = performance.now();
  return { elapsedMs: Number((end - start).toFixed(2)), checksum: Number(acc.toFixed(2)) };
}

function runSyntheticThroughputBenchmark() {
  const start = performance.now();
  const batch = 2000;
  const requests = Array.from({ length: batch }, (_, i) => Promise.resolve(i * 2));
  return Promise.all(requests).then((result) => {
    const end = performance.now();
    return {
      batch,
      elapsedMs: Number((end - start).toFixed(2)),
      throughputPerSec: Number(((batch / (end - start)) * 1000).toFixed(2)),
      checksum: result.slice(-1)[0],
    };
  });
}

const firstEval = runSyntheticEvalBenchmark();
const memory = process.memoryUsage();

const throughput = await runSyntheticThroughputBenchmark();

const report = {
  timestamp: new Date().toISOString(),
  firstEvalLatencyMs: firstEval.elapsedMs,
  syntheticThroughput: throughput.throughputPerSec,
  rssMb: Number((memory.rss / 1024 / 1024).toFixed(2)),
  heapUsedMb: Number((memory.heapUsed / 1024 / 1024).toFixed(2)),
};

console.log(JSON.stringify(report, null, 2));
