import { IPCHandle } from "@main/decorators/ipc-handle";
import { WindowManager } from "@main/windows/window-manager";
import { webContents, type IpcMainInvokeEvent } from "electron";

/** window ipc */
export class WindowIPC {
  @IPCHandle("create-window")
  createWindow(_e: IpcMainInvokeEvent, name: Electron.WindowName) {
    if (!WindowManager.hasWindow(name)) {
      WindowManager.createWindow(name);
    }
  }

  @IPCHandle("close-window")
  closeWindow(_e: IpcMainInvokeEvent, name: Electron.WindowName) {
    const window = WindowManager.getWindow(name);
    if (window) {
      window.close();
    }
  }

  @IPCHandle("minimize-window")
  minimizeWindow(_e: IpcMainInvokeEvent, name: Electron.WindowName) {
    const window = WindowManager.getWindow(name);
    if (window) {
      window.minimize();
    }
  }

  @IPCHandle("maximize-window")
  maximizeWindow(_e: IpcMainInvokeEvent, name: Electron.WindowName) {
    const window = WindowManager.getWindow(name);
    if (window) {
      if (window.isMaximized()) {
        window.unmaximize();
      } else {
        window.maximize();
      }
    }
  }


}
