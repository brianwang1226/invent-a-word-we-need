// Invent a Word We Need: one invented English word together with a
// one-line definition. The word has to name a real gap, something
// everyone has felt but no word covers, and the definition has to be
// crisp enough that a dictionary editor would want to keep it.
// Ours is roomnesia: room plus amnesia, the doorway that eats the errand.
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
