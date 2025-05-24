import { IPCHandle } from "@main-thread/decorators/ipc-handle";
import { BrowserWindow } from "electron";

export class WindowIPC {
  @IPCHandle("create-window")
  createWindow() {
    console.log("Creating window...");
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    win.loadURL("http://localhost:3000");

    return "Window created";
  }
}
