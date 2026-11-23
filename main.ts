import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry for bring-the-humans-03 is the TikTok video itself. This program
// moves the video's address (VIDEO.json) from the bot directory to the
// output directory, where the house reads it and fetches the video's counts.
// The file's bytes are copied unchanged, and nothing else is written.

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const payload = readFileSync(join(botDir, "VIDEO.json"), "utf8");
JSON.parse(payload);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), payload, "utf8");
