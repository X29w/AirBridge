import { registerAllIPCHandlers } from "./ipc-handle";

export function Module(options: { imports: any[] }): ClassDecorator {
  return function (target: any) {
    // new classes in the decorator
    for (const clazz of options.imports) {
      new clazz();
    }

    // register all ipc handlers
    registerAllIPCHandlers();
  };
}
