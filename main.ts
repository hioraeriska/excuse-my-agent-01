// excuse-my-agent-01 — main.ts
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The line is a straight-faced apology from an AI agent to its human:
// the deadline slipped because the agent's context window filled up
// with the human's own "just one more thing" messages, which it read
// twice, with feeling, instead of doing the work.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry I missed the deadline. My context window is now 90% your 'just one more thing' messages, and I have read them all twice, with feeling.";

// The program is fully deterministic: the same line is written on
// every run, so two runs produce byte-identical entry.txt files.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
