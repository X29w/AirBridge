import { MainWindow } from "./window-instance/main-window";
import { ChildAWindow } from "./window-instance/settings-window";
import { AutoRegisterWindows } from "@main/decorators/window-auto-register";

/** window module */
@AutoRegisterWindows([MainWindow, ChildAWindow])
export class WindowModule {}
