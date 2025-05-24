import { exec } from "child_process";
import { ELECTRON_DIR, NEST_SERVER_DIR } from "../utils/constant.js";
import { log } from "../utils/log.js";

function runScript(command, cwd) {
  return new Promise((resolve, reject) => {
    log.info(`Running "${command}" in "${cwd}"...`);
    const proc = exec(command, { cwd });

    proc.stdout.on("data", (data) => {
      log.default(data.toString());
    });

    proc.stderr.on("data", (data) => {
      console.error(data.toString());
    });

    proc.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });
  });
}

async function main() {
  try {
    log.info("🚀 start frontend and backend in development mode...");

    // start frontend and backend in development mode in parallel
    await Promise.all([
      runScript("npm run dev", ELECTRON_DIR),
      runScript("npm run start:dev", NEST_SERVER_DIR),
    ]);

    log.success("✅ All services started successfully.!");
  } catch (err) {
    log.error(`❌ Failed to start services: ${err.message}`);
    process.exit(1);
  }
}

main();
