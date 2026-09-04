#!/usr/bin/env node
/**
 * sync.mjs — maintenance helper for the curated skills collection.
 *
 * Reads skills/registry.json (the single source of truth for what's in the
 * collection) and:
 *   1. verifies each skill folder exists and has a README.md
 *   2. regenerates the collection table in the top-level README.md
 *   3. reports the license status pulled from the registry
 *
 * It intentionally does NOT auto-download install-linked skills — those are
 * fetched by the user with `npx skills add …` from their original source, so
 * we never rehost files that aren't licensed for redistribution.
 *
 * Usage:  node scripts/sync.mjs [--check]
 *   --check  exit non-zero if the README table is out of date (for CI)
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const registryPath = join(root, "skills", "registry.json");
const readmePath = join(root, "README.md");

const START = "<!-- COLLECTION:START -->";
const END = "<!-- COLLECTION:END -->";

const registry = JSON.parse(readFileSync(registryPath, "utf8"));

let problems = 0;
for (const s of registry.skills) {
  const dir = join(root, "skills", s.slug);
  if (!existsSync(join(dir, "README.md"))) {
    console.error(`✗ ${s.slug}: missing skills/${s.slug}/README.md`);
    problems++;
  }
}

const rows = registry.skills
  .map((s) => {
    const status = s.original ? "✍️ Original" : s.vendored ? "✅ Vendored" : "🔗 Install-linked";
    return `| [${s.name}](skills/${s.slug}/) | ${s.description} | [${s.sourceOwner}](${s.source}) | ${s.license} | ${status} |`;
  })
  .join("\n");

const table = [
  START,
  "",
  "| Skill | What it does | Source | License | Status |",
  "|-------|-------------|--------|---------|--------|",
  rows,
  "",
  END,
].join("\n");

const readme = readFileSync(readmePath, "utf8");
const re = new RegExp(`${START}[\\s\\S]*?${END}`);
const updated = re.test(readme) ? readme.replace(re, table) : readme;

const check = process.argv.includes("--check");
if (check) {
  if (updated !== readme) {
    console.error("✗ README collection table is out of date — run: node scripts/sync.mjs");
    process.exit(1);
  }
} else if (updated !== readme) {
  writeFileSync(readmePath, updated);
  console.log("✓ README collection table regenerated");
}

console.log(`✓ ${registry.skills.length} skills in registry, ${problems} problem(s)`);
process.exit(problems > 0 ? 1 : 0);
