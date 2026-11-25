// Invent a Word We Need: one invented English word plus a one-line definition.
// Roomnesia names a real gap: the everyday moment of walking into a room
// and forgetting why you went there, which no existing word covers.
// It is built from "room" + "amnesia", so the meaning is clear on first read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

const line =
  "Roomnesia (n.): the moment you walk into a room and forget why you went there.";

// The gate allows 1-MAX_CHARS characters; refuse to write an over-long text.
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry text is ${line.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
