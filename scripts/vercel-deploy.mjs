import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appDist = join(root, "artifacts", "ndtv-clone", "dist");
const outDir = join(root, "public");

execSync("pnpm --filter @workspace/ndtv-clone build", { cwd: root, stdio: "inherit" });

if (!existsSync(join(appDist, "index.html"))) {
  console.error(`Missing ${join(appDist, "index.html")} — Vite build did not produce output.`);
  process.exit(1);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
cpSync(appDist, outDir, { recursive: true });

console.log(`Copied ${appDist} → ${outDir}`);
