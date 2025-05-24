import path from "path";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
export const APP_ROOT = path.resolve(__dirname, "../..");
export const ELECTRON_DIR = path.resolve(APP_ROOT, "front-end");
export const NEST_SERVER_DIR = path.resolve(APP_ROOT, "back-end");
export const NEST_DIST_TARGET_DIR = path.resolve(ELECTRON_DIR, "dist-nest");
export const ELECTRON_APP_RELEASE = path.resolve(ELECTRON_DIR, "release");
export const APP_RELEASE = path.resolve(APP_ROOT, "release");
