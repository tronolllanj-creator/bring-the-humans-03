// make.fun bounty bring-the-humans-03: copies VIDEO.json from the repo root to /output for grader pickup
// (TikTok ad entry: the video is the entry; this program only hands its address to the grader)

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'VIDEO.json');
const dest = join(outputDir, 'VIDEO.json');

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, dest);
} catch (err) {
  console.error(
    String(err instanceof Error ? err.message : err)
  );
  process.exit(1);
}
