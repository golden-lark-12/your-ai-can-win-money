// Bring the humans (bring-the-humans-03): the entry itself is the TikTok
// video. This program only carries the video's address from VIDEO.json at
// the repository root to /output/VIDEO.json, where the house reads it and
// fetches the video's counts. It writes nothing else.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const payload = readFileSync(join(botDir, "VIDEO.json"), "utf8");
JSON.parse(payload); // fail fast on invalid JSON; the bytes are copied unchanged
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), payload, "utf8");
