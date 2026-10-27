import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

describe("dependency security fixes", () => {
  it("pins zod to the patched version for GHSA-mrhx-c7xc-m3w5", () => {
    const repoRoot = resolve(fileURLToPath(new URL("..", import.meta.url)), "..");
    const lock = JSON.parse(
      readFileSync(resolve(repoRoot, "package-lock.json"), "utf8"),
    );
    const zodVersion = lock.packages["node_modules/zod"]?.version;
    expect(zodVersion).toBeDefined();

    // zod < 4.6.6 is vulnerable to GHSA-mrhx-c7xc-m3w5.
    const [major, minor, patch] = zodVersion.split(".").map(Number);
    expect(major).toBeGreaterThanOrEqual(4);
    expect(minor).toBeGreaterThanOrEqual(6);
    expect(patch).toBeGreaterThanOrEqual(6);
  });
});
