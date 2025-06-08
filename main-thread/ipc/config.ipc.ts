import { webContents, type IpcMainInvokeEvent } from "electron";
import { IPCHandle } from "../decorators/ipc-handle";
import os from "os";

/** config ipc */
export class ConfigIPC {
  @IPCHandle("change-language")
  changeLanguage(_e: IpcMainInvokeEvent, language: Electron.CustomLanguage) {
    webContents.getAllWebContents().forEach((content) => {
      content.send("change-language", language);
    });
  }

  @IPCHandle("local-ip")
  getLocalIP(_e: IpcMainInvokeEvent) {
    const networkInterfaces = os.networkInterfaces();
    let localIP = "";
    for (const interfaceName in networkInterfaces) {
      const iface = networkInterfaces[interfaceName];
      if (iface) {
        for (const alias of iface) {
          if (alias.family === "IPv4" && !alias.internal) {
            localIP = alias.address;
            break;
          }
        }
      }
    }
    return localIP;
  }
}
