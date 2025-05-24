/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬─┬ dist
     * │ │ └── index.html
     * │ │
     * │ ├─┬ dist-electron
     * │ │ ├── main.js
     * │ │ └── preload.js
     * │
     * ```
     */
    APP_ROOT: string;
    /** /dist/ or /public/ */
    VITE_PUBLIC: string;
  }
}

type ElectronAPI = {
  [K in keyof Electron.IPCChannelMap]: (
    ...args: Electron.IPCChannelMap[K]["args"]
  ) => Promise<Electron.IPCChannelMap[K]["return"]>;
};

// Used in Renderer process, expose in `preload.ts`
interface Window {
  electronAPI: ElectronAPI;
}
