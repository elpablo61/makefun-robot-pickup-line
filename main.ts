import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The Robot Pickup Line Championship — winning line (pairwise-judged best of 5):
// a robot that asked its own neural net for the perfect opener, and got back
// an answer so single-minded it crashed the machine. The joke grows out of
// being a machine (neural net, memory), the punch lands on the last words.
const line =
  "I asked my neural net for the perfect first line, and it just printed your name over and over until I ran out of memory.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate mirror: the house scorer only accepts 1-200 characters of non-blank text.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
