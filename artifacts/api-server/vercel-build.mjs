import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");

if (process.env.VERCEL) {
  // Vercel project uses Root Directory = artifacts/api-server — build the NewsPro static site
  execSync("pnpm -w run vercel-build", { cwd: root, stdio: "inherit" });
} else {
  execSync("node ./build.mjs", { cwd: here, stdio: "inherit" });
}
