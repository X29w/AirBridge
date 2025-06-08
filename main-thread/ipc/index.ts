import { AutoRegisterIPC } from "../decorators/ipc-auto-register";
import { ConfigIPC } from "./config.ipc";
import { WindowIPC } from "./window.ipc";

/** main ipc */
@AutoRegisterIPC([ConfigIPC, WindowIPC])
export class MainIpc {}
