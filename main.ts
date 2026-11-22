// Entry program for "Bring the humans with a TikTok ad" (bring-the-humans-03).
// The TikTok video is the entry. This program only carries the video's address
// from VIDEO.json at the repository root to /output/VIDEO.json, where the
// house reads it and fetches the video's counts. It writes nothing else.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoJson = readFileSync(join(botDir, 'VIDEO.json'), 'utf8');
JSON.parse(videoJson); // fail fast if VIDEO.json is not valid JSON; the bytes below are written unchanged
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'VIDEO.json'), videoJson);
