import { ipcRenderer, contextBridge } from "electron";
const api = {
  "say-hello": (name: string) => ipcRenderer.invoke("say-hello", name),
  "create-window": () => ipcRenderer.invoke("create-window"),
};
contextBridge.exposeInMainWorld("electronAPI", api);
