import { ipcRenderer, contextBridge } from "electron";

const api: ElectronAPI = {
  "say-hello": (name: string) => ipcRenderer.invoke("say-hello", name),
  "create-window": (name: Electron.WindowName) =>
    ipcRenderer.invoke("create-window", name),
  "close-window": (name: Electron.WindowName) =>
    ipcRenderer.invoke("close-window", name),
  "minimize-window": (name: Electron.WindowName) =>
    ipcRenderer.invoke("minimize-window", name),
  "maximize-window": (name: Electron.WindowName) =>
    ipcRenderer.invoke("maximize-window", name),
  "change-language": (language: Electron.CustomLanguage) =>
    ipcRenderer.invoke("change-language", language),
  "local-ip": () => ipcRenderer.invoke("local-ip"),
  "on-language-change": (callback: (lang: Electron.CustomLanguage) => void) => {
    ipcRenderer.on("change-language", (_event, lang) => {
      callback(lang);
    });
  },
};

contextBridge.exposeInMainWorld("electronAPI", api);
