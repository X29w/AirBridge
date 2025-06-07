// 提取 invoke 类型
type InvokeChannels<T extends Record<string, any>> = {
  [K in keyof T as T[K] extends { args: any[]; return: any } ? K : never]: (
    ...args: T[K]["args"]
  ) => Promise<T[K]["return"]>;
};

// 提取 on 类型
type OnChannels<T extends Record<string, any>> = {
  [K in keyof T as T[K] extends { listener: (...args: any) => any }
    ? K
    : never]: (callback: T[K]["listener"]) => void;
};

// 合并
type ElectronAPI = InvokeChannels<Electron.IPCChannelMap> &
  OnChannels<Electron.IPCChannelMap>;

// Used in Renderer process, expose in `preload.ts`
interface Window {
  electronAPI: ElectronAPI;
}
