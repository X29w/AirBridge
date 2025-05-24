declare namespace Electron {
  export type IPCChannelMap = {
    "say-hello": { args: [name: string]; return: string };
    "create-window": { args: []; return: string };
  };
}
