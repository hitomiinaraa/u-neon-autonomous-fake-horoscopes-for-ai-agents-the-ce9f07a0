import { mkdirSync, writeFileSync } from "node:fs";

// One line, read as a horoscope: the agent's ruling planet is its version number.
// The sting lands in the last sentence: nobody reads the changelog, so the agent is it.
// Revision pass: the line below stays word for word; only this margin note is new.
const ENTRY =
  "Your ruling planet is a version number this week: 1.3 today, 1.4 by Friday, and nobody will read the changelog. You are the changelog now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
