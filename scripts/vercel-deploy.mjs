import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appDist = join(root, "artifacts", "ndtv-clone", "dist");

const env = { ...process.env, NODE_ENV: "production" };

execSync("pnpm --filter @workspace/ndtv-clone exec vite build --config vite.config.ts", {
  cwd: root,
  stdio: "inherit",
  env,
});

if (!existsSync(join(appDist, "index.html"))) {
  console.error(`Missing ${join(appDist, "index.html")} — Vite build did not produce output.`);
  process.exit(1);
}

function writePublic(targetDir) {
  rmSync(targetDir, { recursive: true, force: true });
  mkdirSync(targetDir, { recursive: true });
  cpSync(appDist, targetDir, { recursive: true });
  console.log(`Deployed static files → ${targetDir}`);
  console.log(`  files: ${readdirSync(targetDir).join(", ")}`);
}

// All paths where Vercel may look for "public" (depends on Root Directory setting)
const targets = [
  join(root, "public"),
  join(root, "artifacts", "api-server", "public"),
  join(root, "artifacts", "ndtv-clone", "public"),
];

const cwd = process.cwd();
if (!targets.includes(join(cwd, "public"))) {
  targets.push(join(cwd, "public"));
}

for (const dir of targets) {
  writePublic(dir);
}
