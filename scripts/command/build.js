import path from "path";
import { execSync } from "child_process";
import {
  __dirname,
  ELECTRON_DIR,
  NEST_SERVER_DIR,
  NEST_DIST_TARGET_DIR,
  ELECTRON_APP_RELEASE,
  APP_ROOT,
} from "../utils/constant.js";
import fs from "fs/promises";
import { log } from "../utils/log.js";

// batch clean multiple directories
async function cleanUpBeforeBuild() {
  const dirsToClean = [
    path.join(APP_ROOT, "app-release"),
    path.join(ELECTRON_DIR, "dist"),
    path.join(ELECTRON_DIR, "dist-nest"),
    path.join(ELECTRON_DIR, "dist-electron"),
    path.join(NEST_SERVER_DIR, "dist"),
  ];

  log.info("🧹 start cleaning...");

  for (const dir of dirsToClean) {
    try {
      await fs.rm(dir, { recursive: true, force: true });
      log.success(`✅ cleaned directory: ${dir}`);
    } catch (err) {
      if (err.code !== "ENOENT") {
        log.warn(`⚠️ failed to delete directory: ${dir} ${err.message}`);
      }
    }
  }

  log.success("✅ clean up done.");
}

async function removeDir(dir) {
  try {
    await fs.rm(dir, { recursive: true, force: true });
  } catch (err) {
    // ignore error if directory doesn't exist
    if (err.code !== "ENOENT") throw err;
  }
}

async function copyDir(src, dest) {
  const stat = await fs.stat(src);
  if (stat.isDirectory()) {
    await fs.mkdir(dest, { recursive: true });
    const items = await fs.readdir(src);
    for (const item of items) {
      await copyDir(path.join(src, item), path.join(dest, item));
    }
  } else await fs.copyFile(src, dest);
}

async function moveReleaseFolder() {
  const outputFolders = await fs.readdir(ELECTRON_APP_RELEASE);

  for (const folder of outputFolders) {
    const sourcePath = path.join(ELECTRON_APP_RELEASE, folder);
    const targetPath = path.join(APP_ROOT, "app-release");

    log.info(`🚚 move release folder: ${sourcePath} → ${targetPath}`);
    await fs.rename(sourcePath, targetPath);
  }

  // optional: delete empty release folder
  await fs.rm(ELECTRON_APP_RELEASE, { recursive: true, force: true });
}

async function main() {
  try {
    await cleanUpBeforeBuild();

    log.info("📦 start building...");

    // Step 1: build NestJS backend
    log.info(`🛠️ building NestJS backend...`);
    execSync("npm run build", { cwd: NEST_SERVER_DIR, stdio: "inherit" });

    // Step 2: clean and copy backend/dist to frontend/dist/backend
    log.info(
      `🚚 copy backend/dist to frontend/dist/backend... ${NEST_DIST_TARGET_DIR}`
    );
    await removeDir(NEST_DIST_TARGET_DIR);
    await copyDir(path.join(NEST_SERVER_DIR, "dist"), NEST_DIST_TARGET_DIR);

    // Step 3: rename main.js -> main.cjs
    const oldMain = path.join(NEST_DIST_TARGET_DIR, "main.js");
    const newMain = path.join(NEST_DIST_TARGET_DIR, "main.cjs");
    log.info(`🔧 rename main.js -> main.cjs...`);
    await fs.rename(oldMain, newMain);

    // Step 4: build frontend
    log.info(`🛠️ building frontend...`);
    execSync("npm run build", { cwd: ELECTRON_DIR, stdio: "inherit" });

    // Step 5: move release folder to root directory
    log.info(`🚚 move release folder to root directory...`);
    await moveReleaseFolder();
    log.success("🎉 building completed!");
  } catch (error) {
    log.error(`❌ building failed: ${error.message || error}`);
    process.exit(1);
  }
}

main();
