import { mkdirSync, writeFileSync } from "node:fs";

const PITCH: string = "We auction babies' middle names to the highest bidder — parents pocket the fee, and brands pay because every school roll call is an ad.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
