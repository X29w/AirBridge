import { exec } from "child_process";
import { promisify } from "util";
import { __dirname, ELECTRON_DIR, NEST_SERVER_DIR } from "../utils/constant.js";
import { log } from "../utils/log.js";

const execAsync = promisify(exec);

/** start electron thread */
const installElectronDependencies = async () => {
  try {
    log.info("🚀 install electron dependencies...");
    const result = await execAsync("npx pnpm install", { cwd: ELECTRON_DIR });
    log.default(result.stdout);
    log.success("✅ install electron dependencies completed!");
  } catch (error) {
    log.error(`❌ install failed! ${error.message || error}`);
    process.exit(1);
  }
};

const electronFix = async () => {
  try {
    log.info("🚀 fix electron...");
    const result = await execAsync("npx pnpm run electron-fix", {
      cwd: ELECTRON_DIR,
    });
    log.default(result.stdout);
    log.success("✅ electron fixed!");
  } catch (error) {
    log.error(`❌ fix failed! ${error.message || error}`);
  }
};

/** start nestjs server */
const installNestDependencies = async () => {
  try {
    log.info("🚀 install nestjs dependencies...");
    const result = await execAsync("npx pnpm install", {
      cwd: NEST_SERVER_DIR,
    });
    log.default(result.stdout);
    log.success("✅ install nestjs dependencies completed!");
  } catch (error) {
    log.error(`❌ install failed! ${error.message || error}`);
  }
};

async function main() {
  try {
    await installElectronDependencies();
    await electronFix();
    await installNestDependencies();
    log.success("✅ all install tasks completed!");
  } catch (err) {
    log.error(`❌ install failed! ${err.message || err}`);
    process.exit(1);
  }
}

main();
