import { Module } from "./decorators/ipc-module";
import { HelloIPC } from "./modules/hello.ipc";
import { WindowIPC } from "./modules/window.ipc";

@Module({
  imports: [HelloIPC, WindowIPC],
})
export class MainIpc {}
